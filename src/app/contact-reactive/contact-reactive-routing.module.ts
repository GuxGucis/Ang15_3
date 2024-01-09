import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactReactiveComponent } from './contact-reactive.component';
import { WithoutSaveGuard } from '../guard/without-save.guard';
import { DataResolverService } from '../resolvers/data.resolver.service';

const routes: Routes = [
  {   
    path: '', 
    component: ContactReactiveComponent, 
    canDeactivate: [WithoutSaveGuard],
    resolve: {departments: DataResolverService}
},
];

/* 
    Darse cuenta que aqui se usa el .forChild() y en la app.routing se usa el .forRoot()
    Y basicamente el forChild, a direncia del forRoot, que es donde se indica todas las cosas que tienen que cargar desde el principio,
    no se carga al principio del todo al abrir la aplicacion se carga bajo demanda
    A diferencia del forRoot que tiene sentido que haya solo uno, este puede hacer varios
 */

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactReactiveRoutingModule { }
