const App = () => (
    <div>
        <Person name="Ian Dauphinais" age={26} hobbies={['playing soccer', 'skiing', 'cooking']} />
        <Person name="Bob" age={13} hobbies={['juggling', 'film making', 'breathing']}/>
        <Person name="BillyBob" age={76} hobbies={['dancing']}/>
    </div>
)

ReactDOM.render(<App/>, document.getElementById("root"))
