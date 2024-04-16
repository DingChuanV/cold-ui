const base = {
    baseURL:"http://127.0.0.1:8090",
    login:"/user/login",
    userinfo:"/user/userinfo",
    logout:"/user/logout",
    getAllCompany:"/system/getAllCompany",
    getCompanyById:"/system/getCompanyById",
    updateCompanyById:"/system/updateCompanyById",
    getAllWarehouse:"/system/getAllWarehouse",
    getWarehouseById:"/system/getWarehouseById",
    updateWarehouseById:"/system/updateWarehouseById",
    getAllHost:"/system/getAllHost",
    getHostById:"/system/getHostById",
    updateHostById:"/system/updateHostById",
    getAllMeter:"/system/getAllMeter",
    getMeterById:"/system/getMeterById",
    updateMeterById:"/system/updateMeterById",
    addCompany:"/system/addCompany",
    addWarehouse:"/system/addWarehouse",
    addHost:"/system/addHost",
    addMeter:"/system/addMeter",
    deleteCompanyByCompanyNumber:"/system/deleteCompanyByCompanyNumber",
    deleteWarehouseByWarehouseNumber:"/system/deleteWarehouseByWarehouseNumber",
    deleteHostByHostNumber:"/system/deleteHostByHostNumber",
    deleteMeterByMeterNumber:"/system/deleteMeterByMeterNumber",
    getHostHistoryLastDay:"/system/getHostHistoryLastDay",
    getMeterHistoryLastDay:"/system/getMeterHistoryLastDay",
    downloadAllHostHistoryCSV:"/system/download/host_history",
    downloadAllMeterHistoryCSV:"/system/download/meter_history",
    uploadHostHistory:"/system/upload/host_history",
    uploadMeterHistory:"/system/upload/meter_history"
}
export default base