webpackJsonp([2],{112:function(t,e,a){function n(t){a(119)}var o=a(0)(a(116),a(124),n,"data-v-5020a088",null);t.exports=o.exports},116:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(4),o=a.n(n),r=a(2),s=a(122),i=a.n(s);e.default={computed:{cardStyle:function(){return this.data.actions?{"padding-bottom":"52px"}:{}},cardBackgroundColor:function(){if(this.data.body)return this.data.backgroundColor||this.data.body.backgroundColor||"white"},cardBodyPadding:function(){return this.data.paddingBody?{padding:this.data.paddingBody}:{}},cardContainerPadding:function(){return this.data.paddingContainer?{padding:this.data.paddingContainer}:{}}},components:o()({},r.a.cardMedia,i.a),props:{data:{type:Object,default:function(){return{}}}}}},117:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{media:{type:[Object]}}}},118:function(t,e,a){e=t.exports=a(94)(!0),e.push([t.i,"div.card__actions[data-v-5020a088]{height:52px;position:absolute;bottom:0;width:100%}div.container[data-v-5020a088]{margin:0}","",{version:3,sources:["/Users/alexng/WebstormProjects/wics-front-end/src/components/general/cards/Card.vue"],names:[],mappings:"AACA,mCACE,YAAa,AACb,kBAAmB,AAAC,SAAU,AAAC,UAAY,CAC5C,AACD,+BACE,QAAU,CACX",file:"Card.vue",sourcesContent:["\ndiv.card__actions[data-v-5020a088] {\n  height: 52px;\n  position: absolute; bottom: 0; width: 100%;\n}\ndiv.container[data-v-5020a088] {\n  margin: 0;\n}\n"],sourceRoot:""}])},119:function(t,e,a){var n=a(118);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(95)("02b18794",n,!0)},122:function(t,e,a){var n=a(0)(a(117),a(123),null,null,null);t.exports=n.exports},123:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.media?a("v-card-media",{staticClass:"center",attrs:{src:t.media.src,height:"250px",absolute:""},on:{mouseover:function(e){t.media.hoverOver()},mouseleave:function(e){t.media.model=!1}},slot:"media"},[t.media.model?a("div",{staticStyle:{position:"absolute",top:"0",left:"0",right:"0",bottom:"0","background-color":"rgba(20, 20, 20, 0.7)","text-align":"center"}},[a("v-container",[t.media.content&&t.media.content.title?a("h5",{staticClass:"white--text",staticStyle:{margin:"auto 0"}},[t._v(t._s(t.media.content.title))]):t._e(),t._v(" "),t.media.content&&t.media.content.p?a("p",{staticClass:"white--text",staticStyle:{margin:"auto 0"}},[t._v(t._s(t.media.content.p))]):t._e()])],1):t._e()]):t._e()},staticRenderFns:[]}},124:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{class:t.data.flex},[a("v-card",{staticClass:"mb-2",class:t.cardBackgroundColor,staticStyle:{"background-color":"rgba(20, 20, 20, 0.8)"},style:t.cardStyle,attrs:{raised:"",flat:t.data.flat}},[a("wics-card-media",{attrs:{media:t.data.media}}),t._v(" "),t._t("media"),t._v(" "),t.data.body?a("v-card-title",{style:[t.cardBodyPadding]},[a("v-container",{style:[t.cardContainerPadding],attrs:{fluid:""}},[t._t("default")],2)],1):t._e(),t._v(" "),t._t("actions")],2)],1)},staticRenderFns:[]}},135:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=a(4),r=a.n(o),s=a(3),i=a.n(s),c=a(112),d=a.n(c),l=a(25),u=a.n(l),f=a(159),v=a.n(f),A=a(161),p=a.n(A),g=a(1),C=a(2);e.default={computed:i()({},a.i(g.a)(["page"]),{cardTitleColor:function(){return this.card.body.color||"black--text"},cardActionsBackgroundColor:function(){return(this.card.body.backgroundColor||"accent")+"--darken-2"}}),props:{card:{required:!0,type:Object}},components:(n={},r()(n,C.a.card,d.a),r()(n,C.a.alert,v.a),r()(n,C.a.blockquote,p.a),r()(n,C.a.list,u.a),n)}},136:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(4),o=a.n(n);e.default={props:{data:{type:[Object],required:!0}},computed:{alertType:function(){return this.data.type?o()({},this.data.type,!0):{info:!0}}}}},137:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{interval:5e3,items:[{src:"/static/images/events/event1.jpg"},{src:"/static/images/events/img2.jpg"},{src:"/static/images/events/cnc.png"},{src:"/static/images/events/img3.jpg"},{src:"/static/images/events/img1.jpg"}]}},computed:{carouselStyle:function(){return{height:"100%"}}}}},138:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{data:{type:[Object]}}}},139:function(t,e,a){e=t.exports=a(94)(!0),e.push([t.i,"blockquote.white--text[data-v-1e6376a1]{border-left:5px solid #fff}","",{version:3,sources:["/Users/alexng/WebstormProjects/wics-front-end/src/components/general/text/Blockquote.vue"],names:[],mappings:"AACA,wCACE,0BAA6B,CAC9B",file:"Blockquote.vue",sourcesContent:["\nblockquote.white--text[data-v-1e6376a1] {\n  border-left: 5px solid white;\n}\n"],sourceRoot:""}])},140:function(t,e,a){e=t.exports=a(94)(!0),e.push([t.i,"ul.list--group[data-v-29b1e8e7]:after{background-color:#fff}","",{version:3,sources:["/Users/alexng/WebstormProjects/wics-front-end/src/components/general/cards/Cards.vue"],names:[],mappings:"AACA,sCACE,qBAAwB,CACzB",file:"Cards.vue",sourcesContent:["\nul.list--group[data-v-29b1e8e7]:after {\n  background-color: white;\n}\n"],sourceRoot:""}])},141:function(t,e,a){e=t.exports=a(94)(!0),e.push([t.i,"div.carousel,div.carousel div.carousel__left button div.btn__content,div.carousel div.carousel__right button div.btn__content{background-color:hsla(0,0%,8%,.5)}div.carousel{overflow:visible}div.carousel__controls{height:53px}.fade-enter-active,.fade-leave-active,.fade-leave-to{-webkit-transition:.3s ease-out;transition:.3s ease-out;position:absolute;top:0;left:0}.fade-enter,.fade-leave,.fade-leave-to{opacity:0}","",{version:3,sources:["/Users/alexng/WebstormProjects/wics-front-end/src/components/general/presentation/Carousel.vue"],names:[],mappings:"AAKA,8HAFE,iCAAqC,CAKtC,AAHD,aAEE,gBAAkB,CACnB,AACD,uBACE,WAAa,CACd,AACD,qDAGE,gCAAkC,AAClC,wBAA0B,AAC1B,kBAAmB,AACnB,MAAO,AACP,MAAQ,CACT,AACD,uCAGE,SAAW,CACZ",file:"Carousel.vue",sourcesContent:["\ndiv.carousel div.carousel__right button div.btn__content,\ndiv.carousel div.carousel__left button div.btn__content {\n  background-color: rgba(20,20,20,0.5);\n}\ndiv.carousel {\n  background-color: rgba(20,20,20,0.5);\n  overflow: visible;\n}\ndiv.carousel__controls {\n  height: 53px;\n}\n.fade-enter-active,\n.fade-leave-active,\n.fade-leave-to {\n  -webkit-transition: 0.3s ease-out;\n  transition: 0.3s ease-out;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.fade-enter,\n.fade-leave,\n.fade-leave-to {\n  opacity: 0;\n}"],sourceRoot:""}])},142:function(t,e,a){var n=a(139);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(95)("a81878c6",n,!0)},143:function(t,e,a){var n=a(140);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(95)("3fd48260",n,!0)},144:function(t,e,a){var n=a(141);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(95)("9103e9e4",n,!0)},158:function(t,e,a){function n(t){a(143)}var o=a(0)(a(135),a(163),n,"data-v-29b1e8e7",null);t.exports=o.exports},159:function(t,e,a){var n=a(0)(a(136),a(164),null,null,null);t.exports=n.exports},160:function(t,e,a){function n(t){a(144)}var o=a(0)(a(137),a(165),n,null,null);t.exports=o.exports},161:function(t,e,a){function n(t){a(142)}var o=a(0)(a(138),a(162),n,"data-v-1e6376a1",null);t.exports=o.exports},162:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.data?a("blockquote",{class:t.data.color},[t._v("\n  "+t._s(t.data.text)+"\n")]):t._e()},staticRenderFns:[]}},163:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{class:t.card.body.flex,attrs:{xs12:""}},[a("transition",[a("wics-card",{attrs:{data:t.card}},[a("v-flex",{attrs:{xs12:""}},[a("h3",{staticClass:"mt-3",class:[t.cardTitleColor]},[t._v(t._s(t.card.body.title))]),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.card.body.components,function(t,e){return a(t.tag,{key:e,tag:"component",attrs:{data:t.data}})}))],1),t._v(" "),t.card.actions?a("v-card-actions",{class:[t.cardActionsBackgroundColor],slot:"actions"},[a("v-spacer"),t._v(" "),t._l(t.card.actions,function(e){return a("v-btn",{key:e.icon,attrs:{icon:"",href:e.href},slot:"actions"},[a("v-icon",[t._v(t._s(e.icon))])],1)})],2):t._e()],1)],1)],1)},staticRenderFns:[]}},164:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.data?a("v-alert",t._b({attrs:{value:"true"}},"v-alert",t.alertType,!1),[t._v(t._s(t.data.alert))]):t._e()},staticRenderFns:[]}},165:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{position:"absolute",top:"0",left:"4px",right:"4px",bottom:"0",height:"100%"}},[a("v-carousel",{style:t.carouselStyle,attrs:{icon:"stop",cycle:"",interval:t.interval,dark:""}},[t._t("default"),t._v(" "),t._l(t.items,function(t,e){return a("v-carousel-item",{key:e,attrs:{transition:"fade",reverseTransition:"fade",src:t.src}})})],2)],1)},staticRenderFns:[]}},206:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=a(4),r=a.n(o),s=a(3),i=a.n(s),c=a(112),d=a.n(c),l=a(158),u=a.n(l),f=a(160),v=a.n(f),A=a(1),p=a(2);e.default={mounted:function(){document.getElementsByTagName("main")[0].style["padding-top"]="0px"},data:function(){return{picker:null,backgroundSrc:"/static/images/slc-large-min-bright.jpg"}},computed:i()({},a.i(A.a)(["page"]),{backgroundStyle:function(){return{"background-image":'url("'+this.backgroundSrc+'")',"background-size":"cover","background-position":"center unset","background-repeat":"no-repeat no-repeat"}}}),components:(n={},r()(n,p.a.cards,u.a),r()(n,p.a.card,d.a),r()(n,p.a.carousel,v.a),n)}},213:function(t,e,a){e=t.exports=a(94)(!0),e.push([t.i,".landing[data-v-3e550f37]{min-height:100vh}.title[data-v-3e550f37]{position:absolute;top:5%;text-align:center}.fa-envelope[data-v-3e550f37]:before{font-size:400%;color:#000;margin:2%}.fa-facebook[data-v-3e550f37]:before{font-size:400%;color:#00008b;margin:2%}.fa-twitter[data-v-3e550f37]:before{font-size:400%;color:#00bfff;margin:2%}.fa-linkedin[data-v-3e550f37]:before{font-size:400%;color:#4169e1;margin:2%}.fa-instagram[data-v-3e550f37]:before{font-size:400%;color:#639;margin:2%}","",{version:3,sources:["/Users/alexng/WebstormProjects/wics-front-end/src/components/pages/Contacts.vue"],names:[],mappings:"AACA,0BACE,gBAAkB,CACnB,AACD,wBACE,kBAAmB,AACnB,OAAQ,AACR,iBAAmB,CACpB,AACD,qCACE,eAAgB,AAChB,WAAa,AACb,SAAW,CACZ,AACD,qCACE,eAAgB,AAChB,cAAgB,AAChB,SAAW,CACZ,AACD,oCACE,eAAgB,AAChB,cAAmB,AACnB,SAAW,CACZ,AACD,qCACE,eAAgB,AAChB,cAAiB,AACjB,SAAW,CACZ,AACD,sCACE,eAAgB,AAChB,WAAqB,AACrB,SAAW,CACZ",file:"Contacts.vue",sourcesContent:["\n.landing[data-v-3e550f37] {\n  min-height: 100vh;\n}\n.title[data-v-3e550f37]{\n  position: absolute;\n  top: 5%;\n  text-align: center;\n}\n.fa-envelope[data-v-3e550f37]:before{\n  font-size: 400%;\n  color: black;\n  margin: 2%;\n}\n.fa-facebook[data-v-3e550f37]:before{\n  font-size: 400%;\n  color: darkblue;\n  margin: 2%;\n}\n.fa-twitter[data-v-3e550f37]:before{\n  font-size: 400%;\n  color: deepskyblue;\n  margin: 2%;\n}\n.fa-linkedin[data-v-3e550f37]:before{\n  font-size: 400%;\n  color: royalblue;\n  margin: 2%;\n}\n.fa-instagram[data-v-3e550f37]:before{\n  font-size: 400%;\n  color: rebeccapurple;\n  margin: 2%;\n}\n"],sourceRoot:""}])},216:function(t,e,a){var n=a(213);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(95)("627230a6",n,!0)},28:function(t,e,a){function n(t){a(216)}var o=a(0)(a(206),a(289),n,"data-v-3e550f37",null);t.exports=o.exports},289:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("div",{staticClass:"text-xs-center landing card__media"},[a("div",{staticClass:"card__media__background",style:t.backgroundStyle}),t._v(" "),a("div",{staticClass:"card__media__content",staticStyle:{"padding-top":"28px"}},[a("v-container",{staticClass:"mt-5",staticStyle:{padding:"4px"}},[a("div",[a("h1",[t._v(" Contact")])]),t._v(" "),a("v-layout",{attrs:{"justify-space-around":""}},[a("span",{staticClass:"group pa-2"},[a("a",{attrs:{href:"https://www.facebook.com/ryersonwics?fref=ts"}},[a("v-icon",{attrs:{"x-large":""}},[t._v("fa-facebook")])],1),t._v(" "),a("v-icon",{attrs:{"x-large":""}},[t._v("fa-twitter")]),t._v(" "),a("v-icon",{attrs:{"x-large":""}},[t._v("fa-instagram")]),t._v(" "),a("v-icon",{attrs:{"x-large":""}},[t._v("fa-envelope")]),t._v(" "),a("a",{attrs:{href:"https://ca.linkedin.com/company/ryersonwics"}},[a("v-icon",{attrs:{"x-large":""}},[t._v("fa-linkedin")])],1)],1)])],1)],1)])])},staticRenderFns:[]}}});
//# sourceMappingURL=2.6b2d4f9d099ea4ce4516.js.map