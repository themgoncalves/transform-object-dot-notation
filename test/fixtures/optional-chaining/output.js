"use strict";

var _obj$a, _obj$a2, _obj$a3;

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
const b = (obj === null || obj === void 0 ? void 0 : obj.a).b;
const c = (obj === null || obj === void 0 ? void 0 : (_obj$a = obj.a) === null || _obj$a === void 0 ? void 0 : _obj$a.b).c;
const d = ((obj === null || obj === void 0 ? void 0 : (_obj$a2 = obj.a) === null || _obj$a2 === void 0 ? void 0 : _obj$a2.b).c)('John');
let val;
val = (obj === null || obj === void 0 ? void 0 : (_obj$a3 = obj.a) === null || _obj$a3 === void 0 ? void 0 : _obj$a3.b).c;
