(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+3gi":
/*!****************************************************!*\
  !*** ./src/app/account/signUp/signUp.component.ts ***!
  \****************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../account.service */ "2rwd");
/* harmony import */ var _textField_textField_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../textField/textField.component */ "glWx");










class SignUpComponent {
    constructor(mediaObserver, router, formBuilder, accountService, authService) {
        this.mediaObserver = mediaObserver;
        this.router = router;
        this.formBuilder = formBuilder;
        this.accountService = accountService;
        this.authService = authService;
        this.isLoggedIn = true;
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
        });
        this.show = false;
        this.rformSignup = this.formBuilder.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8)]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8)]),
        });
    }
    signInWithGoogle() {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"].PROVIDER_ID);
    }
    signOut() {
        this.authService.signOut();
    }
    setId(userId) {
        localStorage.setItem('userId', JSON.stringify(userId));
    }
    setRefrenceId(refrenceId) {
        localStorage.setItem('refrenceId', JSON.stringify(refrenceId));
    }
    setusername(username) {
        localStorage.setItem('username', JSON.stringify(username));
    }
    setcontact(contact) {
        localStorage.setItem('contact', JSON.stringify(contact));
    }
    setemail(email) {
        localStorage.setItem('email', JSON.stringify(email));
    }
    createAccount() {
        if (this.rformSignup.valid) {
            if (this.rformSignup.value.password === this.rformSignup.value.confirmPassword) {
                this.accountService.createuserAccount(this.rformSignup.value).subscribe((data) => {
                    alert("Account Created");
                    this.router.navigate(['/login']);
                }, (error) => {
                    alert(error.error.message);
                });
            }
            else {
                alert("Password not match");
            }
        }
        else {
            alert("Please Fill All the entries of the Form");
        }
    }
    login() {
        this.router.navigate(['/login']);
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["SocialAuthService"])); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-signUp"]], decls: 62, vars: 8, consts: [[2, "background-color", "#f7f7f7"], [1, "row", 2, "display", "flex", "flex", "1", "flex-direction", "row", "justify-content", "center", "text-align", "center", "padding-top", "5%", "padding-bottom", "5%", "padding-left", "10vw", "padding-right", "10vw"], [1, "cardLeft", 2, "float", "left", "width", "60%"], [2, "width", "100%"], [2, "text-align", "left", "padding-top", "15%", "font-weight", "500"], [2, "text-align", "left", 3, "formGroup"], [2, "display", "flex", "flex-direction", "row", "justify-content", "space-between"], [1, "", 2, "padding-right", "2%", "min-width", "60px"], ["name", "firstName", "rformControlName", "firstName", 1, "textfieldBorderColor", "font13", 2, "min-width", "100px", 3, "rformgroup"], [1, "", 2, "padding-left", "2%"], ["name", "lastName", "rformControlName", "lastName", 1, "textfieldBorderColor", "font13", 3, "rformgroup"], [2, "padding-bottom", "2%"], ["name", "email", "rformControlName", "email", 1, "textfieldBorderColor", "font13", 3, "rformgroup"], [2, "padding-bottom", "1%"], ["name", "password", "type", "password", "rformControlName", "password", 1, "textfieldBorderColor", "font13", 3, "rformgroup"], ["name", "contact", "type", "password", "rformControlName", "confirmPassword", 1, "textfieldBorderColor", "font13", 3, "rformgroup"], [2, "text-align", "center", "margin-top", "5%"], ["type", "button", 1, "btn", "btn-primary", 2, "width", "100%", 3, "click"], [1, "cardRight", 2, "float", "right", "width", "30%"], [2, "padding", "5%"], [2, "text-align", "center", "margin", "5%"], [2, "background-color", "rgb(189, 187, 187)"], [2, "padding-left", "5%", "padding-right", "5%", "padding-top", "3%", "padding-bottom", "3%"], [1, "row"], [1, "col-lg-6"], [2, "width", "40vw"], [1, "hr", 2, "background-color", "black"], [2, "padding", "5%", 3, "click"], [1, "btn", "btn-primary", 2, "padding-left", "2.5%", "padding-right", "2.5%", "background-color", "rgb(63, 61, 61)", "color", "whitesmoke"], [2, "font-weight", "bold", "font-size", "small"], [2, "text-align", "right"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Create Your Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "ns-textField-account", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "ns-textField-account", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Email or Phone number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "ns-textField-account", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "ns-textField-account", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "ns-textField-account", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_31_listener() { return ctx.createAccount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Create Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Hello Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Fill up the Form and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "start Journey with us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_41_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Quick Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " NewsLetter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "hr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignUpComponent_Template_div_click_56_listener() { return ctx.createAccount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "SIGN IN");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\u00A9 2020, Shrivasafoods store Powered by Shopify");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("font-size", ctx.deviceXs || ctx.deviceSm ? "20" : "30", "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.rformSignup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rformgroup", ctx.rformSignup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rformgroup", ctx.rformSignup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rformgroup", ctx.rformSignup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rformgroup", ctx.rformSignup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rformgroup", ctx.rformSignup);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _textField_textField_component__WEBPACK_IMPORTED_MODULE_6__["TextFieldComponent"]], styles: [".cardLeft[_ngcontent-%COMP%] {\n  border-top-left-radius: 12px;\n  border-bottom-left-radius: 12px;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  padding-left: 6vw;\n  padding-right: 6vw;\n}\n\n.cardRight[_ngcontent-%COMP%] {\n  border-top-right-radius: 12px;\n  border-bottom-right-radius: 12px;\n  display: flex;\n  padding-top: 15%;\n  padding-bottom: 15%;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  background-color: #b4d469;\n}\n\n.coloumnChange[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.deviceLgClass[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.deviceSmClass[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.deviceLgFontClass[_ngcontent-%COMP%] {\n  font-size: large;\n}\n\n.deviceSmFontClass[_ngcontent-%COMP%] {\n  font-size: small;\n}\n\n.deviceXs[_ngcontent-%COMP%] {\n  font-size: small;\n}\n\n.deviceLgClass[_ngcontent-%COMP%] {\n  font-size: xx-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9zaWduVXAvc2lnblVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdFO0VBQ0UsNkJBQUE7RUFDQSxnQ0FBQTtFQUdBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFGSjs7QUFJRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQURKOztBQUdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFBSjs7QUFHRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBQUo7O0FBRUU7RUFDQSxnQkFBQTtBQUNGOztBQUVFO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxtQkFBQTtBQUdGIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9zaWduVXAvc2lnblVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRMZWZ0e1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgcGFkZGluZy1sZWZ0OiA2dnc7XG4gIHBhZGRpbmctcmlnaHQ6IDZ2dztcblxuICB9XG4gIC5jYXJkUmlnaHR7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEycHg7XG4gICAgLy8gcGFkZGluZy1sZWZ0OiAxMCU7XG4gICAgLy8gcGFkZGluZy1yaWdodDogMTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZy10b3A6IDE1JTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTUlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNGQ0Njk7XG4gIH1cbiAgLmNvbG91bW5DaGFuZ2V7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5kZXZpY2VMZ0NsYXNze1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5kZXZpY2VTbUNsYXNze1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICAuZGV2aWNlTGdGb250Q2xhc3N7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIH1cblxuICAuZGV2aWNlU21Gb250Q2xhc3N7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIH1cbi5kZXZpY2VYc3tcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cbi5kZXZpY2VMZ0NsYXNzIHtcbiAgZm9udC1zaXplOnh4LWxhcmdlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'app-signUp',
                templateUrl: './signUp.component.html',
                styleUrls: ['./signUp.component.scss']
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["MediaObserver"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }, { type: _account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"] }, { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["SocialAuthService"] }]; }, null); })();


/***/ }),

/***/ "/BOD":
/*!*****************************************************!*\
  !*** ./src/app/home/myorders/myorders.component.ts ***!
  \*****************************************************/
/*! exports provided: MyordersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyordersComponent", function() { return MyordersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "BRKm");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "87QV");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function MyordersComponent_div_7_div_11_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.getImage(item_r5.productImage), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Unit price ", item_r5.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Units ", item_r5.productCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("total price ", item_r5.unitTotal, "");
} }
function MyordersComponent_div_7_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "start phase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyordersComponent_div_7_div_11_Template_p_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const item_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.orderCompleted(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Complete Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Total Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, MyordersComponent_div_7_div_11_div_25_Template, 18, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Phase ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Out for Delievery ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Shipped");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Order Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3 == null ? null : item_r3.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r3.cartData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.date);
} }
function MyordersComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Order Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Order Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Order Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MyordersComponent_div_7_div_11_Template, 67, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.allOrders);
} }
function MyordersComponent_div_8_div_11_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r10.getImage(item_r11.productImage), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r11.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Unit price ", item_r11.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Units ", item_r11.productCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("total price ", item_r11.unitTotal, "");
} }
function MyordersComponent_div_8_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "start phase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyordersComponent_div_8_div_11_Template_p_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const item_r9 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.orderCompleted(item_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Complete Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Total Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, MyordersComponent_div_8_div_11_div_26_Template, 18, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Phase ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Out for Delievery ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Shipped");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Order Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9 == null ? null : item_r9.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r9.cartData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.date);
} }
function MyordersComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Order Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Order Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Order Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MyordersComponent_div_8_div_11_Template, 68, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.allOrders);
} }
class MyordersComponent {
    constructor(mediaObserver, productService, cartService) {
        this.mediaObserver = mediaObserver;
        this.productService = productService;
        this.cartService = cartService;
        this.allOrders = [];
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
        });
        this.myOrders();
    }
    myOrders() {
        this.productService.getOrders().subscribe((products) => {
            this.allOrders = products.orders;
        }, (error) => {
            console.log('error in getting all products');
        });
    }
    orderDetails(item) {
    }
    getImage(imageId) {
        if (!imageId)
            return '';
        return this.productService.productImageUrl(imageId);
    }
    orderCompleted(item) {
    }
}
MyordersComponent.ɵfac = function MyordersComponent_Factory(t) { return new (t || MyordersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"])); };
MyordersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyordersComponent, selectors: [["app-myorders"]], decls: 10, vars: 2, consts: [[2, "background-color", "rgb(253, 251, 251)"], [2, "margin", "2%", "min-height", "500px"], ["label", "Orders"], [2, "text-align", "center", "font-weight", "bold"], [4, "ngIf"], ["label", "Canceled Orders"], [1, "row", 2, "margin", "1%"], [1, "col-xs-2"], [2, "font-size", "large"], [4, "ngFor", "ngForOf"], [1, "row", 2, "border", "1px", "border-style", "groove", "margin", "1%", "padding-top", "3px"], ["data-toggle", "collapse", "href", "#collapseExample", "role", "button", "aria-expanded", "false", "aria-controls", "collapseExample", 1, "btn", "btn-primary", 2, "color", "white"], [1, "btn", "green-btn", 2, "color", "white", 3, "click"], ["id", "collapseExample", 1, "collapse", 2, "border", "1px", "border-style", "groove", "padding-top", "1%", "margin-left", "1%", "margin-right", "1%"], [1, "row"], [1, "col-xs-7"], [2, "padding-left", "2%", "padding-top", "1%", "display", "flex", "flex-direction", "row", "justify-content", "space-between", "background-color", "rgb(230, 230, 230)", "padding-left", "5%"], [1, "col-md-5"], [2, "display", "flex", "flex-direction", "column", "justify-content", "space-between", "padding-left", "2%", "padding-right", "2%"], [2, "border-top-width", "2px", "border-bottom-width", "2px", "border-top-style", "groove", "border-bottom-style", "groove", "margin", "1%"], [2, "display", "flex", "flex-direction", "row", "justify-content", "space-between"], [2, "display", "flex", "flex-direction", "row", "justify-content", "space-between", "padding", "3%"], ["aria-hidden", "true", 1, "fa", "fa-check", "done"], ["aria-hidden", "true", 1, "fa", "fa-check", "inactive"], [2, "display", "flex", "flex-direction", "row", "justify-content", "space-between", "padding-left", "5%", "padding-right", "10%"], [2, "height", "100px", "width", "200px"], [2, "height", "100px", "width", "200px", 3, "src"], [1, "col-xs-6"], [2, "justify-content", "center"], [2, "font-size", "larger"], [1, "col-xs-3", 2, "float", "left"], [2, "font-weight", "500", "font-size", "large"], [1, "col-xs-4"], [1, "row", 2, "width", "100%", "display", "flex", "flex-direction", "row", "justify-content", "space-between"], [1, "col-xs-12"], [2, "padding-right", "2%", "padding-left", "2%", "padding-top", "1%", "display", "flex", "flex-direction", "row", "justify-content", "space-between", "background-color", "rgb(230, 230, 230)", "padding-left", "5%"], [1, "col-lg-2"]], template: function MyordersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "My Orders ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MyordersComponent_div_7_Template, 12, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MyordersComponent_div_8_Template, 12, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceLg || ctx.deviceMd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceXs || ctx.deviceSm);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".done[_ngcontent-%COMP%] {\n  height: 35px;\n  width: 40px;\n  padding: 5px;\n  text-align: center;\n  padding-top: 2%;\n  border-radius: 50%;\n  display: inline-block;\n  color: #fff;\n  font-size: 1.1em;\n  font-weight: 600;\n  background-color: #00a100;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n.inactive[_ngcontent-%COMP%] {\n  height: 35px;\n  width: 40px;\n  padding: 5px;\n  text-align: center;\n  padding-top: 2%;\n  border-radius: 50%;\n  display: inline-block;\n  color: #fff;\n  font-size: 1.1em;\n  font-weight: 600;\n  background-color: #949494;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9teW9yZGVycy9teW9yZGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0NBQUE7QUFDSjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0NBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbXlvcmRlcnMvbXlvcmRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG9uZXtcbiAgaGVpZ2h0OiAzNXB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDIlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBmb250LXNpemU6MS4xZW07XG4gICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDAsIDE2MSwgMCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjIpO1xufVxuXG4uaW5hY3RpdmV7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDQwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMiU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjojZmZmO1xuICBmb250LXNpemU6MS4xZW07XG4gIGZvbnQtd2VpZ2h0OjYwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTQ4LCAxNDgsIDE0OCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcblxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyordersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-myorders',
                templateUrl: './myorders.component.html',
                styleUrls: ['./myorders.component.scss']
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }, { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/srinivasgoud/Documents/git-hub/jamil/PICKSKY-Front-end-Angular/src/main.ts */"zUnb");


/***/ }),

/***/ "0Em7":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _ordersProgress_ordersProgress_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ordersProgress/ordersProgress.component */ "Kg9S");
/* harmony import */ var _addProduct_addProduct_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addProduct/addProduct.component */ "fDLK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin.component */ "TRGY");







const routes = [
    { path: '', component: _admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"], children: [
            { path: '', component: _ordersProgress_ordersProgress_component__WEBPACK_IMPORTED_MODULE_0__["OrdersProgressComponent"] },
            { path: 'addProduct', component: _addProduct_addProduct_component__WEBPACK_IMPORTED_MODULE_1__["AddProductComponent"] },
        ]
    },
];
class AdminRoutingModule {
}
AdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AdminRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "2ChW":
/*!*******************************************!*\
  !*** ./src/app/home/nav/nav.component.ts ***!
  \*******************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _appconstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../appconstants */ "FAXg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../auth.service */ "ccyI");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/popover */ "EDFS");















