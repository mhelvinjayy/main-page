import "./App.css";

const members = [
  {
    name: "Mhelvin Jay Abiog",
    link: "https://mhelvinjayy.github.io/abiog-resumee/",
    img: "/images/mhelvin.jpeg",
  },
  {
    name: "Rosswin John Gallego",
    link: "https://your-username.github.io/your-repo/resume2.html",
    img: "/images/ross.jpg",
  },
  {
    name: "Louie Anthony Descalzo",
    link: "https://mladescalzo.github.io/resume/",
    img: "/images/descalzo.jpg",
  },
];

const invitationFile = "/images/wedding-invitation.png";

function App() {
  const openProfile = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="app">
      <div className="content">
        <h1 className="intro-title">INTRODUCING THE BIG 3</h1>

        <div className="card-container">
          {members.map((member, index) => (
            <div
              key={index}
              className="profile-card"
              onClick={() => openProfile(member.link)}
            >
              <img
                src={
                  member.img ||
                  "https://via.placeholder.com/300x320?text=PHOTO"
                }
                alt={member.name}
                className="profile-image"
              />

              <div className="card-name">
                {member.name.toUpperCase().split(" ").map((word, i) => (
                  <span key={i}>{word}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h2 className="team-name">GIT COMMIT</h2>

        <div className="invite-footer">
          <a
            href={invitationFile}
            target="_blank"
            rel="noreferrer"
            className="invite-button"
          >
            WEDDING RSVP
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;