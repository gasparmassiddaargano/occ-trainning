export function isTouchEnabled() {
    return ( 'ontouchstart' in window ) || ( navigator.maxTouchPoints > 0 );
}