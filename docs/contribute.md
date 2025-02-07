# Contributing to Medispeak

We're excited that you're interested in contributing to Medispeak! This document provides guidelines and instructions for contributing to our open-source project.

## Ways to Contribute

There are many ways to contribute to Medispeak:

1. **Code Contributions**
   - Bug fixes
   - Feature implementations
   - Performance improvements
   - Documentation updates

2. **Non-Code Contributions**
   - Bug reports
   - Feature requests
   - Documentation improvements
   - User experience feedback
   - Testing and quality assurance

## Getting Started

1. **Fork the Repository**
   - Visit the [Medispeak GitHub repository](https://github.com/medispeak)
   - Click the "Fork" button to create your copy

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/medispeak.git
   cd medispeak
   ```

3. **Set Up Development Environment**
   ```bash
   # Frontend (React)
   cd frontend
   npm install
   
   # Backend (Rails)
   cd backend
   bundle install
   rails db:setup
   ```

## Development Workflow

1. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**
   - Write clean, maintainable code
   - Follow our coding standards
   - Add tests for new features
   - Update documentation as needed

3. **Commit Your Changes**
   ```bash
   git commit -m "Description of your changes"
   ```

4. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**
   - Go to the Medispeak repository
   - Click "New Pull Request"
   - Select your branch
   - Fill out the PR template

## Code Standards

### Frontend (React)
- Use TypeScript for type safety
- Follow React best practices
- Use functional components and hooks
- Implement responsive design
- Write unit tests using Jest

### Backend (Rails)
- Follow Ruby style guide
- Write clear, documented APIs
- Include RSpec tests
- Use proper ActiveRecord patterns
- Implement proper error handling

## Testing

- Write tests for new features
- Ensure all tests pass before submitting PR
- Include both unit and integration tests
- Test across different browsers (for frontend)

## Documentation

- Update README.md when adding features
- Document API changes
- Include JSDoc comments for frontend
- Add YARD documentation for Ruby code
- Update this contribution guide if needed

## Code Review Process

1. **Initial Review**
   - Code quality check
   - Test coverage verification
   - Documentation review

2. **Feedback**
   - Address reviewer comments
   - Make requested changes
   - Update PR as needed

3. **Merge**
   - Squash and merge after approval
   - Delete branch after merge

## Community Guidelines

- Be respectful and inclusive
- Follow our code of conduct
- Help others learn and grow
- Provide constructive feedback
- Participate in discussions

## Getting Help

- Join our [GitHub Discussions](https://github.com/medispeak/discussions)
- Check existing issues and PRs
- Read our documentation
- Ask questions in the community

## Recognition

Contributors are recognized in:
- Release notes
- Contributors list
- Special mentions for significant contributions

Thank you for contributing to Medispeak! Together, we're making healthcare documentation more efficient and accessible. 