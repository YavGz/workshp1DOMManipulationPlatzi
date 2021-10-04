const url = 'https://platzi-avo.vercel.app';

const appNode = document.querySelector('div#app')

// api de internacionalización 
const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
  return newPrice
}
// conectarnos al servidor
fetch(`${url}/api/avo`)
// procesar la respuesta u convertirla en Json
.then(response => response.json())
//JSON -> Data -> Renderizar info browser
.then(responseJson => {
  const todosLosItems = []
  
  responseJson.data.forEach(item => {
    // crear imagen
    const image = document.createElement('img')
    image.className = 'img-fluid rounded-start'
    image.src = `${url}${item.image}`
    // crear titulo
    const title = document.createElement('h2')
    title.className = 'card-title'
    title.textContent = `${item.name}`
    // crear precio
    const price = document.createElement('p')
    price.className = 'card-text'
    price.textContent = formatPrice(item.price)
    
    const divImage = document.createElement('div')
    divImage.className = 'col-md-4'
    divImage.appendChild(image)
    
    const divText = document.createElement('div')
    divText.className = 'card-body'
    divText.append(title, price)

    const divBodyText = document.createElement('div')
    divBodyText.className = 'col-md-8'
    divBodyText.appendChild(divText)

    const divContent = document.createElement('div')
    divContent.className = 'row g-0'
    divContent.append(divImage, divBodyText)
    

    const cardContainer = document.createElement('div')
    cardContainer.className = 'card col'
    cardContainer.style = 'max-width: 480px;'
    
    cardContainer.append(divContent)

    todosLosItems.push(cardContainer)

  });
  appNode.append(...todosLosItems);
})