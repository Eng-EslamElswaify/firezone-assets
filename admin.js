import { auth } from "./firebase-init.js";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

document.addEventListener('DOMContentLoaded',()=>{
  const logoutBtn=document.getElementById('logoutBtn');
  if(logoutBtn){
    logoutBtn.addEventListener('click',()=>signOut(auth));
  }

  const backBtn=document.getElementById('backToHomeNav');
  if(backBtn){
    backBtn.addEventListener('click',()=>window.location.href='index.html');
  }

  onAuthStateChanged(auth,user=>{
    if(!user){
      window.location.href='index.html';
    }
  });
});