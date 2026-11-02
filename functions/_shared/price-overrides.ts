/** Norway market price matching (2026-10-30). Keys are CJ product ids (pid).
 * PRICE_OVERRIDE: regular NOK price aligned to the Norwegian market, never below the profit floor.
 * HIDDEN: profit floor is above the Norwegian market price -> product is hidden (not deleted). */
export const PRICE_OVERRIDE: Record<string, number> = {"1599598514135379968": 35};
/* 2026-10-31 (sincert): owner order - only products with a confirmed certificate may be shown. */
export const HIDDEN = new Set<string>(["1418407011351138304", "4C4CCC40-FF91-4CCD-AF58-C4496A8E11FB", "EC4B1678-DAED-4349-9415-2612192DE24D", "2510080445011629000", "43F626C6-B8A6-4422-90C0-B8D2B10523CC", "1D523016-A9B3-45CB-A0EF-E097AD366714", "1474281823210180608", "1384043716477587456", "1620304069497729024"]);

/* 2026-10-31 (sincert): CERT_ONLY = true -> ONLY ids listed in CERTIFIED are shown/sellable (all providers: CJ, Printify, Printful, Gelato).
 * Restore per SKU with /workspace/negocios/restaurar_por_sku.py (adds the id here and removes it from HIDDEN). */
export const CERT_ONLY = true;
export const CERTIFIED = new Set<string>(["1599598514135379968", "pfy-energy-tote", "pfy-energy-poster-art", "pfy-energy-poster-type", "pfy-energy-journal", "pfy-energy-sticker", "pfy-energy-mousepad", "pfy-energy-tee-white-s", "pfy-energy-tee-white-m", "pfy-energy-tee-white-l", "pfy-energy-tee-white-xl", "pfy-energy-hoodie-navy-s", "pfy-energy-hoodie-navy-m", "pfy-energy-hoodie-navy-l", "pfy-energy-hoodie-navy-xl", "pfy-energy-mug-std", "pfy-energy-mug-eu"]);

/* 2026-11-01: CJ variants not sold. 8 pc and 20 pc re-enabled 01.11 by owner decision (low margin accepted). */
export const EXCLUDED_VIDS = new Set<string>([]);

/* 2026-11-01 16:13 owner rule (replaces ~15 kr under): price = SAME total as the most comparable Norwegian product (incl. shipping), always with profit; discounts only when owner says. Per CJ variant (vid). */
export const VARIANT_PRICE: Record<string, number> = {"1599598514215071744": 35, "1600418745875443712": 139, "1599598514215071745": 359, "2603150727151607300": 1009};

/* Printify (01.11): fast pris = vanlig norsk markedspris for tilsvarende POD-vare; hver pris gir fortjeneste også ved fri frakt (pris*0.77 > (kost+frakt)*10.8). */
export const PRINTIFY_PRICE: Record<string, number> = {"pfy-energy-tote": 299,"pfy-energy-poster-art": 229,"pfy-energy-poster-type": 229,"pfy-energy-journal": 259,"pfy-energy-sticker": 149,"pfy-energy-mousepad": 249,"pfy-energy-tee-white-s": 299,"pfy-energy-tee-white-m": 299,"pfy-energy-tee-white-l": 299,"pfy-energy-tee-white-xl": 299,"pfy-energy-hoodie-navy-s": 649,"pfy-energy-hoodie-navy-m": 649,"pfy-energy-hoodie-navy-l": 649,"pfy-energy-hoodie-navy-xl": 649,"pfy-energy-mug-std": 159,"pfy-energy-mug-eu": 159};
