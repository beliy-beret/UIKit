import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{d as g}from"./styled-components.browser.esm-CW2lnlac.js";import{C as d}from"./colors-BfrfeCNN.js";import{t as z}from"./theme--sRFsRre.js";import{r as P}from"./index-DJO9vBfz.js";import{B as r}from"./index-Dswad2bv.js";const X={TOP:"bottom: 100%; left: 50%; translate: -50% 0; margin-bottom: 12px;",TR:"right:0; bottom: 100%; margin-bottom: 12px;",TL:"bottom: 100%; left: 0; margin-bottom: 12px;",BOTTOM:"top: 100%; left: 50%; translate: -50% 0; margin-top: 12px;",BL:"top: 100%; left: 0; margin-top: 12px;",BR:"top: 100%; right: 0; margin-top: 12px;",LEFT:"top: 50%; right: 100%; translate: 0 -50%; margin-right: 12px;",LT:"top: 0; right: 100%; margin-right: 12px;",LB:"bottom: 0; right: 100%; margin-right: 12px;",RIGHT:"bottom: 50%; left: 100%; translate: 0 50%; margin-left: 12px;",RT:"top: 0; left: 100%; margin-left: 12px;",RB:"bottom: 0; left: 100%; margin-left: 12px;"},Z={LIGHT:`color: ${d.blueGray[800]}; background-color: ${d.blueGray[10]};`,DARK:`color: ${d.blueGray[10]}; background-color: ${d.blueGray[800]};`},J={LIGHT:d.blueGray[10],DARK:d.blueGray[800]},Q={TOP:"top: -7px; left: 50%; translate: -50% -100%;",TR:"top: -7px; left: 50%; translate: -50% -100%;",TL:"top: -7px; left: 50%; translate: -50% -100%;",BOTTOM:"bottom: -7px; left: 50%; translate: -50% 100%; rotate: 180deg",BL:"bottom: -7px; left: 50%; translate: -50% 100%; rotate: 180deg",BR:"bottom: -7px; left: 50%; translate: -50% 100%; rotate: 180deg",LEFT:"bottom: 50%; left: -3px; translate: -100% 50%; rotate: 270deg",LT:"bottom: 50%; left: -3px; translate: -100% 50%; rotate: 270deg",LB:"bottom: 50%; left: -3px; translate: -100% 50%; rotate: 270deg",RIGHT:"bottom: 50%; right: -3px; translate: 100% 50%; rotate: 90deg",RT:"bottom: 50%; right: -3px; translate: 100% 50%; rotate: 90deg",RB:"bottom: 50%; right: -3px; translate: 100% 50%; rotate: 90deg"},R=g.div`
  box-sizing: border-box;
  width: 0;
  height: 0;
  opacity: 0;
  padding: 0;
  overflow: hidden;
  max-width: max-content;
  position: absolute;
  border-radius: 8px;
  transition: opacity 300ms ease-in-out;
  ${z.text.font12.medium};
  ${({$position:i})=>X[i]};
  ${({$variant:i})=>Z[i]};
`,U=g.div`
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
      fill: ${({$variant:i})=>J[i]};
    }
    ${({$position:i})=>Q[i]};
  }

  &[aria-expanded="true"] {
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
`,D=i=>t.jsx("svg",{className:"tooltip-triangle",width:12,height:6,viewBox:"0 0 12 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:t.jsx("path",{d:"M6 6L0 0H12L6 6Z",fill:"#0B1429"})});D.__docgenInfo={description:"",methods:[],displayName:"SvgComponent"};const n=({children:i,content:o,width:F,variant:j="DARK",position:L,open:k=!1,triangle:q=!0})=>{const B=P.useRef(null),[y,a]=P.useState(L||"TOP"),b=e=>{let s=e.offsetLeft;return e.offsetParent&&e.offsetParent!==document.body&&(s+=b(e.offsetParent)),s},O=e=>{let s=e.offsetTop;return e.offsetParent&&e.offsetParent!==document.body&&(s+=O(e.offsetParent)),s},K=e=>{var N,I;if(L)return;const s=((N=B.current)==null?void 0:N.clientWidth)||0,l=((I=B.current)==null?void 0:I.clientHeight)||0,w=e.currentTarget.clientWidth,C=e.currentTarget.clientHeight,u=Math.ceil((s-w)/2),h=Math.ceil((l-C)/2),v=b(e.currentTarget),c=window.innerWidth-w-v-18,p=O(e.currentTarget),T=window.innerHeight-e.currentTarget.offsetHeight-p;if(p>l+16&&v<u)return a("TL");if(p>l+16&&c<u)return a("TR");if(p>l+16)return a("TOP");if(c>s&&p<h)return a("RT");if(c>s&&T<h)return a("RB");if(c>s)return a("RIGHT");if(T>l+16&&v<u)return a("BL");if(T>l+16&&c<u||T>l+16)return a("BR");if(p<h)return a("LT");if(T<h)return a("LB");a("LEFT")};return t.jsxs(U,{$width:F,$variant:j,$position:y,onMouseEnter:K,"aria-expanded":k,children:[q&&t.jsx(D,{}),t.jsx(R,{ref:B,$variant:j,$position:y,"aria-label":"tooltip",children:o}),i]})};n.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"union",raw:"ReactNode | string",elements:[{name:"ReactNode"},{name:"string"}]},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},triangle:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},position:{required:!1,tsType:{name:"union",raw:"keyof typeof TOOLTIP_POSITION",elements:[{name:"literal",value:"TOP"},{name:"literal",value:"TR"},{name:"literal",value:"TL"},{name:"literal",value:"BOTTOM"},{name:"literal",value:"BL"},{name:"literal",value:"BR"},{name:"literal",value:"LEFT"},{name:"literal",value:"LT"},{name:"literal",value:"LB"},{name:"literal",value:"RIGHT"},{name:"literal",value:"RT"},{name:"literal",value:"RB"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:"keyof typeof TOOLTIP_VARIANT",elements:[{name:"literal",value:"LIGHT"},{name:"literal",value:"DARK"}]},description:"",defaultValue:{value:'"DARK"',computed:!1}},width:{required:!1,tsType:{name:"number"},description:""}}};const V=g.div`
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
`,Y=g.div`
  box-sizing: border-box;
  padding: 40px 40px;
  width: 100%;
  height: 90vh;
  background-color: #c6c6c6;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

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
`,at={title:"Example/Tooltip",component:n,parameters:{layout:"standard"},argTypes:{},args:{content:'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'}},m={args:{width:200},render:function(o){return t.jsxs(V,{children:[t.jsxs("div",{className:"top",children:[t.jsx(n,{...o,position:"TL",children:t.jsx(r,{variant:"Secondary",children:"TL"})}),t.jsx(n,{...o,position:"TOP",children:t.jsx(r,{variant:"Secondary",children:"TOP"})}),t.jsx(n,{...o,position:"TR",children:t.jsx(r,{variant:"Secondary",children:"TR"})})]}),t.jsxs("div",{className:"right",children:[t.jsx(n,{...o,position:"RT",children:t.jsx(r,{variant:"Secondary",children:"RT"})}),t.jsx(n,{...o,position:"RIGHT",children:t.jsx(r,{variant:"Secondary",children:"RIGHT"})}),t.jsx(n,{...o,position:"RB",children:t.jsx(r,{variant:"Secondary",children:"RB"})})]}),t.jsxs("div",{className:"bottom",children:[t.jsx(n,{...o,position:"BR",children:t.jsx(r,{variant:"Secondary",children:"BR"})}),t.jsx(n,{...o,position:"BOTTOM",children:t.jsx(r,{variant:"Secondary",children:"BOTTOM"})}),t.jsx(n,{...o,position:"BL",children:t.jsx(r,{variant:"Secondary",children:"BL"})})]}),t.jsxs("div",{className:"left",children:[t.jsx(n,{...o,position:"LB",children:t.jsx(r,{variant:"Secondary",children:"LB"})}),t.jsx(n,{...o,position:"LEFT",children:t.jsx(r,{variant:"Secondary",children:"RB"})}),t.jsx(n,{...o,position:"LT",children:t.jsx(r,{variant:"Secondary",children:"LT"})})]})]})}},x={args:{variant:"DARK",width:200},render:function(o){return t.jsxs(V,{children:[t.jsxs("div",{className:"top",children:[t.jsx(n,{...o,position:"TL",children:t.jsx(r,{children:"TL"})}),t.jsx(n,{...o,position:"TOP",children:t.jsx(r,{children:"TOP"})}),t.jsx(n,{...o,position:"TR",children:t.jsx(r,{children:"TR"})})]}),t.jsxs("div",{className:"right",children:[t.jsx(n,{...o,position:"RT",children:t.jsx(r,{children:"RT"})}),t.jsx(n,{...o,position:"RIGHT",children:t.jsx(r,{children:"RIGHT"})}),t.jsx(n,{...o,position:"RB",children:t.jsx(r,{children:"RB"})})]}),t.jsxs("div",{className:"bottom",children:[t.jsx(n,{...o,position:"BR",children:t.jsx(r,{children:"BR"})}),t.jsx(n,{...o,position:"BOTTOM",children:t.jsx(r,{children:"BOTTOM"})}),t.jsx(n,{...o,position:"BL",children:t.jsx(r,{children:"BL"})})]}),t.jsxs("div",{className:"left",children:[t.jsx(n,{...o,position:"LB",children:t.jsx(r,{children:"LB"})}),t.jsx(n,{...o,position:"LEFT",children:t.jsx(r,{children:"RB"})}),t.jsx(n,{...o,position:"LT",children:t.jsx(r,{children:"LT"})})]})]})}},f={args:{width:250},render:function(o){return t.jsxs(Y,{children:[t.jsx("div",{className:"container tl",children:t.jsx(n,{...o,children:t.jsx(r,{children:"Element"})})}),t.jsx("div",{className:"container tr",children:t.jsx(n,{...o,children:t.jsx(r,{children:"Element"})})}),t.jsx("div",{className:"container br",children:t.jsx(n,{...o,children:t.jsx(r,{children:"Element"})})}),t.jsx("div",{className:"container bl",children:t.jsx(n,{...o,children:t.jsx(r,{children:"Element"})})})]})}};var S,E,G;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    width: 200
  },
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
}`,...(G=(E=m.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var H,A,$;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: "DARK",
    width: 200
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
}`,...($=(A=x.parameters)==null?void 0:A.docs)==null?void 0:$.source}}};var M,W,_;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    width: 250
  },
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
}`,...(_=(W=f.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};const st=["LightVariantTooltip","DarkVariantTooltip","AutoPositionTooltip"];export{f as AutoPositionTooltip,x as DarkVariantTooltip,m as LightVariantTooltip,st as __namedExportsOrder,at as default};
