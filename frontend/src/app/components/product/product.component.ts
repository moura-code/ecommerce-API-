import { Component, OnInit ,Input} from '@angular/core';
import { PRODUCT } from 'src/app/PRODUCT';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

@Input() product!: PRODUCT;

  constructor() { }

  ngOnInit(): void {

  }

}
