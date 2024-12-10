import{f as m}from"./index-B5ZI-g0m.js";import{j as f}from"./jsx-runtime-CkxqCPlQ.js";import{r as x}from"./index-DJO9vBfz.js";import{d as h,C as e}from"./colors-ClT8TPb3.js";const g=h.input`
  padding: 6px 14px;
  border: 1px solid #b0afc2;
  border-radius: 8px;
  background-color: ${e.white};
  color: ${e.blueGray[600]};
  font-size: 14px;
  line-height: 19px;
  ${({$error:a})=>a&&`border-color: ${e.red[400]}`};
  outline: none;
  box-shadow: none;

  &:focus {
    box-shadow: 0 0 0 1px ${e.blue[500]};
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`,c=x.forwardRef(({error:a=!1,...u},i)=>f.jsx(g,{...u,ref:i,$error:a}));c.__docgenInfo={description:"",methods:[],displayName:"Input",props:{error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const E={title:"Example/Input",component:c,parameters:{layout:"standard"},argTypes:{},args:{onChange:m()}},r={args:{placeholder:"Placeholder text"}},o={args:{error:!0,placeholder:"Placeholder text"}};var t,s,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    placeholder: "Placeholder text"
  }
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var p,l,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    error: true,
    placeholder: "Placeholder text"
  }
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const w=["DefaultInput","WithErrorInput"];export{r as DefaultInput,o as WithErrorInput,w as __namedExportsOrder,E as default};
