const files = import.meta.glob<string>("./*/*.{jpg,jpeg,png,webp,avif}", {
    eager: true,
    import: "default",
});

export type ComboSet = { id: string; categories: string[]; images: string[] };

const byId: Record<string, ComboSet> = {};

Object.entries(files)
    .sort(([a], [b]) => a.localeCompare(b, undefined, {numeric: true}))
    .forEach(([path, src]) => {
        const folder = path.split("/")[1]; // "./denim-knit/1.jpg" -> "denim-knit"
        // "woven-denim", "denim+woven" and "denim-woven" all become the same set
        const categories = folder.split(/[-+_]/).map((s) => s.toLowerCase()).sort();
        const id = categories.join("+");
        (byId[id] ??= {id, categories, images: []}).images.push(src);
    });

export const comboSets: ComboSet[] = Object.values(byId);
export default comboSets;