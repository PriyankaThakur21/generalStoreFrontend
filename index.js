async function saveItems(event){
    event.preventDefault()
    const name=event.target.name.value;
    const description=event.target.description.value;
    const price=event.target.price.value;
    const quantity=event.target.quantity.value;
    const obj={name, description, price, quantity};
    try{
    const post=await axios.post('http://localhost:8080/postItems',obj)
    showonscreen(post.data);
    }
    catch(err){
    console.log(err)
    }
    event.target.reset();
}
function showonscreen(obj){
    const p=document.getElementById('block');
    const list=document.createElement('li');
    list.id=obj.id
    list.textContent=list.textContent+obj.name+'--'+obj.description+'--'+obj.price+'--'+obj.quantity;
    const Buy1=document.createElement('input');
    Buy1.type='button';
    Buy1.value='Buy1';
    const Buy2=document.createElement('input');
    Buy2.type='button';
    Buy2.value='Buy2';
    const Buy3=document.createElement('input');
    Buy3.type='button';
    Buy3.value='Buy3';
    Buy1.onclick=function() {delete1(obj)};
    Buy2.onclick=function() {delete2(obj)};
    Buy3.onclick=function() {delete3(obj)};
    list.appendChild(Buy1)
    list.appendChild(Buy2)
    list.appendChild(Buy3)
    p.appendChild(list);
}

async function delete1(obj){
   try{
    const update = await axios.get(`http://localhost:8080/delete1/${obj.id}`);
    console.log(update);
    location.reload();
   } 
   catch(error){
    console.log(error);
   }
}

async function delete2(obj){
    try{
     const update = await axios.get(`http://localhost:8080/delete2/${obj.id}`);
     console.log(update);
     location.reload();
    } 
    catch(error){
     console.log(error);
    }
 }

 async function delete3(obj){
    try{
     const update = await axios.get(`http://localhost:8080/delete3/${obj.id}`);
     console.log(update);
     location.reload();
    } 
    catch(error){
     console.log(error);
    }
 }
    
window.addEventListener('DOMContentLoaded', async ()=>{
    try{
    const getitems= await axios.get('http://localhost:8080/getItems');
    for(let i in getitems.data){
        showonscreen(getitems.data[i]);
    }
}
    catch(error){
        console.log(error);
    }
})