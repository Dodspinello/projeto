function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    // pegar a tag img

    const img = document.querySelector("#profile img")

    // substituir s img
    if(html.classList.contains('light')) {
      // se tiver light mode, adicionar a light
      img.setAttribute('src', './assets/Avatar-light.jpg')
    }else {

    // se tiver sem light mode, manter a imagem normal
        img.setAttribute('src', './assets/Avatar-dark.png')
    }
}