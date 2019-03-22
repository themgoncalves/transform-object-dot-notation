import fs from 'fs'
import path from 'path'
import { expect } from 'chai'
import { transformFileSync } from '@babel/core'
import plugin from '../lib/index'

describe('Check', () => {
  const fixturesDir = path.join(__dirname, 'fixtures');

  fs.readdirSync(fixturesDir).forEach((test) => {
    it(test, () => {
      const fixtureDir = path.join(fixturesDir, test);
      const inputPath = path.join(fixtureDir, 'input.js');

      const actual = transformFileSync(inputPath, {
        babelrc: false,
        plugins: [
          [plugin, { optionalChaining: test === 'optional-chaining' }]
        ]
      }).code;

      const expected = fs.readFileSync(path.join(fixtureDir, "output.js")).toString();

      expect(actual.trim()).to.eq(expected.trim());
    });
  });
});
