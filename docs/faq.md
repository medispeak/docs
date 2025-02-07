# Frequently Asked Questions

## General Questions

### What is Medispeak?
Medispeak is an open-source voice-to-EMR documentation tool that enables healthcare professionals to use voice commands to fill in Electronic Medical Records (EMR) efficiently and accurately.

### How does Medispeak work?
Medispeak uses advanced AI technology to convert spoken medical notes into structured data that can be automatically inserted into appropriate EMR fields. It combines speech recognition, medical terminology processing, and context understanding to provide accurate documentation.

### Which EMR systems are compatible with Medispeak?
Medispeak offers:
- **Native Integration** with:
  - Open Healthcare Network's CARE
  - Bahmni Open Source EMR
- **Custom Integration** with any web-based EMR through the Medispeak Admin interface

### How do I set up integration with my EMR?
- For CARE and Bahmni: Simply specify the EMR system in your configuration
- For other web-based EMRs:
  1. Access the Medispeak Admin interface
  2. Configure your EMR connection details
  3. Set up field mappings
  4. Test and deploy the configuration

### Is Medispeak HIPAA compliant?
Yes, Medispeak is designed with HIPAA compliance in mind. All data transmission is encrypted, and we follow strict privacy and security protocols to protect patient information.

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
Currently, Medispeak primarily supports English, with plans to add support for additional languages. See our [Future Projects](/docs/projects) page for more information.

### How accurate is the voice recognition?
Medispeak achieves over 95% accuracy for medical terminology in optimal conditions. Accuracy can be improved by:
- Using a good quality microphone
- Speaking clearly
- Minimizing background noise
- Regular system training

### Can I use Medispeak offline?
The Chrome extension has limited offline capabilities for voice capture, but internet connectivity is required for processing and EMR integration.

## EMR Integration

### How does the CARE integration work?
The CARE integration is built-in and provides:
- Automatic field detection
- Pre-configured mappings
- Seamless data synchronization
- Real-time updates

### How does the Bahmni integration work?
Bahmni integration features:
- Native form detection
- Automatic field mapping
- Support for custom forms
- Direct data population

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
- HIPAA-compliant storage
- Automatic data purging

### Where is the data processed?
Voice processing and data structuring happen on secure servers. For supported EMRs, data is directly transmitted to your EMR system through secure channels.

## Support & Troubleshooting

### How do I get help?
- Check our [documentation](/docs/intro)
- Visit our [GitHub Issues](https://github.com/medispeak/issues)
- Join our [Community Discussions](https://github.com/medispeak/discussions)
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
- AI/ML: Python, TensorFlow
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