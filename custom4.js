let s=1;
let say =0;
d=0;

for(i=100; i<=999; i++){
if(i%25==0 && s%2!=0){
    say++;
    s=s*i;

}
d=Math.round(Math.pow(s,1./say),3);
console.log(d);
}

