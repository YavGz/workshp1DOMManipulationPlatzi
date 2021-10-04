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
    image.src = `${url}${item.image}`
    // crear titulo
    const title = document.createElement('h2')
    title.textContent = `${item.name}`
    // crear precio
    const price = document.createElement('p')
    price.textContent = formatPrice(item.price)
    
    const container = document.createElement('div')
    container.append(image, title, price)
    container.className = ''

    todosLosItems.push(container)

  });
  appNode.append(...todosLosItems);
})