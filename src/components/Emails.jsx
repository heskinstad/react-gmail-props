import Email from './Email'

function Emails({filteredEmails, toggleRead, toggleStar, setCurrentEmail}) {
    return (
        <>
            <ul>
            {filteredEmails.map((email, index) => (
                <Email key={index} email={email} toggleRead={toggleRead} toggleStar={toggleStar} setCurrentEmail={setCurrentEmail} />
            ))}
            </ul>
        </>
    )
}

export default Emails;