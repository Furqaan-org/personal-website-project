# Contact Form Setup Documentation

## Overview
This contact form captures user input (name, email, message) and sends emails directly to your Gmail account using Resend API.

## Features Implemented

### ✅ Form Structure
- **Name Field**: Text input for user's name
- **Email Field**: Email input with validation
- **Message Field**: Textarea for user's message (10-1000 characters)
- **Submit Button**: "Send Message" button with loading state

### ✅ Validation
- **Client-side validation**:
  - Name: Required, max 100 characters
  - Email: Required, valid email format
  - Message: Required, 10-1000 characters
- **Server-side validation**: Using Zod schema for robust validation
- **Real-time error display**: Shows validation errors below each field

### ✅ Email Sending
- Uses **Resend API** for reliable email delivery
- Professional HTML email template
- Includes user's name, email (as reply-to), and message
- Subject: "New Contact Form Submission"
- Recipient: Your Gmail account

### ✅ User Feedback
- **Success**: Toast notification "Message sent successfully!"
- **Error**: User-friendly error messages for various scenarios
- **Loading state**: Spinner and disabled form during submission
- **Form reset**: Clears all fields after successful submission

### ✅ Security Considerations
- **Rate limiting**: IP-based tracking (basic implementation)
- **Input validation**: Both client and server-side
- **XSS protection**: HTML escaping in email template
- **HTTPS**: Ensure your deployment uses HTTPS
- **Environment variables**: Sensitive data stored securely

### ✅ Accessibility
- Proper label associations
- ARIA attributes for screen readers
- Keyboard navigation support
- Error announcements for assistive technologies
- Focus management

## Setup Instructions

### 1. Get Resend API Key

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day)
3. Navigate to API Keys section
4. Create a new API key
5. Copy the API key

### 2. Configure Environment Variables

Add the following to your `.env` file:

```env
# Resend API Key (required)
RESEND_API_KEY=re_xxxxxxxxxxxxx

# Email recipient (optional - defaults to furqaanahmed6786@gmail.com)
EMAIL_TO=your-email@gmail.com
```

### 3. Verify Domain (Production Only)

For production use, you should verify your domain in Resend:

1. Go to Resend Dashboard → Domains
2. Click "Add Domain"
3. Enter your domain (e.g., `yourdomain.com`)
4. Add the provided DNS records to your domain
5. Wait for verification (usually takes a few minutes)
6. Update the `from` address in `/src/app/api/contact/route.ts`:

```typescript
from: "Contact Form <contact@yourdomain.com>", // Your verified domain
```

### 4. Test the Form

#### Development Testing:
```bash
# Start your development server
npm run dev

# Navigate to http://localhost:3000/contact
# Fill out and submit the form
# Check your email inbox
```

#### API Testing with curl:
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message from the contact form."
  }'
```

### 5. Monitor Email Delivery

- Check Resend Dashboard for email logs
- Verify emails are being delivered to your Gmail
- Check spam folder if emails aren't arriving

## Testing Scenarios

### Valid Inputs
- ✅ Name: "John Doe"
- ✅ Email: "john@example.com"
- ✅ Message: "Hello, I'd like to discuss a project."

### Invalid Inputs
- ❌ Empty name → "Name is required"
- ❌ Invalid email → "Please enter a valid email address"
- ❌ Short message (< 10 chars) → "Message must be at least 10 characters"
- ❌ Long message (> 1000 chars) → "Message is too long"

### Edge Cases
- Network errors → User-friendly error message
- API failures → Proper error handling
- Multiple rapid submissions → Rate limiting (basic)

## Customization

### Change Email Template

Edit `/src/app/api/contact/route.ts` line 35-80 to customize the HTML email template.

### Add CAPTCHA (Optional)

To add Google reCAPTCHA v3:

1. Get reCAPTCHA keys from [google.com/recaptcha](https://www.google.com/recaptcha/admin)
2. Install package:
```bash
npm install react-google-recaptcha-v3
```

3. Add to form component:
```typescript
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const { executeRecaptcha } = useGoogleReCaptcha();
const token = await executeRecaptcha('contact_form');

// Include token in API request
```

### Change Recipient Email

Update the `EMAIL_TO` environment variable in `.env`:
```env
EMAIL_TO=your-new-email@gmail.com
```

### Modify Validation Rules

Edit the Zod schema in `/src/app/api/contact/route.ts`:
```typescript
const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
});
```

## Troubleshooting

### Emails Not Sending

1. **Check API key**: Verify `RESEND_API_KEY` is correct in `.env`
2. **Check logs**: Look at console/terminal for error messages
3. **Verify domain**: In production, ensure domain is verified in Resend
4. **Check spam**: Emails might be in spam folder
5. **API limits**: Free tier has 100 emails/day limit

### Form Validation Not Working

1. **Client validation**: Check browser console for JavaScript errors
2. **Server validation**: Check API response in Network tab
3. **TypeScript errors**: Run `npm run build` to check for type errors

### CORS Errors

If testing from different domain:
1. Add CORS headers to API route
2. Configure Next.js API routes properly

## Production Deployment

### Checklist
- ✅ Verify domain in Resend
- ✅ Update `from` email address
- ✅ Set environment variables in hosting platform
- ✅ Enable HTTPS
- ✅ Test form submission
- ✅ Monitor email delivery
- ✅ Set up error tracking (e.g., Sentry)

### Recommended Enhancements
1. **Add CAPTCHA**: Prevent spam submissions
2. **Rate limiting**: Use Redis/Upstash for better rate limiting
3. **Email queue**: Use background jobs for large volumes
4. **Analytics**: Track form submissions
5. **Auto-responder**: Send confirmation email to user

## Support

For issues or questions:
- Check Resend documentation: [resend.com/docs](https://resend.com/docs)
- Review API logs in Resend Dashboard
- Check browser console for errors
- Verify environment variables are set correctly

## API Endpoints

### POST /api/contact

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message here"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Message sent successfully!",
  "emailId": "email_id_from_resend"
}
```

**Error Response (400):**
```json
{
  "error": "Validation failed",
  "details": [
    {
      "field": "email",
      "message": "Invalid email address"
    }
  ]
}
```

**Error Response (500):**
```json
{
  "error": "Failed to send email. Please try again later."
}
```

## License

This contact form implementation is part of your personal website and can be customized freely.