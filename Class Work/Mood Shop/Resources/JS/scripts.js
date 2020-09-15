import data from './data.js'

const itemsContainer = document.getElementById('items')


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