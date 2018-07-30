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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-to-cart/add-to-cart.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-to-cart/add-to-cart.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-to-cart/add-to-cart.component.html":
/*!********************************************************!*\
  !*** ./src/app/add-to-cart/add-to-cart.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<html>\n  <head>\n      <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n    <style>\n    body{\n    \n    font-family: 'Raleway', 'Arial';\n    color: #000;\n    }\n\n    .fa {\n\nfont-size: 3vw;\n}\n\n.fa:hover {\n  opacity: 0.7;\n}\n\n.fa-facebook {\n\ncolor: white;\n}\n\n.fa-twitter {\ncolor: white;\n}\n\n.fa-instagram {\ncolor: white;\n}\n.fa-linkedin {\ncolor: white;\n}\n\nimg{\n  width: 50%; \n  height:auto;\n}\n.half{\n  width: 50%;\n}\n.checked {\n    color: orange;\n}\n    </style>\n  </head>\n  <body>\n      <div class=\"table-responsive\">\n          <table class=\"table\" style=\"width: 90%; margin-left: 5%\">\n              \n            \n            <thead>\n                  <tr>\n                    \n                    <th style=\"width:20%\">Product</th>\n                    <th> Details</th>\n                    <th>Quantity</th>\n                    <th>Price</th>\n                    <th></th>\n                  \n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td><img [src]=\"aspirin\"></td>\n                    <td><p style=\"font-size: 2vmax\">Aspirin <br>50$</p></td>\n                    <td style=\"font-size: 2vmax\">1</td>\n                    <td style=\"font-size: 2vmax\">50$</td>\n                    <td><i class=\"fa fa-close\"></i></td>\n                  </tr>\n                  <tr>\n                      <td><img [src]=\"aspirin\"></td>\n                      <td><p style=\"font-size: 2vmax\">Aspirin <br>50$</p></td>\n                      <td style=\"font-size: 2vmax\">3</td>\n                      <td style=\"font-size: 2vmax\">150$</td>\n                      <td><i class=\"fa fa-close\"></i></td>\n                    </tr>\n                    <tr>\n                        <td><img [src]=\"aspirin\"></td>\n                        <td><p style=\"font-size: 2vmax\">Aspirin <br>50$</p></td>\n                        <td style=\"font-size: 2vmax\">2</td>\n                        <td style=\"font-size: 2vmax\">100$</td>\n                        <td><i class=\"fa fa-close\"></i></td>\n                      </tr>\n                </tbody>\n          </table>\n        </div>\n\n        <button type=\"button\" id=\"add\" class=\"btn btn-primary\" style=\"margin-left: 10%\">Continue Shopping</button>\n              <button type=\"button\" id=\"add\" class=\"btn btn-primary\" style=\"margin-left: 50%\">Checkout</button>\n\n\n\n  </body>\n</html>"

/***/ }),

/***/ "./src/app/add-to-cart/add-to-cart.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-to-cart/add-to-cart.component.ts ***!
  \******************************************************/
/*! exports provided: AddToCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddToCartComponent", function() { return AddToCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddToCartComponent = /** @class */ (function () {
    function AddToCartComponent() {
        this.aspirin = 'assets/images/i2.jpg';
    }
    AddToCartComponent.prototype.ngOnInit = function () {
    };
    AddToCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-to-cart',
            template: __webpack_require__(/*! ./add-to-cart.component.html */ "./src/app/add-to-cart/add-to-cart.component.html"),
            styles: [__webpack_require__(/*! ./add-to-cart.component.css */ "./src/app/add-to-cart/add-to-cart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddToCartComponent);
    return AddToCartComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-history/order-history.component */ "./src/app/order-history/order-history.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _add_to_cart_add_to_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-to-cart/add-to-cart.component */ "./src/app/add-to-cart/add-to-cart.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _searchresult_searchresult_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./searchresult/searchresult.component */ "./src/app/searchresult/searchresult.component.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/feedback/feedback.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./searchbar/searchbar.component */ "./src/app/searchbar/searchbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], runGuardsAndResolvers: 'always' },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"], runGuardsAndResolvers: 'always' },
    { path: 'orderhistory', component: _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_6__["OrderHistoryComponent"] },
    { path: 'product', component: _product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"] },
    { path: 'cart', component: _add_to_cart_add_to_cart_component__WEBPACK_IMPORTED_MODULE_8__["AddToCartComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'product/buy', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_9__["CheckoutComponent"] },
    { path: 'searchresult', component: _searchresult_searchresult_component__WEBPACK_IMPORTED_MODULE_10__["SearchresultComponent"] },
    { path: 'feedback', component: _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_11__["FeedbackComponent"] },
    { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_12__["LogoutComponent"] },
    { path: 'searchbar', component: _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_13__["SearchbarComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                // RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<app-header></app-header>\n<app-searchbar></app-searchbar>\n\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n\n\n\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.API_URL = 'http://localhost:8080';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
/* harmony import */ var _home_card_home_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home-card/home-card.component */ "./src/app/home-card/home-card.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./order-history/order-history.component */ "./src/app/order-history/order-history.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _add_to_cart_add_to_cart_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./add-to-cart/add-to-cart.component */ "./src/app/add-to-cart/add-to-cart.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _product_product_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./product/product.module */ "./src/app/product/product.module.ts");
/* harmony import */ var _searchresult_searchresult_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./searchresult/searchresult.component */ "./src/app/searchresult/searchresult.component.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/feedback/feedback.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(angular_2_local_storage__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./searchbar/searchbar.component */ "./src/app/searchbar/searchbar.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"],
                _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_12__["CarouselComponent"],
                _home_card_home_card_component__WEBPACK_IMPORTED_MODULE_13__["HomeCardComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _order_history_order_history_component__WEBPACK_IMPORTED_MODULE_16__["OrderHistoryComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_17__["NavigationComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_18__["ProductComponent"],
                _add_to_cart_add_to_cart_component__WEBPACK_IMPORTED_MODULE_19__["AddToCartComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_22__["CheckoutComponent"],
                _searchresult_searchresult_component__WEBPACK_IMPORTED_MODULE_24__["SearchresultComponent"],
                _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_25__["FeedbackComponent"],
                _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_32__["SearchbarComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_33__["LogoutComponent"]
            ],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__["MatChipsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__["MatExpansionModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_20__["MDBBootstrapModule"].forRoot(),
                _product_product_module__WEBPACK_IMPORTED_MODULE_23__["ProductModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__["NgbModule"].forRoot(),
                angular_2_local_storage__WEBPACK_IMPORTED_MODULE_27__["LocalStorageModule"].withConfig({
                    prefix: 'first-app',
                    storageType: 'localStorage'
                }),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/carousel/carousel.component.css":
/*!*************************************************!*\
  !*** ./src/app/carousel/carousel.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/carousel/carousel.component.html":
/*!**************************************************!*\
  !*** ./src/app/carousel/carousel.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n  \n \n"

/***/ }),

/***/ "./src/app/carousel/carousel.component.ts":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
    }
    CarouselComponent.prototype.ngOnInit = function () { };
    CarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/carousel/carousel.component.css")],
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n    \n  font-family: 'Raleway', 'Arial';\n  color: #000;\n  }\n\n  .fa {\n\nfont-size: 3vw;\n}\n\n  .fa:hover {\nopacity: 0.7;\n}\n\n  .fa-facebook {\n\ncolor: white;\n}\n\n  .fa-twitter {\ncolor: white;\n}\n\n  .fa-instagram {\ncolor: white;\n}\n\n  .fa-linkedin {\ncolor: white;\n}\n\n  img{\nwidth: 50%; \nheight:auto;\n}\n\n  .half{\nwidth: 50%;\n}\n\n  .checked {\n  color: orange;\n}"

/***/ }),

/***/ "./src/app/checkout/checkout.component.html":
/*!**************************************************!*\
  !*** ./src/app/checkout/checkout.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n  <title>Checkout</title>\n</head>\n\n<body>\n  <div class=\"table-responsive\">\n    <table class=\"table\" style=\"width: 90%; margin-left: 5%\">\n      <thead>\n        <tr>\n\n          <th style=\"width:20%\">Product</th>\n          <th> Details</th>\n          <th>Quantity</th>\n          <th>Price</th>\n          <th></th>\n\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let product of listProducts\">\n          <td>\n            <img src={{product.product.productImage}}>\n          </td>\n          <td>\n            <p style=\"font-size: 2vmax\">{{product.product.product_name}}</p>\n          </td>\n          <td style=\"font-size: 2vmax\">{{product.product.product_quantity}}</td>\n          <td style=\"font-size: 2vmax\">$ {{product.product.product_price}}</td>\n          <td>\n            <button class=\"btn btn-outline-danger\" (click)=\"delete($event)\" id=\"{{product.id}}\"> Delete </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <div class=\"information\" style=\"margin-left: 10%\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <h2>Address</h2>\n        <div class=\"card\" style=\"width: 40vw;\">\n        <div class=\"row\">\n            <div class=\"card-body\">\n          <div class=\"col-sm-12 card-text\">\n            <label> {{user.user_suite}} - {{user.user_street}} </label>\n          </div>\n          <div class=\"col-sm-12 card-text\">\n            <label> {{user.user_city}} </label>\n          </div>\n          <div class=\"col-sm-12 card-text\">\n            <label> {{user.user_state}}  </label>\n          </div>\n          <div class=\"col-sm-12 card-text\">\n            <label> {{user.user_country}} </label>\n          </div>\n          <div class=\"col-sm-12 card-text\">\n            <label> {{user.user_zip}} </label>\n          </div>\n          </div>\n        </div>\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <h2>Payment Information</h2>\n        <form fxLayout=\"column\" [formGroup]=\"paymentForm\" (ngSubmit)=\"onFormSubmit()\">\n          <mat-form-field>\n            <input matInput placeholder=\"Enter 16 digit card number\" formControlName=\"cardNumber\" required>\n          </mat-form-field>\n          <div class=\"validation-form\" *ngIf=\"paymentForm.controls.cardNumber.invalid && paymentForm.controls.cardNumber.touched\">\n            <span *ngIf=\"paymentForm.controls.cardNumber.errors.required\">\n              CardNumber is required\n            </span>\n            <span *ngIf=\"paymentForm.controls.cardNumber.errors?.pattern\">\n              CardNumber can ony contain 16 digit number\n            </span>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-3\">\n              <mat-form-field>\n                <input matInput type=\"date\" placeholder=\"expiry date\" formControlName=\"expiryDate\" required>\n              </mat-form-field>\n              <div class=\"validation-form\" *ngIf=\"paymentForm.controls.expiryDate.invalid && paymentForm.controls.expiryDate.touched\">\n                <span *ngIf=\"paymentForm.controls.expiryDate.errors.required\">\n                  Expiry Date is required\n                </span>\n              </div>\n            </div>\n            <div class=\"col-lg-3\" style=\"margin-left: 15%;margin-top:1%\">\n              <mat-form-field>\n                <input matInput placeholder=\"security number\" formControlName=\"cvv\" required>\n              </mat-form-field>\n              <div class=\"validation-form\" *ngIf=\"paymentForm.controls.cvv.invalid && paymentForm.controls.cvv.touched\">\n                <span *ngIf=\"paymentForm.controls.cvv.errors.required\">\n                  Security Number is required\n                </span>\n                <span *ngIf=\"paymentForm.controls.cvv.errors?.pattern\">\n                  Security Number should be 3 digit number\n                </span>\n              </div>\n            </div>\n          </div>\n          <mat-form-field>\n            <input matInput placeholder=\"CardHolder Name\" formControlName=\"name\" required>\n          </mat-form-field>\n          <div class=\"validation-form\" *ngIf=\"paymentForm.controls.name.invalid && paymentForm.controls.name.touched\">\n            <span *ngIf=\"paymentForm.controls.name.errors.required\">\n              Name is required\n            </span>\n            <span *ngIf=\"paymentForm.controls.name.errors.pattern\">\n              Name can ony contain Alphabets\n            </span>\n          </div>\n          <div class=\"float-right\">\n            <button type=\"submit\" id=\"add\" [disabled]=\"!paymentForm.valid\" class=\"btn btn-primary float-right\">Place Order</button>\n          </div>\n        </form>\n\n      </div>\n\n    </div>\n  </div>\n  <hr>\n  <br>\n  <br>\n\n\n\n</body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(restService) {
        this.restService = restService;
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        this.loadCart(1);
        this.loadUserAddress(1);
        this.paymentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            cardNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]{16}$')]),
            expiryDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            cvv: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]{3}$')]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-z A-Z]+$')]),
        });
    };
    CheckoutComponent.prototype.loadCart = function (id) {
        var _this = this;
        this.restService.loadCart(id).subscribe(function (response) {
            _this.listProducts = response;
        });
    };
    CheckoutComponent.prototype.loadUserAddress = function (id) {
        var _this = this;
        this.restService.loadUserDetails(id).subscribe(function (response) {
            _this.user = response;
        });
        this.loadCart(1);
    };
    CheckoutComponent.prototype.delete = function (event) {
        var _this = this;
        this.id = event.target.id;
        this.restService.deleteItemFromCart(this.id).subscribe(function (response) {
            _this.loadCart(1);
        });
    };
    CheckoutComponent.prototype.onFormSubmit = function () {
        var _this = this;
        var obj = {
            'listProducts': this.listProducts,
            'userId': '1'
        };
        if (this.listProducts.length === 0) {
            alert('No product present in Cart');
        }
        else {
            this.restService.orderUpdateFunct(obj).subscribe(function (response) {
                _this.loadCart(1);
                alert('Order placed succesfully');
            });
        }
    };
    CheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/checkout/checkout.component.css")]
        }),
        __metadata("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/datasharing.service.ts":
/*!****************************************!*\
  !*** ./src/app/datasharing.service.ts ***!
  \****************************************/
/*! exports provided: DatasharingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasharingService", function() { return DatasharingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatasharingService = /** @class */ (function () {
    function DatasharingService() {
        this.isUserLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    DatasharingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DatasharingService);
    return DatasharingService;
}());



/***/ }),

/***/ "./src/app/feedback/feedback.component.css":
/*!*************************************************!*\
  !*** ./src/app/feedback/feedback.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n  width: auto;\n  display: flex;\n  flex-direction: column;\n  padding: 0 1.2em;\n  margin: auto;\n  margin-top: 6em;\n  margin-bottom: 18em;\n}\n.container > *{\n  width:80%;\n}\nbutton{\n  margin-top: 4em;\n  background-color: turquoise;\n  margin-left: 3em;\n}\nmat-card {\n  background-color: aliceblue;\n}\nmat-form-field{\n  margin-top: 3em;\n  width: 70%;\n}\n\n\n"

/***/ }),

/***/ "./src/app/feedback/feedback.component.html":
/*!**************************************************!*\
  !*** ./src/app/feedback/feedback.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  feedback works!\n</p>\n\n<div class=\"container\">\n  <mat-card>\n    <mat-card-title>\n      User Feedback\n    </mat-card-title>\n    <mat-card-content>\n\n          <form [formGroup]='feedbackForm' fxLayout =\"column\"  novalidate>\n\n            <mat-form-field>\n              <input matInput placeholder=\"Enter your comments\" formControlName=\"review\"   required>\n              <mat-error *ngIf=\"review.invalid\">\n                  Please enter the comments!\n                </mat-error>\n\n            </mat-form-field><br>\n            <p> User Rating : </p> <br>\n            <ngb-rating style=\"size: 10%;\" [(rate)]=\"currentRate\" formControlName=\"rating\"></ngb-rating>\n\n              <hr>\n              <pre style=\"size: 4em;\">Rating : <b>{{currentRate}}</b></pre>\n\n        </form>\n\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button type=\"submit\" (click)=\"onClickSubmit()\">Submit Feedback</button>\n    </mat-card-actions>\n  </mat-card>\n\n\n  </div>\n"

/***/ }),

/***/ "./src/app/feedback/feedback.component.ts":
/*!************************************************!*\
  !*** ./src/app/feedback/feedback.component.ts ***!
  \************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent(fb, restService, router) {
        this.fb = fb;
        this.restService = restService;
        this.router = router;
        this.currentRate = 1;
    }
    FeedbackComponent.prototype.ngOnInit = function () {
        this.feedbackForm = this.fb.group({
            review: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]],
            rating: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]]
        });
    };
    Object.defineProperty(FeedbackComponent.prototype, "review", {
        get: function () {
            return this.feedbackForm.get('review');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FeedbackComponent.prototype, "rating", {
        get: function () {
            return this.feedbackForm.get('rating');
        },
        enumerable: true,
        configurable: true
    });
    FeedbackComponent.prototype.onClickSubmit = function () {
        // tslint:disable-next-line:prefer-const
        var feedback = {
            product_id: '1',
            user_firstname: 'karthick',
            review: this.feedbackForm.get('review').value,
            rating: this.feedbackForm.get('rating').value
        };
        this.restService.postReviewbyProduct(feedback).subscribe(function (response) {
            alert('User Feedback submitted successful');
        });
        this.router.navigate(['/product'], { preserveQueryParams: true });
    };
    FeedbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feedback',
            template: __webpack_require__(/*! ./feedback.component.html */ "./src/app/feedback/feedback.component.html"),
            styles: [__webpack_require__(/*! ./feedback.component.css */ "./src/app/feedback/feedback.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FeedbackComponent);
    return FeedbackComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\" fxLayout =\"row\" fxLayout.xs =\"column\">\n<div fxFlex =\"25%\">Halifax IT Solutions</div>\n<div fxFlex =\"75%\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, iure.</div>\n</div> -->\n<footer class=\"py-3\" style=\"margin: -1px; background-color: #6799a3\">\n  <div class=\"container\">\n    <p class=\"m-1 text-center text-white\">Copyright &copy; Medplus 2018</p>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header_backgroundimage\n{\n\n    background-repeat: no-repeat;\n    width: 100%;\n    position: absolute;\n    background-position: center;\n    background-size: cover;\n    background-image: url(\"/assets/images/HeaderImage.jpg\");\n    z-index: -1;\n    opacity: 0.4;\n    height:200px;\n    -o-object-fit: fill;\n       object-fit: fill;\n}\n\n#header \n{\n    text-align: center;\n    color: #003366;\n    margin-bottom: 10px;\n}\n\n.container\n{\n    padding: 0 1.2em;\n}\n\n.container h1 {\n    padding-top: 150px;\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <header id=\"header\">\n  <div class=\"header_backgroundimage\" [ngStyle]=\"{'background-image': 'url(assets/images/Carousel3.jpg)'}\"></div>\n  <div class=\"container\">\n  <h1> Med+</h1>\n  </div>\n  </header> -->\n\n\n\n<!--   <nav class=\"navbar navbar-expand-md navbar-dark\" routerLinkActive=\"active\">\n   \n    <a class=\"navbar-brand\" href=\"#\">Med +</a>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <form class=\"form-inline my-2 my-lg-0\" (ngSubmit) = \"doSearch()\" ngNativeValidate>\n        <input class=\"form-control mr-sm-2\" type=\"search\" [(ngModel)]= \"searchterm\" name =\"searchterm\"\n          placeholder=\"Search\"  aria-label=\"Search\">\n        <button class=\"btn btn-outline-dark my-2 my-sm-0\" type=\"submit\">Search</button>\n      </form>\n\n      <ul class=\"navbar-nav float-left\">\n        <li class=\"nav-item active\"><a class=\"nav-link\" href=\"#\">Home\n            <span class=\"sr-only\">(current)</span>\n        </a></li>\n        <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"login\">Login</a>\n        </li>\n        <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"register\">Register</a>\n        </li>\n        <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"orderhistory\">Order History</a>\n        </li>\n        <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"product\">Product</a>\n        </li>\n      </ul>\n    </div>\n  </nav> -->\n\n  <header id=\"header\">\n    <div class=\"header_backgroundimage\"></div>\n    <div class=\"container\">\n    <h1> MedPlus</h1>\n    </div>\n    </header>\n<!--     \n  <div class=\"container\">\n    <nav class=\"navigation\" fxLayout =\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"center center\" fxLayoutAlign.xs=\"center stretch\" fxLayoutGap.xs=\"5px\">\n        <a mat-stroked-button routerLink=\"/home\" fxFlex=\"10\">Home</a>\n        <a *ngIf=\"isUserLoggedIn\" mat-stroked-button routerLink=\"/orderhistory\" fxFlex=\"20\">Dashboard</a>\n        \n        <div fxFlex=\"40\" fxFlexOrder.xs =\"6\">\n        <form (ngSubmit) = \"doSearch()\" class=\"navigationsearch\" ngNativeValidate> \n            <input type=\"text\" [(ngModel)]= \"searchterm\" name =\"searchterm\" placeholder=\"Search Doctors..\" required>\n            <button type=\"submit\"> \n             <mat-icon>search</mat-icon>\n            </button>\n          </form>\n        </div>\n    \n        <a *ngIf=\"!isUserLoggedIn\" mat-stroked-button fxFlex=\"10\" routerLink=\"/register\">Register</a>\n        <a *ngIf=\"!isUserLoggedIn\" mat-stroked-button fxFlex=\"10\" routerLink=\"/login\">Login</a>\n        <a *ngIf=\"isUserLoggedIn\" mat-stroked-button fxFlex=\"10\" routerLink=\"/logout\">Logout</a>\n        \n    </nav>\n    </div> -->\n\n\n\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home-card/home-card.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-card/home-card.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    padding: 0 1.2em;\n    margin: auto;\n    margin-top: 2em;\n    margin-bottom: 2em;\n\n}\n.mat-card-header {\n    justify-content: center;\n  }\n"

/***/ }),

