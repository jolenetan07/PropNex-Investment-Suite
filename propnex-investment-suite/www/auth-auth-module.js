(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>{{ isLogin? 'Login' : 'Sign Up'}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <h1 class=\"ion-text-center\">PropNex Investment Suite</h1>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Username</ion-label>\r\n              <ion-input \r\n                type=\"text\" \r\n                ngModel \r\n                name=\"username\"\r\n                required \r\n                #usernameCtrl=\"ngModel\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item \r\n              *ngIf=\"!usernameCtrl.valid && usernameCtrl.touched\"\r\n              lines=\"none\"\r\n            >\r\n              <ion-label>\r\n                Invalid username.\r\n              </ion-label>\r\n            </ion-item>\r\n        \r\n            <ion-item>\r\n              <ion-label position=\"floating\">Password</ion-label>\r\n              <ion-input \r\n                type=\"password\"\r\n                ngModel\r\n                name=\"password\"\r\n                required\r\n                minlength=\"6\"\r\n                #passwordCtrl=\"ngModel\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item \r\n              *ngIf=\"!passwordCtrl.valid && passwordCtrl.touched\"\r\n              lines=\"none\"\r\n            >\r\n              <ion-label>\r\n                Invalid password.\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row *ngIf=\"!isLogin\">\r\n        <ion-col>\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">First Name</ion-label>\r\n              <ion-input \r\n                type=\"text\" \r\n                ngModel \r\n                name=\"firstname\"\r\n                required \r\n                #firstnameCtrl=\"ngModel\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item \r\n              *ngIf=\"!firstnameCtrl.valid && firstnameCtrl.touched\"\r\n              lines=\"none\"\r\n            >\r\n              <ion-label>\r\n                Invalid first name.\r\n              </ion-label>\r\n            </ion-item>\r\n        \r\n            <ion-item>\r\n              <ion-label position=\"floating\">Last Name</ion-label>\r\n              <ion-input \r\n                type=\"text\"\r\n                ngModel\r\n                name=\"lastname\"\r\n                required\r\n                #lastnameCtrl=\"ngModel\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item \r\n              *ngIf=\"!lastnameCtrl.valid && lastnameCtrl.touched\"\r\n              lines=\"none\"\r\n            >\r\n              <ion-label>\r\n                Invalid last name.\r\n              </ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Household Income</ion-label>\r\n              <ion-input \r\n                type=\"number\"\r\n                ngModel\r\n                name=\"income\"\r\n                required\r\n                min=\"0\"\r\n                #incomeCtrl=\"ngModel\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item \r\n              *ngIf=\"!incomeCtrl.valid && incomeCtrl.touched\"\r\n              lines=\"none\"\r\n            >\r\n              <ion-label>\r\n                Invalid income.\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col class=\"ion-margin-top\">\r\n          <ion-select \r\n            placeholder=\"Select User Type\"\r\n            interface=\"popover\"\r\n            ngModel \r\n            name=\"usertype\" \r\n            #usertypeCtrl=\"ngModel\" \r\n            required\r\n          >\r\n            <ion-select-option value=\"1\">Buyer</ion-select-option>\r\n            <ion-select-option value=\"2\">Seller</ion-select-option>\r\n          </ion-select>\r\n        </ion-col>\r\n      </ion-row>\r\n  \r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button \r\n            type=\"button\" \r\n            color=\"tertiary\" \r\n            fill=\"clear\" \r\n            expand=\"block\"\r\n            (click)=\"onSwitchAuthMode()\"\r\n            >{{ isLogin ? \r\n              'Don\\'t have an account? Sign Up' : \r\n              'Already have an account? Login'}}\r\n          </ion-button>\r\n  \r\n          <ion-button \r\n            type=\"submit\" \r\n            (click)=\"onLogin()\" \r\n            expand=\"block\"\r\n            [disabled]=\"!f.valid\"\r\n            >{{ isLogin ? \r\n              'Login' : \r\n              'Sign Up'}}\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageModule", function() { return AuthPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.page */ "./src/app/auth/auth.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_5__["AuthPage"]
    }
];
var AuthPageModule = /** @class */ (function () {
    function AuthPageModule() {
    }
    AuthPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_5__["AuthPage"]]
        })
    ], AuthPageModule);
    return AuthPageModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.page.scss":
/*!*************************************!*\
  !*** ./src/app/auth/auth.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/auth/auth.page.ts":
/*!***********************************!*\
  !*** ./src/app/auth/auth.page.ts ***!
  \***********************************/
/*! exports provided: AuthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPage", function() { return AuthPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var AuthPage = /** @class */ (function () {
    function AuthPage(authService, router, loadingCtrl) {
        this.authService = authService;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.isLoading = false;
        this.isLogin = true;
    }
    AuthPage.prototype.ngOnInit = function () {
    };
    AuthPage.prototype.onLogin = function () {
        var _this = this;
        this.isLoading = true;
        this.authService.login();
        this.loadingCtrl
            .create({ keyboardClose: true, message: 'Authenticating...' })
            .then(function (loadingEl) {
            loadingEl.present();
            setTimeout(function () {
                _this.isLoading = false;
                loadingEl.dismiss();
                _this.router.navigateByUrl('/home/tabs/main');
            }, 1500);
        });
    };
    AuthPage.prototype.onSubmit = function (form) {
        if (!form.valid) {
            return;
        }
        var username = form.value.username;
        var password = form.value.password;
        var usertype = form.value.usertype;
        var firstname = form.value.firstname;
        var lastname = form.value.lastname;
        var income = form.value.income;
        form.reset();
        console.log(username, password, usertype);
        console.log(firstname, lastname, income);
        if (this.isLogin) {
            // send request to login servers
        }
        else {
            // send request to signup servers
        }
    };
    AuthPage.prototype.onSwitchAuthMode = function () {
        this.isLogin = !this.isLogin;
    };
    AuthPage.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    AuthPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __importDefault(__webpack_require__(/*! raw-loader!./auth.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./auth.page.scss */ "./src/app/auth/auth.page.scss")).default]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], AuthPage);
    return AuthPage;
}());



/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map