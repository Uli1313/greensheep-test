import{a as V,t as g}from"./sweetalertToast-BH8zHNqw.js";import{_ as v,m as E,c as x,b as e,d as t,w as u,F as L,j as n,o as T,e as k,n as p}from"./index-CNgtiO0o.js";import{c as y}from"./copyTextStore-DBXXz7Bl.js";import"./sweetalert2.all-Bx3GQaMc.js";var I={VITE_APP_API_URL:"https://ec-course-api.hexschool.io/v2",VITE_APP_API_NAME:"greensheep",VITE_LINE_CLIENT_ID:"x9iTcS6m9Fdlz8XFfAbkqs",VITE_LINE_CLIENT_SECRET:"iGiOLRLmU2aNTDuObVQlcP5XzPYSbUzJ9gvUl4YvPzx",BASE_URL:"/greensheep-test/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:P}=I,w={data(){return{user:{username:"",password:""},isLoading:!1}},methods:{...E(y,["copyTextMethod"]),login(){this.isLoading=!0;const l=`${P}/admin/signin`,s=this.user;this.$http.post(l,s).then(i=>{const{expired:r,token:o}=i.data;document.cookie=`AdminToken=${o}; expires=${new Date(r)}`,V("歡迎登入！帳號密碼是我們的小秘密喔＾＾"),this.$router.push("/admin/home")}).catch(i=>{g(i.response.data.message)}).finally(()=>{this.isLoading=!1})}}},A={class:"container-fluid"},S={class:"row align-items-center vh-100"},N={class:"col col-sm-8 col-md-6 col-xl-3 mx-auto text-end"},R=e("h1",{class:"fs-2 mb-4 text-center"},"後台登入",-1),C={class:"mb-3"},F=e("label",{for:"email",class:"form-label"},"Email address",-1),U={class:"mb-3"},M=e("label",{for:"password",class:"form-label"},"password",-1),D=e("div",{class:"text-end"},[e("button",{type:"submit",class:"btn btn-primary"},"登入")],-1);function z(l,s,i,r,o,_){const b=n("RouterLink"),d=n("VField"),m=n("ErrorMessage"),f=n("VForm"),h=n("VueLoading");return T(),x(L,null,[e("div",A,[e("div",S,[e("div",N,[R,t(b,{to:"/",class:"d-inline-block mb-3"},{default:u(()=>[k("回前台")]),_:1}),t(f,{onSubmit:_.login,class:"text-start"},{default:u(({errors:c})=>[e("div",C,[F,t(d,{name:"email",type:"email",rules:"required|email",class:p(["form-control border-1",{"is-invalid":c.email}]),id:"email",placeholder:"name@example.com",modelValue:o.user.username,"onUpdate:modelValue":s[0]||(s[0]=a=>o.user.username=a)},null,8,["class","modelValue"]),t(m,{name:"email",class:"invalid-feedback"}),e("button",{type:"button",class:"btn btn-outline-primary mt-3 ms-auto",onClick:s[1]||(s[1]=a=>l.copyTextMethod("greensheep@gmail.com","帳號了，快去貼上吧"))}," 點我偷偷複製帳號～噓 ")]),e("div",U,[M,t(d,{name:"密碼",type:"password",rules:"required",class:p(["form-control border-1",{"is-invalid":c.密碼}]),id:"password",placeholder:"password",modelValue:o.user.password,"onUpdate:modelValue":s[2]||(s[2]=a=>o.user.password=a)},null,8,["class","modelValue"]),t(m,{name:"密碼",class:"invalid-feedback"}),e("button",{type:"button",class:"btn btn-outline-primary mt-3 ms-auto",onClick:s[3]||(s[3]=a=>l.copyTextMethod("greensheep","密碼，快去貼上吧"))}," 我也想知道密碼 ")]),D]),_:1},8,["onSubmit"])])])]),t(h,{active:o.isLoading},null,8,["active"])],64)}const X=v(w,[["render",z]]);export{X as default};
