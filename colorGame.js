var numSquares=6;
var colors=generateRandomColors(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickRandomColor();
var colorDisplay=document.getElementById("colorDisplay");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
colorDisplay.textContent=pickedColor;

easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares=3;
    colors=generateRandomColors(numSquares);
    pickedColor=pickRandomColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
    h1.style.backgroundColor="steelblue";
});

hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares=6;
    colors=generateRandomColors(numSquares);
    pickedColor=pickRandomColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<colors.length;i++){
        squares[i].style.backgroundColor=colors[i];
        squares[i].style.display="block";
    }
    h1.style.backgroundColor="steelblue";
});
resetButton.addEventListener("click",function(){
    //Generate all new colors
    colors=generateRandomColors(numSquares);
    //Pick a new random color
    pickedColor=pickRandomColor();
    //Change color display to match the new picked color
    colorDisplay.textContent=pickedColor;
    //Change color of squares
    for(var i=0;i<colors.length;i++){
        squares[i].style.backgroundColor=colors[i];
    }
    h1.style.backgroundColor="steelblue";
    message.textContent="";
    this.textContent="New Colors";
});
for(var i=0;i<colors.length;i++){
    //Add initial colors to squares
    squares[i].style.backgroundColor=colors[i];

    //Add quick listners to squares
    squares[i].addEventListener("click",function(){
        //grab color of picked square
        var clickedColor=this.style.backgroundColor;
        //compare this color to picked color
        if(clickedColor===pickedColor){
            message.textContent="Correct!";
            resetButton.textContent="Play Again?"
            h1.style.backgroundColor=clickedColor;
            changeColors(clickedColor);
        }
        else{
            this.style.backgroundColor="#232323";
            message.textContent="Try Again!";
        }
    });
}

function changeColors(color){
    //Loop through all squares
    for(var i=0;i<squares.length;i++){
        //Change Each color to match the given color
        squares[i].style.backgroundColor=color;
    }
}

function pickRandomColor(){
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //Create an array
    var arr=[];
    //Loop through array and push generate random colors
    for(var i=0;i<num;i++){
        arr.push(randomColor());
    }
    //Return array
    return arr;
}

function randomColor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}