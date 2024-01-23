const getPromises = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Fetching Data1...'),
            resolve('success')
        }, 4000);
        
    });
};

function asyncFunction1(){
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            console.log('Data1');
            resolve('success');
        }, 4000)
    })
}

function asyncFunction2(){
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            console.log('Data1');
            reject('reject');
        }, 4000)
    })
}

console.log('Fetching Data2')
let p1 = asyncFunction1();
p1.then((res) => {
    console.log(res);
    console.log('Fetching data2');
    let p2 = asyncFunction2();
    p2.then((res) => {
        console.log(res)
    })
})

//Callback Hell

function getData(dataId, getNextData){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data', dataId);
            resolve('success');
            if(getNextData){
                getNextData();
            }
        }, 5000);
    });
}

getData(1, ()=> {
    console.log('Getting data2...');
    getData(2, ()=> {
        console.log('getting data3');
        getData(3, () =>{
            console.log('getting Data4...');
            getData(4);
        });
        });
});



//Promise Chain

function getData(dataId, getNextData){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('data', dataId);
            resolve('success');
            if(getNextData){
                getNextData();
            }
        }, 5000);
    });
}
getData(1)
.then((res) =>{
    return getData(2);
})
.then((res) => {
    return getData(3);
})
.then((res) =>{
    console.log(res);
})


//Asynce await

async function hello(){
    console.log('hello')
}

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('Weather Data');
        resolve(200);
        },2000);
    });
}

(async function(){
    console.log('Getting Data1')
    await api();
    console.log('Getting Data2')
    await api();
    console.log('Getting Data3')
    await api();
    console.log('Getting Data4')
    await api();
    console.log('Getting Data5')
    await api();
    console.log('Getting Data6')
    await api();
})();










