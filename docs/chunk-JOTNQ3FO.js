import{a as fe}from"./chunk-AN7MBSHW.js";import{a as _e}from"./chunk-OXY52CCX.js";import{K as de,M as ge,ea as z,j as K,k as se,l as U,m as pe,ma as J,n as Z,na as b,oa as me,pa as B,q as R,ra as A,xa as ue,za as W}from"./chunk-MMXOUGBB.js";import{Ab as F,Ba as ie,Da as l,Db as H,Eb as ae,Fb as re,Lb as L,Oa as v,Ob as ce,P as Y,Pa as V,Q as O,R as M,Sa as C,Ta as m,Vb as G,W as E,aa as ee,ba as u,bb as s,ca as f,cb as a,cc as D,da as j,db as P,dc as le,ea as _,eb as N,fb as ne,gb as y,ka as x,kb as d,lb as g,mb as h,nb as $,ob as k,pa as te,pb as oe,qb as T,tb as I,ub as r,vb as Q,wb as q,xb as w,zb as S}from"./chunk-2SLO6VUG.js";var xe=["*"],Te=({dt:e})=>`
.p-divider-horizontal {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    margin: ${e("divider.horizontal.margin")};
    padding: ${e("divider.horizontal.padding")};
}

.p-divider-horizontal:before {
    position: absolute;
    display: block;
    inset-block-start: 50%;
    inset-inline-start: 0;
    width: 100%;
    content: "";
    border-block-start: 1px solid ${e("divider.border.color")};
}

.p-divider-horizontal .p-divider-content {
    padding: ${e("divider.horizontal.content.padding")};
}

.p-divider-vertical {
    min-height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    margin: ${e("divider.vertical.margin")};
    padding: ${e("divider.vertical.padding")};
}

.p-divider-vertical:before {
    position: absolute;
    display: block;
    inset-block-start: 0;
    inset-inline-start: 50%;
    height: 100%;
    content: "";
    border-inline-start: 1px solid ${e("divider.border.color")};
}

.p-divider.p-divider-vertical .p-divider-content {
    padding: ${e("divider.vertical.content.padding")};
}

.p-divider-content {
    z-index: 1;
    background: ${e("divider.content.background")};
    color: ${e("divider.content.color")};
}

.p-divider-solid.p-divider-horizontal:before {
    border-block-start-style: solid;
}

.p-divider-solid.p-divider-vertical:before {
    border-inline-start-style: solid;
}

.p-divider-dashed.p-divider-horizontal:before {
    border-block-start-style: dashed;
}

.p-divider-dashed.p-divider-vertical:before {
    border-inline-start-style: dashed;
}

.p-divider-dotted.p-divider-horizontal:before {
    border-block-start-style: dotted;
}

.p-divider-dotted.p-divider-vertical:before {
    border-inline-start-style: dotted;
}

.p-divider-left:dir(rtl),
.p-divider-right:dir(rtl) {
    flex-direction: row-reverse;
}
`,we={root:({props:e})=>({justifyContent:e.layout==="horizontal"?e.align==="center"||e.align===null?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null,alignItems:e.layout==="vertical"?e.align==="center"||e.align===null?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null})},Se={root:({props:e})=>["p-divider p-component","p-divider-"+e.layout,"p-divider-"+e.type,{"p-divider-left":e.layout==="horizontal"&&(!e.align||e.align==="left")},{"p-divider-center":e.layout==="horizontal"&&e.align==="center"},{"p-divider-right":e.layout==="horizontal"&&e.align==="right"},{"p-divider-top":e.layout==="vertical"&&e.align==="top"},{"p-divider-center":e.layout==="vertical"&&(!e.align||e.align==="center")},{"p-divider-bottom":e.layout==="vertical"&&e.align==="bottom"}],content:"p-divider-content"},he=(()=>{class e extends B{name="divider";theme=Te;classes=Se;inlineStyles=we;static \u0275fac=(()=>{let t;return function(i){return(t||(t=_(e)))(i||e)}})();static \u0275prov=O({token:e,factory:e.\u0275fac})}return e})();var Fe=(()=>{class e extends A{style;styleClass;layout="horizontal";type="solid";align;_componentStyle=E(he);get hostClass(){return this.styleClass}static \u0275fac=(()=>{let t;return function(i){return(t||(t=_(e)))(i||e)}})();static \u0275cmp=v({type:e,selectors:[["p-divider"]],hostVars:33,hostBindings:function(n,i){n&2&&(s("aria-orientation",i.layout)("data-pc-name","divider")("role","separator"),y(i.hostClass),P("justify-content",i.layout==="horizontal"?i.align==="center"||i.align===void 0?"center":i.align==="left"?"flex-start":i.align==="right"?"flex-end":null:null)("align-items",i.layout==="vertical"?i.align==="center"||i.align===void 0?"center":i.align==="top"?"flex-start":i.align==="bottom"?"flex-end":null:null),N("p-divider",!0)("p-component",!0)("p-divider-horizontal",i.layout==="horizontal")("p-divider-vertical",i.layout==="vertical")("p-divider-solid",i.type==="solid")("p-divider-dashed",i.type==="dashed")("p-divider-dotted",i.type==="dotted")("p-divider-left",i.layout==="horizontal"&&(!i.align||i.align==="left"))("p-divider-center",i.layout==="horizontal"&&i.align==="center"||i.layout==="vertical"&&(!i.align||i.align==="center"))("p-divider-right",i.layout==="horizontal"&&i.align==="right")("p-divider-top",i.layout==="vertical"&&i.align==="top")("p-divider-bottom",i.layout==="vertical"&&i.align==="bottom"))},inputs:{style:"style",styleClass:"styleClass",layout:"layout",type:"type",align:"align"},features:[L([he]),C],ngContentSelectors:xe,decls:2,vars:0,consts:[[1,"p-divider-content"]],template:function(n,i){n&1&&(Q(),d(0,"div",0),q(1),g())},dependencies:[R,b],encapsulation:2,changeDetection:0})}return e})(),bt=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=V({type:e});static \u0275inj=M({imports:[Fe]})}return e})();var ye=(()=>{class e extends W{pathId;ngOnInit(){this.pathId="url(#"+z()+")"}static \u0275fac=(()=>{let t;return function(i){return(t||(t=_(e)))(i||e)}})();static \u0275cmp=v({type:e,selectors:[["StarIcon"]],features:[C],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M10.9741 13.6721C10.8806 13.6719 10.7886 13.6483 10.7066 13.6033L7.00002 11.6545L3.29345 13.6033C3.19926 13.6539 3.09281 13.6771 2.98612 13.6703C2.87943 13.6636 2.77676 13.6271 2.6897 13.5651C2.60277 13.5014 2.53529 13.4147 2.4948 13.3148C2.45431 13.215 2.44241 13.1058 2.46042 12.9995L3.17881 8.87264L0.167699 5.95324C0.0922333 5.8777 0.039368 5.78258 0.0150625 5.67861C-0.00924303 5.57463 -0.00402231 5.46594 0.030136 5.36477C0.0621323 5.26323 0.122141 5.17278 0.203259 5.10383C0.284377 5.03488 0.383311 4.99023 0.488681 4.97501L4.63087 4.37126L6.48797 0.618832C6.54083 0.530159 6.61581 0.456732 6.70556 0.405741C6.79532 0.35475 6.89678 0.327942 7.00002 0.327942C7.10325 0.327942 7.20471 0.35475 7.29447 0.405741C7.38422 0.456732 7.4592 0.530159 7.51206 0.618832L9.36916 4.37126L13.5114 4.97501C13.6167 4.99023 13.7157 5.03488 13.7968 5.10383C13.8779 5.17278 13.9379 5.26323 13.9699 5.36477C14.0041 5.46594 14.0093 5.57463 13.985 5.67861C13.9607 5.78258 13.9078 5.8777 13.8323 5.95324L10.8212 8.87264L11.532 12.9995C11.55 13.1058 11.5381 13.215 11.4976 13.3148C11.4571 13.4147 11.3896 13.5014 11.3027 13.5651C11.2059 13.632 11.0917 13.6692 10.9741 13.6721ZM7.00002 10.4393C7.09251 10.4404 7.18371 10.4613 7.2675 10.5005L10.2098 12.029L9.65193 8.75036C9.6368 8.6584 9.64343 8.56418 9.6713 8.47526C9.69918 8.38633 9.74751 8.30518 9.81242 8.23832L12.1969 5.94559L8.90298 5.45648C8.81188 5.44198 8.72555 5.406 8.65113 5.35152C8.57671 5.29703 8.51633 5.2256 8.475 5.14314L7.00002 2.1626L5.52503 5.15078C5.4837 5.23324 5.42332 5.30467 5.3489 5.35916C5.27448 5.41365 5.18815 5.44963 5.09705 5.46412L1.80318 5.94559L4.18761 8.23832C4.25252 8.30518 4.30085 8.38633 4.32873 8.47526C4.3566 8.56418 4.36323 8.6584 4.3481 8.75036L3.7902 12.0519L6.73253 10.5234C6.81451 10.4762 6.9058 10.4475 7.00002 10.4393Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(j(),d(0,"svg",0)(1,"g"),h(2,"path",1),g(),d(3,"defs")(4,"clipPath",2),h(5,"rect",3),g()()()),n&2&&(y(i.getClassNames()),s("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),l(),s("clip-path",i.pathId),l(3),a("id",i.pathId))},encapsulation:2})}return e})();var ve=(()=>{class e extends W{pathId;ngOnInit(){this.pathId="url(#"+z()+")"}static \u0275fac=(()=>{let t;return function(i){return(t||(t=_(e)))(i||e)}})();static \u0275cmp=v({type:e,selectors:[["StarFillIcon"]],features:[C],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.9718 5.36453C13.9398 5.26298 13.8798 5.17252 13.7986 5.10356C13.7175 5.0346 13.6186 4.98994 13.5132 4.97472L9.37043 4.37088L7.51307 0.617955C7.46021 0.529271 7.38522 0.455834 7.29545 0.404836C7.20568 0.353838 7.1042 0.327026 7.00096 0.327026C6.89771 0.327026 6.79624 0.353838 6.70647 0.404836C6.6167 0.455834 6.54171 0.529271 6.48885 0.617955L4.63149 4.37088L0.488746 4.97472C0.383363 4.98994 0.284416 5.0346 0.203286 5.10356C0.122157 5.17252 0.0621407 5.26298 0.03014 5.36453C-0.00402286 5.46571 -0.00924428 5.57442 0.0150645 5.67841C0.0393733 5.7824 0.0922457 5.87753 0.167722 5.95308L3.17924 8.87287L2.4684 13.0003C2.45038 13.1066 2.46229 13.2158 2.50278 13.3157C2.54328 13.4156 2.61077 13.5022 2.6977 13.5659C2.78477 13.628 2.88746 13.6644 2.99416 13.6712C3.10087 13.678 3.20733 13.6547 3.30153 13.6042L7.00096 11.6551L10.708 13.6042C10.79 13.6491 10.882 13.6728 10.9755 13.673C11.0958 13.6716 11.2129 13.6343 11.3119 13.5659C11.3988 13.5022 11.4663 13.4156 11.5068 13.3157C11.5473 13.2158 11.5592 13.1066 11.5412 13.0003L10.8227 8.87287L13.8266 5.95308C13.9033 5.87835 13.9577 5.7836 13.9833 5.67957C14.009 5.57554 14.005 5.4664 13.9718 5.36453Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(j(),d(0,"svg",0)(1,"g"),h(2,"path",1),g(),d(3,"defs")(4,"clipPath",2),h(5,"rect",3),g()()()),n&2&&(y(i.getClassNames()),s("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),l(),s("clip-path",i.pathId),l(3),a("id",i.pathId))},encapsulation:2})}return e})();var ke=["onicon"],Oe=["officon"],Me=["cancelicon"],Ee=(e,c)=>({"p-rating-option-active":e,"p-focus-visible":c});function Ve(e,c){if(e&1&&h(0,"span",9),e&2){let t=r(4);a("ngStyle",t.iconOffStyle)("ngClass",t.iconOffClass),s("data-pc-section","offIcon")}}function Le(e,c){if(e&1&&h(0,"StarIcon",10),e&2){let t=r(4);a("ngStyle",t.iconOffStyle)("styleClass","p-rating-icon"),s("data-pc-section","offIcon")}}function De(e,c){if(e&1&&($(0),m(1,Ve,1,3,"span",7)(2,Le,1,3,"StarIcon",8),k()),e&2){let t=r(3);l(),a("ngIf",t.iconOffClass),l(),a("ngIf",!t.iconOffClass)}}function Re(e,c){if(e&1&&h(0,"span",12),e&2){let t=r(4);a("ngStyle",t.iconOnStyle)("ngClass",t.iconOnClass),s("data-pc-section","onIcon")}}function ze(e,c){if(e&1&&h(0,"StarFillIcon",10),e&2){let t=r(4);a("ngStyle",t.iconOnStyle)("styleClass","p-rating-icon p-rating-icon-active"),s("data-pc-section","onIcon")}}function Be(e,c){if(e&1&&($(0),m(1,Re,1,3,"span",11)(2,ze,1,3,"StarFillIcon",8),k()),e&2){let t=r(3);l(),a("ngIf",t.iconOnClass),l(),a("ngIf",!t.iconOnClass)}}function Ae(e,c){if(e&1){let t=T();d(0,"div",3),I("click",function(i){let o=u(t).$implicit,p=r(2);return f(p.onOptionClick(i,o+1))}),d(1,"span",4)(2,"input",5),I("focus",function(i){let o=u(t).$implicit,p=r(2);return f(p.onInputFocus(i,o+1))})("blur",function(i){u(t);let o=r(2);return f(o.onInputBlur(i))})("change",function(i){let o=u(t).$implicit,p=r(2);return f(p.onChange(i,o+1))}),g()(),m(3,De,3,2,"ng-container",6)(4,Be,3,2,"ng-container",6),g()}if(e&2){let t=c.$implicit,n=c.index,i=r(2);a("ngClass",ce(10,Ee,t+1<=i.value,t+1===i.focusedOptionIndex()&&i.isFocusVisibleItem)),l(),s("data-p-hidden-accessible",!0),l(),a("name",i.nameattr)("checked",i.value===0)("disabled",i.disabled)("readonly",i.readonly)("pAutoFocus",i.autofocus),s("aria-label",i.starAriaLabel(t+1)),l(),a("ngIf",!i.value||n>=i.value),l(),a("ngIf",i.value&&n<i.value)}}function je(e,c){if(e&1&&($(0),m(1,Ae,5,13,"ng-template",2),k()),e&2){let t=r();l(),a("ngForOf",t.starsArray)}}function Pe(e,c){e&1&&oe(0)}function Ne(e,c){if(e&1){let t=T();d(0,"span",14),I("click",function(i){let o=u(t).$implicit,p=r(2);return f(p.onOptionClick(i,o+1))}),m(1,Pe,1,0,"ng-container",15),g()}if(e&2){let t=c.index,n=r(2);s("data-pc-section","onIcon"),l(),a("ngTemplateOutlet",n.getIconTemplate(t))}}function Qe(e,c){if(e&1&&m(0,Ne,2,2,"span",13),e&2){let t=r();a("ngForOf",t.starsArray)}}var qe=({dt:e})=>`
.p-rating {
    position: relative;
    display: flex;
    align-items: center;
    gap: ${e("rating.gap")};
}

.p-rating-option {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    outline-color: transparent;
    border-radius: 50%;
    transition: background ${e("rating.transition.duration")}, color ${e("rating.transition.duration")}, border-color ${e("rating.transition.duration")}, outline-color ${e("rating.transition.duration")}, box-shadow ${e("rating.transition.duration")};
}

.p-rating-option.p-focus-visible {
    box-shadow: ${e("rating.focus.ring.shadow")};
    outline: ${e("rating.focus.ring.width")} ${e("rating.focus.ring.style")} ${e("rating.focus.ring.color")};
    outline-offset: ${e("rating.focus.ring.offset")};
}

.p-rating-icon {
    color: ${e("rating.icon.color")};
    transition: background ${e("rating.transition.duration")}, color ${e("rating.transition.duration")}, border-color ${e("rating.transition.duration")}, outline-color ${e("rating.transition.duration")}, box-shadow ${e("rating.transition.duration")};
    font-size: ${e("rating.icon.size")};
    width: ${e("rating.icon.size")};
    height: ${e("rating.icon.size")};
}

.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option:hover .p-rating-icon {
    color: ${e("rating.icon.hover.color")};
}

.p-rating-option-active .p-rating-icon {
    color: ${e("rating.icon.active.color")};
}

/* For PrimeNG */
p-rating.ng-invalid.ng-dirty > .p-rating > .p-rating-icon {
    stroke: ${e("rating.invalid.icon.color")};
}`,He={root:({props:e})=>["p-rating",{"p-readonly":e.readonly,"p-disabled":e.disabled}],option:({instance:e,props:c,value:t})=>["p-rating-option",{"p-rating-option-active":t<=c.modelValue,"p-focus-visible":t===e.focusedOptionIndex()&&e.isFocusVisibleItem}],onIcon:"p-rating-icon p-rating-on-icon",offIcon:"p-rating-icon p-rating-off-icon"},Ce=(()=>{class e extends B{name="rating";theme=qe;classes=He;static \u0275fac=(()=>{let t;return function(i){return(t||(t=_(e)))(i||e)}})();static \u0275prov=O({token:e,factory:e.\u0275fac})}return e})();var Ge={provide:_e,useExisting:Y(()=>be),multi:!0},be=(()=>{class e extends A{disabled;readonly;stars=5;iconOnClass;iconOnStyle;iconOffClass;iconOffStyle;autofocus;onRate=new x;onCancel=new x;onFocus=new x;onBlur=new x;onIconTemplate;offIconTemplate;cancelIconTemplate;templates;value;onModelChange=()=>{};onModelTouched=()=>{};starsArray;isFocusVisibleItem=!0;focusedOptionIndex=te(-1);nameattr;_componentStyle=E(Ce);_onIconTemplate;_offIconTemplate;_cancelIconTemplate;ngOnInit(){super.ngOnInit(),this.nameattr=this.nameattr||z("pn_id_"),this.starsArray=[];for(let t=0;t<this.stars;t++)this.starsArray[t]=t}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"onicon":this._onIconTemplate=t.template;break;case"officon":this._offIconTemplate=t.template;break;case"cancelicon":this._cancelIconTemplate=t.template;break}})}onOptionClick(t,n){if(!this.readonly&&!this.disabled){this.onOptionSelect(t,n),this.isFocusVisibleItem=!1;let i=ge(t.currentTarget,"");i&&de(i)}}onOptionSelect(t,n){!this.readonly&&!this.disabled&&(this.focusedOptionIndex()===n||n===this.value?(this.focusedOptionIndex.set(-1),this.updateModel(t,null)):(this.focusedOptionIndex.set(n),this.updateModel(t,n||null)))}onChange(t,n){this.onOptionSelect(t,n),this.isFocusVisibleItem=!0}onInputBlur(t){this.focusedOptionIndex.set(-1),this.onBlur.emit(t)}onInputFocus(t,n){!this.readonly&&!this.disabled&&(this.focusedOptionIndex.set(n),this.onFocus.emit(t))}updateModel(t,n){this.value=n,this.onModelChange(this.value),this.onModelTouched(),n?this.onRate.emit({originalEvent:t,value:n}):this.onCancel.emit()}starAriaLabel(t){return t===1?this.config.translation.aria.star:this.config.translation.aria.stars.replace(/{star}/g,t)}getIconTemplate(t){return!this.value||t>=this.value?this.offIconTemplate||this._offIconTemplate:this.onIconTemplate||this.offIconTemplate}writeValue(t){this.value=t,this.cd.detectChanges()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}get isCustomIcon(){return!!(this.onIconTemplate||this._onIconTemplate||this.offIconTemplate||this._offIconTemplate||this.cancelIconTemplate||this._cancelIconTemplate)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=_(e)))(i||e)}})();static \u0275cmp=v({type:e,selectors:[["p-rating"]],contentQueries:function(n,i,o){if(n&1&&(w(o,ke,4),w(o,Oe,4),w(o,Me,4),w(o,J,4)),n&2){let p;S(p=F())&&(i.onIconTemplate=p.first),S(p=F())&&(i.offIconTemplate=p.first),S(p=F())&&(i.cancelIconTemplate=p.first),S(p=F())&&(i.templates=p)}},hostAttrs:[1,"p-rating"],hostVars:6,hostBindings:function(n,i){n&2&&(s("data-pc-name","rating")("data-pc-section","root"),N("p-readonly",i.readonly)("p-disabled",i.disabled))},inputs:{disabled:[2,"disabled","disabled",D],readonly:[2,"readonly","readonly",D],stars:[2,"stars","stars",le],iconOnClass:"iconOnClass",iconOnStyle:"iconOnStyle",iconOffClass:"iconOffClass",iconOffStyle:"iconOffStyle",autofocus:[2,"autofocus","autofocus",D]},outputs:{onRate:"onRate",onCancel:"onCancel",onFocus:"onFocus",onBlur:"onBlur"},features:[L([Ge,Ce]),C],decls:3,vars:2,consts:[["customTemplate",""],[4,"ngIf","ngIfElse"],["ngFor","",3,"ngForOf"],[1,"p-rating-option",3,"click","ngClass"],[1,"p-hidden-accessible"],["type","radio","value","0",3,"focus","blur","change","name","checked","disabled","readonly","pAutoFocus"],[4,"ngIf"],["class","p-rating-icon",3,"ngStyle","ngClass",4,"ngIf"],[3,"ngStyle","styleClass",4,"ngIf"],[1,"p-rating-icon",3,"ngStyle","ngClass"],[3,"ngStyle","styleClass"],["class","p-rating-icon p-rating-icon-active",3,"ngStyle","ngClass",4,"ngIf"],[1,"p-rating-icon","p-rating-icon-active",3,"ngStyle","ngClass"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[4,"ngTemplateOutlet"]],template:function(n,i){if(n&1&&m(0,je,2,1,"ng-container",1)(1,Qe,1,1,"ng-template",null,0,G),n&2){let o=H(2);a("ngIf",!i.isCustomIcon)("ngIfElse",o)}},dependencies:[R,K,se,U,Z,pe,ue,ve,ye,b],encapsulation:2,changeDetection:0})}return e})(),Kt=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=V({type:e});static \u0275inj=M({imports:[be,b,b]})}return e})();var Ke=["removeicon"],Ue=["*"];function Ze(e,c){if(e&1){let t=T();d(0,"img",4),I("error",function(i){u(t);let o=r();return f(o.imageError(i))}),g()}if(e&2){let t=r();a("src",t.image,ie)("alt",t.alt)}}function Je(e,c){if(e&1&&h(0,"span",6),e&2){let t=r(2);y(t.icon),a("ngClass","p-chip-icon"),s("data-pc-section","icon")}}function We(e,c){if(e&1&&m(0,Je,1,4,"span",5),e&2){let t=r();a("ngIf",t.icon)}}function Xe(e,c){if(e&1&&(d(0,"div",7),ae(1),g()),e&2){let t=r();s("data-pc-section","label"),l(),re(t.label)}}function Ye(e,c){if(e&1){let t=T();d(0,"span",11),I("click",function(i){u(t);let o=r(3);return f(o.close(i))})("keydown",function(i){u(t);let o=r(3);return f(o.onKeydown(i))}),g()}if(e&2){let t=r(3);y(t.removeIcon),a("ngClass","p-chip-remove-icon"),s("data-pc-section","removeicon")("aria-label",t.removeAriaLabel)}}function et(e,c){if(e&1){let t=T();d(0,"TimesCircleIcon",12),I("click",function(i){u(t);let o=r(3);return f(o.close(i))})("keydown",function(i){u(t);let o=r(3);return f(o.onKeydown(i))}),g()}if(e&2){let t=r(3);y("p-chip-remove-icon"),s("data-pc-section","removeicon")("aria-label",t.removeAriaLabel)}}function tt(e,c){if(e&1&&($(0),m(1,Ye,1,5,"span",9)(2,et,1,4,"TimesCircleIcon",10),k()),e&2){let t=r(2);l(),a("ngIf",t.removeIcon),l(),a("ngIf",!t.removeIcon)}}function it(e,c){}function nt(e,c){e&1&&m(0,it,0,0,"ng-template")}function ot(e,c){if(e&1){let t=T();d(0,"span",13),I("click",function(i){u(t);let o=r(2);return f(o.close(i))})("keydown",function(i){u(t);let o=r(2);return f(o.onKeydown(i))}),m(1,nt,1,0,null,14),g()}if(e&2){let t=r(2);s("data-pc-section","removeicon")("aria-label",t.removeAriaLabel),l(),a("ngTemplateOutlet",t.removeIconTemplate||t._removeIconTemplate)}}function at(e,c){if(e&1&&($(0),m(1,tt,3,2,"ng-container",3)(2,ot,2,3,"span",8),k()),e&2){let t=r();l(),a("ngIf",!t.removeIconTemplate&&!t._removeIconTemplate),l(),a("ngIf",t.removeIconTemplate||t._removeIconTemplate)}}var rt=({dt:e})=>`
.p-chip {
    display: inline-flex;
    align-items: center;
    background: ${e("chip.background")};
    color: ${e("chip.color")};
    border-radius: ${e("chip.border.radius")};
    padding: ${e("chip.padding.y")} ${e("chip.padding.x")};
    gap: ${e("chip.gap")};
}

.p-chip-icon {
    color: ${e("chip.icon.color")};
    font-size: ${e("chip.icon.font.size")};
    width: ${e("chip.icon.size")};
    height: ${e("chip.icon.size")};
}

.p-chip-image {
    border-radius: 50%;
    width: ${e("chip.image.width")};
    height: ${e("chip.image.height")};
    margin-left: calc(-1 * ${e("chip.padding.y")});
}

.p-chip:has(.p-chip-remove-icon) {
    padding-inline-end: ${e("chip.padding.y")};
}

.p-chip:has(.p-chip-image) {
    padding-top: calc(${e("chip.padding.y")} / 2);
    padding-bottom: calc(${e("chip.padding.y")} / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    font-size: ${e("chip.remove.icon.font.size")};
    width: ${e("chip.remove.icon.size")};
    height: ${e("chip.remove.icon.size")};
    color: ${e("chip.remove.icon.color")};
    border-radius: 50%;
    transition: outline-color ${e("chip.transition.duration")}, box-shadow ${e("chip.transition.duration")};
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: ${e("chip.remove.icon.focus.ring.shadow")};
    outline: ${e("chip.remove.icon.focus.ring.width")} ${e("chip.remove.icon.focus.ring.style")} ${e("chip.remove.icon.focus.ring.color")};
    outline-offset: ${e("chip.remove.icon.focus.ring.offset")};
}
`,ct={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},Ie=(()=>{class e extends B{name="chip";theme=rt;classes=ct;static \u0275fac=(()=>{let t;return function(i){return(t||(t=_(e)))(i||e)}})();static \u0275prov=O({token:e,factory:e.\u0275fac})}return e})();var lt=(()=>{class e extends A{label;icon;image;alt;style;styleClass;removable=!1;removeIcon;onRemove=new x;onImageError=new x;visible=!0;get removeAriaLabel(){return this.config.getTranslation(me.ARIA).removeLabel}get chipProps(){return this._chipProps}set chipProps(t){this._chipProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([n,i])=>this[`_${n}`]!==i&&(this[`_${n}`]=i))}_chipProps;_componentStyle=E(Ie);removeIconTemplate;templates;_removeIconTemplate;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"removeicon":this._removeIconTemplate=t.template;break;default:this._removeIconTemplate=t.template;break}})}ngOnChanges(t){if(super.ngOnChanges(t),t.chipProps&&t.chipProps.currentValue){let{currentValue:n}=t.chipProps;n.label!==void 0&&(this.label=n.label),n.icon!==void 0&&(this.icon=n.icon),n.image!==void 0&&(this.image=n.image),n.alt!==void 0&&(this.alt=n.alt),n.style!==void 0&&(this.style=n.style),n.styleClass!==void 0&&(this.styleClass=n.styleClass),n.removable!==void 0&&(this.removable=n.removable),n.removeIcon!==void 0&&(this.removeIcon=n.removeIcon)}}containerClass(){let t="p-chip p-component";return this.styleClass&&(t+=` ${this.styleClass}`),t}close(t){this.visible=!1,this.onRemove.emit(t)}onKeydown(t){(t.key==="Enter"||t.key==="Backspace")&&this.close(t)}imageError(t){this.onImageError.emit(t)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=_(e)))(i||e)}})();static \u0275cmp=v({type:e,selectors:[["p-chip"]],contentQueries:function(n,i,o){if(n&1&&(w(o,Ke,4),w(o,J,4)),n&2){let p;S(p=F())&&(i.removeIconTemplate=p.first),S(p=F())&&(i.templates=p)}},hostVars:9,hostBindings:function(n,i){n&2&&(s("data-pc-name","chip")("aria-label",i.label)("data-pc-section","root"),ne(i.style),y(i.containerClass()),P("display",!i.visible&&"none"))},inputs:{label:"label",icon:"icon",image:"image",alt:"alt",style:"style",styleClass:"styleClass",removable:[2,"removable","removable",D],removeIcon:"removeIcon",chipProps:"chipProps"},outputs:{onRemove:"onRemove",onImageError:"onImageError"},features:[L([Ie]),C,ee],ngContentSelectors:Ue,decls:6,vars:4,consts:[["iconTemplate",""],["class","p-chip-image",3,"src","alt","error",4,"ngIf","ngIfElse"],["class","p-chip-label",4,"ngIf"],[4,"ngIf"],[1,"p-chip-image",3,"error","src","alt"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],[1,"p-chip-label"],["tabindex","0","class","p-chip-remove-icon","role","button",3,"click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","ngClass","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"click","keydown","ngClass"],["tabindex","0","role","button",3,"click","keydown"],["tabindex","0","role","button",1,"p-chip-remove-icon",3,"click","keydown"],[4,"ngTemplateOutlet"]],template:function(n,i){if(n&1&&(Q(),q(0),m(1,Ze,1,2,"img",1)(2,We,1,1,"ng-template",null,0,G)(4,Xe,2,2,"div",2)(5,at,3,2,"ng-container",3)),n&2){let o=H(3);l(),a("ngIf",i.image)("ngIfElse",o),l(3),a("ngIf",i.label),l(),a("ngIf",i.removable)}},dependencies:[R,K,U,Z,fe,b],encapsulation:2,changeDetection:0})}return e})(),pi=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=V({type:e});static \u0275inj=M({imports:[lt,b,b]})}return e})();export{Fe as a,bt as b,be as c,Kt as d,lt as e,pi as f};
