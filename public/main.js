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

module.exports = "html,\nbody {\n  height: 100%;\n  background-color: #fff;\n  margin: 0;\n  font-family: sans-serif;\n}\n\nbody {\n  /* Full height */\n  height: 100%;\n  /* Center and scale the image nicely */\n}\n\n.header img {\n  margin: auto;\n  height: auto;\n  max-height: 30px;\n}\n\n.header {\n  color: #fff;\n  background: #39643a;\n}\n\n.button-row {\n  position: fixed;\n  z-index: 999;\n  bottom: 1%;\n  right: 1%;\n}\n\n.example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-events {\n  width: 300px;\n  height: 200px;\n  overflow: auto;\n  border: 1px solid #555;\n}\n\n.mat-grid-tile .mat-figure {\n  align-items: flex-start!important;\n}\n\n.header img {\n  margin: auto;\n}\n\n.header {\n  color: #fff !important;\n}\n\n.static_label {\n  color: #4caf50;\n}\n\n.example-container {\n  position: absolute;\n  top: 60px;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n}\n\n.example-sidenav {\n  display: block;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  background: rgba(224, 224, 224, 0.5);\n}\n\n.example-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.sidenavend {\n  min-width: 200px;\n}\n\n@media only screen and (max-width: 768px) {\n  .header img {\n    max-height: 20px;\n  }\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container>\n  <mat-toolbar color=\"primary\" class=\"header\">\n    <button mat-icon-button (click)=\"sidenavmenu.toggle()\">\n      <mat-icon>menu</mat-icon>\n    </button>\n\n    <img src=\"assets/img/Simsiroglu-Logo-Blanco.svg\" alt=\"{{title}}\" (click)=\"sidenavmenu.close()\" />\n\n    <i class=\"material-icons\" matBadge=\"0\" matBadgeColor=\"warn\" matBadgePosition=\"above after\" style=\"cursor: pointer\"\n      matTooltip=\"Mensajes - Proximamente\" matTooltipPosition=\"left\" (click)=\"sidenavmenu.close()\">chat</i>\n  </mat-toolbar>\n\n  <mat-sidenav-container class=\"example-container\" (backdropClick)=\"close()\">\n    <mat-sidenav #sidenavmenu mode=\"side\" closed class=\"example-sidenav\" (keydown.escape)=\"close('escape')\"\n      disableClose>\n      <button mat-button (click)=\"sidenavmenu.close()\">\n        <mat-icon>home</mat-icon>\n        <span routerLink='/sellers'>Dashboard</span>\n      </button>\n      <mat-divider></mat-divider>\n      <mat-list>\n        <mat-list-item>\n          <mat-icon>people</mat-icon> <span>Clientes</span>\n        </mat-list-item>\n        <mat-list-item><button mat-button (click)=\"sidenavmenu.close()\" routerLink='/customers/view'>Mis Clientes</button></mat-list-item>\n        <mat-list-item><button mat-button (click)=\"sidenavmenu.close()\" routerLink='/customers/create'>Nuevo Cliente</button></mat-list-item>\n        <mat-divider></mat-divider>\n      </mat-list>\n      <!--<button mat-menu-item routerLink='/customers/detail'>Ver Pedido</button>-->\n      <mat-list>\n        <mat-list-item>\n          <mat-icon>people</mat-icon> <span>Pedidos</span>\n        </mat-list-item>\n      </mat-list>\n      <mat-list-item><button mat-button (click)=\"sidenavmenu.close()\" routerLink='/orders/view'>Mis Pedidos</button></mat-list-item>\n      <mat-list-item><button mat-button (click)=\"sidenavmenu.close()\" routerLink='/orders/detail'>Ver Pedido</button></mat-list-item>\n      <mat-list-item><button mat-button (click)=\"sidenavmenu.close()\" routerLink='/orders/create'>Nuevo Pedido</button></mat-list-item>\n      <mat-divider></mat-divider>\n      <button mat-button (click)=\"sidenavmenu.close()\">\n        <mat-icon>timeline</mat-icon>\n        <span routerLink='/pageNotFound'>Reportes</span>\n      </button>\n      <mat-divider></mat-divider>\n      <button mat-button (click)=\"sidenavmenu.close()\">\n        <mat-icon>lock</mat-icon>\n        <span *ngIf=\"!logout\" class=\"nav-link\" routerLink=\"/logout\">Logout</span>\n        <span *ngIf=\"logout\" class=\"nav-link\" routerLink=\"/login\">Login</span>\n      </button>\n    </mat-sidenav>\n\n    <mat-sidenav-content (click)=\"sidenavmenu.close()\">\n      <router-outlet></router-outlet>\n    </mat-sidenav-content>\n    <mat-sidenav #sidenav closed mode=\"side\" position=\"end\" class=\"sidenavend\">\n      <h3>Foto de producto</h3>\n      <img src=\"{{this.imgName}}\" alt=\"Producto\" width=\"250\" />\n    </mat-sidenav>\n  </mat-sidenav-container>\n\n</ng-container>\n<app-speed-dial-fab></app-speed-dial-fab>\n"

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
/* harmony import */ var _services_sidenav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/sidenav.service */ "./src/app/services/sidenav.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(sidenavService) {
        this.sidenavService = sidenavService;
        this.title = 'Simsiroglu Sales System';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.sidenavService.setSidenav(this.sidenavend);
        this.imgName = localStorage.getItem('img');
        console.log('Lo guardado es ' + this.imgName);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"])
    ], AppComponent.prototype, "sidenavend", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_sidenav_service__WEBPACK_IMPORTED_MODULE_1__["SidenavService"]])
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
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication/authentication.module */ "./src/app/authentication/authentication.module.ts");
/* harmony import */ var _orders_orders_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./orders/orders.module */ "./src/app/orders/orders.module.ts");
/* harmony import */ var _commonApp_commonApp_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./commonApp/commonApp.module */ "./src/app/commonApp/commonApp.module.ts");
/* harmony import */ var _commonApp_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./commonApp/pagenotfound/pagenotfound.component */ "./src/app/commonApp/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/orders.service */ "./src/app/services/orders.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _customers_customers_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./customers/customers.module */ "./src/app/customers/customers.module.ts");
/* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var _services_otherdata_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/otherdata.service */ "./src/app/services/otherdata.service.ts");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var _services_sidenav_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/sidenav.service */ "./src/app/services/sidenav.service.ts");
/* harmony import */ var _commonApp_speed_dial_fab_speed_dial_fab_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./commonApp/speed-dial-fab/speed-dial-fab.component */ "./src/app/commonApp/speed-dial-fab/speed-dial-fab.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { StoreModule } from '@ngrx/store';
// import { reducers } from './store/reducers';















