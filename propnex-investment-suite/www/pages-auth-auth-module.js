(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-auth-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/auth.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/auth.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ isLogin? 'Login' : 'Sign Up'}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <h1 class=\"ion-text-center\">PropNex Investment Suite</h1>\n        </ion-col>\n\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-list>\n            <ion-item>\n              <ion-label position=\"floating\">Email</ion-label>\n              <ion-input \n                type=\"text\" \n                ngModel \n                name=\"email\"\n                required \n                #emailCtrl=\"ngModel\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item \n              *ngIf=\"!emailCtrl.valid && emailCtrl.touched\"\n              lines=\"none\"\n            >\n              <ion-label>\n                Invalid email.\n              </ion-label>\n            </ion-item>\n        \n            <ion-item>\n              <ion-label position=\"floating\">Password</ion-label>\n              <ion-input \n                type=\"password\"\n                ngModel\n                name=\"password\"\n                required\n                minlength=\"6\"\n                #passwordCtrl=\"ngModel\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item \n              *ngIf=\"!passwordCtrl.valid && passwordCtrl.touched\"\n              lines=\"none\"\n            >\n              <ion-label>\n                Invalid password.\n              </ion-label>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf=\"!isLogin\">\n        <ion-col>\n          <ion-list>\n            <ion-item>\n              <ion-label position=\"floating\">Name</ion-label>\n              <ion-input \n                type=\"text\" \n                ngModel \n                name=\"name\"\n                required \n                #nameCtrl=\"ngModel\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item \n              *ngIf=\"!nameCtrl.valid && nameCtrl.touched\"\n              lines=\"none\"\n            >\n              <ion-label>\n                Invalid name.\n              </ion-label>\n            </ion-item>\n      \n          </ion-list>\n        </ion-col>\n      </ion-row>\n  \n      <ion-row>\n        <ion-col>\n          <ion-button \n            type=\"button\" \n            color=\"tertiary\" \n            fill=\"clear\" \n            expand=\"block\"\n            (click)=\"onSwitchAuthMode()\"\n            >{{ isLogin ? \n              'Don\\'t have an account? Sign Up' : \n              'Already have an account? Login'}}\n          </ion-button>\n  \n          <ion-button \n            type=\"submit\"  \n            expand=\"block\"\n            [disabled]=\"!f.valid\"\n            >{{ isLogin ? \n              'Login' : \n              'Sign Up'}}\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n  <!-- <ion-button (click)=\"fetchFBUsers()\">\n    Fetch FB Users\n  </ion-button>\n\n  <ion-button (click)=\"fetchFBPostals()\">\n    Fetch FB Postals\n  </ion-button>\n\n  <ion-button (click)=\"fetchFBTrans()\">\n    Fetch FB Trans\n  </ion-button> -->\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/auth/auth.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/auth/auth.module.ts ***!
  \*******************************************/
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
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.page */ "./src/app/pages/auth/auth.page.ts");
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

/***/ "./src/app/pages/auth/auth.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/auth/auth.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvYXV0aC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/auth/auth.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/auth/auth.page.ts ***!
  \*****************************************/
/*! exports provided: AuthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPage", function() { return AuthPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var AuthPage = /** @class */ (function () {
    // loadedFBPostals: fbPostal[];
    // private fbPostalsSub: Subscription;
    // loadedFBTrans: fbTrans[];
    // private fbPTransSub: Subscription;
    function AuthPage(authService, router, loadingCtrl, alertController
    //private http: HttpClient
    ) {
        this.authService = authService;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.alertController = alertController;
        this.isLoading = false;
        this.isLogin = true;
    }
    AuthPage.prototype.ngOnInit = function () {
        var _this = this;
        this.fbUsersSub = this.authService.fbUsers.subscribe(function (fbUsers) {
            _this.loadedFBUsers = fbUsers;
        });
        // this.fbPostalsSub = this.authService.fbPostals.subscribe(fbPostals => {
        //   this.loadedFBPostals = fbPostals;
        // })
        // this.fbPTransSub = this.authService.fbTrans.subscribe(fbTrans => {
        //   this.loadedFBTrans = fbTrans;
        // })
    };
    AuthPage.prototype.ionViewWillEnter = function () {
        this.authService.fetchFBUsers().subscribe(function () {
        });
        // this.authService.fetchFBPostals().subscribe(() => {
        // });
        // this.authService.fetchFBTrans().subscribe(() => {
        // });
    };
    AuthPage.prototype.onSubmit = function (form) {
        if (!form.valid) {
            return;
        }
        var email = form.value.email;
        var password = form.value.password;
        var name = form.value.name;
        form.reset();
        console.log(email, password);
        console.log(name);
        if (this.isLogin) {
            // send request to login servers
            this.result = this.loadedFBUsers.find(function (u) { return u.email === email; });
            if (this.result) {
                if (this.result.password === password) {
                    this.authService.currFbUser = this.result;
                    console.log(this.authService.currFbUser);
                    this.authService.login();
                    this.router.navigateByUrl('/home/tabs/main');
                }
                else {
                    // invalid password
                    this.presentPasswordAlert();
                }
            }
            else {
                // invalid email
                this.presentEmailAlert();
            }
        }
        else {
            // send request to signup servers
            this.authService.addUser(email, name, password).subscribe(function () {
            });
            this.isLogin = true;
            this.router.navigateByUrl('/auth');
        }
    };
    AuthPage.prototype.presentEmailAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Authentication Failed',
                            message: 'Incorrect email!',
                            buttons: ['OK'],
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthPage.prototype.presentPasswordAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Authentication Failed',
                            message: 'Incorrect password!',
                            buttons: ['OK'],
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthPage.prototype.onSwitchAuthMode = function () {
        this.isLogin = !this.isLogin;
    };
    AuthPage.prototype.fetchFBUsers = function () {
        console.log(this.loadedFBUsers);
        //console.log(this.loadedFBUsers[0].email);
    };
    // fetchFBPostals() {
    //   console.log(this.loadedFBPostals);
    // }
    // fetchFBTrans() {
    //   console.log(this.loadedFBTrans);
    // }
    AuthPage.prototype.ngOnDestroy = function () {
        if (this.fbUsersSub) {
            this.fbUsersSub.unsubscribe();
        }
        // if (this.fbPostalsSub) {
        //   this.fbPostalsSub.unsubscribe();
        // }
        // if (this.fbPTransSub) {
        //   this.fbPTransSub.unsubscribe();
        // }
    };
    AuthPage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    AuthPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __importDefault(__webpack_require__(/*! raw-loader!./auth.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/auth.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./auth.page.scss */ "./src/app/pages/auth/auth.page.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
            //private http: HttpClient
        ])
    ], AuthPage);
    return AuthPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-auth-auth-module.js.map