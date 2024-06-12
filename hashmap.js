class HashMap {
  constructor(size) {
    this.buckets = new Array(size);
    this.capacity = size;
    this.loadFactor = 0.75;
  }

  checkAccess(index) {
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode =
        (primeNumber * hashCode + key.charCodeAt(i)) & this.buckets.length;
    }

    return hashCode;
  }

  set(key, value) {
    hashKey = hash(key);
    this.checkAccess(hashKey);
    const keyValuePair = this.buckets[hashKey];
    if (keyValuePair !== undefined) {
      if (keyValuePair.keys()[0] !== key) {
        let oldBuckets = this.buckets;
        this.buckets = new Array(this.capacity * 2);

        oldBuckets.forEach((keyValuePair) => {
          let key = keyValuePair.keys()[0];
          this.set(key, keyValuePair[key]);
        });
      }
    }
    this.buckets[hashKey][key] = value;
  }

  get(key) {
    hashKey = hash(key);

    try {
      this.checkAccess(hashKey);
    } catch (error) {
      console.log(error);
    }

    const keyValuePair = this.buckets[hashKey];
    if (keyValuePair !== undefined) {
      return keyValuePair[key];
    }

    return null;
  }

  has(key) {
    try {
      this.checkAccess(hashKey);
    } catch (error) {
      console.log(error);
    }

    const keyValuePair = this.buckets[hashKey];
    return keyValuePair !== undefined ? true : false;
  }

  remove(key) {
    try {
      this.checkAccess(hashKey);
    } catch (error) {
      console.log(error);
    }

    const keyValuePair = this.buckets[hashKey];
    if (keyValuePair !== undefined) {
      keyValuePair = undefined;
      return true;
    }
    return false;
  }

  length() {
    let length = 0;
    this.buckets.forEach((keyValuePair) => {
      if (keyValuePair !== undefined) length++;
    });
    return length;
  }

  clear() {
    this.buckets = new Array(16);
  }

  keys() {
    return this.buckets.map((keyValuePair) => keyValuePair.keys()[0]);
  }

  entries() {
    return this.buckets;
  }
}
