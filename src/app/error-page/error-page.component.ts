import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;


  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    // use snapshot approach if the page doesn't change while running
    // this.errorMessage = this.route.snapshot.data['message'];

    // if it changes while you're on this page
    this.route.data.subscribe(
      (data: Data) => {
        this.errorMessage = data['message'];
      }
    );
  }

}
