import './Historias.css'
const Historias = ({ imageUrl, altText, action, user }) => {
    return (
        <>
            <div className="Historia" onClick={action}>
                <img src={imageUrl} alt={altText} />
            </div>
            <p>{user}</p>

        </>
    );
};

export default Historias;