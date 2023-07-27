import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICreators } from 'src/app/interfaces/marvel';
import { MarvelService } from 'src/app/service/api/marvel/marvel.service';
@Component({
  selector: 'app-hq-books',
  templateUrl: './hq-books.component.html',
  styleUrls: [ './hq-books.component.scss' ]
})
export class HqBooksComponent implements OnInit {
  allCharacters: any;
  
  constructor(
    private apiMarvelservice: MarvelService,
    private router: Router
  ) { }

  ngOnInit(): void {this.listHqMarvel()}

  listHqMarvel() {
    this.apiMarvelservice.getCharacteres().subscribe({
      next: (resp) => {
        if (resp && resp !== null) {
          this.allCharacters = resp;
          console.log(this.allCharacters)
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
