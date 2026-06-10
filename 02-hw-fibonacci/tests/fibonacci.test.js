import {Fibonacci, Fibonacci2} from "../model/fibonacci.js";
import {describe, it, expect, test} from "@jest/globals";

describe("Fibonacci", () => {
    test("should return the first 8 fibonacci numbers", () => {
        const actual = [...new Fibonacci(8)];
        expect(actual).toEqual([1, 1, 2, 3, 5, 8, 13, 21]);
    });
    test("should return 2 elements for quantity 2", () => {
        const actual = [...new Fibonacci(2)];
        expect(actual).toEqual([1, 1]);
    });
    test("should return 1 element for quantity 1", () => {
        const actual = [...new Fibonacci(1)];
        expect(actual).toEqual([1]);
    });
    test("sum of 8 elements should be 54", () => {
        const fb = [...new Fibonacci(8)];
        // this line is better for performance but less readable
        expect(fb.reduce((a, b) => a + b, 0)).toEqual(54);
        // the same as above, but more lines:
        // let sum = 0;
        // for (const elem of fb) {
        //     sum += elem;
        // }
        // expect(sum).toEqual(54);
    });
});

describe("Fibonacci2", () => {
    test("should return the first 8 fibonacci numbers", () => {
        const actual = [...new Fibonacci2(8)];
        expect(actual).toEqual([1, 1, 2, 3, 5, 8, 13, 21]);
    });
    test("should return 2 elements for quantity 2", () => {
        const actual = [...new Fibonacci2(2)];
        expect(actual).toEqual([1, 1]);
    });
    test("should return 1 element for quantity 1", () => {
        const actual = [...new Fibonacci2(1)];
        expect(actual).toEqual([1]);
    });
    test("sum of 8 elements should be 54", () => {
        const fb = [...new Fibonacci2(8)];
        // this line is better for performance but less readable
        expect(fb.reduce((a, b) => a + b, 0)).toEqual(54);
        // the same as above, but more lines:
        // let sum = 0;
        // for (const elem of fb) {
        //     sum += elem;
        // }
        // expect(sum).toEqual(54);
    });
});
