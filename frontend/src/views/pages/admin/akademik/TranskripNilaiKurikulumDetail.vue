<template>
    <AkademikLayout :showrightsidebar="false" :temporaryleftsidebar="true">
        <ModuleHeader>
            <template v-slot:icon>
                mdi-monitor-dashboard
            </template>
            <template v-slot:name>
                TRANSKRIP NILAI KURIKULUM 
            </template>
            <template v-slot:subtitle>
                TAHUN PENDAFTARAN {{tahun_pendaftaran}} - {{nama_prodi}}
            </template>
            <template v-slot:breadcrumbs>
                <v-breadcrumbs :items="breadcrumbs" class="pa-0">
                    <template v-slot:divider>
                        <v-icon>mdi-chevron-right</v-icon>
                    </template>
                </v-breadcrumbs>
            </template>
            <template v-slot:desc>
                <v-alert                                        
                    color="cyan"
                    border="left"                    
                    colored-border
                    type="info"
                    >
                    Halaman berisi daftar transkrip nilai berdasarkan kurikulum. 
                </v-alert>
            </template>
        </ModuleHeader>        
        <v-container fluid>      
            <v-row> 
                <v-col cols="12">                  
                    <ProfilMahasiswa :datamhs="data_mhs" url="/akademik/nilai/transkripkurikulum" />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">           
                    <v-card>
                        <v-card-title>
                            DAFTAR NILAI TRANSKRIP
                            <v-spacer></v-spacer>                               
                            <v-tooltip bottom>             
                                <template v-slot:activator="{ on, attrs }">                                             
                                    <v-btn 
                                        v-bind="attrs"
                                        v-on="on"
                                        color="green" 
                                        icon 
                                        outlined 
                                        small 
                                        class="ma-2" 
                                        @click.stop="printpdf1"
                                        :loading="btnLoading"
                                        :disabled="btnLoading || !data_mhs.hasOwnProperty('user_id')">
                                        <v-icon>mdi-printer</v-icon>
                                    </v-btn>     
                                </template>
                                <span>Cetak Transkrip Satu Kolom</span>                                   
                            </v-tooltip>                     
                            <v-tooltip bottom>             
                                <template v-slot:activator="{ on, attrs }">                                             
                                    <v-btn 
                                        v-bind="attrs"
                                        v-on="on"
                                        color="primary" 
                                        icon 
                                        outlined 
                                        small 
                                        class="ma-2" 
                                        @click.stop="printpdf2"
                                        :loading="btnLoading"
                                        :disabled="btnLoading || !data_mhs.hasOwnProperty('user_id')">
                                        <v-icon>mdi-printer</v-icon>
                                    </v-btn>     
                                </template>
                                <span>Cetak Transkrip Dua Kolom</span>                                   
                            </v-tooltip>                     
                        </v-card-title>                        
                        <v-data-table        
                            dense                        
                            :headers="headers"
                            :items="datatable"                                
                            item-key="id"                                                        
                            :disable-pagination="true"
                            :hide-default-footer="true"                                                                
                            :loading="datatableLoading"
                            loading-text="Loading... Please wait"> 
                            <template v-slot:item.actions="{ item }">
                                <v-tooltip bottom>             
                                    <template v-slot:activator="{ on, attrs }">                                             
                                        <v-btn 
                                            v-bind="attrs"
                                            v-on="on"
                                            color="primary" 
                                            icon 
                                            outlined 
                                            x-small 
                                            class="ma-2" 
                                            @click.stop="viewItem(item)"
                                            :loading="btnLoading"
                                            :disabled="btnLoading">
                                            <v-icon>mdi-history</v-icon>
                                        </v-btn>     
                                    </template>
                                    <span>Histori Nilai</span>                                   
                                </v-tooltip>                                     
                            </template>                                                                          
                            <template v-slot:body.append v-if="datatable.length > 0">                                   
                                <tr class="grey lighten-4 font-weight-black">
                                    <td class="text-right" colspan="3">JUMLAH</td>
                                    <td></td> 
                                    <td></td>
                                    <td>{{jumlahMatkul}}</td>
                                    <td>{{totalAM}}</td>
                                    <td>{{totalSKS}}</td>
                                    <td>{{totalM}}</td> 
                                    <td></td>                                         
                                </tr>
                                <tr class="grey lighten-4 font-weight-black">
                                    <td class="text-right" colspan="3">IPK SEMENTARA</td>
                                    <td>{{ipk}}</td> 
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>                                        
                                    <td></td>                                        
                                </tr>
                            </template>   
                            <template v-slot:no-data>
                                Data matakuliah belum tersedia silahkan tambah
                            </template>
                        </v-data-table>                        
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-dialog v-model="dialogprintpdf" max-width="500px" persistent>                
            <v-card>
                <v-card-title>
                    <span class="headline">Print to PDF</span>
                </v-card-title>
                <v-card-text>
                    <v-btn
                        color="green"
                        text
                        :href="$api.url+'/'+file_pdf">                            
                        Download
                    </v-btn>                           
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click.stop="closedialogprintpdf">CLOSE</v-btn>                            
                </v-card-actions>
            </v-card>            
        </v-dialog>
        <v-dialog v-model="dialoghistory" max-width="750px" persistent>                
            <v-card>
                <v-card-title>
                    <span class="headline">Histori Nilai Matakuliah</span>
                </v-card-title>
                <v-card-text>
                    <v-row no-gutters>
                        <v-col xs="12" sm="6" md="6">
                            <v-card flat>
                                <v-card-title>KODE MATAKULIAH :</v-card-title>
                                <v-card-subtitle>
                                    {{data_matkul.kmatkul}}
                                </v-card-subtitle>
                            </v-card>
                        </v-col>
                        <v-responsive width="100%" v-if="$vuetify.breakpoint.xsOnly"/>
                        <v-col xs="12" sm="6" md="6">
                            <v-card flat>
                                <v-card-title>NAMA MATAKULIAH :</v-card-title>
                                <v-card-subtitle>
                                    {{data_matkul.nmatkul}}
                                </v-card-subtitle>
                            </v-card>
                        </v-col>
                        <v-responsive width="100%" v-if="$vuetify.breakpoint.xsOnly"/>
                    </v-row>
                    <v-data-table        
                        dense                        
                        :headers="history_headers"
                        :items="data_history"                                
                        item-key="krsmatkul_id"                                                        
                        :disable-pagination="true"
                        :hide-default-footer="true"                                                                
                        :loading="datatableLoading"
                        show-expand
                        :expanded.sync="expanded"
                        :single-expand="true"
                        @click:row="dataTableRowClicked"
                        loading-text="Loading... Please wait">                         
                        <template v-slot:expanded-item="{ headers, item }">
                            <td :colspan="headers.length" class="text-center">
                                <v-col cols="12">
                                    <strong>ID:</strong>{{ item.krsmatkul_id }}
                                    <strong>created_at:</strong>{{ $date(item.created_at).format('DD/MM/YYYY HH:mm') }}
                                    <strong>updated_at:</strong>{{ $date(item.updated_at).format('DD/MM/YYYY HH:mm') }}
                                </v-col>                                
                            </td>
                        </template>
                    </v-data-table>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click.stop="closedialoghistory">CLOSE</v-btn>                            
                </v-card-actions>
            </v-card>            
        </v-dialog>
    </AkademikLayout>
