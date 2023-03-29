(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["block-detail-block-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/block-detail/add-unit/add-unit.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/block-detail/add-unit/add-unit.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button fill=\"clear\" color=\"danger\" (click)=\"onCancel()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Add Unit</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"addUnitForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-list>\n            <ion-item>\n              <ion-label position=\"floating\">Unit Number</ion-label>\n              <ion-input \n                type=\"text\"  \n                formControlName=\"unitNumber\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">No. Of Rooms</ion-label>\n              <ion-input \n                type=\"text\"  \n                formControlName=\"bedrooms\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Area (sqm)</ion-label>\n              <ion-input \n                type=\"text\"  \n                formControlName=\"size\"\n              ></ion-input>\n            </ion-item>\n\n            <!-- <ion-item>\n              <ion-label position=\"floating\">Homeowner Race</ion-label>\n              <ion-input \n                type=\"text\"  \n                formControlName=\"homeownerRace\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Country Of Citizenship</ion-label>\n              <ion-input \n                type=\"text\"  \n                formControlName=\"countryOfCitizenship\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Decorative Style</ion-label>\n              <ion-input \n                type=\"text\"  \n                formControlName=\"decorativeStyle\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Extension Request</ion-label>\n              <ion-input \n                type=\"text\"  \n                formControlName=\"extensionRequest\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Price</ion-label>\n              <ion-input \n                type=\"text\"  \n                formControlName=\"price\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Title Deed</ion-label>\n              <ion-input \n                type=\"text\"  \n                formControlName=\"titleDeed\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">House Age</ion-label>\n              <ion-input \n                type=\"text\"  \n                formControlName=\"houseAge\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Building Height</ion-label>\n              <ion-input \n                type=\"text\"  \n                formControlName=\"buildingHeight\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">No. Of Units (total)</ion-label>\n              <ion-input \n                type=\"text\"  \n                formControlName=\"noOfUnitsTotal\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">No. Of Units (per floor)</ion-label>\n              <ion-input \n                type=\"text\"  \n                formControlName=\"noOfUnitsPerFloor\"\n              ></ion-input>\n            </ion-item>\n        \n            <ion-item>\n              <ion-label position=\"floating\">Room Type</ion-label>\n              <ion-input \n                type=\"text\"  \n                formControlName=\"roomType\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">No. Of Toilets</ion-label>\n              <ion-input \n                type=\"text\"  \n                formControlName=\"noOfToilets\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">House Structure</ion-label>\n              <ion-input \n                type=\"text\"  \n                formControlName=\"houseStructure\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Door Facing</ion-label>\n              <ion-input \n                type=\"text\"  \n                formControlName=\"doorFacing\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Room Orientation</ion-label>\n              <ion-input \n                type=\"text\"  \n                formControlName=\"roomOrientation\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Corner Unit</ion-label>\n              <ion-input \n                type=\"text\"  \n                formControlName=\"cornerUnit\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Ground/Top Floor</ion-label>\n              <ion-input \n                type=\"text\"  \n                formControlName=\"groundTopFloor\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Western Sun</ion-label>\n              <ion-input \n                type=\"text\"  \n                formControlName=\"westernSun\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Noisy</ion-label>\n              <ion-input \n                type=\"text\"  \n                formControlName=\"noisy\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Refurbished State</ion-label>\n              <ion-input \n                type=\"text\"  \n                formControlName=\"refurbishedState\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Landscape From Window</ion-label>\n              <ion-input \n                type=\"text\"  \n                formControlName=\"landscapeFromWindow\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Bomb Shelter</ion-label>\n              <ion-input \n                type=\"text\"  \n                formControlName=\"bombShelter\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Open Kitchen</ion-label>\n              <ion-input \n                type=\"text\"  \n                formControlName=\"openKitchen\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Gas Management Fee</ion-label>\n              <ion-input \n                type=\"text\"  \n                formControlName=\"gasManagementFee\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">House Tax</ion-label>\n              <ion-input \n                type=\"text\"  \n                formControlName=\"houseTax\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">Rental Status</ion-label>\n              <ion-input \n                type=\"text\"  \n                formControlName=\"rentalStatus\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label position=\"floating\">VR Link</ion-label>\n              <ion-input \n                type=\"text\"  \n                formControlName=\"vrLink\"\n              ></ion-input>\n            </ion-item> -->\n\n            <ion-row>\n              <ion-col>\n                <ion-button \n                (click)=\"uploadFloorPlanImage()\" \n                expand=\"block\"\n                >Upload Floorplan Image\n                </ion-button>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-button \n                type=\"submit\" \n                (click)=\"submitAddUnit()\" \n                expand=\"block\"\n                >Submit\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/block-detail/block-detail.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/block-detail/block-detail.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/units\"></ion-back-button>\n    </ion-buttons>\n\n    <!-- <ion-title>{{ isLoading? 'Loading...' : currPlace.name }}</ion-title> -->\n    <ion-title>Place Details</ion-title>\n\n    <ion-button \n    *ngIf=\"currUser.userType === 'admin'\"\n    size=\"small\" \n    color=\"tertiary\"\n    slot=\"end\" \n    (click)=\"onEditBlockOptions()\"\n  >\n    <ion-icon slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-text-center\" *ngIf=\"isLoading\">\n    <ion-spinner color=\"primary\"></ion-spinner>\n  </div>\n\n  <ion-grid *ngIf=\"!isLoading && currPlace\">\n    <ion-row>\n      <ion-col class=\"ion-no-padding\">\n        <!-- <ion-img [src]=\"places[0].imageUrl\"></ion-img> -->\n        <ion-img [src]=\"currPlace.imageUrl\"></ion-img>\n    </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"ion-text-center ion-no-padding\">\n        <!-- <h6>{{ places[0].name }}, Singapore {{ places[0].postal }}</h6> -->\n        <h6>{{ currPlace.name }}, Singapore {{ currPlace.postal }}</h6>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-button \n        color=\"tertiary\" \n        expand=\"block\"\n        (click)=\"addToFav(currPlace.postal)\"\n        >\n        Add To Favourites\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-searchbar \n        color=\"light\"\n        placeholder=\"Enter unit number (Eg. 01-01)\"\n        [debounce]=\"500\"\n        (ionChange)=\"handleChange($event)\"\n        ></ion-searchbar>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item *ngIf=\"result\">\n            <ion-label *ngIf=\"result.unitNumber === undefined\">\n              <h2>No results found</h2>\n            </ion-label>\n\n            <ion-label \n              *ngIf=\"result.unitNumber !== undefined\"\n              (click) = \"onSelectUnit()\"\n            >\n              <h2>#{{ result.unitNumber }}</h2>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/block-detail/edit-block/edit-block.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/block-detail/edit-block/edit-block.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button fill=\"clear\" color=\"danger\" (click)=\"onCancel()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Edit Place</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"editBlockForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-list>\n            <ion-item>\n              <ion-label position=\"floating\">Project Name</ion-label>\n              <ion-input \n                type=\"text\"  \n                formControlName=\"projectName\"\n              ></ion-input>\n            </ion-item>\n\n            <ion-row>\n              <ion-col>\n                <ion-button \n                (click)=\"uploadBlockImage()\" \n                expand=\"block\"\n                >Upload Place Image\n                </ion-button>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <ion-button \n                type=\"submit\" \n                (click)=\"submitEditBlock()\" \n                expand=\"block\"\n                >Save Changes\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/units/block-detail/add-unit/add-unit.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/units/block-detail/add-unit/add-unit.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VuaXRzL2Jsb2NrLWRldGFpbC9hZGQtdW5pdC9hZGQtdW5pdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/units/block-detail/add-unit/add-unit.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/units/block-detail/add-unit/add-unit.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddUnitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUnitComponent", function() { return AddUnitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _services_place_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/place.service */ "./src/app/services/place.service.ts");
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




var AddUnitComponent = /** @class */ (function () {
    function AddUnitComponent(modalCtrl, placeService) {
        this.modalCtrl = modalCtrl;
        this.placeService = placeService;
    }
    AddUnitComponent.prototype.ngOnInit = function () {
        this.currPlace = this.placeService.currPlace;
        this.addUnitForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            unitNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            bedrooms: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            size: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
        });
    };
    AddUnitComponent.prototype.onCancel = function () {
        console.log("cancel add unit");
        this.modalCtrl.dismiss(null, 'cancel');
    };
    AddUnitComponent.prototype.submitAddUnit = function () {
        if (!this.addUnitForm.valid) {
            return;
        }
        var unitNumber = this.addUnitForm.value.unitNumber;
        var bedrooms = this.addUnitForm.value.bedrooms;
        var size = this.addUnitForm.value.size;
        console.log(unitNumber, bedrooms, size);
        this.placeService.addUnit(this.currPlace.postal, unitNumber, bedrooms, size).subscribe(function () {
        });
        this.addUnitForm.reset();
        this.modalCtrl.dismiss();
    };
    AddUnitComponent.prototype.uploadFloorPlanImage = function () {
        console.log("choose floor plan image to upload");
    };
    AddUnitComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _services_place_service__WEBPACK_IMPORTED_MODULE_3__["PlaceService"] }
    ]; };
    AddUnitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-unit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./add-unit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/block-detail/add-unit/add-unit.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./add-unit.component.scss */ "./src/app/pages/units/block-detail/add-unit/add-unit.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _services_place_service__WEBPACK_IMPORTED_MODULE_3__["PlaceService"]])
    ], AddUnitComponent);
    return AddUnitComponent;
}());



