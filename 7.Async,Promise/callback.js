function orderPizza(notifyMe) {
    setTimeout(() => {
        const pizza = "pizza";
        notifyMe(pizza);
    },2000)
};

function notifyMe(food) {
    console.log("Your Food is ready : " + food);
}

orderPizza(notifyMe);