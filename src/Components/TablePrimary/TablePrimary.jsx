import React from 'react'
import './TablePrimary.css'

export default function TablePrimary({data:{head,body}}) {
  return (
    <table className="table-primary" cellPadding={0} cellSpacing={0}>
        <thead>
            <tr>
                {
                    head.map((item,index) => (
                        <th key={index}>{item}</th>
                    ))
                }
            </tr>
        </thead>
        <tbody>
            {
                body.map((bodyData,index) => (
                    <tr key={index}>
                        {
                            bodyData.map((item,key) => (
                                <td key={key} className="section-para">{item}</td>
                            ))
                        }
                    </tr>
                ))
            }
        </tbody>
    </table>
  )
}
