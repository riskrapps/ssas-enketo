!function(t,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var e=n();for(var r in e)("object"==typeof exports?exports:t)[r]=e[r]}}(window,function(){return(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{15:function(t,n,e){var r=e(7);t.exports=function(){var t=[],n=this,e=null;this.progress={total:0,done:0},this.onProgress=function(t){e=t},this.add=function(e){t.push(e),n.progress.total+=1},this.isEmpty=function(){return!t.length},this.run=function(){return t.reduce(function(t,r){return t.then(function(){return r().then(function(){n.progress.done+=1,null!==e&&e(n.progress)})})},r.resolve())}}},164:function(t,n,e){var r=e(0),o=e(35),a=o.module("app",[]),i=e(25),u=e(19),s=e(2),c=e(3);e(20)("body");e(17),a.filter("fileSize",function(){return function(t){if(0==t)return"0 Byte";var n=parseInt(Math.floor(Math.log(t)/Math.log(1024)));return Math.round(t/Math.pow(1024,n),2)+" "+["Bytes","KB","MB","GB","TB"][n]}}),a.filter("date",function(){return function(t){return new Date(t).toLocaleString()}}),a.directive("progress",function(){return{scope:{value:"="},restrict:"E",replace:!0,template:'<div class="progress"> <div class="progress-bar progress-bar-warning progress-bar-striped" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="100" style="width: {{value}}%"> <span class="sr-only">{{value}}% Complete (success)</span> </div> </div>'}}),a.controller("SubmissionsCtrl",["$scope","$timeout",function(t,n){function e(n){return c.all().then(function(e){t.packets=e.filter(function(t){return n?!t.draft:!t.draft&&!t.submitted}).map(function(t){var n=2*t.xml.length;return t.size=Object.values(t._attachments).reduce(function(t,n){return t+n.length},n),t}),t.$apply()})}e(!1),t.revealAll=function(){e(!0).then(function(){t.packets.length||alert("No submitted packets were found..."),r(".reveal-all").hide()})},t.uploadAll=function(){o.forEach(t.packets,function(n){t.upload(n)})},t.remove=function(e){n(function(){var n=t.packets.indexOf(e);n>=0&&t.packets.splice(n,1)})},t.upload=function(e){n(function(){if(!e.uploading){e.uploading=!0,e.progress=0;i(s.getPath("submit"),e,function(t){n(function(){e.progress=100*t})}).then(function(t){return c.get(e._id)}).then(function(t){return t.submitted=!0,c.update(t)}).then(function(){u.success(i18n._("submissions.success",{packet:e.name})),t.remove(e)}).catch(function(n){e.uploading=!1,e.uploaded=!1,t.$apply(),u.error(i18n._("submissions.error",{packet:next.packet.name}))})}})}}])},17:function(t,n,e){var r=e(0),o=e(11),a=e(18),i=e(2);t.exports=function(){var t;(t=a("enketo_token")?a("enketo_token"):i.has("token")?i.get("token"):null)&&r.ajaxSetup({beforeSend:function(n){n.setRequestHeader("Authorization","Bearer "+t)}}),r(document).ajaxError(function(t,n){401===n.status&&o.error("This survey is not accessible to guest users. Please login before continuning.","Authentication Needed",{timeOut:0,extendedTimeOut:0,tapToDismiss:!1})})}()},18:function(t,n){t.exports=function(t){for(var n=t+"=",e=decodeURIComponent(document.cookie).split(";"),r=0;r<e.length;r++){for(var o=e[r];" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(n))return o.substring(n.length,o.length)}return""}},19:function(t,n,e){var r=e(11);r.options={positionClass:"toast-top-left"},t.exports=r},2:function(t,n,e){var r=new(e(27))(window.location.search);r.getPath=function(t){var n="";return r.has("base")&&(n=r.get("base")+"/"),n+r.get(t)},r.getUrl=function(t){var n="";return r.has("base")&&(n=r.get("base")+"/"),n+t},t.exports=r},20:function(t,n,e){var r=e(0),o=e(2);t.exports=function(t){r(document).ready(function(){if(o.has("bg")){var n="content: ' ';display: block;position: absolute;top: 0;left: 0;width: 100%;height: 100%;opacity: 0.2;z-index: -1;background-image: url('"+o.get("bg")+"');background-size: cover;background-position: center;background-repeat: no-repeat;";r("<style>"+t+":after { "+n+"} </style>").appendTo("head")}})}},25:function(t,n,e){var r=e(0),o=e(7),a=e(15),i=e(3),u={form:function(t){var n=new FormData;return n.append("Extra",JSON.stringify(t.extra)),n.append("Date",(new Date).toUTCString()),n.append("xml_submission_file",new Blob([t.xml])),n},headers:function(t){return{"X-OpenRosa-Version":"1.0","X-OpenRosa-Deprecated-Id":t.deprecated_id,"X-OpenRosa-Instance-Id":t.instance_id}},chunks:function(t){var n=[[]],e=0,r=0;for(var o in t){var a=t[o];r>=52428800&&(r=0,n[++e]=[]),n[e].push(o),r+=a.length}return n},loadChunk:function(t,n,e){return t.hasOwnProperty("browser_mode")?(n.forEach(function(n){e.append(n,t._attachments[n].data,n)}),o.resolve(!0)):o.all(n.map(function(n){return i.getAttachment(t._id,n).then(function(t){e.append(n,t,n)})}))},upload:function(t,n){var e=this,r=this.chunks(t._attachments),o=e.headers(t),i=new a;return r.forEach(function(r){i.add(function(){var a=e.form(t);return e.loadChunk(t,r,a).then(function(){return e.request(a,o,n)})})}),i.run()},request:function(t,n,e){var a=this;return new o(function(o,i){r.ajax(a.openrosaUrl,{type:"POST",data:t,cache:!1,contentType:!1,processData:!1,headers:n,xhr:function(){var t=new window.XMLHttpRequest;return t.upload.addEventListener("progress",function(t){if(t.lengthComputable){var n=t.loaded/t.total;e&&e(n)}},!1),t}}).done(function(t,n,e){201!=e.status&&202!=e.status?i("Submission was not successful!"):o(t)}).fail(function(t,n,e){i(e)})})},setOpenrosaServer:function(t){this.openrosaUrl=t}};t.exports=function(t,n,e){return u.setOpenrosaServer(t),u.upload(n,e)}},3:function(t,n,e){"use strict";e.r(n);var r=e(9),o=e.n(r);window.PouchDB=o.a;var a={};function i(t){var n=function(t){return new o.a(t,{adapter:"idb",revs_limit:1,auto_compaction:!0})}(t);this.all=function(){return n.allDocs({include_docs:!0}).then(function(t){return t.rows.map(function(t){return t.doc})})},this.create=function(t){return n.post(t).then(function(t){return n.get(t.id)})},this.update=function(t){return n.put(t).then(function(t){return n.get(t.id)})},this.get=function(t){return n.get(t)},this.remove=function(t){return n.remove(t)},this.attach=function(t,e,r){return n.putAttachment(t,e,r)},this.getAttachment=function(t,e){return n.getAttachment(t,e)}}var u=e(2),s="sessions";u.has("db")&&(s=u.get("db"));n.default=function(t){return a.hasOwnProperty(t)||(a[t]=new i(t)),a[t]}(s)}},[[164,1,0]]])});