export function FibonacciGenerator(quantity) {
    this.quantity = quantity;
    this[Symbol.iterator] = function* () {
        // TODO: Implement Fibonacci sequence calculation
        // [1] = 1, [2] = 1 [n] = [n-1] + [n-2]
        // 1, 1, 2, 3, 5, 8, 13, 21
        let prev = 1;
        let prevPrev = 1;
        let counter = 1;
        while (counter <= quantity) {
            if (counter++ <= 2) {
                yield 1;
            } else {
                const current = prev;
                prev = prev + prevPrev;
                prevPrev = current;
                yield prev;
            }
        }
    }
}

export function Fibonacci(quantity) {
    this.quantity = quantity;
    this[Symbol.iterator] = function () {
        // TODO: implement fibonacci iterator
        // [1] =1, [2] =1, [3] =2, [4] =3, [5] =5, [6] =8, [7] =13, [8] =21
        // 1,1,2,3,5,8,13,21
        let current = 1;
        let next = 1;
        let count = 0;
        return {
            next() {
                // console.log(count, quantity, current);
                if (count >= quantity) {
                    return {done: true};
                }
                const result = {value: current, done: false};
                // const temp = current;
                // current = next;
                // next = temp + next;
                [current, next] = [next, current + next];
                count++;
                return result;
            }
        };
    };
}

export class Fibonacci2 {
    constructor(quantity) {
        this.quantity = quantity;
    }
    [Symbol.iterator]() {
        // TODO: implement fibonacci iterator
        // [1] =1, [2] =1, [3] =2, [4] =3, [5] =5, [6] =8, [7] =13, [8] =21
        // 1,1,2,3,5,8,13,21
        let current = 1;
        let next = 1;
        let count = 0;
        let quantity = this.quantity;
        return {
            next() {
                if (count >= quantity) {
                    return {done: true};
                }
                const result = {value: current, done: false};
                // const temp = current;
                // current = next;
                // next = temp + next;
                [current, next] = [next, current + next];
                count++;
                return result;
            }
        };
    };
}

// console.log([...new Fibonacci2(8)]);