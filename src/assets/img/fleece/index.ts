const files = import.meta.glob<string>("./*.{jpg,jpeg,png,webp,avif}", {
    eager: true,
    import: "default",
});

export const fleece: string[] = Object.entries(files)
    .sort(([a], [b]) => a.localeCompare(b, undefined, {numeric: true}))
    .map(([, src]) => src);

export default fleece;