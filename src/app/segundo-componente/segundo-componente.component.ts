import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "ASTOLFO";
  dataNascimento = "01-01-1984";
  urlImage = "/assets/tree.webp";

  mostrarDataNascimento() {
    alert(`A data de nascimento de Joao é: ${this.dataNascimento}`)
  }
}