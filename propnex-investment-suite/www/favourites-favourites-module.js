(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favourites-favourites-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/favourites/favourites.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/favourites/favourites.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Favourites</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <!-- <ion-item-sliding *ngFor=\"let place of currUser.favourites\" #slidingFavourites> -->\n          <ion-item-sliding *ngFor=\"let place of loadedFavPlaces\" #slidingFavourites>\n            <ion-item \n              detail \n              (click)=\"onClickPlace(place.postal)\" \n              button\n            >\n              <ion-thumbnail slot=\"start\">\n                <ion-img *ngIf=\"!place.imageUrl\" src=\"assets/placeholders/property.jpeg\"></ion-img>\n                <ion-img *ngIf=\"place.imageUrl\" [src]=\"place.imageUrl\"></ion-img>\n              </ion-thumbnail>\n              <ion-label>\n                <h2>{{ place.name }}</h2>\n                <p>Singapore {{ place.postal}}</p>\n              </ion-label>\n            </ion-item>\n\n            <ion-item-options side=\"start\">\n              <ion-item-option color=\"danger\" (click)=\"onRemovePlace(place.postal, slidingFavourites)\">\n                <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n              </ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/home/favourites/favourites-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/home/favourites/favourites-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: FavouritesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritesPageRoutingModule", function() { return FavouritesPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _favourites_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favourites.page */ "./src/app/home/favourites/favourites.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _favourites_page__WEBPACK_IMPORTED_MODULE_2__["FavouritesPage"]
    }
];
var FavouritesPageRoutingModule = /** @class */ (function () {
    function FavouritesPageRoutingModule() {
    }
    FavouritesPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], FavouritesPageRoutingModule);
    return FavouritesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/favourites/favourites.module.ts":
/*!******************************************************!*\
  !*** ./src/app/home/favourites/favourites.module.ts ***!
  \******************************************************/
/*! exports provided: FavouritesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritesPageModule", function() { return FavouritesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _favourites_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./favourites-routing.module */ "./src/app/home/favourites/favourites-routing.module.ts");
/* harmony import */ var _favourites_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./favourites.page */ "./src/app/home/favourites/favourites.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FavouritesPageModule = /** @class */ (function () {
    function FavouritesPageModule() {
    }
    FavouritesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _favourites_routing_module__WEBPACK_IMPORTED_MODULE_4__["FavouritesPageRoutingModule"]
            ],
            declarations: [_favourites_page__WEBPACK_IMPORTED_MODULE_5__["FavouritesPage"]]
        })
    ], FavouritesPageModule);
    return FavouritesPageModule;
}());



/***/ }),

/***/ "./src/app/home/favourites/favourites.page.scss":
/*!******************************************************!*\
  !*** ./src/app/home/favourites/favourites.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZmF2b3VyaXRlcy9mYXZvdXJpdGVzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/home/favourites/favourites.page.ts":
/*!****************************************************!*\
  !*** ./src/app/home/favourites/favourites.page.ts ***!
  \****************************************************/
/*! exports provided: FavouritesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritesPage", function() { return FavouritesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var src_app_units_place_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/units/place.service */ "./src/app/units/place.service.ts");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home.service */ "./src/app/home/home.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
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






var FavouritesPage = /** @class */ (function () {
    function FavouritesPage(homeService, authService, router, placeService, http) {
        this.homeService = homeService;
        this.authService = authService;
        this.router = router;
        this.placeService = placeService;
        this.http = http;
    }
    FavouritesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.fbUsersSub = this.authService.fbUsers.subscribe(function (fbUsers) {
            _this.loadedFBUsers = fbUsers;
        });
        this.currUser = this.authService.currFbUser;
        this.fbPostalsSub = this.placeService.fbPostals.subscribe(function (fbPostals) {
            _this.loadedFBPostals = fbPostals;
        });
        this.loadedFavPlaces = this.currUser.favourites;
    };
    FavouritesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.fbUsersSub = this.authService.fbUsers.subscribe(function (fbUsers) {
            _this.loadedFBUsers = fbUsers;
        });
        this.placeService.fetchFBPostals().subscribe(function () {
        });
        this.loadedFavPlaces = this.currUser.favourites;
    };
    FavouritesPage.prototype.onClickPlace = function (postalCode) {
        this.result = this.loadedFBPostals.find(function (p) { return p.postal === postalCode; });
        this.placeService.currPlace = this.result;
        this.router.navigate(['/', 'units', this.result.postal]);
    };
    FavouritesPage.prototype.onRemovePlace = function (postalCode, slidingEl) {
        var _this = this;
        slidingEl.close();
        var targetdUserIndex = this.loadedFBUsers.findIndex(function (u) { return u.email === _this.currUser.email; });
        var targetdPlaceIndex = this.currUser.favourites.findIndex(function (u) { return u.postal === postalCode; });
        this.loadedFavPlaces = this.currUser.favourites.filter(function (pl) { return pl.postal !== postalCode; });
        this.authService.removeFav(targetdUserIndex, targetdPlaceIndex).subscribe(function () {
        });
    };
    FavouritesPage.prototype.ngOnDestroy = function () {
        if (this.fbPostalsSub) {
            this.fbPostalsSub.unsubscribe();
        }
        if (this.fbUsersSub) {
            this.fbUsersSub.unsubscribe();
        }
    };
    FavouritesPage.ctorParameters = function () { return [
        { type: _home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"] },
        { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: src_app_units_place_service__WEBPACK_IMPORTED_MODULE_3__["PlaceService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
    ]; };
    FavouritesPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-favourites',
            template: __importDefault(__webpack_require__(/*! raw-loader!./favourites.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/favourites/favourites.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./favourites.page.scss */ "./src/app/home/favourites/favourites.page.scss")).default]
        }),
        __metadata("design:paramtypes", [_home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"],
            src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_units_place_service__WEBPACK_IMPORTED_MODULE_3__["PlaceService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], FavouritesPage);
    return FavouritesPage;
}());



/***/ })

}]);
//# sourceMappingURL=favourites-favourites-module.js.map