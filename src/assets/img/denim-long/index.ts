const files = import.meta.glob<string>("./*.{jpg,jpeg,png,webp,avif}", {
    eager: true,
    import: "default",
});

// natural sort so 2.jpg comes before 10.jpg
export const denim_long: string[] = Object.entries(files)
    .sort(([a], [b]) => a.localeCompare(b, undefined, {numeric: true}))
    .map(([, src]) => src);

export default denim_long;