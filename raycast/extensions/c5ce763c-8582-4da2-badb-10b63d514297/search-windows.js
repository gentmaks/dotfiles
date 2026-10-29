"use strict";var dt=Object.create;var T=Object.defineProperty;var ut=Object.getOwnPropertyDescriptor;var mt=Object.getOwnPropertyNames;var pt=Object.getPrototypeOf,wt=Object.prototype.hasOwnProperty;var ft=(t,e)=>{for(var o in e)T(t,o,{get:e[o],enumerable:!0})},G=(t,e,o,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of mt(e))!wt.call(t,n)&&n!==o&&T(t,n,{get:()=>e[n],enumerable:!(a=ut(e,n))||a.enumerable});return t};var D=(t,e,o)=>(o=t!=null?dt(pt(t)):{},G(e||!t||!t.__esModule?T(o,"default",{value:t,enumerable:!0}):o,t)),ht=t=>G(T({},"__esModule",{value:!0}),t);var Bt={};ft(Bt,{default:()=>ct});module.exports=ht(Bt);var st=require("@raycast/api"),lt=require("react");var Tt=require("@raycast/api");var U=D(require("fs"));var R=D(require("path"));var gt=require("@raycast/api"),yt=()=>{if(!process.env.HOME)throw new Error("$HOME environment variable is not set.");return R.default.join(process.env.HOME,"Library")};var H=()=>R.default.join(yt(),...$);var bt=()=>{try{let t=H(),e=U.default.readFileSync(t,"utf-8"),o=JSON.parse(e).profile.info_cache;return o?Object.keys(o)[0]:"Default"}catch{return"Default"}};var $=["Application Support","Google","Chrome","Local State"],E=bt(),O="CHROME_PROFILE_KEY";var M=`
  # \u{1F6A8}Error: Google Chrome browser is not installed
  ## This extension depends on Google Chrome browser. You must install it to continue.

  If you have [Homebrew](https://brew.sh/) installed then press \u23CE (Enter Key) to install Google Chrome browser.

  [Click here](https://www.google.com/chrome/) if you want to download manually.

  [![Google Chrome](https://www.google.com/chrome/static/images/chrome-logo-m100.svg)]()
`;var V=`
# \u{1F6A8}Error: Something happened while trying to run your command

[![Google Chrome](https://www.google.com/chrome/static/images/chrome-logo-m100.svg)]()
`,_="An Error Occurred",k="Google Chrome not installed";var Et=require("react/jsx-runtime");var q=require("react"),s=require("@raycast/api"),S=require("child_process");var Y=require("os"),J=require("path"),C=require("react/jsx-runtime"),_t=(()=>{try{return(0,S.execSync)("brew --prefix",{encoding:"utf8"}).trim()}catch{return(0,Y.cpus)()[0].model.includes("Apple")?"/opt/homebrew":"/usr/local"}})();function K(){return(0,J.join)(_t,"bin/brew")}function kt(t){try{return(0,S.execSync)(`${K()} install --cask ${t}`,{maxBuffer:10*1024*1024})}catch(e){let o=e;throw o&&o.code===127?(o.stderr=`Brew executable not found at ${K()}`,o):e}}function j(){let[t,e]=(0,q.useState)(!0);return(0,C.jsx)(s.Detail,{actions:(0,C.jsx)(s.ActionPanel,{children:t&&(0,C.jsx)(s.Action,{title:"Install with Homebrew",onAction:async()=>{if(!t)return;let o=new s.Toast({style:s.Toast.Style.Animated,title:"Installing..."});await o.show();try{kt("google-chrome"),await o.hide()}catch{await o.hide(),await(0,s.showToast)(s.Toast.Style.Failure,_,"An unknown error occurred while trying to install")}o.title="Installed! Please go back and try again.",o.style=s.Toast.Style.Success,await o.show(),e(!1)}})}),markdown:M})}var g=require("@raycast/api");var X=require("react/jsx-runtime");function Q(){return(0,g.showToast)(g.Toast.Style.Failure,_,"Something happened while trying to run your command"),(0,X.jsx)(g.Detail,{markdown:V})}var r=require("@raycast/api");var p=require("run-applescript"),y=require("@raycast/api");var Ct=require("@raycast/utils");var w=class t{constructor(e,o,a){this.id=e;this.title=o;this.activeTabUrl=a}id;title;activeTabUrl;static WINDOW_FIELD_SEPARATOR="";static WINDOW_RECORD_SEPARATOR="";static parse(e){let o=e.split(this.WINDOW_FIELD_SEPARATOR);return new t(+o[0],o[1],o[2]||"")}};var x=require("@raycast/utils");async function I({url:t,query:e,profileCurrent:o,profileOriginal:a,openTabInProfile:n}){await P();let c="",d=u=>`
    set profile to quoted form of "${u}"
    set link to quoted form of "${t||"about:blank"}"
    do shell script "open -na 'Google Chrome' --args --profile-directory=" & profile & " " & link
  `;switch(n){case"default":c=`
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
                set newTab to make new tab `+(t?`with properties {URL:"${t}"}`:e?'with properties {URL:"https://www.google.com/search?q='+e+'"}':"")+`
            end tell
        end tell
        return true

  `;break;case"profile_current":c=d(o);break;case"profile_original":c=d(a);break}try{return await(0,x.runAppleScript)(c),await(0,y.popToRoot)({clearSearchBar:!0}),!0}catch(u){return await(0,x.showFailureToast)(u),!1}}async function z(t){await(0,p.runAppleScript)(`
    tell application "Google Chrome"
      activate
      set _wnd to first window where id is ${t.windowsId}
      set index of _wnd to 1
      set active tab index of _wnd to ${t.tabIndex}
    end tell
    return true
  `)}async function Z(t){await(0,p.runAppleScript)(`
    tell application "Google Chrome"
      activate
      set _wnd to first window where id is ${t.windowsId}
      set index of _wnd to 1
      set active tab index of _wnd to ${t.tabIndex}
      close active tab of _wnd
    end tell
    return true
  `)}async function tt(t){await(0,p.runAppleScript)(`
    tell application "Google Chrome"
      activate
      set _wnd to first window where id is ${t.windowsId}
      set index of _wnd to 1
      set active tab index of _wnd to ${t.tabIndex}
      tell active tab of _wnd to reload
    end tell
    return true
  `)}var P=async()=>{if(await y.LocalStorage.getItem("is-installed"))return;if(await(0,p.runAppleScript)(`
set isInstalled to false
try
    do shell script "osascript -e 'exists application \\"Google Chrome\\"'"
    set isInstalled to true
end try

return isInstalled`)==="false")throw new Error(k);y.LocalStorage.setItem("is-installed",!0)};async function L(t){await P(),await(0,p.runAppleScript)(`
    set link to quoted form of "${t}"
    do shell script "open -na 'Google Chrome' --args --guest " & link
  `)}async function et(){await P();try{return(await(0,p.runAppleScript)(`
      set _rec_sep to character id ${w.WINDOW_RECORD_SEPARATOR.charCodeAt(0)}
      set _field_sep to character id ${w.WINDOW_FIELD_SEPARATOR.charCodeAt(0)}
      set _output to ""
      
      tell application "Google Chrome"
        -- 1. Bulk fetch properties into parallel lists
        set _ids to id of windows
        set _titles to title of windows
        
        set _urls to {}
        try
          set _urls to URL of active tab of windows
        end try
        
        -- 2. Iterate using a shared index (i)
        repeat with i from 1 to length of _ids
          set _w_id to item i of _ids
          set _title to item i of _titles
          
          set _url to ""
          try
            set _url to item i of _urls
          end try
          
          set _output to _output & _w_id & _field_sep & _title & _field_sep & _url & _rec_sep
        end repeat
      end tell
      
      return _output
    `)).split(w.WINDOW_RECORD_SEPARATOR).filter(e=>e.length!==0).map(e=>w.parse(e))}catch(t){throw t.message.includes(`Can't get application "Google Chrome"`)&&y.LocalStorage.removeItem("is-installed"),await P(),t}}async function ot(t){await(0,p.runAppleScript)(`
    tell application "Google Chrome"
      set _wnd to first window where id is ${t}
      set index of _wnd to 1
      activate
    end tell
    return true
  `)}var W=require("@raycast/utils");var i=require("react/jsx-runtime"),b=class{static NewTab=xt;static TabList=At;static TabHistory=vt;static WindowList=It};function xt({query:t,url:e}){let{openTabInProfile:o}=(0,r.getPreferenceValues)(),[a]=(0,W.useCachedState)(O,E),n="Open Empty Tab";return t?n=`Search "${t}"`:e&&(n=`Open URL "${e}"`),(0,i.jsx)(r.ActionPanel,{title:"New Tab",children:(0,i.jsx)(r.Action,{onAction:()=>I({url:e,query:t,profileCurrent:a,openTabInProfile:o}),title:n})})}function At({tab:t,onTabClosed:e}){return(0,i.jsxs)(r.ActionPanel,{title:t.title,children:[(0,i.jsx)(Rt,{tab:t}),(0,i.jsx)(St,{tab:t}),(0,i.jsx)(r.Action,{title:"Open in Guest Window",icon:{source:r.Icon.Person},onAction:async()=>{try{await L(t.url),await(0,r.closeMainWindow)()}catch(o){throw o instanceof Error?new Error(o.message):o}}}),(0,i.jsx)(r.Action.CopyToClipboard,{title:"Copy URL",content:t.url}),(0,i.jsx)(r.Action.CopyToClipboard,{title:"Copy Title",content:t.title,shortcut:{modifiers:["cmd","shift"],key:"enter"}}),(0,i.jsx)(Ot,{tab:t,onTabClosed:e}),(0,i.jsx)(r.ActionPanel.Section,{children:(0,i.jsx)(r.Action.CreateQuicklink,{quicklink:{link:t.url,name:t.title,application:"Google Chrome"},shortcut:{modifiers:["cmd"],key:"s"}})})]})}function vt({title:t,url:e,profile:o,onVisit:a,onResetRanking:n}){let{openTabInProfile:c}=(0,r.getPreferenceValues)(),[d]=(0,W.useCachedState)(O,E);async function u(h){a?.().catch(m=>console.error("Failed to record bookmark visit:",m)),await I({url:e,profileOriginal:o,profileCurrent:d,openTabInProfile:h})}return(0,i.jsxs)(r.ActionPanel,{title:t,children:[(0,i.jsx)(r.Action,{onAction:()=>u(c),title:"Open"}),(0,i.jsx)(r.Action,{title:"Open in Guest Window",icon:{source:r.Icon.Person},onAction:async()=>{a?.().catch(h=>console.error("Failed to record bookmark visit:",h)),await L(e),await(0,r.closeMainWindow)()}}),(0,i.jsxs)(r.ActionPanel.Section,{title:"Open in profile",children:[(0,i.jsx)(r.Action,{onAction:()=>u("profile_current"),title:"Open in Current Profile",shortcut:r.Keyboard.Shortcut.Common.Open}),(0,i.jsx)(r.Action,{onAction:()=>u("profile_original"),title:"Open in Original Profile",shortcut:r.Keyboard.Shortcut.Common.OpenWith})]}),(0,i.jsx)(r.Action.CopyToClipboard,{title:"Copy URL",content:e,shortcut:{modifiers:["cmd"],key:"c"}}),n?(0,i.jsx)(r.ActionPanel.Section,{children:(0,i.jsx)(r.Action,{title:"Reset Ranking",icon:{source:r.Icon.ArrowCounterClockwise},onAction:n,shortcut:{modifiers:["ctrl","shift"],key:"r"}})}):null]})}function Rt(t){async function e(){try{await z(t.tab),await(0,r.closeMainWindow)()}catch(o){throw o instanceof Error?new Error("Issue with tab: '"+t.tab.sourceLine+`'
`+o.message):o}}return(0,i.jsx)(r.ActionPanel.Item,{title:"Open Tab",icon:{source:r.Icon.Eye},onAction:e})}function Ot(t){async function e(){await Z(t.tab),await(0,r.closeMainWindow)(),t.onTabClosed?.()}return(0,i.jsx)(r.Action,{title:"Close Tab",icon:{source:r.Icon.XMarkCircle},onAction:e,shortcut:{modifiers:["cmd","shift"],key:"w"}})}function St(t){async function e(){try{await tt(t.tab),await(0,r.closeMainWindow)()}catch(o){throw o instanceof Error?new Error("Issue with tab: '"+t.tab.sourceLine+`'
`+o.message):o}}return(0,i.jsx)(r.Action,{title:"Reload Tab",icon:{source:r.Icon.ArrowClockwise},onAction:e,shortcut:{modifiers:["cmd","shift"],key:"r"}})}function It({window:t,refreshWindowsListOnFailure:e}){return(0,i.jsx)(r.ActionPanel,{title:t.title,children:(0,i.jsx)(r.Action,{title:"Focus Window",icon:{source:r.Icon.Window},onAction:async()=>{try{await ot(t.id),await(0,r.closeMainWindow)()}catch{await(0,r.showToast)({style:r.Toast.Style.Failure,title:"Failed to focus window",message:"Window may have been closed"}),e&&e()}}})})}var rt=require("@raycast/utils"),l=require("@raycast/api");var f=require("react/jsx-runtime"),A=class{static TabList=Wt;static TabHistory=Lt;static WindowList=Nt};function it(t){let e=["javascript:","data:","about:","chrome:","file:"],o=t.toLowerCase().trim();if(e.some(a=>o.startsWith(a)))return{icon:{source:l.Icon.ExclamationMark,tintColor:l.Color.Orange},isInvalid:!0};try{return new URL(t),{icon:(0,rt.getFavicon)(t),isInvalid:!1}}catch{return{icon:{source:l.Icon.ExclamationMark,tintColor:l.Color.Orange},isInvalid:!0}}}function Lt({profile:t,entry:{url:e,title:o,id:a},type:n,onVisit:c,onResetRanking:d}){let{icon:u,isInvalid:h}=it(e);return(0,f.jsx)(l.List.Item,{id:`${t}-${n}-${a}`,title:o,subtitle:e,icon:u,accessories:h?[{text:"\u26A0\uFE0F Invalid URL - Cannot open",tooltip:"This URL uses an unsupported protocol"}]:void 0,actions:(0,f.jsx)(b.TabHistory,{title:o,url:e,profile:t,onVisit:c,onResetRanking:d})})}function Wt(t){return(0,f.jsx)(l.List.Item,{title:t.tab.title,subtitle:t.tab.urlWithoutScheme(),keywords:[t.tab.urlWithoutScheme()],actions:(0,f.jsx)(b.TabList,{tab:t.tab,onTabClosed:t.onTabClosed}),icon:t.useOriginalFavicon?t.tab.realFavicon():t.tab.googleFavicon()})}function Nt(t){let e=l.Icon.Window;if(t.window.activeTabUrl){let o=it(t.window.activeTabUrl);e=o.isInvalid?{source:l.Icon.Globe,tintColor:l.Color.SecondaryText}:o.icon}return(0,f.jsx)(l.List.Item,{title:t.window.title,icon:e,actions:(0,f.jsx)(b.WindowList,{window:t.window,refreshWindowsListOnFailure:t.refreshWindowsListOnFailure})})}var v=require("react");var nt=require("@raycast/utils"),N=require("react/jsx-runtime"),Ft=2e3;function at(t=""){let[e,o]=(0,v.useState)(),{isLoading:a,data:n,mutate:c,revalidate:d}=(0,nt.usePromise)(async()=>{let m=await et();return o(void 0),m},[],{onError(m){o(B=>B||(m.message===k?(0,N.jsx)(j,{}):(0,N.jsx)(Q,{})))}});(0,v.useEffect)(()=>{if(a)return;let m=setInterval(d,Ft);return()=>clearInterval(m)},[a,d]);let u=n||[];return{data:t?u.filter(m=>m.title.toLowerCase().includes(t.toLowerCase())):u,isLoading:a&&n===void 0,errorView:e,mutate:c}}var F=require("react/jsx-runtime");function ct(){let[t,e]=(0,lt.useState)(""),{data:o,errorView:a,isLoading:n,mutate:c}=at(t);return a??(0,F.jsx)(st.List,{isLoading:n,onSearchTextChange:e,searchBarPlaceholder:"Search chrome windows",children:o.map(d=>(0,F.jsx)(A.WindowList,{window:d,refreshWindowsListOnFailure:()=>c()},d.id))})}