function NavComponent_div_92_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavComponent_div_92_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavComponent_div_92_p_1_Template, 3, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_div_92_Template_p_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.toggleDisplay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isShow == true);
} }
function NavComponent_div_93_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_div_93_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavComponent_div_93_div_9_ng_template_5_li_16_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_div_93_div_9_ng_template_5_li_16_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r15.onLogoutClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavComponent_div_93_div_9_ng_template_5_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavComponent_div_93_div_9_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "My orders ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Support ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Admin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NavComponent_div_93_div_9_ng_template_5_li_16_Template, 1, 0, "li", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NavComponent_div_93_div_9_ng_template_5_p_17_Template, 2, 0, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.authService.loggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.authService.loggedIn());
} }
function NavComponent_div_93_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavComponent_div_93_div_9_ng_template_5_Template, 18, 2, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hi ", ctx_r7.username, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("popoverTitle", "Hi", ctx_r7.username, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("popover", _r11);
} }
function NavComponent_div_93_i_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 50);
} }
function NavComponent_div_93_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavComponent_div_93_button_1_Template, 3, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " SHRIVASAFOODS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_div_93_Template_p_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.toggleDisplay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NavComponent_div_93_div_9_Template, 7, 3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavComponent_div_93_i_10_Template, 1, 0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx_r2.isHandset$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.authService.loggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.authService.loggedIn());
} }
const _c0 = ["*"];
class NavComponent {
    constructor(breakpointObserver, router, authService) {
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        this.authService = authService;
        this.username = " username";
        this.isShow = false;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
    }
    ngOnInit() {
        // this.username=this.authService.getusername()
    }
    toggleDisplay() {
        this.isShow = !this.isShow;
    }
    catagory(page) {
        this.router.navigate(['catagory/', page]);
    }
    getHeaderNames(indx) { return _appconstants__WEBPACK_IMPORTED_MODULE_3__["HeaderConstants"][indx]; }
    getPicklesConstants(indx) { return _appconstants__WEBPACK_IMPORTED_MODULE_3__["PicklesConstants"][indx]; }
    getTraditionalPodulu(indx) { return _appconstants__WEBPACK_IMPORTED_MODULE_3__["TraditionalPodulu"][indx]; }
    getSweetsandHotConstants(indx) { return _appconstants__WEBPACK_IMPORTED_MODULE_3__["SweetsandHotConstants"][indx]; }
    getSpecialConstants(indx) { return _appconstants__WEBPACK_IMPORTED_MODULE_3__["SpecialConstants"][indx]; }
    getOthersConstants(indx) { return _appconstants__WEBPACK_IMPORTED_MODULE_3__["SupportConstants"][indx]; }
    getAboutusConstants(indx) { return _appconstants__WEBPACK_IMPORTED_MODULE_3__["AboutusConstants"][indx]; }
    getSupportConstants(indx) { return _appconstants__WEBPACK_IMPORTED_MODULE_3__["SupportConstants"][indx]; }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], ngContentSelectors: _c0, decls: 95, vars: 33, consts: [[1, "sidenav-container", 2, "height", "100%"], ["fixedInViewport", "false", 1, "sidenav", 2, "background-color", "white", 3, "mode", "opened"], ["drawer", ""], ["routerLink", "/", "TraditionalPowders", ""], [1, "fundpress-menu", 2, "background-color", "white"], [1, "nav-menu"], ["routerLink", "/", 1, "dropdown"], [1, "dropdown"], ["data-toggle", "dropdown", 1, "dropdown-toggle"], [1, "dropdown-menu"], [3, "click"], ["routerLink", "/specialoffers", 1, "dropdown"], ["routerLink", "/others", 1, "dropdown"], ["routerLink", "/aboutus", 1, "dropdown"], [2, "background-color", "white"], ["style", "width: 100%;margin-top: 1%;margin-left: 5%;margin-bottom: 1%", "class", "row", 4, "ngIf"], ["style", "margin-left: 2%;width: 100%;margin-top: 1%;margin-bottom: 1%", "class", "row", 4, "ngIf"], [1, "row", 2, "width", "100%", "margin-top", "1%", "margin-left", "5%", "margin-bottom", "1%"], ["class", "col-xs-10", "style", "border-radius: 6px;font-weight: 300px  ;  background-color: rgb(240, 238, 238);", 4, "ngIf"], [1, "col-xs-2", 2, "padding-left", "2%", "font-weight", "300px", "color", "grey", 3, "click"], [1, "fa", "fa-times"], [1, "col-xs-10", 2, "border-radius", "6px", "font-weight", "300px", "background-color", "rgb(240, 238, 238)"], ["routerLink", "/login", 1, "fa", "fa-search", 2, "font-weight", "200", "font-size", "large", "padding", "2%", "color", "rgb(134, 132, 132)"], [1, "row", 2, "margin-left", "2%", "width", "100%", "margin-top", "1%", "margin-bottom", "1%"], ["class", "col-xs-3", "type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], [1, "col-xs-4"], ["routerLink", "", 2, "color", "black", "margin-top", "1%", "padding-right", "5%", "font-size", "large", "font-weight", "500"], [1, "col-xs-2"], [1, "col-xs-1", 2, "padding-left", "2%", "font-weight", "300px", "color", "grey", 3, "click"], [1, "fa", "fa-search"], ["class", "col-xs-2", "style", "display: flex;flex-direction: row;padding-top: 1%;", 4, "ngIf"], ["class", "col-xs-2", "class", "fa fa-user-circle-o", "routerLink", "/login", "style", "color: gray;font-size: xx-large;", 4, "ngIf"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 1, "col-xs-3", 3, "click"], ["aria-label", "Side nav toggle icon", 2, "color", "black"], [1, "col-xs-2", 2, "display", "flex", "flex-direction", "row", "padding-top", "1%"], [2, "font-size", "large", "padding-top", "5%"], [1, "fa", "fa-cog", 2, "font-size", "xx-large", 3, "popover", "popoverTitle"], ["popTemplate", ""], [1, "row"], [1, "col-lg-6"], [2, "padding-top", "1%"], ["routerLink", "/myOrders", 1, "fa", "fa-user-circle-o", 2, "font-size", "xx-large"], ["routerLink", "/myOrders", "routerLinkActive", "router-link-active"], ["routerLink", "/support", 1, "fa", "fa-user-circle-o", 2, "font-size", "xx-large"], ["routerLink", "/support", "routerLinkActive", "router-link-active"], ["routerLink", "/admin", 1, "fa", "fa-user-circle-o", 2, "font-size", "xx-large"], ["routerLink", "/admin", "routerLinkActive", "router-link-active"], ["style", "font-size: xx-large", "class", "fa fa-sign-out", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "fa", "fa-sign-out", 2, "font-size", "xx-large", 3, "click"], ["routerLink", "/login", 1, "fa", "fa-user-circle-o", 2, "color", "gray", "font-size", "xx-large"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Catagories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-nav-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_17_listener() { return ctx.catagory(ctx.getPicklesConstants(1)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_20_listener() { return ctx.catagory(ctx.getPicklesConstants(2)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_27_listener() { return ctx.catagory(ctx.getTraditionalPodulu(1)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_30_listener() { return ctx.catagory(ctx.getTraditionalPodulu(2)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_37_listener() { return ctx.catagory(ctx.getSweetsandHotConstants(1)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_40_listener() { return ctx.catagory(ctx.getSweetsandHotConstants(2)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_47_listener() { return ctx.catagory(ctx.getSpecialConstants(1)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_50_listener() { return ctx.catagory(ctx.getSpecialConstants(2)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_53_listener() { return ctx.catagory(ctx.getSpecialConstants(3)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_56_listener() { return ctx.catagory(ctx.getSpecialConstants(4)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_63_listener() { return ctx.catagory(ctx.getOthersConstants(1)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_66_listener() { return ctx.catagory(ctx.getOthersConstants(1)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_69_listener() { return ctx.catagory(ctx.getOthersConstants(1)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_76_listener() { return ctx.catagory(ctx.getAboutusConstants(1)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_79_listener() { return ctx.catagory(ctx.getAboutusConstants(2)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_82_listener() { return ctx.catagory(ctx.getAboutusConstants(3)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_85_listener() { return ctx.catagory(ctx.getAboutusConstants(4)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_a_click_88_listener() { return ctx.catagory(ctx.getAboutusConstants(5)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-toolbar", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, NavComponent_div_92_Template, 4, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, NavComponent_div_93_Template, 11, 5, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 29, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 31, ctx.isHandset$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getHeaderNames(1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getHeaderNames(2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getPicklesConstants(1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getPicklesConstants(2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getHeaderNames(3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getTraditionalPodulu(1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getTraditionalPodulu(2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getHeaderNames(4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getSweetsandHotConstants(1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getSweetsandHotConstants(2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getHeaderNames(5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getSpecialConstants(1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getSpecialConstants(2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getSpecialConstants(3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getSpecialConstants(4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getHeaderNames(6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getOthersConstants(1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getOthersConstants(1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getOthersConstants(1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getHeaderNames(7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getAboutusConstants(1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getAboutusConstants(2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getAboutusConstants(3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getAboutusConstants(4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getAboutusConstants(5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShow == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShow == false);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatNavList"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_12__["PopoverDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: white;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 400px;\n}\n\n.dropdown[_ngcontent-%COMP%]:hover    > .dropdown-menu[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.nav-menu[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .nav-menu[_ngcontent-%COMP%]    > li.focus[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .nav-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%] {\n  color: green;\n  font-weight: lighter;\n}\n\n.fundpress-menu[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 18px 10px;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n}\n\n.fundpress-menu[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n  background-color: green;\n}\n\n.nav-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  height: 50%;\n  width: 100%;\n}\n\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: flex;\n  margin-left: 250px;\n}\n\n.mat-toolbar-row[_ngcontent-%COMP%], .mat-toolbar-single-row[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0 16px;\n  width: 100%;\n  color: black;\n  flex-direction: row;\n  align-items: center;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  border-color: white;\n  background-color: #e6e3e3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0FBRUY7O0FBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFHQTs7QUFEQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFJRjs7QUFGQTtFQUNFLHVCQUFBO0FBS0Y7O0FBSEE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQU1GOztBQUpBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBT0Y7O0FBSkE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDRCxZQUFBO0VBQ0MsbUJBQUE7RUFDQSxtQkFBQTtBQU9GOztBQUpBO0VBQ0EsV0FBQTtBQU9BOztBQUxBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtBQVFGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVye1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnNpZGVuYXZ7XG4gIHdpZHRoOiA0MDBweDtcbiAgLy8gYm94LXNoYWRvdzogcmdiKDE5OSwgMTk5LCAxOTkpO1xufVxuLmRyb3Bkb3duOmhvdmVyPi5kcm9wZG93bi1tZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubmF2LW1lbnU+bGkuYWN0aXZlPmEsIC5uYXYtbWVudT5saS5mb2N1cz5hLCAubmF2LW1lbnU+bGk6aG92ZXI+YSB7XG5jb2xvcjogZ3JlZW47XG5mb250LXdlaWdodDogbGlnaHRlcjtcbn1cbi5mdW5kcHJlc3MtbWVudSAubmF2LW1lbnUgbGkgYSB7XG4gIHBhZGRpbmc6IDE4cHggMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmZ1bmRwcmVzcy1tZW51IC5uYXYtbWVudSBsaSBhOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuLm5hdi1tZW51PmxpPmEge1xuICBoZWlnaHQ6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiAyNTBweDtcblxufVxuLm1hdC10b29sYmFyLXJvdywgLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuIGNvbG9yOiBibGFjaztcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxufVxuLmRyb3Bkb3duLW1lbnV7XG53aWR0aDogMTAwJTtcbn1cbi5tYXQtdG9vbGJhciB7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDIyNywgMjI3KTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.scss']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "2rwd":
/*!********************************************!*\
  !*** ./src/app/account/account.service.ts ***!
  \********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "ccyI");





class AccountService {
    constructor(http, myauthService) {
        this.http = http;
        this.myauthService = myauthService;
        this.httpHeaders = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'Application/Json',
                accept: ' application/json'
            })
        };
    }
    createuserAccount(newUser) {
        return this.http.post('http://localhost:8000/api/users/', {
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            password: newUser.password,
            accountBonus: 1,
            provider: newUser.provider,
            token: newUser.token
        }, this.httpHeaders);
    }
    signIn(newUser) {
        return this.http.post('http://localhost:8000/api/users/signIn', {
            username: newUser.username,
            email: newUser.email,
            password: newUser.password,
            contact: newUser.contact,
            accountBonus: 1,
            provider: newUser.provider,
            token: newUser.token
        }, this.httpHeaders);
    }
    login(user) {
        return this.http.post('http://localhost:8000/api/users/login', {
            email: user.email,
            password: user.password,
            idToken: user.idToken,
            provider: user.provider
        }, this.httpHeaders);
    }
    forgetPassword(data) {
        // const email = this.myauthService.getemail()
        return this.http.post('http://localhost:8000/api/users/forgetPassword/', {
            email: data.email
        }, this.httpHeaders);
    }
    resetPassword(newPass) {
        return this.http.post('http://localhost:8000/api/users/resetPassword/', {
            confirmPassword: newPass.confirmPassword,
            password: newPass.newPassword,
            resetToken: newPass.resetToken
        }, this.httpHeaders);
    }
    accountVerify(data) {
        return this.http.post('http://localhost:8000/api/users/accountVerify/', {
            token: data.accountToken,
            isVerify: data.isVerify,
        }, this.httpHeaders);
    }
    editInfo(data) {
        return this.http.post('http://localhost:8000/api/users/editInfo/', {
            userId: this.myauthService.getID(),
            username: data.username,
            email: data.email,
            contact: data.contact,
        }, this.httpHeaders);
    }
    editPassword(data) {
        return this.http.post('http://localhost:8000/api/users/editPassword/', {
            userId: this.myauthService.getID(),
            oldPassword: data.oldPassword,
            newPassword: data.newPassword,
        }, this.httpHeaders);
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "87QV":
/*!**************************************!*\
  !*** ./src/app/home/cart.service.ts ***!
  \**************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "ccyI");





class CartService {
    constructor(http, myauthService) {
        this.http = http;
        this.myauthService = myauthService;
        this.cart = [];
        this.total = 0;
        this.httpHeaders = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'Application/Json',
                accept: ' application/json'
            })
        };
    }
    addProduct(product) {
        let productInCart;
        productInCart = this.cart.find((item) => {
            if (item._id === product._id) {
                return true;
            }
        });
        if (!productInCart) {
            this.cart.push(product);
        }
        else {
            this.cart.forEach((item) => {
                if (item._id == product._id) {
                    item.productCount = item.productCount + 1;
                    item.unitTotal = item.unitTotal + item.price;
                }
            });
        }
        console.log(this.cart);
    }
    getProducts() {
        return this.cart;
    }
    getTotalPrice() {
        let subtotal = 0;
        this.cart.forEach(item => {
            subtotal = item.productCount * item.price + subtotal;
        });
        return subtotal;
    }
    order(orderData) {
        const username = this.myauthService.getusername();
        const user = this.myauthService.getID();
        return this.http.post('http://localhost:8000/api/orders/', {
            cartData: orderData.cartItems,
            total: orderData.total,
            user: user,
            username: username,
            refrence: orderData.refrence,
            phase: orderData.phase,
            ownerEmail: orderData.ownerEmail
        }, this.httpHeaders);
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "8zhZ":
/*!***************************************************!*\
  !*** ./src/app/home/aboutus/aboutus.component.ts ***!
  \***************************************************/
/*! exports provided: AboutUSComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUSComponent", function() { return AboutUSComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "BRKm");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "87QV");





class AboutUSComponent {
    constructor(mediaObserver, productService, cartService) {
        this.mediaObserver = mediaObserver;
        this.productService = productService;
        this.cartService = cartService;
        this.products = [];
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
        });
    }
    submit() {
    }
}
AboutUSComponent.ɵfac = function AboutUSComponent_Factory(t) { return new (t || AboutUSComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"])); };
AboutUSComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutUSComponent, selectors: [["app-aboutus"]], decls: 58, vars: 0, consts: [[2, "background-color", "rgb(240, 236, 236)", "min-height", "500px"], [1, "text-block1", 2, "text-align", "center"], [2, "height", "20%"], ["src", "../assets/images/veg.jpg", 1, "img-responsive", "gradient", 2, "width", "100%", ";object-fit", "cove\n  r", "border-radius", "6px"], [2, "text-align", "center", "margin-top", "5%", "margin-left", "20%", "margin-right", "20%", "display", "flex", "flex-direction", "column"], [2, "word-wrap", "break-word", "color", "#c59d5f"], [2, "background-color", "black", "text-align", "center", "padding-top", "5%", "padding-left", "5%", "padding-right", "5%", "display", "flex", "flex-direction", "column"], [2, "text-align", "center", "color", "#c59d5f"], [1, "row", 2, "margin-bottom", "1%"], [1, "col-xs-5", 2, "padding", "5%"], [1, "col-xs-1"], [2, "padding-top", "2.5%", "padding-left", "2.5%", "padding-right", "2.5%", "border-radius", "6px"], [1, "text-block2"], ["src", "../assets/images/7.jpg", 1, "img-responsive", "gradient", 2, "width", "100%", "height", "100%", ";object-fit", "cove\n    r", "border-radius", "6px"], [1, "text-block3"], [2, "height", "300px"], ["src", "../assets/images/7.jpg", 1, "img-responsive", "gradient", 2, "height", "300px", "width", "100%"]], template: function AboutUSComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Introductions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Eros ludus laboramus ne eam. Mea inani utamur rationibus eu, his ei assum volutpat. Integre dolorem mel an, mei nihil omittam et. Postea regione mentitum ei quo, debitis phaedrum conceptam vis at. Fug it choro scriptorem nam an, vel ex possit audire. Qui elitr graeci referrentur ad, eu ludus laudem tincidunt vel, ad vim wisi graeci efficiendi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Begin Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Diving in returant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Maecenas est dui, commodo a rutrum eget, interdum vel lorem. Aliquam euismod dapibus turpis, vitae placerat purus vestibulum non. Pellentesque ut nisi viverra, dictum nisi sed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Diving in returant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Maecenas est dui, commodo a rutrum eget, interdum vel lorem. Aliquam euismod dapibus turpis, vitae placerat purus vestibulum non. Pellentesque ut nisi viverra, dictum nisi sed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Diving in returant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Maecenas est dui, commodo a rutrum eget, interdum vel lorem. Aliquam euismod dapibus turpis, vitae placerat purus vestibulum non. Pellentesque ut nisi viverra, dictum nisi sed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "How work bring us Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".text-block1[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  padding-top: 9%;\n  padding-left: 45%;\n  font-size: 2vw;\n  margin-bottom: 12px;\n  font-weight: 500;\n  text-align: center;\n}\n\n.text-block2[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  padding-top: 25%;\n  padding-left: 25%;\n  font-size: 2vw;\n  margin-bottom: 12px;\n  font-weight: 500;\n}\n\n.text-block3[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  padding-top: 10%;\n  padding-left: 40%;\n  font-size: 2vw;\n  margin-bottom: 12px;\n  font-weight: 500;\n}\n\n.deviceXs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex: 1;\n}\n\n.deviceLg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.gradient[_ngcontent-%COMP%] {\n  background-color: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hYm91dHVzL2Fib3V0dXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUdGOztBQURBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtBQUlGOztBQUZBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQyxlQUFBO0FBS0g7O0FBSEE7RUFDRSx5RUFBQTtBQU1GIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9hYm91dHVzL2Fib3V0dXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1ibG9jazEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDklO1xuICBwYWRkaW5nLWxlZnQ6IDQ1JTtcbiAgZm9udC1zaXplOiAydnc7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50ZXh0LWJsb2NrMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMjUlO1xuICBwYWRkaW5nLWxlZnQ6IDI1JTtcbiAgZm9udC1zaXplOiAydnc7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4udGV4dC1ibG9jazMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDEwJTtcbiAgcGFkZGluZy1sZWZ0OiA0MCU7XG4gIGZvbnQtc2l6ZTogMnZ3O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmRldmljZVhze1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4OjFcbn1cbi5kZXZpY2VMZ3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgZmxleC13cmFwOiB3cmFwO1xufVxuLmdyYWRpZW50e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjUpKTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUSComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aboutus',
                templateUrl: './aboutus.component.html',
                styleUrls: ['./aboutus.component.scss']
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }, { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }]; }, null); })();


/***/ }),

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _referFriend_referFriend_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./referFriend/referFriend.component */ "K30+");
/* harmony import */ var _giftCards_giftCards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./giftCards/giftCards.component */ "Yg7E");
/* harmony import */ var _FAQ_FAQ_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FAQ/FAQ.component */ "Eoff");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog/blog.component */ "tFkF");
/* harmony import */ var _testimonals_testimonals_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./testimonals/testimonals.component */ "hTs5");
/* harmony import */ var _discount_discount_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discount/discount.component */ "DG48");
/* harmony import */ var _catagory_catagory_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./catagory/catagory.component */ "cYb6");
/* harmony import */ var _supportPage_supportPage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./supportPage/supportPage.component */ "sjMi");
/* harmony import */ var _myorders_myorders_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./myorders/myorders.component */ "/BOD");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cart/cart.component */ "PDn9");
/* harmony import */ var _mainPage_mainPage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mainPage/mainPage.component */ "HZa5");
/* harmony import */ var _productDetail_productDetail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./productDetail/productDetail.component */ "xbwq");
/* harmony import */ var _specialoffers_specialoffers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./specialoffers/specialoffers.component */ "S5X1");
/* harmony import */ var _TraditionalPowders_TraditionalPowders_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TraditionalPowders/TraditionalPowders.component */ "N3GV");
/* harmony import */ var _sweetandhot_sweetandhot_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sweetandhot/sweetandhot.component */ "bFHB");
/* harmony import */ var _others_others_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./others/others.component */ "cMot");
/* harmony import */ var _Pickles_Pickles_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Pickles/Pickles.component */ "j67j");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "8zhZ");
/* harmony import */ var _privacyandpolicy_privacyandpolicy_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./privacyandpolicy/privacyandpolicy.component */ "YMok");
/* harmony import */ var _returnandrefunds_returnandrefunds_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./returnandrefunds/returnandrefunds.component */ "kH2C");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./../auth.guard */ "tIkO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./home/home.component */ "cPhq");


























const routes = [
    {
        path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"], children: [
            { path: 'detail', component: _productDetail_productDetail_component__WEBPACK_IMPORTED_MODULE_11__["ProductDetailComponent"] },
            { path: 'pickles', component: _Pickles_Pickles_component__WEBPACK_IMPORTED_MODULE_16__["PicklesComponent"] },
            { path: 'powders', component: _TraditionalPowders_TraditionalPowders_component__WEBPACK_IMPORTED_MODULE_13__["TraditionalPowdersComponent"] },
            { path: 'sweets', component: _sweetandhot_sweetandhot_component__WEBPACK_IMPORTED_MODULE_14__["SweetandHotComponent"] },
            { path: 'specialoffers', component: _specialoffers_specialoffers_component__WEBPACK_IMPORTED_MODULE_12__["SpecialOffersComponent"] },
            { path: 'others', component: _others_others_component__WEBPACK_IMPORTED_MODULE_15__["OthersComponent"] },
            { path: 'discount/:username', component: _discount_discount_component__WEBPACK_IMPORTED_MODULE_5__["DiscountComponent"] },
            { path: 'catagory/:page', component: _catagory_catagory_component__WEBPACK_IMPORTED_MODULE_6__["CatagoryComponent"] },
            { path: 'aboutUs', component: _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_17__["AboutUSComponent"] },
            { path: 'testimonals', component: _testimonals_testimonals_component__WEBPACK_IMPORTED_MODULE_4__["TestimonalsComponent"] },
            { path: 'faq', component: _FAQ_FAQ_component__WEBPACK_IMPORTED_MODULE_2__["FAQComponent"] },
            { path: 'privacy', component: _privacyandpolicy_privacyandpolicy_component__WEBPACK_IMPORTED_MODULE_18__["PrivacyandpolicyComponent"] },
            { path: 'returns', component: _returnandrefunds_returnandrefunds_component__WEBPACK_IMPORTED_MODULE_19__["ReturnandrefundsComponent"] },
            // { path: 'support', component: SupportPageComponent },
            { path: 'supportpage', component: _supportPage_supportPage_component__WEBPACK_IMPORTED_MODULE_7__["SupportPageComponent"] },
            { path: 'blog', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"] },
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"] },
            { path: 'giftCards', component: _giftCards_giftCards_component__WEBPACK_IMPORTED_MODULE_1__["GiftCardsComponent"] },
            { path: 'referFriend', component: _referFriend_referFriend_component__WEBPACK_IMPORTED_MODULE_0__["ReferFriendComponent"] },
            { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_9__["CartComponent"], },
            { path: 'myOrders', component: _myorders_myorders_component__WEBPACK_IMPORTED_MODULE_8__["MyordersComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]] },
            { path: '', component: _mainPage_mainPage_component__WEBPACK_IMPORTED_MODULE_10__["MainPageComponent"] },
        ]
    },
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_21__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Awi1":
/*!********************************************************!*\
  !*** ./src/app/admin/textField/textField.component.ts ***!
  \********************************************************/
/*! exports provided: TextFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldComponent", function() { return TextFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function TextFieldComponent_h3_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "incomplete input");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TextFieldComponent_h3_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "format is incorrect");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TextFieldComponent_h3_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "length is incorrect");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { errorBorder: a0 }; };
class TextFieldComponent {
    constructor() { }
    ngOnInit() { }
    get invalidControl() {
        if (this.rformgroup.dirty &&
            this.rformgroup.controls[this.rformControlName].touched &&
            this.rformgroup.controls[this.rformControlName].invalid) {
            return true;
        }
        else {
            return false;
        }
    }
    get errorRequired() {
        if (this.rformgroup.dirty &&
            this.rformgroup.controls[this.rformControlName].touched &&
            this.rformgroup.controls[this.rformControlName].errors &&
            this.rformgroup.controls[this.rformControlName].errors.required) {
            return true;
        }
        else {
            return false;
        }
    }
    get errorFormate() {
        if (this.rformgroup.dirty &&
            this.rformgroup.controls[this.rformControlName].touched &&
            this.rformgroup.controls[this.rformControlName].errors &&
            this.rformgroup.controls[this.rformControlName].errors.email) {
            return true;
        }
        else {
            return false;
        }
    }
    get errorminLength() {
        if (this.rformgroup.dirty &&
            this.rformgroup.controls[this.rformControlName].touched &&
            this.rformgroup.controls[this.rformControlName].errors &&
            this.rformgroup.controls[this.rformControlName].errors.minlength) {
            return true;
        }
        else {
            return false;
        }
    }
    get errormaxLength() {
        if (this.rformgroup.dirty &&
            this.rformgroup.controls[this.rformControlName].touched &&
            this.rformgroup.controls[this.rformControlName].errors &&
            this.rformgroup.controls[this.rformControlName].errors.maxlength) {
            return true;
        }
        else {
            return false;
        }
    }
}
TextFieldComponent.ɵfac = function TextFieldComponent_Factory(t) { return new (t || TextFieldComponent)(); };
TextFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextFieldComponent, selectors: [["ns-textField-admin"]], inputs: { rformgroup: "rformgroup", rformControlName: "rformControlName", rtext: "rtext", class: "class", type: "type", hint: "hint" }, decls: 5, vars: 9, consts: [[3, "formGroup"], [1, "form-control", "textFieldStling", 3, "formControlName", "type", "ngClass"], ["class", "errorlbl", 4, "ngIf"], [1, "errorlbl"]], template: function TextFieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TextFieldComponent_h3_2_Template, 2, 0, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TextFieldComponent_h3_3_Template, 2, 0, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TextFieldComponent_h3_4_Template, 2, 0, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.rformgroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.rformControlName)("type", ctx.type)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.invalidControl));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorRequired);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorFormate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorminLength || ctx.errormaxLength);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".textFieldStling[_ngcontent-%COMP%] {\n  border-width: 1dp;\n  size: 10;\n  width: 340px;\n  border-radius: 5px;\n}\n\n.errorBorder[_ngcontent-%COMP%] {\n  border-width: 1dp;\n  border-color: red;\n  border: 5%;\n  \n}\n\n.errorlbl[_ngcontent-%COMP%] {\n  color: red;\n  font-family: \"Roboto\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdGV4dEZpZWxkL3RleHRGaWVsZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGlCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi90ZXh0RmllbGQvdGV4dEZpZWxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udGV4dEZpZWxkU3RsaW5nIHtcbiAgICBib3JkZXItd2lkdGg6IDFkcDtcbiAgICBzaXplOiAxMDtcbiAgICB3aWR0aDogMzQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uZXJyb3JCb3JkZXJ7XG4gICAgYm9yZGVyLXdpZHRoOiAxZHA7XG4gICAgYm9yZGVyLWNvbG9yOiByZWQgO1xuICAgIGJvcmRlcjogNSU7XG4gICAgLyogbWFyZ2luOiAyJTsgICAqL1xufVxuLmVycm9ybGJse1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextFieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "ns-textField-admin",
                templateUrl: './textField.component.html',
                styleUrls: ['./textField.component.scss']
            }]
    }], function () { return []; }, { rformgroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rformControlName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rtext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], class: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "BRKm":
/*!*****************************************!*\
  !*** ./src/app/home/product.service.ts ***!
  \*****************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "ccyI");





class ProductService {
    constructor(http, myauthService) {
        this.http = http;
        this.myauthService = myauthService;
        this.phase = "delivery phase";
        this.httpHeaders = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'Application/Json',
                accept: ' application/json'
            })
        };
    }
    getProducts() {
        return this.http.get('http://localhost:8000/api/products', this.httpHeaders);
    }
    getOrders() {
        return this.http.get('http://localhost:8000/api/orders/' + this.myauthService.getID(), this.httpHeaders);
    }
    featuredProducts() {
        return this.http.get('http://localhost:8000/api/products/featuredProducts', this.httpHeaders);
    }
    getCatagoryProducts(catagory) {
        return this.http.get('http://localhost:8000/api/products/catagory/' + catagory, this.httpHeaders);
    }
    productImageUrl(name) {
        return 'http://localhost:8000/api/products/image/' + name;
    }
    referFriend(data) {
        return this.http.post('http://localhost:8000/api/users/referFriend', {
            userId: this.myauthService.getID(),
            refrenceCode: data.refrenceCode,
            friendEmail: data.friendEmail
        }, this.httpHeaders);
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "DG48":
/*!*****************************************************!*\
  !*** ./src/app/home/discount/discount.component.ts ***!
  \*****************************************************/
/*! exports provided: DiscountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountComponent", function() { return DiscountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/signIn"]; };
const _c1 = function () { return ["/"]; };
class DiscountComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.username = this.route.snapshot.paramMap.get("username");
    }
}
DiscountComponent.ɵfac = function DiscountComponent_Factory(t) { return new (t || DiscountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
DiscountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DiscountComponent, selectors: [["app-discount"]], decls: 12, vars: 5, consts: [[1, "row", 2, "margin", "5%"], [1, "col-xs-6"], [2, "text-align", "right", "margin-bottom", "35%", "padding-right", "10%"], ["routerLinkActive", "router-link-active", 2, "color", "blue", 3, "routerLink"], ["routerLinkActive", "router-link-active", 1, "btn", "btn-primary", 3, "routerLink"]], template: function DiscountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nimage\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Use the app by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "SignIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Find Food");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.username, " gives you 10% discount of your First order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZGlzY291bnQvZGlzY291bnQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiscountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-discount',
                templateUrl: './discount.component.html',
                styleUrls: ['./discount.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "DfQd":
/*!**************************************************************!*\
  !*** ./src/app/account/emailVerify/emailVerify.component.ts ***!
  \**************************************************************/
/*! exports provided: EmailVerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailVerifyComponent", function() { return EmailVerifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_account_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/account/account.service */ "2rwd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class EmailVerifyComponent {
    constructor(accountService, route) {
        this.accountService = accountService;
        this.route = route;
        this.isVerify = true;
    }
    ngOnInit() {
        const token = this.route.snapshot.paramMap.get("token");
        this.accountToken = token;
        this.verify();
    }
    verify() {
        const data = {
            accountToken: this.accountToken,
            isVerify: this.isVerify
        };
        this.accountService.accountVerify(data).subscribe((data) => {
            alert("Shipping");
        });
    }
}
EmailVerifyComponent.ɵfac = function EmailVerifyComponent_Factory(t) { return new (t || EmailVerifyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_account_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
EmailVerifyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmailVerifyComponent, selectors: [["app-emailVerify"]], decls: 3, vars: 0, consts: [[2, "margin", "5%"]], template: function EmailVerifyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your account is verified ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvZW1haWxWZXJpZnkvZW1haWxWZXJpZnkuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailVerifyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-emailVerify',
                templateUrl: './emailVerify.component.html',
                styleUrls: ['./emailVerify.component.scss']
            }]
    }], function () { return [{ type: src_app_account_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "Eoff":
/*!*******************************************!*\
  !*** ./src/app/home/FAQ/FAQ.component.ts ***!
  \*******************************************/
/*! exports provided: FAQComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAQComponent", function() { return FAQComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FAQComponent {
    constructor() { }
    ngOnInit() {
    }
}
FAQComponent.ɵfac = function FAQComponent_Factory(t) { return new (t || FAQComponent)(); };
FAQComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FAQComponent, selectors: [["app-FAQ"]], decls: 69, vars: 0, consts: [[1, "row", 2, "margin", "5%"], [1, "col-xs-4"], [2, "width", "60%", "word-wrap", "break-word"], [1, "col-xs-8"], ["id", "accordion"], [1, "row"], [1, "col-md-12"], ["id", "accordion", "role", "tablist", "aria-multiselectable", "true", 1, "panel-group"], [1, "panel", "panel-default"], ["role", "tab", "id", "headingOne", 1, "panel-heading"], [1, "panel-title"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne"], ["id", "collapseOne", "role", "tabpanel", "aria-labelledby", "headingOne", 1, "panel-collapse", "collapse", "in"], [1, "panel-body"], ["role", "tab", "id", "headingTwo", 1, "panel-heading"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseTwo", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "collapsed"], ["id", "collapseTwo", "role", "tabpanel", "aria-labelledby", "headingTwo", 1, "panel-collapse", "collapse"], ["role", "tab", "id", "headingThree", 1, "panel-heading"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseThree", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "collapsed"], ["id", "collapseThree", "role", "tabpanel", "aria-labelledby", "headingThree", 1, "panel-collapse", "collapse"], ["role", "tab", "id", "headingFour", 1, "panel-heading"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseFour", "aria-expanded", "false", "aria-controls", "collapseFour", 1, "collapsed"], ["id", "collapseFour", "role", "tabpanel", "aria-labelledby", "headingFour", 1, "panel-collapse", "collapse"], ["role", "tab", "id", "headingFive", 1, "panel-heading"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseFive", "aria-expanded", "false", "aria-controls", "collapseFive", 1, "collapsed"], ["id", "collapseFive", "role", "tabpanel", "aria-labelledby", "headingFive", 1, "panel-collapse", "collapse"]], template: function FAQComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Every day help for our customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Every day help for our customersEvery day help for our customersEvery day help for our customersEvery day help for our cust omersEvery day help for our customersEvery day help for our customersEvery day help for our customersEvery day help for our customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "If you need help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Every day help for our customersEvery day help for our customersEvery day help for our customersEvery day help for our cust omersEvery day help for our customersEvery day help for our customersEvery day help for our customersEvery day help for our customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Why you choose Shrivasafoods? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Why Shrivasafoods best? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " How to apply Shrivasafoods jobs? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " How experts Shrivasafoods team member? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " How Shrivasafoods give customer support? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@charset \"UTF-8\";\n.panel-group[_ngcontent-%COMP%] {\n  background: #fff none repeat scroll 0 0;\n  border-radius: 3px;\n  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.04);\n  margin-bottom: 0;\n  padding: 30px;\n}\n#accordion[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%] {\n  border: medium none;\n  border-radius: 0;\n  box-shadow: none;\n  margin: 0 0 15px 10px;\n}\n#accordion[_ngcontent-%COMP%]   .panel-heading[_ngcontent-%COMP%] {\n  border-radius: 30px;\n  padding: 0;\n}\n#accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: #b4d469 none repeat scroll 0 0;\n  border: 1px solid transparent;\n  border-radius: 30px;\n  color: black;\n  display: block;\n  font-size: 18px;\n  font-weight: 600;\n  padding: 12px 20px 12px 50px;\n  position: relative;\n  transition: all 0.3s ease 0s;\n}\n#accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%] {\n  background: white none repeat scroll 0 0;\n  border: 1px solid #ddd;\n  color: black;\n}\n#accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%]:hover {\n  background: #b4d469 none repeat scroll 0 0;\n  border: 1px solid #ddd;\n  color: black;\n}\n#accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after, #accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%]::after {\n  background: #93bb36 none repeat scroll 0 0;\n  border: 1px solid transparent;\n  border-radius: 50%;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.58);\n  color: #fff;\n  content: \"\uF107\";\n  font-family: fontawesome;\n  font-size: 25px;\n  height: 55px;\n  left: -20px;\n  line-height: 55px;\n  position: absolute;\n  text-align: center;\n  top: -5px;\n  transition: all 0.3s ease 0s;\n  width: 55px;\n}\n#accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%]::after {\n  background: black none repeat scroll 0 0;\n  border: 1px solid #ddd;\n  box-shadow: none;\n  color: white;\n  content: \"\uF105\";\n}\n#accordion[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n  background: transparent none repeat scroll 0 0;\n  border-top: medium none;\n  padding: 20px 25px 10px 9px;\n  position: auto;\n  font-family: \"Open Sans\", sans-serif;\n}\n#accordion[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  border-left: 1px dashed #8c8c8c;\n  padding-left: 25px;\n}\nli.panel-body[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: small;\n  margin-bottom: 14px;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9GQVEvRkFRLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNoQjtFQUNJLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUNKO0FBQ0E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUVKO0FBQUE7RUFDSSxtQkFBQTtFQUNBLFVBQUE7QUFHSjtBQURBO0VBQ0ksMENBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUFJSjtBQUZBO0VBQ0ksd0NBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFLSjtBQUhBO0VBQ0ksMENBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFNSjtBQUpBO0VBQ0ksMENBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtBQU9KO0FBTEE7RUFDSSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQVFKO0FBTkE7RUFDSSw4Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0Esb0NBQUE7QUFTSjtBQVBBO0VBQ0ksK0JBQUE7RUFDQSxrQkFBQTtBQVVKO0FBUEE7RUFDSyxpQkFBQTtFQUNELGdCQUFBO0VBRUksbUJBQUE7RUFDSixnQkFBQTtBQVNKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9GQVEvRkFRLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucGFuZWwtZ3JvdXAge1xuICAgIGJhY2tncm91bmQ6ICNmZmYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwIHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBwYWRkaW5nOiAzMHB4O1xufVxuI2FjY29yZGlvbiAucGFuZWwge1xuICAgIGJvcmRlcjogbWVkaXVtIG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG1hcmdpbjogMCAwIDE1cHggMTBweDtcbn1cbiNhY2NvcmRpb24gLnBhbmVsLWhlYWRpbmcge1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgcGFkZGluZzogMDtcbn1cbiNhY2NvcmRpb24gLnBhbmVsLXRpdGxlIGEge1xuICAgIGJhY2tncm91bmQ6I2I0ZDQ2OSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDEycHggMjBweCAxMnB4IDUwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG59XG4jYWNjb3JkaW9uIC5wYW5lbC10aXRsZSBhLmNvbGxhcHNlZCB7XG4gICAgYmFja2dyb3VuZDp3aGl0ZSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuI2FjY29yZGlvbiAucGFuZWwtdGl0bGUgYS5jb2xsYXBzZWQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6I2I0ZDQ2OSAgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGNvbG9yOiBibGFjaztcbn1cbiNhY2NvcmRpb24gLnBhbmVsLXRpdGxlIGE6OmFmdGVyLCAjYWNjb3JkaW9uIC5wYW5lbC10aXRsZSBhLmNvbGxhcHNlZDo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6ICM5M2JiMzYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm94LXNoYWRvdzogMCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNTgpO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGNvbnRlbnQ6IFwi74SHXCI7XG4gICAgZm9udC1mYW1pbHk6IGZvbnRhd2Vzb21lO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgbGVmdDogLTIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDU1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0b3A6IC01cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgICB3aWR0aDogNTVweDtcbn1cbiNhY2NvcmRpb24gLnBhbmVsLXRpdGxlIGEuY29sbGFwc2VkOjphZnRlciB7XG4gICAgYmFja2dyb3VuZDpibGFjayBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgY29udGVudDogXCLvhIVcIjtcbn1cbiNhY2NvcmRpb24gLnBhbmVsLWJvZHkge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gICAgYm9yZGVyLXRvcDogbWVkaXVtIG5vbmU7XG4gICAgcGFkZGluZzogMjBweCAyNXB4IDEwcHggOXB4O1xuICAgIHBvc2l0aW9uOiBhdXRvO1xuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xufVxuI2FjY29yZGlvbiAucGFuZWwtYm9keSBwIHtcbiAgICBib3JkZXItbGVmdDogMXB4IGRhc2hlZCAjOGM4YzhjO1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbn1cblxubGkucGFuZWwtYm9keSB7XG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcblxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FAQComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-FAQ',
                templateUrl: './FAQ.component.html',
                styleUrls: ['./FAQ.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "FAXg":
/*!*********************************!*\
  !*** ./src/app/appconstants.ts ***!
  \*********************************/
/*! exports provided: HeaderConstants, PicklesConstants, TraditionalPodulu, SweetsandHotConstants, SpecialConstants, OthersConstants, AboutusConstants, SupportConstants, AppConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderConstants", function() { return HeaderConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicklesConstants", function() { return PicklesConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraditionalPodulu", function() { return TraditionalPodulu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SweetsandHotConstants", function() { return SweetsandHotConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialConstants", function() { return SpecialConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersConstants", function() { return OthersConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusConstants", function() { return AboutusConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportConstants", function() { return SupportConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConstants", function() { return AppConstants; });
const HeaderConstants = {
    1: "Home",
    2: "Pickles",
    3: "Traditional Powders",
    4: "Sweets & Hot",
    5: "Special Offers",
    6: "Others",
    7: "About-US",
    8: "Support",
};
const PicklesConstants = {
    1: "Non-vegetarian",
    2: "vegetarian",
    3: "With Gralic",
    4: "Without Gralic",
};
const TraditionalPodulu = {
    1: "PoduluPowders",
    2: "HomeMadeMasala's",
};
const SweetsandHotConstants = {
    1: "TradaitonalSweets",
    2: "TradaitonalHot"
};
const SpecialConstants = {
    1: "Non-vegetarian Combo",
    2: "Vegetarian Combo",
    3: "Hot Combo",
    4: "Sweets Combo",
};
const OthersConstants = {
    1: "Books",
    2: "",
};
const AboutusConstants = {
    1: "Blog",
    2: "Shipping",
    3: "testimonials",
    4: "Privacy Policy",
    5: "Return & refunds",
};
const SupportConstants = {
    1: "FAQ",
    2: "Chat",
    3: "Call",
    4: "Email",
};
class AppConstants {
}


/***/ }),

/***/ "HZa5":
/*!*****************************************************!*\
  !*** ./src/app/home/mainPage/mainPage.component.ts ***!
  \*****************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../product.service */ "BRKm");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../cart.service */ "87QV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-image-slider */ "yf9x");








function MainPageComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Free Delivery");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "For all oders over $100");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Refundable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "If your item have no damage we agree to refund it.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Secure Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "100% secure Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "24/7 Customer Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "We have dedicated support.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainPageComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Free Delivery");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "For All Orders Over 100$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Refundable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " If your item have no damage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " we agree to refund it.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Secure Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "100% secure payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "24/7 Customer Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "We have dedicated support");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { width: "250px", height: "30%", space: 4 }; };
function MainPageComponent_ng_image_slider_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ng-image-slider", 38, 39);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imagePopup", false)("imageSize", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("images", ctx_r2.imagesUrl);
} }
const _c1 = function () { return { width: "250px", height: "35%", space: 4 }; };
function MainPageComponent_ng_image_slider_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ng-image-slider", 38, 39);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imagePopup", false)("imageSize", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1))("images", ctx_r3.imagesUrl);
} }
const _c2 = function () { return ["/detail"]; };
function MainPageComponent_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_div_32_div_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const item_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.addProduct(item_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r12.getImage(item_r13.productImage), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.price);
} }
function MainPageComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainPageComponent_div_32_div_1_Template, 9, 4, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.featuredProducts);
} }
function MainPageComponent_div_33_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_div_33_div_3_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const item_r17 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.addProduct(item_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r16.getImage(item_r17.productImage), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r17.price);
} }
function MainPageComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MainPageComponent_div_33_div_3_Template, 9, 2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.featuredProducts);
} }
function MainPageComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ol", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "li", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Save upto 20% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "TraditionalPowders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Order Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Save upto 20% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "TraditionalPowders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Order Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainPageComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "li", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Save upto 20% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "TraditionalPowders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Order Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Save upto 20% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "TraditionalPowders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Order Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Save upto 20% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "TraditionalPowders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Order Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Save upto 20% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "TraditionalPowders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Order Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainPageComponent_div_39_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_div_39_div_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const item_r21 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.addProduct(item_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r20.getImage(item_r21.productImage), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r21.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r21.price);
} }
function MainPageComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainPageComponent_div_39_div_1_Template, 11, 5, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.allProducts);
} }
function MainPageComponent_div_40_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_div_40_div_3_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const item_r25 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.addProduct(item_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r24.getImage(item_r25.productImage), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r25.price);
} }
function MainPageComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MainPageComponent_div_40_div_3_Template, 9, 2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.allProducts);
} }
class MainPageComponent {
    // @ViewChild('nav') slider: NgImageSliderComponent;
    constructor(mediaObserver, productService, cartService, router) {
        this.mediaObserver = mediaObserver;
        this.productService = productService;
        this.cartService = cartService;
        this.router = router;
        this.loadingData = true;
        this.loadingImage = true;
        //   imageObject = [{
        //     image: 'assets/img/slider/1.jpg',
        //     thumbImage: 'assets/img/slider/1_min.jpeg',
        //     alt: 'alt of image',
        //     title: 'title of image'
        // }, {
        //     image: '.../iOe/xHHf4nf8AE75h3j1x64ZmZ//Z==', // Support base64 image
        //     thumbImage: '.../iOe/xHHf4nf8AE75h3j1x64ZmZ//Z==', // Support base64 image
        //     title: 'Image title', //Optional: You can use this key if want to show image with title
        //     alt: 'Image alt' //Optional: You can use this key if want to show image with alt
        // }
        // ];
        this.imagesUrl = [
            {
                thumbImage: 'assets/images/slideimg1.jpg',
                title: 'Bakery & Pastry',
                alt: 'Image alt',
                routeTo: 'bakery',
            },
            {
                thumbImage: 'assets/images/slideimg2.jpg',
                alt: 'alt of image',
                title: 'Pickles',
            },
            {
                thumbImage: 'assets/images/slideimg3.jpg',
                title: 'Image title',
                alt: 'Image alt',
            },
            {
                thumbImage: 'assets/images/slideimg4.jpg',
                alt: 'alt of image',
                title: 'Fish & Meat',
            },
            {
                thumbImage: 'assets/images/slideimg5.jpg',
                title: 'TraditionalPowders',
                alt: 'Image alt',
            },
            {
                thumbImage: 'assets/images/slideimg6.jpg',
                alt: 'alt of image',
                title: 'Snakes & Beverages',
            },
            {
                thumbImage: 'assets/images/slideimg1.jpg',
                title: 'Bakery & Pastry',
                alt: 'Image alt',
                routeTo: 'bakery',
            },
            {
                thumbImage: 'assets/images/slideimg2.jpg',
                alt: 'alt of image',
                title: 'Pickles',
            },
            {
                thumbImage: 'assets/images/slideimg3.jpg',
                title: 'Image title',
                alt: 'Image alt',
            },
            {
                thumbImage: 'assets/images/slideimg4.jpg',
                alt: 'alt of image',
                title: 'Fish & Meat',
            },
            {
                thumbImage: 'assets/images/slideimg5.jpg',
                title: 'TraditionalPowders',
                alt: 'Image alt',
            },
            {
                thumbImage: 'assets/images/slideimg6.jpg',
                alt: 'alt of image',
                title: 'Snakes & Beverages',
            },
        ];
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
        });
        this.getAllProducts();
        this.getfeaturedProducts();
    }
    // onImageClick(args) {
    //   console.log(args)
    //   this.router.navigate([this.imageObject[args].routeTo])
    // }
    getAllProducts() {
        this.productService.getProducts().subscribe((products) => {
            this.loadingData = false;
            this.allProducts = products;
        }, (error) => {
            console.log('error in getting all products');
        });
    }
    getfeaturedProducts() {
        this.productService.featuredProducts().subscribe((products) => {
            this.featuredProducts = products;
        }, (error) => {
            console.log('error in getting featuredProducts ');
        });
    }
    addProduct(item) {
        this.cartService.addProduct(item);
    }
    getImage(imageId) {
        this.loadingImage = true;
        if (!imageId) {
            return '';
        }
        else {
            this.loadingImage = false;
            return this.productService.productImageUrl(imageId);
        }
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-mainPage"]], decls: 60, vars: 10, consts: [[2, "background-color", "#f7f7f7", "width", "100%"], [1, "container-fluid", 2, "width", "100%", "padding-top", "2%"], [1, "block"], [1, "text-block"], [2, "color", "white", "padding-bottom", "2%", "font-size", "xx-large"], [2, "color", "white", "padding-bottom", "7%", "font-size", "xx-large"], [1, "text-block-small", 2, "padding-bottom", "7%"], [1, "btn", 2, "background-color", "#FFFFFF", "width", "40%"], ["src", "../assets/images/home.jpeg", 1, "img-responsive", 2, "min-height", "260px", "width", "100%"], [2, "margin-top", "4%", "margin-bottom", "4%"], [4, "ngIf"], ["style", "display:flex;flex-direction: row;justify-content: space-evenly;", 4, "ngIf"], [2, "margin-bottom", "3%"], [2, "text-align", "center"], [2, "font-weight", "bold"], [2, "margin", "2%"], [3, "imagePopup", "imageSize", "images", 4, "ngIf"], [2, "border-radius", "6px", "margin", "2%"], [2, "font-weight", "bold", "padding-left", "3%", "padding-top", "4%"], ["class", "deviceLg", 4, "ngIf"], ["id", "myCarousel", "class", "carousel slide", "data-ride", "carousel", 4, "ngIf"], [2, "font-weight", "bold", "font-size", "1.5vw", "padding-left", "3%", "padding-top", "4%"], [1, "row"], [2, "color", "black", "padding-bottom", "3%", "font-size", "25px"], [2, "color", "black", "padding-bottom", "4%", "font-size", "25px"], [1, "text-block-small", 2, "color", "black", "padding-bottom", "4%"], ["src", "../assets/images/slide2.png", 1, "img-responsive", 2, "min-height", "300px", "width", "100%", "border-radius", "8px"], [2, "padding", "2%"], [2, "padding-left", "7%", "padding-bottom", "2%", "display", "flex", "flex-direction", "column", "justify-content", "left"], [1, "row", 2, "padding-bottom", "5%"], [2, "float", "left", "padding-right", "4%"], [1, "fa", "fa-home", 2, "width", "10%", "font-size", "xx-large"], [2, "float", "right"], [2, "display", "flex", "flex-direction", "row", "justify-content", "space-evenly"], [1, "col-sm-2"], [1, "fa", "fa-home", 2, "font-size", "xx-large"], [1, "col-sm-10"], [2, "padding-top", "10px"], [3, "imagePopup", "imageSize", "images"], ["nav", ""], [1, "deviceLg"], ["routerLinkActive", "router-link-active", "style", "padding:2%;width: 18%;background-color: white;margin: 0.5%;", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLinkActive", "router-link-active", 2, "padding", "2%", "width", "18%", "background-color", "white", "margin", "0.5%", 3, "routerLink"], [2, "height", "15vw", "width", "100%"], [2, "height", "15vw", "width", "100%", 3, "src"], [1, "btn", 2, "padding-left", "2.5%", "padding-right", "2.5%", "background-color", "rgb(63, 61, 61)", "color", "whitesmoke", 3, "click"], [2, "font-weight", "bold", "font-size", "small"], [2, "display", "flex", "flex-direction", "row", "flex-wrap", "wrap", "flex", "2", "justify-content", "space-evenly", 3, "routerLink"], ["style", "padding:2%;width: 18%;background-color: white;margin: 0.5%;", 4, "ngFor", "ngForOf"], [2, "padding", "2%", "width", "18%", "background-color", "white", "margin", "0.5%"], ["id", "myCarousel", "data-ride", "carousel", 1, "carousel", "slide", 2, "padding-right", "5%"], [1, "carousel-indicators"], ["data-target", "#myCarousel", "data-slide-to", "0", 1, "active"], ["data-target", "#myCarousel", "data-slide-to", "1"], ["data-target", "#myCarousel", "data-slide-to", "2"], [1, "carousel-inner"], [1, "item", "active"], [1, "col-sm-12"], [2, "margin-top", "2%"], [1, "text-block1Slider"], [1, "text-block2Slider"], [1, "btn", "btn-imgSlider"], [1, "fa", "fa-arrow"], ["src", "../assets/images/slide1.png", 1, "img-responsive", 2, "width", "100%"], [1, "item"], ["id", "myCarousel", "data-ride", "carousel", 1, "carousel", "slide"], [1, "item", "active", 2, "margin-right", "2%"], [1, "col-xs-6"], ["src", "../assets/images/slide1.png", 1, "img-responsive"], ["src", "../assets/images/slide3.png", 1, "img-responsive"], ["src", "../assets/images/slide3.png", 1, "img-responsive", 2, "width", "100%"], ["style", "padding:2%;width: 18%;background-color: white;margin: 0.5%;", 3, "routerLink", 4, "ngFor", "ngForOf"], [2, "padding", "2%", "width", "18%", "background-color", "white", "margin", "0.5%", 3, "routerLink"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Stay home & get ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " your tradational food");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Start You'r Shopping with Shrivasafoods");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Order Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MainPageComponent_div_16_Template, 35, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MainPageComponent_div_18_Template, 42, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Shop by Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Visit our shop to see amazing products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, MainPageComponent_ng_image_slider_26_Template, 2, 4, "ng-image-slider", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, MainPageComponent_ng_image_slider_28_Template, 2, 4, "ng-image-slider", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Featured Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, MainPageComponent_div_32_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, MainPageComponent_div_33_Template, 4, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, MainPageComponent_div_34_Template, 29, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, MainPageComponent_div_35_Template, 48, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Trending Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, MainPageComponent_div_39_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, MainPageComponent_div_40_Template, 4, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Fast, Free Shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Contactless Delivery.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Try it now, risk free!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Order Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Copyright \u00A9 2020 RedQ, Inc , All rights reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceXs || ctx.deviceSm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceLg || ctx.deviceMd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceXs || ctx.deviceSm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceLg || ctx.deviceMd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceLg || ctx.deviceMd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceXs || ctx.deviceSm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceXs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceMd || ctx.deviceLg || ctx.deviceSm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceLg || ctx.deviceMd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceXs || ctx.deviceSm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ng_image_slider__WEBPACK_IMPORTED_MODULE_6__["NgImageSliderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".textimages[_ngcontent-%COMP%] {\n  top: 10%;\n  left: 10%;\n  position: absolute;\n}\n\n.block[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  color: white;\n  padding-top: 10%;\n  padding-bottom: 20%;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.text-block[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 38px;\n}\n\n.text-blockFooter[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n\n.text-block-small[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 18px;\n}\n\n.text-block-btn[_ngcontent-%COMP%] {\n  width: 35%;\n  font-weight: bold;\n  min-width: 30%;\n  font-size: small;\n  text-align: center;\n  border-radius: 6px;\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.text-block1Slider[_ngcontent-%COMP%] {\n  position: absolute;\n  padding-top: 10%;\n  padding-left: 5%;\n  margin-bottom: 12px;\n}\n\n.text-block2Slider[_ngcontent-%COMP%] {\n  position: absolute;\n  padding-top: 20%;\n  padding-left: 5%;\n}\n\n.text-block3Slider[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: white;\n  font-weight: bold;\n  margin-top: 25%;\n  margin-left: 5%;\n  left: 5%;\n  font-size: small;\n  padding-top: 12px;\n  text-align: center;\n  height: 3vw;\n  width: 10vw;\n  border-radius: 6px;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #e9e6e6;\n}\n\n.text-block1Footer[_ngcontent-%COMP%] {\n  position: absolute;\n  padding-top: 6%;\n  padding-left: 5%;\n  font-size: 3vw;\n  margin-bottom: 12px;\n}\n\n.text-block2Footer[_ngcontent-%COMP%] {\n  position: absolute;\n  padding-top: 9%;\n  padding-left: 5%;\n  font-size: 3vw;\n  margin-bottom: 12px;\n}\n\n.text-block3Footer[_ngcontent-%COMP%] {\n  position: absolute;\n  padding-top: 12%;\n  padding-left: 5%;\n}\n\n.text-block4Footer[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: white;\n  width: 15%;\n  font-weight: bold;\n  margin-top: 15%;\n  margin-left: 1%;\n  left: 5%;\n  text-align: center;\n  border-radius: 6px;\n}\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.deviceXs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex: 1;\n}\n\n.deviceLg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.slide1[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 3vw;\n  margin-bottom: 12px;\n}\n\n.carousel-inner[_ngcontent-%COMP%] {\n  width: 100vw;\n}\n\n.carousel-inner-slider1[_ngcontent-%COMP%] {\n  width: 100vw;\n}\n\n.carousel-caption[_ngcontent-%COMP%] {\n  top: 10%;\n  right: 80%;\n}\n\n.btn-imgSlider[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: white;\n  width: 20%;\n  font-weight: bold;\n  margin-top: 25%;\n  margin-left: 3%;\n  left: 7%;\n  top: 15%;\n  font-size: 1.5vw;\n  text-align: center;\n  border-radius: 6px;\n}\n\n.img-main[_ngcontent-%COMP%] {\n  width: 1460px;\n  height: 550px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9tYWluUGFnZS9tYWluUGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0Qsa0JBQUE7QUFDRDs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0EsZUFBQTtBQUVBOztBQUFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFHRjs7QUFEQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxvQ0FBQTtBQUdGOztBQURBO0VBQ0Usa0JBQUE7RUFHQSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEsbUJBQUE7QUFDRjs7QUFBQztFQUNDLGtCQUFBO0VBRUEsZ0JBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUVBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFHQTtFQUNFLGtCQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBREY7O0FBR0M7RUFDQyxrQkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQURGOztBQUdBO0VBQ0Usa0JBQUE7RUFFQSxnQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBR0Esa0JBQUE7RUFFQSxrQkFBQTtBQUxGOztBQU9BO0VBQ0Usa0JBQUE7QUFKRjs7QUFNQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7QUFIQTs7QUFLQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0MsZUFBQTtBQUZEOztBQUlBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFEQTs7QUFHQTtFQUNFLFlBQUE7QUFBRjs7QUFFQTtFQUNBLFlBQUE7QUFDQTs7QUFHQTtFQUNFLFFBQUE7RUFDQSxVQUFBO0FBQUY7O0FBUUE7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBR0Esa0JBQUE7RUFJQSxrQkFBQTtBQVZGOztBQWFBO0VBRUEsYUFBQTtFQUNBLGFBQUE7QUFYQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbWFpblBhZ2UvbWFpblBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGltYWdlc3tcbiAgdG9wOiAxMCU7XG4gIGxlZnQ6IDEwJTtcbiBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIFxuICBcbn1cbi5ibG9jayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDEwJTtcbiAgcGFkZGluZy1ib3R0b206IDIwJTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuLnRleHQtYmxvY2sge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMzhweDtcbn1cbi50ZXh0LWJsb2NrRm9vdGVye1xuZm9udC1zaXplOiAzMnB4O1xufVxuLnRleHQtYmxvY2stc21hbGwge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi50ZXh0LWJsb2NrLWJ0biB7XG4gIHdpZHRoOiAzNSU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtaW4td2lkdGg6IDMwJTtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG4udGV4dC1ibG9jazFTbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cblxuICBwYWRkaW5nLXRvcDogMTAlO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAvLyBmb250LXNpemU6IDN2dztcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn0udGV4dC1ibG9jazJTbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgcGFkZGluZy10b3A6IDIwJTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgLy8gZm9udC1zaXplOiAxdnc7XG5cbn1cbi50ZXh0LWJsb2NrM1NsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcblxuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMjUlO1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIGxlZnQ6IDUlO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDN2dztcbiAgd2lkdGg6IDEwdnc7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAyMzAsIDIzMCk7XG59XG5cblxuLnRleHQtYmxvY2sxRm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIHBhZGRpbmctdG9wOiA2JTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgZm9udC1zaXplOiAzdnc7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG5cbn0udGV4dC1ibG9jazJGb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgcGFkZGluZy10b3A6IDklO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBmb250LXNpemU6IDN2dztcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi50ZXh0LWJsb2NrM0Zvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICBwYWRkaW5nLXRvcDogMTIlO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAvLyBmb250LXNpemU6IDF2dztcblxufVxuLnRleHQtYmxvY2s0Rm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICB3aWR0aDogMTUlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMTUlO1xuICBtYXJnaW4tbGVmdDogMSU7XG4gIGxlZnQ6IDUlO1xuXG5cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGV2aWNlWHN7XG5kaXNwbGF5OiBmbGV4O1xuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xuZmxleC13cmFwOiB3cmFwO1xuZmxleDoxXG59XG4uZGV2aWNlTGd7XG5kaXNwbGF5OiBmbGV4O1xuZmxleC1kaXJlY3Rpb246IHJvdztcbmp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiBmbGV4LXdyYXA6IHdyYXA7XG59XG4uc2xpZGUxe1xucG9zaXRpb246IGFic29sdXRlO1xuZm9udC1zaXplOiAzdnc7XG5tYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuLmNhcm91c2VsLWlubmVye1xuICB3aWR0aDogMTAwdnc7XG59XG4uY2Fyb3VzZWwtaW5uZXItc2xpZGVyMXtcbndpZHRoOiAxMDB2dztcblxufVxuXG4uY2Fyb3VzZWwtY2FwdGlvbntcbiAgdG9wOiAxMCU7XG4gIHJpZ2h0OiA4MCU7XG59XG4uaXRlbXtcbi8vIGhlaWdodDogMTAwcHg7XG59XG4uY2Fyb3VzZWx7XG5cbn1cbi5idG4taW1nU2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICB3aWR0aDogMjAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMjUlO1xuICBtYXJnaW4tbGVmdDogMyU7XG4gIGxlZnQ6IDclO1xuICB0b3A6IDE1JTtcbiAgZm9udC1zaXplOiAxLjV2dztcbiAgLy8gcGFkZGluZy10b3A6IDEwcHg7XG4gIC8vIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8vIGhlaWdodDogM3Z3O1xuICAvLyB3aWR0aDogMTB2dztcblxuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5pbWctbWFpbiAge1xuXG53aWR0aDogMTQ2MHB4O1xuaGVpZ2h0OiA1NTBweFxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mainPage',
                templateUrl: './mainPage.component.html',
                styleUrls: ['./mainPage.component.scss'],
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }, { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "K30+":
/*!***********************************************************!*\
  !*** ./src/app/home/referFriend/referFriend.component.ts ***!
  \***********************************************************/
/*! exports provided: ReferFriendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferFriendComponent", function() { return ReferFriendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "BRKm");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "87QV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class ReferFriendComponent {
    constructor(mediaObserver, productService, cartService) {
        this.mediaObserver = mediaObserver;
        this.productService = productService;
        this.cartService = cartService;
        this.allOrders = [];
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
        });
    }
    refer() {
        const data = {
            refrenceCode: this.refrenceCode,
            friendEmail: this.friendEmail
        };
        this.productService.referFriend(data).subscribe((products) => {
            alert("refer");
        }, (error) => {
            alert("use correct refrenceId");
        });
    }
}
ReferFriendComponent.ɵfac = function ReferFriendComponent_Factory(t) { return new (t || ReferFriendComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"])); };
ReferFriendComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReferFriendComponent, selectors: [["app-referFriend"]], decls: 38, vars: 2, consts: [[2, "min-height", "200px", "margin", "10%"], [1, "row"], [1, "col-xs-6"], [2, "width", "50%", "word-wrap", "break-word"], [2, "font-size", "xx-large"], ["placeholder", "Your Friend Email", "type", "text", "name", "refrence", 1, "form-control", 2, "width", "30%", 3, "ngModel", "ngModelChange"], ["placeholder", "Your Refrence Code", "type", "text", "name", "refrence", 1, "form-control", 2, "width", "30%", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", 2, "margin", "2%", 3, "click"], [2, "display", "flex", "flex-direction", "row", "justify-content", "space-between", "margin-left", "5%", "margin-right", "5%"], [2, "width", "40%", "font-weight", "bold", "word-wrap", "break-word"]], template: function ReferFriendComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Share GRUBHUB and get 10%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Image\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "invite a friend you will both get 10% off ..............");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Share to Your Friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "and Get 10$ discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Invite through Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReferFriendComponent_Template_input_ngModelChange_18_listener($event) { return ctx.friendEmail = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReferFriendComponent_Template_input_ngModelChange_19_listener($event) { return ctx.refrenceCode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReferFriendComponent_Template_button_click_20_listener() { return ctx.refer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Send Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "How it works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " 1. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Send your refrence code to your friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " 2.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Ask your friend to use your refrence code to order something");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " 3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Get 10$ on every order your friend did using your refrence Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.friendEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.refrenceCode);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVmZXJGcmllbmQvcmVmZXJGcmllbmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReferFriendComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-referFriend',
                templateUrl: './referFriend.component.html',
                styleUrls: ['./referFriend.component.css']
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }, { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }]; }, null); })();


/***/ }),

