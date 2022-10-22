import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-card-books',
  templateUrl: './card-books.component.html',
  styleUrls: ['./card-books.component.scss']
})

export class CardBooksComponent implements OnInit {
  @Input() listBlock = true;

  constructor( ) { }

  ngOnInit(): void { }


}
