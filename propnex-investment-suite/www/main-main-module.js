(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/main/edit-profile/edit-profile.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/main/edit-profile/edit-profile.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button fill=\"clear\" color=\"danger\" (click)=\"onCancel()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Edit Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-list>\n        \n            <ion-item>\n              <ion-label position=\"floating\">Password</ion-label>\n              <ion-input \n                type=\"password\"\n                formControlName=\"password\"\n                minlength=\"6\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item\n              *ngIf=\"!form.get('password').valid && form.get('password').touched\"\n            >\n              <p>Password must be at least 6 characters.</p>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Name</ion-label>\n              <ion-input \n                type=\"text\"\n                formControlName=\"name\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-row>\n              <ion-col>\n                <ion-button \n                type=\"submit\" \n                (click)=\"onEditProfile()\" \n                expand=\"block\"\n                >Save Changes\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/main/main.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/main/main.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Home</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-header class=\"ion-text-center\">\n            <ion-card-subtitle class=\"ion-text-left ion-margin-bottom\">Welcome Back,</ion-card-subtitle>\n            <!-- <ion-card-title>{{currUser.firstname}} {{currUser.lastname}}</ion-card-title> -->\n            <ion-card-title>{{currUser.name}}</ion-card-title>\n            <ion-icon name=\"person-circle\"></ion-icon>\n          </ion-card-header>\n\n          <ion-card-content class=\"ion-text-center\">\n            <ion-button fill=\"clear\" color=\"tertiary\" (click)=\"onEditProfile()\">Edit Profile</ion-button>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>Favourites</ion-card-title>\n          </ion-card-header>\n\n          <ion-card-content>\n            <ion-list>\n              <ion-item \n                class=\"ion-no-padding ion-text-center\" \n                *ngIf=\"!currUser.favourites || currUser.favourites.length <= 0\"\n              >\n                <ion-label>\n                  <h2>No favourites for now...</h2>\n                </ion-label>\n              </ion-item>\n\n              <ion-item \n                class=\"ion-no-padding\" \n                detail \n                *ngIf=\"currUser.favourites && currUser.favourites.length > 0\"\n                (click)=\"onClickPlace(currUser.favourites[0].postal)\" \n                button\n              >\n                <ion-thumbnail slot=\"start\">\n                  <!-- <ion-img [src]=\"currUser.favourites[0].imageUrl\"></ion-img> -->\n                  <ion-img src=\"assets/placeholders/property.jpeg\"></ion-img>\n                </ion-thumbnail>\n                <ion-label>\n                  <h2>{{ currUser.favourites[0].name }}</h2>\n                  <p>Singapore {{ currUser.favourites[0].postal}}</p>\n                </ion-label>\n              </ion-item>\n\n\n              <ion-item \n                class=\"ion-no-padding\" \n                detail \n                *ngIf=\"currUser.favourites && currUser.favourites.length > 1\"\n                (click)=\"onClickPlace(currUser.favourites[1].postal)\" \n                button\n              >\n                <ion-thumbnail slot=\"start\">\n                  <!-- <ion-img [src]=\"currUser.favourites[1].imageUrl\"></ion-img> -->\n                  <ion-img src=\"assets/placeholders/property.jpeg\"></ion-img>\n                </ion-thumbnail>\n                <ion-label>\n                  <h2>{{ loadedFavPlaces[1].name }}</h2>\n                  <p>Singapore {{ currUser.favourites[1].postal}}</p>\n                </ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n\n          <div class=\"ion-text-center\" >\n            <ion-button \n              fill=\"clear\" \n              color=\"tertiary\"\n              [routerLink]=\"[\n              '/', \n              'home', \n              'tabs', \n              'favourites'\n              ]\"\n            >\n            View More\n            </ion-button>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>Recommended For You</ion-card-title>\n          </ion-card-header>\n\n          <ion-card-content>\n            <ion-list>\n              <ion-item \n                class=\"ion-no-padding ion-text-center\" \n                *ngIf=\"!currUser.personalRec || currUser.personalRec.length <= 0\"\n              >\n                <ion-label>\n                  <h2 class=\"wrap-heading\">No personal recommendations for now...</h2>\n                </ion-label>\n              </ion-item>\n\n              <ion-item \n                class=\"ion-no-padding\" \n                detail \n                *ngIf=\"currUser.personalRec && currUser.personalRec.length > 0\"\n                (click)=\"onClickPlace(currUser.personalRec[0].postal)\" \n                button\n              >\n                <ion-thumbnail slot=\"start\">\n                  <!-- <ion-img [src]=\"currUser.personalRec[0].imageUrl\"></ion-img> -->\n                  <ion-img src=\"assets/placeholders/property.jpeg\"></ion-img>\n                </ion-thumbnail>\n                <ion-label>\n                  <h2>{{ currUser.personalRec[0].name }}</h2>\n                  <p>Singapore {{ currUser.personalRec[0].postal}}</p>\n                </ion-label>\n              </ion-item>\n\n              <ion-item \n                class=\"ion-no-padding\" \n                detail \n                *ngIf=\"currUser.personalRec && currUser.personalRec.length > 1\"\n                (click)=\"onClickPlace(currUser.personalRec[1].postal)\" \n                button\n              >\n                <ion-thumbnail slot=\"start\">\n                  <!-- <ion-img [src]=\"currUser.personalRec[1].imageUrl\"></ion-img> -->\n                  <ion-img src=\"assets/placeholders/property.jpeg\"></ion-img>\n                </ion-thumbnail>\n                <ion-label>\n                  <h2>{{ currUser.personalRec[1].name }}</h2>\n                  <p>Singapore {{ currUser.personalRec[1].postal}}</p>\n                </ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n\n          <div class=\"ion-text-center\">\n            <ion-button \n              fill=\"clear\" \n              color=\"tertiary\"\n              [routerLink]=\"[\n              '/', \n              'home', \n              'tabs', \n              'recommendations'\n              ]\"\n            >\n            View More\n          </ion-button>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/home/main/edit-profile/edit-profile.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/home/main/edit-profile/edit-profile.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvbWFpbi9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/home/main/edit-profile/edit-profile.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/home/main/edit-profile/edit-profile.component.ts ***!
  \************************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
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
        // this.currUser = this.authService.currentUser;
        this.currUser = this.authService.currFbUser;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.currUser.email, {
                updateOn: 'blur',
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.currUser.password, {
                updateOn: 'blur',
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]
            }),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.currUser.name, {
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
        var newPassword = this.form.value.password;
        var newName = this.form.value.name;
        this.authService.editUser(this.currUser.email, newName, newPassword).subscribe(function () {
        });
        this.modalCtrl.dismiss({ message: 'Changes saved' }, 'confirm');
    };
    EditProfileComponent.ctorParameters = function () { return [
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    EditProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-profile',
            template: __importDefault(__webpack_require__(/*! raw-loader!./edit-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/main/edit-profile/edit-profile.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./edit-profile.component.scss */ "./src/app/pages/home/main/edit-profile/edit-profile.component.scss")).default]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/main/main-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home/main/main-routing.module.ts ***!
  \********************************************************/
/*! exports provided: MainPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageRoutingModule", function() { return MainPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.page */ "./src/app/pages/home/main/main.page.ts");
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

