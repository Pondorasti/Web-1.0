import data from './data.js'

const itemsContainer = document.getElementById('items')
const itemsList = document.getElementById('items-list')
const cartQtq = document.getElementById('cart-qtq')
const cartTotal = document.getElementById('cart-total')

data.forEach(function (item, index) {
    let newDiv = document.createElement('div')
    newDiv.className = 'item'

    let img = document.createElement('img')
    img.src = item.image
    img.width = 300
    img.height = 300
    newDiv.appendChild(img)

    let desc = document.createElement('p')
    desc.innerText = item.desc
    newDiv.appendChild(desc)

    let price = document.createElement('p')
    price.innerText = item.price
    newDiv.appendChild(price)

    let button = document.createElement('button')
    button.id = item.name
    button.dataset.price = item.price
    button.innerHTML = "Add to Cart"
    newDiv.appendChild(button)
        
    itemsContainer.appendChild(newDiv)
});


const cart = []

function addItem(name, price) {
    const item = { name, price, qty: 1 }

    for (let index = 0; index < cart.length; ++index) {
        if (cart[index].name === name) {
            ++cart[index].qty;
            showItems()
            return
        }
    }

    cart.push(item)
}

function showItems() {
    cartQtq.innerHTML = `You have ${getQtq()} items in your cart.`
    cartTotal.innerHTML = `Total in cart: ${getTotal()}`

    let htmlStr = ''
    cart.forEach(function(item, index) {
        const { name, price, qty } = cart[index]
        const total = (qty * price).toFixed(2)

        htmlStr += `
        <li>
            ${name} $${price} x ${qty} = ${total} 
            <button class="remove" data-name="${name}">Remove</button>
            <button class="add" data-name="${name}"> + </button>
            <button class="subtract" data-name="${name}"> - </button>
            <input class="update" type="number" min="0" data-name="${name}"> </input>
        </li>
        `
    })
    itemsList.innerHTML = htmlStr
}

function getQtq() {
    let numberOfItems = 0
    cart.forEach(function(item, index) {
        numberOfItems += item.qty
    })

    return numberOfItems
}

function getTotal() {
    let total = 0
    cart.forEach(function(item, index) {
        total += item.qty * item.price
    })

    return total.toFixed(2)
}

function removeItem(name, qty = 0) {
    cart.forEach(function(item, index) {
        if (item.name === name) {
            if (qty > 0) {
                item.qty -= qty;
            }

            if (item.qty < 1 || qty === 0) {
                cart.splice(index, 1)
            }

            showItems()
            return
        }
    })
}

function updateItem(name, qtq) {
    cart.forEach(function(item, index) {
        if (item.name === name) {
            item.qty = qtq

            if (qtq === 0) {
                cart.splice(index, 1)
            }

            showItems()
            return
        }
    })
}

// addItem('apple', 0.99)
// addItem('orange', 1.29)
// addItem('apple', 0.99)

showItems()

const allItemsButton = Array.from(document.querySelectorAll('button'))

allItemsButton.forEach(elt => elt.addEventListener('click', () => {
    addItem(elt.getAttribute('id'), elt.getAttribute('data-price'))
    showItems()
}))

itemsList.onclick = function(event) {
    if (!event.target) { return }

    const name = event.target.dataset.name
    if (event.target.classList.contains('remove')) {
        removeItem(name)
    } else if (event.target.classList.contains('add')) {
        addItem(name)
    } else if (event.target.classList.contains('subtract')) {
        removeItem(name, 1)
    }
}


itemsList.onchange = function(event) {
    if (event.target && event.target.classList.contains('update')) {
        const name = event.target.dataset.name
        const qtq = parseInt(event.target.value)

        updateCart(name, qtq)
    }
}