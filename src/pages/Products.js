import React from 'react'

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];
  
  export default function Products() {
    // const listItems = products.map(
    //     (product) => 
    //         <li>
    //             {product.title}
    //         </li>
        
    // )
  
    const product1 = <li>{products[0].title}</li>;
    const product2 = <li>{products[1].title}</li>;
    const product3 = <li>{products[2].title}</li>;

    const dayproduct = products.map(
        // duyệt qua hết
        (product) =>
            <li className={product.isFruit ? "text-bubble-gum" : ""}>{product.title}</li>
    )

    // truy cap phan tu trong mang tenmang[sophantu]
    //truy cap phan tu trong object object.tenkey

    return (
    //   <ul>{listItems}</ul>
        <ul>
            {/* {product1}
            {product2}
            {product3} */}

            {dayproduct}
        </ul>
    );
  }