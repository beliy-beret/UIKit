import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{d as g}from"./styled-components.browser.esm-CW2lnlac.js";import{C as l}from"./colors-BfrfeCNN.js";import{t as K}from"./theme--sRFsRre.js";import{r as N}from"./index-DJO9vBfz.js";import{B as r}from"./index-Dswad2bv.js";const C={TOP:"bottom: 100%; left: 50%; translate: -50% 0; margin-bottom: 12px;",TR:"right:0; bottom: 100%; margin-bottom: 12px;",TL:"bottom: 100%; left: 0; margin-bottom: 12px;",BOTTOM:"top: 100%; left: 50%; translate: -50% 0; margin-top: 12px;",BL:"top: 100%; left: 0; margin-top: 12px;",BR:"top: 100%; right: 0; margin-top: 12px;",LEFT:"top: 50%; right: 100%; translate: 0 -50%; margin-right: 12px;",LT:"top: 0; right: 100%; margin-right: 12px;",LB:"bottom: 0; right: 100%; margin-right: 12px;",RIGHT:"bottom: 50%; left: 100%; translate: 0 50%; margin-left: 12px;",RT:"top: 0; left: 100%; margin-left: 12px;",RB:"bottom: 0; left: 100%; margin-left: 12px;"},z={LIGHT:`color: ${l.blueGray[800]}; background-color: ${l.blueGray[10]};`,DARK:`color: ${l.blueGray[10]}; background-color: ${l.blueGray[800]};`},X={LIGHT:l.blueGray[10],DARK:l.blueGray[800]},Z={TOP:"top: -7px; left: 50%; translate: -50% -100%;",TR:"top: -7px; left: 50%; translate: -50% -100%;",TL:"top: -7px; left: 50%; translate: -50% -100%;",BOTTOM:"bottom: -7px; left: 50%; translate: -50% 100%; rotate: 180deg",BL:"bottom: -7px; left: 50%; translate: -50% 100%; rotate: 180deg",BR:"bottom: -7px; left: 50%; translate: -50% 100%; rotate: 180deg",LEFT:"bottom: 50%; left: -3px; translate: -100% 50%; rotate: 270deg",LT:"bottom: 50%; left: -3px; translate: -100% 50%; rotate: 270deg",LB:"bottom: 50%; left: -3px; translate: -100% 50%; rotate: 270deg",RIGHT:"bottom: 50%; right: -3px; translate: 100% 50%; rotate: 90deg",RT:"bottom: 50%; right: -3px; translate: 100% 50%; rotate: 90deg",RB:"bottom: 50%; right: -3px; translate: 100% 50%; rotate: 90deg"},R=g.div`
  box-sizing: border-box;
  width: 0;
  height: 0;
  opacity: 0;
  padding: 0;
  overflow: hidden;
  max-width: 200px;
  position: absolute;
  border-radius: 8px;
  transition: opacity 300ms ease-in-out;
  ${K.text.font12.medium};
  ${({$position:i})=>C[i]};
  ${({$variant:i})=>z[i]};
`,J=g.div`
  position: relative;
  width: fit-content;
  max-height: fit-content;

  svg.tooltip-triangle {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    transition: opacity 300ms ease-in-out;

    path {
      fill: ${({$variant:i})=>X[i]};
    }
    ${({$position:i})=>Z[i]};
  }

  &[aria-expanded="true"] {
    ${R} {
      padding: 8px 12px;
      opacity: 1;
      height: auto;
      overflow: visible;
      ${({$width:i})=>i?`width: ${i}px; max-width: unset`:"width: auto;"}
    }

    svg.tooltip-triangle {
      width: 12px;
      height: 6px;
      opacity: 1;
    }
  }

  &:hover {
    ${R} {
      padding: 8px 12px;
      opacity: 1;
      height: auto;
      overflow: visible;
      ${({$width:i})=>i?`width: ${i}px; max-width: unset`:"width: 100dvw;"}
    }

    svg.tooltip-triangle {
      width: 12px;
      height: 6px;
      opacity: 1;
    }
  }
`,W=i=>t.jsx("svg",{className:"tooltip-triangle",width:12,height:6,viewBox:"0 0 12 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:t.jsx("path",{d:"M6 6L0 0H12L6 6Z",fill:"#0B1429"})});W.__docgenInfo={description:"",methods:[],displayName:"SvgComponent"};const o=({children:i,content:n,width:D,variant:j="DARK",position:L,open:V=!1,triangle:F=!0})=>{const f=N.useRef(null),[y,e]=N.useState(L||"TOP"),k=p=>{var O,w;if(L)return;const T=((O=f.current)==null?void 0:O.clientWidth)||0,a=((w=f.current)==null?void 0:w.clientHeight)||0,b=p.currentTarget.clientWidth,q=p.currentTarget.clientHeight,u=Math.ceil((T-b)/2),m=Math.ceil((a-q)/2),v=p.currentTarget.offsetLeft,d=window.innerWidth-b-v-18,s=p.currentTarget.offsetTop,c=window.innerHeight-p.currentTarget.offsetHeight-s;if(s>a+16&&v<u)return e("TL");if(s>a+16&&d<u)return e("TR");if(s>a+16)return e("TOP");if(d>T&&s<m)return e("RT");if(d>T&&c<m)return e("RB");if(d>T)return e("RIGHT");if(c>a+16&&v<u)return e("BL");if(c>a+16&&d<u||c>a+16)return e("BR");if(s<m)return e("LT");if(c<m)return e("LB");e("LEFT")};return t.jsxs(J,{$width:D,$variant:j,$position:y,onMouseEnter:k,"aria-expanded":V,children:[F&&t.jsx(W,{}),t.jsx(R,{ref:f,$variant:j,$position:y,"aria-label":"tooltip",children:n}),i]})};o.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"union",raw:"ReactNode | string",elements:[{name:"ReactNode"},{name:"string"}]},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},triangle:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},position:{required:!1,tsType:{name:"union",raw:"keyof typeof TOOLTIP_POSITION",elements:[{name:"literal",value:"TOP"},{name:"literal",value:"TR"},{name:"literal",value:"TL"},{name:"literal",value:"BOTTOM"},{name:"literal",value:"BL"},{name:"literal",value:"BR"},{name:"literal",value:"LEFT"},{name:"literal",value:"LT"},{name:"literal",value:"LB"},{name:"literal",value:"RIGHT"},{name:"literal",value:"RT"},{name:"literal",value:"RB"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:"keyof typeof TOOLTIP_VARIANT",elements:[{name:"literal",value:"LIGHT"},{name:"literal",value:"DARK"}]},description:"",defaultValue:{value:'"DARK"',computed:!1}},width:{required:!1,tsType:{name:"number"},description:""}}};const _=g.div`
  padding: 100px 250px;
  display: grid;
  grid-template-areas: ". T ." "L . R" ". B .";

  button {
    min-width: 100px;
  }
  .top,
  .right,
  .left,
  .bottom {
    display: flex;
    gap: 20px;
  }

  .left,
  .right {
    flex-direction: column;
  }

  .top {
    grid-area: T;
  }
  .right {
    grid-area: R;
  }
  .bottom {
    grid-area: B;
  }
  .left {
    grid-area: L;
  }
`,Q=g.div`
  box-sizing: border-box;
  padding: 40px 40px;
  width: 100%;
  height: 90vh;
  background-color: #c6c6c6;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  //position: relative;

  .container {
    width: fit-content;
    height: fit-content;

    &.tl {
      grid-column: 1;
      grid-row: 1;
      place-self: start;
    }
    &.tr {
      grid-column: 2;
      grid-row: 1;
      place-self: start end;
    }
    &.br {
      grid-column: 2;
      grid-row: 2;
      place-self: end;
    }
    &.bl {
      grid-column: 1;
      grid-row: 2;
      place-self: end start;
    }
  }
`,it={title:"Example/Tooltip",component:o,parameters:{layout:"standard"},argTypes:{},args:{content:'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'}},h={render:function(n){return t.jsxs(_,{children:[t.jsxs("div",{className:"top",children:[t.jsx(o,{...n,position:"TL",children:t.jsx(r,{variant:"Secondary",children:"TL"})}),t.jsx(o,{...n,position:"TOP",children:t.jsx(r,{variant:"Secondary",children:"TOP"})}),t.jsx(o,{...n,position:"TR",children:t.jsx(r,{variant:"Secondary",children:"TR"})})]}),t.jsxs("div",{className:"right",children:[t.jsx(o,{...n,position:"RT",children:t.jsx(r,{variant:"Secondary",children:"RT"})}),t.jsx(o,{...n,position:"RIGHT",children:t.jsx(r,{variant:"Secondary",children:"RIGHT"})}),t.jsx(o,{...n,position:"RB",children:t.jsx(r,{variant:"Secondary",children:"RB"})})]}),t.jsxs("div",{className:"bottom",children:[t.jsx(o,{...n,position:"BR",children:t.jsx(r,{variant:"Secondary",children:"BR"})}),t.jsx(o,{...n,position:"BOTTOM",children:t.jsx(r,{variant:"Secondary",children:"BOTTOM"})}),t.jsx(o,{...n,position:"BL",children:t.jsx(r,{variant:"Secondary",children:"BL"})})]}),t.jsxs("div",{className:"left",children:[t.jsx(o,{...n,position:"LB",children:t.jsx(r,{variant:"Secondary",children:"LB"})}),t.jsx(o,{...n,position:"LEFT",children:t.jsx(r,{variant:"Secondary",children:"RB"})}),t.jsx(o,{...n,position:"LT",children:t.jsx(r,{variant:"Secondary",children:"LT"})})]})]})}},x={args:{variant:"DARK"},render:function(n){return t.jsxs(_,{children:[t.jsxs("div",{className:"top",children:[t.jsx(o,{...n,position:"TL",children:t.jsx(r,{children:"TL"})}),t.jsx(o,{...n,position:"TOP",children:t.jsx(r,{children:"TOP"})}),t.jsx(o,{...n,position:"TR",children:t.jsx(r,{children:"TR"})})]}),t.jsxs("div",{className:"right",children:[t.jsx(o,{...n,position:"RT",children:t.jsx(r,{children:"RT"})}),t.jsx(o,{...n,position:"RIGHT",children:t.jsx(r,{children:"RIGHT"})}),t.jsx(o,{...n,position:"RB",children:t.jsx(r,{children:"RB"})})]}),t.jsxs("div",{className:"bottom",children:[t.jsx(o,{...n,position:"BR",children:t.jsx(r,{children:"BR"})}),t.jsx(o,{...n,position:"BOTTOM",children:t.jsx(r,{children:"BOTTOM"})}),t.jsx(o,{...n,position:"BL",children:t.jsx(r,{children:"BL"})})]}),t.jsxs("div",{className:"left",children:[t.jsx(o,{...n,position:"LB",children:t.jsx(r,{children:"LB"})}),t.jsx(o,{...n,position:"LEFT",children:t.jsx(r,{children:"RB"})}),t.jsx(o,{...n,position:"LT",children:t.jsx(r,{children:"LT"})})]})]})}},B={render:function(n){return t.jsxs(Q,{children:[t.jsx("div",{className:"container tl",children:t.jsx(o,{...n,children:t.jsx(r,{children:"Element"})})}),t.jsx("div",{className:"container tr",children:t.jsx(o,{...n,children:t.jsx(r,{children:"Element"})})}),t.jsx("div",{className:"container br",children:t.jsx(o,{...n,children:t.jsx(r,{children:"Element"})})}),t.jsx("div",{className:"container bl",children:t.jsx(o,{...n,children:t.jsx(r,{children:"Element"})})})]})}};var I,S,P;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: function Render(args) {
    return <Wrapper>\r
        <div className="top">\r
          <Tooltip {...args} position="TL">\r
            <Button variant="Secondary">TL</Button>\r
          </Tooltip>\r
          <Tooltip {...args} position="TOP">\r
            <Button variant="Secondary">TOP</Button>\r
          </Tooltip>\r
          <Tooltip {...args} position="TR">\r
            <Button variant="Secondary">TR</Button>\r
          </Tooltip>\r
        </div>\r
\r
        <div className="right">\r
          <Tooltip {...args} position="RT">\r
            <Button variant="Secondary">RT</Button>\r
          </Tooltip>\r
          <Tooltip {...args} position="RIGHT">\r
            <Button variant="Secondary">RIGHT</Button>\r
          </Tooltip>\r
          <Tooltip {...args} position="RB">\r
            <Button variant="Secondary">RB</Button>\r
          </Tooltip>\r
        </div>\r
\r
        <div className="bottom">\r
          <Tooltip {...args} position="BR">\r
            <Button variant="Secondary">BR</Button>\r
          </Tooltip>\r
          <Tooltip {...args} position="BOTTOM">\r
            <Button variant="Secondary">BOTTOM</Button>\r
          </Tooltip>\r
          <Tooltip {...args} position="BL">\r
            <Button variant="Secondary">BL</Button>\r
          </Tooltip>\r
        </div>\r
\r
        <div className="left">\r
          <Tooltip {...args} position="LB">\r
            <Button variant="Secondary">LB</Button>\r
          </Tooltip>\r
          <Tooltip {...args} position="LEFT">\r
            <Button variant="Secondary">RB</Button>\r
          </Tooltip>\r
          <Tooltip {...args} position="LT">\r
            <Button variant="Secondary">LT</Button>\r
          </Tooltip>\r
        </div>\r
      </Wrapper>;
  }
}`,...(P=(S=h.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var E,G,H;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: "DARK"
  },
  render: function Render(args) {
    return <Wrapper>\r
        <div className="top">\r
          <Tooltip {...args} position="TL">\r
            <Button>TL</Button>\r
          </Tooltip>\r
          <Tooltip {...args} position="TOP">\r
            <Button>TOP</Button>\r
          </Tooltip>\r
          <Tooltip {...args} position="TR">\r
            <Button>TR</Button>\r
          </Tooltip>\r
        </div>\r
\r
        <div className="right">\r
          <Tooltip {...args} position="RT">\r
            <Button>RT</Button>\r
          </Tooltip>\r
          <Tooltip {...args} position="RIGHT">\r
            <Button>RIGHT</Button>\r
          </Tooltip>\r
          <Tooltip {...args} position="RB">\r
            <Button>RB</Button>\r
          </Tooltip>\r
        </div>\r
\r
        <div className="bottom">\r
          <Tooltip {...args} position="BR">\r
            <Button>BR</Button>\r
          </Tooltip>\r
          <Tooltip {...args} position="BOTTOM">\r
            <Button>BOTTOM</Button>\r
          </Tooltip>\r
          <Tooltip {...args} position="BL">\r
            <Button>BL</Button>\r
          </Tooltip>\r
        </div>\r
\r
        <div className="left">\r
          <Tooltip {...args} position="LB">\r
            <Button>LB</Button>\r
          </Tooltip>\r
          <Tooltip {...args} position="LEFT">\r
            <Button>RB</Button>\r
          </Tooltip>\r
          <Tooltip {...args} position="LT">\r
            <Button>LT</Button>\r
          </Tooltip>\r
        </div>\r
      </Wrapper>;
  }
}`,...(H=(G=x.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var A,$,M;B.parameters={...B.parameters,docs:{...(A=B.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: function Render(args) {
    return <AutoPositionWrapper>\r
        <div className="container tl">\r
          <Tooltip {...args}>\r
            <Button>Element</Button>\r
          </Tooltip>\r
        </div>\r
        <div className="container tr">\r
          <Tooltip {...args}>\r
            <Button>Element</Button>\r
          </Tooltip>\r
        </div>\r
        <div className="container br">\r
          <Tooltip {...args}>\r
            <Button>Element</Button>\r
          </Tooltip>\r
        </div>\r
        <div className="container bl">\r
          <Tooltip {...args}>\r
            <Button>Element</Button>\r
          </Tooltip>\r
        </div>\r
      </AutoPositionWrapper>;
  }
}`,...(M=($=B.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};const et=["LightVariantTooltip","DarkVariantTooltip","AutoPositionTooltip"];export{B as AutoPositionTooltip,x as DarkVariantTooltip,h as LightVariantTooltip,et as __namedExportsOrder,it as default};
