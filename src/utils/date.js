import { format } from 'date-fns/esm'

export function dateFormat(date, formatStr = 'dd/MM/yyyy, HH:mm:ss') {
  try {
    return format(new Date(date), formatStr)
  } catch (e) {
    console.error(e)
    return date
  }
}
