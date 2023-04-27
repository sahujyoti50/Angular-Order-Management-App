import { Routes, RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { ConfigurationComponent } from "./configuration/configuration.component";
import { CoreSpecificationComponent } from "./configuration/core-specification/coreSpecification.component";
import { ColorSpecificationComponent } from "./configuration/color-specification/colorSpecification.component";
import { SelectionPreviewComponent } from "./configuration/core-specification/SelectionPreview/selectionPreview.component";

const routes: Routes = [
  { path: "coreSpecs", component: CoreSpecificationComponent },
  { path: "color", component: ColorSpecificationComponent },
  { path: "selectionPreview", component: SelectionPreviewComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ConfigurationComponent,
    CoreSpecificationComponent
  ],
  imports: [BrowserModule, FormsModule,RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
