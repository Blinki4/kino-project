export const getPremierDate = (isoString: string | undefined) => {

    if (!isoString) {
        return '—'
    }

    const monthsMap = new Map([
        [1, 'января'],
        [2, 'февраля'],
        [3, 'марта'],
        [4, 'апреля'],
        [5, 'мая'],
        [6, 'июня'],
        [7, 'июля'],
        [8, 'августа'],
        [9, 'сентября'],
        [10, 'октября'],
        [11, 'ноября'],
        [12, 'декабря'],
    ])
    
    const date = new Date(isoString)
    const day = date.getUTCDate()
    const month = date.getUTCMonth()
    const year = date.getUTCFullYear()

    return `${day} ${monthsMap.get(month + 1)} ${year}`
}