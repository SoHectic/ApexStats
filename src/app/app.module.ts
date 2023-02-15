import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import { WeaponTableComponent } from './weapon-table/weapon-table.component';
import {MatSortModule} from "@angular/material/sort";
import {MatToolbarModule} from "@angular/material/toolbar";
import { LegendsInfoComponent } from './legends-info/legends-info.component';

@NgModule({
  declarations: [
    AppComponent,
    WeaponTableComponent,
    LegendsInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatPaginatorModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