/***/ "Kg9S":
/*!******************************************************************!*\
  !*** ./src/app/admin/ordersProgress/ordersProgress.component.ts ***!
  \******************************************************************/
/*! exports provided: OrdersProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersProgressComponent", function() { return OrdersProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../admin.service */ "l3fW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function OrdersProgressComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "1#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrdersProgressComponent_div_21_Template_p_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.nextPhase(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Send Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.phase);
} }
class OrdersProgressComponent {
    constructor(adminService) {
        this.adminService = adminService;
        this.phase = "delievery phase";
        this.allOrders = [];
    }
    ngOnInit() {
        this.orders();
    }
    orders() {
        this.adminService.getAllOrders().subscribe((data) => {
            this.allOrders = data.product;
        });
    }
    nextPhase(item) {
        const orderShipped = {
            phase: this.phase = "shipping phase",
            ownerEmail: item.ownerEmail,
            orderId: item._id
        };
        this.adminService.shippingPhase(orderShipped).subscribe((data) => {
            alert("Shipping");
        });
    }
}
OrdersProgressComponent.ɵfac = function OrdersProgressComponent_Factory(t) { return new (t || OrdersProgressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"])); };
OrdersProgressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrdersProgressComponent, selectors: [["app-ordersProgress"]], decls: 22, vars: 1, consts: [[2, "margin-top", "10%"], [2, "text-align", "center", "font-weight", "bold"], [2, "border", "1px", "border-style", "groove"], [1, "row", 2, "margin", "1%"], [1, "col-lg-2"], [2, "font-size", "large"], [4, "ngFor", "ngForOf"], [1, "row", 2, "border", "1px", "border-style", "groove", "margin", "1%", "padding-top", "3px"], [1, "col-lg-1"], [1, "btn", "green-btn", 2, "color", "white", 3, "click"]], template: function OrdersProgressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Admin Portal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Order No #");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Order Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Order Owner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Order Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Order Phase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, OrdersProgressComponent_div_21_Template, 20, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allOrders);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".text-block1[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  padding-top: 9%;\n  padding-left: 40%;\n  font-size: 2vw;\n  margin-bottom: 12px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vb3JkZXJzUHJvZ3Jlc3Mvb3JkZXJzUHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNIIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vb3JkZXJzUHJvZ3Jlc3Mvb3JkZXJzUHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1ibG9jazEge1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgY29sb3I6IHdoaXRlO1xuICAgcGFkZGluZy10b3A6IDklO1xuICAgcGFkZGluZy1sZWZ0OiA0MCU7XG4gICBmb250LXNpemU6IDJ2dztcbiAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICBmb250LXdlaWdodDogNTAwO1xuIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersProgressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ordersProgress',
                templateUrl: './ordersProgress.component.html',
                styleUrls: ['./ordersProgress.component.scss']
            }]
    }], function () { return [{ type: _admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"] }]; }, null); })();


/***/ }),

/***/ "N3GV":
/*!*************************************************************************!*\
  !*** ./src/app/home/TraditionalPowders/TraditionalPowders.component.ts ***!
  \*************************************************************************/
/*! exports provided: TraditionalPowdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraditionalPowdersComponent", function() { return TraditionalPowdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "BRKm");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "87QV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function TraditionalPowdersComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TraditionalPowdersComponent_div_7_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.addProduct(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.price);
} }
function TraditionalPowdersComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TraditionalPowdersComponent_div_7_div_1_Template, 9, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.traditionalpowdersProducts);
} }
function TraditionalPowdersComponent_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TraditionalPowdersComponent_div_8_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const item_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.addProduct(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r7.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.price);
} }
function TraditionalPowdersComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TraditionalPowdersComponent_div_8_div_3_Template, 9, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.traditionalpowdersProducts);
} }
class TraditionalPowdersComponent {
    constructor(mediaObserver, productService, cartService) {
        this.mediaObserver = mediaObserver;
        this.productService = productService;
        this.cartService = cartService;
        this.products = [];
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
        });
        this.getCatagoryProducts();
    }
    getCatagoryProducts() {
        this.productService.getCatagoryProducts('traditionalpowders').subscribe((products) => {
            this.traditionalpowdersProducts = products;
        }, (error) => {
            console.log('error in getting all products');
        });
    }
    addProduct(item) {
        this.cartService.addProduct(item);
    }
}
TraditionalPowdersComponent.ɵfac = function TraditionalPowdersComponent_Factory(t) { return new (t || TraditionalPowdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"])); };
TraditionalPowdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TraditionalPowdersComponent, selectors: [["app-traditionalpowders"]], decls: 9, vars: 2, consts: [[2, "background-color", "rgb(240, 236, 236)", "padding-bottom", "2.5%"], [2, "padding-top", "2.5%", "padding-left", "2.5%", "padding-right", "2.5%", "border-radius", "6px"], [1, "text-block1"], [2, "height", "20%"], ["src", "../assets/images/traditionalpowders.jpg", 1, "img-responsive", "gradient", 2, "width", "100%", "object-fit", "cover", "border-radius", "6px"], [2, "border-radius", "6px", "margin", "2%", "background-color", "white"], ["class", "deviceLg", 4, "ngIf"], [4, "ngIf"], [1, "deviceLg"], ["style", "padding:2%;width: 20%;", 3, "click", 4, "ngFor", "ngForOf"], [2, "padding", "2%", "width", "20%", 3, "click"], [2, "text-align", "right"], [1, "btn"], [1, "glyphicon", "glyphicon-shopping-cart"], [1, "img-responsive", 3, "src"], [2, "font-weight", "bold"], [1, "row"], [2, "display", "flex", "flex-direction", "row", "flex-wrap", "wrap", "flex", "2", "justify-content", "space-evenly"], ["style", "padding:2%;width: 40%;", 3, "click", 4, "ngFor", "ngForOf"], [2, "padding", "2%", "width", "40%", 3, "click"]], template: function TraditionalPowdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "TraditionalPowders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TraditionalPowdersComponent_div_7_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TraditionalPowdersComponent_div_8_Template, 4, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceLg || ctx.deviceMd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceXs || ctx.deviceSm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".text-block1[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  padding-top: 9%;\n  padding-left: 40%;\n  font-size: 2vw;\n  margin-bottom: 12px;\n  font-weight: 500;\n}\n\n.deviceXs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex: 1;\n}\n\n.deviceLg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.gradient[_ngcontent-%COMP%] {\n  background-color: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9UcmFkaXRpb25hbFBvd2RlcnMvdHJhZGl0aW9uYWxwb3dkZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7QUFFRjs7QUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0MsZUFBQTtBQUdIOztBQURBO0VBQ0UseUVBQUE7QUFJRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvVHJhZGl0aW9uYWxQb3dkZXJzL3RyYWRpdGlvbmFscG93ZGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWJsb2NrMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogOSU7XG4gIHBhZGRpbmctbGVmdDogNDAlO1xuICBmb250LXNpemU6IDJ2dztcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5kZXZpY2VYc3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleDoxXG59XG4uZGV2aWNlTGd7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5ncmFkaWVudHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMC41KSk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TraditionalPowdersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-traditionalpowders',
                templateUrl: './traditionalpowders.component.html',
                styleUrls: ['./traditionalpowders.component.scss'],
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }, { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }]; }, null); })();


/***/ }),

/***/ "PDn9":
/*!*********************************************!*\
  !*** ./src/app/home/cart/cart.component.ts ***!
  \*********************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../cart.service */ "87QV");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "BRKm");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../auth.service */ "ccyI");
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-paypal */ "ejwX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");









