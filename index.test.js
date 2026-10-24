import sort from "./index.js";
import { describe, expect, it } from "bun:test";

describe("evil-sort", () => {
  it("it can sort very short numbers", async () => {
    const unsorted = [5, 3, 1];
    const sorted = await sort(unsorted);
    expect(sorted).toEqual([1, 3, 5]);
  });
  it("it can sort them", async () => {
    const unsorted = [500, 300, 100];
    const sorted = await sort(unsorted);
    expect(sorted).toEqual([100, 300, 500]);
  });
  it("it doesn't mutate the original", async () => {
    const unsorted = [500, 300, 100];
    const sorted = await sort(unsorted);
    expect(sorted).toEqual([100, 300, 500]);
    expect(unsorted).toEqual([500, 300, 100]);
  });
});
