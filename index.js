import redux, { compose } from 'redux'
//redux come with five method
//applyMidleware, compose, createStore, combineReducers, bindActionCreater
//compose
// the purpose of compose method is to combine multiple funtion into one 

//let take example with simple js funtion
const double =(num)=>num * 2;
const square =(num)=>num * num;
const half =(num)=>num /2;
// const halfSquareDouble=(num)=>half(square(double(num)))

const halfSquareDouble= compose(half, square, double)

console.log(halfSquareDouble(2))