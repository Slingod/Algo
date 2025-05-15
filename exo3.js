// Je parcours une fois avec un Set (O(n))
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

function hasPairWithSumLinear(arr, k) {
  const seen = new Set();
  for (const num of arr) {
    if (seen.has(k - num)) return true;
    seen.add(num);
  }
  return false;
}

rl.question("Tableau (ex: 10 15 3 7) : ", line => {
  const arr = line.trim().split(/\s+/).map(Number);
  rl.question("Valeur de k : ", kline => {
    const k = Number(kline);
    console.log("\nRésultat :", hasPairWithSumLinear(arr, k));
    rl.close();
  });
});