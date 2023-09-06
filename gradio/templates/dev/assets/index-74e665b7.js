import{SvelteComponentDev as J,init as K,safe_not_equal as Q,dispatch_dev as k,validate_slots as W,svg_element as ee,attr_dev as b,add_location as S,insert_dev as j,append_dev as p,noop as D,detach_dev as B,createEventDispatcher as te,ensure_array_like_dev as ne,element as R,text as I,space as M,toggle_class as U,set_style as V,set_data_dev as x,empty as ie,destroy_each as ve,listen_dev as pe,validate_store as ke,component_subscribe as ye,assign as Le,create_component as N,mount_component as O,transition_in as L,transition_out as P,destroy_component as Z,get_spread_update as Se,get_spread_object as Ee,group_outros as oe,check_outros as se}from"../../../node/dev/svelte-internal.js";import{X as q,S as re}from"./index-0c627992.js";import{B as ae}from"./Button-9bfe2272.js";import{B as ue}from"./BlockLabel-f45b05bb.js";import{E as fe}from"./Empty-3650ab79.js";const ce="Users/peterallen/Projects/gradio/js/icons/src/LineChart.svelte";function A(o){let e,n;const c={c:function(){e=ee("svg"),n=ee("path"),b(n,"fill","currentColor"),b(n,"d","M4 2H2v26a2 2 0 0 0 2 2h26v-2H4v-3h22v-8H4v-4h14V5H4Zm20 17v4H4v-4ZM16 7v4H4V7Z"),S(n,ce,11,1,240),b(e,"xmlns","http://www.w3.org/2000/svg"),b(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),b(e,"aria-hidden","true"),b(e,"role","img"),b(e,"class","iconify iconify--carbon"),b(e,"width","100%"),b(e,"height","100%"),b(e,"preserveAspectRatio","xMidYMid meet"),b(e,"viewBox","0 0 32 32"),S(e,ce,0,0,0)},l:function(t){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(t,s){j(t,e,s),p(e,n)},p:D,i:D,o:D,d:function(t){t&&B(e)}};return k("SvelteRegisterBlock",{block:c,id:A.name,type:"component",source:"",ctx:o}),c}function Pe(o,e){let{$$slots:n={},$$scope:c}=e;W("LineChart",n,[]);const l=[];return Object.keys(e).forEach(t=>{!~l.indexOf(t)&&t.slice(0,2)!=="$$"&&t!=="slot"&&console.warn(`<LineChart> was created with unknown prop '${t}'`)}),[]}class $ extends J{constructor(e){super(e),K(this,e,Pe,A,Q,{}),k("SvelteRegisterComponent",{component:this,tagName:"LineChart",options:e,id:A.name})}}const C="Users/peterallen/Projects/gradio/js/label/static/Label.svelte";function le(o,e,n){const c=o.slice();return c[5]=e[n],c[7]=n,c}function T(o){let e,n=ne(o[0].confidences),c=[];for(let t=0;t<n.length;t+=1)c[t]=Y(le(o,n,t));const l={c:function(){for(let s=0;s<c.length;s+=1)c[s].c();e=ie()},m:function(s,r){for(let a=0;a<c.length;a+=1)c[a]&&c[a].m(s,r);j(s,e,r)},p:function(s,r){if(r&13){n=ne(s[0].confidences);let a;for(a=0;a<n.length;a+=1){const f=le(s,n,a);c[a]?c[a].p(f,r):(c[a]=Y(f),c[a].c(),c[a].m(e.parentNode,e))}for(;a<c.length;a+=1)c[a].d(1);c.length=n.length}},d:function(s){s&&B(e),ve(c,s)}};return k("SvelteRegisterBlock",{block:l,id:T.name,type:"if",source:'(21:1) {#if typeof value === \\"object\\" && value.confidences}',ctx:o}),l}function X(o){let e,n,c,l=Math.round(o[5].confidence*100)+"",t,s;const r={c:function(){e=R("div"),n=M(),c=R("div"),t=I(l),s=I("%"),b(e,"class","line svelte-1o9jpux"),S(e,C,43,7,1095),b(c,"class","confidence svelte-1o9jpux"),S(c,C,44,7,1123)},m:function(f,u){j(f,e,u),j(f,n,u),j(f,c,u),p(c,t),p(c,s)},p:function(f,u){u&1&&l!==(l=Math.round(f[5].confidence*100)+"")&&x(t,l)},d:function(f){f&&(B(e),B(n),B(c))}};return k("SvelteRegisterBlock",{block:r,id:X.name,type:"if",source:"(35:6) {#if value.confidences}",ctx:o}),r}function Y(o){let e,n,c,l,t,s,r=o[5].label+"",a,f,u,d,w,E,h=o[0].confidences&&X(o);function g(){return o[4](o[7],o[5])}const m={c:function(){e=R("div"),n=R("div"),c=R("div"),l=M(),t=R("div"),s=R("div"),a=I(r),f=M(),h&&h.c(),u=M(),b(c,"class","bar svelte-1o9jpux"),V(c,"width",o[5].confidence*100+"%"),S(c,C,39,5,910),b(s,"class","text svelte-1o9jpux"),S(s,C,41,6,1011),b(t,"class","label svelte-1o9jpux"),S(t,C,40,5,985),b(n,"class","inner-wrap svelte-1o9jpux"),S(n,C,38,4,880),b(e,"class","confidence-set group svelte-1o9jpux"),b(e,"data-testid",d=`${o[5].label}-confidence-set`),U(e,"selectable",o[2]),S(e,C,30,3,656)},m:function(y,v){j(y,e,v),p(e,n),p(n,c),p(n,l),p(n,t),p(t,s),p(s,a),p(t,f),h&&h.m(t,null),p(e,u),w||(E=pe(e,"click",g,!1,!1,!1,!1),w=!0)},p:function(y,v){o=y,v&1&&V(c,"width",o[5].confidence*100+"%"),v&1&&r!==(r=o[5].label+"")&&x(a,r),o[0].confidences?h?h.p(o,v):(h=X(o),h.c(),h.m(t,null)):h&&(h.d(1),h=null),v&1&&d!==(d=`${o[5].label}-confidence-set`)&&b(e,"data-testid",d),v&4&&U(e,"selectable",o[2])},d:function(y){y&&B(e),h&&h.d(),w=!1,E()}};return k("SvelteRegisterBlock",{block:m,id:Y.name,type:"each",source:"(22:2) {#each value.confidences as confidence_set, i}",ctx:o}),m}function z(o){let e,n,c=o[0].label+"",l,t,s=typeof o[0]=="object"&&o[0].confidences&&T(o);const r={c:function(){e=R("div"),n=R("div"),l=I(c),t=M(),s&&s.c(),b(n,"class","output-class svelte-1o9jpux"),b(n,"data-testid","label-output-value"),U(n,"no-confidence",!("confidences"in o[0])),V(n,"background-color",o[1]||"transparent"),S(n,C,16,1,223),b(e,"class","container svelte-1o9jpux"),S(e,C,15,0,198)},l:function(f){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(f,u){j(f,e,u),p(e,n),p(n,l),p(e,t),s&&s.m(e,null)},p:function(f,[u]){u&1&&c!==(c=f[0].label+"")&&x(l,c),u&1&&U(n,"no-confidence",!("confidences"in f[0])),u&2&&V(n,"background-color",f[1]||"transparent"),typeof f[0]=="object"&&f[0].confidences?s?s.p(f,u):(s=T(f),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},i:D,o:D,d:function(f){f&&B(e),s&&s.d()}};return k("SvelteRegisterBlock",{block:r,id:z.name,type:"component",source:"",ctx:o}),r}function je(o,e,n){let{$$slots:c={},$$scope:l}=e;W("Label",c,[]);let{value:t}=e;const s=te();let{color:r=void 0}=e,{selectable:a=!1}=e;o.$$.on_mount.push(function(){t===void 0&&!("value"in e||o.$$.bound[o.$$.props.value])&&console.warn("<Label> was created without expected prop 'value'")});const f=["value","color","selectable"];Object.keys(e).forEach(d=>{!~f.indexOf(d)&&d.slice(0,2)!=="$$"&&d!=="slot"&&console.warn(`<Label> was created with unknown prop '${d}'`)});const u=(d,w)=>{s("select",{index:d,value:w.label})};return o.$$set=d=>{"value"in d&&n(0,t=d.value),"color"in d&&n(1,r=d.color),"selectable"in d&&n(2,a=d.selectable)},o.$capture_state=()=>({createEventDispatcher:te,value:t,dispatch:s,color:r,selectable:a}),o.$inject_state=d=>{"value"in d&&n(0,t=d.value),"color"in d&&n(1,r=d.color),"selectable"in d&&n(2,a=d.selectable)},e&&"$$inject"in e&&o.$inject_state(e.$$inject),[t,r,a,s,u]}class de extends J{constructor(e){super(e),K(this,e,je,z,Q,{value:0,color:1,selectable:2}),k("SvelteRegisterComponent",{component:this,tagName:"Label",options:e,id:z.name})}get value(){throw new Error("<Label>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set value(e){throw new Error("<Label>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get color(){throw new Error("<Label>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set color(e){throw new Error("<Label>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get selectable(){throw new Error("<Label>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set selectable(e){throw new Error("<Label>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}function F(o){let e,n;e=new ue({props:{Icon:$,label:o[5],disable:o[6]===!1},$$inline:!0});const c={c:function(){N(e.$$.fragment)},m:function(t,s){O(e,t,s),n=!0},p:function(t,s){const r={};s&32&&(r.label=t[5]),s&64&&(r.disable=t[6]===!1),e.$set(r)},i:function(t){n||(L(e.$$.fragment,t),n=!0)},o:function(t){P(e.$$.fragment,t),n=!1},d:function(t){Z(e,t)}};return k("SvelteRegisterBlock",{block:c,id:F.name,type:"if",source:"(34:1) {#if show_label}",ctx:o}),c}function me(o){let e,n;e=new fe({props:{unpadded_box:!0,$$slots:{default:[he]},$$scope:{ctx:o}},$$inline:!0});const c={c:function(){N(e.$$.fragment)},m:function(t,s){O(e,t,s),n=!0},p:function(t,s){const r={};s&131072&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i:function(t){n||(L(e.$$.fragment,t),n=!0)},o:function(t){P(e.$$.fragment,t),n=!1},d:function(t){Z(e,t)}};return k("SvelteRegisterBlock",{block:c,id:me.name,type:"else",source:"(44:1) {:else}",ctx:o}),c}function be(o){let e,n;e=new de({props:{selectable:o[11],value:o[4],color:o[3]},$$inline:!0}),e.$on("select",o[15]);const c={c:function(){N(e.$$.fragment)},m:function(t,s){O(e,t,s),n=!0},p:function(t,s){const r={};s&2048&&(r.selectable=t[11]),s&16&&(r.value=t[4]),s&8&&(r.color=t[3]),e.$set(r)},i:function(t){n||(L(e.$$.fragment,t),n=!0)},o:function(t){P(e.$$.fragment,t),n=!1},d:function(t){Z(e,t)}};return k("SvelteRegisterBlock",{block:c,id:be.name,type:"if",source:"(37:1) {#if _label !== undefined && _label !== null}",ctx:o}),c}function he(o){let e,n;e=new $({$$inline:!0});const c={c:function(){N(e.$$.fragment)},m:function(t,s){O(e,t,s),n=!0},i:function(t){n||(L(e.$$.fragment,t),n=!0)},o:function(t){P(e.$$.fragment,t),n=!1},d:function(t){Z(e,t)}};return k("SvelteRegisterBlock",{block:c,id:he.name,type:"slot",source:"(45:2) <Empty unpadded_box={true}>",ctx:o}),c}function _e(o){let e,n,c,l,t,s,r;const a=[o[9]];let f={};for(let g=0;g<a.length;g+=1)f=Le(f,a[g]);e=new re({props:f,$$inline:!0});let u=o[10]&&F(o);const d=[be,me],w=[];function E(g,m){return g[13]!==void 0&&g[13]!==null?0:1}l=E(o),t=w[l]=d[l](o);const h={c:function(){N(e.$$.fragment),n=M(),u&&u.c(),c=M(),t.c(),s=ie()},m:function(m,_){O(e,m,_),j(m,n,_),u&&u.m(m,_),j(m,c,_),w[l].m(m,_),j(m,s,_),r=!0},p:function(m,_){const y=_&512?Se(a,[Ee(m[9])]):{};e.$set(y),m[10]?u?(u.p(m,_),_&1024&&L(u,1)):(u=F(m),u.c(),L(u,1),u.m(c.parentNode,c)):u&&(oe(),P(u,1,1,()=>{u=null}),se());let v=l;l=E(m),l===v?w[l].p(m,_):(oe(),P(w[v],1,1,()=>{w[v]=null}),se(),t=w[l],t?t.p(m,_):(t=w[l]=d[l](m),t.c()),L(t,1),t.m(s.parentNode,s))},i:function(m){r||(L(e.$$.fragment,m),L(u),L(t),r=!0)},o:function(m){P(e.$$.fragment,m),P(u),P(t),r=!1},d:function(m){m&&(B(n),B(c),B(s)),Z(e,m),u&&u.d(m),w[l].d(m)}};return k("SvelteRegisterBlock",{block:h,id:_e.name,type:"slot",source:'(23:0) <Block  test_id=\\"label\\"  {visible}  {elem_id}  {elem_classes}  {container}  {scale}  {min_width}  padding={false} >',ctx:o}),h}function G(o){let e,n;e=new ae({props:{test_id:"label",visible:o[2],elem_id:o[0],elem_classes:o[1],container:o[6],scale:o[7],min_width:o[8],padding:!1,$$slots:{default:[_e]},$$scope:{ctx:o}},$$inline:!0});const c={c:function(){N(e.$$.fragment)},l:function(t){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(t,s){O(e,t,s),n=!0},p:function(t,[s]){const r={};s&4&&(r.visible=t[2]),s&1&&(r.elem_id=t[0]),s&2&&(r.elem_classes=t[1]),s&64&&(r.container=t[6]),s&128&&(r.scale=t[7]),s&256&&(r.min_width=t[8]),s&147064&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i:function(t){n||(L(e.$$.fragment,t),n=!0)},o:function(t){P(e.$$.fragment,t),n=!1},d:function(t){Z(e,t)}};return k("SvelteRegisterBlock",{block:c,id:G.name,type:"component",source:"",ctx:o}),c}function Be(o,e,n){let c,l,t;ke(q,"_"),ye(o,q,i=>n(16,t=i));let{$$slots:s={},$$scope:r}=e;W("StaticLabel",s,[]);let{elem_id:a=""}=e,{elem_classes:f=[]}=e,{visible:u=!0}=e,{color:d=void 0}=e,{value:w={}}=e,{label:E=t("label.label")}=e,{container:h=!0}=e,{scale:g=null}=e,{min_width:m=void 0}=e,{loading_status:_}=e,{show_label:y=!0}=e,{selectable:v=!1}=e,{gradio:H}=e;o.$$.on_mount.push(function(){_===void 0&&!("loading_status"in e||o.$$.bound[o.$$.props.loading_status])&&console.warn("<StaticLabel> was created without expected prop 'loading_status'"),H===void 0&&!("gradio"in e||o.$$.bound[o.$$.props.gradio])&&console.warn("<StaticLabel> was created without expected prop 'gradio'")});const we=["elem_id","elem_classes","visible","color","value","label","container","scale","min_width","loading_status","show_label","selectable","gradio"];Object.keys(e).forEach(i=>{!~we.indexOf(i)&&i.slice(0,2)!=="$$"&&i!=="slot"&&console.warn(`<StaticLabel> was created with unknown prop '${i}'`)});const ge=({detail:i})=>H.dispatch("select",i);return o.$$set=i=>{"elem_id"in i&&n(0,a=i.elem_id),"elem_classes"in i&&n(1,f=i.elem_classes),"visible"in i&&n(2,u=i.visible),"color"in i&&n(3,d=i.color),"value"in i&&n(4,w=i.value),"label"in i&&n(5,E=i.label),"container"in i&&n(6,h=i.container),"scale"in i&&n(7,g=i.scale),"min_width"in i&&n(8,m=i.min_width),"loading_status"in i&&n(9,_=i.loading_status),"show_label"in i&&n(10,y=i.show_label),"selectable"in i&&n(11,v=i.selectable),"gradio"in i&&n(12,H=i.gradio)},o.$capture_state=()=>({Label:de,LabelIcon:$,Block:ae,BlockLabel:ue,Empty:fe,StatusTracker:re,_:q,elem_id:a,elem_classes:f,visible:u,color:d,value:w,label:E,container:h,scale:g,min_width:m,loading_status:_,show_label:y,selectable:v,gradio:H,confidences:c,_label:l,$_:t}),o.$inject_state=i=>{"elem_id"in i&&n(0,a=i.elem_id),"elem_classes"in i&&n(1,f=i.elem_classes),"visible"in i&&n(2,u=i.visible),"color"in i&&n(3,d=i.color),"value"in i&&n(4,w=i.value),"label"in i&&n(5,E=i.label),"container"in i&&n(6,h=i.container),"scale"in i&&n(7,g=i.scale),"min_width"in i&&n(8,m=i.min_width),"loading_status"in i&&n(9,_=i.loading_status),"show_label"in i&&n(10,y=i.show_label),"selectable"in i&&n(11,v=i.selectable),"gradio"in i&&n(12,H=i.gradio),"confidences"in i&&n(14,c=i.confidences),"_label"in i&&n(13,l=i._label)},e&&"$$inject"in e&&o.$inject_state(e.$$inject),o.$$.update=()=>{o.$$.dirty&16&&n(14,{confidences:c,label:l}=w,c,(n(13,l),n(4,w))),o.$$.dirty&28672&&H.dispatch("change")},[a,f,u,d,w,E,h,g,m,_,y,v,H,l,c,ge]}class Re extends J{constructor(e){super(e),K(this,e,Be,G,Q,{elem_id:0,elem_classes:1,visible:2,color:3,value:4,label:5,container:6,scale:7,min_width:8,loading_status:9,show_label:10,selectable:11,gradio:12}),k("SvelteRegisterComponent",{component:this,tagName:"StaticLabel",options:e,id:G.name})}get elem_id(){throw new Error("<StaticLabel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set elem_id(e){throw new Error("<StaticLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get elem_classes(){throw new Error("<StaticLabel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set elem_classes(e){throw new Error("<StaticLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get visible(){throw new Error("<StaticLabel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set visible(e){throw new Error("<StaticLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get color(){throw new Error("<StaticLabel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set color(e){throw new Error("<StaticLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get value(){throw new Error("<StaticLabel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set value(e){throw new Error("<StaticLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get label(){throw new Error("<StaticLabel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set label(e){throw new Error("<StaticLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get container(){throw new Error("<StaticLabel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set container(e){throw new Error("<StaticLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get scale(){throw new Error("<StaticLabel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set scale(e){throw new Error("<StaticLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get min_width(){throw new Error("<StaticLabel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set min_width(e){throw new Error("<StaticLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get loading_status(){throw new Error("<StaticLabel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set loading_status(e){throw new Error("<StaticLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get show_label(){throw new Error("<StaticLabel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set show_label(e){throw new Error("<StaticLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get selectable(){throw new Error("<StaticLabel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set selectable(e){throw new Error("<StaticLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get gradio(){throw new Error("<StaticLabel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set gradio(e){throw new Error("<StaticLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const Ze=Re;export{Ze as default};
//# sourceMappingURL=index-74e665b7.js.map