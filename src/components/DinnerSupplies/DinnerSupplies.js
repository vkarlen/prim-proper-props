function DinnerSupplies({ guestList }) {
  return (
    <div>
      <h2>Dinner Supplies</h2>
      <div>Spoons: {guestList.length * 2}</div>
      <div>Forks: {guestList.length * 2}</div>
      <div>Knives: {guestList.length * 2}</div>
    </div>
  );
}

export default DinnerSupplies;
