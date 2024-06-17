export const columns = [
    {
        Header:'ID',
        accessor:'req_id'
    },
    {
        Header:'Hospital_id',
        accessor:'hs_id'
    },
    {
        Header:'Blood type',
        accessor:'requested_blood_type'
    },
    {
        Header:'Quantity',
        accessor:'request_quantity'
    },
    {
        Header:'Approve',
        id:'button',
        Cell: () => null,

    }

]