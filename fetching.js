fetch('http://localhost:5000/products')
.then(function(response){
    return response.json();
    })
    .then(function(package){
    console.log(package);

    let box=document.getElementById('products'); 
    package.forEach(i=>{
        let prodItem=document.createElement('li')
        prodItem.innerText=`${i.name}`
        box.appendChild(prodItem)
    })   
    })
    .catch(function(error){
    console.log('error',error);
    });


fetch('http://localhost:5000/products/fruits')
.then(function(response){
    return response.json();
})
.then(function(package){
    console.log(package);

let box=document.getElementById('fruList') 
package.forEach(i=>{
    let prodItem=document.createElement('li')
    prodItem.innerText=`${i.name}`
    box.appendChild(prodItem)
})   
})
.catch(function(error){
    console.log('error',error);
});


fetch('http://localhost:5000/products/vegetables')
.then(function(response){
    return response.json();
})
.then(function(package){
    console.log(package);

let box=document.getElementById('vegList') 
package.forEach(i=>{
    let prodItem=document.createElement('li')
    prodItem.innerText=`${i.name}`
    box.appendChild(prodItem)
})   
})
.catch(function(error){
    console.log('error',error);
});

