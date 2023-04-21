export function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const sMap = new Map<string, number>();
  const tMap = new Map<string, number>();
  let indexCounter = 1;

  for (let i=0; i < s.length; i++) {
    let sValue = sMap.get(s[i]);
    let tValue = tMap.get(t[i]);

    if (!(!sValue && !tValue) && !(sValue && tValue)) {
      return false;
    }

    if (!sValue && !tValue) {
      sMap.set(s[i], indexCounter);
      tMap.set(t[i], indexCounter);
      indexCounter++;
    }

    sValue = sMap.get(s[i]);
    tValue = tMap.get(t[i]);

    if (sValue !== tValue) {
      return false;
    } 
  }
  return true;
}

export function isIsomorphic2(s: string, t:string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  for (let i=0; i< s.length; i++) {
    if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
      return false;
    }
  }

  return true;
}