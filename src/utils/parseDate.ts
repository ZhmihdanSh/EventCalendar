export const parseDate = (date: Date): string => {
    const day = date.getDate() > 9 ? `${date.getDate()}` : `0${date.getDate()}`;
    const month = date.getMonth() > 9 ? `${date.getMonth() + 1}` : `0${date.getMonth() + 1}`;
    const year = `${date.getFullYear()}`;
    return `${day}.${month}.${year}`;
}
