<template>
    <div>
        <v-system-bar app dark :class="this.$store.getters['uiadmin/getTheme']('V-SYSTEM-BAR-CSS-CLASS')">
            <strong>Hak Akses Sebagai :</strong> {{ROLE}}
		</v-system-bar>	
        <v-app-bar app>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>
            <v-toolbar-title class="headline clickable" @click.stop="$router.push('/dashboard/'+$store.getters['auth/AccessToken']).catch(err => {})">
				<span class="hidden-sm-and-down">{{APP_NAME}}</span>
			</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu 
                :close-on-content-click="true"
                origin="center center"
                transition="scale-transition"
                :offset-y="true"
                bottom 
                left>
                <template v-slot:activator="{on}">
                    <v-avatar size="30">
                        <v-img :src="photoUser" v-on="on" />
                    </v-avatar>                    
                </template>
                <v-list>
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-img :src="photoUser"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>					
                            <v-list-item-title class="title">
                                {{ATTRIBUTE_USER('username')}}
                            </v-list-item-title>
                            <v-list-item-subtitle>                                
                                [{{DEFAULT_ROLE}}]
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>                    
                    <v-divider/>
                    <v-list-item to="/system-users/profil">
                        <v-list-item-icon class="mr-2">
							<v-icon>mdi-account</v-icon>
						</v-list-item-icon>
                        <v-list-item-title>Profil</v-list-item-title>
                    </v-list-item>
                    <v-divider/>
                    <v-list-item @click.prevent="logout">
                        <v-list-item-icon class="mr-2">
							<v-icon>mdi-power</v-icon>
						</v-list-item-icon>
                        <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-divider
                class="mx-4"
                inset
                vertical
            ></v-divider>
			<v-app-bar-nav-icon @click.stop="drawerRight = !drawerRight">
                <v-icon>mdi-menu-open</v-icon>
			</v-app-bar-nav-icon>            
        </v-app-bar>    
        <v-navigation-drawer v-model="drawer" width="300" dark class="green darken-1" :temporary="temporaryleftsidebar" app>
			<v-list-item>
				<v-list-item-avatar>
					<v-img :src="photoUser" @click.stop="toProfile"></v-img>
				</v-list-item-avatar>
				<v-list-item-content>					
					<v-list-item-title class="title">
						{{ATTRIBUTE_USER('username')}}
					</v-list-item-title>
					<v-list-item-subtitle>
						[{{DEFAULT_ROLE}}]
					</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>
			<v-divider></v-divider>
            <v-list expand>
                <v-list-item :to="{path:'/spmb'}" link  class="yellow" color="green" v-if="CAN_ACCESS('SPMB-GROUP') && dashboard!='mahasiswabaru' && dashboard!='mahasiswa'">
                    <v-list-item-icon class="mr-2">
                        <v-icon>mdi-monitor-dashboard</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>BOARD SPMB</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>   
                <v-list-item link v-if="CAN_ACCESS('SPMB-PMB-SOAL_BROWSE')" to="/spmb/soalpmb">
                    <v-list-item-icon class="mr-2">
                        <v-icon>mdi-head-question-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            SOAL PMB
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>        
                <v-subheader>DATA MHS. BARU</v-subheader>                
                <v-list-item link v-if="CAN_ACCESS('SPMB-PMB_BROWSE')" to="/spmb/pendaftaranbaru">
                    <v-list-item-icon class="mr-2">
                        <v-icon>mdi-account-plus</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            PENDAFTAR
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>                    
                <v-list-item link v-if="CAN_ACCESS('SPMB-PMB-FORMULIR-PENDAFTARAN_BROWSE')" to="/spmb/formulirpendaftaran">
                    <v-list-item-icon class="mr-2">
                        <v-icon>mdi-file-document-edit-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            BIODATA
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>                    
                <v-list-item link v-if="CAN_ACCESS('SPMB-PMB-PERSYARATAN_BROWSE')" to="/spmb/persyaratan">
                    <v-list-item-icon class="mr-2">
                        <v-icon>mdi-file-document-edit-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            PERSYARATAN
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>            
                <v-subheader>UJIAN PMB</v-subheader>       
                <v-list-item link v-if="CAN_ACCESS('SPMB-PMB-JADWAL-UJIAN_BROWSE') && dashboard!='mahasiswabaru' && dashboard!='mahasiswa'" to="/spmb/jadwalujianpmb">
                    <v-list-item-icon class="mr-2">
                        <v-icon>mdi-calendar-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            JADWAL UJIAN
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>      
                <v-list-item link v-if="CAN_ACCESS('SPMB-PMB-NILAI-UJIAN_BROWSE') && dashboard!='mahasiswabaru' && dashboard!='mahasiswa'" to="/spmb/nilaiujian">
                    <v-list-item-icon class="mr-2">
                        <v-icon>mdi-calendar-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            NILAI UJIAN
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>      
                <v-subheader v-if="CAN_ACCESS('SPMB-GROUP') && dashboard!='mahasiswabaru' && dashboard!='mahasiswa'">LAPORAN</v-subheader>                      
                <v-list-item link v-if="CAN_ACCESS('SPMB-PMB-LAPORAN-FAKULTAS_BROWSE') && isBentukPT('universitas')" to="/spmb/laporanfakultas">
                    <v-list-item-icon class="mr-2">
                        <v-icon>mdi-file-document-edit-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            LAPORAN FAKULTAS
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link v-if="CAN_ACCESS('SPMB-PMB-LAPORAN-PRODI_BROWSE')" to="/spmb/laporanprodi">
                    <v-list-item-icon class="mr-2">
                        <v-icon>mdi-file-document-edit-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            LAPORAN PRODI
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>                
                <v-list-item link v-if="CAN_ACCESS('SPMB-PMB-LAPORAN-KELULUSAN_BROWSE')" to="/spmb/laporankelulusan">
                    <v-list-item-icon class="mr-2">
                        <v-icon>mdi-file-document-edit-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            LAPORAN KELULUSAN
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>                
            </v-list>
        </v-navigation-drawer>
        <v-navigation-drawer v-model="drawerRight" width="300" app fixed right temporary v-if="showrightsidebar">
            <v-list dense>
                <v-list-item>		
                    <v-list-item-icon class="mr-2">
                        <v-icon>mdi-menu-open</v-icon>
                    </v-list-item-icon>			
                    <v-list-item-content>									
                        <v-list-item-title class="title">
                            OPTIONS
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item class="teal lighten-5 mb-5">
                    <v-list-item-icon class="mr-2">
                        <v-icon>mdi-filter</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>								
                        <v-list-item-title>FILTER</v-list-item-title>
                    </v-list-item-content>		
                </v-list-item>
                <slot name="filtersidebar"/>		                	
            </v-list>
		</v-navigation-drawer>
        <v-main class="mx-4 mb-4">			
			<slot />
		</v-main>
        <v-footer app padless fixed>
			<v-card class="flex" color="yellow darken-2" flat tile>
				<v-divider></v-divider>
				<v-card-text class="py-2 black--text text-center">
					<strong>{{APP_NAME}} (2021-2021)</strong> dikembangkan oleh TIM IT STAI Miftahul 'Ulum Tanjungpinang 
					<v-btn icon href="https://github.com/mrizkir/stiemu">
						<v-icon>mdi-github</v-icon>
					</v-btn>					
				</v-card-text>
			</v-card>			
		</v-footer>  
    </div>    
