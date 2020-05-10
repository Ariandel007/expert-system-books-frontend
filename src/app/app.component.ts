import { Component, OnInit } from '@angular/core';
import { Libro } from './_models/libro';
import { LibrosLeidosService } from './_services/libros-leidos.service';
import { LibrosRecomendadosService } from './_services/libros-recomendados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  //selecionNvageacion
  selectNav = 1;
  librosRecomendados: Libro[];
  librosLeidos: Libro[];

  user: any = {};


  constructor(private librosLeidosService: LibrosLeidosService,
              private librosRecomendadosService: LibrosRecomendadosService) {}

  ngOnInit() {
    this.loadLibrosLeidos();
    this.loadLibrosRecomendados();
  }

  getSelectNav(){
    return this.selectNav;
  }

  getUSer(){
    return this.user;
  }

  setSelectNav(n: number){
    this.selectNav = n;
    return this.selectNav;
  }

  obtenerLibrosLeidos(){

    this.librosLeidosService.postUserID(this.user).subscribe(next => {
      console.log('todo bien');
      this.loadLibrosLeidos();
    }, error => {
        console.log('error');
    });

  }

  loadLibrosLeidos() {
    this.librosLeidosService.getLibrosLeidos().subscribe((response) => {
      this.librosLeidos = response;
      console.log('todo kul');
    }, error => {
      console.log('Error');
    });
  }

  obtenerLibrosRecomendados(){

    this.librosRecomendadosService.postUserID(this.user).subscribe(next => {
      console.log('todo bien');
      this.loadLibrosRecomendados();
    }, error => {
        console.log('error');
    });

  }

  loadLibrosRecomendados() {

    this.librosRecomendadosService.getLibrosRecomendados().subscribe((response) => {
      this.librosRecomendados = response;
    }, error => {
      console.log('Error');
    });

  }

}
