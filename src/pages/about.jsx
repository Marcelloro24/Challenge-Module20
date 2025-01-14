// About page component - Displays developer's information and background
function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="about-content">
        {/* Profile Image */}
        <img 
          src="/public/img/profile.jpg" 
          alt="Marcello Romero" 
          className="profile-image" 
        />
        
        {/* Bio Section */}
        <div className="bio">
          <p>
            Hello! I'm Marcello Romero, a full-stack web developer passionate about 
            creating responsive and user-friendly web applications.
          </p>
          <p>
            With a background in [Your Background], I bring a unique perspective 
            to software development, combining technical expertise with 
            creative problem-solving.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;