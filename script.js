/* button logic */
let csl = 0;

function goToSlide(slidenum, tinterval) {
    document.getElementById("crousel").style.marginLeft = -(slidenum) * 100 + "%";
    document.getElementById("crousel").style.transition = tinterval + "s";
}

document.getElementById("Next").addEventListener("click", function () {
    csl++;
    goToSlide(csl, 1);

    if (csl > 4) {
        setTimeout(function () {
            document.getElementById("crousel").style.transition = "0s";
            document.getElementById("crousel").style.marginLeft = "0%";
            csl = 0;
        }, 1000);
    }
});


let psl=1;
document.getElementById("previous").addEventListener("click", function () {
    psl--;
    goToSlide(psl, 1);

    if (psl == 0) {
        setTimeout(function () {
            document.getElementById("crousel").style.transition = "0s";
            document.getElementById("crousel").style.marginLeft = "-400%";
            psl = 4;
        }, 1000);
    }
});

/* movement logic */
let ml = 0;

setInterval(function () {
    document.getElementById("crousel").style.marginLeft = -ml*100 + "%";
    document.getElementById("crousel").style.transition = "1s";
    ml += 1;
    if (ml > 4) {
        setTimeout(function () {
            ml = 0;
            document.getElementById("crousel").style.transition = "0s";
            document.getElementById("crousel").style.marginLeft = "0%";
        },500);
    }
}, 2000); 

/* color changing and display logic */
document.getElementById("one-link").addEventListener("click",function(){
    document.getElementById("one").style.display="block";
    document.getElementById("two").style.display="none";
    document.getElementById("three").style.display="none";
    document.getElementById("four").style.display="none";
    document.getElementById("five").style.display="none";

    let r1=document.getElementById("one-link");
    let r2=document.getElementById("two-link");
    let r3=document.getElementById("three-link");
    let r4=document.getElementById("four-link");
    let r5=document.getElementById("five-link");

    r1.classList.add("actcolor");
    r2.classList.remove("actcolor");
    r3.classList.remove("actcolor");
    r4.classList.remove("actcolor");
    r5.classList.remove("actcolor");


})

document.getElementById("two-link").addEventListener("click",function(){
    document.getElementById("one").style.display="none";
    document.getElementById("two").style.display="block";
    document.getElementById("three").style.display="none";
    document.getElementById("four").style.display="none";
    document.getElementById("five").style.display="none";

    let r1=document.getElementById("one-link");
    let r2=document.getElementById("two-link");
    let r3=document.getElementById("three-link");
    let r4=document.getElementById("four-link");
    let r5=document.getElementById("five-link");

    r1.classList.remove("actcolor");
    r2.classList.add("actcolor");
    r3.classList.remove("actcolor");
    r4.classList.remove("actcolor");
    r5.classList.remove("actcolor");
})

document.getElementById("three-link").addEventListener("click",function(){
    document.getElementById("one").style.display="none";
    document.getElementById("two").style.display="none";
    document.getElementById("three").style.display="block";
    document.getElementById("four").style.display="none";
    document.getElementById("five").style.display="none";

    let r1=document.getElementById("one-link");
    let r2=document.getElementById("two-link");
    let r3=document.getElementById("three-link");
    let r4=document.getElementById("four-link");
    let r5=document.getElementById("five-link");

    r1.classList.remove("actcolor");
    r2.classList.remove("actcolor");
    r3.classList.add("actcolor");
    r4.classList.remove("actcolor");
    r5.classList.remove("actcolor");
})

document.getElementById("four-link").addEventListener("click",function(){
    document.getElementById("one").style.display="none";
    document.getElementById("two").style.display="none";
    document.getElementById("three").style.display="none";
    document.getElementById("four").style.display="block";
    document.getElementById("five").style.display="none";

    let r1=document.getElementById("one-link");
    let r2=document.getElementById("two-link");
    let r3=document.getElementById("three-link");
    let r4=document.getElementById("four-link");
    let r5=document.getElementById("five-link");

    r1.classList.remove("actcolor");
    r2.classList.remove("actcolor");
    r3.classList.remove("actcolor");
    r4.classList.add("actcolor");
    r5.classList.remove("actcolor");
})

document.getElementById("five-link").addEventListener("click",function(){
    document.getElementById("one").style.display="none";
    document.getElementById("two").style.display="none";
    document.getElementById("three").style.display="none";
    document.getElementById("four").style.display="none";
    document.getElementById("five").style.display="block";

    let r1=document.getElementById("one-link");
    let r2=document.getElementById("two-link");
    let r3=document.getElementById("three-link");
    let r4=document.getElementById("four-link");
    let r5=document.getElementById("five-link");

    r1.classList.remove("actcolor");
    r2.classList.remove("actcolor");
    r3.classList.remove("actcolor");
    r4.classList.remove("actcolor");
    r5.classList.add("actcolor");
})

