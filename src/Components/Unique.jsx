const myArray = ["apple", "banana", "apple", "orange", "cherry", "banana"];

function Unique() {
  const uniqueValues = myArray.filter((item, index, arr) => {
    // Check if the current item hasn't appeared before in the array
    return arr.indexOf(item) === index;
  });

  return (
    <ul>
      {uniqueValues.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
export default Unique;