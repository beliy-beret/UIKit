import{j as o}from"./jsx-runtime-CkxqCPlQ.js";import{r as l}from"./index-DJO9vBfz.js";import{d as M}from"./styled-components.browser.esm-CW2lnlac.js";import{C as t}from"./colors-BfrfeCNN.js";import{O as G,a as B}from"./index-BkzUarvU.js";const K=M.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;

  .chevron {
    width: fit-content;
    position: absolute;
    display: grid;
    place-items: center;
    transition: rotate 200ms ease-in-out;
    top: 50%;
    right: 0;
    translate: 0 -50%;
    cursor: pointer;
    padding: 8px 16px;

    svg {
      margin-left: auto;
      width: 16px;
      height: 16px;
      rotate: -90deg;
    }
  }

  &[aria-expanded="true"] {
    .chevron {
      rotate: 180deg;
    }
  }

  input.uikit-select-input {
    outline: none;
    background-color: ${t.gray[10]};
    border-radius: 4px;
    width: 100%;
    padding: 8px 38px 8px 16px;
    color: #1d1c29;
    border: 1px solid transparent;
    font-size: 14px;
    cursor: pointer;

    &[aria-invalid] {
      border-color: ${t.red[400]};
    }

    &:focus {
      box-shadow: 0 0 0 3px ${t.blue[200]};
      border-color: ${t.blue[400]};

      &[aria-invalid] {
        border-color: ${t.red[300]};
        box-shadow: 0 0 0 3px #d35148;
      }
    }

    &:disabled {
      border-color: ${t.blueGray[300]};
      color: ${t.blueGray[300]};
      background-color: ${t.blueGray[50]};
      cursor: auto;

      & + span.chevron {
        cursor: auto;
        pointer-events: none;
      }
    }

    @media (hover: hover) {
      &:hover:not(:disabled) {
        background-color: ${t.blueGray[25]};
        color: ${t.blue[500]};
      }
    }
  }
`,y=({options:n,error:h,selectedValue:d,disabled:v,renderOption:p,onSelect:b})=>{var S,T;const[a,s]=l.useState(!1),[i,c]=l.useState(-1),A=((T=(S=n.filter(e=>e.value===d))==null?void 0:S[0])==null?void 0:T.label)||"",w=l.useRef(null),u=l.useRef(null),L=()=>{const e=w.current,r=e&&e.querySelector('[aria-current="true"]');r&&e&&e.scrollTo({top:r.offsetTop,behavior:"smooth"})};l.useEffect(()=>{L()},[i]);const E=e=>{b(e.value),s(!1),c(-1)},q=e=>{e.key==="ArrowDown"?c(r=>r<n.length-1?r+1:r):e.key==="ArrowUp"?c(r=>r>0?r-1:r):e.key==="Enter"&&!a?s(!0):e.key==="Enter"&&a&&i===-1?s(!1):e.key==="Enter"&&i>=0&&E(n[i])};return l.useEffect(()=>{const e=x=>{u.current&&!u.current.contains(x.target)&&s(!1)},r=x=>{u.current&&!u.current.contains(x.target)&&s(!1)};return document.addEventListener("mousedown",e),document.addEventListener("focusin",r),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("focusin",r)}},[]),o.jsxs(K,{"aria-expanded":a,ref:u,children:[o.jsx("input",{"aria-invalid":h,className:"uikit-select-input",disabled:v,type:"text",value:A,autoComplete:"off",onKeyDown:q,onClick:()=>s(!a),readOnly:!0}),o.jsx("span",{className:"chevron",onClick:()=>s(!a),children:o.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.7071 5.29289C16.0976 5.68342 16.0976 6.31658 15.7071 6.70711L10.4142 12L15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289Z",fill:"#1D1C29"})})}),o.jsx(G,{open:a,isOpen:a,ref:w,style:{width:"100%"},children:n.map((e,r)=>o.jsx(B,{id:e.value,onMouseDown:()=>E(e),onMouseEnter:()=>c(-1),onMouseOut:()=>c(r),role:"option","aria-selected":d===e.value,"aria-current":i===r,children:p?p(e):e.label},e.value))})]})};y.__docgenInfo={description:"",methods:[],displayName:"Select",props:{error:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},selectedValue:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T) => ReactElement",signature:{arguments:[{type:{name:"T"},name:"option"}],return:{name:"ReactElement"}}},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:'(optionValue: T["value"]) => void',signature:{arguments:[{type:{name:'T["value"]',raw:'T["value"]'},name:"optionValue"}],return:{name:"void"}}},description:""}}};const{useArgs:N}=__STORYBOOK_MODULE_PREVIEW_API__,W=[{value:"0",label:"Все"},{value:"1",label:"Яблоко"},{value:"2",label:"Груша"},{value:"3",label:"Вишня"},{value:"4",label:"Черешня"},{value:"5",label:"арбуз"},{value:"6",label:"дыня"},{value:"7",label:"апельсин"}],I={title:"Example/Select/DefaultSelect",component:y,tags:["autodocs"],parameters:{layout:"standard"},argTypes:{options:{control:{disable:!0}},selectedValue:{options:["0","1","2","3","4","5","6","7"],control:{type:"select"}}},args:{options:W,onSelect:n=>n,selectedValue:"1"}},m={render:function(h){const[{selectedValue:d},v]=N();function p(b){v({selectedValue:b})}return o.jsx(y,{...h,selectedValue:d,onSelect:p})}},f={args:{disabled:!0}},g={args:{error:!0}};var C,k,R;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: function Render(args) {
    const [{
      selectedValue
    }, updateArgs] = useArgs();
    function onChange(value: string) {
      updateArgs({
        selectedValue: value
      });
    }
    return <SelectComponent {...args} selectedValue={selectedValue} onSelect={onChange} />;
  }
}`,...(R=(k=m.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var O,D,V;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(V=(D=f.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var _,$,j;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    error: true
  }
}`,...(j=($=g.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};const Y=["Select","Disabled","WithError"];export{f as Disabled,m as Select,g as WithError,Y as __namedExportsOrder,I as default};
