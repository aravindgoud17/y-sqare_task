import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { HeaderComponent } from './header/header.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {path:"header",component:HeaderComponent},
  {path:"overview",component:OverviewComponent},
  {path:"map",component:GooglemapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