/***/ }),

/***/ "./src/app/pages/units/block-detail/block-detail-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/units/block-detail/block-detail-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: BlockDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockDetailPageRoutingModule", function() { return BlockDetailPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _block_detail_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block-detail.page */ "./src/app/pages/units/block-detail/block-detail.page.ts");
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
        path: ':unitNumId',
        loadChildren: function () { return __webpack_require__.e(/*! import() | unit-detail-unit-detail-module */ "unit-detail-unit-detail-module").then(__webpack_require__.bind(null, /*! ./unit-detail/unit-detail.module */ "./src/app/pages/units/block-detail/unit-detail/unit-detail.module.ts")).then(function (m) { return m.UnitDetailPageModule; }); }
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

/***/ "./src/app/pages/units/block-detail/block-detail.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/units/block-detail/block-detail.module.ts ***!
  \*****************************************************************/
/*! exports provided: BlockDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockDetailPageModule", function() { return BlockDetailPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _block_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block-detail-routing.module */ "./src/app/pages/units/block-detail/block-detail-routing.module.ts");
/* harmony import */ var _block_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block-detail.page */ "./src/app/pages/units/block-detail/block-detail.page.ts");
/* harmony import */ var _add_unit_add_unit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-unit/add-unit.component */ "./src/app/pages/units/block-detail/add-unit/add-unit.component.ts");
/* harmony import */ var _edit_block_edit_block_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-block/edit-block.component */ "./src/app/pages/units/block-detail/edit-block/edit-block.component.ts");
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
                _block_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["BlockDetailPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [_block_detail_page__WEBPACK_IMPORTED_MODULE_5__["BlockDetailPage"], _add_unit_add_unit_component__WEBPACK_IMPORTED_MODULE_6__["AddUnitComponent"], _edit_block_edit_block_component__WEBPACK_IMPORTED_MODULE_7__["EditBlockComponent"]]
        })
    ], BlockDetailPageModule);
    return BlockDetailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/units/block-detail/block-detail.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/units/block-detail/block-detail.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VuaXRzL2Jsb2NrLWRldGFpbC9ibG9jay1kZXRhaWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/units/block-detail/block-detail.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/units/block-detail/block-detail.page.ts ***!
  \***************************************************************/
