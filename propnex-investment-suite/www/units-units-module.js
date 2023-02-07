(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["units-units-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/units/add-block/add-block.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/units/add-block/add-block.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"primary\">\r\n      <ion-button fill=\"clear\" color=\"danger\" (click)=\"onCancel()\">\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Add Block</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"addBlockForm\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Project Name</ion-label>\r\n              <ion-input \r\n                type=\"text\"  \r\n                formControlName=\"projectName\"\r\n              ></ion-input>\r\n            </ion-item>\r\n        \r\n            <ion-item>\r\n              <ion-label position=\"floating\">Postal Code</ion-label>\r\n              <ion-input \r\n                type=\"text\"\r\n                formControlName=\"postalCode\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-row>\r\n              <ion-col>\r\n                <ion-button \r\n                (click)=\"uploadBlockImage()\" \r\n                expand=\"block\"\r\n                >Upload Block Image\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row>\r\n              <ion-col>\r\n                <ion-button \r\n                type=\"submit\" \r\n                (click)=\"submitAddBlock()\" \r\n                expand=\"block\"\r\n                >Submit\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-list>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/units/units.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/units/units.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Individual Units</ion-title>\r\n\r\n    <ion-button \r\n    *ngIf=\"currUser.type === 'seller'\"\r\n    size=\"small\" \r\n    color=\"tertiary\"\r\n    slot=\"end\" \r\n    (click)=\"onAddBlock()\"\r\n  >\r\n    <ion-icon slot=\"icon-only\" name=\"add-outline\"></ion-icon>\r\n</ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-searchbar \r\n        color=\"light\"\r\n        placeholder=\"Enter postal code\"\r\n        [debounce]=\"500\"\r\n        (ionChange)=\"handleChange($event)\"\r\n        ></ion-searchbar>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-list>\r\n          <ion-item *ngIf=\"result\">\r\n            <ion-label *ngIf=\"result.name === undefined\">\r\n              <h2>No results found</h2>\r\n            </ion-label>\r\n\r\n            <ion-thumbnail *ngIf=\"result.name !== undefined\" slot=\"start\">\r\n              <ion-img [src]=\"result.imageUrl\"></ion-img>\r\n            </ion-thumbnail>\r\n            <ion-label \r\n              *ngIf=\"result.name !== undefined\"\r\n              (click) = \"onSelectPlace()\"\r\n            >\r\n              <h2>{{ result.name }}</h2>\r\n              <p>Singapore {{ result.postal}}</p>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/auth/firebase.model.ts":
/*!****************************************!*\
  !*** ./src/app/auth/firebase.model.ts ***!
  \****************************************/
/*! exports provided: fbUser, fbPostal, fbTrans */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fbUser", function() { return fbUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fbPostal", function() { return fbPostal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fbTrans", function() { return fbTrans; });
var fbUser = /** @class */ (function () {
    function fbUser(email, firstName, householdIncome, lastName, password, type, username) {
        this.email = email;
        this.firstName = firstName;
        this.householdIncome = householdIncome;
        this.lastName = lastName;
        this.password = password;
        this.type = type;
        this.username = username;
    }
    return fbUser;
}());

var fbPostal = /** @class */ (function () {
    function fbPostal(name, postal, imageUrl) {
        this.name = name;
        this.postal = postal;
        this.imageUrl = imageUrl;
    }
    return fbPostal;
}());

var fbTrans = /** @class */ (function () {
    function fbTrans(area, dateOfSale, flatModel, floorMax, floorMin, privatePublic, projectName, remainingLease, salePrice, type, transID) {
        this.area = area;
        this.dateOfSale = dateOfSale;
        this.flatModel = flatModel;
        this.floorMax = floorMax;
        this.floorMin = floorMin;
        this.privatePublic = privatePublic;
        this.projectName = projectName;
        this.remainingLease = remainingLease;
        this.salePrice = salePrice;
        this.type = type;
        this.transID = transID;
    }
    return fbTrans;
}());



/***/ }),

/***/ "./src/app/units/add-block/add-block.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/units/add-block/add-block.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VuaXRzL2FkZC1ibG9jay9hZGQtYmxvY2suY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/units/add-block/add-block.component.ts":
/*!********************************************************!*\
  !*** ./src/app/units/add-block/add-block.component.ts ***!
  \********************************************************/
/*! exports provided: AddBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBlockComponent", function() { return AddBlockComponent; });
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



var AddBlockComponent = /** @class */ (function () {
    function AddBlockComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    AddBlockComponent.prototype.ngOnInit = function () {
        this.addBlockForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            projectName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
            postalCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
            }),
        });
    };
    AddBlockComponent.prototype.onCancel = function () {
        console.log("cancel add block");
        this.modalCtrl.dismiss(null, 'cancel');
    };
    AddBlockComponent.prototype.submitAddBlock = function () {
        if (!this.addBlockForm.valid) {
            return;
        }
        console.log("block added");
        this.addBlockForm.reset();
        this.modalCtrl.dismiss();
    };
    AddBlockComponent.prototype.uploadBlockImage = function () {
        console.log("choose block image to upload");
    };
    AddBlockComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    AddBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-block',
            template: __importDefault(__webpack_require__(/*! raw-loader!./add-block.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/units/add-block/add-block.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./add-block.component.scss */ "./src/app/units/add-block/add-block.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], AddBlockComponent);
    return AddBlockComponent;
}());



