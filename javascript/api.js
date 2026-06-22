/* we refere to them a smessengers that alows systems to communicate 
htey do so via assynchronous programming 
application programming interface(api)
as compared to websockets which constantly supplly info two way stream apis ,only supply onfo 
one way upon request 
they use this via various methods and its useful in these ways {
    retreiving data from database
    sending data to db 
    intergrating third party aplications (weather maps,google maps )

}
 client >sends a reuest >server
 client<response >server
 the methods involved are {
 POST >>SEND 
 GET >>RETRIVE 
 PUT >>UPDATE
 DELETE 
 }
 TO INTERGRATE apiS WE USE ASSYNCHRONOUS PROMISE BASED APPROACH AS WELL AS 
 PROMISES
 */

 //PROMISES>>THIS ARE RESOLVE /REJECT PARAMETER BASED objects  THAT ALLOW US TO EXCUTE ASSYNSCHROUS CODE 

/*  ITS DEFINED VIA THE NEW PROMISE CONSTRUCOTR SET TO new promise (resolve ,reject ) */


/* to use promises we use the
 .then >>when a promise has been attianed and the data is ready to be processed (in json)
 when you get the json yo u convert it to data >>this is goin to be used here 
.catch >>an exemption block to trap any issues arising from unsolved promises 
.finally >>it assertains that the promise has been resolved */
/* 
let promise =new Promise((resolve,reject )=>{
let isTrue=false;


if(isTrue){
    resolve( console.log("promise has been resolved"))
;
    
}
else{

       reject(console.log("promise is rejected")
        )
;
}

}) */

//
// 
// to invole and use promises we inccoporate the .then and the others 

let fetchData=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(console.log(   "hello i am delivered ")
   )
    },10000)
})

fetchData
  .then((data)=>{
    console.log(data);
    
  })
  .catch((err)=>{
    throw new Error
  })
  .finally(()=>{
    console.log("finally i am done");
    
  })
