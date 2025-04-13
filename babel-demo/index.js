import babel from '@babel/core';
// import presetEnv from '@babel/preset-env';
// import presetReact from '@babel/preset-react';
import fs from 'node:fs';
const code = fs.readFileSync('./test.js', 'utf8');
// 箭头函数 转成普通函数
// types 包含了ast节点的所有的方法
const transformFunction = ({types: t}) => {
    return {
        name: 'transform-arrow-function',
        visitor: {
            // 匹配箭头函数
            ArrowFunctionExpression(path) {
                console.log(path.node);
                const node = path.node;
                const arrowfuncton = t.functionExpression(
                    null,
                    node.params,
                    t.blockStatement([t.returnStatement(node.body)]),
                    node.async

                )
                path.replaceWith(arrowfuncton);  // 替换箭头函数
            }
        }
        
    }


}
const res = babel.transform(code, {
    plugins: [transformFunction]
});
console.log(res.code);