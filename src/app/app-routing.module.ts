import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
    { path: '', 'title': 'Home', component: HomeComponent},
    {path:'about', 'title': 'About', component:AboutComponent},
    {path:'contact', 'title': 'Contact', component:ContactComponent},
    {path:'**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
