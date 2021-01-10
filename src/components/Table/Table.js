import React,{ Component } from 'react';
import './Table.css';

class Table extends Component{
    render(){
        return(
<div className="table__page">
<table >
                 <thead>
                   <tr className="customer__title">
                       <th>DATE</th>
                   <th>NAME</th> 
                   <th>ID</th> 
                   <th>POLICY</th>
                   <th>PREMIUM</th> 
                   <th>POLICY NUMBER</th>
                   <th>REMARKS</th>
                   <th>NEXT FOLLOWUP DATE</th>
                   </tr>
                   </thead>
                   <tbody>
                   {/* {customers.map((customer, idx)=>(  */}
                   <tr >{/*key={`customer${idx}`}*/}
                   <td className="customer__title">
                   12/12/21
                   </td>
                   <td className="customer__title">
                   shiv
                   </td>
                   <td className="customer__title">
                    78609hdsd
                   </td>
                   <td className="customer__title">
                    car-insurance
                   </td>
                   <td>
                       10k-15k
                   </td>
                   
                   <td>
                       10789
                   </td>
                   <td>
                       nil
                   </td>
                   <td>
                       12/5/21
                   </td>
                   </tr>
                   {/*}))}*/}
                   </tbody>
                  </table>

</div>


)}

} 
        
export default Table;        