// Je compare chaque immeuble aux suivants (O(n²))
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

function countBuildingsWithViewQuadratic(heights) {
  let count = 0;
  for (let i = 0; i < heights.length; i++) {
    let hasView = true;
    for (let j = i + 1; j < heights.length; j++) {
      if (heights[j] >= heights[i]) { hasView = false; break; }
    }
    if (hasView) count++;
  }
  return count;
}

rl.question("Hauteurs (ex: 3 7 8 3 6 1) : ", line => {
  const heights = line.trim().split(/\s+/).map(Number);
  console.log("\nRésultat :", countBuildingsWithViewQuadratic(heights));
  rl.close();
});