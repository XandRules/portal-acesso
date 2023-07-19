import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

produtos = [
  {
    "id": 1,
    "name": "Jaleco",
    "description": "Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
    "price": "R$ 999,99",
    "available": true,
    "estoque": 12
  },
  {
    "id": 2,
    "name": "Avental",
    "description": "Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
    "price": "R$ 999,99",
    "available": true,
    "estoque": 12
  },
  {
    "id": 3,
    "name": "Touca",
    "description": "Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
    "price": "R$ 999,99",
    "available": true,
    "estoque": 16
  },
  {
    "id": 4,
    "name": "Fronha",
    "description": "Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
    "price": "R$ 999,99",
    "available": true,
    "estoque": 11
  },
  {
    "id": 5,
    "name": "Embalagem",
    "description": "Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
    "price": "R$ 999,99",
    "available": true,
    "estoque": 128
  },
  {
    "id": 6,
    "name": "Porta talher",
    "description": "Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
    "price": "R$ 999,99",
    "available": true,
    "estoque": 128
  },
  {
    "id": 7,
    "name": "Porta absorvente",
    "description": "Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
    "price": "R$ 999,99",
    "available": true,
    "estoque": 11
  }
]


}
