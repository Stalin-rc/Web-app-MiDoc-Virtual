import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  desplegado = true;
  constructor() { }

  ngOnInit(): void {

    if (window.screen.width <= 700) {
      this.desplegado = false;
    }
  }

  desplegar() {
    this.desplegado = !this.desplegado;
  }

  
}
