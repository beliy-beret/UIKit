import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{d as _}from"./styled-components.browser.esm-CW2lnlac.js";import{C as a}from"./colors-BfrfeCNN.js";import{r as w}from"./index-DJO9vBfz.js";const $=_.div`
  width: 100%;
  display: flex;
  align-items: center;
  max-width: 410px;

  & > ul {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 6px;
    margin-inline: 12px;
    justify-content: space-between;

    & > li {
      list-style: none;
    }
  }

  @media (min-width: 904px) {
    max-width: 360px;
  }
`,h=_.button`
  font-size: 14px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  color: ${a.blueGray[800]};
  background-color: transparent;
  width: 40px;
  height: 40px;
  border-radius: 200px;
  display: grid;
  place-items: center;
  outline: none;

  &[aria-selected="true"] {
    background-color: ${a.blue[400]};
    color: ${a.blue[10]};
  }

  &:active {
    background-color: ${a.blue[600]};
    color: ${a.blue[10]};
  }

  &:focus-visible {
    border: 3px solid ${a.blue[200]};
  }

  @media (hover: hover) {
    &:hover:not(:active, :disabled) {
      background-color: ${a.blue[500]};
      color: ${a.blue[10]};
    }
  }
`,x=1;function m(r,o,t=1){return o===void 0&&r!==void 0&&(o=r,r=0),Array(Math.ceil((o-r)/t)).fill(r).map((i,c)=>i+c*t)}const b=({totalCount:r,perPage:o,currentPage:t,onChangePage:i,className:c=""})=>{const e=r===0?1:Math.ceil(r/o),d=w.useMemo(()=>{const s=x*2+3,k=s+2;if(e<=k)return m(1,e+1);const u=Math.max(2,Math.min(t-x,e)),p=Math.min(e-1,Math.min(t+x,e));let l=m(u,p+1);const f=u>2,y=e-p>1,j=s-(l.length+1);switch(!0){case(f&&!y):{l=[...m(u-j-1,u-1),...l];break}case(!f&&y):{l=[...l,...m(p+1,p+j+1)];break}}return l},[t,e]);return n.jsx($,{"aria-label":"pagination",className:c,children:e>1&&n.jsxs("ul",{children:[!d.includes(1)&&n.jsx("li",{children:n.jsx(h,{onClick:()=>i(1),"aria-selected":t===1,children:"1"})}),!d.includes(2)&&n.jsx("li",{children:n.jsx("span",{children:"…"})}),d.map(s=>n.jsx("li",{children:n.jsx(h,{"aria-selected":s===t,onClick:()=>i(s),children:s})},`page-${s}`)),!d.includes(e-1)&&n.jsx("li",{children:n.jsx("span",{children:"…"})}),!d.includes(e)&&n.jsx("li",{children:n.jsx(h,{"aria-selected":t===e,onClick:()=>i(e),children:e})})]})})};b.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{totalCount:{required:!0,tsType:{name:"number"},description:""},currentPage:{required:!0,tsType:{name:"number"},description:""},perPage:{required:!0,tsType:{name:"number"},description:""},onChangePage:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const{useArgs:E}=__STORYBOOK_MODULE_PREVIEW_API__,T={title:"Example/Pagination",component:b,tags:["autodocs"],parameters:{layout:"standard"},argTypes:{currentPage:{control:{type:"number",min:1}},totalCount:{control:{type:"number",min:1}},perPage:{control:{type:"number",min:1}}},args:{totalCount:10,perPage:1,currentPage:1,onChangePage:r=>r}},g={render:function(o){const[,t]=E();function i(c){t({currentPage:c})}return n.jsx(b,{...o,onChangePage:i})}};var P,C,v;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    function onChange(page: number) {
      updateArgs({
        currentPage: page
      });
    }
    return <PaginationComponent {...args} onChangePage={onChange} />;
  }
}`,...(v=(C=g.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};const q=["Pagination"];export{g as Pagination,q as __namedExportsOrder,T as default};
