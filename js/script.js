const tbody = document.getElementsByClassName("tbody");

let products = [
    {name: "apple",
     price: "4$",
    weigth: 500},

    {name: "grapes",
     price: "4$",
    weigth: 400},

    {name: "cherry",
     price: "4$",
    weigth: 200},

    {name: "banana",
     price: "4$",
    weigth: 600},

    {name: "cocos",
     price: "4$",
    weigth: 800},

    {name: "strawberry",
     price: "4$",
    weigth: 300},

    {name: "orange",
     price: "4$",
    weigth: 700},

]

function heavyProducts() {
    for (i = 0; i < products.length; i++) {
        tbody.innerHTML += `<tr>
            <td>${`products[i].name`}</td>
            <td>${`products[i].price`}</td>
            <td>${`products[i].weight`}</td>
        </tr>`
    }
}