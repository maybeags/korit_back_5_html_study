async function handleSubmitClick() {
    const dataInputs = document.querySelectorAll(".data-inputs");
    const data = {
        name: dataInputs[0].value,
        age: dataInputs[1].value
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
        const response = await fetch("http://localhost:8080/insert_and_select/data/addition", option);

        if(!response.ok) {
            throw await response.json();
        }
        
        console.log(response);
    
        const json =  await response.json();
    
        console.log(json);

        console.log("test");
    
    } catch(error) {
        console.log(error);
        alert(error.errorMessage);
        // console.log("에러 처리");
        // console.log(error);
    }
    
    // const p = fetch("http://localhost:8080/insert_and_select/data/addition", option);
    // p.then((response) => {
    //     response.json()
    //     .then(json => {
    //         console.log(json.data);
    //         console.log("test");
    //     })
    // }).catch((error) => {
    //     console.log("프로미스 예외처리");
    //     console.log(error);
    // });
};