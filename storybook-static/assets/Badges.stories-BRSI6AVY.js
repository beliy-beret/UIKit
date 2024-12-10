import{j as i}from"./jsx-runtime-CkxqCPlQ.js";import{d as m}from"./styled-components.browser.esm-CW2lnlac.js";import{a as r}from"./colors-BfrfeCNN.js";import"./index-DJO9vBfz.js";const p=m.div`
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
`,d=({children:e,design:n="Body",...s})=>i.jsx(p,{$design:n,...s,children:e});d.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{design:{required:!1,tsType:{name:"union",raw:"keyof typeof ColorPalette",elements:[{name:"literal",value:"Informative"},{name:"literal",value:"Body"},{name:"literal",value:"Dangerous"},{name:"literal",value:"Completed"},{name:"literal",value:"Primary"},{name:"literal",value:"Warning"}]},description:"",defaultValue:{value:'"Body"',computed:!1}}}};const B={title:"Example/Badges/Badge",component:d,parameters:{layout:"standard"}},a={args:{children:"Badge label"}};var t,o,l;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: "Badge label"
  }
}`,...(l=(o=a.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const y=["Badge"];export{a as Badge,y as __namedExportsOrder,B as default};
