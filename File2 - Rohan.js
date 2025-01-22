const obj = {
    "retailer": "Target",
    "purchaseDate": "2022-01-01",
    "purchaseTime": "13:01",
    "items": [
      {
        "shortDescription": "Mountain Dew 12PK",
        "price": "6.49"
      },{
        "shortDescription": "Emils Cheese Pizza",
        "price": "12.25"
      },{
        "shortDescription": "Knorr Creamy Chicken",
        "price": "1.26"
      },{
        "shortDescription": "Doritos Nacho Cheese",
        "price": "3.35"
      },{
        "shortDescription": "   Klarbrunn 12-PK 12 FL OZ  ",
        "price": "12.00"
      }
    ],
    "total": "35.35"
  }

function second_Function(count){
    // for (const key in obj) {
    //     let length_Of_Retailer = obj[key].length;
    //     if(length_Of_Retailer%1 === 0){
    //         length_Of_Retailer+= 50
    //     }
    //     if(length_Of_Retailer % 0.25 === 0){
    //         length_Of_Retailer += 25;
    //     }
    //     console.log(length_Of_Retailer);
        
    // }
    let length_Of_Retailer = 0;
    length_Of_Retailer += obj.retailer.length;
    if(obj.total%1===0){
        length_Of_Retailer += 50;
    }
    if(obj.total % 0.25 === 0){
        length_Of_Retailer += 25;
    }
    if(obj.items.length > 1){
        let val = (Math.floor(obj.items.length / 2)) * 5;
        length_Of_Retailer += val;
    }
    obj.items.forEach((item) => {
        if(item.shortDescription.trim % 3 === 0){
            length_Of_Retailer += Math.floor(item.price * 0.2)
        }  
    })

    console.log(length_Of_Retailer);
}

function taking_Input(oobj){
    let new_Arr = [];
    new_Arr.push(oobj);
    // console.log(new_Arr);
    
    let count = 0;
    // new_obj = {
    //     [count]: obj.retailer
    // }
    count++
    return count;
}
console.log(obj.purchaseDate)


second_Function(taking_Input(obj))
