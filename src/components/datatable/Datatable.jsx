import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';


const Datatable = () => {
    // bu sekilde tabloya yeni kolon ekleyebiliyorum.
    // datatablesource icinde de bu sekilde olusturuldu.
    // bu ozellik mui'den geliyor
    const actionColumn = [
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: () => {
                return (
                    <div className="cellAction">
                        <div className="viewButton">View</div>
                        <div className="deleteButton">Delete</div>
                    </div>
                )
            }
        }
    ]
    return (
        <div className='datatable'>
            <DataGrid
                rows={userRows}
                // concat ile yeni olusturdugum kolonu ekledim
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    )
}

export default Datatable