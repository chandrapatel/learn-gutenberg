!function(){"use strict";var e,l={450:function(){var e=window.wp.blocks,l=window.wp.element,t=window.wp.i18n,n=window.wp.blockEditor,o=window.wp.components;(0,e.registerBlockType)("learn-gutenberg/block-controls",{edit:function(e){let{attributes:i,setAttributes:r,isSelected:a}=e;const{content:c,alignment:u,checkboxField:d,radioField:s,textField:g,toggleField:m,selectField:h}=i;return(0,l.createElement)("div",(0,n.useBlockProps)(),(0,l.createElement)(n.BlockControls,null,(0,l.createElement)(n.AlignmentToolbar,{value:i.alignment,onChange:e=>{r({alignment:void 0===e?"none":e})}})),(0,l.createElement)(n.InspectorControls,null,(0,l.createElement)(o.PanelBody,{title:(0,t.__)("Settings","learn-gutenberg")},(0,l.createElement)(o.CheckboxControl,{heading:"Checkbox Field",label:"Tick Me",help:"Additional help text",checked:d,onChange:e=>{r({checkboxField:e})}}),(0,l.createElement)(o.RadioControl,{label:"Radio Field",selected:s,options:[{label:"Yes",value:"yes"},{label:"No",value:"no"}],onChange:e=>{r({radioField:e})}}),(0,l.createElement)(o.TextControl,{label:"Text Field",help:"Additional help text",value:g,onChange:e=>{r({textField:e})}}),(0,l.createElement)(o.ToggleControl,{label:"Toggle Field",checked:m,onChange:e=>{r({toggleField:e})}}),(0,l.createElement)(o.SelectControl,{label:"Select Control",value:h,options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}],onChange:e=>{r({selectField:e})}}))),(0,l.createElement)(n.RichText,{className:i.className,style:{textAlign:u},tagName:"p",onChange:e=>{r({content:e})},value:c}),!a&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)("h4",null,"Inspector Control Fields"),(0,l.createElement)("ul",null,(0,l.createElement)("li",null,"Checkbox Field: ",d?"Checked":"Unchecked"),(0,l.createElement)("li",null,"Radio Field: ",s),(0,l.createElement)("li",null,"Text Field: ",g),(0,l.createElement)("li",null,"Toggle Field: ",m?"ON":"OFF"),(0,l.createElement)("li",null,"Select Field: ",h))))},save:function(e){let{attributes:t}=e;const{content:o,alignment:i,checkboxField:r,radioField:a,textField:c,toggleField:u,selectField:d}=t,s=n.useBlockProps.save();return(0,l.createElement)("div",s,(0,l.createElement)(n.RichText.Content,{className:`lg-align-${i}`,tagName:"p",value:o}),(0,l.createElement)("h4",null,"Inspector Control Fields"),(0,l.createElement)("ul",null,(0,l.createElement)("li",null,"Checkbox Field: ",r?"Checked":"Unchecked"),(0,l.createElement)("li",null,"Radio Field: ",a),(0,l.createElement)("li",null,"Text Field: ",c),(0,l.createElement)("li",null,"Toggle Field: ",u?"ON":"OFF"),(0,l.createElement)("li",null,"Select Field: ",d)))}})}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return l[e](i,i.exports,n),i.exports}n.m=l,e=[],n.O=function(l,t,o,i){if(!t){var r=1/0;for(d=0;d<e.length;d++){t=e[d][0],o=e[d][1],i=e[d][2];for(var a=!0,c=0;c<t.length;c++)(!1&i||r>=i)&&Object.keys(n.O).every((function(e){return n.O[e](t[c])}))?t.splice(c--,1):(a=!1,i<r&&(r=i));if(a){e.splice(d--,1);var u=o();void 0!==u&&(l=u)}}return l}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[t,o,i]},n.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)},function(){var e={509:0,947:0};n.O.j=function(l){return 0===e[l]};var l=function(l,t){var o,i,r=t[0],a=t[1],c=t[2],u=0;if(r.some((function(l){return 0!==e[l]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var d=c(n)}for(l&&l(t);u<r.length;u++)i=r[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},t=self.webpackChunklearn_gutenberg=self.webpackChunklearn_gutenberg||[];t.forEach(l.bind(null,0)),t.push=l.bind(null,t.push.bind(t))}();var o=n.O(void 0,[947],(function(){return n(450)}));o=n.O(o)}();