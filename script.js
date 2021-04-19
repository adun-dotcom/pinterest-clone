let gridContainer = document.querySelector('.grid-container')

let column1 = [
  "https://i.pinimg.com/236x/73/2a/99/732a9966f4f9130daf6b4ee7742c2754.jpg",
  "https://i.pinimg.com/236x/4f/d5/53/4fd55376c5379e84f4aafae23082fb98.jpg",
  "https://i.pinimg.com/236x/68/74/0a/68740a3ac73325fb0b21908bb0657eeb.jpg",
  "https://i.pinimg.com/236x/ff/1b/52/ff1b52fb7b8dc820a0e724706689c3f6.jpg",
  "https://i.pinimg.com/236x/75/63/e2/7563e2a3804f92b0204feef8d962da44.jpg",
  "https://i.pinimg.com/236x/17/cf/94/17cf9412e80398c5494ec6b1929d4faf.jpg",
  "https://i.pinimg.com/236x/8d/40/24/8d40247a3121c7017077fea8c8ada753.jpg",
  "https://i.pinimg.com/236x/7c/6a/c6/7c6ac6040f9b5f0f99c884f2b1f7cfca.jpg",
  "https://i.pinimg.com/236x/cd/7a/ba/cd7abae674f111b5cd145788f56b76ee.jpg",
  "https://i.pinimg.com/236x/72/8b/0a/728b0ab3ffdda57ab2cabad76394f73e.jpg",
]
for(let i = 0; i < column1.length; i++){
    let y = document.createElement('img')
    y.setAttribute('src', column1[i])
    document.querySelector('.column-1').appendChild(y)
}
let column2 = [
  "https://i.pinimg.com/236x/0b/ac/7d/0bac7d5999fab3a72a033fcbd037fc7d.jpg",
  "https://i.pinimg.com/236x/d2/58/91/d258912100812a6a404f021c26036ca0.jpg",
  "https://i.pinimg.com/236x/37/6e/72/376e726801519e0fc8153042484298b4.jpg",
  "https://i.pinimg.com/236x/12/39/86/1239862afcecf9e9178bc839cf83783c.jpg",
  "https://i.pinimg.com/236x/02/0a/48/020a482c477a81a09514a09404e32cfe.jpg",
  "https://i.pinimg.com/236x/ac/24/4c/ac244c02ff06bc2aeb8f07407a12afdb.jpg",
  "https://i.pinimg.com/236x/17/d0/7f/17d07f1a538ae4fddde9abda509ac680.jpg",
  "https://i.pinimg.com/236x/4d/1e/eb/4d1eebe3ad6dc987a4a78f1739d1f30f.jpg",
  "https://i.pinimg.com/236x/63/d8/79/63d87932737a84f3223a034833c65bcd.jpg",
  "https://i.pinimg.com/236x/e5/8e/bc/e58ebce32e8dcbf1a14635b9967160d6.jpg",
]
column2.forEach(function(val){
    let y = document.createElement('img')
    y.setAttribute('src', val)
    document.querySelector('.column-2').append(y)
})
let column3 = [
  "https://i.pinimg.com/564x/5f/13/ed/5f13edf55f4450e26ca4b52d7cbce169.jpg",
  "https://i.pinimg.com/236x/9b/bf/b7/9bbfb7dd9228ca2c4da73ea848430ca4.jpg",
  "https://i.pinimg.com/236x/ab/c4/eb/abc4eb53c103137db0e1acd12bdc6f0c.jpg",
  "https://i.pinimg.com/236x/7d/9d/b6/7d9db6a1a600d0ef33af2e96ed5377a2.jpg",
  "https://i.pinimg.com/236x/38/39/0a/38390a110a024ca29ec394b4b6de8a05.jpg",
  "https://i.pinimg.com/236x/18/1f/9f/181f9f85aaae1d6547564465dd1650ea.jpg",
  "https://i.pinimg.com/236x/29/58/04/295804eed25cefd193a7e334d5e3fa3f.jpg",
  "https://i.pinimg.com/236x/2f/8e/3a/2f8e3a8648706db739b606ffdccc5b68.jpg",
  "https://i.pinimg.com/236x/cc/9f/66/cc9f664498b739b1d5b1ba39f119b1dd.jpg",
  "https://i.pinimg.com/236x/33/1b/e5/331be595799f8d332a8b67155f8fe196.jpg",
]
column3.forEach(val=>{
    let y = document.createElement('img')
    y.setAttribute('src', val)
    document.querySelector('.column-3').append(y)
})
let column4 = [
  "https://i.pinimg.com/236x/31/ff/d9/31ffd9a3a1e1f0cc016fb39a2cfc12e7.jpg",

  "https://i.pinimg.com/236x/57/84/c0/5784c0d975c958d2a863590d32967272.jpg",

  "https://i.pinimg.com/236x/32/ab/e8/32abe83d50d914d1af526c025bfa009f.jpg",

  "https://i.pinimg.com/236x/97/40/68/9740681163509b832aacec339e291e71.jpg",

  "https://i.pinimg.com/236x/5f/c6/a2/5fc6a223c0b7fdfda5e005cd18dad160.jpg",

  "https://i.pinimg.com/236x/58/35/17/58351752619e86e08c9cb66c5e2129ea.jpg",

  "https://i.pinimg.com/236x/e7/80/d8/e780d8d2ae58d1811c77e5b3ce207908.jpg",

  "https://i.pinimg.com/236x/4c/a5/0e/4ca50e5c42b0f00746f776c385159eac.jpg",

  "https://i.pinimg.com/236x/62/d5/40/62d5405b4e7e3f1976bdde0bd4b01c18.jpg",

  "https://i.pinimg.com/236x/93/5f/06/935f06559b5127fbb3ff13d2c82daafc.jpg",
]
column4.forEach(val=>{
    let y = document.createElement('img')
    y.setAttribute('src', val)
    document.querySelector('.column-4').append(y)
})
let column5 = [
  "https://i.pinimg.com/236x/2a/21/d6/2a21d6ea18c78da748dfec731d9f8fb6.jpg",

  "https://i.pinimg.com/236x/5f/d7/76/5fd7765eb50382e14f1cfcf6b1e31bec.jpg",

  "https://i.pinimg.com/236x/f7/54/8c/f7548cbcea7a36f022e54b8a26e843a3.jpg",

  "https://i.pinimg.com/236x/c3/08/8c/c3088c8820962ffa61a24aa2378e3fb0.jpg",

  "https://i.pinimg.com/236x/a3/b2/4e/a3b24ef4cb405c02affefa75cdd54e82.jpg",

  "https://i.pinimg.com/236x/4e/b4/6b/4eb46b49051a504103adbdf026b63d45.jpg",

  "https://i.pinimg.com/236x/11/84/9e/11849e3e6e13cc54dd87d6eb6c95de61.jpg",

  "https://i.pinimg.com/236x/8a/72/ed/8a72edcf508be560a66d8b0c824bb69f.jpg",

  "https://i.pinimg.com/236x/64/0b/ff/640bff86cbee248f551e6e45f6ff3175.jpg",

  "https://i.pinimg.com/236x/75/38/ca/7538cac519b0c9aee062459f7cdbbf70.jpg",
];
column5.forEach(val=>{
    let y = document.createElement('img')
    y.setAttribute('src', val)
    document.querySelector('.column-5').append(y)
})
let column6 = [
  "https://i.pinimg.com/236x/74/8c/e0/748ce081da9b8b160564ceb8f88cdad1.jpg",

  "https://i.pinimg.com/236x/41/ab/71/41ab714232977924845696dd24fa8896.jpg",

  "https://i.pinimg.com/236x/9f/53/18/9f531808935be0d29bb7d0e5f6298b0c.jpg",

  "https://i.pinimg.com/236x/7d/d9/ee/7dd9ee5db458bedc0bacf76c74e3f2d9.jpg",

  "https://i.pinimg.com/236x/c5/af/5e/c5af5ebdf4e405bb75fe30ea728af630.jpg",

  "https://i.pinimg.com/236x/4a/f6/b1/4af6b1866cb0b54f363584bea8407591.jpg",

  "https://i.pinimg.com/236x/dc/a4/f6/dca4f67448e789f2e1b386d142c54d3c.jpg",

  "https://i.pinimg.com/236x/f2/c7/39/f2c739cdfb39c3154908d98f7d7a7940.jpg",

  "https://i.pinimg.com/236x/bc/ed/55/bced55f84cb8d71c585b10f3e48e00da.jpg",

  "https://i.pinimg.com/236x/9c/c6/75/9cc6759e1205db4a91a4baf4a60b00d5.jpg",
];
column6.forEach(val=>{
    let y = document.createElement('img')
    y.setAttribute('src', val)
    document.querySelector('.column-6').append(y)
})