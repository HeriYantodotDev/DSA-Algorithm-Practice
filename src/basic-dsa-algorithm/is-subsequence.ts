export function isSubsequence(s: string, t: string): boolean {
  let lastIndex = 0;
  let currentIndex: number;
  for (let i=0; i < s.length; i++) {
    currentIndex = t.indexOf(s[i], lastIndex);
    if (currentIndex === -1 ) {
      return false;
    }
    lastIndex = currentIndex + 1;
  }
  return true;
}
