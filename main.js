let categorias = ['camisas', 'pantalones', 'calzado', 'accesorios']

let articulo = {
    imagen: "https://images.pexels.com/photos/1835008/pexels-photo-1835008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    nombre: "prenda",
    precio: parseInt(Math.random()*50000),
    descuento: parseInt(Math.random()*20),
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a voluptas itaque facere ducimus nobis, repudiandae consequatur ullam rerum laborum voluptatibus sit recusandae quidem optio aspernatur commodi vitae deleniti dolorem",
    categoria: categorias[parseInt(Math.random()*categorias.length)]
}
let articulo1 = {
    imagen: "https://images.pexels.com/photos/1835008/pexels-photo-1835008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    nombre: "articulo1",
    precio: parseInt(Math.random()*50000),
    descuento: parseInt(Math.random()*20),
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a voluptas itaque facere ducimus nobis, repudiandae consequatur ullam rerum laborum voluptatibus sit recusandae quidem optio aspernatur commodi vitae deleniti dolorem",
    categoria: categorias[parseInt(Math.random()*categorias.length)]
}
let articulo2 = {
    imagen: "https://images.pexels.com/photos/1835008/pexels-photo-1835008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    nombre: "articulo2",
    precio: parseInt(Math.random()*50000),
    descuento: parseInt(Math.random()*20),
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a voluptas itaque facere ducimus nobis, repudiandae consequatur ullam rerum laborum voluptatibus sit recusandae quidem optio aspernatur commodi vitae deleniti dolorem",
    categoria: categorias[parseInt(Math.random()*categorias.length)]
}
let articulo3 = {
    imagen: "https://images.pexels.com/photos/1835008/pexels-photo-1835008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    nombre: "articulo3",
    precio: parseInt(Math.random()*50000),
    descuento: parseInt(Math.random()*20),
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a voluptas itaque facere ducimus nobis, repudiandae consequatur ullam rerum laborum voluptatibus sit recusandae quidem optio aspernatur commodi vitae deleniti dolorem",
    categoria: categorias[parseInt(Math.random()*categorias.length)]
}
let articulo4 = {
    imagen: "https://images.pexels.com/photos/1835008/pexels-photo-1835008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    nombre: "articulo4",
    precio: parseInt(Math.random()*50000),
    descuento: parseInt(Math.random()*20),
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a voluptas itaque facere ducimus nobis, repudiandae consequatur ullam rerum laborum voluptatibus sit recusandae quidem optio aspernatur commodi vitae deleniti dolorem",
    categoria: categorias[parseInt(Math.random()*categorias.length)]
}
let articulo5 = {
    imagen: "https://images.pexels.com/photos/1835008/pexels-photo-1835008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    nombre: "articulo5",
    precio: parseInt(Math.random()*50000),
    descuento: parseInt(Math.random()*20),
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a voluptas itaque facere ducimus nobis, repudiandae consequatur ullam rerum laborum voluptatibus sit recusandae quidem optio aspernatur commodi vitae deleniti dolorem",
    categoria: categorias[parseInt(Math.random()*categorias.length)]
}
let articulo6 = {
    imagen: "https://images.pexels.com/photos/1835008/pexels-photo-1835008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    nombre: "articulo6",
    precio: parseInt(Math.random()*50000),
    descuento: parseInt(Math.random()*20),
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a voluptas itaque facere ducimus nobis, repudiandae consequatur ullam rerum laborum voluptatibus sit recusandae quidem optio aspernatur commodi vitae deleniti dolorem",
    categoria: categorias[parseInt(Math.random()*categorias.length)]
}
let articulo7 = {
    imagen: "https://images.pexels.com/photos/1835008/pexels-photo-1835008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    nombre: "articulo7",
    precio: parseInt(Math.random()*50000),
    descuento: parseInt(Math.random()*20),
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a voluptas itaque facere ducimus nobis, repudiandae consequatur ullam rerum laborum voluptatibus sit recusandae quidem optio aspernatur commodi vitae deleniti dolorem",
    categoria: categorias[parseInt(Math.random()*categorias.length)]
}

let articulos = [
    articulo, 
    articulo1,
    articulo2,
    articulo3,
    articulo4,
    articulo5,
    articulo6,
    articulo7
]

let listaCamisas = document.querySelector('.camisas')
let listaPantalones = document.querySelector('.pantalones')
let listaCalzado = document.querySelector('.calzado')
let listaAccesorios = document.querySelector('.accesorios')

for (articulito of articulos){
    let contenedorArticulo = document.createElement('div')
    let imagenArticulo = document.createElement('img')
    let listaAtributos = document.createElement('ul')
    
    contenedorArticulo.classList.add('articulo')
    imagenArticulo.setAttribute('src', articulito.imagen)
    imagenArticulo.setAttribute('alt', articulo.nombre)
    
    for (atributo in articulito){
        console.log(atributo)
        let elementoLista
        if ( atributo != 'imagen' && atributo != 'categoria'){
            if (articulito[atributo] != 0){
                elementoLista = document.createElement('li')
                elementoLista.innerText = articulito[atributo]
                listaAtributos.appendChild(elementoLista)
            }
        }
        if ( atributo == 'precio' && articulito.precio != 0){
            elementoLista.innerText = '$' + articulito[atributo]
        }
        if ( atributo == 'descuento' && articulito.descuento != 0){
            elementoLista.innerText = '-' + articulito[atributo] + '%'
            elementoLista.style.color = 'white'
            elementoLista.style.backgroundColor = 'red'
        }
    }
    
    contenedorArticulo.appendChild(imagenArticulo)
    contenedorArticulo.appendChild(listaAtributos)
    
    switch(articulito.categoria){
        case 'camisas':
            listaCamisas.appendChild(contenedorArticulo)
            break
        case 'pantalones':
            listaPantalones.appendChild(contenedorArticulo)
            break
        case 'calzado':
            listaCalzado.appendChild(contenedorArticulo)
            break
        case 'accesorios':
            listaAccesorios.appendChild(contenedorArticulo)
    }
}
/*let articulo = {
    imagen: "https://images.pexels.com/photos/1835008/pexels-photo-1835008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    nombre: "Camiseta1",
    precio: 50.000,
    descuento: 20,
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a voluptas itaque facere ducimus nobis, repudiandae consequatur ullam rerum laborum voluptatibus sit recusandae quidem optio aspernatur commodi vitae deleniti dolorem"
}

let listaArticulos = document.querySelector('.camisas')
let contenedorArticulo = document.createElement('div')
contenedorArticulo.classList.add('articulo')

let imagenArticulo = document.createElement('img')
imagenArticulo.setAttribute('src', articulo.imagen)
imagenArticulo.setAttribute('alt', articulo.nombre)

let listaAtributos = document.createElement('ul')
for (atributo in articulo){
    console.log(atributo)
    if ( atributo != 'imagen'){
        let elementoLista = document.createElement('li')
        elementoLista.innerText = articulo[atributo]
        listaAtributos.appendChild(elementoLista)
    }
}

contenedorArticulo.appendChild(imagenArticulo)
contenedorArticulo.appendChild(listaAtributos)

listaArticulos.appendChild(contenedorArticulo)*/