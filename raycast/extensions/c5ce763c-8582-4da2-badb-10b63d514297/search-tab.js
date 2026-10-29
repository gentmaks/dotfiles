"use strict";var ye=Object.create;var _=Object.defineProperty;var be=Object.getOwnPropertyDescriptor;var Te=Object.getOwnPropertyNames;var Ee=Object.getPrototypeOf,_e=Object.prototype.hasOwnProperty;var ke=(e,o)=>{for(var t in o)_(e,t,{get:o[t],enumerable:!0})},M=(e,o,t,n)=>{if(o&&typeof o=="object"||typeof o=="function")for(let i of Te(o))!_e.call(e,i)&&i!==t&&_(e,i,{get:()=>o[i],enumerable:!(n=be(o,i))||n.enumerable});return e};var V=(e,o,t)=>(t=e!=null?ye(Ee(e)):{},M(o||!e||!e.__esModule?_(t,"default",{value:e,enumerable:!0}):t,e)),Ce=e=>M(_({},"__esModule",{value:!0}),e);var Me={};ke(Me,{default:()=>he});module.exports=Ce(Me);var S=require("@raycast/api"),we=require("react");var ve=require("@raycast/api");var Y=V(require("fs"));var L=V(require("path"));var Pe=require("@raycast/api"),xe=()=>{if(!process.env.HOME)throw new Error("$HOME environment variable is not set.");return L.default.join(process.env.HOME,"Library")};var K=()=>L.default.join(xe(),...Q);var Ae=()=>{try{let e=K(),o=Y.default.readFileSync(e,"utf-8"),t=JSON.parse(o).profile.info_cache;return t?Object.keys(t)[0]:"Default"}catch{return"Default"}};var Q=["Application Support","Google","Chrome","Local State"],k=Ae(),N="CHROME_PROFILE_KEY";var q=`
  # \u{1F6A8}Error: Google Chrome browser is not installed
  ## This extension depends on Google Chrome browser. You must install it to continue.

  If you have [Homebrew](https://brew.sh/) installed then press \u23CE (Enter Key) to install Google Chrome browser.

  [Click here](https://www.google.com/chrome/) if you want to download manually.

  [![Google Chrome](https://www.google.com/chrome/static/images/chrome-logo-m100.svg)]()
`;var J=`
# \u{1F6A8}Error: Something happened while trying to run your command

[![Google Chrome](https://www.google.com/chrome/static/images/chrome-logo-m100.svg)]()
`,C="An Error Occurred",P="Google Chrome not installed";var Re=require("react/jsx-runtime");var X=require("react"),c=require("@raycast/api"),W=require("child_process");var z=require("os"),Z=require("path"),x=require("react/jsx-runtime"),Se=(()=>{try{return(0,W.execSync)("brew --prefix",{encoding:"utf8"}).trim()}catch{return(0,z.cpus)()[0].model.includes("Apple")?"/opt/homebrew":"/usr/local"}})();function j(){return(0,Z.join)(Se,"bin/brew")}function Oe(e){try{return(0,W.execSync)(`${j()} install --cask ${e}`,{maxBuffer:10*1024*1024})}catch(o){let t=o;throw t&&t.code===127?(t.stderr=`Brew executable not found at ${j()}`,t):o}}function ee(){let[e,o]=(0,X.useState)(!0);return(0,x.jsx)(c.Detail,{actions:(0,x.jsx)(c.ActionPanel,{children:e&&(0,x.jsx)(c.Action,{title:"Install with Homebrew",onAction:async()=>{if(!e)return;let t=new c.Toast({style:c.Toast.Style.Animated,title:"Installing..."});await t.show();try{Oe("google-chrome"),await t.hide()}catch{await t.hide(),await(0,c.showToast)(c.Toast.Style.Failure,C,"An unknown error occurred while trying to install")}t.title="Installed! Please go back and try again.",t.style=c.Toast.Style.Success,await t.show(),o(!1)}})}),markdown:q})}var h=require("@raycast/api");var oe=require("react/jsx-runtime");function te(){return(0,h.showToast)(h.Toast.Style.Failure,C,"Something happened while trying to run your command"),(0,oe.jsx)(h.Detail,{markdown:J})}var r=require("@raycast/api");var p=require("run-applescript"),g=require("@raycast/api");var re=require("@raycast/utils");var m=class e{constructor(o,t,n,i,l,s){this.title=o;this.url=t;this.favicon=n;this.windowsId=i;this.tabIndex=l;this.sourceLine=s}title;url;favicon;windowsId;tabIndex;sourceLine;static TAB_CONTENTS_SEPARATOR="~~~";static parse(o){let t=o.split(this.TAB_CONTENTS_SEPARATOR);return new e(t[0],t[1],t[2],+t[3],+t[4],o)}key(){return`${this.windowsId}${e.TAB_CONTENTS_SEPARATOR}${this.tabIndex}`}urlWithoutScheme(){try{return this.url.replace(/(^\w+:|^)\/\//,"").replace("www.","")}catch{return this.url}}realFavicon(){try{return new URL(this.favicon||"/favicon.ico",this.url).href}catch{return this.favicon||""}}googleFavicon(){try{return(0,re.getFavicon)(this.url)}catch{return{source:""}}}};var v=require("@raycast/utils");async function ie(e){let o=e?`execute t javascript \xAC
        "document.head.querySelector('link[rel~=icon]') ? document.head.querySelector('link[rel~=icon]').href : '';"`:'""';await A();try{return(await(0,p.runAppleScript)(`
      set _output to ""
      tell application "Google Chrome"
        repeat with w in windows
          set _w_id to get id of w as inches as string
          set _tab_index to 1
          repeat with t in tabs of w
            set _title to get title of t
            set _url to get URL of t
            set _favicon to ${o}
            set _output to (_output & _title & "${m.TAB_CONTENTS_SEPARATOR}" & _url & "${m.TAB_CONTENTS_SEPARATOR}" & _favicon & "${m.TAB_CONTENTS_SEPARATOR}" & _w_id & "${m.TAB_CONTENTS_SEPARATOR}" & _tab_index & "\\n")
            set _tab_index to _tab_index + 1
          end repeat
        end repeat
      end tell
      return _output
  `)).split(`
`).filter(n=>n.length!==0).map(n=>m.parse(n))}catch(t){return t.message.includes(`Can't get application "Google Chrome"`)&&g.LocalStorage.removeItem("is-installed"),await A(),[]}}async function F({url:e,query:o,profileCurrent:t,profileOriginal:n,openTabInProfile:i}){await A();let l="",s=u=>`
    set profile to quoted form of "${u}"
    set link to quoted form of "${e||"about:blank"}"
    do shell script "open -na 'Google Chrome' --args --profile-directory=" & profile & " " & link
  `;switch(i){case"default":l=`
        set winExists to false
        tell application "Google Chrome"
            repeat with win in every window
                if index of win is 1 then
                    set winExists to true
                    exit repeat
                end if
            end repeat

            if not winExists then
                make new window
            else
                activate
            end if

            tell window 1
                set newTab to make new tab `+(e?`with properties {URL:"${e}"}`:o?'with properties {URL:"https://www.google.com/search?q='+o+'"}':"")+`
            end tell
        end tell
        return true

  `;break;case"profile_current":l=s(t);break;case"profile_original":l=s(n);break}try{return await(0,v.runAppleScript)(l),await(0,g.popToRoot)({clearSearchBar:!0}),!0}catch(u){return await(0,v.showFailureToast)(u),!1}}async function ne(e){await(0,p.runAppleScript)(`
    tell application "Google Chrome"
      activate
      set _wnd to first window where id is ${e.windowsId}
      set index of _wnd to 1
      set active tab index of _wnd to ${e.tabIndex}
    end tell
    return true
  `)}async function ae(e){await(0,p.runAppleScript)(`
    tell application "Google Chrome"
      activate
      set _wnd to first window where id is ${e.windowsId}
      set index of _wnd to 1
      set active tab index of _wnd to ${e.tabIndex}
      close active tab of _wnd
    end tell
    return true
  `)}async function se(e){await(0,p.runAppleScript)(`
    tell application "Google Chrome"
      activate
      set _wnd to first window where id is ${e.windowsId}
      set index of _wnd to 1
      set active tab index of _wnd to ${e.tabIndex}
      tell active tab of _wnd to reload
    end tell
    return true
  `)}var A=async()=>{if(await g.LocalStorage.getItem("is-installed"))return;if(await(0,p.runAppleScript)(`
set isInstalled to false
try
    do shell script "osascript -e 'exists application \\"Google Chrome\\"'"
    set isInstalled to true
end try

return isInstalled`)==="false")throw new Error(P);g.LocalStorage.setItem("is-installed",!0)};async function G(e){await A(),await(0,p.runAppleScript)(`
    set link to quoted form of "${e}"
    do shell script "open -na 'Google Chrome' --args --guest " & link
  `)}async function le(e){await(0,p.runAppleScript)(`
    tell application "Google Chrome"
      set _wnd to first window where id is ${e}
      set index of _wnd to 1
      activate
    end tell
    return true
  `)}var B=require("@raycast/utils");var a=require("react/jsx-runtime"),y=class{static NewTab=Le;static TabList=Ne;static TabHistory=We;static WindowList=De};function Le({query:e,url:o}){let{openTabInProfile:t}=(0,r.getPreferenceValues)(),[n]=(0,B.useCachedState)(N,k),i="Open Empty Tab";return e?i=`Search "${e}"`:o&&(i=`Open URL "${o}"`),(0,a.jsx)(r.ActionPanel,{title:"New Tab",children:(0,a.jsx)(r.Action,{onAction:()=>F({url:o,query:e,profileCurrent:n,openTabInProfile:t}),title:i})})}function Ne({tab:e,onTabClosed:o}){return(0,a.jsxs)(r.ActionPanel,{title:e.title,children:[(0,a.jsx)(Fe,{tab:e}),(0,a.jsx)(Be,{tab:e}),(0,a.jsx)(r.Action,{title:"Open in Guest Window",icon:{source:r.Icon.Person},onAction:async()=>{try{await G(e.url),await(0,r.closeMainWindow)()}catch(t){throw t instanceof Error?new Error(t.message):t}}}),(0,a.jsx)(r.Action.CopyToClipboard,{title:"Copy URL",content:e.url}),(0,a.jsx)(r.Action.CopyToClipboard,{title:"Copy Title",content:e.title,shortcut:{modifiers:["cmd","shift"],key:"enter"}}),(0,a.jsx)(Ge,{tab:e,onTabClosed:o}),(0,a.jsx)(r.ActionPanel.Section,{children:(0,a.jsx)(r.Action.CreateQuicklink,{quicklink:{link:e.url,name:e.title,application:"Google Chrome"},shortcut:{modifiers:["cmd"],key:"s"}})})]})}function We({title:e,url:o,profile:t,onVisit:n,onResetRanking:i}){let{openTabInProfile:l}=(0,r.getPreferenceValues)(),[s]=(0,B.useCachedState)(N,k);async function u(w){n?.().catch(b=>console.error("Failed to record bookmark visit:",b)),await F({url:o,profileOriginal:t,profileCurrent:s,openTabInProfile:w})}return(0,a.jsxs)(r.ActionPanel,{title:e,children:[(0,a.jsx)(r.Action,{onAction:()=>u(l),title:"Open"}),(0,a.jsx)(r.Action,{title:"Open in Guest Window",icon:{source:r.Icon.Person},onAction:async()=>{n?.().catch(w=>console.error("Failed to record bookmark visit:",w)),await G(o),await(0,r.closeMainWindow)()}}),(0,a.jsxs)(r.ActionPanel.Section,{title:"Open in profile",children:[(0,a.jsx)(r.Action,{onAction:()=>u("profile_current"),title:"Open in Current Profile",shortcut:r.Keyboard.Shortcut.Common.Open}),(0,a.jsx)(r.Action,{onAction:()=>u("profile_original"),title:"Open in Original Profile",shortcut:r.Keyboard.Shortcut.Common.OpenWith})]}),(0,a.jsx)(r.Action.CopyToClipboard,{title:"Copy URL",content:o,shortcut:{modifiers:["cmd"],key:"c"}}),i?(0,a.jsx)(r.ActionPanel.Section,{children:(0,a.jsx)(r.Action,{title:"Reset Ranking",icon:{source:r.Icon.ArrowCounterClockwise},onAction:i,shortcut:{modifiers:["ctrl","shift"],key:"r"}})}):null]})}function Fe(e){async function o(){try{await ne(e.tab),await(0,r.closeMainWindow)()}catch(t){throw t instanceof Error?new Error("Issue with tab: '"+e.tab.sourceLine+`'
`+t.message):t}}return(0,a.jsx)(r.ActionPanel.Item,{title:"Open Tab",icon:{source:r.Icon.Eye},onAction:o})}function Ge(e){async function o(){await ae(e.tab),await(0,r.closeMainWindow)(),e.onTabClosed?.()}return(0,a.jsx)(r.Action,{title:"Close Tab",icon:{source:r.Icon.XMarkCircle},onAction:o,shortcut:{modifiers:["cmd","shift"],key:"w"}})}function Be(e){async function o(){try{await se(e.tab),await(0,r.closeMainWindow)()}catch(t){throw t instanceof Error?new Error("Issue with tab: '"+e.tab.sourceLine+`'
`+t.message):t}}return(0,a.jsx)(r.Action,{title:"Reload Tab",icon:{source:r.Icon.ArrowClockwise},onAction:o,shortcut:{modifiers:["cmd","shift"],key:"r"}})}function De({window:e,refreshWindowsListOnFailure:o}){return(0,a.jsx)(r.ActionPanel,{title:e.title,children:(0,a.jsx)(r.Action,{title:"Focus Window",icon:{source:r.Icon.Window},onAction:async()=>{try{await le(e.id),await(0,r.closeMainWindow)()}catch{await(0,r.showToast)({style:r.Toast.Style.Failure,title:"Failed to focus window",message:"Window may have been closed"}),o&&o()}}})})}var ce=require("@raycast/utils"),d=require("@raycast/api");var f=require("react/jsx-runtime"),R=class{static TabList=He;static TabHistory=$e;static WindowList=Ue};function de(e){let o=["javascript:","data:","about:","chrome:","file:"],t=e.toLowerCase().trim();if(o.some(n=>t.startsWith(n)))return{icon:{source:d.Icon.ExclamationMark,tintColor:d.Color.Orange},isInvalid:!0};try{return new URL(e),{icon:(0,ce.getFavicon)(e),isInvalid:!1}}catch{return{icon:{source:d.Icon.ExclamationMark,tintColor:d.Color.Orange},isInvalid:!0}}}function $e({profile:e,entry:{url:o,title:t,id:n},type:i,onVisit:l,onResetRanking:s}){let{icon:u,isInvalid:w}=de(o);return(0,f.jsx)(d.List.Item,{id:`${e}-${i}-${n}`,title:t,subtitle:o,icon:u,accessories:w?[{text:"\u26A0\uFE0F Invalid URL - Cannot open",tooltip:"This URL uses an unsupported protocol"}]:void 0,actions:(0,f.jsx)(y.TabHistory,{title:t,url:o,profile:e,onVisit:l,onResetRanking:s})})}function He(e){return(0,f.jsx)(d.List.Item,{title:e.tab.title,subtitle:e.tab.urlWithoutScheme(),keywords:[e.tab.urlWithoutScheme()],actions:(0,f.jsx)(y.TabList,{tab:e.tab,onTabClosed:e.onTabClosed}),icon:e.useOriginalFavicon?e.tab.realFavicon():e.tab.googleFavicon()})}function Ue(e){let o=d.Icon.Window;if(e.window.activeTabUrl){let t=de(e.window.activeTabUrl);o=t.isInvalid?{source:d.Icon.Globe,tintColor:d.Color.SecondaryText}:t.icon}return(0,f.jsx)(d.List.Item,{title:e.window.title,icon:o,actions:(0,f.jsx)(y.WindowList,{window:e.window,refreshWindowsListOnFailure:e.refreshWindowsListOnFailure})})}var $=require("react");var me=require("@raycast/api");var pe=require("@raycast/utils");function ue(e){if(!e)return{includeTerms:[],excludeTerms:[]};let o=e.trim().split(/\s+/),t=[],n=[];for(let i of o)i.startsWith("\\-")&&i.length>1?t.push(i.slice(1).toLowerCase()):i.startsWith("-")&&i.length>1?n.push(i.slice(1).toLowerCase()):i.length>0&&i!=="-"&&t.push(i.toLowerCase());return{includeTerms:t,excludeTerms:n}}function D(e,o){let{includeTerms:t,excludeTerms:n}=o,i=t.length===0||t.every(s=>e.includes(s)),l=n.length===0||!n.some(s=>e.includes(s));return i&&l}var H=require("react/jsx-runtime");function fe(e=""){let{useOriginalFavicon:o}=(0,me.getPreferenceValues)(),[t,n]=(0,$.useState)(),[i,l]=(0,$.useState)(!1),{isLoading:s,data:u}=(0,pe.usePromise)(async(b,ge)=>{let O=await ie(b),T=ue(ge);return n(void 0),l(O.length===0),T.includeTerms.length===0&&T.excludeTerms.length===0?O:O.filter(E=>{try{let I=`${E.title.toLowerCase()} ${E.urlWithoutScheme().toLowerCase()}`;return D(I,T)}catch{let I=`${E.title.toLowerCase()} ${E.url.toLowerCase()}`;return D(I,T)}})},[o,e],{onError(b){b.message===P?n((0,H.jsx)(ee,{})):n((0,H.jsx)(te,{}))}});return{data:i?[]:u||[],isLoading:s,errorView:t}}var U=require("react/jsx-runtime");function he(){let{useOriginalFavicon:e}=(0,S.getPreferenceValues)(),[o,t]=(0,we.useState)(""),{data:n,errorView:i,isLoading:l}=fe(o);return i??(0,U.jsx)(S.List,{isLoading:l,onSearchTextChange:t,children:n.map(s=>(0,U.jsx)(R.TabList,{tab:s,useOriginalFavicon:e},s.key()))})}
