if (!Array.prototype.$flatMap) {
  Array.prototype.$flatMap = function (fn) {
    return this.map(fn).reduce((acc, curr) => {
      return acc.concat(curr);
    }, []);
  };
}
