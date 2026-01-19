import React from 'react'
import '../styles/pages.css'

function Professor() {
  return (
    <div className="page professor-page">
      <div className="professor-header">
        <img 
          src="/images/placeholder-avatar.jpg" 
          alt="Professor" 
          className="professor-avatar"
        />
        <div className="professor-info">
          <h1>Dr. Konjengbam Anand</h1>
          <p className="professor-title">Assistant Professor & Principal Investigator</p>
          <p className="professor-affiliation">Department of Computer Science & Engineering, IIT Dharwad</p>
          <p className="professor-affiliation">Faculty In-Charge Web Services</p>
        </div>
      </div>

      <section className="professor-section">
        <h2>About</h2>
        <p>
          Dr. Konjengbam Anand is an Assistant Professor at the Indian Institute of Technology Dharwad, 
          leading cutting-edge research in natural language processing and artificial intelligence. He 
          completed his PhD in Computer Science & Engineering at IIT Hyderabad in 2019, with a dissertation 
          titled "Exploration of Product Reviews" [web:20][web:23].
        </p>
        <p>
          Prior to joining IIT Dharwad, Dr. Anand held positions as an Assistant Professor at Manipur 
          Technical University and IIIT Kottayam. He also worked as a researcher at Nagayoshi Laboratory, 
          Shizuoka University, Japan, and as an assistant project engineer at IIT Guwahati working on 
          Text-to-Speech synthesis systems for Indic Languages [web:23].
        </p>
        <p>
          He has been recognized with several prestigious awards including the Prime Minister's Early Career 
          Research Grant, IIT Hyderabad Research Excellence Award (2017), and Suzuki Foundation Research 
          Grant from Japan (2019) [web:23][web:25].
        </p>
      </section>

      <section className="professor-section">
        <h2>Research Interests</h2>
        <ul className="research-interests">
          <li>Natural Language Understanding: Machine Translation, Sentiment Analysis, Under-resourced Language Development</li>
          <li>Generative AI: Smart Chatbots, AI for Agriculture</li>
          <li>Extended Reality (XR): Digital Twins, Multimodal Virtual Assistant</li>
          <li>Digital Preservation of Indigenous Knowledge</li>
          <li>Social Impact Web/App Technologies</li>
          <li>Information Management and Data Mining</li>
        </ul>
      </section>

      <section className="professor-section">
        <h2>Education</h2>
        <div className="education-list">
          <div className="education-item">
            <p className="education-degree">PhD in Computer Science & Engineering</p>
            <p className="education-institution">Indian Institute of Technology Hyderabad, 2019</p>
            <p className="education-thesis">Thesis: "Exploration of Product Reviews"</p>
          </div>
          <div className="education-item">
            <p className="education-degree">MTech in Computer Science & Engineering</p>
            <p className="education-institution">Indian Institute of Technology Hyderabad, 2019</p>
          </div>
          <div className="education-item">
            <p className="education-degree">BTech in Information Technology</p>
            <p className="education-institution">National Institute of Technology Durgapur, 2012</p>
          </div>
        </div>
      </section>

      <section className="professor-section">
        <h2>Recent Achievements</h2>
        <div className="achievements-list">
          <div className="achievement-item">
            <p className="achievement-title">Prime Minister's Early Career Research Grant</p>
            <p className="achievement-desc">Awarded for excellence in research and academic contributions</p>
          </div>
          <div className="achievement-item">
            <p className="achievement-title">Eyongkart E-commerce Platform Launch</p>
            <p className="achievement-desc">
              Led the development of an e-commerce platform to support Internally Displaced Persons (IDPs) 
              in Manipur, in collaboration with NIT Manipur and Manipur Technical University [web:27]
            </p>
          </div>
          <div className="achievement-item">
            <p className="achievement-title">Organizing Committee SPECOM 2023</p>
            <p className="achievement-desc">
              Served in the organizing committee of the 25th International Conference on Speech & Computer
            </p>
          </div>
        </div>
      </section>

      <section className="professor-section">
        <h2>Professional Activities</h2>
        <ul className="activities-list">
          <li>Technical Program Committee Chair, ICTDsC 2023: International Conference On Data Science and Communication</li>
          <li>Publicity Co-Chair, ICITIIT'23: The 4th International Conference on Innovative Trends in Information Technology</li>
          <li>Reviewer for Pattern Recognition (Elsevier) and International Journal of Data Science and Analytics (Springer)</li>
          <li>Guest Speaker at numerous national and international conferences and workshops [web:23]</li>
        </ul>
      </section>

      <section className="professor-section">
        <h2>Contact</h2>
        <div className="contact-info">
          <p><strong>Email:</strong> konjengbam.anand@iitdh.ac.in</p>
          <p><strong>Office:</strong> Department of Computer Science & Engineering, IIT Dharwad</p>
          <p><strong>Address:</strong> IIT Dharwad, Chikkamalligawad, Dharwad - 580011, Karnataka, India</p>
          <p><strong>Google Scholar:</strong> <a href="https://scholar.google.com/citations?user=OpK0OmcAAAAJ" target="_blank" rel="noopener noreferrer">View Profile</a></p>
          <p><strong>ORCID:</strong> 0000-0003-1287-6715</p>
        </div>
      </section>

      <section className="professor-section">
        <h2>Open Positions</h2>
        <p className="opportunities-text">
          Dr. Anand is seeking self-motivated BTech/MTech/PhD candidates with strong analytical abilities 
          and a passion for research in the fields of Machine Translation, Speaker Diarization, Natural 
          Language Processing, AR/VR/MR, and Language Technology Development for Indic Languages [web:23].
        </p>
        <p className="opportunities-text">
          Interested candidates should reach out via email with their CV and research interests.
        </p>
      </section>
    </div>
  )
}

export default Professor