/***/ "./src/app/home-card/home-card.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-card/home-card.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n\n    <div class=\"content-title\">\n        <h2>Exciting Offers</h2>\n    </div>\n\n<div fxLayout=\"row\" fxLayout.lt-md=\"column\"  fxLayoutGap=\"10px\" fxLayoutAlign = \"center stretch\">\n  <div fxLayout.gt-md=\"row\" fxLayout.lt-sm=\"column\"  fxLayoutGap=\"10px\" fxFlex=\"100\"  fxFlex.gt-md=\"50\">\n<mat-card class=\"example-card\" fxFlex.lt-md=\"50\" fxFlex.lt-sm=\"100\">\n    <mat-card-header>\n      <mat-card-title> Paracetamol</mat-card-title>\n      <mat-card-subtitle>Non Prescription Drug</mat-card-subtitle>\n    </mat-card-header>\n    <img mat-card-image src=\"assets/images/Carousel1.jpg\" alt=\"Photo\">\n    <mat-card-content>\n      <p>\n        Lorem ipsum dolor sit amet, \n        consectetur adipisicing elit. Iste sit ullam magnam sint eum amet nisi repellendus doloremque, recusandae voluptate.\n      </p>\n      \n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button>Add To Cart</button>\n    </mat-card-actions>\n  </mat-card>\n  <mat-card class=\"example-card\" fxFlex.lt-md=\"50\" fxFlex.lt-sm=\"100\">\n      <mat-card-header>\n        <mat-card-title>Volini</mat-card-title>\n        <mat-card-subtitle>Muscle Pain</mat-card-subtitle>\n      </mat-card-header>\n      <img mat-card-image src=\"assets/images/Carousel2.jpg\" alt=\"Photo\">\n      <mat-card-content>\n        <p>\n          Lorem ipsum dolor sit amet, \n          consectetur adipisicing elit. Iste sit ullam magnam sint eum amet nisi repellendus doloremque, recusandae voluptate.\n        </p>\n      </mat-card-content>\n      <mat-card-actions>\n          <button mat-button>Add To Cart</button>\n      </mat-card-actions>\n    </mat-card>\n\n  </div>\n\n    <div fxLayout.gt-md=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"10px\" fxFlex=\"100\"   fxFlex.gt-md=\"50\" fxLayoutAlign = \"center stretch\">\n    <mat-card class=\"example-card\" fxFlex.lt-md=\"50\" fxFlex.lt-sm=\"100\">\n        <mat-card-header>\n          <mat-card-title>BreatheEasy</mat-card-title>\n          <mat-card-subtitle>Nasal Spray</mat-card-subtitle>\n        </mat-card-header>\n        <img mat-card-image src=\"assets/images/Carousel2.jpg\" alt=\"Photo\">\n        <mat-card-content>\n          <p>\n            Lorem ipsum dolor sit amet, \n            consectetur adipisicing elit. Iste sit ullam magnam sint eum amet nisi repellendus doloremque, recusandae voluptate.\n          </p>\n        </mat-card-content>\n        <mat-card-actions>\n            <button mat-button>Add To Cart</button>\n        </mat-card-actions>\n      </mat-card>\n      <mat-card class=\"example-card\" fxFlex.lt-md=\"50\" fxFlex.lt-sm=\"100\">\n          <mat-card-header>\n            <mat-card-title>EnergyBar</mat-card-title>\n            <mat-card-subtitle>Chocolate</mat-card-subtitle>\n          </mat-card-header>\n          <img mat-card-image src=\"assets/images/HeaderImage.jpg\" alt=\"Photo\">\n          <mat-card-content>\n            <p>\n              Lorem ipsum dolor sit amet, \n              consectetur adipisicing elit. Iste sit ullam magnam sint eum amet nisi repellendus doloremque, recusandae voluptate.\n            </p>\n           \n          </mat-card-content>\n          <mat-card-actions>\n              <button mat-button>Add To Cart</button>\n          </mat-card-actions>\n        </mat-card>\n        </div>\n        </div>\n\n</div>"

/***/ }),

/***/ "./src/app/home-card/home-card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-card/home-card.component.ts ***!
  \**************************************************/
