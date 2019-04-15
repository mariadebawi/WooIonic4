import { Component, OnInit } from '@angular/core';
import * as WC from 'woocommerce-api';
import { RouterModule, Routes, Router } from '@angular/router';
import { ProductCategorieService } from '../product-categorie.service';

@Component({
  selector: 'app-product-catego',
  templateUrl: './product-catego.page.html',
  styleUrls: ['./product-catego.page.scss'],
})
export class ProductCategoPage implements OnInit {
  i: number ;
  categories: any;
  Woocommerce: any;
  product: any;
  product1: any[];
  slideOpts = {
    slidesPerView: 2,
  };
  myproduct: any;
  constructor(private router: Router) {
    this.Woocommerce = WC({
      url: 'https://artizone.tn/',
      consumerKey: 'ck_b0ce7005aa26ef1ccc1e74d69e52e2b602b291f0',
      consumerSecret: 'cs_73b960c1f315c28a3651a9f78bfcfa49aa06bde3',
      wpAPI: true,
      version: 'wc/v2',
      queryStringAuth: true
    });

    this.product =  ProductCategorieService.categProduct;
    console.log(this.product.catg.slug);
    this.product1 = [this.product.catg] ;

     this.Woocommerce.getAsync('products').then((data) => {
       // console.log(JSON.parse(data.body));
       this.myproduct = JSON.parse(data.body);
       console.log(this.myproduct[0].categories[0].slug);
    });
   }

  ngOnInit() {
  }

}
