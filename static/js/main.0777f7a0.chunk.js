(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{23:function(e,a,t){e.exports=t(34)},28:function(e,a,t){},30:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(18),i=t.n(l),r=(t(28),t(29),t(6)),o=(t(30),t(21));function s(e){var a="";if(0===e.recipients.length)a=e.noRecipients;else{for(var t in e.recipients)a=a+e.recipients[t]+", ";a=a.substring(0,a.length-2)}return c.a.createElement("p",null,e.label+": "+a)}var m=t(22);function d(e){if(!e.isHidden)return c.a.createElement(m.a,{variant:e.variant,className:e.className,onClick:e.action,size:e.size,block:!0},e.label)}var u=t(7),p=t(5),b=t(8);function h(e){var a,t,n,l=function(a){e.action(a.target.value)};if(!e.isHidden)return a=e.isLongText?c.a.createElement(b.a.Control,{as:"textarea",rows:10,placeholder:e.placeholder,onChange:l,value:e.value}):c.a.createElement(b.a.Control,{className:"input "+(e.errorMessage&&" is-invalid"),placeholder:e.placeholder,value:e.value,onChange:l}),t=e.helperText?c.a.createElement(b.a.Text,{className:"text-muted"},e.helperText):null,n=e.errorMessage?c.a.createElement(b.a.Control.Feedback,{type:"invalid"},e.errorMessage):null,c.a.createElement(b.a.Group,null,c.a.createElement(b.a.Label,{className:"input-label"},e.label),"\xa0",a,t,n)}var f=t(11),E=t(20);function v(e){var a=c.a.useState(""),t=Object(r.a)(a,2),n=t[0],l=t[1],i=c.a.useState(""),o=Object(r.a)(i,2),s=o[0],m=o[1],d=new RegExp(/[\w\d.-]+@[\w\d.-]+\.[\w\d.-]+/g);if(!e.isHidden){return c.a.createElement(b.a.Group,null,c.a.createElement("div",{className:"input-label"},c.a.createElement(b.a.Label,null,e.label),"\xa0",e.items.map((function(a){return c.a.createElement(E.a,{pill:!0,variant:"primary",className:"tag-item",key:a},a,c.a.createElement("button",{type:"button",className:"button",onClick:function(){return function(a){e.action(e.items.filter((function(e){return e!==a})))}(a)}},"\xd7"))}))),c.a.createElement(b.a.Control,{className:"input "+(s&&" is-invalid"),value:n,placeholder:"Type or paste email addresses",onKeyDown:function(a){["Enter",","," "].includes(a.key)&&(a.preventDefault(),l(n.trim()),n&&u(n)&&(l(""),e.action([].concat(Object(f.a)(e.items),[n]))))},onChange:function(e){l(e.target.value),m("")},onBlur:function(a){l(n.trim()),n&&u(n)&&(l(""),e.action([].concat(Object(f.a)(e.items),[n])))},onPaste:function(a){a.preventDefault();var t=a.clipboardData.getData("text").match(d);if(t){var n=t.filter((function(e){return!p(e)}));e.action([].concat(Object(f.a)(e.items),Object(f.a)(n)))}}}),c.a.createElement(b.a.Text,{className:"text-muted"},"Press ENTER, SPACE, or COMMA to add to recipients list."),s&&c.a.createElement(b.a.Control.Feedback,{type:"invalid"},s))}function u(e){var a=null;return p(e)&&(a="".concat(e," has already been added.")),function(e){return d.test(e)}(e)||(a="".concat(e," is not a valid email address.")),!a||(m(a),!1)}function p(a){return e.items.concat(e.existingItems).includes(a)}}var y=t(15);function g(){var e,a=c.a.useState([]),t=Object(r.a)(a,2),n=t[0],l=t[1],i=c.a.useState([]),m=Object(r.a)(i,2),b=m[0],f=m[1],E=c.a.useState([]),g=Object(r.a)(E,2),N=g[0],j=g[1],C=c.a.useState(""),T=Object(r.a)(C,2),k=T[0],x=T[1],w=c.a.useState(""),H=Object(r.a)(w,2),S=H[0],O=H[1],R=c.a.useState(""),U=Object(r.a)(R,2),B=U[0],I=U[1],L=c.a.useState(!0),M=Object(r.a)(L,2),A=M[0],F=M[1],G=c.a.useState(""),D=Object(r.a)(G,2),P=D[0],z=D[1],J=c.a.useState(!0),_=Object(r.a)(J,2),V=_[0],W=_[1],K=c.a.useState(""),Y=Object(r.a)(K,2),$=Y[0],q=Y[1];return c.a.createElement("div",{className:"App"},c.a.createElement(o.a,{className:"p-3"},c.a.createElement(u.a,{className:"justify-content-md-center"},c.a.createElement(p.a,{lg:8},c.a.createElement("h1",{className:"text-center mb-3"},"e-Template"))),c.a.createElement(u.a,{className:"justify-content-md-center mb-0"},c.a.createElement(p.a,{lg:8},c.a.createElement("p",{className:"text-center"},"Thanks to resources like"," ",c.a.createElement("a",{href:"https://defund12.org",target:"_blank",rel:"noopener noreferrer"},"defund12.org")," ","and"," ",c.a.createElement("a",{href:"https://sayitagain.carrd.co/",target:"_blank",rel:"noopener noreferrer"},"Emails for Justice"),", making one's voice heard has never been easier \u2014 by clicking a link, one can contact institution leaders and government officials in a matter of seconds. Inspired by these activists' powerful use of technology, we've built a tool to make this kind of email templating as simple and accessible as possible."),c.a.createElement("p",{className:"text-center mb-3"},c.a.createElement("small",null,"\u2014 Sarah and Stephanie Yoon")))),c.a.createElement(u.a,{className:"justify-content-md-center mb-0"},c.a.createElement(p.a,{lg:8},c.a.createElement("p",{className:"text-center"},c.a.createElement("a",{href:"https://st234pa.github.io/representative-emails",target:"_blank",rel:"noopener noreferrer"},"Need to find your representatives' emails?")))),c.a.createElement(u.a,{className:"justify-content-md-center"},c.a.createElement(p.a,{lg:8},c.a.createElement(y.a,null,c.a.createElement(y.a.Body,null,c.a.createElement("h2",{className:"break-word mb-4"},k||"[No Subject]"),(e={isHidden:!A,recipients:n,cc:b,bcc:N,body:S,subject:k,handleRecipients:function(e){l(e)},handleCc:function(e){f(e)},handleBcc:function(e){j(e)},handleSubject:function(e){x(e)},handleBody:function(e){O(e)},handleGenerateUrl:function(){var e=encodeURIComponent(n.join()),a=b.join();""!==a&&(a="cc=".concat(encodeURIComponent(a)));var t=N.join();""!==t&&(t="&bcc=".concat(encodeURIComponent(t)));var c="";""!==k&&(c="&subject=".concat(encodeURIComponent(k)));var l="&body=".concat(encodeURIComponent(S));I("mailto:".concat(e,"?").concat(a).concat(t).concat(c).concat(l)),F(!1)}},c.a.createElement(c.a.Fragment,null,v({label:"To:",action:e.handleRecipients,items:e.recipients,existingItems:e.cc.concat(e.bcc),isHidden:e.isHidden}),v({label:"Cc:",action:e.handleCc,items:e.cc,existingItems:e.recipients.concat(e.bcc),isHidden:e.isHidden}),v({label:"Bcc:",action:e.handleBcc,items:e.bcc,existingItems:e.recipients.concat(e.cc),isHidden:e.isHidden}),h({label:"Subject:",action:e.handleSubject,placeholder:"Type or paste subject line",value:e.subject,isLongText:!1,isHidden:e.isHidden}),h({label:"Body:",action:e.handleBody,placeholder:"Type or paste email body",isLongText:!0,value:e.body,isHidden:e.isHidden}),c.a.createElement(u.a,{className:"justify-content-md-center"},c.a.createElement(p.a,{md:4},d({label:"Next",action:e.handleGenerateUrl,variant:"primary",isHidden:e.isHidden}))))),function(e){if(!e.isHidden)return c.a.createElement(c.a.Fragment,null,s({label:"To",recipients:e.recipients,noRecipients:"[none]"}),s({label:"Ccc",recipients:e.cc,noRecipients:"[none]"}),s({label:"Bcc",recipients:e.bcc,noRecipients:"[none]"}),c.a.createElement("hr",null),c.a.createElement("p",{className:"preview-body"},e.body?e.body:"[No body]"),c.a.createElement("hr",null),h({label:"Custom TinyURL Alias (Optional)",placeholder:"ex. my-special-alias",action:e.handleAlias,isLongText:!1,value:e.alias,helperText:e.alias?"tinyurl.com/".concat(e.alias):"",errorMessage:e.aliasValid?"":"Invalid or unavailable alias. Please try again."}),c.a.createElement(u.a,{className:"justify-content-md-center"},c.a.createElement(p.a,{md:4},d({label:"Back to Edit",variant:"secondary",className:"mb-2",action:e.handleBackToEdit})),c.a.createElement(p.a,{md:4},d({label:"Make URL",variant:"primary",action:e.handleGenerateTinyUrl}))))}({isHidden:A,recipients:n,cc:b,bcc:N,body:S,mailToUrl:B,alias:P,aliasValid:V,handleBackToEdit:function(){q(""),F(!0)},handleGenerateTinyUrl:function(){var e="https://tinyurl.com/api-create.php?url=".concat(encodeURIComponent(B));""!==P&&(e=e.concat("&alias=".concat(P))),fetch(e,{headers:{Origin:"https://syoon123.github.io"}}).then((function(e){return e.text()})).then((function(e){"Error"===e?(W(!1),q("")):(W(!0),q(e))})).then((function(){window.scrollTo(0,document.body.scrollHeight)}))},handleAlias:function(e){z(e.trim())}}),function(e){return c.a.createElement(c.a.Fragment,null,!e.isHidden&&c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,null,c.a.createElement(p.a,{className:"mt-3 mb-0"},c.a.createElement("p",{className:"center mb-0"},c.a.createElement("a",{className:"mb-0 tiny-url",href:e.tinyUrl},e.tinyUrl))))),c.a.createElement(u.a,{className:"justify-content-md-center mt-0 mb-3"},c.a.createElement(p.a,{md:4},d({label:"Copy to Clipboard",variant:"link",className:"",size:"sm",isHidden:e.isHidden,action:e.handleCopyToClipboard}))),c.a.createElement(u.a,{className:"justify-content-md-center mt-4"},c.a.createElement(p.a,{md:4},d({label:"New Template",variant:"danger",className:"",isHidden:e.isHidden,action:e.handleRefresh}))))}({tinyUrl:$,isHidden:A||!$,handleRefresh:function(){window.location.reload(),window.scrollTo(0,0)},handleCopyToClipboard:function(){navigator.clipboard.writeText($)}})))))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.0777f7a0.chunk.js.map