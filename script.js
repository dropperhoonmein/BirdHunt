const play = document.getElementById("Play");
const bird1 = document.getElementById("bird1")
const bird2 = document.getElementById("bird2")
const bird3 = document.getElementById("bird3")
const bird4 = document.getElementById("bird4")
const bird5 = document.getElementById("bird5")
const bird6 = document.getElementById("bird6")
const bird7 = document.getElementById("bird7")
const bird8 = document.getElementById("bird8")
const bird9 = document.getElementById("bird9")
const bird10 = document.getElementById("bird10")
const bird11 = document.getElementById("bird11")
const bird12 = document.getElementById("bird12")
const bird13 = document.getElementById("bird13")
const bird14 = document.getElementById("bird14")
const bird15 = document.getElementById("bird15")
const bird16 = document.getElementById("bird16")
const bird17 = document.getElementById("bird17")
const bird18 = document.getElementById("bird18")
const bird19 = document.getElementById("bird19")
const bird20 = document.getElementById("bird20")
const bird21 = document.getElementById("bird21")
const bird22 = document.getElementById("bird22")
const bird23 = document.getElementById("bird23")
const bird24 = document.getElementById("bird24")
const bird25 = document.getElementById("bird25")
const bird26 = document.getElementById("bird26")
const bird27 = document.getElementById("bird27")
const bird28 = document.getElementById("bird28")
const bird29 = document.getElementById("bird29")
const bird30 = document.getElementById("bird30")
const score100 = document.getElementById("score100")
const startbox = document.getElementById("startbox")
const bgm1 = document.getElementById("bgm1")
const gunshot = document.getElementById("gunshot")
const body = document.querySelector("body")
const scoreValue = document.getElementById("score")
    a = 3;
    Score = 0;

