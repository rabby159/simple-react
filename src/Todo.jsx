// eslint-disable-next-line no-unused-vars
// export default function Todo({topic, isCompleted}) {
//     return (
//         <div>
//             <li>Task: {topic}</li>
//         </div>
//     )
// }

// ------------------------------------------------------------------------

// conditional rendering 1
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

// conditional rendering 2
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

// conditional rendering 3
export default function Todo({ topic, isCompleted }) {
  return (
    <div>
      <li>
        {isCompleted ? "Complete" : "Still Working"}: {topic}
      </li>
    </div>
  );
}
