function hasPairWithSum(arr, k) {
  // Je parcours chaque élément i
  for (let i = 0; i < arr.length; i++) {
    // Je parcours chaque élément j>i
    for (let j = i + 1; j < arr.length; j++) {
      // Si la somme vaut k, je renvoie true
      if (arr[i] + arr[j] === k) {
        return true
      }
    }
  }
  // Si aucune paire ne marche, je renvoie false
  return false
}

// Je teste avec les exemples
console.log(hasPairWithSum([10, 15, 3, 7], 17))  // true
console.log(hasPairWithSum([1, 8, 10, 21], 19))  // false
