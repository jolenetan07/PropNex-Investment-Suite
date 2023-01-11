(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["units-units-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/units/units.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/units/units.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Individual Units</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-searchbar \r\n        color=\"light\"\r\n        placeholder=\"Enter postal code\"\r\n        [debounce]=\"500\"\r\n        (ionChange)=\"handleChange($event)\"\r\n        ></ion-searchbar>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-list>\r\n          <ion-item *ngIf=\"result\">\r\n            <ion-label *ngIf=\"result.name === undefined\">\r\n              <h2>No results found</h2>\r\n            </ion-label>\r\n\r\n            <ion-thumbnail *ngIf=\"result.name !== undefined\" slot=\"start\">\r\n              <ion-img [src]=\"result.imageUrl\"></ion-img>\r\n            </ion-thumbnail>\r\n            <ion-label \r\n              *ngIf=\"result.name !== undefined\"\r\n              (click) = \"onSelectPlace()\"\r\n            >\r\n              <h2>{{ result.name }}</h2>\r\n              <p>Singapore {{ result.postal}}</p>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/units/units-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/units/units-routing.module.ts ***!
  \***********************************************/
/*! exports provided: UnitsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitsPageRoutingModule", function() { return UnitsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _units_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./units.page */ "./src/app/units/units.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _units_page__WEBPACK_IMPORTED_MODULE_2__["UnitsPage"],
    },
    {
        path: ':postalId',
        loadChildren: function () { return __webpack_require__.e(/*! import() | block-detail-block-detail-module */ "block-detail-block-detail-module").then(__webpack_require__.bind(null, /*! ./block-detail/block-detail.module */ "./src/app/units/block-detail/block-detail.module.ts")).then(function (m) { return m.BlockDetailPageModule; }); }
    }
];
var UnitsPageRoutingModule = /** @class */ (function () {
    function UnitsPageRoutingModule() {
    }
    UnitsPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], UnitsPageRoutingModule);
    return UnitsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/units/units.module.ts":
/*!***************************************!*\
  !*** ./src/app/units/units.module.ts ***!
  \***************************************/
/*! exports provided: UnitsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitsPageModule", function() { return UnitsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _units_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./units-routing.module */ "./src/app/units/units-routing.module.ts");
/* harmony import */ var _units_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./units.page */ "./src/app/units/units.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UnitsPageModule = /** @class */ (function () {
    function UnitsPageModule() {
    }
    UnitsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _units_routing_module__WEBPACK_IMPORTED_MODULE_4__["UnitsPageRoutingModule"]
            ],
            declarations: [_units_page__WEBPACK_IMPORTED_MODULE_5__["UnitsPage"]]
        })
    ], UnitsPageModule);
    return UnitsPageModule;
}());



/***/ }),

/***/ "./src/app/units/units.page.scss":
/*!***************************************!*\
  !*** ./src/app/units/units.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VuaXRzL3VuaXRzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/units/units.page.ts":
/*!*************************************!*\
  !*** ./src/app/units/units.page.ts ***!
  \*************************************/
/*! exports provided: UnitsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitsPage", function() { return UnitsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _home_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/home.service */ "./src/app/home/home.service.ts");
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



var UnitsPage = /** @class */ (function () {
    function UnitsPage(homeService, router) {
        this.homeService = homeService;
        this.router = router;
    }
    UnitsPage.prototype.ngOnInit = function () {
        this.loadedPlaces = this.homeService.allPlaces;
    };
    UnitsPage.prototype.handleChange = function (event) {
        var query = event.target.value;
        //console.log(query);
        this.result = this.homeService.getPlace(query);
        //console.log(this.result);
    };
    UnitsPage.prototype.onSelectPlace = function () {
        // this.router.navigate(['/', 'units', 'block-detail']);
        this.router.navigate(['/', 'units', this.result.postal]);
    };
    UnitsPage.ctorParameters = function () { return [
        { type: _home_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    UnitsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-units',
            template: __importDefault(__webpack_require__(/*! raw-loader!./units.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/units/units.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./units.page.scss */ "./src/app/units/units.page.scss")).default]
        }),
        __metadata("design:paramtypes", [_home_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UnitsPage);
    return UnitsPage;
}());



/***/ })

}]);
//# sourceMappingURL=units-units-module.js.map