import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { MyoneComponent } from './components/myone/myone.component';
import { MytwoComponent } from './components/mytwo/mytwo.component';
import { HtmlattributeComponent } from './components/htmlattribute/htmlattribute.component';
import { DomattributeComponent } from './components/domattribute/domattribute.component';
import { ClassattributeComponent } from './components/classattribute/classattribute.component';
import { StyleattributeComponent } from './components/styleattribute/styleattribute.component';
import { TemplateComponent } from './components/template/template.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { TwowayDataComponent } from './components/twoway-data/twoway-data.component';


@NgModule({
  declarations: [
    AppComponent,
   
    MyoneComponent,
   
    MytwoComponent,
   
    HtmlattributeComponent,
   
    DomattributeComponent,
   
    ClassattributeComponent,
   
    StyleattributeComponent,
   
    TemplateComponent,
   
    NgForComponent,
   
    TwowayDataComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
