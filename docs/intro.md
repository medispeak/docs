---
sidebar_position: 1
---

# Introduction to Medispeak

Medispeak is an innovative open-source project that revolutionizes how healthcare professionals interact with Electronic Medical Record (EMR) systems. By leveraging advanced AI technology, Medispeak enables doctors and nurses to use their voice to fill in EMR records efficiently and accurately.

## Key Features

- **Voice-to-EMR Integration**: Seamlessly convert spoken medical notes into structured EMR data
- **EMR Compatibility**: 
  - Native support for Open Healthcare Network's CARE and Bahmni Open Source EMR
  - Compatible with any web-based EMR through Medispeak Admin configuration
- **Smart Data Population**: Intelligent field mapping and context recognition for accurate documentation
- **Privacy-First Design**: Secure handling of sensitive medical information
- **Open Source**: Community-driven development for continuous improvement

## How It Works

1. **Voice Input**: Healthcare professionals speak their medical notes naturally
2. **AI Processing**: 
   - Real-time transcription of speech to text
   - Medical terminology recognition
   - Context-aware structuring of information
3. **EMR Integration**: 
   - Direct integration with supported EMRs (CARE, Bahmni)
   - Custom field mapping for other web-based EMRs
4. **Review & Confirm**: Quick review interface for verifying and editing entries

## Getting Started

Medispeak can be used either as a Chrome extension or embedded in your web application. For detailed setup instructions, visit our [Installation Guide](/docs/installation).

## Why Medispeak?

Healthcare professionals spend a significant portion of their time on documentation. Medispeak aims to reduce this burden by:
- Saving time on data entry
- Improving documentation accuracy
- Reducing administrative workload
- Allowing more focus on patient care

## Technical Architecture

Medispeak consists of two main components:

1. **Frontend**:
   - React-based user interface
   - Available as Chrome extension or embeddable widget
   - Real-time voice processing
   
2. **Backend**:
   - Ruby on Rails server
   - AI models for transcription and structuring
   - EMR integration APIs with built-in support for CARE and Bahmni
   - Configurable integration for other web-based EMRs

For technical details, visit our [Architecture Overview](/docs/architecture).
