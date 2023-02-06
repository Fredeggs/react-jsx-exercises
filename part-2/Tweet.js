const Tweet = ({username, name, date, message}) => {
    return (
        <div>
            <h1>{message}</h1>
            <h4>Tweeted by {username} ({name})</h4>
            <h4>on {date}</h4>
        </div>
    )
}