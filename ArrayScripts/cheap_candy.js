let products = [ 
    {product: "Gummy Worms", price: 5.79}, 
    {product: "Plain M&Ms", price: 2.89}, 
    {product: "Caramel M&Ms", price: 2.89}, 
    {product: "Dots", price: 1.29}, 
    {product: "Twix Bar", price: 4.29 },
    {product: "Hersey's Bar", price: 3.49 },
    {product: "Crunch Bar", price: 1.99 },
    {product: "Snickers", price: 2.49 },
    {product: "KitKat", price: 2.99 },
    {product: "AirHeads", price: 1.49 },
 ];
 // Which candies costs less than $4.00? 
 for(i = 0; i < products.length; i++) {
    if(products[i].price <= 4.00) {
        console.log(`Budget Treats: ${products[i].products}`);
    }
 }
 console.log();
// Which candies has "M&M" its name? 
//  for(i = 0; i < products.length; i++) {
//     if(products[i].products === "M&Ms") {
//         console.log(`M&M Varieties: ${products[i].products}`);
//     }
//  }
//  console.log();
// Do we carry "Airheads"?