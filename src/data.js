// export const familyTree = {
//   //Grandfather
//   name: "John",
//   id:0,
//   age: 90,
//   children: [
//     {
//       name: "Mary",
//       id:1,
//       age: 61,
//     },
//     {
//       name: "Arthur",
//       id:'02',
//       age: 60,
//       children: [
//         {
//           name: "Lily",
//           id:'021',
//           age: 35,
//           children: [
//             {
//               name: "Hank",
//               id:'0211',
//               age: 62,
//             },
//             {
//               name: "Henry",
//               id:'0212',
//               age: 57,
//             },
//           ],
//         },
//         {
//           name: "Billy",
//           id:'03',
//           age: 37,
//         },
//       ],
//     },
//     {
//       name: "Dolores",
//       age: 55,
//     },
//   ],
// };

export const familyTree = {
  name: "root",
  children: [
    {
      name: "child",
      children: [
        { name: "child",   children: [
          { name: "child", data: "c1-c1 Hello" },
          { name: "child", data: "c1-c2 JS" },
        ],},
        { name: "child", data: "c1-c2 JS" },
      ],
    },
    { name: "child", data: "c2 World" },
  ],
};
