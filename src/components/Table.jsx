import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { Button } from './Button';

const Table = ({ columns, data, onRowClick, buttonLabel, buttonClick }) => {
    const [paginationModel, setPaginationModel] = useState({
        pageSize: 9,
        page: 0,
    });

    const onRowChange = (e) => {
        onRowClick && onRowClick(e);
    };

    return (
        <div className='table_wrapper'>
            <Button label={buttonLabel} onClick={() => buttonClick && buttonClick()}/>
            <DataGrid
                rows={data}
                columns={columns}
                pageSizeOptions={[5]}
                paginationModel={paginationModel}
                onPaginationModelChange={setPaginationModel}
                pagination
                onRowClick={onRowChange}
                getRowId={(params) => params?._id}
            />
        </div>
    );
};

export default Table;
