import { DemoAngularMaterialModule } from './../../../DemoAngularMaterialModule';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { CommonModule } from '@angular/common';
import { UserStorageService } from '../../../services/storage/user-storage.service';

@Component({
  selector: 'app-view-product-detail',
  standalone: true,
  imports: [DemoAngularMaterialModule, CommonModule],
  templateUrl: './view-product-detail.component.html',
  styleUrl: './view-product-detail.component.scss'
})
export class ViewProductDetailComponent {

  productId: number = this.activatedRoute.snapshot.params["productId"];

  product: any;
  FAQS: any[] = [];
  reviews: any[] = [];

  constructor( private snackBar: MatSnackBar,
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute

    ){}

    ngOnInit(){
      this.getProductDetailById();
    }

    getProductDetailById(){
      this.customerService.getProductDetailById(this.productId).subscribe(res =>{
        this.product = res.productDTO;
        this.product.processedImg = 'data:image/png;base64,' + res.productDTO.byteImg;

        this.FAQS = res.faqDTOList;

        res.reviewDTOList.forEach(element => {
          element.processedImg = 'data:image/png;base64,' +  element.returnedImg;
          this.reviews.push(element);
        });

      })
    }

    addToWishlist(){
      const wishListDTO = {
        productId : this.productId,
        userId: UserStorageService.getUserId()
      }

      this.customerService.addProductToWishlist(wishListDTO).subscribe(res =>{
        if(res.id != null){
          this.snackBar.open('Product Added to Wishlist Successfully!', 'Close', {
            duration: 5000
          });
        }else{
          this.snackBar.open("Already in Wishlist", 'ERROR', {
            duration: 5000
          });
        }
      })
    }

}
