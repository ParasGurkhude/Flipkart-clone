let ArrAds = [
    { image: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/c71214dd5d01be5c.jpg?q=20"},
    { image: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/39e74c24b819a298.jpeg?q=20"},
    { image: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/dbce2b685f6472f2.jpeg?q=20"},
    { image: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/ae43276363ef6e32.jpg?q=20"},
    { image: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/c71214dd5d01be5c.jpg?q=20"},
    { image: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/39e74c24b819a298.jpeg?q=20"},
    { image: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/dbce2b685f6472f2.jpeg?q=20"},
    { image: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/ae43276363ef6e32.jpg?q=20"},
    { image: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/c71214dd5d01be5c.jpg?q=20"},
    { image: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/39e74c24b819a298.jpeg?q=20"},
    { image: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/dbce2b685f6472f2.jpeg?q=20"},
    { image: "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/ae43276363ef6e32.jpg?q=20"}
]

let scrollcontainer = document.querySelector(".gallary")
let backBtn = document.querySelector(".sileft")
let nextBtn = document.querySelector(".siright")

ArrAds.forEach((el) => {
    let span = document.createElement("span")
    let image = document.createElement("img")
    image.src = el.image

    span.append(image)
    scrollcontainer.append(span)
})

scrollcontainer.addEventListener("wheel", (event) => {
    event.preventDefault();
    scrollcontainer.scrollLeft += event.deltaY;
    scrollcontainer.style.scrollBehavior = "auto"
})

nextBtn.addEventListener("click", () => {
    scrollcontainer.style.scrollBehavior = "smooth"
    scrollcontainer.scrollLeft += 1000;
})

backBtn.addEventListener("click", () => {
    scrollcontainer.style.scrollBehavior = "smooth"
    scrollcontainer.scrollLeft -= 1000;
})

// let ArrFurniture = [
//     {
//         title: "Wardrobe",
//         price: 6999,
//         image: "https://rukminim2.flixcart.com/image/612/612/xif0q/wardrobe-closet/p/4/g/-original-imah3crehcywafx8.jpeg"
//     },
//     {   
//         title: "TV Units",
//         price: 1490,
//         image: "https://rukminim2.flixcart.com/image/612/612/xif0q/tv-entertainment-unit/0/8/y/-original-imagrtbhz4heeyyh.jpeg"
//     },
//     {   
//         title: "Bean Bag",
//         price: 599,
//         image: "https://rukminim2.flixcart.com/image/612/612/xif0q/bean-bag-cover/n/9/j/xxxl-premium-leatherette-devogue-original-imagjxr2eywrhffn.jpeg"},
//     {   
//         title: "Recliners",
//         price: "Leatherette & more",
//         image: "https://rukminim2.flixcart.com/image/612/612/xif0q/recliner/v/b/f/-original-imagtjkhhf5yvkg9.jpeg"
//     },
//     {   
//         title: "Dining Set",
//         price: 8499,
//         image: "https://rukminim2.flixcart.com/image/612/612/xif0q/dining-set/3/l/x/135-white-160-0-rosewood-sheesham-8-rectangle-43-87-45-90-6-original-imah3cnj4wjzsvz2.jpeg"
//     },
//     {   
//         title: "Sofas Set ",
//         price: 5990,
//         image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/r/w/h/0-0-green-cotton-3-2-2-1-182-88-0-0-65-0-0-woode24-76-2-original-imagukw4fzuusyjp.jpeg"
//     }
// ]

// let furniture = document.getElementsByClassName("furniture")

// let product = document.createElement("div")
// // div1.className = "product"

// furniture.append(div1)


// ArrFurniture.forEach(function(el) {

//     let div2 = document.createElement("div")
//     // div2.className = "productimg"

//     let img = document.createElement("img")
//     img.src = el.image

//     let div3 = document.createElement("div")
//     // div3.className = productinfo

//     let title = document.createElement("p")
//     title.innerHTML = el.title

//     let price = document.createElement('h4')
//     price.innerHTML = el.price

//     div2.append(img)
//     // div3.append(title, price)
//     product.append(div2)

// })

