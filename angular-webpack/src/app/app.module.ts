import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import {ClarityModule} from "@clr/angular";

@NgModule({
   imports: [BrowserModule, ClarityModule ],
   bootstrap: [ AppComponent ],
   declarations: [ AppComponent ],
   providers: [],
   exports: []

})
export class AppModule {}