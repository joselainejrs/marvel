import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarvelService } from 'src/app/service/api/marvel/marvel.service';
@Component({
  selector: 'app-card-books',
  templateUrl: './card-books.component.html',
  styleUrls: ['./card-books.component.scss']
})

export class CardBooksComponent implements OnInit {
  @Input() listHq = true;
  allCharacters: any;

  constructor(
    private apiMarvelservice: MarvelService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.listHqMarvel();
  }

  listHqMarvel() {
    this.apiMarvelservice.getCharacteres().subscribe({
      next: (resp) => {
        if (resp && resp !== null && resp.length !== 0) {
          this.allCharacters = resp;
          console.log(this.allCharacters);
        }
      },
      error: (error) => {
        console.log('erro ', error)
      }
    })
  }

  toggle(id: number) {
    return this.router.navigate([`/comic/hqdetails/${id}`]);
  }

}
