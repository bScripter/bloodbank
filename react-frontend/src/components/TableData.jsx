import React from 'react'

const TableData = (props) => {
  return (
    <tr className='' >
        <td>{props.campaignName}</td>
        <td>{props.campaignDate}</td>
        <td>{props.campaignStatus}</td>
    </tr>
  )
}

export default TableData
