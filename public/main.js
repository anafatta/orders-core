(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nhtml,\nbody {\n  height: 100%;\n  background-color: #fff;\n  margin: 0;\n  font-family: sans-serif;\n}\n\nbody {\n  /* Full height */\n  height: 100%; \n  /* Center and scale the image nicely */  \n}\n\n.header img {\n  margin: auto;\n}\n\n.header {\n  color: #fff!important;\n}\n\n.static_label {\n  color: #4caf50;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<app-navbar></app-navbar>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Simsiroglu';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication/authentication.module */ "./src/app/authentication/authentication.module.ts");
/* harmony import */ var _orders_orders_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders/orders.module */ "./src/app/orders/orders.module.ts");
/* harmony import */ var _commonApp_commonApp_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./commonApp/commonApp.module */ "./src/app/commonApp/commonApp.module.ts");
/* harmony import */ var _commonApp_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./commonApp/pagenotfound/pagenotfound.component */ "./src/app/commonApp/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/orders.service */ "./src/app/services/orders.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _customers_customers_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./customers/customers.module */ "./src/app/customers/customers.module.ts");
/* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/customers.service */ "./src/app/services/customers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { StoreModule } from '@ngrx/store';
// import { reducers } from './store/reducers';











var appRoutes = [
    { path: '**', component: _commonApp_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_8__["PagenotfoundComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                // StoreModule.forRoot(reducers,{}),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                _commonApp_commonApp_module__WEBPACK_IMPORTED_MODULE_7__["CommonAppModule"],
                _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_5__["AuthenticationModule"],
                _orders_orders_module__WEBPACK_IMPORTED_MODULE_6__["OrdersModule"],
                _customers_customers_module__WEBPACK_IMPORTED_MODULE_13__["CustomersModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ],
            providers: [
                _services_orders_service__WEBPACK_IMPORTED_MODULE_9__["OrdersService"],
                _services_customers_service__WEBPACK_IMPORTED_MODULE_14__["CustomersService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authentication/authentication.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/authentication/logout/logout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var authRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_3__["LogoutComponent"] },
];
var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(authRoutes),
                _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_3__["LogoutComponent"]
            ],
            exports: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_3__["LogoutComponent"],
            ]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "./src/app/authentication/login/login.component.css":
/*!**********************************************************!*\
  !*** ./src/app/authentication/login/login.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n    max-width: 80%;\n    margin: 2em auto;\n    text-align: left;\n}\n\n.login .mat-form-field {\n    min-width: 100% !important;\n}"

/***/ }),

/***/ "./src/app/authentication/login/login.component.html":
/*!***********************************************************!*\
  !*** ./src/app/authentication/login/login.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"3\" rowHeight=\"2:2\">\n  <mat-grid-tile></mat-grid-tile>\n  <mat-grid-tile>\n    <mat-card class=\"login\">\n      <mat-card-title>Iniciar sesión</mat-card-title>\n      <form (ngSubmit)=\"login()\">\n        <mat-form-field>\n          <input matInput type=\"email\" placeholder=\"Usuario\" dividerColor=\"accent\" formControlName=\"user\" #user\n            required autofocus>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput type=\"password\" placeholder=\"Contraseña\" dividerColor=\"accent\" formControlName=\"password\"\n            #password required>\n        </mat-form-field>\n        <mat-card-actions align=\"middle\">\n          <button mat-raised-button color=\"accent\" routerLink=\"/sellers\" type=\"submit\">Iniciar Sesión</button>\n          <p class=\"mt-5 mb-3 text-muted\">&copy;2018</p>\n        </mat-card-actions>\n      </form>\n    </mat-card>\n  </mat-grid-tile>\n  <mat-grid-tile></mat-grid-tile>\n</mat-grid-list>"

/***/ }),

/***/ "./src/app/authentication/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/authentication/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/authentication/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/authentication/logout/logout.component.css":
/*!************************************************************!*\
  !*** ./src/app/authentication/logout/logout.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/authentication/logout/logout.component.html":
/*!*************************************************************!*\
  !*** ./src/app/authentication/logout/logout.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "./src/app/authentication/logout/logout.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/logout/logout.component.ts ***!
  \***********************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoutComponent = /** @class */ (function () {
    function LogoutComponent() {
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/authentication/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/authentication/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/commonApp/commonApp.module.ts":
/*!***********************************************!*\
  !*** ./src/app/commonApp/commonApp.module.ts ***!
  \***********************************************/
/*! exports provided: CommonAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonAppModule", function() { return CommonAppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/commonApp/navbar/navbar.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/commonApp/homepage/homepage.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/commonApp/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _seller_seller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./seller/seller.component */ "./src/app/commonApp/seller/seller.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var commonAppRoutes = [
    { path: '', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"] },
    { path: 'sellers', component: _seller_seller_component__WEBPACK_IMPORTED_MODULE_7__["SellerComponent"] }
];
var CommonAppModule = /** @class */ (function () {
    function CommonAppModule() {
    }
    CommonAppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(commonAppRoutes),
                _material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"]
            ],
            declarations: [
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"],
                _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_6__["PagenotfoundComponent"],
                _seller_seller_component__WEBPACK_IMPORTED_MODULE_7__["SellerComponent"]
            ],
            exports: [
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"],
                _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_6__["PagenotfoundComponent"],
                _seller_seller_component__WEBPACK_IMPORTED_MODULE_7__["SellerComponent"]
            ]
        })
    ], CommonAppModule);
    return CommonAppModule;
}());



/***/ }),

/***/ "./src/app/commonApp/homepage/homepage.component.css":
/*!***********************************************************!*\
  !*** ./src/app/commonApp/homepage/homepage.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/commonApp/homepage/homepage.component.html":
/*!************************************************************!*\
  !*** ./src/app/commonApp/homepage/homepage.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <h1 class=\"cover-heading\">Simsiroglu</h1>\n  <p class=\"lead\">Bienvenido.</p>\n  <p class=\"lead\">\n\n  </p>\n  <button color=\"accent\" routerLink=\"/login\" mat-raised-button>Iniciar Sesión</button>\n</mat-card>"

/***/ }),

/***/ "./src/app/commonApp/homepage/homepage.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/commonApp/homepage/homepage.component.ts ***!
  \**********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/commonApp/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/commonApp/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/commonApp/navbar/navbar.component.css":
/*!*******************************************************!*\
  !*** ./src/app/commonApp/navbar/navbar.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header img {\n    margin: auto;\n    height: auto;\n    max-height: 30px;\n}\n\n.header {\n    color: #fff;\n    background: #39643a;\n}\n\n.button-row {\n    position: fixed;\n    z-index: 999;\n    bottom: 1%;\n    right: 1%;\n}"

/***/ }),

/***/ "./src/app/commonApp/navbar/navbar.component.html":
/*!********************************************************!*\
  !*** ./src/app/commonApp/navbar/navbar.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <mat-toolbar color=\"primary\" class=\"header\">\n    <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <mat-menu #menu=\"matMenu\">\n      <button mat-menu-item [matMenuTriggerFor]=\"clientes\">\n        <mat-icon>people</mat-icon>\n        <span>Clientes</span>\n      </button>\n      <mat-menu #clientes=\"matMenu\">\n        <button mat-menu-item routerLink='/customers/view'>Mis Clientes</button>\n        <!--<button mat-menu-item routerLink='/customers/detail'>Ver Pedido</button>-->\n        <button mat-menu-item routerLink='/customers/create'>Nuevo Cliente</button>\n      </mat-menu>\n      <button mat-menu-item [matMenuTriggerFor]=\"pedidos\">\n        <mat-icon>description</mat-icon>\n        <span>Pedidos</span>\n      </button>\n      <mat-menu #pedidos=\"matMenu\">\n        <button mat-menu-item routerLink='/orders/view'>Mis Pedidos</button>\n        <button mat-menu-item routerLink='/orders/detail'>Ver Pedido</button>\n        <button mat-menu-item routerLink='/orders/create'>Nuevo Pedido</button>\n      </mat-menu>\n      <button mat-menu-item>\n        <mat-icon>timeline</mat-icon>\n        <span routerLink='/pageNotFound'>Reportes</span>\n      </button>\n      <button mat-menu-item>\n        <mat-icon>lock</mat-icon>\n        <span *ngIf=\"!logout\" class=\"nav-link\" routerLink=\"/logout\">Logout</span>\n        <span *ngIf=\"logout\" class=\"nav-link\" routerLink=\"/login\">Login</span>\n      </button>\n    </mat-menu>\n    <img src=\"assets/img/Simsiroglu-Logo-Blanco.svg\" alt=\"{{title}}\" [routerLink]=\"['/']\" />\n  </mat-toolbar>\n</div>\n<div class=\"button-row\">\n  <button mat-fab color=\"warn\" routerLink='/orders/create' matTooltip=\"Generar nuevo pedido\" matTooltipPosition=\"above\">\n    <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\n  </button>\n</div>"

/***/ }),

