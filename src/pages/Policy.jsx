import React from 'react'

function Policy() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Policies</h1>

      {/* Privacy Policy Section */}
      <section style={styles.policySection}>
        <h2 style={styles.policyHeader}>Privacy Policy</h2>
        <p style={styles.text}>
          Your privacy is important to us. This privacy policy explains how we
          collect, use, and protect your personal information.
        </p>

        <div style={styles.subSection}>
          <h3 style={styles.subHeader}>1. Information We Collect</h3>
          <p style={styles.text}>
            We may collect information such as your name, email address, and
            other details when you interact with our services.
          </p>
        </div>

        <div style={styles.subSection}>
          <h3 style={styles.subHeader}>2. How We Use Your Information</h3>
          <p style={styles.text}>
            The information collected is used to provide, improve, and
            personalize our services.
          </p>
        </div>

        <div style={styles.subSection}>
          <h3 style={styles.subHeader}>3. Protecting Your Information</h3>
          <p style={styles.text}>
            We implement various security measures to ensure the safety of your
            personal information.
          </p>
        </div>

        <div style={styles.subSection}>
          <h3 style={styles.subHeader}>4. Contact Us</h3>
          <p style={styles.text}>
            If you have any questions about our privacy policy, please contact
            us at privacy@example.com.
          </p>
        </div>
      </section>

      {/* Payment Refund Policy Section */}
      <section style={styles.policySection}>
        <h2 style={styles.policyHeader}>Payment Refund Policy</h2>
        <p style={styles.text}>
          We strive to ensure customer satisfaction. This refund policy explains
          the circumstances under which payments may be refunded.
        </p>

        <div style={styles.subSection}>
          <h3 style={styles.subHeader}>1. Eligibility for Refund</h3>
          <p style={styles.text}>
            Refunds are only available for payments made within the last 30 days
            and for services that have not been delivered as promised.
          </p>
        </div>

        <div style={styles.subSection}>
          <h3 style={styles.subHeader}>2. Requesting a Refund</h3>
          <p style={styles.text}>
            To request a refund, please contact us at refunds@example.com with
            your order details and the reason for the request.
          </p>
        </div>

        <div style={styles.subSection}>
          <h3 style={styles.subHeader}>3. Refund Processing Time</h3>
          <p style={styles.text}>
            Approved refunds will be processed within 7-10 business days and
            credited to the original payment method.
          </p>
        </div>

        <div style={styles.subSection}>
          <h3 style={styles.subHeader}>4. Non-Refundable Cases</h3>
          <p style={styles.text}>
            Payments for completed services or custom work are non-refundable
            unless otherwise specified.
          </p>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#e6f7ff",
    color: "#003366",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "800px",
    margin: "20px auto",
  },
  header: {
    color: "#00509e",
    fontSize: "2.5rem",
    textAlign: "center",
    marginBottom: "30px",
  },
  policySection: {
    marginBottom: "30px",
  },
  policyHeader: {
    color: "#004080",
    fontSize: "2rem",
    marginBottom: "15px",
    borderBottom: "2px solid #00509e",
    paddingBottom: "5px",
  },
  subHeader: {
    color: "#003366",
    fontSize: "1.25rem",
    margin: "15px 0",
  },
  text: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#003366",
  },
  subSection: {
    marginBottom: "20px",
  },
};

export default Policy