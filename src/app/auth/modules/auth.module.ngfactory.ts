/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core';
import * as import1 from './auth.module';
import * as import2 from '@angular/forms';
import * as import3 from '@angular/common';
import * as import4 from '@angular/router';
import * as import5 from '../../shared/components/components.module';
import * as import6 from '../../shared/shared.module';
import * as import7 from './auth-routing.module';
import * as import8 from '../models/auth.model.service';
import * as import9 from '../components/login/login.component.ngfactory';
import * as import10 from '../components/signup/signup.component.ngfactory';
import * as import11 from '../components/login/login.component';
import * as import12 from '../components/signup/signup.component';
import * as import13 from '../services/auth.service';
import * as import14 from '@ngrx/store/src/store';
class AuthModuleInjector extends import0.ɵNgModuleInjector<import1.AuthModule> {
  _ɵba_0:import2.ɵba;
  _ReactiveFormsModule_1:import2.ReactiveFormsModule;
  _CommonModule_2:import3.CommonModule;
  _RouterModule_3:import4.RouterModule;
  _SharedComponentsModule_4:import5.SharedComponentsModule;
  _SharedModule_5:import6.SharedModule;
  _AuthRoutingModule_6:import7.AuthRoutingModule;
  _AuthModule_7:import1.AuthModule;
  __FormBuilder_8:import2.FormBuilder;
  __ɵi_9:import2.ɵi;
  __NgLocalization_10:import3.NgLocaleLocalization;
  __ROUTES_11:any[];
  __AuthModelService_12:import8.AuthModelService;
  constructor(parent:import0.Injector) {
    super(parent,[
      import9.LoginComponentNgFactory,
      import10.SignupComponentNgFactory
    ]
    ,([] as any[]));
  }
  get _FormBuilder_8():import2.FormBuilder {
    if ((this.__FormBuilder_8 == null)) { (this.__FormBuilder_8 = new import2.FormBuilder()); }
    return this.__FormBuilder_8;
  }
  get _ɵi_9():import2.ɵi {
    if ((this.__ɵi_9 == null)) { (this.__ɵi_9 = new import2.ɵi()); }
    return this.__ɵi_9;
  }
  get _NgLocalization_10():import3.NgLocaleLocalization {
    if ((this.__NgLocalization_10 == null)) { (this.__NgLocalization_10 = new import3.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID))); }
    return this.__NgLocalization_10;
  }
  get _ROUTES_11():any[] {
      if ((this.__ROUTES_11 == null)) { (this.__ROUTES_11 = [[
        {
          path: 'login',
          component: import11.LoginComponent
        }
        ,
        {
          path: 'signup',
          component: import12.SignupComponent
        }

      ]
    ]); }
    return this.__ROUTES_11;
  }
  get _AuthModelService_12():import8.AuthModelService {
    if ((this.__AuthModelService_12 == null)) { (this.__AuthModelService_12 = new import8.AuthModelService(this.parent.get(import13.AUTH_SERVICE),this.parent.get(import14.Store))); }
    return this.__AuthModelService_12;
  }
  createInternal():import1.AuthModule {
    this._ɵba_0 = new import2.ɵba();
    this._ReactiveFormsModule_1 = new import2.ReactiveFormsModule();
    this._CommonModule_2 = new import3.CommonModule();
    this._RouterModule_3 = new import4.RouterModule(this.parent.get(import4.ɵa,(null as any)));
    this._SharedComponentsModule_4 = new import5.SharedComponentsModule();
    this._SharedModule_5 = new import6.SharedModule();
    this._AuthRoutingModule_6 = new import7.AuthRoutingModule();
    this._AuthModule_7 = new import1.AuthModule();
    return this._AuthModule_7;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.ɵba)) { return this._ɵba_0; }
    if ((token === import2.ReactiveFormsModule)) { return this._ReactiveFormsModule_1; }
    if ((token === import3.CommonModule)) { return this._CommonModule_2; }
    if ((token === import4.RouterModule)) { return this._RouterModule_3; }
    if ((token === import5.SharedComponentsModule)) { return this._SharedComponentsModule_4; }
    if ((token === import6.SharedModule)) { return this._SharedModule_5; }
    if ((token === import7.AuthRoutingModule)) { return this._AuthRoutingModule_6; }
    if ((token === import1.AuthModule)) { return this._AuthModule_7; }
    if ((token === import2.FormBuilder)) { return this._FormBuilder_8; }
    if ((token === import2.ɵi)) { return this._ɵi_9; }
    if ((token === import3.NgLocalization)) { return this._NgLocalization_10; }
    if ((token === import4.ROUTES)) { return this._ROUTES_11; }
    if ((token === import8.AuthModelService)) { return this._AuthModelService_12; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const AuthModuleNgFactory:import0.NgModuleFactory<import1.AuthModule> = new import0.NgModuleFactory<any>(AuthModuleInjector,import1.AuthModule);