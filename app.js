'use strict';

// メモ化用map
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);

function fib(n){
    // メモにあるとき
    if (memo.has(n)) {
        return memo.get(n);
    }
    // メモにないとき
    const value = fib(n-1) + fib(n-2);
    memo.set(n, value);
    return value;
}

// main
const length = 40;
for (let i = 0; i <= length; i++){
    console.log(fib(i));
}