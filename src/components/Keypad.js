// Code Keypad Component Here
function Keypad(){
function keypadChange(){
    console.log("Entering password...");
}

    return(
        <div>
            <input type="password"
            // name="numb" 
            onChange={keypadChange}
            />;
        </div>
    )
}
export default Keypad;
