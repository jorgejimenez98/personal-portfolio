/* eslint-disable max-len */
import { i18n } from 'next-i18next'
import { capitalize } from './strings'


const getDateFromString = (date: string): Date => {
  const [day, month, year] = date.split('-').map(Number)
  return new Date(year, month - 1, day)
}

/**
 * Converts a date string in the format 'DD-MM-YYYY' into a human-readable format.
 * @param {string} date - The date string in the format 'YYYY-MM-DD'.
 * @returns {string} A human-readable date string in the format 'MMM YYYY'.
 */
export const getHumanizedDate = (date: string): string => {
  if (date === 'PRESENT') {
    return { en: 'Present', es: 'Presente' }[i18n?.language!] as string
  }
  const dateValue = getDateFromString(date)

  const options = { year: 'numeric', month: 'short' } as const

  const formattedDate = dateValue.toLocaleDateString(i18n?.language, options)
  return capitalize(formattedDate.replace('.', ''))
}

/**
 * Calculates the difference in years and months between two dates and returns a human-readable string describing the difference.
 *
 * @param {string} dateStart - The start date in string format. Represents the starting point for calculating the difference.
 * @param {string} dateEnd - The end date in string format. Represents the ending point for calculating the difference.
 * @returns {string} A formatted string describing the difference in years and months between the two dates.
 */
export const getYearMonthDifference = (dateStart: string, dateEnd: string): string => {
  const startDate = getDateFromString(dateStart)
  const endDate = dateEnd === 'PRESENT' ? new Date() : getDateFromString(dateEnd)

  let yearDiff = endDate.getFullYear() - startDate.getFullYear()
  let monthDiff = endDate.getMonth() - startDate.getMonth()

  const labels = {
    es: { year: 'año', years: 'años', month: 'mes', months: 'meses', and: ' y ' },
    en: { year: 'year', years: 'years', month: 'month', months: 'months', and: ' and ' },
  }[i18n?.language!]

  if (monthDiff < 0) {
    yearDiff--
    monthDiff += 12
  }

  let result = ''

  if (yearDiff > 0) {
    result += `${yearDiff} ${yearDiff === 1 ? labels?.year : labels?.years}`
  }

  if (monthDiff > 0) {
    if (yearDiff > 0) {
      result += labels?.and
    }
    result += `${monthDiff} ${monthDiff === 1 ? labels?.month : labels?.months}`
  }

  return result
}