/*! exports provided: BlockDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockDetailPage", function() { return BlockDetailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_pages_home_home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/home/home.service */ "./src/app/pages/home/home.service.ts");
/* harmony import */ var _services_place_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/place.service */ "./src/app/services/place.service.ts");
/* harmony import */ var _add_unit_add_unit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-unit/add-unit.component */ "./src/app/pages/units/block-detail/add-unit/add-unit.component.ts");
/* harmony import */ var _edit_block_edit_block_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-block/edit-block.component */ "./src/app/pages/units/block-detail/edit-block/edit-block.component.ts");
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








var BlockDetailPage = /** @class */ (function () {
    function BlockDetailPage(authService, navCtrl, route, homeService, router, actionSheetCtrl, modalCtrl, placeService, alertController) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.route = route;
        this.homeService = homeService;
        this.router = router;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.placeService = placeService;
        this.alertController = alertController;
        this.isLoading = false;
    }
    BlockDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.currUser = this.authService.currFbUser;
        this.route.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has('postalId')) {
                _this.navCtrl.navigateBack('/units');
                return;
            }
            _this.isLoading = true;
            //this.place = this.homeService.getPlace(paramMap.get('postalId'));
            //this.place = this.homeService.allPlaces.find((p) => p.postal === paramMap.get("postalId"));
            _this.currPlace = _this.placeService.currPlace;
            _this.isLoading = false;
        });
        this.places = this.homeService.allPlaces;
        this.units = this.homeService.getBlockUnits();
    };
    BlockDetailPage.prototype.ionViewWillEnter = function () {
        this.currPlace = this.placeService.currPlace;
        this.placeService.fetchFBPostals().subscribe(function () {
        });
    };
    BlockDetailPage.prototype.handleChange = function (event) {
        var query = event.target.value;
        console.log(query);
        //this.units = this.homeService.getBlockUnits(query);
        //this.result  = this.homeService.searchUnit('470142',query);
        if (this.currPlace.units) {
            this.result = this.currPlace.units.find(function (p) { return p.unitNumber === query; });
        }
        this.placeService.currUnit = this.result;
        console.log(this.result);
    };
    BlockDetailPage.prototype.onSelectUnit = function () {
        // to change
        this.router.navigate(['/', 'units', this.currPlace.postal, this.result.unitNumber]);
    };
    BlockDetailPage.prototype.onEditBlockOptions = function () {
        var _this = this;
        console.log("choose to add new unit to block or edit block details");
        this.actionSheetCtrl.create({
            header: 'Please Choose',
            buttons: [
                {
                    text: 'Edit Place',
                    handler: function () {
                        _this.onEditBlock();
                    }
                },
                {
                    text: 'Add New Unit',
                    handler: function () {
                        _this.onAddUnit();
                    }
                },
                { text: 'Cancel', role: 'cancel' }
            ]
        })
            .then(function (actionSheetEl) {
            actionSheetEl.present();
        });
    };
    BlockDetailPage.prototype.onEditBlock = function () {
        var _this = this;
        this.modalCtrl
            .create({ component: _edit_block_edit_block_component__WEBPACK_IMPORTED_MODULE_7__["EditBlockComponent"] })
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
    BlockDetailPage.prototype.onAddUnit = function () {
        this.modalCtrl
            .create({ component: _add_unit_add_unit_component__WEBPACK_IMPORTED_MODULE_6__["AddUnitComponent"] })
            .then(function (modalEl) {
            modalEl.present();
            return modalEl.onDidDismiss();
        });
    };
    BlockDetailPage.prototype.addToFav = function (postalCode) {
        // check if already in fav
        // if yes, dont add (alert?)
        // if no, add
        if (this.currUser.favourites && this.currUser.favourites.length > 0) {
            this.favPlace = this.currUser.favourites.find(function (p) { return p.postal === postalCode; });
            if (this.favPlace) {
                this.presentFavAlert();
            }
            else {
                this.authService.addFav(this.currUser.email, this.placeService.currPlace).subscribe(function () {
                });
            }
        }
        else {
            this.authService.addFav(this.currUser.email, this.placeService.currPlace).subscribe(function () {
            });
        }
    };
    BlockDetailPage.prototype.presentFavAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Already Exist',
                            message: 'This place is already in your favourites!',
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
    BlockDetailPage.ctorParameters = function () { return [
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: src_app_pages_home_home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _services_place_service__WEBPACK_IMPORTED_MODULE_5__["PlaceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    BlockDetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-block-detail',
            template: __importDefault(__webpack_require__(/*! raw-loader!./block-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/block-detail/block-detail.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./block-detail.page.scss */ "./src/app/pages/units/block-detail/block-detail.page.scss")).default]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_pages_home_home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _services_place_service__WEBPACK_IMPORTED_MODULE_5__["PlaceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], BlockDetailPage);
    return BlockDetailPage;
}());



/***/ }),

