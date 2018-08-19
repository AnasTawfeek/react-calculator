export const BUTTON_TYPES = {
    OPERATION: 'OPERATION',
    NUMBER: 'NUMBER',
    ACTION: 'ACTION'
}

export const OPERATION_TYPES = {
    ON_CURRENT: 'ON_CURRENT',
    ON_NEXT: 'ON_NEXT'
}

export const ACTIONS = {
    GO_OFFLINE: 'GO_OFFLINE',
    MEMORY_CLEAR: 'MEMORY_CLEAR',
    MEMORY_RECALL: 'MEMORY_RECALL',
    MEMORY_MINUS: 'MEMORY_MINUS',
    MEMORY_PLUS: 'MEMORY_PLUS',
    CLEAR_NEXT: 'CLEAR_NEXT',
    CLEAR_ALL: 'CLEAR_ALL',
    CALCULATE: 'CALCULATE'
}

export const NUMBERS = {
    "0": "zero",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
}
export const CALC_BUTTONS = {
    squareRoot: {
        displayText: '√',
        type: BUTTON_TYPES.OPERATION,
        operationType: OPERATION_TYPES.ON_CURRENT,
        action: current => Math.sqrt(current)
    },
    division: {
        displayText: '÷',
        type: BUTTON_TYPES.OPERATION,
        operationType: OPERATION_TYPES.ON_NEXT,
        action: (current, next) => current / next
    },
    times: {
        displayText: '×',
        type: BUTTON_TYPES.OPERATION,
        operationType: OPERATION_TYPES.ON_NEXT,
        action: (current, next) => current * next
    },
    minus: {
        displayText: '−',
        type: BUTTON_TYPES.OPERATION,
        operationType: OPERATION_TYPES.ON_NEXT,
        action: (current, next) => current - next
    },
    plus: {
        displayText: '+',
        type: BUTTON_TYPES.OPERATION,
        operationType: OPERATION_TYPES.ON_NEXT,
        action: (current, next) => current + next
    },
    percent: {
        displayText: '%',
        type: BUTTON_TYPES.OPERATION,
        operationType: OPERATION_TYPES.ON_CURRENT,
        action: current => current / 100
    },
    sign: {
        displayText: '+/-',
        type: BUTTON_TYPES.OPERATION,
        operationType: OPERATION_TYPES.ON_CURRENT,
        action: val => val * -1
    },
    off: {
        displayText: 'OFF',
        type: BUTTON_TYPES.ACTION,
        action: ACTIONS.GO_OFFLINE
    },
    mc: {
        displayText: 'MC',
        type: BUTTON_TYPES.ACTION,
        action: ACTIONS.MEMORY_CLEAR
    },
    mr: {
        displayText: 'MR',
        type: BUTTON_TYPES.ACTION,
        action: ACTIONS.MEMORY_RECALL
    },
    mm: {
        displayText: 'M-',
        type: BUTTON_TYPES.ACTION,
        action: ACTIONS.MEMORY_MINUS
    },
    mp: {
        displayText: 'M+',
        type: BUTTON_TYPES.ACTION,
        action: ACTIONS.MEMORY_PLUS
    },
    c: {
        displayText: 'C',
        type: BUTTON_TYPES.ACTION,
        action: ACTIONS.CLEAR_NEXT
    },
    ac: {
        displayText: 'AC',
        type: BUTTON_TYPES.ACTION,
        action: ACTIONS.CLEAR_ALL
    },
    calc: {
        displayText: '=',
        type: BUTTON_TYPES.ACTION,
        action: ACTIONS.CALCULATE
    },
    dot: {
        displayText: '.',
        type: BUTTON_TYPES.NUMBER,
        value: '.'
    },
    ...Array
        .apply(null, {length: 10})
        .map(Number.call, Number)
        .reduce((acc, number) => {
            acc[NUMBERS[number]] = {
                displayText: number,
                type: BUTTON_TYPES.NUMBER,
                value: number
            };
            return acc;
        }, {})
}
