// email.service.js
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

// Configure SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const fromEmail = process.env.SENDGRID_FROM_EMAIL;

// Helper function to send email using SendGrid
const sendEmail = async ({ to, subject, html, text }) => {
  if (!process.env.SENDGRID_API_KEY || !fromEmail) {
    console.error("SendGrid API Key or From Email not configured. Falling back to console logging.");
    // Log the email that would be sent
    console.log('--------- EMAIL WOULD BE SENT ---------');
    console.log(`To: ${to}`);
    console.log(`Subject: ${subject}`);
    console.log(`Text Content: ${text.substring(0, 100)}...`);
    console.log('HTML Content: [HTML content omitted for brevity]');
    console.log('--------- END OF EMAIL ---------');
    
    // Return a successful response for development
    return Promise.resolve({ 
      success: true,
      message: "Email sending simulated. Check logs for details."
    });
  }

  const msg = {
    to: to,
    from: fromEmail,
    subject: subject,
    text: text,
    html: html,
  };

  try {
    console.log(`Sending email via SendGrid to: ${to}, Subject: ${subject}`);
    await sgMail.send(msg);
    console.log('Email sent successfully via SendGrid');
    return { success: true };
  } catch (error) {
    console.error('Error sending email via SendGrid:', error);
    if (error.response) {
      console.error('SendGrid Error Body:', error.response.body);
    }
    // Log but don't throw error to prevent application failures due to email issues
    console.log('--------- EMAIL SENDING FAILED - DETAILS ---------');
    console.log(`To: ${to}`);
    console.log(`Subject: ${subject}`);
    console.log('--------- END OF FAILED EMAIL DETAILS ---------');
    
    return { 
      success: false,
      message: `Failed to send email: ${error.message}`
    };
  }
};

// Function to send OTP email
const sendOTPEmail = async (user, otpCode, validityMinutes) => {
  const subject = "Votre code de vérification E-Voting";
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; padding: 20px;">
      <h2 style="color: #3b82f6; text-align: center;">Vérification de votre compte E-Voting</h2>
      <p>Bonjour ${user.name},</p>
      <p>Merci de vous être inscrit. Veuillez utiliser le code suivant pour vérifier votre adresse email. Ce code est valide pendant ${validityMinutes} minutes.</p>
      <p style="text-align: center; font-size: 24px; font-weight: bold; margin: 20px 0; letter-spacing: 5px; background-color: #f0f0f0; padding: 10px;">
        ${otpCode}
      </p>
      <p>Si vous n'avez pas demandé cette vérification, vous pouvez ignorer cet email.</p>
      <p>Cordialement,<br>L'équipe E-Voting</p>
    </div>
  `;
  const text = `Bonjour ${user.name},\n\nVotre code de vérification E-Voting est : ${otpCode}\nCe code est valide pendant ${validityMinutes} minutes.\n\nCordialement,\nL'équipe E-Voting`;

  // Important: Always log the OTP code during development for testing
  console.log(`🔑 VERIFICATION CODE for ${user.email}: ${otpCode}`);

  return sendEmail({ to: user.email, subject, html, text });
};

// Function to send vote confirmation email
const sendVoteConfirmationEmail = async (user, electionTitle, candidateName) => {
  const subject = "Confirmation de votre vote - E-Voting";
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; padding: 20px;">
      <h2 style="color: #3b82f6; text-align: center;">Confirmation de Vote</h2>
      <p>Bonjour ${user.name},</p>
      <p>Nous confirmons que votre vote pour l'élection "<strong>${electionTitle}</strong>" a été enregistré avec succès.</p>
      <p>Vous avez voté pour : <strong>${candidateName}</strong>.</p>
      <p>Votre vote est en cours d'ajout à la blockchain pour garantir sa sécurité et son immuabilité.</p>
      <p>Merci d'avoir participé.</p>
      <p>Cordialement,<br>L'équipe E-Voting</p>
    </div>
  `;
   const text = `Bonjour ${user.name},\n\nNous confirmons que votre vote pour l'élection "${electionTitle}" a été enregistré avec succès.\nVous avez voté pour : ${candidateName}.\n\nCordialement,\nL'équipe E-Voting`;

  return sendEmail({ to: user.email, subject, html, text });
};

// Export the functions
module.exports = {
  sendEmail,
  sendOTPEmail,
  sendVoteConfirmationEmail,
};
