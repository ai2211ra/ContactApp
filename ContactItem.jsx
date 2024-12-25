/* eslint-disable react/prop-types */
import ContactItemBody from "./ContactItemBody";
import ContactItemImage from "./contactItemImage";

function ContactItem({ imageUrl, name, tag }) {
    return (
        <div className="contact-item">
            <ContactItemImage image={imageUrl}/>
            <ContactItemBody name={name} tag={tag}/>
        </div>
    );
}

export default ContactItem;