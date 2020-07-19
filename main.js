!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);var r={inputSelector:".form__input",errorInputSelector:"form__input_type_error",errorClass:"form__input-error_visible",submitButtonSelector:".form__input-button"},o=document.querySelector(".profile__edit-button"),i=document.querySelector(".profile__add-button"),u=document.querySelector(".profile__avatar-container"),c="#card",a=".elements__item",l=".elements__remove",s=".elements__like",f=".elements__list",h=".elements__image",p=".elements__item-title",_=".elements__like-counter",y=".pop-up-image__img",m=".pop-up-image__description",d=".pop-up-image__close-icon",v=".pop-up-image",b=".pop-up_profile",k=".pop-up_confirm",g=".pop-up_avatar",S=".pop-up__close-icon",E=".pop-up_card",O=".form",L=".form__input",C=".form__input_name",w=".form__input_profession",R=".form__input-error",j=".form__input-button",P=".form__input-button_comfirm",q=".form_profile",B=".form_card",I=".form_avatar",x=".profile__avatar",D=".profile__title",T=".profile__subtitle",U="elements__like_active",V="form__input_type_error",F="pop-up-opened";function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var M=function(){function e(t,n,r){var o=r.handleCardClick,i=r.handleButtonRemove,u=r.handleButtonLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._id=t._id,this._likes=t.likes,this._templateSelector=n,this._handleCardClick=o,this._handleCardClick=this._handleCardClick.bind(this),this._handleButtonRemove=i,this._handleButtonRemove=this._handleButtonRemove.bind(this),this._handleButtonLike=u,this._handleButtonLike=this._handleButtonLike.bind(this)}var t,n,r;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.cloneNode(!0).querySelector(a)}},{key:"generateCard",value:function(e){return this._element=this._getTemplate(),this._elementLikeCounter=this._element.querySelector(_),this._elementRemove=this._element.querySelector(l),"668ea0a7f8f07344312fc2a6"===e&&this._elementRemove.classList.add("elements__remove_active"),this._elementLike=this._element.querySelector(s),this._setColorLike("668ea0a7f8f07344312fc2a6",this._likes),this._elementImage=this._element.querySelector(h),this._setEventListeners(),this._element.querySelector(p).textContent=this._name,this._element.querySelector(h).style.backgroundImage="url(".concat(this._link,")"),this._element}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null,this._removeEventListeners()}},{key:"_removeEventListeners",value:function(){this._elementLike.removeEventListener("click",this._handleButtonLike),this._elementRemove.removeEventListener("click",this._handleButtonRemove),this._elementImage.removeEventListener("click",this._handleCardClick)}},{key:"toggleLike",value:function(){this._elementLike.classList.toggle(U)}},{key:"_setColorLike",value:function(e,t){var n=this;t.forEach((function(t){t._id===e&&n._elementLike.classList.add("elements__like_active")}))}},{key:"setLikes",value:function(e){this._elementLikeCounter.textContent=e.length}},{key:"getElementLike",value:function(){return this._elementLike}},{key:"_setEventListeners",value:function(){this._elementLike.addEventListener("click",this._handleButtonLike),this._elementRemove.addEventListener("click",this._handleButtonRemove),this._elementImage.addEventListener("click",this._handleCardClick)}}])&&A(t.prototype,n),r&&A(t,r),e}();function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var J=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._errorInputSelector=t.errorInputSelector,this._errorClass=t.errorClass,this._submitButtonSelector=t.submitButtonSelector,this._formSelector=n}var t,n,r;return t=e,(n=[{key:"_showMessageError",value:function(e){e.classList.add(this._errorInputSelector);var t=document.querySelector("#".concat(e.name,"-error"));t.classList.add(this._errorClass),t.textContent=e.validationMessage}},{key:"_hideMessageError",value:function(e){e.classList.remove(this._errorInputSelector);var t=document.querySelector("#".concat(e.name,"-error"));t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.checkValidity()?this._hideMessageError(e):this._showMessageError(e)}},{key:"_setStateOfButton",value:function(){this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._formElement.checkValidity()?this._buttonElement.removeAttribute("disabled"):this._buttonElement.setAttribute("disabled",!0)}},{key:"setButtonDisabled",value:function(){this._formElement.querySelector(this._submitButtonSelector).setAttribute("disabled",!0)}},{key:"enableValidation",value:function(){var e=this;this._formElement=document.querySelector(this._formSelector),this._formElement.querySelectorAll(this._inputSelector).forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._setStateOfButton(t)}))}))}}])&&N(t.prototype,n),r&&N(t,r),e}();function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var z=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(t)}var t,n,r;return t=e,(n=[{key:"renderItems",value:function(e,t){e.forEach((function(e){return t(e)}))}},{key:"appendItem",value:function(e){this._container.append(e)}}])&&H(t.prototype,n),r&&H(t,r),e}();function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var K=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClose=this._handleOverlayClose.bind(this)}var t,n,r;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add(F),this._popup.addEventListener("click",this._handleOverlayClose),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove(F),document.removeEventListener("keyup",this._handleEscClose),this._popup.removeEventListener("click",this._handleOverlayClose)}},{key:"_handleOverlayClose",value:function(e){e.target===this._popup&&this.close()}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"handleButtonForm",value:function(e){this._popup.querySelector(j).textContent=e}},{key:"setEventListeners",value:function(e){var t=this;this._popupCloseIcon=this._popup.querySelector(e),this._popupCloseIcon.addEventListener("click",(function(){return t.close()}))}}])&&G(t.prototype,n),r&&G(t,r),e}();function Q(e){return(Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function X(e,t,n){return(X="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=ee(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function Y(e,t){return(Y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=ee(e);if(t){var o=ee(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return $(this,n)}}function $(e,t){return!t||"object"!==Q(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ee(e){return(ee=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var te=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Y(e,t)}(i,e);var t,n,r,o=Z(i);function i(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),o.call(this,e)}return t=i,(n=[{key:"open",value:function(e,t){X(ee(i.prototype),"open",this).call(this);var n=this._popup.querySelector(y);n.src=e,n.alt=t,this._popup.querySelector(m).textContent=t}}])&&W(t.prototype,n),r&&W(t,r),i}(K);function ne(e){return(ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function re(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function oe(e,t,n){return(oe="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=ae(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function ie(e,t){return(ie=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ue(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=ae(e);if(t){var o=ae(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ce(this,n)}}function ce(e,t){return!t||"object"!==ne(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ae(e){return(ae=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var le=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ie(e,t)}(i,e);var t,n,r,o=ue(i);function i(e,t){var n,r=t.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(n=o.call(this,e))._handleFormSubmit=r,n}return t=i,(n=[{key:"setInputValues",value:function(e,t){var n=this._formElement.querySelector(C),r=this._formElement.querySelector(w);n.value=e,r.value=t}},{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._popup.querySelectorAll(L),this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"close",value:function(){oe(ae(i.prototype),"close",this).call(this),this._formElement.reset(),this._formElement.querySelectorAll(R).forEach((function(e){return e.textContent=""})),this._formElement.querySelectorAll(L).forEach((function(e){e.classList.remove(V)}))}},{key:"setEventListeners",value:function(e){var t=this;oe(ae(i.prototype),"setEventListeners",this).call(this,e),this._formElement=this._popup.querySelector(O),this._formElement.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues())}))}}])&&re(t.prototype,n),r&&re(t,r),i}(K);function se(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var fe=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(t),this._aboutUser=document.querySelector(n)}var t,n,r;return t=e,(n=[{key:"getUserInfo",value:function(){var e={};return e.user=this._userName.textContent,e.about=this._aboutUser.textContent,e}},{key:"setUserInfo",value:function(e,t){this._userName.textContent=e,this._aboutUser.textContent=t}}])&&se(t.prototype,n),r&&se(t,r),e}();function he(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var pe=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n,r;return t=e,(n=[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserData",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._handleResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._handleResponse)}},{key:"patchUserData",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._handleResponse)}},{key:"postCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._handleResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}},{key:"putLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._handleResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}},{key:"patchAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._handleResponse)}}])&&he(t.prototype,n),r&&he(t,r),e}();function _e(e){return(_e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ye(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function me(e,t,n){return(me="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=ge(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function de(e,t){return(de=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ve(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=ge(e);if(t){var o=ge(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return be(this,n)}}function be(e,t){return!t||"object"!==_e(t)&&"function"!=typeof t?ke(e):t}function ke(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ge(e){return(ge=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Se=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&de(e,t)}(i,e);var t,n,r,o=ve(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e))._deleteCard=t._deleteCard.bind(ke(t)),t}return t=i,(n=[{key:"close",value:function(){me(ge(i.prototype),"close",this).call(this),this._button.removeEventListener("click",this._deleteCard)}},{key:"_deleteCard",value:function(){this._handleApiData(),this.close()}},{key:"handleButton",value:function(e){this._handleApiData=e,this._button=this._popup.querySelector(P),this._button.addEventListener("click",this._deleteCard)}}])&&ye(t.prototype,n),r&&ye(t,r),i}(K);function Ee(e){return(Ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Oe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Le(e,t,n){return(Le="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=je(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function Ce(e,t){return(Ce=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function we(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=je(e);if(t){var o=je(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Re(this,n)}}function Re(e,t){return!t||"object"!==Ee(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function je(e){return(je=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Pe=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ce(e,t)}(i,e);var t,n,r,o=we(i);function i(e,t){var n,r=t.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(n=o.call(this,e))._handleFormSubmit=r,n}return t=i,(n=[{key:"_getInputValue",value:function(){return this._popup.querySelector(L).value}},{key:"setAvatar",value:function(e){document.querySelector(x).src=e}},{key:"close",value:function(){Le(je(i.prototype),"close",this).call(this),this._formElement.reset(),this._formElement.querySelector(R).textContent="",this._formElement.querySelector(L).classList.remove(V)}},{key:"setEventListeners",value:function(e){var t=this;Le(je(i.prototype),"setEventListeners",this).call(this,e),this._formElement=this._popup.querySelector(O),this._formElement.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValue())}))}}])&&Oe(t.prototype,n),r&&Oe(t,r),i}(K),qe=new pe({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-13",headers:{authorization:"c1537c16-673d-4616-aeab-a0fea1355e00","Content-Type":"application/json;charset=utf-8"}}),Be=new J(r,q);Be.enableValidation();var Ie=new J(r,B);Ie.enableValidation();var xe=new J(r,I);xe.enableValidation();var De=new fe(D,T),Te=new te(v);Te.setEventListeners(d);var Ue=new Se(k);Ue.setEventListeners(S);var Ve=new Pe(g,{handleFormSubmit:function(e){Ve.handleButtonForm("Загрузка..."),qe.patchAvatar(e).then((function(e){Ve.setAvatar(e.avatar),Ve.close()})).catch((function(e){return console.log(e)}))}});Ve.setEventListeners(S);var Fe=new le(b,{handleFormSubmit:function(e){Fe.handleButtonForm("Загрузка..."),qe.patchUserData(e["input-name"],e["input-profession"]).then((function(){De.setUserInfo(e["input-name"],e["input-profession"]),Fe.close()})).catch((function(e){return console.log(e)}))}});Fe.setEventListeners(S);var Ae=new le(E,{handleFormSubmit:function(e){Ae.handleButtonForm("Загрузка..."),qe.postCard(e["input-name-card"],e["input-link-card"]).then(Ne).catch((function(e){return console.log(e)}))}});Ae.setEventListeners(S);var Me=new z(f),Ne=function(e){var t=new M(e,c,{handleCardClick:function(){return Te.open(e.link,e.name)},handleButtonRemove:function(){Ue.open(),Ue.handleButton((function(){qe.deleteCard(e._id).then((function(){t.deleteCard()})).catch((function(e){return console.log(e)}))}))},handleButtonLike:function(){t.getElementLike().classList.contains("elements__like_active")?qe.deleteLike(e._id).then((function(e){t.setLikes(e.likes),t.toggleLike()})).catch((function(e){return console.log(e)})):qe.putLike(e._id).then((function(e){t.setLikes(e.likes),t.toggleLike()})).catch((function(e){return console.log(e)}))}}),n=t.generateCard(e.owner._id);n.querySelector(".elements__like-counter ").textContent=e.likes.length,Me.appendItem(n),Ae.close()};Promise.all([qe.getInitialCards(),qe.getUserData()]).then((function(e){De.setUserInfo(e[1].name,e[1].about),document.querySelector(x).src=e[1].avatar,Me.renderItems(e[0],Ne)})).catch((function(e){return console.log(e)})),o.addEventListener("click",(function(){Fe.open(),Fe.handleButtonForm("Сохранить"),Be.setButtonDisabled();var e=De.getUserInfo();Fe.setInputValues(e.user,e.about)})),i.addEventListener("click",(function(){Ae.open(),Ae.handleButtonForm("Создать"),Ie.setButtonDisabled()})),u.addEventListener("click",(function(){Ve.open(),Ve.handleButtonForm("Сохранить"),xe.setButtonDisabled()}))}]);