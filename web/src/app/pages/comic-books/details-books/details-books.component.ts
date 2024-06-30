import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelStorageService } from 'src/app/service/api/marvel/marvel-storage.service';
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
  formatValue: any
  penciler: string;
  IdCharacters: any;
  pencilerCover: string;
  notDate = "Not registered"

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiMarvelservice: MarvelService,
    private apiMarvelStorageService: MarvelStorageService,
  ) { }

  ngOnInit(): void {
    this.characteresId();
  }

  characteresId() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.apiMarvelservice.getCharacteresId(params.id).subscribe({
        next: (resp) => {
          this.IdCharacters = resp;
          this.apiMarvelStorageService.setHqPurchased(this.IdCharacters);
        },
        error: (error) => {
          console.log('erro ', error)
        },
        complete: () => {
          const date = this.IdCharacters[0].dates;
          const price = this.IdCharacters[0].prices;
          const creators = this.IdCharacters[0].creators.items;

          if (this.IdCharacters[0].creators.items.length == 0) {
            // exibir modal - Esse card não contém as informações 
            console.log("sem dados")
          } else {
            this.treatmentCreate(creators);
          }
          this.pricesCharacteres(price);
          this.treatmentDate(date);
        }
      })
    })
  }

  treatmentDate(date: any) {
    for (let index in date) {
      const element = date[index];

      if (element.type == "digitalPurchaseDate") {
        // element.type = "onsaleDate" || "focDate" || "unlimitedDate"
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
      this.penciler = this.Others
      this.changeRole(this.penciler)
    }
    if (this.pencilerCover === undefined) {
      this.pencilerCover = this.Others
      this.changeRole(this.pencilerCover)
    }
    if (this.writer === undefined) {
      this.writer = this.Others
      this.changeRole(this.writer)
    }
    if (this.Others === undefined) {
      this.Others = 'Stan Lee'
    }
  }

  changeRole(role: string) {
    if (this.Others === undefined) {
      role = 'Stan Lee';
    } else {
      role = this.Others;
    }
  }

  pricesCharacteres(currency: any) {
    for (let index in currency) {
      const value = currency[index];

      if (value.type === "printPrice") {
        if (value.price == 0) {
          value.price = 2.99
        }

        this.formatValue = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' })
          .format(value.price)

        return this.apiMarvelStorageService.setPriceCharacter(this.formatValue);
      }
    }
  }

}
