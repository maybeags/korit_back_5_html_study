/**
 * servlet 프로젝트명: product
 * group_id: com.study
 * artifact_id: product
 * name: product
 * jdk: 11
 * dependencies
 *  1. lombok
 *  2. jsp
 *  3. gson
 *  4. mysql
 * 
 * package
 *  com.study.product
 *      config      -   DBConfig
 *      dao         -   ProductDao
 *      entity      -   Product
 *      filter      -   CommonFilter
 *      servlet     -   InsertProductServlet(/product, POST)
 *                  -   SearchProductServlet(/products, GET)
 * 
 * DB(db_study)
 * tables(product_tb)
 * product_id, product_name(유니크), product_price, product_size(SS, S, M, L, XL, XXL)
 *  
 */

async function handleAddClick() {
    const productInputs = document.querySelectorAll(".product-inputs");
    const data = {
        productName: productInputs[0].value,
        productPrice: productInputs[1].value,
        productSize: productInputs[2].value
    };

    console.log(data);
    const jsonData = JSON.stringify(data);
    console.log(jsonData);
    const dataObj = JSON.parse(jsonData);
    console.log(dataObj);

    const option = {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonData
    };

    try {
        const response = await fetch("http://localhost:8080/product/product", option);

        if(!response.ok) {
            throw await response.json();
        }
        
        console.log(response);
    
        const json =  await response.json();
    
        console.log(json);

        console.log("test");
    
    } catch(error) {
        console.log(error);
        alert("안돼");
    }

}