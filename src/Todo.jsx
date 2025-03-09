// eslint-disable-next-line no-unused-vars
// export default function Todo({topic, isCompleted}) {
//     return (
//         <div>
//             <li>Task: {topic}</li>
//         </div>
//     )
// }


// conditional rendering
export default function Todo({ topic, isCompleted }) {
  if (isCompleted) {
    return (
      <div>
        <li>Complete: {topic}</li>
      </div>
    );
  } else {
    return (
      <div>
        <li>Still Working: {topic}</li>
      </div>
    );
  }
}
