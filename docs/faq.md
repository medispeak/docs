# Frequently Asked Questions

## General Questions

### What is Medispeak?
Medispeak is an open-source voice-to-EMR documentation tool that enables healthcare professionals to use voice commands to fill in Electronic Medical Records (EMR) efficiently and accurately.

### How does Medispeak work?
Medispeak uses advanced AI technology to convert spoken medical notes into structured data that can be automatically inserted into appropriate EMR fields. It combines speech recognition, medical terminology processing, and context understanding to provide accurate documentation.

### Which EMR systems are compatible with Medispeak?

You can configure Medispeak to work with any web-based EMR by following our [setup guide](/docs/installation).

We have already configured Medispeak to work with the following EMRs:
  - Open Healthcare Network's CARE
  - Bahmni Open Source EMR

- Feel free to reach out to us via email at support@medispeak.in to get access to the EMR configurations.

## Installation & Setup

### How do I install Medispeak?
Medispeak can be installed either as a Chrome extension (developer mode) or integrated into your web application. See our [Installation Guide](/docs/installation) for detailed instructions.

### What are the system requirements?
- Chrome browser (latest version) for extension
- Stable internet connection
- Microphone access
- Web-based EMR system

### Can I customize the field mappings?
Yes, you can customize field mappings:
- For supported EMRs (CARE, Bahmni): Automatic mapping is provided
- For other EMRs: Use the Medispeak Admin interface to configure custom mappings

## Usage

### How do I start using voice commands?
1. Click the Medispeak icon or launch the widget
2. Allow microphone access
3. Select your target EMR field
4. Start speaking your medical notes

### Can I edit the transcribed text?
Yes, you can edit any transcribed text manually. Medispeak provides a review interface where you can make corrections before submitting to the EMR.

### What languages are supported?
Since Medispeak is built on top of OpenAI's Whisper, it supports all the  languages that Whisper supports.

Whisper currently support the following languages:

Afrikaans, Arabic, Armenian, Azerbaijani, Belarusian, Bosnian, Bulgarian, Catalan, Chinese, Croatian, Czech, Danish, Dutch, English, Estonian, Finnish, French, Galician, German, Greek, Hebrew, Hindi, Hungarian, Icelandic, Indonesian, Italian, Japanese, Kannada, Kazakh, Korean, Latvian, Lithuanian, Macedonian, Malay, Marathi, Maori, Nepali, Norwegian, Persian, Polish, Portuguese, Romanian, Russian, Serbian, Slovak, Slovenian, Spanish, Swahili, Swedish, Tagalog, Tamil, Thai, Turkish, Ukrainian, Urdu, Vietnamese, and Welsh.

While we have tested Medispeak on other languages such as Malayalam, Kannada, Telugu, Tamil, etc, we do not officially support them yet.

### How accurate is the voice recognition?
Medispeak achieves over 95% accuracy for medical terminology in optimal conditions. Accuracy can be improved by:
- Using a good quality microphone
- Speaking clearly
- Minimizing background noise
- Regular system training

## EMR Integration

### Can I integrate with other EMR systems?
Yes, any web-based EMR can be integrated using the Medispeak Admin interface:
- Configure connection details
- Set up custom field mappings
- Define data validation rules
- Test and verify integration

## Security & Privacy

### How is my data protected?
- End-to-end encryption
- Secure data transmission
- Regular security audits

### Where is the data processed?
Voice processing and data structuring happen on secure servers. For supported EMRs, data is directly transmitted to your EMR system through secure channels.

## Support & Troubleshooting

### How do I get help?
- Check our [documentation](/docs/intro)
- Visit our [GitHub Issues](https://github.com/medispeak/medispeak-app/issues)
- Join our [Community Discussions](https://github.com/medispeak/medispeak-app/discussions)
- Contact support team

### How do I report bugs?
1. Check existing issues
2. Gather relevant information
3. Create detailed bug report
4. Submit via GitHub Issues
5. Follow up as needed

### How do I request features?
- Submit feature requests via GitHub
- Join community discussions
- Participate in roadmap planning
- Consider contributing

## Contributing

### How can I contribute?
- Review [Contributing Guidelines](/docs/contribute)
- Fork the repository
- Submit pull requests
- Report issues
- Join discussions

### What skills are needed to contribute?
- Frontend: React, TypeScript
- Backend: Ruby on Rails
- Documentation
- Testing

### Are there any rewards for contributing?
- Community recognition
- Feature influence
- Professional development
- Open-source experience

## Updates & Maintenance

### How often is Medispeak updated?
We release updates regularly:
- Bug fixes: As needed
- Minor updates: Monthly
- Major releases: Quarterly

### How do I update Medispeak?
- Chrome extension: Automatic updates
- Web integration: Follow deployment guide
- Self-hosted: Manual updates required

### Where can I find release notes?
Release notes are available on:
- GitHub releases
- Documentation updates
- Community announcements

For additional questions, please join our community discussions or contact support. 