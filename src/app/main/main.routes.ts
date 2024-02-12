import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HousesComponent } from '../houses/houses.component';
import { SpellsComponent } from '../spells/spells.component';
import { WizardsComponent } from '../wizards/wizards.component';


export const MAIN_ROUTES: Routes = [
  {path : 'login',component : LoginComponent},
  {path : 'houses',component : HousesComponent},
  {path : 'spells',component : SpellsComponent},
  {path : 'wizards',component : WizardsComponent}
];
