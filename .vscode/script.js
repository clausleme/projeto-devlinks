function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-Claus-light.png")
    img.setAttribute(
      "alt",
      "Foto de Claus Leme sorrindo, usando camiseta preta e o sofá no fundo"
    )
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar Claus.png")
    img.setAttribute(
      "alt",
      "Foto de Claus Leme sorrindo, usando camiseta verde e de fundo a sala"
    )
  }
}
