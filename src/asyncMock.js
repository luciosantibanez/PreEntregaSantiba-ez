
const products = [
    {
        id:"1",
        name: "Escritorio Claro",
        price: 15000,
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_867043-MLA48499114388_122021-F.webp",
        stock: 3,
        description: "Escritorio 1,50 x 60",
    },
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        },600)
    })
}

export const getProductsById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },600)
    })
}
