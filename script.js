const getSumBtn = document.createElement("button");
let total =document.querySelector(".total");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
 let pricelist= document.querySelectorAll(".price");
	let sum=0;
    console.log(pricelist.innerText)
    for(let item of pricelist){
        
		 sum+=Number(item.innerText);
		
	}
        console.log(sum)
   total.innerText=sum;
	
    
};



getSumBtn.addEventListener("click", getSum);

