import{f as Z}from"./index-B5ZI-g0m.js";import{j as s}from"./jsx-runtime-CkxqCPlQ.js";import{r as A}from"./index-DJO9vBfz.js";import{d as q}from"./styled-components.browser.esm-CW2lnlac.js";import{C as e}from"./colors-BfrfeCNN.js";const J={small:16,big:20},a=q.label`
  display: grid;
  place-content: center;
  aspect-ratio: 1;
  width: ${({$size:r})=>`${J[r]}px`};
  border-radius: 4px;
  border: 1px solid ${e.blueGray[300]};
  background-color: ${e.blueGray[25]};
  transition: all 200ms ease-in-out;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      background-color: ${e.blue[10]};
      border-color: ${e.blue[500]};
    }
  }

  svg {
    width: ${({$size:r})=>r==="small"?"10px":"12px"};
    height: ${({$size:r})=>r==="small"?"9px":"10px"};
    visibility: hidden;
  }
`,P=q.div`
  position: relative;
  width: fit-content;
  display: inline-block;

  input.uikit-input {
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

  input:checked.uikit-input + ${a} {
    background-color: ${e.blue[10]};
    border-color: ${e.blue[400]};

    svg {
      visibility: visible;
    }

    @media (hover: hover) {
      &:hover {
        background-color: ${e.blue[10]};
        border-color: ${e.blue[500]};
      }
    }
  }

  input:disabled.uikit-input + ${a} {
    background-color: ${e.blueGray[50]};
    border-color: ${e.blueGray[200]};
    cursor: default;

    svg {
      path {
        fill: ${e.blueGray[200]};
      }
    }
  }

  input:disabled:checked.uikit-input + ${a} {
    background-color: ${e.blueGray[50]};
    border-color: ${e.blueGray[200]};
  }

  input:focus-visible.uikit-input + ${a} {
    outline: none;
    box-shadow: 0 0 0 3px ${e.blue[200]};
  }
`,F=A.forwardRef(({className:r,id:h,checked:I,onToggleChecked:i,size:M="small",...m},O)=>{const T=o=>{i&&i(o.currentTarget.checked)},V=o=>{i&&o.key==="Enter"&&i(!o.currentTarget.checked)};return s.jsxs(P,{"aria-label":m["aria-label"],children:[s.jsx("input",{className:"uikit-input",id:h,ref:O,type:"checkbox",checked:I,...m,onKeyDown:V,onChange:T}),s.jsx(a,{$size:M,htmlFor:h,className:r,children:s.jsx("svg",{width:"10",height:"9",viewBox:"0 0 10 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M8.42836 0.769651C8.78789 0.410116 9.37081 0.410116 9.73035 0.769651C10.0855 1.12478 10.0898 1.69784 9.74341 2.05831L4.84287 8.184C4.8358 8.19284 4.82824 8.20128 4.82023 8.20929C4.4607 8.56882 3.87778 8.56882 3.51824 8.20929L0.269651 4.9607C-0.0898838 4.60116 -0.0898837 4.01824 0.269651 3.65871C0.629186 3.29917 1.21211 3.29917 1.57164 3.65871L4.1415 6.22856L8.40394 0.797191C8.41152 0.78753 8.41967 0.778334 8.42836 0.769651Z",fill:"#1B4DCB"})})})]})});F.__docgenInfo={description:"",methods:[],displayName:"CheckBox",props:{size:{defaultValue:{value:'"small"',computed:!1},required:!1}}};const se={title:"Example/Checkbox",component:F,parameters:{layout:"standard"},argTypes:{size:{options:["small","big"],control:{type:"radio"}}},args:{onToggleChecked:Z(),checked:!1}},d={args:{id:"unChecked"}},c={args:{id:"checked",checked:!0}},t={args:{id:"disabled",disabled:!0}},n={args:{id:"disabled_checked",disabled:!0,checked:!0}},l={args:{id:"unChecked",size:"big"}},u={args:{id:"checked",checked:!0,size:"big"}},p={args:{id:"disabled",disabled:!0,size:"big"}},b={args:{id:"disabled_checked",disabled:!0,checked:!0,size:"big"}};var g,k,C;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: "unChecked"
  }
}`,...(C=(k=d.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var x,f,$;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    id: "checked",
    checked: true
  }
}`,...($=(f=c.parameters)==null?void 0:f.docs)==null?void 0:$.source}}};var v,y,w;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    id: "disabled",
    disabled: true
  }
}`,...(w=(y=t.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var B,z,D;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    id: "disabled_checked",
    disabled: true,
    checked: true
  }
}`,...(D=(z=n.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var S,_,j;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    id: "unChecked",
    size: "big"
  }
}`,...(j=(_=l.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var G,E,W;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    id: "checked",
    checked: true,
    size: "big"
  }
}`,...(W=(E=u.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var L,U,H;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    id: "disabled",
    disabled: true,
    size: "big"
  }
}`,...(H=(U=p.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var K,N,R;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    id: "disabled_checked",
    disabled: true,
    checked: true,
    size: "big"
  }
}`,...(R=(N=b.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};const ae=["UnChecked","Checked","Disabled","DisableWithChecked","BigUnChecked","BigChecked","BigDisabled","BigDisableWithChecked"];export{u as BigChecked,b as BigDisableWithChecked,p as BigDisabled,l as BigUnChecked,c as Checked,n as DisableWithChecked,t as Disabled,d as UnChecked,ae as __namedExportsOrder,se as default};
