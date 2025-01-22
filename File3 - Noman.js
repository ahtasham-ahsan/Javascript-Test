const promise1 = () => new Promise(resolve => setTimeout(() => resolve(1), 1000));
const promise2 = () => new Promise(resolve => setTimeout(() => resolve(2), 500));
const promise3 = () => new Promise(resolve => setTimeout(() => resolve(3), 800));
const promise4 = () => new Promise(resolve => setTimeout(() => resolve(4), 300));
const promiseFunctions = [promise1, promise2, promise3, promise4];
const delay = 1000;

async function promise(){
    for(let i = 0; i< promiseFunctions.length; i++){
        await setTimeout(() => {
            console.log(promiseFunctions[i]);    
        }, 1000);
    }
}

promise()