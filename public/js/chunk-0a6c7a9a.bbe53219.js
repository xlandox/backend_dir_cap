(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a6c7a9a"],{"43b3":function(t,s,o){"use strict";var e=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",[o("b-row",[o("b-col",{staticClass:"centrar",attrs:{cols:"12"}},[o("h2",{staticClass:"my-5 lineas"},[t._v(t._s(t.msg))])])],1)],1)},n=[],a={name:"Title",props:{msg:String}},r=a,i=o("2877"),c=Object(i["a"])(r,e,n,!1,null,null,null);s["a"]=c.exports},a55b:function(t,s,o){"use strict";o.r(s);var e=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"login"},[o("Title",{attrs:{msg:"Iniciar Sesión"}}),o("b-row",{staticClass:"justify-content-center"},[o("b-col",{attrs:{sm:"6"}},[o("form",{on:{submit:function(s){return s.preventDefault(),t.login()}}},[o("b-form-group",{attrs:{label:"Correo electrónico:"}},[o("b-form-input",{attrs:{type:"email",required:"",placeholder:"Introduzca su correo"},model:{value:t.usuario.correo,callback:function(s){t.$set(t.usuario,"correo",s)},expression:"usuario.correo"}})],1),o("b-form-group",{attrs:{label:"Contraseña:"}},[o("b-form-input",{attrs:{type:"password",required:"",placeholder:"Introduzca su contraseña"},model:{value:t.usuario.contra,callback:function(s){t.$set(t.usuario,"contra",s)},expression:"usuario.contra"}})],1),o("div",{staticClass:"d-flex justify-content-center"},[o("b-button",{staticClass:"my-5 mx-2",attrs:{type:"submit",variant:"primary"}},[t._v("Iniciar")]),o("b-button",{staticClass:"my-5 mx-2",attrs:{variant:"success",to:{name:"Registro"}}},[t._v("Registrarse")])],1)],1)])],1),o("b-row",{staticClass:"justify-content-center"},[o("b-col",{attrs:{sm:"6"}},[o("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:t.mensaje.color},on:{dismissed:function(s){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(" "+t._s(t.mensaje.texto)+" ")])],1)],1)],1)},n=[],a=o("5530"),r=o("2f62"),i=o("43b3"),c={name:"Login",data:function(){return{mensaje:{color:"",texto:""},dismissSecs:5,dismissCountDown:0,usuario:{correo:"",contra:""}}},components:{Title:i["a"]},methods:Object(a["a"])(Object(a["a"])({countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs}},Object(r["b"])(["guardarUsuario"])),{},{login:function(){var t=this;this.axios.post("/login",this.usuario).then((function(s){t.mensaje.color="primary",t.mensaje.texto="El inicio de sesion fue exitoso",t.showAlert();var o=s.data.token;t.guardarUsuario(o)})).catch((function(s){t.mensaje.color="info",t.mensaje.texto=s.response.data.mensaje,t.showAlert()}))}})},u=c,l=o("2877"),m=Object(l["a"])(u,e,n,!1,null,null,null);s["default"]=m.exports}}]);
//# sourceMappingURL=chunk-0a6c7a9a.bbe53219.js.map