"use strict";var g=Object.create;var i=Object.defineProperty;var _=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var E=Object.getPrototypeOf,b=Object.prototype.hasOwnProperty;var k=(e,t)=>{for(var o in t)i(e,o,{get:t[o],enumerable:!0})},l=(e,t,o,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of y(t))!b.call(e,r)&&r!==o&&i(e,r,{get:()=>t[r],enumerable:!(s=_(t,r))||s.enumerable});return e};var c=(e,t,o)=>(o=e!=null?g(E(e)):{},l(t||!e||!e.__esModule?i(o,"default",{value:e,enumerable:!0}):o,e)),x=e=>l(i({},"__esModule",{value:!0}),e);var S={};k(S,{default:()=>v});module.exports=x(S);var a=require("run-applescript"),w=require("@raycast/api");var T=require("@raycast/utils");var u=c(require("fs"));var n=c(require("path"));var O=require("@raycast/api"),P=()=>{if(!process.env.HOME)throw new Error("$HOME environment variable is not set.");return n.default.join(process.env.HOME,"Library")};var d=()=>n.default.join(P(),...p);var R=()=>{try{let e=d(),t=u.default.readFileSync(e,"utf-8"),o=JSON.parse(t).profile.info_cache;return o?Object.keys(o)[0]:"Default"}catch{return"Default"}};var p=["Application Support","Google","Chrome","Local State"],C=R();var m=require("@raycast/utils");async function f(){await(0,a.runAppleScript)(`
    tell application "Google Chrome"
      make new window
      activate
    end tell
    return true
  `)}async function h(e){await(0,a.runAppleScript)(`
    tell application "Google Chrome"
      activate
      open location "${e}"
    end tell
    return true
  `)}async function v(e){return e.website?(await h(e.website),`Opening new window to ${e.website}`):(await f(),"Opening new window")}
