# Privacy Policy & Terms of Service - App Store Ready

## Overview

This document outlines the complete privacy policy and terms of service for LabelSafe AI, designed specifically for compliance with app store requirements (Apple App Store, Google Play Store, etc.).

## Files Created

### 1. **Privacy Policy** (`pages/PrivacyPolicy.tsx`)
A comprehensive privacy policy covering:
- Information collection practices
- Data usage and processing
- Data sharing and disclosure
- Security measures
- User rights (GDPR, CCPA, etc.)
- Children's privacy protection
- Contact information

**Route:** `/privacy` or `/privacy-policy`

### 2. **Terms of Service** (`pages/TermsOfService.tsx`)
Complete terms covering:
- Use license and restrictions
- Disclaimer of warranties
- Limitation of liability
- User-generated content
- Prohibited activities
- Account termination policies
- Governing law and dispute resolution
- App store specific terms

**Route:** `/terms` or `/terms-of-service`

### 3. **HomePage** (`pages/HomePage.tsx`)
The refactored home page component, separated from App.tsx routing.

## Routing Setup

The app now uses React Router v7 with the following routes:

```
/              → HomePage
/privacy       → Privacy Policy
/privacy-policy → Privacy Policy (alias)
/terms         → Terms of Service
/terms-of-service → Terms of Service (alias)
```

## Installation & Setup

### 1. Install React Router
```bash
npm install react-router-dom@^7.0.0
```

Or if using yarn:
```bash
yarn add react-router-dom@^7.0.0
```

### 2. Update Footer Links
The Footer component has been updated to use React Router Link components instead of button elements.

## Key Features

### Privacy Policy
✅ GDPR Compliant
✅ CCPA Compliant
✅ User rights clearly outlined
✅ Data security explanation
✅ Third-party sharing disclosure
✅ Children's privacy protection
✅ Contact information for privacy concerns

### Terms of Service
✅ Clear use restrictions
✅ Content ownership and licensing
✅ Limitation of liability
✅ Prohibited activities list
✅ Account termination policies
✅ App store specific notices
✅ Dispute resolution clause

## App Store Submission

### For Apple App Store

1. **Privacy Policy URL:** `https://yourdomain.com/privacy`
2. **Required Sections:**
   - Information Collection ✓
   - Data Usage ✓
   - Security Measures ✓
   - User Rights ✓
   - Contact Information ✓

### For Google Play Store

1. **Privacy Policy URL:** `https://yourdomain.com/privacy`
2. **Required Information:**
   - What data is collected ✓
   - How it's used ✓
   - Security practices ✓
   - User rights (GDPR, CCPA) ✓
   - Contact for privacy concerns ✓

### For Other App Stores

The documents are designed to be compliant with most app store policies worldwide.

## Customization Required

Before deploying to app stores, update the following placeholders:

### Privacy Policy (`pages/PrivacyPolicy.tsx`)
- Email addresses: `privacy@labelsafe.ai`, `support@labelsafe.ai`
- Company name: "LabelSafe AI"
- Last updated date: Keep current

### Terms of Service (`pages/TermsOfService.tsx`)
- Jurisdiction: `[Your Jurisdiction]`
- Arbitration Organization: `[Arbitration Organization]`
- Email addresses: `legal@labelsafe.ai`, `support@labelsafe.ai`
- Company name: "LabelSafe AI"

## Mobile Responsiveness

Both pages are fully responsive and optimized for:
- ✅ Mobile devices (iOS/Android)
- ✅ Tablets
- ✅ Desktop browsers

## Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- Table of contents with anchor links
- Color contrast meets WCAG standards
- Readable font sizes

## Design Highlights

- Clean, professional layout with gradient background
- Easy-to-read typography
- Color-coded sections for visual organization
- Sticky navigation for easy access
- Highlighted important sections with colored boxes
- Table of contents for quick navigation

## Testing

To test the pages locally:

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to:
   - Privacy Policy: `http://localhost:5173/privacy`
   - Terms of Service: `http://localhost:5173/terms`

## Legal Disclaimer

**⚠️ Important:** These templates are provided as starting points and should be reviewed by your legal team before submission to app stores. Laws vary by jurisdiction, and you may need to customize these documents based on:

- Your specific business practices
- Applicable laws in your jurisdiction
- Data you collect and process
- Third-party services you use
- Your target markets

## Future Updates

These documents should be reviewed and updated:
- Whenever your privacy practices change
- When you introduce new features
- When applicable laws change
- Before major app releases
- Annually as best practice

## Support

For questions about the implementation:
- Check the component files for context
- Review the table of contents in each document
- Contact support at: support@labelsafe.ai

---

Last Updated: February 13, 2026
