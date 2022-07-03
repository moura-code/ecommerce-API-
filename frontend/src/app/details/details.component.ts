import { Component, OnInit } from '@angular/core';
import { PRODUCT } from 'src/app/PRODUCT';
import { GetproductService } from 'src/app/services/getproduct.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product?:PRODUCT;
  constructor(private getproductService:GetproductService) { }

  ngOnInit(): void {
     this.getproductService.getespeci('/62c062be997246b8c7a3bf24').subscribe((product)=>{
      this.product=product

    })

  }

}