/*! exports provided: HomeCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCardComponent", function() { return HomeCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeCardComponent = /** @class */ (function () {
    function HomeCardComponent() {
    }
    HomeCardComponent.prototype.ngOnInit = function () {
    };
    HomeCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-card',
            template: __webpack_require__(/*! ./home-card.component.html */ "./src/app/home-card/home-card.component.html"),
            styles: [__webpack_require__(/*! ./home-card.component.css */ "./src/app/home-card/home-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeCardComponent);
    return HomeCardComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .container {\n    padding: 0 1.2em;\n    margin: auto;\n    margin-top: 2em;\n\n}\n\n.content-text {\n    column-count: 3;\n}\n\n\n@media (max-width: 768px) {\n\n    .content-text {\n        column-count: 1;\n    }\n}\n\n@media (min-width: 768px) and (max-width: 960px) {\n\n    .content-text {\n        column-count: 2;\n    }\n} */\n\n/************************************************************/\n\n/*!\n * Bootstrap v4.1.1 (https://getbootstrap.com/)\n * Copyright 2011-2018 The Bootstrap Authors\n * Copyright 2011-2018 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n\n:root{--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#007bff;--secondary:#6c757d;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}\n\n*,::after,::before{box-sizing:border-box}\n\nhtml{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:transparent}\n\n@-ms-viewport{width:device-width}\n\narticle,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}\n\nbody{margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}\n\n[tabindex=\"-1\"]:focus{outline:0!important}\n\nhr{box-sizing:content-box;height:0;overflow:visible}\n\nh1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}\n\np{margin-top:0;margin-bottom:1rem}\n\nabbr[data-original-title],abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0}\n\naddress{margin-bottom:1rem;font-style:normal;line-height:inherit}\n\ndl,ol,ul{margin-top:0;margin-bottom:1rem}\n\nol ol,ol ul,ul ol,ul ul{margin-bottom:0}\n\ndt{font-weight:700}\n\ndd{margin-bottom:.5rem;margin-left:0}\n\nblockquote{margin:0 0 1rem}\n\ndfn{font-style:italic}\n\nb,strong{font-weight:bolder}\n\nsmall{font-size:80%}\n\nsub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}\n\nsub{bottom:-.25em}\n\nsup{top:-.5em}\n\na{color:#007bff;text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects}\n\na:hover{color:#0056b3;text-decoration:underline}\n\na:not([href]):not([tabindex]){color:inherit;text-decoration:none}\n\na:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}\n\na:not([href]):not([tabindex]):focus{outline:0}\n\ncode,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:1em}\n\npre{margin-top:0;margin-bottom:1rem;overflow:auto;-ms-overflow-style:scrollbar}\n\nfigure{margin:0 0 1rem}\n\nimg{vertical-align:middle;border-style:none}\n\nsvg:not(:root){overflow:hidden}\n\ntable{border-collapse:collapse}\n\ncaption{padding-top:.75rem;padding-bottom:.75rem;color:#6c757d;text-align:left;caption-side:bottom}\n\nth{text-align:inherit}\n\nlabel{display:inline-block;margin-bottom:.5rem}\n\nbutton{border-radius:0}\n\nbutton:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}\n\nbutton,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}\n\nbutton,input{overflow:visible}\n\nbutton,select{text-transform:none}\n\n[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}\n\n[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}\n\ninput[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}\n\ninput[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}\n\ntextarea{overflow:auto;resize:vertical}\n\nfieldset{min-width:0;padding:0;margin:0;border:0}\n\nlegend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}\n\nprogress{vertical-align:baseline}\n\n[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}\n\n[type=search]{outline-offset:-2px;-webkit-appearance:none}\n\n[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}\n\n::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}\n\noutput{display:inline-block}\n\nsummary{display:list-item;cursor:pointer}\n\ntemplate{display:none}\n\n[hidden]{display:none!important}\n\n.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;font-family:inherit;font-weight:500;line-height:1.2;color:inherit}\n\n.h1,h1{font-size:2.5rem}\n\n.h2,h2{font-size:2rem}\n\n.h3,h3{font-size:1.75rem}\n\n.h4,h4{font-size:1.5rem}\n\n.h5,h5{font-size:1.25rem}\n\n.h6,h6{font-size:1rem}\n\n.lead{font-size:1.25rem;font-weight:300}\n\n.display-1{font-size:6rem;font-weight:300;line-height:1.2}\n\n.display-2{font-size:5.5rem;font-weight:300;line-height:1.2}\n\n.display-3{font-size:4.5rem;font-weight:300;line-height:1.2}\n\n.display-4{font-size:3.5rem;font-weight:300;line-height:1.2}\n\nhr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,.1)}\n\n.small,small{font-size:80%;font-weight:400}\n\n.mark,mark{padding:.2em;background-color:#fcf8e3}\n\n.list-unstyled{padding-left:0;list-style:none}\n\n.list-inline{padding-left:0;list-style:none}\n\n.list-inline-item{display:inline-block}\n\n.list-inline-item:not(:last-child){margin-right:.5rem}\n\n.initialism{font-size:90%;text-transform:uppercase}\n\n.blockquote{margin-bottom:1rem;font-size:1.25rem}\n\n.blockquote-footer{display:block;font-size:80%;color:#6c757d}\n\n.blockquote-footer::before{content:\"\\2014 \\00A0\"}\n\n.img-fluid{max-width:100%;height:auto}\n\n.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem;max-width:100%;height:auto}\n\n.figure{display:inline-block}\n\n.figure-img{margin-bottom:.5rem;line-height:1}\n\n.figure-caption{font-size:90%;color:#6c757d}\n\ncode{font-size:87.5%;color:#e83e8c;word-break:break-word}\n\na>code{color:inherit}\n\nkbd{padding:.2rem .4rem;font-size:87.5%;color:#fff;background-color:#212529;border-radius:.2rem}\n\nkbd kbd{padding:0;font-size:100%;font-weight:700}\n\npre{display:block;font-size:87.5%;color:#212529}\n\npre code{font-size:inherit;color:inherit;word-break:normal}\n\n.pre-scrollable{max-height:340px;overflow-y:scroll}\n\n.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}\n\n@media (min-width:576px){.container{max-width:540px}}\n\n@media (min-width:768px){.container{max-width:720px}}\n\n@media (min-width:992px){.container{max-width:960px}}\n\n@media (min-width:1200px){.container{max-width:1140px}}\n\n.container-fluid{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}\n\n.row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}\n\n.no-gutters{margin-right:0;margin-left:0}\n\n.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}\n\n.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-auto,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-auto,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-auto,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-auto{position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px}\n\n.col{flex-basis:0;flex-grow:1;max-width:100%}\n\n.col-auto{flex:0 0 auto;width:auto;max-width:none}\n\n.col-1{flex:0 0 8.333333%;max-width:8.333333%}\n\n.col-2{flex:0 0 16.666667%;max-width:16.666667%}\n\n.col-3{flex:0 0 25%;max-width:25%}\n\n.col-4{flex:0 0 33.333333%;max-width:33.333333%}\n\n.col-5{flex:0 0 41.666667%;max-width:41.666667%}\n\n.col-6{flex:0 0 50%;max-width:50%}\n\n.col-7{flex:0 0 58.333333%;max-width:58.333333%}\n\n.col-8{flex:0 0 66.666667%;max-width:66.666667%}\n\n.col-9{flex:0 0 75%;max-width:75%}\n\n.col-10{flex:0 0 83.333333%;max-width:83.333333%}\n\n.col-11{flex:0 0 91.666667%;max-width:91.666667%}\n\n.col-12{flex:0 0 100%;max-width:100%}\n\n.order-first{order:-1}\n\n.order-last{order:13}\n\n.order-0{order:0}\n\n.order-1{order:1}\n\n.order-2{order:2}\n\n.order-3{order:3}\n\n.order-4{order:4}\n\n.order-5{order:5}\n\n.order-6{order:6}\n\n.order-7{order:7}\n\n.order-8{order:8}\n\n.order-9{order:9}\n\n.order-10{order:10}\n\n.order-11{order:11}\n\n.order-12{order:12}\n\n.offset-1{margin-left:8.333333%}\n\n.offset-2{margin-left:16.666667%}\n\n.offset-3{margin-left:25%}\n\n.offset-4{margin-left:33.333333%}\n\n.offset-5{margin-left:41.666667%}\n\n.offset-6{margin-left:50%}\n\n.offset-7{margin-left:58.333333%}\n\n.offset-8{margin-left:66.666667%}\n\n.offset-9{margin-left:75%}\n\n.offset-10{margin-left:83.333333%}\n\n.offset-11{margin-left:91.666667%}\n\n@media (min-width:576px){.col-sm{flex-basis:0;flex-grow:1;max-width:100%}.col-sm-auto{flex:0 0 auto;width:auto;max-width:none}.col-sm-1{flex:0 0 8.333333%;max-width:8.333333%}.col-sm-2{flex:0 0 16.666667%;max-width:16.666667%}.col-sm-3{flex:0 0 25%;max-width:25%}.col-sm-4{flex:0 0 33.333333%;max-width:33.333333%}.col-sm-5{flex:0 0 41.666667%;max-width:41.666667%}.col-sm-6{flex:0 0 50%;max-width:50%}.col-sm-7{flex:0 0 58.333333%;max-width:58.333333%}.col-sm-8{flex:0 0 66.666667%;max-width:66.666667%}.col-sm-9{flex:0 0 75%;max-width:75%}.col-sm-10{flex:0 0 83.333333%;max-width:83.333333%}.col-sm-11{flex:0 0 91.666667%;max-width:91.666667%}.col-sm-12{flex:0 0 100%;max-width:100%}.order-sm-first{order:-1}.order-sm-last{order:13}.order-sm-0{order:0}.order-sm-1{order:1}.order-sm-2{order:2}.order-sm-3{order:3}.order-sm-4{order:4}.order-sm-5{order:5}.order-sm-6{order:6}.order-sm-7{order:7}.order-sm-8{order:8}.order-sm-9{order:9}.order-sm-10{order:10}.order-sm-11{order:11}.order-sm-12{order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.333333%}.offset-sm-2{margin-left:16.666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.333333%}.offset-sm-5{margin-left:41.666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.333333%}.offset-sm-8{margin-left:66.666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.333333%}.offset-sm-11{margin-left:91.666667%}}\n\n@media (min-width:768px){.col-md{flex-basis:0;flex-grow:1;max-width:100%}.col-md-auto{flex:0 0 auto;width:auto;max-width:none}.col-md-1{flex:0 0 8.333333%;max-width:8.333333%}.col-md-2{flex:0 0 16.666667%;max-width:16.666667%}.col-md-3{flex:0 0 25%;max-width:25%}.col-md-4{flex:0 0 33.333333%;max-width:33.333333%}.col-md-5{flex:0 0 41.666667%;max-width:41.666667%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.333333%;max-width:58.333333%}.col-md-8{flex:0 0 66.666667%;max-width:66.666667%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-10{flex:0 0 83.333333%;max-width:83.333333%}.col-md-11{flex:0 0 91.666667%;max-width:91.666667%}.col-md-12{flex:0 0 100%;max-width:100%}.order-md-first{order:-1}.order-md-last{order:13}.order-md-0{order:0}.order-md-1{order:1}.order-md-2{order:2}.order-md-3{order:3}.order-md-4{order:4}.order-md-5{order:5}.order-md-6{order:6}.order-md-7{order:7}.order-md-8{order:8}.order-md-9{order:9}.order-md-10{order:10}.order-md-11{order:11}.order-md-12{order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.333333%}.offset-md-2{margin-left:16.666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.333333%}.offset-md-5{margin-left:41.666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.333333%}.offset-md-8{margin-left:66.666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.333333%}.offset-md-11{margin-left:91.666667%}}\n\n@media (min-width:992px){.col-lg{flex-basis:0;flex-grow:1;max-width:100%}.col-lg-auto{flex:0 0 auto;width:auto;max-width:none}.col-lg-1{flex:0 0 8.333333%;max-width:8.333333%}.col-lg-2{flex:0 0 16.666667%;max-width:16.666667%}.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-4{flex:0 0 33.333333%;max-width:33.333333%}.col-lg-5{flex:0 0 41.666667%;max-width:41.666667%}.col-lg-6{flex:0 0 50%;max-width:50%}.col-lg-7{flex:0 0 58.333333%;max-width:58.333333%}.col-lg-8{flex:0 0 66.666667%;max-width:66.666667%}.col-lg-9{flex:0 0 75%;max-width:75%}.col-lg-10{flex:0 0 83.333333%;max-width:83.333333%}.col-lg-11{flex:0 0 91.666667%;max-width:91.666667%}.col-lg-12{flex:0 0 100%;max-width:100%}.order-lg-first{order:-1}.order-lg-last{order:13}.order-lg-0{order:0}.order-lg-1{order:1}.order-lg-2{order:2}.order-lg-3{order:3}.order-lg-4{order:4}.order-lg-5{order:5}.order-lg-6{order:6}.order-lg-7{order:7}.order-lg-8{order:8}.order-lg-9{order:9}.order-lg-10{order:10}.order-lg-11{order:11}.order-lg-12{order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.333333%}.offset-lg-2{margin-left:16.666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.333333%}.offset-lg-5{margin-left:41.666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.333333%}.offset-lg-8{margin-left:66.666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.333333%}.offset-lg-11{margin-left:91.666667%}}\n\n@media (min-width:1200px){.col-xl{flex-basis:0;flex-grow:1;max-width:100%}.col-xl-auto{flex:0 0 auto;width:auto;max-width:none}.col-xl-1{flex:0 0 8.333333%;max-width:8.333333%}.col-xl-2{flex:0 0 16.666667%;max-width:16.666667%}.col-xl-3{flex:0 0 25%;max-width:25%}.col-xl-4{flex:0 0 33.333333%;max-width:33.333333%}.col-xl-5{flex:0 0 41.666667%;max-width:41.666667%}.col-xl-6{flex:0 0 50%;max-width:50%}.col-xl-7{flex:0 0 58.333333%;max-width:58.333333%}.col-xl-8{flex:0 0 66.666667%;max-width:66.666667%}.col-xl-9{flex:0 0 75%;max-width:75%}.col-xl-10{flex:0 0 83.333333%;max-width:83.333333%}.col-xl-11{flex:0 0 91.666667%;max-width:91.666667%}.col-xl-12{flex:0 0 100%;max-width:100%}.order-xl-first{order:-1}.order-xl-last{order:13}.order-xl-0{order:0}.order-xl-1{order:1}.order-xl-2{order:2}.order-xl-3{order:3}.order-xl-4{order:4}.order-xl-5{order:5}.order-xl-6{order:6}.order-xl-7{order:7}.order-xl-8{order:8}.order-xl-9{order:9}.order-xl-10{order:10}.order-xl-11{order:11}.order-xl-12{order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.333333%}.offset-xl-2{margin-left:16.666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.333333%}.offset-xl-5{margin-left:41.666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.333333%}.offset-xl-8{margin-left:66.666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.333333%}.offset-xl-11{margin-left:91.666667%}}\n\n.table{width:100%;max-width:100%;margin-bottom:1rem;background-color:transparent}\n\n.table td,.table th{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}\n\n.table thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6}\n\n.table tbody+tbody{border-top:2px solid #dee2e6}\n\n.table .table{background-color:#fff}\n\n.table-sm td,.table-sm th{padding:.3rem}\n\n.table-bordered{border:1px solid #dee2e6}\n\n.table-bordered td,.table-bordered th{border:1px solid #dee2e6}\n\n.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}\n\n.table-borderless tbody+tbody,.table-borderless td,.table-borderless th,.table-borderless thead th{border:0}\n\n.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}\n\n.table-hover tbody tr:hover{background-color:rgba(0,0,0,.075)}\n\n.table-primary,.table-primary>td,.table-primary>th{background-color:#b8daff}\n\n.table-hover .table-primary:hover{background-color:#9fcdff}\n\n.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#9fcdff}\n\n.table-secondary,.table-secondary>td,.table-secondary>th{background-color:#d6d8db}\n\n.table-hover .table-secondary:hover{background-color:#c8cbcf}\n\n.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#c8cbcf}\n\n.table-success,.table-success>td,.table-success>th{background-color:#c3e6cb}\n\n.table-hover .table-success:hover{background-color:#b1dfbb}\n\n.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#b1dfbb}\n\n.table-info,.table-info>td,.table-info>th{background-color:#bee5eb}\n\n.table-hover .table-info:hover{background-color:#abdde5}\n\n.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#abdde5}\n\n.table-warning,.table-warning>td,.table-warning>th{background-color:#ffeeba}\n\n.table-hover .table-warning:hover{background-color:#ffe8a1}\n\n.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#ffe8a1}\n\n.table-danger,.table-danger>td,.table-danger>th{background-color:#f5c6cb}\n\n.table-hover .table-danger:hover{background-color:#f1b0b7}\n\n.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#f1b0b7}\n\n.table-light,.table-light>td,.table-light>th{background-color:#fdfdfe}\n\n.table-hover .table-light:hover{background-color:#ececf6}\n\n.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#ececf6}\n\n.table-dark,.table-dark>td,.table-dark>th{background-color:#c6c8ca}\n\n.table-hover .table-dark:hover{background-color:#b9bbbe}\n\n.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b9bbbe}\n\n.table-active,.table-active>td,.table-active>th{background-color:rgba(0,0,0,.075)}\n\n.table-hover .table-active:hover{background-color:rgba(0,0,0,.075)}\n\n.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,.075)}\n\n.table .thead-dark th{color:#fff;background-color:#212529;border-color:#32383e}\n\n.table .thead-light th{color:#495057;background-color:#e9ecef;border-color:#dee2e6}\n\n.table-dark{color:#fff;background-color:#212529}\n\n.table-dark td,.table-dark th,.table-dark thead th{border-color:#32383e}\n\n.table-dark.table-bordered{border:0}\n\n.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:rgba(255,255,255,.05)}\n\n.table-dark.table-hover tbody tr:hover{background-color:rgba(255,255,255,.075)}\n\n@media (max-width:575.98px){.table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-sm>.table-bordered{border:0}}\n\n@media (max-width:767.98px){.table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-md>.table-bordered{border:0}}\n\n@media (max-width:991.98px){.table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-lg>.table-bordered{border:0}}\n\n@media (max-width:1199.98px){.table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-xl>.table-bordered{border:0}}\n\n.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}\n\n.table-responsive>.table-bordered{border:0}\n\n.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}\n\n@media screen and (prefers-reduced-motion:reduce){.form-control{transition:none}}\n\n.form-control::-ms-expand{background-color:transparent;border:0}\n\n.form-control:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}\n\n.form-control::-webkit-input-placeholder{color:#6c757d;opacity:1}\n\n.form-control:-ms-input-placeholder{color:#6c757d;opacity:1}\n\n.form-control::-ms-input-placeholder{color:#6c757d;opacity:1}\n\n.form-control::placeholder{color:#6c757d;opacity:1}\n\n.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}\n\nselect.form-control:not([size]):not([multiple]){height:calc(2.25rem + 2px)}\n\nselect.form-control:focus::-ms-value{color:#495057;background-color:#fff}\n\n.form-control-file,.form-control-range{display:block;width:100%}\n\n.col-form-label{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}\n\n.col-form-label-lg{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem;line-height:1.5}\n\n.col-form-label-sm{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem;line-height:1.5}\n\n.form-control-plaintext{display:block;width:100%;padding-top:.375rem;padding-bottom:.375rem;margin-bottom:0;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0}\n\n.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm,.input-group-lg>.form-control-plaintext.form-control,.input-group-lg>.input-group-append>.form-control-plaintext.btn,.input-group-lg>.input-group-append>.form-control-plaintext.input-group-text,.input-group-lg>.input-group-prepend>.form-control-plaintext.btn,.input-group-lg>.input-group-prepend>.form-control-plaintext.input-group-text,.input-group-sm>.form-control-plaintext.form-control,.input-group-sm>.input-group-append>.form-control-plaintext.btn,.input-group-sm>.input-group-append>.form-control-plaintext.input-group-text,.input-group-sm>.input-group-prepend>.form-control-plaintext.btn,.input-group-sm>.input-group-prepend>.form-control-plaintext.input-group-text{padding-right:0;padding-left:0}\n\n.form-control-sm,.input-group-sm>.form-control,.input-group-sm>.input-group-append>.btn,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-prepend>.input-group-text{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}\n\n.input-group-sm>.input-group-append>select.btn:not([size]):not([multiple]),.input-group-sm>.input-group-append>select.input-group-text:not([size]):not([multiple]),.input-group-sm>.input-group-prepend>select.btn:not([size]):not([multiple]),.input-group-sm>.input-group-prepend>select.input-group-text:not([size]):not([multiple]),.input-group-sm>select.form-control:not([size]):not([multiple]),select.form-control-sm:not([size]):not([multiple]){height:calc(1.8125rem + 2px)}\n\n.form-control-lg,.input-group-lg>.form-control,.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-prepend>.input-group-text{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}\n\n.input-group-lg>.input-group-append>select.btn:not([size]):not([multiple]),.input-group-lg>.input-group-append>select.input-group-text:not([size]):not([multiple]),.input-group-lg>.input-group-prepend>select.btn:not([size]):not([multiple]),.input-group-lg>.input-group-prepend>select.input-group-text:not([size]):not([multiple]),.input-group-lg>select.form-control:not([size]):not([multiple]),select.form-control-lg:not([size]):not([multiple]){height:calc(2.875rem + 2px)}\n\n.form-group{margin-bottom:1rem}\n\n.form-text{display:block;margin-top:.25rem}\n\n.form-row{display:flex;flex-wrap:wrap;margin-right:-5px;margin-left:-5px}\n\n.form-row>.col,.form-row>[class*=col-]{padding-right:5px;padding-left:5px}\n\n.form-check{position:relative;display:block;padding-left:1.25rem}\n\n.form-check-input{position:absolute;margin-top:.3rem;margin-left:-1.25rem}\n\n.form-check-input:disabled~.form-check-label{color:#6c757d}\n\n.form-check-label{margin-bottom:0}\n\n.form-check-inline{display:inline-flex;align-items:center;padding-left:0;margin-right:.75rem}\n\n.form-check-inline .form-check-input{position:static;margin-top:0;margin-right:.3125rem;margin-left:0}\n\n.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#28a745}\n\n.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.5rem;margin-top:.1rem;font-size:.875rem;line-height:1;color:#fff;background-color:rgba(40,167,69,.8);border-radius:.2rem}\n\n.custom-select.is-valid,.form-control.is-valid,.was-validated .custom-select:valid,.was-validated .form-control:valid{border-color:#28a745}\n\n.custom-select.is-valid:focus,.form-control.is-valid:focus,.was-validated .custom-select:valid:focus,.was-validated .form-control:valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}\n\n.custom-select.is-valid~.valid-feedback,.custom-select.is-valid~.valid-tooltip,.form-control.is-valid~.valid-feedback,.form-control.is-valid~.valid-tooltip,.was-validated .custom-select:valid~.valid-feedback,.was-validated .custom-select:valid~.valid-tooltip,.was-validated .form-control:valid~.valid-feedback,.was-validated .form-control:valid~.valid-tooltip{display:block}\n\n.form-control-file.is-valid~.valid-feedback,.form-control-file.is-valid~.valid-tooltip,.was-validated .form-control-file:valid~.valid-feedback,.was-validated .form-control-file:valid~.valid-tooltip{display:block}\n\n.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:#28a745}\n\n.form-check-input.is-valid~.valid-feedback,.form-check-input.is-valid~.valid-tooltip,.was-validated .form-check-input:valid~.valid-feedback,.was-validated .form-check-input:valid~.valid-tooltip{display:block}\n\n.custom-control-input.is-valid~.custom-control-label,.was-validated .custom-control-input:valid~.custom-control-label{color:#28a745}\n\n.custom-control-input.is-valid~.custom-control-label::before,.was-validated .custom-control-input:valid~.custom-control-label::before{background-color:#71dd8a}\n\n.custom-control-input.is-valid~.valid-feedback,.custom-control-input.is-valid~.valid-tooltip,.was-validated .custom-control-input:valid~.valid-feedback,.was-validated .custom-control-input:valid~.valid-tooltip{display:block}\n\n.custom-control-input.is-valid:checked~.custom-control-label::before,.was-validated .custom-control-input:valid:checked~.custom-control-label::before{background-color:#34ce57}\n\n.custom-control-input.is-valid:focus~.custom-control-label::before,.was-validated .custom-control-input:valid:focus~.custom-control-label::before{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(40,167,69,.25)}\n\n.custom-file-input.is-valid~.custom-file-label,.was-validated .custom-file-input:valid~.custom-file-label{border-color:#28a745}\n\n.custom-file-input.is-valid~.custom-file-label::before,.was-validated .custom-file-input:valid~.custom-file-label::before{border-color:inherit}\n\n.custom-file-input.is-valid~.valid-feedback,.custom-file-input.is-valid~.valid-tooltip,.was-validated .custom-file-input:valid~.valid-feedback,.was-validated .custom-file-input:valid~.valid-tooltip{display:block}\n\n.custom-file-input.is-valid:focus~.custom-file-label,.was-validated .custom-file-input:valid:focus~.custom-file-label{box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}\n\n.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#dc3545}\n\n.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.5rem;margin-top:.1rem;font-size:.875rem;line-height:1;color:#fff;background-color:rgba(220,53,69,.8);border-radius:.2rem}\n\n.custom-select.is-invalid,.form-control.is-invalid,.was-validated .custom-select:invalid,.was-validated .form-control:invalid{border-color:#dc3545}\n\n.custom-select.is-invalid:focus,.form-control.is-invalid:focus,.was-validated .custom-select:invalid:focus,.was-validated .form-control:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}\n\n.custom-select.is-invalid~.invalid-feedback,.custom-select.is-invalid~.invalid-tooltip,.form-control.is-invalid~.invalid-feedback,.form-control.is-invalid~.invalid-tooltip,.was-validated .custom-select:invalid~.invalid-feedback,.was-validated .custom-select:invalid~.invalid-tooltip,.was-validated .form-control:invalid~.invalid-feedback,.was-validated .form-control:invalid~.invalid-tooltip{display:block}\n\n.form-control-file.is-invalid~.invalid-feedback,.form-control-file.is-invalid~.invalid-tooltip,.was-validated .form-control-file:invalid~.invalid-feedback,.was-validated .form-control-file:invalid~.invalid-tooltip{display:block}\n\n.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:#dc3545}\n\n.form-check-input.is-invalid~.invalid-feedback,.form-check-input.is-invalid~.invalid-tooltip,.was-validated .form-check-input:invalid~.invalid-feedback,.was-validated .form-check-input:invalid~.invalid-tooltip{display:block}\n\n.custom-control-input.is-invalid~.custom-control-label,.was-validated .custom-control-input:invalid~.custom-control-label{color:#dc3545}\n\n.custom-control-input.is-invalid~.custom-control-label::before,.was-validated .custom-control-input:invalid~.custom-control-label::before{background-color:#efa2a9}\n\n.custom-control-input.is-invalid~.invalid-feedback,.custom-control-input.is-invalid~.invalid-tooltip,.was-validated .custom-control-input:invalid~.invalid-feedback,.was-validated .custom-control-input:invalid~.invalid-tooltip{display:block}\n\n.custom-control-input.is-invalid:checked~.custom-control-label::before,.was-validated .custom-control-input:invalid:checked~.custom-control-label::before{background-color:#e4606d}\n\n.custom-control-input.is-invalid:focus~.custom-control-label::before,.was-validated .custom-control-input:invalid:focus~.custom-control-label::before{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(220,53,69,.25)}\n\n.custom-file-input.is-invalid~.custom-file-label,.was-validated .custom-file-input:invalid~.custom-file-label{border-color:#dc3545}\n\n.custom-file-input.is-invalid~.custom-file-label::before,.was-validated .custom-file-input:invalid~.custom-file-label::before{border-color:inherit}\n\n.custom-file-input.is-invalid~.invalid-feedback,.custom-file-input.is-invalid~.invalid-tooltip,.was-validated .custom-file-input:invalid~.invalid-feedback,.was-validated .custom-file-input:invalid~.invalid-tooltip{display:block}\n\n.custom-file-input.is-invalid:focus~.custom-file-label,.was-validated .custom-file-input:invalid:focus~.custom-file-label{box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}\n\n.form-inline{display:flex;flex-flow:row wrap;align-items:center}\n\n.form-inline .form-check{width:100%}\n\n@media (min-width:576px){.form-inline label{display:flex;align-items:center;justify-content:center;margin-bottom:0}.form-inline .form-group{display:flex;flex:0 0 auto;flex-flow:row wrap;align-items:center;margin-bottom:0}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-plaintext{display:inline-block}.form-inline .custom-select,.form-inline .input-group{width:auto}.form-inline .form-check{display:flex;align-items:center;justify-content:center;width:auto;padding-left:0}.form-inline .form-check-input{position:relative;margin-top:0;margin-right:.25rem;margin-left:0}.form-inline .custom-control{align-items:center;justify-content:center}.form-inline .custom-control-label{margin-bottom:0}}\n\n.btn{display:inline-block;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}\n\n@media screen and (prefers-reduced-motion:reduce){.btn{transition:none}}\n\n.btn:focus,.btn:hover{text-decoration:none}\n\n.btn.focus,.btn:focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}\n\n.btn.disabled,.btn:disabled{opacity:.65}\n\n.btn:not(:disabled):not(.disabled){cursor:pointer}\n\n.btn:not(:disabled):not(.disabled).active,.btn:not(:disabled):not(.disabled):active{background-image:none}\n\na.btn.disabled,fieldset:disabled a.btn{pointer-events:none}\n\n.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff}\n\n.btn-primary:hover{color:#fff;background-color:#0069d9;border-color:#0062cc}\n\n.btn-primary.focus,.btn-primary:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}\n\n.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#007bff;border-color:#007bff}\n\n.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0062cc;border-color:#005cbf}\n\n.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}\n\n.btn-secondary{color:#fff;background-color:#6c757d;border-color:#6c757d}\n\n.btn-secondary:hover{color:#fff;background-color:#5a6268;border-color:#545b62}\n\n.btn-secondary.focus,.btn-secondary:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}\n\n.btn-secondary.disabled,.btn-secondary:disabled{color:#fff;background-color:#6c757d;border-color:#6c757d}\n\n.btn-secondary:not(:disabled):not(.disabled).active,.btn-secondary:not(:disabled):not(.disabled):active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#545b62;border-color:#4e555b}\n\n.btn-secondary:not(:disabled):not(.disabled).active:focus,.btn-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}\n\n.btn-success{color:#fff;background-color:#28a745;border-color:#28a745}\n\n.btn-success:hover{color:#fff;background-color:#218838;border-color:#1e7e34}\n\n.btn-success.focus,.btn-success:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}\n\n.btn-success.disabled,.btn-success:disabled{color:#fff;background-color:#28a745;border-color:#28a745}\n\n.btn-success:not(:disabled):not(.disabled).active,.btn-success:not(:disabled):not(.disabled):active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#1e7e34;border-color:#1c7430}\n\n.btn-success:not(:disabled):not(.disabled).active:focus,.btn-success:not(:disabled):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}\n\n.btn-info{color:#fff;background-color:#17a2b8;border-color:#17a2b8}\n\n.btn-info:hover{color:#fff;background-color:#138496;border-color:#117a8b}\n\n.btn-info.focus,.btn-info:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}\n\n.btn-info.disabled,.btn-info:disabled{color:#fff;background-color:#17a2b8;border-color:#17a2b8}\n\n.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#117a8b;border-color:#10707f}\n\n.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}\n\n.btn-warning{color:#212529;background-color:#ffc107;border-color:#ffc107}\n\n.btn-warning:hover{color:#212529;background-color:#e0a800;border-color:#d39e00}\n\n.btn-warning.focus,.btn-warning:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}\n\n.btn-warning.disabled,.btn-warning:disabled{color:#212529;background-color:#ffc107;border-color:#ffc107}\n\n.btn-warning:not(:disabled):not(.disabled).active,.btn-warning:not(:disabled):not(.disabled):active,.show>.btn-warning.dropdown-toggle{color:#212529;background-color:#d39e00;border-color:#c69500}\n\n.btn-warning:not(:disabled):not(.disabled).active:focus,.btn-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}\n\n.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}\n\n.btn-danger:hover{color:#fff;background-color:#c82333;border-color:#bd2130}\n\n.btn-danger.focus,.btn-danger:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}\n\n.btn-danger.disabled,.btn-danger:disabled{color:#fff;background-color:#dc3545;border-color:#dc3545}\n\n.btn-danger:not(:disabled):not(.disabled).active,.btn-danger:not(:disabled):not(.disabled):active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#bd2130;border-color:#b21f2d}\n\n.btn-danger:not(:disabled):not(.disabled).active:focus,.btn-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}\n\n.btn-light{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}\n\n.btn-light:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5}\n\n.btn-light.focus,.btn-light:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}\n\n.btn-light.disabled,.btn-light:disabled{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}\n\n.btn-light:not(:disabled):not(.disabled).active,.btn-light:not(:disabled):not(.disabled):active,.show>.btn-light.dropdown-toggle{color:#212529;background-color:#dae0e5;border-color:#d3d9df}\n\n.btn-light:not(:disabled):not(.disabled).active:focus,.btn-light:not(:disabled):not(.disabled):active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}\n\n.btn-dark{color:#fff;background-color:#343a40;border-color:#343a40}\n\n.btn-dark:hover{color:#fff;background-color:#23272b;border-color:#1d2124}\n\n.btn-dark.focus,.btn-dark:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}\n\n.btn-dark.disabled,.btn-dark:disabled{color:#fff;background-color:#343a40;border-color:#343a40}\n\n.btn-dark:not(:disabled):not(.disabled).active,.btn-dark:not(:disabled):not(.disabled):active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1d2124;border-color:#171a1d}\n\n.btn-dark:not(:disabled):not(.disabled).active:focus,.btn-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}\n\n.btn-outline-primary{color:#007bff;background-color:transparent;background-image:none;border-color:#007bff}\n\n.btn-outline-primary:hover{color:#fff;background-color:#007bff;border-color:#007bff}\n\n.btn-outline-primary.focus,.btn-outline-primary:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}\n\n.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#007bff;background-color:transparent}\n\n.btn-outline-primary:not(:disabled):not(.disabled).active,.btn-outline-primary:not(:disabled):not(.disabled):active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#007bff;border-color:#007bff}\n\n.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}\n\n.btn-outline-secondary{color:#6c757d;background-color:transparent;background-image:none;border-color:#6c757d}\n\n.btn-outline-secondary:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}\n\n.btn-outline-secondary.focus,.btn-outline-secondary:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}\n\n.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#6c757d;background-color:transparent}\n\n.btn-outline-secondary:not(:disabled):not(.disabled).active,.btn-outline-secondary:not(:disabled):not(.disabled):active,.show>.btn-outline-secondary.dropdown-toggle{color:#fff;background-color:#6c757d;border-color:#6c757d}\n\n.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}\n\n.btn-outline-success{color:#28a745;background-color:transparent;background-image:none;border-color:#28a745}\n\n.btn-outline-success:hover{color:#fff;background-color:#28a745;border-color:#28a745}\n\n.btn-outline-success.focus,.btn-outline-success:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}\n\n.btn-outline-success.disabled,.btn-outline-success:disabled{color:#28a745;background-color:transparent}\n\n.btn-outline-success:not(:disabled):not(.disabled).active,.btn-outline-success:not(:disabled):not(.disabled):active,.show>.btn-outline-success.dropdown-toggle{color:#fff;background-color:#28a745;border-color:#28a745}\n\n.btn-outline-success:not(:disabled):not(.disabled).active:focus,.btn-outline-success:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}\n\n.btn-outline-info{color:#17a2b8;background-color:transparent;background-image:none;border-color:#17a2b8}\n\n.btn-outline-info:hover{color:#fff;background-color:#17a2b8;border-color:#17a2b8}\n\n.btn-outline-info.focus,.btn-outline-info:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}\n\n.btn-outline-info.disabled,.btn-outline-info:disabled{color:#17a2b8;background-color:transparent}\n\n.btn-outline-info:not(:disabled):not(.disabled).active,.btn-outline-info:not(:disabled):not(.disabled):active,.show>.btn-outline-info.dropdown-toggle{color:#fff;background-color:#17a2b8;border-color:#17a2b8}\n\n.btn-outline-info:not(:disabled):not(.disabled).active:focus,.btn-outline-info:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}\n\n.btn-outline-warning{color:#ffc107;background-color:transparent;background-image:none;border-color:#ffc107}\n\n.btn-outline-warning:hover{color:#212529;background-color:#ffc107;border-color:#ffc107}\n\n.btn-outline-warning.focus,.btn-outline-warning:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}\n\n.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#ffc107;background-color:transparent}\n\n.btn-outline-warning:not(:disabled):not(.disabled).active,.btn-outline-warning:not(:disabled):not(.disabled):active,.show>.btn-outline-warning.dropdown-toggle{color:#212529;background-color:#ffc107;border-color:#ffc107}\n\n.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}\n\n.btn-outline-danger{color:#dc3545;background-color:transparent;background-image:none;border-color:#dc3545}\n\n.btn-outline-danger:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}\n\n.btn-outline-danger.focus,.btn-outline-danger:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}\n\n.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#dc3545;background-color:transparent}\n\n.btn-outline-danger:not(:disabled):not(.disabled).active,.btn-outline-danger:not(:disabled):not(.disabled):active,.show>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#dc3545;border-color:#dc3545}\n\n.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}\n\n.btn-outline-light{color:#f8f9fa;background-color:transparent;background-image:none;border-color:#f8f9fa}\n\n.btn-outline-light:hover{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}\n\n.btn-outline-light.focus,.btn-outline-light:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}\n\n.btn-outline-light.disabled,.btn-outline-light:disabled{color:#f8f9fa;background-color:transparent}\n\n.btn-outline-light:not(:disabled):not(.disabled).active,.btn-outline-light:not(:disabled):not(.disabled):active,.show>.btn-outline-light.dropdown-toggle{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}\n\n.btn-outline-light:not(:disabled):not(.disabled).active:focus,.btn-outline-light:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}\n\n.btn-outline-dark{color:#343a40;background-color:transparent;background-image:none;border-color:#343a40}\n\n.btn-outline-dark:hover{color:#fff;background-color:#343a40;border-color:#343a40}\n\n.btn-outline-dark.focus,.btn-outline-dark:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}\n\n.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#343a40;background-color:transparent}\n\n.btn-outline-dark:not(:disabled):not(.disabled).active,.btn-outline-dark:not(:disabled):not(.disabled):active,.show>.btn-outline-dark.dropdown-toggle{color:#fff;background-color:#343a40;border-color:#343a40}\n\n.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}\n\n.btn-link{font-weight:400;color:#007bff;background-color:transparent}\n\n.btn-link:hover{color:#0056b3;text-decoration:underline;background-color:transparent;border-color:transparent}\n\n.btn-link.focus,.btn-link:focus{text-decoration:underline;border-color:transparent;box-shadow:none}\n\n.btn-link.disabled,.btn-link:disabled{color:#6c757d;pointer-events:none}\n\n.btn-group-lg>.btn,.btn-lg{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}\n\n.btn-group-sm>.btn,.btn-sm{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}\n\n.btn-block{display:block;width:100%}\n\n.btn-block+.btn-block{margin-top:.5rem}\n\ninput[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}\n\n.fade{transition:opacity .15s linear}\n\n@media screen and (prefers-reduced-motion:reduce){.fade{transition:none}}\n\n.fade:not(.show){opacity:0}\n\n.collapse:not(.show){display:none}\n\n.collapsing{position:relative;height:0;overflow:hidden;transition:height .35s ease}\n\n@media screen and (prefers-reduced-motion:reduce){.collapsing{transition:none}}\n\n.dropdown,.dropleft,.dropright,.dropup{position:relative}\n\n.dropdown-toggle::after{display:inline-block;width:0;height:0;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}\n\n.dropdown-toggle:empty::after{margin-left:0}\n\n.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}\n\n.dropdown-menu-right{right:0;left:auto}\n\n.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}\n\n.dropup .dropdown-toggle::after{display:inline-block;width:0;height:0;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}\n\n.dropup .dropdown-toggle:empty::after{margin-left:0}\n\n.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}\n\n.dropright .dropdown-toggle::after{display:inline-block;width:0;height:0;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}\n\n.dropright .dropdown-toggle:empty::after{margin-left:0}\n\n.dropright .dropdown-toggle::after{vertical-align:0}\n\n.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}\n\n.dropleft .dropdown-toggle::after{display:inline-block;width:0;height:0;margin-left:.255em;vertical-align:.255em;content:\"\"}\n\n.dropleft .dropdown-toggle::after{display:none}\n\n.dropleft .dropdown-toggle::before{display:inline-block;width:0;height:0;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}\n\n.dropleft .dropdown-toggle:empty::after{margin-left:0}\n\n.dropleft .dropdown-toggle::before{vertical-align:0}\n\n.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=top]{right:auto;bottom:auto}\n\n.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}\n\n.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}\n\n.dropdown-item:focus,.dropdown-item:hover{color:#16181b;text-decoration:none;background-color:#f8f9fa}\n\n.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#007bff}\n\n.dropdown-item.disabled,.dropdown-item:disabled{color:#6c757d;background-color:transparent}\n\n.dropdown-menu.show{display:block}\n\n.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}\n\n.dropdown-item-text{display:block;padding:.25rem 1.5rem;color:#212529}\n\n.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}\n\n.btn-group-vertical>.btn,.btn-group>.btn{position:relative;flex:0 1 auto}\n\n.btn-group-vertical>.btn:hover,.btn-group>.btn:hover{z-index:1}\n\n.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus{z-index:1}\n\n.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group,.btn-group-vertical .btn+.btn,.btn-group-vertical .btn+.btn-group,.btn-group-vertical .btn-group+.btn,.btn-group-vertical .btn-group+.btn-group{margin-left:-1px}\n\n.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}\n\n.btn-toolbar .input-group{width:auto}\n\n.btn-group>.btn:first-child{margin-left:0}\n\n.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}\n\n.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}\n\n.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}\n\n.dropdown-toggle-split::after,.dropright .dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after{margin-left:0}\n\n.dropleft .dropdown-toggle-split::before{margin-right:0}\n\n.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}\n\n.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}\n\n.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}\n\n.btn-group-vertical .btn,.btn-group-vertical .btn-group{width:100%}\n\n.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group{margin-top:-1px;margin-left:0}\n\n.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}\n\n.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}\n\n.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn{margin-bottom:0}\n\n.btn-group-toggle>.btn input[type=checkbox],.btn-group-toggle>.btn input[type=radio],.btn-group-toggle>.btn-group>.btn input[type=checkbox],.btn-group-toggle>.btn-group>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}\n\n.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}\n\n.input-group>.custom-file,.input-group>.custom-select,.input-group>.form-control{position:relative;flex:1 1 auto;width:1%;margin-bottom:0}\n\n.input-group>.custom-file:focus,.input-group>.custom-select:focus,.input-group>.form-control:focus{z-index:3}\n\n.input-group>.custom-file+.custom-file,.input-group>.custom-file+.custom-select,.input-group>.custom-file+.form-control,.input-group>.custom-select+.custom-file,.input-group>.custom-select+.custom-select,.input-group>.custom-select+.form-control,.input-group>.form-control+.custom-file,.input-group>.form-control+.custom-select,.input-group>.form-control+.form-control{margin-left:-1px}\n\n.input-group>.custom-select:not(:last-child),.input-group>.form-control:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}\n\n.input-group>.custom-select:not(:first-child),.input-group>.form-control:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}\n\n.input-group>.custom-file{display:flex;align-items:center}\n\n.input-group>.custom-file:not(:last-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label::after{border-top-right-radius:0;border-bottom-right-radius:0}\n\n.input-group>.custom-file:not(:first-child) .custom-file-label{border-top-left-radius:0;border-bottom-left-radius:0}\n\n.input-group-append,.input-group-prepend{display:flex}\n\n.input-group-append .btn,.input-group-prepend .btn{position:relative;z-index:2}\n\n.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.btn,.input-group-append .input-group-text+.input-group-text,.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-prepend .input-group-text+.input-group-text{margin-left:-1px}\n\n.input-group-prepend{margin-right:-1px}\n\n.input-group-append{margin-left:-1px}\n\n.input-group-text{display:flex;align-items:center;padding:.375rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}\n\n.input-group-text input[type=checkbox],.input-group-text input[type=radio]{margin-top:0}\n\n.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child),.input-group>.input-group-append:not(:last-child)>.btn,.input-group>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text{border-top-right-radius:0;border-bottom-right-radius:0}\n\n.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child),.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text{border-top-left-radius:0;border-bottom-left-radius:0}\n\n.custom-control{position:relative;display:block;min-height:1.5rem;padding-left:1.5rem}\n\n.custom-control-inline{display:inline-flex;margin-right:1rem}\n\n.custom-control-input{position:absolute;z-index:-1;opacity:0}\n\n.custom-control-input:checked~.custom-control-label::before{color:#fff;background-color:#007bff}\n\n.custom-control-input:focus~.custom-control-label::before{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}\n\n.custom-control-input:active~.custom-control-label::before{color:#fff;background-color:#b3d7ff}\n\n.custom-control-input:disabled~.custom-control-label{color:#6c757d}\n\n.custom-control-input:disabled~.custom-control-label::before{background-color:#e9ecef}\n\n.custom-control-label{position:relative;margin-bottom:0}\n\n.custom-control-label::before{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;pointer-events:none;content:\"\";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#dee2e6}\n\n.custom-control-label::after{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;content:\"\";background-repeat:no-repeat;background-position:center center;background-size:50% 50%}\n\n.custom-checkbox .custom-control-label::before{border-radius:.25rem}\n\n.custom-checkbox .custom-control-input:checked~.custom-control-label::before{background-color:#007bff}\n\n.custom-checkbox .custom-control-input:checked~.custom-control-label::after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")}\n\n.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::before{background-color:#007bff}\n\n.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\")}\n\n.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label::before{background-color:rgba(0,123,255,.5)}\n\n.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label::before{background-color:rgba(0,123,255,.5)}\n\n.custom-radio .custom-control-label::before{border-radius:50%}\n\n.custom-radio .custom-control-input:checked~.custom-control-label::before{background-color:#007bff}\n\n.custom-radio .custom-control-input:checked~.custom-control-label::after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\")}\n\n.custom-radio .custom-control-input:disabled:checked~.custom-control-label::before{background-color:rgba(0,123,255,.5)}\n\n.custom-select{display:inline-block;width:100%;height:calc(2.25rem + 2px);padding:.375rem 1.75rem .375rem .75rem;line-height:1.5;color:#495057;vertical-align:middle;background:#fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right .75rem center;background-size:8px 10px;border:1px solid #ced4da;border-radius:.25rem;-webkit-appearance:none;-moz-appearance:none;appearance:none}\n\n.custom-select:focus{border-color:#80bdff;outline:0;box-shadow:inset 0 1px 2px rgba(0,0,0,.075),0 0 5px rgba(128,189,255,.5)}\n\n.custom-select:focus::-ms-value{color:#495057;background-color:#fff}\n\n.custom-select[multiple],.custom-select[size]:not([size=\"1\"]){height:auto;padding-right:.75rem;background-image:none}\n\n.custom-select:disabled{color:#6c757d;background-color:#e9ecef}\n\n.custom-select::-ms-expand{opacity:0}\n\n.custom-select-sm{height:calc(1.8125rem + 2px);padding-top:.375rem;padding-bottom:.375rem;font-size:75%}\n\n.custom-select-lg{height:calc(2.875rem + 2px);padding-top:.375rem;padding-bottom:.375rem;font-size:125%}\n\n.custom-file{position:relative;display:inline-block;width:100%;height:calc(2.25rem + 2px);margin-bottom:0}\n\n.custom-file-input{position:relative;z-index:2;width:100%;height:calc(2.25rem + 2px);margin:0;opacity:0}\n\n.custom-file-input:focus~.custom-file-label{border-color:#80bdff;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}\n\n.custom-file-input:focus~.custom-file-label::after{border-color:#80bdff}\n\n.custom-file-input:lang(en)~.custom-file-label::after{content:\"Browse\"}\n\n.custom-file-label{position:absolute;top:0;right:0;left:0;z-index:1;height:calc(2.25rem + 2px);padding:.375rem .75rem;line-height:1.5;color:#495057;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem}\n\n.custom-file-label::after{position:absolute;top:0;right:0;bottom:0;z-index:3;display:block;height:2.25rem;padding:.375rem .75rem;line-height:1.5;color:#495057;content:\"Browse\";background-color:#e9ecef;border-left:1px solid #ced4da;border-radius:0 .25rem .25rem 0}\n\n.custom-range{width:100%;padding-left:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}\n\n.custom-range:focus{outline:0}\n\n.custom-range::-moz-focus-outer{border:0}\n\n.custom-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:#007bff;border:0;border-radius:1rem;-webkit-appearance:none;appearance:none}\n\n.custom-range::-webkit-slider-thumb:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}\n\n.custom-range::-webkit-slider-thumb:active{background-color:#b3d7ff}\n\n.custom-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}\n\n.custom-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#007bff;border:0;border-radius:1rem;-moz-appearance:none;appearance:none}\n\n.custom-range::-moz-range-thumb:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}\n\n.custom-range::-moz-range-thumb:active{background-color:#b3d7ff}\n\n.custom-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}\n\n.custom-range::-ms-thumb{width:1rem;height:1rem;background-color:#007bff;border:0;border-radius:1rem;appearance:none}\n\n.custom-range::-ms-thumb:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}\n\n.custom-range::-ms-thumb:active{background-color:#b3d7ff}\n\n.custom-range::-ms-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:transparent;border-color:transparent;border-width:.5rem}\n\n.custom-range::-ms-fill-lower{background-color:#dee2e6;border-radius:1rem}\n\n.custom-range::-ms-fill-upper{margin-right:15px;background-color:#dee2e6;border-radius:1rem}\n\n.nav{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}\n\n.nav-link{display:block;padding:.5rem 1rem}\n\n.nav-link:focus,.nav-link:hover{text-decoration:none}\n\n.nav-link.disabled{color:#6c757d}\n\n.nav-tabs{border-bottom:1px solid #dee2e6}\n\n.nav-tabs .nav-item{margin-bottom:-1px}\n\n.nav-tabs .nav-link{border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}\n\n.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#e9ecef #e9ecef #dee2e6}\n\n.nav-tabs .nav-link.disabled{color:#6c757d;background-color:transparent;border-color:transparent}\n\n.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}\n\n.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}\n\n.nav-pills .nav-link{border-radius:.25rem}\n\n.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#007bff}\n\n.nav-fill .nav-item{flex:1 1 auto;text-align:center}\n\n.nav-justified .nav-item{flex-basis:0;flex-grow:1;text-align:center}\n\n.tab-content>.tab-pane{display:none}\n\n.tab-content>.active{display:block}\n\n.navbar{position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:.5rem 1rem}\n\n.navbar>.container,.navbar>.container-fluid{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}\n\n.navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}\n\n.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}\n\n.navbar-nav{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}\n\n.navbar-nav .nav-link{padding-right:0;padding-left:0}\n\n.navbar-nav .dropdown-menu{position:static;float:none}\n\n.navbar-text{display:inline-block;padding-top:.5rem;padding-bottom:.5rem}\n\n.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}\n\n.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem}\n\n.navbar-toggler:focus,.navbar-toggler:hover{text-decoration:none}\n\n.navbar-toggler:not(:disabled):not(.disabled){cursor:pointer}\n\n.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:\"\";background:no-repeat center center;background-size:100% 100%}\n\n@media (max-width:575.98px){.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid{padding-right:0;padding-left:0}}\n\n@media (min-width:576px){.navbar-expand-sm{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid{flex-wrap:nowrap}.navbar-expand-sm .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}}\n\n@media (max-width:767.98px){.navbar-expand-md>.container,.navbar-expand-md>.container-fluid{padding-right:0;padding-left:0}}\n\n@media (min-width:768px){.navbar-expand-md{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md>.container,.navbar-expand-md>.container-fluid{flex-wrap:nowrap}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}\n\n@media (max-width:991.98px){.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid{padding-right:0;padding-left:0}}\n\n@media (min-width:992px){.navbar-expand-lg{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid{flex-wrap:nowrap}.navbar-expand-lg .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}}\n\n@media (max-width:1199.98px){.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid{padding-right:0;padding-left:0}}\n\n@media (min-width:1200px){.navbar-expand-xl{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid{flex-wrap:nowrap}.navbar-expand-xl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}}\n\n.navbar-expand{flex-flow:row nowrap;justify-content:flex-start}\n\n.navbar-expand>.container,.navbar-expand>.container-fluid{padding-right:0;padding-left:0}\n\n.navbar-expand .navbar-nav{flex-direction:row}\n\n.navbar-expand .navbar-nav .dropdown-menu{position:absolute}\n\n.navbar-expand .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}\n\n.navbar-expand>.container,.navbar-expand>.container-fluid{flex-wrap:nowrap}\n\n.navbar-expand .navbar-collapse{display:flex!important;flex-basis:auto}\n\n.navbar-expand .navbar-toggler{display:none}\n\n.navbar-light .navbar-brand{color:rgba(0,0,0,.9)}\n\n.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,.9)}\n\n.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.5)}\n\n.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)}\n\n.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}\n\n.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .show>.nav-link{color:rgba(0,0,0,.9)}\n\n.navbar-light .navbar-toggler{color:rgba(0,0,0,.5);border-color:rgba(0,0,0,.1)}\n\n.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}\n\n.navbar-light .navbar-text{color:rgba(0,0,0,.5)}\n\n.navbar-light .navbar-text a{color:rgba(0,0,0,.9)}\n\n.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover{color:rgba(0,0,0,.9)}\n\n.navbar-dark .navbar-brand{color:#fff}\n\n.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:#fff}\n\n.navbar-dark .navbar-nav .nav-link{color:rgba(255,255,255,.5)}\n\n.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:rgba(255,255,255,.75)}\n\n.navbar-dark .navbar-nav .nav-link.disabled{color:rgba(255,255,255,.25)}\n\n.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .show>.nav-link{color:#fff}\n\n.navbar-dark .navbar-toggler{color:rgba(255,255,255,.5);border-color:rgba(255,255,255,.1)}\n\n.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}\n\n.navbar-dark .navbar-text{color:rgba(255,255,255,.5)}\n\n.navbar-dark .navbar-text a{color:#fff}\n\n.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover{color:#fff}\n\n.card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}\n\n.card>hr{margin-right:0;margin-left:0}\n\n.card>.list-group:first-child .list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}\n\n.card>.list-group:last-child .list-group-item:last-child{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}\n\n.card-body{flex:1 1 auto;padding:1.25rem}\n\n.card-title{margin-bottom:.75rem}\n\n.card-subtitle{margin-top:-.375rem;margin-bottom:0}\n\n.card-text:last-child{margin-bottom:0}\n\n.card-link:hover{text-decoration:none}\n\n.card-link+.card-link{margin-left:1.25rem}\n\n.card-header{padding:.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}\n\n.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}\n\n.card-header+.list-group .list-group-item:first-child{border-top:0}\n\n.card-footer{padding:.75rem 1.25rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)}\n\n.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}\n\n.card-header-tabs{margin-right:-.625rem;margin-bottom:-.75rem;margin-left:-.625rem;border-bottom:0}\n\n.card-header-pills{margin-right:-.625rem;margin-left:-.625rem}\n\n.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem}\n\n.card-img{width:100%;border-radius:calc(.25rem - 1px)}\n\n.card-img-top{width:100%;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}\n\n.card-img-bottom{width:100%;border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}\n\n.card-deck{display:flex;flex-direction:column}\n\n.card-deck .card{margin-bottom:15px}\n\n@media (min-width:576px){.card-deck{flex-flow:row wrap;margin-right:-15px;margin-left:-15px}.card-deck .card{display:flex;flex:1 0 0%;flex-direction:column;margin-right:15px;margin-bottom:0;margin-left:15px}}\n\n.card-group{display:flex;flex-direction:column}\n\n.card-group>.card{margin-bottom:15px}\n\n@media (min-width:576px){.card-group{flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:first-child{border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:first-child .card-header,.card-group>.card:first-child .card-img-top{border-top-right-radius:0}.card-group>.card:first-child .card-footer,.card-group>.card:first-child .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:last-child .card-header,.card-group>.card:last-child .card-img-top{border-top-left-radius:0}.card-group>.card:last-child .card-footer,.card-group>.card:last-child .card-img-bottom{border-bottom-left-radius:0}.card-group>.card:only-child{border-radius:.25rem}.card-group>.card:only-child .card-header,.card-group>.card:only-child .card-img-top{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card-group>.card:only-child .card-footer,.card-group>.card:only-child .card-img-bottom{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-group>.card:not(:first-child):not(:last-child):not(:only-child){border-radius:0}.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-footer,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-header,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-img-top{border-radius:0}}\n\n.card-columns .card{margin-bottom:.75rem}\n\n@media (min-width:576px){.card-columns{-webkit-column-count:3;column-count:3;-webkit-column-gap:1.25rem;column-gap:1.25rem;orphans:1;widows:1}.card-columns .card{display:inline-block;width:100%}}\n\n.accordion .card:not(:first-of-type):not(:last-of-type){border-bottom:0;border-radius:0}\n\n.accordion .card:not(:first-of-type) .card-header:first-child{border-radius:0}\n\n.accordion .card:first-of-type{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}\n\n.accordion .card:last-of-type{border-top-left-radius:0;border-top-right-radius:0}\n\n.breadcrumb{display:flex;flex-wrap:wrap;padding:.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#e9ecef;border-radius:.25rem}\n\n.breadcrumb-item+.breadcrumb-item{padding-left:.5rem}\n\n.breadcrumb-item+.breadcrumb-item::before{display:inline-block;padding-right:.5rem;color:#6c757d;content:\"/\"}\n\n.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:underline}\n\n.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:none}\n\n.breadcrumb-item.active{color:#6c757d}\n\n.pagination{display:flex;padding-left:0;list-style:none;border-radius:.25rem}\n\n.page-link{position:relative;display:block;padding:.5rem .75rem;margin-left:-1px;line-height:1.25;color:#007bff;background-color:#fff;border:1px solid #dee2e6}\n\n.page-link:hover{z-index:2;color:#0056b3;text-decoration:none;background-color:#e9ecef;border-color:#dee2e6}\n\n.page-link:focus{z-index:2;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}\n\n.page-link:not(:disabled):not(.disabled){cursor:pointer}\n\n.page-item:first-child .page-link{margin-left:0;border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}\n\n.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}\n\n.page-item.active .page-link{z-index:1;color:#fff;background-color:#007bff;border-color:#007bff}\n\n.page-item.disabled .page-link{color:#6c757d;pointer-events:none;cursor:auto;background-color:#fff;border-color:#dee2e6}\n\n.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem;line-height:1.5}\n\n.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}\n\n.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}\n\n.pagination-sm .page-link{padding:.25rem .5rem;font-size:.875rem;line-height:1.5}\n\n.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}\n\n.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}\n\n.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem}\n\n.badge:empty{display:none}\n\n.btn .badge{position:relative;top:-1px}\n\n.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}\n\n.badge-primary{color:#fff;background-color:#007bff}\n\n.badge-primary[href]:focus,.badge-primary[href]:hover{color:#fff;text-decoration:none;background-color:#0062cc}\n\n.badge-secondary{color:#fff;background-color:#6c757d}\n\n.badge-secondary[href]:focus,.badge-secondary[href]:hover{color:#fff;text-decoration:none;background-color:#545b62}\n\n.badge-success{color:#fff;background-color:#28a745}\n\n.badge-success[href]:focus,.badge-success[href]:hover{color:#fff;text-decoration:none;background-color:#1e7e34}\n\n.badge-info{color:#fff;background-color:#17a2b8}\n\n.badge-info[href]:focus,.badge-info[href]:hover{color:#fff;text-decoration:none;background-color:#117a8b}\n\n.badge-warning{color:#212529;background-color:#ffc107}\n\n.badge-warning[href]:focus,.badge-warning[href]:hover{color:#212529;text-decoration:none;background-color:#d39e00}\n\n.badge-danger{color:#fff;background-color:#dc3545}\n\n.badge-danger[href]:focus,.badge-danger[href]:hover{color:#fff;text-decoration:none;background-color:#bd2130}\n\n.badge-light{color:#212529;background-color:#f8f9fa}\n\n.badge-light[href]:focus,.badge-light[href]:hover{color:#212529;text-decoration:none;background-color:#dae0e5}\n\n.badge-dark{color:#fff;background-color:#343a40}\n\n.badge-dark[href]:focus,.badge-dark[href]:hover{color:#fff;text-decoration:none;background-color:#1d2124}\n\n.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#e9ecef;border-radius:.3rem}\n\n@media (min-width:576px){.jumbotron{padding:4rem 2rem}}\n\n.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}\n\n.alert{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}\n\n.alert-heading{color:inherit}\n\n.alert-link{font-weight:700}\n\n.alert-dismissible{padding-right:4rem}\n\n.alert-dismissible .close{position:absolute;top:0;right:0;padding:.75rem 1.25rem;color:inherit}\n\n.alert-primary{color:#004085;background-color:#cce5ff;border-color:#b8daff}\n\n.alert-primary hr{border-top-color:#9fcdff}\n\n.alert-primary .alert-link{color:#002752}\n\n.alert-secondary{color:#383d41;background-color:#e2e3e5;border-color:#d6d8db}\n\n.alert-secondary hr{border-top-color:#c8cbcf}\n\n.alert-secondary .alert-link{color:#202326}\n\n.alert-success{color:#155724;background-color:#d4edda;border-color:#c3e6cb}\n\n.alert-success hr{border-top-color:#b1dfbb}\n\n.alert-success .alert-link{color:#0b2e13}\n\n.alert-info{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb}\n\n.alert-info hr{border-top-color:#abdde5}\n\n.alert-info .alert-link{color:#062c33}\n\n.alert-warning{color:#856404;background-color:#fff3cd;border-color:#ffeeba}\n\n.alert-warning hr{border-top-color:#ffe8a1}\n\n.alert-warning .alert-link{color:#533f03}\n\n.alert-danger{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}\n\n.alert-danger hr{border-top-color:#f1b0b7}\n\n.alert-danger .alert-link{color:#491217}\n\n.alert-light{color:#818182;background-color:#fefefe;border-color:#fdfdfe}\n\n.alert-light hr{border-top-color:#ececf6}\n\n.alert-light .alert-link{color:#686868}\n\n.alert-dark{color:#1b1e21;background-color:#d6d8d9;border-color:#c6c8ca}\n\n.alert-dark hr{border-top-color:#b9bbbe}\n\n.alert-dark .alert-link{color:#040505}\n\n@-webkit-keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}\n\n@keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}\n\n.progress{display:flex;height:1rem;overflow:hidden;font-size:.75rem;background-color:#e9ecef;border-radius:.25rem}\n\n.progress-bar{display:flex;flex-direction:column;justify-content:center;color:#fff;text-align:center;white-space:nowrap;background-color:#007bff;transition:width .6s ease}\n\n@media screen and (prefers-reduced-motion:reduce){.progress-bar{transition:none}}\n\n.progress-bar-striped{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:1rem 1rem}\n\n.progress-bar-animated{-webkit-animation:progress-bar-stripes 1s linear infinite;animation:progress-bar-stripes 1s linear infinite}\n\n.media{display:flex;align-items:flex-start}\n\n.media-body{flex:1}\n\n.list-group{display:flex;flex-direction:column;padding-left:0;margin-bottom:0}\n\n.list-group-item-action{width:100%;color:#495057;text-align:inherit}\n\n.list-group-item-action:focus,.list-group-item-action:hover{color:#495057;text-decoration:none;background-color:#f8f9fa}\n\n.list-group-item-action:active{color:#212529;background-color:#e9ecef}\n\n.list-group-item{position:relative;display:block;padding:.75rem 1.25rem;margin-bottom:-1px;background-color:#fff;border:1px solid rgba(0,0,0,.125)}\n\n.list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}\n\n.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}\n\n.list-group-item:focus,.list-group-item:hover{z-index:1;text-decoration:none}\n\n.list-group-item.disabled,.list-group-item:disabled{color:#6c757d;background-color:#fff}\n\n.list-group-item.active{z-index:2;color:#fff;background-color:#007bff;border-color:#007bff}\n\n.list-group-flush .list-group-item{border-right:0;border-left:0;border-radius:0}\n\n.list-group-flush:first-child .list-group-item:first-child{border-top:0}\n\n.list-group-flush:last-child .list-group-item:last-child{border-bottom:0}\n\n.list-group-item-primary{color:#004085;background-color:#b8daff}\n\n.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover{color:#004085;background-color:#9fcdff}\n\n.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#004085;border-color:#004085}\n\n.list-group-item-secondary{color:#383d41;background-color:#d6d8db}\n\n.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover{color:#383d41;background-color:#c8cbcf}\n\n.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#383d41;border-color:#383d41}\n\n.list-group-item-success{color:#155724;background-color:#c3e6cb}\n\n.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover{color:#155724;background-color:#b1dfbb}\n\n.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#155724;border-color:#155724}\n\n.list-group-item-info{color:#0c5460;background-color:#bee5eb}\n\n.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover{color:#0c5460;background-color:#abdde5}\n\n.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#0c5460;border-color:#0c5460}\n\n.list-group-item-warning{color:#856404;background-color:#ffeeba}\n\n.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover{color:#856404;background-color:#ffe8a1}\n\n.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#856404;border-color:#856404}\n\n.list-group-item-danger{color:#721c24;background-color:#f5c6cb}\n\n.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover{color:#721c24;background-color:#f1b0b7}\n\n.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#721c24;border-color:#721c24}\n\n.list-group-item-light{color:#818182;background-color:#fdfdfe}\n\n.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover{color:#818182;background-color:#ececf6}\n\n.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#818182;border-color:#818182}\n\n.list-group-item-dark{color:#1b1e21;background-color:#c6c8ca}\n\n.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover{color:#1b1e21;background-color:#b9bbbe}\n\n.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#1b1e21;border-color:#1b1e21}\n\n.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}\n\n.close:focus,.close:hover{color:#000;text-decoration:none;opacity:.75}\n\n.close:not(:disabled):not(.disabled){cursor:pointer}\n\nbutton.close{padding:0;background-color:transparent;border:0;-webkit-appearance:none}\n\n.modal-open{overflow:hidden}\n\n.modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;display:none;overflow:hidden;outline:0}\n\n.modal-open .modal{overflow-x:hidden;overflow-y:auto}\n\n.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}\n\n.modal.fade .modal-dialog{transition:-webkit-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out, -webkit-transform .3s ease-out;transition:transform .3s ease-out,-webkit-transform .3s ease-out;-webkit-transform:translate(0,-25%);transform:translate(0,-25%)}\n\n@media screen and (prefers-reduced-motion:reduce){.modal.fade .modal-dialog{transition:none}}\n\n.modal.show .modal-dialog{-webkit-transform:translate(0,0);transform:translate(0,0)}\n\n.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - (.5rem * 2))}\n\n.modal-content{position:relative;display:flex;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}\n\n.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}\n\n.modal-backdrop.fade{opacity:0}\n\n.modal-backdrop.show{opacity:.5}\n\n.modal-header{display:flex;align-items:flex-start;justify-content:space-between;padding:1rem;border-bottom:1px solid #e9ecef;border-top-left-radius:.3rem;border-top-right-radius:.3rem}\n\n.modal-header .close{padding:1rem;margin:-1rem -1rem -1rem auto}\n\n.modal-title{margin-bottom:0;line-height:1.5}\n\n.modal-body{position:relative;flex:1 1 auto;padding:1rem}\n\n.modal-footer{display:flex;align-items:center;justify-content:flex-end;padding:1rem;border-top:1px solid #e9ecef}\n\n.modal-footer>:not(:first-child){margin-left:.25rem}\n\n.modal-footer>:not(:last-child){margin-right:.25rem}\n\n.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}\n\n@media (min-width:576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-centered{min-height:calc(100% - (1.75rem * 2))}.modal-sm{max-width:300px}}\n\n@media (min-width:992px){.modal-lg{max-width:800px}}\n\n.tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:0}\n\n.tooltip.show{opacity:.9}\n\n.tooltip .arrow{position:absolute;display:block;width:.8rem;height:.4rem}\n\n.tooltip .arrow::before{position:absolute;content:\"\";border-color:transparent;border-style:solid}\n\n.bs-tooltip-auto[x-placement^=top],.bs-tooltip-top{padding:.4rem 0}\n\n.bs-tooltip-auto[x-placement^=top] .arrow,.bs-tooltip-top .arrow{bottom:0}\n\n.bs-tooltip-auto[x-placement^=top] .arrow::before,.bs-tooltip-top .arrow::before{top:0;border-width:.4rem .4rem 0;border-top-color:#000}\n\n.bs-tooltip-auto[x-placement^=right],.bs-tooltip-right{padding:0 .4rem}\n\n.bs-tooltip-auto[x-placement^=right] .arrow,.bs-tooltip-right .arrow{left:0;width:.4rem;height:.8rem}\n\n.bs-tooltip-auto[x-placement^=right] .arrow::before,.bs-tooltip-right .arrow::before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#000}\n\n.bs-tooltip-auto[x-placement^=bottom],.bs-tooltip-bottom{padding:.4rem 0}\n\n.bs-tooltip-auto[x-placement^=bottom] .arrow,.bs-tooltip-bottom .arrow{top:0}\n\n.bs-tooltip-auto[x-placement^=bottom] .arrow::before,.bs-tooltip-bottom .arrow::before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#000}\n\n.bs-tooltip-auto[x-placement^=left],.bs-tooltip-left{padding:0 .4rem}\n\n.bs-tooltip-auto[x-placement^=left] .arrow,.bs-tooltip-left .arrow{right:0;width:.4rem;height:.8rem}\n\n.bs-tooltip-auto[x-placement^=left] .arrow::before,.bs-tooltip-left .arrow::before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}\n\n.tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}\n\n.popover{position:absolute;top:0;left:0;z-index:1060;display:block;max-width:276px;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}\n\n.popover .arrow{position:absolute;display:block;width:1rem;height:.5rem;margin:0 .3rem}\n\n.popover .arrow::after,.popover .arrow::before{position:absolute;display:block;content:\"\";border-color:transparent;border-style:solid}\n\n.bs-popover-auto[x-placement^=top],.bs-popover-top{margin-bottom:.5rem}\n\n.bs-popover-auto[x-placement^=top] .arrow,.bs-popover-top .arrow{bottom:calc((.5rem + 1px) * -1)}\n\n.bs-popover-auto[x-placement^=top] .arrow::after,.bs-popover-auto[x-placement^=top] .arrow::before,.bs-popover-top .arrow::after,.bs-popover-top .arrow::before{border-width:.5rem .5rem 0}\n\n.bs-popover-auto[x-placement^=top] .arrow::before,.bs-popover-top .arrow::before{bottom:0;border-top-color:rgba(0,0,0,.25)}\n\n.bs-popover-auto[x-placement^=top] .arrow::after,.bs-popover-top .arrow::after{bottom:1px;border-top-color:#fff}\n\n.bs-popover-auto[x-placement^=right],.bs-popover-right{margin-left:.5rem}\n\n.bs-popover-auto[x-placement^=right] .arrow,.bs-popover-right .arrow{left:calc((.5rem + 1px) * -1);width:.5rem;height:1rem;margin:.3rem 0}\n\n.bs-popover-auto[x-placement^=right] .arrow::after,.bs-popover-auto[x-placement^=right] .arrow::before,.bs-popover-right .arrow::after,.bs-popover-right .arrow::before{border-width:.5rem .5rem .5rem 0}\n\n.bs-popover-auto[x-placement^=right] .arrow::before,.bs-popover-right .arrow::before{left:0;border-right-color:rgba(0,0,0,.25)}\n\n.bs-popover-auto[x-placement^=right] .arrow::after,.bs-popover-right .arrow::after{left:1px;border-right-color:#fff}\n\n.bs-popover-auto[x-placement^=bottom],.bs-popover-bottom{margin-top:.5rem}\n\n.bs-popover-auto[x-placement^=bottom] .arrow,.bs-popover-bottom .arrow{top:calc((.5rem + 1px) * -1)}\n\n.bs-popover-auto[x-placement^=bottom] .arrow::after,.bs-popover-auto[x-placement^=bottom] .arrow::before,.bs-popover-bottom .arrow::after,.bs-popover-bottom .arrow::before{border-width:0 .5rem .5rem .5rem}\n\n.bs-popover-auto[x-placement^=bottom] .arrow::before,.bs-popover-bottom .arrow::before{top:0;border-bottom-color:rgba(0,0,0,.25)}\n\n.bs-popover-auto[x-placement^=bottom] .arrow::after,.bs-popover-bottom .arrow::after{top:1px;border-bottom-color:#fff}\n\n.bs-popover-auto[x-placement^=bottom] .popover-header::before,.bs-popover-bottom .popover-header::before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-.5rem;content:\"\";border-bottom:1px solid #f7f7f7}\n\n.bs-popover-auto[x-placement^=left],.bs-popover-left{margin-right:.5rem}\n\n.bs-popover-auto[x-placement^=left] .arrow,.bs-popover-left .arrow{right:calc((.5rem + 1px) * -1);width:.5rem;height:1rem;margin:.3rem 0}\n\n.bs-popover-auto[x-placement^=left] .arrow::after,.bs-popover-auto[x-placement^=left] .arrow::before,.bs-popover-left .arrow::after,.bs-popover-left .arrow::before{border-width:.5rem 0 .5rem .5rem}\n\n.bs-popover-auto[x-placement^=left] .arrow::before,.bs-popover-left .arrow::before{right:0;border-left-color:rgba(0,0,0,.25)}\n\n.bs-popover-auto[x-placement^=left] .arrow::after,.bs-popover-left .arrow::after{right:1px;border-left-color:#fff}\n\n.popover-header{padding:.5rem .75rem;margin-bottom:0;font-size:1rem;color:inherit;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}\n\n.popover-header:empty{display:none}\n\n.popover-body{padding:.5rem .75rem;color:#212529}\n\n.carousel{position:relative}\n\n.carousel-inner{position:relative;width:100%;overflow:hidden}\n\n.carousel-item{position:relative;display:none;align-items:center;width:100%;transition:-webkit-transform .6s ease;transition:transform .6s ease;transition:transform .6s ease, -webkit-transform .6s ease;transition:transform .6s ease,-webkit-transform .6s ease;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000px;perspective:1000px}\n\n@media screen and (prefers-reduced-motion:reduce){.carousel-item{transition:none}}\n\n.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}\n\n.carousel-item-next,.carousel-item-prev{position:absolute;top:0}\n\n.carousel-item-next.carousel-item-left,.carousel-item-prev.carousel-item-right{-webkit-transform:translateX(0);transform:translateX(0)}\n\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)){.carousel-item-next.carousel-item-left,.carousel-item-prev.carousel-item-right{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}\n\n.active.carousel-item-right,.carousel-item-next{-webkit-transform:translateX(100%);transform:translateX(100%)}\n\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)){.active.carousel-item-right,.carousel-item-next{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}\n\n.active.carousel-item-left,.carousel-item-prev{-webkit-transform:translateX(-100%);transform:translateX(-100%)}\n\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)){.active.carousel-item-left,.carousel-item-prev{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}\n\n.carousel-fade .carousel-item{opacity:0;transition-duration:.6s;transition-property:opacity}\n\n.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right,.carousel-fade .carousel-item.active{opacity:1}\n\n.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{opacity:0}\n\n.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-prev,.carousel-fade .carousel-item-next,.carousel-fade .carousel-item-prev,.carousel-fade .carousel-item.active{-webkit-transform:translateX(0);transform:translateX(0)}\n\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)){.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-prev,.carousel-fade .carousel-item-next,.carousel-fade .carousel-item-prev,.carousel-fade .carousel-item.active{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}\n\n.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;display:flex;align-items:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5}\n\n.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}\n\n.carousel-control-prev{left:0}\n\n.carousel-control-next{right:0}\n\n.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:20px;height:20px;background:transparent no-repeat center center;background-size:100% 100%}\n\n.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\")}\n\n.carousel-control-next-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\")}\n\n.carousel-indicators{position:absolute;right:0;bottom:10px;left:0;z-index:15;display:flex;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}\n\n.carousel-indicators li{position:relative;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:rgba(255,255,255,.5)}\n\n.carousel-indicators li::before{position:absolute;top:-10px;left:0;display:inline-block;width:100%;height:10px;content:\"\"}\n\n.carousel-indicators li::after{position:absolute;bottom:-10px;left:0;display:inline-block;width:100%;height:10px;content:\"\"}\n\n.carousel-indicators .active{background-color:#fff}\n\n.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}\n\n.align-baseline{vertical-align:baseline!important}\n\n.align-top{vertical-align:top!important}\n\n.align-middle{vertical-align:middle!important}\n\n.align-bottom{vertical-align:bottom!important}\n\n.align-text-bottom{vertical-align:text-bottom!important}\n\n.align-text-top{vertical-align:text-top!important}\n\n.bg-primary{background-color:#007bff!important}\n\na.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover{background-color:#0062cc!important}\n\n.bg-secondary{background-color:#6c757d!important}\n\na.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover{background-color:#545b62!important}\n\n.bg-success{background-color:#28a745!important}\n\na.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover{background-color:#1e7e34!important}\n\n.bg-info{background-color:#17a2b8!important}\n\na.bg-info:focus,a.bg-info:hover,button.bg-info:focus,button.bg-info:hover{background-color:#117a8b!important}\n\n.bg-warning{background-color:#ffc107!important}\n\na.bg-warning:focus,a.bg-warning:hover,button.bg-warning:focus,button.bg-warning:hover{background-color:#d39e00!important}\n\n.bg-danger{background-color:#dc3545!important}\n\na.bg-danger:focus,a.bg-danger:hover,button.bg-danger:focus,button.bg-danger:hover{background-color:#bd2130!important}\n\n.bg-light{background-color:#f8f9fa!important}\n\na.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover{background-color:#dae0e5!important}\n\n.bg-dark{background-color:#343a40!important}\n\na.bg-dark:focus,a.bg-dark:hover,button.bg-dark:focus,button.bg-dark:hover{background-color:#1d2124!important}\n\n.bg-white{background-color:#fff!important}\n\n.bg-transparent{background-color:transparent!important}\n\n.border{border:1px solid #dee2e6!important}\n\n.border-top{border-top:1px solid #dee2e6!important}\n\n.border-right{border-right:1px solid #dee2e6!important}\n\n.border-bottom{border-bottom:1px solid #dee2e6!important}\n\n.border-left{border-left:1px solid #dee2e6!important}\n\n.border-0{border:0!important}\n\n.border-top-0{border-top:0!important}\n\n.border-right-0{border-right:0!important}\n\n.border-bottom-0{border-bottom:0!important}\n\n.border-left-0{border-left:0!important}\n\n.border-primary{border-color:#007bff!important}\n\n.border-secondary{border-color:#6c757d!important}\n\n.border-success{border-color:#28a745!important}\n\n.border-info{border-color:#17a2b8!important}\n\n.border-warning{border-color:#ffc107!important}\n\n.border-danger{border-color:#dc3545!important}\n\n.border-light{border-color:#f8f9fa!important}\n\n.border-dark{border-color:#343a40!important}\n\n.border-white{border-color:#fff!important}\n\n.rounded{border-radius:.25rem!important}\n\n.rounded-top{border-top-left-radius:.25rem!important;border-top-right-radius:.25rem!important}\n\n.rounded-right{border-top-right-radius:.25rem!important;border-bottom-right-radius:.25rem!important}\n\n.rounded-bottom{border-bottom-right-radius:.25rem!important;border-bottom-left-radius:.25rem!important}\n\n.rounded-left{border-top-left-radius:.25rem!important;border-bottom-left-radius:.25rem!important}\n\n.rounded-circle{border-radius:50%!important}\n\n.rounded-0{border-radius:0!important}\n\n.clearfix::after{display:block;clear:both;content:\"\"}\n\n.d-none{display:none!important}\n\n.d-inline{display:inline!important}\n\n.d-inline-block{display:inline-block!important}\n\n.d-block{display:block!important}\n\n.d-table{display:table!important}\n\n.d-table-row{display:table-row!important}\n\n.d-table-cell{display:table-cell!important}\n\n.d-flex{display:flex!important}\n\n.d-inline-flex{display:inline-flex!important}\n\n@media (min-width:576px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}}\n\n@media (min-width:768px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}}\n\n@media (min-width:992px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}}\n\n@media (min-width:1200px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}}\n\n@media print{.d-print-none{display:none!important}.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:flex!important}.d-print-inline-flex{display:inline-flex!important}}\n\n.embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden}\n\n.embed-responsive::before{display:block;content:\"\"}\n\n.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}\n\n.embed-responsive-21by9::before{padding-top:42.857143%}\n\n.embed-responsive-16by9::before{padding-top:56.25%}\n\n.embed-responsive-4by3::before{padding-top:75%}\n\n.embed-responsive-1by1::before{padding-top:100%}\n\n.flex-row{flex-direction:row!important}\n\n.flex-column{flex-direction:column!important}\n\n.flex-row-reverse{flex-direction:row-reverse!important}\n\n.flex-column-reverse{flex-direction:column-reverse!important}\n\n.flex-wrap{flex-wrap:wrap!important}\n\n.flex-nowrap{flex-wrap:nowrap!important}\n\n.flex-wrap-reverse{flex-wrap:wrap-reverse!important}\n\n.flex-fill{flex:1 1 auto!important}\n\n.flex-grow-0{flex-grow:0!important}\n\n.flex-grow-1{flex-grow:1!important}\n\n.flex-shrink-0{flex-shrink:0!important}\n\n.flex-shrink-1{flex-shrink:1!important}\n\n.justify-content-start{justify-content:flex-start!important}\n\n.justify-content-end{justify-content:flex-end!important}\n\n.justify-content-center{justify-content:center!important}\n\n.justify-content-between{justify-content:space-between!important}\n\n.justify-content-around{justify-content:space-around!important}\n\n.align-items-start{align-items:flex-start!important}\n\n.align-items-end{align-items:flex-end!important}\n\n.align-items-center{align-items:center!important}\n\n.align-items-baseline{align-items:baseline!important}\n\n.align-items-stretch{align-items:stretch!important}\n\n.align-content-start{align-content:flex-start!important}\n\n.align-content-end{align-content:flex-end!important}\n\n.align-content-center{align-content:center!important}\n\n.align-content-between{align-content:space-between!important}\n\n.align-content-around{align-content:space-around!important}\n\n.align-content-stretch{align-content:stretch!important}\n\n.align-self-auto{-ms-grid-row-align:auto!important;align-self:auto!important}\n\n.align-self-start{align-self:flex-start!important}\n\n.align-self-end{align-self:flex-end!important}\n\n.align-self-center{-ms-grid-row-align:center!important;align-self:center!important}\n\n.align-self-baseline{align-self:baseline!important}\n\n.align-self-stretch{-ms-grid-row-align:stretch!important;align-self:stretch!important}\n\n@media (min-width:576px){.flex-sm-row{flex-direction:row!important}.flex-sm-column{flex-direction:column!important}.flex-sm-row-reverse{flex-direction:row-reverse!important}.flex-sm-column-reverse{flex-direction:column-reverse!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-sm-fill{flex:1 1 auto!important}.flex-sm-grow-0{flex-grow:0!important}.flex-sm-grow-1{flex-grow:1!important}.flex-sm-shrink-0{flex-shrink:0!important}.flex-sm-shrink-1{flex-shrink:1!important}.justify-content-sm-start{justify-content:flex-start!important}.justify-content-sm-end{justify-content:flex-end!important}.justify-content-sm-center{justify-content:center!important}.justify-content-sm-between{justify-content:space-between!important}.justify-content-sm-around{justify-content:space-around!important}.align-items-sm-start{align-items:flex-start!important}.align-items-sm-end{align-items:flex-end!important}.align-items-sm-center{align-items:center!important}.align-items-sm-baseline{align-items:baseline!important}.align-items-sm-stretch{align-items:stretch!important}.align-content-sm-start{align-content:flex-start!important}.align-content-sm-end{align-content:flex-end!important}.align-content-sm-center{align-content:center!important}.align-content-sm-between{align-content:space-between!important}.align-content-sm-around{align-content:space-around!important}.align-content-sm-stretch{align-content:stretch!important}.align-self-sm-auto{-ms-grid-row-align:auto!important;align-self:auto!important}.align-self-sm-start{align-self:flex-start!important}.align-self-sm-end{align-self:flex-end!important}.align-self-sm-center{-ms-grid-row-align:center!important;align-self:center!important}.align-self-sm-baseline{align-self:baseline!important}.align-self-sm-stretch{-ms-grid-row-align:stretch!important;align-self:stretch!important}}\n\n@media (min-width:768px){.flex-md-row{flex-direction:row!important}.flex-md-column{flex-direction:column!important}.flex-md-row-reverse{flex-direction:row-reverse!important}.flex-md-column-reverse{flex-direction:column-reverse!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-md-fill{flex:1 1 auto!important}.flex-md-grow-0{flex-grow:0!important}.flex-md-grow-1{flex-grow:1!important}.flex-md-shrink-0{flex-shrink:0!important}.flex-md-shrink-1{flex-shrink:1!important}.justify-content-md-start{justify-content:flex-start!important}.justify-content-md-end{justify-content:flex-end!important}.justify-content-md-center{justify-content:center!important}.justify-content-md-between{justify-content:space-between!important}.justify-content-md-around{justify-content:space-around!important}.align-items-md-start{align-items:flex-start!important}.align-items-md-end{align-items:flex-end!important}.align-items-md-center{align-items:center!important}.align-items-md-baseline{align-items:baseline!important}.align-items-md-stretch{align-items:stretch!important}.align-content-md-start{align-content:flex-start!important}.align-content-md-end{align-content:flex-end!important}.align-content-md-center{align-content:center!important}.align-content-md-between{align-content:space-between!important}.align-content-md-around{align-content:space-around!important}.align-content-md-stretch{align-content:stretch!important}.align-self-md-auto{-ms-grid-row-align:auto!important;align-self:auto!important}.align-self-md-start{align-self:flex-start!important}.align-self-md-end{align-self:flex-end!important}.align-self-md-center{-ms-grid-row-align:center!important;align-self:center!important}.align-self-md-baseline{align-self:baseline!important}.align-self-md-stretch{-ms-grid-row-align:stretch!important;align-self:stretch!important}}\n\n@media (min-width:992px){.flex-lg-row{flex-direction:row!important}.flex-lg-column{flex-direction:column!important}.flex-lg-row-reverse{flex-direction:row-reverse!important}.flex-lg-column-reverse{flex-direction:column-reverse!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-lg-fill{flex:1 1 auto!important}.flex-lg-grow-0{flex-grow:0!important}.flex-lg-grow-1{flex-grow:1!important}.flex-lg-shrink-0{flex-shrink:0!important}.flex-lg-shrink-1{flex-shrink:1!important}.justify-content-lg-start{justify-content:flex-start!important}.justify-content-lg-end{justify-content:flex-end!important}.justify-content-lg-center{justify-content:center!important}.justify-content-lg-between{justify-content:space-between!important}.justify-content-lg-around{justify-content:space-around!important}.align-items-lg-start{align-items:flex-start!important}.align-items-lg-end{align-items:flex-end!important}.align-items-lg-center{align-items:center!important}.align-items-lg-baseline{align-items:baseline!important}.align-items-lg-stretch{align-items:stretch!important}.align-content-lg-start{align-content:flex-start!important}.align-content-lg-end{align-content:flex-end!important}.align-content-lg-center{align-content:center!important}.align-content-lg-between{align-content:space-between!important}.align-content-lg-around{align-content:space-around!important}.align-content-lg-stretch{align-content:stretch!important}.align-self-lg-auto{-ms-grid-row-align:auto!important;align-self:auto!important}.align-self-lg-start{align-self:flex-start!important}.align-self-lg-end{align-self:flex-end!important}.align-self-lg-center{-ms-grid-row-align:center!important;align-self:center!important}.align-self-lg-baseline{align-self:baseline!important}.align-self-lg-stretch{-ms-grid-row-align:stretch!important;align-self:stretch!important}}\n\n@media (min-width:1200px){.flex-xl-row{flex-direction:row!important}.flex-xl-column{flex-direction:column!important}.flex-xl-row-reverse{flex-direction:row-reverse!important}.flex-xl-column-reverse{flex-direction:column-reverse!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-xl-fill{flex:1 1 auto!important}.flex-xl-grow-0{flex-grow:0!important}.flex-xl-grow-1{flex-grow:1!important}.flex-xl-shrink-0{flex-shrink:0!important}.flex-xl-shrink-1{flex-shrink:1!important}.justify-content-xl-start{justify-content:flex-start!important}.justify-content-xl-end{justify-content:flex-end!important}.justify-content-xl-center{justify-content:center!important}.justify-content-xl-between{justify-content:space-between!important}.justify-content-xl-around{justify-content:space-around!important}.align-items-xl-start{align-items:flex-start!important}.align-items-xl-end{align-items:flex-end!important}.align-items-xl-center{align-items:center!important}.align-items-xl-baseline{align-items:baseline!important}.align-items-xl-stretch{align-items:stretch!important}.align-content-xl-start{align-content:flex-start!important}.align-content-xl-end{align-content:flex-end!important}.align-content-xl-center{align-content:center!important}.align-content-xl-between{align-content:space-between!important}.align-content-xl-around{align-content:space-around!important}.align-content-xl-stretch{align-content:stretch!important}.align-self-xl-auto{-ms-grid-row-align:auto!important;align-self:auto!important}.align-self-xl-start{align-self:flex-start!important}.align-self-xl-end{align-self:flex-end!important}.align-self-xl-center{-ms-grid-row-align:center!important;align-self:center!important}.align-self-xl-baseline{align-self:baseline!important}.align-self-xl-stretch{-ms-grid-row-align:stretch!important;align-self:stretch!important}}\n\n.float-left{float:left!important}\n\n.float-right{float:right!important}\n\n.float-none{float:none!important}\n\n@media (min-width:576px){.float-sm-left{float:left!important}.float-sm-right{float:right!important}.float-sm-none{float:none!important}}\n\n@media (min-width:768px){.float-md-left{float:left!important}.float-md-right{float:right!important}.float-md-none{float:none!important}}\n\n@media (min-width:992px){.float-lg-left{float:left!important}.float-lg-right{float:right!important}.float-lg-none{float:none!important}}\n\n@media (min-width:1200px){.float-xl-left{float:left!important}.float-xl-right{float:right!important}.float-xl-none{float:none!important}}\n\n.position-static{position:static!important}\n\n.position-relative{position:relative!important}\n\n.position-absolute{position:absolute!important}\n\n.position-fixed{position:fixed!important}\n\n.position-sticky{position:-webkit-sticky!important;position:sticky!important}\n\n.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}\n\n.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}\n\n@supports ((position: -webkit-sticky) or (position: sticky)){.sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}\n\n.sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}\n\n.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal}\n\n.shadow-sm{box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important}\n\n.shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important}\n\n.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important}\n\n.shadow-none{box-shadow:none!important}\n\n.w-25{width:25%!important}\n\n.w-50{width:50%!important}\n\n.w-75{width:75%!important}\n\n.w-100{width:100%!important}\n\n.w-auto{width:auto!important}\n\n.h-25{height:25%!important}\n\n.h-50{height:50%!important}\n\n.h-75{height:75%!important}\n\n.h-100{height:100%!important}\n\n.h-auto{height:auto!important}\n\n.mw-100{max-width:100%!important}\n\n.mh-100{max-height:100%!important}\n\n.m-0{margin:0!important}\n\n.mt-0,.my-0{margin-top:0!important}\n\n.mr-0,.mx-0{margin-right:0!important}\n\n.mb-0,.my-0{margin-bottom:0!important}\n\n.ml-0,.mx-0{margin-left:0!important}\n\n.m-1{margin:.25rem!important}\n\n.mt-1,.my-1{margin-top:.25rem!important}\n\n.mr-1,.mx-1{margin-right:.25rem!important}\n\n.mb-1,.my-1{margin-bottom:.25rem!important}\n\n.ml-1,.mx-1{margin-left:.25rem!important}\n\n.m-2{margin:.5rem!important}\n\n.mt-2,.my-2{margin-top:.5rem!important}\n\n.mr-2,.mx-2{margin-right:.5rem!important}\n\n.mb-2,.my-2{margin-bottom:.5rem!important}\n\n.ml-2,.mx-2{margin-left:.5rem!important}\n\n.m-3{margin:1rem!important}\n\n.mt-3,.my-3{margin-top:1rem!important}\n\n.mr-3,.mx-3{margin-right:1rem!important}\n\n.mb-3,.my-3{margin-bottom:1rem!important}\n\n.ml-3,.mx-3{margin-left:1rem!important}\n\n.m-4{margin:1.5rem!important}\n\n.mt-4,.my-4{margin-top:1.5rem!important}\n\n.mr-4,.mx-4{margin-right:1.5rem!important}\n\n.mb-4,.my-4{margin-bottom:1.5rem!important}\n\n.ml-4,.mx-4{margin-left:1.5rem!important}\n\n.m-5{margin:3rem!important}\n\n.mt-5,.my-5{margin-top:3rem!important}\n\n.mr-5,.mx-5{margin-right:3rem!important}\n\n.mb-5,.my-5{margin-bottom:3rem!important}\n\n.ml-5,.mx-5{margin-left:3rem!important}\n\n.p-0{padding:0!important}\n\n.pt-0,.py-0{padding-top:0!important}\n\n.pr-0,.px-0{padding-right:0!important}\n\n.pb-0,.py-0{padding-bottom:0!important}\n\n.pl-0,.px-0{padding-left:0!important}\n\n.p-1{padding:.25rem!important}\n\n.pt-1,.py-1{padding-top:.25rem!important}\n\n.pr-1,.px-1{padding-right:.25rem!important}\n\n.pb-1,.py-1{padding-bottom:.25rem!important}\n\n.pl-1,.px-1{padding-left:.25rem!important}\n\n.p-2{padding:.5rem!important}\n\n.pt-2,.py-2{padding-top:.5rem!important}\n\n.pr-2,.px-2{padding-right:.5rem!important}\n\n.pb-2,.py-2{padding-bottom:.5rem!important}\n\n.pl-2,.px-2{padding-left:.5rem!important}\n\n.p-3{padding:1rem!important}\n\n.pt-3,.py-3{padding-top:1rem!important}\n\n.pr-3,.px-3{padding-right:1rem!important}\n\n.pb-3,.py-3{padding-bottom:1rem!important}\n\n.pl-3,.px-3{padding-left:1rem!important}\n\n.p-4{padding:1.5rem!important}\n\n.pt-4,.py-4{padding-top:1.5rem!important}\n\n.pr-4,.px-4{padding-right:1.5rem!important}\n\n.pb-4,.py-4{padding-bottom:1.5rem!important}\n\n.pl-4,.px-4{padding-left:1.5rem!important}\n\n.p-5{padding:3rem!important}\n\n.pt-5,.py-5{padding-top:3rem!important}\n\n.pr-5,.px-5{padding-right:3rem!important}\n\n.pb-5,.py-5{padding-bottom:3rem!important}\n\n.pl-5,.px-5{padding-left:3rem!important}\n\n.m-auto{margin:auto!important}\n\n.mt-auto,.my-auto{margin-top:auto!important}\n\n.mr-auto,.mx-auto{margin-right:auto!important}\n\n.mb-auto,.my-auto{margin-bottom:auto!important}\n\n.ml-auto,.mx-auto{margin-left:auto!important}\n\n@media (min-width:576px){.m-sm-0{margin:0!important}.mt-sm-0,.my-sm-0{margin-top:0!important}.mr-sm-0,.mx-sm-0{margin-right:0!important}.mb-sm-0,.my-sm-0{margin-bottom:0!important}.ml-sm-0,.mx-sm-0{margin-left:0!important}.m-sm-1{margin:.25rem!important}.mt-sm-1,.my-sm-1{margin-top:.25rem!important}.mr-sm-1,.mx-sm-1{margin-right:.25rem!important}.mb-sm-1,.my-sm-1{margin-bottom:.25rem!important}.ml-sm-1,.mx-sm-1{margin-left:.25rem!important}.m-sm-2{margin:.5rem!important}.mt-sm-2,.my-sm-2{margin-top:.5rem!important}.mr-sm-2,.mx-sm-2{margin-right:.5rem!important}.mb-sm-2,.my-sm-2{margin-bottom:.5rem!important}.ml-sm-2,.mx-sm-2{margin-left:.5rem!important}.m-sm-3{margin:1rem!important}.mt-sm-3,.my-sm-3{margin-top:1rem!important}.mr-sm-3,.mx-sm-3{margin-right:1rem!important}.mb-sm-3,.my-sm-3{margin-bottom:1rem!important}.ml-sm-3,.mx-sm-3{margin-left:1rem!important}.m-sm-4{margin:1.5rem!important}.mt-sm-4,.my-sm-4{margin-top:1.5rem!important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem!important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem!important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem!important}.m-sm-5{margin:3rem!important}.mt-sm-5,.my-sm-5{margin-top:3rem!important}.mr-sm-5,.mx-sm-5{margin-right:3rem!important}.mb-sm-5,.my-sm-5{margin-bottom:3rem!important}.ml-sm-5,.mx-sm-5{margin-left:3rem!important}.p-sm-0{padding:0!important}.pt-sm-0,.py-sm-0{padding-top:0!important}.pr-sm-0,.px-sm-0{padding-right:0!important}.pb-sm-0,.py-sm-0{padding-bottom:0!important}.pl-sm-0,.px-sm-0{padding-left:0!important}.p-sm-1{padding:.25rem!important}.pt-sm-1,.py-sm-1{padding-top:.25rem!important}.pr-sm-1,.px-sm-1{padding-right:.25rem!important}.pb-sm-1,.py-sm-1{padding-bottom:.25rem!important}.pl-sm-1,.px-sm-1{padding-left:.25rem!important}.p-sm-2{padding:.5rem!important}.pt-sm-2,.py-sm-2{padding-top:.5rem!important}.pr-sm-2,.px-sm-2{padding-right:.5rem!important}.pb-sm-2,.py-sm-2{padding-bottom:.5rem!important}.pl-sm-2,.px-sm-2{padding-left:.5rem!important}.p-sm-3{padding:1rem!important}.pt-sm-3,.py-sm-3{padding-top:1rem!important}.pr-sm-3,.px-sm-3{padding-right:1rem!important}.pb-sm-3,.py-sm-3{padding-bottom:1rem!important}.pl-sm-3,.px-sm-3{padding-left:1rem!important}.p-sm-4{padding:1.5rem!important}.pt-sm-4,.py-sm-4{padding-top:1.5rem!important}.pr-sm-4,.px-sm-4{padding-right:1.5rem!important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem!important}.pl-sm-4,.px-sm-4{padding-left:1.5rem!important}.p-sm-5{padding:3rem!important}.pt-sm-5,.py-sm-5{padding-top:3rem!important}.pr-sm-5,.px-sm-5{padding-right:3rem!important}.pb-sm-5,.py-sm-5{padding-bottom:3rem!important}.pl-sm-5,.px-sm-5{padding-left:3rem!important}.m-sm-auto{margin:auto!important}.mt-sm-auto,.my-sm-auto{margin-top:auto!important}.mr-sm-auto,.mx-sm-auto{margin-right:auto!important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto!important}.ml-sm-auto,.mx-sm-auto{margin-left:auto!important}}\n\n@media (min-width:768px){.m-md-0{margin:0!important}.mt-md-0,.my-md-0{margin-top:0!important}.mr-md-0,.mx-md-0{margin-right:0!important}.mb-md-0,.my-md-0{margin-bottom:0!important}.ml-md-0,.mx-md-0{margin-left:0!important}.m-md-1{margin:.25rem!important}.mt-md-1,.my-md-1{margin-top:.25rem!important}.mr-md-1,.mx-md-1{margin-right:.25rem!important}.mb-md-1,.my-md-1{margin-bottom:.25rem!important}.ml-md-1,.mx-md-1{margin-left:.25rem!important}.m-md-2{margin:.5rem!important}.mt-md-2,.my-md-2{margin-top:.5rem!important}.mr-md-2,.mx-md-2{margin-right:.5rem!important}.mb-md-2,.my-md-2{margin-bottom:.5rem!important}.ml-md-2,.mx-md-2{margin-left:.5rem!important}.m-md-3{margin:1rem!important}.mt-md-3,.my-md-3{margin-top:1rem!important}.mr-md-3,.mx-md-3{margin-right:1rem!important}.mb-md-3,.my-md-3{margin-bottom:1rem!important}.ml-md-3,.mx-md-3{margin-left:1rem!important}.m-md-4{margin:1.5rem!important}.mt-md-4,.my-md-4{margin-top:1.5rem!important}.mr-md-4,.mx-md-4{margin-right:1.5rem!important}.mb-md-4,.my-md-4{margin-bottom:1.5rem!important}.ml-md-4,.mx-md-4{margin-left:1.5rem!important}.m-md-5{margin:3rem!important}.mt-md-5,.my-md-5{margin-top:3rem!important}.mr-md-5,.mx-md-5{margin-right:3rem!important}.mb-md-5,.my-md-5{margin-bottom:3rem!important}.ml-md-5,.mx-md-5{margin-left:3rem!important}.p-md-0{padding:0!important}.pt-md-0,.py-md-0{padding-top:0!important}.pr-md-0,.px-md-0{padding-right:0!important}.pb-md-0,.py-md-0{padding-bottom:0!important}.pl-md-0,.px-md-0{padding-left:0!important}.p-md-1{padding:.25rem!important}.pt-md-1,.py-md-1{padding-top:.25rem!important}.pr-md-1,.px-md-1{padding-right:.25rem!important}.pb-md-1,.py-md-1{padding-bottom:.25rem!important}.pl-md-1,.px-md-1{padding-left:.25rem!important}.p-md-2{padding:.5rem!important}.pt-md-2,.py-md-2{padding-top:.5rem!important}.pr-md-2,.px-md-2{padding-right:.5rem!important}.pb-md-2,.py-md-2{padding-bottom:.5rem!important}.pl-md-2,.px-md-2{padding-left:.5rem!important}.p-md-3{padding:1rem!important}.pt-md-3,.py-md-3{padding-top:1rem!important}.pr-md-3,.px-md-3{padding-right:1rem!important}.pb-md-3,.py-md-3{padding-bottom:1rem!important}.pl-md-3,.px-md-3{padding-left:1rem!important}.p-md-4{padding:1.5rem!important}.pt-md-4,.py-md-4{padding-top:1.5rem!important}.pr-md-4,.px-md-4{padding-right:1.5rem!important}.pb-md-4,.py-md-4{padding-bottom:1.5rem!important}.pl-md-4,.px-md-4{padding-left:1.5rem!important}.p-md-5{padding:3rem!important}.pt-md-5,.py-md-5{padding-top:3rem!important}.pr-md-5,.px-md-5{padding-right:3rem!important}.pb-md-5,.py-md-5{padding-bottom:3rem!important}.pl-md-5,.px-md-5{padding-left:3rem!important}.m-md-auto{margin:auto!important}.mt-md-auto,.my-md-auto{margin-top:auto!important}.mr-md-auto,.mx-md-auto{margin-right:auto!important}.mb-md-auto,.my-md-auto{margin-bottom:auto!important}.ml-md-auto,.mx-md-auto{margin-left:auto!important}}\n\n@media (min-width:992px){.m-lg-0{margin:0!important}.mt-lg-0,.my-lg-0{margin-top:0!important}.mr-lg-0,.mx-lg-0{margin-right:0!important}.mb-lg-0,.my-lg-0{margin-bottom:0!important}.ml-lg-0,.mx-lg-0{margin-left:0!important}.m-lg-1{margin:.25rem!important}.mt-lg-1,.my-lg-1{margin-top:.25rem!important}.mr-lg-1,.mx-lg-1{margin-right:.25rem!important}.mb-lg-1,.my-lg-1{margin-bottom:.25rem!important}.ml-lg-1,.mx-lg-1{margin-left:.25rem!important}.m-lg-2{margin:.5rem!important}.mt-lg-2,.my-lg-2{margin-top:.5rem!important}.mr-lg-2,.mx-lg-2{margin-right:.5rem!important}.mb-lg-2,.my-lg-2{margin-bottom:.5rem!important}.ml-lg-2,.mx-lg-2{margin-left:.5rem!important}.m-lg-3{margin:1rem!important}.mt-lg-3,.my-lg-3{margin-top:1rem!important}.mr-lg-3,.mx-lg-3{margin-right:1rem!important}.mb-lg-3,.my-lg-3{margin-bottom:1rem!important}.ml-lg-3,.mx-lg-3{margin-left:1rem!important}.m-lg-4{margin:1.5rem!important}.mt-lg-4,.my-lg-4{margin-top:1.5rem!important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem!important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem!important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem!important}.m-lg-5{margin:3rem!important}.mt-lg-5,.my-lg-5{margin-top:3rem!important}.mr-lg-5,.mx-lg-5{margin-right:3rem!important}.mb-lg-5,.my-lg-5{margin-bottom:3rem!important}.ml-lg-5,.mx-lg-5{margin-left:3rem!important}.p-lg-0{padding:0!important}.pt-lg-0,.py-lg-0{padding-top:0!important}.pr-lg-0,.px-lg-0{padding-right:0!important}.pb-lg-0,.py-lg-0{padding-bottom:0!important}.pl-lg-0,.px-lg-0{padding-left:0!important}.p-lg-1{padding:.25rem!important}.pt-lg-1,.py-lg-1{padding-top:.25rem!important}.pr-lg-1,.px-lg-1{padding-right:.25rem!important}.pb-lg-1,.py-lg-1{padding-bottom:.25rem!important}.pl-lg-1,.px-lg-1{padding-left:.25rem!important}.p-lg-2{padding:.5rem!important}.pt-lg-2,.py-lg-2{padding-top:.5rem!important}.pr-lg-2,.px-lg-2{padding-right:.5rem!important}.pb-lg-2,.py-lg-2{padding-bottom:.5rem!important}.pl-lg-2,.px-lg-2{padding-left:.5rem!important}.p-lg-3{padding:1rem!important}.pt-lg-3,.py-lg-3{padding-top:1rem!important}.pr-lg-3,.px-lg-3{padding-right:1rem!important}.pb-lg-3,.py-lg-3{padding-bottom:1rem!important}.pl-lg-3,.px-lg-3{padding-left:1rem!important}.p-lg-4{padding:1.5rem!important}.pt-lg-4,.py-lg-4{padding-top:1.5rem!important}.pr-lg-4,.px-lg-4{padding-right:1.5rem!important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem!important}.pl-lg-4,.px-lg-4{padding-left:1.5rem!important}.p-lg-5{padding:3rem!important}.pt-lg-5,.py-lg-5{padding-top:3rem!important}.pr-lg-5,.px-lg-5{padding-right:3rem!important}.pb-lg-5,.py-lg-5{padding-bottom:3rem!important}.pl-lg-5,.px-lg-5{padding-left:3rem!important}.m-lg-auto{margin:auto!important}.mt-lg-auto,.my-lg-auto{margin-top:auto!important}.mr-lg-auto,.mx-lg-auto{margin-right:auto!important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto!important}.ml-lg-auto,.mx-lg-auto{margin-left:auto!important}}\n\n@media (min-width:1200px){.m-xl-0{margin:0!important}.mt-xl-0,.my-xl-0{margin-top:0!important}.mr-xl-0,.mx-xl-0{margin-right:0!important}.mb-xl-0,.my-xl-0{margin-bottom:0!important}.ml-xl-0,.mx-xl-0{margin-left:0!important}.m-xl-1{margin:.25rem!important}.mt-xl-1,.my-xl-1{margin-top:.25rem!important}.mr-xl-1,.mx-xl-1{margin-right:.25rem!important}.mb-xl-1,.my-xl-1{margin-bottom:.25rem!important}.ml-xl-1,.mx-xl-1{margin-left:.25rem!important}.m-xl-2{margin:.5rem!important}.mt-xl-2,.my-xl-2{margin-top:.5rem!important}.mr-xl-2,.mx-xl-2{margin-right:.5rem!important}.mb-xl-2,.my-xl-2{margin-bottom:.5rem!important}.ml-xl-2,.mx-xl-2{margin-left:.5rem!important}.m-xl-3{margin:1rem!important}.mt-xl-3,.my-xl-3{margin-top:1rem!important}.mr-xl-3,.mx-xl-3{margin-right:1rem!important}.mb-xl-3,.my-xl-3{margin-bottom:1rem!important}.ml-xl-3,.mx-xl-3{margin-left:1rem!important}.m-xl-4{margin:1.5rem!important}.mt-xl-4,.my-xl-4{margin-top:1.5rem!important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem!important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem!important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem!important}.m-xl-5{margin:3rem!important}.mt-xl-5,.my-xl-5{margin-top:3rem!important}.mr-xl-5,.mx-xl-5{margin-right:3rem!important}.mb-xl-5,.my-xl-5{margin-bottom:3rem!important}.ml-xl-5,.mx-xl-5{margin-left:3rem!important}.p-xl-0{padding:0!important}.pt-xl-0,.py-xl-0{padding-top:0!important}.pr-xl-0,.px-xl-0{padding-right:0!important}.pb-xl-0,.py-xl-0{padding-bottom:0!important}.pl-xl-0,.px-xl-0{padding-left:0!important}.p-xl-1{padding:.25rem!important}.pt-xl-1,.py-xl-1{padding-top:.25rem!important}.pr-xl-1,.px-xl-1{padding-right:.25rem!important}.pb-xl-1,.py-xl-1{padding-bottom:.25rem!important}.pl-xl-1,.px-xl-1{padding-left:.25rem!important}.p-xl-2{padding:.5rem!important}.pt-xl-2,.py-xl-2{padding-top:.5rem!important}.pr-xl-2,.px-xl-2{padding-right:.5rem!important}.pb-xl-2,.py-xl-2{padding-bottom:.5rem!important}.pl-xl-2,.px-xl-2{padding-left:.5rem!important}.p-xl-3{padding:1rem!important}.pt-xl-3,.py-xl-3{padding-top:1rem!important}.pr-xl-3,.px-xl-3{padding-right:1rem!important}.pb-xl-3,.py-xl-3{padding-bottom:1rem!important}.pl-xl-3,.px-xl-3{padding-left:1rem!important}.p-xl-4{padding:1.5rem!important}.pt-xl-4,.py-xl-4{padding-top:1.5rem!important}.pr-xl-4,.px-xl-4{padding-right:1.5rem!important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem!important}.pl-xl-4,.px-xl-4{padding-left:1.5rem!important}.p-xl-5{padding:3rem!important}.pt-xl-5,.py-xl-5{padding-top:3rem!important}.pr-xl-5,.px-xl-5{padding-right:3rem!important}.pb-xl-5,.py-xl-5{padding-bottom:3rem!important}.pl-xl-5,.px-xl-5{padding-left:3rem!important}.m-xl-auto{margin:auto!important}.mt-xl-auto,.my-xl-auto{margin-top:auto!important}.mr-xl-auto,.mx-xl-auto{margin-right:auto!important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto!important}.ml-xl-auto,.mx-xl-auto{margin-left:auto!important}}\n\n.text-monospace{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}\n\n.text-justify{text-align:justify!important}\n\n.text-nowrap{white-space:nowrap!important}\n\n.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n\n.text-left{text-align:left!important}\n\n.text-right{text-align:right!important}\n\n.text-center{text-align:center!important}\n\n@media (min-width:576px){.text-sm-left{text-align:left!important}.text-sm-right{text-align:right!important}.text-sm-center{text-align:center!important}}\n\n@media (min-width:768px){.text-md-left{text-align:left!important}.text-md-right{text-align:right!important}.text-md-center{text-align:center!important}}\n\n@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}\n\n@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}\n\n.text-lowercase{text-transform:lowercase!important}\n\n.text-uppercase{text-transform:uppercase!important}\n\n.text-capitalize{text-transform:capitalize!important}\n\n.font-weight-light{font-weight:300!important}\n\n.font-weight-normal{font-weight:400!important}\n\n.font-weight-bold{font-weight:700!important}\n\n.font-italic{font-style:italic!important}\n\n.text-white{color:#fff!important}\n\n.text-primary{color:#007bff!important}\n\na.text-primary:focus,a.text-primary:hover{color:#0062cc!important}\n\n.text-secondary{color:#6c757d!important}\n\na.text-secondary:focus,a.text-secondary:hover{color:#545b62!important}\n\n.text-success{color:#28a745!important}\n\na.text-success:focus,a.text-success:hover{color:#1e7e34!important}\n\n.text-info{color:#17a2b8!important}\n\na.text-info:focus,a.text-info:hover{color:#117a8b!important}\n\n.text-warning{color:#ffc107!important}\n\na.text-warning:focus,a.text-warning:hover{color:#d39e00!important}\n\n.text-danger{color:#dc3545!important}\n\na.text-danger:focus,a.text-danger:hover{color:#bd2130!important}\n\n.text-light{color:#f8f9fa!important}\n\na.text-light:focus,a.text-light:hover{color:#dae0e5!important}\n\n.text-dark{color:#343a40!important}\n\na.text-dark:focus,a.text-dark:hover{color:#1d2124!important}\n\n.text-body{color:#212529!important}\n\n.text-muted{color:#6c757d!important}\n\n.text-black-50{color:rgba(0,0,0,.5)!important}\n\n.text-white-50{color:rgba(255,255,255,.5)!important}\n\n.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}\n\n.visible{visibility:visible!important}\n\n.invisible{visibility:hidden!important}\n\n@media print{*,::after,::before{text-shadow:none!important;box-shadow:none!important}a:not(.btn){text-decoration:underline}abbr[title]::after{content:\" (\" attr(title) \")\"}pre{white-space:pre-wrap!important}blockquote,pre{border:1px solid #adb5bd;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}@page{size:a3}body{min-width:992px!important}.container{min-width:992px!important}.navbar{display:none}.badge{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #dee2e6!important}.table-dark{color:inherit}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#dee2e6}.table .thead-dark th{color:inherit;border-color:#dee2e6}}\n\n.carousel-control     \t\t { width:  4%; }\n\n.carousel-control.left,.carousel-control.right {margin-left:15px;background-image:none;}\n\n@media (max-width: 767px) {\n\t.carousel-inner .active.left { left: -100%; }\n\t.carousel-inner .next        { left:  100%; }\n\t.carousel-inner .prev\t\t { left: -100%; }\n\t.active > div { display:none; }\n\t.active > div:first-child { display:block; }\n\n}\n\n@media (min-width: 767px) and (max-width: 992px ) {\n\t.carousel-inner .active.left { left: -50%; }\n\t.carousel-inner .next        { left:  50%; }\n\t.carousel-inner .prev\t\t { left: -50%; }\n\t.active > div { display:none; }\n\t.active > div:first-child { display:block; }\n\t.active > div:first-child + div { display:block; }\n}\n\n@media (min-width: 992px ) {\n\t.carousel-inner .active.left { left: -16.7%; }\n\t.carousel-inner .next        { left:  16.7%; }\n\t.carousel-inner .prev\t\t { left: -16.7%; }\n}\n\n/***************************************************/\n\n.tabDiv {\n  max-width: 30%;\n  padding: 0 4px;\n  display: inline-block;\n  margin-left: 6%;\n  margin-top: 2%;\n  margin-bottom: 2%;\n  border-radius: 8%;\n  cursor: pointer;\n}\n\n.tabDiv p{\n  margin-top: 8%;\n}\n\n.infoDiv{\n  margin: 3%;\n  border: solid #D3D3D3;\n}\n\n.eyeDrops{\n  margin-left: 20%;\n}\n\n/*************************************************************/\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\"> -->\n<!-- <app-search></app-search> -->\n<!-- <app-carousel></app-carousel>\n<section id=\"sectiona\">\n        <div class=\"container\">\n            <div class=\"content-title\">\n                <h2>One Stop for all medical needs</h2>\n            </div>\n            <div class=\"content-text\">\n                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio incidunt velit adipisci consequuntur,\n                    deleniti blanditiis! Porro ducimus dicta facilis eveniet non ut laborum nihil alias quisquam s\n                    imilique perspiciatis distinctio velit debitis quidem sunt excepturi architecto deserunt\n                    voluptate itaque, ad consectetur inventore nostrum accusamus hic. Facilis quis reprehenderit\n                    eum quidem. Provident nisi hic minus ex, natus ea fugiat veritatis iure quibusdam id consequatur\n                    mollitia rerum quo in sint voluptatibus\n                    commodi perspiciatis illum. Repudiandae, quisquam assumenda? Adipisci veritatis a enim\n                    sequi alias, velit deserunt sint aliquid cupiditate harum sed reprehenderit? Quisquam consequatur\n                     mollitia ea eveniet velit odit a laboriosam iusto impedit dolorum?</p>\n            </div>\n        </div>\n    </section>\n<app-home-card></app-home-card> -->\n<!-- </div> -->\n\n<div class = \"prodCarousel\" >\n  <!--Carousel Wrapper-->\n  <mdb-carousel [isControls]=\"true\"  [animation]=\"'slide'\">\n      <!--First slide-->\n      <mdb-slide>\n          <img class=\"d-block w-100\" src=\"assets/images/home/final1.png\" alt=\"First slide\">\n\n      </mdb-slide>\n      <!--/First slide-->\n      <!--Second slide-->\n      <mdb-slide>\n          <img class=\"d-block w-100 h-30\" src=\"assets/images/home/final2.jpg\" alt=\"Second slide\">\n\n      </mdb-slide>\n      <!--/Second slide-->\n      <!--Third slide-->\n      <mdb-slide>\n          <img class=\"d-block w-100 h-30\" src=\"assets/images/home/final3.jpg\" alt=\"Third slide\">\n\n      </mdb-slide>\n      <!--/Third slide-->\n  </mdb-carousel>\n  <!--/.Carousel Wrapper-->\n  </div>\n\n  <div class=\"infoDiv\">\n      <div class=\"tabDiv\">\n          <p style=\"size: 5%; font-weight: bold; text-align: center; padding-bottom: 60%; \"> Sore Throat</p>\n          <p style=\"size: 5%; font-weight: bold; \"> Price</p>\n\n      </div>\n      <div class=\"tabDiv\">\n        <img src=\"assets/images/home/tab4.jpg\" class=\"img\" alt=\"?\" >\n          <p>$46.99</p>\n      </div>\n      <div class=\"tabDiv\">\n          <img src=\"assets/images/home/tab1.jpg\" class=\"img\" alt=\"?\">\n          <p>$46.99</p>\n      </div>\n      <div class=\"tabDiv\">\n          <img src=\"assets/images/home/tab2.jpg\" class=\"img\" alt=\"?\">\n          <p>$46.99</p>\n      </div>\n\n      <div class=\"tabDiv\">\n\n          <img src=\"assets/images/home/tab3.jpg\" class=\"img\" alt=\"?\">\n          <p>$46.99</p>\n\n      </div>\n  </div>\n\n  <div class=\"infoDiv\">\n      <div class=\"tabDiv\">\n          <p style=\"size: 5%; font-weight: bold; text-align: center; padding-bottom: 80%; \"> Eye Drops</p>\n          <p style=\"size: 5%; font-weight: bold; \"> Price</p>\n      </div>\n      <div class=\"tabDiv\">\n          <img src=\"assets/images/home/eyeDrops1.png\" class=\"img\" alt=\"?\" >\n          <p class = \"eyeDrops\">$46.99</p>\n\n      </div>\n      <div class=\"tabDiv\">\n          <img src=\"assets/images/home/eyeDrops2.jpg\" class=\"img\" alt=\"?\">\n          <p class = \"eyeDrops\">$46.99</p>\n\n      </div>\n      <div class=\"tabDiv\">\n          <img src=\"assets/images/home/eyeDrops3.jpg\" class=\"img\" alt=\"?\">\n          <p class = \"eyeDrops\">$46.99</p>\n\n      </div>\n      <div class=\"tabDiv\">\n          <img src=\"assets/images/home/eyeDrops4.jpg\" class=\"img\" alt=\"?\" onclick=\"\">\n          <p class = \"eyeDrops\">$46.99</p>\n      </div>\n  </div>\n  <div>\n  </div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main{\n  margin-left: 30%;\n  margin-top:10%;\n  margin-bottom:10%;\n}\n\n.container {\n  padding: 0 1.2em;\n  margin: auto;\n  margin-top: 2em;\n}\n\n.header{\n  border:solid #6799a3;\n  background: #6799a3;\n  color: white;\n  width: 60%;\n  padding: 1%;\n}\n\n.login{\n  border:solid #6799a3;\n  width: 60%;\n}\n\n.form-control{\n  width:50%;\n  margin-left:10%;\n}\n\n\n\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Default form login -->\n\n  <!-- Default form login -->\n<!-- </div> -->\n\n<div class=\"container\">\n  <mat-card>\n    <mat-card-title fxLayoutAlign=\"center\">\n      Sign up\n    </mat-card-title>\n    <mat-card-content>\n    \n      <form [formGroup]=\"loginForm\" fxLayout =\"column\" (ngSubmit)=\"onClickLogin()\" novalidate>\n        <mat-form-field>\n          <input matInput name=\"email\" formControlName=\"email\" placeholder=\"email\" minlength=\"1\" required>\n          <mat-error *ngIf=\"email.invalid\">\n            Please enter the email\n          </mat-error>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <input matInput type=\"password\" placeholder=\"Password\" name=\"password\" formControlName=\"password\" required>\n          <mat-error *ngIf=\"password.invalid\">\n            Please enter the password\n          </mat-error>\n        </mat-form-field>\n        <br>\n\n        <button mat-button fxLayoutAlign=\"center\" type=\"submit\" >LOGIN</button>\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _datasharing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../datasharing.service */ "./src/app/datasharing.service.ts");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular_2_local_storage__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { LocalStorageService } from 'angular-2-local-storage';



var LoginComponent = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function LoginComponent(fb, restService, router, dataSharingService, localStorageService) {
        this.fb = fb;
        this.restService = restService;
        this.router = router;
        this.dataSharingService = dataSharingService;
        this.localStorageService = localStorageService;
    }
    // tslint:disable-next-line:max-line-length
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "email", {
        get: function () {
            return this.loginForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () {
            return this.loginForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    /*get isLoggedIn() {
      return this.loggedIn.asObservable(); // {2}
    }*/
    LoginComponent.prototype.onClickLogin = function () {
        var _this = this;
        //alert('please wait!!');
        // tslint:disable-next-line:prefer-const
        // tslint:disable-next-line:no-var-keyword
        var verify = this.loginForm.get('email').value;
        var mail = this.loginForm.get('email').value + '/';
        var password = this.loginForm.get('password').value;
        // tslint:disable-next-line:quotemark
        if (mail !== '' && password !== '') {
            this.restService.getUserbyMail(mail).subscribe(function (response) {
                console.log(response);
                _this.user = response;
                console.log(_this.user.user_password);
                console.log(_this.user.user_email);
                if (verify === _this.user.user_email && password === _this.user.user_password) {
                    _this.dataSharingService.isUserLoggedIn.next(true);
                    _this.localStorageService.set('user_object', _this.user);
                    //this.localStorageService.set('key','user_logged_in');
                    //alert('login successful');
                    // this.loggedIn.next(true);
                    // console.log(this.localStorageService.get('key'));
                    _this.router.navigate(['/home'], { preserveQueryParams: true });
                }
                else {
                    alert('Invalid Credentials...Please try again');
                    _this.loginForm.reset();
                }
            });
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _datasharing_service__WEBPACK_IMPORTED_MODULE_3__["DatasharingService"], angular_2_local_storage__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular_2_local_storage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _datasharing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../datasharing.service */ "./src/app/datasharing.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(localStorageService, router, dataSharingService) {
        var _this = this;
        this.localStorageService = localStorageService;
        this.router = router;
        this.dataSharingService = dataSharingService;
        this.localStorageService.clearAll();
        this.dataSharingService.isUserLoggedIn.next(false);
        this.router.navigateByUrl("/searchbar", { skipLocationChange: false }).then(function () {
            return _this.router.navigate(['home']);
        });
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [angular_2_local_storage__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _datasharing_service__WEBPACK_IMPORTED_MODULE_3__["DatasharingService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"]]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation a\n{\n    margin: 0 1em;\n    align-content: center;\n} \n\nmat-stroked-button {\n    background-color: aliceblue;\n} \n\nmat-toolbar {\n    background-color: snow;\n} \n\n.container {\n    padding: 0 1.2em;\n}"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n    <mat-toolbar fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap =\"5px\">\n            <mat-toolbar-row >\n              <button mat-stroked-button color=\"primary\" fxFlex=\"20%%\" fxFlex.xs=\"100%\" routerLink=\"/home\">Home\n                <mat-icon>home</mat-icon>\n              </button>\n\n            </mat-toolbar-row>\n            <mat-toolbar-row>\n              <button mat-stroked-button color=\"primary\" fxFlex=\"20%%\" fxFlex.xs=\"100%\" routerLink=\"/register\">Register\n              </button>\n            </mat-toolbar-row>\n            <mat-toolbar-row>\n              <button mat-stroked-button color=\"primary\" fxFlex=\"20%%\" fxFlex.xs=\"100%\" routerLink=\"/orderhistory\">Order History</button>\n            </mat-toolbar-row>\n      <mat-toolbar-row>\n        <button mat-stroked-button color=\"primary\" fxFlex=\"20%%\" fxFlex.xs=\"100%\" routerLink=\"/product\">Product</button>\n      </mat-toolbar-row>\n\n      <mat-toolbar-row>\n          <button mat-stroked-button color=\"primary\" fxFlex=\"20%%\" fxFlex.xs=\"100%\" routerLink=\"/cart\">Add To Cart</button>\n        </mat-toolbar-row>\n\n        </mat-toolbar>\n    </div> -->\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/order-history/order-history.component.css":
/*!***********************************************************!*\
  !*** ./src/app/order-history/order-history.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    padding: 0 1.2em;\n    margin: auto;\n    margin-top: 2em;\n    background-color:snow;\n  }\n\n\n.mat-card-header {\n  justify-content: center;\n}\n\n\nmat-card {\n  background-color: aliceblue;\n}"

/***/ }),

/***/ "./src/app/order-history/order-history.component.html":
/*!************************************************************!*\
  !*** ./src/app/order-history/order-history.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout =\"column\" fxLayoutGap = \"5px\">\n    <mat-card  *ngFor=\"let order of listOrderHistory\">\n        <mat-card-header>\n          <mat-card-title> Product:  {{order.product_name}}</mat-card-title>\n          <mat-card-subtitle>Order Number : {{order.order_number}}</mat-card-subtitle>\n        </mat-card-header>\n       \n        <mat-card-content fxLayout =\"row\" fxLayout.xs =\"column\" fxLayoutGap=\"5px\">\n          <span fxFlex=\"25%\" fxFlex.xs =\"100%\">\n          Order Date : {{order.order_timestamp}}\n          </span>\n          <span fxFlex=\"25%\" fxFlex.xs =\"100%\"> \n          Order Delivery Date: {{order.order_deliverydate}}\n          </span>\n          <span fxFlex=\"25%\" fxFlex.xs =\"100%\">\n            Quantity : {{order.order_quantity}}\n          </span>\n          <span fxFlex=\"25%\" fxFlex.xs =\"100%\">\n            Price : $ {{order.order_price}}\n          </span>\n        </mat-card-content>\n        <mat-card-actions fxLayout =\"row\" fxLayout.xs =\"column\" fxLayoutGap=\"5px\">\n            <span fxFlex=\"25%\" fxFlex.xs =\"100%\">\n          <button mat-stroked-button> Feedback\n          <mat-icon>\n              feedback           \n          </mat-icon>  \n          </button>\n          </span>\n          <span fxFlex=\"25%\" fxFlex.xs =\"100%\">\n              <button mat-stroked-button> Product Info\n              <mat-icon>\n                  info             \n              </mat-icon>  \n              </button>\n              </span>\n              <span fxFlex=\"25%\" fxFlex.xs =\"100%\">\n                  <button mat-stroked-button> Add To Cart\n                  <mat-icon>\n                      add_shopping_cart             \n                  </mat-icon>  \n                  </button>\n                  </span>\n                  <span fxFlex=\"25%\" fxFlex.xs =\"100%\">\n                      <button mat-stroked-button> Delete\n                      <mat-icon>\n                          delete             \n                      </mat-icon>  \n                      </button>\n                      </span>\n\n        </mat-card-actions>\n      </mat-card>\n      \n    </div>\n"

/***/ }),

/***/ "./src/app/order-history/order-history.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/order-history/order-history.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryComponent", function() { return OrderHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderHistoryComponent = /** @class */ (function () {
    function OrderHistoryComponent(localStorageService, restService) {
        this.localStorageService = localStorageService;
        this.restService = restService;
        this.userid = "";
        this.GetUserDetails();
        this.displayOrderHistory();
    }
    OrderHistoryComponent.prototype.ngOnInit = function () {
    };
    OrderHistoryComponent.prototype.displayOrderHistory = function () {
        var _this = this;
        this.restService.getOrderHistory(this.userid).subscribe(function (response) {
            _this.listOrderHistory = response;
        });
    };
    OrderHistoryComponent.prototype.GetUserDetails = function () {
        this.listUser = this.localStorageService.get('user_object');
        this.userid = this.listUser.user_id;
    };
    OrderHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-history',
            template: __webpack_require__(/*! ./order-history.component.html */ "./src/app/order-history/order-history.component.html"),
            styles: [__webpack_require__(/*! ./order-history.component.css */ "./src/app/order-history/order-history.component.css")]
        }),
        __metadata("design:paramtypes", [angular_2_local_storage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"], _rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"]])
    ], OrderHistoryComponent);
    return OrderHistoryComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".prodcut-heading{\n  font-size: 3vw\n}\n\n.product-desc{\n  font-size: 2vmin\n}\n\n.product-price{\n  width: 2vw\n}\n\n.reviews{\n  margin-left: 3%; width: 90%\n}\n\n.review-heading{\n  font-size: 2vw\n}\n\n.hr-css{\n  width: 100%\n}\n\n.reviewer{\n  font-size: 2vw\n}\n\n.review-desc{\n  font-size: 2vmin; width: 60%;\n}\n\nimg {\n  display: block;\n  max-width: 100%;\n  height: auto;\n\n}\n"

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-4 col-sm-4 col-md-4 center-block\">\n      <br><br>\n      <img src=\"{{ product.productImage }}\">\n    </div>\n    <div class=\"col-lg-6 col-6 col-sm-6 col-md-6\">\n      <h1 class=\"prodcut-heading\">{{ product.productName }}</h1>\n      <h2 class=\"product-price\">${{ product.productPrice }}</h2><br>\n      <p class=\"product-desc\">{{ product.productInfo }}</p>\n       <br><br>\n      <button mat-button type=\"button\" id=\"12\" routerLink=\"buy\" (click)=\"buy($event)\" class=\"btn btn-success\">Buy Now</button>&nbsp;&nbsp;\n      <a routerLink=\"cart\"> <button mat-button type=\"button\" id=\"12\" (click)=\"insertIntoCart()\" class=\"btn btn-primary\">Add to Cart</button></a>\n      <button type=\"button\" class=\"btn btn-primary\" style=\"color: white;\" routerLink=\"/feedback\" >Feedback</button>\n\n    </div>\n  </div>\n</div>\n<div class=\"reviews\">\n  <h1 class=\"review-heading\">Reviews</h1>\n  <hr class=\"hr-css\">\n  <h3 class=\"reviewer\">A. Joe</h3>\n  <div><span class=\"fa fa-star checked\"></span>\n    <span class=\"fa fa-star checked\"></span>\n    <span class=\"fa fa-star checked\"></span>\n    <span class=\"fa fa-star\"></span>\n    <span class=\"fa fa-star\"></span></div>\n  <p class=\"review-desc\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text\n    ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text\n    ever since the 1500s</p><br><br>\n  <h3 class=\"reviewer\">B. Bill</h3>\n  <div><span class=\"fa fa-star checked\"></span>\n    <span class=\"fa fa-star checked\"></span>\n    <span class=\"fa fa-star checked\"></span>\n    <span class=\"fa fa-star checked\"></span>\n    <span class=\"fa fa-star\"></span></div>\n  <p class=\"review-desc\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text\n    ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text\n    ever since the 1500s</p>\n</div>\n\n"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductComponent = /** @class */ (function () {
    function ProductComponent(route, restService) {
        this.route = route;
        this.restService = restService;
        // this.productId = this.route.snapshot.params.param1;
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.Product(12);
        this.userId = "2";
        this.productId = "12";
        this.quantity = "2";
    };
    ProductComponent.prototype.Product = function (id) {
        var _this = this;
        this.restService.getProduct(id).subscribe(function (response) {
            _this.product = response;
            console.log(_this.product);
        });
    };
    ProductComponent.prototype.insertIntoCart = function () {
        var ob = {
            'user_id': this.userId,
            'product_id': this.productId,
            'quantity': this.quantity
        };
        this.restService.insertCart(ob).subscribe(function (response) {
            console.log(response);
        });
    };
    ProductComponent.prototype.buy = function (event) {
        this.productId = event.target.id;
        console.log(event);
        console.log(this.productId);
        var obj = {
            'productId': '12',
            'userId': '1'
        };
        console.log(obj);
        this.restService.buyProduct(obj).subscribe(function (response) {
            alert(response);
        });
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/product/product.module.ts":
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: []
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 0 1.2em;\n  margin: auto;\n  margin-top: 2em;\n}\n\n.container > * {\n  width: 100%;\n}\n\nmat-card {\n  background-color: aliceblue;\n  justify-content: space-between;\n}\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <mat-card>\n      <mat-card-title fxLayoutAlign=\"center\">\n        Sign up\n      </mat-card-title>\n      <mat-card-content>\n            \n            <form [formGroup]='registerForm' fxLayout =\"column\"  novalidate>\n  \n              <mat-form-field>\n                <input matInput placeholder=\"Enter your first name\" formControlName=\"firstname\"   required>\n                \n              </mat-form-field>\n              <p class=\"bg-danger\" *ngIf=\"registerForm.controls.firstname.errors?.required && registerForm.controls.firstname.touched\">Please enter valid first name</p>\n  \n            <mat-form-field>\n                <input matInput placeholder=\"Enter your last name\" formControlName=\"lastname\"  required>      \n            </mat-form-field>\n            <p class=\"bg-danger\" *ngIf=\"registerForm.controls.lastname.errors?.required && registerForm.controls.lastname.touched\">Please enter valid last name</p>\n    \n            <mat-form-field>\n                <input matInput placeholder=\"Enter your email id\" formControlName=\"emailid\" required>\n            </mat-form-field>\n            <p class=\"bg-danger\" *ngIf=\"registerForm.controls.emailid.errors?.required  && registerForm.controls.emailid.touched\">Please enter email id</p>\n            <p class=\"bg-danger\" *ngIf=\"registerForm.controls.emailid.errors?.pattern  && registerForm.controls.emailid.touched\">Please enter email id in valid format </p>\n              \n            <div [formGroup]='passwordGroup' fxLayout =\"column\">\n            <mat-form-field>\n                <input matInput placeholder=\"Enter your password\" formControlName=\"password\"  required> \n                <mat-hint>Password must contain a minimum of 8 letters</mat-hint> \n            </mat-form-field>\n            <p class=\"bg-danger\" *ngIf=\"passwordGroup.controls.password.errors?.required && passwordGroup.controls.password.touched\">Please enter password</p>\n            <p class=\"bg-danger\" *ngIf=\"passwordGroup.controls.password.errors?.pattern && passwordGroup.controls.password.touched\">Please enter strong password</p>\n\n            <br/>\n            <mat-form-field>\n                <input matInput placeholder=\"Reenter password\" formControlName=\"reenterpassword\"  required>   \n            </mat-form-field>\n            <p class=\"bg-danger\" *ngIf=\"passwordGroup.errors?.doesNotMatchPassword && passwordGroup.controls.reenterpassword.touched\">Password does not match</p>\n        </div>\n\n\n      \n        <mat-form-field>\n          <input matInput placeholder=\"Contact Number\" formControlName=\"phone\"  required>\n      </mat-form-field>\n      <p class=\"bg-danger\" *ngIf=\"registerForm.controls.phone.errors?.required && registerForm.controls.phone.touched\">Please enter phone number</p>\n      <p class=\"bg-danger\" *ngIf=\"registerForm.controls.phone.errors?.pattern && registerForm.controls.phone.touched\">Please enter valid phone number</p>\n  \n            <mat-form-field>\n                <input matInput placeholder=\"Suite Number\" formControlName=\"suite\"  required>\n            </mat-form-field>\n            <p class=\"bg-danger\" *ngIf=\"registerForm.controls.suite.errors?.required && registerForm.controls.suite.touched\">Please enter Suite number</p>\n            <p class=\"bg-danger\" *ngIf=\"registerForm.controls.suite.errors?.pattern && registerForm.controls.suite.touched\">Only Numbers Please!</p>\n  \n            <mat-form-field>\n                    <input matInput placeholder=\"Street Name\" formControlName=\"street\"  required>\n                </mat-form-field>\n                <p class=\"bg-danger\" *ngIf=\"registerForm.controls.street.errors?.required && registerForm.controls.street.touched\">Please enter Street Name</p>\n            \n            \n            <mat-form-field>\n                        <input matInput placeholder=\"City\" formControlName=\"city\"  required>\n                    </mat-form-field>\n                    <p class=\"bg-danger\" *ngIf=\"registerForm.controls.city.errors?.required && registerForm.controls.city.touched\">Please enter City Name</p>\n                 \n                    <mat-form-field>\n                      <input matInput placeholder=\"State\" formControlName=\"state\"  required>\n                  </mat-form-field>\n                  <p class=\"bg-danger\" *ngIf=\"registerForm.controls.state.errors?.required && registerForm.controls.state.touched\">Please enter State Name</p>\n                  \n                   \n            <mat-form-field>\n                <input matInput placeholder=\"Country\" formControlName=\"country\"  required>\n            </mat-form-field>\n            <p class=\"bg-danger\" *ngIf=\"registerForm.controls.country.errors?.required && registerForm.controls.country.touched\">Please enter Country Name</p>\n         \n  \n             <mat-form-field>\n                            <input matInput placeholder=\"Zip Code\" formControlName=\"zip\"  required>\n                            <mat-hint>Format ### ###</mat-hint>\n                        </mat-form-field>\n                        <p class=\"bg-danger\" *ngIf=\"registerForm.controls.zip.errors?.required && registerForm.controls.zip.touched\">Please enter Zip Code</p>\n                        <p class=\"bg-danger\" *ngIf=\"registerForm.controls.zip.errors?.pattern && registerForm.controls.zip.touched\">Please enter valid Zip Code</p>\n                     \n  \n  \n          </form>\n       \n      </mat-card-content>\n      <mat-card-actions fxLayoutAlign=\"center\">\n        <button  mat-button type=\"submit\" (click)=\"onClickRegister()\" [disabled]=\"!registerForm.valid\">Sign up</button>\n      </mat-card-actions>\n    </mat-card>\n    </div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _register_register_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../register/register.validator */ "./src/app/register/register.validator.ts");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { FormGroup , FormControl } from '@angular/forms';




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, restService, router) {
        this.formBuilder = formBuilder;
        this.restService = restService;
        this.router = router;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        //passwordPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
        this.passwordPattern = "^[a-zA-Z0-9?=.*?[#?!@$%^&*-]{8,}$$";
        this.phonePattern = "^[0-9]{10}$";
        this.suitePattern = "^[0-9]{1,5}$";
        this.zipcodePattern = "[ABCEGHJKLMNPRSTVXY abceghjklmnprstvxy][0-9][ABCEGHJKLMNPRSTVWXYZ abceghjklmnprstvxy] ?[0-9][ABCEGHJKLMNPRSTVWXYZ abceghjklmnprstvxy][0-9]";
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.passwordGroup = this.formBuilder.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            reenterpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, {
            validator: _register_register_validator__WEBPACK_IMPORTED_MODULE_2__["RegistrationValidator"].validate.bind(this)
        });
        this.registerForm = this.formBuilder.group({
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            emailid: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.emailPattern)]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.phonePattern)]],
            suite: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.suitePattern)]],
            street: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            zip: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.zipcodePattern)]],
            passwordGroup: this.passwordGroup
        });
    };
    RegisterComponent.prototype.onClickRegister = function () {
        var _this = this;
        var user = {
            user_firstname: this.registerForm.get('firstname').value,
            user_lastname: this.registerForm.get('lastname').value,
            user_password: this.passwordGroup.get('password').value,
            user_email: this.registerForm.get('emailid').value,
            user_phone: this.registerForm.get('phone').value,
            user_suite: this.registerForm.get('suite').value,
            user_street: this.registerForm.get('street').value,
            user_city: this.registerForm.get('city').value,
            user_state: this.registerForm.get('state').value,
            user_country: this.registerForm.get('country').value,
            user_zip: this.registerForm.get('zip').value
        };
        this.restService.createUser(user).subscribe(function (response) {
            console.log(response);
            alert("Registration Successful");
            _this.router.navigate(['home']);
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/register/register.validator.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.validator.ts ***!
  \************************************************/
/*! exports provided: RegistrationValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationValidator", function() { return RegistrationValidator; });
var RegistrationValidator = /** @class */ (function () {
    function RegistrationValidator() {
    }
    RegistrationValidator.validate = function (registrationFormGroup) {
        var password = registrationFormGroup.controls.password.value;
        var repeatPassword = registrationFormGroup.controls.reenterpassword.value;
        if (repeatPassword.length <= 0) {
            return null;
        }
        if (repeatPassword !== password) {
            return {
                doesMatchPassword: true
            };
        }
        return null;
    };
    return RegistrationValidator;
}());



/***/ }),

/***/ "./src/app/rest.service.ts":
/*!*********************************!*\
  !*** ./src/app/rest.service.ts ***!
  \*********************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RestService = /** @class */ (function () {
    function RestService(httpClient) {
        this.httpClient = httpClient;
        this.InsertURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].InsertUrl;
        this.LoginUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].LoginUrl;
        this.searchProductURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].searchProductURL;
        this.orderhistoryURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].orderhistoryURL;
        this.buyProductURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].buyProductURL;
        this.loadCartURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].loadCartURL;
        this.deletecartitemURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].deletecartitemURL;
        this.loadUser = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].loadUser;
        this.orderUpdate = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].orderUpdate;
        this.getProductUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].getProductUrl;
        this.insertIntoCartURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].insertIntoCartURL;
        this.getUserbyMailURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].getUserbyMailURL;
        this.postReviewbyProductURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].postReviewbyProductURL;
        this.getproductDetailsURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].getProductbyProductURL;
    }
    RestService.prototype.createUser = function (user) {
        return this.httpClient.post("" + this.InsertURL, user);
    };
    RestService.prototype.login = function () {
        return this.httpClient.post("" + this.LoginUrl, "admin");
    };
    RestService.prototype.getProductByName = function (searchterm) {
        return this.httpClient.get(this.searchProductURL + "/" + searchterm);
    };
    RestService.prototype.getOrderHistory = function (id) {
        return this.httpClient.get(this.orderhistoryURL + "/" + id);
    };
    RestService.prototype.buyProduct = function (obj) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8' });
        return this.httpClient.post("" + this.buyProductURL, obj, { headers: headers });
    };
    RestService.prototype.loadCart = function (id) {
        return this.httpClient.get("" + this.loadCartURL + '/' + id);
    };
    RestService.prototype.deleteItemFromCart = function (id) {
        return this.httpClient.delete("" + this.deletecartitemURL + '/' + id);
    };
    RestService.prototype.loadUserDetails = function (id) {
        return this.httpClient.get("" + this.loadUser + '/' + id);
    };
    RestService.prototype.orderUpdateFunct = function (obj) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8' });
        return this.httpClient.post("" + this.orderUpdate, obj, { headers: headers });
    };
    RestService.prototype.insertCart = function (ob) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8' });
        return this.httpClient.post("" + this.insertIntoCartURL, ob, { headers: headers });
    };
    RestService.prototype.getProduct = function (id) {
        console.log("" + this.getProductUrl + id);
        return this.httpClient.get("" + this.getProductUrl + id);
    };
    RestService.prototype.getUserbyMail = function (user_Email) {
        return this.httpClient.get(this.getUserbyMailURL + "/" + user_Email);
    };
    RestService.prototype.postReviewbyProduct = function (feedback) {
        return this.httpClient.post("" + this.postReviewbyProductURL, feedback);
    };
    RestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RestService);
    return RestService;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.container {\n    /*margin: 1em 0; */\n   \n    display: -ms-grid;\n   \n    display: grid;\n    -ms-grid-columns: (1fr)[4];\n        grid-template-columns: repeat(4, 1fr);\n    -ms-grid-rows: auto;\n        grid-template-rows: auto;\n    padding: 0 9em;\n} \n@media (min-width: 768px) and (max-width: 960px) {\n\n\n.container {\n    /*margin: 1em 0; */\n   \n    display: -ms-grid;\n   \n    display: grid;\n    -ms-grid-columns: (1fr)[4];\n        grid-template-columns: repeat(4, 1fr);\n    -ms-grid-rows: auto;\n        grid-template-rows: auto;\n    padding: 0 5em;\n} \n} \n@media (max-width: 768px) {\n\n\n.container {\n    /*margin: 1em 0; */\n   \n    display: -ms-grid;\n   \n    display: grid;\n    -ms-grid-columns: (1fr)[4];\n        grid-template-columns: repeat(4, 1fr);\n    -ms-grid-rows: auto;\n        grid-template-rows: auto;\n    padding: 0 1em;\n} \n} \ninput {\n    font-family: Arial, \"Times New Roman\", sans-serif;\n\n}\n\n\n\n"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <input type=\"text\" fxFlex=\"90\" placeholder=\"Search..\">\n  <button mat-raised-button fxFlex=\"10\"> \n   <mat-icon>search</mat-icon>\n  </button>\n</div>\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/searchbar/searchbar.component.css":
/*!***************************************************!*\
  !*** ./src/app/searchbar/searchbar.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation a\n{\n\n    margin: 0 1em;\n    align-content: center;\n}\n\n.navigationsearch {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns:3fr 1fr;\n        grid-template-columns:3fr 1fr;\n    margin: 0 1em;\n    align-content: center;\n\n}\n\n.container {\n    padding: 0 1.2em;\n    margin: auto;\n    margin-top: 1em;\n    margin-bottom: 1em;\n  }\n"

/***/ }),

