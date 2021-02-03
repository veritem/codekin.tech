export default function formatDate(date: Date): string {
    const formatter = new Intl.RelativeTimeFormat('en', {
        numeric: 'auto'
    })

    const duration = (new Date(date).getTime() - new Date().getTime()) / 1000 / 2592000

    return formatter.format(Math.round(duration), 'month')
}
