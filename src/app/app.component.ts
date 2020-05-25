import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './view/app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp2-web';
  operande1 = 0 ;
  operande2 = 0 ;
  resultat = 0 ;
  addition() {
    this.resultat = this.operande1 + this.operande2;
  }
  soustraction() {
    this.resultat = this.operande1 - this.operande2;
  }
  multiplication() {
    this.resultat = this.operande1 * this.operande2;
  }
  division() {
    this.resultat = this.operande1 / this.operande2;
  }
}
