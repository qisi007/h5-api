export function pageJumpFun ( url, target=true ) {
    if ( target ) {
        window.open(url, "_blank");
    } else {
        window.location.href = url;
    }
}