import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Products } from "src/products";

@Injectable({providedIn:'root'})

export class ProductService{

    constructor(private http:HttpClient){}

    createProduct(products:Products[]){

        const header=new HttpHeaders({myHeader:'jishnuAngular'})

        this.http.post('http://localhost:3000/products',products,{headers:header})
        .subscribe((res)=>{
          console.log('data stored:',res);
          
    
        },(error)=>{
          console.log('error while storing:'+error);
          
        })

    }

    fetchProduct(){

       return this.http.get<{[key:string]:Products}>('http://localhost:3000/products')
    .pipe(map((res)=>{

      const product=[]

      for(const key in res){
        if(res.hasOwnProperty(key)){
          product.push({...res[key],id:key})
        }
      }
      return product
    }))
    

    }

    deleteProduct(id:string){

        this.http.delete('http://localhost:3000/products/'+id).subscribe((res)=>{
      console.log('product deleted',res);
      
    })


    }

    deletaAllProduct(){

        this.http.delete('http://localhost:3000/products').subscribe((res)=>{
      console.log('all deleted',res);
      
    })

    }
    
}