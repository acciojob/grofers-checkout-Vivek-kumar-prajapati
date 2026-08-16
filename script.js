const getSumBtn = document.createElement("button");
const total =document.querySelector(".total");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
 let pricelist= document.querySelectorAll(".price");
	let sum=0;
    for(let item of pricelist){
		 sum+=Number(item.value);
		
	}
   total.TextContent=sum;
	
  
};

getSumBtn.addEventListener("click", getSum);

