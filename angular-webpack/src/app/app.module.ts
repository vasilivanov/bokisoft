import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
   imports: [BrowserModule],
   bootstrap: [ AppComponent ],
   declarations: [ AppComponent ],
   providers: [],
   exports: []

})
export class AppModule {}