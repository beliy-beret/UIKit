import{f as E}from"./index-B5ZI-g0m.js";import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{r as L}from"./index-DJO9vBfz.js";import{d as y}from"./styled-components.browser.esm-CW2lnlac.js";import{C as e}from"./colors-BfrfeCNN.js";const o=y.label`
  display: grid;
  place-content: center;
  width: 16px;
  height: 16px;
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
    visibility: hidden;
  }
`,S=y.div`
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
  }

  input:checked.uikit-input + ${o} {
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

  input:disabled.uikit-input + ${o} {
    background-color: ${e.blueGray[50]};
    border-color: ${e.blueGray[200]};
    cursor: default;

    svg {
      path {
        fill: ${e.blueGray[200]};
      }
    }
  }

  input:disabled:checked.uikit-input + ${o} {
    background-color: ${e.blueGray[50]};
    border-color: ${e.blueGray[200]};
  }

  input:focus-visible.uikit-input + ${o} {
    outline: none;
    box-shadow: 0 0 0 3px ${e.blue[200]};
  }
`,v=L.forwardRef(({className:w,id:n,checked:j,onToggleChecked:s,...D},G)=>{const B=t=>{s&&s(t.currentTarget.checked)},_=t=>{s&&t.key==="Enter"&&s(!t.currentTarget.checked)};return r.jsxs(S,{children:[r.jsx("input",{className:"uikit-input",id:n,ref:G,type:"checkbox",checked:j,...D,onKeyDown:_,onChange:B}),r.jsx(o,{htmlFor:n,className:w,children:r.jsx("svg",{width:"10",height:"9",viewBox:"0 0 10 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8.42836 0.769651C8.78789 0.410116 9.37081 0.410116 9.73035 0.769651C10.0855 1.12478 10.0898 1.69784 9.74341 2.05831L4.84287 8.184C4.8358 8.19284 4.82824 8.20128 4.82023 8.20929C4.4607 8.56882 3.87778 8.56882 3.51824 8.20929L0.269651 4.9607C-0.0898838 4.60116 -0.0898837 4.01824 0.269651 3.65871C0.629186 3.29917 1.21211 3.29917 1.57164 3.65871L4.1415 6.22856L8.40394 0.797191C8.41152 0.78753 8.41967 0.778334 8.42836 0.769651Z",fill:"#1B4DCB"})})})]})});v.__docgenInfo={description:"",methods:[],displayName:"CheckBox"};const U={title:"Example/Checkbox",component:v,parameters:{layout:"standard"},argTypes:{},args:{onToggleChecked:E(),checked:!1}},a={args:{id:"unChecked"}},i={args:{id:"checked",checked:!0}},c={args:{id:"disabled",disabled:!0}},d={args:{id:"disabled_checked",disabled:!0,checked:!0}};var l,u,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    id: "unChecked"
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var h,b,m;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: "checked",
    checked: true
  }
}`,...(m=(b=i.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var k,g,x;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    id: "disabled",
    disabled: true
  }
}`,...(x=(g=c.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,C,$;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    id: "disabled_checked",
    disabled: true,
    checked: true
  }
}`,...($=(C=d.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};const F=["UnChecked","Checked","Disabled","DisableWithChecked"];export{i as Checked,d as DisableWithChecked,c as Disabled,a as UnChecked,F as __namedExportsOrder,U as default};
