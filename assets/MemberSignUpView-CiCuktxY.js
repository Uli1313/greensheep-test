import{M as T}from"./modal-DcppLWuV.js";import{E as M}from"./smtp-DoD8u6ih.js";import{_ as V,o as c,x as C,w as x,b as e,d as a,n as m,j as d,C as S,T as B,c as _,i as w,e as h,F as U,f as E,t as G,p as A,k as D}from"./index-CNgtiO0o.js";import{S as y}from"./sweetalert2.all-Bx3GQaMc.js";import{_ as I}from"./GreenSheep-BqPFQtCC.js";import{_ as R,a as O}from"./line-image-EM7MkwlQ.js";import"./selector-engine-rie-punG.js";const P="https://greensheep-json-server.onrender.com",N={props:["verificationCode","userInfo"],data(){return{securityInput:null,user:{}}},methods:{checkCode(){if(this.securityInput===this.verificationCode){y.fire({icon:"success",title:"驗證碼輸入成功!",showConfirmButton:!1,timer:1500}),this.onSubmit();return}y.fire({icon:"warning",title:"驗證碼輸入錯誤!",showConfirmButton:!1,timer:1500})},onSubmit(){this.user={nickName:this.userInfo.name,email:this.userInfo.email.toLowerCase(),password:this.userInfo.password,birthday:this.userInfo.birthday,favorites:[],location:"",phone:""},this.$http.post(`${P}/users`,this.user).then(()=>{y.fire({icon:"success",title:"恭喜註冊成功成為綠羊會員!",showConfirmButton:!1,timer:2e3}),this.$router.push({name:"MemberLogin"})}).catch(s=>{console.log(s)})}}},z={class:"form-floating mb-3"},j=e("label",{for:"securityCode",class:"z-0"},"請輸入驗證碼",-1),q=e("div",{class:"button-img-box me-1"},[e("img",{src:I,alt:"圖像"})],-1),F=e("p",null,"驗證註冊",-1),H=[q,F];function Y(s,t,n,g,o,l){const p=d("v-field"),f=d("error-message"),v=d("v-form");return c(),C(v,{ref:"form",class:"member-form"},{default:x(({errors:k})=>[e("div",z,[a(p,{id:"securityCode",name:"驗證碼",type:"text",class:m(["form-control",{"is-invalid":k.驗證碼}]),placeholder:"請輸入驗證碼",rules:"required",modelValue:o.securityInput,"onUpdate:modelValue":t[0]||(t[0]=b=>o.securityInput=b)},null,8,["class","modelValue"]),j,a(f,{name:"驗證碼",class:"invalid-feedback text-start"})]),e("button",{type:"button",class:"d-flex justify-content-center align-items-center btn btn-primary sub-button",onClick:t[1]||(t[1]=(...b)=>l.checkCode&&l.checkCode(...b))},H)]),_:1},512)}const W=V(N,[["render",Y]]),J="https://greensheep-json-server.onrender.com",K={components:{Verification:W},data(){return{user:{},date:new Date,birthday:"",policy:{DOCState:!0,Modal:"",Check:!1},alertText:"",signupState:!0,securityState:!1,GOOGLECLIENT:"780150754854-h5d15n56b8clqorddealcei20qcv17dd.apps.googleusercontent.com",googleToken:null,initCount:0,confirmCount:0,checkEyeState:!1,confirmEyeState:!1,passwordActive:!1,confirmActive:!1}},methods:{blurFunction(){this.date===null&&(this.date=new Date)},emailRule(s){return/^[\w.-]+@(gmail\.com|yahoo\.com\.tw)$/.test(s)?!0:"請輸入Gmail/Yahoo帳號"},passwordRule(s){return s!==void 0&&/^(?!.*\d{6,})(?!.*(.)\1{4,}).{6,12}$/.test(s)?(this.checkEyeState=!1,this.initCount=0,!0):(this.initCount&&(this.checkEyeState=!0),this.initCount+=1,"請輸入正確密碼")},confirmPasswordRule(s){return s===this.user.password&&s?(this.confirmEyeState=!1,this.confirmCount=0,!0):(this.confirmCount&&(this.confirmEyeState=!0),this.confirmCount+=1,"請輸入相同密碼")},format(){return this.user.birthday=`${this.date.getFullYear()}/${this.date.getMonth()+1}/${this.date.getDate()}`,`您的生日: ${this.user.birthday}`},openModal(s){s==="條款"?this.policy.DOCState=!0:this.policy.DOCState=!1,this.policy.Modal.show()},policyRule(s){!this.policy.Check&&s==="註冊"?this.alertText="請詳閱條款和政策":s==="驗證"&&(this.policy.Check=!this.policy.Check,this.alertText="",this.policy.Check||(this.alertText="請詳閱條款和政策"))},async checkAccounts(s){try{return s=s.toLowerCase(),(await S.get(`${J}/users/?email=${s}`)).data.length!==0}catch(t){console.log(t.response.data)}},async onSubmit(){this.policyRule("註冊"),await this.checkAccounts(this.user.email)?(y.fire({icon:"warning",title:"此信箱已經註冊過囉!",showConfirmButton:!1,timer:2e3}),this.$router.push({name:"MemberLogin"})):this.policy.Check&&this.signUp()},signUp(){this.user.securityCode=this.securityCode(),this.signupState=!1,this.securityState=!0;const s=`使用者:${this.user.email}<br/>驗證碼:${this.user.securityCode}<br/>Messages:申請註冊GreenSheep會員<br/> `;M.send({SecureToken:"0435dc8c-9e69-445a-9569-0d031827457c",To:`${this.user.email}`,From:"greensheep0619@gmail.com",Subject:"親愛的會員您好，GreenSheep客服中心寄送驗證碼來囉~",Body:s}).then(()=>{y.fire({icon:"success",title:"已發送驗證碼到信箱囉!",showConfirmButton:!1,timer:2e3})})},securityCode(s=5){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let n="";for(let g=0;g<s;g++){const o=Math.floor(Math.random()*t.length);n+=t.charAt(o)}return n},accessTokenLogin(){B({clientId:this.GOOGLECLIENT}).then(s=>{this.googleToken=s.access_token,this.fetchContactInfo()})},async fetchContactInfo(){try{const s=await S.get("https://www.googleapis.com/oauth2/v1/userinfo",{headers:{Authorization:`Bearer ${this.googleToken}`}});this.$router.push({path:"/OtherLogin",query:{googleEmail:s.data.email,googleName:s.data.name}})}catch(s){console.error("獲取聯絡人信息時出錯:",s)}},lineLoginEvent(){let s="2003862374",t=encodeURIComponent("https://ritayang0811.github.io/greensheep/#/OtherLogin"),n="https://access.line.me/oauth2/v2.1/authorize?";n+="response_type=code",n+=`&client_id=${s}`,n+=`&redirect_uri=${t}`,n+="&state=123456789",n+="&scope=openid%20profile%20email",n+="&nonce=helloWorld",n+="&prompt= consent",n+="&max_age=3600",n+="&ui_locales=zh-TW",n+="&bot_prompt=normal",window.open(n,"_self")}},computed:{codeUpdate(){return this.user.securityCode}},mounted(){this.policy.Modal=new T(this.$refs.policyModal)}},i=s=>(A("data-v-92640ac2"),s=s(),D(),s),Q={class:"d-flex flex-column align-items-center py-15 pt-40"},X=i(()=>e("div",null,[e("h2",{class:"fs-2"},"WELCOME"),e("p",{class:"text-primary"},"Discover Your Unique Elegance")],-1)),Z={class:"w-50 member-content"},$={class:"d-flex flex-column align-items-center py-8"},ee=i(()=>e("h1",{class:"fs-1 mb-8"},"會員註冊",-1)),te={class:"list-unstyled"},se={class:"py-3"},oe=i(()=>e("span",{class:"g-login-btnIcon"},[e("img",{src:R,alt:"line圖片"})],-1)),ie=i(()=>e("span",{class:"g-login-btnText"},"Google登入",-1)),le=[oe,ie],ne={class:"py-3"},re=i(()=>e("span",{class:"g-login-btnIcon"},[e("img",{src:O,alt:"line圖片"})],-1)),ae=i(()=>e("span",{class:"g-login-btnText"},"LINE登入",-1)),ce=[re,ae],de=i(()=>e("p",{class:"d-flex justify-content-center align-items-center py-6 hr-line"},"or",-1)),ue={class:"form-floating mb-3"},me=i(()=>e("label",{for:"name",class:"z-0"},"請輸入暱稱",-1)),he={class:"form-floating mb-3"},pe=i(()=>e("label",{for:"email",class:"z-0"},"請輸入Email",-1)),fe={class:"form-floating mb-3"},_e=i(()=>e("label",{for:"password",class:"z-0"},"請輸入6-12字英數混合密碼",-1)),be={class:"form-floating mb-3"},ye=i(()=>e("label",{for:"password",class:"z-0"},"請再次確認密碼",-1)),ge={class:"mb-3"},ve=i(()=>e("p",{class:"mb-1 text-primary"},[h(" ✦ 請輸入您的生日，當月贈送消費金 ✦ "),e("span",{class:"ms-2 text-danger"},"請注意：確認後不可更改")],-1)),ke=i(()=>e("div",{class:"mb-3 form-check"},[e("input",{type:"checkbox",class:"form-check-input me-1",id:"subNews",checked:""}),e("div",{class:"text-start"},[e("label",{class:"form-check-label",for:"subNews"},"訂閱最新消息")])],-1)),we={class:"mb-3 form-check"},Ce={class:"text-start"},xe={class:"form-check-label"},Se={key:0,class:"text-start alertText"},Ee=i(()=>e("button",{type:"submit",class:"d-flex justify-content-center align-items-center btn btn-primary sub-button"},[e("div",{class:"button-img-box me-1"},[e("img",{src:I,alt:"圖像"})]),e("p",null,"立即註冊")],-1)),Ve={class:"mt-2 text-end"},Ie={class:"modal fade",id:"policyModal",tabindex:"-1","aria-labelledby":"policyModalLabel","aria-hidden":"true",ref:"policyModal"},Le={class:"modal-dialog"},Te={class:"modal-content"},Me={class:"modal-header"},Be={key:0,class:"modal-title fs-5"},Ue={key:1,class:"modal-title fs-5"},Ge=i(()=>e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1)),Ae={class:"modal-body text-start"},De={key:0,class:"p-4"},Re=i(()=>e("p",null," 歡迎光臨GreenSheep！我們是一個專注於提供精美飾品的電子商務平台。在使用本網站前，請詳細閱讀以下條款，使用本網站即表示您同意遵守以下規定。 ",-1)),Oe=i(()=>e("br",null,null,-1)),Pe=i(()=>e("ul",null,[e("li",null," 使用條款：您同意僅以合法目的使用本網站，不得從事任何違法或損害他人權益的活動。 "),e("li",null," 責任限制：GreenSheep對於因使用本網站而引起的任何直接、間接、附帶或特別的損失不承擔責任。 "),e("li",null," 商品信息：我們努力確保在網站上提供的所有商品信息準確無誤，但不能保證所有信息都是完整和最新的。 "),e("li",null,"使用者責任：您應對您的帳戶和密碼保密，並對在您的帳戶下的所有活動負責。"),e("li",null," 知識產權：本網站上的所有內容，包括但不限於文字、圖像、標誌，均受版權和商標法保護。 "),e("li",null,"其他條款：本條款未涉及的其他問題，將遵循GreenSheep的一般業務實踐和標準。")],-1)),Ne={key:1,class:"p-4"},ze=i(()=>e("p",null," 歡迎您使用GreenSheep網站服務。我們非常重視您的隱私保護，並承諾保護您提供的個人信息。請您在使用本網站前仔細閱讀以下隱私條款內容： ",-1)),je=i(()=>e("br",null,null,-1)),qe=i(()=>e("ul",null,[e("li",null," 收集信息：當您註冊帳戶、下訂單或與我們聯繫時，我們可能收集您的姓名、聯繫方式、郵寄地址等個人信息。 "),e("li",null," 信息用途：我們收集的信息將用於處理訂單、提供客戶服務、改善網站體驗以及向您發送促銷活動和產品信息。 "),e("li",null," 信息保護：我們採取合理的安全措施來保護您的個人信息，防止未經授權的訪問、使用或泄露。 "),e("li",null," 信息分享：我們不會未經您的同意將您的個人信息分享給第三方，除非為了履行訂單或遵守法律法規的要求。 "),e("li",null," Cookie使用：我們可能使用Cookie技術收集和存儲有關您訪問本網站的信息，以改善您的網站體驗。 "),e("li",null,"隱私政策更新：我們保留隨時更新隱私條款的權利，更新後的條款將在本網站上發布。")],-1)),Fe=i(()=>e("div",{class:"modal-footer"},[e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉")],-1));function He(s,t,n,g,o,l){const p=d("v-field"),f=d("error-message"),v=d("VueDatePicker"),k=d("v-form"),b=d("Verification"),L=d("RouterLink");return c(),_(U,null,[e("div",Q,[X,e("div",Z,[e("div",$,[ee,e("div",null,[e("ul",te,[e("li",se,[e("button",{type:"button",class:"g-login-btn g-login-btn--google ji-mb-10",onClick:t[0]||(t[0]=(...u)=>l.accessTokenLogin&&l.accessTokenLogin(...u))},le)]),e("li",ne,[e("button",{type:"button",class:"g-login-btn g-login-btn--line mt-3",onClick:t[1]||(t[1]=(...u)=>l.lineLoginEvent&&l.lineLoginEvent(...u))},ce)])]),de,o.signupState?(c(),C(k,{key:0,ref:"form",class:"member-form",onSubmit:l.onSubmit},{default:x(({errors:u})=>[e("div",ue,[a(p,{id:"name",name:"暱稱",type:"text",class:m(["form-control",{"is-invalid":u.暱稱}]),placeholder:"請輸入暱稱",rules:"required",modelValue:o.user.name,"onUpdate:modelValue":t[2]||(t[2]=r=>o.user.name=r)},null,8,["class","modelValue"]),me,a(f,{name:"暱稱",class:"invalid-feedback text-start"})]),e("div",he,[a(p,{name:"email",type:"email",class:m(["form-control",{"is-invalid":u.email}]),id:"email","aria-describedby":"emailHelp",placeholder:"請輸入Email (Google/Yahoo)",rules:l.emailRule,modelValue:o.user.email,"onUpdate:modelValue":t[3]||(t[3]=r=>o.user.email=r)},null,8,["class","rules","modelValue"]),pe,a(f,{name:"email",class:"invalid-feedback text-start"})]),e("div",fe,[a(p,{name:"password",type:o.passwordActive?"text":"password",class:m(["form-control",{"is-invalid":u.password}]),id:"password","aria-describedby":"passwordHelp",placeholder:"請輸入6-12字英數混合密碼",rules:l.passwordRule,modelValue:o.user.password,"onUpdate:modelValue":t[4]||(t[4]=r=>o.user.password=r)},null,8,["type","class","rules","modelValue"]),_e,e("i",{class:m(["checkByEye",[o.passwordActive?"bi-eye":"bi-eye-slash","bi",{"checkByEye-alert":o.checkEyeState}]]),onClick:t[5]||(t[5]=r=>o.passwordActive=!o.passwordActive)},null,2),a(f,{name:"password",class:"invalid-feedback text-start"})]),e("div",be,[a(p,{name:"confirmPassword",type:o.confirmActive?"text":"password",class:m(["form-control",{"is-invalid":u.confirmPassword}]),id:"confirmPassword","aria-describedby":"passwordHelp",placeholder:"請再次確認密碼",rules:l.confirmPasswordRule,modelValue:o.user.confirmPassword,"onUpdate:modelValue":t[6]||(t[6]=r=>o.user.confirmPassword=r)},null,8,["type","class","rules","modelValue"]),ye,e("i",{class:m(["checkByEye",[o.confirmActive?"bi-eye":"bi-eye-slash","bi",{"checkByEye-alert":o.confirmEyeState}]]),onClick:t[7]||(t[7]=r=>o.confirmActive=!o.confirmActive)},null,2),a(f,{name:"confirmPassword",class:"invalid-feedback text-start"})]),e("div",ge,[ve,a(v,{name:"birthdayDate",modelValue:o.date,"onUpdate:modelValue":t[8]||(t[8]=r=>o.date=r),onBlur:l.blurFunction,format:l.format,locale:"zh-Tw","enable-time-picker":!1,"year-first":"",required:""},null,8,["modelValue","onBlur","format"])]),ke,e("div",we,[e("input",{name:"agreePolicy",type:"checkbox",class:"form-check-input",id:"agreePolicy","aria-describedby":"policyHelp",onClick:t[9]||(t[9]=r=>l.policyRule("驗證"))}),e("div",Ce,[e("label",xe,[h(" 本人同意 "),e("a",{class:"text-decoration-underline",onClick:t[10]||(t[10]=E(r=>l.openModal("條款"),["prevent"]))},"網站服務條款"),h(" 及 "),e("a",{class:"text-decoration-underline",onClick:t[11]||(t[11]=E(r=>l.openModal("政策"),["prevent"]))},"隱私權政策")])]),o.alertText.length?(c(),_("div",Se,G(o.alertText),1)):w("",!0)]),Ee]),_:1},8,["onSubmit"])):w("",!0),o.securityState?(c(),C(b,{key:1,"verification-code":l.codeUpdate,userInfo:o.user},null,8,["verification-code","userInfo"])):w("",!0),e("p",Ve,[h(" 已經有帳號了嗎？前往"),a(L,{to:"/memberLogin",class:"text-decoration-underline text-primary fw-bold"},{default:x(()=>[h("登入")]),_:1})])])])])]),e("div",Ie,[e("div",Le,[e("div",Te,[e("div",Me,[o.policy.DOCState?(c(),_("h1",Be,"網站服務條款")):(c(),_("h1",Ue,"隱私權政策")),Ge]),e("div",Ae,[o.policy.DOCState?(c(),_("div",De,[Re,Oe,Pe,h(" 感謝您選擇GreenSheep作為您購買飾品的平台，我們將竭盡所能為您提供最佳的購物體驗！ ")])):(c(),_("div",Ne,[ze,je,qe,h(" 使用GreenSheep即表示您同意本隱私條款的條件和規定。如果您對此有任何疑問或需要進一步說明，請隨時聯繫我們。 ")]))]),Fe])])],512)],64)}const $e=V(K,[["render",He],["__scopeId","data-v-92640ac2"]]);export{$e as default};