/***/ "./src/app/commonApp/navbar/navbar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/commonApp/navbar/navbar.component.ts ***!
  \******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.greetingMessage = "Hello guest";
        this.logout = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/commonApp/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/commonApp/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/commonApp/pagenotfound/pagenotfound.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/commonApp/pagenotfound/pagenotfound.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".underConstruccion {\nbackground-color: lightgrey;\nheight: 100px;\nalign-content: center!;\n}\n.underConstruccionMessage {\n    font-size:25px;\n    align-content: center ;\n}"

/***/ }),

/***/ "./src/app/commonApp/pagenotfound/pagenotfound.component.html":
/*!********************************************************************!*\
  !*** ./src/app/commonApp/pagenotfound/pagenotfound.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"underConstruccion\">\n    <p class=\"underConstruccionMessage\">\n      Esta funcionalidad esta en construcción...\n    </p>\n</mat-card>"

/***/ }),

/***/ "./src/app/commonApp/pagenotfound/pagenotfound.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/commonApp/pagenotfound/pagenotfound.component.ts ***!
  \******************************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/commonApp/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/commonApp/pagenotfound/pagenotfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/commonApp/seller/seller.component.css":
/*!*******************************************************!*\
  !*** ./src/app/commonApp/seller/seller.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/commonApp/seller/seller.component.html":
/*!********************************************************!*\
  !*** ./src/app/commonApp/seller/seller.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>Bienvenido</mat-card-title>\n  <p>Proximamente Dashboard del vendedor - comunicaciones internas - metricas</p>\n  <div ng-if=isAdmin>\n    <p>Usted a iniciado sesión como usuario Admin</p>\n    <h3>Vendedores</h3>\n  </div>\n  <mat-form-field>\n    <mat-select placeholder=\"Seleccione un vendedor\" (ngModelChange)=\"onClick($event)\" [(ngModel)]=\"selectedSeller\">\n      <mat-option *ngFor=\"let seller of sellers\" [value]=\"seller.id\">\n        {{seller.nom}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <!--<mat-form-field class=\"example-full-width\">\n    <input type=\"text\" placeholder=\"Seleccione un vendedor\" aria-label=\"Seller\" matInput  [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let seller of sellers\" [value]=\"seller.id\" (ngModelChange)=\"onClick($event)\"\n      [(ngModel)]=\"selectedSeller\">\n        {{seller.nom}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>-->\n</mat-card>"

/***/ }),

/***/ "./src/app/commonApp/seller/seller.component.ts":
/*!******************************************************!*\
  !*** ./src/app/commonApp/seller/seller.component.ts ***!
  \******************************************************/
/*! exports provided: SellerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerComponent", function() { return SellerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SellerComponent = /** @class */ (function () {
    function SellerComponent(router, userService, dataService) {
        this.router = router;
        this.userService = userService;
        this.dataService = dataService;
    }
    SellerComponent.prototype.ngOnInit = function () {
        // call service to retrieve client by seller
        var _this = this;
        this.isAdmin = true;
        this.userService.getSellers().subscribe(function (data) {
            //salon
            _this.sellers = data;
            console.log("call sellers works... " + _this.sellers);
        });
    };
    SellerComponent.prototype.onClick = function (ven) {
        console.log("click works ... ");
        this.selectedSeller = ven;
        this.dataService.setSellerId(this.selectedSeller);
        var root = "orders/view";
        this.router.navigate([root]);
    };
    SellerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-seller',
            template: __webpack_require__(/*! ./seller.component.html */ "./src/app/commonApp/seller/seller.component.html"),
            styles: [__webpack_require__(/*! ./seller.component.css */ "./src/app/commonApp/seller/seller.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], SellerComponent);
    return SellerComponent;
}());



/***/ }),

/***/ "./src/app/customers/create-customers/create-customers.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/customers/create-customers/create-customers.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n    width: 94%;\n}\n\n.static_field {\n    text-align: left;\n    width: 100%;\n    font-size: 14px;\n    min-height: 35px;\n    display: inline-block;\n    vertical-align: top;\n    position: absolute;\n    top: 0;\n    padding-bottom: 5px;\n    bcustomers-bottom: 1px solid #949494;\n}\n\n.static_label {\n    color: #aaa;\n    display: block;\n    font-size: 11px;\n    height: 15px;\n    position: relative;\n    top: -3px;\n}\n\ntable {\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/customers/create-customers/create-customers.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/customers/create-customers/create-customers.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>Nuevo cliente</mat-card-title>\n  <form [formGroup]=\"NewCustomerForm\" (ngSubmit)=\"onSubmit()\">\n    <mat-accordion>\n      <mat-expansion-panel [expanded]=\"true\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            <strong>Datos del cliente</strong>\n          </mat-panel-title>\n          <mat-panel-description>\n            Información comercial\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <mat-grid-list cols=\"3\" rowHeight=\"60px\">\n          <mat-grid-tile>\n            <mat-form-field>\n              <input matInput placeholder=\"Nombre\" formControlName=\"nom\" #nom>\n            </mat-form-field>\n          </mat-grid-tile>\n          <mat-grid-tile>\n            <mat-form-field>\n              <input matInput type=\"number\" placeholder=\"C.U.I.T.\" formControlName=\"cuit\" #cuit>\n            </mat-form-field>\n          </mat-grid-tile>\n          <mat-grid-tile>\n            <mat-form-field>\n              <input matInput type=\"text\" placeholder=\"Razón Social\" formControlName=\"razonsoc\" #razonsoc>\n            </mat-form-field>\n          </mat-grid-tile>\n        </mat-grid-list>\n      </mat-expansion-panel>\n    </mat-accordion>\n    <mat-accordion>\n      <mat-expansion-panel [expanded]=\"true\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            <strong>Direcciones</strong>\n          </mat-panel-title>\n          <mat-panel-description>\n            Información de facturación y envíos\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <div formArrayName=\"address\" class=\"address\">\n          <div *ngFor=\"let address of NewCustomerForm.controls.address.controls; let i=index\">\n            <div [formGroupName]=\"i\">\n              <mat-grid-list cols=\"3\" rowHeight=\"60px\">\n                <mat-grid-tile>\n                  <mat-form-field>\n                    <input matInput type=\"text\" placeholder=\"Dirección\" formControlName=\"dir\" #dir>\n                  </mat-form-field>\n                </mat-grid-tile>\n                <mat-grid-tile>\n                  <mat-form-field>\n                    <input matInput type=\"text\" placeholder=\"Localidad\" formControlName=\"localidad\" #localidad>\n                  </mat-form-field>\n                </mat-grid-tile>\n                <mat-grid-tile>\n                  <mat-form-field>\n                    <input matInput type=\"text\" placeholder=\"Código Postal\" formControlName=\"codpos\" #codpos>\n                  </mat-form-field>\n                </mat-grid-tile>\n                <mat-grid-tile>\n                  <mat-form-field>\n                    <input matInput placeholder=\"Provincia\" formControlName=\"prov\" #prov>\n                  </mat-form-field>\n                </mat-grid-tile>\n                <mat-grid-tile>\n\n<!--\n                        <mat-form-field>\n                          <input matInput type=\"text\" placeholder=\"Flete\" formControlName=\"nom\" #flete>\n                        </mat-form-field>\n-->\n\n                </mat-grid-tile>\n              </mat-grid-list>\n              <div class=\"margin-20\" align=\"right\">\n                  <div fxFlex>\n                <a (click)=\"addAddress()\" style=\"cursor: pointer\" matTooltip=\"Agregar Dirección\" matTooltipPosition=\"above\">\n                  <mat-icon>add_circle_outline</mat-icon>\n                </a>\n              </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </mat-expansion-panel>\n    </mat-accordion>\n    <br />\n    <mat-card-actions align=\"middle\">\n      <div fxFlex></div><button mat-raised-button color=\"accent\" type=\"submit\">Enviar</button>\n    </mat-card-actions>\n  </form>\n  <p>\n    Form Value: {{ NewCustomerForm.value | json }}\n  </p>\n</mat-card>"

/***/ }),

/***/ "./src/app/customers/create-customers/create-customers.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/customers/create-customers/create-customers.component.ts ***!
  \**************************************************************************/
