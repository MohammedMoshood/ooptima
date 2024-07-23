import React, { useState } from "react";
import "../styles/Course.css";
import { FaRegCircleDot } from "react-icons/fa6";
import Quiz from "./Quiz";

const CourseData = ({ user }) => {
  const [quizOpen, setQuizOpen] = useState(false);
  return (
    <section className="course-data">
      <div className="curriculum-panel">
        <div className="course-progress">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              {user.role === "instructor"
                ? "Average Course Progress"
                : "Course Progress"}
            </div>
            <div>
              {user.role === "instructor" ? "24%" : user.learningprogress}
            </div>
          </div>
          <div>
            <div className="course-progress-bar">
              <div
                style={{
                  width:
                    user.role === "student" ? user.learningprogress : "24%",
                }}
                className="course-progress-bar-after "
              ></div>
            </div>
          </div>
        </div>
        <div className="course-curriculum">
          <div className="text">Curriculum</div>
          <div className="topic">
            <span className="topic-title">
              Introduction to Cybersecurity{" "}
            </span>
            <span onClick={() => setQuizOpen(false)} style={{ color: !quizOpen && "#151515" }} className="sub-topic">
              <FaRegCircleDot /> Cybersecurity in the real world
            </span>
            <span onClick={() => setQuizOpen(false)} className="sub-topic">
              <FaRegCircleDot /> Cloud Security Best Practices
            </span>
            <span onClick={() => setQuizOpen(false)} className="sub-topic">
              <FaRegCircleDot /> IoT Device Security Risks
            </span>
            <span onClick={() => setQuizOpen(false)} className="sub-topic">
              <FaRegCircleDot /> Data Encryption Techniques Overview
            </span>
            <span onClick={() => setQuizOpen(false)} className="sub-topic">
              <FaRegCircleDot /> Network Security Vulnerability Management
            </span>
            <span onClick={() => setQuizOpen(false)} className="sub-topic">
              <FaRegCircleDot /> Cybersecurity Incident Response Plans
            </span>
            <span
              style={{ color: quizOpen && "#151515" }}
              onClick={() => setQuizOpen(true)}
              className="sub-topic"
            >
              <FaRegCircleDot /> Assesment Quiz
            </span>
          </div>
        </div>
      </div>
      {quizOpen ? (
        <Quiz user={user} />
      ) : (
        <div className="course-content">
          <span className="course-title"> Cybersecurity in the real world</span>
          <div
            style={{
              fontFamily: "Arial, sans-serif",
              lineHeight: "1.6",
              margin: "20px 0",
            }}
          >
            <p>
              In today's increasingly digital world, cybersecurity has become a
              critical concern for individuals, businesses, and governments. The
              proliferation of internet-connected devices and the exponential
              growth of data have made safeguarding digital assets more
              challenging and essential than ever. Cybersecurity encompasses the
              practices, technologies, and processes designed to protect
              computers, networks, and data from unauthorized access, attacks,
              damage, or theft.
            </p>
            <h2 style={{ margin: "10px 0" }}>Importance of Cybersecurity</h2>
            <p>
              The importance of cybersecurity cannot be overstated. For
              individuals, it protects sensitive personal information such as
              social security numbers, bank account details, and private
              communications from cybercriminals. For businesses, cybersecurity
              is crucial for protecting intellectual property, customer data,
              and financial information. A single security breach can result in
              significant financial losses, reputational damage, and legal
              liabilities. For governments, cybersecurity is vital to protect
              national security, critical infrastructure, and citizens' personal
              data.
            </p>
            <h2 style={{ margin: "10px 0" }}>
              Real-Life Cybersecurity Threats
            </h2>
            <p>
              In the real world, cybersecurity threats are pervasive and
              constantly evolving. Some common threats include:
            </p>
            <ul style={{ listStyleType: "square", paddingLeft: "20px" }}>
              <li>
                <strong>Malware</strong>: Malicious software, such as viruses,
                worms, ransomware, and spyware, designed to damage or disable
                computers and networks.
              </li>
              <li>
                <strong>Phishing</strong>: Fraudulent attempts to obtain
                sensitive information by disguising as a trustworthy entity in
                electronic communications.
              </li>
              <li>
                <strong>Denial of Service (DoS) Attacks</strong>: Attempts to
                make a machine or network resource unavailable to its intended
                users by overwhelming it with a flood of internet traffic.
              </li>
              <li>
                <strong>Man-in-the-Middle (MitM) Attacks</strong>: Intercepting
                and altering communications between two parties without their
                knowledge.
              </li>
              <li>
                <strong>SQL Injection</strong>: Inserting malicious SQL code
                into a query to manipulate or destroy a database.
              </li>
              <li>
                <strong>Zero-Day Exploits</strong>: Attacks that exploit a
                previously unknown vulnerability in software or hardware.
              </li>
            </ul>
            <h2 style={{ margin: "10px 0" }}>
              Cybersecurity Strategies and Technologies
            </h2>
            <p>
              To combat these threats, a multi-layered approach to cybersecurity
              is necessary. This includes both technical solutions and human
              factors.
            </p>
            <h3 style={{ color: "grey", margin: "10px 0" }}>
              Technical Solutions
            </h3>
            <ul style={{ listStyleType: "square", paddingLeft: "20px" }}>
              <li>
                <strong>Firewalls</strong>: These act as barriers between
                trusted and untrusted networks, monitoring and controlling
                incoming and outgoing network traffic.
              </li>
              <li>
                <strong>Antivirus and Anti-Malware Software</strong>: These
                programs detect and remove malicious software from computers and
                networks.
              </li>
              <li>
                <strong>Encryption</strong>: Protecting data by converting it
                into a code to prevent unauthorized access.
              </li>
              <li>
                <strong>
                  Intrusion Detection Systems (IDS) and Intrusion Prevention
                  Systems (IPS)
                </strong>
                : These monitor network traffic for suspicious activity and can
                take action to prevent potential breaches.
              </li>
              <li>
                <strong>Multi-Factor Authentication (MFA)</strong>: Enhancing
                security by requiring two or more verification methods to access
                resources.
              </li>
            </ul>
            <h3 style={{ color: "grey", margin: "10px 0" }}>Human Factors</h3>
            <ul style={{ listStyleType: "square", paddingLeft: "20px" }}>
              <li>
                <strong>Security Awareness Training</strong>: Educating
                employees and individuals about the importance of cybersecurity
                and how to recognize and respond to threats.
              </li>
              <li>
                <strong>Strong Password Policies</strong>: Encouraging the use
                of complex, unique passwords and regular password changes.
              </li>
              <li>
                <strong>Regular Security Audits</strong>: Conducting periodic
                reviews of security policies, procedures, and technologies to
                identify and address vulnerabilities.
              </li>
            </ul>
            <h2 style={{ margin: "10px 0" }}>Case Studies</h2>
            <h3 style={{ color: "grey", margin: "10px 0" }}>
              WannaCry Ransomware Attack
            </h3>
            <p>
              In 2017, the WannaCry ransomware attack affected hundreds of
              thousands of computers in over 150 countries, targeting systems
              running Microsoft Windows by encrypting data and demanding ransom
              payments in Bitcoin. This attack highlighted the importance of
              timely software updates and robust backup practices.
            </p>
            <h3 style={{ color: "grey", margin: "10px 0" }}>
              Equifax Data Breach
            </h3>
            <p>
              In 2017, Equifax, one of the largest credit reporting agencies,
              suffered a data breach that exposed personal information of
              approximately 147 million people. This breach underscored the need
              for stronger data protection measures and more stringent
              regulatory compliance.
            </p>
            <h2 style={{ margin: "10px 0" }}>Future Trends</h2>
            <p>
              As technology continues to evolve, so too will cybersecurity
              challenges. The rise of artificial intelligence (AI) and machine
              learning (ML) offers new opportunities for enhancing cybersecurity
              but also introduces new risks. AI can be used to improve threat
              detection and response times, while ML can help identify patterns
              and predict potential attacks. However, cybercriminals can also
              use these technologies to develop more sophisticated and
              harder-to-detect attacks.
            </p>
            <p>
              In conclusion, cybersecurity is an ongoing battle that requires
              vigilance, innovation, and collaboration. By staying informed
              about the latest threats and continuously improving security
              measures, individuals, businesses, and governments can protect
              their digital assets and ensure a safer digital world.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default CourseData;
