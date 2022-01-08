import operate from './operate';

function isNumber(item) {
  return !!item.match(/[0-9]+/);
}

export default function calculate(obj, buttonName) {
  if (buttonName === 'AC') {
    return {
      screen: '0',
      total: null,
      next: null,
      operation: null,
    };
  }

  if (isNumber(buttonName)) {
    console.log('num key');
    if (buttonName === '0' && obj.next === '0') {
      return { ...obj };
    }
    if (obj.operation) {
      if (obj.next) {
        console.log(obj.screen);
        return { ...obj, next: obj.next + buttonName, screen: obj.screen + buttonName };
      }
      return { ...obj, next: buttonName, screen: `${obj.screen} ${buttonName}` };
    }
    if (obj.next) {
      return {
        screen: obj.next + buttonName,
        next: obj.next + buttonName,
        total: null,
      };
    }
    return {
      screen: buttonName,
      next: buttonName,
      total: null,
    };
  }

  if (buttonName === '.') {
    console.log('. key');
    if (obj.next) {
      if (obj.next.includes('.')) {
        return { ...obj };
      }
      return { ...obj, next: `${obj.next}.`, screen: `${obj.next}.` };
    }
    if (obj.operation) {
      return { next: '0.', screen: '0.' };
    }
    if (obj.total) {
      if (obj.total.includes('.')) {
        return {};
      }
      return { total: `${obj.total}.`, screen: `${obj.total}.` };
    }
    return { total: '0.', screen: '0.' };
  }

  if (buttonName === '=') {
    console.log('= key');
    if (obj.next && obj.operation) {
      const op = operate(obj.total, obj.next, obj.operation);
      return {
        screen: op,
        total: op,
        next: null,
        operation: null,
      };
    }
    return { ...obj };
  }

  if (buttonName === '+/-') {
    console.log('+- key');
    if (obj.next) {
      const plusMin = (-1 * parseFloat(obj.next)).toString();
      return { ...obj, next: plusMin, screen: plusMin };
    }
    if (obj.total) {
      const plusMin = (-1 * parseFloat(obj.total)).toString();
      return { ...obj, total: plusMin, screen: plusMin };
    }
    return { ...obj };
  }

  if (!obj.next && !obj.total) {
    console.log('no op');
    return { ...obj };
  }

  if (!obj.next && obj.total && !obj.operation) {
    return { ...obj, operation: buttonName, screen: `${obj.screen} ${buttonName}` };
  }

  if (obj.operation) {
    if (obj.total && !obj.next) {
      console.log('op key extra');
      console.log(obj);
      return { ...obj, operation: buttonName, screen: obj.screen + buttonName };
    }
    const op = operate(obj.total, obj.next, obj.operation);
    console.log('op true');
    return {
      screen: `${obj.screen} ${buttonName}`,
      total: op,
      next: null,
      operation: buttonName,
    };
  }

  if (!obj.next) {
    return { operation: buttonName, screen: buttonName };
  }

  console.log('op key');
  return {
    screen: `${obj.screen} ${buttonName}`,
    total: obj.next,
    next: null,
    operation: buttonName,
  };
}
