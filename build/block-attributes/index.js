!function(){"use strict";var t,n={195:function(){var t=window.wp.blocks;function n(){return n=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},n.apply(this,arguments)}var e=window.wp.element,r=(window.wp.i18n,window.wp.blockEditor);(0,t.registerBlockType)("learn-gutenberg/block-attributes",{edit:function(t){const{attributes:{content:o},setAttributes:i}=t,u=(0,r.useBlockProps)();return(0,e.createElement)(r.RichText,n({},u,{tagName:"p",onChange:t=>{i({content:t})},value:o}))},save:function(t){const o=r.useBlockProps.save();return(0,e.createElement)(r.RichText.Content,n({},o,{tagName:"p",value:t.attributes.content}))}})}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={exports:{}};return n[t](i,i.exports,r),i.exports}r.m=n,t=[],r.O=function(n,e,o,i){if(!e){var u=1/0;for(l=0;l<t.length;l++){e=t[l][0],o=t[l][1],i=t[l][2];for(var a=!0,c=0;c<e.length;c++)(!1&i||u>=i)&&Object.keys(r.O).every((function(t){return r.O[t](e[c])}))?e.splice(c--,1):(a=!1,i<u&&(u=i));if(a){t.splice(l--,1);var s=o();void 0!==s&&(n=s)}}return n}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[e,o,i]},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},function(){var t={385:0,585:0};r.O.j=function(n){return 0===t[n]};var n=function(n,e){var o,i,u=e[0],a=e[1],c=e[2],s=0;if(u.some((function(n){return 0!==t[n]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(c)var l=c(r)}for(n&&n(e);s<u.length;s++)i=u[s],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(l)},e=self.webpackChunklearn_gutenberg=self.webpackChunklearn_gutenberg||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var o=r.O(void 0,[585],(function(){return r(195)}));o=r.O(o)}();