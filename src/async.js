const url = 'https://platzi-avo.vercel.app/api/avo';

async function getData() {
  const response = await fetch(url);
  const dataJson = await response.json();
  const allItems = []

  dataJson.data.forEach(item => {
    const image = document.createElement('img')
    const title = document.createElement('h2')
    const price = document.createElement('div')
    
    const container = document.createElement('div')
    container.appendChild(image, title, price)

    allItems.push(container)
  });

  document.body.append(...allItems);
}

getData();
