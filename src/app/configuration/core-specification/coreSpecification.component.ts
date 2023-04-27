import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-coreSpecification",
  templateUrl: "./coreSpecification.component.html",
  styleUrls: ["./coreSpecification.component.css"],
})
export class CoreSpecificationComponent implements OnInit {
  modelYear:string="";
  modelName:string="";
  engineType:string="";
  salesVersion:string="";
  transmission:string="";
  streeingDetails:string="";
  marketingCode:string="";
  ngOnInit() {
  }
}
