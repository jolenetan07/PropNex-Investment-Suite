(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unit-detail-unit-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/units/block-detail/unit-detail/unit-detail.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/units/block-detail/unit-detail/unit-detail.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/units\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Unit Detail</ion-title>\r\n    <!-- <ion-title>{{ places[0].name }}</ion-title> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"ion-no-padding\">\r\n        <ion-img [src]=\"places[0].imageUrl\"></ion-img>\r\n    </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col class=\"ion-text-center ion-no-padding\">\r\n        <h6>{{ places[0].name }}, Singapore {{ places[0].postal }}</h6>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col class=\"ion-no-padding\">\r\n        <ion-list *ngFor=\"let dets of unitDetails\">\r\n          <ion-item>\r\n            {{dets}}\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/units/block-detail/unit-detail/unit-detail-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/units/block-detail/unit-detail/unit-detail-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: UnitDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitDetailPageRoutingModule", function() { return UnitDetailPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _unit_detail_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unit-detail.page */ "./src/app/units/block-detail/unit-detail/unit-detail.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _unit_detail_page__WEBPACK_IMPORTED_MODULE_2__["UnitDetailPage"]
    }
];
var UnitDetailPageRoutingModule = /** @class */ (function () {
    function UnitDetailPageRoutingModule() {
    }
    UnitDetailPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], UnitDetailPageRoutingModule);
    return UnitDetailPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/units/block-detail/unit-detail/unit-detail.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/units/block-detail/unit-detail/unit-detail.module.ts ***!
  \**********************************************************************/
/*! exports provided: UnitDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitDetailPageModule", function() { return UnitDetailPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _unit_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unit-detail-routing.module */ "./src/app/units/block-detail/unit-detail/unit-detail-routing.module.ts");
/* harmony import */ var _unit_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./unit-detail.page */ "./src/app/units/block-detail/unit-detail/unit-detail.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UnitDetailPageModule = /** @class */ (function () {
    function UnitDetailPageModule() {
    }
    UnitDetailPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _unit_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["UnitDetailPageRoutingModule"]
            ],
            declarations: [_unit_detail_page__WEBPACK_IMPORTED_MODULE_5__["UnitDetailPage"]]
        })
    ], UnitDetailPageModule);
    return UnitDetailPageModule;
}());



/***/ }),

/***/ "./src/app/units/block-detail/unit-detail/unit-detail.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/units/block-detail/unit-detail/unit-detail.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VuaXRzL2Jsb2NrLWRldGFpbC91bml0LWRldGFpbC91bml0LWRldGFpbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/units/block-detail/unit-detail/unit-detail.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/units/block-detail/unit-detail/unit-detail.page.ts ***!
  \********************************************************************/
/*! exports provided: UnitDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitDetailPage", function() { return UnitDetailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_home_home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/home/home.service */ "./src/app/home/home.service.ts");
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


var UnitDetailPage = /** @class */ (function () {
    function UnitDetailPage(homeService) {
        this.homeService = homeService;
        this.unitDetails = [
            'Unit Number: ',
            'Project Name: ',
            'Floor Area (sqm): ',
            'Date Of Sale: ',
            'Flat Model: ',
            'Max Floor: ',
            'Min Floor: ',
            'Private/Public: ',
            'Remaining Lease (2022): ',
            'Sale price ($): ',
            'Type: '
        ];
    }
    UnitDetailPage.prototype.ngOnInit = function () {
        this.places = this.homeService.allPlaces;
    };
    UnitDetailPage.prototype.handleChange = function (event) {
        console.log(event.detail.value);
    };
    UnitDetailPage.ctorParameters = function () { return [
        { type: src_app_home_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"] }
    ]; };
    UnitDetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-unit-detail',
            template: __importDefault(__webpack_require__(/*! raw-loader!./unit-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/units/block-detail/unit-detail/unit-detail.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./unit-detail.page.scss */ "./src/app/units/block-detail/unit-detail/unit-detail.page.scss")).default]
        }),
        __metadata("design:paramtypes", [src_app_home_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"]])
    ], UnitDetailPage);
    return UnitDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=unit-detail-unit-detail-module.js.map