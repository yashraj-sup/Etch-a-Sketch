const container=document.getElementById("container");
const button=document.getElementById("resize");
function createGrid(size){
container.innerHTML="";
const squareSize=800/size;
for(i=0;i<size*size;i++){
    const square=document.createElement("div");
    square.style.width=squareSize+"px";
    square.style.height=squareSize+"px";
    square.addEventListener("mouseenter",()=>{
        square.style.backgroundColor="black";
    });
    container.appendChild(square);
}
}
button.addEventListener("click",()=>{
    const size=parseInt(prompt("Squares per side (max 100):"));
    if(size>=1 && size<=100){
        createGrid(size);
    }else{
        alert("Enter a number from 1 to 100.");
    }
});
createGrid(16);