/*! exports provided: CreateCustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCustomersComponent", function() { return CreateCustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateCustomersComponent = /** @class */ (function () {
    function CreateCustomersComponent(fb, router, dataservice, userService, customersService) {
        this.fb = fb;
        this.router = router;
        this.dataservice = dataservice;
        this.userService = userService;
        this.customersService = customersService;
    }
    CreateCustomersComponent.prototype.ngOnInit = function () {
        this.isOpen = true;
        this.isOpen1 = false;
        this.selectedItems = [];
        this.sellerId = '37';
        // this.sellerId = this.dataservice.getSellerId();
        this.NewCustomerForm = this.fb.group({
            nom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            cuit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            razonsoc: [''],
            address: this.fb.array([
                this.initAddress(),
            ]),
            salesman: [this.sellerId],
        });
    };
    CreateCustomersComponent.prototype.initAddress = function () {
        return this.fb.group({
            dir: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            localidad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            codpos: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            prov: [''],
            flete: this.fb.array([
                this.initFlete(),
            ]),
        });
    };
    CreateCustomersComponent.prototype.initFlete = function () {
        return this.fb.group({
            nom: [''],
        });
    };
    CreateCustomersComponent.prototype.addAddress = function () {
        var control = this.NewCustomerForm.controls['address'];
        control.push(this.initAddress());
    };
    CreateCustomersComponent.prototype.onSubmit = function () {
        this.customersService.setCustomer(this.NewCustomerForm.value).subscribe(function (data) {
            console.log(data);
        });
    };
    CreateCustomersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-customers',
            template: __webpack_require__(/*! ./create-customers.component.html */ "./src/app/customers/create-customers/create-customers.component.html"),
            styles: [__webpack_require__(/*! ./create-customers.component.css */ "./src/app/customers/create-customers/create-customers.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services_customers_service__WEBPACK_IMPORTED_MODULE_3__["CustomersService"]])
    ], CreateCustomersComponent);
    return CreateCustomersComponent;
}());



/***/ }),

/***/ "./src/app/customers/customers.module.ts":
/*!***********************************************!*\
  !*** ./src/app/customers/customers.module.ts ***!
  \***********************************************/
/*! exports provided: CustomersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersModule", function() { return CustomersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _create_customers_create_customers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-customers/create-customers.component */ "./src/app/customers/create-customers/create-customers.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _view_customers_view_customers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-customers/view-customers.component */ "./src/app/customers/view-customers/view-customers.component.ts");
/* harmony import */ var _view_customers_details_view_customers_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-customers-details/view-customers-details.component */ "./src/app/customers/view-customers-details/view-customers-details.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _edit_customers_edit_customers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-customers/edit-customers.component */ "./src/app/customers/edit-customers/edit-customers.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var customersRoutes = [
    { path: 'customers/create', component: _create_customers_create_customers_component__WEBPACK_IMPORTED_MODULE_3__["CreateCustomersComponent"] },
    { path: 'customers/view', component: _view_customers_view_customers_component__WEBPACK_IMPORTED_MODULE_5__["ViewCustomersComponent"] },
    { path: 'customers/detail/:id', component: _view_customers_details_view_customers_details_component__WEBPACK_IMPORTED_MODULE_6__["ViewCustomersDetailsComponent"] },
    { path: 'customers/edit/:id', component: _edit_customers_edit_customers_component__WEBPACK_IMPORTED_MODULE_8__["EditCustomersDetailsComponent"] }
];
var CustomersModule = /** @class */ (function () {
    function CustomersModule() {
    }
    CustomersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(customersRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]
            ],
            declarations: [
                _create_customers_create_customers_component__WEBPACK_IMPORTED_MODULE_3__["CreateCustomersComponent"],
                _view_customers_view_customers_component__WEBPACK_IMPORTED_MODULE_5__["ViewCustomersComponent"],
                _view_customers_details_view_customers_details_component__WEBPACK_IMPORTED_MODULE_6__["ViewCustomersDetailsComponent"],
                _edit_customers_edit_customers_component__WEBPACK_IMPORTED_MODULE_8__["EditCustomersDetailsComponent"],
            ],
            exports: [
                _create_customers_create_customers_component__WEBPACK_IMPORTED_MODULE_3__["CreateCustomersComponent"],
                _view_customers_view_customers_component__WEBPACK_IMPORTED_MODULE_5__["ViewCustomersComponent"],
                _view_customers_details_view_customers_details_component__WEBPACK_IMPORTED_MODULE_6__["ViewCustomersDetailsComponent"],
            ]
        })
    ], CustomersModule);
    return CustomersModule;
}());



/***/ }),

/***/ "./src/app/customers/edit-customers/edit-customers.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/customers/edit-customers/edit-customers.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n    width: 94%;\n}\n\n.static_field {\n    text-align: left;\n    width: 100%;\n    font-size: 14px;\n    min-height: 35px;\n    display: inline-block;\n    vertical-align: top;\n    position: absolute;\n    top: 0;\n    padding-bottom: 5px;\n    bcustomers-bottom: 1px solid #949494;\n}\n\n.static_label {\n    color: #aaa;\n    display: block;\n    font-size: 11px;\n    height: 15px;\n    position: relative;\n    top: -3px;\n}\n\ntable {\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/customers/edit-customers/edit-customers.component.html":
/*!************************************************************************!*\
  !*** ./src/app/customers/edit-customers/edit-customers.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>Nuevo cliente</mat-card-title>\n  <form [formGroup]=\"EditCustomerForm\" (ngSubmit)=\"onSubmit()\">\n    <mat-accordion>\n      <mat-expansion-panel [expanded]=\"true\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            <strong>Datos del cliente</strong>\n          </mat-panel-title>\n          <mat-panel-description>\n            Información comercial\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <mat-grid-list cols=\"3\" rowHeight=\"60px\">\n          <mat-grid-tile>\n            <mat-form-field style=\"display:none\">\n              <input matInput type=\"text\" placeholder=\"Id\" formControlName=\"id\" #id [(ngModel)]=\"customersDetail.id\">\n            </mat-form-field>\n            <mat-form-field>\n              <input matInput placeholder=\"Nombre\" formControlName=\"nom\" #nom [(ngModel)]=\"customersDetail.nom\">\n            </mat-form-field>\n          </mat-grid-tile>\n          <mat-grid-tile>\n            <mat-form-field>\n              <input matInput type=\"text\" placeholder=\"C.U.I.T.\" formControlName=\"cuit\" #cuit [(ngModel)]=\"customersDetail.cuit\">\n            </mat-form-field>\n          </mat-grid-tile>\n          <mat-grid-tile>\n            <mat-form-field>\n              <input matInput type=\"text\" placeholder=\"Razón Social\" formControlName=\"razonsoc\" #razonsoc [(ngModel)]=\"customersDetail.razonsoc\">\n            </mat-form-field>\n          </mat-grid-tile>\n        </mat-grid-list>\n      </mat-expansion-panel>\n    </mat-accordion>\n    <mat-accordion>\n      <mat-expansion-panel [expanded]=\"true\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            <strong>Direcciones</strong>\n          </mat-panel-title>\n          <mat-panel-description>\n            Información de facturación y envíos\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <div *ngFor=\"let addr of customersDetail.address\">\n          <div formArrayName=\"address\" class=\"address\">\n            <div *ngFor=\"let address of EditCustomerForm.controls.address.controls; let i=index\">\n              <div [formGroupName]=\"i\">\n                <mat-grid-list cols=\"3\" rowHeight=\"60px\">\n                  <mat-grid-tile>\n                    <mat-form-field style=\"display:none\">\n                      <input matInput type=\"text\" placeholder=\"Id\" formControlName=\"id\" #id [(ngModel)]=\"addr.id\">\n                    </mat-form-field>\n                    <mat-form-field>\n                      <input matInput type=\"text\" placeholder=\"Dirección\" formControlName=\"dir\" #dir [(ngModel)]=\"addr.dir\">\n                    </mat-form-field>\n                  </mat-grid-tile>\n                  <mat-grid-tile>\n                    <mat-form-field>\n                      <input matInput type=\"text\" placeholder=\"Localidad\" formControlName=\"localidad\" #localidad\n                        [(ngModel)]=\"addr.localidad\">\n                    </mat-form-field>\n                  </mat-grid-tile>\n                  <mat-grid-tile>\n                    <mat-form-field>\n                      <input matInput type=\"text\" placeholder=\"Código Postal\" formControlName=\"codpos\" #codpos\n                        [(ngModel)]=\"addr.codpos\">\n                    </mat-form-field>\n                  </mat-grid-tile>\n                  <mat-grid-tile>\n                    <mat-form-field>\n                      <input matInput placeholder=\"Provincia\" formControlName=\"prov\" #prov [(ngModel)]=\"addr.prov\">\n                    </mat-form-field>\n                  </mat-grid-tile>\n                  <mat-grid-tile>\n\n                    <!--\n                          <mat-form-field>\n                            <input matInput type=\"text\" placeholder=\"Flete\" formControlName=\"nom\" #flete  [(ngModel)]=\"addr.dir\">\n                          </mat-form-field>\n  -->\n\n                  </mat-grid-tile>\n                </mat-grid-list>\n                <div class=\"margin-20\" align=\"right\">\n                  <div fxFlex>\n                    <a (click)=\"addAddress()\" style=\"cursor: pointer\" matTooltip=\"Agregar Dirección\" matTooltipPosition=\"above\">\n                      <mat-icon>add_circle_outline</mat-icon>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </mat-expansion-panel>\n    </mat-accordion>\n    <br />\n    <mat-card-actions align=\"middle\">\n      <div fxFlex></div><button mat-raised-button color=\"accent\" type=\"submit\">Enviar</button>\n    </mat-card-actions>\n  </form>\n  <p>\n    Form Value: {{ EditCustomerForm.value | json }}\n  </p>\n</mat-card>"

/***/ }),

