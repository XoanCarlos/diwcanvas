
function dibujatanque(){
    ctx3.beginPath();
    ctx3.rect(100, (canvas.height/2) - 20, 140 , 20);
    ctx3.fillStyle = "#2d572c";
    ctx3.rect(100, (canvas.height/2) - 100, 140 , 20);
    ctx3.fillStyle = "#2d572c";
    ctx3.rect(120, (canvas.height/2) - 100, 100 , 80);
    ctx3.fillStyle = "#2d572c";
    ctx3.fill();
    ctx3.closePath();
}

function dibujatorre(){
    ctx3.beginPath();
    ctx3.arc(170, (canvas.height/2) - 50, 30, 0, 2*Math.PI);
    ctx3.fillStyle = "red";
    ctx3.fill();
    ctx3.moveTo(170, (canvas.height/2) - 50 );
    ctx3.lineTo(300, (canvas.height/2) - 50 );
    ctx3.strokeStyle = 'red';
    ctx3.stroke();
    ctx3.closePath();
}

function muevecanon(event){

    if (event.keyCode == 39){
        console.log('pulsa derecha');
    }
    else if (event.keyCode == 37){
        console.log('pulsa izquierda');
    }
}