/***/ "./src/app/pages/units/block-detail/edit-block/edit-block.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/units/block-detail/edit-block/edit-block.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VuaXRzL2Jsb2NrLWRldGFpbC9lZGl0LWJsb2NrL2VkaXQtYmxvY2suY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/units/block-detail/edit-block/edit-block.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/units/block-detail/edit-block/edit-block.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EditBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBlockComponent", function() { return EditBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _services_place_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/place.service */ "./src/app/services/place.service.ts");
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




var EditBlockComponent = /** @class */ (function () {
    function EditBlockComponent(modalCtrl, placeService) {
        this.modalCtrl = modalCtrl;
        this.placeService = placeService;
    }
    EditBlockComponent.prototype.ngOnInit = function () {
        this.currPlace = this.placeService.currPlace;
        this.editBlockForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            projectName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.currPlace.name, {
                updateOn: 'blur',
            }),
        });
    };
    EditBlockComponent.prototype.onCancel = function () {
        console.log("cancel edit block");
        this.modalCtrl.dismiss(null, 'cancel');
    };
    EditBlockComponent.prototype.submitEditBlock = function () {
        if (!this.editBlockForm.valid) {
            return;
        }
        var newName = this.editBlockForm.value.projectName;
        this.placeService.editBlock(this.currPlace.postal, newName).subscribe(function () {
        });
        //console.log("block edited");
        //this.editBlockForm.reset();
        this.modalCtrl.dismiss({ message: 'Changes saved' }, 'confirm');
    };
    EditBlockComponent.prototype.uploadBlockImage = function () {
        console.log("choose block image to upload");
    };
    EditBlockComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _services_place_service__WEBPACK_IMPORTED_MODULE_3__["PlaceService"] }
    ]; };
    EditBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-block',
            template: __importDefault(__webpack_require__(/*! raw-loader!./edit-block.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/units/block-detail/edit-block/edit-block.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./edit-block.component.scss */ "./src/app/pages/units/block-detail/edit-block/edit-block.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _services_place_service__WEBPACK_IMPORTED_MODULE_3__["PlaceService"]])
    ], EditBlockComponent);
    return EditBlockComponent;
}());



/***/ })

}]);
//# sourceMappingURL=block-detail-block-detail-module.js.map