<template>
    <AkademikLayout>
        <ModuleHeader>
            <template v-slot:icon>
                mdi-format-columns
            </template>
            <template v-slot:name>
                KARTUS HASIL STUDI (KHS)
            </template>
            <template v-slot:subtitle v-if="$store.getters['uiadmin/getDefaultDashboard']!='mahasiswa'">
                TAHUN AKADEMIK {{tahun_akademik}} SEMESTER {{$store.getters['uiadmin/getNamaSemester'](semester_akademik)}} - {{nama_prodi}}
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
                    Halaman untuk melihat daftar nilai matakuliah per tahun akademik, dan semester yang telah dilakukan.
                </v-alert>
            </template>
        </ModuleHeader>
        <template v-slot:filtersidebar v-if="$store.getters['uiadmin/getDefaultDashboard']!='mahasiswa'">
            <Filter6 v-on:changeTahunAkademik="changeTahunAkademik" v-on:changeSemesterAkademik="changeSemesterAkademik" v-on:changeProdi="changeProdi" ref="filter6" />	
        </template>
        <v-container fluid>                         
            <v-row class="mb-4" no-gutters>
                <v-col cols="12">
                    <v-card>
                        <v-card-text>
                            <v-text-field
                                v-model="search"
                                append-icon="mdi-database-search"
                                label="Search"
                                single-line
                                hide-details
                            ></v-text-field>
                            <v-switch
                                v-model="filter_ignore"
                                label="ABAIKAN FILTER"
                                class="font-weight-bold">
                            </v-switch>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-row class="mb-4" no-gutters>
                <v-col cols="12">
                    <v-data-table
                        :headers="headers"
                        :items="datatable"
                        :search="search"
                        item-key="id"                        
                        show-expand
                        :expanded.sync="expanded"
                        :single-expand="true"                        
                        @click:row="dataTableRowClicked"
                        class="elevation-1"
                        :loading="datatableLoading"
                        loading-text="Loading... Please wait">
                        <template v-slot:top>
                            <v-toolbar flat color="white">
                                <v-toolbar-title>DAFTAR KHS</v-toolbar-title>
                                <v-divider
                                    class="mx-4"
                                    inset
                                    vertical
                                ></v-divider>
                                <v-spacer></v-spacer>                                
                            </v-toolbar>
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
                        </template>
                        <template v-slot:item.idkelas="{item}">
                            {{$store.getters['uiadmin/getNamaKelas'](item.idkelas)}}
                        </template>
                        <template v-slot:item.actions="{ item }">
                            <v-btn
                                small
                                icon
                                :loading="btnLoading"
                                :disabled="btnLoading"
                                @click.stop="printpdf(item)">
                                <v-icon>
                                    mdi-printer
                                </v-icon>
                            </v-btn>   
                            <v-btn
                                small
                                icon
                                @click.stop="$router.push('/akademik/nilai/khs/'+item.id)">
                                <v-icon>
                                    mdi-eye
                                </v-icon>
                            </v-btn>                               
                        </template>           
                        <template v-slot:expanded-item="{ headers, item }">
                            <td :colspan="headers.length" class="text-center">
                                <v-col cols="12">                          
                                    <strong>krs_id:</strong>{{ item.id }}          
                                    <strong>created_at:</strong>{{ $date(item.created_at).format('DD/MM/YYYY HH:mm') }}
                                    <strong>updated_at:</strong>{{ $date(item.updated_at).format('DD/MM/YYYY HH:mm') }}
                                </v-col>                                
                            </td>
                        </template>
                        <template v-slot:no-data>
                            Data belum tersedia
                        </template>   
                    </v-data-table>
                </v-col>
            </v-row>            
        </v-container>
    </AkademikLayout>
