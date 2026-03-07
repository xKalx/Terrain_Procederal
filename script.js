const canvas = document.getElementById("terrainCanvas");
const ctx = canvas.getContext("2d");

function generateTerrain(){

const scale = document.getElementById("scale").value;

noise.seed(Math.random());

for(let x = 0; x < canvas.width; x++){
 for(let y = 0; y < canvas.height; y++){

   let nx = x/scale;
   let ny = y/scale;

   let value =
       noise.perlin2(nx,ny)
     + 0.5 * noise.perlin2(nx*2,ny*2)
     + 0.25 * noise.perlin2(nx*4,ny*4);

   value = (value + 1)/2;

   let color;

   if(value < 0.3) color = "#2e6cff";       // water
   else if(value < 0.45) color = "#e2c48d"; // sand
   else if(value < 0.7) color = "#4caf50";  // grass
   else color = "#777777";                  // mountain

   ctx.fillStyle = color;
   ctx.fillRect(x,y,1,1);
 }
}

}

generateTerrain();