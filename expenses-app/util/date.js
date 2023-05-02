export const getFormattedDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

export const getDateMinusDays = (date, daysNum) => {
    const expenseDate = new Date(date)
    const today = new Date()
    const diff = Math.abs(today - expenseDate)
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
    return days <= daysNum
}