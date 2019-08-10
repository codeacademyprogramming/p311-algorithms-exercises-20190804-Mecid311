let a=+(prompt('a-ni daxil edin:'));
let b=parseInt(prompt('b-ni daxil edin:'));
let c=parseInt(prompt('c-ni daxil edin:'));
if(a%2==0 && b%2==0 && c%2==0 && a%4==0 && b%4==0 && c%4==0 ) {
    alert('eded hem 2-e hemde 4-e bolunur');
    
}
else{
    alert('eded  2-e ve 4-e bolunmur');
}
if (a%8==0 && b%8==0 && c%8==0){
    alert('2-ye ve 4-de bolunen ededler 8-e de bolur')
}
else{
    alert('2-ye ve 4-de bolunen ededler 8 e bolunmur')
}