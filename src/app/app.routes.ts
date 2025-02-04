import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
    {path: '', redirectTo: 'products', pathMatch: 'full'},
    {path:'products', component: ProductsComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
];
