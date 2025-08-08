'use server'

import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function submitContactForm(formData: FormData) {
  try {
    // Validate form data
    const validatedData = contactSchema.parse({
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    })

    // Prepare email content
    const emailContent = `
New Contact Form Submission from Portfolio Website

Name: ${validatedData.name}
Email: ${validatedData.email}
Phone: ${validatedData.phone || 'Not provided'}
Subject: ${validatedData.subject}

Message:
${validatedData.message}

---
Sent from: Salman Chaudhry Portfolio Website
Time: ${new Date().toLocaleString()}
    `

    // Send email using Resend API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'portfolio@salmanchaudhry.com',
        to: ['CHsalman372@gmail.com'],
        subject: `New Contact: ${validatedData.subject}`,
        text: emailContent,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #d97706; border-bottom: 2px solid #d97706; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${validatedData.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
              <p><strong>Phone:</strong> ${validatedData.phone ? `<a href="tel:${validatedData.phone}">${validatedData.phone}</a>` : 'Not provided'}</p>
              <p><strong>Subject:</strong> ${validatedData.subject}</p>
            </div>
            
            <div style="background: white; padding: 20px; border-left: 4px solid #d97706; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Message:</h3>
              <p style="line-height: 1.6; color: #4b5563;">${validatedData.message.replace(/\n/g, '<br>')}</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px;">
                Sent from Salman Chaudhry Portfolio Website<br>
                ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        `,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to send email')
    }

    // Send auto-reply to the user
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'noreply@salmanchaudhry.com',
        to: [validatedData.email],
        subject: 'Thank you for contacting Salman Chaudhry - Umrah Travel Expert',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #d97706; text-align: center;">Thank You for Your Inquiry</h2>
            
            <p>Dear ${validatedData.name},</p>
            
            <p>Thank you for reaching out regarding <strong>"${validatedData.subject}"</strong>. I have received your message and will get back to you within 24 hours.</p>
            
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Your Message:</h3>
              <p style="color: #4b5563; font-style: italic;">"${validatedData.message}"</p>
            </div>
            
            <p>In the meantime, feel free to contact me directly:</p>
            <ul style="color: #4b5563;">
              <li>📞 Phone: <a href="tel:+923048655946">+92 (304) 865 5946</a></li>
              <li>💬 WhatsApp: <a href="https://wa.me/923048655946">+92 (304) 865 5946</a></li>
              <li>📧 Email: <a href="mailto:CHsalman372@gmail.com">CHsalman372@gmail.com</a></li>
            </ul>
            
            <p>Best regards,<br>
            <strong>Salman Chaudhry</strong><br>
            Umrah Travel Expert & Branch Manager</p>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px;">
                This is an automated response. Please do not reply to this email.
              </p>
            </div>
          </div>
        `,
      }),
    })

    return { 
      success: true, 
      message: 'Thank you for your message! I will get back to you within 24 hours.' 
    }

  } catch (error) {
    console.error('Contact form error:', error)
    
    if (error instanceof z.ZodError) {
      return { 
        success: false, 
        message: 'Please check your form data: ' + error.errors.map(e => e.message).join(', ')
      }
    }
    
    return { 
      success: false, 
      message: 'Sorry, there was an error sending your message. Please try contacting me directly at CHsalman372@gmail.com or +92 (304) 865 5946.' 
    }
  }
}
