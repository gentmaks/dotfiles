"use strict";var Ve=Object.create;var H=Object.defineProperty;var Ke=Object.getOwnPropertyDescriptor;var Qe=Object.getOwnPropertyNames;var Ye=Object.getPrototypeOf,qe=Object.prototype.hasOwnProperty;var Je=(e,t)=>{for(var o in t)H(e,o,{get:t[o],enumerable:!0})},le=(e,t,o,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Qe(t))!qe.call(e,i)&&i!==o&&H(e,i,{get:()=>t[i],enumerable:!(r=Ke(t,i))||r.enumerable});return e};var I=(e,t,o)=>(o=e!=null?Ve(Ye(e)):{},le(t||!e||!e.__esModule?H(o,"default",{value:e,enumerable:!0}):o,e)),je=e=>le(H({},"__esModule",{value:!0}),e);var Tt={};Je(Tt,{default:()=>Me});module.exports=je(Tt);var D=require("react"),w=require("@raycast/api");var Ne=I(require("fs")),S=I(require("@raycast/api")),Fe=require("@raycast/utils");var ce=I(require("node:fs")),ue=I(require("node:path")),k=require("@raycast/api"),de=e=>{let t=!0,o="[Extension Name]...",r="";try{let s=JSON.parse(ce.readFileSync(ue.join(k.environment.assetsPath,"..","package.json"),"utf8"));o=`[${s.title}]...`,r=`https://raycast.com/${s.owner||s.author}/${s.name}`,(!s.owner||s.access==="public")&&(t=!1)}catch{}let i=k.environment.isDevelopment||t,a=e instanceof Error?e?.stack||e?.message||"":String(e);return{title:i?"Copy Logs":"Report Error",onAction(s){s.hide(),i?k.Clipboard.copy(a):(0,k.open)(`https://github.com/raycast/extensions/issues/new?&labels=extension%2Cbug&template=extension_bug_report.yml&title=${encodeURIComponent(o)}&extension-url=${encodeURI(r)}&description=${encodeURIComponent(`#### Error:
\`\`\`
${a}
\`\`\`
`)}`)}}};var N=require("react");var F=I(require("path"));var me=I(require("fs"));var Xe=()=>{try{let e=M(),t=me.default.readFileSync(e,"utf-8"),o=JSON.parse(t).profile.info_cache;return o?Object.keys(o)[0]:"Default"}catch{return"Default"}},pe=["Application Support","Google","Chrome"],fe=["Application Support","Google","Chrome","Local State"],b=Xe(),v="CHROME_PROFILE_KEY",B="CHROME_PROFILES_KEY",he=`
  # \u{1F6A8}Error: Google Chrome browser is not installed
  ## This extension depends on Google Chrome browser. You must install it to continue.

  If you have [Homebrew](https://brew.sh/) installed then press \u23CE (Enter Key) to install Google Chrome browser.

  [Click here](https://www.google.com/chrome/) if you want to download manually.

  [![Google Chrome](https://www.google.com/chrome/static/images/chrome-logo-m100.svg)]()
`;var we=`
# \u{1F6A8}Error: Something happened while trying to run your command

[![Google Chrome](https://www.google.com/chrome/static/images/chrome-logo-m100.svg)]()
`,G="An Error Occurred",U="Google Chrome not installed";var ge=require("@raycast/api"),ye=()=>{if(!process.env.HOME)throw new Error("$HOME environment variable is not set.");return F.default.join(process.env.HOME,"Library")},ze=(e,t)=>{let{profilePath:o}=(0,ge.getPreferenceValues)(),r;return o?r=F.default.join(o,e):r=F.default.join(ye(),...pe,t??b,e),r},Te=e=>ze("History",e),M=()=>F.default.join(ye(),...fe);var Ze=require("@raycast/api");var et=require("react/jsx-runtime");var Ee=require("react"),m=require("@raycast/api"),j=require("child_process");var Ce=require("os"),Pe=require("path"),V=require("react/jsx-runtime"),tt=(()=>{try{return(0,j.execSync)("brew --prefix",{encoding:"utf8"}).trim()}catch{return(0,Ce.cpus)()[0].model.includes("Apple")?"/opt/homebrew":"/usr/local"}})();function be(){return(0,Pe.join)(tt,"bin/brew")}function ot(e){try{return(0,j.execSync)(`${be()} install --cask ${e}`,{maxBuffer:10*1024*1024})}catch(t){let o=t;throw o&&o.code===127?(o.stderr=`Brew executable not found at ${be()}`,o):t}}function K(){let[e,t]=(0,Ee.useState)(!0);return(0,V.jsx)(m.Detail,{actions:(0,V.jsx)(m.ActionPanel,{children:e&&(0,V.jsx)(m.Action,{title:"Install with Homebrew",onAction:async()=>{if(!e)return;let o=new m.Toast({style:m.Toast.Style.Animated,title:"Installing..."});await o.show();try{ot("google-chrome"),await o.hide()}catch{await o.hide(),await(0,m.showToast)(m.Toast.Style.Failure,G,"An unknown error occurred while trying to install")}o.title="Installed! Please go back and try again.",o.style=m.Toast.Style.Success,await o.show(),t(!1)}})}),markdown:he})}var L=require("@raycast/api");var Re=require("react/jsx-runtime");function _e(){return(0,L.showToast)(L.Toast.Style.Failure,G,"Something happened while trying to run your command"),(0,Re.jsx)(L.Detail,{markdown:we})}var n=require("@raycast/api");var R=require("run-applescript"),A=require("@raycast/api");var Se=require("@raycast/utils");var _=class e{constructor(t,o,r,i,a,s){this.title=t;this.url=o;this.favicon=r;this.windowsId=i;this.tabIndex=a;this.sourceLine=s}title;url;favicon;windowsId;tabIndex;sourceLine;static TAB_CONTENTS_SEPARATOR="~~~";static parse(t){let o=t.split(this.TAB_CONTENTS_SEPARATOR);return new e(o[0],o[1],o[2],+o[3],+o[4],t)}key(){return`${this.windowsId}${e.TAB_CONTENTS_SEPARATOR}${this.tabIndex}`}urlWithoutScheme(){try{return this.url.replace(/(^\w+:|^)\/\//,"").replace("www.","")}catch{return this.url}}realFavicon(){try{return new URL(this.favicon||"/favicon.ico",this.url).href}catch{return this.favicon||""}}googleFavicon(){try{return(0,Se.getFavicon)(this.url)}catch{return{source:""}}}};var Y=require("@raycast/utils");async function xe(e){let t=e?`execute t javascript \xAC
        "document.head.querySelector('link[rel~=icon]') ? document.head.querySelector('link[rel~=icon]').href : '';"`:'""';await Q();try{return(await(0,R.runAppleScript)(`
      set _output to ""
      tell application "Google Chrome"
        repeat with w in windows
          set _w_id to get id of w as inches as string
          set _tab_index to 1
          repeat with t in tabs of w
            set _title to get title of t
            set _url to get URL of t
            set _favicon to ${t}
            set _output to (_output & _title & "${_.TAB_CONTENTS_SEPARATOR}" & _url & "${_.TAB_CONTENTS_SEPARATOR}" & _favicon & "${_.TAB_CONTENTS_SEPARATOR}" & _w_id & "${_.TAB_CONTENTS_SEPARATOR}" & _tab_index & "\\n")
            set _tab_index to _tab_index + 1
          end repeat
        end repeat
      end tell
      return _output
  `)).split(`
`).filter(r=>r.length!==0).map(r=>_.parse(r))}catch(o){return o.message.includes(`Can't get application "Google Chrome"`)&&A.LocalStorage.removeItem("is-installed"),await Q(),[]}}async function X({url:e,query:t,profileCurrent:o,profileOriginal:r,openTabInProfile:i}){await Q();let a="",s=c=>`
    set profile to quoted form of "${c}"
    set link to quoted form of "${e||"about:blank"}"
    do shell script "open -na 'Google Chrome' --args --profile-directory=" & profile & " " & link
  `;switch(i){case"default":a=`
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

  `;break;case"profile_current":a=s(o);break;case"profile_original":a=s(r);break}try{return await(0,Y.runAppleScript)(a),await(0,A.popToRoot)({clearSearchBar:!0}),!0}catch(c){return await(0,Y.showFailureToast)(c),!1}}async function ke(e){await(0,R.runAppleScript)(`
    tell application "Google Chrome"
      activate
      set _wnd to first window where id is ${e.windowsId}
      set index of _wnd to 1
      set active tab index of _wnd to ${e.tabIndex}
    end tell
    return true
  `)}async function ve(e){await(0,R.runAppleScript)(`
    tell application "Google Chrome"
      activate
      set _wnd to first window where id is ${e.windowsId}
      set index of _wnd to 1
      set active tab index of _wnd to ${e.tabIndex}
      close active tab of _wnd
    end tell
    return true
  `)}async function Oe(e){await(0,R.runAppleScript)(`
    tell application "Google Chrome"
      activate
      set _wnd to first window where id is ${e.windowsId}
      set index of _wnd to 1
      set active tab index of _wnd to ${e.tabIndex}
      tell active tab of _wnd to reload
    end tell
    return true
  `)}var Q=async()=>{if(await A.LocalStorage.getItem("is-installed"))return;if(await(0,R.runAppleScript)(`
set isInstalled to false
try
    do shell script "osascript -e 'exists application \\"Google Chrome\\"'"
    set isInstalled to true
end try

return isInstalled`)==="false")throw new Error(U);A.LocalStorage.setItem("is-installed",!0)};async function z(e){await Q(),await(0,R.runAppleScript)(`
    set link to quoted form of "${e}"
    do shell script "open -na 'Google Chrome' --args --guest " & link
  `)}async function Ie(e){await(0,R.runAppleScript)(`
    tell application "Google Chrome"
      set _wnd to first window where id is ${e}
      set index of _wnd to 1
      activate
    end tell
    return true
  `)}var Z=require("@raycast/utils");var l=require("react/jsx-runtime"),E=class{static NewTab=it;static TabList=nt;static TabHistory=st;static WindowList=ut};function it({query:e,url:t}){let{openTabInProfile:o}=(0,n.getPreferenceValues)(),[r]=(0,Z.useCachedState)(v,b),i="Open Empty Tab";return e?i=`Search "${e}"`:t&&(i=`Open URL "${t}"`),(0,l.jsx)(n.ActionPanel,{title:"New Tab",children:(0,l.jsx)(n.Action,{onAction:()=>X({url:t,query:e,profileCurrent:r,openTabInProfile:o}),title:i})})}function nt({tab:e,onTabClosed:t}){return(0,l.jsxs)(n.ActionPanel,{title:e.title,children:[(0,l.jsx)(at,{tab:e}),(0,l.jsx)(ct,{tab:e}),(0,l.jsx)(n.Action,{title:"Open in Guest Window",icon:{source:n.Icon.Person},onAction:async()=>{try{await z(e.url),await(0,n.closeMainWindow)()}catch(o){throw o instanceof Error?new Error(o.message):o}}}),(0,l.jsx)(n.Action.CopyToClipboard,{title:"Copy URL",content:e.url}),(0,l.jsx)(n.Action.CopyToClipboard,{title:"Copy Title",content:e.title,shortcut:{modifiers:["cmd","shift"],key:"enter"}}),(0,l.jsx)(lt,{tab:e,onTabClosed:t}),(0,l.jsx)(n.ActionPanel.Section,{children:(0,l.jsx)(n.Action.CreateQuicklink,{quicklink:{link:e.url,name:e.title,application:"Google Chrome"},shortcut:{modifiers:["cmd"],key:"s"}})})]})}function st({title:e,url:t,profile:o,onVisit:r,onResetRanking:i}){let{openTabInProfile:a}=(0,n.getPreferenceValues)(),[s]=(0,Z.useCachedState)(v,b);async function c(f){r?.().catch(h=>console.error("Failed to record bookmark visit:",h)),await X({url:t,profileOriginal:o,profileCurrent:s,openTabInProfile:f})}return(0,l.jsxs)(n.ActionPanel,{title:e,children:[(0,l.jsx)(n.Action,{onAction:()=>c(a),title:"Open"}),(0,l.jsx)(n.Action,{title:"Open in Guest Window",icon:{source:n.Icon.Person},onAction:async()=>{r?.().catch(f=>console.error("Failed to record bookmark visit:",f)),await z(t),await(0,n.closeMainWindow)()}}),(0,l.jsxs)(n.ActionPanel.Section,{title:"Open in profile",children:[(0,l.jsx)(n.Action,{onAction:()=>c("profile_current"),title:"Open in Current Profile",shortcut:n.Keyboard.Shortcut.Common.Open}),(0,l.jsx)(n.Action,{onAction:()=>c("profile_original"),title:"Open in Original Profile",shortcut:n.Keyboard.Shortcut.Common.OpenWith})]}),(0,l.jsx)(n.Action.CopyToClipboard,{title:"Copy URL",content:t,shortcut:{modifiers:["cmd"],key:"c"}}),i?(0,l.jsx)(n.ActionPanel.Section,{children:(0,l.jsx)(n.Action,{title:"Reset Ranking",icon:{source:n.Icon.ArrowCounterClockwise},onAction:i,shortcut:{modifiers:["ctrl","shift"],key:"r"}})}):null]})}function at(e){async function t(){try{await ke(e.tab),await(0,n.closeMainWindow)()}catch(o){throw o instanceof Error?new Error("Issue with tab: '"+e.tab.sourceLine+`'
`+o.message):o}}return(0,l.jsx)(n.ActionPanel.Item,{title:"Open Tab",icon:{source:n.Icon.Eye},onAction:t})}function lt(e){async function t(){await ve(e.tab),await(0,n.closeMainWindow)(),e.onTabClosed?.()}return(0,l.jsx)(n.Action,{title:"Close Tab",icon:{source:n.Icon.XMarkCircle},onAction:t,shortcut:{modifiers:["cmd","shift"],key:"w"}})}function ct(e){async function t(){try{await Oe(e.tab),await(0,n.closeMainWindow)()}catch(o){throw o instanceof Error?new Error("Issue with tab: '"+e.tab.sourceLine+`'
`+o.message):o}}return(0,l.jsx)(n.Action,{title:"Reload Tab",icon:{source:n.Icon.ArrowClockwise},onAction:t,shortcut:{modifiers:["cmd","shift"],key:"r"}})}function ut({window:e,refreshWindowsListOnFailure:t}){return(0,l.jsx)(n.ActionPanel,{title:e.title,children:(0,l.jsx)(n.Action,{title:"Focus Window",icon:{source:n.Icon.Window},onAction:async()=>{try{await Ie(e.id),await(0,n.closeMainWindow)()}catch{await(0,n.showToast)({style:n.Toast.Style.Failure,title:"Failed to focus window",message:"Window may have been closed"}),t&&t()}}})})}var Le=require("@raycast/utils"),p=require("@raycast/api");var O=require("react/jsx-runtime"),W=class{static TabList=mt;static TabHistory=dt;static WindowList=pt};function Ae(e){let t=["javascript:","data:","about:","chrome:","file:"],o=e.toLowerCase().trim();if(t.some(r=>o.startsWith(r)))return{icon:{source:p.Icon.ExclamationMark,tintColor:p.Color.Orange},isInvalid:!0};try{return new URL(e),{icon:(0,Le.getFavicon)(e),isInvalid:!1}}catch{return{icon:{source:p.Icon.ExclamationMark,tintColor:p.Color.Orange},isInvalid:!0}}}function dt({profile:e,entry:{url:t,title:o,id:r},type:i,onVisit:a,onResetRanking:s}){let{icon:c,isInvalid:f}=Ae(t);return(0,O.jsx)(p.List.Item,{id:`${e}-${i}-${r}`,title:o,subtitle:t,icon:c,accessories:f?[{text:"\u26A0\uFE0F Invalid URL - Cannot open",tooltip:"This URL uses an unsupported protocol"}]:void 0,actions:(0,O.jsx)(E.TabHistory,{title:o,url:t,profile:e,onVisit:a,onResetRanking:s})})}function mt(e){return(0,O.jsx)(p.List.Item,{title:e.tab.title,subtitle:e.tab.urlWithoutScheme(),keywords:[e.tab.urlWithoutScheme()],actions:(0,O.jsx)(E.TabList,{tab:e.tab,onTabClosed:e.onTabClosed}),icon:e.useOriginalFavicon?e.tab.realFavicon():e.tab.googleFavicon()})}function pt(e){let t=p.Icon.Window;if(e.window.activeTabUrl){let o=Ae(e.window.activeTabUrl);t=o.isInvalid?{source:p.Icon.Globe,tintColor:p.Color.SecondaryText}:o.icon}return(0,O.jsx)(p.List.Item,{title:e.window.title,icon:t,actions:(0,O.jsx)(E.WindowList,{window:e.window,refreshWindowsListOnFailure:e.refreshWindowsListOnFailure})})}function q(e){if(!e)return{includeTerms:[],excludeTerms:[]};let t=e.trim().split(/\s+/),o=[],r=[];for(let i of t)i.startsWith("\\-")&&i.length>1?o.push(i.slice(1).toLowerCase()):i.startsWith("-")&&i.length>1?r.push(i.slice(1).toLowerCase()):i.length>0&&i!=="-"&&o.push(i.toLowerCase());return{includeTerms:o,excludeTerms:r}}function ee(e,t){let{includeTerms:o,excludeTerms:r}=t,i=o.length===0||o.every(s=>e.includes(s)),a=r.length===0||!r.some(s=>e.includes(s));return i&&a}var $e=require("react/jsx-runtime"),ft=(e,t,o)=>{let r=c=>c.replace(/'/g,"''"),i=t.map(c=>`(${e}.title LIKE '%${r(c)}%' OR ${e}.url LIKE '%${r(c)}%')`),a=o.map(c=>`NOT (${e}.title LIKE '%${r(c)}%' OR ${e}.url LIKE '%${r(c)}%')`),s=[...i,...a];return s.length>0?s.join(" AND "):"1=1"},ht=(e,t,o,r)=>`SELECT id,
            url,
            title,
            datetime(${t} /
                     1000000 +
                     (strftime('%s', '1601-01-01')),
                     'unixepoch',
                     'localtime') as lastVisited
     FROM ${e}
     WHERE ${ft(e,o,r)}
     AND last_visit_time > 0
     ORDER BY ${t} DESC LIMIT 30;`,wt=(e,t)=>{let o=q(t||""),r=ht("urls","last_visit_time",o.includeTerms,o.excludeTerms),i=Te(e);if(!Ne.existsSync(i))return{isLoading:!1,data:[],errorView:(0,$e.jsx)(K,{})};let[a,s]=(0,N.useState)(!1),[c,f]=(0,N.useState)(0),[h,x]=(0,N.useState)(null);(0,N.useEffect)(()=>()=>{h&&clearTimeout(h)},[h]);let{data:C,isLoading:g,permissionView:y,revalidate:T}=(0,Fe.useSQL)(i,r,{onData(){s(!1),f(0),x(null)},onError(u){if(c<1){s(!0),f(c+1);let P=setTimeout(()=>{T(),clearTimeout(P)},1e3);x(P)}else s(!1),f(0),x(null),S.environment.launchType!==S.LaunchType.Background&&S.showToast({style:S.Toast.Style.Failure,title:"Failed to load history",message:u.message,primaryAction:de(u)})}});return{data:C,isLoading:g||a,errorView:y,revalidate:T}};function We(e,t){return wt(e,t)}var te=require("react");var De=require("@raycast/api");var He=require("@raycast/utils");var oe=require("react/jsx-runtime");function Be(e=""){let{useOriginalFavicon:t}=(0,De.getPreferenceValues)(),[o,r]=(0,te.useState)(),[i,a]=(0,te.useState)(!1),{isLoading:s,data:c}=(0,He.usePromise)(async(h,x)=>{let C=await xe(h),g=q(x);return r(void 0),a(C.length===0),g.includeTerms.length===0&&g.excludeTerms.length===0?C:C.filter(y=>{try{let T=`${y.title.toLowerCase()} ${y.urlWithoutScheme().toLowerCase()}`;return ee(T,g)}catch{let T=`${y.title.toLowerCase()} ${y.url.toLowerCase()}`;return ee(T,g)}})},[t,e],{onError(h){h.message===U?r((0,oe.jsx)(K,{})):r((0,oe.jsx)(_e,{}))}});return{data:i?[]:c||[],isLoading:s,errorView:o}}var ae=require("@raycast/utils");var re=require("@raycast/api"),ie=require("react"),$=require("@raycast/utils"),J=require("fs");var ne=require("react/jsx-runtime");async function gt(){let e=M();if(!(0,J.existsSync)(e))return[{name:"Default",id:"Default"}];let t=await J.promises.readFile(e,"utf-8"),o=JSON.parse(t).profile.info_cache;return Object.entries(o).map(([r,i])=>({name:i.name,id:r}))}function se({onProfileSelected:e}){let[t,o]=(0,$.useCachedState)(v,b),[r,i]=(0,$.useCachedState)(B,[{name:"Person 1",id:b}]),{data:a}=(0,$.useCachedPromise)(gt);return(0,ie.useEffect)(()=>{if(a){i(a);let s=a.some(c=>c.id===t);(!t||!s)&&o(a[0]?.id??b)}},[a]),(0,ie.useEffect)(()=>{t&&e?.(t)},[t]),!r||r.length<2?null:(0,ne.jsx)(re.List.Dropdown,{tooltip:"Select Chrome Profile",value:t,onChange:o,children:r.map(s=>(0,ne.jsx)(re.List.Dropdown.Item,{value:s.id,title:s.name},s.id))})}var Ge=require("url");function Ue(e){let t=e.trim();if(!t)return{type:"search",value:t};if(t.startsWith("http://")||t.startsWith("https://"))try{return new Ge.URL(t),{type:"url",value:t}}catch{return{type:"search",value:t}}if(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(?::\d+)?$/.test(t))return{type:"url",value:`https://${t}`};if(/^localhost(?::\d+)?$/i.test(t))return{type:"url",value:`http://${t}`};if(t.includes(".")&&!/\s/.test(t)&&!t.endsWith(".")){let i=t.split("."),a=i[i.length-1],s=i[0];if(i.length>1&&a.length>=2&&s.length>0)return{type:"url",value:`https://${t}`}}return{type:"search",value:t}}var d=require("react/jsx-runtime");function yt(e,t){if(!t||t.length===0)return[];let o=t.findIndex(r=>r?.profile?.id===e);if(o>0){let[r]=t.splice(o,1);t.unshift(r)}return t}function Me(){let[e,t]=(0,D.useState)(),[o]=(0,ae.useCachedState)(B),[r]=(0,ae.useCachedState)(v,b),[i,a]=(0,D.useState)([]),s=We(r,e),{data:c,isLoading:f,errorView:h}=Be(),{useOriginalFavicon:x}=(0,w.getPreferenceValues)();if((0,D.useEffect)(()=>{if(o&&r){let u=o.find(P=>P?.id===r);u&&s?a([{data:s.data,isLoading:s.isLoading,errorView:s.errorView,revalidate:s.revalidate,profile:u}]):(!s||!u)&&a([])}},[o,r,s.isLoading]),h||i?.some(u=>u.errorView)){let u=i?.find(P=>P.errorView)?.errorView;return h||u}let C=Ue(e||""),g,y,T;return C.value?C.type==="url"?(g=`Open URL "${e}"`,T=w.Icon.Globe,y=(0,d.jsx)(E.NewTab,{url:C.value})):(g=`Search "${e}"`,T=w.Icon.MagnifyingGlass,y=(0,d.jsx)(E.NewTab,{query:e})):(g="Open Empty Tab",T=w.Icon.Plus,y=(0,d.jsx)(E.NewTab,{})),(0,d.jsxs)(w.List,{onSearchTextChange:t,isLoading:f||i?.find(u=>u.isLoading)?.isLoading,searchBarAccessory:(0,d.jsx)(se,{}),children:[(0,d.jsx)(w.List.Section,{title:"New Tab",children:(0,d.jsx)(w.List.Item,{title:g,icon:T,actions:(0,d.jsx)(d.Fragment,{children:y})})},"new-tab"),(0,d.jsx)(w.List.Section,{title:"Open Tabs - All",children:c?.map(u=>(0,d.jsx)(W.TabList,{tab:u,useOriginalFavicon:x},u.key()))},"open-tabs"),yt(r,i).filter(u=>u?.profile?.id).map(u=>(0,d.jsx)(w.List.Section,{title:`History - ${u.profile.name}`,children:u.data?.map(P=>(0,d.jsx)(W.TabHistory,{entry:P,profile:u.profile.id,type:"History"},`${u.profile.id}-${P.id}`))},u.profile.id))]})}
