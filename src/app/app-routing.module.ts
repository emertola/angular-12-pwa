import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageCompressorComponent } from './components/image-compressor/image-compressor.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'image-compressor' },
  { path: 'image-compressor', component: ImageCompressorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
