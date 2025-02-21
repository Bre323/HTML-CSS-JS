class HashMap {
  buckets = Array.from({ length: 16 }, () => []);
  size = 0;

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for(let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % this.buckets.length;
    }

    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const item = bucket.find(item => item.key === key);
    
    if(item) {
      item.value = value;
      return;
    }

    if(bucket.length === 0) {
      this.size++;
    }

    bucket.push({ key, value });
    return bucket;
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const item = bucket.find(item => item.key === key);

    if(item) {
      return item.value;
    }

    return null;
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const item = bucket.find(item => item.key === key);

    if(item) {
      return true;
    }

    return false;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const item = bucket.find(item => item.key === key);
    const itemIndex = bucket.findIndex(item => item.key === key);

    if(item) {
      if(bucket.length === 1) {
        this.size--;
      }

      bucket.splice(itemIndex, 1);
      return true;
    }

    return false;
  }

  length() {
    let length = 0;

    for(let i = 0; i < this.buckets.length; i++) {
      let bucket = this.buckets[i];
      let bucketSize = bucket.length;

      if(bucketSize !== 0) {
        length += bucketSize;
      }
    }

    return length;
  }

  clear() {
    this.buckets = Array.from({ length: 16 }, () => []);
    this.size = 0;
  }

  keys() {
    const keyList = [];

    this.buckets.forEach(bucket => bucket.forEach(item => {
      keyList.push(item.key);
    }));

    return keyList;
  }

  values() {
    const valueList = [];

    this.buckets.forEach(bucket => bucket.forEach(item => {
      valueList.push(item.value);
    }));

    return valueList; 
  }

  entries() {
    const entryList = [];

    this.buckets.forEach(bucket => bucket.forEach(item => {
      entryList.push([ item.key, item.value ]);
    }));

    return entryList;
  }
}


let hashMap = new HashMap();

//console.log(hashMap.loadFactor);
//console.log(hashMap.buckets);
//console.log(hashMap.size);
//console.log(hashMap.hash('Breno'));
console.log(hashMap.set('Breno', 10));
console.log(hashMap.set('Wrinkle', 5));
console.log(hashMap.set('Pitty', 5));
console.log(hashMap.set('Fred Fred Burguer', 6));
console.log(hashMap.set('Zing', 10));
console.log(hashMap.set('Chaves', 2));
console.log(hashMap.set('Pikachu', 6));
console.log(hashMap.set('Chocho', 0));
console.log(hashMap.set('Sushi', 8));
console.log(hashMap.set('Bling', 10));
console.log(hashMap.set('Something', 10));
