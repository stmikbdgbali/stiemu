<template>
    <SPMBLayout>
        <ModuleHeader>
            <template v-slot:icon>
                mdi-head-question-outline
            </template>
            <template v-slot:name>
                SOAL PMB
            </template>
            <template v-slot:subtitle>
                TAHUN PENDAFTARAN {{tahun_pendaftaran}} - {{nama_semester_pendaftaran}}
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
                    Berisi Soal PMB yang dikelompokan berdasarkan tahun akademik dan semester.
                </v-alert>
            </template>
        </ModuleHeader>   
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
                        sort-by="name"
                        show-expand
                        :expanded.sync="expanded"
                        :single-expand="true"
                        @click:row="dataTableRowClicked"
                        class="elevation-1"
                        :loading="datatableLoading"
                        loading-text="Loading... Please wait">

                        <template v-slot:top>
                            <v-toolbar flat color="white">
                                <v-toolbar-title>DAFTAR SOAL PMB</v-toolbar-title>
                                <v-divider
                                    class="mx-4"
                                    inset
                                    vertical
                                ></v-divider>
                                <v-spacer></v-spacer>
                                <v-dialog v-model="dialogfrm" max-width="700px" persistent>
                                    <template v-slot:activator="{ on }">
                                        <v-btn color="primary" icon outlined small class="ma-2" v-on="on">
                                            <v-icon>mdi-plus</v-icon>
                                        </v-btn>                                        
                                    </template>
                                    <v-form ref="frmdata" v-model="form_valid" lazy-validation>
                                        <v-card>
                                            <v-card-title>
                                                <span class="headline">{{ formTitle }}</span>
                                            </v-card-title>
                                            <v-card-text>  
                                                <v-alert 
                                                    class="warning">
                                                    SOAL mohon jangan diberi nomor soal.
                                                </v-alert>
                                                <v-textarea 
                                                    v-model="formdata.soal" 
                                                    label="SOAL" 
                                                    :rules="rule_soal"
                                                    type="text"
                                                    outlined />                                                
                                                <v-divider class="mt-2"/>
                                                <h3 class="headline mt-2">Jawaban Ke-1:</h3>  
                                                <v-text-field
                                                    label="ISI JAWABAN"    
                                                    v-model="formdata.jawaban1"    
                                                    :rules="rule_jawaban"
                                                    outlined
                                                />                                                
                                                <v-divider class="mt-2"/>
                                                <h3 class="headline mt-2">Jawaban Ke-2:</h3>  
                                                <v-text-field
                                                    label="ISI JAWABAN"    
                                                    v-model="formdata.jawaban2"    
                                                    :rules="rule_jawaban"
                                                    outlined
                                                />                                                
                                                <v-divider class="mt-2"/>
                                                <h3 class="headline mt-2">Jawaban Ke-3:</h3>  
                                                <v-text-field
                                                    label="ISI JAWABAN"    
                                                    v-model="formdata.jawaban3"    
                                                    :rules="rule_jawaban"
                                                    outlined
                                                />                                                
                                                <v-divider class="mt-2"/>
                                                <h3 class="headline mt-2">Jawaban Ke-4:</h3>  
                                                <v-text-field
                                                    label="ISI JAWABAN"    
                                                    v-model="formdata.jawaban4"    
                                                    :rules="rule_jawaban"
                                                    outlined
                                                />                                                
                                                <v-divider class="mt-2"/>
                                                <h3 class="headline mt-2 blue--text lighten-4">Jawaban Benar:</h3>  
                                                <v-select
                                                    v-model="formdata.jawaban_benar"
                                                    :items="daftar_jawaban"    
                                                    item-value="id"
                                                    item-text="text"                                                
                                                    label="JAWABAN BENAR"
                                                    outlined/>    
                                            </v-card-text>
                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn color="blue darken-1" text @click.stop="closedialogfrm">BATAL</v-btn>
                                                <v-btn 
                                                    color="blue darken-1" 
                                                    text 
                                                    @click.stop="save" 
                                                    :loading="btnLoading"
                                                    :disabled="!form_valid||btnLoading">
                                                        SIMPAN
                                                </v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-form>
                                </v-dialog>
                                <v-dialog v-model="dialogeditfrm" max-width="700px" persistent>
                                    <v-form ref="frmdata" v-model="form_valid" lazy-validation>
                                        <v-card>
                                            <v-card-title>
                                                <span class="headline">{{ formTitle }}</span>
                                            </v-card-title>
                                            <v-card-text>    
                                                <v-alert 
                                                    class="warning">
                                                    SOAL mohon jangan diberi nomor soal.
                                                </v-alert>
                                                <v-textarea 
                                                    v-model="formdata.soal" 
                                                    label="SOAL" 
                                                    :rules="rule_soal"
                                                    type="text"
                                                    outlined />                                                
                                                <v-divider class="mt-2"/>
                                                <v-radio-group v-model="formdata.jawaban_benar">
                                                    <v-data-table                                                        
                                                        :headers="headers_detail"
                                                        :items="daftar_soal_jawaban"
                                                        :search="search"
                                                        item-key="id"
                                                        sort-by="jawaban"  
                                                        hide-default-footer                                                      
                                                        class="elevation-1">
                                                        <template v-slot:item.status="{ item }">
                                                            <v-radio :value="item.id"></v-radio>
                                                        </template>
                                                    </v-data-table>
                                                </v-radio-group>
                                            </v-card-text>
                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn color="blue darken-1" text @click.stop="closedialogeditfrm">BATAL</v-btn>
                                                <v-btn 
                                                    color="blue darken-1" 
                                                    text 
                                                    @click.stop="save" 
                                                    :loading="btnLoading"
                                                    :disabled="!form_valid||btnLoading">
                                                        SIMPAN
                                                </v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-form>
                                </v-dialog>
                                <v-dialog v-model="dialogdetailitem" max-width="700px" persistent>
                                    <v-card>
                                        <v-card-title>
                                            <span class="headline">DETAIL DATA</span>
                                        </v-card-title>
                                        <v-card-text>
                                            <v-row no-gutters>
                                                <v-col xs="12" sm="6" md="6">
                                                    <v-card flat>
                                                        <v-card-title>ID :</v-card-title>
                                                        <v-card-subtitle>
                                                            {{formdata.id}}
                                                        </v-card-subtitle>
                                                    </v-card>
                                                </v-col>
                                                <v-responsive width="100%" v-if="$vuetify.breakpoint.xsOnly"/>
                                                <v-col xs="12" sm="6" md="6">
                                                    <v-card flat>
                                                        <v-card-title>CREATED :</v-card-title>
                                                        <v-card-subtitle>
                                                            {{$date(formdata.created_at).format('DD/MM/YYYY HH:mm')}}
                                                        </v-card-subtitle>
                                                    </v-card>
                                                </v-col>
                                                <v-responsive width="100%" v-if="$vuetify.breakpoint.xsOnly"/>
                                            </v-row>
                                            <v-row class="mb-4" no-gutters>
                                                <v-col xs="12" sm="6" md="6">
                                                    <v-card flat>
                                                        <v-card-title>SOAL :</v-card-title>
                                                        <v-card-subtitle>
                                                            {{formdata.soal}}
                                                        </v-card-subtitle>
                                                    </v-card>
                                                </v-col>
                                                <v-responsive width="100%" v-if="$vuetify.breakpoint.xsOnly"/>
                                                <v-col xs="12" sm="6" md="6">
                                                    <v-card flat>
                                                        <v-card-title>UPDATED :</v-card-title>
                                                        <v-card-subtitle>
                                                            {{$date(formdata.updated_at).format('DD/MM/YYYY HH:mm')}}
                                                        </v-card-subtitle>
                                                    </v-card>
                                                </v-col>
                                                <v-responsive width="100%" v-if="$vuetify.breakpoint.xsOnly"/>
                                            </v-row>
                                            <v-row class="mb-4" no-gutters> 
                                                <v-col col="12">
                                                    <v-data-table                                                        
                                                        :headers="headers_detail"
                                                        :items="daftar_soal_jawaban"
                                                        :search="search"
                                                        item-key="id"
                                                        sort-by="jawaban"  
                                                        hide-default-footer                                                      
                                                        class="elevation-1"
                                                    >
                                                        <template v-slot:item.status="{ item }">
                                                            <v-icon>    
                                                                {{item.status == 1 ?'mdi-check-bold':'mdi-close-thick'}}
                                                            </v-icon>
                                                        </template>
                                                    </v-data-table>
                                                </v-col>
                                            </v-row>
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="blue darken-1" text @click.stop="closedialogdetailitem">KELUAR</v-btn>
                                        </v-card-actions>
                                    </v-card>                                    
                                </v-dialog>
                            </v-toolbar>
                        </template>
                        <template v-slot:item.actions="{ item }">
                            <v-icon
                                small
                                class="mr-2"
                                @click.stop="viewItem(item)">
                                mdi-eye
                            </v-icon>
                            <v-icon
                                small
                                class="mr-2"
                                @click.stop="editItem(item)">
                                mdi-pencil
                            </v-icon>
                            <v-icon
                                small
                                :loading="btnLoading"
                                :disabled="btnLoading"
                                @click.stop="deleteItem(item)">
                                mdi-delete
                            </v-icon>
                        </template>
                        <template v-slot:expanded-item="{ headers, item }">
                            <td :colspan="headers.length" class="text-center">
                                <v-col cols="12">
                                    <strong>ID:</strong>{{ item.id }}
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
        <template v-slot:filtersidebar>
            <Filter19 v-on:changeTahunPendaftaran="changeTahunPendaftaran" v-on:changeSemesterPendaftaran="changeSemesterPendaftaran" ref="filter19" />	
        </template>
    </SPMBLayout>
