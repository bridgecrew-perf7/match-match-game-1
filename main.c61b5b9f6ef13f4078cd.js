!function(){"use strict";var e={6391:function(e,t,n){n.r(t)},3364:function(e,t,n){n.r(t)},6535:function(e,t,n){n.r(t)},130:function(e,t,n){n.r(t)},838:function(e,t,n){n.r(t)},8315:function(e,t,n){n.r(t)},2906:function(e,t,n){n.r(t)},2575:function(e,t,n){n.r(t)},1757:function(e,t,n){n.r(t)},9386:function(e,t,n){n.r(t)},1713:function(e,t,n){n.r(t)},7048:function(e,t,n){n.r(t)},7492:function(e,t,n){n.r(t)},1136:function(e,t,n){n.r(t)},6274:function(e,t,n){n.r(t)},5830:function(e,t,n){n.r(t)},5898:function(e,t,n){n.r(t)},3531:function(e,t,n){n.r(t)},1702:function(e,t,n){n.r(t)},6106:function(e,t,n){n.r(t)},1306:function(e,t,n){n.r(t)},1908:function(e,t,n){n.r(t)},8124:function(e,t,n){n.r(t)},8962:function(e,t,n){n.r(t)},2178:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;const s=n(4977),i=n(3440),o=n(1006),r=n(8902),a=n(3775),l=n(660);t.App=class{constructor(e){this.rootElement=e,this.main=new o.BaseComponent("main",["main"]),this.header=new s.Header,this.router=new i.Router(this.main.element)}showRegisterPopup(){localStorage.clear(),this.registerPopup=new r.PopupRegister,this.registerPopup.updateHeader=()=>{this.header.updateButtons()},this.rootElement.appendChild(this.registerPopup.element),this.registerPopup.hidePopupCancel=()=>{this.registerPopup&&this.registerPopup.element.remove()}}showSignInPopup(){localStorage.clear(),this.signInPopup=new l.PopupSignIn,this.signInPopup.updateHeader=()=>this.header.updateButtons(),this.rootElement.append(this.signInPopup.element)}render(){this.header.showRegisterPopup=()=>this.showRegisterPopup(),this.header.showSignInPopup=()=>this.showSignInPopup(),this.header.startGame=()=>{this.main.element.innerHTML="",this.main.element.append((new a.Game).element)},this.rootElement.appendChild(this.header.element),this.rootElement.appendChild(this.main.element),this.router.initRouter()}}},9695:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.config=void 0,t.config={START_AFTER:5e3,FLIP_DELAY:700,FLIP_CLASS:"flipped",ANONYMOUS_IMAGE:"./assets/upload-image/user.png"}},3506:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.database=void 0,t.database=new class{init(e,t){return new Promise((n=>{const s=window.indexedDB.open(e,t);s.onupgradeneeded=()=>{var e;this.database=s.result;const t=null===(e=this.database)||void 0===e?void 0:e.createObjectStore("users",{keyPath:"id",autoIncrement:!0});t&&(t.createIndex("score","score"),t.createIndex("name","surname"),t.createIndex("surname","surname"),t.createIndex("email","email",{unique:!0}))},s.onsuccess=()=>{this.database=s.result,n()}}))}updateScore(e){return new Promise((t=>{var n;const s=null===(n=this.database)||void 0===n?void 0:n.transaction("users","readwrite");if(s){const n=s.objectStore("users"),i=n.index("email").get(e.email);i.onsuccess=()=>{n.put(Object.assign(Object.assign({},i.result),e)),t(i.result)}}}))}logIn(e){return new Promise((t=>{var n;const s=null===(n=this.database)||void 0===n?void 0:n.transaction("users","readwrite");if(s){const n=s.objectStore("users").index("email").get(e.email);n.onsuccess=()=>{n.result&&n.result.password===e.password?t(n.result):t(null)}}}))}add(e){return new Promise((t=>{var n;const s=null===(n=this.database)||void 0===n?void 0:n.transaction("users","readwrite");if(s){const n=s.objectStore("users").add(e);n.onsuccess=()=>{t(!0)},n.onerror=()=>{t(!1)}}}))}getAllUsers(){return new Promise((e=>{var t;const n=null===(t=this.database)||void 0===t?void 0:t.transaction("users","readonly");if(n){const t=n.objectStore("users").index("score").openCursor(null,"prev"),s=[];t.onsuccess=()=>{const e=t.result;e&&(s.push(e.value),e.continue())},n.oncomplete=()=>{e(s.slice(0,10))}}}))}}},2810:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Button=void 0;const s=n(1006);n(6391);class i extends s.BaseComponent{constructor(e,t=[],n){super("button",["btn",...t],n),this.type=e,this.styles=t,this.text=n,this.handleButton=()=>{},this.element.setAttribute("type",e),this.element.addEventListener("click",(e=>this.handleButton(e)))}}t.Button=i},3430:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.InputGroup=void 0;const s=n(1006);n(3364);class i extends s.BaseComponent{constructor(e){super("div",["form__input-group"]),this.title=e,this.handleInput=()=>{},this.title=e,this.errorMessage="",this.error=new s.BaseComponent("p",["input-error"],""),this.correctSpan=new s.BaseComponent("span",["form__input-valid"]),this.correctSpan.element.innerHTML='<img src="assets/icons/check.svg" />',this.render()}updateError(e){const t=this.handleInput(e);"string"==typeof t&&(this.errorMessage=String(t),this.element.contains(this.correctSpan.element)&&this.element.removeChild(this.correctSpan.element)),"boolean"==typeof t&&(this.errorMessage="",this.element.appendChild(this.correctSpan.element)),this.error.element.innerHTML=this.errorMessage,this.element.insertAdjacentElement("afterend",this.error.element)}render(){const e=new s.BaseComponent("input",["form__input-control"]);e.element.setAttribute("type","text"),e.element.setAttribute("placeholder",this.title),e.element.addEventListener("input",(e=>this.updateError(e)));const t=new s.BaseComponent("label",["form__input-label"],this.title);this.element.append(e.element,t.element),this.element.insertAdjacentElement("afterend",this.error.element)}}t.InputGroup=i},6607:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Select=void 0;const s=n(1006);n(6535);class i extends s.BaseComponent{constructor(e){super("select",["select"]),this.changeSelect=()=>{},this.selectData=e,this.element.addEventListener("change",(e=>this.changeSelect(e))),this.render()}render(){this.element.setAttribute("name",this.selectData.id),this.element.setAttribute("id",this.selectData.id),this.selectData.options.map((e=>{const t=new s.BaseComponent("option");return e.selected&&t.element.setAttribute("selected",""),t.element.setAttribute("value",e.value),t.element.innerText=e.title,t.element})).forEach(((e,t)=>{0===t&&e.setAttribute("disabled",""),this.element.appendChild(e)}))}}t.Select=i},6079:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.AboutCard=void 0;const s=n(1006);n(130);class i extends s.BaseComponent{constructor(e){super("div",["how-to-play__card","about-card"]),this.cardData=e,this.render()}render(){this.element.innerHTML=`\n      <div class="about-card__content">\n        <div class="about-card__number">\n          <span class="text-24">${this.cardData.number}</span>\n        </div>\n        <div class="about-card__desc">\n          <p class="text-14">${this.cardData.description}</p>\n        </div>\n      </div>\n      <div class="about-card__img">\n        <img src="./assets/how-to-play/${this.cardData.img}" alt="Image ${this.cardData.number}" />\n      </div>\n    `}}t.AboutCard=i},9413:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.AboutContainer=void 0;const s=n(1006),i=n(6079);class o extends s.BaseComponent{constructor(e){super("div",["how-to-play__content"]),e.map((e=>new i.AboutCard(e))).forEach((e=>this.element.appendChild(e.element)))}}t.AboutContainer=o},3244:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.BestPlayersContainer=void 0;const s=n(1006);n(838);class i extends s.BaseComponent{constructor(){super("div",["best-players__block"]),this.persons=[]}addPerson(e){this.persons=e,this.persons.forEach((e=>this.element.appendChild(e.element)))}}t.BestPlayersContainer=i},29:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Player=void 0;const s=n(1006);n(8315);class i extends s.BaseComponent{constructor(e){super("div",["best-players__item","player"]),this.player=e,this.player=e,this.render()}render(){const{name:e,surname:t,email:n,score:s,img:i}=this.player;this.element.innerHTML=`\n      <div class="player__personal">\n        <div class="player__image">\n          <img src="${i||"/assets/upload-image/user.png"}" alt="Player Image">\n        </div>\n        <div>\n          <h3 class="text-14">${e} ${t}</h3>\n          <a href="mailto:${n}" class="player__email text-12">${n}</a>\n        </div>\n      </div>\n      <div class="player__score">\n        <p class="text-14">Score: <span class="score">${s}</span></p>\n      </div>\n    `}}t.Player=i},4128:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Card=void 0;const s=n(1006);n(2906);const i=n(9695);class o extends s.BaseComponent{constructor(e){super("div",["card-container"]),this.image=e,this.image=e,this.card=new s.BaseComponent("div",["card"]),this.cardFront=new s.BaseComponent("div",["card__front"]),this.cardBack=new s.BaseComponent("div",["card__back"]),this.render()}success(){this.element.classList.add("card-success")}error(e=!1){this.element.classList.toggle("card-error",e)}flipToBack(){return this.flip(!0)}flipToFront(){return this.flip()}flip(e=!1){return new Promise((t=>{this.element.classList.toggle(i.config.FLIP_CLASS,e),this.element.addEventListener("transitionend",(()=>t()),{once:!0})}))}render(){this.cardFront.element.setAttribute("style",`background-image: url('./assets/game/images/${this.image}')`),this.card.element.append(this.cardFront.element,this.cardBack.element),this.element.appendChild(this.card.element)}}t.Card=o},8799:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.CardField=void 0;const s=n(1006),i=n(9695),o=n(1159);n(2575);class r extends s.BaseComponent{constructor(){super("div",["cards-field"]),this.cards=[],this.TYPE=o.getFromLocalStorage("difficulty","4"),this.element.classList.add(`cards-field-${this.TYPE}`)}clear(){this.cards=[],this.element.innerHTML=""}addCards(e){this.cards=e,this.cards.forEach((e=>this.element.append(e.element))),setTimeout((()=>{this.cards.forEach((e=>e.flipToBack()))}),i.config.START_AFTER)}}t.CardField=r},7660:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.GameTimer=void 0;const s=n(1006);n(1757);class i extends s.BaseComponent{constructor(){super("div",["game-timer"]),this.timer={min:0,sec:0},this.span=new s.BaseComponent("span",["text-36"]),this.render()}gameTimer(){this.timer.sec++,60===this.timer.sec&&(this.timer.min++,this.timer.sec=0),this.span.element.innerText=`${this.timeFormat(this.timer.min)}:${this.timeFormat(this.timer.sec)}`}startTrack(){this.interval=setInterval((()=>this.gameTimer()),1e3)}stopTimer(){return this.interval&&clearInterval(this.interval),this.timer}timeFormat(e){if(e||this.timer)return e<10?`0${e}`:`${e}`;throw new Error("Timer is not defined")}render(){this.span.element.innerText="00:00",this.element.appendChild(this.span.element)}}t.GameTimer=i},6047:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.HeaderLogo=void 0;const s=n(1006);n(9386);class i extends s.BaseComponent{constructor(){super("div",["header__logo"]);const e=new s.BaseComponent("img");e.element.setAttribute("src","assets/logo.svg"),this.element.appendChild(e.element)}}t.HeaderLogo=i},9065:function(e,t,n){var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(i,o){function r(e){try{l(s.next(e))}catch(e){o(e)}}function a(e){try{l(s.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.HeaderNav=void 0;const i=n(1006);n(1713);class o extends i.BaseComponent{constructor(){super("nav",["header__nav","nav"]),this.data=[],this.ul=new i.BaseComponent("ul",["nav__list"]),this.items=[],this.getNavbarData()}getNavbarData(){return s(this,void 0,void 0,(function*(){const e=yield fetch("./navbar.json"),t=yield e.json();this.data=t,this.updateActive(),this.render()}))}updateActive(){const e=window.location.hash.split("#/").join("");this.data=this.data.map((t=>(t.url===e?t.active=!0:t.active=!1,t))),this.render()}render(){this.items=this.data.map((e=>{const t=new i.BaseComponent("li",["nav__item"]);return t.element.classList.add(e.active?"nav__item--active":"a"),t.element.innerHTML=`\n        <a href="#/${e.url}" class="nav__link">\n            <img src="assets/icons/${e.img}.svg" class="nav__item-icon" alt="">\n            <span class="nav__item-title text-12">${e.title}</span>\n        </a>\n      `,t})),this.ul.element.innerHTML="",this.items.forEach((e=>{this.ul.element.appendChild(e.element)})),this.element.appendChild(this.ul.element)}}t.HeaderNav=o},4977:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0;const s=n(1006);n(7048);const i=n(6047),o=n(9065),r=n(7860);class a extends s.BaseComponent{constructor(){super("header",["header"]),this.showRegisterPopup=()=>{},this.showSignInPopup=()=>{},this.updateButtons=()=>{},this.startGame=()=>{},this.headerLogo=new i.HeaderLogo,this.headerNav=new o.HeaderNav,this.headerProfile=new r.HeaderProfile,window.addEventListener("hashchange",(()=>{this.headerProfile.stopGame(),this.headerNav.updateActive()})),this.render()}render(){const e=new s.BaseComponent("div",["header__container","container-fluid"]);this.headerProfile.showRegisterPopup=()=>this.showRegisterPopup(),this.headerProfile.showSignInPopup=()=>this.showSignInPopup(),this.headerProfile.startGame=()=>this.startGame(),this.updateButtons=()=>this.headerProfile.render(),e.element.appendChild(this.headerLogo.element),e.element.appendChild(this.headerNav.element),e.element.appendChild(this.headerProfile.element),this.element.appendChild(e.element)}}t.Header=a},7860:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.HeaderProfile=void 0;const s=n(1006),i=n(2810),o=n(9695);n(7492);class r extends s.BaseComponent{constructor(){super("div",["header__profile","profile"]),this.showRegisterPopup=()=>{},this.showSignInPopup=()=>{},this.startGame=()=>{},this.image=new Image,this.isGameStated=!1,this.buttonStart=new i.Button("button",["btn","profile__btn"],"start game"),this.buttonStart.handleButton=()=>{this.isGameStated=!0,this.startGame(),this.render()},this.buttonStop=new i.Button("button",["btn","profile__btn"],"stop game"),this.buttonStop.handleButton=()=>{this.stopGame(),window.location.hash="",window.location.hash="#/"},this.buttonRegister=new i.Button("button",["profile__btn"],"register new player"),this.buttonRegister.handleButton=()=>this.showRegisterPopup(),this.buttonSignIn=new i.Button("button",["profile__btn"],"Sign In"),this.buttonSignIn.handleButton=()=>this.showSignInPopup(),this.buttonLogOut=new i.Button("button",["profile__btn"],"Log out"),this.buttonLogOut.handleButton=()=>{localStorage.removeItem("user"),this.render()},this.image.classList.add("profile__img"),this.render()}stopGame(){this.isGameStated=!1,this.render()}render(){var e;this.element.innerHTML="",this.user=null;const t=localStorage.getItem("user");t&&(this.user=JSON.parse(t));const n=this.user?[this.buttonLogOut.element]:[this.buttonRegister.element,this.buttonSignIn.element],s=this.isGameStated?[this.buttonStop.element]:[this.buttonStart.element,...n];this.element.append(...this.user?[...s]:[...n]),this.image.src=(null===(e=this.user)||void 0===e?void 0:e.img)||o.config.ANONYMOUS_IMAGE,this.user&&this.element.appendChild(this.image)}}t.HeaderProfile=r},5280:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.RegisterButtons=void 0;const s=n(1006),i=n(2810);n(1136);class o extends s.BaseComponent{constructor(){super("div",["form__buttons"]),this.hidePopupCancel=()=>{},this.addUser=new i.Button("submit",["btn-primary"],"add user"),this.addUser.element.setAttribute("disabled","");const e=new i.Button("button",["btn-lightblue"],"cancel");e.handleButton=()=>{this.hidePopupCancel()},this.element.append(this.addUser.element,e.element)}toggleDisabled(e){this.addUser.element.toggleAttribute("disabled",e)}}t.RegisterButtons=o},1650:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.RegisterContainer=void 0;const s=n(1006),i=n(1569),o=n(1779),r=n(5280);n(6274);class a extends s.BaseComponent{constructor(e,t="register"){super("div",["popup__form"]),this.state=e,this.type=t,this.hidePopupCancel=()=>{},this.updateHeader=()=>{},this.submitForm=()=>{},this.state=e;const n=new i.RegisterUpload;n.getImg=e=>{this.state.img=e},this.registerButtons=new r.RegisterButtons,this.registerButtons.hidePopupCancel=()=>this.hidePopupCancel();const a=new o.RegisterInputs(this.state,this.type);a.checkInputs=()=>this.checkInputs();const l=new s.BaseComponent("div",["form__content"]);l.element.append(..."register"===this.type?[a.element,n.element]:[a.element]);const c=new s.BaseComponent("form",["form"]);c.element.append(l.element,this.registerButtons.element),c.element.addEventListener("submit",(e=>{e.preventDefault(),this.submitForm()})),this.element.appendChild(c.element)}checkInputs(){if("register"===this.type){const{name:e,surname:t,email:n,password:s}=this.state;""!==e&&""!==t&&""!==n&&""!==s?this.registerButtons.toggleDisabled(!1):this.registerButtons.toggleDisabled(!0)}else{const{email:e,password:t}=this.state;""!==e&&""!==t?this.registerButtons.toggleDisabled(!1):this.registerButtons.toggleDisabled(!0)}}}t.RegisterContainer=a},1779:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.RegisterInputs=void 0;const s=n(1006),i=n(6446),o=n(6690),r=n(3430);n(5830);const a=n(1350);class l extends s.BaseComponent{constructor(e,t){super("div",["form__inputs"]),this.state=e,this.type=t,this.checkInputs=()=>{},this.userNameValidation=(e,t)=>{const{value:n}=e.target,s=o.isUsernameValid(n,t);return this.state[t]=!0===s?n:"",this.checkInputs(),s},this.emailValidation=e=>{const{value:t}=e.target,n=i.isValidEmail(t);return this.state.email=!0===n?t:"",this.checkInputs(),n},this.passwordValidation=e=>{const{value:t}=e.target,n=a.isValidPassword(t);return this.state.password=!0===n?t:"",this.checkInputs(),n},this.state=e,this.render()}render(){const e=new r.InputGroup("First Name");e.handleInput=e=>this.userNameValidation(e,"name");const t=new r.InputGroup("Last Name");t.handleInput=e=>this.userNameValidation(e,"surname");const n=new r.InputGroup("Email");n.handleInput=e=>this.emailValidation(e);const s=new r.InputGroup("Password");s.handleInput=e=>this.passwordValidation(e),this.element.append(..."register"===this.type?[e.element,t.element,n.element,s.element]:[n.element,s.element])}}t.RegisterInputs=l},1569:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.RegisterUpload=void 0;const s=n(1006);n(5898);class i extends s.BaseComponent{constructor(){super("div",["form__image"]),this.getImg=()=>{},this.image="/assets/upload-image/user.png";const e=new s.BaseComponent("input",["form__input-upload"]);e.element.setAttribute("id","imageUpload"),e.element.setAttribute("type","file"),e.element.addEventListener("change",(e=>this.uploadFile(e)));const t=new s.BaseComponent("label");t.element.setAttribute("for","imageUpload");const n=new s.BaseComponent("div",["form__image-preview"]);this.createImage=new Image,this.createImage.src=this.image,n.element.append(this.createImage),this.element.append(e.element,t.element,n.element)}uploadFile(e){const t=e.target;if(t.files){const e=t.files[0],n=new FileReader;n.readAsDataURL(e),n.onload=()=>{null!==n.result&&(this.image=String(n.result)),this.render(),this.getImg(this.image)}}}render(){this.createImage.src=this.image,this.createImage.width=165,this.createImage.height=165}}t.RegisterUpload=i},8902:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.PopupRegister=void 0;const s=n(1006),i=n(1650);n(3531);const o=n(3506),r=n(6053);class a extends s.BaseComponent{constructor(){super("div",["popup-register"]),this.hidePopupCancel=()=>{},this.updateHeader=()=>{},this.errorPopup=new r.Popup("User with this email exists. Please log in!"),this.state={name:"",surname:"",email:"",password:"",img:""},this.render()}hidePopup(){this.element.remove()}submitForm(){const e=Object.assign(Object.assign({},this.state),{score:0});o.database.add(e).then((e=>{if(e){const e=JSON.stringify(this.state);localStorage.setItem("user",e),this.updateHeader(),this.hidePopupCancel(),window.location.hash="#/"}else this.element.append(this.errorPopup.element)}))}render(){const e=new s.BaseComponent("div",["popup-register__wrapper"]),t=new s.BaseComponent("h2",["popup__title","text-20"],"Register new Player"),n=new i.RegisterContainer(this.state);n.hidePopupCancel=()=>this.hidePopupCancel(),n.updateHeader=()=>this.updateHeader(),n.submitForm=()=>this.submitForm(),e.element.append(t.element,n.element),this.element.append(e.element)}}t.PopupRegister=a},660:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.PopupSignIn=void 0;const s=n(1006);n(1702);const i=n(1650),o=n(3506),r=n(6053);class a extends s.BaseComponent{constructor(){super("div",["popup-sign-in"]),this.updateHeader=()=>{},this.errorPopup=new r.Popup("Email or password is not correct..."),this.state={name:"",email:"",password:"",score:0,img:"",surname:""},this.render()}hidePopup(){this.element.remove()}render(){const e=new s.BaseComponent("div",["popup-register__wrapper"]),t=new s.BaseComponent("h2",["popup__title","text-20"],"Sign In"),n=new i.RegisterContainer(this.state,"sign-in");n.hidePopupCancel=()=>this.hidePopup(),n.submitForm=()=>{o.database.logIn(this.state).then((e=>{e?(localStorage.setItem("user",JSON.stringify(e)),this.hidePopup(),this.updateHeader(),window.location.hash="#/"):this.element.append(this.errorPopup.element)}))},e.element.append(t.element,n.element),this.element.append(e.element)}}t.PopupSignIn=a},6053:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Popup=void 0;const s=n(1006);n(6106);const i=n(2810);class o extends s.BaseComponent{constructor(e){super("div",["popup-congratulations"]),this.handleButton=()=>{};const t=new s.BaseComponent("div",["popup-congratulations__wrapper"]),n=new s.BaseComponent("p",["text-14"],e),o=new i.Button("button",["btn-primary"],"OK");o.handleButton=()=>{this.element.remove(),this.handleButton()},t.element.append(n.element,o.element),this.element.append(t.element)}}t.Popup=o},9716:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.SettingsContainer=void 0;const s=n(1006),i=n(1145);class o extends s.BaseComponent{constructor(e){super("div",["settings__config"]),this.state=[],this.settingsSelect=e.map((e=>new i.SettingsSelect(e))),this.render()}render(){this.settingsSelect.forEach((e=>{this.element.appendChild(e.element)}))}}t.SettingsContainer=o},1145:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.SettingsSelect=void 0;const s=n(1006),i=n(6607);class o extends s.BaseComponent{constructor(e){super("div",["settings__block"]),this.selectData=e,this.title=new s.BaseComponent("h3",["text-20"]),this.selectBlock=new s.BaseComponent("div",["settings__select"]),this.select=new i.Select(e),this.select.changeSelect=e=>this.changeSelect(e),this.render()}changeSelect(e){const t=e.target;this.id=String(t.id),localStorage.setItem(this.id,JSON.stringify(t.value))}render(){this.title.element.innerHTML=this.selectData.title,this.selectBlock.element.appendChild(this.select.element),this.element.appendChild(this.title.element),this.element.appendChild(this.selectBlock.element)}}t.SettingsSelect=o},4887:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.delay=void 0,t.delay=function(e){return new Promise((t=>{setTimeout(t,e)}))}},1159:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getFromLocalStorage=void 0,t.getFromLocalStorage=(e,t)=>{const n=localStorage.getItem(e);return n?JSON.parse(n):t}},6446:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.isValidEmail=void 0;const n=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;t.isValidEmail=function(e){const t=["Email cannot be empty","Must comply with the standard email generation rule ","The email of characters must be less than 30 characters"];return""===e?t[0]:new RegExp(n).test(e)?!(e.length>=30)||t[2]:t[1]}},1350:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.isValidPassword=void 0,t.isValidPassword=function(e){const t=["The password cannot be empty","The number of characters must be more than 8 characters","The number of characters must be less than 30 characters"];return""===e?t[0]:e.length<8?t[1]:!(e.length>=30)||t[2]}},6690:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.isUsernameValid=void 0,t.isUsernameValid=function(e,t){const n=[`The ${t} cannot be empty`,`The ${t} cannot contains number`,`The ${t} cannot contain service characters`,"The number of characters must be less than 30 characters"];return""===e?n[0]:/^[^~!@#$%*()_—+=|:;"'`<>,.?/^]*$/g.test(e)?/^\d+$/g.test(e)?n[1]:!(e.length>=30)||n[3]:n[2]}},3966:function(e,t,n){var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(i,o){function r(e){try{l(s.next(e))}catch(e){o(e)}}function a(e){try{l(s.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.About=void 0;const i=n(1006),o=n(9413);n(1908);class r extends i.BaseComponent{constructor(){super("div",["hot-to-play","container"]),this.cards=[],this.render()}renderAboutCards(){return s(this,void 0,void 0,(function*(){const e=yield fetch("about.json"),t=yield e.json();this.cards=t[0].cards;const n=new o.AboutContainer(this.cards);this.element.appendChild(n.element)}))}render(){const e=new i.BaseComponent("h2",["text-20"],"How To Play?");this.element.appendChild(e.element),this.renderAboutCards()}}t.About=r},4130:function(e,t,n){var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(i,o){function r(e){try{l(s.next(e))}catch(e){o(e)}}function a(e){try{l(s.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.BestPlayers=void 0;const i=n(3244),o=n(1006),r=n(29),a=n(3506);n(8124),t.BestPlayers=function(){return s(this,void 0,void 0,(function*(){const{element:e}=new o.BaseComponent("div",["best-players","container"]),t=new i.BestPlayersContainer,n=new o.BaseComponent("h2",["text-20"],"Best Players"),l=new o.BaseComponent("div",["best-players__container"]);return e.append(n.element,l.element,t.element),t.addPerson(yield s(void 0,void 0,void 0,(function*(){return(yield a.database.getAllUsers()).map((e=>new r.Player(e)))}))),e}))}},3775:function(e,t,n){var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(i,o){function r(e){try{l(s.next(e))}catch(e){o(e)}}function a(e){try{l(s.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Game=void 0;const i=n(1006),o=n(4128),r=n(8799),a=n(4887),l=n(7660),c=n(6053),d=n(3506),h=n(1159),u=n(9695);class p extends i.BaseComponent{constructor(){super("div",["game","container"]),this.isAnimation=!1,this.correctAnswers=0,this.notCorrectAnswers=0,this.CARDS=Number(h.getFromLocalStorage("difficulty","4")),this.TYPE=h.getFromLocalStorage("game-cards","animals"),this.cardsLength=this.CARDS*this.CARDS/2,this.gameTimer=new l.GameTimer,this.cardsField=new r.CardField,this.element.appendChild(this.gameTimer.element),this.element.appendChild(this.cardsField.element),this.getImages()}newGame(e){this.cardsField.clear();const t=e.concat(e).map((e=>new o.Card(e)));t.forEach((e=>{e.element.addEventListener("click",(()=>this.handleCard(e)))})),this.cardsField.addCards(t),setTimeout((()=>this.gameTimer.startTrack()),u.config.START_AFTER)}getImages(){return s(this,void 0,void 0,(function*(){const e=yield fetch("gameImages.json"),t=(yield e.json()).filter((e=>e.category===this.TYPE))[0],n=t.images.slice(0,this.cardsLength).map((e=>`${t.category}/${e}`));this.newGame(n)}))}congratulations(){const e=this.gameTimer.stopTimer(),t=`Congratulations! You successfully found all matches on ${e.min}.${e.sec<10?`0${e.sec}`:e.sec} minutes`,n=this.correctAnswers+this.notCorrectAnswers,s=10*(60*e.min+e.sec),i=localStorage.getItem("user");if(i){const e=JSON.parse(i);e.score=100*(n-this.notCorrectAnswers)-s,d.database.updateScore(e)}this.popupCongratulations=new c.Popup(t),this.popupCongratulations.handleButton=()=>{window.location.hash="#/",window.location.hash="#/best-scores"},this.element.append(this.popupCongratulations.element)}handleCard(e){return s(this,void 0,void 0,(function*(){if(!this.isAnimation){if(this.isAnimation=!0,yield e.flipToFront(),!this.activeCard)return this.activeCard=e,void(this.isAnimation=!1);this.activeCard.image!==e.image?(this.notCorrectAnswers++,this.activeCard.error(!0),e.error(!0),yield a.delay(u.config.FLIP_DELAY),yield Promise.all([this.activeCard.error(),e.error(),this.activeCard.flipToBack(),e.flipToBack()])):(this.correctAnswers++,this.correctAnswers===this.cardsLength&&this.congratulations(),e.success(),this.activeCard.success()),this.activeCard=void 0,this.isAnimation=!1}}))}}t.Game=p},2773:function(e,t,n){var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(i,o){function r(e){try{l(s.next(e))}catch(e){o(e)}}function a(e){try{l(s.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Settings=void 0;const i=n(1006),o=n(9716);n(8962);class r extends i.BaseComponent{constructor(){super("div",["settings","container"]),this.state=[],this.render()}fetchData(){return s(this,void 0,void 0,(function*(){const e=yield fetch("./settings.json"),t=yield e.json();this.state=t[0].selects,this.state=this.state.map((e=>{const t=localStorage.getItem(e.id);if(t){const n=JSON.parse(t);e.options.forEach((e=>{e.value===n&&(e.selected="selected")}))}return{id:e.id,title:e.title,options:e.options}}))}))}render(){return s(this,void 0,void 0,(function*(){yield this.fetchData(),this.settingsContainer=new o.SettingsContainer(this.state),this.element.appendChild(this.settingsContainer.element)}))}}t.Settings=r},3440:function(e,t,n){var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(i,o){function r(e){try{l(s.next(e))}catch(e){o(e)}}function a(e){try{l(s.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Router=void 0;const i=n(4130),o=n(2773),r=n(3966);t.Router=class{constructor(e){this.rootElement=e,this.rootElement=e,this.routes=[{name:"/",component:()=>{const e=new r.About;this.rootElement.appendChild(e.element)}},{name:"/best-scores",component:()=>s(this,void 0,void 0,(function*(){const e=yield i.BestPlayers();this.rootElement.appendChild(e)}))},{name:"/game-settings",component:()=>{const e=new o.Settings;this.rootElement.appendChild(e.element)}}],this.defaultRoute={name:"Default router",component:()=>{this.rootElement.innerHTML="Default Page"}}}updateRouter(){this.rootElement.innerHTML="";const e=window.location.hash.slice(1);(this.routes.find((t=>t.name===e))||this.defaultRoute).component()}initRouter(){""===window.location.hash&&(window.location.hash="#/"),window.onpopstate=()=>this.updateRouter(),this.updateRouter()}}},1006:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BaseComponent=void 0,t.BaseComponent=class{constructor(e="div",t=[],n=""){this.element=document.createElement(e),this.element.classList.add(...t),this.element.innerHTML=`${n}`}}}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var o=t[s]={exports:{}};return e[s].call(o.exports,o,o.exports,n),o.exports}n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){const e=n(2178),t=n(3506);n(1306),window.addEventListener("load",(()=>{const n=document.body;t.database.init("AzizbekSavkimov").then((()=>{new e.App(n).render()}))}))}()}();