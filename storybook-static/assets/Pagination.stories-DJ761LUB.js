import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{d as C}from"./styled-components.browser.esm-CW2lnlac.js";import{C as s}from"./colors-BfrfeCNN.js";import{t as T}from"./theme-BVt_iaI7.js";import{r as q}from"./index-DJO9vBfz.js";import{B as y}from"./index-YQpc0OJ6.js";const S=C.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  button[aria-hidden="true"] {
    display: none;
  }

  button[aria-label="button-prev"],
  button[aria-label="button-next"] {
    gap: 8px;

    svg {
      path {
        fill: currentColor;
      }
    }
  }

  button[aria-label="button-prev"] {
    margin-right: auto;
  }

  button[aria-label="button-next"] {
    margin-left: auto;
  }
`,D=C.ul`
  max-width: 410px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6px;
  justify-content: space-between;
  padding: 0;
  margin: 0;

  & > li {
    list-style: none;
  }

  @media (min-width: 904px) {
    max-width: 360px;
  }
`,b=C.button`
  ${T.text.font14.medium};
  border: none;
  cursor: pointer;
  color: ${s.blueGray[800]};
  background-color: transparent;
  width: 40px;
  height: 40px;
  border-radius: 200px;
  display: grid;
  place-items: center;
  outline: none;

  &[aria-selected="true"] {
    background-color: ${s.blue[400]};
    color: ${s.blue[10]};
  }

  &:active {
    background-color: ${s.blue[600]};
    color: ${s.blue[10]};
  }

  &:focus-visible {
    border: 3px solid ${s.blue[200]};
  }

  @media (hover: hover) {
    &:hover:not(:active, :disabled) {
      background-color: ${s.blue[500]};
      color: ${s.blue[10]};
    }
  }
`,f=1;function g(r,o,n=1){return o===void 0&&r!==void 0&&(o=r,r=0),Array(Math.ceil((o-r)/n)).fill(r).map((a,i)=>a+i*n)}const x=({totalCount:r,perPage:o,currentPage:n,onChangePage:a,withArrow:i=!1,className:_=""})=>{const t=r===0?1:Math.ceil(r/o),d=q.useMemo(()=>{const l=f*2+3,E=l+2;if(t<=E)return g(1,t+1);const c=Math.max(2,Math.min(n-f,t)),p=Math.min(t-1,Math.min(n+f,t));let u=g(c,p+1);const v=c>2,w=t-p>1,j=l-(u.length+1);switch(!0){case(v&&!w):{u=[...g(c-j-1,c-1),...u];break}case(!v&&w):{u=[...u,...g(p+1,p+j+1)];break}}return u},[n,t]),$=()=>{a(n-1)},O=()=>{a(n+1)};return e.jsxs(S,{"aria-label":"pagination",className:_,children:[e.jsxs(y,{onClick:$,variant:"Outline","aria-hidden":!i,"aria-label":"button-prev",children:[e.jsxs("svg",{width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.66602 8.49967C2.66602 8.13148 2.96449 7.83301 3.33268 7.83301H12.666C13.0342 7.83301 13.3327 8.13148 13.3327 8.49967C13.3327 8.86786 13.0342 9.16634 12.666 9.16634H3.33268C2.96449 9.16634 2.66602 8.86786 2.66602 8.49967Z",fill:"#1B4DCB"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.47075 3.36225C8.7311 3.6226 8.7311 4.04471 8.47075 4.30506L4.27549 8.50033L8.47075 12.6956C8.7311 12.9559 8.7311 13.378 8.47075 13.6384C8.2104 13.8987 7.78829 13.8987 7.52794 13.6384L2.86128 8.97173C2.60093 8.71138 2.60093 8.28927 2.86128 8.02892L7.52794 3.36225C7.78829 3.1019 8.2104 3.1019 8.47075 3.36225Z",fill:"#1B4DCB"})]}),"Назад"]}),e.jsx(D,{children:t>1&&e.jsxs(e.Fragment,{children:[!d.includes(1)&&e.jsx("li",{children:e.jsx(b,{onClick:()=>a(1),"aria-selected":n===1,children:"1"})}),!d.includes(2)&&e.jsx("li",{children:e.jsx("span",{children:"…"})}),d.map(l=>e.jsx("li",{children:e.jsx(b,{"aria-selected":l===n,onClick:()=>a(l),children:l})},`page-${l}`)),!d.includes(t-1)&&e.jsx("li",{children:e.jsx("span",{children:"…"})}),!d.includes(t)&&e.jsx("li",{children:e.jsx(b,{"aria-selected":n===t,onClick:()=>a(t),children:t})})]})}),e.jsxs(y,{onClick:O,variant:"Outline","aria-hidden":!i,"aria-label":"button-next",children:["Вперед",e.jsxs("svg",{width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.66699 8.50065C2.66699 8.13246 2.96547 7.83398 3.33366 7.83398H12.667C13.0352 7.83398 13.3337 8.13246 13.3337 8.50065C13.3337 8.86884 13.0352 9.16732 12.667 9.16732H3.33366C2.96547 9.16732 2.66699 8.86884 2.66699 8.50065Z",fill:"#1B4DCB"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.52827 3.36128C7.78862 3.10093 8.21073 3.10093 8.47108 3.36128L13.1377 8.02794C13.3981 8.28829 13.3981 8.7104 13.1377 8.97075L8.47108 13.6374C8.21073 13.8978 7.78862 13.8978 7.52827 13.6374C7.26792 13.3771 7.26792 12.955 7.52827 12.6946L11.7235 8.49935L7.52827 4.30409C7.26792 4.04374 7.26792 3.62163 7.52827 3.36128Z",fill:"#1B4DCB"})]})]})]})};x.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{totalCount:{required:!0,tsType:{name:"number"},description:""},currentPage:{required:!0,tsType:{name:"number"},description:""},perPage:{required:!0,tsType:{name:"number"},description:""},onChangePage:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},withArrow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const{useArgs:L}=__STORYBOOK_MODULE_PREVIEW_API__,G={title:"Example/Pagination",component:x,tags:["autodocs"],parameters:{layout:"standard"},argTypes:{currentPage:{control:{type:"number",min:1}},totalCount:{control:{type:"number",min:1}},perPage:{control:{type:"number",min:1}}},args:{totalCount:10,perPage:1,currentPage:1,onChangePage:r=>r}},m={render:function(o){const[,n]=L();function a(i){n({currentPage:i})}return e.jsx(x,{...o,onChangePage:a})}},h={args:{withArrow:!0},render:function(o){const[,n]=L();function a(i){n({currentPage:i})}return e.jsx(x,{...o,onChangePage:a})}};var B,A,P;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: function Render(args) {
    const [, updateArgs] = useArgs();
    function onChange(page: number) {
      updateArgs({
        currentPage: page
      });
    }
    return <PaginationComponent {...args} onChangePage={onChange} />;
  }
}`,...(P=(A=m.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var R,k,M;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(M=(k=h.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};const U=["WithoutArrowButton","WithArrowButton"];export{h as WithArrowButton,m as WithoutArrowButton,U as __namedExportsOrder,G as default};
