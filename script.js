document.addEventListener('DOMContentLoaded',()=>{
  const backHome=document.getElementById('backToHomeNav');
  if(backHome){
    backHome.addEventListener('click',()=>window.location.href='index.html');
  }

  // دوال الشراء والدفع
  window.purchase=function(tokens,price){
    // هنا تقدر تدمج مع Paymob أو أي API دفع
    alert(`شراء ${tokens} توكنز بسعر ${price} EGP`);
  }

  window.handlePaymentMethod=function(method){
    alert(`طريقة الدفع المختارة: ${method}`);
  }
});