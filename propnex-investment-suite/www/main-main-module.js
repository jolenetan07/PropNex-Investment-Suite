(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/main/edit-profile/edit-profile.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/main/edit-profile/edit-profile.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"primary\">\r\n      <ion-button fill=\"clear\" color=\"danger\" (click)=\"onCancel()\">\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Edit Profile</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"form\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Username</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"username\"\r\n              ></ion-input>\r\n            </ion-item>\r\n        \r\n            <ion-item>\r\n              <ion-label position=\"floating\">Password</ion-label>\r\n              <ion-input \r\n                type=\"password\"\r\n                formControlName=\"password\"\r\n                minlength=\"6\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item\r\n              *ngIf=\"!form.get('password').valid && form.get('password').touched\"\r\n            >\r\n              <p>Password must be at least 6 characters.</p>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">First Name</ion-label>\r\n              <ion-input \r\n                type=\"text\"\r\n                formControlName=\"firstname\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Last Name</ion-label>\r\n              <ion-input \r\n                type=\"text\"\r\n                formControlName=\"lastname\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Household Income</ion-label>\r\n              <ion-input \r\n                type=\"number\"\r\n                formControlName=\"incomerange\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-row>\r\n              <ion-col>\r\n                <ion-button \r\n                type=\"submit\" \r\n                (click)=\"onEditProfile()\" \r\n                expand=\"block\"\r\n                >Save Changes\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-list>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/main/main.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/main/main.page.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Home</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-card>\r\n          <ion-card-header class=\"ion-text-center\">\r\n            <ion-card-subtitle class=\"ion-text-left ion-margin-bottom\">Welcome Back,</ion-card-subtitle>\r\n            <ion-card-title>{{currUser.firstname}} {{currUser.lastname}}</ion-card-title>\r\n            <ion-icon name=\"person-circle\"></ion-icon>\r\n          </ion-card-header>\r\n\r\n          <ion-card-content class=\"ion-text-center\">\r\n            <ion-button fill=\"clear\" color=\"tertiary\" (click)=\"onEditProfile()\">Edit Profile</ion-button>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title>Favourites</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <ion-card-content>\r\n            <ion-list>\r\n              <ion-item \r\n                class=\"ion-no-padding ion-text-center\" \r\n                *ngIf=\"loadedFavPlaces.length <= 0\"\r\n              >\r\n                <ion-label>\r\n                  <h2>No favourites for now...</h2>\r\n                </ion-label>\r\n              </ion-item>\r\n\r\n              <ion-item \r\n                class=\"ion-no-padding\" \r\n                detail \r\n                *ngIf=\"loadedFavPlaces.length > 0\"\r\n                [routerLink]=\"['/', 'units', loadedFavPlaces[0].postal]\"\r\n              >\r\n                <ion-thumbnail slot=\"start\">\r\n                  <ion-img [src]=\"loadedFavPlaces[0].imageUrl\"></ion-img>\r\n                </ion-thumbnail>\r\n                <ion-label>\r\n                  <h2>{{ loadedFavPlaces[0].name }}</h2>\r\n                  <p>Singapore {{ loadedFavPlaces[0].postal}}</p>\r\n                </ion-label>\r\n              </ion-item>\r\n\r\n\r\n              <ion-item \r\n                class=\"ion-no-padding\" \r\n                detail \r\n                *ngIf=\"loadedFavPlaces.length > 1\"\r\n                [routerLink]=\"['/', 'units', loadedFavPlaces[1].postal]\"\r\n              >\r\n                <ion-thumbnail slot=\"start\">\r\n                  <ion-img [src]=\"loadedFavPlaces[1].imageUrl\"></ion-img>\r\n                </ion-thumbnail>\r\n                <ion-label>\r\n                  <h2>{{ loadedFavPlaces[1].name }}</h2>\r\n                  <p>Singapore {{ loadedFavPlaces[1].postal}}</p>\r\n                </ion-label>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card-content>\r\n\r\n          <div class=\"ion-text-center\" >\r\n            <ion-button \r\n              fill=\"clear\" \r\n              color=\"tertiary\"\r\n              [routerLink]=\"[\r\n              '/', \r\n              'home', \r\n              'tabs', \r\n              'favourites'\r\n              ]\"\r\n            >\r\n            View More\r\n            </ion-button>\r\n          </div>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title>Recommended For You</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <ion-card-content>\r\n            <ion-list>\r\n              <ion-item \r\n                class=\"ion-no-padding ion-text-center\" \r\n                *ngIf=\"loadedRecPlaces.length <= 0\"\r\n              >\r\n                <ion-label>\r\n                  <h2>No recommendations for now...</h2>\r\n                </ion-label>\r\n              </ion-item>\r\n\r\n              <ion-item \r\n                class=\"ion-no-padding\" \r\n                detail \r\n                *ngIf=\"loadedRecPlaces.length > 0\"\r\n                [routerLink]=\"['/', 'units', loadedRecPlaces[0].postal]\"\r\n              >\r\n                <ion-thumbnail slot=\"start\">\r\n                  <ion-img [src]=\"loadedRecPlaces[0].imageUrl\"></ion-img>\r\n                </ion-thumbnail>\r\n                <ion-label>\r\n                  <h2>{{ loadedRecPlaces[0].name }}</h2>\r\n                  <p>Singapore {{ loadedRecPlaces[0].postal}}</p>\r\n                </ion-label>\r\n              </ion-item>\r\n\r\n              <ion-item \r\n                class=\"ion-no-padding\" \r\n                detail \r\n                *ngIf=\"loadedRecPlaces.length > 1\"\r\n                [routerLink]=\"['/', 'units', loadedRecPlaces[1].postal]\"\r\n              >\r\n                <ion-thumbnail slot=\"start\">\r\n                  <ion-img [src]=\"loadedRecPlaces[1].imageUrl\"></ion-img>\r\n                </ion-thumbnail>\r\n                <ion-label>\r\n                  <h2>{{ loadedRecPlaces[1].name }}</h2>\r\n                  <p>Singapore {{ loadedRecPlaces[1].postal}}</p>\r\n                </ion-label>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card-content>\r\n\r\n          <div class=\"ion-text-center\">\r\n            <ion-button \r\n              fill=\"clear\" \r\n              color=\"tertiary\"\r\n              [routerLink]=\"[\r\n              '/', \r\n              'home', \r\n              'tabs', \r\n              'recommendations'\r\n              ]\"\r\n            >\r\n            View More\r\n          </ion-button>\r\n          </div>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/home/main/edit-profile/edit-profile.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/home/main/edit-profile/edit-profile.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbWFpbi9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/main/edit-profile/edit-profile.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/home/main/edit-profile/edit-profile.component.ts ***!
  \******************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
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




var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(authService, modalCtrl) {
        this.authService = authService;
        this.modalCtrl = modalCtrl;
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        this.currUser = this.authService.currentUser;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.currUser.username, {
                updateOn: 'blur',
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.currUser.password, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]
            }),
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.currUser.firstname, {
                updateOn: 'blur',
            }),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.currUser.lastname, {
                updateOn: 'blur',
            }),
            incomerange: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.currUser.income, {
                updateOn: 'blur',
            })
        });
    };
    EditProfileComponent.prototype.onCancel = function () {
        this.modalCtrl.dismiss(null, 'cancel');
    };
    EditProfileComponent.prototype.onEditProfile = function () {
        if (!this.form.valid) {
            return;
        }
        // console.log(this.form);
        this.authService.editUser(this.authService.currentUser, this.form.value.username, this.form.value.password, this.form.value.firstname, this.form.value.lastname, this.form.value.incomerange);
        this.modalCtrl.dismiss({ message: 'Changes saved' }, 'confirm');
    };
    EditProfileComponent.ctorParameters = function () { return [
        { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    EditProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-profile',
            template: __importDefault(__webpack_require__(/*! raw-loader!./edit-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/main/edit-profile/edit-profile.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./edit-profile.component.scss */ "./src/app/home/main/edit-profile/edit-profile.component.scss")).default]
        }),
        __metadata("design:paramtypes", [src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/home/main/main-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/home/main/main-routing.module.ts ***!
  \**************************************************/
/*! exports provided: MainPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageRoutingModule", function() { return MainPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.page */ "./src/app/home/main/main.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_2__["MainPage"]
    }
];
var MainPageRoutingModule = /** @class */ (function () {
    function MainPageRoutingModule() {
    }
    MainPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], MainPageRoutingModule);
    return MainPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/main/main.module.ts":