//Functions
function setwidth(bird){
    bird.style.width = "130px"
    bird.style.height = "130px"
}
function gamedone(){
    document.getElementById("heart1").classList.add("heart")
    document.getElementById("heart1").classList.remove("noheart")
    document.getElementById("heart2").classList.add("heart")
    document.getElementById("heart2").classList.remove("noheart")
    document.getElementById("heart3").classList.add("heart")
    document.getElementById("heart3").classList.remove("noheart")
    bird1.classList.remove("bird1-animation");
    bird2.classList.remove("bird2-animation");
    bird3.classList.remove("bird3-animation");
    bird4.classList.remove("bird4-animation");
    bird5.classList.remove("bird5-animation");
    bird6.classList.remove("bird6-animation");
    bird7.classList.remove("bird7-animation");
    bird8.classList.remove("bird8-animation");
    bird9.classList.remove("bird9-animation");
    bird10.classList.remove("bird10-animation");
    bird11.classList.remove("bird11-animation");
    bird12.classList.remove("bird12-animation");
    bird13.classList.remove("bird13-animation");
    bird14.classList.remove("bird14-animation");
    bird15.classList.remove("bird15-animation");
    bird16.classList.remove("bird16-animation");
    bird17.classList.remove("bird17-animation");
    bird18.classList.remove("bird18-animation");
    bird19.classList.remove("bird19-animation");
    bird20.classList.remove("bird20-animation");
    bird21.classList.remove("bird21-animation");
    bird22.classList.remove("bird22-animation");
    bird23.classList.remove("bird23-animation");
    bird24.classList.remove("bird24-animation");
    bird25.classList.remove("bird25-animation");
    bird26.classList.remove("bird26-animation");
    bird27.classList.remove("bird27-animation");
    bird28.classList.remove("bird28-animation");
    bird29.classList.remove("bird29-animation");
    bird30.classList.remove("bird30-animation");
    setwidth(bird1)
    setwidth(bird2)
    setwidth(bird3)
    setwidth(bird4)
    setwidth(bird5)
    setwidth(bird6)
    setwidth(bird7)
    setwidth(bird8)
    setwidth(bird9)
    setwidth(bird10)
    setwidth(bird11)
    setwidth(bird12)
    setwidth(bird13)
    setwidth(bird14)
    setwidth(bird15)
    setwidth(bird16)
    setwidth(bird17)
    setwidth(bird18)
    setwidth(bird19)
    setwidth(bird20)
    setwidth(bird21)
    setwidth(bird22)
    setwidth(bird23)
    setwidth(bird24)
    setwidth(bird25)
    setwidth(bird26)
    setwidth(bird27)
    setwidth(bird28)
    setwidth(bird29)
    setwidth(bird30)
    startbox.style.width = "500px";
    startbox.style.display ="flex"
    startbox.style.padding ="0px"
    play.style.width = "150px";
    // play.style.display ="block"
    document.getElementById("heading1").innerHTML = "Bird Hunt"
    document.getElementById("para1").innerHTML = "You Won, Your Score is " + Score;
    document.getElementById("playtext").innerHTML = "Play Again"
    document.querySelector("body").style.cursor = "auto"
    document.querySelector("html").style.cursor = "auto"
    bgm1.pause()
    Score = 0;
    a = 3;
    scoreValue.innerHTML = Score
}
function gameover(){    
    document.getElementById("heart1").classList.add("heart")
    document.getElementById("heart1").classList.remove("noheart")
    document.getElementById("heart2").classList.add("heart")
    document.getElementById("heart2").classList.remove("noheart")
    document.getElementById("heart3").classList.add("heart")
    document.getElementById("heart3").classList.remove("noheart")
    bird1.classList.remove("bird1-animation");
    bird2.classList.remove("bird2-animation");
    bird3.classList.remove("bird3-animation");
    bird4.classList.remove("bird4-animation");
    bird5.classList.remove("bird5-animation");
    bird6.classList.remove("bird6-animation");
    bird7.classList.remove("bird7-animation");
    bird8.classList.remove("bird8-animation");
    bird9.classList.remove("bird9-animation");
    bird10.classList.remove("bird10-animation");
    bird11.classList.remove("bird11-animation");
    bird12.classList.remove("bird12-animation");
    bird13.classList.remove("bird13-animation");
    bird14.classList.remove("bird14-animation");
    bird15.classList.remove("bird15-animation");
    bird16.classList.remove("bird16-animation");
    bird17.classList.remove("bird17-animation");
    bird18.classList.remove("bird18-animation");
    bird19.classList.remove("bird19-animation");
    bird20.classList.remove("bird20-animation");
    bird21.classList.remove("bird21-animation");
    bird22.classList.remove("bird22-animation");
    bird23.classList.remove("bird23-animation");
    bird24.classList.remove("bird24-animation");
    bird25.classList.remove("bird25-animation");
    bird26.classList.remove("bird26-animation");
    bird27.classList.remove("bird27-animation");
    bird28.classList.remove("bird28-animation");
    bird29.classList.remove("bird29-animation");
    bird30.classList.remove("bird30-animation");
    setwidth(bird1)
    setwidth(bird2)
    setwidth(bird3)
    setwidth(bird4)
    setwidth(bird5)
    setwidth(bird6)
    setwidth(bird7)
    setwidth(bird8)
    setwidth(bird9)
    setwidth(bird10)
    setwidth(bird11)
    setwidth(bird12)
    setwidth(bird13)
    setwidth(bird14)
    setwidth(bird15)
    setwidth(bird16)
    setwidth(bird17)
    setwidth(bird18)
    setwidth(bird19)
    setwidth(bird20)
    setwidth(bird21)
    setwidth(bird22)
    setwidth(bird23)
    setwidth(bird24)
    setwidth(bird25)
    setwidth(bird26)
    setwidth(bird27)
    setwidth(bird28)
    setwidth(bird29)
    setwidth(bird30)
    startbox.style.width = "500px";
    startbox.style.display ="flex"
    startbox.style.padding ="0px"
    play.style.width = "150px";
    // play.style.display ="block"
    document.getElementById("heading1").innerHTML = "Bird Hunt"
    document.getElementById("para1").innerHTML = "You Lost, Your Score Was " + Score;
    document.getElementById("playtext").innerHTML = "Play Again"
    document.querySelector("body").style.cursor = "auto"
    document.querySelector("html").style.cursor = "auto"
    bgm1.pause()
    Score = 0;
    a = 3;
    scoreValue.innerHTML = Score
}
function ranbird(bird){
    var ranheight = parseInt(Math.random()*(window.innerHeight -250))
    bird.style.top = ranheight + "px"
}
function heartcheck(){
    if(a==3){
        document.getElementById("heart3").classList.remove("heart")
        document.getElementById("heart3").classList.add("noheart")
        a = 2

    }
    else if(a==2){
        document.getElementById("heart2").classList.remove("heart")
        document.getElementById("heart2").classList.add("noheart")
        a = 1

    }
    else if(a==1){
        document.getElementById("heart1").classList.remove("heart")
        document.getElementById("heart1").classList.add("noheart")
        a = 0
        gameover()
    }
}
function checkdead1(){
    let x = bird1.offsetLeft
    let w = bird1.offsetWidth
    if(x > window.innerWidth &&  w>10){
        console.log("killed")
        heartcheck()
        clearInterval(myInterval1)
    }

}
function checkdead2(){
    let w = bird2.offsetWidth
    let x = bird2.offsetLeft
    if(x > window.innerWidth &&  w>10){
        console.log("killed")
        heartcheck()
        clearInterval(myInterval2)
    }

}
function checkdead3(){
    let w = bird3.offsetWidth
    let x = bird3.offsetLeft
    if(x > window.innerWidth &&  w>10){
        console.log("killed")
        heartcheck()
        clearInterval(myInterval3)
    }

}
function checkdead4(){
    let w = bird4.offsetWidth
    let x = bird4.offsetLeft
    if(x > window.innerWidth &&  w>10){
        console.log("killed")
        heartcheck()
        clearInterval(myInterval4)
    }

}
function checkdead5(){
    let w = bird5.offsetWidth
    let x = bird5.offsetLeft
    if(x > window.innerWidth &&  w>10){
        console.log("killed")
        heartcheck()
        clearInterval(myInterval5)
    }

}
function checkdead6(){
    let w = bird6.offsetWidth
    let x = bird6.offsetLeft
    if(x > window.innerWidth &&  w>10){
        console.log("killed")
        heartcheck()
        clearInterval(myInterval6)
    }

}
function checkdead7(){
    let w = bird7.offsetWidth
    let x = bird7.offsetLeft
    if(x > window.innerWidth &&  w>10){
        console.log("killed")
        heartcheck()
        clearInterval(myInterval7)
    }

}
function checkdead8(){
    let w = bird8.offsetWidth
    let x = bird8.offsetLeft
    if(x > window.innerWidth &&  w>10){
        console.log("killed")
        heartcheck()
        clearInterval(myInterval8)
    }

}
function checkdead9(){
    let w = bird9.offsetWidth
    let x = bird9.offsetLeft
    if(x > window.innerWidth &&  w>10){
        console.log("killed")
        heartcheck()
        clearInterval(myInterval9)
    }

}
function checkdead10(){
    let w = bird10.offsetWidth
    let x = bird10.offsetLeft
    if(x > window.innerWidth &&  w>10){
        console.log("killed")
        heartcheck()
        clearInterval(myInterval10)
    }

}
function checkdead11(){
    let w = bird11.offsetWidth
    let x = bird11.offsetLeft
    if(x > window.innerWidth &&  w>10){
        console.log("killed")
        heartcheck()
        clearInterval(myInterval11)
    }

}
function checkdead12(){
    let w = bird12.offsetWidth
    let x = bird12.offsetLeft
    if(x > window.innerWidth &&  w>10){
        console.log("killed")
        heartcheck()
        clearInterval(myInterval12)
    }

}
function checkdead13(){
    let w = bird13.offsetWidth
    let x = bird13.offsetLeft
    if(x > window.innerWidth &&  w>10){
        console.log("killed")
        heartcheck()
        clearInterval(myInterval13)
    }

}
function checkdead14(){
    let w = bird14.offsetWidth
    let x = bird14.offsetLeft
    if(x > window.innerWidth &&  w>10){
        console.log("killed")
        heartcheck()
        clearInterval(myInterval14)
    }

}
function checkdead15(){
    let w = bird15.offsetWidth
    let x = bird15.offsetLeft
    if(x > window.innerWidth &&  w>10){
        console.log("killed")
        heartcheck()
        clearInterval(myInterval15)
    }

}
function checkdead16(){
    let w = bird16.offsetWidth
    let x = bird16.offsetLeft
    if(x > window.innerWidth &&  w>10){
        console.log("killed")
        heartcheck()
        clearInterval(myInterval16)
    }

}
function checkdead17(){
    let w = bird17.offsetWidth
    let x = bird17.offsetLeft
    if(x > window.innerWidth &&  w>10){
        console.log("killed")
        heartcheck()
        clearInterval(myInterval17)
    }

}
function checkdead18(){
    let w = bird18.offsetWidth
    let x = bird18.offsetLeft
    if(x > window.innerWidth &&  w>10){
        console.log("killed")
        heartcheck()
        clearInterval(myInterval18)
    }

}
function checkdead19(){
    let w = bird19.offsetWidth
    let x = bird19.offsetLeft
    if(x > window.innerWidth &&  w>10){
        console.log("killed")
        heartcheck()
        clearInterval(myInterval19)
    }

}
function checkdead20(){
    let w = bird20.offsetWidth
    let x = bird20.offsetLeft
    if(x > window.innerWidth &&  w>10){
        console.log("killed")
        heartcheck()
        clearInterval(myInterval20)
    }

}
function checkdead21(){
    let w = bird21.offsetWidth
    let x = bird21.offsetLeft
    if(x > window.innerWidth &&  w>10){
        console.log("killed")
        heartcheck()
        clearInterval(myInterval21)
    }

}
function checkdead22(){
    let w = bird22.offsetWidth
    let x = bird22.offsetLeft
    if(x > window.innerWidth &&  w>10){
        console.log("killed")
        heartcheck()
        clearInterval(myInterval22)
    }

}
function checkdead23(){
    let w = bird23.offsetWidth
    let x = bird23.offsetLeft
    if(x > window.innerWidth &&  w>10){
        console.log("killed")
        heartcheck()
        clearInterval(myInterval23)
    }

}
function checkdead24(){
    let w = bird24.offsetWidth
    let x = bird24.offsetLeft
    if(x > window.innerWidth &&  w>10){
        console.log("killed")
        heartcheck()
        clearInterval(myInterval24)
    }

}
function checkdead25(){
    let w = bird25.offsetWidth
    let x = bird25.offsetLeft
    if(x > window.innerWidth &&  w>10){
        console.log("killed")
        heartcheck()
        clearInterval(myInterval25)
    }

}
function checkdead26(){
    let w = bird26.offsetWidth
    let x = bird26.offsetLeft
    if(x > window.innerWidth &&  w>10){
        console.log("killed")
        heartcheck()
        clearInterval(myInterval26)
    }

}
function checkdead27(){
    let w = bird27.offsetWidth
    let x = bird27.offsetLeft
    if(x > window.innerWidth &&  w>10){
        console.log("killed")
        heartcheck()
        clearInterval(myInterval27)
    }

}
function checkdead28(){
    let w = bird28.offsetWidth
    let x = bird28.offsetLeft
    if(x > window.innerWidth &&  w>10){
        console.log("killed")
        heartcheck()
        clearInterval(myInterval28)
    }

}
function checkdead29(){
    let w = bird29.offsetWidth
    let x = bird29.offsetLeft
    if(x > window.innerWidth &&  w>10){
        console.log("killed")
        heartcheck()
        clearInterval(myInterval29)
    }

}
function checkdead30(){
    let w = bird30.offsetWidth
    let x = bird30.offsetLeft
    if(x > window.innerWidth &&  w>10){
        console.log("killed")
        heartcheck()
        clearInterval(myInterval30)
    }

}




