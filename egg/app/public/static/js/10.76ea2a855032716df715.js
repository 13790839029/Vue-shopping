webpackJsonp([10],{fAno:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("Xxa5"),i=e.n(s),o=e("exGp"),r=e.n(o),n=e("Dd8w"),l=e.n(n),c=e("NYxO"),d=e("6mRb"),u=e("AYGF"),h=e("5jRo"),f={mixins:[h.c,h.a],computed:l()({},Object(c.c)(["category","categoryTabList"])),data:function(){return{leftTabIndex:0,list:"",active:0,dataList:[],listenScroll:!0,isLoading:!1,defaultId:"2c9f6c946016ea9b016016f79c8e0000",Category:!1}},components:{Scroll:d.a,GoodsList:u.a},methods:l()({scroll:function(t,a){console.log(t,a)},item:function(t,a){if(this.active=0,this.list=t.bxMallSubDto,this.leftTabIndex!=a){this.leftTabIndex=a;var e=t.bxMallSubDto[0].mallSubId;this.dataList=this.categoryTabList.hasOwnProperty(e)?this.dataList=this.categoryTabList[e]:this.getList(e),this.$refs.scroll.scrollTo(0,0,300)}},onClick:function(t){this.dataList=[];var a=this.category[this.leftTabIndex].bxMallSubDto[t].mallSubId;this.dataList=this.categoryTabList.hasOwnProperty(a)?this.dataList=this.categoryTabList[a]:this.getList(a)},change:function(t){this.onClick(t)},getList:function(t){var a=this;return r()(i.a.mark(function e(){var s,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.dataList=[],a.showFlag=!0,e.next=5,a.Api.category(t);case 5:s=e.sent,200==(o=s.data).code&&(a.showFlag=!1,a.dataList=o.dataList,a.setCategoryTabList({id:t,list:o.dataList})),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),a.showFlag=!1,a.$toast("网络错误");case 15:case"end":return e.stop()}},e,a,[[0,10]])}))()}},Object(c.d)({setGoodDetails:"GOODSDETAILS"}),Object(c.b)(["setTab","setCategoryTabList"]),{getCategory:function(){var t=this;return r()(i.a.mark(function a(){var e,s;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(t.category.length){a.next=6;break}return a.next=3,t.Api.recommend();case 3:e=a.sent,200==(s=e.data).code&&t.setTab(s.data.category);case 6:case"end":return a.stop()}},a,t)}))()},categorys:function(){var t=this.$route.params.id,a=this.$route.params.index,e=this.$route.params.val;console.log(t,a,e),(t&&a||0==a&&e)&&(this.list=e.bxMallSubDto,this.leftTabIndex=a,this.getList(t))}}),beforeRouteUpdate:function(t,a,e){"Category"!==a.name&&(this.Category=!0),e()},activated:function(){this.categorys()},created:function(){var t=this.$route.params.id,a=this.$route.params.index,e=this.$route.params.val;if(t&&a&&e)return this.list=e.bxMallSubDto,this.leftTabIndex=a,void this.getList(t);this.getList(this.defaultId),this.getCategory()}},g={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("van-nav-bar",{attrs:{title:"商品分类","left-arrow":!1,fixed:""}}),t._v(" "),e("div",{staticClass:"content"},[e("div",{ref:"left",staticClass:"left"},[e("ul",t._l(t.category,function(a,s){return e("li",{key:a.mallCategoryId,class:{active:t.leftTabIndex==s},on:{click:function(e){t.item(a,s)}}},[t._v("\n                    "+t._s(a.mallCategoryName)+"\n                ")])}))]),t._v(" "),e("div",{ref:"right",staticClass:"right"},[e("div",{staticClass:"empty"},[e("van-tabs",{on:{click:t.onClick},model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},[e("Scroll",{directives:[{name:"show",rawName:"v-show",value:!t.showFlag,expression:"!showFlag"}],ref:"scroll",staticClass:"scroll",attrs:{data:t.dataList,listenScroll:t.listenScroll},on:{scroll:t.scroll}},[e("div",t._l(t.list||t.category[0].bxMallSubDto,function(a){return e("van-tab",{key:a.mallSubId,attrs:{title:a.mallSubName}},[e("GoodsList",{attrs:{list:t.dataList},on:{details:t.details}})],1)}))])],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.dataList.length&&!t.showFlag,expression:"!dataList.length && !showFlag"}],staticClass:"null"},[t._v("\n                        暂无数据~~\n                    ")])],1)])]),t._v(" "),e("BaseLoding",{attrs:{showFlag:t.showFlag}}),t._v(" "),e("router-view")],1)},staticRenderFns:[]};var v=e("VU/8")(f,g,!1,function(t){e("gp9G")},"data-v-e86b8fb4",null);a.default=v.exports},gp9G:function(t,a){}});
//# sourceMappingURL=10.76ea2a855032716df715.js.map