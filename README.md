# AI Content Generator App - README

Welcome to the AI Content Generator App! This application helps you generate various types of content with ease, using AI-powered tools. Below are the instructions to set up and use the application.

## Project Structure

- **components/**: Contains reusable React components used throughout the app.
- **context/**: Holds the context providers for global state management.
- **helper/**: Includes helper functions and utilities.
- **pages/**: Contains the Next.js page components.
- **public/**: Static files and assets.
- **styles/**: CSS and styling files.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/moe2008/contentAI
   cd content-AI
   ```
2. **Install Dependecies**:
    ```bash
    npm install
    ```
Configuration
Environment Variables:
Create a .env.local file in the root directory and add your environment variables. Example:

```env
NEXT_PUBLIC_SUPABASE_URL=<your_api_url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your_api_key>
OPEN_AI=<your_api_key>
```
Supabase Configuration:
Ensure your supabaseClient.js is configured correctly with your Supabase credentials.


Running the App
To start the development server, run:
```bash
npm run dev
```
The app will be available at http://localhost:3000.

## Features
**Content Generation:**

**Social Media Posts:** Generate tailored posts for different social media platforms.
**Product Descriptions:** Create compelling product descriptions.
**Blog Posts:** Draft blog posts based on given topics.
**Thumbnails:** Design eye-catching thumbnails.
**Video Scripts:** Script video content efficiently.

**Customizable Options:**
**Platform:** Choose the platform for your content.
**Style:** Select the style that suits your content.
**Tone:** Define the tone of the content.
**Audience:** Describe your target audience.
**Hashtags:** Add relevant hashtags.
**About:** Specify the topic or idea for the content.


## User Authentication:

Login and Registration: Users can register and log in using Supabase authentication.
Usage

User Authentication:
Registration: Navigate to the registration page, fill in your details, and create an account.
Login: Navigate to the login page, enter your credentials, and log in.
Navigate to the Content Generation Page:
Choose the type of content you wish to generate (Social Media Post, Product Description, Blog Post, Thumbnails, Video Scripts).

Fill in the Required Fields:

Select the platform, style, and tone.
Describe your audience.
Add hashtags and topic details.
Generate Content:
Click on the Generate button to create content. The generated content will be displayed below the form.

Contributing
We welcome contributions! Please follow these steps to contribute:

Fork the repository.
Create a new branch for your feature or bugfix.
Commit your changes.
Push to your branch.
Open a Pull Request.

Thank you for using the AI Content Generator App! Happy creating!
