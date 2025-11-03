// import React from 'react'
// import { useState, useEffect, useContext } from 'react';
// import { ExpenseContext } from '../context/ExpenseContext.jsx';


// const useLocalStorage = () => {
//   const { state } = useContext(ExpenseContext);
//   const setItem = (key, value) => {
//     localStorage.setItem(key, JSON.stringify(value));
//   };

//   const getItem = (key) => {
//     const value = localStorage.getItem(key);
//     return value ? JSON.parse(value) : null;
//   };

//   const removeItem = (key) => {
//     localStorage.removeItem(key);
//   };

//   return {
//     setItem,
//     getItem,
//     removeItem
//   };
// };

// export default useLocalStorage
