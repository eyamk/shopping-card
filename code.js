 
 
 var c,y,z;
 function mul(){
     var c=230;
   var a=document.getElementById('number_passengers').value;
   console.log(c);
   /*var b=document.getElementById('price-item').textContent*/
    c*=a;
    
   /* alert('le total est'+c)*/
  
 document.getElementById('prix1').textContent=c;
 }
 

 
 
 


 function secondmul(){
    var y=320;
    var m=document.getElementById('numberpassengers').value;
   /* var n=document.getElementById('priceitem').textContent*/
    y*=m; 
  console.log(y)
  document.getElementById('prix2').textContent=y;
 }


 function thirdmul(){
   var z=180;
    var t=document.getElementById('nb-passengers').value;
   /* var s=document.getElementById('p-item').textContent*/
     z*=t;
     
  console.log(z)
  document.getElementById('prix3').textContent=z;
 }

function total(){
    var sum=0;
    var p1=document.getElementById('prix1').innerHTML;
    var p2=document.getElementById('prix2').innerHTML;
    var p3=document.getElementById('prix3').innerHTML;
    sum=Number(p1)+Number(p2)+Number(p3);
    document.getElementById('prixtotal').textContent=('$'+sum);
    console.log(sum);
}











 






/* var x=document.getElementsByClassName('btn-danger')
console.log(x)
for(var i=0;i<x.length;i++){
    var button=x[i]
    button.addEventListener('click',function(event){
        var buttonclicked=event.target
        buttonclicked.parentElement.parentElement.remove()
      
        updatetotal()
       
    })
    
}
  */
/* function updatetotal(){
 var y=document.getElementsByClassName('cart')[0]
 var rows=y.getElementsByClassName('first-class')
var total=0
for(var i=0;i<rows.length;i++)
{
    var cartrow=rows[i]
    var priceelemment=cartrow.getElementsByClassName('price-item')[0]
    var quantityelement=cartrow.getElementsByClassName('quantity-input')[0]
    var price=parseFloat(priceelemment.innerText.replace('$',''))
    var quantity=quantityelement.nodeValue
    total=total+(price*quantity)
}
document.getElementsByClassName('total-price')[0].innerText='$'+total
} */