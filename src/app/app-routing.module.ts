import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { EquipmentComponent } from './equipment/equipment.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'equipment', component: EquipmentComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
