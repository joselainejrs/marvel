import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hq-books',
  templateUrl: './hq-books.component.html',
  styleUrls: [ './hq-books.component.scss' ]
})
export class HqBooksComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void { }

  toggle() {
    return this.router.navigate(['/comic/hqdetails']);
  }
}
