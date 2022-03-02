import { Component, OnInit } from '@angular/core';
import { product } from './products';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  objprod:product[]=[
    {
      prodId:1,
      name:'realme C12',
      price:8999,
      btnview:true
    },
    {
      prodId:2,
      name:'realme C12y',
      price:9999,
      btnview:true
    },
    {
      prodId:3,
      name:'realme Narzo 30a',
      price:9999,
      btnview:true
    },
    {
      prodId:4,
      name:'realme Narzo 50',
      price:10999,
      btnview:true
    }
  ]
  constructor() { }
  view(){
    alert("this is gonna happen")
  }

  ngOnInit(): void {
  }

}