/***/ "./src/app/customers/edit-customers/edit-customers.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/customers/edit-customers/edit-customers.component.ts ***!
  \**********************************************************************/
/*! exports provided: EditCustomersDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCustomersDetailsComponent", function() { return EditCustomersDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditCustomersDetailsComponent = /** @class */ (function () {
    function EditCustomersDetailsComponent(fb, router, dataservice, userService, customersService, route) {
        this.fb = fb;
        this.router = router;
        this.dataservice = dataservice;
        this.userService = userService;
        this.customersService = customersService;
        this.route = route;
    }
    EditCustomersDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isOpen = true;
        this.isOpen1 = false;
        this.selectedItems = [];
        this.sellerId = '37';
        console.log('on init');
        var id = this.route.snapshot.paramMap.get('id');
        console.log('getid' + id);
        this.customersService.getCustomer(id).subscribe(function (data) {
            _this.customersDetail = data;
            // console.log('Customers Detail DATA: ..' + data);
        });
        // this.sellerId = this.dataservice.getSellerId();
        this.EditCustomerForm = this.fb.group({
            id: [''],
            nom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            cuit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            razonsoc: [''],
            address: this.fb.array([
                this.initAddress(),
            ]),
            salesman: [this.sellerId],
        });
    };
    EditCustomersDetailsComponent.prototype.initAddress = function () {
        return this.fb.group({
            id: [''],
            dir: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            localidad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            codpos: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            prov: [''],
            flete: this.fb.array([
                this.initFlete(),
            ]),
        });
    };
    EditCustomersDetailsComponent.prototype.initFlete = function () {
        return this.fb.group({
            nom: [''],
        });
    };
    EditCustomersDetailsComponent.prototype.addAddress = function () {
        var control = this.EditCustomerForm.controls['address'];
        control.push(this.initAddress());
    };
    EditCustomersDetailsComponent.prototype.onSubmit = function () {
        this.customersService.setCustomer(this.EditCustomerForm.value).subscribe(function (data) {
            console.log(data);
        });
    };
    EditCustomersDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-customers',
            template: __webpack_require__(/*! ./edit-customers.component.html */ "./src/app/customers/edit-customers/edit-customers.component.html"),
            styles: [__webpack_require__(/*! ./edit-customers.component.css */ "./src/app/customers/edit-customers/edit-customers.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services_customers_service__WEBPACK_IMPORTED_MODULE_3__["CustomersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], EditCustomersDetailsComponent);
    return EditCustomersDetailsComponent;
}());



/***/ }),

/***/ "./src/app/customers/view-customers-details/view-customers-details.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/customers/view-customers-details/view-customers-details.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".static_field {\n    text-align: left;\n    width: 100%;\n    font-size: 16px;\n}\n.static_label {\n    color: #4caf50;\n    display: block;\n    font-size: 13px;\n}\ntable {\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/customers/view-customers-details/view-customers-details.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/customers/view-customers-details/view-customers-details.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>Ficha de Cliente: {{customersDetail.nom}}</mat-card-title>\n\n  <mat-accordion>\n    <mat-expansion-panel [expanded]=\"true\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <strong>Datos del cliente</strong>\n        </mat-panel-title>\n        <mat-panel-description>\n          Información comercial\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <mat-grid-list cols=\"3\" rowHeight=\"50px\">\n        <mat-grid-tile>\n          <div class=\"static_field\">\n            <span class=\"static_label\">Cliente</span>\n            {{customersDetail.nom}}\n          </div>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <div class=\"static_field\">\n            <span class=\"static_label\">C.U.I.T.</span>\n            {{customersDetail.cuit}}\n          </div>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <div class=\"static_field\">\n            <span class=\"static_label\">Código de Facturación</span>\n            {{customersDetail.codfac}}\n          </div>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <div class=\"static_field\">\n            <span class=\"static_label\">Razón Social</span>\n            {{customersDetail.razonsoc}}\n          </div>\n        </mat-grid-tile>\n\n        <mat-grid-tile *ngIf=\"customersDetail.salesman.id == '37'\" [colspan]=\"3\">\n          <div class=\"static_field\">\n            <span class=\"static_label\">Vendedor</span>\n            {{customersDetail.salesman.nom}}\n          </div>\n        </mat-grid-tile>\n      </mat-grid-list>\n    </mat-expansion-panel>\n  </mat-accordion>\n  <mat-accordion>\n    <mat-expansion-panel [expanded]=\"true\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <strong>Direcciones</strong>\n        </mat-panel-title>\n        <mat-panel-description>\n          Información de facturación y envíos\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <div *ngFor=\"let addr of customersDetail.address\">\n        <mat-grid-list cols=\"3\" rowHeight=\"50px\">\n          <mat-grid-tile>\n            <div class=\"static_field\">\n              <span class=\"static_label\">Dirección</span>\n              {{addr.dir}}\n            </div>\n          </mat-grid-tile>\n          <mat-grid-tile>\n            <div class=\"static_field\">\n              <span class=\"static_label\">Localidad</span>\n              {{addr.localidad}}\n            </div>\n          </mat-grid-tile>\n          <mat-grid-tile>\n            <div class=\"static_field\">\n              <span class=\"static_label\">Código Postal</span>\n              {{addr.codpos}}\n            </div>\n          </mat-grid-tile>\n          <mat-grid-tile>\n            <div class=\"static_field\">\n              <span class=\"static_label\">Provincia</span>\n              {{addr.prov}}\n            </div>\n          </mat-grid-tile>\n          <mat-grid-tile>\n            <div class=\"static_field\">\n              <span class=\"static_label\">Flete</span>\n              {{addr.flete.nom}}\n            </div>\n          </mat-grid-tile>\n        </mat-grid-list>\n\n      </div>\n    </mat-expansion-panel>\n  </mat-accordion>\n  <mat-card-actions align=\"middle\">\n    <div fxFlex></div><button mat-raised-button color=\"accent\" routerLink='/customers/edit/{{customersDetail.id}}'>Editar</button>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/customers/view-customers-details/view-customers-details.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/customers/view-customers-details/view-customers-details.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ViewCustomersDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCustomersDetailsComponent", function() { return ViewCustomersDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/customers.service */ "./src/app/services/customers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewCustomersDetailsComponent = /** @class */ (function () {
    function ViewCustomersDetailsComponent(route, router, customersService) {
        this.route = route;
        this.router = router;
        this.customersService = customersService;
    }
    ViewCustomersDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('on init');
        var id = this.route.snapshot.paramMap.get('id');
        this.customersService.getCustomer(id).subscribe(function (data) {
            _this.customersDetail = data;
            console.log('Customers Detail DATA: ..' + data);
        });
        // this.getDataFake();
        // console.log('Customers Detail ORDER_DETAIL: ..' + this.customersDetail);
    };
    ViewCustomersDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-customers-details',
            template: __webpack_require__(/*! ./view-customers-details.component.html */ "./src/app/customers/view-customers-details/view-customers-details.component.html"),
            styles: [__webpack_require__(/*! ./view-customers-details.component.css */ "./src/app/customers/view-customers-details/view-customers-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_customers_service__WEBPACK_IMPORTED_MODULE_2__["CustomersService"]])
    ], ViewCustomersDetailsComponent);
    return ViewCustomersDetailsComponent;
}());



