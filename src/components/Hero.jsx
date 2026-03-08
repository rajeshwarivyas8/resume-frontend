import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero container-full">
      <h1>
   Build your Professional Resume with <span>ResumeVita.</span>
</h1>
<p>
  ✨ Effortless, AI-powered resume builder to create job-ready resumes in minutes.
</p>
<p>
  💼 Professional templates, clean design, and no hassle — Download for free!
</p>



      <div className="hero-buttons">
        <button
          className="hero-btn hero-primary"
          onClick={() => navigate("/signup")}
        >
          Get Started
        </button>

        <button className="hero-btn hero-outline">
          Try Demo
        </button>
      </div>
    </section>
  );
}

export default Hero;


