let weights = [40,50,55,54,60,65];
let sum,avg;
function setup() 
{
  createCanvas(400,400);

  sum = weights[0] + weights[1] + weights[2] + weights[3] + weights[4] + weights[5];
  avg = sum/weights.length;
  console.log(avg);
}

function draw() 
{
background(51);

}