/***/ "./src/app/searchbar/searchbar.component.html":
/*!****************************************************!*\
  !*** ./src/app/searchbar/searchbar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <nav class=\"navigation\" fxLayout =\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"center center\" fxLayoutAlign.xs=\"center stretch\" fxLayoutGap.xs=\"5px\">\n      <a mat-stroked-button routerLink=\"/home\" fxFlex=\"10\">Home</a>\n      <a *ngIf=\"isUserLoggedIn\" mat-stroked-button routerLink=\"/orderhistory\" fxFlex=\"20\">Dashboard</a>\n      \n      <div fxFlex=\"50\" fxFlexOrder.xs =\"6\">\n      <form (ngSubmit) = \"doSearch()\" class=\"navigationsearch\" ngNativeValidate> \n          <input type=\"text\" [(ngModel)]= \"searchterm\" name =\"searchterm\" placeholder=\"Search Products..\" required>\n          <button type=\"submit\"> \n           <mat-icon>search</mat-icon>\n          </button>\n        </form>\n      </div>\n  \n      <a *ngIf=\"!isUserLoggedIn\" mat-stroked-button fxFlex=\"10\" routerLink=\"/register\">Register</a>\n      <a *ngIf=\"!isUserLoggedIn\" mat-stroked-button fxFlex=\"10\" routerLink=\"/login\">Login</a>\n      <a *ngIf=\"isUserLoggedIn\" mat-stroked-button fxFlex=\"10\" routerLink=\"/logout\">Logout</a>\n      \n  </nav>\n  </div>\n"

/***/ }),

