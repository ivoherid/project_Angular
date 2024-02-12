import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HousesComponent } from './houses/houses.component';
import { SpellsComponent } from './spells/spells.component';
import { ElixirsComponent } from './elixirs/elixirs.component';
import { WizardsComponent } from './wizards/wizards.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { MainComponent } from './main/main.component';


export const APP_ROUTES: Routes = [
  {path : '',component: MainComponent},
  {path : 'login',component : LoginComponent},
  {path : 'houses',component : HousesComponent},
  {path : 'spells',component : SpellsComponent},
  {path : 'elixirs',component : ElixirsComponent},
  {path : 'wizards',component : WizardsComponent},
  {path : 'ingredients',component : IngredientsComponent},
];
