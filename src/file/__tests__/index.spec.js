import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { a } from "../index.js"

describe("a", async function () {
  it("test",  async function () {
    const result = a();
    assert.equal(result, 1);
  })
});