/***/ "./src/app/searchbar/searchbar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/searchbar/searchbar.component.ts ***!
  \**************************************************/
/*! exports provided: SearchbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarComponent", function() { return SearchbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _datasharing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../datasharing.service */ "./src/app/datasharing.service.ts");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchbarComponent = /** @class */ (function () {
    function SearchbarComponent(router, dataSharingService, localStorageService) {
        var _this = this;
        this.router = router;
        this.dataSharingService = dataSharingService;
        this.localStorageService = localStorageService;
        this.searchterm = "";
        this.dataSharingService.isUserLoggedIn.subscribe(function (value) {
            _this.isUserLoggedIn = value;
        });
    }
    SearchbarComponent.prototype.ngOnInit = function () {
    };
    SearchbarComponent.prototype.doSearch = function () {
        this.router.navigate(['searchresult', { searchterm: this.searchterm }]);
    };
    SearchbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-searchbar',
            template: __webpack_require__(/*! ./searchbar.component.html */ "./src/app/searchbar/searchbar.component.html"),
            styles: [__webpack_require__(/*! ./searchbar.component.css */ "./src/app/searchbar/searchbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _datasharing_service__WEBPACK_IMPORTED_MODULE_2__["DatasharingService"], angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])
    ], SearchbarComponent);
    return SearchbarComponent;
}());



