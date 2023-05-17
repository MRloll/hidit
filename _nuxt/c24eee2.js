(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{551:function(t,e,r){"use strict";var n=r(76),o=r(2);e.a=o.a.extend({name:"rippleable",directives:{ripple:n.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}})},555:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4MV8xNzc3KSI+CjxwYXRoIGQ9Ik0xMi42MDU1IDIuMDkzNjRDNy4wODU0NyAyLjA5MzY0IDIuNjA1NDcgNi41NzM2NCAyLjYwNTQ3IDEyLjA5MzZDMi42MDU0NyAxNy42MTM2IDcuMDg1NDcgMjIuMDkzNiAxMi42MDU1IDIyLjA5MzZDMTguMTI1NSAyMi4wOTM2IDIyLjYwNTUgMTcuNjEzNiAyMi42MDU1IDEyLjA5MzZDMjIuNjA1NSA2LjU3MzY0IDE4LjEyNTUgMi4wOTM2NCAxMi42MDU1IDIuMDkzNjRaTTkuODk1NDcgMTYuMzgzNkw2LjMwNTQ3IDEyLjc5MzZDNS45MTU0NyAxMi40MDM2IDUuOTE1NDcgMTEuNzczNiA2LjMwNTQ3IDExLjM4MzZDNi42OTU0NyAxMC45OTM2IDcuMzI1NDcgMTAuOTkzNiA3LjcxNTQ3IDExLjM4MzZMMTAuNjA1NSAxNC4yNjM2TDE3LjQ4NTUgNy4zODM2NEMxNy44NzU1IDYuOTkzNjQgMTguNTA1NSA2Ljk5MzY0IDE4Ljg5NTUgNy4zODM2NEMxOS4yODU1IDcuNzczNjQgMTkuMjg1NSA4LjQwMzY0IDE4Ljg5NTUgOC43OTM2NEwxMS4zMDU1IDE2LjM4MzZDMTAuOTI1NSAxNi43NzM2IDEwLjI4NTUgMTYuNzczNiA5Ljg5NTQ3IDE2LjM4MzZaIiBmaWxsPSIjODBGRjdFIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTgxXzE3NzciPgo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjYwNTQ2OSAwLjA5MzY0MzIpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="},560:function(t,e,r){var content=r(561);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("e8a466fa",content,!0,{sourceMap:!1})},561:function(t,e,r){var n=r(17)((function(i){return i[1]}));n.push([t.i,".v-rating{max-width:100%;white-space:nowrap}.v-rating .v-icon{border-radius:50%;outline:none;padding:.5rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-rating .v-icon:after{display:none}.v-application--is-ltr .v-rating .v-icon{-webkit-transform:scaleX(1);-ms-transform:scaleX(1);-o-transform:scaleX(1);transform:scaleX(1)}.v-application--is-rtl .v-rating .v-icon{-webkit-transform:scaleX(-1);-ms-transform:scaleX(-1);-o-transform:scaleX(-1);transform:scaleX(-1)}.v-rating--readonly .v-icon{pointer-events:none}.v-rating--dense .v-icon{padding:.1rem}",""]),n.locals={},t.exports=n},600:function(t,e,r){"use strict";r(21),r(265),r(47),r(560);var n=r(101),o=r(28),l=r(162),c=r(161),m=r(551),d=r(20),v=r(0),h=r(6);e.a=Object(h.a)(o.a,l.a,m.a,c.a,d.a).extend({name:"v-rating",props:{backgroundColor:{type:String,default:"accent"},color:{type:String,default:"primary"},clearable:Boolean,dense:Boolean,emptyIcon:{type:String,default:"$ratingEmpty"},fullIcon:{type:String,default:"$ratingFull"},halfIcon:{type:String,default:"$ratingHalf"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,size:[Number,String],value:{type:Number,default:0},iconLabel:{type:String,default:"$vuetify.rating.ariaLabel.icon"}},data:function(){return{hoverIndex:-1,internalValue:this.value}},computed:{directives:function(){return this.readonly||!this.ripple?[]:[{name:"ripple",value:{circle:!0}}]},iconProps:function(){var t=this.$props,e=t.dark,r=t.large,n=t.light,o=t.medium,small=t.small;return{dark:e,large:r,light:n,medium:o,size:t.size,small:small,xLarge:t.xLarge,xSmall:t.xSmall}},isHovering:function(){return this.hover&&this.hoverIndex>=0}},watch:{internalValue:function(t){t!==this.value&&this.$emit("input",t)},value:function(t){this.internalValue=t}},methods:{createClickFn:function(i){var t=this;return function(e){if(!t.readonly){var r=t.genHoverIndex(e,i);t.clearable&&t.internalValue===r?t.internalValue=0:t.internalValue=r}}},createProps:function(i){var t={index:i,value:this.internalValue,click:this.createClickFn(i),isFilled:Math.floor(this.internalValue)>i,isHovered:Math.floor(this.hoverIndex)>i};return this.halfIncrements&&(t.isHalfHovered=!t.isHovered&&(this.hoverIndex-i)%1>0,t.isHalfFilled=!t.isFilled&&(this.internalValue-i)%1>0),t},genHoverIndex:function(t,i){var e=this.isHalfEvent(t);return this.halfIncrements&&this.$vuetify.rtl&&(e=!e),i+(e?.5:1)},getIconName:function(t){var e=this.isHovering?t.isHovered:t.isFilled,r=this.isHovering?t.isHalfHovered:t.isHalfFilled;return e?this.fullIcon:r?this.halfIcon:this.emptyIcon},getColor:function(t){if(this.isHovering){if(t.isHovered||t.isHalfHovered)return this.color}else if(t.isFilled||t.isHalfFilled)return this.color;return this.backgroundColor},isHalfEvent:function(t){if(this.halfIncrements){var rect=t.target&&t.target.getBoundingClientRect();if(rect&&t.pageX-rect.left<rect.width/2)return!0}return!1},onMouseEnter:function(t,i){var e=this;this.runDelay("open",(function(){e.hoverIndex=e.genHoverIndex(t,i)}))},onMouseLeave:function(){var t=this;this.runDelay("close",(function(){return t.hoverIndex=-1}))},genItem:function(i){var t=this,e=this.createProps(i);if(this.$scopedSlots.item)return this.$scopedSlots.item(e);var r={click:e.click};return this.hover&&(r.mouseenter=function(e){return t.onMouseEnter(e,i)},r.mouseleave=this.onMouseLeave,this.halfIncrements&&(r.mousemove=function(e){return t.onMouseEnter(e,i)})),this.$createElement(n.a,this.setTextColor(this.getColor(e),{attrs:{"aria-label":this.$vuetify.lang.t(this.iconLabel,i+1,Number(this.length))},directives:this.directives,props:this.iconProps,on:r}),[this.getIconName(e)])}},render:function(t){var e=this,r=Object(v.h)(Number(this.length)).map((function(i){return e.genItem(i)}));return t("div",{staticClass:"v-rating",class:{"v-rating--readonly":this.readonly,"v-rating--dense":this.dense}},r)}})},610:function(t,e,r){var content=r(700);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("1854f2f0",content,!0,{sourceMap:!1})},699:function(t,e,r){"use strict";r(610)},700:function(t,e,r){var n=r(17)((function(i){return i[1]}));n.push([t.i,'.watch-course .tabs{direction:ltr}.watch-course .tabs .v-tabs .v-tab{position:relative}.watch-course .tabs .v-tabs .v-tab:after{background:#e6f7f9;border-radius:50%;bottom:-4px;content:"";height:8px;left:50%;position:absolute;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%);-webkit-transition:width .3s ease-in-out;-o-transition:width .3s ease-in-out;transition:width .3s ease-in-out;width:8px}.watch-course .lessons .lesson-name p{margin:0 10px}.watch-course .lessons .lesson-name .img p{-webkit-box-pack:center;-ms-flex-pack:center;background:hsla(0,0%,100%,.1);border:1px solid #00adc4;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:30px;-webkit-justify-content:center;justify-content:center;width:30px}.watch-course .video .iframe{border-radius:30px;overflow:hidden}.watch-course .video .iframe iframe{min-height:422.23px;width:100%!important}.watch-course .video .text .wrapper>*{margin-bottom:8px}.watch-course .video .text .wrapper h4{color:#00adc4}.watch-course .video .text .wrapper p{margin-bottom:30px}.watch-course .comments h2{margin-bottom:24px}.watch-course .comments .add-comment textarea{background:hsla(0,0%,100%,.05)!important;height:102.37px;margin-bottom:24px;padding:10px 20px;resize:none;width:100%}.watch-course .comments .add-comment textarea::-webkit-input-placeholder{left:20px;position:absolute;top:10px}.watch-course .comments .add-comment textarea::-moz-placeholder{left:20px;position:absolute;top:10px}.watch-course .comments .add-comment textarea:-ms-input-placeholder{left:20px;position:absolute;top:10px}.watch-course .comments .add-comment textarea::-ms-input-placeholder{left:20px;position:absolute;top:10px}.watch-course .comments .add-comment textarea::placeholder{left:20px;position:absolute;top:10px}.watch-course .comments .add-comment textarea:focus-visible{border-color:#00adc4;outline:#00adc4}.watch-course .comments .add-comment .button{margin-bottom:10px}.watch-course .comments .comment{height:100%}.watch-course .comments .comment>*{margin-bottom:8px}.watch-course .comments .comment .rating{margin:0 10px}',""]),n.locals={},t.exports=n},729:function(t,e,r){"use strict";r.r(e);var n=r(271),o=r(546),l=r(548),c=r(539),m=r(600),d=r(545),v=r(706),h=r(712),f={validate:function(t){return!!t.params.id}},x=(r(699),r(75)),component=Object(x.a)(f,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"watch-course"},[e("div",{staticClass:"linear-ellipses left"}),t._v(" "),e(l.a,[e("h2",[t._v("course")]),t._v(" "),e("div",{staticClass:"tabs",attrs:{"data-aos":"zoom-in-up"}},[e(h.a,{staticClass:"my-5",attrs:{dark:"","background-color":"transparent","hide-slider":""}},t._l(5,(function(r){return e(v.a,{key:r},[t._v(" package name ")])})),1)],1),t._v(" "),e("div",{staticClass:"lessons blur semi-border radius-30 pa-7",attrs:{"data-aos":"zoom-in-up"}},[e(d.a,t._l(9,(function(n){return e(o.a,{key:n,attrs:{cols:"6",md:"4","data-aos":"zoom-in-up"}},[e("div",{staticClass:"lesson-name d-flex align-center"},[e("div",{staticClass:"img"},[e("p",[e("span",[t._v(t._s(n))])]),t._v(" "),e("img",{staticClass:"d-none",attrs:{src:r(555),alt:"checkl"}})]),t._v(" "),e("p",[t._v("lesson name")])])])})),1)],1),t._v(" "),e("div",{staticClass:"video blur mt-5 radius-30 pa-7 semi-border",attrs:{"data-aos":"zoom-in-up"}},[e("div",{staticClass:"iframe mb-5",attrs:{"data-aos":"zoom-in-up"}},[e("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/kAqWPegnnWY",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""}})]),t._v(" "),e("div",{staticClass:"text"},[e(d.a,[e(o.a,{attrs:{"cols-12":"",md:"8","data-aos":"zoom-in-up"}},[e("div",{staticClass:"wrapper"},[e("h2",[t._v("Create High-Fidelity Designs and Prototypes")]),t._v(" "),e("h4",[t._v("Create High-Fidelity Designs and Prototypes")]),t._v(" "),e("p",[t._v("\n                Lorem ipsum dolor sit amet consectetur. Enim nibh in arcu\n                mauris mauris in mattis. Ullamcorper praesent non purus felis\n                molestie eget.\n              ")])])]),t._v(" "),e(o.a,{staticClass:"text-center text-md-right",attrs:{cols:"12",md:"4","data-aos":"zoom-in-up"}},[e(n.a,{staticClass:"button px-10",attrs:{elevation:"0"}},[t._v("\n              download this video\n            ")])],1)],1)],1)]),t._v(" "),e("section",{staticClass:"comments pb-0"},[e("h2",[t._v("Students Comment")]),t._v(" "),e(c.a,{staticClass:"add-comment",attrs:{"data-aos":"zoom-in-up"}},[e("textarea",{staticClass:"semi-border blur",attrs:{type:"text",placeholder:"add your comment here...."}}),t._v(" "),e(n.a,{staticClass:"button px-10",attrs:{elevation:"0"}},[t._v("send")])],1),t._v(" "),e(d.a,{staticClass:"mt-5"},[e(o.a,{attrs:{cols:"12",md:"6","data-aos":"zoom-in-up"}},[e("div",{staticClass:"comment blur pa-7 radius-30 semi-border"},[e("h3",[t._v("Ahmed Mansour")]),t._v(" "),e("div",{staticClass:"rate d-flex align-center"},[e("span",[t._v("rate")]),t._v(" "),e(m.a,{staticClass:"rating",attrs:{readonly:"",color:"#FFF61A","background-color":"grey darken-1","empty-icon":"$ratingFull",small:"",value:5}})],1),t._v(" "),e("p",[t._v("\n              Lorem ipsum dolor sit amet consectetur. Enim nibh in arcu mauris\n              mauris in mattis. Ullamcorper praesent non purus felis molestie\n              eget.\n            ")])])]),t._v(" "),e(o.a,{attrs:{cols:"12",md:"6","data-aos":"zoom-in-up"}},[e("div",{staticClass:"comment blur pa-7 radius-30 semi-border"},[e("h3",[t._v("Ahmed Mansour")]),t._v(" "),e("div",{staticClass:"rate d-flex align-center"},[e("span",[t._v("rate")]),t._v(" "),e(m.a,{staticClass:"rating",attrs:{readonly:"",color:"#FFF61A","background-color":"grey darken-1","empty-icon":"$ratingFull",small:"",value:5}})],1),t._v(" "),e("p",[t._v("\n              Lorem ipsum dolor sit amet consectetur. Enim nibh in arcu mauris\n              mauris in mattis. Ullamcorper praesent non purus felis molestie\n              eget.\n            ")])])]),t._v(" "),e(o.a,{attrs:{cols:"12",md:"6","data-aos":"zoom-in-up"}},[e("div",{staticClass:"comment blur pa-7 radius-30 semi-border"},[e("h3",[t._v("Ahmed Mansour")]),t._v(" "),e("div",{staticClass:"rate d-flex align-center"},[e("span",[t._v("rate")]),t._v(" "),e(m.a,{staticClass:"rating",attrs:{readonly:"",color:"#FFF61A","background-color":"grey darken-1","empty-icon":"$ratingFull",small:"",value:5}})],1),t._v(" "),e("p",[t._v("\n              Lorem ipsum dolor sit amet consectetur. Enim nibh in arcu mauris\n              mauris in mattis. Ullamcorper praesent non purus felis molestie\n              eget.\n            ")])])]),t._v(" "),e(o.a,{attrs:{cols:"12",md:"6","data-aos":"zoom-in-up"}},[e("div",{staticClass:"comment blur pa-7 radius-30 semi-border"},[e("h3",[t._v("Ahmed Mansour")]),t._v(" "),e("div",{staticClass:"rate d-flex align-center"},[e("span",[t._v("rate")]),t._v(" "),e(m.a,{staticClass:"rating",attrs:{readonly:"",color:"#FFF61A","background-color":"grey darken-1","empty-icon":"$ratingFull",small:"",value:5}})],1),t._v(" "),e("p",[t._v("\n              Lorem ipsum dolor sit amet consectetur. Enim nibh in arcu mauris\n              mauris in mattis. Ullamcorper praesent non purus felis molestie\n              eget.\n            ")])])])],1)],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);