const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Ian" />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))