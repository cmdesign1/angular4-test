/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core';
import * as import1 from './create.module';
import * as import2 from '@angular/common';
import * as import3 from '@angular/router';
import * as import4 from '@angular/forms';
import * as import5 from '../shared/components/components.module';
import * as import6 from '../shared/shared.module';
import * as import7 from './create-routing.module';
import * as import8 from './create.component.ngfactory';
import * as import9 from './create.component';
class CreateModuleInjector extends import0.ɵNgModuleInjector<import1.CreateModule> {
  _CommonModule_0:import2.CommonModule;
  _RouterModule_1:import3.RouterModule;
  _ɵba_2:import4.ɵba;
  _ReactiveFormsModule_3:import4.ReactiveFormsModule;
  _SharedComponentsModule_4:import5.SharedComponentsModule;
  _SharedModule_5:import6.SharedModule;
  _CreateRoutingModule_6:import7.CreateRoutingModule;
  _CreateModule_7:import1.CreateModule;
  __NgLocalization_8:import2.NgLocaleLocalization;
  __FormBuilder_9:import4.FormBuilder;
  __ɵi_10:import4.ɵi;
  __ROUTES_11:any[];
  constructor(parent:import0.Injector) {
    super(parent,[import8.CreateComponentNgFactory],([] as any[]));
  }
  get _NgLocalization_8():import2.NgLocaleLocalization {
    if ((this.__NgLocalization_8 == null)) { (this.__NgLocalization_8 = new import2.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID))); }
    return this.__NgLocalization_8;
  }
  get _FormBuilder_9():import4.FormBuilder {
    if ((this.__FormBuilder_9 == null)) { (this.__FormBuilder_9 = new import4.FormBuilder()); }
    return this.__FormBuilder_9;
  }
  get _ɵi_10():import4.ɵi {
    if ((this.__ɵi_10 == null)) { (this.__ɵi_10 = new import4.ɵi()); }
    return this.__ɵi_10;
  }
  get _ROUTES_11():any[] {
        if ((this.__ROUTES_11 == null)) { (this.__ROUTES_11 = [[{
          path: 'create',
          component: import9.CreateComponent
        }
    ]]); }
    return this.__ROUTES_11;
  }
  createInternal():import1.CreateModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._RouterModule_1 = new import3.RouterModule(this.parent.get(import3.ɵa,(null as any)));
    this._ɵba_2 = new import4.ɵba();
    this._ReactiveFormsModule_3 = new import4.ReactiveFormsModule();
    this._SharedComponentsModule_4 = new import5.SharedComponentsModule();
    this._SharedModule_5 = new import6.SharedModule();
    this._CreateRoutingModule_6 = new import7.CreateRoutingModule();
    this._CreateModule_7 = new import1.CreateModule();
    return this._CreateModule_7;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.RouterModule)) { return this._RouterModule_1; }
    if ((token === import4.ɵba)) { return this._ɵba_2; }
    if ((token === import4.ReactiveFormsModule)) { return this._ReactiveFormsModule_3; }
    if ((token === import5.SharedComponentsModule)) { return this._SharedComponentsModule_4; }
    if ((token === import6.SharedModule)) { return this._SharedModule_5; }
    if ((token === import7.CreateRoutingModule)) { return this._CreateRoutingModule_6; }
    if ((token === import1.CreateModule)) { return this._CreateModule_7; }
    if ((token === import2.NgLocalization)) { return this._NgLocalization_8; }
    if ((token === import4.FormBuilder)) { return this._FormBuilder_9; }
    if ((token === import4.ɵi)) { return this._ɵi_10; }
    if ((token === import3.ROUTES)) { return this._ROUTES_11; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const CreateModuleNgFactory:import0.NgModuleFactory<import1.CreateModule> = new import0.NgModuleFactory<any>(CreateModuleInjector,import1.CreateModule);