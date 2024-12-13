import sort from "./index.js";
import test, { describe } from "node:test";
import assert from "node:assert";

describe("evil-sort", () => {
  test("it can sort very short numbers", async () => {
    const unsorted = [5, 3, 1];
    const sorted = await sort(unsorted);
    assert.deepStrictEqual(sorted, [1, 3, 5]);
  });
  test("it can sort them", async () => {
    const unsorted = [500, 300, 100];
    const sorted = await sort(unsorted);
    assert.deepStrictEqual(sorted, [100, 300, 500]);
  });
  test("it doesn't mutate the original", async () => {
    const unsorted = [500, 300, 100];
    const sorted = await sort(unsorted);
    assert.deepStrictEqual(sorted, [100, 300, 500]);
    assert.deepStrictEqual(unsorted, [500, 300, 100]);
  });
});
