function getRandomCategoryShortName() {
    var categories = $dc.getAllCategories();
    var randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex].short_name;
 }
 