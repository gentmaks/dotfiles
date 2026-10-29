"use strict";var ve=Object.create;var S=Object.defineProperty;var Ie=Object.getOwnPropertyDescriptor;var Le=Object.getOwnPropertyNames;var Fe=Object.getPrototypeOf,De=Object.prototype.hasOwnProperty;var Ne=(e,t)=>{for(var o in t)S(e,o,{get:t[o],enumerable:!0})},J=(e,t,o,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Le(t))!De.call(e,n)&&n!==o&&S(e,n,{get:()=>t[n],enumerable:!(i=Ie(t,n))||i.enumerable});return e};var b=(e,t,o)=>(o=e!=null?ve(Fe(e)):{},J(t||!e||!e.__esModule?S(o,"default",{value:e,enumerable:!0}):o,e)),We=e=>J(S({},"__esModule",{value:!0}),e);var at={};Ne(at,{default:()=>Re,groupEntriesByDate:()=>xe});module.exports=We(at);var K=require("@raycast/api"),Pe=require("react");var Te=b(require("fs")),w=b(require("@raycast/api")),be=require("@raycast/utils");var q=b(require("node:fs")),j=b(require("node:path")),h=require("@raycast/api"),X=e=>{let t=!0,o="[Extension Name]...",i="";try{let s=JSON.parse(q.readFileSync(j.join(h.environment.assetsPath,"..","package.json"),"utf8"));o=`[${s.title}]...`,i=`https://raycast.com/${s.owner||s.author}/${s.name}`,(!s.owner||s.access==="public")&&(t=!1)}catch{}let n=h.environment.isDevelopment||t,c=e instanceof Error?e?.stack||e?.message||"":String(e);return{title:n?"Copy Logs":"Report Error",onAction(s){s.hide(),n?h.Clipboard.copy(c):(0,h.open)(`https://github.com/raycast/extensions/issues/new?&labels=extension%2Cbug&template=extension_bug_report.yml&title=${encodeURIComponent(o)}&extension-url=${encodeURI(i)}&description=${encodeURIComponent(`#### Error:
\`\`\`
${c}
\`\`\`
`)}`)}}};var C=require("react");var P=b(require("path"));var z=b(require("fs"));var He=()=>{try{let e=O(),t=z.default.readFileSync(e,"utf-8"),o=JSON.parse(t).profile.info_cache;return o?Object.keys(o)[0]:"Default"}catch{return"Default"}},Z=["Application Support","Google","Chrome"],ee=["Application Support","Google","Chrome","Local State"],p=He(),g="CHROME_PROFILE_KEY",te="CHROME_PROFILES_KEY",oe=`
  # \u{1F6A8}Error: Google Chrome browser is not installed
  ## This extension depends on Google Chrome browser. You must install it to continue.

  If you have [Homebrew](https://brew.sh/) installed then press \u23CE (Enter Key) to install Google Chrome browser.

  [Click here](https://www.google.com/chrome/) if you want to download manually.

  [![Google Chrome](https://www.google.com/chrome/static/images/chrome-logo-m100.svg)]()
`;var F="An Error Occurred",re="Google Chrome not installed";var ie=require("@raycast/api"),ne=()=>{if(!process.env.HOME)throw new Error("$HOME environment variable is not set.");return P.default.join(process.env.HOME,"Library")},$e=(e,t)=>{let{profilePath:o}=(0,ie.getPreferenceValues)(),i;return o?i=P.default.join(o,e):i=P.default.join(ne(),...Z,t??p,e),i},se=e=>$e("History",e),O=()=>P.default.join(ne(),...ee);var Be=require("@raycast/api");var Ge=require("react/jsx-runtime");var le=require("react"),m=require("@raycast/api"),D=require("child_process");var ce=require("os"),me=require("path"),A=require("react/jsx-runtime"),Me=(()=>{try{return(0,D.execSync)("brew --prefix",{encoding:"utf8"}).trim()}catch{return(0,ce.cpus)()[0].model.includes("Apple")?"/opt/homebrew":"/usr/local"}})();function ae(){return(0,me.join)(Me,"bin/brew")}function Ue(e){try{return(0,D.execSync)(`${ae()} install --cask ${e}`,{maxBuffer:10*1024*1024})}catch(t){let o=t;throw o&&o.code===127?(o.stderr=`Brew executable not found at ${ae()}`,o):t}}function de(){let[e,t]=(0,le.useState)(!0);return(0,A.jsx)(m.Detail,{actions:(0,A.jsx)(m.ActionPanel,{children:e&&(0,A.jsx)(m.Action,{title:"Install with Homebrew",onAction:async()=>{if(!e)return;let o=new m.Toast({style:m.Toast.Style.Animated,title:"Installing..."});await o.show();try{Ue("google-chrome"),await o.hide()}catch{await o.hide(),await(0,m.showToast)(m.Toast.Style.Failure,F,"An unknown error occurred while trying to install")}o.title="Installed! Please go back and try again.",o.style=m.Toast.Style.Success,await o.show(),t(!1)}})}),markdown:oe})}var N=require("@raycast/api");var Ke=require("react/jsx-runtime");var r=require("@raycast/api");var y=require("run-applescript"),k=require("@raycast/api");var Ve=require("@raycast/utils");var v=require("@raycast/utils");async function W({url:e,query:t,profileCurrent:o,profileOriginal:i,openTabInProfile:n}){await we();let c="",s=l=>`
    set profile to quoted form of "${l}"
    set link to quoted form of "${e||"about:blank"}"
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
                set newTab to make new tab `+(e?`with properties {URL:"${e}"}`:t?'with properties {URL:"https://www.google.com/search?q='+t+'"}':"")+`
            end tell
        end tell
        return true

  `;break;case"profile_current":c=s(o);break;case"profile_original":c=s(i);break}try{return await(0,v.runAppleScript)(c),await(0,k.popToRoot)({clearSearchBar:!0}),!0}catch(l){return await(0,v.showFailureToast)(l),!1}}async function ue(e){await(0,y.runAppleScript)(`
    tell application "Google Chrome"
      activate
      set _wnd to first window where id is ${e.windowsId}
      set index of _wnd to 1
      set active tab index of _wnd to ${e.tabIndex}
    end tell
    return true
  `)}async function pe(e){await(0,y.runAppleScript)(`
    tell application "Google Chrome"
      activate
      set _wnd to first window where id is ${e.windowsId}
      set index of _wnd to 1
      set active tab index of _wnd to ${e.tabIndex}
      close active tab of _wnd
    end tell
    return true
  `)}async function fe(e){await(0,y.runAppleScript)(`
    tell application "Google Chrome"
      activate
      set _wnd to first window where id is ${e.windowsId}
      set index of _wnd to 1
      set active tab index of _wnd to ${e.tabIndex}
      tell active tab of _wnd to reload
    end tell
    return true
  `)}var we=async()=>{if(await k.LocalStorage.getItem("is-installed"))return;if(await(0,y.runAppleScript)(`
set isInstalled to false
try
    do shell script "osascript -e 'exists application \\"Google Chrome\\"'"
    set isInstalled to true
end try

return isInstalled`)==="false")throw new Error(re);k.LocalStorage.setItem("is-installed",!0)};async function H(e){await we(),await(0,y.runAppleScript)(`
    set link to quoted form of "${e}"
    do shell script "open -na 'Google Chrome' --args --guest " & link
  `)}async function he(e){await(0,y.runAppleScript)(`
    tell application "Google Chrome"
      set _wnd to first window where id is ${e}
      set index of _wnd to 1
      activate
    end tell
    return true
  `)}var $=require("@raycast/utils");var a=require("react/jsx-runtime"),_=class{static NewTab=Ye;static TabList=Je;static TabHistory=qe;static WindowList=Ze};function Ye({query:e,url:t}){let{openTabInProfile:o}=(0,r.getPreferenceValues)(),[i]=(0,$.useCachedState)(g,p),n="Open Empty Tab";return e?n=`Search "${e}"`:t&&(n=`Open URL "${t}"`),(0,a.jsx)(r.ActionPanel,{title:"New Tab",children:(0,a.jsx)(r.Action,{onAction:()=>W({url:t,query:e,profileCurrent:i,openTabInProfile:o}),title:n})})}function Je({tab:e,onTabClosed:t}){return(0,a.jsxs)(r.ActionPanel,{title:e.title,children:[(0,a.jsx)(je,{tab:e}),(0,a.jsx)(ze,{tab:e}),(0,a.jsx)(r.Action,{title:"Open in Guest Window",icon:{source:r.Icon.Person},onAction:async()=>{try{await H(e.url),await(0,r.closeMainWindow)()}catch(o){throw o instanceof Error?new Error(o.message):o}}}),(0,a.jsx)(r.Action.CopyToClipboard,{title:"Copy URL",content:e.url}),(0,a.jsx)(r.Action.CopyToClipboard,{title:"Copy Title",content:e.title,shortcut:{modifiers:["cmd","shift"],key:"enter"}}),(0,a.jsx)(Xe,{tab:e,onTabClosed:t}),(0,a.jsx)(r.ActionPanel.Section,{children:(0,a.jsx)(r.Action.CreateQuicklink,{quicklink:{link:e.url,name:e.title,application:"Google Chrome"},shortcut:{modifiers:["cmd"],key:"s"}})})]})}function qe({title:e,url:t,profile:o,onVisit:i,onResetRanking:n}){let{openTabInProfile:c}=(0,r.getPreferenceValues)(),[s]=(0,$.useCachedState)(g,p);async function l(u){i?.().catch(f=>console.error("Failed to record bookmark visit:",f)),await W({url:t,profileOriginal:o,profileCurrent:s,openTabInProfile:u})}return(0,a.jsxs)(r.ActionPanel,{title:e,children:[(0,a.jsx)(r.Action,{onAction:()=>l(c),title:"Open"}),(0,a.jsx)(r.Action,{title:"Open in Guest Window",icon:{source:r.Icon.Person},onAction:async()=>{i?.().catch(u=>console.error("Failed to record bookmark visit:",u)),await H(t),await(0,r.closeMainWindow)()}}),(0,a.jsxs)(r.ActionPanel.Section,{title:"Open in profile",children:[(0,a.jsx)(r.Action,{onAction:()=>l("profile_current"),title:"Open in Current Profile",shortcut:r.Keyboard.Shortcut.Common.Open}),(0,a.jsx)(r.Action,{onAction:()=>l("profile_original"),title:"Open in Original Profile",shortcut:r.Keyboard.Shortcut.Common.OpenWith})]}),(0,a.jsx)(r.Action.CopyToClipboard,{title:"Copy URL",content:t,shortcut:{modifiers:["cmd"],key:"c"}}),n?(0,a.jsx)(r.ActionPanel.Section,{children:(0,a.jsx)(r.Action,{title:"Reset Ranking",icon:{source:r.Icon.ArrowCounterClockwise},onAction:n,shortcut:{modifiers:["ctrl","shift"],key:"r"}})}):null]})}function je(e){async function t(){try{await ue(e.tab),await(0,r.closeMainWindow)()}catch(o){throw o instanceof Error?new Error("Issue with tab: '"+e.tab.sourceLine+`'
`+o.message):o}}return(0,a.jsx)(r.ActionPanel.Item,{title:"Open Tab",icon:{source:r.Icon.Eye},onAction:t})}function Xe(e){async function t(){await pe(e.tab),await(0,r.closeMainWindow)(),e.onTabClosed?.()}return(0,a.jsx)(r.Action,{title:"Close Tab",icon:{source:r.Icon.XMarkCircle},onAction:t,shortcut:{modifiers:["cmd","shift"],key:"w"}})}function ze(e){async function t(){try{await fe(e.tab),await(0,r.closeMainWindow)()}catch(o){throw o instanceof Error?new Error("Issue with tab: '"+e.tab.sourceLine+`'
`+o.message):o}}return(0,a.jsx)(r.Action,{title:"Reload Tab",icon:{source:r.Icon.ArrowClockwise},onAction:t,shortcut:{modifiers:["cmd","shift"],key:"r"}})}function Ze({window:e,refreshWindowsListOnFailure:t}){return(0,a.jsx)(r.ActionPanel,{title:e.title,children:(0,a.jsx)(r.Action,{title:"Focus Window",icon:{source:r.Icon.Window},onAction:async()=>{try{await he(e.id),await(0,r.closeMainWindow)()}catch{await(0,r.showToast)({style:r.Toast.Style.Failure,title:"Failed to focus window",message:"Window may have been closed"}),t&&t()}}})})}var ge=require("@raycast/utils"),d=require("@raycast/api");var E=require("react/jsx-runtime"),I=class{static TabList=tt;static TabHistory=et;static WindowList=ot};function ye(e){let t=["javascript:","data:","about:","chrome:","file:"],o=e.toLowerCase().trim();if(t.some(i=>o.startsWith(i)))return{icon:{source:d.Icon.ExclamationMark,tintColor:d.Color.Orange},isInvalid:!0};try{return new URL(e),{icon:(0,ge.getFavicon)(e),isInvalid:!1}}catch{return{icon:{source:d.Icon.ExclamationMark,tintColor:d.Color.Orange},isInvalid:!0}}}function et({profile:e,entry:{url:t,title:o,id:i},type:n,onVisit:c,onResetRanking:s}){let{icon:l,isInvalid:u}=ye(t);return(0,E.jsx)(d.List.Item,{id:`${e}-${n}-${i}`,title:o,subtitle:t,icon:l,accessories:u?[{text:"\u26A0\uFE0F Invalid URL - Cannot open",tooltip:"This URL uses an unsupported protocol"}]:void 0,actions:(0,E.jsx)(_.TabHistory,{title:o,url:t,profile:e,onVisit:c,onResetRanking:s})})}function tt(e){return(0,E.jsx)(d.List.Item,{title:e.tab.title,subtitle:e.tab.urlWithoutScheme(),keywords:[e.tab.urlWithoutScheme()],actions:(0,E.jsx)(_.TabList,{tab:e.tab,onTabClosed:e.onTabClosed}),icon:e.useOriginalFavicon?e.tab.realFavicon():e.tab.googleFavicon()})}function ot(e){let t=d.Icon.Window;if(e.window.activeTabUrl){let o=ye(e.window.activeTabUrl);t=o.isInvalid?{source:d.Icon.Globe,tintColor:d.Color.SecondaryText}:o.icon}return(0,E.jsx)(d.List.Item,{title:e.window.title,icon:t,actions:(0,E.jsx)(_.WindowList,{window:e.window,refreshWindowsListOnFailure:e.refreshWindowsListOnFailure})})}function Ee(e){if(!e)return{includeTerms:[],excludeTerms:[]};let t=e.trim().split(/\s+/),o=[],i=[];for(let n of t)n.startsWith("\\-")&&n.length>1?o.push(n.slice(1).toLowerCase()):n.startsWith("-")&&n.length>1?i.push(n.slice(1).toLowerCase()):n.length>0&&n!=="-"&&o.push(n.toLowerCase());return{includeTerms:o,excludeTerms:i}}var Ce=require("react/jsx-runtime"),rt=(e,t,o)=>{let i=l=>l.replace(/'/g,"''"),n=t.map(l=>`(${e}.title LIKE '%${i(l)}%' OR ${e}.url LIKE '%${i(l)}%')`),c=o.map(l=>`NOT (${e}.title LIKE '%${i(l)}%' OR ${e}.url LIKE '%${i(l)}%')`),s=[...n,...c];return s.length>0?s.join(" AND "):"1=1"},it=(e,t,o,i)=>`SELECT id,
            url,
            title,
            datetime(${t} /
                     1000000 +
                     (strftime('%s', '1601-01-01')),
                     'unixepoch',
                     'localtime') as lastVisited
     FROM ${e}
     WHERE ${rt(e,o,i)}
     AND last_visit_time > 0
     ORDER BY ${t} DESC LIMIT 30;`,nt=(e,t)=>{let o=Ee(t||""),i=it("urls","last_visit_time",o.includeTerms,o.excludeTerms),n=se(e);if(!Te.existsSync(n))return{isLoading:!1,data:[],errorView:(0,Ce.jsx)(de,{})};let[c,s]=(0,C.useState)(!1),[l,u]=(0,C.useState)(0),[f,T]=(0,C.useState)(null);(0,C.useEffect)(()=>()=>{f&&clearTimeout(f)},[f]);let{data:Se,isLoading:Oe,permissionView:Ae,revalidate:V}=(0,be.useSQL)(n,i,{onData(){s(!1),u(0),T(null)},onError(Q){if(l<1){s(!0),u(l+1);let Y=setTimeout(()=>{V(),clearTimeout(Y)},1e3);T(Y)}else s(!1),u(0),T(null),w.environment.launchType!==w.LaunchType.Background&&w.showToast({style:w.Toast.Style.Failure,title:"Failed to load history",message:Q.message,primaryAction:X(Q)})}});return{data:Se,isLoading:Oe||c,errorView:Ae,revalidate:V}};function _e(e,t){return nt(e,t)}var B=require("@raycast/api"),G=require("react"),x=require("@raycast/utils"),L=require("fs");var M=require("react/jsx-runtime");async function st(){let e=O();if(!(0,L.existsSync)(e))return[{name:"Default",id:"Default"}];let t=await L.promises.readFile(e,"utf-8"),o=JSON.parse(t).profile.info_cache;return Object.entries(o).map(([i,n])=>({name:n.name,id:i}))}function U({onProfileSelected:e}){let[t,o]=(0,x.useCachedState)(g,p),[i,n]=(0,x.useCachedState)(te,[{name:"Person 1",id:p}]),{data:c}=(0,x.useCachedPromise)(st);return(0,G.useEffect)(()=>{if(c){n(c);let s=c.some(l=>l.id===t);(!t||!s)&&o(c[0]?.id??p)}},[c]),(0,G.useEffect)(()=>{t&&e?.(t)},[t]),!i||i.length<2?null:(0,M.jsx)(B.List.Dropdown,{tooltip:"Select Chrome Profile",value:t,onChange:o,children:i.map(s=>(0,M.jsx)(B.List.Dropdown.Item,{value:s.id,title:s.name},s.id))})}var ke=require("@raycast/utils");var R=require("react/jsx-runtime"),xe=e=>e?e.reduce((t,o)=>{let i=new Date(o.lastVisited).toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),n=t.get(i)??[];return n.push(o),t.set(i,n),t},new Map):new Map;function Re(){let[e,t]=(0,Pe.useState)(),[o]=(0,ke.useCachedState)(g,p),{data:i,isLoading:n,errorView:c,revalidate:s}=_e(o,e);if(c)return c;let l=xe(i),u=Array.from(l.keys());return(0,R.jsx)(K.List,{onSearchTextChange:t,isLoading:n,throttle:!0,searchBarAccessory:(0,R.jsx)(U,{onProfileSelected:s}),children:u?.map(f=>(0,R.jsx)(K.List.Section,{title:f,children:l?.get(f)?.map(T=>(0,R.jsx)(I.TabHistory,{entry:T,profile:o,type:"History"},T.id))},f))})}0&&(module.exports={groupEntriesByDate});
