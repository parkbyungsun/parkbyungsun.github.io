(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<app-list></app-list>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'pageid';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var aws_amplify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aws-amplify-angular */ "./node_modules/aws-amplify-angular/dist/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib/index.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(aws_amplify__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _aws_exports__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../aws-exports */ "./src/aws-exports.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");













aws_amplify__WEBPACK_IMPORTED_MODULE_10___default.a.configure(_aws_exports__WEBPACK_IMPORTED_MODULE_11__["default"]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_9__["ListComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_12__["SearchComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                aws_amplify_angular__WEBPACK_IMPORTED_MODULE_5__["AmplifyAngularModule"],
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_7__["InfiniteScrollModule"]
            ],
            providers: [
                aws_amplify_angular__WEBPACK_IMPORTED_MODULE_5__["AmplifyService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\" \n    infiniteScroll \n    [infiniteScrollDistance]=\"2\" \n    [infiniteScrollThrottle]=\"50\"\n    (scrolled)=\"onScroll()\"\n    [scrollWindow]=\"true\">\n\n  <div>\n    <app-search class=\"fixed-top\" (searchListEvent)=\"searchListEvent($event)\"></app-search>\n  </div>\n\n  <div>\n    <table class=\"table table-striped table-sm\">\n      <thead>\n        <tr>\n          <th *ngFor=\"let title of tableHeader\">\n            {{title}}\n          </th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"pageIdList\">\n        <tr *ngFor=\"let item of pageIdList; let i=index\">\n          <td>{{i+1}}</td>\n          <td>{{item.serviceArea}}</td>\n          <td>{{item.defType}}</td>\n          <td>{{item.defId}}</td>\n          <td>\n            {{item.defName}}\n          </td>\n          <td>\n            <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n                <div *ngFor=\"let poc of item.defUrl\">\n                  <a target=\"_blank\" href=\"{{poc.urlList}}\"><div class=\"btn btn-secondary btn-sm\">{{poc.pocList}}</div></a>\n                </div>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n    <div class=\"topBtn\">\n      <button class=\"btn btn-sm\" (click)=\"gotoTop()\">Top</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/list/list.component.scss":
/*!******************************************!*\
  !*** ./src/app/list/list.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  font-size: 0.875rem; }\n\napp-search {\n  padding: 10px 0;\n  background-color: #fff;\n  border-bottom: 1px solid #DEE2E6; }\n\n.table {\n  margin-top: 60px; }\n\n.table th {\n  border-top: 0; }\n\n.btn-group .btn {\n  margin-right: 1px; }\n\n.topBtn {\n  position: fixed;\n  bottom: 20px;\n  right: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9DOlxcRGV2XFxnaXRcXHBhZ2VpZC9zcmNcXGFwcFxcbGlzdFxcbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLG9CQUFtQixFQUN0Qjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsdUJBQXNCO0VBQ3RCLGlDQUFnQyxFQUNuQzs7QUFDRDtFQUNJLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLGNBQWEsRUFDaEI7O0FBRUQ7RUFDSSxrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLGFBQVk7RUFDWixZQUFXLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxufVxyXG5cclxuYXBwLXNlYXJjaCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNERUUyRTY7XHJcbn1cclxuLnRhYmxlIHtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbn1cclxuXHJcbi50YWJsZSB0aCB7XHJcbiAgICBib3JkZXItdG9wOiAwO1xyXG59XHJcblxyXG4uYnRuLWdyb3VwIC5idG4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcHg7XHJcbn1cclxuXHJcbi50b3BCdG4ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListComponent = /** @class */ (function () {
    function ListComponent() {
        this.pageIdList = [];
        this.totalList = [];
        this.tableHeader = [
            'No',
            'serviceArea',
            'defType',
            'pageID',
            'name',
            'url'
        ];
        this.listCount = 20;
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent.prototype.searchListEvent = function (result) {
        this.pageIdList = [];
        this.totalList = result;
        this.addListScroll();
    };
    ListComponent.prototype.addListScroll = function () {
        var tempList = this.totalList.splice(0, this.listCount);
        this.pageIdList = this.pageIdList.concat(tempList);
    };
    ListComponent.prototype.onScroll = function () {
        this.addListScroll();
    };
    ListComponent.prototype.gotoTop = function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/list/list.component.scss")]
        })
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-3\"> \n      <select class=\"form-control\" name=\"\" id=\"\" [ngModel]=\"selectedAreaValue\" (ngModelChange)=\"onChangeArea($event)\">\n        <option value=\"\">전체</option>\n        <option *ngFor=\"let item of serviceAreaList\" value=\"{{item}}\">\n          {{item}}\n        </option>\n      </select>\n    </div>\n    <div class=\"col-3\">\n      <select class=\"form-control\" name=\"\" id=\"\" [ngModel]=\"selectedTypeValue\" (ngModelChange)=\"onChageType($event)\">\n        <option value=\"\">전체</option>\n        <option *ngFor=\"let item of typeList\" value=\"{{item}}\">\n            {{item}}\n          </option>\n      </select>\n    </div>\n    <div class=\"col-6\">\n        <div class=\"input-group\">\n          <input type=\"text\" name=\"\" id=\"\" class=\"form-control\" placeholder=\"\" aria-describedby=\"helpId\" [(ngModel)]=\"keyword\" (keydown)=\"keydownEvent($event)\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-primary \" (click)=\"search()\">검색</button>\n          </div>\n        </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/search/search.component.scss":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.service */ "./src/app/search/search.service.ts");



var SearchComponent = /** @class */ (function () {
    function SearchComponent(searchService) {
        this.searchService = searchService;
        this.serviceAreaList = [];
        this.typeList = [];
        this.searchListEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pageIdList = [];
        this.searchResultList = [];
        this.keyword = '';
        this.selectedAreaValue = '';
        this.selectedTypeValue = '';
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchService.getListData('').subscribe(function (dt) {
            _this.pageIdList = dt.data.listPageids.items;
            var objA = {};
            var objB = {};
            _this.pageIdList.forEach(function (item) {
                if (!objA[item.serviceArea]) {
                    objA[item.serviceArea] = item.serviceArea;
                    _this.serviceAreaList.push(item.serviceArea);
                }
                if (!objB[item.defType]) {
                    objB[item.defType] = item.defType;
                    _this.typeList.push(item.defType);
                }
            });
            _this.search();
        }, function (error) {
            console.log('error : ', error);
        });
    };
    SearchComponent.prototype.search = function () {
        var _this = this;
        this.searchResultList = this.pageIdList.filter(function (jo) {
            if ((jo.defId.toLowerCase().includes(_this.keyword.toLowerCase())
                || jo.defName.toLowerCase().includes(_this.keyword.toLowerCase()))
                && jo.defType.includes(_this.selectedTypeValue)
                && jo.serviceArea.includes(_this.selectedAreaValue)) {
                return true;
            }
        });
        this.searchListEvent.emit((!this.keyword && !this.serviceAreaList.length && !this.typeList.length) ?
            this.pageIdList : this.searchResultList);
    };
    SearchComponent.prototype.onChangeArea = function (areaValue) {
        this.selectedAreaValue = areaValue;
        this.search();
    };
    SearchComponent.prototype.onChageType = function (typeValue) {
        this.selectedTypeValue = typeValue;
        this.search();
    };
    SearchComponent.prototype.keydownEvent = function (event) {
        if (event.keyCode === 13) {
            this.search();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchComponent.prototype, "searchListEvent", void 0);
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/search/search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/search/search.service.ts":
/*!******************************************!*\
  !*** ./src/app/search/search.service.ts ***!
  \******************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib/index.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aws_amplify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../graphql/queries */ "./src/graphql/queries.ts");
/* harmony import */ var aws_amplify_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aws-amplify-angular */ "./node_modules/aws-amplify-angular/dist/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var SearchService = /** @class */ (function () {
    function SearchService(amplifyService) {
        this.amplifyService = amplifyService;
        this.limit = 100;
    }
    SearchService.prototype.getTest = function () {
        return 'test!@!!!';
    };
    SearchService.prototype.getData = function () {
        return null;
    };
    SearchService.prototype.getListData = function (strFilter) {
        var inputFilter = {
            defName: {
                contains: strFilter
            }
        };
        if (strFilter === '') {
            inputFilter = null;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(this.amplifyService.api().graphql(Object(aws_amplify__WEBPACK_IMPORTED_MODULE_2__["graphqlOperation"])(_graphql_queries__WEBPACK_IMPORTED_MODULE_3__["listPageids"], { filter: inputFilter, limit: 10000 })));
    };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [aws_amplify_angular__WEBPACK_IMPORTED_MODULE_4__["AmplifyService"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/aws-exports.js":
/*!****************************!*\
  !*** ./src/aws-exports.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile =  {
    "aws_project_region": "ap-northeast-1",
    "aws_appsync_graphqlEndpoint": "https://h5w47xm7lvco7bwdqqewbyvgq4.appsync-api.ap-northeast-1.amazonaws.com/graphql",
    "aws_appsync_region": "ap-northeast-1",
    "aws_appsync_authenticationType": "API_KEY",
    "aws_appsync_apiKey": "da2-iya2fwj4hvg2ja5wif5ptepj64"
};


/* harmony default export */ __webpack_exports__["default"] = (awsmobile);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/graphql/queries.ts":
/*!********************************!*\
  !*** ./src/graphql/queries.ts ***!
  \********************************/
/*! exports provided: getPageid, listPageids */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageid", function() { return getPageid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listPageids", function() { return listPageids; });
// tslint:disable
// this is an auto generated file. This will be overwritten
var getPageid = "query GetPageid($defId: String!) {\n  getPageid(defId: $defId) {\n    defId\n    defName\n    defType\n    defUrl {\n      pocList\n      urlList\n    }\n    serviceArea\n  }\n}\n";
var listPageids = "query ListPageids(\n  $filter: TablePageidFilterInput\n  $limit: Int\n  $nextToken: String\n) {\n  listPageids(filter: $filter, limit: $limit, nextToken: $nextToken) {\n    items {\n      defId\n      defName\n      defType\n      defUrl {\n        pocList\n        urlList\n      }\n      serviceArea\n    }\n    nextToken\n  }\n}\n";


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Dev\git\pageid\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map