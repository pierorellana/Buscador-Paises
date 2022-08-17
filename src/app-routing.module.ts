import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CapitalComponent } from "./app/paises/pages/capital/capital.component";
import { PorPaisComponent } from "./app/paises/pages/por-pais/por-pais.component";
import { RegionComponent } from "./app/paises/pages/region/region.component";
import { VerPaisComponent } from "./app/paises/pages/ver-pais/ver-pais.component";


const routes: Routes = [
    {
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: RegionComponent
    },
    {
        path: 'capital',
        component: CapitalComponent
    },
    {
        path: 'pais/:id',
        component: VerPaisComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot( routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}