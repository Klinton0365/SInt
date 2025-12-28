<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            margin: 40px auto;
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%);
            padding: 40px 30px;
            text-align: center;
            color: white;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 600;
        }
        .content {
            padding: 40px 30px;
        }
        .greeting {
            font-size: 18px;
            color: #1f2937;
            margin-bottom: 20px;
        }
        .message-box {
            background: #fef3c7;
            border-left: 4px solid #f59e0b;
            padding: 20px;
            margin: 25px 0;
            border-radius: 5px;
        }
        .message-box p {
            margin: 0;
            color: #92400e;
            font-style: italic;
        }
        .info-section {
            margin: 30px 0;
            padding: 20px;
            background: #f9fafb;
            border-radius: 8px;
        }
        .info-section h3 {
            color: #d97706;
            margin-top: 0;
            font-size: 16px;
        }
        .info-item {
            display: flex;
            margin: 10px 0;
        }
        .info-label {
            font-weight: 600;
            color: #6b7280;
            min-width: 140px;
        }
        .footer {
            background: #f9fafb;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e5e7eb;
        }
        .footer p {
            margin: 5px 0;
            color: #6b7280;
            font-size: 14px;
        }
        .social-links {
            margin-top: 20px;
        }
        .social-links a {
            display: inline-block;
            margin: 0 10px;
            color: #d97706;
            text-decoration: none;
        }
        .button {
            display: inline-block;
            padding: 12px 30px;
            background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%);
            color: white;
            text-decoration: none;
            border-radius: 25px;
            margin: 20px 0;
            font-weight: 600;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>✨ Thank You for Reaching Out!</h1>
        </div>
        
        <div class="content">
            <p class="greeting">Dear {{ $contact->name }},</p>
            
            <p>Thank you for contacting us! We're excited to learn about your interior design project and help bring your vision to life.</p>
            
            <div class="message-box">
                <p><strong>Your Message:</strong></p>
                <p>"{{ $contact->message }}"</p>
            </div>
            
            <div class="info-section">
                <h3>📋 Submission Details</h3>
                <div class="info-item">
                    <span class="info-label">Reference ID:</span>
                    <span>#{{ str_pad($contact->id, 6, '0', STR_PAD_LEFT) }}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Submitted On:</span>
                    <span>{{ $contact->formatted_date }}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Email:</span>
                    <span>{{ $contact->email }}</span>
                </div>
                @if($contact->phone)
                <div class="info-item">
                    <span class="info-label">Phone:</span>
                    <span>{{ $contact->phone }}</span>
                </div>
                @endif
            </div>
            
            <p><strong>What happens next?</strong></p>
            <ul style="color: #4b5563; line-height: 1.8;">
                <li>Our design team will review your project details</li>
                <li>We'll reach out within 24 hours to discuss your vision</li>
                <li>We'll schedule a consultation to understand your needs better</li>
                <li>You'll receive a personalized design proposal</li>
            </ul>
            
            <center>
                <a href="{{ config('app.url') }}" class="button">Visit Our Portfolio</a>
            </center>
            
            <p style="margin-top: 30px; color: #6b7280; font-size: 14px;">
                If you have any urgent questions, feel free to reply to this email or call us at <strong>+1 (555) 123-4567</strong>.
            </p>
        </div>
        
        <div class="footer">
            <p><strong>Your Interior Design Partner</strong></p>
            <p>123 Design Street, Creative City, CC 12345</p>
            <p>Email: contact@yourcompany.com | Phone: +1 (555) 123-4567</p>
            
            <div class="social-links">
                <a href="#">Facebook</a> | 
                <a href="#">Instagram</a> | 
                <a href="#">Pinterest</a>
            </div>
            
            <p style="margin-top: 20px; font-size: 12px;">
                © {{ date('Y') }} Your Company. All rights reserved.
            </p>
        </div>
    </div>
</body>
</html>