/***/ }),

/***/ "./src/app/units/place.service.ts":
/*!****************************************!*\
  !*** ./src/app/units/place.service.ts ***!
  \****************************************/
/*! exports provided: PlaceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceService", function() { return PlaceService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_firebase_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/firebase.model */ "./src/app/auth/firebase.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlaceService = /** @class */ (function () {
    function PlaceService(http) {
        this.http = http;
        this._fbPostals = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    Object.defineProperty(PlaceService.prototype, "fbPostals", {
        get: function () {
            return this._fbPostals.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    PlaceService.prototype.fetchFBPostals = function () {
        var _this = this;
        console.log("fetch postal data");
        return this.http
            .get("https://propnexfyp-postals.asia-southeast1.firebasedatabase.app/.json")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resData) {
            var postals = [];
            for (var key in resData) {
                if (resData.hasOwnProperty(key)) {
                    postals.push(new _auth_firebase_model__WEBPACK_IMPORTED_MODULE_4__["fbPostal"](resData[key][0], resData[key][1], "assets/placeholders/property.jpeg"));
                }
            }
            return postals;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (postals) {
            //console.log(postals[0]);
            //console.log(postals);
            _this._fbPostals.next(postals);
        }));
    };
    PlaceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    PlaceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], PlaceService);
    return PlaceService;
}());



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
        loadChildren: function () { return Promise.all(/*! import() | block-detail-block-detail-module */[__webpack_require__.e("common"), __webpack_require__.e("block-detail-block-detail-module")]).then(__webpack_require__.bind(null, /*! ./block-detail/block-detail.module */ "./src/app/units/block-detail/block-detail.module.ts")).then(function (m) { return m.BlockDetailPageModule; }); }
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
/* harmony import */ var _add_block_add_block_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-block/add-block.component */ "./src/app/units/add-block/add-block.component.ts");
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
                _units_routing_module__WEBPACK_IMPORTED_MODULE_4__["UnitsPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [_units_page__WEBPACK_IMPORTED_MODULE_5__["UnitsPage"], _add_block_add_block_component__WEBPACK_IMPORTED_MODULE_6__["AddBlockComponent"]]
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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _add_block_add_block_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-block/add-block.component */ "./src/app/units/add-block/add-block.component.ts");
/* harmony import */ var _place_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./place.service */ "./src/app/units/place.service.ts");
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
    function UnitsPage(authService, 
    //private homeService: HomeService,
    router, modalCtrl, placeService) {
        this.authService = authService;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.placeService = placeService;
    }
    UnitsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.currUser = this.authService.currentUser;
        //this.loadedPlaces = this.homeService.allPlaces;
        this.fbPostalsSub = this.placeService.fbPostals.subscribe(function (fbPostals) {
            _this.loadedFBPostals = fbPostals;
        });
    };
    UnitsPage.prototype.ionViewWillEnter = function () {
        this.placeService.fetchFBPostals().subscribe(function () {
        });
    };
    UnitsPage.prototype.handleChange = function (event) {
        var query = event.target.value;
        //console.log(query);
        //this.result  = this.homeService.getPlace(query);
        this.result = this.loadedFBPostals.find(function (p) { return p.postal === query; });
        //console.log(this.result);
    };
    UnitsPage.prototype.onSelectPlace = function () {
        // this.router.navigate(['/', 'units', 'block-detail']);
        this.router.navigate(['/', 'units', this.result.postal]);
    };
    UnitsPage.prototype.onAddBlock = function () {
        console.log("add new block");
        this.modalCtrl
            .create({ component: _add_block_add_block_component__WEBPACK_IMPORTED_MODULE_4__["AddBlockComponent"] })
            .then(function (modalEl) {
            modalEl.present();
            return modalEl.onDidDismiss();
        });
    };
    UnitsPage.ctorParameters = function () { return [
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _place_service__WEBPACK_IMPORTED_MODULE_5__["PlaceService"] }
    ]; };
    UnitsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-units',
            template: __importDefault(__webpack_require__(/*! raw-loader!./units.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/units/units.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./units.page.scss */ "./src/app/units/units.page.scss")).default]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _place_service__WEBPACK_IMPORTED_MODULE_5__["PlaceService"]])
    ], UnitsPage);
    return UnitsPage;
}());



/***/ })

}]);
//# sourceMappingURL=units-units-module.js.map