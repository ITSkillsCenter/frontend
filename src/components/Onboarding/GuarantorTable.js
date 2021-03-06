import React from 'react';
import Moment from 'react-moment';

export default function GuarantorTable(props) {
  return (
    <div className="table-responsive">
      <table id="example1" className="table table-striped table-bordered border-t0 text-nowrap w-100" >
        <thead>
          <tr>
            {/* <th className="wd-15p">S/N</th> */}
            <th className="wd-15p">Name</th>
            <th className="wd-15p">Relationship with employee</th>
            <th className="wd-15p">How long have you known the employee</th>
            <th className="wd-25p"></th>
          </tr>
        </thead>
        <tbody>                                {
          props.moreData.length ? props.moreData.map((data, index) => (
            <tr key={index}>
              {/* <td>{index + 1}</td> */}
              <td>{data.firstName + ' ' + data.lastName}</td>
              <td>{data.relationship}</td>
              <td>{data.employeeKnownDate}</td>
              <td>
                {/* <span className="add-more p-3" data-toggle="modal" data-target="#guarantorModal" onClick={() => props.handleEdit(index, data.id)}>Edit</span> */}
                <span className="add-more" 
                    data-toggle="modal"
                    data-target="#confirm"
                  // onClick={() => props.removeMore(index,data.id)}
                  onClick={() => props.removeMore(index, data.id)}
                >Delete</span>
              </td>
            </tr>
          )) : ''
        }
        </tbody>
      </table>
    </div>
  )
}
