class Playera{
    constructor(codigo,color,precio,imagen){
        this.codigo=codigo;
        this.color=color;
        this.precio=precio;
        this.imagen=imagen
    }

    generarHTML = ()=> {
        return `<img src="${this.imagen}" alt=""height="200 px" width="auto">
        <br><p>Color: ${this.color}</p><br>
        <p>Precio: ${this.precio}</p>`
    }
}

let playeras = [
    new Playera(0001,'blanco', 130, 'https://cdn.shopify.com/s/files/1/0030/1757/2397/products/CapturadePantalla2022-04-24ala_s_11.34.56p.m._345x345@2x.png?v=1650861344'),
    new Playera(0002,'azul', 130, 'https://cdn.shopify.com/s/files/1/0030/1757/2397/products/CapturadePantalla2022-04-24ala_s_11.37.42p.m._345x345@2x.png?v=1650861603')
]


let destino = document.getElementById('playerasID')

for (playerasID of playeras){
    let nuevoEle = document.createElement('div')
    nuevoEle.innerHTML = playerasID.generarHTML()
    destino.append(nuevoEle)
}


class Sudadera {
    constructor(codigo,color,precio,imagen){
        this.codigo=codigo;
        this.color=color;
        this.precio=precio
        this.imagen=imagen
    }
    generarHTML = ()=> {
        return `<img src="${this.imagen}" alt=""height="200 px" width="auto">
        <br><p>Color: ${this.color}</p><br>
        <p>Precio: ${this.precio}</p>`
    }
}

let sudaderas = [
    new Sudadera(0001,'rojo', 200, 'https://cdn.shopify.com/s/files/1/0030/1757/2397/products/sweatshirt-mockup-featuring-a-woman-with-trendy-sunglasses-at-a-studio-m639_345x345@2x.png?v=1643835714'),
    new Sudadera(0002,'rosa', 210, 'https://cdn.shopify.com/s/files/1/0581/7188/3709/products/hoodie-mockup-of-a-young-man-wearing-a-dad-hat-in-an-urban-setting-31178_345x345@2x.png?v=1640048842')
]

let destino2 = document.getElementById('sudaderasID')

for (sudaderasID of sudaderas){
    let nuevoEle = document.createElement('div')
    nuevoEle.innerHTML = sudaderasID.generarHTML()
    destino2.append(nuevoEle)
}

class Gorra {
    constructor(codigo,color,precio,imagen){
        this.codigo=codigo;
        this.color=color;
        this.precio=precio
        this.imagen=imagen
    }

    generarHTML = ()=> {
        return `<img src="${this.imagen}" alt=""height="200 px" width="auto">
        <br><p>Color: ${this.color}</p><br>
        <p>Precio: ${this.precio}</p>`
    }
}

let gorras = [
    new Gorra(0001,'negro', 200, 'https://ih1.redbubble.net/image.2740127385.4954/ssrco,baseball_cap,product,000000:44f0b734a5,front,square,600x600-bg,f8f8f8.jpg'),
    new Gorra(0002,'blanco', 210, 'https://image.spreadshirtmedia.net/image-server/v1/mp/products/T1589A1PA5078PT32X34Y0D306465230FS991/views/1,width=378,height=378,appearanceId=1,backgroundColor=F2F2F2/cool-dog-mejor-amigo.jpg')
]


let destino3 = document.getElementById('gorrasID')

for (gorrasID of gorras){
    let nuevoEle = document.createElement('div')
    nuevoEle.innerHTML = gorrasID.generarHTML()
    destino3.append(nuevoEle)
}

let boton1 = document.getElementById('btn1')
let boton2 = document.getElementById('btn2')
let boton3 = document.getElementById('btn3')

let contador = 0

boton1.addEventListener('click',()=>{console.log(contador += 1)})
boton2.addEventListener('click',()=>{console.log(contador += 1)})
boton3.addEventListener('click',()=>{console.log(contador += 1)})