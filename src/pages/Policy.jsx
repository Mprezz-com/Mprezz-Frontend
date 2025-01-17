import React from "react";

const Policy = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Policies</h1>

      {/* Privacy Policy */}
      <section style={styles.section}>
        <h2 style={styles.subHeader}>Privacy Policy</h2>
        {/* <p style={styles.text}><strong>Effective Date:</strong> 17/01/2025</p> */}
        <p style={styles.text}>
          Welcome to Mprezz. Your privacy is important to us. This Privacy Policy explains how we collect, use, and safeguard your information. By using our services, you agree to the terms of this policy.
        </p>
        <ul style={styles.list}>
          <li><strong>1. Data Collection</strong></li>
          <p style={styles.text}>
            • For Students: Personal information and academic details.<br />
            • For Course Providers: Locality information and bank account details.
          </p>
          <li><strong>2. Data Usage</strong></li>
          <p style={styles.text}>
            The collected data is used exclusively for account management purposes, including facilitating seamless interaction between students and course providers.
          </p>
          <li><strong>3. Data Sharing</strong></li>
          <p style={styles.text}>
            • Razorpay Integration: Bank account details of course providers are shared with Razorpay to enable payment transactions.<br />
            • Course Enrollments: Student details are shared with course providers when students enroll in their courses.
          </p>
          <li><strong>4. Data Security</strong></li>
          <p style={styles.text}>
            We store all collected data securely using cloud storage solutions to prevent unauthorized access.
          </p>
          <li><strong>5. User Rights</strong></li>
          <p style={styles.text}>
            Users cannot delete or modify their data once submitted. For any concerns, please contact our support team at Email: mprezz111@gmail.com.
          </p>
          <li><strong>6. Cookies</strong></li>
          <p style={styles.text}>
            We use cookies strictly for authorization purposes, ensuring secure access to your account.
          </p>
        </ul>
      </section>

      {/* Terms and Conditions */}
      <section style={styles.section}>
        <h2 style={styles.subHeader}>Terms and Conditions</h2>
        {/* <p style={styles.text}><strong>Effective Date:</strong> 17/01/2025</p> */}
        <p style={styles.text}>
          Welcome to Mprezz. By accessing or using our platform, you agree to the following terms and conditions. Please read them carefully before proceeding.
        </p>
        <ul style={styles.list}>
          <li><strong>1. Service Scope</strong></li>
          <p style={styles.text}>
            [Website Name] serves as a platform connecting students and course providers. Students can browse and register for courses offered by verified course providers through our website.
          </p>
          <li><strong>2. Eligibility</strong></li>
          <p style={styles.text}>
            There are no specific eligibility restrictions for students or course providers to use our platform.
          </p>
          <li><strong>3. User Obligations</strong></li>
          <p style={styles.text}>
            • All course listings provided by course centers must be authentic and valid.<br />
            • Users are responsible for providing accurate and up-to-date information during registration and usage of the platform.<br />
            • Misuse of the platform or violation of these terms may result in account suspension or termination.
          </p>
          <li><strong>4. Payment Terms</strong></li>
          <p style={styles.text}>
            All payment transactions are handled through integrated third-party services. No additional rules for fees or commissions apply beyond those stipulated by payment gateways.
          </p>
          <li><strong>5. Account Termination</strong></li>
          <p style={styles.text}>
            We reserve the right to suspend or terminate user accounts at our discretion based on circumstances, including but not limited to fraudulent activities, misuse of the platform, or violation of these terms.
          </p>
          <li><strong>6. Dispute Resolution</strong></li>
          <p style={styles.text}>
            All disputes related to the use of our platform will be resolved at our sole discretion based on the circumstances.
          </p>
          <li><strong>7. Liability Disclaimer</strong></li>
          <p style={styles.text}>
            [Website Name] does not guarantee the accuracy, validity, or quality of courses listed by course providers. We act solely as a facilitator and are not responsible for the content or outcome of any course.
          </p>
        </ul>
      </section>

      {/* Cancellation and Refund Policy */}
      <section style={styles.section}>
        <h2 style={styles.subHeader}>Cancellation and Refund Policy</h2>
        {/* <p style={styles.text}><strong>Effective Date:</strong> 17/01/2025</p> */}
        <p style={styles.text}>
          At Mprezz, we strive to provide a seamless experience for both students and course providers. Please read our cancellation and refund policy carefully before registering for a course.
        </p>
        <ul style={styles.list}>
          <li><strong>1. Cancellation Requests</strong></li>
          <p style={styles.text}>Cancellations are not allowed once a course registration has been completed.</p>
          <li><strong>2. Refund Eligibility</strong></li>
          <p style={styles.text}>
            Refunds are generally not provided. However, in exceptional cases where users contact us with a valid reason, and the course provider agrees to the refund, we may consider processing the request.
          </p>
          <li><strong>3. Refund Processing</strong></li>
          <p style={styles.text}>
            Refunds, if approved, will be processed based on the circumstances of the request. The timeline for processing will be communicated individually.
          </p>
          <li><strong>4. Non-Refundable Scenarios</strong></li>
          <p style={styles.text}>
            Refunds will not be provided under the following conditions:<br />
            • If the course is already in progress.<br />
            • If the course has been completed.
          </p>
          <li><strong>5. Contact for Cancellation and Refund Requests</strong></li>
          <p style={styles.text}>For any queries related to cancellations or refunds, please contact us at mprezz111@gmail.com.</p>
        </ul>
      </section>

      {/* Contact Us */}
      <section style={styles.section}>
        <h2 style={styles.subHeader}>Contact Us</h2>
        {/* <p style={styles.text}><strong>Effective Date:</strong> 17/01/2025</p> */}
        <p style={styles.text}>
          We are here to assist you! If you have any questions or need support, feel free to reach out to us through the following channels:
        </p>
        <p style={styles.text}><strong>Primary Contact Email:</strong></p>
        <p style={styles.text}>Email: mprezz111@gmail.com</p>
        <p style={styles.text}><strong>Operating Hours:</strong></p>
        <p style={styles.text}>Monday to Friday: 9:00 AM to 6:00 PM IST</p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    color: "#003366",
    backgroundColor: "#f7f9fc",
    padding: "20px",
    maxWidth: "900px",
    margin: "0 auto",
  },
  header: {
    fontSize: "2.5rem",
    textAlign: "center",
    marginBottom: "20px",
    color: "#00509e",
  },
  section: {
    marginBottom: "30px",
  },
  subHeader: {
    fontSize: "1.8rem",
    color: "#004080",
    marginBottom: "15px",
  },
  text: {
    fontSize: "1rem",
    lineHeight: "1.6",
    marginBottom: "10px",
  },
  list: {
    listStyleType: "disc",
    marginLeft: "20px",
    marginBottom: "10px",
  },
};

export default Policy;