const _c0 = function () { return ["/detail"]; };
function CartComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.getImage(item_r1.productImage), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Unit price ", item_r1.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total Units ", item_r1.productCount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("total price ", item_r1.unitTotal, "");
} }
class CartComponent {
    constructor(cartService, productService, authService) {
        this.cartService = cartService;
        this.productService = productService;
        this.authService = authService;
        this.cartItems = [];
        this.total = 0;
        this.totalafterBonus = 0;
        this.detection = 0;
    }
    ngOnInit() {
        this.getCartItems();
        this.initConfig();
    }
    getCartItems() {
        this.cartItems = this.cartService.getProducts();
        console.log(this.cartItems);
    }
    get getTotal() {
        this.total = this.cartService.getTotalPrice();
        this.totalafterBonus = this.total - this.detection;
        return this.totalafterBonus.toFixed(2);
    }
    order() {
        this.authService.getemail();
        const orderData = {
            cartItems: this.cartItems,
            total: this.total,
            refrence: this.refrence,
            phase: "delievry phase",
            ownerEmail: this.authService.getemail()
        };
        this.cartService.order(orderData).subscribe((data) => {
            alert("Order Sent");
        });
    }
    getImage(imageId) {
        if (!imageId)
            return '';
        return this.productService.productImageUrl(imageId);
    }
    getBonus() {
        this.detection = (10 / 100) * this.total;
        console.log(this.totalafterBonus);
        return this.totalafterBonus;
    }
    initConfig() {
        this.payPalConfig = {
            currency: 'EUR',
            clientId: 'sb',
            // tslint:disable-next-line: no-angle-bracket-type-assertion
            createOrderOnClient: (data) => ({
                intent: 'CAPTURE',
                purchase_units: [
                    {
                        amount: {
                            currency_code: 'EUR',
                            value: '9.99',
                            breakdown: {
                                item_total: {
                                    currency_code: 'EUR',
                                    value: '9.99'
                                }
                            }
                        },
                        items: [
                            {
                                name: 'Enterprise Subscription',
                                quantity: '1',
                                category: 'DIGITAL_GOODS',
                                unit_amount: {
                                    currency_code: 'EUR',
                                    value: '9.99',
                                },
                            }
                        ]
                    }
                ]
            }),
            advanced: {
                commit: 'true'
            },
            style: {
                label: 'paypal',
                layout: 'vertical'
            },
            onApprove: (data, actions) => {
                console.log('onApprove - transaction was approved, but not authorized', data, actions);
                actions.order.get().then(details => {
                    console.log('onApprove - you can get full order details inside onApprove: ', details);
                });
            },
            onClientAuthorization: (data) => {
                console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
                this.showSuccess = true;
            },
            onCancel: (data, actions) => {
                console.log('OnCancel', data, actions);
            },
            onError: err => {
                console.log('OnError', err);
            },
            onClick: (data, actions) => {
                console.log('onClick', data, actions);
            },
        };
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 42, vars: 5, consts: [[2, "margin-top", "5%"], [2, "font-size", "xx-large", "text-align", "center", "font-weight", "500"], [1, "row"], [1, "col-lg-8", 2, "padding-left", "5%"], [2, "display", "flex", "flex-direction", "row", "justify-content", "space-between", "background-color", "rgb(230, 230, 230)", "padding-top", "1.5%", "padding-bottom", "1%", "padding-left", "5%", "padding-right", "10%"], [1, "col-lg-2"], [2, "text-align", "center"], [2, "background-color", "rgb(43, 41, 41)", "color", "white", "width", "100%", "border-radius", "6px", 3, "click"], [3, "config"], ["style", "margin-bottom: 15%;", 4, "ngFor", "ngForOf"], [1, "col-lg-4"], [2, "font-size", "xx-large"], ["placeholder", "Your Friend Email", "type", "text", "name", "refrence", 1, "form-control", 2, "width", "50%", 3, "ngModel", "ngModelChange"], ["placeholder", "Your Refrence Code", "type", "text", "name", "refrence", 1, "form-control", 2, "width", "50%", 3, "ngModel", "ngModelChange"], [2, "width", "40%", "font-weight", "bold"], [2, "margin-bottom", "15%"], [2, "display", "flex", "flex-direction", "row", "justify-content", "space-between", "padding-top", "1.5%", "padding-bottom", "1%", "padding-left", "5%", "padding-right", "10%", 3, "routerLink"], [1, "col-lg-3"], [3, "src"], [1, "col-lg-6", 2, "padding-top", "3%"], [2, "padding-top", "3%", "justify-content", "center"], [2, "font-size", "larger"], [1, "col-lg-3", 2, "padding-top", "10%", "float", "left"], [2, "font-weight", "500", "font-size", "large"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Total Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_button_click_11_listener() { return ctx.order(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Check Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "ngx-paypal", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_button_click_14_listener() { return ctx.getBonus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "USE BONUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CartComponent_div_16_Template, 18, 7, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Share to Your Friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "and Get 10$ discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Invite through Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CartComponent_Template_input_ngModelChange_25_listener($event) { return ctx.refrence = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CartComponent_Template_input_ngModelChange_26_listener($event) { return ctx.refrence = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "How it works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " 1. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Send your refrence code to your friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " 2.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Ask your friend to use your refrence code to order something");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " 3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Get 10$ on every order your friend did using your refrence Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getTotal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.payPalConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cartItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.refrence);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.refrence);
    } }, directives: [ngx_paypal__WEBPACK_IMPORTED_MODULE_4__["NgxPaypalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart',
                templateUrl: './cart.component.html',
                styleUrls: ['./cart.component.css']
            }]
    }], function () { return [{ type: _cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"] }, { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "Pk2g":
/*!***********************************************!*\
  !*** ./src/app/home/dairy/dairy.component.ts ***!
  \***********************************************/
/*! exports provided: DairyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DairyComponent", function() { return DairyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "BRKm");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "87QV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function DairyComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DairyComponent_div_8_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.addProduct(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.price);
} }
function DairyComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DairyComponent_div_8_div_1_Template, 9, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.dairyProducts);
} }
function DairyComponent_div_9_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DairyComponent_div_9_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const item_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.addProduct(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r7.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.price);
} }
function DairyComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DairyComponent_div_9_div_3_Template, 9, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.dairyProducts);
} }
class DairyComponent {
    constructor(mediaObserver, productService, cartService) {
        this.mediaObserver = mediaObserver;
        this.productService = productService;
        this.cartService = cartService;
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
        });
        //  this.getproducts()
    }
    // getproducts(){
    //  this.products = this.productService.getProducts();
    // }
    addProduct(item) {
        this.cartService.addProduct(item);
    }
    getCatagoryProducts() {
        this.productService.getCatagoryProducts('dairy').subscribe((products) => {
            this.dairyProducts = products;
        }, (error) => {
            console.log('error in getting all products');
        });
    }
}
DairyComponent.ɵfac = function DairyComponent_Factory(t) { return new (t || DairyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"])); };
DairyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DairyComponent, selectors: [["app-dairy"]], decls: 10, vars: 2, consts: [[2, "background-color", "rgb(240, 236, 236)", "padding-bottom", "2.5%"], [2, "padding-top", "2.5%", "padding-left", "2.5%", "padding-right", "2.5%", "border-radius", "6px"], [2, "text-align", "center"], [1, "text-block1"], [2, "height", "20%"], ["src", "../assets/images/dairy.webp", 1, "img-responsive", "gradient", 2, "width", "100%", "object-fit", "cover", "border-radius", "6px"], [2, "border-radius", "6px", "margin", "2%", "background-color", "white"], ["class", "deviceLg", 4, "ngIf"], [4, "ngIf"], [1, "deviceLg"], ["style", "padding:2%;width: 20%;", 3, "click", 4, "ngFor", "ngForOf"], [2, "padding", "2%", "width", "20%", 3, "click"], [2, "text-align", "right"], [1, "btn"], [1, "glyphicon", "glyphicon-shopping-cart"], [1, "img-responsive", 3, "src"], [2, "font-weight", "bold"], [1, "row"], [2, "display", "flex", "flex-direction", "row", "flex-wrap", "wrap", "flex", "2", "justify-content", "space-evenly"], ["style", "padding:2%;width: 40%;", 3, "click", 4, "ngFor", "ngForOf"], [2, "padding", "2%", "width", "40%", 3, "click"]], template: function DairyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dairy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DairyComponent_div_8_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DairyComponent_div_9_Template, 4, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceLg || ctx.deviceMd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceXs || ctx.deviceSm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".text-block1[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  padding-top: 9%;\n  padding-left: 43%;\n  font-size: 2vw;\n  margin-bottom: 12px;\n  font-weight: 500;\n}\n\n.deviceXs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex: 1;\n}\n\n.deviceLg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.gradient[_ngcontent-%COMP%] {\n  background-color: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9kYWlyeS9kYWlyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0FBQUY7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNDLGVBQUE7QUFDSDs7QUFDQTtFQUNFLHlFQUFBO0FBRUYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2RhaXJ5L2RhaXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtYmxvY2sxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiA5JTtcbiAgcGFkZGluZy1sZWZ0OiA0MyU7XG5cbiAgZm9udC1zaXplOiAydnc7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbn1cbi5kZXZpY2VYc3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleDoxXG59XG4uZGV2aWNlTGd7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5ncmFkaWVudHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMC41KSk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DairyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dairy',
                templateUrl: './dairy.component.html',
                styleUrls: ['./dairy.component.scss']
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }, { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }]; }, null); })();


/***/ }),

/***/ "QEFU":
/*!******************************************************************!*\
  !*** ./src/app/account/resetPassword/resetPassword.component.ts ***!
  \******************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../account.service */ "2rwd");
/* harmony import */ var _textField_textField_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../textField/textField.component */ "glWx");







class ResetPasswordComponent {
    constructor(route, router, formBuilder, accountService) {
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.accountService = accountService;
    }
    ngOnInit() {
        const id = this.route.snapshot.paramMap.get("id");
        this.resetToken = id;
        this.rformPassword = this.formBuilder.group({
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
            resetToken: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.resetToken, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    changePassword() {
        if (this.rformPassword.valid) {
            this.accountService.resetPassword(this.rformPassword.value).subscribe(() => {
                alert("Password Reset Successful");
                this.router.navigate(['/']);
            }, (error) => {
                alert(error.error.message);
                // console.log(error)
            });
        }
    }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"])); };
ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["app-resetPassword"]], decls: 35, vars: 2, consts: [[2, "margin-top", "5%", "display", "flex", "flex-direction", "row", "flex", "1", "justify-content", "center"], [2, "margin-bottom", "5%"], [2, "font-size", "xx-large", "font-weight", "bold", "text-align", "center"], [2, "margin-bottom", "5%", "width", "100%"], ["name", "newPassword", "type", "password", "rformControlName", "newPassword", 1, "textfieldBorderColor", "font13", 2, "width", "100%", 3, "rformgroup"], ["hint", "min 8 chareacters", "name", "confirmPassword", "type", "password", "rformControlName", "confirmPassword", 1, "textfieldBorderColor", "font13", 3, "rformgroup"], [2, "text-align", "center"], [1, "btn", "btn-primary", 2, "color", "whitesmoke", "width", "100%", 3, "click"], [2, "font-weight", "bold", "font-size", "small"], [2, "background-color", "rgb(231, 228, 228)"], [2, "padding-left", "5%", "padding-right", "5%", "padding-top", "3%", "padding-bottom", "3%"], [1, "row"], [1, "col-lg-6"], [2, "width", "40vw"], [1, "hr", 2, "background-color", "black"], [2, "padding", "5%"], [1, "btn", 2, "padding-left", "2.5%", "padding-right", "2.5%", "background-color", "rgb(63, 61, 61)", "color", "whitesmoke"], [2, "text-align", "right"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Enter New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ns-textField-account", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "ns-textField-account", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_14_listener() { return ctx.changePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Reset your password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Quick Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " NewsLetter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "SIGN IN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u00A9 2020, Shrivasafoods store Powered by Shopify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rformgroup", ctx.rformPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rformgroup", ctx.rformPassword);
    } }, directives: [_textField_textField_component__WEBPACK_IMPORTED_MODULE_4__["TextFieldComponent"]], styles: [".text-block1[_ngcontent-%COMP%] {\n   position: absolute;\n   color: white;\n   padding-top: 9%;\n   padding-left: 40%;\n   font-size: 2vw;\n   margin-bottom: 12px;\n   font-weight: 500;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9yZXNldFBhc3N3b3JkL3Jlc2V0UGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLGtCQUFrQjtHQUNsQixZQUFZO0dBQ1osZUFBZTtHQUNmLGlCQUFpQjtHQUNqQixjQUFjO0dBQ2QsbUJBQW1CO0dBQ25CLGdCQUFnQjtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvcmVzZXRQYXNzd29yZC9yZXNldFBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1ibG9jazEge1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgY29sb3I6IHdoaXRlO1xuICAgcGFkZGluZy10b3A6IDklO1xuICAgcGFkZGluZy1sZWZ0OiA0MCU7XG4gICBmb250LXNpemU6IDJ2dztcbiAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICBmb250LXdlaWdodDogNTAwO1xuIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resetPassword',
                templateUrl: './resetPassword.component.html',
                styleUrls: ['./resetPassword.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"] }]; }, null); })();


/***/ }),

/***/ "S5X1":
/*!***************************************************************!*\
  !*** ./src/app/home/specialoffers/specialoffers.component.ts ***!
  \***************************************************************/
/*! exports provided: SpecialOffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialOffersComponent", function() { return SpecialOffersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "BRKm");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "87QV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function SpecialOffersComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpecialOffersComponent_div_8_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.addProduct(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.price);
} }
function SpecialOffersComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SpecialOffersComponent_div_8_div_1_Template, 9, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.specialoffersProducts);
} }
function SpecialOffersComponent_div_9_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpecialOffersComponent_div_9_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const item_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.addProduct(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r7.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.price);
} }
function SpecialOffersComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SpecialOffersComponent_div_9_div_3_Template, 9, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.specialoffersProducts);
} }
class SpecialOffersComponent {
    constructor(mediaObserver, productService, cartService) {
        this.mediaObserver = mediaObserver;
        this.productService = productService;
        this.cartService = cartService;
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
        });
        //  this.getproducts()
    }
    // getproducts(){
    //  this.products = this.productService.getProducts();
    // }
    addProduct(item) {
        this.cartService.addProduct(item);
    }
    getCatagoryProducts() {
        this.productService.getCatagoryProducts('specialoffers').subscribe((products) => {
            this.specialoffersProducts = products;
        }, (error) => {
            console.log('error in getting all products');
        });
    }
}
SpecialOffersComponent.ɵfac = function SpecialOffersComponent_Factory(t) { return new (t || SpecialOffersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"])); };
SpecialOffersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpecialOffersComponent, selectors: [["app-specialoffers"]], decls: 10, vars: 2, consts: [[2, "background-color", "rgb(240, 236, 236)", "padding-bottom", "2.5%"], [2, "padding-top", "2.5%", "padding-left", "2.5%", "padding-right", "2.5%", "border-radius", "6px"], [2, "text-align", "center"], [1, "text-block1"], [2, "height", "20%"], ["src", "../assets/images/specialoffers.webp", 1, "img-responsive", "gradient", 2, "width", "100%", "object-fit", "cover", "border-radius", "6px"], [2, "border-radius", "6px", "margin", "2%", "background-color", "white"], ["class", "deviceLg", 4, "ngIf"], [4, "ngIf"], [1, "deviceLg"], ["style", "padding:2%;width: 20%;", 3, "click", 4, "ngFor", "ngForOf"], [2, "padding", "2%", "width", "20%", 3, "click"], [2, "text-align", "right"], [1, "btn"], [1, "glyphicon", "glyphicon-shopping-cart"], [1, "img-responsive", 3, "src"], [2, "font-weight", "bold"], [1, "row"], [2, "display", "flex", "flex-direction", "row", "flex-wrap", "wrap", "flex", "2", "justify-content", "space-evenly"], ["style", "padding:2%;width: 40%;", 3, "click", 4, "ngFor", "ngForOf"], [2, "padding", "2%", "width", "40%", 3, "click"]], template: function SpecialOffersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "SpecialOffers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SpecialOffersComponent_div_8_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SpecialOffersComponent_div_9_Template, 4, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceLg || ctx.deviceMd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceXs || ctx.deviceSm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".text-block1[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  padding-top: 9%;\n  padding-left: 43%;\n  font-size: 2vw;\n  margin-bottom: 12px;\n  font-weight: 500;\n}\n\n.deviceXs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex: 1;\n}\n\n.deviceLg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.gradient[_ngcontent-%COMP%] {\n  background-color: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zcGVjaWFsb2ZmZXJzL3NwZWNpYWxvZmZlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtBQUFGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQyxlQUFBO0FBQ0g7O0FBQ0E7RUFDRSx5RUFBQTtBQUVGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9zcGVjaWFsb2ZmZXJzL3NwZWNpYWxvZmZlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1ibG9jazEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDklO1xuICBwYWRkaW5nLWxlZnQ6IDQzJTtcblxuICBmb250LXNpemU6IDJ2dztcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcblxufVxuLmRldmljZVhze1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4OjFcbn1cbi5kZXZpY2VMZ3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgZmxleC13cmFwOiB3cmFwO1xufVxuLmdyYWRpZW50e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjUpKTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpecialOffersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-specialoffers',
                templateUrl: './specialoffers.component.html',
                styleUrls: ['./specialoffers.component.scss']
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }, { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'SHRIVASAFOODS';
        this.navShow = true;
    }
    ngOnInIt() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".dropdown[_ngcontent-%COMP%]:hover > .dropdown-menu[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .dropdown[_ngcontent-%COMP%] > .dropdown-toggle[_ngcontent-%COMP%]:active {\n    \n      pointer-events: none;\n  }\n\n  .fundpress-menu[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding-top: 10px 10px;\n    text-transform: uppercase;\n    font-size: 12px;\n\n    height: 10px;\n}\n\n  .fundpress-tab-nav-v3[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  font-weight: 200 ;\n}\n\n  .nav-menu[_ngcontent-%COMP%] > li.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .nav-menu[_ngcontent-%COMP%] > li.focus[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .nav-menu[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%] {\n  color: green;\n  font-weight: lighter;\n}\n\n  .fundpress-menu[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 25px 10px;\n    text-transform: uppercase;\n\n    position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsNkNBQTZDO01BQzNDLG9CQUFvQjtFQUN4Qjs7RUFDQTtJQUNFLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsZUFBZTs7SUFFZixZQUFZO0FBQ2hCOztFQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztFQUNBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7RUFDQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7O0lBRXpCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duOmhvdmVyPi5kcm9wZG93bi1tZW51IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5kcm9wZG93bj4uZHJvcGRvd24tdG9nZ2xlOmFjdGl2ZSB7XG4gICAgLypXaXRob3V0IHRoaXMsIGNsaWNraW5nIHdpbGwgbWFrZSBpdCBzdGlja3kqL1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgLmZ1bmRwcmVzcy1tZW51IC5uYXYtbWVudSBsaSBhIHtcbiAgICBwYWRkaW5nLXRvcDogMTBweCAxMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgaGVpZ2h0OiAxMHB4O1xufVxuXG4uZnVuZHByZXNzLXRhYi1uYXYtdjMgLm5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIHtcbiAgZm9udC13ZWlnaHQ6IDIwMCA7XG59XG4ubmF2LW1lbnU+bGkuYWN0aXZlPmEsIC5uYXYtbWVudT5saS5mb2N1cz5hLCAubmF2LW1lbnU+bGk6aG92ZXI+YSB7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG4uZnVuZHByZXNzLW1lbnUgLm5hdi1tZW51IGxpIGEge1xuICAgIHBhZGRpbmc6IDI1cHggMTBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "TRGY":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/"]; };
const _c1 = function () { return ["/addProduct"]; };
class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 10, vars: 4, consts: [[2, "margin", "2%"], [2, "text-align", "center"], [2, "font-size", "larger", "float", "left", 3, "routerLink"], [2, "font-size", "larger", "float", "right", 3, "routerLink"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ADMIN PORTAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Add Prodcut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".text-block1[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  padding-top: 9%;\n  padding-left: 40%;\n  font-size: 2vw;\n  margin-bottom: 12px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNIIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1ibG9jazEge1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgY29sb3I6IHdoaXRlO1xuICAgcGFkZGluZy10b3A6IDklO1xuICAgcGFkZGluZy1sZWZ0OiA0MCU7XG4gICBmb250LXNpemU6IDJ2dztcbiAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICBmb250LXdlaWdodDogNTAwO1xuIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "YMok":
/*!*********************************************************************!*\
  !*** ./src/app/home/privacyandpolicy/privacyandpolicy.component.ts ***!
  \*********************************************************************/
/*! exports provided: PrivacyandpolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyandpolicyComponent", function() { return PrivacyandpolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PrivacyandpolicyComponent {
    constructor() { }
    ngOnInit() {
    }
}
PrivacyandpolicyComponent.ɵfac = function PrivacyandpolicyComponent_Factory(t) { return new (t || PrivacyandpolicyComponent)(); };
PrivacyandpolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivacyandpolicyComponent, selectors: [["app-privacyandpolicy"]], decls: 69, vars: 0, consts: [[2, "margin", "5%"], [1, "row", 2, "margin", "5%"], [1, "col-xs-4"], [2, "width", "60%", "word-wrap", "break-word"], [1, "col-xs-8"], ["id", "accordion"], [1, "row"], [1, "col-md-12"], ["id", "accordion", "role", "tablist", "aria-multiselectable", "true", 1, "panel-group"], [1, "panel", "panel-default"], ["role", "tab", "id", "headingOne", 1, "panel-heading"], [1, "panel-title"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne"], ["id", "collapseOne", "role", "tabpanel", "aria-labelledby", "headingOne", 1, "panel-collapse", "collapse", "in"], [1, "panel-body"], ["role", "tab", "id", "headingTwo", 1, "panel-heading"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseTwo", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "collapsed"], ["id", "collapseTwo", "role", "tabpanel", "aria-labelledby", "headingTwo", 1, "panel-collapse", "collapse"], ["role", "tab", "id", "headingThree", 1, "panel-heading"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseThree", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "collapsed"], ["id", "collapseThree", "role", "tabpanel", "aria-labelledby", "headingThree", 1, "panel-collapse", "collapse"], ["role", "tab", "id", "headingFour", 1, "panel-heading"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseFour", "aria-expanded", "false", "aria-controls", "collapseFour", 1, "collapsed"], ["id", "collapseFour", "role", "tabpanel", "aria-labelledby", "headingFour", 1, "panel-collapse", "collapse"], ["role", "tab", "id", "headingFive", 1, "panel-heading"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseFive", "aria-expanded", "false", "aria-controls", "collapseFive", 1, "collapsed"], ["id", "collapseFive", "role", "tabpanel", "aria-labelledby", "headingFive", 1, "panel-collapse", "collapse"]], template: function PrivacyandpolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Privacy and policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Every day help for our customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Every day help for our customersEvery day help for our customersEvery day help for our customersEvery day help for our cust omersEvery day help for our customersEvery day help for our customersEvery day help for our customersEvery day help for our customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "If you need help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Every day help for our customersEvery day help for our customersEvery day help for our customersEvery day help for our cust omersEvery day help for our customersEvery day help for our customersEvery day help for our customersEvery day help for our customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Why you choose Shrivasafoods? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Why Shrivasafoods best? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " How to apply Shrivasafoods jobs? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " How experts Shrivasafoods team member? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " How Shrivasafoods give customer support? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".panel-group[_ngcontent-%COMP%] {\n    background: #fff none repeat scroll 0 0;\n    border-radius: 3px;\n    box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.04);\n    margin-bottom: 0;\n    padding: 30px;\n}\n#accordion[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%] {\n    border: medium none;\n    border-radius: 0;\n    box-shadow: none;\n    margin: 0 0 15px 10px;\n}\n#accordion[_ngcontent-%COMP%]   .panel-heading[_ngcontent-%COMP%] {\n    border-radius: 30px;\n    padding: 0;\n}\n#accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    background:#b4d469 none repeat scroll 0 0;\n    border: 1px solid transparent;\n    border-radius: 30px;\n    color: black;\n    display: block;\n    font-size: 18px;\n    font-weight: 600;\n    padding: 12px 20px 12px 50px;\n    position: relative;\n    transition: all 0.3s ease 0s;\n}\n#accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%] {\n    background:white none repeat scroll 0 0;\n    border: 1px solid #ddd;\n    color: black;\n}\n#accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%]:hover {\n    background:#b4d469  none repeat scroll 0 0;\n    border: 1px solid #ddd;\n    color: black;\n}\n#accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after, #accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%]::after {\n    background: #93bb36 none repeat scroll 0 0;\n    border: 1px solid transparent;\n    border-radius: 50%;\n    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.58);\n    color: #fff;\n    content: \"\uF107\";\n    font-family: fontawesome;\n    font-size: 25px;\n    height: 55px;\n    left: -20px;\n    line-height: 55px;\n    position: absolute;\n    text-align: center;\n    top: -5px;\n    transition: all 0.3s ease 0s;\n    width: 55px;\n}\n#accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%]::after {\n    background:black none repeat scroll 0 0;\n    border: 1px solid #ddd;\n    box-shadow: none;\n    color: white;\n    content: \"\uF105\";\n}\n#accordion[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n    background: transparent none repeat scroll 0 0;\n    border-top: medium none;\n    padding: 20px 25px 10px 9px;\n    position: auto;\n    font-family: \"Open Sans\", sans-serif;\n}\n#accordion[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    border-left: 1px dashed #8c8c8c;\n    padding-left: 25px;\n}\nli.panel-body[_ngcontent-%COMP%] {\n     font-weight: bold;\n    font-size: small;\n    \n        margin-bottom: 14px;\n    text-align: left;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcml2YWN5YW5kcG9saWN5L3ByaXZhY3lhbmRwb2xpY3kuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSx1Q0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLDRDQUE0QztJQUM1QyxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtBQUNkO0FBQ0E7SUFDSSx5Q0FBeUM7SUFDekMsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLHVDQUF1QztJQUN2QyxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksMENBQTBDO0lBQzFDLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSwwQ0FBMEM7SUFDMUMsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQiwwQ0FBMEM7SUFDMUMsV0FBVztJQUNYLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULDRCQUE0QjtJQUM1QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHVDQUF1QztJQUN2QyxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSw4Q0FBOEM7SUFDOUMsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2Qsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0Isa0JBQWtCO0FBQ3RCO0FBRUE7S0FDSyxpQkFBaUI7SUFDbEIsZ0JBQWdCOztRQUVaLG1CQUFtQjtJQUN2QixnQkFBZ0I7O0FBRXBCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9wcml2YWN5YW5kcG9saWN5L3ByaXZhY3lhbmRwb2xpY3kuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnBhbmVsLWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgcGFkZGluZzogMzBweDtcbn1cbiNhY2NvcmRpb24gLnBhbmVsIHtcbiAgICBib3JkZXI6IG1lZGl1bSBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBtYXJnaW46IDAgMCAxNXB4IDEwcHg7XG59XG4jYWNjb3JkaW9uIC5wYW5lbC1oZWFkaW5nIHtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHBhZGRpbmc6IDA7XG59XG4jYWNjb3JkaW9uIC5wYW5lbC10aXRsZSBhIHtcbiAgICBiYWNrZ3JvdW5kOiNiNGQ0Njkgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHggMTJweCA1MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xufVxuI2FjY29yZGlvbiAucGFuZWwtdGl0bGUgYS5jb2xsYXBzZWQge1xuICAgIGJhY2tncm91bmQ6d2hpdGUgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGNvbG9yOiBibGFjaztcbn1cbiNhY2NvcmRpb24gLnBhbmVsLXRpdGxlIGEuY29sbGFwc2VkOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiNiNGQ0NjkgIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBjb2xvcjogYmxhY2s7XG59XG4jYWNjb3JkaW9uIC5wYW5lbC10aXRsZSBhOjphZnRlciwgI2FjY29yZGlvbiAucGFuZWwtdGl0bGUgYS5jb2xsYXBzZWQ6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjOTNiYjM2IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjU4KTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBjb250ZW50OiBcIu+Eh1wiO1xuICAgIGZvbnQtZmFtaWx5OiBmb250YXdlc29tZTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIGxlZnQ6IC0yMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA1NXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdG9wOiAtNXB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gICAgd2lkdGg6IDU1cHg7XG59XG4jYWNjb3JkaW9uIC5wYW5lbC10aXRsZSBhLmNvbGxhcHNlZDo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6YmxhY2sgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGNvbnRlbnQ6IFwi74SFXCI7XG59XG4jYWNjb3JkaW9uIC5wYW5lbC1ib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICAgIGJvcmRlci10b3A6IG1lZGl1bSBub25lO1xuICAgIHBhZGRpbmc6IDIwcHggMjVweCAxMHB4IDlweDtcbiAgICBwb3NpdGlvbjogYXV0bztcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cbiNhY2NvcmRpb24gLnBhbmVsLWJvZHkgcCB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBkYXNoZWQgIzhjOGM4YztcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG59XG5cbmxpLnBhbmVsLWJvZHkge1xuICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacyandpolicyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-privacyandpolicy',
                templateUrl: './privacyandpolicy.component.html',
                styleUrls: ['./privacyandpolicy.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Yg7E":
/*!*******************************************************!*\
  !*** ./src/app/home/giftCards/giftCards.component.ts ***!
  \*******************************************************/
/*! exports provided: GiftCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftCardsComponent", function() { return GiftCardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class GiftCardsComponent {
    constructor() { }
    ngOnInit() {
    }
}
GiftCardsComponent.ɵfac = function GiftCardsComponent_Factory(t) { return new (t || GiftCardsComponent)(); };
GiftCardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GiftCardsComponent, selectors: [["app-giftCards"]], decls: 13, vars: 0, consts: [[1, "row", 2, "min-height", "200px", "margin", "10%"], [1, "col-xs-8"], [1, "col-xs-4"], [2, "width", "50%", "word-wrap", "break-word"], [2, "display", "flex", "flex-direction", "row", "justify-content", "space-between"], [1, "btn", "btn-primary"]], template: function GiftCardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Image ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Give the gift of GRUBHUB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "with Grubhub gift cards,friends and family can order anytime from anywhere for their fav resturaunt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Buy a gift card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Redeam a gift card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".done[_ngcontent-%COMP%]{\n  height: 35px;\n    width: 40px;\n    padding: 5px;\n    text-align: center;\n    padding-top: 2%;\n    border-radius: 50%;\n    display: inline-block;\n    color:#fff;\n    font-size:1.1em;\n    font-weight:600;\n    background-color:rgb(0, 161, 0);\n    border: 1px solid rgba(0,0,0,0.2);\n}\n\n.inactive[_ngcontent-%COMP%]{\n  height: 35px;\n  width: 40px;\n  padding: 5px;\n  text-align: center;\n  padding-top: 2%;\n  border-radius: 50%;\n  display: inline-block;\n  color:#fff;\n  font-size:1.1em;\n  font-weight:600;\n  background-color:rgb(148, 148, 148);\n  border: 1px solid rgba(0,0,0,0.2);\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9naWZ0Q2FyZHMvZ2lmdENhcmRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLGVBQWU7SUFDZixlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLGlDQUFpQztBQUNyQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsZUFBZTtFQUNmLGVBQWU7RUFDZixtQ0FBbUM7RUFDbkMsaUNBQWlDOztBQUVuQyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZ2lmdENhcmRzL2dpZnRDYXJkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvbmV7XG4gIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAyJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiNmZmY7XG4gICAgZm9udC1zaXplOjEuMWVtO1xuICAgIGZvbnQtd2VpZ2h0OjYwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigwLCAxNjEsIDApO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcbn1cblxuLmluYWN0aXZle1xuICBoZWlnaHQ6IDM1cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDIlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6I2ZmZjtcbiAgZm9udC1zaXplOjEuMWVtO1xuICBmb250LXdlaWdodDo2MDA7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDE0OCwgMTQ4LCAxNDgpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7XG5cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GiftCardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-giftCards',
                templateUrl: './giftCards.component.html',
                styleUrls: ['./giftCards.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin/admin.module */ "jkDv");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngmodule/material-carousel */ "XZNO");
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-image-slider */ "yf9x");
/* harmony import */ var _account_account_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account/account.module */ "jcJX");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.module */ "ct+p");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app/auth.service */ "ccyI");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angularx-social-login */ "ahC7");

















