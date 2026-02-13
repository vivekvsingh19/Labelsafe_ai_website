# App Store Submission Guide - Privacy & Legal

## Quick Checklist

### Pre-Submission
- [ ] Customize company contact information
- [ ] Update jurisdiction in Terms of Service
- [ ] Review and update email addresses
- [ ] Test both pages on mobile devices
- [ ] Verify all links work correctly
- [ ] Have legal team review documents

### Content for App Store Forms

#### Privacy Policy URL
```
https://yourdomain.com/privacy
```

#### Support/Contact Email
```
support@labelsafe.ai
privacy@labelsafe.ai
```

---

## Apple App Store Requirements

### 1. App Privacy Policy
**Required:** Yes
**Format:** Web URL
**Content Must Include:**
- ✅ Types of data collected
- ✅ How data is used
- ✅ Data sharing practices
- ✅ User rights and choices
- ✅ Data retention practices
- ✅ Contact information

**Provided in:** `pages/PrivacyPolicy.tsx`

### 2. Terms of Service
**Required:** Optional (but recommended)
**Format:** Web URL
**Content Should Include:**
- ✅ Limitations of liability
- ✅ User conduct restrictions
- ✅ Intellectual property rights
- ✅ Termination policies

**Provided in:** `pages/TermsOfService.tsx`

### 3. Contact Information
**Email Required:** Yes
**Suggested Contact:**
- Privacy inquiries: privacy@labelsafe.ai
- Support: support@labelsafe.ai

### Apple-Specific Considerations
- App must link to privacy policy in settings or about section
- Policy must be in language of the app
- Must be accurate and up-to-date
- Regular review recommended (quarterly)

---

## Google Play Store Requirements

### 1. Privacy Policy
**Required:** Yes
**Must Include:**
- ✅ What personal data is collected
- ✅ How data is collected
- ✅ Why data is collected
- ✅ How data is used
- ✅ How users can access/update data
- ✅ Your contact information
- ✅ Age restrictions (if applicable)

**Provided in:** `pages/PrivacyPolicy.tsx`

### 2. Sensitive Data Policy
**Permissions & Sensitive Data:**
- ✅ Limited use declarations
- ✅ Data security explanation
- ✅ Justification for permissions

**Covered in:** `pages/PrivacyPolicy.tsx` (Section 5)

### 3. Google Play Specific Data
**Declare:**
- [ ] Does app collect sensitive personal information?
- [ ] Does app share data with third parties?
- [ ] Is data encrypted in transit?
- [ ] Is data encrypted at rest?
- [ ] User data deletion capability?

**Answers Found In:**
- Section 2: Information Collection
- Section 4: Data Sharing
- Section 5: Data Security
- Section 6: Data Retention (Deletion)

### 4. Restricted Access Declaration
If using:
- [ ] Camera/Photos - Declare in policy
- [ ] Location - Declare in policy
- [ ] Contacts - Declare in policy
- [ ] Calendar - Declare in policy

**Reference:** `pages/PrivacyPolicy.tsx` Section 2.2

---

## Step-by-Step Submission Guide

### Apple App Store

1. **Log in to App Store Connect**
   - Go to appstoreconnect.apple.com
   - Select your app

2. **Navigate to App Information**
   - Click "Pricing and Availability"
   - Scroll to "Privacy Policy URL"
   - Enter: `https://yourdomain.com/privacy`

3. **Save & Continue**
   - Click "Save"
   - Continue with app submission

### Google Play Store

1. **Log in to Google Play Console**
   - Go to play.google.com/console
   - Select your app

2. **Navigate to Store Listing**
   - Click "Store listing" in left menu
   - Scroll to "Privacy Policy"
   - Enter: `https://yourdomain.com/privacy`

3. **Update Sensitive Data**
   - Go to "Target Audience and Content"
   - Declare any sensitive data collection
   - Reference specific sections of privacy policy

4. **Save & Review**
   - Click "Save"
   - Submit for review

---

## Pre-Launch Checklist

### Technical
- [ ] Privacy policy page loads correctly
- [ ] All links work (internal and external)
- [ ] Responsive on mobile devices
- [ ] Responsive on tablets
- [ ] Page speed is acceptable
- [ ] No broken images or styling

### Legal
- [ ] Company information accurate
- [ ] Contact email correct
- [ ] Last updated date is current
- [ ] All sections are complete
- [ ] Legal team has reviewed
- [ ] Compliant with local laws

### Accessibility
- [ ] Text is readable (appropriate contrast)
- [ ] Headings are semantic
- [ ] Links are clearly marked
- [ ] Works with screen readers
- [ ] Mobile navigation is intuitive

---

## Common Issues & Solutions

### Issue: "Privacy policy not accessible"
**Solution:** Ensure URL is public and not behind authentication

### Issue: "Policy doesn't cover all required items"
**Solution:** Review checklist in this document and add missing sections

### Issue: "Contact information not visible"
**Solution:** Make sure privacy@labelsafe.ai is clearly displayed

### Issue: "Policy outdated"
**Solution:** Update last modified date and content regularly

---

## Regulatory Compliance

### GDPR (EU/EEA Users)
Covered sections:
- Section 7.6: Regional Rights
- Section 2: Information Collection (consent basis)
- Section 6: Data Retention
- Section 7: Your Rights and Choices

### CCPA (California Users)
Covered sections:
- Section 7.6: Regional Rights
- Section 2: Information Collection
- Section 4: Data Sharing
- Section 7: Your Rights and Choices

### COPPA (US - Users Under 13)
Covered sections:
- Section 8: Children's Privacy
- Section 2.1: Information You Provide

### PIPEDA (Canada)
Covered sections:
- Section 3: How We Use Information
- Section 5: Data Security
- Section 7: Your Rights and Choices

---

## Maintenance Schedule

**Monthly:**
- Review for broken links
- Monitor support emails for questions

**Quarterly:**
- Review for accuracy
- Check for new features requiring disclosure

**Annually:**
- Full legal review
- Update last modified date
- Refresh app store listings

---

## Contact for Updates

When your business practices change:
1. Update the relevant policy section
2. Change the "Last Updated" date
3. Consider notifying existing users
4. Update in app stores

---

## Resources

- [Apple App Privacy Overview](https://developer.apple.com/app-privacy-overview/)
- [Google Play Privacy Policy Requirements](https://support.google.com/googleplay/answer/9453666)
- [GDPR Compliance Guide](https://gdpr-info.eu/)
- [CCPA Compliance Guide](https://oag.ca.gov/privacy/ccpa)

---

**Last Updated:** February 13, 2026
**Status:** Ready for App Store Submission ✅
