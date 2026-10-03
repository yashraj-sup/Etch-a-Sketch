const container=document.getElementById("container");
const button=document.getElementById("resize");
function createGrid(size){
container.innerHTML="";
const squareSize=800/size;
for(let i=0;i<size*size;i++){
    const square=document.createElement("div");
    square.style.width=squareSize+"px";
    square.style.height=squareSize+"px";
    let opacity=0;
    square.addEventListener("mouseenter",()=>{
        const r =Math.floor(Math.random() * 256);
        const g =Math.floor(Math.random()*256);
        const b =Math.floor(Math.random()*256);
        square.style.backgroundColor=`rgb(${r},${g},${b})`;
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



