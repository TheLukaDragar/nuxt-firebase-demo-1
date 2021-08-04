(window.webpackJsonp=window.webpackJsonp||[]).push([[32,10],{512:function(e,t,r){"use strict";r.r(t);var n={props:{disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}}},o=r(51),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"text-white font-bold py-2 px-4 rounded",class:{"bg-blue-500":!e.disabled&&!e.loading,"hover:bg-blue-700":!e.disabled&&!e.loading,"bg-gray-600":e.disabled||e.loading,"cursor-not-allowed":e.disabled,"cursor-wait":e.loading},attrs:{disabled:e.disabled},on:{click:function(t){return e.$emit("click")}}},[e.loading?r("div",[e._v("Loading...")]):e._t("default")],2)}),[],!1,null,"254cc730",null);t.default=component.exports},531:function(e,t,r){var content=r(566);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("056d55e6",content,!0,{sourceMap:!1})},544:function(e,t,r){"use strict";r.r(t);var n={name:"req",props:{req:{type:Object,required:!0}},data:function(){return{}},computed:{color:function(){return"secondary"}}},o=(r(565),r(51)),c=r(107),l=r.n(c),d=r(166),f=r(523),v=r(510),m=r(576),h=r(137),_=r(507),k=r(45),w=r(174),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex"},[r("v-card",{attrs:{height:"320",width:"500",color:"#1a1a1a",dark:""}},[r("v-toolbar",{attrs:{flat:"",height:"50",color:"transparent"}},[r("v-toolbar-title",[e._v("\n\n          "+e._s(e.req.rider_name)+"\n\n         \n        ")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-chip",{attrs:{color:"primary","text-color":"white"}},[r("v-avatar",{staticClass:"secondary",attrs:{left:""}})],1)],1),e._v(" "),r("v-img",{attrs:{gradient:"to bottom, rgba(0,0,0,0.3), rgba(0,0,0,.1)",alt:e.req.rider_name,height:"220",dark:""}},[r("v-card-title",[e._v("\n          "+e._s(e.req.request)+"\n\n\n        ")]),e._v(" "),r("v-card-subtitle",[e._v(e._s(e._f("toDate")(e.req.timestamp)))])],1)],1)],1)}),[],!1,null,"722b45f4",null);t.default=component.exports;l()(component,{VAvatar:d.a,VCard:f.a,VCardSubtitle:v.b,VCardTitle:v.d,VChip:m.a,VImg:h.a,VSpacer:_.a,VToolbar:k.a,VToolbarTitle:w.a})},565:function(e,t,r){"use strict";r(531)},566:function(e,t,r){var n=r(17)((function(i){return i[1]}));n.push([e.i,".v-card--reveal[data-v-722b45f4]{\n  bottom:0;\n  opacity:1!important;\n  position:absolute;\n  width:100%\n}\n.notrounded-corner[data-v-722b45f4]{\n  border-radius:0!important\n}",""]),n.locals={},e.exports=n},590:function(e,t,r){"use strict";r.r(t);var n=r(3),o=r(5);r(57),r(9),r(10),r(7),r(8),r(14),r(15),r(28);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={components:{RiderRequestCard:r(544).default},name:"TeamDetails",props:{team:{type:Object,required:!0}},data:function(){return{rider_requests:[],listenersStarted:!1,permissionGranted:!1,idToken:"",loading:!1}},computed:{},methods:{requestPermission:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Notification.requestPermission();case 3:r=t.sent,e.permissionGranted="granted"===r,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},getIdToken:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.$fire.messaging.getToken();case 4:r=t.sent,t.next=12;break;case 7:t.prev=7,t.t0=t.catch(1),console.error("An error occurred while retrieving token. ",t.t0),e.idToken="",e.loading=!1;case 12:if(!r){t.next=18;break}return e.idToken=r,t.next=16,e.writeToFirestore(r);case 16:t.next=20;break;case 18:console.info("No Instance ID token available. Request permission to generate one."),e.idToken="";case 20:alert("The id token is: ".concat(e.idToken)),e.loading=!1;case 22:case"end":return t.stop()}}),t,null,[[1,7]])})))()},startListeners:function(){this.startOnMessageListener(),this.startTokenRefreshListener(),this.listenersStarted=!0},startOnMessageListener:function(){var e=this;this.$fire.messaging.onMessage((function(t){console.info("Message received. ",t);var r=t||{};console.info("Message received. 2",r.notification.body),e.$toast.info(r.notification.body,{position:"top-right",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1})}))},startTokenRefreshListener:function(){var e=this;this.$fire.messaging.onTokenRefresh(Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$fire.messaging.getToken();case 3:return r=t.sent,e.idToken=r,t.next=7,e.writeToFirestore(currentToken);case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error("Unable to retrieve refreshed token ",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])}))))},sendTestMessage:function(){var e=this;try{setTimeout((function(){e.$fire.functions.httpsCallable("sendTestPushMessage")({token:e.idToken})}),5e3)}catch(e){alert(e)}},writeToFirestore:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.$fire.firestore.collection("users").doc(t.$fire.auth.currentUser.uid),r.prev=1,r.next=4,n.set({FCM_token:e},{merge:!0});case 4:r.next=10;break;case 6:return r.prev=6,r.t0=r.catch(1),alert(r.t0),r.abrupt("return");case 10:t.$toast.info("Obvestila boste prejemali na to napravo FCM_token: "+e,{position:"top-right",timeout:1e4,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!1,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1});case 11:case"end":return r.stop()}}),r,null,[[1,6]])})))()}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.$fire.firestore;try{r.collection("teams").doc(e.team.id).collection("bar").onSnapshot((function(t){t.docChanges().forEach((function(t){"added"===t.type&&e.rider_requests.push(l(l({},t.doc.data()),{},{id:t.doc.id}))})),console.log(e.rider_requests)}))}catch(t){console.error(t),e.$nuxt.error({statusCode:404,message:"erorr"})}case 2:case"end":return t.stop()}}),t)})))()}},f=r(51),v=r(107),m=r.n(v),h=r(576),_=r(648),k=r(584),w=r(509),O=r(163),T=r(633),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("div",{staticClass:"mb-5"},[r("div",{staticClass:"display-1"},[e._v(e._s(e.team.name))])]),e._v(" "),r("div",{staticClass:" md:w-2/3 mx-auto mt-10  items-center"},[e._v("\n\n    //IMPLEMENT TEAM UPDATE LISTENER HERE\n    //ADD TEAM MEMBERS TAB\n    \n     \n\n    "),r("div",{staticClass:"text-h4"},[e._v(e._s(e.team.name))]),e._v(" "),r("div",{staticClass:"text-s"},[e._v("\n      "+e._s(e.team.created)+"\n    ")]),e._v(" "),r("v-chip-group",{staticClass:"uppercase font-semibold flex flex-wrap "},e._l(e.tags,(function(t){return r("v-chip",{key:t,staticClass:"mx-2 first:ml-0 theme--light",attrs:{pill:"",label:"","text-color":"white",color:"info"}},[r("v-icon",{attrs:{left:""}},[e._v("\n          mdi-label\n        ")]),e._v("\n        "+e._s(t)+"\n      ")],1)})),1)],1),e._v(" "),r("div",{staticClass:"flex border rounded shadow p-5  md:w-2/3 mx-auto mt-4 mb-4 items-center"},[r("div",[e._v("\n\n      Enable messaging\n    ")]),e._v(" "),r("Btn",{staticClass:"ma-1",attrs:{disabled:e.listenersStarted},on:{click:e.startListeners}},[e._v("Start Listeners")]),e._v(" "),r("Btn",{staticClass:"ma-1",attrs:{disabled:e.permissionGranted||!e.listenersStarted},on:{click:e.requestPermission}},[e._v("\n      Request Permission\n    ")]),e._v(" "),r("Btn",{staticClass:"ma-1",attrs:{disabled:!e.listenersStarted||!e.permissionGranted||""!==e.idToken,loading:e.loading},on:{click:e.getIdToken}},[e._v("\n      Get ID Token\n    ")]),e._v(" "),r("Btn",{staticClass:"ma-1",attrs:{disabled:""===e.idToken},on:{click:e.sendTestMessage}},[e._v("\n      Send Test Push Message\n    ")])],1),e._v(" "),r("v-row",e._l(e.rider_requests,(function(e){return r("v-col",{key:e.id,attrs:{col:"5"}},[r("rider-request-card",{attrs:{req:e}})],1)})),1)],1)}),[],!1,null,"56e44707",null);t.default=component.exports;m()(component,{Btn:r(512).default,RiderRequestCard:r(544).default}),m()(component,{VChip:h.a,VChipGroup:_.a,VCol:k.a,VContainer:w.a,VIcon:O.a,VRow:T.a})}}]);