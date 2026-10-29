"use strict";var y=Object.create;var i=Object.defineProperty;var E=Object.getOwnPropertyDescriptor;var k=Object.getOwnPropertyNames;var x=Object.getPrototypeOf,b=Object.prototype.hasOwnProperty;var T=(e,t)=>{for(var o in t)i(e,o,{get:t[o],enumerable:!0})},d=(e,t,o,c)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of k(t))!b.call(e,r)&&r!==o&&i(e,r,{get:()=>t[r],enumerable:!(c=E(t,r))||c.enumerable});return e};var p=(e,t,o)=>(o=e!=null?y(x(e)):{},d(t||!e||!e.__esModule?i(o,"default",{value:e,enumerable:!0}):o,e)),C=e=>d(i({},"__esModule",{value:!0}),e);var I={};T(I,{default:()=>_});module.exports=C(I);var a=require("@raycast/api");var l=require("run-applescript"),n=require("@raycast/api");var P=require("@raycast/utils");var w=p(require("fs"));var s=p(require("path"));var O=require("@raycast/api"),R=()=>{if(!process.env.HOME)throw new Error("$HOME environment variable is not set.");return s.default.join(process.env.HOME,"Library")};var u=()=>s.default.join(R(),...m);var S=()=>{try{let e=u(),t=w.default.readFileSync(e,"utf-8"),o=JSON.parse(t).profile.info_cache;return o?Object.keys(o)[0]:"Default"}catch{return"Default"}};var m=["Application Support","Google","Chrome","Local State"],v=S();var f="Google Chrome not installed";var h=require("@raycast/utils");var A=async()=>{if(await n.LocalStorage.getItem("is-installed"))return;if(await(0,l.runAppleScript)(`
set isInstalled to false
try
    do shell script "osascript -e 'exists application \\"Google Chrome\\"'"
    set isInstalled to true
end try

return isInstalled`)==="false")throw new Error(f);n.LocalStorage.setItem("is-installed",!0)};async function g(){await A(),await(0,l.runAppleScript)(`
    do shell script "open -na 'Google Chrome' --args --guest"
  `)}async function _(){try{await(0,a.closeMainWindow)(),await g()}catch{await(0,a.showHUD)("\u274C Failed opening a new Google Chrome guest window")}}
