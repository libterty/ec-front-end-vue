(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36d8d44e"],{"671d":function(t,e,n){"use strict";var s=n("2fa3");e["a"]={getDiscounts:function(){return s["apiHelper"].get("/admin/discounts")},getDiscount:function(t){return s["apiHelper"].get("/admin/discounts/".concat(t))},postDiscount:function(t){return s["apiHelper"].post("/admin/discounts",t)},putDiscount:function(t,e){return s["apiHelper"].put("/admin/discounts/".concat(t),e)},deleteDiscount:function(t){return s["apiHelper"].delete("/admin/discounts/".concat(t))}}},b6b2:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container py-5"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("h3",[t._v(t._s(t.discount.name))]),n("p",[t._v(t._s(t.discount.description))]),n("p",[t._v("消費額度："+t._s(t._f("currency")(t.discount.target_price)))]),n("p",[t._v("折抵："+t._s(t.discount.percent)+" %")]),n("p",[t._v("折抵費用："+t._s(t._f("currency")(t.discount.product_reduce)))]),n("p",[t._v("活動開始："+t._s(t._f("dateTime")(t.discount.start_date)))]),n("p",[t._v("活動結束："+t._s(t._f("dateTime")(t.discount.end_date)))]),n("hr"),n("div",{staticClass:"mb-3"},[1===t.discount.shipping_free?n("strong",{staticClass:"text-success"},[t._v("免運費")]):n("span",{staticClass:"text-muted"},[t._v("需運費")])]),n("a",{attrs:{href:"#"},on:{click:function(e){return t.$router.back()}}},[t._v("回上一頁")])])])])},c=[],i=(n("96cf"),n("3b8d")),r=n("671d"),a=n("2708"),u=n("2fa3"),o={mixins:[a["b"],a["a"]],data:function(){return{discount:{}}},created:function(){var t=this.$route.params.discountId;this.fetchDiscount(t)},beforeRouteUpdate:function(t,e,n){var s=t.params.discountId;this.fetchDiscount(s),n()},methods:{fetchDiscount:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){var n,s,c,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,n=this,t.next=4,r["a"].getDiscount(e);case 4:if(s=t.sent,c=s.data,i=s.statusText,"OK"===i){t.next=9;break}throw new Error(i);case 9:n.discount=c.discount,t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](0),u["Toast"].fire({type:"error",title:"無法取得 discount 資料，請稍後再試"});case 15:case"end":return t.stop()}},t,this,[[0,12]])}));function e(e){return t.apply(this,arguments)}return e}()}},d=o,p=n("2877"),f=Object(p["a"])(d,s,c,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-36d8d44e.e46f1eb6.js.map