export const getParsedMovieLength = (length: number) => {
    const hours = Math.floor(length / 60);
    const minutes = length % 60;
    return `${hours}:${minutes}ч.`
}