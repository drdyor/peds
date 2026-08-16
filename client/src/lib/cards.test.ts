import { describe, expect, it } from "vitest";
import { flashcards } from "./cards";

describe("source-drill metadata", () => {
  it("keeps source-drill cards traceable and categorized", () => {
    const sourceCards = flashcards.filter((card) => card.status === "source-derived");
    expect(sourceCards.length).toBeGreaterThan(0);
    expect(sourceCards.every((card) => Boolean(card.sourceAtomId))).toBe(true);
    expect(sourceCards.every((card) => Boolean(card.category))).toBe(true);
  });

  it("keeps source-drill IDs unique", () => {
    const ids = flashcards.map((card) => card.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("does not treat unresolved source drills as verified by default", () => {
    const sourceCards = flashcards.filter((card) => card.status === "source-derived");
    expect(sourceCards.every((card) => card.status !== "valid")).toBe(true);
  });
});
