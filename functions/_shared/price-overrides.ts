/** Norway market price matching (2026-10-30). Keys are CJ product ids (pid).
 * PRICE_OVERRIDE: regular NOK price aligned to the Norwegian market, never below the profit floor.
 * HIDDEN: profit floor is above the Norwegian market price -> product is hidden (not deleted). */
export const PRICE_OVERRIDE: Record<string, number> = {};
export const HIDDEN = new Set<string>(["1418407011351138304", "4C4CCC40-FF91-4CCD-AF58-C4496A8E11FB", "EC4B1678-DAED-4349-9415-2612192DE24D", "2510080445011629000"]);
