export default function MouseClicker() {
  function handleButtonClick(event) {
    console.log(event.target.name);
  }

  function handleImageClick(event) {
    console.log(event.currentTarget.src);
  }

  return (
    <button name="one" onClick={handleButtonClick}>
      <img
        width={24}
        height={24}
        src="https://picsum.photos/200"
        onClick={handleImageClick}
      />
      Click!
    </button>
  );
}
