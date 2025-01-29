import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{d}from"./styled-components.browser.esm-CW2lnlac.js";import{C as i}from"./colors-BfrfeCNN.js";import"./index-DJO9vBfz.js";const c=d.div`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center start;
  width: 100%;
  height: 8px;
  border-radius: 21px;
  overflow: hidden;
  background-color: ${i.blueGray[25]};
`,n=d.div`
  width: ${({$status:s})=>`${s}%`};
  height: 100%;
  border-radius: 21px;
  background-color: ${i.blue[400]};
`,p=({status:s})=>e.jsx(c,{className:"progress-track",children:e.jsx(n,{className:"progress-value",$status:s})});p.__docgenInfo={description:"",methods:[],displayName:"LinearProgress",props:{status:{required:!0,tsType:{name:"number"},description:""}}};const x={title:"Example/Progress/LinearProgress",component:p,parameters:{layout:"standard"},argTypes:{},args:{status:60}},r={};var o,t,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(a=(t=r.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const h=["Progress"];export{r as Progress,h as __namedExportsOrder,x as default};
