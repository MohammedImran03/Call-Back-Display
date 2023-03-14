let div=document.createElement("div");
document.body.append(div);
let p=document.createElement("p");
div.append(p);
p.setAttribute("class","Display");
p.innerText="Click The Button";
let span=document.createElement("span");
div.append(span);
span.setAttribute("class","Message");
let button=document.createElement("button");
document.body.append(button);
button.innerHTML=`<i class="fa-solid fa-play"></i>`;
button.addEventListener("click",function(){
    setTimeout(() => {
        p.innerText="10";
        setTimeout(()=>{
            p.innerText="9";
            setTimeout(()=>{
                p.innerText="8";
                setTimeout(()=>{
                    p.innerText="7";
                    setTimeout(()=>{
                        p.innerText="6";
                        setTimeout(()=>{
                            p.innerText="5";
                            setTimeout(()=>{
                                p.innerText="4";
                                setTimeout(()=>{
                                    p.innerText="2";
                                    setTimeout(()=>{
                                        p.innerText="1";
                                        setTimeout(()=>{
                                            span.innerText="HAPPY INDEPENDENCE DAY!";
                                            p.innerHTML=`<img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/255px-Flag_of_India.svg.png"><br>`;
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    }, 1000);
})

// function Count(){
//     setTimeout(() => {
//         p.innerText="10";
//         console.log("10")
//     }, 1000);
// }
// setTimeout(() => {
//     p.innerText="10"
// }, 1000);
// setTimeout(function () {
//     console.log("welcome");
//     setTimeout(function () {
//       console.log("to");
//       setTimeout(function () {
//         console.log("guvi");
//       }, 2000);
//     }, 2000);
//   }, 2000);


