module.exports = function reverse(n) {
    const str = String(Math.abs(n));
    
    return str.split('').reverse().join('');
}

