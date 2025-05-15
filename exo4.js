// Je parcours de droite à gauche, je mémorise la hauteur max (O(n))
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

function countBuildingsWithViewLinear(heights) {
  let maxSoFar = -Infinity, count = 0;
  for (let i = heights.length - 1; i >= 0; i--) {
    if (heights[i] > maxSoFar) {
      count++;
      maxSoFar = heights[i];
    }
  }
  return count;
}

rl.question("Hauteurs (ex: 3 7 8 3 6 1) : ", line => {
  const heights = line.trim().split(/\s+/).map(Number);
  console.log("\nRésultat :", countBuildingsWithViewLinear(heights));
  rl.close();
});