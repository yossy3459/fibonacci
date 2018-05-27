'use strict';
// tribonacci

// メモ化用map
const memo = new Map();
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);

function tribonacci(n){
    // メモにあるとき
    if (memo.has(n)) {
        return memo.get(n);
    }
    // メモにないとき
    const value = tribonacci(n-1) + tribonacci(n-2) + tribonacci(n-3);
    memo.set(n, value);
    return value;
}

// main
const length = 40;
for (let i = 0; i <= length; i++){
    console.log(tribonacci(i));
}