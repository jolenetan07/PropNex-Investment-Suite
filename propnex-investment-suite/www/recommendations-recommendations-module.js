(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recommendations-recommendations-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/recommendations/recommendations.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/recommendations/recommendations.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Discover</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-segment value=\"personal\" (ionChange)=\"onFilterUpdate($event)\">\r\n    <ion-segment-button value=\"personal\">For You</ion-segment-button>\r\n    <ion-segment-button value=\"trend\">Trending</ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-list>\r\n          <ion-item-sliding *ngFor=\"let place of displayedPlaces\" #slidingRecos>\r\n            <ion-item detail [routerLink]=\"['/', 'units', place.postal]\">\r\n              <ion-thumbnail slot=\"start\">\r\n                <ion-img [src]=\"place.imageUrl\"></ion-img>\r\n              </ion-thumbnail>\r\n              <ion-label>\r\n                <h2>{{ place.name }}</h2>\r\n                <p>Singapore {{ place.postal}}</p>\r\n              </ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item-options side=\"end\">\r\n              <ion-item-option color=\"tertiary\" (click)=\"onAddPlace(place.postal, slidingRecos)\">\r\n                <ion-icon name=\"star\" slot=\"icon-only\"></ion-icon>\r\n              </ion-item-option>\r\n            </ion-item-options>\r\n          </ion-item-sliding>\r\n        </ion-list>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/home/recommendations/recommendations-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/home/recommendations/recommendations-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: RecommendationsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationsPageRoutingModule", function() { return RecommendationsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _recommendations_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recommendations.page */ "./src/app/home/recommendations/recommendations.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _recommendations_page__WEBPACK_IMPORTED_MODULE_2__["RecommendationsPage"]
    }
];
var RecommendationsPageRoutingModule = /** @class */ (function () {
    function RecommendationsPageRoutingModule() {
    }
    RecommendationsPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], RecommendationsPageRoutingModule);
    return RecommendationsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/recommendations/recommendations.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/home/recommendations/recommendations.module.ts ***!
  \****************************************************************/
/*! exports provided: RecommendationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationsPageModule", function() { return RecommendationsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _recommendations_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recommendations-routing.module */ "./src/app/home/recommendations/recommendations-routing.module.ts");
/* harmony import */ var _recommendations_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recommendations.page */ "./src/app/home/recommendations/recommendations.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RecommendationsPageModule = /** @class */ (function () {
    function RecommendationsPageModule() {
    }
    RecommendationsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _recommendations_routing_module__WEBPACK_IMPORTED_MODULE_4__["RecommendationsPageRoutingModule"]
            ],
            declarations: [_recommendations_page__WEBPACK_IMPORTED_MODULE_5__["RecommendationsPage"]]
        })
    ], RecommendationsPageModule);
    return RecommendationsPageModule;
}());



/***/ }),

/***/ "./src/app/home/recommendations/recommendations.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/home/recommendations/recommendations.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVjb21tZW5kYXRpb25zL3JlY29tbWVuZGF0aW9ucy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/home/recommendations/recommendations.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/home/recommendations/recommendations.page.ts ***!
  \**************************************************************/
/*! exports provided: RecommendationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationsPage", function() { return RecommendationsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home.service */ "./src/app/home/home.service.ts");
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


var RecommendationsPage = /** @class */ (function () {
    //result;
    function RecommendationsPage(homeService) {
        this.homeService = homeService;
    }
    RecommendationsPage.prototype.ngOnInit = function () {
        this.loadedPlaces = this.homeService.personalRecPlaces;
        this.displayedPlaces = this.loadedPlaces;
    };
    RecommendationsPage.prototype.onFilterUpdate = function (event) {
        if (event.detail.value === 'personal') {
            this.displayedPlaces = this.homeService.personalRecPlaces;
        }
        else {
            this.displayedPlaces = this.homeService.trendRecPlaces;
        }
    };
    RecommendationsPage.prototype.onAddPlace = function (postal, slidingEl) {
        slidingEl.close();
        this.homeService.addFavPlace(postal);
    };
    RecommendationsPage.ctorParameters = function () { return [
        { type: _home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"] }
    ]; };
    RecommendationsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recommendations',
            template: __importDefault(__webpack_require__(/*! raw-loader!./recommendations.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/recommendations/recommendations.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./recommendations.page.scss */ "./src/app/home/recommendations/recommendations.page.scss")).default]
        }),
        __metadata("design:paramtypes", [_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"]])
    ], RecommendationsPage);
    return RecommendationsPage;
}());



/***/ })

}]);
//# sourceMappingURL=recommendations-recommendations-module.js.map