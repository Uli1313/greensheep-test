import{_ as c}from"./logo-green-BF7dE-YZ.js";import{_ as n,c as i,b as t,e as s,t as l,d as a,w as d,j as r,o as _}from"./index-CNgtiO0o.js";const u={data(){return{timeout:6}},methods:{count(){this.timeout-=1,this.timeout===0&&this.$router.push("/"),setTimeout(()=>{this.count()},1e3)}},mounted(){this.count()}},p={class:"d-flex justify-content-center align-items-center vh-100"},h={class:"container text-start"},m={class:"row",style:{"row-gap":"24px"}},f=t("div",{class:"col-12 col-lg-5 d-flex align-items-center"},[t("div",{class:"w-100 px-10 px-md-30 px-lg-10"},[t("img",{class:"w-100",src:c,alt:"GreenSheep"})])],-1),x={class:"col-12 col-lg-7"},g={class:"d-flex flex-column gap-4"},v=t("h1",{class:"fw-bold"},"404 Not Found",-1),w=t("h2",{class:"fs-5 fs-md-2"},"很抱歉，您所訪問的頁面不存在。",-1),N=t("p",null,"可能原因：",-1),k=t("ul",{class:"d-flex flex-column gap-2"},[t("li",null,"找不到造訪頁面"),t("li",null,"輸入網址不正確"),t("li",null,"網路訊號問題")],-1),y={class:"fs-7 fs-md-6 text-primary"},V={class:"fs-3"};function $(B,b,j,C,e,F){const o=r("RouterLink");return _(),i("div",p,[t("div",h,[t("div",m,[f,t("div",x,[t("div",g,[v,w,N,k,t("p",y,[s("預計將於 "),t("span",V,l(e.timeout),1),s(" 秒後返回首頁，或 "),a(o,{to:"/",class:"text-decoration-underline"},{default:d(()=>[s("點此")]),_:1}),s(" 立即跳轉。 ")])])])])])])}const S=n(u,[["render",$]]);export{S as default};
