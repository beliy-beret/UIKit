import{j as m}from"./jsx-runtime-CkxqCPlQ.js";import{d as i}from"./styled-components.browser.esm-CW2lnlac.js";import{a as r}from"./colors-BfrfeCNN.js";import{t as p}from"./theme--sRFsRre.js";import"./index-DJO9vBfz.js";const c=i.div`
  ${p.text.font12.medium};
  padding: 4px 8px;
  border-radius: 200px;
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 4px;

  ${({$design:e})=>`
    background-color: ${r[e][10]};
    color: ${r[e][e==="Body"?"800":"400"]};
  `};
`,d=({children:e,design:n="Body",...s})=>m.jsx(c,{$design:n,...s,children:e});d.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{design:{required:!1,tsType:{name:"union",raw:"keyof typeof ColorPalette",elements:[{name:"literal",value:"Informative"},{name:"literal",value:"Body"},{name:"literal",value:"Dangerous"},{name:"literal",value:"Completed"},{name:"literal",value:"Primary"},{name:"literal",value:"Warning"}]},description:"",defaultValue:{value:'"Body"',computed:!1}}}};const y={title:"Example/Badges/Badge",component:d,parameters:{layout:"standard"}},a={args:{children:"Badge label"}};var t,o,l;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: "Badge label"
  }
}`,...(l=(o=a.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const v=["Badge"];export{a as Badge,v as __namedExportsOrder,y as default};
