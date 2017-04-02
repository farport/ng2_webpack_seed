import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.html",
  styleUrls: ['./profile.css']
})
export class ProfileComponent implements OnInit {
    ngOnInit() {
        console.log("ProfileComponent initialized...");
    }
}