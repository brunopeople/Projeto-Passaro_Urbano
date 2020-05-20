import { Component, OnInit } from '@angular/core';
import {Oferta} from '../shared/oferta.model'
import {OfertasService} from '../ofertas.service'

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [ OfertasService ]
})
export class RestaurantesComponent implements OnInit {

	public ofertas: Oferta[]

  public dataTeste: any = new Date(2017, 8, 30)

  constructor(private OfertasService: OfertasService) { }

  ngOnInit() {

  	/*
  	*instanciar o método getOfertasPorCategoria na classe ofertasService no componente restaurantes
  	 com isto 
  	**/
  	this.OfertasService.getOfertasPorCategoria('restaurante')
  		.then((ofertas: Oferta[]) => {
  			this.ofertas = ofertas 
  		})
  }

}
