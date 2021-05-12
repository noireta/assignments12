class Recipe {
    constructor(title, serves, ingredients) {
         var _title = title;
         var _serves = serves;
         var _ingredients = ingredients;

         this.printRecipe = function(){
            console.log(_title+'\n');
            console.log("Serves:"+_serves)
            console.log("Ingredients:")
            for ( let ingredient of _ingredients)
            {
                console.log(" - "+ingredient.toString().trim()+'\n');
            }
         }
   
}
}

const guac = new Recipe('Guacamole', '4', [[' 3 Avocados'],['1 Lime'],['1 Teaspoon Salt'],
['1/2 Cup Onion'],['3 Tablespoons Cilantro'],['2 Diced Tomatoes'],['1 Teaspoon Garlic'],['1 Pinch Ground Pepper']]);
guac.printRecipe();



