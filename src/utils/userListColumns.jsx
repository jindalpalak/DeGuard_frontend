export const userListColumn = [
    { field: 'name', headerName: 'User Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'services', headerName: 'services', renderCell: (params) => params?.value?.map((item) => item?.name).join(", "), width: 200 },
    { field: 'isActive', headerName: "Active", renderCell: (params) => params?.value === 1 ? "true" : "false" , width: 200 }
]