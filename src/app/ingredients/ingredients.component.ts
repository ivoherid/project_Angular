import { Component, OnInit, inject } from '@angular/core';
import { IngredientsService } from '../services/ingredients.service';

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.css'
})
export class IngredientsComponent{
  private ingredientservice = inject(IngredientsService);
  ingredients: any =[];

  constructor(){
    this.ingredientservice.getIngredients().then((res:any)=>{
      this.ingredients = res;
    });
  }

}