/***/ }),

/***/ "./src/app/customers/view-customers/view-customers.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/customers/view-customers/view-customers.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n}\n.mat-form-field {\n    width: 100%;\n}\n.mat-paginator {\n    display: block;\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/customers/view-customers/view-customers.component.html":
/*!************************************************************************!*\
  !*** ./src/app/customers/view-customers/view-customers.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>Mis Clientes</mat-card-title>\n  <mat-grid-list cols=\"2\" rowHeight=\"80px\">\n    <mat-grid-tile>\n      <mat-form-field>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtrar resultados\">\n      </mat-form-field>\n    </mat-grid-tile>\n    <mat-grid-tile>\n      <mat-paginator [pageSizeOptions]=\"[25, 50, 100]\" showFirstLastButtons>\n      </mat-paginator>\n    </mat-grid-tile>\n  </mat-grid-list>\n  <div class=\"spinner-container\" *ngIf=\"dataSource.loading$ | async\">\n    <mat-spinner></mat-spinner>\n  </div>\n  <table mat-table [dataSource]=\"dataSource\" matSort>\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n      <td mat-cell *matCellDef=\"let customer\"> {{customer.id}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"nom\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Cliente </th>\n      <td mat-cell *matCellDef=\"let customer\"> {{ (customer.nom)}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"button\">\n      <th mat-header-cell *matHeaderCellDef> Ver </th>\n      <td mat-cell *matCellDef=\"let customer\">\n        <button mat-mini-fab color=\"accent\" class=\"col-xs-1\" [routerLink]=\"['/customers/detail', customer.id]\"\n          matTooltip=\"Ver detalle\" matTooltipPosition=\"above\">\n          <mat-icon aria-label=\"Ver detalle\">search</mat-icon>\n        </button> </td>\n    </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n  </table>\n  <button mat-raised-button color=\"accent\" [routerLink]=\"['/customers/view']\">\n    <mat-icon aria-label=\"Volver\">arrow_back</mat-icon> Volver\n  </button>\n</mat-card>"

/***/ }),

/***/ "./src/app/customers/view-customers/view-customers.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/customers/view-customers/view-customers.component.ts ***!
  \**********************************************************************/
/*! exports provided: ViewCustomersComponent, CustomersSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCustomersComponent", function() { return ViewCustomersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersSource", function() { return CustomersSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ViewCustomersComponent = /** @class */ (function () {
    function ViewCustomersComponent(dataservice, router, route, customersService) {
        this.dataservice = dataservice;
        this.router = router;
        this.route = route;
        this.customersService = customersService;
        this.customersData = null;
        this.displayedColumns = ['id', 'nom', 'button'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](this.customers);
    }
    ViewCustomersComponent.prototype.ngOnInit = function () {
        var _this = this;
        // call service to retrieve customers by seller
        var sellerId = '37';
        this.customersService.getCustomers(sellerId).subscribe(function (data) {
            _this.customersData = data;
            _this.dataSource.data = _this.customersData;
        });
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    ViewCustomersComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"])
    ], ViewCustomersComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"])
    ], ViewCustomersComponent.prototype, "paginator", void 0);
    ViewCustomersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-customers',
            template: __webpack_require__(/*! ./view-customers.component.html */ "./src/app/customers/view-customers/view-customers.component.html"),
            styles: [__webpack_require__(/*! ./view-customers.component.css */ "./src/app/customers/view-customers/view-customers.component.css")],
            providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _services_customers_service__WEBPACK_IMPORTED_MODULE_1__["CustomersService"]]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_customers_service__WEBPACK_IMPORTED_MODULE_1__["CustomersService"]])
    ], ViewCustomersComponent);
    return ViewCustomersComponent;
}());

var CustomersSource = /** @class */ (function (_super) {
    __extends(CustomersSource, _super);
    function CustomersSource(customersService) {
        var _this = _super.call(this) || this;
        _this.customersService = customersService;
        _this.customersSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        _this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        _this.loading$ = _this.loadingSubject.asObservable();
        return _this;
    }
    CustomersSource.prototype.connect = function (collectionViewer) {
        var sellerId = '37';
        console.log('view customers...' + sellerId);
        return this.customersService.getCustomers(sellerId);
        // return this.customersSubject.asObservable();
    };
    CustomersSource.prototype.disconnect = function (collectionViewer) {
        //this.customersService.complete();
        //this.loadingSubject.complete();
    };
    return CustomersSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["DataSource"]));



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/orders/create-order/create-order.component.css":
/*!****************************************************************!*\
  !*** ./src/app/orders/create-order/create-order.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n    width: 94%;\n}\n\n.static_field {\n    text-align: left;\n    width: 100%;\n    font-size: 14px;\n    min-height: 35px;\n    display: inline-block;\n    vertical-align: top;\n    position: absolute;\n    top: 0;\n    padding-bottom: 5px;\n    border-bottom: 1px solid #949494;\n}\n\n.static_label {\n    color: #aaa;\n    display: block;\n    font-size: 11px;\n    height: 15px;\n    position: relative;\n    top: -3px;\n}\n\ntable {\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/orders/create-order/create-order.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/orders/create-order/create-order.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>Orden de Pedido</mat-card-title>\n  <mat-accordion>\n    <mat-expansion-panel [expanded]=\"true\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <strong>Datos del pedido</strong>\n        </mat-panel-title>\n        <mat-panel-description>\n          Información del cliente\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <mat-grid-list cols=\"3\" rowHeight=\"60px\">\n        <mat-grid-tile>\n          <mat-form-field>\n            <mat-select class=\"custom-select\" placeholder=\"Cliente\" (ngModelChange)=\"onClientSelected($event)\"\n              [(ngModel)]=\"clientId\" data-live-search=\"true\">\n                <mat-option *ngFor=\"let client of clients\" [value]=\"client.id\">\n                  {{client.nom}}\n                </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <!--<select class=\"custom-select\" (ngModelChange)=\"onClientSelected($event)\" [(ngModel)]=\"clientId\"\n            data-live-search=\"true\">\n            <option [value]=\"selectedAddress\" selected=\"selected\">selectione un cliente\n            </option>\n            <option *ngFor=\"let client of clients\" [ngValue]=client.id> {{client.nom}}\n            </option>\n          </select>-->\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <mat-form-field *ngIf=\"selectedClient\">\n            <mat-select class=\"custom-select\" placeholder=\"Domicilio\" (ngModelChange)=\"onAdressSelected($event)\"\n              [(ngModel)]=\"selectedAddress\" data-live-search=\"true\">\n              <!--<mat-option [value]=\"selectedAddress\">\n                {{selectedAddress.dir}} - {{selectedAddress.localidad}}\n              </mat-option>-->\n              <mat-option *ngFor=\"let addr of selectedClient.address\" [value]=addr.id> {{addr.dir}} -\n                {{addr.localidad}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <!--<select *ngIf=\"selectedClient\" class=\"custom-select\" (ngModelChange)=\"onAdressSelected($event)\" [(ngModel)]=\"selectedAddress\"\n            data-live-search=\"true\" id=\"selectedAddress\">\n            <option [value]=\"selectedAddress\" selected=\"selected\">{{selectedAddress.dir}} -\n              {{selectedAddress.localidad}}\n            </option>\n            <option *ngFor=\"let addr of selectedClient.address\" [ngValue]=addr.id> {{addr.dir}} - {{addr.localidad}}\n            </option>\n          </select>-->\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <div class=\"static_field\">\n            <span class=\"static_label\">Flete</span>\n            {{ (selectedClient && selectedAddress && selectedAddress.flete) ? selectedAddress.flete.nom : ''}}\n          </div>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <mat-form-field>\n            <mat-select placeholder=\"Pago\" [(ngModel)]=\"conven\" data-live-search=\"true\" id=\"convenId\">\n              <mat-option [value]=\"1\" selected=\"selected\">CONTADO</mat-option>\n              <mat-option [value]=\"2\">CHEQUES 30 dias</mat-option>\n              <mat-option [value]=\"3\">CHEQUES 30 - 60 dias</mat-option>\n              <mat-option [value]=\"4\">CHEQUES 30 - 60 - 90 dias</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"2\">\n          <mat-form-field>\n            <textarea matInput placeholder=\"Observaciones\"></textarea>\n          </mat-form-field>\n        </mat-grid-tile>\n      </mat-grid-list>\n    </mat-expansion-panel>\n  </mat-accordion>\n  <mat-accordion>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <strong>Detalle del pedido</strong>\n        </mat-panel-title>\n        <mat-panel-description>\n          Detalle de la compra\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <mat-grid-list cols=\"9\" rowHeight=\"60px\">\n        <mat-grid-tile [colspan]=\"8\">\n          <mat-form-field>\n            <mat-select placeholder=\"Artículo\" class=\"custom-select\" (ngModelChange)=\"onArtSelected($event)\"\n              [(ngModel)]=\"artId\" data-live-search=\"true\">\n              <mat-option *ngFor=\"let art of articulos\" [value]=art.id> {{art.nom}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"1\">\n          <mat-form-field>\n            <input matInput placeholder=\"Precio\" [(ngModel)]=\"price\" type=\"number\" min=\"0\" step=\"0.01\"\n              data-number-to-fixed=\"2\" data-number-stepfactor=\"100\" class=\"form-control currency\" id=\"price\" />\n          </mat-form-field>\n        </mat-grid-tile>\n      </mat-grid-list>\n      <mat-grid-list cols=\"9\" rowHeight=\"40px\">\n        <mat-grid-tile [colspan]=\"1\"><strong>Código</strong></mat-grid-tile>\n        <mat-grid-tile [colspan]=\"6\"><strong>Descripción</strong></mat-grid-tile>\n        <mat-grid-tile [colspan]=\"2\"><strong>Cantidad</strong></mat-grid-tile>\n        <div *ngFor=\"let item of selectedItems; let i = index\">\n          <mat-grid-tile [colspan]=\"1\">{{item.itemdatum.variante.codigo}} </mat-grid-tile>\n          <mat-grid-tile [colspan]=\"6\">{{item.itemdatum.variante.nom}}</mat-grid-tile>\n          <mat-grid-tile [colspan]=\"1\">\n            <mat-form-field><input matInput placeholder=\"Cantidad\" #selectedCount (change)=\"addCount(i, selectedCount.value);\"></mat-form-field>\n          </mat-grid-tile>\n          <mat-grid-tile [colspan]=\"1\">\n            <button mat-icon-button color=\"accent\" (click)=\"removeVariante(i)\" matTooltip=\"Eliminar variante\"\n              matTooltipPosition=\"above\">\n              <mat-icon aria-label=\"Eliminar variante\">remove_circle_outline</mat-icon>\n            </button>\n          </mat-grid-tile>\n        </div>\n      </mat-grid-list>\n    </mat-expansion-panel>\n  </mat-accordion>\n  <mat-accordion *ngIf=\"hasVariantes\">\n    <mat-expansion-panel [expanded]=\"true\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <strong>Seleccione Variantes</strong>\n        </mat-panel-title>\n        <mat-panel-description>\n          Seleccione las variantes del producto que desea agregar al pedido\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <mat-grid-list cols=\"9\" rowHeight=\"40px\">\n        <mat-grid-tile [colspan]=\"1\"><strong>Código</strong></mat-grid-tile>\n        <mat-grid-tile [colspan]=\"7\"><strong>Descripción</strong></mat-grid-tile>\n        <mat-grid-tile [colspan]=\"1\"><strong>Agregar</strong></mat-grid-tile>\n        <div *ngFor=\"let item of variantes\">\n          <mat-grid-tile [colspan]=\"1\">{{item.codigo}}</mat-grid-tile>\n          <mat-grid-tile [colspan]=\"7\">{{item.nom}}</mat-grid-tile>\n          <mat-grid-tile [colspan]=\"1\">\n            <button id=\"button\" mat-icon-button color=\"accent\" (click)=\"addVariante(item)\" matTooltip=\"Agregar variante\"\n              matTooltipPosition=\"above\">\n              <mat-icon aria-label=\"Agregar variante\">add_circle_outline</mat-icon>\n            </button>\n          </mat-grid-tile>\n        </div>\n      </mat-grid-list>\n    </mat-expansion-panel>\n  </mat-accordion>\n  <br/>\n  <mat-card-actions align=\"middle\">\n  <div fxFlex></div><button mat-raised-button color=\"accent\" (click)=\"submitOrderDetail()\">Enviar</button>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./src/app/orders/create-order/create-order.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/orders/create-order/create-order.component.ts ***!
  \***************************************************************/
