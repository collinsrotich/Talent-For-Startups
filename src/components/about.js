import React from "react";
import Aboutus from './images/T4SU workspace.jpg'
function About() {
    return (
        <div className="about">
            <h2>About Us</h2>
            <img src={Aboutus}alt="About us" length="400" height={600} />

            <div className="grid-container">
                <div className="grid-item">
                    <h2>Who are Talent for Startups</h2>
                    <p>Talent for Startups is your one-stop destination for startups to acquire essential digital skills and business management knowledge. Whether you're just launching your venture or seeking to scale it up, we have the resources you need to succeed in today's competitive landscape.</p>
                    <p>Courses for Every Stage:</p>
                    <p>Our platform offers a diverse range of courses tailored to suit startups at various stages of their journey. From foundational courses covering digital marketing, website development, and social media management to advanced modules on financial planning, leadership, and growth hacking, we have something for everyone.</p>
                    <p>Expert Instructors:</p>
                    <p>Learn from industry experts and seasoned entrepreneurs who have successfully navigated the challenges of building and growing startups. Our instructors bring real-world experience and practical insights to the table, ensuring that you receive high-quality education that is directly applicable to your business.</p>
                </div>

                <div className="grid-item">
                    <h2>What we do</h2>
                    <p>At Talent for Startups, we are driven by a vision to democratize access to technology education across Africa.</p>
                    <p>Founded on the belief that talent knows no boundaries, we strive to empower aspiring entrepreneurs and professionals with the skills and knowledge needed to succeed in today's digital age.</p>
                    <p>Our platform is committed to breaking down barriers to education by offering affordable and accessible courses in digital marketing, data analytics, software development, customer support, cloud computing, and business management.</p>
                </div>

                <div className="grid-item">
                    <h3>Our Vision</h3>
                    <p>The Africa's economy</p>
                    <p>With a focus on bridging the educational gap and fostering innovation, Talent for Startups aims to be a catalyst for economic growth and social change within African communities. We understand the transformative power of technology education and its potential to unlock opportunities for individuals, regardless of their background or financial resources. By providing practical, hands-on learning experiences and industry-relevant skills, we seek to empower the next generation of African leaders, innovators, and changemakers to thrive in the digital economy.</p>
                </div>

                <div className="grid-item">
                    <h2>Our impact</h2>
                    <p>Community Support:</p>
                    <p>Join a vibrant community of like-minded entrepreneurs who share your passion for innovation and growth. Connect with fellow members, ask questions, seek advice, and celebrate milestones together. Our community forums and networking events provide valuable opportunities to expand your professional network and forge meaningful partnerships.</p>
                    <p>Stay Updated:</p>
                    <p>Stay ahead of the curve with our regularly updated content covering the latest trends, technologies, and strategies shaping the startup ecosystem. Whether it's insights on emerging digital platforms, regulatory changes affecting startups, or tips for effective remote team management, we keep you informed and empowered to adapt to evolving circumstances.</p>
                    <p>Start Learning Today:</p>
                    <p>Ready to take your startup to the next level? Sign up for a free trial and start exploring our comprehensive library of courses and resources. With StartupSkillHub by your side, you have the knowledge, skills, and support you need to turn your startup dreams into reality.</p>
                </div>
            </div>
        </div>
    );
}

export default About;
