import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
      this.route.params.subscribe((params: Params) =>{
        const id = params["id"];
        console.log(id)
        this.fetchProduct(id);
        //this.product = this.productsService.getProduct(id);
        
      });
  }

  fetchProduct(id: string){
    this.productsService.getProduct(id)
    .subscribe(product => {
      this.product = product;
    });
  }

  createProduct(){
    const NewProduct: Product = {
      "id": "300",
      "image": "assets/images/camiseta.png",
      "title": "Camiseta",
      "price": 80000,
      "description": "Dev"
    }

    this.productsService.createProduct(NewProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  updateProduct(){
    const productUpdated: Partial<Product> = {
      "price": 20000,
      "description": "Nueva Descrip"
    }

    this.productsService.updateProduct('2',productUpdated)
    .subscribe(product => {
      console.log(product);
    });
  
  }

  deleteProduct(){
    this.productsService.deleteProduct('50')
    .subscribe(product => {
      console.log(product);
    });
  }
}
