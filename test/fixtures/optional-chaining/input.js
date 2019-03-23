"use strict";

const obj = {
  a: {
    b: {
      c: 'content',
      d: function (name) {
        return 'hello ' + name;
      }
    }
  }
};
const b = obj['a?.b'];
const c = obj['a?.b?.c'];
const d = obj['a?.b?.c']('John');
let val;
val = obj['a.b?.c'];
