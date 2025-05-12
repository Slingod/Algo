function hasPairWithSum(arr, k) {
  const seen = new Set()
  // Pour chaque nombre
  for (const num of arr) {
    // Si j'ai déjà vu le complément, je renvoie true
    if (seen.has(k - num)) {
      return true
    }
    // Sinon j'ajoute ce nombre au Set
    seen.add(num)
  }
  return false
}

// Je teste
console.log(hasPairWithSum([10, 15, 3, 7], 17)) // true
console.log(hasPairWithSum([1, 8, 10, 21], 19)) // false