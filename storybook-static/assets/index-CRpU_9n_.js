import{j as d}from"./jsx-runtime-CkxqCPlQ.js";import{r as l}from"./index-DJO9vBfz.js";import{d as i}from"./styled-components.browser.esm-CW2lnlac.js";import{C as o}from"./colors-BfrfeCNN.js";const s=i.input`
  padding: 6px 14px;
  border: 1px solid #b0afc2;
  border-radius: 8px;
  background-color: ${o.white};
  color: ${o.blueGray[600]};
  font-size: 14px;
  line-height: 19px;
  outline: none;
  box-shadow: none;

  &:hover {
    border-color: ${o.blue[500]};
  }

  &:focus {
    border-color: ${o.blueGray[300]};
    box-shadow: 0 0 0 3px #c2b6dc;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }

  &:disabled, &:disabled&[aria-invalid="true"] {
    background-color: ${o.blueGray[25]};
    border-color: ${o.blueGray[300]};
    color: ${o.blueGray[300]};
  }

  &[aria-invalid="true"] {
    border-color: ${o.red[400]};

    &:hover {
      border-color: ${o.red[500]};
    }

    &:focus {
      border-color: ${o.red[300]};
      box-shadow: 0 0 0 3px #D35148};
    }
  }
`,t=l.forwardRef(({error:r=!1,...e},a)=>d.jsx(s,{...e,ref:a,"aria-invalid":r}));t.__docgenInfo={description:"",methods:[],displayName:"Input",props:{error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{t as I};
