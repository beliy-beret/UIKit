import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{d as x}from"./styled-components.browser.esm-CW2lnlac.js";import{C as o}from"./colors-BfrfeCNN.js";import{t as E}from"./theme-BVt_iaI7.js";import{r as p}from"./index-DJO9vBfz.js";import{B as C}from"./index-YQpc0OJ6.js";const A=x.ul`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;

  & > li {
    list-style: none;
  }

  span.separator {
    display: flex;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
  }
`,T=x.button`
  ${E.text.font14.medium};
  border: none;
  cursor: pointer;
  color: ${o.blueGray[800]};
  background-color: transparent;
  width: 40px;
  height: 40px;
  border-radius: 200px;
  display: grid;
  place-items: center;
  outline: none;

  &[aria-selected="true"] {
    background-color: ${o.blue[400]};
    color: ${o.blue[10]};
  }

  &:active {
    background-color: ${o.blue[600]};
    color: ${o.blue[10]};
  }

  &:focus-visible {
    border: 3px solid ${o.blue[200]};
  }

  @media (hover: hover) {
    &:hover:not(:active, :disabled) {
      background-color: ${o.blue[500]};
      color: ${o.blue[10]};
    }
  }
`,M=x.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  ${A} {
    ${({$width:r})=>r<=444?"gap: 0;":"gap: 12px;"};
  }

  button[aria-hidden="true"] {
    display: none;
  }

  button[aria-label="button-prev"],
  button[aria-label="button-next"] {
    gap: 8px;

    svg {
      width: 16px;
      height: 16px;
      path {
        fill: currentColor;
      }
    }

    ${({$width:r})=>r<=576?"padding: unset; width: 36px; height: 36px; flex: 0 0 36px; span { display: none; }":"padding: 8px 16px; flex-basis: fit-content; span { display: inline; }"}

  button[aria-label="button-prev"] {
    margin-right: auto;
  }

  button[aria-label="button-next"] {
    margin-left: auto;
  }
`,h=({totalCount:r,perPage:l,currentPage:n,onChangePage:a,withArrow:s=!1,className:_=""})=>{const[d,L]=p.useState(0),u=p.useRef(null),i=r===0?1:Math.ceil(r/l),b=new ResizeObserver(e=>{e[0]&&L(e[0].contentRect.width)}),f=p.useMemo(()=>{const e=[...Array(i+1).keys()].slice(1);if(i===1)return[];if(d<=380){if(i<=5)return[e];if(n<=3)return[e.slice(0,3),"...",e.slice(-1)];if(n>i-3)return[e.slice(0,1),"...",e.slice(-3)];if(n>3&&n<i-1)return[e.slice(0,1),"...",[n],"...",e.slice(-1)]}if(d>380){if(i<=7)return[e];if(n<=3)return[e.slice(0,3),"...",e.slice(-3)];if(n>i-3)return[e.slice(0,3),"...",e.slice(-3)];if(n>3&&n<i-2)return[e.slice(0,1),"...",e.slice(n-2,n+1),"...",e.slice(-1)]}},[n,i,d]),O=()=>{a(n-1)},P=()=>{a(n+1)};return p.useEffect(()=>(u&&u.current&&b.observe(u.current),()=>{b.disconnect()}),[u]),t.jsxs(M,{$width:d,"aria-label":"pagination",className:_,ref:u,children:[t.jsxs(C,{onClick:O,variant:"Outline","aria-hidden":!s,"aria-label":"button-prev",disabled:n<2,children:[t.jsxs("svg",{width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.66602 8.49967C2.66602 8.13148 2.96449 7.83301 3.33268 7.83301H12.666C13.0342 7.83301 13.3327 8.13148 13.3327 8.49967C13.3327 8.86786 13.0342 9.16634 12.666 9.16634H3.33268C2.96449 9.16634 2.66602 8.86786 2.66602 8.49967Z",fill:"#1B4DCB"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.47075 3.36225C8.7311 3.6226 8.7311 4.04471 8.47075 4.30506L4.27549 8.50033L8.47075 12.6956C8.7311 12.9559 8.7311 13.378 8.47075 13.6384C8.2104 13.8987 7.78829 13.8987 7.52794 13.6384L2.86128 8.97173C2.60093 8.71138 2.60093 8.28927 2.86128 8.02892L7.52794 3.36225C7.78829 3.1019 8.2104 3.1019 8.47075 3.36225Z",fill:"#1B4DCB"})]}),t.jsx("span",{children:"Назад"})]}),t.jsx(A,{children:f&&!!f.length&&t.jsx(t.Fragment,{children:f.map((e,k)=>typeof e=="string"?t.jsx("li",{children:t.jsx("span",{className:"separator",children:e})},`${k}`):e.map(c=>t.jsx("li",{children:t.jsx(T,{"aria-selected":c===n,onClick:()=>a(c),children:c})},`page-${c}`)))})}),t.jsxs(C,{onClick:P,variant:"Outline","aria-hidden":!s,"aria-label":"button-next",disabled:n>i-1,children:[t.jsx("span",{children:"Вперед"}),t.jsxs("svg",{width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.66699 8.50065C2.66699 8.13246 2.96547 7.83398 3.33366 7.83398H12.667C13.0352 7.83398 13.3337 8.13246 13.3337 8.50065C13.3337 8.86884 13.0352 9.16732 12.667 9.16732H3.33366C2.96547 9.16732 2.66699 8.86884 2.66699 8.50065Z",fill:"#1B4DCB"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.52827 3.36128C7.78862 3.10093 8.21073 3.10093 8.47108 3.36128L13.1377 8.02794C13.3981 8.28829 13.3981 8.7104 13.1377 8.97075L8.47108 13.6374C8.21073 13.8978 7.78862 13.8978 7.52827 13.6374C7.26792 13.3771 7.26792 12.955 7.52827 12.6946L11.7235 8.49935L7.52827 4.30409C7.26792 4.04374 7.26792 3.62163 7.52827 3.36128Z",fill:"#1B4DCB"})]})]})]})};h.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{totalCount:{required:!0,tsType:{name:"number"},description:""},currentPage:{required:!0,tsType:{name:"number"},description:""},perPage:{required:!0,tsType:{name:"number"},description:""},onChangePage:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},withArrow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const{useArgs:$}=__STORYBOOK_MODULE_PREVIEW_API__,Z={title:"Example/Pagination",component:h,tags:["autodocs"],parameters:{layout:"standard"},argTypes:{currentPage:{control:{type:"number",min:1}},totalCount:{control:{type:"number",min:1}},perPage:{control:{type:"number",min:1}}},args:{totalCount:10,perPage:1,currentPage:1,onChangePage:r=>r}},g={render:function(l){const[,n]=$();function a(s){n({currentPage:s})}return t.jsx(h,{...l,onChangePage:a})}},m={args:{withArrow:!0},render:function(l){const[,n]=$();function a(s){n({currentPage:s})}return t.jsx(h,{...l,onChangePage:a})}};var v,w,y;g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    function onChange(page: number) {
      updateArgs({
        currentPage: page
      });
    }
    return <PaginationComponent {...args} onChangePage={onChange} />;
  }
}`,...(y=(w=g.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var j,B,R;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    withArrow: true
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    function onChange(page: number) {
      updateArgs({
        currentPage: page
      });
    }
    return <PaginationComponent {...args} onChangePage={onChange} />;
  }
}`,...(R=(B=m.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};const I=["WithoutArrowButton","WithArrowButton"];export{m as WithArrowButton,g as WithoutArrowButton,I as __namedExportsOrder,Z as default};
