let s=prompt()
let num=""
let max=-1
for (let i=0;i<s.length;i++){
    if(s[i]>='0' && s[i]<='9'){
        num+=s[i];
    }
    else{
        if(num!=""){
            if(!num.includes('9')){
                if(Number(num)>max){
                    max=Number(num);
                }
            }
            num="";
        }
    }
}
if(num!=""){
    if(!num.includes('9')){
        if(Number(num)>max){
            max=Number(num);
        }
    }
}
console.log(max);