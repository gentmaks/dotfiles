"use strict";var De=Object.create;var x=Object.defineProperty;var Be=Object.getOwnPropertyDescriptor;var Ge=Object.getOwnPropertyNames;var He=Object.getPrototypeOf,$e=Object.prototype.hasOwnProperty;var Me=(e,t)=>{for(var o in t)x(e,o,{get:t[o],enumerable:!0})},z=(e,t,o,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Ge(t))!$e.call(e,i)&&i!==o&&x(e,i,{get:()=>t[i],enumerable:!(n=Be(t,i))||n.enumerable});return e};var H=(e,t,o)=>(o=e!=null?De(He(e)):{},z(t||!e||!e.__esModule?x(o,"default",{value:e,enumerable:!0}):o,e)),Ue=e=>z(x({},"__esModule",{value:!0}),e);var dt={};Me(dt,{default:()=>Ae});module.exports=Ue(dt);var Se=require("@raycast/api"),ve=require("react");var Ye=require("@raycast/api");var se=H(require("fs"));var _=H(require("fs")),P=H(require("path"));var ee=require("@raycast/api"),te=()=>{if(!process.env.HOME)throw new Error("$HOME environment variable is not set.");return P.default.join(process.env.HOME,"Library")},oe=(e,t)=>{let{profilePath:o}=(0,ee.getPreferenceValues)(),n;return o?n=P.default.join(o,e):n=P.default.join(te(),...ne,t??p,e),n};var S=()=>P.default.join(te(),...ae),Ke=e=>oe("Bookmarks",e),Ve=e=>oe("AccountBookmarks",e);function re(e){let t=[];return e.type==="folder"?e.children.forEach(o=>{t.push(...re(o))}):e.type==="url"&&e.url&&t.push({id:e.id,url:e.url,title:e.name,lastVisited:new Date(e.date_added)}),t}var Z=e=>{let t=[];return Object.keys(e.roots).forEach(o=>{let n=e.roots[o],i=re(n);t.push(...i)}),t},ie=async e=>{let t=Ve(e);if(_.default.existsSync(t))try{let i=await _.default.promises.readFile(t,{encoding:"utf-8"}),s=Z(JSON.parse(i));if(s.length>0)return s}catch{}let o=Ke(e);if(!_.default.existsSync(o))throw new Error(v);let n=await _.default.promises.readFile(o,{encoding:"utf-8"});return Z(JSON.parse(n))};var Qe=()=>{try{let e=S(),t=se.default.readFileSync(e,"utf-8"),o=JSON.parse(t).profile.info_cache;return o?Object.keys(o)[0]:"Default"}catch{return"Default"}},ne=["Application Support","Google","Chrome"],ae=["Application Support","Google","Chrome","Local State"],p=Qe(),h="CHROME_PROFILE_KEY",le="CHROME_PROFILES_KEY",ce=`
  # \u{1F6A8}Error: Google Chrome browser is not installed
  ## This extension depends on Google Chrome browser. You must install it to continue.

  If you have [Homebrew](https://brew.sh/) installed then press \u23CE (Enter Key) to install Google Chrome browser.

  [Click here](https://www.google.com/chrome/) if you want to download manually.

  [![Google Chrome](https://www.google.com/chrome/static/images/chrome-logo-m100.svg)]()
`;var de=`
# \u{1F6A8}Error: Something happened while trying to run your command

[![Google Chrome](https://www.google.com/chrome/static/images/chrome-logo-m100.svg)]()
`,O="An Error Occurred",A="Google Chrome not installed",v="Google Chrome has no bookmarks.";var qe=require("react/jsx-runtime");var ue=require("react"),d=require("@raycast/api"),$=require("child_process");var pe=require("os"),fe=require("path"),I=require("react/jsx-runtime"),Je=(()=>{try{return(0,$.execSync)("brew --prefix",{encoding:"utf8"}).trim()}catch{return(0,pe.cpus)()[0].model.includes("Apple")?"/opt/homebrew":"/usr/local"}})();function me(){return(0,fe.join)(Je,"bin/brew")}function je(e){try{return(0,$.execSync)(`${me()} install --cask ${e}`,{maxBuffer:10*1024*1024})}catch(t){let o=t;throw o&&o.code===127?(o.stderr=`Brew executable not found at ${me()}`,o):t}}function we(){let[e,t]=(0,ue.useState)(!0);return(0,I.jsx)(d.Detail,{actions:(0,I.jsx)(d.ActionPanel,{children:e&&(0,I.jsx)(d.Action,{title:"Install with Homebrew",onAction:async()=>{if(!e)return;let o=new d.Toast({style:d.Toast.Style.Animated,title:"Installing..."});await o.show();try{je("google-chrome"),await o.hide()}catch{await o.hide(),await(0,d.showToast)(d.Toast.Style.Failure,O,"An unknown error occurred while trying to install")}o.title="Installed! Please go back and try again.",o.style=d.Toast.Style.Success,await o.show(),t(!1)}})}),markdown:ce})}var b=require("@raycast/api");var ge=require("react/jsx-runtime");function he(){return(0,b.showToast)(b.Toast.Style.Failure,O,"Something happened while trying to run your command"),(0,ge.jsx)(b.Detail,{markdown:de})}var r=require("@raycast/api");var g=require("run-applescript"),C=require("@raycast/api");var Xe=require("@raycast/utils");var L=require("@raycast/utils");async function M({url:e,query:t,profileCurrent:o,profileOriginal:n,openTabInProfile:i}){await Te();let s="",l=c=>`
    set profile to quoted form of "${c}"
    set link to quoted form of "${e||"about:blank"}"
    do shell script "open -na 'Google Chrome' --args --profile-directory=" & profile & " " & link
  `;switch(i){case"default":s=`
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
                set newTab to make new tab `+(e?`with properties {URL:"${e}"}`:t?'with properties {URL:"https://www.google.com/search?q='+t+'"}':"")+`
            end tell
        end tell
        return true

  `;break;case"profile_current":s=l(o);break;case"profile_original":s=l(n);break}try{return await(0,L.runAppleScript)(s),await(0,C.popToRoot)({clearSearchBar:!0}),!0}catch(c){return await(0,L.showFailureToast)(c),!1}}async function ye(e){await(0,g.runAppleScript)(`
    tell application "Google Chrome"
      activate
      set _wnd to first window where id is ${e.windowsId}
      set index of _wnd to 1
      set active tab index of _wnd to ${e.tabIndex}
    end tell
    return true
  `)}async function be(e){await(0,g.runAppleScript)(`
    tell application "Google Chrome"
      activate
      set _wnd to first window where id is ${e.windowsId}
      set index of _wnd to 1
      set active tab index of _wnd to ${e.tabIndex}
      close active tab of _wnd
    end tell
    return true
  `)}async function Ee(e){await(0,g.runAppleScript)(`
    tell application "Google Chrome"
      activate
      set _wnd to first window where id is ${e.windowsId}
      set index of _wnd to 1
      set active tab index of _wnd to ${e.tabIndex}
      tell active tab of _wnd to reload
    end tell
    return true
  `)}var Te=async()=>{if(await C.LocalStorage.getItem("is-installed"))return;if(await(0,g.runAppleScript)(`
set isInstalled to false
try
    do shell script "osascript -e 'exists application \\"Google Chrome\\"'"
    set isInstalled to true
end try

return isInstalled`)==="false")throw new Error(A);C.LocalStorage.setItem("is-installed",!0)};async function U(e){await Te(),await(0,g.runAppleScript)(`
    set link to quoted form of "${e}"
    do shell script "open -na 'Google Chrome' --args --guest " & link
  `)}async function ke(e){await(0,g.runAppleScript)(`
    tell application "Google Chrome"
      set _wnd to first window where id is ${e}
      set index of _wnd to 1
      activate
    end tell
    return true
  `)}var K=require("@raycast/utils");var a=require("react/jsx-runtime"),E=class{static NewTab=Ze;static TabList=et;static TabHistory=tt;static WindowList=nt};function Ze({query:e,url:t}){let{openTabInProfile:o}=(0,r.getPreferenceValues)(),[n]=(0,K.useCachedState)(h,p),i="Open Empty Tab";return e?i=`Search "${e}"`:t&&(i=`Open URL "${t}"`),(0,a.jsx)(r.ActionPanel,{title:"New Tab",children:(0,a.jsx)(r.Action,{onAction:()=>M({url:t,query:e,profileCurrent:n,openTabInProfile:o}),title:i})})}function et({tab:e,onTabClosed:t}){return(0,a.jsxs)(r.ActionPanel,{title:e.title,children:[(0,a.jsx)(ot,{tab:e}),(0,a.jsx)(it,{tab:e}),(0,a.jsx)(r.Action,{title:"Open in Guest Window",icon:{source:r.Icon.Person},onAction:async()=>{try{await U(e.url),await(0,r.closeMainWindow)()}catch(o){throw o instanceof Error?new Error(o.message):o}}}),(0,a.jsx)(r.Action.CopyToClipboard,{title:"Copy URL",content:e.url}),(0,a.jsx)(r.Action.CopyToClipboard,{title:"Copy Title",content:e.title,shortcut:{modifiers:["cmd","shift"],key:"enter"}}),(0,a.jsx)(rt,{tab:e,onTabClosed:t}),(0,a.jsx)(r.ActionPanel.Section,{children:(0,a.jsx)(r.Action.CreateQuicklink,{quicklink:{link:e.url,name:e.title,application:"Google Chrome"},shortcut:{modifiers:["cmd"],key:"s"}})})]})}function tt({title:e,url:t,profile:o,onVisit:n,onResetRanking:i}){let{openTabInProfile:s}=(0,r.getPreferenceValues)(),[l]=(0,K.useCachedState)(h,p);async function c(w){n?.().catch(u=>console.error("Failed to record bookmark visit:",u)),await M({url:t,profileOriginal:o,profileCurrent:l,openTabInProfile:w})}return(0,a.jsxs)(r.ActionPanel,{title:e,children:[(0,a.jsx)(r.Action,{onAction:()=>c(s),title:"Open"}),(0,a.jsx)(r.Action,{title:"Open in Guest Window",icon:{source:r.Icon.Person},onAction:async()=>{n?.().catch(w=>console.error("Failed to record bookmark visit:",w)),await U(t),await(0,r.closeMainWindow)()}}),(0,a.jsxs)(r.ActionPanel.Section,{title:"Open in profile",children:[(0,a.jsx)(r.Action,{onAction:()=>c("profile_current"),title:"Open in Current Profile",shortcut:r.Keyboard.Shortcut.Common.Open}),(0,a.jsx)(r.Action,{onAction:()=>c("profile_original"),title:"Open in Original Profile",shortcut:r.Keyboard.Shortcut.Common.OpenWith})]}),(0,a.jsx)(r.Action.CopyToClipboard,{title:"Copy URL",content:t,shortcut:{modifiers:["cmd"],key:"c"}}),i?(0,a.jsx)(r.ActionPanel.Section,{children:(0,a.jsx)(r.Action,{title:"Reset Ranking",icon:{source:r.Icon.ArrowCounterClockwise},onAction:i,shortcut:{modifiers:["ctrl","shift"],key:"r"}})}):null]})}function ot(e){async function t(){try{await ye(e.tab),await(0,r.closeMainWindow)()}catch(o){throw o instanceof Error?new Error("Issue with tab: '"+e.tab.sourceLine+`'
`+o.message):o}}return(0,a.jsx)(r.ActionPanel.Item,{title:"Open Tab",icon:{source:r.Icon.Eye},onAction:t})}function rt(e){async function t(){await be(e.tab),await(0,r.closeMainWindow)(),e.onTabClosed?.()}return(0,a.jsx)(r.Action,{title:"Close Tab",icon:{source:r.Icon.XMarkCircle},onAction:t,shortcut:{modifiers:["cmd","shift"],key:"w"}})}function it(e){async function t(){try{await Ee(e.tab),await(0,r.closeMainWindow)()}catch(o){throw o instanceof Error?new Error("Issue with tab: '"+e.tab.sourceLine+`'
`+o.message):o}}return(0,a.jsx)(r.Action,{title:"Reload Tab",icon:{source:r.Icon.ArrowClockwise},onAction:t,shortcut:{modifiers:["cmd","shift"],key:"r"}})}function nt({window:e,refreshWindowsListOnFailure:t}){return(0,a.jsx)(r.ActionPanel,{title:e.title,children:(0,a.jsx)(r.Action,{title:"Focus Window",icon:{source:r.Icon.Window},onAction:async()=>{try{await ke(e.id),await(0,r.closeMainWindow)()}catch{await(0,r.showToast)({style:r.Toast.Style.Failure,title:"Failed to focus window",message:"Window may have been closed"}),t&&t()}}})})}var _e=require("@raycast/utils"),m=require("@raycast/api");var y=require("react/jsx-runtime"),F=class{static TabList=st;static TabHistory=at;static WindowList=lt};function Pe(e){let t=["javascript:","data:","about:","chrome:","file:"],o=e.toLowerCase().trim();if(t.some(n=>o.startsWith(n)))return{icon:{source:m.Icon.ExclamationMark,tintColor:m.Color.Orange},isInvalid:!0};try{return new URL(e),{icon:(0,_e.getFavicon)(e),isInvalid:!1}}catch{return{icon:{source:m.Icon.ExclamationMark,tintColor:m.Color.Orange},isInvalid:!0}}}function at({profile:e,entry:{url:t,title:o,id:n},type:i,onVisit:s,onResetRanking:l}){let{icon:c,isInvalid:w}=Pe(t);return(0,y.jsx)(m.List.Item,{id:`${e}-${i}-${n}`,title:o,subtitle:t,icon:c,accessories:w?[{text:"\u26A0\uFE0F Invalid URL - Cannot open",tooltip:"This URL uses an unsupported protocol"}]:void 0,actions:(0,y.jsx)(E.TabHistory,{title:o,url:t,profile:e,onVisit:s,onResetRanking:l})})}function st(e){return(0,y.jsx)(m.List.Item,{title:e.tab.title,subtitle:e.tab.urlWithoutScheme(),keywords:[e.tab.urlWithoutScheme()],actions:(0,y.jsx)(E.TabList,{tab:e.tab,onTabClosed:e.onTabClosed}),icon:e.useOriginalFavicon?e.tab.realFavicon():e.tab.googleFavicon()})}function lt(e){let t=m.Icon.Window;if(e.window.activeTabUrl){let o=Pe(e.window.activeTabUrl);t=o.isInvalid?{source:m.Icon.Globe,tintColor:m.Color.SecondaryText}:o.icon}return(0,y.jsx)(m.List.Item,{title:e.window.title,icon:t,actions:(0,y.jsx)(E.WindowList,{window:e.window,refreshWindowsListOnFailure:e.refreshWindowsListOnFailure})})}var T=require("react");var N=require("@raycast/utils");function Ce(e){if(!e)return{includeTerms:[],excludeTerms:[]};let t=e.trim().split(/\s+/),o=[],n=[];for(let i of t)i.startsWith("\\-")&&i.length>1?o.push(i.slice(1).toLowerCase()):i.startsWith("-")&&i.length>1?n.push(i.slice(1).toLowerCase()):i.length>0&&i!=="-"&&o.push(i.toLowerCase());return{includeTerms:o,excludeTerms:n}}function Re(e,t){let{includeTerms:o,excludeTerms:n}=t,i=o.length===0||o.every(l=>e.includes(l)),s=n.length===0||!n.some(l=>e.includes(l));return i&&s}var V=require("react/jsx-runtime");function xe(e,t){let[o,n]=(0,T.useState)(!1),[i,s]=(0,T.useState)(),{isLoading:l,data:c,revalidate:w}=(0,N.usePromise)(async(f,k)=>{let B=await ie(f);s(void 0),n(B.length===0);let G=Ce(k||"");return G.includeTerms.length===0&&G.excludeTerms.length===0?B:B.filter(X=>{let We=`${X.title.toLowerCase()} ${X.url.toLowerCase()}`;return Re(We,G)})},[e,t],{onError(f){f.message===A?s((0,V.jsx)(we,{})):f.message===v?n(!0):s((0,V.jsx)(he,{}))}}),u=o?[]:c||[],j=(0,T.useMemo)(()=>new Map(u.map((f,k)=>[f.id,k])),[u]),Ie=(0,T.useMemo)(()=>[...u],[u]),{data:Le,visitItem:Fe,resetRanking:Ne}=(0,N.useFrecencySorting)(Ie,{namespace:"bookmarks",key:f=>f.url,sortUnvisited:(f,k)=>(j.get(f.id)??0)-(j.get(k.id)??0)});return{errorView:i,isLoading:l,data:Le,revalidate:w,visitItem:Fe,resetRanking:Ne}}var Q=require("@raycast/api"),Y=require("react"),R=require("@raycast/utils"),W=require("fs");var q=require("react/jsx-runtime");async function ct(){let e=S();if(!(0,W.existsSync)(e))return[{name:"Default",id:"Default"}];let t=await W.promises.readFile(e,"utf-8"),o=JSON.parse(t).profile.info_cache;return Object.entries(o).map(([n,i])=>({name:i.name,id:n}))}function J({onProfileSelected:e}){let[t,o]=(0,R.useCachedState)(h,p),[n,i]=(0,R.useCachedState)(le,[{name:"Person 1",id:p}]),{data:s}=(0,R.useCachedPromise)(ct);return(0,Y.useEffect)(()=>{if(s){i(s);let l=s.some(c=>c.id===t);(!t||!l)&&o(s[0]?.id??p)}},[s]),(0,Y.useEffect)(()=>{t&&e?.(t)},[t]),!n||n.length<2?null:(0,q.jsx)(Q.List.Dropdown,{tooltip:"Select Chrome Profile",value:t,onChange:o,children:n.map(l=>(0,q.jsx)(Q.List.Dropdown.Item,{value:l.id,title:l.name},l.id))})}var Oe=require("@raycast/utils");var D=require("react/jsx-runtime");function Ae(){let[e,t]=(0,ve.useState)(),[o]=(0,Oe.useCachedState)(h,p),{data:n,isLoading:i,errorView:s,revalidate:l,visitItem:c,resetRanking:w}=xe(o,e);return s||(0,D.jsx)(Se.List,{onSearchTextChange:t,isLoading:i,throttle:!0,searchBarAccessory:(0,D.jsx)(J,{onProfileSelected:l}),children:n?.map(u=>(0,D.jsx)(F.TabHistory,{entry:u,profile:o,type:"Bookmark",onVisit:()=>c(u),onResetRanking:()=>w(u)},u.id))})}
