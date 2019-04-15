import { Component, OnInit } from '@angular/core';
import * as WC from 'woocommerce-api';
import { RouterModule, Routes, Router } from '@angular/router';
import {NavController} from '@ionic/angular';
import { ProductCategorieService } from '../product-categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit {
  categories: any;
  Woocommerce: any;
  products: any;


  constructor(private router: Router, public navCtrl: NavController) {
    this.Woocommerce = WC({
      url: 'https://artizone.tn/',
      consumerKey: 'ck_b0ce7005aa26ef1ccc1e74d69e52e2b602b291f0',
      consumerSecret: 'cs_73b960c1f315c28a3651a9f78bfcfa49aa06bde3',
      wpAPI: true,
      version: 'wc/v2',
      queryStringAuth: true
    });
     this.Woocommerce.getAsync('products/categories').then((data) => {
       // console.log(JSON.parse(data.body));
       this.categories = JSON.parse(data.body);

    });
   }

  ngOnInit() {
  }
  async gotoproduct(catg) {
    ProductCategorieService.categProduct = {catg};
    await this.navCtrl.navigateForward('/product-catego');
  }
}
