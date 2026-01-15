import React from 'react';

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    lineHeight: 1.6,
    color: '#333',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  heading: {
    color: '#2c3e50',
    marginBottom: '1rem',
  },
  section: {
    marginBottom: '1.5rem',
  },
  list: {
    paddingLeft: '20px',
    marginBottom: '1rem',
  },
  listItem: {
    marginBottom: '0.5rem',
  },
  link: {
    color: '#2980b9',
    textDecoration: 'none',
  },
  emphasized: {
    fontWeight: 'bold',
  },
};

const PrivacyPolicy = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Privacy Policy for Stonewall Data Solutions</h1>
      <p style={{ marginBottom: '1rem' }}><strong>Effective Date:</strong> January 2026</p>

      <div style={styles.section}>
        <h2 style={styles.heading}>Introduction</h2>
        <p>
          Welcome to Stonewall Data Solutions ("we", "us", or "our"). We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="[www.swdatasolutions.com]" target="_blank" rel="noopener noreferrer" style={styles.link}>[insert website URL]</a>.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>1. Information We Collect</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><span style={styles.emphasized}>Personal Information:</span> Name, email address, phone number, and other contact details you provide when contacting us or submitting inquiries.</li>
          <li style={styles.listItem}><span style={styles.emphasized}>Usage Data:</span> Information about your interactions with our website, including your IP address, browser type, operating system, pages visited, and time spent on our site.</li>
          <li style={styles.listItem}><span style={styles.emphasized}>Cookies and Tracking Technologies:</span> To enhance user experience and analyze traffic, we may use cookies and similar technologies.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>2. How We Use Your Information</h2>
        <p>We use the information we collect for purposes including:</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Providing and maintaining our services</li>
          <li style={styles.listItem}>Responding to your inquiries and providing customer support</li>
          <li style={styles.listItem}>Sending updates, newsletters, or promotional materials (if you opt-in)</li>
          <li style={styles.listItem}>Improving our website and services through analytics</li>
          <li style={styles.listItem}>Ensuring security and preventing fraud</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>3. Sharing Your Information</h2>
        <p>We do not sell or rent your personal information. We may share your data with:</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Service providers that assist with data processing, hosting, or other operational needs</li>
          <li style={styles.listItem}>Legal authorities if required by law or to protect our rights</li>
          <li style={styles.listItem}>Business transfers, such as mergers or acquisitions</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>4. Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction.</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>5. Your Rights and Choices</h2>
        <p>Depending on your location, you may have rights such as:</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Accessing your personal data</li>
          <li style={styles.listItem}>Correcting or updating your information</li>
          <li style={styles.listItem}>Requesting deletion of your data</li>
          <li style={styles.listItem}>Withdrawing consent for marketing communications</li>
        </ul>
        <p>
          To exercise these rights, please contact us at <a href="mailto:mandla@swdatasolutions.com" style={styles.link}>[mandla@swdatasolutions.com]</a>.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>6. Cookies and Tracking Technologies</h2>
        <p>
          Our website uses cookies to improve functionality and analyze traffic. You can set your browser to refuse cookies or alert you when cookies are being sent. However, some features may not function properly without cookies.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>7. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>8. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy periodically. When we do, we will revise the "Effective Date" at the top. We encourage you to review this policy regularly.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>9. Contact Us</h2>
        <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
        <ul style={styles.list}>
          <li>Email: <a href="mailto:mandla@swdatasolutions.com" style={styles.link}>[mandla@swdatasolutions.com]</a></li>
          <li>Phone: [+27 79 408 3701]</li>
          <li>Address: [187 Lillian NgoyI Street, Johannesburg]</li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;