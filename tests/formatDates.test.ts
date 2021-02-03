import formatDate from '../lib/formatDate'

describe('should test formatting func', () => {
    test('should return true if test passes', () => {
        const date = formatDate(new Date())
        expect(date).toBe('this month')
    })
})
