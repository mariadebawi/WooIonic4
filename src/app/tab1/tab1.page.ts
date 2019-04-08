import { Component, ViewChild } from '@angular/core';
import * as WC from 'woocommerce-api';
import {IonSlides} from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  Woocommerce: any;
  public products;
  product0 ; price0 ; src0 ;
  product1 ; price1 ; src1;
  product2 ; price2 ; src2 ;
  product3 ; price3 ; src3 ;
  product4 ; price4 ; src4 ;

  product5 ; price5 ; src5 ;
  product6 ; price6 ; src6 ;
  product7 ; price7 ; src7;
  product8 ; price8 ; src8 ;
  product9 ; price9 ; src9 ;
  productsMore: any[];
  page: number;
  slideOpts = {
    slidesPerView: 3,
    spaceBetween: 5
  };
  constructor() {
    this.page = 2;
    this.Woocommerce = WC({
      url: 'https://artizone.tn/',
      consumerKey: 'ck_b0ce7005aa26ef1ccc1e74d69e52e2b602b291f0',
      consumerSecret: 'cs_73b960c1f315c28a3651a9f78bfcfa49aa06bde3',
      wpAPI: true,
      version: 'wc/v2',
      queryStringAuth: true
    });

    this.Woocommerce.getAsync('products').then((data) => {
       console.log(JSON.parse(data.body));
      this.products = JSON.parse(data.body);

      this.product0 = this.products[0].name;
      this.price0 = this.products[0].price;
      this.src0 = this.products[0].images[0].src;
      console.log(this.product0);
      console.log(this.products[0].images[0].src);
       //
      this.product1 = this.products[1].name;
      this.price1 = this.products[1].price;
      this.src1 = this.products[1].images[0].src;
      console.log(this.products[1].images[0].src);
      //
       this.product2 = this.products[2].name;
      this.price2 = this.products[2].price;
      this.src2 = this.products[2].images[0].src;

      //
       this.product3 = this.products[3].name;
      this.price3 = this.products[3].price;
      this.src3 = this.products[3].images[0].src;
      //
      this.product4 = this.products[4].name;
      this.price4 = this.products[4].price;
      this.src4 = this.products[4].images[0].src;
      //
      this.product5 = this.products[5].name;
      this.price5 = this.products[5].price;
      this.src5 = this.products[5].images[0].src;
       //
       this.product6 = this.products[6].name;
       this.price6 = this.products[6].price;
       this.src6 = this.products[6].images[0].src;
       //
       this.product7 = this.products[7].name;
       this.price7 = this.products[7].price;
       this.src7 = this.products[7].images[0].src;
       //
      this.product8 = this.products[8].name;
      this.price8 = this.products[8].price;
      this.src8 = this.products[8].images[0].src;
       //
      this.product9 = this.products[9].name;
      this.price9 = this.products[9].price;
      this.src9 = this.products[9].images[0].src;
    }, (err) => {
      console.log(err);
    });
  }
  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
}
