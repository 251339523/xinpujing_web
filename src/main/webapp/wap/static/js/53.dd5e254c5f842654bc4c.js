webpackJsonp([53,56],{440:function(t,a,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(a,"__esModule",{value:!0});var i=e(40),s=n(i);a.default={data:function(){return{extInfo:{}}},methods:{loadData:function(){this.$http.get("/api/user/info").then(function(t){this.extInfo=t.body.extInfo},function(t){})}},mounted:function(){this.loadData(),(0,s.default)(".balance-wrapper").scroll({scrollY:!0,scrollX:!1,indicators:!0,bounce:!0})}}},679:function(t,a,e){a=t.exports=e(3)(),a.push([t.id,".balance-wrapper[data-v-5889813a]{margin-top:46px}.balance-wrapper .mui-table-view[data-v-5889813a]{margin-top:0}.balance-wrapper .mui-button-row[data-v-5889813a]{margin-top:20px;width:100%}.balance-wrapper .mui-button-row .mui-btn[data-v-5889813a]{width:95%;height:40px}",""])},824:function(t,a,e){var n=e(679);"string"==typeof n&&(n=[[t.id,n,""]]);e(4)(n,{});n.locals&&(t.exports=n.locals)},1072:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"balance-wrapper mui-scroll-wrapper padding_tabbar"},[e("div",{staticClass:"mui-scroll"},[e("ul",{staticClass:"mui-table-view"},[e("li",{staticClass:"mui-table-view-cell"},[t._v("总余额 "),e("span",{staticClass:"mui-badge mui-badge-inverted"},[t._v(t._s(t.extInfo.money))])]),t._v(" "),e("li",{staticClass:"mui-table-view-cell"},[t._v("现金余额"),e("span",{staticClass:"mui-badge mui-badge-inverted"},[t._v(t._s(t.extInfo.money))])])]),t._v(" "),e("div",{staticClass:"mui-button-row"},[e("button",{staticClass:"mui-btn mui-btn-danger",attrs:{type:"button"},on:{click:t.loadData}},[t._v("更新")])])])])},staticRenderFns:[]}},1180:function(t,a,e){e(824);var n=e(2)(e(440),e(1072),"data-v-5889813a",null);t.exports=n.exports}});