/***/ }),

/***/ "./src/app/searchresult/searchresult.component.css":
/*!*********************************************************!*\
  !*** ./src/app/searchresult/searchresult.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    padding: 0 1.2em;\n    margin: auto;\n    margin-top: 2em;\n    background-color:snow;\n  }\n\n  .mat-card-header {\n    justify-content: center;\n  }\n\n  mat-card {\n  background-color: aliceblue;\n}"

/***/ }),

/***/ "./src/app/searchresult/searchresult.component.html":
/*!**********************************************************!*\
  !*** ./src/app/searchresult/searchresult.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout =\"column\" fxLayoutGap = \"5px\">\n  <mat-card  *ngFor=\"let product of listProducts\">\n      <mat-card-header>\n        <mat-card-title class=\"example-card\"> Product : {{product.product_name}}</mat-card-title>\n        <mat-card-subtitle>Category : {{product.product_category}}</mat-card-subtitle>\n      </mat-card-header>\n     \n      <mat-card-content fxLayout =\"row\" fxLayout.xs =\"column\" fxLayoutGap=\"5px\">\n        <span fxFlex=\"50%\" fxFlex.xs =\"100%\">\n        Price Per Quantity : $  {{product.product_price}}\n        </span>\n        <span fxFlex=\"50%\" fxFlex.xs =\"100%\"> \n        Available Quantity : {{product.product_quantity}}\n        </span>\n  \n      </mat-card-content>\n      <mat-card-actions fxLayout =\"row\" fxLayout.xs =\"column\" fxLayoutGap=\"5px\">\n          <span fxFlex=\"33%\" fxFlex.xs =\"100%\">\n        <button mat-stroked-button> Feedback\n        <mat-icon>\n            feedback           \n        </mat-icon>  \n        </button>\n        </span>\n        <span fxFlex=\"33%\" fxFlex.xs =\"100%\">\n            <button mat-stroked-button> Add to Cart\n            <mat-icon>\n              add_shopping_cart             \n            </mat-icon>  \n            </button>\n            </span>\n\n            <span fxFlex=\"33%\" fxFlex.xs =\"100%\">\n              <button mat-stroked-button> Product Info\n              <mat-icon>\n                  info             \n              </mat-icon>  \n              </button>\n              </span>\n            \n      </mat-card-actions>\n    </mat-card>\n    \n  </div>\n"

/***/ }),

