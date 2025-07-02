import Profile from './assets/profile.jpg'

function Card() {
    return(
        <div className="card">
            <img className="card-image" src={Profile} alt="profile-picture" />
            <h2 className="card-title">Farhan</h2>
            <p className="card-text">Learn react </p>
        </div>
    );
}

export default Card