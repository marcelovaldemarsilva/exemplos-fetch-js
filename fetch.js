

function FetchGet(){
fetch('https://jsonplaceholder.typicode.com/posts',{
method:'GET'
})
.then((resp)=>resp.json())
.then((data)=>console.log(data))
.catch((err)=>console.log(err))

}

function FetchPost(title,body){
  fetch('https://jsonplaceholder.typicode.com/posts',{
  method:'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },

  //make sure to serialize your JSON body
  body: JSON.stringify({
    title: title,
    body: body
  })
})
  
  .then((resp)=>resp.json())
  .then((data)=>console.log(data))
  .catch((err)=>console.log(err))
  
  }

    function FetchDelete(id){

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
method:'Delete'
})
.then((resp)=>resp.json())
.then((data)=>console.log(data))
.catch((err)=>console.log(err))

}

function FetchGetSearch(id){
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
  
  })
  .then((resp)=>{
    if(resp.ok){
    resp.json()
    console.log(resp.ok)
    }else{
      console.log('Não Encontrato!!')
    }}
  
  )
  .then((data)=>console.log(data))
  .catch((err)=>console.log(err))
  }
    
  FetchGetSearch(10)
  
  
  

