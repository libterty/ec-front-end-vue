(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d6de3346"],{"34c9":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("AdminNav",{staticClass:"sidebar col-md-2 d-none d-md-block bg-light"}),a("div",{staticClass:"container col-md-9 ml-sm-auto col-lg-10"},[a("form",{staticClass:"my-4"},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-auto"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newCategoryName,expression:"newCategoryName"}],staticClass:"form-control",attrs:{type:"text",placeholder:" 新增產品類別..."},domProps:{value:t.newCategoryName},on:{input:function(e){e.target.composing||(t.newCategoryName=e.target.value)}}})]),a("div",{staticClass:"col-auto"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:t.isProcessing},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.createCategory()}}},[t._v("\n            New Category\n            "),a("i",{staticClass:"fas fa-plus-square"})])])])]),a("table",{staticClass:"table"},[t._m(0),t.isLoading?a("Spinner"):a("tbody",t._l(t.categories,function(e){return a("tr",{key:e.id},[a("th",{attrs:{scope:"row"}},[t._v(t._s(e.id))]),a("td",{staticClass:"position-relative"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!e.isEditing,expression:"!category.isEditing"}],staticClass:"category-name"},[t._v(t._s(e.name))]),a("input",{directives:[{name:"show",rawName:"v-show",value:e.isEditing,expression:"category.isEditing"},{name:"model",rawName:"v-model",value:e.name,expression:"category.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.name},on:{input:function(a){a.target.composing||t.$set(e,"name",a.target.value)}}}),a("span",{directives:[{name:"show",rawName:"v-show",value:e.isEditing,expression:"category.isEditing"}],staticClass:"cancel",on:{click:function(a){return t.handleCancel(e.id)}}},[t._v("✕")])]),a("td",{staticClass:"d-flex justify-content-between"},[a("button",{directives:[{name:"show",rawName:"v-show",value:!e.isEditing,expression:"!category.isEditing"}],staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.toggleIsEditing(e.id)}}},[t._v("\n              Edit\n              "),a("i",{staticClass:"fas fa-edit"})]),a("button",{directives:[{name:"show",rawName:"v-show",value:e.isEditing,expression:"category.isEditing"}],staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.updateCategory({categoryId:e.id,name:e.name})}}},[t._v("\n              Save\n              "),a("i",{staticClass:"fas fa-check"})]),a("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.deleteCategory(e.id)}}},[t._v("\n              Delete\n              "),a("i",{staticClass:"fas fa-trash-alt"})])])])}),0)],1)])],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",{attrs:{scope:"col",width:"60"}},[t._v("#")]),a("th",{attrs:{scope:"col"}},[t._v("Category")]),a("th",{attrs:{scope:"col",width:"250"}},[t._v("Action")])])])}],s=(a("8e6e"),a("ac6a"),a("456d"),a("7f7f"),a("bd86")),i=(a("96cf"),a("3b8d")),o=a("75e9"),c=a("5f0b"),u=a("2375"),l=a("2fa3");function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(a,!0).forEach(function(e){Object(s["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var g={components:{AdminNav:c["a"],Spinner:u["a"]},data:function(){return{newCategoryName:"",categories:[],isProcessing:!1,isLoading:!1}},created:function(){this.fetchCategories()},methods:{fetchCategories:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,a,n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this,t.prev=1,e.isLoading=!0,t.next=5,o["a"].getCategories();case 5:if(a=t.sent,n=a.data,r=a.statusText,"OK"===r){t.next=10;break}throw new Error(r);case 10:e.categories=n.categories.map(function(t){return p({},t,{isEditing:!1})}),e.isLoading=!1,t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](1),l["Toast"].fire({type:"error",title:" 無法取得產品類別，請稍後再試"});case 17:case"end":return t.stop()}},t,this,[[1,14]])}));function e(){return t.apply(this,arguments)}return e}(),createCategory:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,a,n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this,t.prev=1,e.isProcessing=!0,t.next=5,o["a"].postCategory({name:e.newCategoryName});case 5:if(a=t.sent,n=a.data,r=a.statusText,"OK"===r&&"success"===n.status){t.next=10;break}throw new Error(r);case 10:e.categories.push(p({},n.category,{isEditing:!1})),e.isProcessing=!1,e.newCategoryName="",t.next=19;break;case 15:t.prev=15,t.t0=t["catch"](1),e.isProcessing=!1,l["Toast"].fire({type:"error",title:" 無法新增產品類別，請稍後再試"});case 19:case"end":return t.stop()}},t,this,[[1,15]])}));function e(){return t.apply(this,arguments)}return e}(),updateCategory:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){var a,n,r,s,i,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.categoryId,n=e.name,r=this,t.prev=2,t.next=5,o["a"].putCategory(a,{name:n});case 5:if(s=t.sent,i=s.data,c=s.statusText,"OK"===c&&"success"===i.status){t.next=10;break}throw new Error(c);case 10:r.toggleIsEditing(a),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](2),l["Toast"].fire({type:"error",title:" 無法更新產品類別，請稍後再試"});case 16:case"end":return t.stop()}},t,this,[[2,13]])}));function e(e){return t.apply(this,arguments)}return e}(),deleteCategory:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){var a,n,r,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=this,t.prev=1,t.next=4,o["a"].deleteCategory(e);case 4:if(n=t.sent,r=n.data,s=n.statusText,"OK"===s&&"success"===r.status){t.next=9;break}throw new Error(s);case 9:a.categories=a.categories.filter(function(t){return t.id!==e}),l["Toast"].fire({type:"success",title:"該產品類別已刪除"}),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](1),l["Toast"].fire({type:"error",title:" 無法刪除該產品類別，請稍後再試"});case 16:case"end":return t.stop()}},t,this,[[1,13]])}));function e(e){return t.apply(this,arguments)}return e}(),toggleIsEditing:function(t){var e=this;e.categories=e.categories.map(function(e){return e.id!==t?e:p({},e,{nameCached:e.name,isEditing:!e.isEditing})})},handleCancel:function(t){var e=this;e.categories=e.categories.map(function(e){return e.id!==t?e:p({},e,{name:e.nameCached})}),e.toggleIsEditing(t)}}},f=g,v=(a("66cd"),a("2877")),m=Object(v["a"])(f,n,r,!1,null,"6f4226a6",null);e["default"]=m.exports},"5f0b":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard"},[a("div",{staticClass:"admin"},[a("h5",[t._v("管理員")]),a("div",{},[a("router-link",{staticClass:"btn btn-link",attrs:{to:"/admin/products"}},[a("i",{staticClass:"fas fa-box-open"}),t._v("\n        產品列表\n      ")])],1),a("div",{},[a("router-link",{staticClass:"btn btn-link",attrs:{to:"/admin/categories"}},[a("i",{staticClass:"fas fa-align-justify"}),t._v("\n        產品類別\n      ")])],1),a("div",{},[a("router-link",{staticClass:"btn btn-link",attrs:{to:"/admin/coupons"}},[a("i",{staticClass:"fas fa-ticket-alt"}),t._v("\n        優惠券\n      ")])],1),a("div",{},[a("router-link",{staticClass:"btn btn-link",attrs:{to:"/admin/discounts"}},[a("i",{staticClass:"fas fa-tags"}),t._v("\n        特價活動\n      ")])],1),a("div",{},[a("router-link",{staticClass:"btn btn-link",attrs:{to:"/admin/orders"}},[a("i",{staticClass:"far fa-list-alt"}),t._v("\n        訂單列表\n      ")])],1),a("div",{},[a("router-link",{staticClass:"btn btn-link",attrs:{to:"/admin/dashboard"}},[a("i",{staticClass:"fas fa-chart-line"}),t._v("\n        銷售報表\n      ")])],1),a("div",{},[a("router-link",{staticClass:"btn btn-link",attrs:{to:"/admin/users"}},[a("i",{staticClass:"fas fa-users-cog"}),t._v("\n        權限管理\n      ")])],1)])])},r=[],s=(a("64ad"),a("2877")),i={},o=Object(s["a"])(i,n,r,!1,null,"1a017cf1",null);e["a"]=o.exports},6310:function(t,e,a){},"64ad":function(t,e,a){"use strict";var n=a("6310"),r=a.n(n);r.a},"66cd":function(t,e,a){"use strict";var n=a("bd47"),r=a.n(n);r.a},"75e9":function(t,e,a){"use strict";var n=a("2fa3");e["a"]={getCategories:function(){return n["apiHelper"].get("/admin/categories")},postCategory:function(t){return n["apiHelper"].post("/admin/categories",t)},putCategory:function(t,e){return n["apiHelper"].put("/admin/categories/".concat(t),e)},deleteCategory:function(t){return n["apiHelper"].delete("/admin/categories/".concat(t))}}},bd47:function(t,e,a){}}]);
//# sourceMappingURL=chunk-d6de3346.b52d9cc1.js.map