</template>
<script>
import AkademikLayout from '@/views/layouts/AkademikLayout';
import ModuleHeader from '@/components/ModuleHeader';
import Filter6 from '@/components/sidebar/FilterMode6';
export default {
    name: 'NilaiKHS',
    created () {
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
                text:'KHS',
                disabled:true,
                href:'#'
            }
        ];  
        if (this.$store.getters['uiadmin/getDefaultDashboard']=='mahasiswa')
        {
            this.initializeMhs();
        }   
        else
        {
            let prodi_id=this.$store.getters['uiadmin/getProdiID'];
            this.prodi_id=prodi_id;
            this.nama_prodi=this.$store.getters['uiadmin/getProdiName'](prodi_id);
            this.tahun_akademik=this.$store.getters['uiadmin/getTahunAkademik'];                
            this.semester_akademik=this.$store.getters['uiadmin/getSemesterAkademik'];                            
        }     
    },  
    mounted()
    {
        if (this.$store.getters['uiadmin/getDefaultDashboard']!='mahasiswa')        
        {            
            this.initialize();                   
        }
    },
    data: () => ({ 
        firstloading:true,
        prodi_id:null,
        nama_prodi:null,
        daftar_ta:[],
        tahun_akademik:null,
        semester_akademik:null,
        filter_ignore:false, 
        awaiting_search:false,
        
        btnLoading:false,
        btnLoadingTable:false,
        datatableLoading:false,
        expanded:[],
        datatable:[],      
        headers: [
            { text: 'NIM', value: 'nim', sortable:true,width:100  },   
            { text: 'NAMA', value: 'nama_mhs', sortable:true,width:250  },   
            { text: 'ANGK.', value: 'tahun_masuk', sortable:true, width:100  },       
            { text: 'JUMLAH MATKUL', value: 'jumlah_matkul', sortable:true, width:100  },       
            { text: 'JUMLAH SKS', value: 'jumlah_sks', sortable:true, width:100 },       
            { text: 'IPS', value: 'ips',sortable:true, width:50},                   
            { text: 'IPK', value: 'ipk',sortable:true, width:50},                   
            { text: 'TA.SMT', value: 'tasmt',sortable:true, width:100 },                               
            { text: 'AKSI', value: 'actions', sortable: false,width:100 },
        ],  
        search:'', 

        dialogprintpdf:false,
        file_pdf:null
    }),
    methods: {
        changeTahunAkademik (tahun)
        {
            this.tahun_akademik=tahun;
        },
        changeSemesterAkademik (semester)
        {
            this.semester_akademik=semester;
        },
        changeProdi(id)
        {
            this.prodi_id = id;
        },
        async initializeMhs ()
        {
            this.datatableLoading=true;
            await this.$ajax.post('/akademik/nilai/khs',
            {
                
            },
            {
                headers: {
                    Authorization:this.$store.getters['auth/Token']
                }
            }).then(({ data }) => {                                           
                this.datatable = data.daftar_khs;
                this.datatableLoading=false;
            }).catch(() => {
                this.datatableLoading=false;
            });              
        },
        initialize:async function () 
        {
            this.datatableLoading=true;
            await this.$ajax.post('/akademik/nilai/khs',
            {
                prodi_id:this.prodi_id,
                ta:this.tahun_akademik,
                semester_akademik:this.semester_akademik,
            },
            {
                headers: {
                    Authorization:this.$store.getters['auth/Token']
                }
            }).then(({ data }) => {                                        
                this.datatable = data.daftar_khs;
                this.datatableLoading=false;
                this.firstloading=false;     
                this.$refs.filter6.setFirstTimeLoading(this.firstloading); 
            }).catch(() => {
                this.datatableLoading=false;
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
        async printpdf(item)
        {
            this.btnLoading=true;
            await this.$ajax.get('/akademik/nilai/khs/printpdf/'+item.id,                
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
    },
    watch:{
        tahun_akademik()
        {
            if (!this.firstloading)
            {
                this.initialize();
            }            
        },
        semester_akademik()
        {
            if (!this.firstloading)
            {
                this.initialize();
            }            
        },
        prodi_id(val)
        {
            if (!this.firstloading)
            {
                this.nama_prodi=this.$store.getters['uiadmin/getProdiName'](val);
                this.initialize();
            }            
        },
        search ()
        {
            if (!this.awaiting_search) 
            {
                setTimeout(async () => {
                    if (this.search.length > 0 && this.filter_ignore)
                    {
                        this.datatableLoading=true;            
                        await this.$ajax.post('/akademik/nilai/khs/',            
                        {
                            prodi_id:this.prodi_id,
                            ta:this.tahun_akademik,
                            semester_akademik:this.semester_akademik,
                            search:this.search
                        },
                        {
                            headers: {
                                Authorization:this.$store.getters['auth/Token']
                            }
                        }).then(({ data }) => {               
                            this.datatable = data.daftar_khs;
                            this.datatableLoading=false;
                        });                     
                    }
                    this.awaiting_search = false;
                }, 1000); // 1 sec delay
            }
            this.awaiting_search = true;
        }
    },
    components: {
        AkademikLayout,
        ModuleHeader,    
        Filter6               
    },
}
</script>