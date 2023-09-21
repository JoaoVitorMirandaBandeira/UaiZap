export const getHoursFormatted = () => {
    const newDate = new Date()
    const hoursFormatted = `${newDate.getHours()}:${('0'+newDate.getMinutes()).slice(-2)}`
    return hoursFormatted
}