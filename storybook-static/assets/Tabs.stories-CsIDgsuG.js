import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{d as T}from"./styled-components.browser.esm-CW2lnlac.js";import{C as t}from"./colors-BfrfeCNN.js";import"./index-DJO9vBfz.js";const y=T.div`
  display: flex;
  width: max-content;
`,h=T.div`
  position: relative;
  color: ${t.blueGray[400]};
  cursor: pointer;
  padding: 8px;

  input {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    outline: none;
    width: 0;
    height: 0;
    border: none;
  }

  .line {
    position: absolute;
    display: inline-block;
    height: 1px;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: ${t.blue[500]};
    scale: 0;
    transition: scale 250ms linear;
  }

  &[aria-selected="true"] {
    color: ${t.blueGray[800]};
    .line {
      scale: 1;
    }
  }

  &:focus-within {
    box-shadow: inset 0 0 0 3px ${t.blue[200]};
  }

  @media (hover: hover) {
    &:hover {
      color: ${t.blueGray[800]};
    }
  }
`,u=({list:a,selectedTab:i,onSelect:r,renderTab:s,className:l=""})=>{const c=e=>{r(e)},g=(e,d)=>{e.key==="Enter"&&r(d)};return n.jsx(y,{className:l,"aria-label":"tab-list",children:a.length&&(a==null?void 0:a.map((e,d)=>n.jsxs(h,{"aria-selected":e.value===i.value,"aria-label":"tab-item",onClick:()=>c(e),onKeyDown:f=>g(f,e),children:[s?s(e):e.label,n.jsx("span",{className:"line","aria-label":"tab-line"}),n.jsx("input",{})]},d)))})};u.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{list:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},selectedTab:{required:!0,tsType:{name:"T"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(tab: T) => void",signature:{arguments:[{type:{name:"T"},name:"tab"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},renderTab:{required:!1,tsType:{name:"signature",type:"function",raw:"(tab: T) => ReactElement",signature:{arguments:[{type:{name:"T"},name:"tab"}],return:{name:"ReactElement"}}},description:""}}};const{useArgs:x}=__STORYBOOK_MODULE_PREVIEW_API__,j={title:"Example/Tabs",component:u,tags:["autodocs"],parameters:{layout:"standard"},args:{list:[{value:"1",label:"One"},{value:"2",label:"Two"},{value:"3",label:"Three"}],selectedTab:{value:"1",label:"One"},onSelect:a=>a}},o={render:function(i){const[{selectedTab:r},s]=x();function l(c){s({selectedTab:c})}return n.jsx(u,{...i,selectedTab:r,onSelect:l})}};var p,m,b;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: function Render(args) {
    const [{
      selectedTab
    }, updateArgs] = useArgs();
    function onSelect(tab: Tab) {
      updateArgs({
        selectedTab: tab
      });
    }
    return <TabsComponent {...args} selectedTab={selectedTab} onSelect={onSelect} />;
  }
}`,...(b=(m=o.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const A=["Tabs"];export{o as Tabs,A as __namedExportsOrder,j as default};