/*! exports provided: CreateOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOrderComponent", function() { return CreateOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/orders.service */ "./src/app/services/orders.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateOrderComponent = /** @class */ (function () {
    function CreateOrderComponent(router, dataservice, userService, orderService) {
        this.router = router;
        this.dataservice = dataservice;
        this.userService = userService;
        this.orderService = orderService;
    }
    CreateOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isOpen = true;
        this.isOpen1 = false;
        this.selectedItems = [];
        this.sellerId = this.dataservice.getSellerId();
        this.userService.getClientsBySeller(this.sellerId).subscribe(function (data) {
            _this.clients = data;
            _this.selectedClient = _this.clients[0];
            console.log(_this.clients[0]);
        });
        // LOADING ARTICULOS
        this.orderService.getArticulos().subscribe(function (data) {
            _this.articulos = data;
        });
    };
    CreateOrderComponent.prototype.onClientSelected = function (event) {
        var _this = this;
        console.log('Selected value');
        console.log(event);
        this.clientId = event;
        //this.clientId = '621';
        this.userService.getClient(this.clientId).subscribe(function (data) {
            _this.selectedClient = data;
            _this.selectedAddress = _this.selectedClient.address[0];
            _this.selectedFlete = _this.selectedAddress.flete;
            _this.conven = '1';
            console.log('call client works... ' + _this.clientId);
        });
    };
    CreateOrderComponent.prototype.onCondVentSelected = function () {
    };
    CreateOrderComponent.prototype.onArtSelected = function (event) {
        var _this = this;
        this.artId = event;
        this.orderService.getArticuloById(this.artId).subscribe(function (data) {
            _this.articulo = data;
            if (_this.articulo && _this.articulo.variantes && _this.articulo.variantes.length > 0) {
                _this.variantes = _this.articulo.variantes;
                _this.hasVariantes = true;
            }
            else {
                _this.hasVariantes = false;
            }
            console.log('call getArticuloById works... ' + _this.articulo.art_id + ' ' + _this.variantes.length);
        });
    };
    CreateOrderComponent.prototype.addVariante = function (variante) {
        if (this.selectedItems.length == 0 || !(this.selectedItems.some(function (e) { return e.itemdata === variante.itemdata_id; }))) {
            var peditem = void 0;
            peditem = {
                itemdata: variante.itemdata_id,
                can_ped: 0,
                can_aut: 0,
                pre_ped: 0,
                pre_aut: 0,
                itemdatum: {
                    id: 0,
                    art1: {
                        id: this.artId,
                        codfac: '',
                        nom: '',
                    },
                    variante: {
                        itemdata_id: variante.itemdata_id,
                        codigo: variante.codigo,
                        nom: variante.nom,
                    }
                }
            };
            this.selectedItems.push(peditem);
            console.log('selectedItems= ' + this.selectedItems.length + '   variante nombre=' + this.selectedItems[0].itemdatum.variante.nom);
        }
    };
    CreateOrderComponent.prototype.addCount = function (i, selectedCount) {
        this.selectedItems[i].can_ped = selectedCount;
        console.log('cantidad pedida=' + this.selectedItems[i].can_ped + '   index ' + i);
    };
    CreateOrderComponent.prototype.removeVariante = function (index) {
        this.selectedItems.splice(index, 1);
    };
    CreateOrderComponent.prototype.submitOrderDetail = function () {
        console.log('precio:' + this.price);
        for (var _i = 0, _a = this.selectedItems; _i < _a.length; _i++) {
            var item = _a[_i];
            item.pre_ped = this.price;
        }
        var order;
        var seller;
        console.log('submitOrderDetail= ');
        order = {
            id: 0,
            nro: 0,
            fem: new Date(),
            ven: Number(this.sellerId),
            cli: this.selectedClient.id,
            conven: this.conven,
            observ: this.observaciones,
            cliente: this.selectedClient,
            vend: seller,
            address: this.selectedAddress,
            clidir: Number(this.selectedAddress.id),
            peditms: this.selectedItems,
        };
        this.orderService.submitOrder(order).subscribe(function (data) {
            console.log('order posteada');
        });
        var root = 'orders/view';
        this.router.navigate([root]);
    };
    CreateOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-order',
            template: __webpack_require__(/*! ./create-order.component.html */ "./src/app/orders/create-order/create-order.component.html"),
            styles: [__webpack_require__(/*! ./create-order.component.css */ "./src/app/orders/create-order/create-order.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services_orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"]])
    ], CreateOrderComponent);
    return CreateOrderComponent;
}());



/***/ }),

