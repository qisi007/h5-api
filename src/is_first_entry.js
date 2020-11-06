export const isFirstEntry = () => {
    if (window.name == "") {
        window.name = "isRefresh";
        return true
    } else {
        return false
    }
}