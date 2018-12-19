import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { SearchComponent } from './search/search.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path: 'edit', component: EditComponent},
  {path: 'search', component: SearchComponent},
	{path: '', redirectTo: 'edit', pathMatch: 'full'},
	{path: '**', component: PagenotfoundComponent}
];

const routeOptions: ExtraOptions = {
	enableTracing: false
};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
