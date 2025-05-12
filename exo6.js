function countBuildingsWithView(heights) {
  let maxSoFar = -Infinity
  let count    = 0
  // Boucle unique de droite à gauche
  for (let i = heights.length - 1; i >= 0; i--) {
    if (heights[i] > maxSoFar) {
      count++
      maxSoFar = heights[i]
    }
  }
  return count
}

// Je teste
console.log(countBuildingsWithView([3, 7, 8, 3, 6, 1])) // 3
console.log(countBuildingsWithView([1, 4, 5, 8]))       // 1