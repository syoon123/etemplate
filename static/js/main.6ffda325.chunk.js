(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{23:function(e,a,t){e.exports=t(34)},28:function(e,a,t){},30:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(18),l=t.n(i),r=(t(28),t(29),t(6)),o=(t(30),t(21));function s(e){var a="";if(0===e.recipients.length)a=e.noRecipients;else{for(var t in e.recipients)a=a+e.recipients[t]+", ";a=a.substring(0,a.length-2)}return c.a.createElement("p",null,e.label+": "+a)}var d=t(22);function m(e){if(!e.isHidden)return c.a.createElement(d.a,{variant:e.variant,className:e.className,onClick:e.action,size:e.size,block:!0},e.label)}var u=t(8),p=t(5),b=t(7);function h(e){var a,t,n,i=function(a){e.action(a.target.value)};if(!e.isHidden)return a=e.isLongText?c.a.createElement(b.a.Control,{as:"textarea",rows:10,placeholder:e.placeholder,onChange:i,value:e.value}):c.a.createElement(b.a.Control,{className:"input "+(e.errorMessage&&" is-invalid"),type:"text",placeholder:e.placeholder,value:e.value,onChange:i}),t=e.helperText?c.a.createElement(b.a.Text,{className:"text-muted"},e.helperText):null,n=e.errorMessage?c.a.createElement(b.a.Control.Feedback,{type:"invalid"},e.errorMessage):null,c.a.createElement(b.a.Group,null,c.a.createElement(b.a.Label,{className:"input-label"},e.label),"\xa0",a,t,n)}var f=t(12),E=t(20);function v(e){var a=c.a.useState(""),t=Object(r.a)(a,2),n=t[0],i=t[1],l=c.a.useState(""),o=Object(r.a)(l,2),s=o[0],d=o[1],m=new RegExp(/[\w\d.-]+@[\w\d.-]+\.[\w\d.-]+/g);if(!e.isHidden){return c.a.createElement(b.a.Group,null,c.a.createElement("div",{className:"input-label"},c.a.createElement(b.a.Label,null,e.label),"\xa0",e.items.map((function(a){return c.a.createElement(E.a,{pill:!0,variant:"primary",className:"tag-item",key:a},a,c.a.createElement("button",{type:"button",className:"button",onClick:function(){return function(a){e.action(e.items.filter((function(e){return e!==a})))}(a)}},"\xd7"))}))),c.a.createElement(b.a.Control,{className:"input "+(s&&" is-invalid"),type:"email",value:n,placeholder:"Type or paste email addresses",onKeyDown:function(a){["Enter",","," "].includes(a.key)&&(a.preventDefault(),i(n.trim()),n&&function(e){var a=null;u(e)&&(a="".concat(e," has already been added."));(function(e){return m.test(e)})(e)||(a="".concat(e," is not a valid email address."));if(a)return d(a),!1;return!0}(n)&&(i(""),e.action([].concat(Object(f.a)(e.items),[n]))))},onChange:function(e){i(e.target.value),d("")},onPaste:function(a){a.preventDefault();var t=a.clipboardData.getData("text").match(m);if(t){var n=t.filter((function(e){return!u(e)}));e.action([].concat(Object(f.a)(e.items),Object(f.a)(n)))}}}),c.a.createElement(b.a.Text,{className:"text-muted"},"Press ENTER, SPACE, or COMMA to add to recipients list."),s&&c.a.createElement(b.a.Control.Feedback,{type:"invalid"},s))}function u(a){return e.items.concat(e.existingItems).includes(a)}}var y=t(15);function g(){var e,a=c.a.useState([]),t=Object(r.a)(a,2),n=t[0],i=t[1],l=c.a.useState([]),d=Object(r.a)(l,2),b=d[0],f=d[1],E=c.a.useState([]),g=Object(r.a)(E,2),j=g[0],N=g[1],x=c.a.useState(""),T=Object(r.a)(x,2),C=T[0],H=T[1],w=c.a.useState(""),k=Object(r.a)(w,2),O=k[0],R=k[1],S=c.a.useState(""),U=Object(r.a)(S,2),B=U[0],I=U[1],M=c.a.useState(!0),L=Object(r.a)(M,2),A=L[0],G=L[1],D=c.a.useState(""),F=Object(r.a)(D,2),P=F[0],z=F[1],J=c.a.useState(!0),V=Object(r.a)(J,2),W=V[0],K=V[1],$=c.a.useState(""),q=Object(r.a)($,2),Q=q[0],X=q[1];return c.a.createElement("div",{className:"App"},c.a.createElement(o.a,{className:"p-3"},c.a.createElement(u.a,{className:"justify-content-md-center"},c.a.createElement(p.a,{lg:8},c.a.createElement("h1",{className:"text-center mb-3"},"eTemplate"))),c.a.createElement(u.a,{className:"justify-content-md-center"},c.a.createElement(p.a,{lg:8},c.a.createElement(y.a,null,c.a.createElement(y.a.Body,null,c.a.createElement("h2",{className:"break-word mb-4"},C||"[No Subject]"),(e={isHidden:!A,recipients:n,cc:b,bcc:j,body:O,subject:C,handleRecipients:function(e){i(e)},handleCc:function(e){f(e)},handleBcc:function(e){N(e)},handleSubject:function(e){H(e)},handleBody:function(e){R(e)},handleGenerateUrl:function(){var e=encodeURIComponent(n.join()),a=b.join();""!==a&&(a="cc=".concat(encodeURIComponent(a)));var t=j.join();""!==t&&(t="&bcc=".concat(encodeURIComponent(t)));var c="";""!==C&&(c="&subject=".concat(encodeURIComponent(C)));var i="&body=".concat(encodeURIComponent(O));I("mailto:".concat(e,"?").concat(a).concat(t).concat(c).concat(i)),G(!1)}},c.a.createElement(c.a.Fragment,null,v({label:"To:",action:e.handleRecipients,items:e.recipients,existingItems:e.cc.concat(e.bcc),isHidden:e.isHidden}),v({label:"Cc:",action:e.handleCc,items:e.cc,existingItems:e.recipients.concat(e.bcc),isHidden:e.isHidden}),v({label:"Bcc:",action:e.handleBcc,items:e.bcc,existingItems:e.recipients.concat(e.cc),isHidden:e.isHidden}),h({label:"Subject:",action:e.handleSubject,placeholder:"Type or paste subject line",value:e.subject,isLongText:!1,isHidden:e.isHidden,helperText:"",errorMessage:""}),h({label:"Body:",action:e.handleBody,placeholder:"Type or paste email body",isLongText:!0,value:e.body,isHidden:e.isHidden,helperText:"",errorMessage:""}),c.a.createElement(u.a,{className:"justify-content-md-center"},c.a.createElement(p.a,{md:4},m({label:"Next",action:e.handleGenerateUrl,variant:"primary",isHidden:e.isHidden}))))),function(e){if(!e.isHidden)return c.a.createElement(c.a.Fragment,null,s({label:"To",recipients:e.recipients,noRecipients:"[none]"}),s({label:"Ccc",recipients:e.cc,noRecipients:"[none]"}),s({label:"Bcc",recipients:e.bcc,noRecipients:"[none]"}),c.a.createElement("hr",null),c.a.createElement("p",{className:"preview-body"},e.body?e.body:"[No body]"),c.a.createElement("hr",null),h({label:"Custom TinyURL Alias (Optional)",placeholder:"ex. my-special-alias",action:e.handleAlias,isLongText:!1,value:e.alias,isHidden:e.isHidden,helperText:e.alias?"tinyurl.com/".concat(e.alias):"",errorMessage:e.aliasValid?"":"Invalid or unavailable alias. Please try again."}),c.a.createElement(u.a,{className:"justify-content-md-center"},c.a.createElement(p.a,{md:4},m({label:"Back to Edit",variant:"secondary",className:"mb-2",action:e.handleBackToEdit})),c.a.createElement(p.a,{md:4},m({label:"Make URL",variant:"primary",action:e.handleGenerateTinyUrl}))))}({isHidden:A,recipients:n,cc:b,bcc:j,body:O,mailToUrl:B,alias:P,aliasValid:W,handleBackToEdit:function(){X(""),G(!0)},handleGenerateTinyUrl:function(){var e="https://cors-anywhere.herokuapp.com/https://tinyurl.com/api-create.php?url=".concat(encodeURIComponent(B));""!==P&&(e=e.concat("&alias=".concat(P))),fetch(e,{headers:{Origin:"https://tinyurl.com"}}).then((function(e){return e.text()})).then((function(e){"Error"===e?(K(!1),X("")):(K(!0),X(e))}))},handleAlias:function(e){z(e.trim())}}),function(e){if(!e.isHidden)return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,null,c.a.createElement(p.a,{className:"mt-3 mb-0"},c.a.createElement("p",{className:"center mb-0"},c.a.createElement("a",{className:"mb-0 tiny-url",href:e.tinyUrl},e.tinyUrl)))),c.a.createElement(u.a,{className:"justify-content-md-center mt-0 mb-3"},c.a.createElement(p.a,{md:4},m({label:"Copy to Clipboard",variant:"link",className:"",size:"sm",action:function(){navigator.clipboard.writeText(e.tinyUrl)}}))),c.a.createElement(u.a,{className:"justify-content-md-center mt-4"},c.a.createElement(p.a,{md:4},m({label:"New Template",variant:"danger",className:"",action:e.handleRefresh}))))}({tinyUrl:Q,isHidden:A||!Q,handleRefresh:function(){window.location.reload()}})))))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.6ffda325.chunk.js.map