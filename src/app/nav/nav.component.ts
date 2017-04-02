import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-nav",
    templateUrl: "./nav.html"
})
export class NavComponent implements OnInit {
    ngOnInit() {
        console.log("NavComponent initialized...");
    }
}