!function(e){function t(t){for(var n,s,o=t[0],l=t[1],c=t[2],m=0,p=[];m<o.length;m++)s=o[m],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(u&&u(t);p.length;)p.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={0:0},i=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;i.push([5,1]),r()}([function(e,t){e.exports=React},function(e,t){e.exports=django},function(e,t){e.exports=jQuery},,function(e,t){e.exports=ReactDOM},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),i=r(4),s=r.n(i),o=r(2),l=r.n(o);function c(e){l.a.ajaxSetup({beforeSend:function(t,r){var n;n=r.type,/^(GET|HEAD|OPTIONS|TRACE)$/.test(n)||this.crossDomain||t.setRequestHeader("X-CSRFToken",function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var r=document.cookie.split(";"),n=0;n<r.length;n++){var a=jQuery.trim(r[n]);if(a.substring(0,e.length+1)===e+"="){t=decodeURIComponent(a.substring(e.length+1));break}}return t}(e))}})}var u=r(1),m=r.n(u),p=r(3);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){_(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=w(e);if(t){var a=w(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return g(this,r)}}function g(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?k(e):t}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(s,e);var t,r,n,i=b(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=i.call(this,e)).state={name:"",email:"",url:"",comment:"",followup:e.default_followup,reply_to:t.props.reply_to||0,visited:{name:!1,email:!1,comment:!1},errors:{name:!1,email:!1,comment:!1},previewing:!1,alert:{message:"",cssc:""}},t.handle_input_change=t.handle_input_change.bind(k(t)),t.handle_ajax_error=t.handle_ajax_error.bind(k(t)),t.handle_blur=t.handle_blur.bind(k(t)),t.handle_submit=t.handle_submit.bind(k(t)),t.handle_preview=t.handle_preview.bind(k(t)),t.reset_form=t.reset_form.bind(k(t)),t.fhelp=a.a.createElement("span",{className:"form-text small invalid-feedback"},m.a.gettext("This field is required.")),t}return t=s,(r=[{key:"handle_input_change",value:function(e){var t=e.target,r="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(_({},n,r))}},{key:"handle_blur",value:function(e){return function(t){var r=this.state.visited;r[e]=!0,this.setState({visited:r})}.bind(this)}},{key:"validate",value:function(){var e=this.state.errors;return e.name=!1,e.email=!1,this.state.comment.length?e.comment=!1:e.comment=!0,this.props.is_authenticated&&!this.props.request_name||(/^\s*$/.test(this.state.name)?e.name=!0:e.name=!1),this.props.is_authenticated&&!this.props.request_email_address||(/\S+@\S+\.\S+/.test(this.state.email)?e.email=!1:e.email=!0),this.setState({errors:e}),!(this.state.errors.comment||this.state.errors.name||this.state.errors.email)}},{key:"render_field_comment",value:function(){var e="form-group row",t="form-control",r="";this.state.reply_to>0&&(t+=" form-control-sm"),this.state.errors.comment&&(e+=this.state.errors.comment?" has-danger":"",t+=" is-invalid",r=this.fhelp);var n=m.a.gettext("Your comment");return a.a.createElement("div",{className:e},a.a.createElement("div",{className:"offset-md-1 col-md-10"},a.a.createElement("textarea",{required:!0,name:"comment",id:"id_comment",placeholder:n,maxLength:"3000",className:t,value:this.state.comment,onChange:this.handle_input_change,onBlur:this.handle_blur("comment")}),r))}},{key:"render_field_name",value:function(){if(this.props.is_authenticated&&!this.props.request_name)return"";var e="form-group row",t="col-form-label col-md-3 text-right",r="form-control",n="",i=m.a.gettext("name");return this.state.reply_to>0&&(t+=" form-control-sm",r+=" form-control-sm"),this.state.errors.name&&(e+=" has-danger",r+=" is-invalid",n=this.fhelp),a.a.createElement("div",{className:e},a.a.createElement("label",{htmlFor:"id_name",className:t},m.a.gettext("Name")),a.a.createElement("div",{className:"col-md-7"},a.a.createElement("input",{type:"text",name:"name",required:!0,id:"id_name",value:this.state.name,placeholder:i,onChange:this.handle_input_change,onBlur:this.handle_blur("name"),className:r}),n))}},{key:"render_field_email",value:function(){if(this.props.is_authenticated&&!this.props.request_email_address)return"";var e="form-group row",t="col-form-label col-md-3 text-right",r="form-control",n="form-text small",i={},s=m.a.gettext("mail address"),o=m.a.gettext("Required for comment verification.");return this.state.reply_to>0&&(t+=" form-control-sm",r+=" form-control-sm",i={fontSize:"0.710rem"}),this.state.errors.email&&(e+=" has-danger",r+=" is-invalid",n+=" invalid-feedback"),a.a.createElement("div",{className:e},a.a.createElement("label",{htmlFor:"id_email",className:t},m.a.gettext("Mail")),a.a.createElement("div",{className:"col-md-7"},a.a.createElement("input",{type:"text",name:"email",required:!0,id:"id_email",value:this.state.email,placeholder:s,onChange:this.handle_input_change,onBlur:this.handle_blur("email"),className:r}),a.a.createElement("span",{className:n,style:i},o)))}},{key:"render_field_url",value:function(){if(this.props.is_authenticated)return"";var e="col-form-label col-md-3 text-right",t="form-control";if(this.state.reply_to>0&&(e+=" form-control-sm",t+=" form-control-sm"),this.state.errors.url)var r=m.a.gettext("url your name links to (optional)");return a.a.createElement("div",{className:"form-group row"},a.a.createElement("label",{htmlFor:"id_url",className:e},m.a.gettext("Link")),a.a.createElement("div",{className:"col-md-7"},a.a.createElement("input",{type:"text",name:"url",id:"id_url",value:this.state.url,placeholder:r,onChange:this.handle_input_change,className:t})))}},{key:"render_field_followup",value:function(){var e=m.a.gettext("Notify me about follow-up comments"),t="custom-control-label",r="id_followup";return this.state.reply_to>0&&(t+=" small",r+="_".concat(this.state.reply_to)),a.a.createElement("div",{className:"form-group row"},a.a.createElement("div",{className:"offset-md-3 col-md-7"},a.a.createElement("div",{className:"custom-control custom-checkbox"},a.a.createElement("input",{className:"custom-control-input",type:"checkbox",checked:this.state.followup,onChange:this.handle_input_change,name:"followup",id:r}),a.a.createElement("label",{className:t,htmlFor:r}," ",e))))}},{key:"reset_form",value:function(){this.setState({name:"",email:"",url:"",followup:!1,comment:"",visited:{name:!1,email:!1,comment:!1},errors:{name:!1,email:!1,comment:!1}})}},{key:"handle_submit_response",value:function(e){var t="",r={202:m.a.gettext("Your comment will be reviewed. Thank your for your patience."),204:m.a.gettext("Thank you, a comment confirmation request has been sent by mail."),403:m.a.gettext("Sorry, your comment has been rejected.")};t=403==e?"alert alert-danger":"alert alert-info",this.setState({alert:{message:r[e],cssc:t},previewing:!1}),this.reset_form(),this.props.on_comment_created()}},{key:"handle_ajax_error",value:function(e,t,r){if(400==e.status){var n=this.state.errors;e.responseJSON.forEach((function(e,t,r){n[e]=!0})),this.setState({errors:n})}else 403==e.status?this.handle_submit_response(e.status):console.error(e,t,r.toString())}},{key:"handle_submit",value:function(e){if(e.preventDefault(),this.validate()){var t=h(h({},this.props.form),{},{honeypot:"",comment:this.state.comment,name:this.state.name,email:this.state.email,url:this.state.url,followup:this.state.followup,reply_to:this.state.reply_to});l.a.ajax({method:"POST",url:this.props.send_url,data:t,dataType:"json",cache:!1,success:function(e,t,r){[201,202,204].indexOf(r.status)>-1&&this.handle_submit_response(r.status)}.bind(this),error:this.handle_ajax_error})}}},{key:"handle_preview",value:function(e){e.preventDefault(),this.validate()&&l.a.ajax({method:"POST",url:this.props.preview_url,data:{email:this.state.email},dataType:"json",success:function(e,t,r){200===r.status&&this.setState({avatar_url:e.url,previewing:!0})}.bind(this),error:this.handle_ajax_error})}},{key:"rawMarkup",value:function(){var e=(new p.a).render(this.state.comment);return{__html:e}}},{key:"render_preview",value:function(){if(!this.state.previewing)return"";var e="",t=a.a.createElement("img",{className:"mr-3",src:this.state.avatar_url,height:"48",width:"48"});e=this.state.url?a.a.createElement("a",{href:this.state.url,target:"_new"},this.state.name):this.props.is_authenticated?this.props.current_user.split(":")[1]:this.state.name;var r="",n=m.a.gettext("Your comment in preview"),i=a.a.createElement("h5",{className:"text-center"},n);this.state.reply_to>0&&(i="",r=a.a.createElement("div",{className:"badge badge-info"},"preview"));var s=m.a.gettext("Now");return a.a.createElement("div",null,a.a.createElement("hr",null),i,a.a.createElement("div",{className:"media"},t,a.a.createElement("div",{className:"media-body"},a.a.createElement("div",{className:"comment pb-3"},a.a.createElement("h6",{className:"mb-1 small"},s," - ",e,"  ",r),a.a.createElement("div",{className:"preview",dangerouslySetInnerHTML:this.rawMarkup()})))))}},{key:"render_form",value:function(){var e=this.render_field_comment(),t=this.render_field_name(),r=this.render_field_email(),n=this.render_field_url(),i=this.render_field_followup(),s="form-group row",o="btn btn-primary",l="btn btn-secondary";0!=this.state.reply_to&&(s+=" mb-0",o+=" btn-sm",l+=" btn-sm");var c=m.a.gettext("preview"),u=m.a.gettext("send");return a.a.createElement("form",{method:"POST",onSubmit:this.handle_submit},a.a.createElement("input",{type:"hidden",name:"content_type",defaultValue:this.props.form.content_type}),a.a.createElement("input",{type:"hidden",name:"object_pk",defaultValue:this.props.form.object_pk}),a.a.createElement("input",{type:"hidden",name:"timestamp",defaultValue:this.props.form.timestamp}),a.a.createElement("input",{type:"hidden",name:"security_hash",defaultValue:this.props.form.security_hash}),a.a.createElement("input",{type:"hidden",name:"reply_to",defaultValue:this.state.reply_to}),a.a.createElement("fieldset",null,a.a.createElement("div",{style:{display:"none"}},a.a.createElement("input",{type:"text",name:"honeypot",defaultValue:""})),e," ",t," ",r," ",n," ",i),a.a.createElement("div",{className:s},a.a.createElement("div",{className:"offset-md-3 col-md-7"},a.a.createElement("button",{type:"submit",name:"post",className:o},u)," ",a.a.createElement("button",{name:"preview",className:l,onClick:this.handle_preview},c))))}},{key:"render",value:function(){var e=this.render_preview(),t="",r="card card-block mt-2",n=m.a.gettext("Post your comment");0==this.state.reply_to&&(t=a.a.createElement("h4",{className:"card-title text-center pb-3"},n),r="card card-block mt-4 mb-5");var i="";this.state.alert.message&&(i=a.a.createElement("div",{className:this.state.alert.cssc},this.state.alert.message));var s=this.render_form();return a.a.createElement("div",null,e,a.a.createElement("div",{className:r},a.a.createElement("div",{className:"card-body"},t,i,s)))}}])&&v(t.prototype,r),n&&v(t,n),s}(a.a.Component);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=R(e);if(t){var a=R(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return P(this,r)}}function P(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?T(e):t}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return D(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return D(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,o=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){o=!0,i=e},f:function(){try{s||null==r.return||r.return()}finally{if(o)throw i}}}}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(s,e);var t,r,n,i=j(s);function s(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),t=i.call(this,e);var r=function(e,t){var r,n={like:{active:!1,users:[]},dislike:{active:!1,users:[]},removal:{active:!1,count:0}},a=C(e);try{for(a.s();!(r=a.n()).done;){var i=r.value,s=[i.id,i.user].join(":"),o=s===t;"like"===i.flag?(n.like.users.push(s),o&&(n.like.active=o)):"dislike"===i.flag?(n.dislike.users.push(s),o&&(n.dislike.active=o)):"removal"===i.flag&&(n.removal.count+=1,o&&(n.removal.active=o))}}catch(e){a.e(e)}finally{a.f()}return n}(e.data.flags,e.settings.current_user);return t.state={current_user:e.settings.current_user,removal:r.removal.active,removal_count:r.removal.count,like:r.like.active,like_users:r.like.users||[],dislike:r.dislike.active,dislike_users:r.dislike.users||[],reply_form:{component:null,is_visible:!1}},t.action_like=t.action_like.bind(T(t)),t.action_dislike=t.action_dislike.bind(T(t)),t.handle_reply_click=t.handle_reply_click.bind(T(t)),t}return t=s,(r=[{key:"_get_username_chunk",value:function(){var e=this.props.data.user_name,t="";if(this.props.data.user_url&&!this.props.data.is_removed&&(e=a.a.createElement("a",{href:this.props.data.user_url},e)),this.props.data.user_moderator){var r=m.a.gettext("moderator");t=a.a.createElement("span",null," ",a.a.createElement("span",{className:"badge badge-secondary"},r))}return a.a.createElement("span",null,e,t)}},{key:"_get_right_div_chunk",value:function(){var e="",t="",r="",n="";if(this.props.data.is_removed)return"";if(this.props.settings.is_authenticated&&this.props.settings.can_moderate&&this.state.removal_count>0){var i=m.a.ngettext("%s user has flagged this comment as inappropriate.","%s users have flagged this comment as inappropriate.",this.state.removal_count),s=m.a.interpolate(i,[this.state.removal_count]);e=a.a.createElement("span",{className:"badge badge-danger",title:s},this.state.removal_count)}if(this.props.settings.allow_flagging){var o="";this.state.removal?(o=m.a.gettext("I flagged it as inappropriate"),t=a.a.createElement("span",null,e," ",a.a.createElement("i",{className:"fas fa-flag text-danger",title:o}))):(n=this.props.settings.is_authenticated?this.props.settings.flag_url.replace("0",this.props.data.id):this.props.settings.login_url+"?next="+this.props.settings.flag_url.replace("0",this.props.data.id),o=m.a.gettext("flag comment as inappropriate"),t=a.a.createElement("a",{className:"mutedlink",href:n},a.a.createElement("i",{className:"fas fa-flag",title:o})))}if(this.props.settings.is_authenticated&&this.props.settings.can_moderate){var l=m.a.gettext("remove comment");n=this.props.settings.delete_url.replace("0",this.props.data.id),r=a.a.createElement("a",{className:"mutedlink",href:n},a.a.createElement("i",{className:"fas fa-trash-alt",title:l}))}return a.a.createElement("div",null,t," ",r)}},{key:"_get_feedback_chunk",value:function(e){if(!this.props.settings.allow_feedback)return"";var t=e+"_users",r="";if(this.props.settings.show_feedback){var n=this.state.current_user.split(":")[0],i=this.state[t].map((function(e){return e.split(":")[0]}));if(this.state[e]&&-1==i.indexOf(n))this.state[t].push(this.state.current_user);else if(!this.state[e]&&i.indexOf(n)>-1){var s=i.indexOf(n);this.state[t].splice(s,1)}if(this.state[t].length){var o=this.state[t].map((function(e){return e.split(":")[1]}));o=o.join("<br/>"),r=a.a.createElement("span",null," ",a.a.createElement("a",{className:"badge badge-primary text-white cfb-counter","data-toggle":"tooltip",title:o},this.state[t].length))}}var l=this.state[e]?"":"mutedlink",c="fas fa-"+("like"==e?"thumbs-up":"thumbs-down"),u="like"==e?this.action_like:this.action_dislike,p="";return p="like"==e?m.a.gettext("I like it"):m.a.gettext("I dislike it"),a.a.createElement("span",null,r," ",a.a.createElement("a",{href:"#",onClick:u,className:l},a.a.createElement("i",{className:c,title:p}))," ")}},{key:"render_feedback_btns",value:function(){var e=this.props.settings,t=e.allow_feedback;if(e.who_can_post,e.is_authenticated,t){var r="feedback-"+this.props.data.id;this.props.settings.show_feedback&&this.disposeTooltips(r);var n=this._get_feedback_chunk("like"),i=this._get_feedback_chunk("dislike");return a.a.createElement("span",{id:r,className:"small"},n,a.a.createElement("span",{className:"text-muted"},"|"),i)}return null}},{key:"make_form_invisible",value:function(e){this.props.on_comment_created()}},{key:"handle_reply_click",value:function(e){e.preventDefault();var t=this.props.settings,r=t.is_authenticated;if("users"===t.who_can_post&&!r)return window.location.href=this.props.settings.login_url+"?next="+this.props.settings.reply_url.replace("0",this.props.data.id);var n=this.state.reply_form.component,i=!this.state.reply_form.is_visible;null==n&&(n=a.a.createElement(E,O({},this.props.settings,{reply_to:this.props.data.id,on_comment_created:this.make_form_invisible.bind(this)}))),this.setState({reply_form:{component:n,is_visible:i}})}},{key:"_get_reply_link_chunk",value:function(){if(this.props.data.level>=this.props.settings.max_thread_level)return null;var e=this.props.settings.reply_url.replace("0",this.props.data.id),t=m.a.gettext("Reply");return this.props.settings.allow_feedback?a.a.createElement("span",null,"  ",a.a.createElement("span",{className:"text-muted"},"•"),"  ",a.a.createElement("a",{className:"small mutedlink",href:e,onClick:this.handle_reply_click},t)):a.a.createElement("a",{className:"small mutedlink",href:e,onClick:this.handle_reply_click},t)}},{key:"rawMarkup",value:function(){var e=(new p.a).render(this.props.data.comment);return{__html:e}}},{key:"render_comment_body",value:function(){var e=this.props.settings.allow_feedback?"":"pb-3";if(this.props.data.is_removed){var t="text-muted ".concat(e);return a.a.createElement("p",{className:t},a.a.createElement("em",null,this.props.data.comment))}var r="content ".concat(e);return a.a.createElement("div",{className:r,dangerouslySetInnerHTML:this.rawMarkup()})}},{key:"render_reply_form",value:function(){return this.state.reply_form.is_visible?a.a.createElement("div",null,this.state.reply_form.component):""}},{key:"_post_feedback",value:function(e){l.a.ajax({method:"POST",url:this.props.settings.feedback_url,data:{comment:this.props.data.id,flag:e},dataType:"json",cache:!1,statusCode:{201:function(){"like"==e?this.setState({like:!0,dislike:!1}):"dislike"==e&&this.setState({dislike:!0,like:!1})}.bind(this),204:function(){"like"==e?this.setState({like:!1}):"dislike"==e&&this.setState({dislike:!1})}.bind(this)},error:function(e,t,r){400==e.status&&e.responseJSON.non_field_errors.length?alert(e.responseJSON.non_field_errors[0]):console.error(this.props.settings.feedback_url,t,r.toString())}.bind(this)})}},{key:"action_like",value:function(e){return e.preventDefault(),this.props.settings.is_authenticated?this._post_feedback("like"):window.location.href=this.props.settings.login_url+"?next="+this.props.settings.like_url.replace("0",this.props.data.id)}},{key:"action_dislike",value:function(e){return e.preventDefault(),this.props.settings.is_authenticated?this._post_feedback("dislike"):window.location.href=this.props.settings.login_url+"?next="+this.props.settings.dislike_url.replace("0",this.props.data.id)}},{key:"is_hover",value:function(e){return e.parentElement.querySelector(":hover")===e}},{key:"disposeTooltips",value:function(e){var t=document.getElementById(e),r=t&&this.is_hover(t);t&&!r&&l()("#"+e+' A[data-toggle="tooltip"]').tooltip("dispose")}},{key:"componentDidMount",value:function(){var e="feedback-"+this.props.data.id;l()("#"+e).tooltip({html:!0,selector:".cfb-counter"})}},{key:"componentDidUpdate",value:function(){var e="feedback-"+this.props.data.id;l()("#"+e).tooltip({html:!0,selector:".cfb-counter"})}},{key:"componentWillUnmount",value:function(){var e="feedback-"+this.props.data.id,t=document.getElementById(e),r=t&&this.is_hover(t);t&&!r&&l()("#"+e+' A[data-toggle="tooltip"]').tooltip("dispose")}},{key:"render",value:function(){var e="c"+this.props.data.id,t=this._get_username_chunk(),r=this._get_right_div_chunk(),n=this.render_comment_body(),i="",o="",l="";this.props.data.is_removed||(i=this.render_feedback_btns(),o=this._get_reply_link_chunk(),l=this.render_reply_form());var c="";this.props.newcids.indexOf(this.props.data.id)>-1&&(c=a.a.createElement("span",null,a.a.createElement("span",{className:"badge badge-success"},"new")," - "));var u="",m=this.props.settings;return null!=this.props.data.children&&(u=this.props.data.children.map(function(e){return a.a.createElement(s,{key:e.id,data:e,settings:m,newcids:this.props.newcids,on_comment_created:this.props.on_comment_created})}.bind(this))),a.a.createElement("div",{className:"media",id:e},a.a.createElement("img",{src:this.props.data.user_avatar,className:"mr-3",height:"48",width:"48"}),a.a.createElement("div",{className:"media-body"},a.a.createElement("div",{className:"comment pb-3"},a.a.createElement("a",{name:e}),a.a.createElement("h6",{className:"mb-1 small d-flex"},a.a.createElement("div",{className:"mr-auto"},c,this.props.data.submit_date," - ",t,"  ",a.a.createElement("a",{className:"permalink",href:this.props.data.permalink},"¶")),r),n,i,o,l),u))}}])&&S(t.prototype,r),n&&S(t,n),s}(a.a.Component);function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return q(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return q(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,o=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){o=!0,i=e},f:function(){try{s||null==r.return||r.return()}finally{if(o)throw i}}}}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function H(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function V(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=U(e);if(t){var a=U(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return F(this,r)}}function F(e,t){return!t||"object"!==A(t)&&"function"!=typeof t?J(e):t}function J(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var $=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(s,e);var t,r,n,i=V(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),t=i.call(this,e),c("csrftoken"),t.state={previewing:!1,preview:{name:"",email:"",url:"",comment:""},tree:[],cids:[],newcids:[],counter:t.props.comment_count},t.handle_comment_created=t.handle_comment_created.bind(J(t)),t.handle_preview=t.handle_preview.bind(J(t)),t.handle_update=t.handle_update.bind(J(t)),t}return t=s,(r=[{key:"handle_comment_created",value:function(){this.load_comments()}},{key:"handle_preview",value:function(e,t,r,n){this.setState({preview:{name:e,email:t,url:r,comment:n},previewing:!0})}},{key:"handle_update",value:function(e){e.preventDefault(),this.load_comments()}},{key:"reset_preview",value:function(){this.setState({preview:{name:"",email:"",url:"",comment:""},previewing:!1})}},{key:"render_comment_counter",value:function(){if(this.state.counter>0){var e=m.a.ngettext("%s comment.","%s comments.",this.state.cids.length),t=m.a.interpolate(e,[this.state.cids.length]);return a.a.createElement("h5",{className:"text-center"},t)}return""}},{key:"render_comment_form",value:function(){var e=this.props,t=e.allow_comments,r=e.who_can_post,n=e.is_authenticated,i=e.html_id_suffix;if(t){if("all"===r||"users"===r&&n)return a.a.createElement(E,B({},this.props,{on_comment_created:this.handle_comment_created}));var s="only-users-can-post-".concat(i),o=document.getElementById(s);return null!=o?a.a.createElement("div",{dangerouslySetInnerHTML:{__html:o.innerHTML}}):a.a.createElement("h5",{className:"mt-4 mb-5 text-center text-info"},m.a.gettext("Only registered users can post comments."))}return a.a.createElement("h4",{className:"mt-4 mb-5 text-center text-secondary"},m.a.gettext("Comments are disabled for this article."))}},{key:"render_update_alert",value:function(){var e=this.state.counter-this.state.cids.length;if(e>0){var t=m.a.ngettext("There is %s new comment.","There are %s new comments.",e),r=m.a.interpolate(t,[e]);return a.a.createElement("div",{className:"alert alert-info d-flex align-items-center"},a.a.createElement("p",{className:"mr-auto"},r),a.a.createElement("button",{type:"button",className:"btn btn-secondary btn-xs",onClick:this.handle_update},"update"))}return""}},{key:"create_tree",value:function(e){var t=new Array,r=new Array,n={},a={},i=[],s=[],o=[];function l(e){return a[e].map((function(e){return null==n[e].children&&(n[e].children=l(e)),n[e]}))}var c,u=M(e);try{for(u.s();!(c=u.n()).done;){var m=c.value;i.push(m.id),n[m.id]=m,0==m.level&&r.push(m.id),a[m.id]=[],m.parent_id!==m.id&&a[m.parent_id].push(m.id)}}catch(e){u.e(e)}finally{u.f()}for(var p=0,d=r;p<d.length;p++){var f=d[p];n[f].children=l(f),t.push(n[f])}if(i.length)if(this.state.cids.length){var h,_=M(i);try{for(_.s();!(h=_.n()).done;){var v=h.value;-1==this.state.cids.indexOf(v)&&o.push(v),s.push(v)}}catch(e){_.e(e)}finally{_.f()}}else s=i,o=[];this.setState({tree:t,cids:s,newcids:o,counter:s.length})}},{key:"load_comments",value:function(){l.a.ajax({url:this.props.list_url,dataType:"json",cache:!1,success:function(e){this.create_tree(e)}.bind(this),error:function(e,t,r){console.error(this.props.list_url,t,r.toString())}.bind(this)})}},{key:"load_count",value:function(){l.a.ajax({url:this.props.count_url,dataType:"json",cache:!1,success:function(e){this.setState({counter:e.count})}.bind(this),error:function(e,t,r){console.error(this.props.count_url,t,r.toString())}.bind(this)})}},{key:"componentDidMount",value:function(){this.load_comments(),this.props.polling_interval&&setInterval(this.load_count.bind(this),this.props.polling_interval)}},{key:"render",value:function(){var e=this.props,t=this.render_comment_counter(),r=this.render_update_alert(),n=this.render_comment_form(),i=this.state.tree.map(function(t){return a.a.createElement(I,{key:t.id,data:t,settings:e,newcids:this.state.newcids,on_comment_created:this.handle_comment_created})}.bind(this));return a.a.createElement("div",null,t,n,r,a.a.createElement("div",{className:"comment-tree"},a.a.createElement("div",{className:"media-list"},i)))}}])&&H(t.prototype,r),n&&H(t,n),s}(a.a.Component);s.a.render(a.a.createElement($,Object.assign(window.comments_props,window.comments_props_override)),document.getElementById("comments"))}]);
//# sourceMappingURL=plugin-2.9.5.js.969aab6a7bb3.map