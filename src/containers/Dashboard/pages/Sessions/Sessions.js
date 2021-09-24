import { Table } from 'components/Table'
import { dateFormat } from 'utils/date'
import { PROGRESS_TYPE } from 'constants/progressType'

const columns = [
  {
    key: 'evseId',
    header: 'EVSE ID',
    render: id => (id.length > 15 ? `${id.slice(0, 15)}...` : id),
  },
  {
    key: 'hotLinePhone',
    header: 'Phone',
  },
  {
    key: 'lastUpdated',
    header: 'Finished At',
    render: date => (date ? dateFormat(date) : '-'),
  },
  {
    key: 'address',
    header: 'Address',
  },
  {
    key: 'status',
    header: 'Status',
  },
]

const Sessions = ({ list, progress }) => {
  if (progress !== PROGRESS_TYPE.SUCCESS) {
    return null
  }
  return <Table data={list} columns={columns} />
}

export default Sessions
