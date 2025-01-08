const box = document.getElementById("box");
// console.log(box);
const container = document.getElementById("container");

////////////////// IT is for handling events
// let count = 0;
// let logMessage = () => {
//     count++;
//     console.log("clicked",count );
// }

/////////     Creating a coordinate pointer
let coordinate = document.createElement('h2');
document.body.append(coordinate);

let coordinatePoint = (e) => {
    
    coordinate.innerHTML = ` ${e.offsetX} ${e.offsetY} `;
    box.style.left = ` ${e.offsetX}px`;
    box.style.top  = `${e.offsetY}px`
}

// box.addEventListener('click',logMessage);
// box.addEventListener('mousemove',coordinatePoint);
container.addEventListener('mousemove',coordinatePoint);