/** Norway market price matching (2026-10-30). Keys are CJ product ids (pid).
 * PRICE_OVERRIDE: regular NOK price aligned to the Norwegian market, never below the profit floor.
 * HIDDEN: profit floor is above the Norwegian market price -> product is hidden (not deleted). */
export const PRICE_OVERRIDE: Record<string, number> = {};
/* 2026-10-31 (sincert): owner order - only products with a confirmed certificate may be shown. */
export const HIDDEN = new Set<string>(["1418407011351138304", "4C4CCC40-FF91-4CCD-AF58-C4496A8E11FB", "EC4B1678-DAED-4349-9415-2612192DE24D", "2510080445011629000", "43F626C6-B8A6-4422-90C0-B8D2B10523CC", "1D523016-A9B3-45CB-A0EF-E097AD366714", "1474281823210180608", "1384043716477587456", "1620304069497729024"]);

/* 2026-10-31 (sincert): CERT_ONLY = true -> ONLY ids listed in CERTIFIED are shown/sellable (all providers: CJ, Printify, Printful, Gelato).
 * Restore per SKU with /workspace/negocios/restaurar_por_sku.py (adds the id here and removes it from HIDDEN). */
export const CERT_ONLY = true;
export const CERTIFIED = new Set<string>(["1599598514135379968"]);

/* 2026-11-01: CJ variants not sold. 8 pc and 20 pc re-enabled 01.11 by owner decision (low margin accepted). */
export const EXCLUDED_VIDS = new Set<string>([]);
