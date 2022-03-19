import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  card: any = {
    titulo: 'Meu Card',
    descricao:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    imagemUrl: 'https://www.fillmurray.com/640/360',
  };

  contador = 0;

  error: boolean = false;

  constructor() {}

  getAlertColor() {
    return 'alert-danger';
  }

  onButtonClick() {
    this.contador++;
  }

  onClick(evento) {
    console.log(evento);
    this.card.titulo = 'Clicou!';
  }
}
