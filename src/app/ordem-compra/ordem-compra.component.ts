import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = ''
  public numero: string = ''
  public complemento: string = ''
  public formaPagamento: string = ''

  constructor() { }

  ngOnInit() {
  }

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco
    console.log(this.endereco)
  }

  public atualizarNumero(numero: string): void {
    this.numero = numero
    console.log(this.numero)
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento
    console.log(this.complemento)
  }

  public atualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento
    console.log(this.formaPagamento)
  }

}
