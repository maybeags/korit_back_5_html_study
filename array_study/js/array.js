// const submitButton = document.querySelector(".input-submit")

// function submitButtonWork() {

//     submitButton.onclick = () => {
//         const insert = document.querySelector(".input");
//         const inputList = document.querySelector(".output-list");

//         inputList.innerHTML +=`
//             <li>
//                 <span>1번</span>
//                 <span class="output-content">${insert.value}</span>
//                 <input type="text">
//                 <button>수정</button>
//                 <button>삭제</button>
//             </li>
//         `;
    
//         insert.onkeyup = (e) => {
//             if(e.keyCode === 13) {
//                 submitButton.click();
//             }
//         }
//     }
// }

function submit() {
    const insert = document.querySelector(".input");
    const inputList = document.querySelector(".output-list");
    inputList.innerHTML +=`
        <li>
            <span>1번</span>
            <span class="output-content">${insert.value}</span>
            <input type="text">
            <button>수정</button>
            <button>삭제</button>
        </li>
    `;
}