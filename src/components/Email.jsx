function Email({email, toggleRead, toggleStar, setCurrentEmail}) {
    const stopPropagation = (e) => e.stopPropagation();
    return (
        <>
            <li
                className={`email ${email.read ? 'read' : 'unread'}`}
                onClick={() => setCurrentEmail(email)}
                >
                <div className="select">
                    <input
                    className="select-checkbox"
                    type="checkbox"
                    checked={email.read}
                    onChange={() => toggleRead(email)}
                    onClick={stopPropagation}
                    />
                </div>
                <div className="star">
                    <input
                    className="star-checkbox"
                    type="checkbox"
                    checked={email.starred}
                    onChange={() => toggleStar(email)}
                    onClick={stopPropagation}
                    />
                </div>
                <div className="sender">{email.sender}</div>
                <div className="title">{email.title}</div>
            </li>
        </>
    )
}

export default Email;