// Create a simple greeting website using react js.
// Use textboxes for the same. Website will greet you according to time.

const Greeting = () => {

    const date = new Date(2023, 4, 13, 10);
    const hours = date.getHours();

    const heading = {
        color: "red",
    }

    let greeting = "";

    if(hours >= 5 && hours < 12) {
        greeting = "Good Morning";
        heading.color = "red";
    } else if(hours >= 12 && hours < 15) {
        greeting = "Good Afternoon";
        heading.color = "yellow";
    } else if(hours >= 15 && hours < 24) {
        greeting = "Good Night";
        heading.color = "black";
    }

  return (
    <div>
        <h1>Simple Greeting</h1>
        <input style={heading} type="text" value={greeting} name="" id="" />
    </div>
  )
}

export default Greeting