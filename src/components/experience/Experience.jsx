import React from 'react';
import "./Experience.css";

const Experience = () => {

  const experiences = [
    {
      entreprise: "Volkeno",
      siteWeb: "https://volkeno.com/",
      duree: { debut: "01 Sept 2023", fin: "05 Dec 2023" },
      posteOccupe: "Développeur Web Front-end",
      description: "Création et l'amélioration de l'interface utilisateur des applications web."
    },
  ];

  return (
    <div id='experience' className='container py-5'>
      <h4 className='text-danger'>Experience</h4>
      <div className="row pt-3">
          {experiences.map((experience, index) => (
            <div key={index} className="col-lg-6 col-md-12 col-sm-12 experience-item">
              <h5>
                <a className='text-light' href={experience.siteWeb} target="_blank" rel="noopener noreferrer">
                  {experience.entreprise}
                </a>
              </h5>
              <p>{experience.duree.debut} - {experience.duree.fin}</p>
              <p>{experience.posteOccupe}</p>
              <p>{experience.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Experience;
