(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68784cec"],{"0639":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-list-item",[e("v-list-item-content",[e("v-select",{attrs:{items:t.daftar_prodi,"item-text":"text","item-value":"id",label:"PROGRAM STUDI",outlined:""},model:{value:t.prodi_id,callback:function(a){t.prodi_id=a},expression:"prodi_id"}}),e("v-select",{attrs:{items:t.daftar_ta,label:"TAHUN PENDAFTARAN",outlined:""},model:{value:t.tahun_pendaftaran,callback:function(a){t.tahun_pendaftaran=a},expression:"tahun_pendaftaran"}})],1)],1)},r=[],s={name:"FilterMode7",created:function(){this.daftar_prodi=this.$store.getters["uiadmin/getDaftarProdi"],this.prodi_id=this.$store.getters["uiadmin/getProdiID"],this.daftar_ta=this.$store.getters["uiadmin/getDaftarTA"],this.tahun_pendaftaran=this.$store.getters["uiadmin/getTahunPendaftaran"]},data:function(){return{firstloading:!0,daftar_prodi:[],prodi_id:null,daftar_ta:[],tahun_pendaftaran:null}},methods:{setFirstTimeLoading:function(t){this.firstloading=t}},watch:{tahun_pendaftaran:function(t){this.firstloading||(this.$store.dispatch("uiadmin/updateTahunPendaftaran",t),this.$emit("changeTahunPendaftaran",t))},prodi_id:function(t){this.firstloading||(this.$store.dispatch("uiadmin/updateProdi",t),this.$emit("changeProdi",t))}}},n=s,o=e("2877"),l=e("6544"),d=e.n(l),c=e("da13"),v=e("5d23"),u=e("b974"),m=Object(o["a"])(n,i,r,!1,null,null,null);a["a"]=m.exports;d()(m,{VListItem:c["a"],VListItemContent:v["g"],VSelect:u["a"]})},"684f":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-system-bar",{class:this.$store.getters["uiadmin/getTheme"]("V-SYSTEM-BAR-CSS-CLASS"),attrs:{app:"",dark:""}},[e("strong",[t._v("Hak Akses Sebagai :")]),t._v(" "+t._s(t.ROLE)+" ")]),e("v-app-bar",{attrs:{app:""}},[e("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(a){a.stopPropagation(),t.drawer=!t.drawer}}}),e("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(a){a.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[e("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),e("v-spacer"),e("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on;return[e("v-avatar",{attrs:{size:"30"}},[e("v-img",t._g({attrs:{src:t.photoUser}},i))],1)]}}])},[e("v-list",[e("v-list-item",[e("v-list-item-avatar",[e("v-img",{attrs:{src:t.photoUser}})],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),e("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),e("v-divider"),e("v-list-item",{attrs:{to:"/system-users/profil"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-title",[t._v("Profil")])],1),e("v-divider"),e("v-list-item",{on:{click:function(a){return a.preventDefault(),t.logout(a)}}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-power")])],1),e("v-list-item-title",[t._v("Logout")])],1)],1)],1),e("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e("v-app-bar-nav-icon",{on:{click:function(a){a.stopPropagation(),t.drawerRight=!t.drawerRight}}},[e("v-icon",[t._v("mdi-menu-open")])],1)],1),e("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",temporary:t.temporaryleftsidebar,app:""},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[e("v-list-item",[e("v-list-item-avatar",[e("v-img",{attrs:{src:t.photoUser},on:{click:function(a){return a.stopPropagation(),t.toProfile(a)}}})],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),e("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),e("v-divider"),e("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("SPMB-GROUP")&&"mahasiswabaru"!=t.dashboard&&"mahasiswa"!=t.dashboard?e("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/spmb"},link:"",color:"green"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-monitor-dashboard")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("BOARD SPMB")])],1)],1):t._e(),t.CAN_ACCESS("SPMB-PMB-SOAL_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/spmb/soalpmb"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-head-question-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" SOAL PMB ")])],1)],1):t._e(),e("v-subheader",[t._v("DATA MHS. BARU")]),t.CAN_ACCESS("SPMB-PMB_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/spmb/pendaftaranbaru"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account-plus")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" PENDAFTAR ")])],1)],1):t._e(),t.CAN_ACCESS("SPMB-PMB-FORMULIR-PENDAFTARAN_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/spmb/formulirpendaftaran"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-file-document-edit-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" BIODATA ")])],1)],1):t._e(),t.CAN_ACCESS("SPMB-PMB-PERSYARATAN_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/spmb/persyaratan"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-file-document-edit-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" PERSYARATAN ")])],1)],1):t._e(),e("v-subheader",[t._v("UJIAN PMB")]),t.CAN_ACCESS("SPMB-PMB-JADWAL-UJIAN_BROWSE")&&"mahasiswabaru"!=t.dashboard&&"mahasiswa"!=t.dashboard?e("v-list-item",{attrs:{link:"",to:"/spmb/jadwalujianpmb"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-calendar-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" JADWAL UJIAN ")])],1)],1):t._e(),t.CAN_ACCESS("SPMB-PMB-NILAI-UJIAN_BROWSE")&&"mahasiswabaru"!=t.dashboard&&"mahasiswa"!=t.dashboard?e("v-list-item",{attrs:{link:"",to:"/spmb/nilaiujian"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-calendar-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" NILAI UJIAN ")])],1)],1):t._e(),t.CAN_ACCESS("SPMB-GROUP")&&"mahasiswabaru"!=t.dashboard&&"mahasiswa"!=t.dashboard?e("v-subheader",[t._v("LAPORAN")]):t._e(),t.CAN_ACCESS("SPMB-PMB-LAPORAN-FAKULTAS_BROWSE")&&t.isBentukPT("universitas")?e("v-list-item",{attrs:{link:"",to:"/spmb/laporanfakultas"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-file-document-edit-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" LAPORAN FAKULTAS ")])],1)],1):t._e(),t.CAN_ACCESS("SPMB-PMB-LAPORAN-PRODI_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/spmb/laporanprodi"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-file-document-edit-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" LAPORAN PRODI ")])],1)],1):t._e(),t.CAN_ACCESS("SPMB-PMB-LAPORAN-KELULUSAN_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/spmb/laporankelulusan"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-file-document-edit-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" LAPORAN KELULUSAN ")])],1)],1):t._e()],1)],1),t.showrightsidebar?e("v-navigation-drawer",{attrs:{width:"300",app:"",fixed:"",right:"",temporary:""},model:{value:t.drawerRight,callback:function(a){t.drawerRight=a},expression:"drawerRight"}},[e("v-list",{attrs:{dense:""}},[e("v-list-item",[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-menu-open")])],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" OPTIONS ")])],1)],1),e("v-divider"),e("v-list-item",{staticClass:"teal lighten-5 mb-5"},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-filter")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("FILTER")])],1)],1),t._t("filtersidebar")],2)],1):t._e(),e("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2)],1)},r=[],s=(e("ac1f"),e("5319"),e("5530")),n=e("2f62"),o={name:"SPMBLayout",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"]},props:{showrightsidebar:{type:Boolean,default:!0},temporaryleftsidebar:{type:Boolean,default:!1}},data:function(){return{loginTime:0,drawer:null,drawerRight:null,dashboard:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(s["a"])(Object(s["a"])({},Object(n["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",DEFAULT_ROLE:"DefaultRole",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"})),{},{APP_NAME:function(){return"PortalEkampus v3"},photoUser:function(){var t,a=this.ATTRIBUTE_USER("foto");return t=""==a?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+a,t}}),watch:{loginTime:{handler:function(t){var a=this;t>=0?setTimeout((function(){a.loginTime=1==a.AUTHENTICATED?a.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},l=o,d=e("2877"),c=e("6544"),v=e.n(c),u=e("40dc"),m=e("5bc1"),p=e("8212"),h=e("ce7e"),f=e("132d"),_=e("adda"),b=e("8860"),g=e("da13"),A=e("8270"),y=e("5d23"),k=e("34c3"),S=e("f6c4"),w=e("e449"),C=e("f774"),P=e("2fa4"),T=e("e0c7"),x=e("afd9"),R=e("2a7f"),E=Object(d["a"])(l,i,r,!1,null,null,null);a["a"]=E.exports;v()(E,{VAppBar:u["a"],VAppBarNavIcon:m["a"],VAvatar:p["a"],VDivider:h["a"],VIcon:f["a"],VImg:_["a"],VList:b["a"],VListItem:g["a"],VListItemAvatar:A["a"],VListItemContent:y["g"],VListItemIcon:k["a"],VListItemSubtitle:y["j"],VListItemTitle:y["k"],VMain:S["a"],VMenu:w["a"],VNavigationDrawer:C["a"],VSpacer:P["a"],VSubheader:T["a"],VSystemBar:x["a"],VToolbarTitle:R["c"]})},"7cbb":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-row",[t._l(t.daftar_persyaratan,(function(a,i){return e("v-col",{key:a.persyaratan_id,attrs:{xs:"12",sm:"6",md:"4"}},[e("FileUpload",{attrs:{user_id:t.user_id,item:a,index:i}})],1)})),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e()],2)},r=[],s=(e("96cf"),e("1da1")),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-form",{ref:"frmpersyaratan",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(a){t.form_valid=a},expression:"form_valid"}},[e("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[e("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:t.photoPersyaratan}}),e("v-card-text",{staticClass:"text--primary"},[e("div",[0==t.verified?e("v-file-input",{attrs:{accept:"image/jpeg,image/png",label:t.item.nama_persyaratan+" (.png atau .jpg)",rules:t.rule_foto,"show-size":""},on:{change:t.previewImage},model:{value:t.filepersyaratan[t.index],callback:function(a){t.$set(t.filepersyaratan,t.index,a)},expression:"filepersyaratan[index]"}}):t._e()],1)]),e("v-card-actions",[e("v-badge",{attrs:{bordered:"",color:t.badgeColor,icon:t.badgeIcon}}),e("v-spacer"),1==t.verified?e("v-btn",{attrs:{icon:"",href:this.$api.url+"/"+this.item.path,target:"_blank"}},[e("v-icon",[t._v(" mdi-download ")])],1):t._e(),0==t.verified?e("v-btn",{attrs:{color:"orange",text:"",loading:t.btnLoading,disabled:t.btnLoading||t.btnSimpan},on:{click:function(a){return t.upload(t.index,t.item)}}},[t._v(" Simpan ")]):t._e(),0==t.verified?e("v-btn",{attrs:{color:"orange",text:"",loading:t.btnLoading,disabled:t.btnLoading||t.btnHapus},on:{click:function(a){return t.hapusfilepersysaratan(t.item)}}},[t._v(" Hapus ")]):t._e(),"mahasiswabaru"!=t.dashboard&&"mahasiswa"!=t.dashboard&&0==t.verified?e("v-btn",{attrs:{color:"orange",text:"",loading:t.btnLoading,disabled:t.btnLoading||t.btnVerifikasi},on:{click:function(a){return t.verifikasipersyaratan(t.item)}}},[t._v(" Verifikasi ")]):t._e()],1)],1)],1)},o=[],l=(e("a9e3"),{name:"FileUploadPersyaratan",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"],null==this.item.path||null==this.item.persyaratan_pmb_id?this.image_prev=this.item.path:(this.btnHapus=this.isVerified(this.item),this.image_prev=this.$api.url+"/"+this.item.path,this.badgeColor=this.item.verified,this.badgeIcon=this.item.verified)},props:{user_id:{type:String,required:!0},index:{type:Number,required:!0},item:{type:Object,required:!0}},data:function(){return{dashboard:null,btnSimpan:!0,btnHapus:!0,btnVerifikasi:!0,btnLoading:!1,image_prev:null,verified:0,form_valid:!0,filepersyaratan:[],rule_foto:[function(t){return!!t||"Mohon pilih foto !!!"},function(t){return!t||t.size<2e6||"File foto harus kurang dari 2MB."}]}},methods:{previewImage:function(t){var a=this;if("undefined"===typeof t)this.image_prev=null,this.btnSimpan=!0;else{var e=new FileReader;e.readAsDataURL(t),e.onload=function(t){a.image_prev=t.target.result},this.btnSimpan=!1}},upload:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(a,e){var i,r,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=e,!this.$refs.frmpersyaratan.validate()){t.next=11;break}if("undefined"===typeof this.filepersyaratan[a]){t.next=11;break}return this.btnLoading=!0,r=new FormData,r.append("nama_persyaratan",i.nama_persyaratan),r.append("persyaratan_id",i.persyaratan_id),r.append("persyaratan_pmb_id",i.persyaratan_pmb_id),r.append("foto",this.filepersyaratan[a]),t.next=11,this.$ajax.post("/spmb/pmbpersyaratan/upload/"+this.user_id,r,{headers:{Authorization:this.$store.getters["auth/Token"],"Content-Type":"multipart/form-data"}}).then((function(){s.btnHapus=!1,s.btnSimpan=!0,s.btnLoading=!1})).catch((function(){s.btnLoading=!1}));case 11:case"end":return t.stop()}}),t,this)})));function a(a,e){return t.apply(this,arguments)}return a}(),hapusfilepersysaratan:function(t){var a=this;this.$root.$confirm.open("Delete","Apakah Anda ingin menghapus persyaratan "+t.nama_persyaratan+" ?",{color:"red"}).then((function(i){i&&a.$ajax.post("/spmb/pmbpersyaratan/hapusfilepersyaratan/"+t.persyaratan_pmb_id,{_method:"DELETE"},{headers:{Authorization:a.$store.getters["auth/Token"]}}).then((function(){a.btnHapus=!0,a.photoPersyaratan=e("bd21"),a.btnLoading=!1})).catch((function(){a.btnLoading=!1}))}))},isVerified:function(t){return null==t.path||1==t.verified?this.btnVerifikasi=!0:this.btnVerifikasi=!1,this.btnVerifikasi},verifikasipersyaratan:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(a){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.btnLoading=!0,t.next=3,this.$ajax.post("/spmb/pmbpersyaratan/verifikasipersyaratan/"+a.persyaratan_pmb_id,{},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(t){var a=t.data;e.badgeColor=a.persyaratan.verified,e.badgeIcon=a.persyaratan.verified,e.btnHapus=!0,e.btnVerifikasi=!0,e.btnLoading=!1})).catch((function(){e.btnLoading=!1}));case 3:case"end":return t.stop()}}),t,this)})));function a(a){return t.apply(this,arguments)}return a}()},computed:{photoPersyaratan:{get:function(){return null==this.image_prev?e("bd21"):this.image_prev},set:function(t){this.image_prev=t}},badgeColor:{get:function(){return 1==this.verified?"success":"error"},set:function(t){this.verified=t}},badgeIcon:{get:function(){return 1==this.verified?"mdi-check-bold":"mdi-close-thick"},set:function(t){return this.verified=t}}}}),d=l,c=e("2877"),v=e("6544"),u=e.n(v),m=e("4ca6"),p=e("8336"),h=e("b0af"),f=e("99d9"),_=e("23a7"),b=e("4bd4"),g=e("132d"),A=e("adda"),y=e("2fa4"),k=Object(c["a"])(d,n,o,!1,null,null,null),S=k.exports;u()(k,{VBadge:m["a"],VBtn:p["a"],VCard:h["a"],VCardActions:f["b"],VCardText:f["d"],VFileInput:_["a"],VForm:b["a"],VIcon:g["a"],VImg:A["a"],VSpacer:y["a"]});var w={name:"FormPersyaratanPMB",created:function(){this.initialize()},props:{user_id:{type:String,required:!0}},data:function(){return{daftar_persyaratan:[]}},methods:{initialize:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$ajax.get("/spmb/pmbpersyaratan/"+this.user_id,{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(t){var e=t.data;a.daftar_persyaratan=e.persyaratan}));case 2:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}()},components:{FileUpload:S}},C=w,P=e("62ad"),T=e("6b53"),x=e("0fd9"),R=Object(c["a"])(C,i,r,!1,null,null,null);a["a"]=R.exports;u()(R,{VCol:P["a"],VResponsive:T["a"],VRow:x["a"]})},b229:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",{attrs:{color:"grey lighten-4"}},[e("v-toolbar",{attrs:{elevation:"2"}},[e("v-toolbar-title",[t._v("PROFIL MAHASISWA BARU")]),e("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e("v-spacer"),e("v-icon",{on:{click:function(a){return a.stopPropagation(),t.closeDialog()}}},[t._v(" mdi-close-thick ")])],1),e("v-card-text",[e("v-row",[e("v-col",{attrs:{xs:"12",sm:"12",md:"12"}},[e("v-card",[e("v-toolbar",{attrs:{elevation:"2"}},[e("v-toolbar-title",[t._v("BIODATA MAHASISWA BARU")])],1),e("v-card-text",[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{xs:"12",sm:"6",md:"2"}},[e("v-card",{attrs:{flat:""}},[e("v-card-text",[e("v-img",{attrs:{src:t.$api.url+"/"+t.item.foto}})],1)],1),e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("NOMOR HP:")]),e("v-card-subtitle",[t._v(" "+t._s(t.datamhs.nomor_hp)+" ")])],1),e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("EMAIL:")]),e("v-card-subtitle",[t._v(" "+t._s(t.datamhs.email)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e(),e("v-col",{attrs:{xs:"12",sm:"6",md:"10"}},[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{xs:"12",sm:"6",md:"7"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("ID :")]),e("v-card-subtitle",[t._v(" "+t._s(t.datamhs.id)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e(),e("v-col",{attrs:{xs:"12",sm:"6",md:"5"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("PROGRAM STUDI :")]),e("v-card-subtitle",[t._v(" "+t._s(t.datamhs.nama_prodi)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e()],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{xs:"12",sm:"6",md:"7"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("NAMA MAHASISWA :")]),e("v-card-subtitle",[t._v(" "+t._s(t.datamhs.nama_mhs)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e(),e("v-col",{attrs:{xs:"12",sm:"6",md:"5"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("KELAS :")]),e("v-card-subtitle",[t._v(" "+t._s(t.datamhs.nama_kelas)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e()],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{xs:"12",sm:"6",md:"7"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("TEMPAT DAN TGL. LAHIR :")]),e("v-card-subtitle",[t._v(" "+t._s(t.datamhs.tempat_lahir)+", "+t._s(t.$date(t.datamhs.tanggal_lahir).format("DD/MM/YYYY"))+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e(),e("v-col",{attrs:{xs:"12",sm:"6",md:"5"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("TAHUN PENDAFTARAN :")]),e("v-card-subtitle",[t._v(" "+t._s(t.datamhs.ta)+", ("+t._s(t.$date(t.item.created_at).format("DD/MM/YYYY HH:mm"))+") ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e()],1),e("v-row",{attrs:{"no-gutters":""}},[t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e(),e("v-col",{attrs:{xs:"12",sm:"6",md:"7"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("ALAMAT RUMAH :")]),e("v-card-subtitle",[t._v(" "+t._s(t.datamhs.alamat_rumah)+", KEL. "+t._s(t.datamhs.address1_kelurahan)+", KEC. "+t._s(t.datamhs.address1_kecamatan)+", KOTA/KAB. "+t._s(t.datamhs.address1_kabupaten)+", PROV. "+t._s(t.datamhs.address1_provinsi)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e(),e("v-col",{attrs:{xs:"12",sm:"6",md:"5"}},[e("v-card",{attrs:{flat:""}},[e("v-card-title",[t._v("TGL. UBAH :")]),e("v-card-subtitle",[t._v(" "+t._s(t.$date(t.item.created_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?e("v-responsive",{attrs:{width:"100%"}}):t._e()],1)],1)],1)],1)],1)],1)],1),e("v-row",[e("v-col",{attrs:{xs:"12",sm:"12",md:"12"}},[e("v-card",[e("v-toolbar",{attrs:{elevation:"2"}},[e("v-toolbar-title",[t._v("PERSYARATAN PENDAFTARAN")]),e("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e("v-spacer"),e("v-btn",{attrs:{icon:""},on:{click:function(a){return a.stopPropagation(),t.previewImagePersyaratan()}}},[e("v-icon",[t._v(" mdi-eye ")])],1)],1),e("v-card-text",[e("FormPersyaratan",{attrs:{user_id:t.item.id}}),e("v-dialog",{model:{value:t.dialogpreviewpersyaratan,callback:function(a){t.dialogpreviewpersyaratan=a},expression:"dialogpreviewpersyaratan"}},[e("v-carousel",{attrs:{height:"auto"}},t._l(t.slides,(function(a,i){return e("v-carousel-item",{key:i,attrs:{src:a.path}},[e("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[e("div",{staticClass:"display-3"},[t._v(t._s(a.nama_persyaratan))])])],1)})),1)],1)],1)],1)],1)],1)],1)],1)},r=[],s=(e("4160"),e("159b"),e("96cf"),e("1da1")),n=e("7cbb"),o={name:"ProfilMahasiswaBaru",created:function(){this.initialize()},props:{item:Object},data:function(){var t=this.$date().format("YYYY-MM-DD"),a=this.$date().format("YYYY-MM-DD HH:mm:ss");return{slides:[],dialogpreviewpersyaratan:!1,datamhs:{tanggal_lahir:t,created_at:a,updated_at:a}}},methods:{initialize:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$ajax.get("/spmb/formulirpendaftaran/"+this.item.id,{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(t){var e=t.data;a.datamhs=Object.assign(e.formulir,{nama_prodi:a.$store.getters["uiadmin/getProdiName"](e.formulir.kjur1),nama_kelas:a.$store.getters["uiadmin/getNamaKelas"](e.formulir.idkelas)})}));case 2:return t.next=4,this.$ajax.get("/spmb/pmbpersyaratan/"+this.item.id,{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(t){var e=t.data,i=e.persyaratan;i.forEach((function(t){null!=t.path&&a.slides.push({path:a.$api.url+"/"+t.path,nama_persyaratan:t.nama_persyaratan})}))}));case 4:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),downloadImage:function(){},previewImagePersyaratan:function(){this.dialogpreviewpersyaratan=!0},closeDialog:function(){var t=this;setTimeout((function(){t.$emit("closeProfilMahasiswaBaru")}),300)}},components:{FormPersyaratan:n["a"]}},l=o,d=e("2877"),c=e("6544"),v=e.n(c),u=e("8336"),m=e("b0af"),p=e("99d9"),h=e("5e66"),f=e("3e35"),_=e("62ad"),b=e("169a"),g=e("ce7e"),A=e("132d"),y=e("adda"),k=e("6b53"),S=e("0fd9"),w=e("2fa4"),C=e("71d9"),P=e("2a7f"),T=Object(d["a"])(l,i,r,!1,null,null,null);a["a"]=T.exports;v()(T,{VBtn:u["a"],VCard:m["a"],VCardSubtitle:p["c"],VCardText:p["d"],VCardTitle:p["e"],VCarousel:h["a"],VCarouselItem:f["a"],VCol:_["a"],VDialog:b["a"],VDivider:g["a"],VIcon:A["a"],VImg:y["a"],VResponsive:k["a"],VRow:S["a"],VSpacer:w["a"],VToolbar:C["a"],VToolbarTitle:P["c"]})},bd21:function(t,a,e){t.exports=e.p+"img/no-image.695dffd6.png"}}]);