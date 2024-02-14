async function fx1() {
    console.log("fx1 비동기 호출");
    return 10;
    // return 10;                          // async를 붙이는 순간 function은 promise가 되기 때문에 function의 return은 promise의 resolve로 간주됨.
                                           // async를 붙이고 함수 정의를 하면 맨 뒤에 그냥 resolve가 있는 것으로 간주됨. 그렇기 때문에 handleSubmitClick2에서 fx1()다음에 then이 호출 가능
    // throw new Error();                  // async 안에서 reject를 호출하고 싶다면 new Error()를 throw하면 된다.
}

async function fx2(num) {
    console.log("fx2 비동기 호출");
    console.log(num + " 출력");
}

async function fx3() {
    let arg = 0;
    let fx1Result = await fx1();           // 비동기처리를 동기처리로 바꿔주는 것이 await 명령
    arg = fx1Result;
    await fx2(arg);
    // fx1().then((result) => {
    //     arg = result;
    //     console.log(arg);
    //     fx2(arg);
    // });
}

function handleSubmitClick2() {
    fx3();                                  // await은 async 함수에만 쓸 수 있기 때문에 handleSubmitClick2() 내부에 있는 fx3()에는 await을 달 수 없다.

    // fx1().then(() => {
    //     console.log("then 호출");
    // }).catch(() => {
    //     console.log("오류 생성");
    // });

    // console.log("동기 실행");
}

function handleSubmitClick(){
    const p1 = new Promise((resolve, reject) => {
        console.log("p1 프로미스 실행");
        resolve();
    });
    
    p1.then(() => {
        console.log("p1 then 실행");
        return 10;
    }).then((num) => {
        console.log(num);
    }).then(() => {
        console.log("세번째 then");
    });

    p1.catch(() => {
        console.log("오류");
    })

    const p2 = new Promise((resolve, reject) => {
        console.log("p2 프로미스 실행");
    });

    console.log("동기 실행");
}
