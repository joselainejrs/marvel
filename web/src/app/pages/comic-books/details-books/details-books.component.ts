import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICreators } from 'src/app/interfaces/marvel';
import { MarvelService } from 'src/app/service/api/marvel/marvel.service';

@Component({
  selector: 'app-details-books',
  templateUrl: './details-books.component.html',
  styleUrls: [
    './details-books.component.scss']
})
export class DetailsBooksComponent implements OnInit {
  date: any;
  writer: string;
  Others: string;
  penciler: string;
  IdCharacters: any;
  pencilerCover: string;
  notDate = "Not registered"

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiMarvelservice: MarvelService
  ) { }

  ngOnInit(): void {
    this.characteresId();
  }

  characteresId() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.apiMarvelservice.getCharacteresId(params.id).subscribe({
        next: (resp) => {
          this.IdCharacters = resp
          const date = this.IdCharacters[0].dates;
          const creators = this.IdCharacters[0].creators.items;

          this.treatmentDate(date);
          this.treatmentCreate(creators);

        },
        error: (error) => {
          console.log('erro ', error)
        }
      })
    })
  }

  treatmentDate(date: any) {
    for (let index in date) {
      const element = date[index];

      if (element.type === "digitalPurchaseDate") {
        let formatter = Intl.DateTimeFormat("en-US", {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
        this.date = formatter.format(new Date(element.date))
      } else {
        this.date = this.notDate
      }
    }
  }

  treatmentCreate(creators: any) {
    for (let index in creators) {
      const create = creators[index];
      switch (create.role) {
        case 'penciller (cover)':
          this.pencilerCover = create.name
          break;
        case 'penciller':
          this.penciler = create.name
          break;
        case 'writer':
          this.writer = create.name
          break;
        case 'editor':
          this.Others = create.name
          break;
        default:
          break;
      }

      this.dateUndefined();

      //TODO : EM CASO DE RETORNO VAZIO INCLUIR A VARIAVÉL
      if (!creators) {
        console.log('entrou vazio')
      }

    }
  }

  dateUndefined() {
    if (this.penciler === undefined) {
      this.penciler = this.notDate;
    }
    if (this.pencilerCover === undefined) {
      this.pencilerCover = this.notDate;
    }
    if (this.writer === undefined) {
      this.writer = this.notDate;
    }
    if (this.Others === undefined) {
      this.Others = this.notDate
    }
  }

}
