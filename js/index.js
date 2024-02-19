const selectedTicketArr = [];
function handleTicket(){
   const elementId = event.target.id;  
   // selectedTicketArr.push(elementId);
   
   if (selectedTicketArr.length === 0) {
      selectedTicketArr.push(elementId);
      document.getElementById(elementId).classList.add('bg-amber-700');
    } 
    else if(selectedTicketArr.length < 4){    
      document.getElementById(elementId).classList.add('bg-amber-700');
      let unique = true;
      for (let i = 0; i < selectedTicketArr.length; i++) {
        
        const id = selectedTicketArr[i];
        if(id === elementId) {
          unique = false;
          break;
        }
      }
      if(unique){
          selectedTicketArr.push(elementId);
      }
   }

   document.getElementById("seat-num").innerText = selectedTicketArr.length;

   document.getElementById('left-seat').innerText = 40 -selectedTicketArr.length;

   document.getElementById("ttl-price").innerText = selectedTicketArr.length * 550;

   document.getElementById("coupon-price").innerText = document.getElementById("ttl-price").innerText;

   const seatList = document.getElementById("seatList");
   seatList.innerHTML = "";
 
   for (let i = 0; i < selectedTicketArr.length; i++) {
     const seat = selectedTicketArr[i];
     seatList.innerHTML += `<tr>
     <td>${seat}</td>
     <td>Economoy</td>
     <td>550</td>       
     </tr>`;
   }


}

function couponPrice(){
   const coupon = document.getElementById("coupon").value;
   const couponPrice = document.getElementById("ttl-price").innerText * 85/100;
   const couponPrice2 = document.getElementById("ttl-price").innerText * 80/100;
   console.log(couponPrice);
   if(coupon === "new15" || coupon === "NEW15"){
      document.getElementById("coupon-price").innerText =couponPrice;
   }
   else if(coupon === "couple20"){
      document.getElementById("coupon-price").innerText =couponPrice2;
   }
   else{
      document.getElementById("coupon-price").innerText = document.getElementById("ttl-price").innerText;
   }
}
function next(){
   const name = document.getElementById("name").value;
   const num = document.getElementById("num").value;
   const seat = document.getElementById("seat-num").innerText;
   if (name !== "" && num !== "" && seat > 0) {
      const myModal = document.getElementById("my_modal_4");
      myModal.showModal();
   }
   
}