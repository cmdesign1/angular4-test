/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './app.component.css.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from './shared/components/nav/nav.component.ngfactory';
import * as import3 from './shared/components/nav/nav.component';
import * as import4 from './auth/models/auth.model.service';
import * as import5 from '@angular/router';
import * as import6 from './shared/components/footer/footer.component.ngfactory';
import * as import7 from './shared/components/footer/footer.component';
import * as import8 from '@angular/forms';
import * as import9 from '@angular/common';
import * as import10 from './app.component';
import * as import11 from '../modules/transfer-state/transfer-state';
const styles_AppComponent:any[] = [import0.styles];
export const RenderType_AppComponent:import1.RendererTypeV2 = import1.ɵcrt({
  encapsulation: 0,
  styles: styles_AppComponent,
  data: {}
}
);
function View_AppComponent_1():import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    import1.ɵeld(0,(null as any),(null as any),6,'header',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import1.ɵted((null as any),['\n  ']),
    import1.ɵeld(0,(null as any),(null as any),1,'main-nav',([] as any[]),(null as any),(null as any),(null as any),import2.View_MainNavComponent_0,import2.RenderType_MainNavComponent),
    import1.ɵdid(90112,(null as any),0,import3.MainNavComponent,[
      import4.AuthModelService,
      import5.Router
    ]
    ,(null as any),(null as any)),
    import1.ɵted((null as any),['\n  ']),
    import1.ɵted((null as any),['\n  ']),
    import1.ɵted((null as any),['\n'])
  ]
  ,(null as any),(null as any));
}
function View_AppComponent_2():import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    import1.ɵeld(0,(null as any),(null as any),5,'footer',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import1.ɵted((null as any),['\n  ']),
    import1.ɵted((null as any),['\n  ']),
    import1.ɵeld(0,(null as any),(null as any),1,'main-footer',([] as any[]),(null as any),(null as any),(null as any),import6.View_MainFooterComponent_0,import6.RenderType_MainFooterComponent),
    import1.ɵdid(24576,(null as any),0,import7.MainFooterComponent,[import8.FormBuilder],(null as any),(null as any)),
    import1.ɵted((null as any),['\n'])
  ]
  ,(null as any),(null as any));
}
export function View_AppComponent_0():import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_AppComponent_1),
    import1.ɵdid(8192,(null as any),0,import9.NgIf,[
      import1.ViewContainerRef,
      import1.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    import1.ɵted((null as any),['\n']),
    import1.ɵeld(0,(null as any),(null as any),5,'main',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import1.ɵted((null as any),['\n  ']),
    import1.ɵted((null as any),['\n  ']),
    import1.ɵeld(8388608,(null as any),(null as any),1,'router-outlet',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import1.ɵdid(73728,(null as any),0,import5.RouterOutlet,[
      import5.RouterOutletMap,
      import1.ViewContainerRef,
      import1.ComponentFactoryResolver,
      [
        8,
        (null as any)
      ]

    ]
    ,(null as any),(null as any)),
    import1.ɵted((null as any),['\n']),
    import1.ɵted((null as any),['\n']),
    import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_AppComponent_2),
    import1.ɵdid(8192,(null as any),0,import9.NgIf,[
      import1.ViewContainerRef,
      import1.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any))
  ]
  ,(check,view) => {
    var comp:import10.AppComponent = view.component;
    const currVal_0:boolean = (!comp._router.url.includes('login') && !comp._router.url.includes('signup'));
    check(view,1,0,currVal_0);
    const currVal_1:boolean = (!comp._router.url.includes('login') && !comp._router.url.includes('signup'));
    check(view,11,0,currVal_1);
  },(null as any));
}
const RenderType_AppComponent_Host:import1.RendererTypeV2 = import1.ɵcrt({
  encapsulation: 2,
  styles: ([] as any[]),
  data: {}
}
);
function View_AppComponent_Host_0():import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    import1.ɵeld(0,(null as any),(null as any),1,'app',([] as any[]),(null as any),(null as any),(null as any),View_AppComponent_0,RenderType_AppComponent),
    import1.ɵdid(57344,(null as any),0,import10.AppComponent,[
      import4.AuthModelService,
      import5.Router,
      import11.TransferState
    ]
    ,(null as any),(null as any))
  ]
  ,(check,view) => {
    check(view,1,0);
  },(null as any));
}
export const AppComponentNgFactory:import1.ComponentFactory<import10.AppComponent> = import1.ɵccf('app',import10.AppComponent,View_AppComponent_Host_0);