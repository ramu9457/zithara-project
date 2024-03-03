export const OPERATION_SUCCESS = (message,result) => ({
    statuscode:200,
    status:"SUCCESS",
    message,
    result,
})
export const OPERATION_FAILED = (message,result) => ({
    statuscode:400,
    status:"FAILED",
    message,
    result,
})