const addBoxButton = document.querySelector(".add-box-button");

addBoxButton.onclick = () => {
    const boxContainer = document.querySelector(".box-container1");
    boxContainer.innerHTML += `<div class="box"></div>`;
    const boxAdd = document.querySelector(".box-container2");
    
    
    const boxList = document.querySelectorAll(".box");

    for(let i = 0; i < boxList.length ; i++) {
        boxList[i].onclick = () => {
            let isBlueBox = boxList[i].classList.contains("blue-box");
            let isRedBox = boxList[i].classList.contains("red-box");
            if(isBlueBox == true) {
                boxList[i].classList.remove("blue-box");
                boxList[i].classList.add("red-box");
            } else if(isRedBox == true) {
                boxList[i].classList.remove("blue-box");
                
                boxContainer.removeChild(boxList[i]);
                boxAdd.appendChild(boxList[i]);
            } else  {
            boxList[i].classList.add("blue-box");
            }
        }
    }
}

