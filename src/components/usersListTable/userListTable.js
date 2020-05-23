import React  from 'react';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'




 const  UsersListTable = (props) =>  {

 	const columns = [{
 		Header: 'Gender',
        accessor: 'user.gender' ,
        filterMethod:(filter, row) =>  {
            const id = filter.pivotId || filter.id;
            return (
              row[id] !== undefined ?
              String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase())
              :
              true
              );
          },
	  }, {
        Header: 'Name',
        id:"name",
        accessor:  el => (el.user.name.title + el.user.name.first+el.user.name.last),
        Cell: ({ original }) => {
            return (
              <span>
              {original.user.name.title}{" "}{original.user.name.title}{" "}{original.user.name.first}{" "}{original.user.name.last}
              </span>
              );
          },
	  }, {
	    Header: 'Email', 
		 accessor: 'user.email'
	  },{
	    Header: 'User Name',
	    accessor: 'user.username'
	    
	  },{
	    Header: 'Password',
	    accessor: 'user.password'
	    
	  },{
	    Header: 'DOB',
        accessor: 'user.dob',
        filterMethod:(filter, row) => {
                 return String(row[filter.id]) === String(filter.value)
         },
	  },{
          Header:'Phone',
          accessor:'user.phone'

      }
     ]
     
    const  filterCaseInsensitive = (filter, row) =>{
        const id = filter.pivotId || filter.id;
        if (row[id] !== null && typeof row[id] === "string"){
          return (
            row[id] !== undefined ?
            String(row[id].toLowerCase()).includes(filter.value.toLowerCase())
            : true
            );
        }
      
      }

 
  return (
    <div className="UsersListTable">
      
         <ReactTable
             data={props.data}
			 columns={columns}
			 showPagination ={true}
			 className="-striped -highlight"
             defaultPageSize = {10}
             pageSizeOptions = {[5, 10,15,20]}
             defaultFilterMethod={filterCaseInsensitive}
             filterable={true}
                >
              {(state, makeTable, instance) => {
            let recordsInfoText = "";

            const { filtered, pageRows, pageSize, sortedData, page } = state;

            if (sortedData && sortedData.length > 0) {
              let isFiltered = filtered.length > 0;

              let totalRecords = sortedData.length;

              let recordsCountFrom = page * pageSize + 1;

              let recordsCountTo = recordsCountFrom + pageRows.length - 1;

              if (isFiltered)
                recordsInfoText = `${recordsCountFrom}-${recordsCountTo} of ${totalRecords} filtered records`;
              else
                recordsInfoText = `${recordsCountFrom}-${recordsCountTo} of ${totalRecords} records`;
            } else recordsInfoText = "No records";

            return (
             
                 <>
                  <span className="title-table">{recordsInfoText}</span>
                {makeTable()}
                </>
            
            );
          }}
          </ReactTable>
         
    </div>
  );
}

export default UsersListTable;
