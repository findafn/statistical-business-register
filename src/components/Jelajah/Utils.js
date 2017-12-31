// import React from "react";

// const range = len => {
//   const arr = [];
//   for (let i = 0; i < len; i++) {
//     arr.push(i);
//   }
//   return arr;
// };

// const newData = () => {
//   const statusChance = Math.random();
//   return {
//     entriData: Math.floor(Math.random() * 30),
//     updateTerakhir: Math.floor(Math.random() * 100),
//     namaPerusahaan:
//       statusChance > 0.66
//         ? "relationship"
//         : statusChance > 0.33 ? "complicated" : "single"
//   };
// };

// export function makeData(len = 5553) {
//   return range(len).map(d => {
//     return {
//       ...newData(),
//       children: range(10).map(newData)
//     };
//   });
// }

// export const Logo = () =>
//   <div style={{ margin: '1rem auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
//     For more examples, visit {''}
//   <br />
//     <a href="https://github.com/react-tools/react-table" target="_blank">
//       <img
//         src="https://github.com/react-tools/media/raw/master/logo-react-table.png"
//         style={{ width: `150px`, margin: ".5em auto .3em" }}
//       />
//     </a>
//   </div>;

// export const Tips = () =>
//   <div style={{ textAlign: "center" }}>
//     <em>Tip: Hold shift when sorting to multi-sort!</em>
//   </div>;
