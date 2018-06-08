
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
        .then((result =>  result.json()))
        .then(data=> {
            return Promise.resolve(data);
        })
        .catch(error => {
            return Promise.reject(error);
        });
}

export default getData;