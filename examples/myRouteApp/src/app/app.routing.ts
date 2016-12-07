import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

const APP_ROUTES:Routes = [
    { path: 'products', component: ProductsComponent },
    { path: '', component: HomeComponent },
];

//register the routes in built-in router module
export const routing = RouterModule.forRoot(APP_ROUTES);