/***/ "./src/app/searchresult/searchresult.component.ts":
/*!********************************************************!*\
  !*** ./src/app/searchresult/searchresult.component.ts ***!
  \********************************************************/
/*! exports provided: SearchresultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchresultComponent", function() { return SearchresultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchresultComponent = /** @class */ (function () {
    function SearchresultComponent(router, activatedroute, restService, localStorageService) {
        var _this = this;
        this.router = router;
        this.activatedroute = activatedroute;
        this.restService = restService;
        this.localStorageService = localStorageService;
        this.searchterm = "";
        this.activatedroute.params.subscribe(function (params) {
            _this.searchterm = params['searchterm'];
            _this.displaySearchResult(_this.searchterm);
        });
    }
    SearchresultComponent.prototype.ngOnInit = function () {
    };
    SearchresultComponent.prototype.displaySearchResult = function (searchterm) {
        var _this = this;
        this.restService.getProductByName(searchterm).subscribe(function (response) {
            _this.listProducts = response;
            if (!_this.listProducts[0]) {
                _this.router.navigate(['home']);
                alert("No Products found by this name/category.");
            }
            else {
                _this.localStorageService.set('product_object', _this.listProducts);
            }
        });
    };
    SearchresultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-searchresult',
            template: __webpack_require__(/*! ./searchresult.component.html */ "./src/app/searchresult/searchresult.component.html"),
            styles: [__webpack_require__(/*! ./searchresult.component.css */ "./src/app/searchresult/searchresult.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])
    ], SearchresultComponent);
    return SearchresultComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    'InsertUrl': 'https://medplusapi.herokuapp.com/MedPlus/user',
    'LoginUrl': 'https://medplusapi.herokuapp.com/MedPlus/login',
    'searchProductURL': 'https://medplusapi.herokuapp.com/MedPlus/productsearch',
    'orderhistoryURL': 'https://medplusapi.herokuapp.com/MedPlus/orderhistory',
    'buyProductURL': 'https://medplusapi.herokuapp.com/MedPlus/buynow',
    'loadCartURL': 'https://medplusapi.herokuapp.com/MedPlus/checkout',
    'deletecartitemURL': 'https://medplusapi.herokuapp.com/MedPlus/deletecartitem',
    'loadUser': 'https://medplusapi.herokuapp.com/MedPlus/user',
    'orderUpdate': 'https://medplusapi.herokuapp.com/MedPlus/orderupdate',
    "getProductUrl": 'https://medplus-a3.herokuapp.com/MedPlus/product/',
    "insertIntoCartURL": 'https://medplus-a3.herokuapp.com/MedPlus/cart',
    'getUserbyMailURL': 'https://medplusapi.herokuapp.com/MedPlus/email/',
    'postReviewbyProductURL': 'https://medplusapi.herokuapp.com/MedPlus/review',
    'getProductbyProductURL': 'https://medplusapi.herokuapp.com/MedPlus/product/2/'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
//"InsertUrl":'https://medplusapi.herokuapp.com/MedPlus/user'
//test


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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/karthikrammoorthy/MedPlus/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map