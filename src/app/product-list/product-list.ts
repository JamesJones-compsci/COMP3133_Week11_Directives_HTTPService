import { Component, inject } from '@angular/core';
import { HTTPService } from '../shared/httpservice';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  // create an instance of HTTPService class
  private readonly httpService = inject(HTTPService);

  products : any[] = [];

  // will be called when the PostList component is created/mounted
  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.httpService.getProducts().subscribe( {
      next : (response) => {
        this.products = response.products;
        console.log(`${this.products.length} products received from API!`);
      },
      error : (error) => {
        console.log(`Error while receiving data from API: ${error}`);
      }
    })
      
  } 

  createProduct(newProduct: any){
    this.httpService.createProduct(newProduct).subscribe( {
      next : (response) => {
        console.log(response);
      },
      error : (error) => {
        console.log(`Error while adding data to API: ${error}`);
      }
    })
      
  } 



}
