"use strict";var y=Object.create;var i=Object.defineProperty;var E=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var k=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var T=(e,t)=>{for(var o in t)i(e,o,{get:t[o],enumerable:!0})},c=(e,t,o,l)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of b(t))!x.call(e,r)&&r!==o&&i(e,r,{get:()=>t[r],enumerable:!(l=E(t,r))||l.enumerable});return e};var d=(e,t,o)=>(o=e!=null?y(k(e)):{},c(t||!e||!e.__esModule?i(o,"default",{value:e,enumerable:!0}):o,e)),R=e=>c(i({},"__esModule",{value:!0}),e);var I={};T(I,{default:()=>A});module.exports=R(I);var a=require("run-applescript"),n=require("@raycast/api");var P=require("@raycast/utils");var m=d(require("fs"));var s=d(require("path"));var O=require("@raycast/api"),C=()=>{if(!process.env.HOME)throw new Error("$HOME environment variable is not set.");return s.default.join(process.env.HOME,"Library")};var p=()=>s.default.join(C(),...u);var S=()=>{try{let e=p(),t=m.default.readFileSync(e,"utf-8"),o=JSON.parse(t).profile.info_cache;return o?Object.keys(o)[0]:"Default"}catch{return"Default"}};var u=["Application Support","Google","Chrome","Local State"],v=S();var w="Google Chrome not installed";var f=require("@raycast/utils");var h=async()=>{if(await n.LocalStorage.getItem("is-installed"))return;if(await(0,a.runAppleScript)(`
set isInstalled to false
try
    do shell script "osascript -e 'exists application \\"Google Chrome\\"'"
    set isInstalled to true
end try

return isInstalled`)==="false")throw new Error(w);n.LocalStorage.setItem("is-installed",!0)};async function g(e){await h(),await(0,a.runAppleScript)(`
    set link to quoted form of "${e}"
    do shell script "open -na 'Google Chrome' --args --guest " & link
  `)}async function _(){return await h(),await(0,a.runAppleScript)(`
    tell application "Google Chrome"
      try
        return URL of active tab of front window
      on error
        return ""
      end try
    end tell
  `)}async function A(){let e=await _();return!e||e===""?"No active tab URL found":(await g(e),`Opening current tab URL in Guest window: ${e}`)}
