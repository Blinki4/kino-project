export const getParsedMovieLength = (length: number) => {
    const hours = Math.floor(length / 60);
    const minutes = length % 60;
    if (hours === 0) {
        return `${minutes} мин`
    }
    return `${hours} ч ${minutes} мин`
}