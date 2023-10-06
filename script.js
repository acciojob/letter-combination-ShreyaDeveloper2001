function letterCombinations(input_digit) {
  //Complete the function
	 if (!digits) {
    return [];
  }

  const mapping = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };

  const result = [];

  function backtrack(current, index) {
    if (index === digits.length) {
      result.push(current);
      return;
		 }

    const digit = digits[index];
    const letters = mapping[digit];

    for (const letter of letters) {
      backtrack(current + letter, index + 1);
    }
  }

  backtrack('', 0);
  return result;
}
// Example usage:
const input = '23';
const output = letterCombinations(input);
console.log(output); // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
}

module.exports = letterCombinations;
