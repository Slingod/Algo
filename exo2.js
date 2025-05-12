function countBuildingsWithView(heights) {
  let count = 0
  // Pour chaque immeuble i
  for (let i = 0; i < heights.length; i++) {
    let hasView = true
    // Je regarde tous les immeubles à sa droite (ouest)
    for (let j = i + 1; j < heights.length; j++) {
      // S'il y en a un plus grand ou égal, pas de vue
      if (heights[j] >= heights[i]) {
        hasView = false
        break
      }
    }
    if (hasView) count++
  }
  return count
}

// Je teste avec des exemples
console.log(countBuildingsWithView([3, 7, 8, 3, 6, 1])) // 3
console.log(countBuildingsWithView([1, 4, 5, 8]))       // 1