function kill(bird){
    bird.style.width = "0px"
    bird.style.height = "0px"
    score100.classList.add("scoreanimation")
    Score = Score + 100;
    scoreValue.innerHTML = Score
    console.log("killed")
    console.log(Score)
    setTimeout(
        function(){
            score100.classList.remove("scoreanimation")
        }
    ,500)
}








//Main
play.addEventListener("click",function(){
    if(bird1.classList != "bird1-animation"){
        bird1.classList.add("bird1-animation");
        ranbird(bird1)
        bird2.classList.add("bird2-animation");
        ranbird(bird2)
        bird3.classList.add("bird3-animation");
        ranbird(bird3)
        bird4.classList.add("bird4-animation");
        ranbird(bird4)
        bird5.classList.add("bird5-animation");
        ranbird(bird5)
        bird6.classList.add("bird6-animation");
        ranbird(bird6)
        bird7.classList.add("bird7-animation");
        ranbird(bird7)
        bird8.classList.add("bird8-animation");
        ranbird(bird8)
        bird9.classList.add("bird9-animation");
        ranbird(bird9)
        bird10.classList.add("bird10-animation");
        ranbird(bird10)
        bird11.classList.add("bird11-animation");
        ranbird(bird11)
        bird12.classList.add("bird12-animation");
        ranbird(bird12)
        bird13.classList.add("bird13-animation");
        ranbird(bird13)
        bird14.classList.add("bird14-animation");
        ranbird(bird14)
        bird15.classList.add("bird15-animation");
        ranbird(bird15)
        bird16.classList.add("bird16-animation");
        ranbird(bird16)
        bird17.classList.add("bird17-animation");
        ranbird(bird17)
        bird18.classList.add("bird18-animation");
        ranbird(bird18)
        bird19.classList.add("bird19-animation");
        ranbird(bird19)
        bird20.classList.add("bird20-animation");
        ranbird(bird20)
        bird21.classList.add("bird21-animation");
        ranbird(bird21)
        bird12.classList.add("bird12-animation");
        ranbird(bird22)
        bird23.classList.add("bird23-animation");
        ranbird(bird23)
        bird24.classList.add("bird24-animation");
        ranbird(bird24)
        bird25.classList.add("bird25-animation");
        ranbird(bird25)
        bird26.classList.add("bird26-animation");
        ranbird(bird26)
        bird27.classList.add("bird27-animation");
        ranbird(bird27)
        bird28.classList.add("bird28-animation");
        ranbird(bird28)
        bird29.classList.add("bird29-animation");
        ranbird(bird29)
        bird30.classList.add("bird30-animation");
        ranbird(bird30)
        startbox.style.width = "0px";
        startbox.style.display ="block"
        startbox.style.padding ="0px"
        play.style.width = "0px";
        play.style.display ="block"
        document.getElementById("heading1").innerHTML = ""
        document.getElementById("para1").innerHTML = ""
        document.getElementById("playtext").innerHTML = ""
        document.querySelector("body").style.cursor = "crosshair"
        document.querySelector("html").style.cursor = "crosshair"
        bgm1.play()
        bgm1.volume = 0.6
    }
})

