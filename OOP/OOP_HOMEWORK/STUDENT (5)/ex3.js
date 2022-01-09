var order = {
    customer: "Him The Crazy",
    date: "SEP 9",
    food: [
        { name: "french fries", price: 12 },
        { name: "Cambodian fries", price: 1 },
        { name: "ice scream", price: 4 }
    ]
};
var result = 0;
function sumPrice(order) {
    result += order.price;
    return result;
}
console.log(result);
