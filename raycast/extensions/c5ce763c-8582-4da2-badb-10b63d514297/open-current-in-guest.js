"use strict";var b=Object.create;var n=Object.defineProperty;var k=Object.getOwnPropertyDescriptor;var x=Object.getOwnPropertyNames;var T=Object.getPrototypeOf,P=Object.prototype.hasOwnProperty;var R=(e,t)=>{for(var o in t)n(e,o,{get:t[o],enumerable:!0})},d=(e,t,o,c)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of x(t))!P.call(e,r)&&r!==o&&n(e,r,{get:()=>t[r],enumerable:!(c=k(t,r))||c.enumerable});return e};var p=(e,t,o)=>(o=e!=null?b(T(e)):{},d(t||!e||!e.__esModule?n(o,"default",{value:e,enumerable:!0}):o,e)),C=e=>d(n({},"__esModule",{value:!0}),e);var N={};R(N,{default:()=>E});module.exports=C(N);var i=require("@raycast/api");var s=require("run-applescript"),a=require("@raycast/api");var O=require("@raycast/utils");var w=p(require("fs"));var l=p(require("path"));var v=require("@raycast/api"),S=()=>{if(!process.env.HOME)throw new Error("$HOME environment variable is not set.");return l.default.join(process.env.HOME,"Library")};var u=()=>l.default.join(S(),...m);var I=()=>{try{let e=u(),t=w.default.readFileSync(e,"utf-8"),o=JSON.parse(t).profile.info_cache;return o?Object.keys(o)[0]:"Default"}catch{return"Default"}};var m=["Application Support","Google","Chrome","Local State"],A=I();var f="Google Chrome not installed";var h=require("@raycast/utils");var g=async()=>{if(await a.LocalStorage.getItem("is-installed"))return;if(await(0,s.runAppleScript)(`
set isInstalled to false
try
    do shell script "osascript -e 'exists application \\"Google Chrome\\"'"
    set isInstalled to true
end try

return isInstalled`)==="false")throw new Error(f);a.LocalStorage.setItem("is-installed",!0)};async function _(e){await g(),await(0,s.runAppleScript)(`
    set link to quoted form of "${e}"
    do shell script "open -na 'Google Chrome' --args --guest " & link
  `)}async function y(){return await g(),await(0,s.runAppleScript)(`
    tell application "Google Chrome"
      try
        return URL of active tab of front window
      on error
        return ""
      end try
    end tell
  `)}async function E(){try{await(0,i.closeMainWindow)();let e=await y();if(!e||e===""){await(0,i.showHUD)("No active tab URL found to open in guest window");return}await _(e)}catch{await(0,i.showHUD)("\u274C Failed opening current tab in Guest window")}}