window.addEventListener("click", function(){
    if(document.getElementById("heading1").innerHTML == ""){
        gunshot.play()
        gunshot.volume = 0.6
        document.getElementById("gunman").classList.add("gunmanshoot")
        document.getElementById("gunman").classList.remove("gunman")
        this.setTimeout(function(){
            document.getElementById("gunman").classList.remove("gunmanshoot")
            document.getElementById("gunman").classList.add("gunman")
        },800)
}})
//////////////////////////////////////////////////////////////////////////////////////////PAUSE
bird1.addEventListener("click", function(){
    kill(bird1)
})
bird2.addEventListener("click", function(){
    kill(bird2)
})
bird3.addEventListener("click", function(){
    kill(bird3)
})
bird4.addEventListener("click", function(){
    kill(bird4)
})
bird5.addEventListener("click", function(){
    kill(bird5)
})
bird6.addEventListener("click", function(){
    kill(bird6)
})
bird7.addEventListener("click", function(){
    kill(bird7)
})
bird8.addEventListener("click", function(){
    kill(bird8)
})
bird9.addEventListener("click", function(){
    kill(bird9)
})
bird10.addEventListener("click", function(){
    kill(bird10)
})
bird11.addEventListener("click", function(){
    kill(bird11)
})
bird12.addEventListener("click", function(){
    kill(bird12)
})
bird13.addEventListener("click", function(){
    kill(bird13)
})
bird14.addEventListener("click", function(){
    kill(bird14)
})
bird15.addEventListener("click", function(){
    kill(bird15)
})
bird16.addEventListener("click", function(){
    kill(bird16)
})
bird17.addEventListener("click", function(){
    kill(bird17)
})
bird18.addEventListener("click", function(){
    kill(bird18)
})
bird19.addEventListener("click", function(){
    kill(bird19)
})
bird20.addEventListener("click", function(){
    kill(bird20)
})
bird21.addEventListener("click", function(){
    kill(bird21)
})
bird22.addEventListener("click", function(){
    kill(bird22)
})
bird23.addEventListener("click", function(){
    kill(bird23)
})
bird24.addEventListener("click", function(){
    kill(bird24)
})
bird25.addEventListener("click", function(){
    kill(bird25)
})
bird26.addEventListener("click", function(){
    kill(bird26)
})
bird27.addEventListener("click", function(){
    kill(bird27)
})
bird28.addEventListener("click", function(){
    kill(bird28)
})
bird29.addEventListener("click", function(){
    kill(bird29)
})
bird30.addEventListener("click", function(){
    kill(bird30)
})





