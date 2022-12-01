import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CandidateTableComponent } from './candidate/candidate-table/candidate-table.component';
import { AppRoutingModule } from './app-routing.module';
import { TableModule } from 'primeng/table';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ButtonModule } from 'primeng/button';
import { RejectedTableComponent } from './candidate/rejected-table/rejected-table.component';
import { AcceptedTableComponent } from './candidate/accepted-table/accepted-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateTableComponent,
    SideBarComponent,
    RejectedTableComponent,
    AcceptedTableComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ButtonModule,
    TableModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
