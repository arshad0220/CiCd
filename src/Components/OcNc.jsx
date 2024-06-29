function OcNc() {
    const user = {
      name: "Arshad",
      address: { // Corrected spelling: 'address'
        city: "Bangalore",
      },
    };
  
    let defaultValue = "Arshad"; // Using const for clarity
    let value = "I am here";
  
    return (
      <div>
        <p>{value ?? defaultValue}</p>
        <p>City: {user.address.city}</p>
      </div>
    );
  }
  
  export default OcNc;
  