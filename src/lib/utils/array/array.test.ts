import { describe, it, expect } from "vitest";
import { randomizeArray } from ".";

describe("randomizeArray function", () => {
  it("should return null if the array is empty", () => {
    expect(randomizeArray([])).toBe(null);
  });

  it("should return a new array with the same length as the original array", () => {
    const array = [1, 2, 3, 4, 5];
    const newArray = randomizeArray(array);
    expect(newArray).toHaveLength(array.length);
  });

  it("should return a new array with the same elements as the original array", () => {
    const array = [1, 2, 3, 4, 5];
    const newArray = randomizeArray(array);
    expect(newArray).toEqual(expect.arrayContaining(array));
  });

  it("should return a new array with the same elements as the original array, but in a different order", () => {
    const array = [1, 2, 3, 4, 5];
    const newArray = randomizeArray(array);
    expect(newArray).not.toEqual(array);
  });

  it("should be imutable", () => {
    const array = [1, 2, 3, 4, 5];
    const newArray = randomizeArray(array);
    expect(newArray).not.toBe(array);
  });
});