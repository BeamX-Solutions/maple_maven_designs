const { Resend } = require('resend');

exports.handler = async (event) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = JSON.parse(event.body);
    const { name, email, phone, service, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'admin@maplemavendesigns.com', // Replace with your verified domain email for production
      to: ['hello@maplemavendesigns.com', 'emeka.dioha@maplemavendesigns.com'], // Replace with your recipient emails
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    if (error) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Failed to send email' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server error' }),
    };
  }
};