/***/ "./src/app/pages/home/main/main.module.ts":
/*!************************************************!*\
  !*** ./src/app/pages/home/main/main.module.ts ***!
  \************************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/pages/home/main/main-routing.module.ts");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main.page */ "./src/app/pages/home/main/main.page.ts");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/pages/home/main/edit-profile/edit-profile.component.ts");
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

/***/ "./src/app/pages/home/main/main.page.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/main/main.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  font-size: 88px;\n}\n\n.wrap-heading {\n  word-wrap: break-word;\n  white-space: normal !important;\n  width: auto !important;\n  height: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2xlbmV0YW4vRG9jdW1lbnRzL0dpdEh1Yi9qb2xlbmV0YW4wNy5naXRodWIuaW8vcHJvcG5leC1pbnZlc3RtZW50LXN1aXRlL3NyYy9hcHAvcGFnZXMvaG9tZS9tYWluL21haW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL21haW4vbWFpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDRSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9tYWluL21haW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogODhweDtcbiAgfVxuICBcbi53cmFwLWhlYWRpbmcge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59IiwiaW9uLWljb24ge1xuICBmb250LXNpemU6IDg4cHg7XG59XG5cbi53cmFwLWhlYWRpbmcge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/home/main/main.page.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/main/main.page.ts ***!
  \**********************************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_place_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/place.service */ "./src/app/services/place.service.ts");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home.service */ "./src/app/pages/home/home.service.ts");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/pages/home/main/edit-profile/edit-profile.component.ts");
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
    function MainPage(homeService, authService, modalCtrl, router, placeService) {
        this.homeService = homeService;
        this.authService = authService;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.placeService = placeService;
    }
    MainPage.prototype.ngOnInit = function () {
        // this.authService.fetchFBUsers().subscribe(() => {
        var _this = this;
        // });
        // this.currUser = this.authService.currentUser;
        this.currUser = this.authService.currFbUser;
        this.loadedFavPlaces = this.homeService.favPlaces;
        this.loadedRecPlaces = this.homeService.personalRecPlaces;
        this.fbPostalsSub = this.placeService.fbPostals.subscribe(function (fbPostals) {
            _this.loadedFBPostals = fbPostals;
        });
    };
    MainPage.prototype.ionViewWillEnter = function () {
        this.currUser = this.authService.currFbUser;
        this.placeService.fetchFBPostals().subscribe(function () {
        });
    };
    MainPage.prototype.onEditProfile = function () {
        var _this = this;
        this.modalCtrl
            .create({ component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__["EditProfileComponent"] })
            .then(function (modalEl) {
            modalEl.present();
            return modalEl.onDidDismiss();
        })
            .then(function (resultData) {
            console.log(resultData.data, resultData.role);
            if (resultData.role === 'confirm') {
                _this.ionViewWillEnter();
                console.log('edited!');
            }
        });
    };
    MainPage.prototype.onClickPlace = function (postalCode) {
        this.result = this.loadedFBPostals.find(function (p) { return p.postal === postalCode; });
        this.placeService.currPlace = this.result;
        this.router.navigate(['/', 'units', this.result.postal]);
    };
    MainPage.prototype.ngOnDestroy = function () {
        if (this.fbPostalsSub) {
            this.fbPostalsSub.unsubscribe();
        }
    };
    MainPage.ctorParameters = function () { return [
        { type: _home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: src_app_services_place_service__WEBPACK_IMPORTED_MODULE_4__["PlaceService"] }
    ]; };
    MainPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __importDefault(__webpack_require__(/*! raw-loader!./main.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/main/main.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./main.page.scss */ "./src/app/pages/home/main/main.page.scss")).default]
        }),
        __metadata("design:paramtypes", [_home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_place_service__WEBPACK_IMPORTED_MODULE_4__["PlaceService"]])
    ], MainPage);
    return MainPage;
}());



/***/ })

}]);
//# sourceMappingURL=main-main-module.js.map