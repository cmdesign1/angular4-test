/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core';
import * as import1 from './discover-routing.module';
import * as import2 from '@angular/router';
import * as import3 from './discover.component.ngfactory';
import * as import4 from './discover.component';
class DiscoverRoutingModuleInjector extends import0.ɵNgModuleInjector<import1.DiscoverRoutingModule> {
  _RouterModule_0:import2.RouterModule;
  _DiscoverRoutingModule_1:import1.DiscoverRoutingModule;
  __ROUTES_2:any[];
  constructor(parent:import0.Injector) {
    super(parent,[import3.DiscoverComponentNgFactory],([] as any[]));
  }
  get _ROUTES_2():any[] {
        if ((this.__ROUTES_2 == null)) { (this.__ROUTES_2 = [[{
          path: 'discover',
          component: import4.DiscoverComponent
        }
    ]]); }
    return this.__ROUTES_2;
  }
  createInternal():import1.DiscoverRoutingModule {
    this._RouterModule_0 = new import2.RouterModule(this.parent.get(import2.ɵa,(null as any)));
    this._DiscoverRoutingModule_1 = new import1.DiscoverRoutingModule();
    return this._DiscoverRoutingModule_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.RouterModule)) { return this._RouterModule_0; }
    if ((token === import1.DiscoverRoutingModule)) { return this._DiscoverRoutingModule_1; }
    if ((token === import2.ROUTES)) { return this._ROUTES_2; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const DiscoverRoutingModuleNgFactory:import0.NgModuleFactory<import1.DiscoverRoutingModule> = new import0.NgModuleFactory<any>(DiscoverRoutingModuleInjector,import1.DiscoverRoutingModule);