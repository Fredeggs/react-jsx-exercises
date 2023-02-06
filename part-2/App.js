const App = () => (
    <div>
        <Tweet username="Fredeggs" name="Ian" message="my first tweet!" date="02-06-2023" />
        <Tweet username="POTUS" name="Joe Biden" message="We've shot down the balloon" date="02-04-2023" />
        <Tweet username="Ye" name="Kanye West" message="What am I doing here" date="01-01-2023" />
    </div>
)

ReactDOM.render(<App/>, document.getElementById("root"))