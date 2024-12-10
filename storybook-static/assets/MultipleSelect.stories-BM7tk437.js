import{j as o}from"./jsx-runtime-CkxqCPlQ.js";import{r as i}from"./index-DJO9vBfz.js";import{d as B}from"./styled-components.browser.esm-CW2lnlac.js";import{C as s}from"./colors-BfrfeCNN.js";import{O as K,a as N}from"./index-BkzUarvU.js";const P=B.div`
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
    background-color: ${s.gray[10]};
    border-radius: 4px;
    width: 100%;
    padding: 8px 38px 8px 16px;
    color: #1d1c29;
    border: 1px solid transparent;
    font-size: 14px;
    cursor: pointer;

    &[aria-invalid] {
      border-color: ${s.red[400]};
    }

    &:focus {
      box-shadow: 0 0 0 3px ${s.blue[200]};
      border-color: ${s.blue[400]};

      &[aria-invalid] {
        border-color: ${s.red[300]};
        box-shadow: 0 0 0 3px #d35148;
      }
    }

    &:disabled {
      border-color: ${s.blueGray[300]};
      color: ${s.blueGray[300]};
      background-color: ${s.blueGray[50]};
      cursor: auto;

      & + span.chevron {
        cursor: auto;
        pointer-events: none;
      }
    }

    @media (hover: hover) {
      &:hover:not(:disabled) {
        background-color: ${s.blueGray[25]};
        color: ${s.blue[500]};
      }
    }
  }
`,x=({options:n,error:v,selectedValues:a,disabledValues:y,disabled:w,renderOption:p,onSelect:E})=>{const[l,u]=i.useState(!1),[c,m]=i.useState(-1),S=i.useRef(null),d=i.useRef(null),L=i.useMemo(()=>{const e=[];return a.length&&n.forEach(r=>{a.forEach(t=>{r.value===t&&e.push(r.label)})}),e.length?e.join(","):""},[a,n]),W=()=>{const e=S.current,r=e&&e.querySelector('[aria-current="true"]');r&&e&&e.scrollTo({top:r.offsetTop,behavior:"smooth"})};i.useEffect(()=>{W()},[c]),i.useEffect(()=>{const e=t=>{d.current&&!d.current.contains(t.target)&&u(!1)},r=t=>{d.current&&!d.current.contains(t.target)&&u(!1)};return document.addEventListener("mousedown",e),document.addEventListener("focusin",r),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("focusin",r)}},[]);const T=e=>{if(!a.includes(e.value))E([...a,e.value]);else if(a.length>1){const r=a.filter(t=>t!==e.value);E(r)}},G=e=>{e.key==="ArrowDown"?m(r=>r<n.length-1?r+1:r):e.key==="ArrowUp"?m(r=>r>0?r-1:r):e.key==="Enter"&&!l?u(!0):e.key==="Enter"&&l&&c===-1?u(!1):e.key==="Enter"&&c>=0&&T(n[c])};return o.jsxs(P,{"aria-expanded":l,ref:d,children:[o.jsx("input",{"aria-invalid":v,className:"uikit-select-input",disabled:w,type:"text",value:L,autoComplete:"off",onKeyDown:G,onClick:()=>u(!l),readOnly:!0}),o.jsx("span",{className:"chevron",onClick:()=>u(!l),children:o.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.7071 5.29289C16.0976 5.68342 16.0976 6.31658 15.7071 6.70711L10.4142 12L15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289Z",fill:"#1D1C29"})})}),o.jsx(K,{open:l,isOpen:l,ref:S,style:{width:"100%"},children:n.map((e,r)=>o.jsx(N,{id:e.value,onMouseDown:()=>T(e),onMouseEnter:()=>m(-1),onMouseOut:()=>m(r),role:"option","aria-selected":a.some(t=>t===e.value),"aria-current":c===r,"aria-disabled":y.some(t=>t===e.value),children:p?p({...e,selected:a.some(t=>t===e.value)}):e.label},e.value))})]})};x.__docgenInfo={description:"",methods:[],displayName:"MultipleSelect",props:{error:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},selectedValues:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},disabledValues:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: T & { selected: boolean }) => ReactElement",signature:{arguments:[{type:{name:"intersection",raw:"T & { selected: boolean }",elements:[{name:"T"},{name:"signature",type:"object",raw:"{ selected: boolean }",signature:{properties:[{key:"selected",value:{name:"boolean",required:!0}}]}}]},name:"option"}],return:{name:"ReactElement"}}},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:'(optionValue: Array<T["value"]>) => void',signature:{arguments:[{type:{name:"Array",elements:[{name:'T["value"]',raw:'T["value"]'}],raw:'Array<T["value"]>'},name:"optionValue"}],return:{name:"void"}}},description:""}}};const{useArgs:U}=__STORYBOOK_MODULE_PREVIEW_API__,z=[{value:"0",label:"Все"},{value:"1",label:"Яблоко"},{value:"2",label:"Груша"},{value:"3",label:"Вишня"},{value:"4",label:"Черешня"},{value:"5",label:"арбуз"},{value:"6",label:"дыня"},{value:"7",label:"апельсин"}],J={title:"Example/Select/MultipleSelect",component:x,tags:["autodocs"],parameters:{layout:"standard"},argTypes:{options:{control:{disable:!0}},selectedValues:{control:{disable:!0}},disabledValues:{control:{disable:!0}}},args:{options:z,onSelect:n=>n,selectedValues:["2","3"],disabledValues:[]}},g={render:function(v){const[{selectedValues:a},y]=U();function w(p){y({selectedValues:p})}return o.jsx(x,{...v,selectedValues:a,onSelect:w})}},f={args:{disabled:!0}},b={args:{error:!0}},h={args:{disabledValues:["1","4"]}};var C,A,k;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: function Render(args) {
    const [{
      selectedValues
    }, updateArgs] = useArgs();
    function onChange(values: string[]) {
      updateArgs({
        selectedValues: values
      });
    }
    return <SelectComponent {...args} selectedValues={selectedValues} onSelect={onChange} />;
  }
}`,...(k=(A=g.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var O,R,j;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(j=(R=f.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var D,M,_;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    error: true
  }
}`,...(_=(M=b.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var $,V,q;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    disabledValues: ["1", "4"]
  }
}`,...(q=(V=h.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};const Q=["MultipleSelect","Disabled","WithError","WithDisabledOptions"];export{f as Disabled,g as MultipleSelect,h as WithDisabledOptions,b as WithError,Q as __namedExportsOrder,J as default};
