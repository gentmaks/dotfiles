"use strict";var rt=Object.create;var K=Object.defineProperty;var it=Object.getOwnPropertyDescriptor;var nt=Object.getOwnPropertyNames;var at=Object.getPrototypeOf,st=Object.prototype.hasOwnProperty;var lt=(e,t)=>{for(var o in t)K(e,o,{get:t[o],enumerable:!0})},we=(e,t,o,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of nt(t))!st.call(e,i)&&i!==o&&K(e,i,{get:()=>t[i],enumerable:!(r=it(t,i))||r.enumerable});return e};var x=(e,t,o)=>(o=e!=null?rt(at(e)):{},we(t||!e||!e.__esModule?K(o,"default",{value:e,enumerable:!0}):o,e)),ct=e=>we(K({},"__esModule",{value:!0}),e);var Ft={};lt(Ft,{default:()=>tt});module.exports=ct(Ft);var g=require("@raycast/api"),Ze=require("react");var pt=require("@raycast/api");var Ce=x(require("fs"));var G=x(require("fs")),M=x(require("path"));var ye=require("@raycast/api"),Ee=()=>{if(!process.env.HOME)throw new Error("$HOME environment variable is not set.");return M.default.join(process.env.HOME,"Library")},re=(e,t)=>{let{profilePath:o}=(0,ye.getPreferenceValues)(),r;return o?r=M.default.join(o,e):r=M.default.join(Ee(),...Se,t??w,e),r},be=e=>re("History",e),Q=()=>M.default.join(Ee(),..._e),mt=e=>re("Bookmarks",e),dt=e=>re("AccountBookmarks",e);function Te(e){let t=[];return e.type==="folder"?e.children.forEach(o=>{t.push(...Te(o))}):e.type==="url"&&e.url&&t.push({id:e.id,url:e.url,title:e.name,lastVisited:new Date(e.date_added)}),t}var ge=e=>{let t=[];return Object.keys(e.roots).forEach(o=>{let r=e.roots[o],i=Te(r);t.push(...i)}),t},ke=async e=>{let t=dt(e);if(G.default.existsSync(t))try{let i=await G.default.promises.readFile(t,{encoding:"utf-8"}),s=ge(JSON.parse(i));if(s.length>0)return s}catch{}let o=mt(e);if(!G.default.existsSync(o))throw new Error(Y);let r=await G.default.promises.readFile(o,{encoding:"utf-8"});return ge(JSON.parse(r))};var ut=()=>{try{let e=Q(),t=Ce.default.readFileSync(e,"utf-8"),o=JSON.parse(t).profile.info_cache;return o?Object.keys(o)[0]:"Default"}catch{return"Default"}},Se=["Application Support","Google","Chrome"],_e=["Application Support","Google","Chrome","Local State"],w=ut(),_="CHROME_PROFILE_KEY",Re="CHROME_PROFILES_KEY",Pe=`
  # \u{1F6A8}Error: Google Chrome browser is not installed
  ## This extension depends on Google Chrome browser. You must install it to continue.

  If you have [Homebrew](https://brew.sh/) installed then press \u23CE (Enter Key) to install Google Chrome browser.

  [Click here](https://www.google.com/chrome/) if you want to download manually.

  [![Google Chrome](https://www.google.com/chrome/static/images/chrome-logo-m100.svg)]()
`;var xe=`
# \u{1F6A8}Error: Something happened while trying to run your command

[![Google Chrome](https://www.google.com/chrome/static/images/chrome-logo-m100.svg)]()
`,q="An Error Occurred",I="Google Chrome not installed",Y="Google Chrome has no bookmarks.";var ft=require("react/jsx-runtime");var ve=require("react"),f=require("@raycast/api"),ie=require("child_process");var Oe=require("os"),Ae=require("path"),J=require("react/jsx-runtime"),ht=(()=>{try{return(0,ie.execSync)("brew --prefix",{encoding:"utf8"}).trim()}catch{return(0,Oe.cpus)()[0].model.includes("Apple")?"/opt/homebrew":"/usr/local"}})();function Le(){return(0,Ae.join)(ht,"bin/brew")}function wt(e){try{return(0,ie.execSync)(`${Le()} install --cask ${e}`,{maxBuffer:10*1024*1024})}catch(t){let o=t;throw o&&o.code===127?(o.stderr=`Brew executable not found at ${Le()}`,o):t}}function N(){let[e,t]=(0,ve.useState)(!0);return(0,J.jsx)(f.Detail,{actions:(0,J.jsx)(f.ActionPanel,{children:e&&(0,J.jsx)(f.Action,{title:"Install with Homebrew",onAction:async()=>{if(!e)return;let o=new f.Toast({style:f.Toast.Style.Animated,title:"Installing..."});await o.show();try{wt("google-chrome"),await o.hide()}catch{await o.hide(),await(0,f.showToast)(f.Toast.Style.Failure,q,"An unknown error occurred while trying to install")}o.title="Installed! Please go back and try again.",o.style=f.Toast.Style.Success,await o.show(),t(!1)}})}),markdown:Pe})}var D=require("@raycast/api");var Ie=require("react/jsx-runtime");function j(){return(0,D.showToast)(D.Toast.Style.Failure,q,"Something happened while trying to run your command"),(0,Ie.jsx)(D.Detail,{markdown:xe})}var n=require("@raycast/api");var R=require("run-applescript"),F=require("@raycast/api");var Ne=require("@raycast/utils");var C=class e{constructor(t,o,r,i,s,a){this.title=t;this.url=o;this.favicon=r;this.windowsId=i;this.tabIndex=s;this.sourceLine=a}title;url;favicon;windowsId;tabIndex;sourceLine;static TAB_CONTENTS_SEPARATOR="~~~";static parse(t){let o=t.split(this.TAB_CONTENTS_SEPARATOR);return new e(o[0],o[1],o[2],+o[3],+o[4],t)}key(){return`${this.windowsId}${e.TAB_CONTENTS_SEPARATOR}${this.tabIndex}`}urlWithoutScheme(){try{return this.url.replace(/(^\w+:|^)\/\//,"").replace("www.","")}catch{return this.url}}realFavicon(){try{return new URL(this.favicon||"/favicon.ico",this.url).href}catch{return this.favicon||""}}googleFavicon(){try{return(0,Ne.getFavicon)(this.url)}catch{return{source:""}}}};var z=require("@raycast/utils");async function De(e){let t=e?`execute t javascript \xAC
        "document.head.querySelector('link[rel~=icon]') ? document.head.querySelector('link[rel~=icon]').href : '';"`:'""';await X();try{return(await(0,R.runAppleScript)(`
      set _output to ""
      tell application "Google Chrome"
        repeat with w in windows
          set _w_id to get id of w as inches as string
          set _tab_index to 1
          repeat with t in tabs of w
            set _title to get title of t
            set _url to get URL of t
            set _favicon to ${t}
            set _output to (_output & _title & "${C.TAB_CONTENTS_SEPARATOR}" & _url & "${C.TAB_CONTENTS_SEPARATOR}" & _favicon & "${C.TAB_CONTENTS_SEPARATOR}" & _w_id & "${C.TAB_CONTENTS_SEPARATOR}" & _tab_index & "\\n")
            set _tab_index to _tab_index + 1
          end repeat
        end repeat
      end tell
      return _output
  `)).split(`
`).filter(r=>r.length!==0).map(r=>C.parse(r))}catch(o){return o.message.includes(`Can't get application "Google Chrome"`)&&F.LocalStorage.removeItem("is-installed"),await X(),[]}}async function ne({url:e,query:t,profileCurrent:o,profileOriginal:r,openTabInProfile:i}){await X();let s="",a=l=>`
    set profile to quoted form of "${l}"
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

  `;break;case"profile_current":s=a(o);break;case"profile_original":s=a(r);break}try{return await(0,z.runAppleScript)(s),await(0,F.popToRoot)({clearSearchBar:!0}),!0}catch(l){return await(0,z.showFailureToast)(l),!1}}async function Fe(e){await(0,R.runAppleScript)(`
    tell application "Google Chrome"
      activate
      set _wnd to first window where id is ${e.windowsId}
      set index of _wnd to 1
      set active tab index of _wnd to ${e.tabIndex}
    end tell
    return true
  `)}async function He(e){await(0,R.runAppleScript)(`
    tell application "Google Chrome"
      activate
      set _wnd to first window where id is ${e.windowsId}
      set index of _wnd to 1
      set active tab index of _wnd to ${e.tabIndex}
      close active tab of _wnd
    end tell
    return true
  `)}async function Be(e){await(0,R.runAppleScript)(`
    tell application "Google Chrome"
      activate
      set _wnd to first window where id is ${e.windowsId}
      set index of _wnd to 1
      set active tab index of _wnd to ${e.tabIndex}
      tell active tab of _wnd to reload
    end tell
    return true
  `)}var X=async()=>{if(await F.LocalStorage.getItem("is-installed"))return;if(await(0,R.runAppleScript)(`
set isInstalled to false
try
    do shell script "osascript -e 'exists application \\"Google Chrome\\"'"
    set isInstalled to true
end try

return isInstalled`)==="false")throw new Error(I);F.LocalStorage.setItem("is-installed",!0)};async function ae(e){await X(),await(0,R.runAppleScript)(`
    set link to quoted form of "${e}"
    do shell script "open -na 'Google Chrome' --args --guest " & link
  `)}async function We(e){await(0,R.runAppleScript)(`
    tell application "Google Chrome"
      set _wnd to first window where id is ${e}
      set index of _wnd to 1
      activate
    end tell
    return true
  `)}var se=require("@raycast/utils");var m=require("react/jsx-runtime"),H=class{static NewTab=yt;static TabList=Et;static TabHistory=bt;static WindowList=_t};function yt({query:e,url:t}){let{openTabInProfile:o}=(0,n.getPreferenceValues)(),[r]=(0,se.useCachedState)(_,w),i="Open Empty Tab";return e?i=`Search "${e}"`:t&&(i=`Open URL "${t}"`),(0,m.jsx)(n.ActionPanel,{title:"New Tab",children:(0,m.jsx)(n.Action,{onAction:()=>ne({url:t,query:e,profileCurrent:r,openTabInProfile:o}),title:i})})}function Et({tab:e,onTabClosed:t}){return(0,m.jsxs)(n.ActionPanel,{title:e.title,children:[(0,m.jsx)(Tt,{tab:e}),(0,m.jsx)(St,{tab:e}),(0,m.jsx)(n.Action,{title:"Open in Guest Window",icon:{source:n.Icon.Person},onAction:async()=>{try{await ae(e.url),await(0,n.closeMainWindow)()}catch(o){throw o instanceof Error?new Error(o.message):o}}}),(0,m.jsx)(n.Action.CopyToClipboard,{title:"Copy URL",content:e.url}),(0,m.jsx)(n.Action.CopyToClipboard,{title:"Copy Title",content:e.title,shortcut:{modifiers:["cmd","shift"],key:"enter"}}),(0,m.jsx)(kt,{tab:e,onTabClosed:t}),(0,m.jsx)(n.ActionPanel.Section,{children:(0,m.jsx)(n.Action.CreateQuicklink,{quicklink:{link:e.url,name:e.title,application:"Google Chrome"},shortcut:{modifiers:["cmd"],key:"s"}})})]})}function bt({title:e,url:t,profile:o,onVisit:r,onResetRanking:i}){let{openTabInProfile:s}=(0,n.getPreferenceValues)(),[a]=(0,se.useCachedState)(_,w);async function l(p){r?.().catch(d=>console.error("Failed to record bookmark visit:",d)),await ne({url:t,profileOriginal:o,profileCurrent:a,openTabInProfile:p})}return(0,m.jsxs)(n.ActionPanel,{title:e,children:[(0,m.jsx)(n.Action,{onAction:()=>l(s),title:"Open"}),(0,m.jsx)(n.Action,{title:"Open in Guest Window",icon:{source:n.Icon.Person},onAction:async()=>{r?.().catch(p=>console.error("Failed to record bookmark visit:",p)),await ae(t),await(0,n.closeMainWindow)()}}),(0,m.jsxs)(n.ActionPanel.Section,{title:"Open in profile",children:[(0,m.jsx)(n.Action,{onAction:()=>l("profile_current"),title:"Open in Current Profile",shortcut:n.Keyboard.Shortcut.Common.Open}),(0,m.jsx)(n.Action,{onAction:()=>l("profile_original"),title:"Open in Original Profile",shortcut:n.Keyboard.Shortcut.Common.OpenWith})]}),(0,m.jsx)(n.Action.CopyToClipboard,{title:"Copy URL",content:t,shortcut:{modifiers:["cmd"],key:"c"}}),i?(0,m.jsx)(n.ActionPanel.Section,{children:(0,m.jsx)(n.Action,{title:"Reset Ranking",icon:{source:n.Icon.ArrowCounterClockwise},onAction:i,shortcut:{modifiers:["ctrl","shift"],key:"r"}})}):null]})}function Tt(e){async function t(){try{await Fe(e.tab),await(0,n.closeMainWindow)()}catch(o){throw o instanceof Error?new Error("Issue with tab: '"+e.tab.sourceLine+`'
`+o.message):o}}return(0,m.jsx)(n.ActionPanel.Item,{title:"Open Tab",icon:{source:n.Icon.Eye},onAction:t})}function kt(e){async function t(){await He(e.tab),await(0,n.closeMainWindow)(),e.onTabClosed?.()}return(0,m.jsx)(n.Action,{title:"Close Tab",icon:{source:n.Icon.XMarkCircle},onAction:t,shortcut:{modifiers:["cmd","shift"],key:"w"}})}function St(e){async function t(){try{await Be(e.tab),await(0,n.closeMainWindow)()}catch(o){throw o instanceof Error?new Error("Issue with tab: '"+e.tab.sourceLine+`'
`+o.message):o}}return(0,m.jsx)(n.Action,{title:"Reload Tab",icon:{source:n.Icon.ArrowClockwise},onAction:t,shortcut:{modifiers:["cmd","shift"],key:"r"}})}function _t({window:e,refreshWindowsListOnFailure:t}){return(0,m.jsx)(n.ActionPanel,{title:e.title,children:(0,m.jsx)(n.Action,{title:"Focus Window",icon:{source:n.Icon.Window},onAction:async()=>{try{await We(e.id),await(0,n.closeMainWindow)()}catch{await(0,n.showToast)({style:n.Toast.Style.Failure,title:"Failed to focus window",message:"Window may have been closed"}),t&&t()}}})})}var $e=require("@raycast/utils"),h=require("@raycast/api");var v=require("react/jsx-runtime"),L=class{static TabList=Rt;static TabHistory=Ct;static WindowList=Pt};function Ge(e){let t=["javascript:","data:","about:","chrome:","file:"],o=e.toLowerCase().trim();if(t.some(r=>o.startsWith(r)))return{icon:{source:h.Icon.ExclamationMark,tintColor:h.Color.Orange},isInvalid:!0};try{return new URL(e),{icon:(0,$e.getFavicon)(e),isInvalid:!1}}catch{return{icon:{source:h.Icon.ExclamationMark,tintColor:h.Color.Orange},isInvalid:!0}}}function Ct({profile:e,entry:{url:t,title:o,id:r},type:i,onVisit:s,onResetRanking:a}){let{icon:l,isInvalid:p}=Ge(t);return(0,v.jsx)(h.List.Item,{id:`${e}-${i}-${r}`,title:o,subtitle:t,icon:l,accessories:p?[{text:"\u26A0\uFE0F Invalid URL - Cannot open",tooltip:"This URL uses an unsupported protocol"}]:void 0,actions:(0,v.jsx)(H.TabHistory,{title:o,url:t,profile:e,onVisit:s,onResetRanking:a})})}function Rt(e){return(0,v.jsx)(h.List.Item,{title:e.tab.title,subtitle:e.tab.urlWithoutScheme(),keywords:[e.tab.urlWithoutScheme()],actions:(0,v.jsx)(H.TabList,{tab:e.tab,onTabClosed:e.onTabClosed}),icon:e.useOriginalFavicon?e.tab.realFavicon():e.tab.googleFavicon()})}function Pt(e){let t=h.Icon.Window;if(e.window.activeTabUrl){let o=Ge(e.window.activeTabUrl);t=o.isInvalid?{source:h.Icon.Globe,tintColor:h.Color.SecondaryText}:o.icon}return(0,v.jsx)(h.List.Item,{title:e.window.title,icon:t,actions:(0,v.jsx)(H.WindowList,{window:e.window,refreshWindowsListOnFailure:e.refreshWindowsListOnFailure})})}var le=require("react");var Me=require("@raycast/api");var Ue=require("@raycast/utils");function B(e){if(!e)return{includeTerms:[],excludeTerms:[]};let t=e.trim().split(/\s+/),o=[],r=[];for(let i of t)i.startsWith("\\-")&&i.length>1?o.push(i.slice(1).toLowerCase()):i.startsWith("-")&&i.length>1?r.push(i.slice(1).toLowerCase()):i.length>0&&i!=="-"&&o.push(i.toLowerCase());return{includeTerms:o,excludeTerms:r}}function U(e,t){let{includeTerms:o,excludeTerms:r}=t,i=o.length===0||o.every(a=>e.includes(a)),s=r.length===0||!r.some(a=>e.includes(a));return i&&s}var ce=require("react/jsx-runtime");function Ve(e=""){let{useOriginalFavicon:t}=(0,Me.getPreferenceValues)(),[o,r]=(0,le.useState)(),[i,s]=(0,le.useState)(!1),{isLoading:a,data:l}=(0,Ue.usePromise)(async(d,y)=>{let k=await De(d),E=B(y);return r(void 0),s(k.length===0),E.includeTerms.length===0&&E.excludeTerms.length===0?k:k.filter(b=>{try{let S=`${b.title.toLowerCase()} ${b.urlWithoutScheme().toLowerCase()}`;return U(S,E)}catch{let S=`${b.title.toLowerCase()} ${b.url.toLowerCase()}`;return U(S,E)}})},[t,e],{onError(d){d.message===I?r((0,ce.jsx)(N,{})):r((0,ce.jsx)(j,{}))}});return{data:i?[]:l||[],isLoading:a,errorView:o}}var qe=x(require("fs")),P=x(require("@raycast/api")),Je=require("@raycast/utils");var Ke=x(require("node:fs")),Qe=x(require("node:path")),O=require("@raycast/api"),Ye=e=>{let t=!0,o="[Extension Name]...",r="";try{let a=JSON.parse(Ke.readFileSync(Qe.join(O.environment.assetsPath,"..","package.json"),"utf8"));o=`[${a.title}]...`,r=`https://raycast.com/${a.owner||a.author}/${a.name}`,(!a.owner||a.access==="public")&&(t=!1)}catch{}let i=O.environment.isDevelopment||t,s=e instanceof Error?e?.stack||e?.message||"":String(e);return{title:i?"Copy Logs":"Report Error",onAction(a){a.hide(),i?O.Clipboard.copy(s):(0,O.open)(`https://github.com/raycast/extensions/issues/new?&labels=extension%2Cbug&template=extension_bug_report.yml&title=${encodeURIComponent(o)}&extension-url=${encodeURI(r)}&description=${encodeURIComponent(`#### Error:
\`\`\`
${s}
\`\`\`
`)}`)}}};var W=require("react");var je=require("react/jsx-runtime"),xt=(e,t,o)=>{let r=l=>l.replace(/'/g,"''"),i=t.map(l=>`(${e}.title LIKE '%${r(l)}%' OR ${e}.url LIKE '%${r(l)}%')`),s=o.map(l=>`NOT (${e}.title LIKE '%${r(l)}%' OR ${e}.url LIKE '%${r(l)}%')`),a=[...i,...s];return a.length>0?a.join(" AND "):"1=1"},Lt=(e,t,o,r)=>`SELECT id,
            url,
            title,
            datetime(${t} /
                     1000000 +
                     (strftime('%s', '1601-01-01')),
                     'unixepoch',
                     'localtime') as lastVisited
     FROM ${e}
     WHERE ${xt(e,o,r)}
     AND last_visit_time > 0
     ORDER BY ${t} DESC LIMIT 30;`,vt=(e,t)=>{let o=B(t||""),r=Lt("urls","last_visit_time",o.includeTerms,o.excludeTerms),i=be(e);if(!qe.existsSync(i))return{isLoading:!1,data:[],errorView:(0,je.jsx)(N,{})};let[s,a]=(0,W.useState)(!1),[l,p]=(0,W.useState)(0),[d,y]=(0,W.useState)(null);(0,W.useEffect)(()=>()=>{d&&clearTimeout(d)},[d]);let{data:k,isLoading:E,permissionView:b,revalidate:S}=(0,Je.useSQL)(i,r,{onData(){a(!1),p(0),y(null)},onError(c){if(l<1){a(!0),p(l+1);let T=setTimeout(()=>{S(),clearTimeout(T)},1e3);y(T)}else a(!1),p(0),y(null),P.environment.launchType!==P.LaunchType.Background&&P.showToast({style:P.Toast.Style.Failure,title:"Failed to load history",message:c.message,primaryAction:Ye(c)})}});return{data:k,isLoading:E||s,errorView:b,revalidate:S}};function me(e,t){return vt(e,t)}var et=require("@raycast/utils");var At=require("@raycast/api"),It=require("react");var de=require("@raycast/api"),ue=require("react"),V=require("@raycast/utils"),Z=require("fs");var pe=require("react/jsx-runtime");async function Ot(){let e=Q();if(!(0,Z.existsSync)(e))return[{name:"Default",id:"Default"}];let t=await Z.promises.readFile(e,"utf-8"),o=JSON.parse(t).profile.info_cache;return Object.entries(o).map(([r,i])=>({name:i.name,id:r}))}function ee({onProfileSelected:e}){let[t,o]=(0,V.useCachedState)(_,w),[r,i]=(0,V.useCachedState)(Re,[{name:"Person 1",id:w}]),{data:s}=(0,V.useCachedPromise)(Ot);return(0,ue.useEffect)(()=>{if(s){i(s);let a=s.some(l=>l.id===t);(!t||!a)&&o(s[0]?.id??w)}},[s]),(0,ue.useEffect)(()=>{t&&e?.(t)},[t]),!r||r.length<2?null:(0,pe.jsx)(de.List.Dropdown,{tooltip:"Select Chrome Profile",value:t,onChange:o,children:r.map(a=>(0,pe.jsx)(de.List.Dropdown.Item,{value:a.id,title:a.name},a.id))})}var Nt=require("@raycast/utils");var Dt=require("react/jsx-runtime"),Xe=e=>e?e.reduce((t,o)=>{let r=new Date(o.lastVisited).toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),i=t.get(r)??[];return i.push(o),t.set(r,i),t},new Map):new Map;var $=require("react");var te=require("@raycast/utils");var fe=require("react/jsx-runtime");function ze(e,t){let[o,r]=(0,$.useState)(!1),[i,s]=(0,$.useState)(),{isLoading:a,data:l,revalidate:p}=(0,te.usePromise)(async(c,T)=>{let A=await ke(c);s(void 0),r(A.length===0);let oe=B(T||"");return oe.includeTerms.length===0&&oe.excludeTerms.length===0?A:A.filter(he=>{let ot=`${he.title.toLowerCase()} ${he.url.toLowerCase()}`;return U(ot,oe)})},[e,t],{onError(c){c.message===I?s((0,fe.jsx)(N,{})):c.message===Y?r(!0):s((0,fe.jsx)(j,{}))}}),d=o?[]:l||[],y=(0,$.useMemo)(()=>new Map(d.map((c,T)=>[c.id,T])),[d]),k=(0,$.useMemo)(()=>[...d],[d]),{data:E,visitItem:b,resetRanking:S}=(0,te.useFrecencySorting)(k,{namespace:"bookmarks",key:c=>c.url,sortUnvisited:(c,T)=>(y.get(c.id)??0)-(y.get(T.id)??0)});return{errorView:i,isLoading:a,data:E,revalidate:p,visitItem:b,resetRanking:S}}var u=require("react/jsx-runtime");function tt(){let{useOriginalFavicon:e}=(0,g.getPreferenceValues)(),[t,o]=(0,Ze.useState)(""),[r]=(0,et.useCachedState)(_,w),{data:i,isLoading:s}=Ve(t),{data:a=[],isLoading:l,revalidate:p}=me(r,t),{data:d,isLoading:y,revalidate:k,visitItem:E,resetRanking:b}=ze(r,t);return(0,u.jsxs)(g.List,{isLoading:s||l||y,onSearchTextChange:o,throttle:!0,searchBarAccessory:(0,u.jsx)(ee,{onProfileSelected:c=>{p?.(c),k(c)}}),children:[(0,u.jsx)(g.List.Section,{title:"Tabs",children:s?(0,u.jsx)(g.List.Item,{title:"Loading tabs..."},"loading tab list item"):i.length===0?(0,u.jsx)(g.List.Item,{title:"No tabs found"},"empty tab list item"):i.map(c=>(0,u.jsx)(L.TabList,{tab:c,useOriginalFavicon:e},c.key()))}),a.length===0?(0,u.jsx)(g.List.Section,{title:"History",children:(0,u.jsx)(g.List.Item,{title:"No history found"})}):Array.from(Xe(a).entries(),([c,T])=>(0,u.jsx)(g.List.Section,{title:"History "+c,children:T.map(A=>(0,u.jsx)(L.TabHistory,{entry:A,profile:r,type:"History"},A.id))},c)),(0,u.jsx)(g.List.Section,{title:"Bookmarks",children:d.length===0?(0,u.jsx)(g.List.Item,{title:"No bookmarks found"},"empty bookmark list item"):d.map(c=>(0,u.jsx)(L.TabHistory,{entry:c,profile:r,type:"Bookmark",onVisit:()=>E(c),onResetRanking:()=>b(c)},c.id))})]})}
