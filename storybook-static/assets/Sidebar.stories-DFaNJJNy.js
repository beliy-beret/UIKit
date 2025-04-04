import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{f as j}from"./index-B5ZI-g0m.js";import{N as m}from"./chunk-K6AXKMTT-OwgnNXpB.js";import{B as b}from"./index-Bcy4NeBU.js";import{d as h}from"./styled-components.browser.esm-CW2lnlac.js";import{C as c}from"./colors-BfrfeCNN.js";import{t as i}from"./theme--sRFsRre.js";import{r as u}from"./index-DJO9vBfz.js";import{A as k}from"./index-CcqGcCSf.js";const y=h.div`
  display: grid;
  gap: 8px;
  grid-template-columns: auto 1fr;
  border-bottom: 1px solid ${c.blueGray[100]};
  ${i.text.font14.regular};

  .user-role,
  .user-name {
    margin: 0;
  }

  .user-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .user-role {
    color: ${c.blueGray[500]};
  }

  .user-name {
    ${i.text.font14.bold};
  }
`,L=h.div`
  background-color: #ffffff;
  padding: 24px;
  width: 100%;
  border-radius: 12px;

  .logout-button {
    margin-top: 4px;
    padding-top: 4px;
    border-top: 1px solid ${c.blueGray[100]};

    button {
      width: 100%;
      align-items: unset;
      justify-content: start;
      gap: 8px;
      background-color: #ffffff;

      svg {
        path {
          fill: currentColor;
        }
      }

      ${i.text.font14.medium};
    }
  }

  .sidebar-title {
    ${i.header.font20.bold};
    margin: 0;
  }

  .link-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 4px;
    color: #8e8ca3;
    text-decoration: none;

    a {
      text-decoration: none;
    }

    svg {
      width: 16px;
      height: 17px;
    }
  }

  ${y} {
    margin-top: 16px;
    margin-bottom: 4px;
    padding-bottom: 12px;
  }
`,C=({userName:r,userRole:n,userImgSrc:o=""})=>{const a=u.useMemo(()=>{const[d,l]=r.split(" ");return`${d[0]}${l[0]}`},[r]),v=u.useMemo(()=>{const[d,l,p]=r.split(" ");return`${d} ${l[0]}.${(p==null?void 0:p[0])||""}.`},[r]);return e.jsxs(y,{"aria-label":"user-info",children:[e.jsx(k,{variant:"Medium",imgSrc:o,userInitials:a}),e.jsxs("div",{className:"user-data",children:[e.jsx("p",{className:"user-name",children:v}),n&&e.jsx("p",{className:"user-role",children:n})]})]})};C.__docgenInfo={description:"",methods:[],displayName:"User",props:{userName:{required:!0,tsType:{name:"string"},description:""},userRole:{required:!1,tsType:{name:"string"},description:""},userImgSrc:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const t=({children:r,title:n,logout:o,...a})=>e.jsxs(L,{children:[e.jsx("h2",{className:"sidebar-title",children:n}),e.jsx(C,{...a}),r,e.jsx("div",{className:"logout-button",children:e.jsxs(b,{variant:"Secondary",design:"Body",onClick:o,children:[e.jsxs("svg",{width:16,height:17,viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.3335 3.16668C3.15668 3.16668 2.98712 3.23691 2.86209 3.36194C2.73707 3.48696 2.66683 3.65653 2.66683 3.83334V13.1667C2.66683 13.3435 2.73707 13.5131 2.86209 13.6381C2.98712 13.7631 3.15669 13.8333 3.3335 13.8333H6.00016C6.36835 13.8333 6.66683 14.1318 6.66683 14.5C6.66683 14.8682 6.36835 15.1667 6.00016 15.1667H3.3335C2.80306 15.1667 2.29435 14.956 1.91928 14.5809C1.54421 14.2058 1.3335 13.6971 1.3335 13.1667V3.83334C1.3335 3.30291 1.54421 2.7942 1.91928 2.41913C2.29436 2.04406 2.80306 1.83334 3.3335 1.83334H6.00016C6.36835 1.83334 6.66683 2.13182 6.66683 2.50001C6.66683 2.8682 6.36835 3.16668 6.00016 3.16668H3.3335Z",fill:"#8E8CA3"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.1953 4.69526C10.4556 4.43491 10.8777 4.43491 11.1381 4.69526L14.4714 8.0286C14.7318 8.28894 14.7318 8.71106 14.4714 8.9714L11.1381 12.3047C10.8777 12.5651 10.4556 12.5651 10.1953 12.3047C9.93491 12.0444 9.93491 11.6223 10.1953 11.3619L13.0572 8.5L10.1953 5.63807C9.93491 5.37772 9.93491 4.95561 10.1953 4.69526Z",fill:"#8E8CA3"}),e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.3335 8.50001C5.3335 8.13182 5.63197 7.83334 6.00016 7.83334H14.0002C14.3684 7.83334 14.6668 8.13182 14.6668 8.50001C14.6668 8.8682 14.3684 9.16668 14.0002 9.16668H6.00016C5.63197 9.16668 5.3335 8.8682 5.3335 8.50001Z",fill:"#8E8CA3"})]}),e.jsx("span",{children:"Выйти"})]})})]});t.LinkItem=({children:r})=>e.jsx("span",{className:"link-wrapper",children:r});t.__docgenInfo={description:"",methods:[{name:"LinkItem",docblock:null,modifiers:["static"],params:[{name:"{ children }: NavItemProps",optional:!1,type:{name:"signature",type:"object",raw:`{\r
  children: ReactNode;\r
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}}]},alias:"NavItemProps"}}],returns:null}],displayName:"SideBar",props:{userName:{required:!0,tsType:{name:"string"},description:""},userRole:{required:!1,tsType:{name:"string"},description:""},userImgSrc:{required:!1,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},logout:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const E={title:"Example/Sidebar",component:t,parameters:{layout:"standard",backgrounds:{default:"dark"}},tags:["autodocs"],args:{title:"Личный кабинет",children:"",logout:j(),userRole:"Самозанятый",userImgSrc:"",userName:"Фамилия Имя Отчество"}},s={render:function(n){return e.jsx("div",{style:{width:"300px"},children:e.jsxs(t,{...n,children:[e.jsx(t.LinkItem,{children:e.jsx(m,{to:"/",children:"Profile"})}),e.jsx(t.LinkItem,{children:e.jsx(m,{to:"settings",children:"Settings"})}),e.jsx(t.LinkItem,{children:e.jsx(m,{to:"messages",children:"Messages"})})]})})}};var g,f,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: function Render(args) {
    return <div style={{
      width: "300px"
    }}>\r
        <MyComponent {...args}>\r
          <MyComponent.LinkItem>\r
            <NavLink to="/">Profile</NavLink>\r
          </MyComponent.LinkItem>\r
          <MyComponent.LinkItem>\r
            <NavLink to="settings">Settings</NavLink>\r
          </MyComponent.LinkItem>\r
          <MyComponent.LinkItem>\r
            <NavLink to="messages">Messages</NavLink>\r
          </MyComponent.LinkItem>\r
        </MyComponent>\r
      </div>;
  }
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const B=["Sidebar"];export{s as Sidebar,B as __namedExportsOrder,E as default};
