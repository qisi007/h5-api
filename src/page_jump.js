export const pageJumpFun = ( url, target=true ) => {
    if (!url.includes("http")) {
        console.error("url地址不合法,检查是否添加http或者https前缀");
        return
    }
    if ( target ) {
        window.open(url, "_blank");
    } else {
        window.location.href = url;
    }
}