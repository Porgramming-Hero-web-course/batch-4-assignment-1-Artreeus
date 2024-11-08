function countWordOccurrences(sentence: string, word: string): number {
  const regex = new RegExp(word, "gi");
  return (sentence.match(regex) || []).length;
}
