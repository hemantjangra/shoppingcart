import cartData from "../data/data";

// const getData = (apiUrl)=>{
//     return new Promise((resolve, reject)=>{
//         fetch(apiUrl)
//         .then(result =>  {return result.json();})
//         .then(data=> resolve(data))
//         .catch(error => reject(error));
//     });
// }

// const getData = (apiUrl) => {
//     return fetch(apiUrl)
//         .then((result =>  result.text()))
//         .catch(error => {
//             return Promise.reject(error);
//         });
// }

const getData = (apiUrl) => {
    return fetch(apiUrl)
        .then(result => { 
            resStatus = result.status;
            result.json()})
        .then(data=> {
            if(resStatus === 500){
            return Promise.resolve(cartData);
        }else{
            return Promise.resolve(data);
        }
        })
        .catch(error => {
            return Promise.resolve(cartData);
        });
}

export default getData;