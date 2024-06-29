const items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
  ];
  
  function Props() {
    return (
      <ul> {/* Wrap items in a ul for proper list rendering */}
        {items.map((item) => (  // Use map to iterate and render each item
          <li key={item.id}>   // Use item.id for a unique key
            <p>{item.id} : {item.name}</p>
          </li>
        ))}
      </ul>
    );
  }
  
  export default Props;
  