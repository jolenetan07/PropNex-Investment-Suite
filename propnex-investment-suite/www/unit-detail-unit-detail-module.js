(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unit-detail-unit-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/units/block-detail/unit-detail/edit-unit/edit-unit.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/units/block-detail/unit-detail/edit-unit/edit-unit.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"primary\">\r\n      <ion-button fill=\"clear\" color=\"danger\" (click)=\"onCancel()\">\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Edit Unit</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"editUnitForm\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Homeowner Race</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"homeownerRace\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Country Of Citizenship</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"countryOfCitizenship\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Decorative Style</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"decorativeStyle\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Extension Request</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"extensionRequest\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Price</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"price\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Title Deed</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"titleDeed\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">House Age</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"houseAge\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Building Height</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"buildingHeight\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">No. Of Units (total)</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"noOfUnitsTotal\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">No. Of Units (per floor)</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"noOfUnitsPerFloor\"\r\n              ></ion-input>\r\n            </ion-item>\r\n        \r\n            <ion-item>\r\n              <ion-label position=\"floating\">Room Type</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"roomType\"\r\n              ></ion-input>\r\n            </ion-item>\r\n            \r\n            <ion-item>\r\n              <ion-label position=\"floating\">Area</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"area\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">No. Of Rooms</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"noOfRooms\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">No. Of Toilets</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"noOfToilets\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">House Structure</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"houseStructure\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Door Facing</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"doorFacing\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Room Orientation</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"roomOrientation\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Corner Unit</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"cornerUnit\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Ground/Top Floor</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"groundTopFloor\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Western Sun</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"westernSun\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Noisy</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"noisy\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Refurbished State</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"refurbishedState\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Landscape From Window</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"landscapeFromWindow\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Bomb Shelter</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"bombShelter\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Open Kitchen</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"openKitchen\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Gas Management Fee</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"gasManagementFee\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">House Tax</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"houseTax\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Rental Status</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"rentalStatus\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">VR Link</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"vrLink\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-row>\r\n              <ion-col>\r\n                <ion-button \r\n                (click)=\"uploadFloorPlanImage()\" \r\n                expand=\"block\"\r\n                >Upload Floor Plan Image\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row>\r\n              <ion-col>\r\n                <ion-button \r\n                type=\"submit\" \r\n                (click)=\"submitEditUnit()\" \r\n                expand=\"block\"\r\n                >Submit\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-list>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/units/block-detail/unit-detail/floorplan-modal/floorplan-modal.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/units/block-detail/unit-detail/floorplan-modal/floorplan-modal.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Floor Plan</ion-title>\r\n\r\n    <ion-button\r\n      size=\"small\" \r\n      color=\"tertiary\"\r\n      slot=\"end\" \r\n      (click)=\"onCancel()\"\r\n    >\r\n      <ion-icon slot=\"icon-only\" name=\"contract-outline\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-img \r\n          src=\"https://images.edrawmax.com/examples/apartment-floor-plan/example4.png\"\r\n        >\r\n      </ion-img>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/units/block-detail/unit-detail/floorplan/floorplan.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/units/block-detail/unit-detail/floorplan/floorplan.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Floor Plan</ion-title>\r\n\r\n    <ion-button \r\n      size=\"small\" \r\n      color=\"tertiary\"\r\n      slot=\"end\" \r\n      (click)=\"onExpand()\"\r\n    >\r\n      <ion-icon slot=\"icon-only\" name=\"expand-outline\"></ion-icon>\r\n    </ion-button>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-img \r\n          src=\"https://images.edrawmax.com/examples/apartment-floor-plan/example4.png\"\r\n        >\r\n      </ion-img>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/units/block-detail/unit-detail/unit-detail.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/units/block-detail/unit-detail/unit-detail.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/units\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Unit Detail</ion-title>\r\n\r\n    <ion-button \r\n      *ngIf=\"currUser.type === 'seller'\"\r\n      size=\"small\" \r\n      color=\"tertiary\"\r\n      slot=\"end\" \r\n      (click)=\"onEditUnit()\"\r\n    >\r\n      <ion-icon slot=\"icon-only\" name=\"pencil-outline\"></ion-icon>\r\n  </ion-button>\r\n    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col class=\"ion-no-padding\">\r\n        <ion-img [src]=\"places[0].imageUrl\"></ion-img>\r\n    </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col class=\"ion-text-center ion-no-padding\">\r\n        <h6>{{ places[0].name }}, Singapore {{ places[0].postal }}</h6>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col class=\"ion-no-padding\">\r\n        <ion-list *ngFor=\"let dets of unitDetails\">\r\n          <ion-item>\r\n            {{dets}}\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col class=\"ion-no-padding\">\r\n        <ion-item>VR Link:</ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col class=\"ion-text-center ion-no-padding\">\r\n        <ion-button (click)=\"presentPopover($event)\">View Floor Plan</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/units/block-detail/unit-detail/edit-unit/edit-unit.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/units/block-detail/unit-detail/edit-unit/edit-unit.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VuaXRzL2Jsb2NrLWRldGFpbC91bml0LWRldGFpbC9lZGl0LXVuaXQvZWRpdC11bml0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/units/block-detail/unit-detail/edit-unit/edit-unit.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/units/block-detail/unit-detail/edit-unit/edit-unit.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EditUnitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUnitComponent", function() { return EditUnitComponent; });
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



