let a=parseInt(prompt('a-ni daxil edin:'));
let b=parseInt(prompt('b-ni daxil edin:'));
let c=parseInt(prompt('c-ni daxil edin:'));
  
if((a+b)>c && (a-b)<c && a!=b && b!=c && a!=c && (a+c)>b && (a-c)<b && (b+c)>a && (b-c)<a){
   
    alert('cavab' +c+ ' , muxteliftereflidir!');
}
else if(a!=b && b==c && a!=c || a==b && b!=c && a!=c || a!=b && b!=c && a==c && a+b>c && a-b<c){
    alert(' , beraberyanlidir!');
}
 else if(a==b && b==c && c==a){
    alert(', berabertereflidir!');
}
else{
    alert(' , 0!');
}