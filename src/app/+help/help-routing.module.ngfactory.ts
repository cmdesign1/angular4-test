/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core';
import * as import1 from './help-routing.module';
import * as import2 from '@angular/router';
import * as import3 from './help.component.ngfactory';
import * as import4 from './faq/faq.component.ngfactory';
import * as import5 from './support/support.component.ngfactory';
import * as import6 from './help.component';
import * as import7 from './faq/faq.component';
import * as import8 from './support/support.component';
class HelpRoutingModuleInjector extends import0.ɵNgModuleInjector<import1.HelpRoutingModule> {
  _RouterModule_0:import2.RouterModule;
  _HelpRoutingModule_1:import1.HelpRoutingModule;
  __ROUTES_2:any[];
  constructor(parent:import0.Injector) {
    super(parent,[
      import3.HelpComponentNgFactory,
      import4.FaqComponentNgFactory,
      import5.SupportComponentNgFactory
    ]
    ,([] as any[]));
  }
  get _ROUTES_2():any[] {
      if ((this.__ROUTES_2 == null)) { (this.__ROUTES_2 = [[
        {
          path: 'help',
          component: import6.HelpComponent
        }
        ,
        {
          path: 'help/faq',
          component: import7.FaqComponent
        }
        ,
        {
          path: 'help/support',
          component: import8.SupportComponent
        }

      ]
    ]); }
    return this.__ROUTES_2;
  }
  createInternal():import1.HelpRoutingModule {
    this._RouterModule_0 = new import2.RouterModule(this.parent.get(import2.ɵa,(null as any)));
    this._HelpRoutingModule_1 = new import1.HelpRoutingModule();
    return this._HelpRoutingModule_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.RouterModule)) { return this._RouterModule_0; }
    if ((token === import1.HelpRoutingModule)) { return this._HelpRoutingModule_1; }
    if ((token === import2.ROUTES)) { return this._ROUTES_2; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const HelpRoutingModuleNgFactory:import0.NgModuleFactory<import1.HelpRoutingModule> = new import0.NgModuleFactory<any>(HelpRoutingModuleInjector,import1.HelpRoutingModule);