(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~favourites-favourites-module~main-main-module~pages-units-units-module~recommendations-recom~65a86ca3"],{

/***/ "./src/app/services/place.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/place.service.ts ***!
  \*******************************************/
/*! exports provided: PlaceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceService", function() { return PlaceService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _pages_auth_firebase_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/auth/firebase.model */ "./src/app/pages/auth/firebase.model.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};





var PlaceService = /** @class */ (function () {
    function PlaceService(http) {
        this.http = http;
        this._fbPostals = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._fbRecs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    Object.defineProperty(PlaceService.prototype, "fbPostals", {
        get: function () {
            return this._fbPostals.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaceService.prototype, "fbRecs", {
        get: function () {
            return this._fbRecs.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaceService.prototype, "currPlace", {
        get: function () {
            return this._currPlace;
        },
        set: function (currPlace) {
            this._currPlace = currPlace;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaceService.prototype, "currUnit", {
        get: function () {
            return this._currUnit;
        },
        set: function (currUnit) {
            this._currUnit = currUnit;
        },
        enumerable: true,
        configurable: true
    });
    PlaceService.prototype.fetchFBPostals = function () {
        var _this = this;
        console.log("fetch postal data");
        return this.http
            .get("https://propnexfyp-postals-test.asia-southeast1.firebasedatabase.app/.json")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resData) {
            var postals = [];
            for (var key in resData) {
                if (resData.hasOwnProperty(key)) {
                    postals.push(new _pages_auth_firebase_model__WEBPACK_IMPORTED_MODULE_4__["fbPostal"](resData[key].name, resData[key].postal, resData[key].imageUrl, resData[key].units));
                }
            }
            return postals;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (postals) {
            //console.log(postals[0]);
            //console.log(postals);
            _this._fbPostals.next(postals);
        }));
    };
    PlaceService.prototype.fetchFBRecs = function () {
        var _this = this;
        console.log("fetch recommendations data");
        return this.http
            .get("https://propnex-recommendations.asia-southeast1.firebasedatabase.app/.json")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resData) {
            var places = [];
            for (var key in resData) {
                if (resData.hasOwnProperty(key)) {
                    places.push(new _pages_auth_firebase_model__WEBPACK_IMPORTED_MODULE_4__["fbRec"](resData[key].place, resData[key].rec1, resData[key].rec2, resData[key].rec3));
                }
            }
            return places;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (places) {
            //console.log(postals[0]);
            console.log(places);
            _this._fbRecs.next(places);
        }));
    };
    PlaceService.prototype.addBlock = function (name, postal) {
        var _this = this;
        var newBlock = new _pages_auth_firebase_model__WEBPACK_IMPORTED_MODULE_4__["fbPostal"](name, postal, "assets/placeholders/property.jpeg");
        return this.http
            .post('https://propnexfyp-postals-test.asia-southeast1.firebasedatabase.app/.json', __assign({}, newBlock))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (resData) {
            return _this.fbPostals;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (fbUsers) {
            _this._fbPostals.next(fbUsers.concat(newBlock));
        }));
    };
    PlaceService.prototype.editBlock = function (targetPostal, newName) {
        var _this = this;
        console.log(targetPostal, newName);
        var updatedUsers;
        return this.fbPostals.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (users) {
            if (!users || users.length <= 0) {
                return _this.fetchFBPostals();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(users);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (users) {
            var updatedUserIndex = users.findIndex(function (u) { return u.postal === targetPostal; });
            updatedUsers = __spreadArrays(users);
            var oldPlace = updatedUsers[updatedUserIndex];
            updatedUsers[updatedUserIndex] = new _pages_auth_firebase_model__WEBPACK_IMPORTED_MODULE_4__["fbPostal"](newName, oldPlace.postal, oldPlace.imageUrl);
            _this.currPlace = updatedUsers[updatedUserIndex];
            return _this.http.put("https://propnexfyp-postals-test.asia-southeast1.firebasedatabase.app/" + updatedUserIndex + ".json", __assign({}, updatedUsers[updatedUserIndex]));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this._fbPostals.next(updatedUsers);
        }));
    };
    PlaceService.prototype.addUnit = function (targetPostal, unitNumber, bedrooms, size) {
        var _this = this;
        var updatedPlaces;
        return this.fbPostals.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (places) {
            if (!places || places.length <= 0) {
                return _this.fetchFBPostals();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(places);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (places) {
            var updatedPlaceIndex = places.findIndex(function (p) { return p.postal === targetPostal; });
            updatedPlaces = __spreadArrays(places);
            var oldPlace = updatedPlaces[updatedPlaceIndex];
            var newUnit = new _pages_auth_firebase_model__WEBPACK_IMPORTED_MODULE_4__["fbUnit"](bedrooms, "assets/placeholders/floorplan.png", size, unitNumber);
            var newUnitsArr = oldPlace.units || [];
            newUnitsArr = newUnitsArr.concat(newUnit);
            updatedPlaces[updatedPlaceIndex] = new _pages_auth_firebase_model__WEBPACK_IMPORTED_MODULE_4__["fbPostal"](oldPlace.name, oldPlace.postal, oldPlace.imageUrl, newUnitsArr);
            _this.currPlace = updatedPlaces[updatedPlaceIndex];
            _this.currUnit = newUnit;
            return _this.http.put("https://propnexfyp-postals-test.asia-southeast1.firebasedatabase.app/" + updatedPlaceIndex + ".json", __assign({}, updatedPlaces[updatedPlaceIndex]));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this._fbPostals.next(updatedPlaces);
        }));
    };
    PlaceService.prototype.editUnit = function (targetPostal, targetUnitNum, newUnit) {
        var _this = this;
        var updatedUsers;
        return this.fbPostals.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (users) {
            if (!users || users.length <= 0) {
                return _this.fetchFBPostals();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(users);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (users) {
            var updatedUserIndex = users.findIndex(function (u) { return u.postal === targetPostal; });
            updatedUsers = __spreadArrays(users);
            var oldPlace = updatedUsers[updatedUserIndex];
            var oldUnitIndex = oldPlace.units.findIndex(function (u) { return u.unitNumber === targetUnitNum; });
            oldPlace.units[oldUnitIndex] = newUnit;
            var newFavArr = oldPlace.units;
            updatedUsers[updatedUserIndex] = new _pages_auth_firebase_model__WEBPACK_IMPORTED_MODULE_4__["fbPostal"](oldPlace.name, oldPlace.postal, oldPlace.imageUrl, newFavArr);
            _this.currPlace = updatedUsers[updatedUserIndex];
            _this.currUnit = newUnit;
            return _this.http.put("https://propnexfyp-postals-test.asia-southeast1.firebasedatabase.app/" + updatedUserIndex + ".json", __assign({}, updatedUsers[updatedUserIndex]));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this._fbPostals.next(updatedUsers);
        }));
    };
    PlaceService.prototype.editAllUnit = function (targetPostal, targetUnitNum, newBedrooms, newSize) {
        var _this = this;
        var updatedUsers;
        return this.fbPostals.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (users) {
            if (!users || users.length <= 0) {
                return _this.fetchFBPostals();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(users);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (users) {
            var updatedUserIndex = users.findIndex(function (u) { return u.postal === targetPostal; });
            updatedUsers = __spreadArrays(users);
            var oldPlace = updatedUsers[updatedUserIndex];
            var targetString = '-' + targetUnitNum.split('-')[1];
            var unitArr = oldPlace.units.filter(function (u) { return u.unitNumber.includes(targetString); });
            unitArr.forEach(function (u) {
                u.bedrooms = newBedrooms;
                u.size = newSize;
            });
            var _loop_1 = function (i) {
                var currUnitNum = unitArr[i].unitNumber;
                var currIndex = oldPlace.units.findIndex(function (u) { return u.unitNumber === currUnitNum; });
                oldPlace.units[currIndex] = unitArr[i];
            };
            for (var i = 0; i < unitArr.length; i++) {
                _loop_1(i);
            }
            var oldUnitIndex = oldPlace.units.findIndex(function (u) { return u.unitNumber === targetUnitNum; });
            updatedUsers[updatedUserIndex] = new _pages_auth_firebase_model__WEBPACK_IMPORTED_MODULE_4__["fbPostal"](oldPlace.name, oldPlace.postal, oldPlace.imageUrl, oldPlace.units);
            _this.currPlace = updatedUsers[updatedUserIndex];
            _this.currUnit = oldPlace.units[oldUnitIndex];
            return _this.http.put("https://propnexfyp-postals-test.asia-southeast1.firebasedatabase.app/" + updatedUserIndex + ".json", __assign({}, updatedUsers[updatedUserIndex]));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this._fbPostals.next(updatedUsers);
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



/***/ })

}]);
//# sourceMappingURL=default~favourites-favourites-module~main-main-module~pages-units-units-module~recommendations-recom~65a86ca3.js.map