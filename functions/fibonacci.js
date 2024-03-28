function fibRecursive() {
  const cache = new Map();

  return function fibRecursive(n) {
    if (n < 1) {
      return 0;
    }

    if (n <= 2) {
      return 1;
    }

    if (cache.has(n)) {
      return cache.get(n);
    }

    cache.set(n, fibRecursive(n - 1) + fibRecursive(n - 2));
    return cache.get(n);
  }
}

function fibDP(n) {
  if (n <= 0) {
    return 0;
  }

  if (n <= 2) {
    return 1;
  }

  const cache = new Map();

  let previous = 1;
  let current = 1;
  let result = 0;

  for (let i = 2; i <= n; i++) {
    result = previous + current;
    previous = current;
    current = result;
    cache.set(i, result)
  }

  return previous;
}

const fibWithCache = fibRecursive();
console.log(fibWithCache(100));
console.log(fibDP(100));

