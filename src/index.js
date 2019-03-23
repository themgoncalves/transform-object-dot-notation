import { declare } from '@babel/helper-plugin-utils';
import { types as t } from '@babel/core';

const stringContains = (str, text) => str.indexOf(text) > -1;

const toMemberExpression = (path, node, isOptionalMember = false) => {
  const property = path.pop();

  node = isOptionalMember
    ? t.optionalMemberExpression(node, t.identifier(property.replace('?', '')), false, true)
    : t.memberExpression(node, t.identifier(property.replace('?', '')));

  if (path.length > 0) {
    node.object = toMemberExpression(path, node.object, stringContains(property, '?'));
  }

  return node;
};

export default declare((api) => {
  api.assertVersion(7);

  return {
    name: 'transform-object-dot-notation',
    visitor: {
      MemberExpression: function MemberExpression({ node }) {
        const { property } = node;
        if (!node.computed || !t.isStringLiteral(property) || property.value.indexOf('.') === -1) {
          return;
        }

        const properties = property.value.split('.');
        const isOptional = stringContains(property.value, '?');

        if (isOptional) {
          node.type = 'OptionalMemberExpression';
          node.optional = false;
        }

        node.property = t.identifier(properties.pop().replace('?', ''));
        node.computed = false;
        node.object = toMemberExpression(properties, node.object, isOptional);
      },
    },
  };
});
