// function pattern1(n){
//     let rows=n/2+1;
//     let st=1;
//     let sp=rows-1;
//     for(let i=1;i<=rows;i++){
//         let ans="";
//         for(let j=1;j<=sp;j++){
//             ans+=" ";
//         }
//         for(let j=1;j<=st;j++){
//             ans+=j+" ";
//         }
//         st+=2;
//         sp-=1;
//         console.log(ans);
//     }
// }
// pattern1(9);


function pattern1(n){
    let rows=2*n-1;
    let st=1;
    let sp=n-1;
    for(let i=1;i<=rows;i++){
        let ans="";
        for(let j=1;j<=sp;j++){
            ans+=" ";
        }
        for(let j=1;j<=st;j++){
            ans+=j+" ";
        }
        if(i<n){
            st+=1;
            sp-=1;
        }else{
            st--;
            sp++;
        }
        console.log(ans);
    }
}
pattern1(4);