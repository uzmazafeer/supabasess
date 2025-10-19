 import supabase from './config.js';
 let username = document.getElementById('username');
 async function userFetch(){
   
    try {
         const { data, error } = await supabase.auth.getUser();
         console.log(data);
         if(data.user){
             username.innerText = data.user.user_metadata.full_name;
         }else{
             window.location.href = "index.html";
         }
    } catch (error) {
        console.log(error);
        
    }
    
 }
 userFetch();

