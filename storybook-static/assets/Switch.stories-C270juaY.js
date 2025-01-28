import{f as A}from"./index-B5ZI-g0m.js";import{j as m}from"./jsx-runtime-CkxqCPlQ.js";import{r as F}from"./index-DJO9vBfz.js";import{d as U}from"./styled-components.browser.esm-CW2lnlac.js";import{C as r}from"./colors-BfrfeCNN.js";const u=U.span`
  display: inline-block;
  width: 100%;
  height: 100%;
  background-color: ${r.white};
  box-shadow: 0 2px 4px 0 rgba(142, 140, 163, 0.12);
  border-radius: 50%;
`,J=U.label`
  input.uikit-switch-input {
    outline: none;
    width: 0;
    height: 0;
    position: absolute;
    top: -100%;
    left: 0;
  }

  box-sizing: border-box;
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 2px;
  overflow: hidden;
  border: 1px solid ${r.blue[200]};
  border-radius: 200px;

  ${({$size:e})=>e==="small"?"width: 36px; height: 20px;":"width: 44px; height: 24px;"};

  ${({$checked:e})=>e?`background-color: ${r.blue[400]}; ${u} { grid-column: 2; }`:`background-color: ${r.blueGray[25]}; ${u} { grid-column: 1; }`};

  ${({$disabled:e})=>e&&`background-color: ${r.blueGray[200]}; pointer-events: none; ${u} { background-color: ${r.blueGray[25]}; }`};

  &:focus-visible {
    box-shadow: 0 0 0 3px ${r.blue[200]};
    outline: none;
  }

  @media (hover: hover) {
    ${({$disabled:e})=>!e&&`
      &:hover {
        cursor: pointer;
        background-color: ${r.blueGray[50]};        
      }
    `}
  }
`,L=F.forwardRef(({size:e="small",id:M="switch_id",className:N,tabIndex:V=0,checked:p,disabled:l,...R},O)=>m.jsxs(J,{$size:e,$checked:p,$disabled:l,tabIndex:l?-1:V,className:N,children:[m.jsx("input",{ref:O,type:"checkbox",id:M,className:"uikit-switch-input",checked:p,disabled:l,...R}),m.jsx(u,{})]}));L.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{checked:{required:!0,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "big"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"big"'}]},description:"",defaultValue:{value:'"small"',computed:!1}},className:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},id:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"switch_id"',computed:!1}},onChange:{required:!1,tsType:{name:"union",raw:"ChangeEventHandler<HTMLInputElement> | undefined",elements:[{name:"ChangeEventHandler",elements:[{name:"HTMLInputElement"}],raw:"ChangeEventHandler<HTMLInputElement>"},{name:"undefined"}]},description:""},disabled:{required:!1,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number | undefined",elements:[{name:"string"},{name:"number"},{name:"undefined"}]},description:""},tabIndex:{required:!1,tsType:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]},description:"",defaultValue:{value:"0",computed:!1}}}};const Z={title:"Example/Switch",component:L,parameters:{layout:"standard"},argTypes:{},args:{onChange:A(),checked:!1}},a={args:{value:!0}},s={args:{checked:!0,value:!0}},n={args:{disabled:!0}},i={args:{disabled:!0,checked:!0}},t={args:{size:"big"}},o={args:{checked:!0,size:"big"}},d={args:{disabled:!0,size:"big"}},c={args:{disabled:!0,checked:!0,size:"big"}};var g,b,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: true
  }
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var f,k,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    checked: true,
    value: true
  }
}`,...(x=(k=s.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var w,v,C;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(C=(v=n.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var y,$,T;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    disabled: true,
    checked: true
  }
}`,...(T=($=i.parameters)==null?void 0:$.docs)==null?void 0:T.source}}};var z,S,E;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: "big"
  }
}`,...(E=(S=t.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var q,B,D;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    checked: true,
    size: "big"
  }
}`,...(D=(B=o.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var H,I,_;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    disabled: true,
    size: "big"
  }
}`,...(_=(I=d.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var j,W,G;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    disabled: true,
    checked: true,
    size: "big"
  }
}`,...(G=(W=c.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};const ee=["UnChecked","Checked","Disabled","DisableWithChecked","BigUnChecked","BigChecked","BigDisabled","BigDisableWithChecked"];export{o as BigChecked,c as BigDisableWithChecked,d as BigDisabled,t as BigUnChecked,s as Checked,i as DisableWithChecked,n as Disabled,a as UnChecked,ee as __namedExportsOrder,Z as default};
