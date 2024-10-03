// Generic Class
class KeyValuePair<K, V> {
  constructor(key: K, value: V) {}
}

let pair = new KeyValuePair<string, string>("mel", "Melbourne");
let pair2 = new KeyValuePair("mel", "Melbourne"); // inferred

// Generic Function
function wrapInArray<T>(value: T) {
  return [value];
}

// Generic Interface
interface Result<T> {
  data: T | null;
  error: string | null;
}

// Generic Constrain
function echo<T extends number | string>(value: T): T {
  return value;
}

