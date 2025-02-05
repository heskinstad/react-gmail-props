function EmailView({email}) {
    return (
        <>
            <div className="email-view">
                <h3>Sender: {email.sender}</h3>
                <h1>{email.title}</h1>
                <br />
                <p>{email.email}</p>
            </div>
        </>
    )
}

export default EmailView;