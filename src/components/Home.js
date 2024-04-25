import React from "react";
import home from './images/shane-rounce-1ZZ96uESRJQ-unsplash.jpg';
import workspace from './images/pavel-neznanov-w95Fb7EEcjE-unsplash.jpg';
import careers from './images/niclas-illg-wzVQp_NRIHg-unsplash.jpg';

function Home() {
    return (
        <div>
            <h1 className="headings">Welcome to Talent for startups</h1>
            <p>Talent For Startups aims to bridge the educational gap by offering affordable courses tailored for aspiring entrepreneurs and professionals across Africa. By providing access to high-quality tech courses at lower costs, we empower individuals with the skills needed to thrive in today's digital economy, fostering innovation and economic growth within communities. Through technology education, we envision a society where talent is not limited by financial constraints, unlocking opportunities for individuals and driving positive societal change.</p>
            <p id="kickstart">Kickstart your journey with us!</p>
            <img src={home} alt="The workspace image" width="800" height="400" />
            <h2 className="headings">Digital marketing Course</h2>
            <p>This course covers essential digital marketing concepts such as SEO, social media marketing, email marketing, PPC advertising, and content marketing. Students will learn how to create effective digital marketing strategies to increase brand awareness, generate leads, and drive conversions. Through practical exercises and case studies, participants will gain hands-on experience in implementing various digital marketing tactics. The course also emphasizes tracking and analyzing key performance indicators (KPIs) to measure campaign success and optimize marketing efforts. Upon completion, students will have the skills and knowledge needed to thrive in the dynamic field of digital marketing.</p>
            <img src={workspace} alt="The workspace image" width="800" height="400" />

            <h3 className="headings">Software development Course</h3>
            <p>This course provides a comprehensive overview of software development methodologies, programming languages, and software engineering principles. Students will learn how to design, develop, test, and deploy software applications using industry-standard tools and frameworks. The curriculum covers topics such as web development, mobile app development, database management, and version control systems. Through hands-on projects and coding exercises, participants will hone their problem-solving skills and build a portfolio of projects to showcase their expertise. Upon completion, students will be prepared for careers as software developers, engineers, or technical consultants in the rapidly evolving tech industry.</p>
            <img src={careers} alt="Software Engineering" width="800" height="400" />

            <h3 className="headings">Data Analytics Course</h3>
            <p>The data analytics course focuses on teaching students how to collect, clean, analyze, and interpret data to derive valuable insights and make informed business decisions. Participants will learn essential data analysis techniques using tools such as Excel, Python, SQL, and data visualization libraries. Through real-world datasets and projects, students will develop proficiency in data manipulation, statistical analysis, and predictive modeling. The course also covers data storytelling and communication skills to effectively convey findings to stakeholders. Graduates will be equipped with the analytical skills sought after in various industries, including marketing, finance, and healthcare.</p>

            <h3 className="headings">Cloud Computing Course</h3>
            <p>This course introduces students to the fundamentals of cloud computing, including cloud architecture, deployment models, and service models. Participants will learn how to leverage cloud computing platforms such as AWS, Azure, and Google Cloud to provision resources, deploy applications, and manage infrastructure efficiently. The curriculum covers topics such as virtualization, containerization, serverless computing, and cloud security best practices. Through hands-on labs and projects, students will gain practical experience in building and managing cloud-based solutions. Upon completion, graduates will be equipped with the skills needed to pursue careers as cloud architects, DevOps engineers, or cloud infrastructure specialists.</p>

            <h3 className="headings">Business Management Course</h3>
            <p>The business management course provides students with a comprehensive understanding of key business concepts, principles, and practices. Participants will learn essential skills in areas such as strategic planning, organizational behavior, leadership, finance, and marketing. The curriculum covers case studies and real-world examples to illustrate management theories and principles in action. Students will develop critical thinking, decision-making, and problem-solving skills necessary to succeed in leadership roles. Upon completion, graduates will be prepared to pursue careers in various sectors, including entrepreneurship, consulting, project management, and corporate leadership.</p>
            <p style={{ fontSize: "10px", color: "grey" }}>This content is AI generated</p>
        </div>
    );
}

export default Home;
