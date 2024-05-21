import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostCategoryComponent } from './components/post-category/post-category.component';
import { PostProductComponent } from './components/post-product/post-product.component';
import { CommonModule } from '@angular/common';
import { PostCouponComponent } from './components/post-coupon/post-coupon.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PostProductFaqComponent } from './components/post-product-faq/post-product-faq.component';

const routes: Routes = [
  { path: '', component: AdminComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'category', component: PostCategoryComponent},
  { path: 'product', component: PostProductComponent},
  { path: 'post-coupon', component: PostCouponComponent},
  { path: 'coupons', component: CouponsComponent},
  { path: 'orders', component: OrdersComponent},
  { path: 'faq/:productId', component: PostProductFaqComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
