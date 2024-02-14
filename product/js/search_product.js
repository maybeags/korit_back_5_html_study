async function handleSearchClick() {
    try {
        const response = await fetch("http://localhost:8080/product/products");
        if(!response.ok) {
            throw await response.json();
        }

        const responseData = await response.json();
        const studentList = document.querySelector(".product-list");
        studentList.innerHTML = ``;


        for(let product of responseData.data) {
            studentList.innerHTML += `
            <tr>
                <td> ${product.productId} </td> 
                <td> ${product.productName} </td> 
                <td> ${product.productPrice} </td>
                <td> ${product.productSize} </td>
            </tr>
            `; 
        }

    } catch(error) {
        console.log(error);
    }
}