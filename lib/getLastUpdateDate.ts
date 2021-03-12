export const getLastUpdateDate = (date: Date): string => {
    let d = new Date(date)
    const day = d.getDate()
    const year = d.getFullYear()

    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    return `${day} ${monthNames[d.getMonth()]} ${year}`
}
