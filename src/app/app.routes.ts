import { Routes } from '@angular/router';
import {BrowseMotosComponent} from './pages/browse-motos/browse-motos.component';

export const routes: Routes = [
  { path: 'browse', component: BrowseMotosComponent},
  { path: '', redirectTo: "/browse", pathMatch: 'full'},

];
