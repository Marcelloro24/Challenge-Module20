// Resume page component - Displays resume and proficiencies
function Resume() {
  // Comprehensive list of proficiencies from MIA bootcamp
  const frontEndProficiencies = [
    'HTML5',
    'CSS3',
    'JavaScript ES6+',
    'React',
    'Bootstrap',
    'Tailwind CSS',
    'jQuery',
    'Responsive Design',
    'Progressive Web Applications (PWA)',
    'Local Storage / Session Storage',
    'Handlebars.js',
    'Web APIs'
  ];

  const backEndProficiencies = [
    'Node.js',
    'Express.js',
    'MySQL',
    'Sequelize ORM',
    'MongoDB',
    'Mongoose ODM',
    'REST APIs',
    'GraphQL',
    'Apollo Server',
    'JSON',
    'JWT Authentication',
    'bcrypt'
  ];

  const developmentTools = [
    'Git Version Control',
    'GitHub',
    'Heroku',
    'Netlify',
    'VS Code',
    'npm',
    'Webpack',
    'Vite',
    'Insomnia/Postman',
    'Command Line Interface',
    'Jest Testing',
    'Agile Methodology'
  ];

  const handleDownload = () => {
    // Create a link to the PDF file
    const link = document.createElement('a');
    link.href = '/Marcello-Romero-Resume.pdf';
    link.download = 'Marcello-Romero-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="resume">
      <h2>Resume</h2>
      
      {/* Download Resume Section */}
      <div className="download-resume">
        <p>Download my full resume:</p>
        <button 
          onClick={handleDownload}
          className="download-button"
        >
          Download Resume
        </button>
      </div>

      {/* Proficiencies Section */}
      <div className="proficiencies">
        <div className="frontend">
          <h3>Front-end Proficiencies</h3>
          <ul>
            {frontEndProficiencies.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="backend">
          <h3>Back-end Proficiencies</h3>
          <ul>
            {backEndProficiencies.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="tools">
          <h3>Development Tools & Technologies</h3>
          <ul>
            {developmentTools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;