/*!******************************************!*\
  !*** ./src/app/home/main/main.module.ts ***!
  \******************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/home/main/main-routing.module.ts");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main.page */ "./src/app/home/main/main.page.ts");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/home/main/edit-profile/edit-profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MainPageModule = /** @class */ (function () {
    function MainPageModule() {
    }
    MainPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _main_routing_module__WEBPACK_IMPORTED_MODULE_4__["MainPageRoutingModule"]
            ],
            declarations: [_main_page__WEBPACK_IMPORTED_MODULE_5__["MainPage"], _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__["EditProfileComponent"]]
        })
    ], MainPageModule);
    return MainPageModule;
}());



/***/ }),

/***/ "./src/app/home/main/main.page.scss":
/*!******************************************!*\
  !*** ./src/app/home/main/main.page.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  font-size: 88px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9tYWluL0M6XFxVc2Vyc1xcNjU5MDFcXERvY3VtZW50c1xcbnR1XFx5ZWFyNHNlbTFcXEZZUFxccmVwb1xcaHRtbF9hcHBcXHByb3BuZXgtaW52ZXN0bWVudC1zdWl0ZS9zcmNcXGFwcFxcaG9tZVxcbWFpblxcbWFpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvbWFpbi9tYWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbWFpbi9tYWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogODhweDtcclxuICB9XHJcbiAgIiwiaW9uLWljb24ge1xuICBmb250LXNpemU6IDg4cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/main/main.page.ts":
/*!****************************************!*\
  !*** ./src/app/home/main/main.page.ts ***!
  \****************************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home.service */ "./src/app/home/home.service.ts");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/home/main/edit-profile/edit-profile.component.ts");
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





