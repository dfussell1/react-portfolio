export default function ContactMe() {
    return (
        <div>
            <h1 className="contact-me-header">Contact Me!</h1>

            <div>
                <form className="contact-form">
                    <div className="row">
                        <label htmlFor="name">First and Last Name:</label>
                        <input type="text" name="name" id="name" placeholder="Enter your name" />
                        <label htmlFor="email">Email Address:</label>
                        <input type="text" name="email" id="email" placeholder="Enter your email" />
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" id="message" cols="30" rows="10"></textarea>
                        <button>Send Email</button>
                    </div>
                </form>
            </div>
        </div>
    );
}