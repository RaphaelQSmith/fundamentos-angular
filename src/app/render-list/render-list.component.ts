import { Component, OnInit } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-render-list',
  templateUrl: './render-list.component.html',
  styleUrls: ['./render-list.component.css']
})
export class RenderListComponent {
  celulares: Celular[] = [
    {id:1, nome:"XL", descricao: "Big cellphone", esgotado: false},
    {id:2, nome:"L", esgotado: false},
    {id:3, nome:"S", descricao: "Small cellphone", esgotado: true}
  ]
}