var appRoutes = [
    { path: '**', component: _commonApp_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_9__["PagenotfoundComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _commonApp_speed_dial_fab_speed_dial_fab_component__WEBPACK_IMPORTED_MODULE_19__["SpeedDialFabComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                // StoreModule.forRoot(reducers,{}),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                _commonApp_commonApp_module__WEBPACK_IMPORTED_MODULE_8__["CommonAppModule"],
                _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_6__["AuthenticationModule"],
                _orders_orders_module__WEBPACK_IMPORTED_MODULE_7__["OrdersModule"],
                _customers_customers_module__WEBPACK_IMPORTED_MODULE_14__["CustomersModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ],
            providers: [
                _services_orders_service__WEBPACK_IMPORTED_MODULE_10__["OrdersService"],
                _services_customers_service__WEBPACK_IMPORTED_MODULE_15__["CustomersService"],
                _services_image_service__WEBPACK_IMPORTED_MODULE_17__["ImageService"],
                _services_sidenav_service__WEBPACK_IMPORTED_MODULE_18__["SidenavService"],
                _services_otherdata_service__WEBPACK_IMPORTED_MODULE_16__["OtherdataService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
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

module.exports = "mat-card {\n  width: 90%;\n  margin: 2em auto;\n  text-align: left;\n}\n.login {\n    max-width: 350px;\n  }\n.login .mat-form-field {\n  min-width: 100% !important;\n}\n@media only screen and (max-width: 768px) {\n  .login {\n    max-width: 90%;\n  }\n}\n"

/***/ }),

/***/ "./src/app/authentication/login/login.component.html":
/*!***********************************************************!*\
  !*** ./src/app/authentication/login/login.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"login\">\n  <mat-card-title>Iniciar sesión</mat-card-title>\n  <form (ngSubmit)=\"login()\">\n    <mat-form-field>\n      <input matInput type=\"email\" placeholder=\"Usuario\" dividerColor=\"accent\" formControlName=\"user\" #user required\n        autofocus>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type=\"password\" placeholder=\"Contraseña\" dividerColor=\"accent\" formControlName=\"password\"\n        #password required>\n    </mat-form-field>\n    <mat-card-actions align=\"middle\">\n      <button mat-raised-button color=\"accent\" routerLink=\"/sellers\" type=\"submit\">Iniciar Sesión</button>\n      <p class=\"mt-5 mb-3 text-muted\">&copy;2018</p>\n    </mat-card-actions>\n  </form>\n</mat-card>\n"

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

module.exports = ".header img {\n    margin: auto;\n    height: auto;\n    max-height: 30px;\n}\n\n.header {\n    color: #fff;\n    background: #39643a;\n}\n\n.button-row {\n    position: fixed;\n    z-index: 999;\n    bottom: 1%;\n    right: 1%;\n}\n\n.example-container {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n\n.example-events {\n    width: 300px;\n    height: 200px;\n    overflow: auto;\n    border: 1px solid #555;\n  }\n\n.mat-grid-tile .mat-figure {\n    align-items: flex-start!important;\n}"

/***/ }),

/***/ "./src/app/commonApp/navbar/navbar.component.html":
/*!********************************************************!*\
  !*** ./src/app/commonApp/navbar/navbar.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
        this.greetingMessage = 'Hello guest';
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

module.exports = ".example-card {\n    max-width: 100%;\n}\n.mat-grid-tile .mat-figure {\n    align-items: flex-start!important;\n}\n.mat-card {\n    width: 85%;\n}\n.mat-grid-tile {\n    text-align: left!important;\n}\n.alert {\n    background-color: #FFD815;\n}\n.mat-form-field {\n    display: inline-block;\n    position: relative;\n    text-align: left;\n    width: 90%!important;\n}"

/***/ }),

/***/ "./src/app/commonApp/seller/seller.component.html":
/*!********************************************************!*\
  !*** ./src/app/commonApp/seller/seller.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card ng-if=isAdmin>\n  <mat-grid-list cols=\"3\" rowHeight=\"10:1\">\n    <mat-grid-tile>\n      <mat-card-title>Bienvenido</mat-card-title>\n    </mat-grid-tile>\n    <mat-grid-tile>\n      <p>Usted a iniciado sesión como usuario Admin</p>\n    </mat-grid-tile>\n    <mat-grid-tile>\n      <mat-form-field>\n        <mat-select placeholder=\"Seleccione un vendedor\" (ngModelChange)=\"onClick($event)\" [(ngModel)]=\"selectedSeller\">\n          <mat-option *ngFor=\"let seller of sellers\" [value]=\"seller.id\">\n            {{seller.nom}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n    </mat-grid-tile>\n  </mat-grid-list>\n</mat-card>\n<mat-card>\n  <mat-card-title>Dashboard</mat-card-title>\n  <mat-grid-list cols=\"3\" rowHeight=\"1:1\">\n    <mat-grid-tile>\n      <mat-card>\n        <mat-card-title>Pedidos</mat-card-title>\n        <mat-card-subtitle>Estado de pedidos</mat-card-subtitle>\n        <mat-divider></mat-divider>\n        <mat-card-content>\n          <p></p>\n          <p> <button mat-mini-fab color=\"primary\">123</button> <strong>Aprobados</strong> </p>\n          <p><button mat-mini-fab class=\"alert\">23</button> <strong>Pendientes</strong></p>\n          <p><button mat-mini-fab color=\"warn\">12</button> <strong>Rechazados</strong> </p>\n        </mat-card-content>\n        <mat-divider></mat-divider>\n        <mat-card-actions align=\"right\">\n          <button mat-raised-button color=\"primary\">VER</button>\n        </mat-card-actions>\n      </mat-card>\n    </mat-grid-tile>\n    <mat-grid-tile>\n      <mat-card>\n        <mat-card-title>Clientes</mat-card-title>\n        <mat-card-subtitle>Estado de clientes</mat-card-subtitle>\n        <mat-divider></mat-divider>\n        <mat-card-content>\n          <p></p>\n          <p> <button mat-mini-fab color=\"primary\">123</button> <strong>Aprobados</strong> </p>\n          <p><button mat-mini-fab class=\"alert\">23</button> <strong>A confirmar</strong></p>\n          <p><button mat-mini-fab color=\"warn\">12</button> <strong>Con revisiones</strong> </p>\n        </mat-card-content>\n        <mat-divider></mat-divider>\n        <mat-card-actions align=\"right\">\n          <button mat-raised-button color=\"primary\">VER</button>\n        </mat-card-actions>\n      </mat-card>\n    </mat-grid-tile>\n    <mat-grid-tile>\n      <mat-card>\n        <mat-card-title>Reportes</mat-card-title>\n        <mat-card-subtitle>Al 31/10/2018</mat-card-subtitle>\n        <mat-divider></mat-divider>\n        <mat-card-content>\n          <p></p>\n          <p>Proximamente </p>\n        </mat-card-content>\n        <mat-divider></mat-divider>\n        <mat-card-actions align=\"right\">\n          <button mat-raised-button color=\"primary\">VER</button>\n        </mat-card-actions>\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n</mat-card>\n"

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
            _this.sellers = data;
        });
    };
    SellerComponent.prototype.onClick = function (ven) {
        this.selectedSeller = ven;
        this.dataService.setSellerId(this.selectedSeller);
        var root = 'orders/view';
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

/***/ "./src/app/commonApp/speed-dial-fab/speed-dial-fab.animations.ts":
/*!***********************************************************************!*\
  !*** ./src/app/commonApp/speed-dial-fab/speed-dial-fab.animations.ts ***!
  \***********************************************************************/
/*! exports provided: speedDialFabAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "speedDialFabAnimations", function() { return speedDialFabAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var speedDialFabAnimations = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fabToggler', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'rotate(0deg)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'rotate(225deg)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('speedDialStagger', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('40ms', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(10px)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0)' }),
                ]))
            ]), { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
            ])), { optional: true })
        ])
    ])
];


/***/ }),

/***/ "./src/app/commonApp/speed-dial-fab/speed-dial-fab.component.html":
/*!************************************************************************!*\
  !*** ./src/app/commonApp/speed-dial-fab/speed-dial-fab.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"fab-dismiss\" *ngIf=\"fabTogglerState==='active'\" (click)=\"onToggleFab()\">\n</div>\n<div class=\"fab-container\">\n  <button mat-fab class=\"fab-toggler\" (click)=\"onToggleFab()\">\n    <i class=\"material-icons\" [@fabToggler]=\"{value: fabTogglerState}\">add</i> <!-- Animation here -->\n  </button>\n  <div [@speedDialStagger]=\"buttons.length\">\n    <!-- and here -->\n    <button *ngFor=\"let btn of buttons\" mat-fab class=\"fab-secondary\" color=\"secondary\" matTooltip=\"{{btn.tooltip}}\"\n      matTooltipPosition=\"left\" [routerLink]=\"[(btn.link)]\">\n      <i class=\"material-icons\">{{btn.icon}}</i>\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/commonApp/speed-dial-fab/speed-dial-fab.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/commonApp/speed-dial-fab/speed-dial-fab.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fab-container {\n  position: fixed;\n  bottom: 15px;\n  right: 15px;\n  z-index: 100;\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center; }\n  .fab-container > div {\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: center;\n    margin-bottom: 5px; }\n  .fab-container > div button {\n      margin-bottom: 17px; }\n  .fab-toggler {\n  float: right;\n  z-index: 100; }\n  #fab-dismiss {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 99; }\n"

/***/ }),

