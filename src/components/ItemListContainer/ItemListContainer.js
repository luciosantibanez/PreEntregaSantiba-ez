// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const ItemListContainer = ({greeting}) => {
//     const [products, setProducts] = useState ([])
//     const {categoryId} = useParams()

//     useEffect ( ()=> {
//         const asyncFunc = categoryId 

//         asyncFunc(categoryId)
//             .then(response => {
//                 setProducts(response)
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//     }, [categoryId])

//     return(
//         <div>
//             <h2>{greeting}</h2>

//         </div>

//     )
// };

// export default ItemListContainer;