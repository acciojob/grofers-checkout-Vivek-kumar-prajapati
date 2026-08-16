const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
 let pricelist= document.querySelectorAll(".price");
	conole.log(pricelist)
  
};

getSumBtn.addEventListener("click", getSum);