var MainPage = /** @class */ (function () {
    function MainPage(homeService, authService, modalCtrl) {
        this.homeService = homeService;
        this.authService = authService;
        this.modalCtrl = modalCtrl;
    }
    MainPage.prototype.ngOnInit = function () {
        this.currUser = this.authService.currentUser;
        this.loadedFavPlaces = this.homeService.favPlaces;
        this.loadedRecPlaces = this.homeService.personalRecPlaces;
    };
    MainPage.prototype.onEditProfile = function () {
        this.modalCtrl
            .create({ component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_4__["EditProfileComponent"] })
            .then(function (modalEl) {
            modalEl.present();
            return modalEl.onDidDismiss();
        })
            .then(function (resultData) {
            console.log(resultData.data, resultData.role);
            if (resultData.role === 'confirm') {
                console.log('edited!');
            }
        });
    };
    MainPage.ctorParameters = function () { return [
        { type: _home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"] },
        { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"] }
    ]; };
    MainPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __importDefault(__webpack_require__(/*! raw-loader!./main.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/main/main.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./main.page.scss */ "./src/app/home/main/main.page.scss")).default]
        }),
        __metadata("design:paramtypes", [_home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"],
            src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], MainPage);
    return MainPage;
}());



/***/ })

}]);
//# sourceMappingURL=main-main-module.js.map