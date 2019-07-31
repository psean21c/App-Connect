// Rest Parameters 
function myFunc(...[x, y, z]) {
    return x * y* z;
  }
  
var a = myFunc(1)          // NaN
var b = myFunc(1, 2)    // 
var c = myFunc(1, 2, 3)    // 
var d = myFunc(1, 2, 3, 4) // 6 (fourth parameter is not destructured)

  console.log(a)

  console.log(b)

  console.log(c)
  console.log(d)

  //Spread Operators
  console.log('----------------------')
  var ins = [1, 2, 3, 4]
  var e = myFunc(...ins)
  console.log(e)


  const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
const specialty = ['Meatzza', 'Spicy Mama', 'Margherita'];

const pizzas = [...featured, 'veg pizza', ...specialty];

console.log(pizzas);
