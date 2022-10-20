import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card-books',
  templateUrl: './card-books.component.html',
  styleUrls: [ './card-books.component.scss' ]
})
export class CardBooksComponent implements OnInit {
  // details = false;
  
  // @Output() displayDetailsCard = new EventEmitter();
  // @Output() displayDetailsCard = new EventEmitter();
  comicBooks = true;
  
  @Input() item = false;

  // @Output() detailsCard: this.comicBooks = false;

  constructor( 
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  displayDetails() {
    this.router.navigate(['/comic/hqdetails']);
  }
}