var EditUnitComponent = /** @class */ (function () {
    function EditUnitComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    EditUnitComponent.prototype.ngOnInit = function () {
        this.editUnitForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
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
    EditUnitComponent.prototype.onCancel = function () {
        console.log("cancel edit unit");
        this.modalCtrl.dismiss(null, 'cancel');
    };
    EditUnitComponent.prototype.submitEditUnit = function () {
        if (!this.editUnitForm.valid) {
            return;
        }
        console.log("unit edited");
        this.editUnitForm.reset();
        this.modalCtrl.dismiss();
    };
    EditUnitComponent.prototype.uploadFloorPlanImage = function () {
        console.log("choose floor plan image to upload");
    };
    EditUnitComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    EditUnitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-unit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./edit-unit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/units/block-detail/unit-detail/edit-unit/edit-unit.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./edit-unit.component.scss */ "./src/app/units/block-detail/unit-detail/edit-unit/edit-unit.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], EditUnitComponent);
    return EditUnitComponent;
}());



/***/ }),

/***/ "./src/app/units/block-detail/unit-detail/floorplan-modal/floorplan-modal.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/units/block-detail/unit-detail/floorplan-modal/floorplan-modal.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VuaXRzL2Jsb2NrLWRldGFpbC91bml0LWRldGFpbC9mbG9vcnBsYW4tbW9kYWwvZmxvb3JwbGFuLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/units/block-detail/unit-detail/floorplan-modal/floorplan-modal.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/units/block-detail/unit-detail/floorplan-modal/floorplan-modal.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: FloorplanModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorplanModalComponent", function() { return FloorplanModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
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


var FloorplanModalComponent = /** @class */ (function () {
    function FloorplanModalComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    FloorplanModalComponent.prototype.ngOnInit = function () { };
    FloorplanModalComponent.prototype.onCancel = function () {
        console.log("close floor plan");
        this.modalCtrl.dismiss(null, 'cancel');
    };
    FloorplanModalComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"] }
    ]; };
    FloorplanModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-floorplan-modal',
            template: __importDefault(__webpack_require__(/*! raw-loader!./floorplan-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/units/block-detail/unit-detail/floorplan-modal/floorplan-modal.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./floorplan-modal.component.scss */ "./src/app/units/block-detail/unit-detail/floorplan-modal/floorplan-modal.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], FloorplanModalComponent);
    return FloorplanModalComponent;
}());



/***/ }),

/***/ "./src/app/units/block-detail/unit-detail/floorplan/floorplan.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/units/block-detail/unit-detail/floorplan/floorplan.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VuaXRzL2Jsb2NrLWRldGFpbC91bml0LWRldGFpbC9mbG9vcnBsYW4vZmxvb3JwbGFuLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/units/block-detail/unit-detail/floorplan/floorplan.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/units/block-detail/unit-detail/floorplan/floorplan.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FloorplanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorplanComponent", function() { return FloorplanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _floorplan_modal_floorplan_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../floorplan-modal/floorplan-modal.component */ "./src/app/units/block-detail/unit-detail/floorplan-modal/floorplan-modal.component.ts");
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



