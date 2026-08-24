let l=prompt("enter the id")
let r=prompt("enter the id")
let count=0
for(let i=l;i<=r;i++){
    let temp=i
    let set=new Set();
    let unique=true;
    while(temp>0){
        let h=temp%10;
        if(set.has(h)){
            unique=false;
            break;
        }
        set.add(h);
        temp=Math.floor(temp/10);
    }
    if(unique){
        count++;
    }
}
if (count>0){
    console.log(count);
}
else{
    console.log("NoUnique number")
}