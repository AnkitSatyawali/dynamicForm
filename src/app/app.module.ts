import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule , 
         MatCardModule , 
         MatMenuModule , 
         MatToolbarModule ,  
         MatSidenavModule , 
         MatListModule,
         MatProgressSpinnerModule,
         MatInputModule,
         MatExpansionModule,
         MatSelectModule,
         MatOptionModule
        } from '@angular/material';
import {MatIconModule } from "@angular/material/icon";
import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FormComponent } from './form/form.component';
import { FormListComponent } from './form-list/form-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    FormComponent,
    FormListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule , 
    MatMenuModule , 
    MatToolbarModule , 
    MatIconModule , 
    MatSidenavModule , 
    MatListModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
