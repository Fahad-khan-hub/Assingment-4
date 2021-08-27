
 
//------------------------- UnComments console first---------------
// ---------------------------------------------------task no: 1---------------------------------------------------------
function seerToMon(seer){
var mon=seer /40 ;
return mon;
}
var seer = 80;
var mon= seerToMon(seer);
// console.log(mon);
//--------------------------------------------------- task no:2------------------------------------------------------
var shirt=100;
var pant=200;
var shoe=500;
function totalSales(shirt,pant,shoe){
const OnePisShirtRate =100;
const OnePisPantRate =200;
const OnePisShoeRate =500;
// calculation
const shirtQuantity=shirt*OnePisShirtRate;
const pantQuantity=pant*OnePisPantRate;
const shoeQuantity =shoe*OnePisShoeRate;
const totalPrice= shirtQuantity+pantQuantity+shoeQuantity;
return totalPrice;
}
const AllPrice=totalSales(1,1,1);
// console.log(AllPrice)
// --------------------------------------------------------task no: 3------------------------------------------------
function deliveryCost( product){
const costPerProduct =100;
const costSecondPerProduct=80;
const costThirdPerProduct =50;
if(product<=100){
var totalProducts=product*costPerProduct;
return totalProducts;
}
else if(product<=200){
const first100 =100*costPerProduct;
const restProducts = product-100;
const secondProduct = restProducts*costSecondPerProduct;
const totalProducts=first100+secondProduct;
return totalProducts;
}
else{
const first100 =100*costPerProduct;
const secondProduct = 100*costSecondPerProduct;
const restProducts = product-200;
const thirdProducts= restProducts*costThirdPerProduct;
const totalProducts= first100+secondProduct+thirdProducts;
return totalProducts;
}
}
var ship= deliveryCost(100)
// console.log(ship)
//------------------------------------------------------ task no: 4----------------------------------------------------
let friends = ['Emon', 'Ifty', 'Lotif', 'Fahad', 'Hasib', 'Siam'];
function perfectFriend(friend) {
var friendLength = 5;
for (let i = 0; i < friend.length; i++) {
if (friend[i].length == friendLength) {
friendLength = friend[i];
return friendLength
}
}
}
let friendNum = perfectFriend(friends);
// console.log(friendNum);