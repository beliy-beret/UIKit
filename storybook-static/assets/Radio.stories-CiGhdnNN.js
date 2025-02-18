import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{f as Z}from"./index-B5ZI-g0m.js";import{r as L}from"./index-DJO9vBfz.js";import{d as M}from"./styled-components.browser.esm-CW2lnlac.js";import{C as e}from"./colors-BfrfeCNN.js";const ee={small:16,big:20},s=M.label`
  display: grid;
  place-content: center;
  aspect-ratio: 1;
  width: ${({$size:r})=>`${ee[r]}px`};
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
`,re=M.div`
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

  input:checked.uikit-input-radio + ${s} {
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

  input:disabled.uikit-input-radio + ${s} {
    background-color: ${e.blueGray[50]};
    border-color: ${e.blueGray[200]};
    cursor: default;
  }

  input:disabled:checked.uikit-input-radio + ${s} {
    background-color: ${e.blueGray[50]};
    border-color: ${e.blueGray[200]};

    span.radio-marker {
      background-color: ${e.blueGray[200]};
    }
  }

  input:focus-visible.uikit-input-radio + ${s} {
    outline: none;
    box-shadow: 0 0 0 3px ${e.blue[200]};
  }
`,k=L.forwardRef(({className:r,id:o,checked:i,size:h="small",value:y,onChange:d,...P},Q)=>{const X=()=>{d&&d(y)},Y=f=>{d&&f.key==="Enter"&&d(f.currentTarget.value)};return a.jsxs(re,{children:[a.jsx("input",{className:"uikit-input-radio",id:o,ref:Q,type:"radio",checked:i,value:y,...P,onKeyDown:Y,onChange:X}),a.jsx(s,{$size:h,htmlFor:o,className:r,children:a.jsx("span",{className:"radio-marker"})})]})});k.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{value:{required:!0,tsType:{name:"string"},description:""},id:{required:!0,tsType:{name:"string"},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},name:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"keyof typeof radioSizes",elements:[{name:"literal",value:"small"},{name:"literal",value:"big"}]},description:"",defaultValue:{value:'"small"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},tabIndex:{required:!1,tsType:{name:"number"},description:""}}};const te={title:"Example/Radio",component:k,parameters:{layout:"standard"},argTypes:{},args:{onChange:Z(),checked:!1,value:""}},ae=()=>{const[r,o]=L.useState("1");return a.jsx("div",{children:[...Array(3).keys()].map((i,h)=>a.jsx(k,{id:String(h),checked:r===String(i),value:String(i),onChange:o}))})},n={args:{id:"unChecked"}},t={args:{id:"checked",checked:!0}},c={args:{id:"disabled",disabled:!0}},u={args:{id:"disabled_checked",disabled:!0,checked:!0}},l={args:{id:"unChecked",size:"big"}},p={args:{id:"checked",checked:!0,size:"big"}},m={args:{id:"disabled",disabled:!0,size:"big"}},b={args:{id:"disabled_checked",disabled:!0,checked:!0,size:"big"}},g={args:{id:"group"},render:function(){return a.jsx("div",{style:{width:"300px"},children:a.jsx(ae,{})})}};var x,$,v;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    id: "unChecked"
  }
}`,...(v=($=n.parameters)==null?void 0:$.docs)==null?void 0:v.source}}};var C,S,w;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    id: "checked",
    checked: true
  }
}`,...(w=(S=t.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var z,G,T;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    id: "disabled",
    disabled: true
  }
}`,...(T=(G=c.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var j,D,q;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    id: "disabled_checked",
    disabled: true,
    checked: true
  }
}`,...(q=(D=u.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var B,R,_;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    id: "unChecked",
    size: "big"
  }
}`,...(_=(R=l.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var E,W,N;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    id: "checked",
    checked: true,
    size: "big"
  }
}`,...(N=(W=p.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var U,V,H;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    id: "disabled",
    disabled: true,
    size: "big"
  }
}`,...(H=(V=m.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var I,K,A;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    id: "disabled_checked",
    disabled: true,
    checked: true,
    size: "big"
  }
}`,...(A=(K=b.parameters)==null?void 0:K.docs)==null?void 0:A.source}}};var F,O,J;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    id: "group"
  },
  render: function Render() {
    return <div style={{
      width: "300px"
    }}>\r
        <Group />\r
      </div>;
  }
}`,...(J=(O=g.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};const ce=["UnChecked","Checked","Disabled","DisableWithChecked","BigUnChecked","BigChecked","BigDisabled","BigDisableWithChecked","RadioGroup"];export{p as BigChecked,b as BigDisableWithChecked,m as BigDisabled,l as BigUnChecked,t as Checked,u as DisableWithChecked,c as Disabled,g as RadioGroup,n as UnChecked,ce as __namedExportsOrder,te as default};
