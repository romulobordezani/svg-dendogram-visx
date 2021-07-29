export const getBoundaries = (
    layout: string,
    orientation: string,
    innerWidth: number,
    innerHeight: number
) => {
    let origin: { x: number; y: number };
    let sizeWidth: number;
    let sizeHeight: number;

    if (layout === 'polar') {
        origin = {
            x: innerWidth / 2,
            y: innerHeight / 2,
        };
        sizeWidth = 2 * Math.PI;
        sizeHeight = Math.min(innerWidth, innerHeight) / 2;
    } else {
        origin = { x: 0, y: 0 };
        if (orientation === 'vertical') {
            sizeWidth = innerWidth;
            sizeHeight = innerHeight;
        } else {
            sizeWidth = innerHeight;
            sizeHeight = innerWidth;
        }
    }

    return {
        origin,
        sizeHeight,
        sizeWidth
    }
}