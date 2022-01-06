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
        if (buttonName === '0' && obj.next === '0') {
            return {};
        }
        if (obj.operation) {
            if (obj.next) {
                return { ...obj, next: obj.next + buttonName, screen: obj.next + buttonName };
            }
            return { ...obj, next: buttonName, screen: buttonName };
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
        if (obj.next && obj.operation) {
            const op = operate(obj.total, obj.next, obj.operation)
            return {
                screen: op,
                total: op,
                next: null,
                operation: null,
            };
        }
        return {};
    }

    if (buttonName === '+/-') {
        if (obj.next) {
            const plusMin = (-1 * parseFloat(obj.next)).toString();
            return { ...obj, next: plusMin, screen: plusMin };
        }
        if (obj.total) {
            const plusMin = (-1 * parseFloat(obj.total)).toString();
            return { ...obj, total: plusMin, screen: plusMin };
        }
        return {};
    }

    if (!obj.next && !obj.total) {
        return {};
    }

    if (!obj.next && obj.total && !obj.operation) {
        return { ...obj, operation: buttonName, screen: buttonName };
    }

    if (obj.operation) {
        if (obj.total && !obj.next) {
            return { ...obj, operation: buttonName, screen: buttonName };
        }
        const op = operate(obj.total, obj.next, obj.operation)
        return {
            screen: op,
            total: op,
            next: null,
            operation: buttonName,
        };
    }

    if (!obj.next) {
        return { operation: buttonName, screen: buttonName };
    }

    return {
        screen: buttonName,
        total: obj.next,
        next: null,
        operation: buttonName,
    };
}
