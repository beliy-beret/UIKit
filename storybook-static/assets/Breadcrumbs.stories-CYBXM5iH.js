import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{L as c}from"./chunk-K6AXKMTT-OwgnNXpB.js";import{d}from"./styled-components.browser.esm-CW2lnlac.js";import{C as n}from"./colors-BfrfeCNN.js";import{t as p}from"./theme--sRFsRre.js";import"./index-DJO9vBfz.js";const g=d.ul`
  ${p.text.font14.regular};
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  color: ${n.blueGray[500]};

  li {
    position: relative;
    padding-right: 8px;
    margin-right: 8px;

    a {
      text-decoration: none;
      color: currentColor;
    }

    &:after {
      content: "";
      position: absolute;
      top: 50%;
      right: 0;
      width: 4px;
      aspect-ratio: 1;
      border-radius: 50%;
      background-color: ${n.blue[400]};
      translate: 50% -25%;
    }

    &:last-child {
      color: ${n.blueGray[200]};
      cursor: auto;
      pointer-events: none;

      &:after {
        display: none;
      }
    }
  }
`,l=({list:e,renderItem:a})=>t.jsx(g,{children:e.map((m,u)=>t.jsx("li",{children:a(m)},u))});l.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{list:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  to: string;\r
  label: string;\r
}`,signature:{properties:[{key:"to",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"BreadcrumbItem[]"},description:""},renderItem:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: BreadcrumbItem) => ReactElement",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{\r
  to: string;\r
  label: string;\r
}`,signature:{properties:[{key:"to",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}},name:"item"}],return:{name:"ReactElement"}}},description:""}}};const b=({to:e,label:a})=>t.jsx(c,{to:e,children:a}),w={title:"Example/Breadcrumbs",tags:["autodocs"],component:l,parameters:{layout:"standard"},argTypes:{},args:{list:[{to:"",label:"Main"},{to:"",label:"Section 1"},{to:"",label:"Section 2"},{to:"",label:"Section 3"}],renderItem:e=>t.jsx(b,{...e})}},r={};var o,s,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const k=["Breadcrumbs"];export{r as Breadcrumbs,k as __namedExportsOrder,w as default};
