(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5244cc8f"],{d90d:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("SystemUserLayout",[s("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-account-group ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" ROLES ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[s("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[s("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[s("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Masing-masing user bisa memiliki beberapa role, minimal 1 role untuk bisa menggunakan sistem. Setiap role memiliki permission. ")])]},proxy:!0}])}),s("v-container",{attrs:{fluid:""}},[s("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[s("v-col",{attrs:{xs:"12",sm:"12",md:"12"}},[s("v-card",[s("v-card-text",[s("v-text-field",{attrs:{"append-icon":"mdi-database-search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1)],1),s("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[s("v-col",{attrs:{xs:"12",sm:"12",md:"12"}},[s("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.datatable,search:t.search,"item-key":"id","sort-by":"name","show-expand":"",expanded:t.expanded,"single-expand":!0,loading:t.datatableLoading,"loading-text":"Loading... Please wait"},on:{"update:expanded":function(e){t.expanded=e},"click:row":t.dataTableRowClicked},scopedSlots:t._u([{key:"top",fn:function(){return[s("v-toolbar",{attrs:{flat:"",color:"white"}},[s("v-toolbar-title",[t._v("DAFTAR ROLE")]),s("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),s("v-spacer"),s("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(e){t.form_valid=e},expression:"form_valid"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),s("v-card-text",[s("v-alert",{attrs:{color:"error",value:t.form_error_message.length>0,icon:"mdi-close-octagon-outline"}},[t._v(" "+t._s(t.form_error_message)+" ")]),s("v-container",{attrs:{fluid:""}},[s("v-row",[s("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[s("v-text-field",{attrs:{label:"NAMA ROLE",rules:t.rule_role_name},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1)],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return e.stopPropagation(),t.close(e)}}},[t._v("BATAL")]),s("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.btnLoading,disabled:!t.form_valid||t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.save(e)}}},[t._v(" SIMPAN ")])],1)],1)],1)],1),s("v-dialog",{attrs:{"max-width":"800px",persistent:""},model:{value:t.dialogRolePermission,callback:function(e){t.dialogRolePermission=e},expression:"dialogRolePermission"}},[s("RolePermissions",{attrs:{role:t.editedItem,daftarpermissions:t.daftar_permissions,permissionsselected:t.permissions_selected},on:{closeRolePermissions:t.closeRolePermissions}})],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var a=e.item;return[s("v-icon",{staticClass:"mr-2",attrs:{small:"",loading:t.btnLoading,disabled:t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.setPermission(a)}}},[t._v(" mdi-axis-arrow-lock ")]),s("v-icon",{staticClass:"mr-2",attrs:{small:"",loading:t.btnLoading,disabled:t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.viewItem(a)}}},[t._v(" mdi-eye ")]),s("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return e.stopPropagation(),t.editItem(a)}}},[t._v(" mdi-pencil ")])]}},{key:"expanded-item",fn:function(e){var a=e.headers,i=e.item;return[s("td",{staticClass:"text-center",attrs:{colspan:a.length}},[s("strong",[t._v("ID:")]),t._v(t._s(i.id)+" "),s("strong",[t._v("created_at:")]),t._v(t._s(t.$date(i.created_at).format("DD/MM/YYYY HH:mm"))+" "),s("strong",[t._v("updated_at:")]),t._v(t._s(t.$date(i.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])]}},{key:"no-data",fn:function(){return[t._v(" Data belum tersedia ")]},proxy:!0}])})],1),s("v-dialog",{attrs:{width:"800px"},model:{value:t.dialogdetail,callback:function(e){t.dialogdetail=e},expression:"dialogdetail"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[t._v("DETAIL ROLE")])]),s("v-card-text",[s("v-container",{attrs:{fluid:""}},[s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[s("v-card",{attrs:{flat:""}},[s("v-card-title",[t._v("ID :")]),s("v-card-subtitle",[t._v(" "+t._s(t.editedItem.id)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?s("v-responsive",{attrs:{width:"100%"}}):t._e(),s("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[s("v-card",{attrs:{flat:""}},[s("v-card-title",[t._v(" TANGGAL BUAT : ")]),s("v-card-subtitle",[t._v(" "+t._s(t.$date(t.editedItem.created_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?s("v-responsive",{attrs:{width:"100%"}}):t._e()],1),s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[s("v-card",{attrs:{flat:""}},[s("v-card-title",[t._v("NAMA ROLE :")]),s("v-card-subtitle",[t._v(" "+t._s(t.editedItem.name)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?s("v-responsive",{attrs:{width:"100%"}}):t._e(),s("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[s("v-card",{attrs:{flat:""}},[s("v-card-title",[t._v("TANGGAL UBAH :")]),s("v-card-subtitle",[t._v(" "+t._s(t.$date(t.editedItem.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?s("v-responsive",{attrs:{width:"100%"}}):t._e()],1),s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{attrs:{cols:"12"}},[s("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headersdetail,items:t.permissions_selected,"item-key":"name","sort-by":"name"}})],1)],1)],1)],1),s("v-card-actions")],1)],1)],1)],1)],1)},i=[],r=s("5530"),o=(s("b0c0"),s("2f62")),n=s("e0b6"),l=s("e477"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[t._v("ROLE PERMISSIONS")])]),s("v-card-text",[s("v-container",{attrs:{fluid:""}},[s("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[s("v-col",{attrs:{xs:"12",sm:"12",md:"12"}},[s("v-card",[s("v-card-text",[s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[s("v-card",{attrs:{flat:""}},[s("v-card-title",[t._v("ID :")]),s("v-card-subtitle",[t._v(" "+t._s(t.role.id)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?s("v-responsive",{attrs:{width:"100%"}}):t._e(),s("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[s("v-card",{attrs:{flat:""}},[s("v-card-title",[t._v("TANGGAL BUAT :")]),s("v-card-subtitle",[t._v(" "+t._s(t.$date(t.role.created_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?s("v-responsive",{attrs:{width:"100%"}}):t._e()],1),s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[s("v-card",{attrs:{flat:""}},[s("v-card-title",[t._v("NAMA ROLE :")]),s("v-card-subtitle",[t._v(" "+t._s(t.role.name)+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?s("v-responsive",{attrs:{width:"100%"}}):t._e(),s("v-col",{attrs:{xs:"12",sm:"6",md:"6"}},[s("v-card",{attrs:{flat:""}},[s("v-card-title",[t._v("TANGGAL UBAH :")]),s("v-card-subtitle",[t._v(" "+t._s(t.$date(t.role.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)],1),t.$vuetify.breakpoint.xsOnly?s("v-responsive",{attrs:{width:"100%"}}):t._e()],1)],1)],1)],1)],1),s("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[s("v-col",{attrs:{cols:"12"}},[s("v-card",[s("v-card-text",[s("v-text-field",{attrs:{"append-icon":"mdi-database-search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1)],1),s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{attrs:{col:"12"}},[s("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.daftar_permissions,search:t.search,"item-key":"name","sort-by":"name","show-select":""},scopedSlots:t._u([{key:"item.actions",fn:function(e){var a=e.item;return[s("v-tooltip",{attrs:{color:"info",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,r=e.attrs;return[s("v-btn",t._g(t._b({attrs:{icon:"",loading:t.btnLoading,disabled:t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.revoke(a)}}},"v-btn",r,!1),i),[s("v-icon",{attrs:{small:""}},[t._v(" mdi-delete ")])],1)]}}],null,!0)},[s("span",[t._v("Hapus Permission dari Role ini")])])]}}]),model:{value:t.permissions_selected,callback:function(e){t.permissions_selected=e},expression:"permissions_selected"}})],1)],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return e.stopPropagation(),t.close(e)}}},[t._v("KELUAR")]),s("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.btnLoading,disabled:t.btnLoading||!t.perm_selected.length>0},on:{click:function(e){return e.stopPropagation(),t.save(e)}}},[t._v(" SIMPAN ")])],1)],1)},c=[],m={name:"RolePermissions",data:function(){return{btnLoading:!1,headers:[{text:"NAMA PERMISSION",value:"name"},{text:"GUARD",value:"guard_name"},{text:"AKSI",value:"actions",sortable:!1,width:100}],search:"",perm_selected:[]}},methods:{save:function(){var t=this;this.btnLoading=!0,this.$ajax.post("/system/setting/roles/storerolepermissions",{role_id:this.role.id,chkpermission:this.permissions_selected},{headers:{Authorization:this.TOKEN}}).then((function(){t.btnLoading=!1,t.close()})).catch((function(){t.btnLoading=!1}))},revoke:function(t){var e=this;this.btnLoading=!0,this.$ajax.post("/system/setting/roles/revokerolepermissions",{role_id:this.role.id,name:t.name},{headers:{Authorization:this.TOKEN}}).then((function(){e.btnLoading=!1,e.close()})).catch((function(){e.btnLoading=!1}))},close:function(){this.btnLoading=!1,this.permissions_selected=[],this.$emit("closeRolePermissions",this.role.id)}},props:{role:Object,daftarpermissions:Array,permissionsselected:Array},computed:Object(r["a"])(Object(r["a"])({},Object(o["b"])("auth",{TOKEN:"Token"})),{},{daftar_permissions:function(){return this.daftarpermissions},permissions_selected:{get:function(){return this.perm_selected.length>0?this.perm_selected:this.permissionsselected},set:function(t){this.perm_selected=t}}})},v=m,u=s("2877"),h=s("6544"),_=s.n(h),p=s("8336"),f=s("b0af"),b=s("99d9"),g=s("62ad"),S=s("a523"),A=s("8fea"),E=s("132d"),x=s("6b53"),T=s("0fd9"),C=s("2fa4"),k=s("8654"),R=s("3a2f"),y=Object(u["a"])(v,d,c,!1,null,null,null),I=y.exports;_()(y,{VBtn:p["a"],VCard:f["a"],VCardActions:b["b"],VCardSubtitle:b["c"],VCardText:b["d"],VCardTitle:b["e"],VCol:g["a"],VContainer:S["a"],VDataTable:A["a"],VIcon:E["a"],VResponsive:x["a"],VRow:T["a"],VSpacer:C["a"],VTextField:k["a"],VTooltip:R["a"]});var O={name:"Roles",created:function(){this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.ACCESS_TOKEN},{text:"USER SISTEM",disabled:!1,href:"/system-users"},{text:"ROLES",disabled:!0,href:"#"}],this.initialize()},data:function(){return{breadcrumbs:[],datatableLoading:!1,btnLoading:!1,expanded:[],datatable:[],daftar_permissions:[],permissions_selected:[],headers:[{text:"NAMA ROLE",value:"name"},{text:"GUARD",value:"guard_name"},{text:"AKSI",value:"actions",sortable:!1,width:130}],headersdetail:[{text:"NAMA PERMISSION",value:"name"},{text:"GUARD",value:"guard_name"}],search:"",form_valid:!0,dialog:!1,dialogdetail:!1,dialogRolePermission:!1,editedIndex:-1,editedItem:{id:0,name:"",guard:"",created_at:"",updated_at:""},defaultItem:{id:0,name:"",guard:"api",created_at:"",updated_at:""},rule_role_name:[function(t){return!!t||"Mohon untuk di isi nama Role !!!"},function(t){return/^[A-Za-z]*$/.test(t)||"Nama Role hanya boleh string"}],form_error_message:""}},methods:{initialize:function(){var t=this;this.datatableLoading=!0,this.$ajax.get("/system/setting/roles",{headers:{Authorization:this.TOKEN}}).then((function(e){var s=e.data,a=e.status;200==a&&(t.datatable=s.roles,t.datatableLoading=!1)}))},dataTableRowClicked:function(t){t===this.expanded[0]?this.expanded=[]:this.expanded=[t]},viewItem:function(t){var e=this;this.editedIndex=this.datatable.indexOf(t),this.editedItem=Object.assign({},t),this.$ajax.get("/system/setting/roles/"+t.id+"/permission",{headers:{Authorization:this.TOKEN}}).then((function(t){var s=t.data,a=t.status;200==a&&(e.permissions_selected=s.permissions)})),this.dialogdetail=!0},editItem:function(t){this.editedIndex=this.datatable.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},setPermission:function(t){var e=this;this.$ajax.get("/system/setting/permissions",{headers:{Authorization:this.TOKEN}}).then((function(t){var s=t.data,a=t.status;200==a&&(e.daftar_permissions=s.permissions)})),this.$ajax.get("/system/setting/roles/"+t.id+"/permission",{headers:{Authorization:this.TOKEN}}).then((function(t){var s=t.data,a=t.status;200==a&&(e.permissions_selected=s.permissions)})),this.dialogRolePermission=!0,this.editedItem=t},close:function(){var t=this;this.btnLoading=!1,this.dialog=!1,this.$refs.frmdata.reset(),this.form_error_message="",setTimeout((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}),300)},closeRolePermissions:function(){this.permissions_selected=[],this.dialogRolePermission=!1},save:function(){var t=this;this.form_error_message="",this.$refs.frmdata.validate()&&(this.btnLoading=!0,this.editedIndex>-1?this.$ajax.post("/system/setting/roles/"+this.editedItem.id,{_method:"PUT",name:this.editedItem.name.toLowerCase()},{headers:{Authorization:this.TOKEN}}).then((function(e){var s=e.data;Object.assign(t.datatable[t.editedIndex],s.roles),t.close()})).catch((function(){t.btnLoading=!1})):this.$ajax.post("/system/setting/roles/store",{name:this.editedItem.name.toLowerCase()},{headers:{Authorization:this.TOKEN}}).then((function(e){var s=e.data;t.datatable.push(s.roles),t.close()})).catch((function(){t.btnLoading=!1})))}},computed:Object(r["a"])({formTitle:function(){return-1===this.editedIndex?"TAMBAH ROLE":"EDIT ROLE"}},Object(o["b"])("auth",{ACCESS_TOKEN:"AccessToken",TOKEN:"Token"})),watch:{dialog:function(t){t||this.close()}},components:{SystemUserLayout:n["a"],ModuleHeader:l["a"],RolePermissions:I}},L=O,w=s("0798"),V=s("2bc5"),N=s("169a"),M=s("ce7e"),P=s("4bd4"),U=s("71d9"),D=s("2a7f"),$=Object(u["a"])(L,a,i,!1,null,null,null);e["default"]=$.exports;_()($,{VAlert:w["a"],VBreadcrumbs:V["a"],VBtn:p["a"],VCard:f["a"],VCardActions:b["b"],VCardSubtitle:b["c"],VCardText:b["d"],VCardTitle:b["e"],VCol:g["a"],VContainer:S["a"],VDataTable:A["a"],VDialog:N["a"],VDivider:M["a"],VForm:P["a"],VIcon:E["a"],VResponsive:x["a"],VRow:T["a"],VSpacer:C["a"],VTextField:k["a"],VToolbar:U["a"],VToolbarTitle:D["c"]})},e0b6:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-system-bar",{class:this.$store.getters["uiadmin/getTheme"]("V-SYSTEM-BAR-CSS-CLASS"),attrs:{app:"",dark:""}},[s("strong",[t._v("Hak Akses Sebagai :")]),t._v(" "+t._s(t.ROLE)+" ")]),s("v-app-bar",{attrs:{app:""}},[s("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),s("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(e){e.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[s("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),s("v-spacer"),s("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),s("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[s("v-avatar",{attrs:{size:"30"}},[s("v-img",t._g({attrs:{src:t.photoUser}},a))],1)]}}])},[s("v-list",[s("v-list-item",[s("v-list-item-avatar",[s("v-img",{attrs:{src:t.photoUser}})],1),s("v-list-item-content",[s("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),s("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),s("v-divider"),s("v-list-item",{attrs:{to:"/system-users/profil"}},[s("v-list-item-icon",{staticClass:"mr-2"},[s("v-icon",[t._v("mdi-account")])],1),s("v-list-item-title",[t._v("Profil")])],1),s("v-divider"),s("v-list-item",{on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[s("v-list-item-icon",{staticClass:"mr-2"},[s("v-icon",[t._v("mdi-power")])],1),s("v-list-item-title",[t._v("Logout")])],1)],1)],1)],1),s("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",temporary:t.temporaryleftsidebar,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[s("v-list-item",[s("v-list-item-avatar",[s("v-img",{attrs:{src:t.photoUser},on:{click:function(e){return e.stopPropagation(),t.toProfile(e)}}})],1),s("v-list-item-content",[s("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),s("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),s("v-divider"),s("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("SYSTEM-USERS-GROUP")?s("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/system-users"},link:"",color:"green"}},[s("v-list-item-icon",{staticClass:"mr-2"},[s("v-icon",[t._v("mdi-account")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v("BOARD USERS")])],1)],1):t._e(),s("v-list-item",{attrs:{link:"",to:"/system-users/profil"}},[s("v-list-item-icon",{staticClass:"mr-2"},[s("v-icon",[t._v("mdi-account")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v(" PROFIL USER ")])],1)],1),s("v-divider"),t.CAN_ACCESS("SYSTEM-SETTING-PERMISSIONS")?s("v-list-item",{attrs:{link:"",to:"/system-users/permissions"}},[s("v-list-item-icon",{staticClass:"mr-2"},[s("v-icon",[t._v("mdi-account-key")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v(" PERMISSIONS ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-ROLES")?s("v-list-item",{attrs:{link:"",to:"/system-users/roles"}},[s("v-list-item-icon",{staticClass:"mr-2"},[s("v-icon",[t._v("mdi-account-group")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v(" ROLES ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-ROLES")?s("v-divider"):t._e(),t.CAN_ACCESS("SYSTEM-USERS-SUPERADMIN_BROWSE")?s("v-list-item",{attrs:{link:"",to:"/system-users/superadmin"}},[s("v-list-item-icon",{staticClass:"mr-2"},[s("v-icon",[t._v("mdi-account")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v(" SUPERADMIN ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-KEUANGAN_BROWSE")?s("v-list-item",{attrs:{link:"",to:"/system-users/keuangan"}},[s("v-list-item-icon",{staticClass:"mr-2"},[s("v-icon",[t._v("mdi-account")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v(" KEUANGAN ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-PMB_BROWSE")?s("v-list-item",{attrs:{link:"",to:"/system-users/pmb"}},[s("v-list-item-icon",{staticClass:"mr-2"},[s("v-icon",[t._v("mdi-account")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v(" TIM PMB ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-AKADEMIK_BROWSE")?s("v-list-item",{attrs:{link:"",to:"/system-users/akademik"}},[s("v-list-item-icon",{staticClass:"mr-2"},[s("v-icon",[t._v("mdi-account")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v(" AKADEMIK ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-PROGRAM-STUDI_BROWSE")?s("v-list-item",{attrs:{link:"",to:"/system-users/prodi"}},[s("v-list-item-icon",{staticClass:"mr-2"},[s("v-icon",[t._v("mdi-account")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v(" PROGRAM STUDI ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-PUSLAHTA_BROWSE")?s("v-list-item",{attrs:{link:"",to:"/system-users/puslahta"}},[s("v-list-item-icon",{staticClass:"mr-2"},[s("v-icon",[t._v("mdi-account")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v(" PUSLAHTA ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-DOSEN_BROWSE")?s("v-list-item",{attrs:{link:"",to:"/system-users/dosen"}},[s("v-list-item-icon",{staticClass:"mr-2"},[s("v-icon",[t._v("mdi-account")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v(" DOSEN ")])],1)],1):t._e(),"dosen"==t.dashboard?s("v-list-item",{attrs:{link:"",to:"/system-users/biodatadiridosen"}},[s("v-list-item-icon",{staticClass:"mr-2"},[s("v-icon",[t._v("mdi-account")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v(" BIODATA DIRI ")])],1)],1):t._e(),"mahasiswa"==t.dashboard?s("v-list-item",{attrs:{link:"",to:"/system-users/biodatadirimahasiswa"}},[s("v-list-item-icon",{staticClass:"mr-2"},[s("v-icon",[t._v("mdi-account")])],1),s("v-list-item-content",[s("v-list-item-title",[t._v(" BIODATA DIRI ")])],1)],1):t._e()],1)],1),s("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2),s("v-footer",{attrs:{app:"",padless:"",fixed:""}},[s("v-card",{staticClass:"flex",attrs:{color:"yellow darken-2",flat:"",tile:""}},[s("v-divider"),s("v-card-text",{staticClass:"py-2 black--text text-center"},[s("strong",[t._v(t._s(t.APP_NAME)+" (2021-2021)")]),t._v(" dikembangkan oleh TIM IT STAI Miftahul 'Ulum Tanjungpinang "),s("v-btn",{attrs:{icon:"",href:"https://github.com/mrizkir/stiemu"}},[s("v-icon",[t._v("mdi-github")])],1)],1)],1)],1)],1)},i=[],r=s("5530"),o=(s("5319"),s("ac1f"),s("2f62")),n={name:"SystemUserLayout",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"]},props:{showrightsidebar:{type:Boolean,default:!0},temporaryleftsidebar:{type:Boolean,default:!1}},data:function(){return{loginTime:0,drawer:null,dashboard:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(r["a"])(Object(r["a"])({},Object(o["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",DEFAULT_ROLE:"DefaultRole",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"})),{},{APP_NAME:function(){return"PortalEkampus v3"},photoUser:function(){var t,e=this.ATTRIBUTE_USER("foto");return t=""==e?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+e,t}}),watch:{loginTime:{handler:function(t){var e=this;t>=0?setTimeout((function(){e.loginTime=1==e.AUTHENTICATED?e.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},l=n,d=s("2877"),c=s("6544"),m=s.n(c),v=s("40dc"),u=s("5bc1"),h=s("8212"),_=s("8336"),p=s("b0af"),f=s("99d9"),b=s("ce7e"),g=s("553a"),S=s("132d"),A=s("adda"),E=s("8860"),x=s("da13"),T=s("8270"),C=s("5d23"),k=s("34c3"),R=s("f6c4"),y=s("e449"),I=s("f774"),O=s("2fa4"),L=s("afd9"),w=s("2a7f"),V=Object(d["a"])(l,a,i,!1,null,null,null);e["a"]=V.exports;m()(V,{VAppBar:v["a"],VAppBarNavIcon:u["a"],VAvatar:h["a"],VBtn:_["a"],VCard:p["a"],VCardText:f["d"],VDivider:b["a"],VFooter:g["a"],VIcon:S["a"],VImg:A["a"],VList:E["a"],VListItem:x["a"],VListItemAvatar:T["a"],VListItemContent:C["g"],VListItemIcon:k["a"],VListItemSubtitle:C["j"],VListItemTitle:C["k"],VMain:R["a"],VMenu:y["a"],VNavigationDrawer:I["a"],VSpacer:O["a"],VSystemBar:L["a"],VToolbarTitle:w["c"]})},e477:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:t.isReportPage}},[s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("breadcrumbs")],2)],1),s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[s("h1",{staticClass:"subheading grey--text"},[s("v-icon",{attrs:{large:""}},[t._t("icon")],2),t._t("name")],2)]),s("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[s("span",{staticClass:"ml-10 subtitle-1 green--text font-weight-bold"},[t._t("subtitle")],2)])],1),s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("desc")],2)],1)],1)},i=[],r={name:"ModuleHeader",computed:{isReportPage:function(){return!0}}},o=r,n=s("2877"),l=s("6544"),d=s.n(l),c=s("62ad"),m=s("a523"),v=s("132d"),u=s("0fd9"),h=Object(n["a"])(o,a,i,!1,null,null,null);e["a"]=h.exports;d()(h,{VCol:c["a"],VContainer:m["a"],VIcon:v["a"],VRow:u["a"]})}}]);