// Je fais tout en un seul passage (O(n) minimal)
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

function hasPairWithSumOnePass(arr, k) {
  const seen = new Set();
  for (let i = 0; i < arr.length; i++) {
    const complement = k - arr[i];
    if (seen.has(complement)) return true;
    seen.add(arr[i]);
  }
  return false;
}

rl.question("Tableau (ex: 10 15 3 7) : ", line => {
  const arr = line.trim().split(/\s+/).map(Number);
  rl.question("Valeur de k : ", kline => {
    const k = Number(kline);
    console.log("\nRésultat :", hasPairWithSumOnePass(arr, k));
    rl.close();
  });
});