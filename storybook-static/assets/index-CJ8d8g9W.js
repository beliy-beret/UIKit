import{j as d}from"./jsx-runtime-CkxqCPlQ.js";import{r as t}from"./index-DJO9vBfz.js";import{d as l}from"./styled-components.browser.esm-CW2lnlac.js";import{C as r}from"./colors-BfrfeCNN.js";import{t as s}from"./theme-BVt_iaI7.js";const i=l.input`
  ${s.text.font14.regular};
  padding: 6px 14px;
  border: 1px solid #b0afc2;
  border-radius: 8px;
  background-color: ${r.white};
  color: ${r.blueGray[600]};
  outline: none;
  box-shadow: none;

  &:hover {
    border-color: ${r.blue[500]};
  }

  &:focus {
    border-color: ${r.blueGray[300]};
    box-shadow: 0 0 0 3px #c2b6dc;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }

  &:disabled, &:disabled&[aria-invalid="true"] {
    background-color: ${r.blueGray[25]};
    border-color: ${r.blueGray[300]};
    color: ${r.blueGray[300]};
  }

  &[aria-invalid="true"] {
    border-color: ${r.red[400]};

    &:hover {
      border-color: ${r.red[500]};
    }

    &:focus {
      border-color: ${r.red[300]};
      box-shadow: 0 0 0 3px #D35148};
    }
  }
`,p=t.forwardRef(({error:o=!1,...e},a)=>d.jsx(i,{...e,ref:a,"aria-invalid":o}));p.__docgenInfo={description:"",methods:[],displayName:"Input",props:{error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{p as I};
