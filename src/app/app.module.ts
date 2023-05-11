import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MultiSelectBoxComponent } from "./multi-select-box/multi-select-box";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [AppComponent, MultiSelectBoxComponent],
  imports: [BrowserModule, CommonModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
