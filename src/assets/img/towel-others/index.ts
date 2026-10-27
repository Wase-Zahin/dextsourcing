const files = import.meta.glob<string>("./*.{jpg,jpeg,png,webp,avif}", {
    eager: true,
    import: "default",
});

// natural sort so 2.jpg comes before 10.jpg
export const towel_others: string[] = Object.entries(files)
    .sort(([a], [b]) => a.localeCompare(b, undefined, {numeric: true}))
    .map(([, src]) => src);

export default towel_others;