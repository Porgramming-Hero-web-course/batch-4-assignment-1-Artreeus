function removeDuplicates(arr: number[]): number[] {
  const seen: Set<number> = new Set();
  const result: number[] = [];

  for (const num of arr) {
    if (!seen.has(num)) {
      seen.add(num);
      result.push(num);
    }
  }

  return result;
}

// console.log(removeDuplicates([1, 2, 9, 9, 2, 7, 7, 8, 8, 10, 2, 3, 4, 4, 5]));


// i have used google to solve this problem 