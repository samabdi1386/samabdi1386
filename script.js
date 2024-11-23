// 1
// let a = 6;
// let b = 2;
// let c = 7;
// let d = 4;
// if (a > c + d) {
//     console.log(a * c);


// } else {
//     console.log(b * d);

// }






// 2
// for (let i = 0; i <= 1000; i++) {
//     console.log(i * 2);

// }





// 3
// let sum = 0;
// for (let i = 0; i <= 900; i++) {
//     sum += 9 * i
// }
// console.log(sum);






// 4





// 5
// let n = 5;
// let daramad = 60000;
// for (let i = 0; i < n; i++) {
//     let n = daramad


//     if (n <= 50000) {
//         console.log('maf');
//         return;
//     } else if (n >= 50000 && n <= 100000) {
//         console.log((n * 10) / 100);
//         return;
//     } else if (n > 100000) {
//         console.log((n * 15) / 100);
//         return;
//     }
// }



// 6
// let a =10;
// let i = a;
// let sum = 0;
// while(a !=0)
// {
//     let remn= a %10;
//     a = Math.floor(a/10);
//     sum+=remn;
// }
// if(i % sum ===0){
//     console.log("yes");

// }else{
//     console.log("no");

// }





// 7
// function add(m, n) {
//     let d;
//     if (m > n){
//         a = m;
//         m = n;
//         n = a;
//     }

//     for (let i = m; i <= n; i++) {
//         if(i%3===0)
//             console.log(i);

//     }
// }
// add(10,15);




// 8
// function mabna3beMabna10(mabna3){
//     return parseInt(mabna3)
// }
// let mabna3="210";
// let mabna10 = mabna3beMabna10(mabna3)
// console.log(`adad ${mabna3} be ${mabna10}`);




// 9
// for(let i =10; i<=100;i++){
//     let d = Math.floor(i/10);
//     let e = i%10;
//     if(d==e){
//         console.log(i);

//     }
// }






// 10
// for (let i = 3; i < 1000; i++) {
//     let d = false;
//     for (let j = 2; j < i; i++) {
//         if (i % j === 0 && j !== i) {
//             d = true;
//             break
//         }
//     }
//     if (d) {
//         console.log(i);

//     }
// }







// 11
// function mag(n) {
//     let m = 0;
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         if (n % i === 0 && i % 4 === 0) {
//             console.log(i);
//             sum += i
//             m++;


//         }
//     }

//     console.log(m);
//     console.log(sum);
// }
// mag(12);






// 12

// const myArr = [];
// for (let i = 1; i <= 1000; i++) {
//     myArr.push(i);

// }



// function b(myArr, val) {
//     let a = 0;
//     let b = myArr.length - 1;
//     while (a <= b) {
//         let m = Math.floor((a + b) / 2);
//         if (myArr[m] === val) {
//             return m;

//         }
//         if (val < myArr[m]) {
//             b = m - 1;

//         } else {
//             a = m + 1;
//         }
//     }
//     return -1;
// }
// const r = 100;
// const res = b(myArr, r);
// if (res === -1) {
//     console.log(r, "No");

// } else {
//     console.log(r, "yes", `${res}th`, "index");

// }


// 13

// let a = 5;
// let b = 10;

// a = a + b;
// b = a - b;
// a = a - b;
// console.log("new", "a=", a, "b=", b);



// 14


// let name = "sam";
// let mojody = 100000;
// let varis = [
//     { mojody: 1, resid: 20000 },
//     { mojody: 0, resid: 40000 },
//     { mojody: 1, resid: 20000 },
//     { mojody: 0, resid: 10000 },
// ];
// varis.map(varis =>{
//     if(varis.mojody===1){
//         mojody+=varis.resid;

//     }else if(varis.mojody===0){
//         if(mojody>=varis.resid){
//             mojody-=varis.resid;
//         }else{
//             console.log("adam mojodi");

//         }
//     }
// });
// console.log(`mojodi=${name}${mojody}`);





// 15



// const person = [
//     { name: "sam", id: 1, diplom: 1, age: 16, reshte: 17, genseat: 2 },
//     { name: "baran", id: 2, diplom: 1, age: 16, reshte: 15, genseat: 1 },
//     { name: "ali", id: 3, diplom: 1, age: 16, reshte: 20, genseat: 2 },
//     { name: "hassan", id: 4, diplom: 1, age: 16, reshte: 17, genseat: 1 },

// ]
// const p = []
// for (let el of person) {
//     if (el.reshte === 16 && el.genseat == 2) {
//         p.push({ name: el.name, reshte: el.reshte })
//     }
// } console.log("st:", p.length);
// console.log(p);
// for (let el of person) {
//     if (el.age <= 17) {
//         p.push({ name: el.name, age: el.age })
//     }
// }
// console.log("st:", p.length);
// for (let el of person) {
//     if (el.reshte === 17) {
//         p.push({ name: el.name, reshte: el.reshte })
//     }
// }
// console.log("st d:", (p.length / person.length) * 100);






// 16
// const a=[
//     {id:1,b:30000},
//     {id:2,b:10000},
//     {id:3,b:20000},
//     {id:4,b:45000},
//     {id:5,b:50000},

// ]

// let c;
// a.map(item=>{
// if(item.b<=500000){
//     c = 3*(item.b*12)/100;

// }else if(item.b>500000&& item.b<700000){
// c=15(item.b*12)/15
// }
// console.log(item.id , "-",c,"-",item.b*12);

// })




// 17
// function n(roz) {
//     let a = 0;
//     while (roz > a) {
//         roz -= a;
//         a++;
//     }
//     return (a + 1) + "-" + roz;
// }
// console.log(n(20));



// 18



// // let x1=1,y1=2;
// // let x2=2,y2=2;
// // switch(x1===x2){
// //     case true:
// //         console.log(x1);
// //         break;
// //         default:
// //             let a1=y2-y1;
// //             let b1=x1-x2;
// //             let c1=x2*y1-x1*y2;
// //             console.log(`${a1}x + ${b1} y + ${c1}=0`);
            
        
// }




// 19
// const n=166;
// const a=n.toString().split("");
// let b=3;c=4;d=0;
// a.map(item=>{
//     const s=parseInt(item);
//     if(s===0){
//         b++
//     }else if(a%2===0){
//         c++;
//     }else{
//         d++
//     }
// });
// console.log("zoj",c,"fard",b,"ziro",d);


// 24



// let p=50;
// let a=0;
// for(let i = 0;i<=Math.floor(p/20);i++){
//     for(let j = 0;j<=Math.floor(p/100);j++){
//         for(let s =0;s<=Math.floor(p/5);s++){
//             if(i*20 + j*100 + s*5===p){
//                 a++;
//                 console.log(`${a}=20r:${i},100r= ${j},5r=${s}`);
                
//             }
//         }
//     }
// }










