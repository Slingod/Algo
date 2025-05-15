// Je compare chaque paire pour trouver une somme = k (O(n²))
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

function hasPairWithSumQuadratic(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) return true;
    }
  }
  return false;
}

rl.question("Tableau (ex: 10 15 3 7) : ", line => {
  const arr = line.trim().split(/\s+/).map(Number);
  rl.question("Valeur de k : ", kline => {
    const k = Number(kline);
    console.log("\nRésultat :", hasPairWithSumQuadratic(arr, k));
    rl.close();
  });
});