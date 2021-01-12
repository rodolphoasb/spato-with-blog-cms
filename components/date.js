import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return (
    <time className='text-gray-400 text-sm' dateTime={dateString}>
      {format(date, 'dd/MM/yyyy')}
    </time>
  )
}
