"use strict";

const obj = {
  a: {
    b: {
      c: function (name) {
        return 'hello ' + name;
      }
    }
  }
};
let val = obj['a.b.c']('John');
