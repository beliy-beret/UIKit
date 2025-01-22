import{f as L}from"./index-B5ZI-g0m.js";import{j as i}from"./jsx-runtime-CkxqCPlQ.js";import{r as M}from"./index-DJO9vBfz.js";import{d as H}from"./styled-components.browser.esm-CW2lnlac.js";import{C as e}from"./colors-BfrfeCNN.js";const P={small:16,big:20},a=H.label`
  display: grid;
  place-content: center;
  aspect-ratio: 1;
  width: ${({$size:r})=>`${P[r]}px`};
  border-radius: 50%;
  border: 1px solid ${e.blueGray[300]};
  background-color: ${e.blueGray[25]};
  transition: all 200ms ease-in-out;
  cursor: pointer;

  span.radio-marker {
    display: inline-block;
    aspect-ratio: 1;
    width: ${({$size:r})=>r==="small"?"8px":"10px"};
    border-radius: 50%;
    background-color: transparent;
    transition: background-color 200ms ease-in-out;
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${e.blue[10]};
      border-color: ${e.blue[500]};
    }
  }
`,Q=H.div`
  position: relative;
  width: fit-content;
  display: inline-block;

  input.uikit-input-radio {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border: none !important;
    outline: none !important;
    overflow: hidden;
    appearance: none;
  }

  input:checked.uikit-input-radio + ${a} {
    background-color: ${e.blue[10]};
    border-color: ${e.blue[400]};

    span.radio-marker {
      background-color: ${e.blue[400]};
    }

    @media (hover: hover) {
      &:hover {
        background-color: ${e.blue[10]};
        border-color: ${e.blue[500]};

        span.radio-marker {
          background-color: ${e.blue[500]};
        }
      }
    }
  }

  input:disabled.uikit-input-radio + ${a} {
    background-color: ${e.blueGray[50]};
    border-color: ${e.blueGray[200]};
    cursor: default;
  }

  input:disabled:checked.uikit-input-radio + ${a} {
    background-color: ${e.blueGray[50]};
    border-color: ${e.blueGray[200]};

    span.radio-marker {
      background-color: ${e.blueGray[200]};
    }
  }

  input:focus-visible.uikit-input-radio + ${a} {
    outline: none;
    box-shadow: 0 0 0 3px ${e.blue[200]};
  }
`,I=M.forwardRef(({className:r,id:b,checked:K,onToggleChecked:s,size:O="small",...F},V)=>{const A=o=>{s&&s(o.currentTarget.checked)},J=o=>{s&&o.key==="Enter"&&s(!o.currentTarget.checked)};return i.jsxs(Q,{children:[i.jsx("input",{className:"uikit-input-radio",id:b,ref:V,type:"radio",checked:K,...F,onKeyDown:J,onChange:A}),i.jsx(a,{$size:O,htmlFor:b,className:r,children:i.jsx("span",{className:"radio-marker"})})]})});I.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{id:{required:!0,tsType:{name:"string"},description:""},onToggleChecked:{required:!0,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},name:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"keyof typeof radioSizes",elements:[{name:"literal",value:"small"},{name:"literal",value:"big"}]},description:"",defaultValue:{value:'"small"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},tabIndex:{required:!1,tsType:{name:"number"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""}}};const ae={title:"Example/Radio",component:I,parameters:{layout:"standard"},argTypes:{},args:{onToggleChecked:L(),checked:!1}},d={args:{id:"unChecked"}},n={args:{id:"checked",checked:!0}},t={args:{id:"disabled",disabled:!0}},c={args:{id:"disabled_checked",disabled:!0,checked:!0}},l={args:{id:"unChecked",size:"big"}},u={args:{id:"checked",checked:!0,size:"big"}},p={args:{id:"disabled",disabled:!0,size:"big"}},m={args:{id:"disabled_checked",disabled:!0,checked:!0,size:"big"}};var g,k,h;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: "unChecked"
  }
}`,...(h=(k=d.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var y,f,$;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    id: "checked",
    checked: true
  }
}`,...($=(f=n.parameters)==null?void 0:f.docs)==null?void 0:$.source}}};var x,C,v;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    id: "disabled",
    disabled: true
  }
}`,...(v=(C=t.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var z,w,T;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    id: "disabled_checked",
    disabled: true,
    checked: true
  }
}`,...(T=(w=c.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var D,S,q;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    id: "unChecked",
    size: "big"
  }
}`,...(q=(S=l.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var B,_,G;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    id: "checked",
    checked: true,
    size: "big"
  }
}`,...(G=(_=u.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var j,E,R;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    id: "disabled",
    disabled: true,
    size: "big"
  }
}`,...(R=(E=p.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var W,N,U;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    id: "disabled_checked",
    disabled: true,
    checked: true,
    size: "big"
  }
}`,...(U=(N=m.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};const se=["UnChecked","Checked","Disabled","DisableWithChecked","BigUnChecked","BigChecked","BigDisabled","BigDisableWithChecked"];export{u as BigChecked,m as BigDisableWithChecked,p as BigDisabled,l as BigUnChecked,n as Checked,c as DisableWithChecked,t as Disabled,d as UnChecked,se as __namedExportsOrder,ae as default};
