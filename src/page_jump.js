export function pageJump ( url, target ) {
    if ( target ) {
        window.open(url, "_blank");
    } else {
        window.location.href = url;
    }
}