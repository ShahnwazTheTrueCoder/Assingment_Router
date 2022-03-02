import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { details } from './details';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  objdtail: details[] = [
    {
      id: 1,
      name: 'realme C12',
      price: 8999,
      details:["3 GB RAM | 32 GB ROM | Expandable Upto 256 GB", "16.56 cm (6.52 inch) HD+ Display","13MP + 2MP + 2MP | 5MP Front Camera","6000 mAh Lithium-ion Battery","Mediatek Helio G35 Processor"],
      img: "assets/realme-c12.jpg"
    },
    {
      id: 2,
      name: 'realme C12y',
      price: 9999,
      details:["3 GB RAM | 32 GB ROM | Expandable Upto 256 GB","16.51 cm (6.5 inch) HD+ Display","13MP + 2MP + 2MP | 5MP Front Camera","5000 mAh Battery","Unisoc T610 Processor"],
      img: 'assets/realme-C21Y.jpg'
    },
    {
      id: 3,
      name: 'realme Narzo 30a',
      price: 9999,
      details:["4 GB RAM | 64 GB ROM | Expandable Upto 256 GB","16.54 cm (6.51 inch) HD+ Display","13MP + 2MP | 8MP Front Camera","6000 mAh Battery","MediaTek Helio G85 Processor"],
      img: 'assets/realme narzo 30a.png'
    },
    {
      id: 4,
      name: 'realme Narzo 50',
      price: 10999,
      details:["4 GB RAM | 64 GB ROM | Expandable Upto 256 GB","16.51 cm (6.5 inch) HD+ Display","50MP + 2MP + 2MP | 8MP Front Camera","6000 mAh Battery","MediaTek Helio G85 Processor"],
      img: 'assets/Narzo_50.jpg'
    },
  ];

  idFromprod: number;
  constructor(private router: ActivatedRoute) {
    // this.router.params.subscribe(data =>{
    //   this.idFromprod=Number(data.id);
    // })
    this.idFromprod = Number(this.router.snapshot.params.id);
    console.log('routdata', this.idFromprod);
  }

  ngOnInit(): void {
    console.log("skndla=>",this.objdtail, typeof this.objdtail[0].img)
  }
}
