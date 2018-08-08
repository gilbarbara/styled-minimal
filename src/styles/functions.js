// @flow

export function calcUnits(left: string, operator: string = '+', right: string | number): string {
  if (!left || !right) {
    return '';
  }

  const unit = /\d+(.*)/.exec(left);
  const leftNum = parseFloat(`${left}`.replace(/px|r?em/, ''));
  const rightNum = parseFloat(`${right}`.replace(/px|r?em/, ''));
  let result;

  switch (operator) {
    case '-':
      result = leftNum - rightNum;
      break;
    case '*':
      result = leftNum * rightNum;
      break;
    case '/':
      result = leftNum / rightNum;
      break;
    case '+':
    default:
      result = leftNum + rightNum;
      break;
  }

  return `${result}${unit ? unit[1] : ''}`;
}
