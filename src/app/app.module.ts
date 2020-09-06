import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { TopnavComponent } from './my-component/topnav/topnav.component';
import { HeaderComponent } from './my-component/header/header.component';
import { HomeComponent } from './my-component/home/home.component';
import { AboutComponent } from './my-component/about/about.component';
import { ContactComponent } from './my-component/contact/contact.component';
import { ApplyforjobComponent } from './my-component/applyforjob/applyforjob.component';
import { LoginComponent } from './my-component/login/login.component';
import { PageNotFoundComponent } from './my-component/page-not-found/page-not-found.component';
import { TechnologyComponent} from './my-component/technology/technology.component';
import { AndroidComponent } from './my-component/technology/android/android.component';
import { AngularComponent } from './my-component/technology/angular/angular.component';
import { PHPComponent } from './my-component/technology/php/php.component';
import { WordpressComponent } from './my-component/technology/wordpress/wordpress.component';
import { ASPComponent } from './my-component/technology/asp/asp.component';
import { PremiumintenshipComponent } from './my-component/premiumintenship/premiumintenship.component';
import { ChildComponent } from './my-component/child/child.component';

const router : Routes = [{
  path : '', redirectTo : 'login', pathMatch : 'full'
},
{
  path : 'home', component : HomeComponent 
},
{
  path : 'login' ,component : LoginComponent
},
{
  path : 'header', component : HeaderComponent
},
{
  path : 'about', component : AboutComponent , children : [
  {
    path : '' ,component : AboutComponent
  },
  {
    path : 'android' , component : AndroidComponent
  },
  {
    path : 'angular', component : AngularComponent
  },
  {
    path : 'PHP' , component : PHPComponent
  },
  {
    path : 'wordpress', component : WordpressComponent
  },
  {
    path : 'ASP' , component : ASPComponent
  }]
},
{
  path : 'contact', component : ContactComponent
},
{
  path : 'applyforjob', component : ApplyforjobComponent
},
{
  path : 'technology', component : TechnologyComponent, children : [
    
    {
      path : 'android' , component : AndroidComponent
    },
    {
      path : 'angular', component : AngularComponent
    },
    {
      path : 'PHP' , component : PHPComponent
    },
    {
      path : 'wordpress', component : WordpressComponent
    },
    {
      path : 'ASP' , component : ASPComponent
    }
  ]
},
{
  path : 'premium' , component : PremiumintenshipComponent
},
{
  path : '**',component : PageNotFoundComponent
}]


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    TopnavComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    ApplyforjobComponent,
    LoginComponent,
    PageNotFoundComponent,
    AndroidComponent,
    TechnologyComponent,
    AngularComponent,
    PHPComponent,
    WordpressComponent,
    ASPComponent,
    PremiumintenshipComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent,FormsModule]
})
export class AppModule { }