</template>
<script>
import SPMBLayout from '@/views/layouts/SPMBLayout';
import ModuleHeader from '@/components/ModuleHeader';
import Filter19 from '@/components/sidebar/FilterMode19';
export default {
    name: 'SoalPMB',
    created () {
        this.breadcrumbs = [
            {
                text:'HOME',
                disabled:false,
                href:'/dashboard/'+this.$store.getters['auth/AccessToken']
            },
            {
                text:'SPMB',
                disabled:false,
                href:'/spmb'
            },
            {
                text:'SOAL PMB',
                disabled:true,
                href:'#'
            }
        ];
        this.tahun_pendaftaran=this.$store.getters['uiadmin/getTahunPendaftaran'];        
        this.semester_pendaftaran=this.$store.getters['uiadmin/getSemesterPendaftaran'];  
        this.nama_semester_pendaftaran=this.$store.getters['uiadmin/getNamaSemester'](this.semester_pendaftaran);  
        this.initialize()
    },  
    data: () => ({ 
        firstloading:true,
        prodi_id:null,        
        nama_prodi:null,
        tahun_pendaftaran:null,
        semester_pendaftaran:null,
        nama_semester_pendaftaran:null,

        btnLoading:false,
        datatableLoading:false,
        expanded:[],
        datatable:[],
        headers: [                                    
            { text: 'NAMA SOAL', value: 'soal'},   
            { text: 'AKSI', value: 'actions', sortable: false,width:100 },
        ],
        headers_detail:[
            { text: 'JAWABAN', value: 'jawaban', sortable: false,}, 
            { text: 'KET.', value: 'status', sortable: false,width:100 },
        ],
        search: "",

        //dialog
        dialogfrm:false,
        dialogdetailitem:false,
        dialogeditfrm:false,
        daftar_soal_jawaban:[],

        //form data   
        form_valid:true,    
        image_prev:null,      
        daftar_jawaban:[
            {
                id:1,
                text:'JAWABAN KE 1'
            },
            {
                id:2,
                text:'JAWABAN KE 2'
            },
            {
                id:3,
                text:'JAWABAN KE 3'
            },
            {
                id:4,
                text:'JAWABAN KE 4'
            },
        ],     
        formdata: {
            id:0,                        
            soal:'',  
            gambar:'',  
            jawaban1:'',                    
            jawaban2:'',                    
            jawaban3:'',                    
            jawaban4:'',                    
            jawaban_benar:'',                    
            created_at: '',           
            updated_at: '',           

        },
        formdefault: {
            id:0,           
            soal:'',    
            gambar:'',                      
            jawaban1:'',                    
            jawaban2:'',                    
            jawaban3:'',                    
            jawaban4:'',        
            jawaban_benar:'',                                
            created_at: '',           
            updated_at: '',       
        },
        editedIndex: -1,

        //form rules      
        rule_soal:[
            value => !!value || "Mohon untuk di isi soal !!!",              
        ], 
        rule_gambar:[            
            value =>  !value || value.size < 2000000 || 'File gambar harus kurang dari 2MB.'                
        ],
        rule_jawaban:[
            value => !!value || "Mohon isi jawaban dari soal ini",              
        ], 
        rule_jawaban_benar:[
            value => !!value || "Mohon pilih jawaban benar dari soal ini",              
        ], 
    }),
    methods: {
        changeTahunPendaftaran(tahun)
        {
            this.tahun_pendaftaran = tahun;
        },
        changeSemesterPendaftaran (semester)
        {
            this.semester_pendaftaran=semester;
        },
        initialize:async function () 
        {
            this.datatableLoading=true;
            await this.$ajax.post('/spmb/soalpmb',
            {
                tahun_pendaftaran:this.tahun_pendaftaran,
                semester_pendaftaran:this.semester_pendaftaran
            },
            {
                headers: {
                    Authorization:this.$store.getters['auth/Token']
                }
            }).then(({ data }) => {                        
                this.datatable = data.soal;
                this.datatableLoading=false;
            }).catch(() => {
                this.datatableLoading=false;
            }); 
            this.firstloading=false;   
            this.$refs.filter19.setFirstTimeLoading(this.firstloading);          
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
        viewItem:async function (item) {                          
            await this.$ajax.get('/spmb/soalpmb/'+item.id,{
                headers: {
                    Authorization:this.$store.getters['auth/Token']
                }
            }).then(({ data }) => {         
                this.formdata=item;      
                this.dialogdetailitem=true;              
                this.daftar_soal_jawaban=data.soal.jawaban;
            });                      
        },    
        editItem:async function (item) {                          
            await this.$ajax.get('/spmb/soalpmb/'+item.id,{
                headers: {
                    Authorization:this.$store.getters['auth/Token']
                }
            }).then(({ data }) => {          
                this.editedIndex = this.datatable.indexOf(item);
                this.formdata = Object.assign({}, item);
                this.dialogeditfrm = true;
                let jawaban_benar ='';
                data.soal.jawaban.forEach(element => {
                    if (element.status==1)
                    {
                        jawaban_benar=element.id;                        
                    }                     
                });    
                this.formdata.jawaban_benar=jawaban_benar;         
                this.daftar_soal_jawaban=data.soal.jawaban;
            });                      
        }, 
        previewImage (e)
        {
            if (typeof e === 'undefined')
            {
                this.image_prev=null;                
            }
            else
            {
                let reader = new FileReader();
                reader.readAsDataURL(e);
                reader.onload = img => {                    
                    this.image_prev=img.target.result;
                }                
            }          
        },   
        save: async function() {
            if (this.$refs.frmdata.validate())
            {
                this.btnLoading=true;
                if (this.editedIndex > -1) 
                {
                    await this.$ajax.post('/spmb/soalpmb/'+this.formdata.id,
                        {
                            '_method':'PUT',
                            soal:this.formdata.soal, 
                            jawaban_benar:this.formdata.jawaban_benar                      
                        },
                        {
                            headers: {
                                Authorization:this.$store.getters['auth/Token']
                            }
                        }
                    ).then(({ data }) => {   
                        Object.assign(this.datatable[this.editedIndex], data.soal);
                        this.closedialogeditfrm();
                        this.btnLoading = false;
                    }).catch(() => {
                        this.btnLoading = false;
                    });                 
                    
                } else {
                    await this.$ajax.post('/spmb/soalpmb/store',
                        {  
                            soal:this.formdata.soal,                            
                            gambar:'gambar',                            
                            jawaban1:this.formdata.jawaban1,                            
                            jawaban2:this.formdata.jawaban2,                            
                            jawaban3:this.formdata.jawaban3,                            
                            jawaban4:this.formdata.jawaban4,                            
                            jawaban_benar:this.formdata.jawaban_benar,                            
                            tahun_pendaftaran:this.tahun_pendaftaran,
                            semester_pendaftaran:this.semester_pendaftaran
                        },                
                        {
                            headers: {
                                Authorization:this.$store.getters['auth/Token']
                            }
                        }
                    ).then(({ data }) => {   
                        this.datatable.push(data.soal);
                        this.closedialogfrm();
                        this.btnLoading = false;
                    }).catch(() => {
                        this.btnLoading = false;
                    });
                }
            }
        },
        deleteItem(item) {           
            this.$root.$confirm.open('Delete', 'Apakah Anda ingin menghapus data dengan ID ' + item.id + ' ?', { color: 'red' }).then((confirm) => {
                if (confirm)
                {
                    this.btnLoading=true;
                    this.$ajax.post('/spmb/soalpmb/'+item.id,
                        {
                            _method: "DELETE",
                        },
                        {
                            headers: {
                                Authorization:this.$store.getters['auth/Token']
                            }
                        }
                    ).then(() => {   
                        const index = this.datatable.indexOf(item);
                        this.datatable.splice(index, 1);
                        this.btnLoading = false;
                    }).catch(() => {
                        this.btnLoading = false;
                    });
                }                
            });
        },
        closedialogdetailitem () {
            this.dialogdetailitem = false;          
            this.daftar_soal_jawaban=[];
            setTimeout(() => {
                this.formdata = Object.assign({}, this.formdefault)
                this.editedIndex = -1
                }, 300
            );
        },
        closedialogfrm () {
            this.dialogfrm = false;            
            setTimeout(() => {
                this.formdata = Object.assign({}, this.formdefault);
                this.$refs.frmdata.reset(); 
                this.editedIndex = -1
                }, 300
            );
        },
        closedialogeditfrm () {
            this.dialogeditfrm = false;            
            setTimeout(() => {
                this.formdata = Object.assign({}, this.formdefault);
                this.$refs.frmdata.reset(); 
                this.editedIndex = -1
                }, 300
            );
        },
    },
    computed: {
        gambarSoal:{
            get ()
            {   
                if (this.image_prev==null)
                {
                    return require('@/assets/no-image.png');
                }
                else
                {
                    return this.image_prev;
                }
            },
            set (val)
            {
                this.image_prev=val;
            }            
        },
        formTitle () {
            return this.editedIndex === -1 ? 'TAMBAH DATA' : 'UBAH DATA'
        },
    },
    watch:{
        tahun_pendaftaran()
        {
            if (!this.firstloading)
            {
                this.initialize();
            }            
        },
        semester_pendaftaran (val)
        {
            if (!this.firstloading)
            {
                this.nama_semester_pendaftaran=this.$store.getters['uiadmin/getNamaSemester'](val);                 
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
        }
    },
    components: {
        SPMBLayout,
        ModuleHeader,
        Filter19,        
    },

}
</script>