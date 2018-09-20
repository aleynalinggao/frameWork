
import { Routes } from '@angular/router';
import {LoginComponent} from "./login.component";

export const LogindRoutes: Routes = [{
  path: '',
  data: {
    breadcrumb: 'Login'
  },
  component: LoginComponent
}];
