(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["block-detail-block-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/units/block-detail/block-detail.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/units/block-detail/block-detail.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/units\"></ion-back-button>\r\n    </ion-buttons>\r\n    <!-- <ion-title>Place Detail</ion-title> -->\r\n    <ion-title>{{ isLoading? 'Loading...' : place.name }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"ion-text-center\" *ngIf=\"isLoading\">\r\n    <ion-spinner color=\"primary\"></ion-spinner>\r\n  </div>\r\n\r\n  <ion-grid *ngIf=\"!isLoading && place\">\r\n    <ion-row>\r\n      <ion-col class=\"ion-no-padding\">\r\n        <!-- <ion-img [src]=\"places[0].imageUrl\"></ion-img> -->\r\n        <ion-img [src]=\"place?.imageUrl\"></ion-img>\r\n    </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col class=\"ion-text-center ion-no-padding\">\r\n        <!-- <h6>{{ places[0].name }}, Singapore {{ places[0].postal }}</h6> -->\r\n        <h6>{{ place?.name }}, Singapore {{ place?.postal }}</h6>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-searchbar \r\n        color=\"light\"\r\n        placeholder=\"Enter unit number (Eg. 01-01)\"\r\n        [debounce]=\"500\"\r\n        (ionChange)=\"handleChange($event)\"\r\n        ></ion-searchbar>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-list>\r\n          <ion-item *ngIf=\"result\">\r\n            <ion-label *ngIf=\"result.unitNum === undefined\">\r\n              <h2>No results found</h2>\r\n            </ion-label>\r\n\r\n            <ion-label \r\n              *ngIf=\"result.unitNum !== undefined\"\r\n              (click) = \"onSelectUnit()\"\r\n            >\r\n              <h2>#{{ result.unitNum }}</h2>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/units/block-detail/block-detail-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/units/block-detail/block-detail-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: BlockDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockDetailPageRoutingModule", function() { return BlockDetailPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _block_detail_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block-detail.page */ "./src/app/units/block-detail/block-detail.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _block_detail_page__WEBPACK_IMPORTED_MODULE_2__["BlockDetailPage"]
    },
    {
        path: 'unit-detail',
        loadChildren: function () { return __webpack_require__.e(/*! import() | unit-detail-unit-detail-module */ "unit-detail-unit-detail-module").then(__webpack_require__.bind(null, /*! ./unit-detail/unit-detail.module */ "./src/app/units/block-detail/unit-detail/unit-detail.module.ts")).then(function (m) { return m.UnitDetailPageModule; }); }
    }
];
var BlockDetailPageRoutingModule = /** @class */ (function () {
    function BlockDetailPageRoutingModule() {
    }
    BlockDetailPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], BlockDetailPageRoutingModule);
    return BlockDetailPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/units/block-detail/block-detail.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/units/block-detail/block-detail.module.ts ***!
  \***********************************************************/
/*! exports provided: BlockDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockDetailPageModule", function() { return BlockDetailPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _block_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block-detail-routing.module */ "./src/app/units/block-detail/block-detail-routing.module.ts");
/* harmony import */ var _block_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block-detail.page */ "./src/app/units/block-detail/block-detail.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var BlockDetailPageModule = /** @class */ (function () {
    function BlockDetailPageModule() {
    }
    BlockDetailPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _block_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["BlockDetailPageRoutingModule"]
            ],
            declarations: [_block_detail_page__WEBPACK_IMPORTED_MODULE_5__["BlockDetailPage"]]
        })
    ], BlockDetailPageModule);
    return BlockDetailPageModule;
}());



/***/ }),

/***/ "./src/app/units/block-detail/block-detail.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/units/block-detail/block-detail.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VuaXRzL2Jsb2NrLWRldGFpbC9ibG9jay1kZXRhaWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/units/block-detail/block-detail.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/units/block-detail/block-detail.page.ts ***!
  \*********************************************************/
/*! exports provided: BlockDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockDetailPage", function() { return BlockDetailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var src_app_home_home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/home/home.service */ "./src/app/home/home.service.ts");
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




var BlockDetailPage = /** @class */ (function () {
    function BlockDetailPage(navCtrl, route, homeService, router) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.homeService = homeService;
        this.router = router;
        this.isLoading = false;
    }
    BlockDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has('postalId')) {
                _this.navCtrl.navigateBack('/units');
                return;
            }
            _this.isLoading = true;
            _this.place = _this.homeService.getPlace(paramMap.get('postalId'));
            //console.log('found', this.place);
            _this.isLoading = false;
        });
        this.places = this.homeService.allPlaces;
        this.units = this.homeService.getBlockUnits();
    };
    BlockDetailPage.prototype.handleChange = function (event) {
        var query = event.target.value;
        //console.log(query);
        //this.units = this.homeService.getBlockUnits(query);
        this.result = this.homeService.searchUnit('470142', query);
    };
    BlockDetailPage.prototype.onSelectUnit = function () {
        // to change
        this.router.navigate(['/', 'units', 'block-detail', 'unit-detail']);
    };
    BlockDetailPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: src_app_home_home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    BlockDetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-block-detail',
            template: __importDefault(__webpack_require__(/*! raw-loader!./block-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/units/block-detail/block-detail.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./block-detail.page.scss */ "./src/app/units/block-detail/block-detail.page.scss")).default]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_home_home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BlockDetailPage);
    return BlockDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=block-detail-block-detail-module.js.map