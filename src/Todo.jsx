// eslint-disable-next-line no-unused-vars
// export default function Todo({topic, isCompleted}) {
//     return (
//         <div>
//             <li>Task: {topic}</li>
//         </div>
//     )
// }

// ------------------------------------------------------------------------

// conditional rendering 1: if else
// export default function Todo({ topic, isCompleted }) {
//   if (isCompleted) {
//     return (
//       <div>
//         <li>Complete: {topic}</li>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <li>Still Working: {topic}</li>
//       </div>
//     );
//   }
// }

// --------------------------------------------------------------------------------

// conditional rendering 2: if
// export default function Todo({ topic, isCompleted }) {
//   if (isCompleted) {
//     return (
//       <div>
//         <li>Complete: {topic}</li>
//       </div>
//     );
//   }
//   return (
//     <div>
//       <li>Still Working: {topic}</li>
//     </div>
//   );
// }

// --------------------------------------------------------------------------------

// conditional rendering 3: ternary operator
// export default function Todo({ topic, isCompleted }) {
//   return (
//     <div>
//       <li>
//         {isCompleted ? "Complete" : "Still Working"}: {topic}
//       </li>
//     </div>
//   );
// }

// --------------------------------------------------------------------------------

// conditional rendering 4: && Logical Operator
export default function Todo({ topic, isCompleted }) {
  return (
    <div>
      <li>
        {topic} {isCompleted && "Yah hoo!"} 
      </li>
    </div>
  );
}