/***/ "./src/app/commonApp/speed-dial-fab/speed-dial-fab.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/commonApp/speed-dial-fab/speed-dial-fab.component.ts ***!
  \**********************************************************************/
/*! exports provided: SpeedDialFabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeedDialFabComponent", function() { return SpeedDialFabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _speed_dial_fab_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speed-dial-fab.animations */ "./src/app/commonApp/speed-dial-fab/speed-dial-fab.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpeedDialFabComponent = /** @class */ (function () {
    function SpeedDialFabComponent() {
        this.fabButtons = [
            {
                icon: 'people',
                tooltip: 'Nuevo Cliente',
                link: 'customers/create'
            },
            {
                icon: 'description',
                tooltip: 'Nuevo Pedido',
                link: 'orders/create'
            }
        ];
        this.buttons = [];
        this.fabTogglerState = 'inactive';
    }
    SpeedDialFabComponent.prototype.showItems = function () {
        this.fabTogglerState = 'active';
        this.buttons = this.fabButtons;
    };
    SpeedDialFabComponent.prototype.hideItems = function () {
        this.fabTogglerState = 'inactive';
        this.buttons = [];
    };
    SpeedDialFabComponent.prototype.onToggleFab = function () {
        this.buttons.length ? this.hideItems() : this.showItems();
    };
    SpeedDialFabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-speed-dial-fab',
            template: __webpack_require__(/*! ./speed-dial-fab.component.html */ "./src/app/commonApp/speed-dial-fab/speed-dial-fab.component.html"),
            styles: [__webpack_require__(/*! ./speed-dial-fab.component.scss */ "./src/app/commonApp/speed-dial-fab/speed-dial-fab.component.scss")],
            animations: _speed_dial_fab_animations__WEBPACK_IMPORTED_MODULE_1__["speedDialFabAnimations"]
        }),
        __metadata("design:paramtypes", [])
    ], SpeedDialFabComponent);
    return SpeedDialFabComponent;
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

