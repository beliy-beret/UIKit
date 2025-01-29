import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{r as n}from"./index-DJO9vBfz.js";import{d as V}from"./styled-components.browser.esm-CW2lnlac.js";import{I as A}from"./index-C-7KEQAt.js";import{O as _,a as v}from"./index-BQpxS_ND.js";import"./colors-BfrfeCNN.js";import"./theme--sRFsRre.js";const F=V.div`
  width: 100%;
  display: flex;
  align-items: start;
  position: relative;

  input {
    padding-right: 38px;
    width: 100%;
  }

  .reset-button {
    width: fit-content;
    position: absolute;
    display: grid;
    place-items: center;
    transition: rotate 200ms ease-in-out;
    top: 50%;
    right: 0;
    translate: 0 -18px;
    cursor: pointer;
    padding: 6px 16px;
  }
`,R=({options:r,value:i,selectedValue:l,loading:u,disabled:h,onReset:c,renderOption:w,onSelect:O,onChange:g,onFocus:S})=>{const[d,s]=n.useState(!1),[p,o]=n.useState(-1),k=n.useRef(null),T=n.useRef(null),m=n.useRef(null),C=()=>{const e=T.current,t=e&&e.querySelector('[aria-current="true"]');t&&e&&e.scrollTo({top:t.offsetTop,behavior:"smooth"})};n.useEffect(()=>{C()},[p]);const D=e=>{const t=e.target.value;g(t),s(!0),o(-1)},b=e=>{O(e.value),g(e.label),s(!1),o(-1)},L=e=>{e.key==="ArrowDown"?o(t=>t<r.length-1?t+1:t):e.key==="ArrowUp"?o(t=>t>0?t-1:t):e.key==="Enter"&&!d?s(!0):e.key==="Enter"&&d&&p===-1?s(!1):e.key==="Enter"&&p>=0&&b(r[p])},W=()=>{g(""),o(-1),c&&c()},M=()=>{s(!0),S&&S()};return n.useEffect(()=>{const e=y=>{m.current&&!m.current.contains(y.target)&&s(!1)},t=y=>{m.current&&!m.current.contains(y.target)&&s(!1)};return document.addEventListener("mousedown",e),document.addEventListener("focusin",t),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("focusin",t)}},[]),a.jsxs(F,{ref:m,children:[c&&a.jsx("span",{className:"reset-button",onClick:W,children:"✕"}),a.jsx(A,{ref:k,disabled:h,type:"text",value:i,autoComplete:"off",onChange:D,onKeyDown:L,onFocus:M,"aria-controls":"dropdown-list","aria-expanded":d}),a.jsxs(_,{open:d,isOpen:d,ref:T,style:{width:"100%"},children:[u&&!!i&&a.jsx(v,{children:"Загрузка..."}),!u&&!!i&&!r.length&&a.jsx(v,{children:"Ничего не найдено"}),!u&&!!i&&!!r.length&&r.map((e,t)=>a.jsx(v,{id:e.value,onMouseDown:()=>b(e),onMouseEnter:()=>o(-1),onMouseOut:()=>o(t),role:"option","aria-selected":l===e.value,"aria-current":p===t,children:w?w(e):e.label},e.value))]})]})};R.__docgenInfo={description:"",methods:[],displayName:"SelectWithSearch",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"string"},description:""},selectedValue:{required:!0,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T) => ReactElement",signature:{arguments:[{type:{name:"T"},name:"option"}],return:{name:"ReactElement"}}},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:'(optionValue: T["value"]) => void',signature:{arguments:[{type:{name:'T["value"]',raw:'T["value"]'},name:"optionValue"}],return:{name:"void"}}},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const x=[{value:"0",label:"Все"},{value:"1",label:"Яблоко"},{value:"2",label:"Груша"},{value:"3",label:"Вишня"},{value:"4",label:"Черешня"},{value:"5",label:"арбуз"},{value:"6",label:"дыня"},{value:"7",label:"апельсин"}],K=({selectedValue:r,onSelect:i})=>{const[l,u]=n.useState(""),h=n.useMemo(()=>l?x.filter(c=>c.label.toLowerCase().includes(l.toLowerCase())):x,[l]);return a.jsx(R,{options:h,value:l,onChange:u,selectedValue:r,onSelect:i})},G={title:"Example/Select/SelectWithSearch",component:K,tags:["autodocs"],parameters:{layout:"standard"},argTypes:{selectedValue:{control:{disable:!0}}},args:{onSelect:r=>r,selectedValue:""}},f={};var E,q,j;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:"{}",...(j=(q=f.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};const J=["SelectWithSearch"];export{f as SelectWithSearch,J as __namedExportsOrder,G as default};
