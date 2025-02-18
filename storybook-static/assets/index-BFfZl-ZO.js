import{j as o}from"./jsx-runtime-CkxqCPlQ.js";import{r as d}from"./index-DJO9vBfz.js";import{d as l}from"./styled-components.browser.esm-CW2lnlac.js";const p=l.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: ${({$transparent:e})=>e?"transparent":"rgba(41, 39, 62, 0.7)"};
  z-index: 1000;
`,c=({children:e,onClose:t,style:a,wrapperStyle:s,transparent:i=!1})=>{const n=r=>{t&&r.target===r.currentTarget&&t()};return d.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="auto"}),[]),o.jsx(p,{$transparent:i,id:"uikit-modal",style:a,onClick:n,children:o.jsx("div",{style:s,children:e})})};c.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{transparent:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},wrapperStyle:{required:!1,tsType:{name:"CSSProperties"},description:""}}};export{c as M};