module.exports = "<mat-card>\n  <mat-card-title>Nuevo cliente</mat-card-title>\n  <form [formGroup]=\"NewCustomerForm\" (ngSubmit)=\"onSubmit()\">\n    <mat-accordion>\n      <mat-expansion-panel [expanded]=\"true\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            <strong>Datos del cliente</strong>\n          </mat-panel-title>\n          <mat-panel-description>\n            Información comercial\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <mat-grid-list cols=\"3\" rowHeight=\"60px\">\n          <mat-grid-tile>\n            <mat-form-field>\n              <input matInput placeholder=\"Nombre\" formControlName=\"nom\" #nom>\n            </mat-form-field>\n          </mat-grid-tile>\n          <mat-grid-tile>\n            <mat-form-field>\n              <input matInput type=\"number\" placeholder=\"C.U.I.T.\" formControlName=\"cuit\" #cuit>\n            </mat-form-field>\n          </mat-grid-tile>\n          <mat-grid-tile>\n            <mat-form-field>\n              <input matInput type=\"text\" placeholder=\"Razón Social\" formControlName=\"razonsoc\" #razonsoc>\n            </mat-form-field>\n          </mat-grid-tile>\n        </mat-grid-list>\n      </mat-expansion-panel>\n    </mat-accordion>\n    <mat-accordion>\n      <mat-expansion-panel [expanded]=\"true\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            <strong>Direcciones</strong>\n          </mat-panel-title>\n          <mat-panel-description>\n            Información de facturación y envíos\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <div formArrayName=\"address\" class=\"address\">\n          <div *ngFor=\"let address of NewCustomerForm.controls.address.controls; let i=index\">\n            <div [formGroupName]=\"i\">\n              <mat-grid-list cols=\"3\" rowHeight=\"60px\">\n                <mat-grid-tile>\n                  <mat-form-field>\n                    <input matInput type=\"text\" placeholder=\"Dirección\" formControlName=\"dir\" #dir>\n                  </mat-form-field>\n                </mat-grid-tile>\n                <mat-grid-tile>\n                  <mat-form-field>\n                    <input matInput type=\"text\" placeholder=\"Localidad\" formControlName=\"localidad\" #localidad>\n                  </mat-form-field>\n                </mat-grid-tile>\n                <mat-grid-tile>\n                  <mat-form-field>\n                    <input matInput type=\"text\" placeholder=\"Código Postal\" formControlName=\"codpos\" #codpos>\n                  </mat-form-field>\n                </mat-grid-tile>\n                <mat-grid-tile>\n                  <mat-form-field>\n                    <mat-select placeholder=\"Seleccione una provincia\" formControlName=\"prov\">\n                      <mat-option *ngFor=\"let prov of provincias\" [value]=\"prov.id\">\n                        {{prov.nom}}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </mat-grid-tile>\n                <mat-grid-tile>\n\n                  <!--\n                        <mat-form-field>\n                          <input matInput type=\"text\" placeholder=\"Flete\" formControlName=\"nom\" #flete>\n                        </mat-form-field>\n-->\n\n                </mat-grid-tile>\n              </mat-grid-list>\n              <div class=\"margin-20\" align=\"right\">\n                <div fxFlex>\n                  <a (click)=\"removeAddress()\" style=\"cursor: pointer\" matTooltip=\"Eliminar Dirección\"\n                    matTooltipPosition=\"above\">\n                    <mat-icon color=\"warn\">remove_circle</mat-icon>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"margin-20\" align=\"right\">\n            <div fxFlex>\n              <a (click)=\"addAddress()\" style=\"cursor: pointer\" matTooltip=\"Agregar Dirección\" matTooltipPosition=\"above\">\n                <mat-icon color=\"accent\">add_circle</mat-icon>\n              </a>\n            </div>\n          </div>\n        </div>\n      </mat-expansion-panel>\n    </mat-accordion>\n    <br />\n    <mat-card-actions align=\"middle\">\n      <div fxFlex></div><button mat-raised-button color=\"accent\" type=\"submit\">Enviar</button>\n    </mat-card-actions>\n  </form>\n  <p>\n    Form Value: {{ NewCustomerForm.value | json }}\n  </p>\n</mat-card>\n"

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
/* harmony import */ var _services_otherdata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/otherdata.service */ "./src/app/services/otherdata.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
    function CreateCustomersComponent(fb, router, dataservice, userService, customersService, odService) {
        this.fb = fb;
        this.router = router;
        this.dataservice = dataservice;
        this.userService = userService;
        this.customersService = customersService;
        this.odService = odService;
    }
    CreateCustomersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isOpen = true;
        this.isOpen1 = false;
        this.selectedItems = [];
        // this.sellerId = '37';
        this.sellerId = this.dataservice.getSellerId();
        this.initForm();
        this.odService.getProvincias().subscribe(function (data) {
            _this.provincias = data;
        });
    };
    CreateCustomersComponent.prototype.initForm = function () {
        return this.NewCustomerForm = this.fb.group({
            nom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            cuit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            razonsoc: [''],
            address: this.fb.array([
                this.initAddress(),
            ]),
            salesman: [this.sellerId],
        });
    };
    CreateCustomersComponent.prototype.initAddress = function () {
        return this.fb.group({
            dir: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            localidad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            codpos: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            prov: [''],
            expreso: ['1'],
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
        this.address = this.NewCustomerForm.get('address');
        this.address.push(this.initAddress());
        this.addressForm.patchValue({ id: '', dir: '', localidad: '', codpos: '', prov: '' });
    };
    CreateCustomersComponent.prototype.removeAddress = function (i) {
        var address = this.NewCustomerForm.get('address');
        address.removeAt(i);
    };
    CreateCustomersComponent.prototype.onSubmit = function () {
        this.customersService.setCustomer(this.NewCustomerForm.value).subscribe(function (data) {
            // console.log(data);
        });
    };
    CreateCustomersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-customers',
            template: __webpack_require__(/*! ./create-customers.component.html */ "./src/app/customers/create-customers/create-customers.component.html"),
            styles: [__webpack_require__(/*! ./create-customers.component.css */ "./src/app/customers/create-customers/create-customers.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services_customers_service__WEBPACK_IMPORTED_MODULE_3__["CustomersService"],
            _services_otherdata_service__WEBPACK_IMPORTED_MODULE_4__["OtherdataService"]])
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

module.exports = "<mat-card>\n  <mat-card-title>Editar cliente</mat-card-title>\n  <form [formGroup]=\"EditCustomerForm\" (ngSubmit)=\"onSubmit()\">\n    <mat-accordion>\n      <mat-expansion-panel [expanded]=\"true\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            <strong>Datos del cliente</strong>\n          </mat-panel-title>\n          <mat-panel-description>\n            Información comercial\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <mat-grid-list cols=\"3\" rowHeight=\"60px\">\n          <mat-grid-tile>\n            <mat-form-field style=\"display:none\">\n              <input matInput type=\"text\" placeholder=\"Id\" formControlName=\"id\" #id>\n            </mat-form-field>\n            <mat-form-field>\n              <input matInput placeholder=\"Nombre\" formControlName=\"nom\" #nom>\n            </mat-form-field>\n          </mat-grid-tile>\n          <mat-grid-tile>\n            <mat-form-field>\n              <input matInput type=\"text\" placeholder=\"C.U.I.T.\" formControlName=\"cuit\" #cuit>\n            </mat-form-field>\n          </mat-grid-tile>\n          <mat-grid-tile>\n            <mat-form-field>\n              <input matInput type=\"text\" placeholder=\"Razón Social\" formControlName=\"razonsoc\" #razonsoc>\n            </mat-form-field>\n          </mat-grid-tile>\n        </mat-grid-list>\n      </mat-expansion-panel>\n    </mat-accordion>\n    <mat-accordion>\n      <mat-expansion-panel [expanded]=\"true\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            <strong>Direcciones</strong>\n          </mat-panel-title>\n          <mat-panel-description>\n            Información de facturación y envíos\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <div formArrayName=\"address\" class=\"address\">\n          <div *ngFor=\"let address of EditCustomerForm.get('address').controls; let i=index\">\n            <div [formGroupName]=\"i\">\n              <mat-grid-list cols=\"3\" rowHeight=\"60px\">\n                <mat-grid-tile>\n                  <mat-form-field style=\"display:none\">\n                    <input matInput type=\"text\" placeholder=\"Id\" formControlName=\"id\" #id>\n                  </mat-form-field>\n                  <mat-form-field>\n                    <input matInput type=\"text\" placeholder=\"Dirección\" formControlName=\"dir\" #dir>\n                  </mat-form-field>\n                </mat-grid-tile>\n                <mat-grid-tile>\n                  <mat-form-field>\n                    <input matInput type=\"text\" placeholder=\"Localidad\" formControlName=\"localidad\" #localidad>\n                  </mat-form-field>\n                </mat-grid-tile>\n                <mat-grid-tile>\n                  <mat-form-field>\n                    <input matInput type=\"text\" placeholder=\"Código Postal\" formControlName=\"codpos\" #codpos>\n                  </mat-form-field>\n                </mat-grid-tile>\n                <mat-grid-tile>\n                  <mat-form-field>\n                    <mat-select placeholder=\"Seleccione una provincia\" formControlName=\"prov\">\n                      <mat-option *ngFor=\"let prov of provincias\" [value]=\"prov.id\">\n                        {{prov.nom}}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                </mat-grid-tile>\n                <mat-grid-tile>\n\n                  <!--\n                          <mat-form-field>\n                            <input matInput type=\"text\" placeholder=\"Flete\" formControlName=\"nom\" #flete  [ngModel]=\"addr.dir\">\n                          </mat-form-field>\n  -->\n\n                </mat-grid-tile>\n              </mat-grid-list>\n              <div class=\"margin-20\" align=\"right\">\n                <div fxFlex>\n                  <a (click)=\"removeAddress(i)\" style=\"cursor: pointer\" matTooltip=\"Eliminar Dirección\"\n                    matTooltipPosition=\"above\">\n                    <mat-icon color=\"warn\">remove_circle</mat-icon>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"margin-20\" align=\"right\">\n          <div fxFlex>\n            <a (click)=\"addAddress()\" style=\"cursor: pointer\" matTooltip=\"Agregar Dirección\" matTooltipPosition=\"above\">\n              <mat-icon color=\"accent\">add_circle</mat-icon>\n            </a>\n          </div>\n        </div>\n      </mat-expansion-panel>\n    </mat-accordion>\n    <br />\n    <mat-card-actions align=\"middle\">\n      <div fxFlex></div><button mat-raised-button color=\"accent\" type=\"submit\">Enviar</button>\n    </mat-card-actions>\n  </form>\n  <pre>\n    Form Value: {{ EditCustomerForm.value | json }}\n    Form Status: {{ EditCustomerForm.status }}\n  </pre>\n</mat-card>\n"

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
/* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_otherdata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/otherdata.service */ "./src/app/services/otherdata.service.ts");
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
    function EditCustomersDetailsComponent(service, fb, route, odService) {
        this.service = service;
        this.fb = fb;
        this.route = route;
        this.odService = odService;
    }
    EditCustomersDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sellerId = '37';
        this.EditCustomerForm = this.fb.group({
            id: [''],
            nom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cuit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            razonsoc: [''],
            address: this.fb.array([]),
            salesman: this.sellerId,
        });
        var customerid = this.route.snapshot.paramMap.get('id');
        console.log('el id es ' + customerid);
        this.service.getCustomer(customerid).subscribe(function (data) {
            _this.customersDetail = data;
            _this.initForm();
        });
        this.odService.getProvincias().subscribe(function (data) {
            _this.provincias = data;
        });
    };
    EditCustomersDetailsComponent.prototype.initForm = function () {
        this.EditCustomerForm.patchValue({
            id: this.customersDetail.id,
            nom: this.customersDetail.nom,
            cuit: this.customersDetail.cuit,
            razonsoc: this.customersDetail.razonsoc,
        });
        this.setAddresses();
    };
    EditCustomersDetailsComponent.prototype.setAddresses = function () {
        var _this = this;
        var address = this.EditCustomerForm.get('address');
        this.customersDetail.address.forEach(function (x) {
            address.push(_this.fb.group({
                id: [x.id],
                dir: [x.dir, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                localidad: [x.localidad, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                codpos: [x.codpos, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                prov: [x.prov],
            }));
        });
    };
    EditCustomersDetailsComponent.prototype.addAddress = function () {
        this.address = this.EditCustomerForm.get('address');
        this.address.push(this.fb.group({
            dir: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            localidad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            codpos: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            prov: [''],
            expreso: ['1'],
        }));
        // this.addressForm.patchValue({ dir: '', localidad: '', codpos: '', prov: '', expreso: '1' });
    };
    EditCustomersDetailsComponent.prototype.removeAddress = function (i) {
        var address = this.EditCustomerForm.get('address');
        address.removeAt(i);
    };
    EditCustomersDetailsComponent.prototype.onSubmit = function () {
        this.service.submitCustomer(this.EditCustomerForm.value).subscribe(function (data) {
            // console.log();
        });
    };
    EditCustomersDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-customers',
            template: __webpack_require__(/*! ./edit-customers.component.html */ "./src/app/customers/edit-customers/edit-customers.component.html"),
            styles: [__webpack_require__(/*! ./edit-customers.component.css */ "./src/app/customers/edit-customers/edit-customers.component.css")]
        }),
        __metadata("design:paramtypes", [_services_customers_service__WEBPACK_IMPORTED_MODULE_1__["CustomersService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_otherdata_service__WEBPACK_IMPORTED_MODULE_4__["OtherdataService"]])
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

module.exports = "<mat-card>\n  <mat-card-title>Ficha de Cliente: {{customersDetail.nom}}</mat-card-title>\n\n  <mat-accordion>\n    <mat-expansion-panel [expanded]=\"true\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <strong>Datos del cliente</strong>\n        </mat-panel-title>\n        <mat-panel-description>\n          Información comercial\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <mat-grid-list cols=\"3\" rowHeight=\"50px\">\n        <mat-grid-tile>\n          <div class=\"static_field\">\n            <span class=\"static_label\">Cliente</span>\n            {{customersDetail.nom}}\n          </div>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <div class=\"static_field\">\n            <span class=\"static_label\">C.U.I.T.</span>\n            {{customersDetail.cuit}}\n          </div>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <div class=\"static_field\">\n            <span class=\"static_label\">Código de Facturación</span>\n            {{customersDetail.codfac}}\n          </div>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <div class=\"static_field\">\n            <span class=\"static_label\">Razón Social</span>\n            {{customersDetail.razonsoc}}\n          </div>\n        </mat-grid-tile>\n\n        <mat-grid-tile *ngIf=\"customersDetail.salesman.id == '37'\" [colspan]=\"3\">\n          <div class=\"static_field\">\n            <span class=\"static_label\">Vendedor</span>\n            {{customersDetail.salesman.nom}}\n          </div>\n        </mat-grid-tile>\n      </mat-grid-list>\n    </mat-expansion-panel>\n  </mat-accordion>\n  <mat-accordion>\n    <mat-expansion-panel [expanded]=\"true\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <strong>Direcciones</strong>\n        </mat-panel-title>\n        <mat-panel-description>\n          Información de facturación y envíos\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <div *ngFor=\"let addr of customersDetail.address\">\n        <mat-grid-list cols=\"3\" rowHeight=\"50px\">\n          <mat-grid-tile>\n            <div class=\"static_field\">\n              <span class=\"static_label\">Dirección</span>\n              {{addr.dir}}\n            </div>\n          </mat-grid-tile>\n          <mat-grid-tile>\n            <div class=\"static_field\">\n              <span class=\"static_label\">Localidad</span>\n              {{addr.localidad}}\n            </div>\n          </mat-grid-tile>\n          <mat-grid-tile>\n            <div class=\"static_field\">\n              <span class=\"static_label\">Código Postal</span>\n              {{addr.codpos}}\n            </div>\n          </mat-grid-tile>\n          <mat-grid-tile>\n            <div class=\"static_field\">\n              <span class=\"static_label\">Provincia</span>\n              {{provincia.nom}}\n            </div>\n          </mat-grid-tile>\n          <mat-grid-tile>\n            <div class=\"static_field\">\n              <span class=\"static_label\">Flete</span>\n              {{addr.flete.nom}}\n            </div>\n          </mat-grid-tile>\n        </mat-grid-list>\n\n      </div>\n    </mat-expansion-panel>\n  </mat-accordion>\n  <mat-card-actions align=\"middle\">\n    <div fxFlex></div><button mat-raised-button color=\"accent\" routerLink='/customers/edit/{{customersDetail.id}}'>Editar</button>\n  </mat-card-actions>\n</mat-card>"

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
/* harmony import */ var _services_otherdata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/otherdata.service */ "./src/app/services/otherdata.service.ts");
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
    function ViewCustomersDetailsComponent(route, router, customersService, odService) {
        this.route = route;
        this.router = router;
        this.customersService = customersService;
        this.odService = odService;
    }
    ViewCustomersDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.customersService.getCustomer(id).subscribe(function (data) {
            _this.customersDetail = data;
            // Ver foreach
            var address = _this.customersDetail.address[0].prov;
            _this.odService.getProvincia(address).subscribe(function (datax) {
                _this.provincia = datax;
                // console.log('La prov es ' + this.provincia.nom);
            });
        });
    };
    ViewCustomersDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-customers-details',
            template: __webpack_require__(/*! ./view-customers-details.component.html */ "./src/app/customers/view-customers-details/view-customers-details.component.html"),
            styles: [__webpack_require__(/*! ./view-customers-details.component.css */ "./src/app/customers/view-customers-details/view-customers-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_customers_service__WEBPACK_IMPORTED_MODULE_2__["CustomersService"],
            _services_otherdata_service__WEBPACK_IMPORTED_MODULE_3__["OtherdataService"]])
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
/* harmony import */ var src_app_services_otherdata_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/otherdata.service */ "./src/app/services/otherdata.service.ts");
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
    function ViewCustomersComponent(dataservice, router, route, customersService, odService) {
        this.dataservice = dataservice;
        this.router = router;
        this.route = route;
        this.customersService = customersService;
        this.odService = odService;
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
        this.odService.getProvincia(this.customersData.prov).subscribe(function (data) {
            _this.provincia = data;
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
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_customers_service__WEBPACK_IMPORTED_MODULE_1__["CustomersService"],
            src_app_services_otherdata_service__WEBPACK_IMPORTED_MODULE_7__["OtherdataService"]])
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
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"]
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
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"]
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

module.exports = "<mat-card>\n  <mat-card-title>Orden de Pedido</mat-card-title>\n  <mat-accordion>\n    <mat-expansion-panel [expanded]=\"true\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <strong>Datos del pedido</strong>\n        </mat-panel-title>\n        <mat-panel-description>\n          Información del cliente\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <mat-grid-list cols=\"3\" rowHeight=\"60px\">\n        <mat-grid-tile>\n          <mat-form-field>\n            <mat-select class=\"custom-select\" placeholder=\"Cliente\" (ngModelChange)=\"onClientSelected($event)\"\n              [(ngModel)]=\"clientId\" data-live-search=\"true\">\n              <mat-option *ngFor=\"let client of clients\" [value]=\"client.id\">\n                {{client.id}} - {{client.nom}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <!--<select class=\"custom-select\" (ngModelChange)=\"onClientSelected($event)\" [(ngModel)]=\"clientId\"\n            data-live-search=\"true\">\n            <option [value]=\"selectedAddress\" selected=\"selected\">selectione un cliente\n            </option>\n            <option *ngFor=\"let client of clients\" [ngValue]=client.id> {{client.nom}}\n            </option>\n          </select>-->\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <mat-form-field *ngIf=\"selectedClient\">\n            <mat-select class=\"custom-select\" placeholder=\"Domicilio\" (ngModelChange)=\"onAdressSelected($event)\"\n              [(ngModel)]=\"selectedAddress\" data-live-search=\"true\">\n              <!--<mat-option [value]=\"selectedAddress\">\n                {{selectedAddress.dir}} - {{selectedAddress.localidad}}\n              </mat-option>-->\n              <mat-option *ngFor=\"let addr of selectedClient.address\" [value]=addr.id> {{addr.dir}} -\n                {{addr.localidad}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <!--<select *ngIf=\"selectedClient\" class=\"custom-select\" (ngModelChange)=\"onAdressSelected($event)\" [(ngModel)]=\"selectedAddress\"\n            data-live-search=\"true\" id=\"selectedAddress\">\n            <option [value]=\"selectedAddress\" selected=\"selected\">{{selectedAddress.dir}} -\n              {{selectedAddress.localidad}}\n            </option>\n            <option *ngFor=\"let addr of selectedClient.address\" [ngValue]=addr.id> {{addr.dir}} - {{addr.localidad}}\n            </option>\n          </select>-->\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <div class=\"static_field\">\n            <span class=\"static_label\">Flete</span>\n            {{ (selectedClient && selectedAddress && selectedAddress.flete) ? selectedAddress.flete.nom : ''}}\n          </div>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <mat-form-field>\n            <mat-select placeholder=\"Pago\" [(ngModel)]=\"conven\" data-live-search=\"true\" id=\"convenId\">\n              <mat-option [value]=\"1\" selected=\"selected\">CONTADO</mat-option>\n              <mat-option [value]=\"2\">CHEQUES 30 dias</mat-option>\n              <mat-option [value]=\"3\">CHEQUES 30 - 60 dias</mat-option>\n              <mat-option [value]=\"4\">CHEQUES 30 - 60 - 90 dias</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"2\">\n          <mat-form-field>\n            <textarea matInput placeholder=\"Observaciones\"></textarea>\n          </mat-form-field>\n        </mat-grid-tile>\n      </mat-grid-list>\n    </mat-expansion-panel>\n  </mat-accordion>\n  <mat-accordion>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <strong>Detalle del pedido</strong>\n        </mat-panel-title>\n        <mat-panel-description>\n          Detalle de la compra\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <mat-grid-list cols=\"9\" rowHeight=\"60px\">\n        <mat-grid-tile [colspan]=\"8\">\n          <mat-form-field>\n            <mat-select placeholder=\"Artículo\" class=\"custom-select\" (ngModelChange)=\"onArtSelected($event)\"\n              [(ngModel)]=\"artId\" data-live-search=\"true\">\n              <mat-option *ngFor=\"let art of articulos\" [value]=art.id> {{art.id}} - {{art.nom}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"1\">\n          <mat-form-field>\n            <input matInput placeholder=\"Precio\" [(ngModel)]=\"price\" type=\"number\" min=\"0\" step=\"0.01\"\n              data-number-to-fixed=\"2\" data-number-stepfactor=\"100\" class=\"form-control currency\" id=\"price\" />\n          </mat-form-field>\n        </mat-grid-tile>\n      </mat-grid-list>\n      <mat-grid-list cols=\"9\" rowHeight=\"40px\">\n        <mat-grid-tile [colspan]=\"1\"><strong>Código</strong></mat-grid-tile>\n        <mat-grid-tile [colspan]=\"6\"><strong>Descripción</strong></mat-grid-tile>\n        <mat-grid-tile [colspan]=\"2\"><strong>Cantidad</strong></mat-grid-tile>\n        <div *ngFor=\"let item of selectedItems; let i = index\">\n          <mat-grid-tile [colspan]=\"1\">{{item.itemdatum.variante.codigo}} </mat-grid-tile>\n          <mat-grid-tile [colspan]=\"6\">{{item.itemdatum.variante.nom}}</mat-grid-tile>\n          <mat-grid-tile [colspan]=\"1\">\n            <mat-form-field><input matInput placeholder=\"Cantidad\" #selectedCount (change)=\"addCount(i, selectedCount.value);\"></mat-form-field>\n          </mat-grid-tile>\n          <mat-grid-tile [colspan]=\"1\">\n            <button mat-icon-button color=\"accent\" (click)=\"removeVariante(i)\" matTooltip=\"Eliminar variante\"\n              matTooltipPosition=\"above\">\n              <mat-icon aria-label=\"Eliminar variante\">remove_circle_outline</mat-icon>\n            </button>\n          </mat-grid-tile>\n        </div>\n      </mat-grid-list>\n    </mat-expansion-panel>\n  </mat-accordion>\n  <mat-accordion *ngIf=\"hasVariantes\">\n    <mat-expansion-panel [expanded]=\"true\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <strong>Seleccione Variantes</strong>\n        </mat-panel-title>\n        <mat-panel-description>\n          Seleccione las variantes del producto que desea agregar al pedido\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <mat-grid-list cols=\"9\" rowHeight=\"40px\">\n        <mat-grid-tile [colspan]=\"1\"><strong>Color</strong></mat-grid-tile>\n        <mat-grid-tile [colspan]=\"1\"><strong>Código</strong></mat-grid-tile>\n        <mat-grid-tile [colspan]=\"5\"><strong>Descripción</strong></mat-grid-tile>\n        <mat-grid-tile [colspan]=\"1\"><strong>Stock</strong></mat-grid-tile>\n        <mat-grid-tile [colspan]=\"1\"><strong>Agregar</strong></mat-grid-tile>\n        <div *ngFor=\"let item of variantes; let i = index\">\n          <mat-grid-tile [colspan]=\"1\">\n              <a *ngIf=\"item.imagen !== ''\" [href]=\"item.imagen\" data-lightbox=\"image\" data-title=\"Artículo: {{item.codigo}} - Variante: {{item.nom}}  - Stock: {{item.pza}}\">\n                <img [src]=\"item.imagen\" onError=\"this.src='https://simsiroglu.com.ar/sim/wp-content/uploads/2017/07/polish.png';\"\n                  alt=\"Producto\" width=\"25\" style=\"border-radius:25px; height:25px; overflow:hidden; cursor:pointer\"\n                  class=\"pict\" matTooltip=\"Ver imagen\"\n                  matTooltipPosition=\"above\" />\n              </a>\n              <a *ngIf=\"item.imagen == ''\" href=\"https://simsiroglu.com.ar/sim/wp-content/uploads/2017/07/polish.png\" data-lightbox=\"image\" data-add=\"(item)\" data-title=\"Stock: {{item.codigo}} - Variante: {{item.nom}}  - Variante: {{item.pza}}\">\n                  <img [src]=\"item.imagen\" onError=\"this.src='https://simsiroglu.com.ar/sim/wp-content/uploads/2017/07/polish.png';\"\n                    alt=\"Producto\" width=\"25\" style=\"border-radius:25px; height:25px; overflow:hidden; cursor:pointer\"\n                    class=\"pict\"  matTooltip=\"Ver imagen\"\n                    matTooltipPosition=\"above\"/>\n                </a>\n          </mat-grid-tile>\n          <mat-grid-tile [colspan]=\"1\">{{item.codigo}}</mat-grid-tile>\n          <mat-grid-tile [colspan]=\"5\">{{item.nom}}</mat-grid-tile>\n          <mat-grid-tile [colspan]=\"1\">{{item.pza}}</mat-grid-tile>\n          <mat-grid-tile [colspan]=\"1\">\n            <button id=\"button\" mat-icon-button color=\"accent\" (click)=\"addVariante(item)\" matTooltip=\"Agregar variante\"\n              matTooltipPosition=\"above\">\n              <mat-icon aria-label=\"Agregar variante\">add_circle_outline</mat-icon>\n            </button>\n          </mat-grid-tile>\n        </div>\n      </mat-grid-list>\n    </mat-expansion-panel>\n  </mat-accordion>\n  <br />\n  <mat-card-actions align=\"middle\">\n    <div fxFlex></div><button mat-raised-button color=\"accent\" (click)=\"submitOrderDetail()\">Enviar</button>\n  </mat-card-actions>\n</mat-card>\n"

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
/* harmony import */ var _services_otherdata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/otherdata.service */ "./src/app/services/otherdata.service.ts");
/* harmony import */ var _services_sidenav_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/sidenav.service */ "./src/app/services/sidenav.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function CreateOrderComponent(router, dataservice, userService, orderService, otherService, sidenavend) {
        this.router = router;
        this.dataservice = dataservice;
        this.userService = userService;
        this.orderService = orderService;
        this.otherService = otherService;
        this.sidenavend = sidenavend;
        /*Ligthbox */
        this.myImgUrl = 'https://simsiroglu.com.ar/sim/wp-content/uploads/2017/07/polish.png';
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
            console.log('Success');
        }, function (err) {
            console.log('Failure');
        });
        // LOADING ARTICULOS
        this.orderService.getArticulos().subscribe(function (data) {
            _this.articulos = data;
        });
    };
    // toggleActive:boolean = false;
    /*sidenavopen(data) {
      this.sidenavend.open();
      localStorage.setItem('img', img);
      console.log(img);
    }*/
    CreateOrderComponent.prototype.onClientSelected = function (event) {
        var _this = this;
        console.log('Selected value');
        console.log(event);
        this.clientId = event;
        // this.clientId = '621';
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
            _this.otherService.getPrecio(_this.articulo.art_id, 1, _this.selectedClient.id).subscribe(function (data) {
                _this.price = data.precio;
                console.log('Precio = ' + _this.price);
            });
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
            console.log('Order Sent' + order);
        }, function (err) {
            console.log('Failure');
        });
        // var root = 'orders/view';
        // this.router.navigate([root]);
    };
    CreateOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-order',
            template: __webpack_require__(/*! ./create-order.component.html */ "./src/app/orders/create-order/create-order.component.html"),
            styles: [__webpack_require__(/*! ./create-order.component.css */ "./src/app/orders/create-order/create-order.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services_orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"],
            _services_otherdata_service__WEBPACK_IMPORTED_MODULE_4__["OtherdataService"],
            _services_sidenav_service__WEBPACK_IMPORTED_MODULE_5__["SidenavService"]])
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
                _view_order_details_view_order_details_component__WEBPACK_IMPORTED_MODULE_6__["ViewOrderDetailsComponent"]
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

