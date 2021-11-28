// https://app.quicktype.io/

export interface Heroe {
  // El id es opcional ?
  id?:              string;
  superhero:        string;
  publisher:        Publisher;
  alter_ego:        string;
  first_appearance: string;
  characters:       string;
  // La imagen del super heroe es opcional?
  alt_image?:       string;
}

export enum Publisher {
  DCComics = "DC Comics",
  MarvelComics = "Marvel Comics",
}
