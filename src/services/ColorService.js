export const getColor = (seed) => {
    const hashCodeForRed = hashCode(seed + " red " + seed);
    const hashCodeForGreen = hashCode(seed + " green " + seed);
    const hashCodeForBlue = hashCode(seed + " blue " + seed);

    const r = sfc32(0x9E3779B9, 0x243F6A88, 0xB7E15162, hashCodeForRed);
    const g = sfc32(0x243F6A88, 0x9E3779B9, 0xB7E15162, hashCodeForGreen);
    const b = sfc32(0xB7E15162, 0x243F6A88, 0x9E3779B9, hashCodeForBlue);

    const n = normalize(r, g, b);

    return rgbToHex(
        Math.floor(n.r * 255),
        Math.floor(n.g * 255),
        Math.floor(n.b * 255)
    );
}

const normalize = (r, g, b) => {
    const multiplier = 1 / Math.sqrt(r * r + g * g + b * b);
    return {
        r: r * multiplier,
        g: g * multiplier,
        b: b * multiplier
    }
}

const hashCode = (string) => {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
        const code = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + code;
        hash = hash & hash;
    }
    return hash;
}

const sfc32 = (a, b, c, d) => {
    a >>>= 0;
    b >>>= 0;
    c >>>= 0;
    d >>>= 0;
    let t = (a + b) | 0;
    a = b ^ b >>> 9;
    b = c + (c << 3) | 0;
    c = (c << 21 | c >>> 11);
    d = d + 1 | 0;
    t = t + d | 0;
    c = c + t | 0;
    return (t >>> 0) / 4294967296;
}

const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}