function Food() {

    const food1 = "Orange";
    const food2 = "Banana";

    return(
        <ul>
            <li>apel</li>
            <li>{food1.toLocaleLowerCase()}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food