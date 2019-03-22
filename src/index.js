import { declare } from '@babel/helper-plugin-utils';
import { types as t } from '@babel/core';

export default declare((api, options) => {
  api.assertVersion(7);
  const { optionalChaining = false } = options;

  return {
    name: 'transform-object-dot-notation',
    visitor: {
      MemberExpression: {
        exit({ node }) {
          const prop = node.property;
          if (!node.computed || !t.isStringLiteral(prop)) {
            return;
          }

          if (prop.value.match(/^[^\d]*$/) && prop.value.indexOf('.') === -1) {
            return;
          }

          const value = optionalChaining ? prop.value.replace(/\./g, '?.') : prop.value;

          node.property = t.identifier(value);
          node.computed = false;
        },
      },
    },
  };
});
