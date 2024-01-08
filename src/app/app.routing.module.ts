import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactReactiveComponent } from "./contact-reactive/contact-reactive.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { Page404Component } from "./page404/page404.component";
import { UserComponent } from "./users/user/user.component";
import { DetailsComponent } from "./users/details/details.component";
import { ListComponent } from "./users/list/list.component";
import { PermissionsGuard } from "./guard/permissions.guard";
import { WithoutSaveGuard } from "./guard/without-save.guard";
import { DataResolverService } from "./resolvers/data.resolver.service";

const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {   path: 'contact-reactive', 
        component: ContactReactiveComponent, 
        canDeactivate: [WithoutSaveGuard],
        resolve: {departments: DataResolverService}
    },
    { 
        path: 'contact/:id', 
        component: ContactComponent,
        resolve: {departments: DataResolverService}
    }, //Lo que nosotros le estamos diciendo es que vendra una variable dinamica (el id del usuario por ejemplo)
    { path: 'home', component: HomeComponent },
    { 
        path:'users', component: UserComponent , canActivate: [PermissionsGuard],
        children: [
            { path: 'details', component: DetailsComponent },
            { path: 'list', component: ListComponent },
        ] 
    },
    { path: '**', component: Page404Component }, //Esto es para que coja todas las restantes rutas para si intentas acceder a algo que no existe

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}