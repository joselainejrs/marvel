import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelService } from 'src/app/service/api/marvel/marvel.service';

@Component({
  selector: 'app-details-books',
  templateUrl: './details-books.component.html',
  styleUrls: [
    './details-books.component.scss']
})
export class DetailsBooksComponent implements OnInit {
  IdCharacters: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private marvelServiceId: MarvelService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.activatedRoute.params.subscribe((params: any) => {
      this.marvelServiceId.getCharacteresId(params.id).subscribe({
        next: (resp) => {
          this.IdCharacters = resp
          console.log(resp)
        },
        error: (error) => {
          console.log('erro ', error)
        }
      })
    })

  }

}
