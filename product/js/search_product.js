async function handleSearchClick() {
    try {
        const response = await fetch("http://localhost:8080/product/products");

        const responseData = await response.json();

        const productList = document.querySelector(".product-list");
        productList.innerHTML = "";

        for(let product of responseData) {
            productList.innerHTML += ProductInfoTr(product);
        }

        // for(let product of responseData.product) {
        //     productList.innerHTML += `
        //     <tr>
        //         <td> ${product.productId} </td> 
        //         <td> ${product.productName} </td> 
        //         <td> ${product.productPrice} </td>
        //         <td> ${product.productSize} </td>
        //     </tr>
        //     `; 
        // }

    } catch(error) {
        console.log(error);
    }
}

function ProductInfoTr({ productId, productName, productPrice, productSize }) {
    return `
        <tr>
            <td>${productId}</td>
            <td>${productName}</td>
            <td>${productPrice}</td>
            <td>${productSize}</td>
        </tr>
    `;
}