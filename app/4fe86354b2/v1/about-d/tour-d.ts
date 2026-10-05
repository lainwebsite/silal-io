import { tour as base } from "./tour";

// Version D visits places in the order you'd walk the site: entrance → building → annex → fields → greenhouses.
const order = ["overview", "collab", "labs", "cea", "fields", "greenhouses", "masterplan"];
export const tour = order.map((k) => base.find((t) => t.key === k)!);