const googleid = '';
const facebookid = '2702502043208538';
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_app_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"], {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["GoogleLoginProvider"].PROVIDER_ID,
                        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["GoogleLoginProvider"]('957381003231-bt0brr1vn47vpgg10u2naiekq1tgbo3k.apps.googleusercontent.com')
                    },
                    {
                        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["FacebookLoginProvider"].PROVIDER_ID,
                        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["FacebookLoginProvider"]('712246012755918')
                    }
                ]
            },
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ng_image_slider__WEBPACK_IMPORTED_MODULE_8__["NgImageSliderModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_10__["HomeModule"],
            _admin_admin_module__WEBPACK_IMPORTED_MODULE_0__["AdminModule"],
            _account_account_module__WEBPACK_IMPORTED_MODULE_9__["AccountModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["SocialLoginModule"],
            _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_7__["MatCarouselModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        ng_image_slider__WEBPACK_IMPORTED_MODULE_8__["NgImageSliderModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
        _home_home_module__WEBPACK_IMPORTED_MODULE_10__["HomeModule"],
        _admin_admin_module__WEBPACK_IMPORTED_MODULE_0__["AdminModule"],
        _account_account_module__WEBPACK_IMPORTED_MODULE_9__["AccountModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["SocialLoginModule"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_7__["MatCarouselModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    ng_image_slider__WEBPACK_IMPORTED_MODULE_8__["NgImageSliderModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                    _home_home_module__WEBPACK_IMPORTED_MODULE_10__["HomeModule"],
                    _admin_admin_module__WEBPACK_IMPORTED_MODULE_0__["AdminModule"],
                    _account_account_module__WEBPACK_IMPORTED_MODULE_9__["AccountModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["SocialLoginModule"],
                    _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_7__["MatCarouselModule"].forRoot(),
                ],
                providers: [_app_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"], {
                        provide: 'SocialAuthServiceConfig',
                        useValue: {
                            autoLogin: false,
                            providers: [
                                {
                                    id: angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["GoogleLoginProvider"].PROVIDER_ID,
                                    provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["GoogleLoginProvider"]('957381003231-bt0brr1vn47vpgg10u2naiekq1tgbo3k.apps.googleusercontent.com')
                                },
                                {
                                    id: angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["FacebookLoginProvider"].PROVIDER_ID,
                                    provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["FacebookLoginProvider"]('712246012755918')
                                }
                            ]
                        },
                    }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "agvn":
/*!*************************************************!*\
  !*** ./src/app/home/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "BRKm");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "87QV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function FooterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "About Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Our Offerings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "News Room");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Investors");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Blog");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Careers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Ride");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Drive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Eat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Bussniss");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Global CitizenShip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Saftey");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Inovation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Advanced Technoglogy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "AI");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FooterComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "About Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Our Offerings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "News Room");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Investors");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Blog");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Careers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Ride");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Drive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Eat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Bussniss");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Global CitizenShip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Saftey");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Inovation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Advanced Technoglogy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "AI");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FooterComponent {
    constructor(mediaObserver, productService, cartService, router) {
        this.mediaObserver = mediaObserver;
        this.productService = productService;
        this.cartService = cartService;
        this.router = router;
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
        });
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 2, consts: [["class", "row", "style", "padding: 5%; background-color: black;", 4, "ngIf"], [4, "ngIf"], [1, "row", 2, "padding", "5%", "background-color", "black"], [1, "col-lg-3"], [2, "color", "white"], [1, "col-lg-3", "p-l-33"], ["routerLink", "/login", 1, "fa", "fa-facebook-square", 2, "font-weight", "200", "font-size", "large", "margin-right", "2%", "padding", "2%", "color", "white"], ["routerLink", "/login", 1, "fa", "fa-whatsapp", 2, "font-weight", "200", "font-size", "large", "margin-right", "2%", "padding", "2%", "color", "white"], [1, "col-xs-3"], [1, "col-xs-3", "p-l-10"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FooterComponent_div_0_Template, 44, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterComponent_div_1_Template, 45, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceLg || ctx.deviceMd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceXs || ctx.deviceSm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }, { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "bFHB":
/*!***********************************************************!*\
  !*** ./src/app/home/sweetandhot/sweetandhot.component.ts ***!
  \***********************************************************/
/*! exports provided: SweetandHotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SweetandHotComponent", function() { return SweetandHotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "BRKm");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "87QV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function SweetandHotComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SweetandHotComponent_div_7_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.addProduct(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.price);
} }
function SweetandHotComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SweetandHotComponent_div_7_div_1_Template, 9, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.sweetandhotProducts);
} }
function SweetandHotComponent_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SweetandHotComponent_div_8_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const item_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.addProduct(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r7.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.price);
} }
function SweetandHotComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SweetandHotComponent_div_8_div_3_Template, 9, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.sweetandhotProducts);
} }
class SweetandHotComponent {
    constructor(mediaObserver, productService, cartService) {
        this.mediaObserver = mediaObserver;
        this.productService = productService;
        this.cartService = cartService;
        this.products = [];
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
        });
        this.getCatagoryProducts();
    }
    getCatagoryProducts() {
        this.productService.getCatagoryProducts('fish&meat').subscribe((products) => {
            this.sweetandhotProducts = products;
        }, (error) => {
            console.log('error in getting all products');
        });
    }
    addProduct(item) {
        this.cartService.addProduct(item);
    }
}
SweetandHotComponent.ɵfac = function SweetandHotComponent_Factory(t) { return new (t || SweetandHotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"])); };
SweetandHotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SweetandHotComponent, selectors: [["app-sweetandhot"]], decls: 9, vars: 2, consts: [[2, "background-color", "rgb(240, 236, 236)", "padding-bottom", "2.5%"], [2, "padding-top", "2.5%", "padding-left", "2.5%", "padding-right", "2.5%", "border-radius", "6px"], [1, "text-block1"], [2, "height", "20%"], ["src", "../assets/images/fish.webp", 1, "img-responsive", "gradient", 2, "width", "100%", ";object-fit", "cover", "border-radius", "6px"], [2, "border-radius", "6px", "margin", "2%", "background-color", "white"], ["class", "deviceLg", 4, "ngIf"], [4, "ngIf"], [1, "deviceLg"], ["style", "padding:2%;width: 20%;", 3, "click", 4, "ngFor", "ngForOf"], [2, "padding", "2%", "width", "20%", 3, "click"], [2, "text-align", "right"], [1, "btn"], [1, "glyphicon", "glyphicon-shopping-cart"], [1, "img-responsive", 3, "src"], [2, "font-weight", "bold"], [1, "row"], [2, "display", "flex", "flex-direction", "row", "flex-wrap", "wrap", "flex", "2", "justify-content", "space-evenly"], ["style", "padding:2%;width: 40%;", 3, "click", 4, "ngFor", "ngForOf"], [2, "padding", "2%", "width", "40%", 3, "click"]], template: function SweetandHotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sweet & Hot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SweetandHotComponent_div_7_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SweetandHotComponent_div_8_Template, 4, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceLg || ctx.deviceMd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceXs || ctx.deviceSm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".text-block1[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  padding-top: 9%;\n  padding-left: 40%;\n  font-size: 2vw;\n  margin-bottom: 12px;\n  font-weight: 500;\n}\n\n.deviceXs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex: 1;\n}\n\n.deviceLg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.gradient[_ngcontent-%COMP%] {\n  background-color: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zd2VldGFuZGhvdC9zd2VldGFuZGhvdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0FBRUY7O0FBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNDLGVBQUE7QUFHSDs7QUFEQTtFQUNFLHlFQUFBO0FBSUYiLCJmaWxlIjoic3JjL2FwcC9ob21lL3N3ZWV0YW5kaG90L3N3ZWV0YW5kaG90LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtYmxvY2sxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiA5JTtcbiAgcGFkZGluZy1sZWZ0OiA0MCU7XG4gIGZvbnQtc2l6ZTogMnZ3O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmRldmljZVhze1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4OjFcbn1cbi5kZXZpY2VMZ3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgZmxleC13cmFwOiB3cmFwO1xufVxuLmdyYWRpZW50e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjUpKTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SweetandHotComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sweetandhot',
                templateUrl: './sweetandhot.component.html',
                styleUrls: ['./sweetandhot.component.scss']
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }, { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }]; }, null); })();


/***/ }),

/***/ "cMot":
/*!*************************************************!*\
  !*** ./src/app/home/others/others.component.ts ***!
  \*************************************************/
/*! exports provided: OthersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersComponent", function() { return OthersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "BRKm");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "87QV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function OthersComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OthersComponent_div_7_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.addProduct(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.price);
} }
function OthersComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OthersComponent_div_7_div_1_Template, 9, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.othersProducts);
} }
function OthersComponent_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r7.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.price);
} }
function OthersComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OthersComponent_div_8_div_3_Template, 9, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.othersProducts);
} }
class OthersComponent {
    constructor(mediaObserver, productService, cartService) {
        this.mediaObserver = mediaObserver;
        this.productService = productService;
        this.cartService = cartService;
        this.products = [];
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
        });
        //  this.getproducts()
    }
    // getproducts(){
    //  this.products = this.productService.getProducts();
    // }
    // addProduct(item){
    // this.cartService.addProduct(item);
    //   }
    getCatagoryProducts() {
        this.productService.getCatagoryProducts('others').subscribe((products) => {
            this.othersProducts = products;
        }, (error) => {
            console.log('error in getting all products');
        });
    }
}
OthersComponent.ɵfac = function OthersComponent_Factory(t) { return new (t || OthersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"])); };
OthersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OthersComponent, selectors: [["app-others"]], decls: 9, vars: 2, consts: [[2, "background-color", "rgb(240, 236, 236)", "padding-bottom", "2.5%"], [2, "padding-top", "2.5%", "padding-left", "2.5%", "padding-right", "2.5%", "border-radius", "6px"], [1, "text-block1"], [2, "height", "20%"], ["src", "../assets/images/bakery.jpg", 1, "img-responsive", "gradient", 2, "width", "100%", ";object-fit", "cover", "border-radius", "6px"], [2, "border-radius", "6px", "margin", "2%", "background-color", "white"], ["class", "deviceLg", 4, "ngIf"], [4, "ngIf"], [1, "deviceLg"], ["style", "padding:2%;width: 20%;", 3, "click", 4, "ngFor", "ngForOf"], [2, "padding", "2%", "width", "20%", 3, "click"], [2, "text-align", "right"], [1, "btn"], [1, "glyphicon", "glyphicon-shopping-cart"], [1, "img-responsive", 3, "src"], [2, "font-weight", "bold"], [1, "row"], [2, "display", "flex", "flex-direction", "row", "flex-wrap", "wrap", "flex", "2", "justify-content", "space-evenly"], ["style", "padding:2%;width: 40%;", 4, "ngFor", "ngForOf"], [2, "padding", "2%", "width", "40%"]], template: function OthersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Others");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OthersComponent_div_7_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OthersComponent_div_8_Template, 4, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceLg || ctx.deviceMd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceXs || ctx.deviceSm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".text-block1[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  padding-top: 9%;\n  padding-left: 40%;\n  font-size: 2vw;\n  margin-bottom: 12px;\n  font-weight: 500;\n}\n\n.deviceXs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex: 1;\n}\n\n.deviceLg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.gradient[_ngcontent-%COMP%] {\n  background-color: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9vdGhlcnMvb3RoZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7QUFFRjs7QUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0MsZUFBQTtBQUdIOztBQURBO0VBQ0UseUVBQUE7QUFJRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvb3RoZXJzL290aGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWJsb2NrMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogOSU7XG4gIHBhZGRpbmctbGVmdDogNDAlO1xuICBmb250LXNpemU6IDJ2dztcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5kZXZpY2VYc3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleDoxXG59XG4uZGV2aWNlTGd7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5ncmFkaWVudHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMC41KSk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OthersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-others',
                templateUrl: './others.component.html',
                styleUrls: ['./others.component.scss']
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }, { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }]; }, null); })();


/***/ }),

/***/ "cPhq":
/*!*********************************************!*\
  !*** ./src/app/home/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _appconstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../appconstants */ "FAXg");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "87QV");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product.service */ "BRKm");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../footer/footer.component */ "agvn");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/popover */ "EDFS");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../nav/nav.component */ "2ChW");












function HomeComponent_header_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_header_0_div_11_ng_template_5_li_16_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_header_0_div_11_ng_template_5_li_16_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r11.onLogoutClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_header_0_div_11_ng_template_5_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_header_0_div_11_ng_template_5_li_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 42);
} }
function HomeComponent_header_0_div_11_ng_template_5_p_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Refer Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_header_0_div_11_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "My orders ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Support ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Admin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HomeComponent_header_0_div_11_ng_template_5_li_16_Template, 1, 0, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HomeComponent_header_0_div_11_ng_template_5_p_17_Template, 2, 0, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Gift Cards ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HomeComponent_header_0_div_11_ng_template_5_li_24_Template, 1, 0, "li", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HomeComponent_header_0_div_11_ng_template_5_p_25_Template, 2, 0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.authService.loggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.authService.loggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.authService.loggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.authService.loggedIn());
} }
function HomeComponent_header_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_header_0_div_11_ng_template_5_Template, 26, 4, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hi ", ctx_r3.username, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("popoverTitle", "Hi", ctx_r3.username, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("popover", _r5);
} }
function HomeComponent_header_0_div_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Added ", ctx_r4.getCartProducts.length, " Items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx_r4.getTotal, "");
} }
const _c0 = function () { return ["/blog"]; };
const _c1 = function () { return ["/aboutUs"]; };
const _c2 = function () { return ["/testimonals"]; };
const _c3 = function () { return ["/supportpage"]; };
function HomeComponent_header_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " SHIRIVAS FOODS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " What Are You Looking For? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_header_0_div_10_Template, 4, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_header_0_div_11_Template, 7, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nav", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_header_0_Template_a_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.catagory(ctx_r13.getPicklesConstants(1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_header_0_Template_a_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.catagory(ctx_r15.getPicklesConstants(2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_header_0_Template_a_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.catagory(ctx_r16.getTraditionalPodulu(1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_header_0_Template_a_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.catagory(ctx_r17.getTraditionalPodulu(2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_header_0_Template_a_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.catagory(ctx_r18.getSweetsandHotConstants(1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_header_0_Template_a_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.catagory(ctx_r19.getSweetsandHotConstants(2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_header_0_Template_a_click_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.catagory(ctx_r20.getSpecialConstants(1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_header_0_Template_a_click_58_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.catagory(ctx_r21.getSpecialConstants(2)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_header_0_Template_a_click_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.catagory(ctx_r22.getSpecialConstants(3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_header_0_Template_a_click_64_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.catagory(ctx_r23.getSpecialConstants(4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "About US");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_header_0_Template_a_click_93_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.catagory(ctx_r24.getAboutusConstants(4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_header_0_Template_a_click_96_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.catagory(ctx_r25.getAboutusConstants(5)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, HomeComponent_header_0_div_115_Template, 8, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.authService.loggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.authService.loggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getHeaderNames(1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getHeaderNames(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getPicklesConstants(1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getPicklesConstants(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getHeaderNames(3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getTraditionalPodulu(1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getTraditionalPodulu(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getHeaderNames(4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getSweetsandHotConstants(1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getSweetsandHotConstants(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getHeaderNames(5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getSpecialConstants(1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getSpecialConstants(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getSpecialConstants(3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getSpecialConstants(4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getHeaderNames(6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getOthersConstants(1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getOthersConstants(1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getOthersConstants(1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getHeaderNames(7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getAboutusConstants(1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getAboutusConstants(3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getAboutusConstants(4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getAboutusConstants(5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getHeaderNames(8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getSupportConstants(1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getSupportConstants(2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getSupportConstants(3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getSupportConstants(4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.getCartProducts != 0);
} }
function HomeComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Added ", ctx_r26.getCartProducts.length, " Items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx_r26.getTotal, "");
} }
function HomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_1_div_1_Template, 8, 2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.getCartProducts != 0);
} }
class HomeComponent {
    constructor(mediaObserver, cartService, productService, authService, router) {
        this.mediaObserver = mediaObserver;
        this.cartService = cartService;
        this.productService = productService;
        this.authService = authService;
        this.router = router;
        this.cart = [];
        this.username = ' username';
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
        });
    }
    // get usernameLogin(){
    //   this.username = this.authService.getusername()
    //   return this.username
    // }
    get getCartProducts() {
        this.cart = this.cartService.getProducts();
        return this.cart;
    }
    get getTotal() {
        this.total = this.cartService.getTotalPrice();
        return this.total;
    }
    onLogoutClick() {
        this.authService.loggedOutName();
        this.authService.loggedOutEmail();
        this.authService.loggedOutuserId();
        this.authService.loggedOutRefrenceId();
    }
    catagory(page) {
        this.router.navigate(['catagory/', page]);
    }
    getHeaderNames(indx) { return _appconstants__WEBPACK_IMPORTED_MODULE_1__["HeaderConstants"][indx]; }
    getPicklesConstants(indx) { return _appconstants__WEBPACK_IMPORTED_MODULE_1__["PicklesConstants"][indx]; }
    getTraditionalPodulu(indx) { return _appconstants__WEBPACK_IMPORTED_MODULE_1__["TraditionalPodulu"][indx]; }
    getSweetsandHotConstants(indx) { return _appconstants__WEBPACK_IMPORTED_MODULE_1__["SweetsandHotConstants"][indx]; }
    getSpecialConstants(indx) { return _appconstants__WEBPACK_IMPORTED_MODULE_1__["SpecialConstants"][indx]; }
    getOthersConstants(indx) { return _appconstants__WEBPACK_IMPORTED_MODULE_1__["SupportConstants"][indx]; }
    getAboutusConstants(indx) { return _appconstants__WEBPACK_IMPORTED_MODULE_1__["AboutusConstants"][indx]; }
    getSupportConstants(indx) { return _appconstants__WEBPACK_IMPORTED_MODULE_1__["SupportConstants"][indx]; }
    getVegpickles(indx) { }
    getNonvegpickles(indx) { }
    getMasalas(indx) { }
    getSweets(indx) { }
    getHot(indx) { }
    getOthers(indx) { }
    getFAQ(indx) { }
    getTermsAndCondition(indx) { }
    getShipping(indx) { }
    getChat(indx) { }
    getBlog(indx) { }
    getSupport(indx) { }
    getPayments(indx) { }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 2, consts: [[4, "ngIf"], [2, "padding-top", "0.5%", "margin-left", "2%", "margin-right", "2%", "display", "flex", "flex-direction", "row", "justify-content", "space-between"], ["routerLink", "/", 2, "padding-left", "0.5%", "font-size", "2vw", "font-weight", "500", "padding-top", "2%"], [2, "width", "60%", "padding", "10px"], [2, "border-radius", "6px", "font-weight", "300px", "margin-left", "5%", "margin-right", "5%", "background-color", "rgb(240, 238, 238)"], ["routerLink", "/login", 1, "fa", "fa-search", 2, "font-weight", "200", "font-size", "large", "margin-right", "2%", "padding", "2%", "color", "rgb(134, 132, 132)"], ["style", "padding-top: 1%;", 4, "ngIf"], ["style", "display: flex;flex-direction: row;padding-top: 1%;", 4, "ngIf"], [2, "padding-top", "1%"], ["routerLink", "/cart", 1, "fa", "fa-shopping-cart", 2, "font-size", "xx-large"], [2, "height", "1px", "margin", "0px 0px"], [1, "fundpress-menu", 2, "margin-bottom", "4%"], [1, "nav-menu", 2, "width", "100%"], ["routerLink", "/", 1, "dropdown"], [1, "dropdown"], ["data-toggle", "dropdown", 1, "dropdown-toggle"], [1, "dropdown-menu"], [3, "click"], ["routerLink", "/specialoffers", 1, "dropdown"], ["routerLink", "/faq"], [3, "routerLink"], ["routerLink", "/cart", "style", "\n    box-sizing: border-box;\n    min-width: 0px;\n    max-width: 960px;\n    margin: 0px auto;\n    pointer-events: none;\n    width: calc(100% - 40px);\n", 4, "ngIf"], ["routerLink", "/login", 1, "fa", "fa-user-circle-o", 2, "font-size", "xx-large"], ["routerLink", "/login", "routerLinkActive", "router-link-active"], [2, "display", "flex", "flex-direction", "row", "padding-top", "1%"], [2, "font-size", "large", "padding-top", "5%"], [1, "fa", "fa-cog", 2, "font-size", "xx-large", 3, "popover", "popoverTitle"], ["popTemplate", ""], [1, "row"], [1, "col-lg-6"], ["routerLink", "/myOrders", 1, "fa", "fa-user-circle-o", 2, "font-size", "xx-large"], ["routerLink", "/myOrders", "routerLinkActive", "router-link-active"], ["routerLink", "/support", 1, "fa", "fa-user-circle-o", 2, "font-size", "xx-large"], ["routerLink", "/support", "routerLinkActive", "router-link-active"], ["routerLink", "/admin", 1, "fa", "fa-user-circle-o", 2, "font-size", "xx-large"], ["routerLink", "/admin", "routerLinkActive", "router-link-active"], ["style", "font-size: xx-large", "class", "fa fa-sign-out", 3, "click", 4, "ngIf"], ["routerLink", "/giftCards", 1, "fa", "fa-user-circle-o", 2, "font-size", "xx-large"], ["routerLink", "/giftCards"], ["style", "font-size: xx-large", "routerLink", "/referFriend", "class", "fa fa-sign-out", 4, "ngIf"], ["routerLink", "/referFriend ", 4, "ngIf"], [1, "fa", "fa-sign-out", 2, "font-size", "xx-large", 3, "click"], ["routerLink", "/referFriend", 1, "fa", "fa-sign-out", 2, "font-size", "xx-large"], ["routerLink", "/referFriend "], ["routerLink", "/cart", 2, "box-sizing", "border-box", "min-width", "0px", "max-width", "960px", "margin", "0px auto", "pointer-events", "none", "width", "calc(100% - 40px)"], [2, "bottom", "87px", "opacity", "1", "transform", "translateY(0px)", "border", "0px", "outline", "0px", "max-width", "960px", "height", "50px", "color", "white", "padding", "0px 30px", "position", "fixed", "pointer-events", "all", "width", "calc(100% - 40px)", "border-radius", "6px", "display", "flex", "align-items", "center", "justify-content", "space-between", "background-color", "rgb(41, 41, 41)", "box-shadow", "rgba(0, 0, 0, 0.12) 0px 6px 12px", "cursor", "pointer", "left", "auto", "right", "auto", "z-index", "999"], [2, "color", "white"], ["width", "16", "height", "16", "viewBox", "0 0 16 16"], ["id", "shopping-bag", "d", "M4.4,3.6H15.6a.8.8,0,0,1,.8.8V15.6a.8.8,0,0,1-.8.8H4.4a.8.8,0,0,1-.8-.8V4.4A.8.8,0,0,1,4.4,3.6ZM2,4.4A2.4,2.4,0,0,1,4.4,2H15.6A2.4,2.4,0,0,1,18,4.4V15.6A2.4,2.4,0,0,1,15.6,18H4.4A2.4,2.4,0,0,1,2,15.6ZM10,10C7.791,10,6,7.851,6,5.2H7.6c0,2.053,1.335,3.2,2.4,3.2s2.4-1.147,2.4-3.2H14C14,7.851,12.209,10,10,10Z", "transform", "translate(-2 -2)", "fill", "#ffffff", "fill-rule", "evenodd"], ["routerLink", "/cart", "style", "\n  box-sizing: border-box;\n  min-width: 0px;\n  max-width: 960px;\n  margin: 0px auto;\n  pointer-events: none;\n  width: 10vw;\n  width: calc(100% - 40px);\n", 4, "ngIf"], ["routerLink", "/cart", 2, "box-sizing", "border-box", "min-width", "0px", "max-width", "960px", "margin", "0px auto", "pointer-events", "none", "width", "10vw", "width", "calc(100% - 40px)"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_header_0_Template, 116, 40, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 4, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceLg || ctx.deviceMd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceXs || ctx.deviceSm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_9__["PopoverDirective"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"]], styles: [".textimages[_ngcontent-%COMP%]{\n    top: 10%;\n    left: 10%;\n   position: absolute;\n  }.text-block1[_ngcontent-%COMP%] {\n    position: absolute;\n\n    color: white;\n    padding-top: 10%;\n    padding-left: 5%;\n    font-size: 3vw;\n    margin-bottom: 12px;\n  }.text-block2[_ngcontent-%COMP%] {\n    position: absolute;\n\n    color: white;\n    padding-top: 20%;\n    padding-left: 5%;\n    font-size: 1vw;\n\n  }.btn[_ngcontent-%COMP%]:hover {\n    background-color: rgb(233, 230, 230);\n  }.text-block3[_ngcontent-%COMP%] {\n    position: absolute;\n    background-color:white;\n\n    font-weight: bold;\n    margin-top: 25%;\n    margin-left: 5%;\n    font-size: 1vw;\n    padding-top: 12px;\n    text-align: center;\n    height: 3vw;\n    width: 10vw;\n    border-radius: 6px;\n  }.text-block1Footer[_ngcontent-%COMP%] {\n    position: absolute;\n\n    padding-top: 6%;\n    padding-left: 5%;\n    font-size: 3vw;\n    margin-bottom: 12px;\n  }.text-block2Footer[_ngcontent-%COMP%] {\n    position: absolute;\n\n    padding-top: 15%;\n    padding-left: 5%;\n    font-size: 1vw;\n\n  }.text-block3Footer[_ngcontent-%COMP%] {\n    position: absolute;\n    background-color:white;\n    font-weight: bold;\n    margin-top: 18%;\n    margin-left: 5%;\n    font-size: 1vw;\n    padding-top: 12px;\n    text-align: center;\n    height: 3.5vw;\n    width: 10vw;\n    border-radius: 6px;\n  }.container[_ngcontent-%COMP%] {\n    position: relative;\n  }.deviceXs[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex:1\n}.deviceLg[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n   flex-wrap: wrap;\n}.slide1[_ngcontent-%COMP%]{\n  position: absolute;\n  font-size: 3vw;\n  margin-bottom: 12px;\n}.bignodisplay[_ngcontent-%COMP%]{\n  position: absolute;\n  top: 10px;\n  right: 20px;\n  font-size: 40px;\n\n}.posright[_ngcontent-%COMP%]{\n  position: absolute;\n  left: 10px;\n  top: 10px;\n}.dropdown[_ngcontent-%COMP%]:hover > .dropdown-menu[_ngcontent-%COMP%] {\n  display: block;\n}.nav-menu[_ngcontent-%COMP%] > li.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .nav-menu[_ngcontent-%COMP%] > li.focus[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .nav-menu[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:hover > a[_ngcontent-%COMP%] {\ncolor: #93bb36;\n\n}.fundpress-menu[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 18px 10px;\n\n}.fundpress-menu[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n  background-color: #b4d469 ;\n\n}.nav-menu[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\n  height: 50%;\n  width: 100%;\n  \n\n}.fundpress-menu[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%] {\n  padding-left: 2%;\n font-Family: 'Open Sans, sans-serif'; \n\n\n}.fundpress-menu[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n      font-weight: 100;\n      font-family: \"Open Sans\", sans-serif;\n      color: rgb(117, 117, 117);\n      font-size: 12px;\n      -webkit-font-smoothing: antialiased;\n      display: flex;\n      align-items: center;\n      color: var(--theme-ui-colors-text,#5A5A5A);\n  \n    cursor: pointer;\n    font-weight: 400;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    transition: color 0.2s ease 0s;\n      \n      \n\n}.mat-body[_ngcontent-%COMP%], .mat-body-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%] {\n  \n  \n  font-weight: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFFBQVE7SUFDUixTQUFTO0dBQ1Ysa0JBQWtCO0VBQ25CLENBQUM7SUFDQyxrQkFBa0I7O0lBRWxCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxtQkFBbUI7RUFDckIsQ0FBQztJQUNDLGtCQUFrQjs7SUFFbEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYzs7RUFFaEIsQ0FDQTtJQUNFLG9DQUFvQztFQUN0QyxDQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLHNCQUFzQjs7SUFFdEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixlQUFlO0lBQ2YsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEIsQ0FDQTtJQUNFLGtCQUFrQjs7SUFFbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCLENBQUM7SUFDQyxrQkFBa0I7O0lBRWxCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYzs7RUFFaEIsQ0FDQTtJQUNFLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixlQUFlO0lBQ2YsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEIsQ0FDQTtJQUNFLGtCQUFrQjtFQUNwQixDQUNGO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmO0FBQ0YsQ0FDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0dBQzdCLGVBQWU7QUFDbEIsQ0FDQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCLENBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxlQUFlOztBQUVqQixDQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0FBQ1gsQ0FDQTtFQUNFLGNBQWM7QUFDaEIsQ0FDQTtBQUNBLGNBQWM7O0FBRWQsQ0FDQTtFQUNFLGtCQUFrQjs7QUFFcEIsQ0FDQTtFQUNFLDBCQUEwQjs7QUFFNUIsQ0FDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsS0FBSzs7QUFFUCxDQUNBO0VBQ0UsZ0JBQWdCO0NBQ2pCLG9DQUFvQzs7O0FBR3JDLENBRUE7TUFDTSxnQkFBZ0I7TUFDaEIsb0NBQW9DO01BQ3BDLHlCQUF5QjtNQUN6QixlQUFlO01BQ2YsbUNBQW1DO01BQ25DLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsMENBQTBDOztJQUU1QyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFFYixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLDhCQUE4Qjs7OztBQUlsQyxDQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDRCQUE0QjtFQUM1QixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRpbWFnZXN7XG4gICAgdG9wOiAxMCU7XG4gICAgbGVmdDogMTAlO1xuICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9LnRleHQtYmxvY2sxIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy10b3A6IDEwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgIGZvbnQtc2l6ZTogM3Z3O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIH0udGV4dC1ibG9jazIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLXRvcDogMjAlO1xuICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgZm9udC1zaXplOiAxdnc7XG5cbiAgfVxuICAuYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAyMzAsIDIzMCk7XG4gIH1cbiAgLnRleHQtYmxvY2szIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcblxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi10b3A6IDI1JTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgZm9udC1zaXplOiAxdnc7XG4gICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogM3Z3O1xuICAgIHdpZHRoOiAxMHZ3O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgfVxuICAudGV4dC1ibG9jazFGb290ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgIHBhZGRpbmctdG9wOiA2JTtcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgIGZvbnQtc2l6ZTogM3Z3O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIH0udGV4dC1ibG9jazJGb290ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgIHBhZGRpbmctdG9wOiAxNSU7XG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgICBmb250LXNpemU6IDF2dztcblxuICB9XG4gIC50ZXh0LWJsb2NrM0Zvb3RlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXRvcDogMTglO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBmb250LXNpemU6IDF2dztcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAzLjV2dztcbiAgICB3aWR0aDogMTB2dztcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIH1cbiAgLmNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4uZGV2aWNlWHN7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXg6MVxufVxuLmRldmljZUxne1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uc2xpZGUxe1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogM3Z3O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuLmJpZ25vZGlzcGxheXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDQwcHg7XG5cbn1cblxuLnBvc3JpZ2h0e1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbn1cbi5kcm9wZG93bjpob3Zlcj4uZHJvcGRvd24tbWVudSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm5hdi1tZW51PmxpLmFjdGl2ZT5hLCAubmF2LW1lbnU+bGkuZm9jdXM+YSwgLm5hdi1tZW51PmxpOmhvdmVyPmEge1xuY29sb3I6ICM5M2JiMzY7XG5cbn1cbi5mdW5kcHJlc3MtbWVudSAubmF2LW1lbnUgbGkgYSB7XG4gIHBhZGRpbmc6IDE4cHggMTBweDtcblxufVxuLmZ1bmRwcmVzcy1tZW51IC5uYXYtbWVudSBsaSBhOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNGQ0NjkgO1xuXG59XG4ubmF2LW1lbnU+bGk+YSB7XG4gIGhlaWdodDogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgLyogICovXG5cbn1cbi5mdW5kcHJlc3MtbWVudSAubmF2LW1lbnUge1xuICBwYWRkaW5nLWxlZnQ6IDIlO1xuIGZvbnQtRmFtaWx5OiAnT3BlbiBTYW5zLCBzYW5zLXNlcmlmJzsgXG5cblxufVxuXG4uZnVuZHByZXNzLW1lbnUgLm5hdi1tZW51IGxpIGF7XG4gICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgICBjb2xvcjogcmdiKDExNywgMTE3LCAxMTcpO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGNvbG9yOiB2YXIoLS10aGVtZS11aS1jb2xvcnMtdGV4dCwjNUE1QTVBKTtcbiAgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZSAwcztcbiAgICAgIFxuICAgICAgXG5cbn1cbi5tYXQtYm9keSwgLm1hdC1ib2R5LTEsIC5tYXQtdHlwb2dyYXBoeSB7XG4gIC8qIGZvbnQ6IDEwIDdweC8xMHB4IFJvYm90bywgOyAqL1xuICAvKiBsZXR0ZXItc3BhY2luZzogbm9ybWFsOyAqL1xuICBmb250LXdlaWdodDogMTAwO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"] }, { type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }, { type: _product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "cYb6":
/*!*****************************************************!*\
  !*** ./src/app/home/catagory/catagory.component.ts ***!
  \*****************************************************/
/*! exports provided: CatagoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatagoryComponent", function() { return CatagoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product.service */ "BRKm");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart.service */ "87QV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function CatagoryComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CatagoryComponent_div_7_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.addProduct(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.getImage(item_r3.productImage), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.price);
} }
function CatagoryComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CatagoryComponent_div_7_div_1_Template, 9, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.catagoryProducts);
} }
function CatagoryComponent_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CatagoryComponent_div_8_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const item_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.addProduct(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r7.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.price);
} }
function CatagoryComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CatagoryComponent_div_8_div_3_Template, 9, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.catagoryProducts);
} }
class CatagoryComponent {
    constructor(route, mediaObserver, productService, cartService) {
        this.route = route;
        this.mediaObserver = mediaObserver;
        this.productService = productService;
        this.cartService = cartService;
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
        });
        this.getCatagoryProducts(this.selectedPage);
    }
    get selectedPage() {
        this.page = this.route.snapshot.paramMap.get('page');
        return this.page;
    }
    getCatagoryProducts(page) {
        this.productService.getCatagoryProducts(page).subscribe((products) => {
            this.catagoryProducts = products;
        }, (error) => {
            console.log('error in getting all products');
        });
    }
    addProduct(item) {
        this.cartService.addProduct(item);
    }
}
CatagoryComponent.ɵfac = function CatagoryComponent_Factory(t) { return new (t || CatagoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"])); };
CatagoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CatagoryComponent, selectors: [["app-catagory"]], decls: 9, vars: 3, consts: [[2, "background-color", "rgb(240, 236, 236)", "padding-bottom", "2.5%", "min-height", "700px"], [2, "padding-top", "2.5%", "padding-left", "2.5%", "padding-right", "2.5%", "border-radius", "6px"], [1, "text-block1"], [2, "height", "20%"], ["src", "../assets/images/veg.jpg", 1, "img-responsive", "gradient", 2, "width", "100%", ";object-fit", "cove\n  r", "border-radius", "6px"], [2, "border-radius", "6px", "margin", "2%", "background-color", "white"], ["class", "deviceLg", 4, "ngIf"], [4, "ngIf"], [1, "deviceLg"], ["style", "padding:2%;width: 20%;", 3, "click", 4, "ngFor", "ngForOf"], [2, "padding", "2%", "width", "20%", 3, "click"], [2, "text-align", "right"], [1, "btn"], [1, "glyphicon", "glyphicon-shopping-cart"], [2, "height", "250px", "width", "200px"], [2, "height", "250px", "width", "200px", 3, "src"], [2, "font-weight", "bold"], [1, "row"], [2, "display", "flex", "flex-direction", "row", "flex-wrap", "wrap", "flex", "2", "justify-content", "space-evenly"], ["style", "padding:2%;width: 40%;", 3, "click", 4, "ngFor", "ngForOf"], [2, "padding", "2%", "width", "40%", 3, "click"], [1, "img-responsive", 3, "src"]], template: function CatagoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CatagoryComponent_div_7_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CatagoryComponent_div_8_Template, 4, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceLg || ctx.deviceMd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceXs || ctx.deviceSm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".text-block1[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  padding-top: 9%;\n  padding-left: 39%;\n  font-size: 2vw;\n  margin-bottom: 12px;\n  font-weight: 500;\n}\n.deviceXs[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex:1\n}\n.deviceLg[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n   flex-wrap: wrap;\n}\n.gradient[_ngcontent-%COMP%]{\n  background-color:  linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jYXRhZ29yeS9jYXRhZ29yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Y7QUFDRjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7R0FDN0IsZUFBZTtBQUNsQjtBQUNBO0VBQ0UsMEVBQTBFO0FBQzVFIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jYXRhZ29yeS9jYXRhZ29yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtYmxvY2sxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiA5JTtcbiAgcGFkZGluZy1sZWZ0OiAzOSU7XG4gIGZvbnQtc2l6ZTogMnZ3O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmRldmljZVhze1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4OjFcbn1cbi5kZXZpY2VMZ3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgZmxleC13cmFwOiB3cmFwO1xufVxuLmdyYWRpZW50e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjUpKTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatagoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-catagory',
                templateUrl: './catagory.component.html',
                styleUrls: ['./catagory.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"] }, { type: _product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }, { type: _cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] }]; }, null); })();


/***/ }),

/***/ "ccyI":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AuthService {
    constructor() { }
    loggedIn() {
        return !!localStorage.getItem('userId');
    }
    getID() {
        return JSON.parse(localStorage.getItem('userId'));
    }
    getusername() {
        return JSON.parse(localStorage.getItem('username'));
    }
    getRefrenceId() {
        return JSON.parse(localStorage.getItem('refrenceId'));
    }
    getContact() {
        return JSON.parse(localStorage.getItem('contact'));
    }
    getemail() {
        return JSON.parse(localStorage.getItem('email'));
    }
    loggedOutuserId() {
        return localStorage.removeItem('userId');
    }
    loggedOutName() {
        return localStorage.removeItem('username');
    }
    loggedOutRefrenceId() {
        return localStorage.removeItem('refrenceId');
    }
    loggedOutEmail() {
        return localStorage.removeItem('email');
    }
    loggedOutContact() {
        return localStorage.removeItem('contact');
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _referFriend_referFriend_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./referFriend/referFriend.component */ "K30+");
/* harmony import */ var _giftCards_giftCards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./giftCards/giftCards.component */ "Yg7E");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "8zhZ");
/* harmony import */ var _testimonals_testimonals_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./testimonals/testimonals.component */ "hTs5");
/* harmony import */ var _catagory_catagory_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catagory/catagory.component */ "cYb6");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "agvn");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _myorders_myorders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./myorders/myorders.component */ "/BOD");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav/nav.component */ "2ChW");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "cPhq");
/* harmony import */ var _Pickles_Pickles_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Pickles/Pickles.component */ "j67j");
/* harmony import */ var _TraditionalPowders_TraditionalPowders_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./TraditionalPowders/TraditionalPowders.component */ "N3GV");
/* harmony import */ var _sweetandhot_sweetandhot_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sweetandhot/sweetandhot.component */ "bFHB");
/* harmony import */ var _dairy_dairy_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dairy/dairy.component */ "Pk2g");
/* harmony import */ var _others_others_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./others/others.component */ "cMot");
/* harmony import */ var _specialoffers_specialoffers_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./specialoffers/specialoffers.component */ "S5X1");
/* harmony import */ var _productDetail_productDetail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./productDetail/productDetail.component */ "xbwq");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _mainPage_mainPage_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mainPage/mainPage.component */ "HZa5");
/* harmony import */ var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngmodule/material-carousel */ "XZNO");
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-image-slider */ "yf9x");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./cart/cart.component */ "PDn9");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-paypal */ "ejwX");
/* harmony import */ var _supportPage_supportPage_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./supportPage/supportPage.component */ "sjMi");
/* harmony import */ var _FAQ_FAQ_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./FAQ/FAQ.component */ "Eoff");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-bootstrap/popover */ "EDFS");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _discount_discount_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./discount/discount.component */ "DG48");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./blog/blog.component */ "tFkF");
/* harmony import */ var _privacyandpolicy_privacyandpolicy_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./privacyandpolicy/privacyandpolicy.component */ "YMok");
/* harmony import */ var _returnandrefunds_returnandrefunds_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./returnandrefunds/returnandrefunds.component */ "kH2C");












