var FloorplanComponent = /** @class */ (function () {
    function FloorplanComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    FloorplanComponent.prototype.ngOnInit = function () { };
    FloorplanComponent.prototype.onExpand = function () {
        this.modalCtrl
            .create({ component: _floorplan_modal_floorplan_modal_component__WEBPACK_IMPORTED_MODULE_2__["FloorplanModalComponent"] })
            .then(function (modalEl) {
            modalEl.present();
            return modalEl.onDidDismiss();
        });
    };
    FloorplanComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"] }
    ]; };
    FloorplanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-floorplan',
            template: __importDefault(__webpack_require__(/*! raw-loader!./floorplan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/units/block-detail/unit-detail/floorplan/floorplan.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./floorplan.component.scss */ "./src/app/units/block-detail/unit-detail/floorplan/floorplan.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], FloorplanComponent);
    return FloorplanComponent;
}());



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
/* harmony import */ var _edit_unit_edit_unit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-unit/edit-unit.component */ "./src/app/units/block-detail/unit-detail/edit-unit/edit-unit.component.ts");
/* harmony import */ var _floorplan_floorplan_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./floorplan/floorplan.component */ "./src/app/units/block-detail/unit-detail/floorplan/floorplan.component.ts");
/* harmony import */ var _floorplan_modal_floorplan_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./floorplan-modal/floorplan-modal.component */ "./src/app/units/block-detail/unit-detail/floorplan-modal/floorplan-modal.component.ts");
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
                _unit_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["UnitDetailPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [_unit_detail_page__WEBPACK_IMPORTED_MODULE_5__["UnitDetailPage"], _edit_unit_edit_unit_component__WEBPACK_IMPORTED_MODULE_6__["EditUnitComponent"], _floorplan_floorplan_component__WEBPACK_IMPORTED_MODULE_7__["FloorplanComponent"], _floorplan_modal_floorplan_modal_component__WEBPACK_IMPORTED_MODULE_8__["FloorplanModalComponent"]]
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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var src_app_home_home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/home/home.service */ "./src/app/home/home.service.ts");
/* harmony import */ var _edit_unit_edit_unit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-unit/edit-unit.component */ "./src/app/units/block-detail/unit-detail/edit-unit/edit-unit.component.ts");
/* harmony import */ var _floorplan_floorplan_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./floorplan/floorplan.component */ "./src/app/units/block-detail/unit-detail/floorplan/floorplan.component.ts");
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






var UnitDetailPage = /** @class */ (function () {
    function UnitDetailPage(homeService, authService, modalCtrl, popoverController
    //private router: Router
    ) {
        this.homeService = homeService;
        this.authService = authService;
        this.modalCtrl = modalCtrl;
        this.popoverController = popoverController;
        this.unitDetails = [
            'Homeowner Race: ',
            'Country Of Citizenship: ',
            'Decorative Style: ',
            'Extension Request: ',
            'Price: ',
            'Title Deed: ',
            'House Age: ',
            'Building Height: ',
            'No. Of Units (total): ',
            'No. Of Units (per floor): ',
            'Room Type: ',
            'Area: ',
            'No. Of Rooms: ',
            'No. Of Toilets: ',
            'House Structure: ',
            'Door Facing: ',
            'Room Orientation: ',
            'Corner Unit: ',
            'Ground/Top Floor: ',
            'Western Sun: ',
            'Noisy: ',
            'Refurbished State: ',
            'Landscape From Window: ',
            'Bomb Shelter: ',
            'Open Kitchen: ',
            'Gas Management Fee: ',
            'House Tax: ',
            'Rental Status: '
        ];
    }
    UnitDetailPage.prototype.ngOnInit = function () {
        this.currUser = this.authService.currentUser;
        this.places = this.homeService.allPlaces;
    };
    UnitDetailPage.prototype.handleChange = function (event) {
        console.log(event.detail.value);
    };
    UnitDetailPage.prototype.onEditUnit = function () {
        console.log("edit specific unit details");
        this.modalCtrl
            .create({ component: _edit_unit_edit_unit_component__WEBPACK_IMPORTED_MODULE_4__["EditUnitComponent"] })
            .then(function (modalEl) {
            modalEl.present();
            return modalEl.onDidDismiss();
        });
    };
    UnitDetailPage.prototype.presentPopover = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var popover, role;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _floorplan_floorplan_component__WEBPACK_IMPORTED_MODULE_5__["FloorplanComponent"],
                            cssClass: 'my-custom-class',
                            event: e,
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, popover.onDidDismiss()];
                    case 3:
                        role = (_a.sent()).role;
                        return [2 /*return*/];
                }
            });
        });
    };
    UnitDetailPage.ctorParameters = function () { return [
        { type: src_app_home_home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"] },
        { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"] }
    ]; };
    UnitDetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-unit-detail',
            template: __importDefault(__webpack_require__(/*! raw-loader!./unit-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/units/block-detail/unit-detail/unit-detail.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./unit-detail.page.scss */ "./src/app/units/block-detail/unit-detail/unit-detail.page.scss")).default]
        }),
        __metadata("design:paramtypes", [src_app_home_home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"],
            src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"]
            //private router: Router
        ])
    ], UnitDetailPage);
    return UnitDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=unit-detail-unit-detail-module.js.map