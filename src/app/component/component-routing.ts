
import { Routes } from '@angular/router';
import {ButtonComponent} from "./button/button.component";
import {ComponentComponent} from "./component.component";
import { TableComponent } from './table/table.component';


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
      },{
        path: 'table',
        component: TableComponent,
        data: {
          breadcrumb: 'table',
          status: true
        }
      }
    ]
  }
]