module.exports = "<mat-card>\n  <mat-card-title>Detalle del Pedido #{{orderDetail.id}}</mat-card-title>\n  <mat-accordion>\n    <mat-expansion-panel [expanded]=\"true\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <strong>Datos del pedido</strong>\n        </mat-panel-title>\n        <mat-panel-description>\n          Información del cliente\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <mat-grid-list cols=\"3\" rowHeight=\"50px\">\n        <mat-grid-tile>\n          <div class=\"static_field\">\n            <span class=\"static_label\">Cliente</span>\n            {{orderDetail.cliente.nom}}\n          </div>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <div class=\"static_field\">\n            <span class=\"static_label\"># Pedido</span>\n            {{orderDetail.id}}\n          </div>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <div class=\"static_field\">\n            <span class=\"static_label\">Fecha</span>\n            {{orderDetail.fem| date:'dd-MM-yyyy'}}\n          </div>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <div class=\"static_field\">\n            <span class=\"static_label\">Dirección</span>\n            {{orderDetail.address.dir}} - {{orderDetail.address.localidad}}\n          </div>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <div class=\"static_field\">\n            <span class=\"static_label\">Flete</span>\n            <!-- {{ orderDetail.address.flete.nom }} -->\n          </div>\n        </mat-grid-tile>\n        <mat-grid-tile>\n          <div class=\"static_field\">\n            <span class=\"static_label\">Pago</span>\n            <!-- {{ orderDetail.address.flete.nom }} -->\n          </div>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"3\">\n          <div class=\"static_field\">\n            <span class=\"static_label\">Observaciones</span>\n            <!-- {{ orderDetail.address.flete.nom }} -->\n          </div>\n        </mat-grid-tile>\n      </mat-grid-list>\n    </mat-expansion-panel>\n  </mat-accordion>\n  <mat-accordion>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <strong>Detalle del pedido</strong>\n        </mat-panel-title>\n        <mat-panel-description>\n          Detalle de la compra\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <!--<table mat-table [dataSource]=\"orderDetail.peditms\" class=\"mat-elevation-z8\">\n\n\n        <ng-container matColumnDef=\"itemdatum\">\n          <th mat-header-cell *matHeaderCellDef># Art</th>\n          <td mat-cell *matCellDef=\"let item\"> {{ (item && item.itemdatum && item.itemdatum.art) ?\n            item.itemdatum.art.codfac : ''}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"itemname\">\n          <th mat-header-cell *matHeaderCellDef>Descripción</th>\n          <td mat-cell *matCellDef=\"let item\"> {{ (item && item.itemdatum && item.itemdatum.art) ?\n            item.itemdatum.art.nom : ''}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"itemvariant\">\n          <th mat-header-cell *matHeaderCellDef>Variante</th>\n          <td mat-cell *matCellDef=\"let item\"> {{ (item && item.itemdatum && item.itemdatum.variante) ?\n            item.itemdatum.variante.nom: '' }} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"can_ped\">\n          <th mat-header-cell *matHeaderCellDef>Cant. Pedida</th>\n          <td mat-cell *matCellDef=\"let item\"> {{ (item)? item.can_ped: ''}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"can_ped\">\n          <th mat-header-cell *matHeaderCellDef>Cant. Autorizada</th>\n          <td mat-cell *matCellDef=\"let item\"> {{ (item)? item.can_aut: ''}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"pre_ped\">\n          <th mat-header-cell *matHeaderCellDef>$ Pedido</th>\n          <td mat-cell *matCellDef=\"let item\"> {{ (item)? item.pre_ped: ''}} </td>\n        </ng-container>\n        <ng-container matColumnDef=\"pre_ped\">\n          <th mat-header-cell *matHeaderCellDef>$ Autorizad0</th>\n          <td mat-cell *matCellDef=\"let item\"> {{ (item)? item.pre_aut: ''}} </td>\n        </ng-container>\n      </table>-->\n\n      <table>\n        <thead>\n          <tr>\n            <th class=\"col-xs-1\">Imagen</th>\n            <th class=\"col-xs-1\"># Art</th>\n            <th class=\"col-xs-4 \">Desc</th>\n            <th class=\"col-xs-2\">Variante</th>\n            <th class=\"col-xs-1\">Cant. Pedida</th>\n            <th class=\"col-xs-1\">Cant. Autor.</th>\n            <th class=\"col-xs-1\">$ pedido</th>\n            <th class=\"col-xs-1\">$ Autot.</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of orderDetail.peditms, let i=index\">\n            <td class=\"col-xs-1\" class=\"pictclick\"><div><img src=\"{{item.imagen}}\" onError=\"this.src='https://simsiroglu.com.ar/sim/wp-content/uploads/2017/07/polish.png';\" alt=\"Producto\" width=\"25\" style=\"border-radius:25px; height:25px; overflow:hidden\" class=\"pict\"/></div></td>\n            <td class=\"col-xs-1\"> {{ (item && item.itemdatum && item.itemdatum.art) ? item.itemdatum.art.codfac : ''}}\n            </td>\n            <td class=\"col-xs-4\"> {{ (item && item.itemdatum && item.itemdatum.art) ? item.itemdatum.art.nom : ''}}</td>\n            <td class=\"col-xs-2\"> {{ (item && item.itemdatum && item.itemdatum.variante) ?\n              item.itemdatum.variante.nom:'' }} </td>\n            <td class=\"col-xs-1\"> {{ (item)? item.can_ped: ''}}</td>\n            <td class=\"col-xs-1\"> {{ (item)? item.can_aut: ''}}</td>\n            <td class=\"col-xs-1\"> {{ (item)? item.pre_ped: ''}}</td>\n            <td class=\"col-xs-1\"> {{ (item)? item.pre_aut: '' }}</td>\n          </tr>\n        </tbody>\n      </table>\n\n    </mat-expansion-panel>\n  </mat-accordion>\n</mat-card>"

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
/* harmony import */ var src_app_services_image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/image.service */ "./src/app/services/image.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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
    function ViewOrderDetailsComponent(route, router, orderService, imgService, dialog) {
        this.route = route;
        this.router = router;
        this.orderService = orderService;
        this.imgService = imgService;
        this.dialog = dialog;
    }
    ViewOrderDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.orderService.getOrder(id).subscribe(function (data) {
            _this.orderDetail = data;
            console.log('Order Detail DATA: ..' + data);
        });
    };
    ViewOrderDetailsComponent.prototype.getProdPict = function (cod, col) {
        var _this = this;
        return this.imgService.getImg(cod, col).subscribe(function (img) {
            _this.imgUrl = img;
            console.log('Image URL ' + img);
        });
    };
    ViewOrderDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-order-details',
            template: __webpack_require__(/*! ./view-order-details.component.html */ "./src/app/orders/view-order-details/view-order-details.component.html"),
            styles: [__webpack_require__(/*! ./view-order-details.component.css */ "./src/app/orders/view-order-details/view-order-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"],
            src_app_services_image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], ViewOrderDetailsComponent);
    return ViewOrderDetailsComponent;
}());

