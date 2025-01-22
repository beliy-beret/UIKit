import{f as V}from"./index-B5ZI-g0m.js";import{j as l}from"./jsx-runtime-CkxqCPlQ.js";import{r as _}from"./index-DJO9vBfz.js";import{d as E}from"./styled-components.browser.esm-CW2lnlac.js";import{C as r}from"./colors-BfrfeCNN.js";import{t as A}from"./theme-BVt_iaI7.js";const C=E.div`
  display: grid;
  align-items: stretch;
  justify-content: stretch;
  border: 1px solid ${r.blueGray[300]};
  border-radius: 8px;
  overflow: hidden;

  &:hover {
    border-color: ${r.blue[500]};
  }

  &:focus-within {
    border-color: ${r.blueGray[300]};
    box-shadow: 0 0 0 3px #c2b6dc;
  }

  &[aria-disabled="true"],
  &[aria-disabled="true"]&[aria-invalid="true"] {
    background-color: ${r.blueGray[25]};
    border-color: ${r.blueGray[300]};
    color: ${r.blueGray[300]};
  }

  &[aria-invalid="true"] {
    border-color: ${r.red[400]};

    &:hover {
      border-color: ${r.red[500]};
    }

    &:focus-within {
      border-color: ${r.red[300]};
      box-shadow: 0 0 0 3px #D35148};  
    }
  }
`,R=E.textarea`
  ${A.text.font14.regular};
  padding: 6px 14px;
  background-color: ${r.white};
  color: ${r.blueGray[600]};
  resize: none;
  border: none;

  &:disabled {
    background-color: ${r.blueGray[25]};
    color: ${r.blueGray[300]};
  }

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${r.blueGray[50]};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${r.blueGray[300]};
  }

  &:focus {
    outline: none;
  }
`,S=_.forwardRef(({error:j,disabled:c,...D},P)=>l.jsx(C,{"aria-invalid":j,"aria-disabled":c,children:l.jsx(R,{...D,disabled:c,ref:P})}));S.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{error:{required:!1,tsType:{name:"boolean"},description:""}}};const F={title:"Example/Textarea",component:S,parameters:{layout:"standard"},argTypes:{},args:{onChange:V()}},e={},a={args:{error:!0}},o={args:{disabled:!0}},s={args:{placeholder:"Placeholder text"}},t={args:{value:"Textarea value"}},d={args:{value:"Textarea value",disabled:!0}};var i,n,u;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(u=(n=e.parameters)==null?void 0:n.docs)==null?void 0:u.source}}};var p,b,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    error: true
  }
}`,...(m=(b=a.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var x,h,g;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,$,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    placeholder: "Placeholder text"
  }
}`,...(y=($=s.parameters)==null?void 0:$.docs)==null?void 0:y.source}}};var v,T,w;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    value: "Textarea value"
  }
}`,...(w=(T=t.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var G,k,W;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    value: "Textarea value",
    disabled: true
  }
}`,...(W=(k=d.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};const H=["Textarea","WithError","Disabled","WithPlaceholder","WithValue","WithDisabledValue"];export{o as Disabled,e as Textarea,d as WithDisabledValue,a as WithError,s as WithPlaceholder,t as WithValue,H as __namedExportsOrder,F as default};
