import{_ as f,T as b,c as y,b as e,d as l,w as m,e as d,j as c,o as v,n as u}from"./index-CNgtiO0o.js";import{S as w}from"./sweetalert2.all-Bx3GQaMc.js";import{_ as x,a as k}from"./line-image-EM7MkwlQ.js";import{_ as E}from"./GreenSheep-BqPFQtCC.js";const L="https://greensheep-json-server.onrender.com",C={data(){return{user:{},userInfo:{},GOOGLECLIENT:"780150754854-h5d15n56b8clqorddealcei20qcv17dd.apps.googleusercontent.com",googleToken:null,initCount:0,checkEyeState:!1,isActive:!1}},methods:{emailRule(t){return/^[\w.-]+@(gmail\.com|yahoo\.com\.tw)$/.test(t)?!0:"請輸入Gmail/Yahoo帳號"},passwordRule(t){return t!==void 0&&/^(?!.*\d{6,})(?!.*(.)\1{4,}).{6,12}$/.test(t)?(this.checkEyeState=!1,!0):(this.initCount&&(this.checkEyeState=!0),this.initCount+=1,"請輸入正確密碼")},onSubmit(){this.$http.post(`${L}/login`,this.user).then(t=>{this.userInfo.token=t.data.accessToken,this.userInfo.id=t.data.user.id,localStorage.setItem("userInfo",JSON.stringify(this.userInfo)),this.$router.push({name:"MemberHome"})}).catch(()=>{w.fire({icon:"error",title:"帳號或密碼錯誤，請重新登入",showConfirmButton:!1,timer:1500})})},accessTokenLogin(){b({clientId:this.GOOGLECLIENT}).then(t=>{this.googleToken=t.access_token,this.fetchContactInfo()})},async fetchContactInfo(){try{const t=await this.$http.get("https://www.googleapis.com/oauth2/v1/userinfo",{headers:{Authorization:`Bearer ${this.googleToken}`}});this.$router.push({path:"/loginLoading",query:{googleEmail:t.data.email}})}catch(t){console.error("獲取聯絡人訊息時出錯:",t)}},lineLoginEvent(){let t="2003862374",s=encodeURIComponent("https://ritayang0811.github.io/greensheep/#/loginLoading"),o="https://access.line.me/oauth2/v2.1/authorize?";o+="response_type=code",o+=`&client_id=${t}`,o+=`&redirect_uri=${s}`,o+="&state=123456789",o+="&scope=openid%20profile%20email",o+="&nonce=helloWorld",o+="&prompt= consent",o+="&max_age=3600",o+="&ui_locales=zh-TW",o+="&bot_prompt=normal",window.open(o,"_self")}}},I={class:"d-flex flex-column align-items-center py-15 pt-40"},T=e("div",null,[e("h2",{class:"fs-2"},"WELCOME"),e("p",{class:"text-primary"},"Discover Your Unique Elegance")],-1),S={class:"w-50 member-content"},V={class:"d-flex flex-column align-items-center py-8"},R=e("h1",{class:"fs-1 mb-8"},"會員登入",-1),U={class:"list-unstyled"},B={class:"py-3"},G=e("span",{class:"g-login-btnIcon"},[e("img",{src:x,alt:"line圖片"})],-1),N=e("span",{class:"g-login-btnText"},"Google登入",-1),j=[G,N],z={class:"py-3"},A=e("span",{class:"g-login-btnIcon"},[e("img",{src:k,alt:"line圖片"})],-1),O=e("span",{class:"g-login-btnText"},"LINE登入",-1),q=[A,O],H=e("p",{class:"d-flex justify-content-center align-items-center py-6 hr-line"},"or",-1),M={class:"form-floating mb-3"},W=e("label",{for:"email",class:"z-0"},"請輸入Email",-1),Y={class:"form-floating mb-3"},D=e("label",{for:"password",class:"z-0"},"請輸入6-12字英數混合密碼",-1),F=e("button",{type:"submit",class:"d-flex justify-content-center align-items-center btn btn-primary sub-button"},[e("div",{class:"button-img-box me-1"},[e("img",{src:E,alt:"圖像"})]),e("p",null,"立即登入")],-1),J={class:"mb-3 d-flex justify-content-between"},K={class:"mt-2 text-start text-primary"},P={class:"mt-2 text-end"};function Q(t,s,o,X,n,i){const p=c("v-field"),h=c("error-message"),g=c("v-form"),_=c("RouterLink");return v(),y("div",I,[T,e("div",S,[e("div",V,[R,e("div",null,[e("ul",U,[e("li",B,[e("button",{type:"button",class:"g-login-btn g-login-btn--google ji-mb-10",onClick:s[0]||(s[0]=(...a)=>i.accessTokenLogin&&i.accessTokenLogin(...a))},j)]),e("li",z,[e("button",{type:"button",class:"g-login-btn g-login-btn--line mt-3",onClick:s[1]||(s[1]=(...a)=>i.lineLoginEvent&&i.lineLoginEvent(...a))},q)])]),H,l(g,{ref:"form",class:"member-form",onSubmit:i.onSubmit},{default:m(({errors:a})=>[e("div",M,[l(p,{name:"email",type:"email",class:u(["form-control",{"is-invalid":a.email}]),id:"email","aria-describedby":"emailHelp",placeholder:"請輸入Email (Google/Yahoo)",rules:i.emailRule,modelValue:n.user.email,"onUpdate:modelValue":s[2]||(s[2]=r=>n.user.email=r)},null,8,["class","rules","modelValue"]),W,l(h,{name:"email",class:"invalid-feedback text-start"})]),e("div",Y,[l(p,{name:"password",type:n.isActive?"text":"password",class:u(["form-control",{"is-invalid":a.password}]),id:"password","aria-describedby":"passwordHelp",placeholder:"請輸入密碼(6-12字元且不連續)",rules:i.passwordRule,modelValue:n.user.password,"onUpdate:modelValue":s[3]||(s[3]=r=>n.user.password=r)},null,8,["type","class","rules","modelValue"]),D,e("i",{class:u(["checkByEye",[n.isActive?"bi-eye":"bi-eye-slash","bi",{"checkByEye-alert":n.checkEyeState}]]),onClick:s[4]||(s[4]=r=>n.isActive=!n.isActive)},null,2),l(h,{name:"password",class:"invalid-feedback text-start"})]),F]),_:1},8,["onSubmit"]),e("div",J,[e("p",K,[l(_,{to:"/memberForget"},{default:m(()=>[d("忘記密碼")]),_:1})]),e("p",P,[d(" 還沒有帳號嗎？前往 "),l(_,{to:"/memberSignUp",class:"text-decoration-underline text-primary fw-bold"},{default:m(()=>[d("註冊")]),_:1})])])])])])])}const se=f(C,[["render",Q]]);export{se as default};
