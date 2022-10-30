function integer(rom) {
  const sym = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let result = 0;

  for (i=0; i < rom.length; i++) {
    const first = sym[rom[i]]
    const next = sym[rom[i + 1]]
    
    if (first < next) {
      result += next - first
      i++
    } else {
      result += first
    }
  }

  return result
}