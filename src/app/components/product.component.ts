import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck } from "@angular/core";
import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent implements DoCheck, OnInit{

    @Input() product: Product;
    @Output() productAddCart: EventEmitter<any> = new EventEmitter();


    today = new Date();

    
    constructor(){
        console.log('constructor');
    }



    ngOnInit(){
        console.log('3. OnInit');
    }

    ngDoCheck(){
        console.log('4. ngDoCheck');
    }

    addCart() {
        console.log('Agregando al carro');
        this.productAddCart.emit(this.product.id);
    }
}