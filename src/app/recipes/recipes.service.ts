import { Recipe } from "./recipe.model";

export class RecipesService{
    
    recipes: Recipe[] = [
        {name: 'Test recipe', description: 'This is simply a test', imagPath: 'https://image.shutterstock.com/image-vector/caprese-salad-recipe-step-by-260nw-1201271428.jpg'},
        new Recipe('Another Test recipe', 'This is simply a test', 'https://image.shutterstock.com/image-vector/caprese-salad-recipe-step-by-260nw-1201271428.jpg')
      ] ;

}