const Person = ({name, age, hobbies}) => {

    return (
        <div>
            <p>Learn some information about this person: </p>
            <p>Name: {name.length > 8 ? name.slice(0,8) : name}</p>
            <p>Age: {age}</p>
            <h3>{age >= 18 ? "Please go vote" : "You must be 18"}</h3>
            <h4>
                Hobbies:
                <ul>
                    {hobbies.map(h => <li>{h}</li>)}
                </ul>
            </h4>
        </div>
    )
}