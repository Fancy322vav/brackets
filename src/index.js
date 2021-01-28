module.exports = function check(str, bracketsConfig) {
    const stack = [];

    const openBrackets = [];
    const closeBrackets = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        openBrackets.push(bracketsConfig[i][0]);
        closeBrackets.push(bracketsConfig[i][1]);
    }

    for (let i = 0; i < str.length; i++) {
        const openIndex = openBrackets.indexOf(str[i]);
        const closeIndex = closeBrackets.indexOf(str[i]);

        if (openIndex > -1) {
            if (openIndex === closeIndex) {
                if (
                    stack.length > 0 &&
                    stack[stack.length - 1] === closeIndex
                ) {
                    stack.pop();
                } else {
                    stack.push(openIndex);
                }
            } else {
                stack.push(openIndex);
            }
        } else {
            if (stack.length > 0) {
                if (closeIndex !== stack.pop()) {
                    return false;
                }
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
};
