import styles from './Table.module.scss'

export const Table = ({ data, columns }) => {
  return (
    <table className={styles.wrap}>
      <TableHeader columns={columns} />
      <TableRows data={data} columns={columns} />
    </table>
  )
}

const TableHeader = ({ columns }) => {
  const headers = columns.map((column, index) => {
    return (
      <th key={`headCell-${index}`} className={styles.thead}>
        {column.header}
      </th>
    )
  })

  return (
    <thead>
      <tr>{headers}</tr>
    </thead>
  )
}

const TableRows = ({ data, columns }) => {
  function createRowItems() {
    if (!data.length) {
      return null
    }

    return data.map((row, index) => {
      return (
        <tr key={`row-${index}`} className={styles.trow}>
          {createColumnList(row)}
        </tr>
      )
    })
  }

  function createColumnItem(column, index, row) {
    const value = row[column.key]
    const content = column.render ? column.render(value) : value
    return (
      <td key={`cell-${index}`} className={styles.td}>
        <div className={styles.col}>{content}</div>
      </td>
    )
  }

  function createColumnList(row) {
    if (!columns.length) {
      return null
    }

    return columns.map((column, index) => createColumnItem(column, index, row))
  }

  return <tbody>{createRowItems()}</tbody>
}
