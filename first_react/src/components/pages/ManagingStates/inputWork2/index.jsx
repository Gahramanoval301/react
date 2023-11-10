import React from 'react'

const InputWork2 = () => {
   let promise = new Promise(function(resolve, reject){
        resolve('Im done')
        reject(new Error('im rejected'))
    })
    console.log(promise);
    promise.then((obj)=>{
        console.log(obj);
    })
    .catch((obj)=>{
        console.log(obj);
    })
 
}

export default InputWork2