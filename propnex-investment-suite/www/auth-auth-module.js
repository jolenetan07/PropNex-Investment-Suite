(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ isLogin? 'Login' : 'Sign Up'}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <h1 class=\"ion-text-center\">PropNex Investment Suite</h1>\n        </ion-col>\n\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-list>\n            <ion-item>\n              <ion-label position=\"floating\">Username</ion-label>\n              <ion-input \n                type=\"text\" \n                ngModel \n                name=\"username\"\n                required \n                #usernameCtrl=\"ngModel\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item \n              *ngIf=\"!usernameCtrl.valid && usernameCtrl.touched\"\n              lines=\"none\"\n            >\n              <ion-label>\n                Invalid username.\n              </ion-label>\n            </ion-item>\n        \n            <ion-item>\n              <ion-label position=\"floating\">Password</ion-label>\n              <ion-input \n                type=\"password\"\n                ngModel\n                name=\"password\"\n                required\n                minlength=\"6\"\n                #passwordCtrl=\"ngModel\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item \n              *ngIf=\"!passwordCtrl.valid && passwordCtrl.touched\"\n              lines=\"none\"\n            >\n              <ion-label>\n                Invalid password.\n              </ion-label>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf=\"!isLogin\">\n        <ion-col>\n          <ion-list>\n            <ion-item>\n              <ion-label position=\"floating\">First Name</ion-label>\n              <ion-input \n                type=\"text\" \n                ngModel \n                name=\"firstname\"\n                required \n                #firstnameCtrl=\"ngModel\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item \n              *ngIf=\"!firstnameCtrl.valid && firstnameCtrl.touched\"\n              lines=\"none\"\n            >\n              <ion-label>\n                Invalid first name.\n              </ion-label>\n            </ion-item>\n        \n            <ion-item>\n              <ion-label position=\"floating\">Last Name</ion-label>\n              <ion-input \n                type=\"text\"\n                ngModel\n                name=\"lastname\"\n                required\n                #lastnameCtrl=\"ngModel\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item \n              *ngIf=\"!lastnameCtrl.valid && lastnameCtrl.touched\"\n              lines=\"none\"\n            >\n              <ion-label>\n                Invalid last name.\n              </ion-label>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Household Income</ion-label>\n              <ion-input \n                type=\"number\"\n                ngModel\n                name=\"income\"\n                required\n                min=\"0\"\n                #incomeCtrl=\"ngModel\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item \n              *ngIf=\"!incomeCtrl.valid && incomeCtrl.touched\"\n              lines=\"none\"\n            >\n              <ion-label>\n                Invalid income.\n              </ion-label>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class=\"ion-margin-top\">\n          <ion-select \n            placeholder=\"Select User Type\"\n            interface=\"popover\"\n            ngModel \n            name=\"usertype\" \n            #usertypeCtrl=\"ngModel\" \n            required\n          >\n            <ion-select-option value=\"1\">Buyer</ion-select-option>\n            <ion-select-option value=\"2\">Seller</ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n  \n      <ion-row>\n        <ion-col>\n          <ion-button \n            type=\"button\" \n            color=\"tertiary\" \n            fill=\"clear\" \n            expand=\"block\"\n            (click)=\"onSwitchAuthMode()\"\n            >{{ isLogin ? \n              'Don\\'t have an account? Sign Up' : \n              'Already have an account? Login'}}\n          </ion-button>\n  \n          <ion-button \n            type=\"submit\" \n            (click)=\"onLogin()\" \n            expand=\"block\"\n            [disabled]=\"!f.valid\"\n            >{{ isLogin ? \n              'Login' : \n              'Sign Up'}}\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n  <!-- <ion-button (click)=\"fetchFBUsers()\">\n    Fetch FB Users\n  </ion-button>\n\n  <ion-button (click)=\"fetchFBPostals()\">\n    Fetch FB Postals\n  </ion-button>\n\n  <ion-button (click)=\"fetchFBTrans()\">\n    Fetch FB Trans\n  </ion-button> -->\n\n</ion-content>\n");

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
    // loadedFBUsers: fbUser[];
    // private fbUsersSub: Subscription;
    // loadedFBPostals: fbPostal[];
    // private fbPostalsSub: Subscription;
    // loadedFBTrans: fbTrans[];
    // private fbPTransSub: Subscription;
    function AuthPage(authService, router, loadingCtrl) {
        this.authService = authService;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.isLoading = false;
        this.isLogin = true;
    }
    AuthPage.prototype.ngOnInit = function () {
        // this.fbUsersSub = this.authService.fbUsers.subscribe(fbUsers => {
        //   this.loadedFBUsers = fbUsers;
        // })
        // this.fbPostalsSub = this.authService.fbPostals.subscribe(fbPostals => {
        //   this.loadedFBPostals = fbPostals;
        // })
        // this.fbPTransSub = this.authService.fbTrans.subscribe(fbTrans => {
        //   this.loadedFBTrans = fbTrans;
        // })
    };
    AuthPage.prototype.ionViewWillEnter = function () {
        // this.authService.fetchFBUsers().subscribe(() => {
        // });
        // this.authService.fetchFBPostals().subscribe(() => {
        // });
        // this.authService.fetchFBTrans().subscribe(() => {
        // });
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
    // fetchFBUsers() {
    //   console.log(this.loadedFBUsers);
    //   //console.log(this.loadedFBUsers[0].email);
    // }
    // fetchFBPostals() {
    //   console.log(this.loadedFBPostals);
    // }
    // fetchFBTrans() {
    //   console.log(this.loadedFBTrans);
    // }
    AuthPage.prototype.ngOnDestroy = function () {
        // if (this.fbUsersSub) {
        //   this.fbUsersSub.unsubscribe();
        // }
        // if (this.fbPostalsSub) {
        //   this.fbPostalsSub.unsubscribe();
        // }
        // if (this.fbPTransSub) {
        //   this.fbPTransSub.unsubscribe();
        // }
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