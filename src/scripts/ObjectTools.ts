export function ValueExistOnObject(object: any, compare: (value: any) => boolean) {
  for (const key of Object.keys(object)) {
    const value = object[key];
    if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
      const compareValue = ValueExistOnObject(value, compare);
      if (compareValue === true) {
        return true;
      }
    }
    const compareValue = compare(value);
    if (compareValue === true) {
      return true;
    }
  }
  return false;
}