class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_9__["HomeRoutingModule"],
            ng_image_slider__WEBPACK_IMPORTED_MODULE_23__["NgImageSliderModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClientModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__["FlexLayoutModule"],
            _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_22__["MatCarouselModule"].forRoot(),
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_24__["LayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListModule"],
            ngx_paypal__WEBPACK_IMPORTED_MODULE_32__["NgxPayPalModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__["MatTabsModule"],
            ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_35__["PopoverModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
        _Pickles_Pickles_component__WEBPACK_IMPORTED_MODULE_13__["PicklesComponent"],
        _TraditionalPowders_TraditionalPowders_component__WEBPACK_IMPORTED_MODULE_14__["TraditionalPowdersComponent"],
        _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
        _sweetandhot_sweetandhot_component__WEBPACK_IMPORTED_MODULE_15__["SweetandHotComponent"],
        _dairy_dairy_component__WEBPACK_IMPORTED_MODULE_16__["DairyComponent"],
        _others_others_component__WEBPACK_IMPORTED_MODULE_17__["OthersComponent"],
        _specialoffers_specialoffers_component__WEBPACK_IMPORTED_MODULE_18__["SpecialOffersComponent"],
        _productDetail_productDetail_component__WEBPACK_IMPORTED_MODULE_19__["ProductDetailComponent"],
        _mainPage_mainPage_component__WEBPACK_IMPORTED_MODULE_21__["MainPageComponent"],
        _cart_cart_component__WEBPACK_IMPORTED_MODULE_30__["CartComponent"],
        _myorders_myorders_component__WEBPACK_IMPORTED_MODULE_7__["MyordersComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _catagory_catagory_component__WEBPACK_IMPORTED_MODULE_4__["CatagoryComponent"],
        _discount_discount_component__WEBPACK_IMPORTED_MODULE_37__["DiscountComponent"],
        _supportPage_supportPage_component__WEBPACK_IMPORTED_MODULE_33__["SupportPageComponent"],
        _Pickles_Pickles_component__WEBPACK_IMPORTED_MODULE_13__["PicklesComponent"],
        _TraditionalPowders_TraditionalPowders_component__WEBPACK_IMPORTED_MODULE_14__["TraditionalPowdersComponent"],
        _specialoffers_specialoffers_component__WEBPACK_IMPORTED_MODULE_18__["SpecialOffersComponent"],
        _others_others_component__WEBPACK_IMPORTED_MODULE_17__["OthersComponent"],
        _sweetandhot_sweetandhot_component__WEBPACK_IMPORTED_MODULE_15__["SweetandHotComponent"],
        _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_2__["AboutUSComponent"],
        _FAQ_FAQ_component__WEBPACK_IMPORTED_MODULE_34__["FAQComponent"],
        _blog_blog_component__WEBPACK_IMPORTED_MODULE_38__["BlogComponent"],
        _testimonals_testimonals_component__WEBPACK_IMPORTED_MODULE_3__["TestimonalsComponent"],
        _privacyandpolicy_privacyandpolicy_component__WEBPACK_IMPORTED_MODULE_39__["PrivacyandpolicyComponent"],
        _returnandrefunds_returnandrefunds_component__WEBPACK_IMPORTED_MODULE_40__["ReturnandrefundsComponent"],
        _privacyandpolicy_privacyandpolicy_component__WEBPACK_IMPORTED_MODULE_39__["PrivacyandpolicyComponent"],
        _returnandrefunds_returnandrefunds_component__WEBPACK_IMPORTED_MODULE_40__["ReturnandrefundsComponent"],
        _giftCards_giftCards_component__WEBPACK_IMPORTED_MODULE_1__["GiftCardsComponent"],
        _referFriend_referFriend_component__WEBPACK_IMPORTED_MODULE_0__["ReferFriendComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_9__["HomeRoutingModule"],
        ng_image_slider__WEBPACK_IMPORTED_MODULE_23__["NgImageSliderModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClientModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__["FlexLayoutModule"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_22__["MatCarouselModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_24__["LayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListModule"],
        ngx_paypal__WEBPACK_IMPORTED_MODULE_32__["NgxPayPalModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__["MatTabsModule"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_35__["PopoverModule"]], exports: [_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
        _Pickles_Pickles_component__WEBPACK_IMPORTED_MODULE_13__["PicklesComponent"],
        _TraditionalPowders_TraditionalPowders_component__WEBPACK_IMPORTED_MODULE_14__["TraditionalPowdersComponent"],
        _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
        _sweetandhot_sweetandhot_component__WEBPACK_IMPORTED_MODULE_15__["SweetandHotComponent"],
        _dairy_dairy_component__WEBPACK_IMPORTED_MODULE_16__["DairyComponent"],
        _others_others_component__WEBPACK_IMPORTED_MODULE_17__["OthersComponent"],
        _specialoffers_specialoffers_component__WEBPACK_IMPORTED_MODULE_18__["SpecialOffersComponent"],
        _productDetail_productDetail_component__WEBPACK_IMPORTED_MODULE_19__["ProductDetailComponent"],
        _mainPage_mainPage_component__WEBPACK_IMPORTED_MODULE_21__["MainPageComponent"],
        _cart_cart_component__WEBPACK_IMPORTED_MODULE_30__["CartComponent"],
        _discount_discount_component__WEBPACK_IMPORTED_MODULE_37__["DiscountComponent"],
        _blog_blog_component__WEBPACK_IMPORTED_MODULE_38__["BlogComponent"],
        _FAQ_FAQ_component__WEBPACK_IMPORTED_MODULE_34__["FAQComponent"],
        _supportPage_supportPage_component__WEBPACK_IMPORTED_MODULE_33__["SupportPageComponent"],
        _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_2__["AboutUSComponent"],
        _myorders_myorders_component__WEBPACK_IMPORTED_MODULE_7__["MyordersComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _Pickles_Pickles_component__WEBPACK_IMPORTED_MODULE_13__["PicklesComponent"],
        _TraditionalPowders_TraditionalPowders_component__WEBPACK_IMPORTED_MODULE_14__["TraditionalPowdersComponent"],
        _specialoffers_specialoffers_component__WEBPACK_IMPORTED_MODULE_18__["SpecialOffersComponent"],
        _others_others_component__WEBPACK_IMPORTED_MODULE_17__["OthersComponent"],
        _sweetandhot_sweetandhot_component__WEBPACK_IMPORTED_MODULE_15__["SweetandHotComponent"],
        _testimonals_testimonals_component__WEBPACK_IMPORTED_MODULE_3__["TestimonalsComponent"],
        _privacyandpolicy_privacyandpolicy_component__WEBPACK_IMPORTED_MODULE_39__["PrivacyandpolicyComponent"],
        _returnandrefunds_returnandrefunds_component__WEBPACK_IMPORTED_MODULE_40__["ReturnandrefundsComponent"],
        _giftCards_giftCards_component__WEBPACK_IMPORTED_MODULE_1__["GiftCardsComponent"],
        _referFriend_referFriend_component__WEBPACK_IMPORTED_MODULE_0__["ReferFriendComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _home_routing_module__WEBPACK_IMPORTED_MODULE_9__["HomeRoutingModule"],
                    ng_image_slider__WEBPACK_IMPORTED_MODULE_23__["NgImageSliderModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClientModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_20__["FlexLayoutModule"],
                    _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_22__["MatCarouselModule"].forRoot(),
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_24__["LayoutModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__["MatSidenavModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListModule"],
                    ngx_paypal__WEBPACK_IMPORTED_MODULE_32__["NgxPayPalModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__["MatTabsModule"],
                    ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_35__["PopoverModule"].forRoot()
                ],
                declarations: [
                    _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                    _Pickles_Pickles_component__WEBPACK_IMPORTED_MODULE_13__["PicklesComponent"],
                    _TraditionalPowders_TraditionalPowders_component__WEBPACK_IMPORTED_MODULE_14__["TraditionalPowdersComponent"],
                    _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                    _sweetandhot_sweetandhot_component__WEBPACK_IMPORTED_MODULE_15__["SweetandHotComponent"],
                    _dairy_dairy_component__WEBPACK_IMPORTED_MODULE_16__["DairyComponent"],
                    _others_others_component__WEBPACK_IMPORTED_MODULE_17__["OthersComponent"],
                    _specialoffers_specialoffers_component__WEBPACK_IMPORTED_MODULE_18__["SpecialOffersComponent"],
                    _productDetail_productDetail_component__WEBPACK_IMPORTED_MODULE_19__["ProductDetailComponent"],
                    _mainPage_mainPage_component__WEBPACK_IMPORTED_MODULE_21__["MainPageComponent"],
                    _cart_cart_component__WEBPACK_IMPORTED_MODULE_30__["CartComponent"],
                    _myorders_myorders_component__WEBPACK_IMPORTED_MODULE_7__["MyordersComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    _catagory_catagory_component__WEBPACK_IMPORTED_MODULE_4__["CatagoryComponent"],
                    _discount_discount_component__WEBPACK_IMPORTED_MODULE_37__["DiscountComponent"],
                    _supportPage_supportPage_component__WEBPACK_IMPORTED_MODULE_33__["SupportPageComponent"],
                    _Pickles_Pickles_component__WEBPACK_IMPORTED_MODULE_13__["PicklesComponent"],
                    _TraditionalPowders_TraditionalPowders_component__WEBPACK_IMPORTED_MODULE_14__["TraditionalPowdersComponent"],
                    _specialoffers_specialoffers_component__WEBPACK_IMPORTED_MODULE_18__["SpecialOffersComponent"],
                    _others_others_component__WEBPACK_IMPORTED_MODULE_17__["OthersComponent"],
                    _sweetandhot_sweetandhot_component__WEBPACK_IMPORTED_MODULE_15__["SweetandHotComponent"],
                    _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_2__["AboutUSComponent"],
                    _FAQ_FAQ_component__WEBPACK_IMPORTED_MODULE_34__["FAQComponent"],
                    _blog_blog_component__WEBPACK_IMPORTED_MODULE_38__["BlogComponent"],
                    _testimonals_testimonals_component__WEBPACK_IMPORTED_MODULE_3__["TestimonalsComponent"],
                    _privacyandpolicy_privacyandpolicy_component__WEBPACK_IMPORTED_MODULE_39__["PrivacyandpolicyComponent"],
                    _returnandrefunds_returnandrefunds_component__WEBPACK_IMPORTED_MODULE_40__["ReturnandrefundsComponent"],
                    _privacyandpolicy_privacyandpolicy_component__WEBPACK_IMPORTED_MODULE_39__["PrivacyandpolicyComponent"],
                    _returnandrefunds_returnandrefunds_component__WEBPACK_IMPORTED_MODULE_40__["ReturnandrefundsComponent"],
                    _giftCards_giftCards_component__WEBPACK_IMPORTED_MODULE_1__["GiftCardsComponent"],
                    _referFriend_referFriend_component__WEBPACK_IMPORTED_MODULE_0__["ReferFriendComponent"]
                ],
                exports: [
                    _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                    _Pickles_Pickles_component__WEBPACK_IMPORTED_MODULE_13__["PicklesComponent"],
                    _TraditionalPowders_TraditionalPowders_component__WEBPACK_IMPORTED_MODULE_14__["TraditionalPowdersComponent"],
                    _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                    _sweetandhot_sweetandhot_component__WEBPACK_IMPORTED_MODULE_15__["SweetandHotComponent"],
                    _dairy_dairy_component__WEBPACK_IMPORTED_MODULE_16__["DairyComponent"],
                    _others_others_component__WEBPACK_IMPORTED_MODULE_17__["OthersComponent"],
                    _specialoffers_specialoffers_component__WEBPACK_IMPORTED_MODULE_18__["SpecialOffersComponent"],
                    _productDetail_productDetail_component__WEBPACK_IMPORTED_MODULE_19__["ProductDetailComponent"],
                    _mainPage_mainPage_component__WEBPACK_IMPORTED_MODULE_21__["MainPageComponent"],
                    _cart_cart_component__WEBPACK_IMPORTED_MODULE_30__["CartComponent"],
                    _discount_discount_component__WEBPACK_IMPORTED_MODULE_37__["DiscountComponent"],
                    _blog_blog_component__WEBPACK_IMPORTED_MODULE_38__["BlogComponent"],
                    _FAQ_FAQ_component__WEBPACK_IMPORTED_MODULE_34__["FAQComponent"],
                    _supportPage_supportPage_component__WEBPACK_IMPORTED_MODULE_33__["SupportPageComponent"],
                    _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_2__["AboutUSComponent"],
                    _myorders_myorders_component__WEBPACK_IMPORTED_MODULE_7__["MyordersComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    _Pickles_Pickles_component__WEBPACK_IMPORTED_MODULE_13__["PicklesComponent"],
                    _TraditionalPowders_TraditionalPowders_component__WEBPACK_IMPORTED_MODULE_14__["TraditionalPowdersComponent"],
                    _specialoffers_specialoffers_component__WEBPACK_IMPORTED_MODULE_18__["SpecialOffersComponent"],
                    _others_others_component__WEBPACK_IMPORTED_MODULE_17__["OthersComponent"],
                    _sweetandhot_sweetandhot_component__WEBPACK_IMPORTED_MODULE_15__["SweetandHotComponent"],
                    _testimonals_testimonals_component__WEBPACK_IMPORTED_MODULE_3__["TestimonalsComponent"],
                    _privacyandpolicy_privacyandpolicy_component__WEBPACK_IMPORTED_MODULE_39__["PrivacyandpolicyComponent"],
                    _returnandrefunds_returnandrefunds_component__WEBPACK_IMPORTED_MODULE_40__["ReturnandrefundsComponent"],
                    _giftCards_giftCards_component__WEBPACK_IMPORTED_MODULE_1__["GiftCardsComponent"],
                    _referFriend_referFriend_component__WEBPACK_IMPORTED_MODULE_0__["ReferFriendComponent"]
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["NO_ERRORS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "dvA0":
/*!**************************************************!*\
  !*** ./src/app/account/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../account.service */ "2rwd");
/* harmony import */ var _textField_textField_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../textField/textField.component */ "glWx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");











function LoginComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_23_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_23_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.signInGoogle("google"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Sign in With Google");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_23_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.signInFacebook("facebook"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Sign in With facebook");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_24_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_24_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.signInGoogle("google"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Sign in With Google");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_24_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.signInFacebook("facebook"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Sign in With facebook");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(mediaObserver, router, formBuilder, accountService, authService) {
        this.mediaObserver = mediaObserver;
        this.router = router;
        this.formBuilder = formBuilder;
        this.accountService = accountService;
        this.authService = authService;
        this.isLoggedIn = true;
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
            this.show = false;
        });
        this.rformLogin = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8)]),
        });
    }
    createAccount() {
        this.router.navigate(['/signUp']);
    }
    passwordshow() {
        this.show = !this.show;
    }
    login() {
        if (this.rformLogin.valid) {
            this.accountService.login(this.rformLogin.value).subscribe((data) => {
                alert("Login Successful");
                this.setId(data.userId);
                this.setusername(data.username);
                this.setemail(data.email);
                this.setcontact(data.contact);
                this.setRefrenceId(data.refrenceId);
                this.isLoggedIn = true;
                this.router.navigate(['/']);
            }, (error) => {
                alert(error.error.message);
            });
        }
    }
    forgetPassword() {
        this.router.navigate(['/forgetPassword']);
    }
    setId(userId) {
        localStorage.setItem('userId', JSON.stringify(userId));
    }
    setRefrenceId(refrenceId) {
        localStorage.setItem('refrenceId', JSON.stringify(refrenceId));
    }
    setusername(username) {
        localStorage.setItem('username', JSON.stringify(username));
    }
    setcontact(contact) {
        localStorage.setItem('contact', JSON.stringify(contact));
    }
    setemail(email) {
        localStorage.setItem('email', JSON.stringify(email));
    }
    signInGoogle(platform) {
        platform = angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"].PROVIDER_ID;
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"].PROVIDER_ID)
            .then((Response) => {
            console.log(platform + 'logged in user is ', Response);
            const userAccount = {
                email: Response.email,
                username: Response.name,
                contact: Response.provider,
                provider: Response.provider,
                password: Response.id,
            };
            this.accountService.signIn(userAccount).subscribe((data) => {
                alert('login successfull');
                this.setId(data.userId);
                this.setusername(data.username);
                this.setemail(data.email);
                this.setcontact(data.contact);
                this.setRefrenceId(data.refrenceId);
                this.isLoggedIn = true;
                // this.router.navigate(['/'])
            }, (error) => {
                if (error.error.message) {
                    this.socailLogin(userAccount);
                }
                else {
                    alert("Login Failed");
                }
            });
        });
    }
    signInFacebook(platform) {
        platform = angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["FacebookLoginProvider"].PROVIDER_ID;
        this.authService
            .signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["FacebookLoginProvider"].PROVIDER_ID)
            .then((Response) => {
            console.log(platform + 'logged in user is ', Response);
            // tslint:disable-next-line: no-unused-expression
            const userAccount = {
                email: Response.name,
                username: Response.firstName,
                password: Response.id,
                token: Response.authToken,
            };
            this.accountService.signIn(userAccount).subscribe((data) => {
                alert('login successfull');
                this.setId(data.userId);
                this.setusername(data.username);
                this.setemail(data.email);
                this.setcontact(data.contact);
                this.setRefrenceId(data.refrenceId);
                this.isLoggedIn = true;
            }, (error) => {
                if (error.error.message) {
                    this.socailLogin(userAccount);
                }
                else {
                    alert("Login Failed");
                }
            });
        });
    }
    socailLogin(userAccount) {
        this.accountService.login(userAccount).subscribe((data) => {
            alert("Login Successful");
            this.setId(data.userId);
            this.setusername(data.username);
            this.setemail(data.email);
            this.setcontact(data.contact);
            this.setRefrenceId(data.refrenceId);
            this.isLoggedIn = true;
            this.router.navigate(['/']);
        }, (error) => {
            alert(error.error.message);
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["SocialAuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 53, vars: 5, consts: [[2, "background-color", "#f7f7f7"], [1, "row", 2, "display", "flex", "flex", "1", "flex-direction", "row", "justify-content", "center", "text-align", "center", "padding-top", "5%", "padding-bottom", "5%", "padding-left", "10vw", "padding-right", "10vw"], [1, "cardLeft", 2, "float", "left", "width", "60%", "text-align", "left"], [2, "font-size", "x-large", "padding-top", "15%", "font-weight", "500"], [2, "padding-bottom", "5%", "padding-top", "5%"], [2, "font-weight", "bold"], ["name", "email", "rformControlName", "email", 1, "textfieldBorderColor", "font13", 3, "rformgroup"], [1, "input-group", 2, "display", "flex", "flex-direction", "row"], [2, "width", "90%"], ["name", "password", "rformControlName", "password", 1, "textfieldBorderColor", "font13", 3, "type", "rformgroup"], [2, "width", "10%"], ["type", "submit", 1, "btn", "btn-default", 2, "height", "35px", 3, "click"], [1, "glyphicon", "glyphicon-eye-open"], [2, "text-align", "right"], [1, "text", "text-primary", 3, "click"], ["style", "text-align: center;", 4, "ngIf"], ["style", "text-align: center", 4, "ngIf"], [1, "cardRight", 2, "float", "right", "width", "30%"], [2, "text-align", "center", "width", "100%"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [2, "background-color", "rgb(189, 187, 187)"], [2, "padding-left", "5%", "padding-right", "5%", "padding-top", "3%", "padding-bottom", "3%"], [1, "row"], [1, "col-lg-6"], [2, "width", "40vw"], [1, "hr", 2, "background-color", "black"], [2, "padding", "5%", 3, "click"], [1, "btn", 2, "padding-left", "2.5%", "padding-right", "2.5%", "background-color", "rgb(63, 61, 61)", "color", "whitesmoke"], [2, "font-weight", "bold", "font-size", "small"], [2, "text-align", "center"], ["type", "button", 1, "btn", "btn-primary", 2, "width", "100%", 3, "click"], [2, "margin-top", "3%", "display", "flex", "flex-direction", "row", "justify-content", "space-evenly"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-primary", 2, "margin-left", "4%", 3, "click"], [2, "margin-top", "3%", "display", "flex", "flex-direction", "column", "justify-content", "center"], [1, "btn", "btn-primary", 2, "margin-top", "4%", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Log in to Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "ns-textField-account", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Password (8 characters minimun)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "ns-textField-account", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_18_listener() { return ctx.passwordshow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_p_click_21_listener() { return ctx.forgetPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Forget Password? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, LoginComponent_div_23_Template, 8, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, LoginComponent_div_24_Template, 8, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Hello Friend");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Fill up the Form and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "start Journey with us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_33_listener() { return ctx.createAccount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Create Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Quick Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " NewsLetter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "hr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_47_listener() { return ctx.createAccount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "SIGN IN");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "\u00A9 2020, picksystore Powered by Shopify");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rformgroup", ctx.rformLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.show ? "text" : "password")("rformgroup", ctx.rformLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.deviceMd || ctx.deviceLg);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.deviceXs || ctx.deviceSm);
    } }, directives: [_textField_textField_component__WEBPACK_IMPORTED_MODULE_6__["TextFieldComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".hr[_ngcontent-%COMP%] {\n  background-color: black;\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\n.cardLeft[_ngcontent-%COMP%] {\n  border-top-left-radius: 12px;\n  border-bottom-left-radius: 12px;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  padding-left: 6vw;\n  padding-right: 6vw;\n}\n\n.cardRight[_ngcontent-%COMP%] {\n  border-top-right-radius: 12px;\n  border-bottom-right-radius: 12px;\n  display: flex;\n  padding-top: 15%;\n  padding-bottom: 15%;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  background-color: #b4d469;\n}\n\n.coloumnChange[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.deviceLgClass[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.deviceSmClass[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.deviceLgFontClass[_ngcontent-%COMP%] {\n  font-size: large;\n}\n\n.deviceSmFontClass[_ngcontent-%COMP%] {\n  font-size: small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSwwQ0FBQTtBQUVGOztBQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtBQUVBOztBQUNBO0VBQ0UsNkJBQUE7RUFDQSxnQ0FBQTtFQUdBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFBRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBRUY7O0FBQ0E7RUFDQSxnQkFBQTtBQUVBOztBQUNBO0VBQ0EsZ0JBQUE7QUFFQSIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaHJ7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuLmNhcmQge1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gfVxuLmNhcmRMZWZ0e1xuYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcbmJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEycHg7XG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG5kaXNwbGF5OiBmbGV4O1xuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxucGFkZGluZy1sZWZ0OiA2dnc7XG5wYWRkaW5nLXJpZ2h0OiA2dnc7XG5cbn1cbi5jYXJkUmlnaHR7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMnB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTJweDtcbiAgLy8gcGFkZGluZy1sZWZ0OiAxMCU7XG4gIC8vIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy10b3A6IDE1JTtcbiAgcGFkZGluZy1ib3R0b206IDE1JTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I0ZDQ2OTtcbn1cbi5jb2xvdW1uQ2hhbmdle1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmRldmljZUxnQ2xhc3N7XG4gIGRpc3BsYXk6ZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZGV2aWNlU21DbGFzc3tcbiAgZGlzcGxheTpmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbn1cbi5kZXZpY2VMZ0ZvbnRDbGFzc3tcbmZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbi5kZXZpY2VTbUZvbnRDbGFzc3tcbmZvbnQtc2l6ZTogc21hbGw7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["MediaObserver"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }, { type: _account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"] }, { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["SocialAuthService"] }]; }, null); })();


/***/ }),

/***/ "fDLK":
/*!**********************************************************!*\
  !*** ./src/app/admin/addProduct/addProduct.component.ts ***!
  \**********************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../admin.service */ "l3fW");
/* harmony import */ var _textField_textField_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../textField/textField.component */ "Awi1");






class AddProductComponent {
    constructor(adminService, formBuilder) {
        this.adminService = adminService;
        this.formBuilder = formBuilder;
        this.productOrders = '1';
    }
    ngOnInit() {
        this.productForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            catagory: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            productImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
    }
    selectProductImage(event) {
        const file = event.target.files[0];
        this.image = file;
        this.productForm.controls.productImage.setValue(this.image);
    }
    addProduct() {
        if (this.productForm.valid) {
            const fd = new FormData();
            fd.append('name', this.productForm.value.name);
            fd.append('catagory', this.productForm.value.catagory);
            fd.append('price', this.productForm.value.price);
            fd.append('detail', this.productForm.value.detail);
            fd.append('productOrders', this.productOrders);
            if (this.productForm.value.productImage) {
                fd.append('productImage', this.productForm.value.productImage);
            }
            this.adminService.addProducts(fd).subscribe((data) => {
                alert("Product Added");
            }, (error) => {
                alert("No Product Added");
            });
        }
        else {
            alert("Please Fill All the entries of the Form");
        }
    }
}
AddProductComponent.ɵfac = function AddProductComponent_Factory(t) { return new (t || AddProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
AddProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddProductComponent, selectors: [["app-addProduct"]], decls: 47, vars: 5, consts: [[2, "margin-top", "5%", "display", "flex", "flex-direction", "row", "flex", "1", "justify-content", "center"], [2, "margin-bottom", "5%"], [2, "font-size", "xx-large", "font-weight", "500", "text-align", "center"], [3, "formGroup"], [1, "", 2, "padding-bottom", "2%"], [2, "padding-bottom", "1%"], ["name", "name", "rformControlName", "name", 1, "textfieldBorderColor", "font13", 3, "rformgroup"], ["name", "price", "type", "number", "rformControlName", "price", 1, "textfieldBorderColor", "font13", 3, "rformgroup"], ["name", "catagory", "rformControlName", "catagory", 1, "textfieldBorderColor", "font13", 3, "rformgroup"], ["name", "detail", "rformControlName", "detail", 1, "textfieldBorderColor", "font13", 3, "rformgroup"], [1, "form-group"], ["type", "file", "name", "imagePath", 1, "form-control", 2, "float", "left", "width", "30%", 3, "change"], [2, "text-align", "center"], [1, "btn", 2, "padding-left", "2.5%", "padding-right", "2.5%", "background-color", "rgb(63, 61, 61)", "color", "whitesmoke", 3, "click"], [2, "font-weight", "bold", "font-size", "small"], [2, "background-color", "rgb(231, 228, 228)"], [2, "padding-left", "5%", "padding-right", "5%", "padding-top", "3%", "padding-bottom", "3%"], [1, "row"], [1, "col-lg-6"], [2, "width", "40vw"], [1, "hr", 2, "background-color", "black"], [2, "padding", "5%", 3, "click"], [1, "btn", 2, "padding-left", "2.5%", "padding-right", "2.5%", "background-color", "rgb(63, 61, 61)", "color", "whitesmoke"], [2, "text-align", "right"]], template: function AddProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Add Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ns-textField-admin", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "ns-textField-admin", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "catagory");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "ns-textField-admin", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "ns-textField-admin", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddProductComponent_Template_input_change_23_listener($event) { return ctx.selectProductImage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProductComponent_Template_button_click_26_listener() { return ctx.addProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "ADD PRODCUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Quick Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " NewsLetter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "hr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddProductComponent_Template_div_click_41_listener() { return ctx.addProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "SIGN IN");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\u00A9 2020, Shrivasafoods store Powered by Shopify");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.productForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rformgroup", ctx.productForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rformgroup", ctx.productForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rformgroup", ctx.productForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rformgroup", ctx.productForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _textField_textField_component__WEBPACK_IMPORTED_MODULE_3__["TextFieldComponent"]], styles: [".text-block1[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  padding-top: 9%;\n  padding-left: 40%;\n  font-size: 2vw;\n  margin-bottom: 12px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRkUHJvZHVjdC9hZGRQcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDSCIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkZFByb2R1Y3QvYWRkUHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWJsb2NrMSB7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICBjb2xvcjogd2hpdGU7XG4gICBwYWRkaW5nLXRvcDogOSU7XG4gICBwYWRkaW5nLWxlZnQ6IDQwJTtcbiAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gfSAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-addProduct',
                templateUrl: './addProduct.component.html',
                styleUrls: ['./addProduct.component.scss']
            }]
    }], function () { return [{ type: _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "gK4h":
/*!********************************************************************!*\
  !*** ./src/app/account/forgetPassword/forgetPassword.component.ts ***!
  \********************************************************************/
/*! exports provided: ForgetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function() { return ForgetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../account.service */ "2rwd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _textField_textField_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../textField/textField.component */ "glWx");









function ForgetPasswordComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Forget Your Password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "We got you . Just enter the email below and we will send you a link to get in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ns-textField-account", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgetPasswordComponent_div_0_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Contact Customer Care");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rformgroup", ctx_r0.forgetPasswordForm);
} }
function ForgetPasswordComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Forget Your Password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "We got you . Just enter the email below and we will send you a link to get in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ns-textField-account", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgetPasswordComponent_div_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Contact Customer Care");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rformgroup", ctx_r1.forgetPasswordForm);
} }
class ForgetPasswordComponent {
    constructor(mediaObserver, router, formBuilder, accountService) {
        this.mediaObserver = mediaObserver;
        this.router = router;
        this.formBuilder = formBuilder;
        this.accountService = accountService;
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
            this.show = false;
        });
        this.forgetPasswordForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
        });
    }
    reset() {
        if (this.forgetPasswordForm.valid) {
            this.accountService.forgetPassword(this.forgetPasswordForm.value).subscribe((data) => {
                alert("Mail send to your gmail");
            }, (error) => {
                alert(error.error.message);
            });
        }
        else {
            alert("Enter correct Gmail Account");
        }
    }
}
ForgetPasswordComponent.ɵfac = function ForgetPasswordComponent_Factory(t) { return new (t || ForgetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"])); };
ForgetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgetPasswordComponent, selectors: [["app-forgetPassword"]], decls: 2, vars: 2, consts: [["style", "text-align: center;margin: 10%;", 4, "ngIf"], [2, "text-align", "center", "margin", "10%"], [2, "font-size", "xxx-large", "padding-bottom", "3%", "font-weight", "bold"], [2, "font-size", "xx-large", "font-weight", "bold", "padding-bottom", "3%"], [2, "text-align", "center", "margin-left", "30%", "margin-right", "30%", "margin-bottom", "3%"], [2, "font-weight", "bold", "text-align", "left"], ["name", "email", "rformControlName", "email", 1, "textfieldBorderColor", "font13", 3, "rformgroup"], ["type", "button", 1, "btn", "btn-primary", 2, "width", "40%", "margin-bottom", "3%", 3, "click"], [1, "text", "text-primary", 2, "font-weight", "bold"], [2, "font-size", "large", "padding-bottom", "3%", "font-weight", "bold"], [2, "font-size", "large", "font-weight", "bold", "padding-bottom", "3%"]], template: function ForgetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ForgetPasswordComponent_div_0_Template, 13, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForgetPasswordComponent_div_1_Template, 13, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceLg || ctx.deviceMd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceXs || ctx.deviceSm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _textField_textField_component__WEBPACK_IMPORTED_MODULE_6__["TextFieldComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvZm9yZ2V0UGFzc3dvcmQvZm9yZ2V0UGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgetPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forgetPassword',
                templateUrl: './forgetPassword.component.html',
                styleUrls: ['./forgetPassword.component.css']
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"] }]; }, null); })();


/***/ }),

/***/ "glWx":
/*!**********************************************************!*\
  !*** ./src/app/account/textField/textField.component.ts ***!
  \**********************************************************/
/*! exports provided: TextFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldComponent", function() { return TextFieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function TextFieldComponent_h3_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.rformControlName, " is required");
} }
function TextFieldComponent_h3_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email format is incorrect");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TextFieldComponent_h3_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("password must be minimum ", ctx_r2.minlength, " character ");
} }
const _c0 = function (a0) { return { errorBorder: a0 }; };
class TextFieldComponent {
    constructor() { }
    ngOnInit() { }
    get invalidControl() {
        if (this.rformgroup.dirty &&
            this.rformgroup.controls[this.rformControlName].touched &&
            this.rformgroup.controls[this.rformControlName].invalid) {
            return true;
        }
        else {
            return false;
        }
    }
    get errorRequired() {
        if (this.rformgroup.dirty &&
            this.rformgroup.controls[this.rformControlName].touched &&
            this.rformgroup.controls[this.rformControlName].errors &&
            this.rformgroup.controls[this.rformControlName].errors.required) {
            return true;
        }
        else {
            return false;
        }
    }
    get errorFormate() {
        if (this.rformgroup.dirty &&
            this.rformgroup.controls[this.rformControlName].touched &&
            this.rformgroup.controls[this.rformControlName].errors &&
            this.rformgroup.controls[this.rformControlName].errors.email) {
            return true;
        }
        else {
            return false;
        }
    }
    get errorminLength() {
        if (this.rformgroup.dirty &&
            this.rformgroup.controls[this.rformControlName].touched &&
            this.rformgroup.controls[this.rformControlName].errors &&
            this.rformgroup.controls[this.rformControlName].errors.minlength) {
            return true;
        }
        else {
            return false;
        }
    }
    get minlength() {
        if (this.rformgroup.dirty &&
            this.rformgroup.controls[this.rformControlName].touched &&
            this.rformgroup.controls[this.rformControlName].errors &&
            this.rformgroup.controls[this.rformControlName].errors.minlength) {
            return this.rformgroup.controls[this.rformControlName].errors.minlength.requiredLength;
        }
        else {
            return false;
        }
    }
    get errormaxLength() {
        if (this.rformgroup.dirty &&
            this.rformgroup.controls[this.rformControlName].touched &&
            this.rformgroup.controls[this.rformControlName].errors &&
            this.rformgroup.controls[this.rformControlName].errors.maxlength) {
            return true;
        }
        else {
            return false;
        }
    }
}
TextFieldComponent.ɵfac = function TextFieldComponent_Factory(t) { return new (t || TextFieldComponent)(); };
TextFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextFieldComponent, selectors: [["ns-textField-account"]], inputs: { rformgroup: "rformgroup", rformControlName: "rformControlName", rtext: "rtext", class: "class", type: "type", hint: "hint" }, decls: 5, vars: 10, consts: [[3, "formGroup"], [1, "form-control", "textFieldStling", 3, "formControlName", "hint", "type", "ngClass"], ["class", "errorlbl", 4, "ngIf"], [1, "errorlbl"]], template: function TextFieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TextFieldComponent_h3_2_Template, 2, 1, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TextFieldComponent_h3_3_Template, 2, 0, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TextFieldComponent_h3_4_Template, 2, 1, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.rformgroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.rformControlName)("hint", ctx.hint)("type", ctx.type)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.invalidControl));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorRequired);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorFormate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorminLength || ctx.errormaxLength);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".textFieldStling[_ngcontent-%COMP%] {\n  border-width: 1dp;\n  size: 10;\n  border-radius: 5px;\n}\n\n.errorBorder[_ngcontent-%COMP%] {\n  border-width: 1dp;\n  border-color: red;\n  border: 5%;\n  \n}\n\n.errorlbl[_ngcontent-%COMP%] {\n  color: red;\n  font-family: \"Roboto\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC90ZXh0RmllbGQvdGV4dEZpZWxkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksaUJBQUE7RUFDQSxRQUFBO0VBRUEsa0JBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFHQTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC90ZXh0RmllbGQvdGV4dEZpZWxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udGV4dEZpZWxkU3RsaW5nIHtcbiAgICBib3JkZXItd2lkdGg6IDFkcDtcbiAgICBzaXplOiAxMDtcblxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmVycm9yQm9yZGVye1xuICAgIGJvcmRlci13aWR0aDogMWRwO1xuICAgIGJvcmRlci1jb2xvcjogcmVkIDtcbiAgICBib3JkZXI6IDUlO1xuICAgIC8qIG1hcmdpbjogMiU7ICAgKi9cbn1cbi5lcnJvcmxibHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextFieldComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ns-textField-account',
                templateUrl: './textField.component.html',
                styleUrls: ['./textField.component.scss']
            }]
    }], function () { return []; }, { rformgroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rformControlName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rtext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], class: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "hTs5":
/*!***********************************************************!*\
  !*** ./src/app/home/testimonals/testimonals.component.ts ***!
  \***********************************************************/
/*! exports provided: TestimonalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonalsComponent", function() { return TestimonalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class TestimonalsComponent {
    constructor() { }
    ngOnInit() {
    }
    submit() {
    }
}
TestimonalsComponent.ɵfac = function TestimonalsComponent_Factory(t) { return new (t || TestimonalsComponent)(); };
TestimonalsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestimonalsComponent, selectors: [["app-testimonals"]], decls: 62, vars: 3, consts: [[2, "background-color", "rgb(240, 236, 236)", "padding-bottom", "2.5%", "min-height", "500px"], [2, "padding-top", "2.5%", "padding-left", "2.5%", "padding-right", "2.5%", "border-radius", "6px"], [1, "text-block1"], [2, "height", "20%"], ["src", "../assets/images/veg.jpg", 1, "img-responsive", "gradient", 2, "width", "100%", ";object-fit", "cove\n  r", "border-radius", "6px"], [1, "card", 2, "text-align", "center", "margin-top", "5%", "margin-left", "20%", "margin-right", "20%", "display", "flex", "flex-direction", "column"], [2, "word-wrap", "break-word"], [2, "margin-left", "5%", "margin-right", "5%"], [2, "margin-left", "10%", "margin-right", "10%"], [2, "display", "flex", "flex-direction", "row", "justify-content", "space-between"], ["placeholder", "username", "type", "text", "name", "refrence", 1, "form-control", 2, "width", "40%", 3, "ngModel", "ngModelChange"], ["placeholder", "email", "type", "text", "name", "refrence", 1, "form-control", 2, "width", "40%", 3, "ngModel", "ngModelChange"], ["placeholder", "message", "type", "text", "name", "refrence", 1, "form-control", 2, "margin-top", "5%", "width", "100%", "height", "120%", 3, "ngModel", "ngModelChange"], [2, "text-align", "center"], [1, "btn", "btn-primary", 3, "click"], [2, "text-align", "center", "margin-top", "5%", "margin-left", "5%", "margin-right", "5%", "display", "flex", "flex-direction", "column"], [1, "row", 2, "margin-bottom", "1%"], [1, "col-xs-5", 2, "border", "1px", "border-style", "groove", "padding", "5%"], [1, "col-xs-1"]], template: function TestimonalsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Testimonals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Top Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Maecenas est dui, commodo a rutrum eget, interdum vel lorem. Aliquam euismod dapibus turpis, vitae placerat purus vestibulum non. Pellentesque ut nisi viverra, dictum nisi sed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Leave Your Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TestimonalsComponent_Template_input_ngModelChange_17_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TestimonalsComponent_Template_input_ngModelChange_18_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TestimonalsComponent_Template_input_ngModelChange_19_listener($event) { return ctx.message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestimonalsComponent_Template_p_click_21_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "What our Clients say");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Maecenas est dui, commodo a rutrum eget, interdum vel lorem. Aliquam euismod dapibus turpis, vitae placerat purus vestibulum non. Pellentesque ut nisi viverra, dictum nisi sed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Maecenas est dui, commodo a rutrum eget, interdum vel lorem. Aliquam euismod dapibus turpis, vitae placerat purus vestibulum non. Pellentesque ut nisi viverra, dictum nisi sed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Maecenas est dui, commodo a rutrum eget, interdum vel lorem. Aliquam euismod dapibus turpis, vitae placerat purus vestibulum non. Pellentesque ut nisi viverra, dictum nisi sed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Maecenas est dui, commodo a rutrum eget, interdum vel lorem. Aliquam euismod dapibus turpis, vitae placerat purus vestibulum non. Pellentesque ut nisi viverra, dictum nisi sed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Maecenas est dui, commodo a rutrum eget, interdum vel lorem. Aliquam euismod dapibus turpis, vitae placerat purus vestibulum non. Pellentesque ut nisi viverra, dictum nisi sed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Maecenas est dui, commodo a rutrum eget, interdum vel lorem. Aliquam euismod dapibus turpis, vitae placerat purus vestibulum non. Pellentesque ut nisi viverra, dictum nisi sed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.message);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".text-block1[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  padding-top: 9%;\n  padding-left: 39%;\n  font-size: 2vw;\n  margin-bottom: 12px;\n  font-weight: 500;\n}\n\n.deviceXs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex: 1;\n}\n\n.deviceLg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.gradient[_ngcontent-%COMP%] {\n  background-color: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  max-width: 80%;\n  padding: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS90ZXN0aW1vbmFscy90ZXN0aW1vbmFscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0FBRUY7O0FBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNDLGVBQUE7QUFHSDs7QUFEQTtFQUNFLHlFQUFBO0FBSUY7O0FBRkE7RUFDRSwwQ0FBQTtFQUNBLGNBQUE7RUFFQSxXQUFBO0FBSUYiLCJmaWxlIjoic3JjL2FwcC9ob21lL3Rlc3RpbW9uYWxzL3Rlc3RpbW9uYWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtYmxvY2sxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiA5JTtcbiAgcGFkZGluZy1sZWZ0OiAzOSU7XG4gIGZvbnQtc2l6ZTogMnZ3O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmRldmljZVhze1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4OjFcbn1cbi5kZXZpY2VMZ3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgZmxleC13cmFwOiB3cmFwO1xufVxuLmdyYWRpZW50e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjUpKTtcbn1cbi5jYXJkIHtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBtYXgtd2lkdGg6IDgwJTtcblxuICBwYWRkaW5nOjIlXG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestimonalsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-testimonals',
                templateUrl: './testimonals.component.html',
                styleUrls: ['./testimonals.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "heGf":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AccountComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AccountComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
}
AccountComponent.ɵfac = function AccountComponent_Factory(t) { return new (t || AccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountComponent, selectors: [["app-account"]], decls: 10, vars: 1, consts: [[2, "padding-left", "3%", "padding-right", "3%", "display", "flex", "justify-content", "space-between", "flex-direction", "row", "padding-top", "2.5", "padding-bottom", "2.5"], ["routerLink", "", 2, "font-size", "large", "font-weight", "500", "margin-top", "2%"], ["routerLink", "", 2, "font-size", "larger", "font-weight", "500", "margin-top", "2%", "padding-right", "3%"], ["style", "margin-top: 1%;", 4, "ngIf"], [2, "padding-top", "1%"], ["routerLink", "/cart", 1, "fa", "fa-shopping-cart", 2, "font-size", "xx-large"], [2, "margin-top", "1%"], ["routerLink", "/profile", "routerLink", "/profile", 1, "fa", "fa-user-circle-o", 2, "font-size", "xx-large"]], template: function AccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SHRIVASAFOODS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AccountComponent_div_5_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.loggedIn());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".text-block1[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  padding-top: 9%;\n  padding-left: 40%;\n  font-size: 2vw;\n  margin-bottom: 12px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDSCIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWJsb2NrMSB7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICBjb2xvcjogd2hpdGU7XG4gICBwYWRkaW5nLXRvcDogOSU7XG4gICBwYWRkaW5nLWxlZnQ6IDQwJTtcbiAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gfSAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-account',
                templateUrl: './account.component.html',
                styleUrls: ['./account.component.scss']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "j67j":
/*!***************************************************!*\
  !*** ./src/app/home/Pickles/Pickles.component.ts ***!
  \***************************************************/
/*! exports provided: PicklesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicklesComponent", function() { return PicklesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ "BRKm");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "87QV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function PicklesComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PicklesComponent_div_7_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.addProduct(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.price);
} }
function PicklesComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PicklesComponent_div_7_div_1_Template, 9, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.pickelProducts);
} }
function PicklesComponent_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PicklesComponent_div_8_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const item_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.addProduct(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r7.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.price);
} }
function PicklesComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PicklesComponent_div_8_div_3_Template, 9, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.pickelProducts);
} }
class PicklesComponent {
    constructor(mediaObserver, productService, cartService) {
        this.mediaObserver = mediaObserver;
        this.productService = productService;
        this.cartService = cartService;
        this.products = [];
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
        });
        this.getCatagoryProducts();
    }
    getCatagoryProducts() {
        this.productService.getCatagoryProducts('pickles').subscribe((products) => {
            this.vegProducts = products;
        }, (error) => {
            console.log('error in getting all products');
        });
    }
    addProduct(item) {
        this.cartService.addProduct(item);
    }
}
PicklesComponent.ɵfac = function PicklesComponent_Factory(t) { return new (t || PicklesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"])); };
PicklesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PicklesComponent, selectors: [["app-pickles"]], decls: 9, vars: 2, consts: [[2, "background-color", "rgb(240, 236, 236)", "padding-bottom", "2.5%"], [2, "padding-top", "2.5%", "padding-left", "2.5%", "padding-right", "2.5%", "border-radius", "6px"], [1, "text-block1"], [2, "height", "20%"], ["src", "../assets/images/veg.jpg", 1, "img-responsive", "gradient", 2, "width", "100%", ";object-fit", "cove\n  r", "border-radius", "6px"], [2, "border-radius", "6px", "margin", "2%", "background-color", "white"], ["class", "deviceLg", 4, "ngIf"], [4, "ngIf"], [1, "deviceLg"], ["style", "padding:2%;width: 20%;", 3, "click", 4, "ngFor", "ngForOf"], [2, "padding", "2%", "width", "20%", 3, "click"], [2, "text-align", "right"], [1, "btn"], [1, "glyphicon", "glyphicon-shopping-cart"], [1, "img-responsive", 3, "src"], [2, "font-weight", "bold"], [1, "row"], [2, "display", "flex", "flex-direction", "row", "flex-wrap", "wrap", "flex", "2", "justify-content", "space-evenly"], ["style", "padding:2%;width: 40%;", 3, "click", 4, "ngFor", "ngForOf"], [2, "padding", "2%", "width", "40%", 3, "click"]], template: function PicklesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Pickles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PicklesComponent_div_7_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PicklesComponent_div_8_Template, 4, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceLg || ctx.deviceMd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceXs || ctx.deviceSm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".text-block1[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  padding-top: 9%;\n  padding-left: 39%;\n  font-size: 2vw;\n  margin-bottom: 12px;\n  font-weight: 500;\n}\n\n.deviceXs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex: 1;\n}\n\n.deviceLg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.gradient[_ngcontent-%COMP%] {\n  background-color: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9QaWNrbGVzL3BpY2tsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtBQUVGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQyxlQUFBO0FBR0g7O0FBREE7RUFDRSx5RUFBQTtBQUlGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9QaWNrbGVzL3BpY2tsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1ibG9jazEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDklO1xuICBwYWRkaW5nLWxlZnQ6IDM5JTtcbiAgZm9udC1zaXplOiAydnc7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZGV2aWNlWHN7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXg6MVxufVxuLmRldmljZUxne1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZ3JhZGllbnR7XG4gIGJhY2tncm91bmQtY29sb3I6ICBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDAuNSkpO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PicklesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pickles',
                templateUrl: './pickles.component.html',
                styleUrls: ['./pickles.component.scss']
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }, { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }]; }, null); })();


/***/ }),

