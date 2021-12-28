import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('amountIngredient') amountIngredientRef: ElementRef;
  @ViewChild('nameIngredient') nameIngredientRef: ElementRef;
  @Output() ingredientEvent = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    const amount = this.amountIngredientRef.nativeElement.value;
    const name = this.nameIngredientRef.nativeElement.value;
    const newIngredient = new Ingredient(name, amount);
    this.ingredientEvent.emit(newIngredient);
  }
}
