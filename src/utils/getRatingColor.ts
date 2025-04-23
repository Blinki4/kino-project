export const getRatingColor = (rating: number) => {
    if (rating >= 8) {
        return 'rating-gold'
    } else if (rating >= 7 && rating < 8) {
        return 'rating-high'
    } else if (rating >= 5 && rating < 7) {
        return 'rating-medium'
    }
    return 'rating-low'
}
