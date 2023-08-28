let h2 = document.getElementById('h2');
let button = document.getElementById('button1')
function friend(){
   if(button.innerText =='Add Friend'){
    h2.innerText = 'Friends';
    h2.style.color = '#00ff88';
    button.innerText = 'Remove Friend';
    button.style.backgroundColor='Red';
    button.style.color='white'
   }else{
    h2.innerText = 'Stranger';
    h2.style.color = 'Red';
    button.innerText = 'Add Friend';
    button.style.backgroundColor='#00ff88';
    button.style.color='black'
   }
}