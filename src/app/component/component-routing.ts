
import { Routes } from '@angular/router';
import {ButtonComponent} from "./button/button.component";
import {ComponentComponent} from "./component.component";


export const ComponentRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ComponentComponent,
        data: {
          breadcrumb: 'component',
          status: true
        }
      },{
        path: 'button',
        component: ButtonComponent,
        data: {
          breadcrumb: 'button',
          status: true
        }
      }
    ]
  }
]
