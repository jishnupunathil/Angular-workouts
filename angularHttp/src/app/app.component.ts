import { ProductService } from './../services/product.service';

import { Component, OnInit } from '@angular/core';

import { Products } from 'src/products';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularHttp';
  allProduct:Products[]=[]


  constructor(private productService:ProductService){}


  ngOnInit(): void {
      this.fetchProduct()

      console.log(this.allProduct);
      
  }

  onProductsFetch(){
    this.fetchProduct()
  }

  onProductSubmit(product:Products[]){

    this.productService.createProduct(product)
   
  }


  private fetchProduct(){

    this.productService.fetchProduct().subscribe((res)=>{

      console.log(res);
      this.allProduct=res
  
      })
    
  }


  onDeleteProd(id:string){
    this.productService.deleteProduct(id)
    
  }

  onDeleteAll(){
    this.productService.deletaAllProduct()
  }
}
