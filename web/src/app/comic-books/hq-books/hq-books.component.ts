import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hq-books',
  templateUrl: './hq-books.component.html',
  styleUrls: [
    './hq-books.component.scss',
    '../comic-books.component.scss'
  ]
})
export class HqBooksComponent implements OnInit {

  // @Input() detailsCard: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  displayDetails() {
    this.router.navigate(['/details']);
  }

}