var myInterval1 = setInterval(checkdead1, 100);
var myInterval2 = setInterval(checkdead2, 100);
var myInterval3 = setInterval(checkdead3, 100);
var myInterval4 = setInterval(checkdead4, 100);
var myInterval5 = setInterval(checkdead5, 100);
var myInterval6 = setInterval(checkdead6, 100);
var myInterval7 = setInterval(checkdead7, 100);
var myInterval8 = setInterval(checkdead8, 100);
var myInterval9 = setInterval(checkdead9, 100);
var myInterval10 = setInterval(checkdead10, 100);
var myInterval11 = setInterval(checkdead11, 100);
var myInterval12 = setInterval(checkdead12, 100);
var myInterval13 = setInterval(checkdead13, 100);
var myInterval14 = setInterval(checkdead14, 100);
var myInterval15 = setInterval(checkdead15, 100);
var myInterval16 = setInterval(checkdead16, 100);
var myInterval17 = setInterval(checkdead17, 100);
var myInterval18 = setInterval(checkdead18, 100);
var myInterval19 = setInterval(checkdead19, 100);
var myInterval20 = setInterval(checkdead20, 100);
var myInterval21 = setInterval(checkdead21, 100);
var myInterval22 = setInterval(checkdead22, 100);
var myInterval23 = setInterval(checkdead23, 100);
var myInterval24 = setInterval(checkdead24, 100);
var myInterval25 = setInterval(checkdead25, 100);
var myInterval26 = setInterval(checkdead26, 100);
var myInterval27 = setInterval(checkdead27, 100);
var myInterval28 = setInterval(checkdead28, 100);
var myInterval29 = setInterval(checkdead29, 100);
var myInterval30 = setInterval(checkdead30, 100);


var AreYouDead = setInterval(function(){
    if(a==0){
        console.log("game Over")
        gameover()
        clearInterval(AreYouDead)
    }
},10)

var Finished = setInterval(function(){
    if(scoreValue == 3000){
        gamedone()
    }
    else if(bird30.width == 0){
        gamedone()
    }
    else if(a>1 && (bird30.offsetLeft > window.innerWidth)){
        gamedone()
    }
},10)