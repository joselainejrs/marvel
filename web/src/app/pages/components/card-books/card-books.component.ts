import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card-books',
  templateUrl: './card-books.component.html',
  styleUrls: ['./card-books.component.scss']
})
export class CardBooksComponent implements OnInit {
  listBlock = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void { }

  toggle() {
    this.listBlock = false;
    return this.router.navigate(['/comic/hqdetails']);
  }
}
