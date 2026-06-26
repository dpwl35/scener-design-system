var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},s=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,{is:c,defineProperty:l,getOwnPropertyDescriptor:u,getOwnPropertyNames:d,getOwnPropertySymbols:f,getPrototypeOf:ee}=Object,p=globalThis,m=p.trustedTypes,te=m?m.emptyScript:``,ne=p.reactiveElementPolyfillSupport,h=(e,t)=>e,g={toAttribute(e,t){switch(t){case Boolean:e=e?te:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},_=(e,t)=>!c(e,t),v={attribute:!0,type:String,converter:g,reflect:!1,useDefault:!1,hasChanged:_};Symbol.metadata??=Symbol(`metadata`),p.litPropertyMetadata??=new WeakMap;var y=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=v){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&l(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=u(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??v}static _$Ei(){if(this.hasOwnProperty(h(`elementProperties`)))return;let e=ee(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(h(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(h(`properties`))){let e=this.properties,t=[...d(e),...f(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(s(e))}else e!==void 0&&t.push(s(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return o(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?g:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?g:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??_)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};y.elementStyles=[],y.shadowRootOptions={mode:`open`},y[h(`elementProperties`)]=new Map,y[h(`finalized`)]=new Map,ne?.({ReactiveElement:y}),(p.reactiveElementVersions??=[]).push(`2.1.2`);var b=globalThis,x=e=>e,S=b.trustedTypes,C=S?S.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,w=`$lit$`,T=`lit$${Math.random().toFixed(9).slice(2)}$`,E=`?`+T,D=`<${E}>`,O=document,k=()=>O.createComment(``),A=e=>e===null||typeof e!=`object`&&typeof e!=`function`,j=Array.isArray,M=e=>j(e)||typeof e?.[Symbol.iterator]==`function`,N=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,I=/>/g,L=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),R=/'/g,z=/"/g,B=/^(?:script|style|textarea|title)$/i,V=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),H=Symbol.for(`lit-noChange`),U=Symbol.for(`lit-nothing`),W=new WeakMap,G=O.createTreeWalker(O,129);function K(e,t){if(!j(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return C===void 0?t:C.createHTML(t)}var re=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=P;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===P?c[1]===`!--`?o=F:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=L):(B.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=L):o=I:o===L?c[0]===`>`?(o=i??P,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?L:c[3]===`"`?z:R):o===z||o===R?o=L:o===F||o===I?o=P:(o=L,i=void 0);let d=o===L&&e[t+1].startsWith(`/>`)?` `:``;a+=o===P?n+D:l>=0?(r.push(s),n.slice(0,l)+w+n.slice(l)+T+d):n+T+(l===-2?t:d)}return[K(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},q=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=re(t,n);if(this.el=e.createElement(l,r),G.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=G.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(w)){let t=u[o++],n=i.getAttribute(e).split(T),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?ie:r[1]===`?`?ae:r[1]===`@`?oe:Z}),i.removeAttribute(e)}else e.startsWith(T)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(B.test(i.tagName)){let e=i.textContent.split(T),t=e.length-1;if(t>0){i.textContent=S?S.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],k()),G.nextNode(),c.push({type:2,index:++a});i.append(e[t],k())}}}else if(i.nodeType===8)if(i.data===E)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(T,e+1))!==-1;)c.push({type:7,index:a}),e+=T.length-1}a++}}static createElement(e,t){let n=O.createElement(`template`);return n.innerHTML=e,n}};function J(e,t,n=e,r){if(t===H)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=A(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=J(e,i._$AS(e,t.values),i,r)),t}var Y=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??O).importNode(t,!0);G.currentNode=r;let i=G.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new X(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new se(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=G.nextNode(),a++)}return G.currentNode=O,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},X=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=J(this,e,t),A(e)?e===U||e==null||e===``?(this._$AH!==U&&this._$AR(),this._$AH=U):e!==this._$AH&&e!==H&&this._(e):e._$litType$===void 0?e.nodeType===void 0?M(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==U&&A(this._$AH)?this._$AA.nextSibling.data=e:this.T(O.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=q.createElement(K(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Y(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=W.get(e.strings);return t===void 0&&W.set(e.strings,t=new q(e)),t}k(t){j(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(k()),this.O(k()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=x(e).nextSibling;x(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Z=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=U,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=U}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=J(this,e,t,0),a=!A(e)||e!==this._$AH&&e!==H,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=J(this,r[n+o],t,o),s===H&&(s=this._$AH[o]),a||=!A(s)||s!==this._$AH[o],s===U?e=U:e!==U&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},ie=class extends Z{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===U?void 0:e}},ae=class extends Z{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==U)}},oe=class extends Z{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=J(this,e,t,0)??U)===H)return;let n=this._$AH,r=e===U&&n!==U||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==U&&(n===U||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},se=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}},ce=b.litHtmlPolyfillSupport;ce?.(q,X),(b.litHtmlVersions??=[]).push(`3.3.3`);var le=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new X(t.insertBefore(k(),e),e,void 0,n??{})}return i._$AI(e),i},Q=globalThis,$=class extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=le(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return H}};$._$litElement$=!0,$.finalized=!0,Q.litElementHydrateSupport?.({LitElement:$});var ue=Q.litElementPolyfillSupport;ue?.({LitElement:$}),(Q.litElementVersions??=[]).push(`4.2.2`);var de=class extends ${static properties={category:{type:String},variant:{type:String},size:{type:String},fullWidth:{type:Boolean,attribute:`full-width`},loading:{type:Boolean},disabled:{type:Boolean}};_content=[];constructor(){super(),this.category=`primary`,this.variant=`default`,this.size=`medium`,this.fullWidth=!1,this.loading=!1,this.disabled=!1}createRenderRoot(){return this}connectedCallback(){this._content=Array.from(this.childNodes),this.textContent=``,super.connectedCallback()}render(){let e=this.disabled||this.loading;return V`
      <button
        class="scener-button"
        data-category=${this.category}
        data-variant=${this.variant}
        data-size=${this.size}
        ?data-full-width=${this.fullWidth}
        ?disabled=${e}
        aria-busy=${this.loading}
      >
        ${this.loading?V`<span class="scener-button_spinner" aria-hidden="true"></span>`:V`<span class="scener-button_label"></span>`}
      </button>
    `}updated(){if(!this.loading){let e=this.querySelector(`.scener-button_label`);e&&this._content.length&&e.append(...this._content)}}};customElements.define(`scener-button`,de);var fe={exhibition:`전시`,performance:`공연`,popup:`팝업`,film:`영화`},pe={ongoing:`진행중`,upcoming:`예정`,ended:`종료`},me=class extends ${static properties={category:{type:String},status:{type:String},appearance:{type:String},size:{type:String}};constructor(){super(),this.category=void 0,this.status=void 0,this.appearance=`subtle`,this.size=`medium`}createRenderRoot(){return this}render(){let e=!!this.status,t=e?pe[this.status]:this.category?fe[this.category]:``,n=e?this.status:this.category;return V`
      <div
        class="scener-badge"
        data-appearance=${e?`filled`:this.appearance}
        data-key=${n??``}
        data-size=${this.size}
      >
        <span class="scener-badge_dot" aria-hidden="true"></span>
        <span class="scener-badge_label">${t}</span>
      </div>
    `}};customElements.define(`scener-badge`,me);var he=class extends ${static properties={selected:{type:Boolean},size:{type:String}};_content=[];constructor(){super(),this.selected=!1,this.size=`medium`}createRenderRoot(){return this}connectedCallback(){this._content=Array.from(this.childNodes),this.textContent=``,super.connectedCallback()}_handleClick=()=>{this.selected=!this.selected,this.dispatchEvent(new CustomEvent(`scener-chip-toggle`,{detail:{selected:this.selected},bubbles:!0,composed:!0}))};render(){return V`
      <button
        type="button"
        class="scener-chip"
        data-selected=${this.selected}
        data-size=${this.size}
        aria-pressed=${this.selected}
        @click=${this._handleClick}
      >
        #<span class="scener-chip_label"></span>
      </button>
    `}updated(){let e=this.querySelector(`.scener-chip_label`);e&&this._content.length&&!e.hasChildNodes()&&e.append(...this._content.map(e=>e.cloneNode(!0)))}};customElements.define(`scener-chip`,he);var ge=class extends ${static properties={variant:{type:String},label:{type:String},title:{type:String},description:{type:String},actionLabel:{type:String,attribute:`action-label`}};constructor(){super(),this.variant=`simple`,this.label=``,this.title=``,this.description=``,this.actionLabel=`더보기`}createRenderRoot(){return this}_handleAction=()=>{this.dispatchEvent(new CustomEvent(`scener-title-action`,{bubbles:!0,composed:!0}))};render(){return this.variant===`recommendation`?V`
        <div class="scener-title" data-variant="recommendation">
          <div class="scener-title_label">${this.label}</div>
          <div class="scener-title_title">${this.title}</div>
          <div class="scener-title_description">${this.description}</div>
        </div>
      `:this.variant===`withAction`?V`
        <div class="scener-title" data-variant="withAction">
          <div class="scener-title_text">
            <div class="scener-title_label">${this.label}</div>
            <div class="scener-title_title">${this.title}</div>
          </div>
          <scener-button
            category="ghost"
            size="small"
            @click=${this._handleAction}
          >
            ${this.actionLabel}
          </scener-button>
        </div>
      `:V`
      <div class="scener-title" data-variant="simple">
        <div class="scener-title_label">${this.label}</div>
        <div class="scener-title_title">${this.title}</div>
      </div>
    `}};customElements.define(`scener-title`,ge);var _e=class extends ${static properties={imageSrc:{type:String,attribute:`image-src`},category:{type:String},status:{type:String},matchLabel:{type:String,attribute:`match-label`},contentTitle:{type:String,attribute:`content-title`},venue:{type:String},date:{type:String}};constructor(){super(),this.imageSrc=``,this.category=`exhibition`,this.status=`ongoing`,this.matchLabel=``,this.contentTitle=``,this.venue=``,this.date=``}createRenderRoot(){return this}render(){let e=[this.venue,this.date].filter(Boolean).join(` · `);return V`
      <div class="scener-event-card">
        <div class="scener-event-card_image">
          ${this.imageSrc?V`<img src=${this.imageSrc} alt=${this.contentTitle} />`:``}
        </div>

        <div class="scener-event-card_badges">
          <scener-badge
            category=${this.category}
            appearance="outline"
          ></scener-badge>
          <scener-badge status=${this.status}></scener-badge>
        </div>

        <div class="scener-event-card_overlay">
          <scener-title
            variant="recommendation"
            label=${this.matchLabel}
            title=${this.contentTitle}
            description=${e}
          ></scener-title>
        </div>
      </div>
    `}};customElements.define(`scener-event-card`,_e);var ve=class extends ${static properties={items:{type:Array}};constructor(){super(),this.items=[]}createRenderRoot(){return this}render(){return V`
      <div class="scener-event-list">
        ${this.items.map(e=>{let t=[e.venue,e.date].filter(Boolean).join(` · `);return V`
            <div class="scener-event-list_item">
              <div class="scener-event-list_thumbnail">
                ${e.thumbnailSrc?V`<img src=${e.thumbnailSrc} alt=${e.title} />`:``}
              </div>

              <div class="scener-event-list_content">
                <scener-badge
                  category=${e.category}
                  size="small"
                ></scener-badge>
                <div class="scener-event-list_title">${e.title}</div>
                <div class="scener-event-list_meta">${t}</div>
              </div>

              <div
                class="scener-event-list_dday"
                data-urgent=${e.urgent??!1}
              >
                ${e.ddayLabel}
              </div>
            </div>
          `})}
      </div>
    `}};customElements.define(`scener-event-list`,ve);var ye=class extends ${static properties={layout:{type:String},imageSrc:{type:String,attribute:`image-src`},categoryLabel:{type:String,attribute:`category-label`},title:{type:String},author:{type:String},readTime:{type:Number,attribute:`read-time`}};constructor(){super(),this.layout=`card`,this.imageSrc=``,this.categoryLabel=``,this.title=``,this.author=``,this.readTime=0}createRenderRoot(){return this}connectedCallback(){super.connectedCallback()}render(){return V`
      <div class="scener-article-item" data-layout=${this.layout}>
        <div class="scener-article-item_thumbnail">
          ${this.imageSrc?V`<img src=${this.imageSrc} alt=${this.title} />`:``}
        </div>

        <div class="scener-article-item_content">
          <p class="scener-article-item_label">${this.categoryLabel}</p>
          <p class="scener-article-item_title">${this.title}</p>
          <div class="scener-article-item_meta">
            <span class="scener-article-item_author">${this.author}</span>
            <span class="scener-article-item_readtime">${this.readTime}분</span>
          </div>
        </div>
      </div>
    `}};customElements.define(`scener-article-item`,ye);