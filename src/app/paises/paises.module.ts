import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CapitalComponent } from './pages/capital/capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { RegionComponent } from './pages/region/region.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { InputComponent } from './components/input/input.component';


@NgModule({
  declarations: [
    CapitalComponent,
    PorPaisComponent,
    RegionComponent,
    VerPaisComponent,
    TablaComponent,
    InputComponent
  ],

  exports:[
    CapitalComponent,
    PorPaisComponent,
    RegionComponent,
    VerPaisComponent,
    TablaComponent
  ],
  
  imports: [
    CommonModule, 
    FormsModule,
    RouterModule
  ]
})
export class PaisesModule { }
