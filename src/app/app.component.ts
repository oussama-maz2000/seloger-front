import { Component } from '@angular/core';
import { TypeImmobilier } from './core/model/type-immobilier.enum';
import { Property } from './core/model/property.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'seLoger';
  /* appartements: Array<Property> = [
    {
      propType: TypeImmobilier.Maison,
      price: 2000,
      caractéristiques: ['3 pieces', '2 chambrs', '39 m²', 'etage 3/6'],
      willaya: 'Batna',
      address: 'cite 5 juillet',
      images: [
        '../../../../assets/maison/photo-01.webp',
        '../../../../assets/maison/photo-02.webp',
        '../../../../assets/maison/photo-03.webp',
      ],
      description:
        "Co-exclusivité LBI ! Quartier Garibaldi, au troisième étage d'un bel immeuble ancien, appartement traversant de type 3 pièces transformable en grand T2 composé d'un séjour avec cuisine ouverte, de deux chambres, et d'une salle d'eau avec wc",
    },
    {
      propType: "Maison",
      price: 2000,
      caractéristiques: ['3 pieces', '2 chambrs', '39 m²', 'etage 3/6'],
      willaya: 'Batna',
      address: 'cite 5 juillet',
      images: [
        '../../../../assets/maison/photo-04.webp',
        '../../../../assets/maison/photo-05.webp',
        '../../../../assets/maison/photo-06.webp',
      ],
      description:
        "Co-exclusivité LBI ! Quartier Garibaldi, au troisième étage d'un bel immeuble ancien, appartement traversant de type 3 pièces transformable en grand T2 composé d'un séjour avec cuisine ouverte, de deux chambres, et d'une salle d'eau avec wc",
    },
    {
      propType: TypeImmobilier.Maison,
      price: 2000,
      caractéristiques: ['3 pieces', '2 chambrs', '39 m²', 'etage 3/6'],
      willaya: 'Batna',
      address: 'cite 5 juillet',
      images: [
        '../../../../assets/maison/photo-01.webp',
        '../../../../assets/maison/photo-02.webp',
        '../../../../assets/maison/photo-03.webp',
      ],
      description:
        "Co-exclusivité LBI ! Quartier Garibaldi, au troisième étage d'un bel immeuble ancien, appartement traversant de type 3 pièces transformable en grand T2 composé d'un séjour avec cuisine ouverte, de deux chambres, et d'une salle d'eau avec wc",
    },
    {
      propType: TypeImmobilier.Maison,
      price: 2000,
      caractéristiques: ['3 pieces', '2 chambrs', '39 m²', 'etage 3/6'],
      willaya: 'Batna',
      address: 'cite 5 juillet',
      images: [
        '../../../../assets/maison/photo-04.webp',
        '../../../../assets/maison/photo-05.webp',
        '../../../../assets/maison/photo-06.webp',
      ],
      description:
        "Co-exclusivité LBI ! Quartier Garibaldi, au troisième étage d'un bel immeuble ancien, appartement traversant de type 3 pièces transformable en grand T2 composé d'un séjour avec cuisine ouverte, de deux chambres, et d'une salle d'eau avec wc",
    },
  ]; */
}
