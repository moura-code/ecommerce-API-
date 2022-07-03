import { Component, OnInit } from '@angular/core';

import { GetproductService } from 'src/app/services/getproduct.service';
import { PRODUCT } from 'src/app/PRODUCT';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:PRODUCT[]=[]

  constructor(private getproductService:GetproductService) { }

  ngOnInit(): void {
    this.getproductService.getproducts().subscribe((product)=>{this.products=product});
  }

}