/***/ "jEA1":
/*!******************************************************!*\
  !*** ./src/app/account/profile/profile.component.ts ***!
  \******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../account.service */ "2rwd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth.service */ "ccyI");
/* harmony import */ var _textField_textField_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../textField/textField.component */ "glWx");









class ProfileComponent {
    constructor(formBuilder, accountService, router, http, myauthService) {
        this.formBuilder = formBuilder;
        this.accountService = accountService;
        this.router = router;
        this.http = http;
        this.myauthService = myauthService;
    }
    ngOnInit() {
        this.username = this.myauthService.getusername();
        this.email = this.myauthService.getemail();
        this.refrenceId = this.myauthService.getRefrenceId();
        this.contact = this.myauthService.getContact();
        this.rformEdit = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.username),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email),
            contact: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.contact)
        });
        // tslint:disable-next-line: align
        this.rformEditPassword = this.formBuilder.group({
            oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    editInfo() {
        this.accountService.editInfo(this.rformEdit.value).subscribe((data) => {
            alert("Edited");
            this.setusername(data.username);
            this.setemail(data.email);
        }, (error) => {
            alert(error.error.message);
        });
    }
    editPassowrd() {
        this.accountService.editPassword(this.rformEditPassword.value).subscribe((data) => {
            alert("Edited");
        }, (error) => {
            alert(error.error.message);
        });
    }
    setusername(username) {
        localStorage.setItem('username', JSON.stringify(username));
    }
    setemail(email) {
        localStorage.setItem('email', JSON.stringify(email));
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 36, vars: 7, consts: [[2, "margin-left", "5%", "margin-right", "5%"], [1, "card", 2, "margin-left", "10%", "margin-right", "10%"], [2, "font-size", "large", "font-weight", "bold"], [3, "formGroup"], [2, "display", "flex", "flex-direction", "row"], [1, "", 2, "padding-bottom", "2%", "padding-right", "20%", "float", "left"], [2, "padding-bottom", "1%"], ["name", "username", "rformControlName", "username", 1, "textfieldBorderColor", "font13", 3, "rformgroup"], [2, "padding-bottom", "2%", "float", "right"], ["name", "email", "rformControlName", "email", 1, "textfieldBorderColor", "font13", 3, "rformgroup"], [2, "padding-bottom", "2%"], ["name", "contact", "type", "text", "rformControlName", "contact", 1, "textfieldBorderColor", "font13", 3, "rformgroup"], [2, "text-align", "right"], [1, "btn", 2, "color", "rgb(104, 104, 209)", 3, "click"], ["name", "oldPassword", "type", "password", "rformControlName", "oldPassword", 1, "textfieldBorderColor", "font13", 3, "rformgroup"], ["name", "newPassword", "type", "password", "rformControlName", "newPassword", 1, "textfieldBorderColor", "font13", 3, "rformgroup"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ns-textField-account", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "ns-textField-account", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "ns-textField-account", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_p_click_21_listener() { return ctx.editInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Old Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "ns-textField-account", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "ns-textField-account", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_p_click_34_listener() { return ctx.editPassowrd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.rformEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rformgroup", ctx.rformEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rformgroup", ctx.rformEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rformgroup", ctx.rformEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.rformEditPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rformgroup", ctx.rformEditPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rformgroup", ctx.rformEditPassword);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _textField_textField_component__WEBPACK_IMPORTED_MODULE_6__["TextFieldComponent"]], styles: [".card[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  max-width: 80%;\n  padding: 2%;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: grey;\n  font-size: 18px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  outline: 0;\n  display: inline-block;\n  padding: 8px;\n  color: white;\n  background-color: #000;\n  text-align: center;\n  cursor: pointer;\n  width: 100%;\n  font-size: 18px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 22px;\n  color: black;\n}\n\nbutton[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBQTtFQUNBLGNBQUE7RUFFQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgbWF4LXdpZHRoOiA4MCU7XG5cbiAgcGFkZGluZzoyJVxufVxuXG4udGl0bGUge1xuICBjb2xvcjogZ3JleTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogOHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuYnV0dG9uOmhvdmVyLCBhOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "jcJX":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var _forgetPassword_forgetPassword_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgetPassword/forgetPassword.component */ "gK4h");
/* harmony import */ var _account_emailVerify_emailVerify_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../account/emailVerify/emailVerify.component */ "DfQd");
/* harmony import */ var _resetPassword_resetPassword_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetPassword/resetPassword.component */ "QEFU");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.service */ "2rwd");
/* harmony import */ var _account_textField_textField_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../account/textField/textField.component */ "glWx");
/* harmony import */ var _signUp_signUp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signUp/signUp.component */ "+3gi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account.component */ "heGf");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "dvA0");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account-routing.module */ "sGj0");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/profile.component */ "jEA1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");














