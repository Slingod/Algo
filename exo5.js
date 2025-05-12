function hasPairWithSum(arr, k) {
  const seen = new Set()
  // Pour chaque élément
  for (let i = 0; i < arr.length; i++) {
    const complement = k - arr[i]
    // Si j'ai vu le complément, je renvoie true
    if (seen.has(complement)) {
      return true
    }
    // Sinon je stocke l'élément
    seen.add(arr[i])
  }
  return false
}

// Je teste
console.log(hasPairWithSum([10, 15, 3, 7], 17)) // true
console.log(hasPairWithSum([1, 8, 10, 21], 19)) // false