/***/ "./src/app/orders/orders.module.ts":
/*!*****************************************!*\
  !*** ./src/app/orders/orders.module.ts ***!
  \*****************************************/
/*! exports provided: OrdersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersModule", function() { return OrdersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _create_order_create_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-order/create-order.component */ "./src/app/orders/create-order/create-order.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _view_orders_view_orders_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-orders/view-orders.component */ "./src/app/orders/view-orders/view-orders.component.ts");
/* harmony import */ var _view_order_details_view_order_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-order-details/view-order-details.component */ "./src/app/orders/view-order-details/view-order-details.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ordersRoutes = [
    { path: 'orders/create', component: _create_order_create_order_component__WEBPACK_IMPORTED_MODULE_3__["CreateOrderComponent"] },
    { path: 'orders/view', component: _view_orders_view_orders_component__WEBPACK_IMPORTED_MODULE_5__["ViewOrdersComponent"] },
    { path: 'orders/detail/:id', component: _view_order_details_view_order_details_component__WEBPACK_IMPORTED_MODULE_6__["ViewOrderDetailsComponent"] }
];
var OrdersModule = /** @class */ (function () {
    function OrdersModule() {
    }
    OrdersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ordersRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]
            ],
            declarations: [
                _create_order_create_order_component__WEBPACK_IMPORTED_MODULE_3__["CreateOrderComponent"],
                _view_orders_view_orders_component__WEBPACK_IMPORTED_MODULE_5__["ViewOrdersComponent"],
                _view_order_details_view_order_details_component__WEBPACK_IMPORTED_MODULE_6__["ViewOrderDetailsComponent"]
            ],
            exports: [
                _create_order_create_order_component__WEBPACK_IMPORTED_MODULE_3__["CreateOrderComponent"],
                _view_orders_view_orders_component__WEBPACK_IMPORTED_MODULE_5__["ViewOrdersComponent"],
                _view_order_details_view_order_details_component__WEBPACK_IMPORTED_MODULE_6__["ViewOrderDetailsComponent"],
            ]
        })
    ], OrdersModule);
    return OrdersModule;
}());



/***/ }),

/***/ "./src/app/orders/view-order-details/view-order-details.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/orders/view-order-details/view-order-details.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".static_field {\n    text-align: left;\n    width: 100%;\n    font-size: 16px;\n}\n.static_label {\n    color: #4caf50;\n    display: block;\n    font-size: 13px;\n}\ntable {\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/orders/view-order-details/view-order-details.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/orders/view-order-details/view-order-details.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>Detalle del Pedido #{{orderDetail.id}}</mat-card-title>\n  <mat-accordion>\n    <mat-expansion-panel [expanded]=\"true\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <strong>Datos del pedido</strong>\n        </mat-panel-title>\n        <mat-panel-description>\n          Información del cliente\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <mat-grid-list cols=\"3\" rowHeight=\"50px\">\n        <mat-grid-tile>\n          <div class=\"static_field\">\n            <span class=\"static_label\">Cliente</span>\n            {{orderDetail.cliente.nom}}\n          </div>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <div class=\"static_field\">\n            <span class=\"static_label\"># Pedido</span>\n            {{orderDetail.id}}\n          </div>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <div class=\"static_field\">\n            <span class=\"static_label\">Fecha</span>\n            {{orderDetail.fem| date:'dd-MM-yyyy'}}\n          </div>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <div class=\"static_field\">\n            <span class=\"static_label\">Dirección</span>\n            {{orderDetail.address.dir}} - {{orderDetail.address.localidad}}\n          </div>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <div class=\"static_field\">\n            <span class=\"static_label\">Flete</span>\n            <!-- {{ orderDetail.address.flete.nom }} -->\n          </div>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <div class=\"static_field\">\n            <span class=\"static_label\">Pago</span>\n            <!-- {{ orderDetail.address.flete.nom }} -->\n          </div>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"3\">\n          <div class=\"static_field\">\n            <span class=\"static_label\">Observaciones</span>\n            <!-- {{ orderDetail.address.flete.nom }} -->\n          </div>\n        </mat-grid-tile>\n      </mat-grid-list>\n    </mat-expansion-panel>\n  </mat-accordion>\n  <mat-accordion>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <strong>Detalle del pedido</strong>\n        </mat-panel-title>\n        <mat-panel-description>\n          Detalle de la compra\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <!--<table mat-table [dataSource]=\"orderDetail.peditms\" class=\"mat-elevation-z8\">\n\n\n        <ng-container matColumnDef=\"itemdatum\">\n          <th mat-header-cell *matHeaderCellDef># Art</th>\n          <td mat-cell *matCellDef=\"let item\"> {{ (item && item.itemdatum && item.itemdatum.art) ?\n            item.itemdatum.art.codfac : ''}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"itemname\">\n          <th mat-header-cell *matHeaderCellDef>Descripción</th>\n          <td mat-cell *matCellDef=\"let item\"> {{ (item && item.itemdatum && item.itemdatum.art) ?\n            item.itemdatum.art.nom : ''}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"itemvariant\">\n          <th mat-header-cell *matHeaderCellDef>Variante</th>\n          <td mat-cell *matCellDef=\"let item\"> {{ (item && item.itemdatum && item.itemdatum.variante) ?\n            item.itemdatum.variante.nom: '' }} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"can_ped\">\n          <th mat-header-cell *matHeaderCellDef>Cant. Pedida</th>\n          <td mat-cell *matCellDef=\"let item\"> {{ (item)? item.can_ped: ''}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"can_ped\">\n          <th mat-header-cell *matHeaderCellDef>Cant. Autorizada</th>\n          <td mat-cell *matCellDef=\"let item\"> {{ (item)? item.can_aut: ''}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"pre_ped\">\n          <th mat-header-cell *matHeaderCellDef>$ Pedido</th>\n          <td mat-cell *matCellDef=\"let item\"> {{ (item)? item.pre_ped: ''}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"pre_ped\">\n          <th mat-header-cell *matHeaderCellDef>$ Autorizad0</th>\n          <td mat-cell *matCellDef=\"let item\"> {{ (item)? item.pre_aut: ''}} </td>\n        </ng-container>\n      </table>-->\n\n      <table>\n        <thead>\n          <tr>\n            <th class=\"col-xs-1\"># Art</th>\n            <th class=\"col-xs-4 \">Desc</th>\n            <th class=\"col-xs-3\">Variante</th>\n            <th class=\"col-xs-1\">Cant. Pedida</th>\n            <th class=\"col-xs-1\">Cant. Autor.</th>\n            <th class=\"col-xs-1\">$ pedido</th>\n            <th class=\"col-xs-1\">$ Autot.</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of orderDetail.peditms\">\n            <td class=\"col-xs-1\"> {{ (item && item.itemdatum && item.itemdatum.art) ? item.itemdatum.art.codfac : ''}}\n            </td>\n            <td class=\"col-xs-4\"> {{ (item && item.itemdatum && item.itemdatum.art) ? item.itemdatum.art.nom : ''}}</td>\n            <td class=\"col-xs-3\"> {{ (item && item.itemdatum && item.itemdatum.variante) ? item.itemdatum.variante.nom:\n              '' }} </td>\n            <td class=\"col-xs-1\"> {{ (item)? item.can_ped: ''}}</td>\n            <td class=\"col-xs-1\"> {{ (item)? item.can_aut: ''}}</td>\n            <td class=\"col-xs-1\"> {{ (item)? item.pre_ped: ''}}</td>\n            <td class=\"col-xs-1\"> {{ (item)? item.pre_aut: '' }}</td>\n          </tr>\n        </tbody>\n      </table>\n\n    </mat-expansion-panel>\n  </mat-accordion>\n</mat-card>"

/***/ }),

/***/ "./src/app/orders/view-order-details/view-order-details.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/orders/view-order-details/view-order-details.component.ts ***!
  \***************************************************************************/
/*! exports provided: ViewOrderDetailsComponent, ViewOrderDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewOrderDetailsComponent", function() { return ViewOrderDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewOrderDetails", function() { return ViewOrderDetails; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/orders.service */ "./src/app/services/orders.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewOrderDetailsComponent = /** @class */ (function () {
    function ViewOrderDetailsComponent(route, router, orderService) {
        this.route = route;
        this.router = router;
        this.orderService = orderService;
    }
    ViewOrderDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('on init');
        var id = this.route.snapshot.paramMap.get('id');
        this.orderService.getOrder(id).subscribe(function (data) {
            _this.orderDetail = data;
            console.log('Order Detail DATA: ..' + data);
        });
        //this.getDataFake();
        console.log('Order Detail ORDER_DETAIL: ..' + this.orderDetail);
    };
    ViewOrderDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-order-details',
            template: __webpack_require__(/*! ./view-order-details.component.html */ "./src/app/orders/view-order-details/view-order-details.component.html"),
            styles: [__webpack_require__(/*! ./view-order-details.component.css */ "./src/app/orders/view-order-details/view-order-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"]])
    ], ViewOrderDetailsComponent);
    return ViewOrderDetailsComponent;
}());

