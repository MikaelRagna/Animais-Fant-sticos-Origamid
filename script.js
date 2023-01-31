// Retorne no console todas as imagens do site
const allImages = document.getElementsByTagName('img')

//console.log(allImages)
// Retorne no console apenas as imagens que começaram com a palavra imagem
const nameImages = document.querySelectorAll('img[src^="img/imagem"]')
//console.log(nameImages);
// Selecione todos os links internos (onde o href começa com #)
const linkInterno = document.querySelectorAll('[href^="#"]')
//console.log(linkInterno);
// Selecione o primeiro h2 dentro de .animais-descricao
const firstTag = document.querySelector('.animais-descricao h2')
//console.log(firstTag);
// Selecione o último p do site
const lastTagP = document.querySelectorAll('p')

//console.log(lastTagP[lastTagP.length - 1])
