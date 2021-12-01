import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroe';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_image: ''
  }

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  guardarHeroe() {
    if (this.heroe.superhero.trim().length == 0) return

    this.heroesService.saveHeroe(this.heroe).subscribe(heroe => {
      console.log('Heroe agregado', heroe)
    })
  }

}
