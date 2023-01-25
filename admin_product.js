var product= document.getElementById("product")


firebase.database().ref("Dishes").once("value",(snap)=>{
    console.log(snap.toJSON())
    
    var value = Object.values(snap.toJSON())//object to array 
    // console.log(value)

    
    value.map((v,i)=>{
        console.log(v)
        product.innerHTML+=`
        <tr class="table-dark">
            <td class="table-dark">${i+1}</td>
            <td class="table-dark">${v.Dish_Name}</td>
            <td>${v.Price}</td>
            <td>${v.Qty}</td>
            <td>
            <img src=${v.img_Url} style="width:50px;height:50px" alt="">
          </td>
        </tr>`
    })
})


