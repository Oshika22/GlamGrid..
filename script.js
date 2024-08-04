console.log("working////////");
//---------------------Brand-Animation----------------------

  gsap.from(".tagline" ,{
    opacity:0,
    duration: 2,
    repeat:-1,
    yoyo: true,
  })


//-------------------------------colour Change----------------------------

let mode = document.querySelector("#colorchange");
let body = document.querySelector("body");
let heading = document.querySelector(".heading")
let light = true;
mode.addEventListener("click", () => {
    if(light == true){
        mode.innerText = "Light"
        body.style.backgroundColor = "#23030B";
        light = false;
    }
    else{
        mode.innerText = "Dark"
        body.style.backgroundColor = "#FAE3E9";
        light = true;
    }

})

//---------------------category animations----------------------------
let catCard = document.querySelectorAll(".category-card");

catCard.forEach((ec) => {
    
    ec.addEventListener("mouseenter", () => {
        gsap.to(".circles-top",{
            height: "50%",
            width: "100%",
            borderRadius: "0",
            opacity: 0,
        })
        gsap.to(".circles-bottom",{
            height: "50%",
            width: "100%",
            borderRadius: "0",
            opacity: 0,
        })
        gsap.to(".circles-bottom-small",{
            scale: 0,
        })
        gsap.to(".circles-top-small",{
            scale: 0,
        })
        gsap.to(".cat-post",{
            opacity: 0,
            delay: 0.5,
        })
        gsap.to(".cat-cont",{
            opacity: 0,
            delay: 0.01,
        })
    })

    ec.addEventListener("mouseleave", () => {
        gsap.to(".cat-post",{
            opacity: 1,
        })
        gsap.to(".cat-cont",{
            opacity: 1,
            delay: 0.5,
        })
        gsap.to(".circles-top",{
            height: "20px",
            width: "20px",
            borderRadius: "50%",
            opacity: 1,
        })
        gsap.to(".circles-bottom",{
            height: "20px",
            width: "20px",
            borderRadius: "50%",
            opacity: 1,
        })
        gsap.to(".circles-bottom-small",{
            scale: 1,
        })
        gsap.to(".circles-top-small",{
            scale: 1,
        })
    })
})


//---------------------------------footer------------------------

window.addEventListener("wheel",function(dets){
    if(dets.deltaY>0){
  
      // scrolling the text
      gsap.to(" .marque",{
        transform: "translate(-200%)",
        duration: 4,
        repeat: -1,
        ease: "none",
      })
      // rotating the icon
      gsap.to("i",{
        rotate: 180,
      })
    }
    else{
      gsap.to(" .marque",{
        transform: "translate(0%)",
        duration: 4,
        repeat: -1,
        ease: "none",
      })
      gsap.to("i",{
        rotate: 0,
      })
    }
  })