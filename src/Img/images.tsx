// All photos are free Pexels images hotlinked by ID (https://www.pexels.com).
// If one ever fails to load, swap its ID for any other Pexels photo ID.
export const px = (id: number, w = 1400) =>
    `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

// CSS background: the photo on top, brand gradient underneath as a fallback.
export const bg = (id: number, w = 1400) =>
    `url(${px(id, w)}), linear-gradient(135deg, #1B4A72, #00707F)`;