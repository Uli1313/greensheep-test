import{y as r}from"./index-C4QIJLVX.js";import{a as e,t as a}from"./sweetalertToast-DwDYF0Lt.js";const p=r("copyTextStore",{actions:{copyTextMethod(o,t){navigator.clipboard.writeText(o).then(()=>{e(`已複製${t}`)}).catch(c=>{a(`無法複製${t}: `)})}}});export{p as c};