</template>
<script>
import { mapGetters } from "vuex";
export default {
    name: 'SPMBLayout',     
    created()
    {
        this.dashboard = this.$store.getters['uiadmin/getDefaultDashboard'];        
    },
    props:{
        showrightsidebar:{
            type:Boolean,
            default:true
        },
        temporaryleftsidebar:{
            type:Boolean,
            default:false
        },
    },
    data: () => ({
        loginTime:0,
        drawer:null,
        drawerRight:null, 
        
        dashboard:null,
    }),       
    methods: {        
        logout ()
        {
            this.loginTime=0;
            this.$ajax.post('/auth/logout',
                {},
                {
                    headers: {
                        'Authorization': this.TOKEN,
                    }
                }
            ).then(()=> {     
                this.$store.dispatch('auth/logout');	
                this.$store.dispatch('uifront/reinit');	
                this.$store.dispatch('uiadmin/reinit');	
                this.$router.push('/');
            })
            .catch(() => {
                this.$store.dispatch('auth/logout');	
                this.$store.dispatch('uifront/reinit');	
                this.$store.dispatch('uiadmin/reinit');	
                this.$router.push('/');
            });
        },
        isBentukPT (bentuk_pt)
        {
            return this.$store.getters['uifront/getBentukPT']==bentuk_pt?true:false;
        }
	},
    computed:{
        ...mapGetters('auth',{
            AUTHENTICATED:'Authenticated',  
            ACCESS_TOKEN:'AccessToken',          
            TOKEN:'Token',   
            DEFAULT_ROLE:'DefaultRole',       
            ROLE:'Role',
            CAN_ACCESS:'can',         
            ATTRIBUTE_USER:'AttributeUser',               
        }),
        APP_NAME ()
        {
            return process.env.VUE_APP_NAME;
        },
        photoUser()
		{
			let img=this.ATTRIBUTE_USER('foto');
			var photo;
			if (img == '')
			{
				photo = this.$api.url+'/storage/images/users/no_photo.png';	
			}
			else
			{
				photo = this.$api.url+'/'+img;	
			}
			return photo;
        },     
    },
    watch: {
        loginTime:{
            handler(value)
            {
                
                if (value >= 0)
                {
                    setTimeout(() => { 
                        this.loginTime=this.AUTHENTICATED==true?this.loginTime+1:-1;                                                                     
					}, 1000);
                }
                else
                {
                    this.$store.dispatch('auth/logout');
                    this.$router.replace('/login');
                }
            },
            immediate:true
        },
    }
}
</script>