const gridtravell = (n, m, memo = {}) => {
    const key = n + ',' +m;
    if(key in memo) return memo[key];
    if (n == 1 && m == 1) return 1;
    if (n == 0 || m == 0) return 0;
    memo[key] = gridtravell(n - 1 , m ,memo) + gridtravell(n, m - 1);
     return
};
console.log(gridtravell(18,18));
















/*const fib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if(n <= 2) return 1;
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}
console.log(fib(9));*/
