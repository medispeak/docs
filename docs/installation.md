# Installation Guide

This guide will help you set up Medispeak in your preferred environment.

## Chrome Extension (Developer Mode)

1. Clone the repository:
   ```bash
   git clone https://github.com/medispeak/extension.git
   cd extension
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the extension:
   ```bash
   npm run build
   ```

4. Load in Chrome:
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode" in the top right
   - Click "Load unpacked"
   - Select the `build` directory from the extension folder

## WebApp Integration

### Using Script Tag

1. **Add Script to HTML**
   ```html
   <script src="https://cdn.medispeak.io/widget.js"></script>
   ```

2. **Initialize Widget**
   ```html
   <div id="medispeak-container"></div>
   <script>
     Medispeak.init({
       container: 'medispeak-container',
       apiKey: 'your-api-key',
       emrSystem: 'your-emr-system'
     });
   </script>
   ```

## Configuration Options

### Widget Options
- Theme customization
- Voice recognition settings
- EMR integration settings
- UI customization

### Extension Options
- Voice recognition sensitivity
- EMR field mapping
- Keyboard shortcuts
- Privacy settings

## Troubleshooting

### Common Issues

1. **Voice Recognition Not Working**
   - Check microphone permissions
   - Verify browser compatibility
   - Test microphone input levels

2. **EMR Integration Issues**
   - Verify API credentials
   - Check network connectivity
   - Validate field mappings

3. **Performance Issues**
   - Clear browser cache
   - Check system resources
   - Verify network speed

### Getting Help

If you encounter issues:
1. Check our [FAQ](/docs/faq)
2. Visit [GitHub Issues](https://github.com/medispeak/issues)
3. Join our [Community Discussion](https://github.com/medispeak/discussions)

## Security Considerations

- Keep API keys secure
- Follow HIPAA compliance guidelines
- Regularly update dependencies
- Monitor system logs
- Enable appropriate security headers

## Next Steps

After installation:
1. Complete the [Getting Started](/docs/intro) guide
2. Review [Best Practices](/docs/best-practices)
3. Explore our [Projects](/docs/projects) 