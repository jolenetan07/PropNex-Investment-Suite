(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["block-detail-block-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/units/block-detail/add-unit/add-unit.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/units/block-detail/add-unit/add-unit.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"primary\">\r\n      <ion-button fill=\"clear\" color=\"danger\" (click)=\"onCancel()\">\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Add Unit</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"addUnitForm\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Homeowner Race</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"homeownerRace\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Country Of Citizenship</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"countryOfCitizenship\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Decorative Style</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"decorativeStyle\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Extension Request</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"extensionRequest\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Price</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"price\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Title Deed</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"titleDeed\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">House Age</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"houseAge\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Building Height</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"buildingHeight\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">No. Of Units (total)</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"noOfUnitsTotal\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">No. Of Units (per floor)</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"noOfUnitsPerFloor\"\r\n              ></ion-input>\r\n            </ion-item>\r\n        \r\n            <ion-item>\r\n              <ion-label position=\"floating\">Room Type</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"roomType\"\r\n              ></ion-input>\r\n            </ion-item>\r\n            \r\n            <ion-item>\r\n              <ion-label position=\"floating\">Area</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"area\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">No. Of Rooms</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"noOfRooms\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">No. Of Toilets</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"noOfToilets\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">House Structure</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"houseStructure\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Door Facing</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"doorFacing\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Room Orientation</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"roomOrientation\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Corner Unit</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"cornerUnit\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Ground/Top Floor</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"groundTopFloor\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Western Sun</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"westernSun\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Noisy</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"noisy\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Refurbished State</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"refurbishedState\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Landscape From Window</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"landscapeFromWindow\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Bomb Shelter</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"bombShelter\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Open Kitchen</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"openKitchen\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Gas Management Fee</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"gasManagementFee\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">House Tax</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"houseTax\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Rental Status</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"rentalStatus\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">VR Link</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"vrLink\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-row>\r\n              <ion-col>\r\n                <ion-button \r\n                (click)=\"uploadFloorPlanImage()\" \r\n                expand=\"block\"\r\n                >Upload Floor Plan Image\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row>\r\n              <ion-col>\r\n                <ion-button \r\n                type=\"submit\" \r\n                (click)=\"submitAddUnit()\" \r\n                expand=\"block\"\r\n                >Submit\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-list>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/units/block-detail/block-detail.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/units/block-detail/block-detail.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/units\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>{{ isLoading? 'Loading...' : place.name }}</ion-title>\r\n\r\n    <ion-button \r\n    *ngIf=\"currUser.type === 'seller'\"\r\n    size=\"small\" \r\n    color=\"tertiary\"\r\n    slot=\"end\" \r\n    (click)=\"onEditBlockOptions()\"\r\n  >\r\n    <ion-icon slot=\"icon-only\" name=\"create-outline\"></ion-icon>\r\n</ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"ion-text-center\" *ngIf=\"isLoading\">\r\n    <ion-spinner color=\"primary\"></ion-spinner>\r\n  </div>\r\n\r\n  <ion-grid *ngIf=\"!isLoading && place\">\r\n    <ion-row>\r\n      <ion-col class=\"ion-no-padding\">\r\n        <!-- <ion-img [src]=\"places[0].imageUrl\"></ion-img> -->\r\n        <ion-img [src]=\"place?.imageUrl\"></ion-img>\r\n    </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col class=\"ion-text-center ion-no-padding\">\r\n        <!-- <h6>{{ places[0].name }}, Singapore {{ places[0].postal }}</h6> -->\r\n        <h6>{{ place?.name }}, Singapore {{ place?.postal }}</h6>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-searchbar \r\n        color=\"light\"\r\n        placeholder=\"Enter unit number (Eg. 01-01)\"\r\n        [debounce]=\"500\"\r\n        (ionChange)=\"handleChange($event)\"\r\n        ></ion-searchbar>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-list>\r\n          <ion-item *ngIf=\"result\">\r\n            <ion-label *ngIf=\"result.unitNum === undefined\">\r\n              <h2>No results found</h2>\r\n            </ion-label>\r\n\r\n            <ion-label \r\n              *ngIf=\"result.unitNum !== undefined\"\r\n              (click) = \"onSelectUnit()\"\r\n            >\r\n              <h2>#{{ result.unitNum }}</h2>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/units/block-detail/edit-block/edit-block.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/units/block-detail/edit-block/edit-block.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"primary\">\r\n      <ion-button fill=\"clear\" color=\"danger\" (click)=\"onCancel()\">\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Edit Block</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"editBlockForm\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Project Name</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"projectName\"\r\n              ></ion-input>\r\n            </ion-item>\r\n        \r\n            <ion-item>\r\n              <ion-label position=\"floating\">Postal Code</ion-label>\r\n              <ion-input \r\n                type=\"text\"\r\n                formControlName=\"postalCode\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-row>\r\n              <ion-col>\r\n                <ion-button \r\n                (click)=\"uploadBlockImage()\" \r\n                expand=\"block\"\r\n                >Upload Block Image\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row>\r\n              <ion-col>\r\n                <ion-button \r\n                type=\"submit\" \r\n                (click)=\"submitEditBlock()\" \r\n                expand=\"block\"\r\n                >Submit\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-list>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/units/block-detail/add-unit/add-unit.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/units/block-detail/add-unit/add-unit.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VuaXRzL2Jsb2NrLWRldGFpbC9hZGQtdW5pdC9hZGQtdW5pdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/units/block-detail/add-unit/add-unit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/units/block-detail/add-unit/add-unit.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddUnitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUnitComponent", function() { return AddUnitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
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
    function AddUnitComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    AddUnitComponent.prototype.ngOnInit = function () {
        this.addUnitForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            homeownerRace: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            countryOfCitizenship: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            decorativeStyle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            extensionRequest: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            titleDeed: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            houseAge: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            buildingHeight: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            noOfUnitsTotal: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            noOfUnitsPerFloor: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            roomType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            area: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            noOfRooms: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            noOfToilets: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            houseStructure: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            doorFacing: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            roomOrientation: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            cornerUnit: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            groundTopFloor: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            westernSun: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            noisy: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            refurbishedState: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            landscapeFromWindow: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            bombShelter: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            openKitchen: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            gasManagementFee: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            houseTax: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            rentalStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            vrLink: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
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
        console.log("unit added");
        this.addUnitForm.reset();
        this.modalCtrl.dismiss();
    };
    AddUnitComponent.prototype.uploadFloorPlanImage = function () {
        console.log("choose floor plan image to upload");
    };
    AddUnitComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    AddUnitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-unit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./add-unit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/units/block-detail/add-unit/add-unit.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./add-unit.component.scss */ "./src/app/units/block-detail/add-unit/add-unit.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], AddUnitComponent);
    return AddUnitComponent;
}());



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
/* harmony import */ var _add_unit_add_unit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-unit/add-unit.component */ "./src/app/units/block-detail/add-unit/add-unit.component.ts");
/* harmony import */ var _edit_block_edit_block_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-block/edit-block.component */ "./src/app/units/block-detail/edit-block/edit-block.component.ts");
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
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var src_app_home_home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/home/home.service */ "./src/app/home/home.service.ts");
/* harmony import */ var _add_unit_add_unit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-unit/add-unit.component */ "./src/app/units/block-detail/add-unit/add-unit.component.ts");
/* harmony import */ var _edit_block_edit_block_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-block/edit-block.component */ "./src/app/units/block-detail/edit-block/edit-block.component.ts");
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
    function BlockDetailPage(authService, navCtrl, route, homeService, router, actionSheetCtrl, modalCtrl) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.route = route;
        this.homeService = homeService;
        this.router = router;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.isLoading = false;
    }
    BlockDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.currUser = this.authService.currentUser;
        this.route.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has('postalId')) {
                _this.navCtrl.navigateBack('/units');
                return;
            }
            _this.isLoading = true;
            //this.place = this.homeService.getPlace(paramMap.get('postalId'));
            _this.place = _this.homeService.allPlaces.find(function (p) { return p.postal === paramMap.get("postalId"); });
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
        //console.log(this.result);
    };
    BlockDetailPage.prototype.onSelectUnit = function () {
        // to change
        this.router.navigate(['/', 'units', 'block-detail', 'unit-detail']);
    };
    BlockDetailPage.prototype.onEditBlockOptions = function () {
        var _this = this;
        console.log("choose to add new unit to block or edit block details");
        this.actionSheetCtrl.create({
            header: 'Please Choose',
            buttons: [
                {
                    text: 'Edit Block',
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
        this.modalCtrl
            .create({ component: _edit_block_edit_block_component__WEBPACK_IMPORTED_MODULE_6__["EditBlockComponent"] })
            .then(function (modalEl) {
            modalEl.present();
            return modalEl.onDidDismiss();
        });
    };
    BlockDetailPage.prototype.onAddUnit = function () {
        this.modalCtrl
            .create({ component: _add_unit_add_unit_component__WEBPACK_IMPORTED_MODULE_5__["AddUnitComponent"] })
            .then(function (modalEl) {
            modalEl.present();
            return modalEl.onDidDismiss();
        });
    };
    BlockDetailPage.ctorParameters = function () { return [
        { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: src_app_home_home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    BlockDetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-block-detail',
            template: __importDefault(__webpack_require__(/*! raw-loader!./block-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/units/block-detail/block-detail.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./block-detail.page.scss */ "./src/app/units/block-detail/block-detail.page.scss")).default]
        }),
        __metadata("design:paramtypes", [src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_home_home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], BlockDetailPage);
    return BlockDetailPage;
}());



/***/ }),

/***/ "./src/app/units/block-detail/edit-block/edit-block.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/units/block-detail/edit-block/edit-block.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VuaXRzL2Jsb2NrLWRldGFpbC9lZGl0LWJsb2NrL2VkaXQtYmxvY2suY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/units/block-detail/edit-block/edit-block.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/units/block-detail/edit-block/edit-block.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBlockComponent", function() { return EditBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
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
    function EditBlockComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    EditBlockComponent.prototype.ngOnInit = function () {
        this.editBlockForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            projectName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            postalCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
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
        console.log("block edited");
        this.editBlockForm.reset();
        this.modalCtrl.dismiss();
    };
    EditBlockComponent.prototype.uploadBlockImage = function () {
        console.log("choose block image to upload");
    };
    EditBlockComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    EditBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-block',
            template: __importDefault(__webpack_require__(/*! raw-loader!./edit-block.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/units/block-detail/edit-block/edit-block.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./edit-block.component.scss */ "./src/app/units/block-detail/edit-block/edit-block.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], EditBlockComponent);
    return EditBlockComponent;
}());



/***/ })

}]);
//# sourceMappingURL=block-detail-block-detail-module.js.map