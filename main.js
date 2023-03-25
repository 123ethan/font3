function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(400, 370 );
    canvas.position(560, 150);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw() { background('#6C91C2');
 document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference +"px";
 textSize(difference);
  fill('#FFE787');
  text('Peter', 50, 400); }

function modelLoaded()
{
    console.log('Posenet is initialized!');
}

function gotPoses(results)
{
      if(results.length > 0 )
      {
        console.log(results)
      }
}