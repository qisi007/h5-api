export const isFirstEntryFun = () => {
    if (window.name == "") {
        window.name = "isRefresh";
        return true
    } else {
        return false
    }
}