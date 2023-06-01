export function shuffle(array) {
    return array.toSorted(() => Math.random() - 0.5);
}
