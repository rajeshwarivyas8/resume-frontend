import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signup");
  };

  const goToResume = () => {
    navigate("/create-resume");
  };

  return (
    <div style={styles.container}>
      <button style={styles.logoutBtn} onClick={handleLogout}>
        Logout
      </button>

      <div style={styles.card}>
        <h1 style={styles.heading}>
  🚀 Build Smarter Resume with ResumeVita. Get Hired Faster
</h1>
       
        <p style={styles.subText}>
  Structured. Polished. Recruiter-ready documents designed to make a lasting impression.
  ⭐ 4.5 Rated by FAANG Professionals
</p>

        <button style={styles.primaryBtn} onClick={goToResume}>
          Create Resume
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    fontFamily: "Inter, sans-serif",
  },

  logoutBtn: {
  position: "absolute",
  top: "20px",
  right: "30px",

  padding: "8px 22px",   // thoda horizontal zyada
  borderRadius: "50px",  // makes it oval/pill

  border: "none",
  backgroundColor: "#22c55e",
  color: "#ffffff",

  cursor: "pointer",
  fontWeight: "500",
  transition: "0.3s",
},

 card: {
  backgroundColor: "#f9fffb",
  padding: "70px",                 // more breathing space
  borderRadius: "18px",
  textAlign: "center",
  boxShadow: "0 15px 40px rgba(0, 0, 0, 0.08)",
  width: "90%",                    // responsive
  maxWidth: "580px",               // bigger than before
  border: "1px solid #e6f4ea",
},


  heading: {
  color: "#111827",          // softer black (SaaS style)
  fontSize: "32px",          // bigger for impact
  fontWeight: "700",         // stronger heading
  marginBottom: "14px",
  lineHeight: "1.3",
},


  subText: {
  color: "#4b5563",          // modern gray
  marginBottom: "35px",
  fontSize: "16px",          // slightly bigger
  lineHeight: "1.6",
},


  primaryBtn: {
    padding: "12px 24px",
    backgroundColor: "#22c55e",   // light green
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    color: "#fff",
    fontSize: "14px",
    transition: "0.3s",
  },
};

export default Dashboard;