class AccountModule {
}
AccountModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AccountModule });
AccountModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ factory: function AccountModule_Factory(t) { return new (t || AccountModule)(); }, providers: [
        _account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _account_routing_module__WEBPACK_IMPORTED_MODULE_9__["AccountRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AccountModule, { declarations: [_account_component__WEBPACK_IMPORTED_MODULE_7__["AccountComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
        _signUp_signUp_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"],
        _account_textField_textField_component__WEBPACK_IMPORTED_MODULE_4__["TextFieldComponent"],
        _resetPassword_resetPassword_component__WEBPACK_IMPORTED_MODULE_2__["ResetPasswordComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
        _account_emailVerify_emailVerify_component__WEBPACK_IMPORTED_MODULE_1__["EmailVerifyComponent"],
        _forgetPassword_forgetPassword_component__WEBPACK_IMPORTED_MODULE_0__["ForgetPasswordComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
        _account_routing_module__WEBPACK_IMPORTED_MODULE_9__["AccountRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]], exports: [_account_component__WEBPACK_IMPORTED_MODULE_7__["AccountComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
        _signUp_signUp_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"],
        _account_textField_textField_component__WEBPACK_IMPORTED_MODULE_4__["TextFieldComponent"],
        _resetPassword_resetPassword_component__WEBPACK_IMPORTED_MODULE_2__["ResetPasswordComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
        _account_emailVerify_emailVerify_component__WEBPACK_IMPORTED_MODULE_1__["EmailVerifyComponent"],
        _forgetPassword_forgetPassword_component__WEBPACK_IMPORTED_MODULE_0__["ForgetPasswordComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵsetClassMetadata"](AccountModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                    _account_routing_module__WEBPACK_IMPORTED_MODULE_9__["AccountRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                ],
                declarations: [
                    _account_component__WEBPACK_IMPORTED_MODULE_7__["AccountComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                    _signUp_signUp_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"],
                    _account_textField_textField_component__WEBPACK_IMPORTED_MODULE_4__["TextFieldComponent"],
                    _resetPassword_resetPassword_component__WEBPACK_IMPORTED_MODULE_2__["ResetPasswordComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                    _account_emailVerify_emailVerify_component__WEBPACK_IMPORTED_MODULE_1__["EmailVerifyComponent"],
                    _forgetPassword_forgetPassword_component__WEBPACK_IMPORTED_MODULE_0__["ForgetPasswordComponent"]
                ],
                exports: [
                    _account_component__WEBPACK_IMPORTED_MODULE_7__["AccountComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                    _signUp_signUp_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"],
                    _account_textField_textField_component__WEBPACK_IMPORTED_MODULE_4__["TextFieldComponent"],
                    _resetPassword_resetPassword_component__WEBPACK_IMPORTED_MODULE_2__["ResetPasswordComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                    _account_emailVerify_emailVerify_component__WEBPACK_IMPORTED_MODULE_1__["EmailVerifyComponent"],
                    _forgetPassword_forgetPassword_component__WEBPACK_IMPORTED_MODULE_0__["ForgetPasswordComponent"]
                ], providers: [
                    _account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"],
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["NO_ERRORS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "jkDv":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _ordersProgress_ordersProgress_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ordersProgress/ordersProgress.component */ "Kg9S");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.service */ "l3fW");
/* harmony import */ var _addProduct_addProduct_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addProduct/addProduct.component */ "fDLK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin.component */ "TRGY");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-routing.module */ "0Em7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _admin_textField_textField_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../admin/textField/textField.component */ "Awi1");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");












class AdminModule {
}
AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AdminModule_Factory(t) { return new (t || AdminModule)(); }, providers: [_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_6__["AdminRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"], _addProduct_addProduct_component__WEBPACK_IMPORTED_MODULE_2__["AddProductComponent"], _admin_textField_textField_component__WEBPACK_IMPORTED_MODULE_8__["TextFieldComponent"], _ordersProgress_ordersProgress_component__WEBPACK_IMPORTED_MODULE_0__["OrdersProgressComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_6__["AdminRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"]], exports: [_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"], _addProduct_addProduct_component__WEBPACK_IMPORTED_MODULE_2__["AddProductComponent"], _admin_textField_textField_component__WEBPACK_IMPORTED_MODULE_8__["TextFieldComponent"], _ordersProgress_ordersProgress_component__WEBPACK_IMPORTED_MODULE_0__["OrdersProgressComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_6__["AdminRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"]],
                declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"], _addProduct_addProduct_component__WEBPACK_IMPORTED_MODULE_2__["AddProductComponent"], _admin_textField_textField_component__WEBPACK_IMPORTED_MODULE_8__["TextFieldComponent"], _ordersProgress_ordersProgress_component__WEBPACK_IMPORTED_MODULE_0__["OrdersProgressComponent"]],
                exports: [_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"], _addProduct_addProduct_component__WEBPACK_IMPORTED_MODULE_2__["AddProductComponent"], _admin_textField_textField_component__WEBPACK_IMPORTED_MODULE_8__["TextFieldComponent"], _ordersProgress_ordersProgress_component__WEBPACK_IMPORTED_MODULE_0__["OrdersProgressComponent"]],
                providers: [_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["NO_ERRORS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "kH2C":
/*!*********************************************************************!*\
  !*** ./src/app/home/returnandrefunds/returnandrefunds.component.ts ***!
  \*********************************************************************/
/*! exports provided: ReturnandrefundsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnandrefundsComponent", function() { return ReturnandrefundsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ReturnandrefundsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ReturnandrefundsComponent.ɵfac = function ReturnandrefundsComponent_Factory(t) { return new (t || ReturnandrefundsComponent)(); };
ReturnandrefundsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReturnandrefundsComponent, selectors: [["app-returnandrefunds"]], decls: 69, vars: 0, consts: [[1, "row", 2, "margin", "5%"], [1, "col-xs-4"], [2, "width", "60%", "word-wrap", "break-word"], [1, "col-xs-8"], ["id", "accordion"], [1, "row"], [1, "col-md-12"], ["id", "accordion", "role", "tablist", "aria-multiselectable", "true", 1, "panel-group"], [1, "panel", "panel-default"], ["role", "tab", "id", "headingOne", 1, "panel-heading"], [1, "panel-title"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne"], ["id", "collapseOne", "role", "tabpanel", "aria-labelledby", "headingOne", 1, "panel-collapse", "collapse", "in"], [1, "panel-body"], ["role", "tab", "id", "headingTwo", 1, "panel-heading"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseTwo", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "collapsed"], ["id", "collapseTwo", "role", "tabpanel", "aria-labelledby", "headingTwo", 1, "panel-collapse", "collapse"], ["role", "tab", "id", "headingThree", 1, "panel-heading"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseThree", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "collapsed"], ["id", "collapseThree", "role", "tabpanel", "aria-labelledby", "headingThree", 1, "panel-collapse", "collapse"], ["role", "tab", "id", "headingFour", 1, "panel-heading"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseFour", "aria-expanded", "false", "aria-controls", "collapseFour", 1, "collapsed"], ["id", "collapseFour", "role", "tabpanel", "aria-labelledby", "headingFour", 1, "panel-collapse", "collapse"], ["role", "tab", "id", "headingFive", 1, "panel-heading"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseFive", "aria-expanded", "false", "aria-controls", "collapseFive", 1, "collapsed"], ["id", "collapseFive", "role", "tabpanel", "aria-labelledby", "headingFive", 1, "panel-collapse", "collapse"]], template: function ReturnandrefundsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Return and Refunds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Every day help for our customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Every day help for our customersEvery day help for our customersEvery day help for our customersEvery day help for our cust omersEvery day help for our customersEvery day help for our customersEvery day help for our customersEvery day help for our customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "If you need help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Every day help for our customersEvery day help for our customersEvery day help for our customersEvery day help for our cust omersEvery day help for our customersEvery day help for our customersEvery day help for our customersEvery day help for our customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Why you choose Shrivasafoods? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Why Shrivasafoods best? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " How to apply Shrivasafoods jobs? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " How experts Shrivasafoods team member? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " How Shrivasafoods give customer support? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".panel-group[_ngcontent-%COMP%] {\n    background: #fff none repeat scroll 0 0;\n    border-radius: 3px;\n    box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.04);\n    margin-bottom: 0;\n    padding: 30px;\n}\n#accordion[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%] {\n    border: medium none;\n    border-radius: 0;\n    box-shadow: none;\n    margin: 0 0 15px 10px;\n}\n#accordion[_ngcontent-%COMP%]   .panel-heading[_ngcontent-%COMP%] {\n    border-radius: 30px;\n    padding: 0;\n}\n#accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    background:#b4d469 none repeat scroll 0 0;\n    border: 1px solid transparent;\n    border-radius: 30px;\n    color: black;\n    display: block;\n    font-size: 18px;\n    font-weight: 600;\n    padding: 12px 20px 12px 50px;\n    position: relative;\n    transition: all 0.3s ease 0s;\n}\n#accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%] {\n    background:white none repeat scroll 0 0;\n    border: 1px solid #ddd;\n    color: black;\n}\n#accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%]:hover {\n    background:#b4d469  none repeat scroll 0 0;\n    border: 1px solid #ddd;\n    color: black;\n}\n#accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after, #accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%]::after {\n    background: #93bb36 none repeat scroll 0 0;\n    border: 1px solid transparent;\n    border-radius: 50%;\n    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.58);\n    color: #fff;\n    content: \"\uF107\";\n    font-family: fontawesome;\n    font-size: 25px;\n    height: 55px;\n    left: -20px;\n    line-height: 55px;\n    position: absolute;\n    text-align: center;\n    top: -5px;\n    transition: all 0.3s ease 0s;\n    width: 55px;\n}\n#accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a.collapsed[_ngcontent-%COMP%]::after {\n    background:black none repeat scroll 0 0;\n    border: 1px solid #ddd;\n    box-shadow: none;\n    color: white;\n    content: \"\uF105\";\n}\n#accordion[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n    background: transparent none repeat scroll 0 0;\n    border-top: medium none;\n    padding: 20px 25px 10px 9px;\n    position: auto;\n    font-family: \"Open Sans\", sans-serif;\n}\n#accordion[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    border-left: 1px dashed #8c8c8c;\n    padding-left: 25px;\n}\nli.panel-body[_ngcontent-%COMP%] {\n     font-weight: bold;\n    font-size: small;\n    \n        margin-bottom: 14px;\n    text-align: left;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9yZXR1cm5hbmRyZWZ1bmRzL3JldHVybmFuZHJlZnVuZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSx1Q0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLDRDQUE0QztJQUM1QyxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtBQUNkO0FBQ0E7SUFDSSx5Q0FBeUM7SUFDekMsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLHVDQUF1QztJQUN2QyxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksMENBQTBDO0lBQzFDLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSwwQ0FBMEM7SUFDMUMsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQiwwQ0FBMEM7SUFDMUMsV0FBVztJQUNYLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULDRCQUE0QjtJQUM1QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHVDQUF1QztJQUN2QyxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSw4Q0FBOEM7SUFDOUMsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2Qsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0Isa0JBQWtCO0FBQ3RCO0FBRUE7S0FDSyxpQkFBaUI7SUFDbEIsZ0JBQWdCOztRQUVaLG1CQUFtQjtJQUN2QixnQkFBZ0I7O0FBRXBCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9yZXR1cm5hbmRyZWZ1bmRzL3JldHVybmFuZHJlZnVuZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnBhbmVsLWdyb3VwIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgcGFkZGluZzogMzBweDtcbn1cbiNhY2NvcmRpb24gLnBhbmVsIHtcbiAgICBib3JkZXI6IG1lZGl1bSBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBtYXJnaW46IDAgMCAxNXB4IDEwcHg7XG59XG4jYWNjb3JkaW9uIC5wYW5lbC1oZWFkaW5nIHtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIHBhZGRpbmc6IDA7XG59XG4jYWNjb3JkaW9uIC5wYW5lbC10aXRsZSBhIHtcbiAgICBiYWNrZ3JvdW5kOiNiNGQ0Njkgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHggMTJweCA1MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xufVxuI2FjY29yZGlvbiAucGFuZWwtdGl0bGUgYS5jb2xsYXBzZWQge1xuICAgIGJhY2tncm91bmQ6d2hpdGUgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGNvbG9yOiBibGFjaztcbn1cbiNhY2NvcmRpb24gLnBhbmVsLXRpdGxlIGEuY29sbGFwc2VkOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiNiNGQ0NjkgIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBjb2xvcjogYmxhY2s7XG59XG4jYWNjb3JkaW9uIC5wYW5lbC10aXRsZSBhOjphZnRlciwgI2FjY29yZGlvbiAucGFuZWwtdGl0bGUgYS5jb2xsYXBzZWQ6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjOTNiYjM2IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjU4KTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBjb250ZW50OiBcIu+Eh1wiO1xuICAgIGZvbnQtZmFtaWx5OiBmb250YXdlc29tZTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIGxlZnQ6IC0yMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA1NXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdG9wOiAtNXB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gICAgd2lkdGg6IDU1cHg7XG59XG4jYWNjb3JkaW9uIC5wYW5lbC10aXRsZSBhLmNvbGxhcHNlZDo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6YmxhY2sgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGNvbnRlbnQ6IFwi74SFXCI7XG59XG4jYWNjb3JkaW9uIC5wYW5lbC1ib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICAgIGJvcmRlci10b3A6IG1lZGl1bSBub25lO1xuICAgIHBhZGRpbmc6IDIwcHggMjVweCAxMHB4IDlweDtcbiAgICBwb3NpdGlvbjogYXV0bztcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cbiNhY2NvcmRpb24gLnBhbmVsLWJvZHkgcCB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBkYXNoZWQgIzhjOGM4YztcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG59XG5cbmxpLnBhbmVsLWJvZHkge1xuICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReturnandrefundsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-returnandrefunds',
                templateUrl: './returnandrefunds.component.html',
                styleUrls: ['./returnandrefunds.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "l3fW":
/*!****************************************!*\
  !*** ./src/app/admin/admin.service.ts ***!
  \****************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AdminService {
    constructor(http) {
        this.http = http;
        this.httpHeaders = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'Application/Json',
                accept: ' application/json'
            })
        };
        this.phase = "delivery phase";
    }
    addProducts(fd) {
        return this.http.post('http://localhost:8000/api/products/', fd);
    }
    shippingPhase(shippingPhase) {
        return this.http.post('http://localhost:8000/api/orders/shipping', {
            phase: this.phase = "shipping phase",
            ownerEmail: shippingPhase.ownerEmail,
            orderId: shippingPhase.orderId
        }, this.httpHeaders);
    }
    getAllOrders() {
        return this.http.get('http://localhost:8000/api/orders/', this.httpHeaders);
    }
    getPhase() {
        return this.phase;
    }
}
AdminService.ɵfac = function AdminService_Factory(t) { return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AdminService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AdminService, factory: AdminService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdminService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "sGj0":
/*!***************************************************!*\
  !*** ./src/app/account/account-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var _forgetPassword_forgetPassword_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgetPassword/forgetPassword.component */ "gK4h");
/* harmony import */ var _account_emailVerify_emailVerify_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../account/emailVerify/emailVerify.component */ "DfQd");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile.component */ "jEA1");
/* harmony import */ var _resetPassword_resetPassword_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resetPassword/resetPassword.component */ "QEFU");
/* harmony import */ var _signUp_signUp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signUp/signUp.component */ "+3gi");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account.component */ "heGf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "dvA0");











const routes = [
    { path: '', component: _account_component__WEBPACK_IMPORTED_MODULE_5__["AccountComponent"], children: [
            { path: 'resetPassword/:id', component: _resetPassword_resetPassword_component__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordComponent"] },
            { path: 'signUp', component: _signUp_signUp_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"] },
            { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"] },
            { path: 'forgetPassword', component: _forgetPassword_forgetPassword_component__WEBPACK_IMPORTED_MODULE_0__["ForgetPasswordComponent"] },
            { path: 'accountVerify/:token', component: _account_emailVerify_emailVerify_component__WEBPACK_IMPORTED_MODULE_1__["EmailVerifyComponent"] },
            // { path: '', loadChildren: './home/home.module#HomeModule' },
            { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
        ]
    },
];
class AccountRoutingModule {
}
AccountRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AccountRoutingModule });
AccountRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function AccountRoutingModule_Factory(t) { return new (t || AccountRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AccountRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](AccountRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "sjMi":
/*!***********************************************************!*\
  !*** ./src/app/home/supportPage/supportPage.component.ts ***!
  \***********************************************************/
/*! exports provided: SupportPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPageComponent", function() { return SupportPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_home_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/home/product.service */ "BRKm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







class SupportPageComponent {
    constructor(mediaObserver, formBuilder, productService, router, http) {
        this.mediaObserver = mediaObserver;
        this.formBuilder = formBuilder;
        this.productService = productService;
        this.router = router;
        this.http = http;
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
        });
        // this.rformSupport = this.formBuilder.group({
        //   username: new FormControl(''),
        //   email: new FormControl('', Validators.email),
        //   subjcet: new FormControl('' ),
        //   message: new FormControl('' )
        // });
    }
    submit() {
        //   this.productService.supportPage(this.rformSupport.value).subscribe((data: any) => {
        //    alert("Query Sent")
        //    }, (error) => {
        //      alert(error.error.message);
        //    });
    }
}
SupportPageComponent.ɵfac = function SupportPageComponent_Factory(t) { return new (t || SupportPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_home_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
SupportPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SupportPageComponent, selectors: [["app-supportPage"]], decls: 13, vars: 4, consts: [[2, "margin-left", "5%", "margin-right", "5%"], [2, "font-size", "large", "font-weight", "bold", "text-align", "center"], [2, "margin-left", "10%", "margin-right", "10%", "margin-top", "5%", "display", "flex", "flex-direction", "column", "justify-content", "space-evenly"], ["placeholder", "username", "type", "text", "name", "username", 1, "form-control", 2, "margin-bottom", "2%", "width", "40%", 3, "ngModel", "ngModelChange"], ["placeholder", "email", "type", "text", "name", "email", 1, "form-control", 2, "margin-bottom", "2%", "width", "40%", 3, "ngModel", "ngModelChange"], ["placeholder", "contact", "type", "text", "name", "contact", 1, "form-control", 2, "margin-bottom", "2%", "width", "40%", 3, "ngModel", "ngModelChange"], ["placeholder", "message", "name", "message", "rows", "5", 2, "margin-bottom", "2%", "margin-top", "2%", "width", "100%", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", 3, "click"]], template: function SupportPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Support Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SupportPageComponent_Template_input_ngModelChange_6_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SupportPageComponent_Template_input_ngModelChange_7_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SupportPageComponent_Template_input_ngModelChange_8_listener($event) { return ctx.contact = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SupportPageComponent_Template_textarea_ngModelChange_9_listener($event) { return ctx.message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SupportPageComponent_Template_p_click_11_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contact);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.message);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".card[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  max-width: 80%;\n\n  padding:2%\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zdXBwb3J0UGFnZS9zdXBwb3J0UGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMENBQTBDO0VBQzFDLGNBQWM7O0VBRWQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3VwcG9ydFBhZ2Uvc3VwcG9ydFBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBtYXgtd2lkdGg6IDgwJTtcblxuICBwYWRkaW5nOjIlXG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupportPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-supportPage',
                templateUrl: './supportPage.component.html',
                styleUrls: ['./supportPage.component.css']
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_home_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "tFkF":
/*!*********************************************!*\
  !*** ./src/app/home/blog/blog.component.ts ***!
  \*********************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class BlogComponent {
    constructor() { }
    ngOnInit() {
    }
    submit() {
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 41, vars: 4, consts: [[2, "background-color", "rgb(240, 236, 236)", "padding-bottom", "2.5%", "min-height", "500px"], [2, "padding-top", "5%", "margin-left", "5%", "margin-right", "5%"], [1, "row"], [1, "col-xs-8", 2, "padding", "2%"], [2, "word-wrap", "break-word"], [1, "col-xs-4", 2, "padding", "2%"], ["src", "../assets/images/7.jpg", 1, "img-responsive", "gradient", 2, "height", "200px", "width", "200px", "object-fit", "cove\n    r", "border-radius", "6px"], [2, "padding", "5%", "background-color", "white", "margin-right", "10%", "margin-top", "5%", "margin-left", "2%", "margin-bottom", "2%", "display", "flex", "flex-direction", "column"], [2, "display", "flex", "flex-direction", "row", "justify-content", "space-between"], ["placeholder", "username", "type", "text", "name", "username", 1, "form-control", 2, "width", "30%", 3, "ngModel", "ngModelChange"], ["placeholder", "email", "type", "text", "name", "email", 1, "form-control", 2, "width", "30%", 3, "ngModel", "ngModelChange"], ["placeholder", "contact", "type", "text", "name", "contact", 1, "form-control", 2, "width", "30%", 3, "ngModel", "ngModelChange"], ["placeholder", "comment", "name", "comment", "rows", "5", 2, "margin-top", "5%", "width", "100%", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", 3, "click"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "What our Clients say");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Maecenas est dui, commodo a rutrum eget, interdum vel lorem. Aliquam euismod dapibus turpis, vitae placerat purus vestibulum non. Pellentesque ut nisi viverra, dictum nisi sed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Maecenas est dui, commodo a rutrum eget, interdum vel lorem. Aliquam euismod dapibus turpis, vitae placerat purus vestibulum non. Pellentesque ut nisi viverra, dictum nisi sed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Maecenas est dui, commodo a rutrum eget, interdum vel lorem. Aliquam euismod dapibus turpis, vitae placerat purus vestibulum non. Pellentesque ut nisi viverra, dictum nisi sed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Post your Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BlogComponent_Template_input_ngModelChange_34_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BlogComponent_Template_input_ngModelChange_35_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BlogComponent_Template_input_ngModelChange_36_listener($event) { return ctx.contact = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BlogComponent_Template_textarea_ngModelChange_37_listener($event) { return ctx.comment = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogComponent_Template_p_click_39_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contact);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.comment);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog',
                templateUrl: './blog.component.html',
                styleUrls: ['./blog.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "tIkO":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(_authService, router) {
        this._authService = _authService;
        this.router = router;
    }
    canActivate() {
        if (this._authService.loggedIn()) {
            return true;
        }
        else {
            alert('Kindly login First');
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _app_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    { path: 'login', loadChildren: './account/account.module#AccountModule' },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
    { path: '', loadChildren: './home/home.module#HomeModule' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "xbwq":
/*!***************************************************************!*\
  !*** ./src/app/home/productDetail/productDetail.component.ts ***!
  \***************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ProductDetailComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "12$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Twix 30g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "12$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Twix 30g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "12$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Twix 30g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "12$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Twix 30g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "12$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Twix 30g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "12$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Twix 30g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "12$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Twix 30g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "12$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Twix 30g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "12$");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Twix 30g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProductDetailComponent {
    constructor(mediaObserver) {
        this.mediaObserver = mediaObserver;
    }
    ngOnInit() {
        this.mediaSub = this.mediaObserver.media$.subscribe((result) => {
            console.log(result.mqAlias);
            this.deviceXs = result.mqAlias === 'xs';
            this.deviceSm = result.mqAlias === 'sm';
            this.deviceLg = result.mqAlias === 'lg';
            this.deviceMd = result.mqAlias === 'md';
        });
    }
}
ProductDetailComponent.ɵfac = function ProductDetailComponent_Factory(t) { return new (t || ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"])); };
ProductDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDetailComponent, selectors: [["app-productDetail"]], decls: 70, vars: 2, consts: [[2, "margin", "2%"], [1, "row"], [1, "col-lg-6"], [2, "display", "flex", "flex-direction", "row", "justify-content", "space-evenly"], [2, "margin-bottom", "3%", "border-radius", "5px", "width", "22vw", "border", "2px", "border-style", "groove"], ["src", "../assets/images/veg1.jpg", 2, "width", "20vw", "padding", "5px"], [2, "margin-top", "5%", "margin-left", "10%", "margin-right", "10%", "display", "flex", "flex-direction", "column", "justify-content", "space-between"], [2, "font-size", "larger", "font-weight", "500"], [2, "padding-top", "5%"], [2, "float", "left", "font-size", "larger", "font-weight", "500"], [2, "float", "right"], [1, "btn", 2, "background-color", "rgb(63, 61, 61)", "color", "whitesmoke"], [2, "font-weight", "bold"], [2, "padding-bottom", "5%", "word-wrap", "break-word", "padding", "3%"], [2, "margin-bottom", "5%", "display", "flex", "flex-direction", "row"], [2, "margin-right", "5%", "font-size", "larger"], [1, "btn", 2, "margin-right", "2%", "border", "2px", "border-style", "groove"], [2, "display", "flex", "flex-direction", "row"], [2, "border-radius", "6px", "margin", "2.5%", "background-color", "white"], [2, "font-weight", "bold", "font-size", "1.5vw", "padding-left", "3%", "padding-top", "4%"], ["class", "deviceLg", 4, "ngIf"], [4, "ngIf"], [2, "margin-bottom", "2%", "margin-left", "3%", "margin-right", "3%", "border-radius", "8px"], [1, "text-block1Footer"], [1, "text-block2Footer"], [1, "btn", "text-block3Footer"], [1, "fa", "fa-arrow"], [2, "font-weight", "800", "font-size", "larger"], ["src", "../assets/images/slide2.png", 1, "img-responsive", 2, "width", "100%", "border-radius", "8px"], [2, "padding", "2%"], [1, "deviceLg"], [2, "padding", "2%", "width", "20%"], [2, "text-align", "right"], [1, "btn"], [1, "glyphicon", "glyphicon-shopping-cart"], ["src", "../assets/images/veg1.jpg", 1, "img-responsive"], [2, "padding", "2%", ";width", "20%"], ["src", "../assets/images/trend1.jpg", 1, "img-responsive"], ["src", "../assets/images/trend2.jpg", 1, "img-responsive"], ["src", "../assets/images/trend3.jpg", 1, "img-responsive"], ["src", "../assets/images/trend4.jpg", 1, "img-responsive"], [2, "width", "17vw"]], template: function ProductDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Market Corner Classic Burger Buns 400g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "0.50$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Add To Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Shrivasafoods is a React Gatsby based E-commerce Template that uses two Headless API. One of them is Shopify Storefront API for E-commerce purposes and another one is for Static Content Management [ Prismic ]. You can easily change any text or product data from there. As we\u2019ve used Shopify E-commerce api, it\u2019s behaving like a fully functional E-commerce template.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Tag :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Buns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Fresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Packed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Share on :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Twiter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Related Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ProductDetailComponent_div_53_Template, 51, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ProductDetailComponent_div_54_Template, 48, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Fast, Free Shipping, Contactless Delivery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Try it now, risk free!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Shop Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Copyright \u00A9 2020 RedQ, Inc , All rights reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceLg || ctx.deviceMd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deviceXs || ctx.deviceSm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".text-block1[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  padding-top: 9%;\n  padding-left: 40%;\n  font-size: 2vw;\n  margin-bottom: 12px;\n  font-weight: 500;\n}\n\n.deviceXs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex: 1;\n}\n\n.deviceLg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.gradient[_ngcontent-%COMP%] {\n  background-color: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));\n}\n\n.text-block1Footer[_ngcontent-%COMP%] {\n  position: absolute;\n  padding-top: 6%;\n  padding-left: 5%;\n  font-size: 3vw;\n  margin-bottom: 12px;\n}\n\n.text-block2Footer[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: medium;\n  padding-top: 12%;\n  padding-left: 5%;\n}\n\n.text-block3Footer[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: white;\n  font-weight: bold;\n  margin-top: 18%;\n  color: black;\n  font-weight: 700;\n  margin-left: 5%;\n  font-size: 1vw;\n  padding-top: 12px;\n  text-align: center;\n  height: large;\n  width: 10vw;\n  border-radius: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9kdWN0RGV0YWlsL3Byb2R1Y3REZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtBQUVGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQyxlQUFBO0FBR0g7O0FBREE7RUFDRSx5RUFBQTtBQUlGOztBQUZBO0VBQ0Usa0JBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFIQztFQUNDLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBTUY7O0FBRkE7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUtGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9wcm9kdWN0RGV0YWlsL3Byb2R1Y3REZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1ibG9jazEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDklO1xuICBwYWRkaW5nLWxlZnQ6IDQwJTtcbiAgZm9udC1zaXplOiAydnc7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZGV2aWNlWHN7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXg6MVxufVxuLmRldmljZUxne1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZ3JhZGllbnR7XG4gIGJhY2tncm91bmQtY29sb3I6ICBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDAuNSkpO1xufVxuLnRleHQtYmxvY2sxRm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIHBhZGRpbmctdG9wOiA2JTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgZm9udC1zaXplOiAzdnc7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59LnRleHQtYmxvY2syRm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgcGFkZGluZy10b3A6IDEyJTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcblxuXG59XG4udGV4dC1ibG9jazNGb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAxOCU7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBmb250LXNpemU6IDF2dztcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiBsYXJnZTtcbiAgd2lkdGg6IDEwdnc7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-productDetail',
                templateUrl: './productDetail.component.html',
                styleUrls: ['./productDetail.component.scss']
            }]
    }], function () { return [{ type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./account/account.module": "jcJX",
	"./admin/admin.module": "jkDv",
	"./home/home.module": "ct+p"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "zn8P";
module.exports = webpackAsyncContext;

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map