</template>
<script>
import AkademikLayout from '@/views/layouts/AkademikLayout';
import ModuleHeader from '@/components/ModuleHeader';
import ProfilMahasiswa from '@/components/ProfilMahasiswaLama';

export default {
    name: 'TranskripNilaiKurikulumDetail',
    created () {
        this.user_id=this.$route.params.user_id;        
        this.breadcrumbs = [
            {
                text:'HOME',
                disabled:false,
                href:'/dashboard/'+this.$store.getters['auth/AccessToken']
            },
            {
                text:'AKADEMIK',
                disabled:false,
                href:'/akademik'
            },
            {
                text:'NILAI',
                disabled:false,
                href:'#'
            },
            {
                text:'TRANSKRIP KURIKULUM',
                disabled:false,
                href:'/akademik/nilai/transkripkurikulum'
            },
            {
                text:'DETAIL',
                disabled:true,
                href:'#'
            }
        ];
        let prodi_id=this.$store.getters['uiadmin/getProdiID'];
        this.prodi_id=prodi_id;
        this.nama_prodi=this.$store.getters['uiadmin/getProdiName'](prodi_id);
        this.tahun_pendaftaran=this.$store.getters['uiadmin/getTahunPendaftaran'];                
        this.initialize()
    },  
    data: () => ({ 
        user_id:null,
        firstloading:true,
        prodi_id:null,
        nama_prodi:null,
        tahun_pendaftaran:null,

        btnLoading:false,
        btnLoadingTable:false,
        datatableLoading:false,        
        datatable:[],      
        headers: [            
            { text: 'NO', value: 'no', sortable:true,width:50  },       
            { text: 'MATAKULIAH', value: 'nmatkul',sortable:true,width:350 },                   
            { text: 'KODE', value: 'kmatkul',sortable:true,width:120, },                   
            { text: 'SMT', value: 'semester',sortable:true,width:80, },                   
            { text: 'KLP', value: 'group_alias',sortable:true,width:100, },                   
            { text: 'HM', value: 'HM',sortable:false,width:100, },                   
            { text: 'AM', value: 'AM',sortable:false,width:100, },                   
            { text: 'K', value: 'sks',sortable:true,width:100, },                   
            { text: 'M', value: 'M', sortable: false,width:100 },
            { text: 'AKSI', value: 'actions', sortable: false,width:50 },
        ],  
        search:'', 

        data_mhs:{},
        jumlahMatkul:0, 
        totalSKS:0, 
        totalM:0, 
        totalAM:0, 
        ipk:0.00, 

        //history
        data_matkul:{},
        data_history:[],
        expanded:[],
        history_headers: [                                    
            { text: 'NILAI HURUF', value: 'n_kual',sortable:true,width:80, },                               
            { text: 'NILAI AKHIR', value: 'n_kuan',sortable:false,width:100, },                   
            { text: 'NILAI MUTU', value: 'n_mutu',sortable:true,width:100, },                   
            { text: 'TA.SMT', value: 'tasmt',sortable:false,width:100, },                   
            { text: 'TA.MATKUL', value: 'ta_matkul',sortable:false,width:100, },                               
            { text: 'DI INPUT OLEH', value: 'username',sortable:false,width:100, },                               
        ],  

        dialoghistory:false,
        dialogprintpdf:false,
        file_pdf:null
    }),
    methods: {
        changeTahunPendaftaran(tahun)
        {
            this.tahun_pendaftaran = tahun;
        },
        changeProdi(id)
        {
            this.prodi_id = id;
        },
        initialize:async function () 
        {
            this.datatableLoading=true;
            await this.$ajax.get('/akademik/nilai/transkripkurikulum/'+this.user_id,           
            {
                headers: {
                    Authorization:this.$store.getters['auth/Token']
                }
            }).then(({ data }) => {                              
                this.data_mhs=data.mahasiswa;
                this.jumlahMatkul=data.jumlah_matkul;
                this.totalSKS=data.jumlah_sks;
                this.totalM=data.jumlah_m;
                this.totalAM=data.jumlah_am;
                this.ipk=data.ipk;

                this.datatable=data.nilai_matakuliah;
                this.datatableLoading=false;
            }).catch(() => {
                this.datatableLoading=false;
            });  
            this.firstloading=false;                        
        },
        async viewItem(item)
        {
            this.btnLoading=true;
            await this.$ajax.post('/akademik/nilai/transkripkurikulum/' + item.id + '/history',                
                {
                    user_id:this.data_mhs.user_id,
                },
                {
                    headers: {
                        Authorization:this.$store.getters['auth/Token']
                    },
                    
                }
            ).then(({ data }) => {                              
                this.data_matkul=data.matakuliah;
                this.data_history=data.history;
                this.dialoghistory=true;
                this.btnLoading = false;
            }).catch(() => {
                this.btnLoading = false;
            });   
        },
        dataTableRowClicked(item)
        {
            if ( item === this.expanded[0])
            {
                this.expanded=[];                
            }
            else
            {
                this.expanded=[item];
            }               
        },
        async printpdf1()
        {
            this.btnLoading=true;
            await this.$ajax.get('/akademik/nilai/transkripkurikulum/printpdf1/'+this.data_mhs.user_id,                
                {
                    headers: {
                        Authorization:this.$store.getters['auth/Token']
                    },
                    
                }
            ).then(({ data }) => {                              
                this.file_pdf=data.pdf_file;
                this.dialogprintpdf=true;
                this.btnLoading = false;
            }).catch(() => {
                this.btnLoading = false;
            });                 
        },
        async printpdf2()
        {
            this.btnLoading=true;
            await this.$ajax.get('/akademik/nilai/transkripkurikulum/printpdf2/'+this.data_mhs.user_id,                
                {
                    headers: {
                        Authorization:this.$store.getters['auth/Token']
                    },
                    
                }
            ).then(({ data }) => {                              
                this.file_pdf=data.pdf_file;
                this.dialogprintpdf=true;
                this.btnLoading = false;
            }).catch(() => {
                this.btnLoading = false;
            });                 
        },
        closedialogprintpdf () {                  
            setTimeout(() => {
                this.file_pdf=null;
                this.dialogprintpdf = false;      
                }, 300
            );
        }, 
        closedialoghistory () {                  
            setTimeout(() => {
                this.data_matkul={};
                this.data_history=[];
                this.dialoghistory = false;      
                }, 300
            );
        }, 
    },
    components: {
        AkademikLayout,
        ModuleHeader,  
        ProfilMahasiswa  
    },
}
</script>