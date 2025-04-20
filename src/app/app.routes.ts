import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwiperModule } from 'swiper/types';
export const routes: Routes = [];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes),CommonModule ],
    exports: [RouterModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA] // Agregar esto como última opción

  })
  export class AppRoutingModule {}
