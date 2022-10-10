function degradado(){
    var grd = ctx.createLinearGradient(0, 0, 1000, 0);
    grd.addColorStop(0, "blue");
    grd.addColorStop(1, "white");
    ctx.fillStyle = grd
    ctx.fillRect(5,5,1190,490);
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.rect(0,0,1200,500);
    ctx.fillStyle= '#208956';


    ctx.stroke();
}
function  linea(){
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'red';
    ctx.moveTo(0,0);
    ctx.lineTo(1200, 500);
    ctx.stroke();
}
function circulo(){
    ctx.beginPath();
    ctx.strokeStyle = 'yellow';
    ctx.fillStyle = 'yellow';
    ctx.arc(600, 250, 100, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();

}

function dibujabalon() {


    ctx.clearRect(0,0, canvas.width, canvas.height);
    dibujaPala();
    dibujatext();


    var image = new Image();
    //var image1 = new Image();
    image.src = 'img/balon.png';
    //image1.src = 'img/balon.png';
    x += dx;
    y += dy;
    //x1 += dx1;
    //y1 += dy1;
    if ( (y + dy > canvas.height - 65) && x- 55 < palax && palax < x + 55){
        dy = -dy;
        contador++;
    }
    if ( y + dy < -5 ){
        dy = -dy;


    } else if (y + dy > canvas.height - 15 ){
        alert('Fin del Juego');
        window.close();

    }

    if ( x + dx > canvas.width -15 || x + dx < -5 ){
        dx = -dx;
    }
    /* if ( y1 + dy1 < -5 || y1 + dy1 > canvas.height - 15  ){
        dy1 = -dy1;
    }
    if ( x1 + dx1 > canvas.width -15 || x1 + dx1 < -5 ){
        dx1 = -dx1;
    }*/
    //ctx.drawImage(image1,x1, y1, 25,  25);
    ctx.drawImage(image, x, y, 25,25 );
    if (derpulsa && palax < canvas.width - palaw ){
        palax += 7;
    }
    else if (izqpulsa && palax >0){
        palax -= 7;
    }
}

function dibujaPala(){
  ctx.beginPath();
  ctx.rect(palax - 20 , canvas.height - palah - 20, palaw , palah);
  ctx.fillStyle = "#0249DD";
  ctx.fill();
  ctx.closePath();
}

function keyDownHandler(e){
    if (e.keyCode == 39){
        derpulsa = true;
    }
    else if (e.keyCode == 37){
        izqpulsa = true;
    }
}

function keyUpHandler(e){
    if (e.keyCode == 39){
        derpulsa = false;
    }
    else if (e.keyCode == 37){
        izqpulsa = false;
    }
}

function  dibujatext()
{
    ctx1.clearRect(0,0, canvas.width, canvas.height);
    ctx1.fillStyle = 'red';
    ctx1.font = '20px serif';
    ctx1.textAlign = 'center';
    ctx1.strokeText('EL JUEGO MÁS CUTRE DE PING-PONG', 600 , 30);
    ctx1.textAlign = 'left';
    ctx1.fillText('Aciertos: ' + contador, 100, 30);
}

function dibujar() {

    if (ctx2) {
        ctx2.clearRect(0,0,600,600);
        ctx2.save();
        ctx2.translate(300,300);
        ctx2.rotate(avance);
        ctx2.scale(tamx,tamy);
        ctx2.drawImage(img1,-125,-125);
        avance+=0.05;
        tamx+=0.01;
        tamy+=0.01;
        if (avance>Math.PI*2)
            avance=0;
        if (tamx>=10) {
            tamx=0.01;
            tamy=0.01;
        }
        ctx2.restore();
    }
}