var ViewOrderDetails = /** @class */ (function () {
    function ViewOrderDetails() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        //dataSource = this.orderDetail;
    }
    return ViewOrderDetails;
}());



/***/ }),

/***/ "./src/app/orders/view-orders/view-orders.component.css":
/*!**************************************************************!*\
  !*** ./src/app/orders/view-orders/view-orders.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/orders/view-orders/view-orders.component.html":
/*!***************************************************************!*\
  !*** ./src/app/orders/view-orders/view-orders.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>Mis Pedidos</mat-card-title>\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th class=\"col-xs-1\">Nro</th>\n        <th class=\"col-xs-4\">Cliente</th>\n        <th class=\"col-xs-2\">Fecha</th>\n        <th class=\"col-xs-4\">Direccion</th>\n        <th class=\"col-xs-1\"></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let order of orders\">\n        <td class=\"col-xs-1\">{{order.nro}}</td>\n        <td class=\"col-xs-4\">{{order.cliente.nom}}</td>\n        <td class=\"col-xs-2\">{{order.fem| date:'dd-MM-yyyy'}}</td>\n        <td class=\"col-xs-4\">{{ (order.address && order.address.dir) ?order.address.dir : \"\"}}</td>\n        <button mat-mini-fab color=\"accent\" class=\"col-xs-1\" [routerLink]=\"['/orders/detail', order.id]\" matTooltip=\"Ver pedido\"\n        matTooltipPosition=\"above\">\n          <mat-icon aria-label=\"Ver pedido\">search</mat-icon>\n        </button>\n      </tr>\n    </tbody>\n  </table>\n  <button mat-raised-button color=\"accent\" [routerLink]=\"['/sellers']\"><mat-icon aria-label=\"Volver\">arrow_back</mat-icon> Volver</button>\n</mat-card>"

/***/ }),

/***/ "./src/app/orders/view-orders/view-orders.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/orders/view-orders/view-orders.component.ts ***!
  \*************************************************************/
/*! exports provided: ViewOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewOrdersComponent", function() { return ViewOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/orders.service */ "./src/app/services/orders.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewOrdersComponent = /** @class */ (function () {
    function ViewOrdersComponent(dataservice, router, route, ordersService) {
        this.dataservice = dataservice;
        this.router = router;
        this.route = route;
        this.ordersService = ordersService;
    }
    ViewOrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        // call service to retrieve orders by seller
        // let sellerId = this.route.snapshot.paramMap.get('sellerId');
        var sellerId = this.dataservice.getSellerId();
        console.log('view orders...' + sellerId);
        this.ordersService.getOrders(sellerId).subscribe(function (data) {
            console.log('ViewOrdersComponent orders...' + data);
            _this.orders = data;
            for (var _i = 0, _a = _this.orders; _i < _a.length; _i++) {
                var order = _a[_i];
                console.log("address " + order.address + "fem" + order.fem);
            }
        });
    };
    ViewOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-orders',
            template: __webpack_require__(/*! ./view-orders.component.html */ "./src/app/orders/view-orders/view-orders.component.html"),
            styles: [__webpack_require__(/*! ./view-orders.component.css */ "./src/app/orders/view-orders/view-orders.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"]])
    ], ViewOrdersComponent);
    return ViewOrdersComponent;
}());



/***/ }),

/***/ "./src/app/services/customers.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/customers.service.ts ***!
  \***********************************************/
/*! exports provided: CustomersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersService", function() { return CustomersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomersService = /** @class */ (function () {
    function CustomersService(httpClient) {
        this.httpClient = httpClient;
        // ROOT_URL = 'http://lumasoft.dyndns.org.:8000/api';
        // ROOT_URL = 'http://localhost.:8000/api';
        this.ROOT_URL = 'https://enigmatic-cove-26128.herokuapp.com/api';
        this.GET_CUSTOMERS_URL = '/clientes/vendedor/';
        this.GET_CUSTOMER_URL = '/clientes/id/';
        this.GET_ARTICULOS_URL = '/articulos/';
        this.GET_ART_URL = '/articulos/id/';
        this.CUSTOMERS_URL = '/clientes/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    CustomersService.prototype.getCustomers = function (sellerId) {
        return this.httpClient.get(this.ROOT_URL + this.GET_CUSTOMERS_URL + sellerId);
    };
    CustomersService.prototype.getCustomer = function (id) {
        return this.httpClient.get(this.ROOT_URL + this.GET_CUSTOMER_URL + +id);
    };
    CustomersService.prototype.getArticulos = function () {
        return this.httpClient.get(this.ROOT_URL + this.GET_ARTICULOS_URL);
    };
    CustomersService.prototype.getArticuloById = function (id) {
        return this.httpClient.get(this.ROOT_URL + this.GET_ART_URL + id);
    };
    CustomersService.prototype.submitCustomer = function (customers) {
        var postCustomer;
        postCustomer = this.httpClient.post(this.ROOT_URL + this.CUSTOMERS_URL, customers, this.httpOptions);
        return postCustomer;
    };
    CustomersService.prototype.setCustomer = function (data) {
        console.log(data);
        sessionStorage.setItem('ctype', JSON.stringify(data));
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this.httpClient.put(this.ROOT_URL + this.CUSTOMERS_URL, JSON.stringify(data), { headers: headers });
    };
    CustomersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CustomersService);
    return CustomersService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService.prototype.setSellerId = function (id) {
        this.sellerId = id;
    };
    DataService.prototype.getSellerId = function () {
        return this.sellerId;
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/orders.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/orders.service.ts ***!
  \********************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrdersService = /** @class */ (function () {
    function OrdersService(httpClient) {
        this.httpClient = httpClient;
        // ROOT_URL = 'http://lumasoft.dyndns.org.:8000/api';
        //ROOT_URL = 'http://localhost.:8000/api';
        this.ROOT_URL = 'https://enigmatic-cove-26128.herokuapp.com/api';
        this.GET_ORDERS_URL = '/pedcab/vendedor/';
        this.GET_ORDER_URL = '/pedcab/id/';
        this.GET_ARTICULOS_URL = '/articulos/';
        this.GET_ART_URL = '/articulos/id/';
        this.POST_ORDER_URL = '/pedcab/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    OrdersService.prototype.getOrders = function (sellereId) {
        return this.httpClient.get(this.ROOT_URL + this.GET_ORDERS_URL + sellereId);
    };
    OrdersService.prototype.getOrder = function (id) {
        return this.httpClient.get(this.ROOT_URL + this.GET_ORDER_URL + +id);
    };
    OrdersService.prototype.getArticulos = function () {
        return this.httpClient.get(this.ROOT_URL + this.GET_ARTICULOS_URL);
    };
    OrdersService.prototype.getArticuloById = function (id) {
        return this.httpClient.get(this.ROOT_URL + this.GET_ART_URL + id);
    };
    OrdersService.prototype.submitOrder = function (order) {
        var postOrder;
        postOrder = this.httpClient.post(this.ROOT_URL + this.POST_ORDER_URL, order, this.httpOptions);
        return postOrder;
    };
    OrdersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OrdersService);
    return OrdersService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Store } from '@ngrx/store';
// import { AppState } from '../store/reducers';
// import { appReducerState }  from '../store/reducers/appReducers';
var UserService = /** @class */ (function () {
    // constructor(private store: Store<AppState>) { }
    function UserService(httpClient) {
        this.httpClient = httpClient;
        // ROOT_URL = 'http://lumasoft.dyndns.org.:8000/api';
        //ROOT_URL = 'http://localhost.:8000/api';
        this.ROOT_URL = 'https://enigmatic-cove-26128.herokuapp.com/api';
    }
    UserService.prototype.getSellers = function () {
        return this.httpClient.get(this.ROOT_URL + '/vend');
    };
    UserService.prototype.getClientsBySeller = function (id) {
        return this.httpClient.get(this.ROOT_URL + '/clientes/vendedor/' + id);
    };
    UserService.prototype.getClient = function (id) {
        return this.httpClient.get(this.ROOT_URL + '/clientes/id/' + id);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gabi/Heroku/orders-frontend-materialdesign/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map