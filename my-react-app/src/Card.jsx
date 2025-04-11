import profilePic from './assets/s.jpg'

function Card() {
  return (
    <div className="card">
        <img className="profile-img" src={profilePic} alt="Profile"/>
        <h2 className="card-title">Dheenath Sundararajan</h2>
        <p>AI Engineer</p>
    </div>
  );
}

export default Card