var ViewOrderDetails = /** @class */ (function () {
    function ViewOrderDetails(route, router, orderService, imgService) {
        this.route = route;
        this.router = router;
        this.orderService = orderService;
        this.imgService = imgService;
    }
    ViewOrderDetails.prototype.ngAfterViewInit = function () {
        this.getProdPict(100, 100);
    };
    ViewOrderDetails.prototype.getProdPict = function (cod, col) {
        var _this = this;
        this.imgService.getImg(cod, col).subscribe(function (img) {
            _this.imgUrl = img;
            console.log('Image URL ' + img);
        });
    };
    return ViewOrderDetails;
}());



/***/ }),

/***/ "./src/app/orders/view-orders/view-orders.component.css":
/*!**************************************************************!*\
  !*** ./src/app/orders/view-orders/view-orders.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n}\n.mat-form-field {\n    width: 100%;\n}\n.mat-paginator {\n    display: block;\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/orders/view-orders/view-orders.component.html":
/*!***************************************************************!*\
  !*** ./src/app/orders/view-orders/view-orders.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>Mis Pedidos</mat-card-title>\n  <mat-grid-list cols=\"2\" rowHeight=\"80px\">\n    <mat-grid-tile>\n      <mat-form-field>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtrar resultados\">\n      </mat-form-field>\n    </mat-grid-tile>\n    <mat-grid-tile>\n      <mat-paginator [pageSizeOptions]=\"[25, 50, 100]\" showFirstLastButtons>\n      </mat-paginator>\n    </mat-grid-tile>\n  </mat-grid-list>\n  <div class=\"spinner-container\" *ngIf=\"dataSource.loading$ | async\">\n    <mat-spinner></mat-spinner>\n  </div>\n  <table mat-table [dataSource]=\"dataSource\" matSort>\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> # </th>\n      <td mat-cell *matCellDef=\"let order\"> {{order.nro}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"date\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Fecha </th>\n      <td mat-cell *matCellDef=\"let order\"> {{order.fem| date:'dd-MM-yyyy'}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"nom\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Cliente </th>\n      <td mat-cell *matCellDef=\"let order\"> {{order.cliente.nom}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"address\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Dirección </th>\n        <td mat-cell *matCellDef=\"let order\"> {{(order.address && order.address.dir) ?order.address.dir : \"\"}}</td>\n      </ng-container>\n    <ng-container matColumnDef=\"button\">\n      <th mat-header-cell *matHeaderCellDef> Ver </th>\n      <td mat-cell *matCellDef=\"let order\">\n        <button mat-mini-fab color=\"accent\" class=\"col-xs-1\" [routerLink]=\"['/orders/detail', order.id]\" matTooltip=\"Ver orden completa\"\n          matTooltipPosition=\"above\">\n          <mat-icon aria-label=\"Ver detalle\">search</mat-icon>\n        </button> </td>\n    </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n  </table>\n  <button mat-raised-button color=\"accent\" [routerLink]=\"['/orders/view']\">\n    <mat-icon aria-label=\"Volver\">arrow_back</mat-icon> Volver\n  </button>\n</mat-card>\n"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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
        this.ordersData = null;
        this.displayedColumns = ['id', 'date', 'nom', 'address', 'button'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.orders);
    }
    /*  ngOnInit() {
        // call service to retrieve orders by seller
        // let sellerId = this.route.snapshot.paramMap.get('sellerId');
        let sellerId = this.dataservice.getSellerId();
        sessionStorage.setItem('sellerId', JSON.stringify(sellerId));
        console.log('view orders...' + sellerId);
    
    
        this.ordersService.getOrders(sellerId).subscribe((data: Order[]) => {
          console.log('ViewOrdersComponent orders...' + data);
          this.orders = data;
          for (let order of this.orders)
            console.log("address " + order.address + "fem" + order.fem)
        })
          ;
      } */
    ViewOrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        // call service to retrieve orders by seller
        var sellerId = '37';
        this.ordersService.getOrders(sellerId).subscribe(function (data) {
            _this.ordersData = data;
            _this.dataSource.data = _this.ordersData;
            // error => this.error = error
        });
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    ViewOrdersComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], ViewOrdersComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], ViewOrdersComponent.prototype, "paginator", void 0);
    ViewOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-orders',
            template: __webpack_require__(/*! ./view-orders.component.html */ "./src/app/orders/view-orders/view-orders.component.html"),
            styles: [__webpack_require__(/*! ./view-orders.component.css */ "./src/app/orders/view-orders/view-orders.component.css")],
            providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _services_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"]]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"]])
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
        this.ROOT_URL = 'https://enigmatic-cove-26128.herokuapp.com/api';
        // ROOT_URL = 'http://localhost.:8000/api';
        this.GET_CUSTOMERS_URL = '/clientes/vendedor/';
        this.GET_CUSTOMER_URL = '/clientes/id/';
        this.GET_ARTICULOS_URL = '/articulos/';
        this.GET_ART_URL = '/articulos/id/';
        this.CUSTOMERS_URL = '/clientes/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    CustomersService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ;
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
    CustomersService.prototype.submitCustomer = function (data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json');
        sessionStorage.setItem('customers', JSON.stringify(data));
        // return this.httpClient.put(this.ROOT_URL + this.GET_CUSTOMER_URL + data.id, JSON.stringify(data), { headers: headers });
        return this.httpClient.put(this.ROOT_URL + this.GET_CUSTOMER_URL + data.id, JSON.stringify(data), { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    CustomersService.prototype.setCustomer = function (data) {
        sessionStorage.setItem('ctype', JSON.stringify(data));
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this.httpClient.put(this.ROOT_URL + this.GET_CUSTOMER_URL, JSON.stringify(data), { headers: headers });
    };
    CustomersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
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

/***/ "./src/app/services/image.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/image.service.ts ***!
  \*******************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
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


var ImageService = /** @class */ (function () {
    function ImageService(httpClient) {
        this.httpClient = httpClient;
        this.ROOT_URL = 'https://simsiroglu.com.ar/sim/wp-content/themes/shk/productgallery.php?action=getimg';
    }
    ImageService.prototype.getImg = function (codigo, color) {
        return this.httpClient.get(this.ROOT_URL + '&codigo=' + codigo + '&color=' + color);
    };
    ImageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ImageService);
    return ImageService;
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
        this.ROOT_URL = 'https://enigmatic-cove-26128.herokuapp.com/api';
        // ROOT_URL = 'http://lumasoft.dyndns.org:8000/api';
        this.GET_ORDERS_URL = '/pedcab/vendedor/';
        this.GET_ORDER_URL = '/pedcab/id/';
        this.GET_ARTICULOS_URL = '/articulos/';
        this.GET_ART_URL = '/articulos/id/';
        this.POST_ORDER_URL = '/pedcab/';
        this.Get_Expresos = '/api/expresos';
        this.Get_Expreso_Id = '/api/expresos/id/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    // Retrieve Orders
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

/***/ "./src/app/services/otherdata.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/otherdata.service.ts ***!
  \***********************************************/
/*! exports provided: OtherdataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherdataService", function() { return OtherdataService; });
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


var OtherdataService = /** @class */ (function () {
    function OtherdataService(httpClient) {
        this.httpClient = httpClient;
        this.ROOT_URL = 'https://enigmatic-cove-26128.herokuapp.com/api';
        this.Get_Expresos = '/expresos';
        this.Get_Expreso_Id = '/expresos/id/';
        this.Get_Provincia = '/provincia';
        this.Get_Provincia_Id = '/provincia/id/';
        this.Get_Precio_id = '/precio/id_articulo/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    // Retrieve adittional orders and customers data
    OtherdataService.prototype.getExpresos = function () {
        return this.httpClient.get(this.ROOT_URL + this.Get_Expresos);
    };
    OtherdataService.prototype.getExpreso = function (id) {
        return this.httpClient.get(this.ROOT_URL + this.Get_Expreso_Id + id);
    };
    OtherdataService.prototype.getProvincias = function () {
        return this.httpClient.get(this.ROOT_URL + this.Get_Provincia);
    };
    OtherdataService.prototype.getProvincia = function (id) {
        return this.httpClient.get(this.ROOT_URL + this.Get_Provincia_Id + id);
    };
    OtherdataService.prototype.getPrecio = function (id_articulo, id_conpag, id_cliente) {
        return this.httpClient.get(this.ROOT_URL +
            this.Get_Precio_id + id_articulo +
            '/id_conpag/' + id_conpag +
            '/id_cliente/' + id_cliente);
    };
    OtherdataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OtherdataService);
    return OtherdataService;
}());



/***/ }),

/***/ "./src/app/services/sidenav.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/sidenav.service.ts ***!
  \*********************************************/
/*! exports provided: SidenavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavService", function() { return SidenavService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SidenavService = /** @class */ (function () {
    function SidenavService() {
    }
    SidenavService.prototype.setSidenav = function (sidenavend) {
        this.sidenavend = sidenavend;
    };
    SidenavService.prototype.open = function () {
        return this.sidenavend.open();
    };
    SidenavService.prototype.close = function () {
        return this.sidenavend.close();
    };
    SidenavService.prototype.toggle = function () {
        this.sidenavend.toggle();
    };
    SidenavService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SidenavService);
    return SidenavService;
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
    // ROOT_URL = 'http://lumasoft.dyndns.org:8000/api';
    // constructor(private store: Store<AppState>) { }
    function UserService(httpClient) {
        this.httpClient = httpClient;
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

module.exports = __webpack_require__(/*! /home/gabi/Heroku/orders-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map