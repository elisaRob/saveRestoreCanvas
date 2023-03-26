window.onload=function(){
    ca=document.querySelector("canvas")
    if(ca && ca.getContext){
        ctx=ca.getContext("2d");
        if(ctx){
            ctx.fillStyle="black";
            ctx.lineWidth="5";

            ctx.fillRect(25,25,50,50);
            ctx.save();

            ctx.strokeStyle="blue";
            ctx.fillStyle="white";

            ctx.fillRect(100,100,50,50);

            ctx.restore();
            ctx.fillRect(80,25,50,50);

            ctx.beginPath();
            ctx.moveTo(150,25);
            ctx.lineTo(250,25);
            ctx.stroke();
    

            ctx.beginPath();
            ctx.moveTo(300,100);
            ctx.lineTo(400,300);
            ctx.stroke();

           

        }

    }else{
        alert("Votre navigateur ne supporte pas les canvas alors")
    }
}