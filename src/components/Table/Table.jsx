import React from 'react'

const Table = (props) => {
  return (
    <table>
        <thead>
            <tr>
                <th>{props.columns[0]}</th>
                <th>{props.columns[1]}</th>
                <th>{props.columns[2]}</th>
            </tr>
        </thead>
        <tbody>
            {props.rows.map((row, index) => (
                <tr key={index} >
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default Table