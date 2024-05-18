# Reel Rush

Welcome to **ReelRush**, a dynamic and engaging short-video platform similar to TikTok. This README provides an overview of the project, instructions for installation, usage, and guidelines for contributing.

## Table of Contents

- [Features](#features)
- [Why and How I built this](#why-and-how-i-built-this)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- Create and share short videos
- Follow other users and view their content
- Like, comment, and share videos
- Discover trending content through personalized feeds
- In-app video editing with various effects and filters

## Why and How I Built This

ReelRush was created to showcase my skills in building fullstack applications using MongoDB, Express, React.js and Node.js.

The frontend was built with React.js and Deployed using firebase. I chose firebase because it is super-secure, serverless, it's scales up and down so it follows a microservice architecture. Being hosted on Google's servers eliminates the need for extensive security configuration, so it's basically simplifying the deployment process.

The backend was built with Node.js, Express.js with MongoDB serving as the backbone for the database operations.

## Technology Used

- **Frontend:** React.js, HTML5, CSS3, JavaScript, Flexbox, CSS Grid
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Deployment:** Render, GH-Pages
- **Hosting:** Firebase Hosting (for deploying frontend)

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Clone the Repository

```bash
git clone https://github.com/yourusername/reelrush.git
cd reelrush
```

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Configure the environment variables:
   Create a `.env` file in the backend directory with the following variables:

   ```plaintext
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd ../frontend
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Configure the environment variables:
   Create a `.env` file in the frontend directory with the following variables:

   ```plaintext
   REACT_APP_API_URL=http://localhost:5000
   ```

4. Start the frontend development server:
   ```bash
   npm start
   ```

## Usage

### Running the Application

1. Ensure the backend server is running.
2. Start the frontend development server.
3. Open your browser and navigate to `http://localhost:3000`.

### Key Functionalities

- **Home Feed:** View a feed of trending videos.
- **Profile:** View and manage your profile and uploaded videos.
- **Upload:** Create and upload new videos with editing options.

## Project Structure

```plaintext
reelrush/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── server.js
│   └── ...
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── ...
│   ├── .env
│   └── ...
└── README.md
```

## Contributing

We welcome contributions from the community! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a new Pull Request.

Please ensure your code follows our coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any inquiries or support, reach out at finzyphinzyy@proton.me

---

Thank you for using ReelRush! I hope you enjoy the platform. Feel free to explore, contribute, and share your feedback.

#

#

### Color Palette for ReelRush:

1. **Primary Colors:**

   - **Electric Blue:** #007BFF
   - **Neon Green:** #39FF14

2. **Secondary Colors:**

   - **Vivid Purple:** #8A2BE2
   - **Bright Cyan:** #00FFFF

3. **Neutral Colors:**
   - **White:** #FFFFFF
   - **Light Gray:** #D3D3D3

### Suggested Fonts for ReelRush:

1. **Primary Font:** Montserrat Bold

   - Montserrat is a modern, clean, and versatile font that works well for digital platforms. Its bold version gives a strong and dynamic appearance, fitting the energetic vibe of ReelRush.
   - [Download Montserrat from Google Fonts](https://fonts.google.com/specimen/Montserrat)

2. **Secondary Font (optional for subheadings or descriptions):** Poppins Regular
   - Poppins is another modern font with geometric simplicity, complementing Montserrat well.
   - [Download Poppins from Google Fonts](https://fonts.google.com/specimen/Poppins)

### Combining Colors and Fonts:

1. **Logo Design:**

   - **Icon:** Use Electric Blue (#007BFF) for the main shape, with dynamic elements or accents in Neon Green (#39FF14).
   - **Text:** "ReelRush" in Montserrat Bold, primarily in Electric Blue, with an optional Neon Green accent or underline.

2. **App Interface:**
   - **Background:** Light Gray (#D3D3D3) or White (#FFFFFF) for a clean, minimalist look.
   - **Buttons and Highlights:** Use Vivid Purple (#8A2BE2) and Bright Cyan (#00FFFF) to make interactive elements stand out.
   - **Text:** Primarily in Electric Blue (#007BFF) for headings and important text, with secondary text in Light Gray (#D3D3D3).

### Example Mockup:

Here’s a textual description to visualize the combination:

1. **Logo:**

   - Icon: A play button encased in a circular motion line, filled with Electric Blue (#007BFF) and Neon Green (#39FF14) accents.
   - Text: “ReelRush” in Montserrat Bold, Electric Blue (#007BFF), with a slight slant.

2. **App Interface:**
   - Background: Light Gray (#D3D3D3)
   - Buttons: Vivid Purple (#8A2BE2) with white text.
   - Highlights and Accents: Bright Cyan (#00FFFF)
   - Primary Text: Electric Blue (#007BFF)
   - Secondary Text: Light Gray (#D3D3D3)

### Creating the Logo:

Using a tool like Canva or Adobe Illustrator:

1. **Icon Design:**

   - Draw a circle and a play button inside it.
   - Add dynamic lines or swooshes around the play button.
   - Fill the circle with Electric Blue (#007BFF) and use Neon Green (#39FF14) for the dynamic lines or swooshes.

2. **Text Design:**
   - Add the text “ReelRush” next to or below the icon in Montserrat Bold.
   - Color the text in Electric Blue (#007BFF), with optional Neon Green (#39FF14) accents.

### Logo Design Concept for ReelRush

#### Components:

1. **Icon:** A stylized play button or film reel with dynamic lines to represent movement and excitement.
2. **Typography:** Modern, bold, and slightly slanted to convey energy and rush.
3. **Color Palette:** Vibrant colors such as electric blue, neon green, and vivid purple, complemented by secondary colors like white or light grey.

#### Step-by-Step Guide:

1. **Choose a Design Tool:**

   - Use tools like [Canva](https://www.canva.com/), [Adobe Illustrator](https://www.adobe.com/products/illustrator.html), or [Figma](https://www.figma.com/).

2. **Create the Icon:**

   - Start with a basic shape like a circle or a play button.
   - Add dynamic elements like swooshes or lines emanating from the play button to suggest movement.
   - Consider integrating a film reel design subtly within the play button to hint at the "reel" concept.

3. **Select Typography:**

   - Choose a bold, modern font. Examples include Montserrat, Poppins, or Bebas Neue.
   - Apply slight italics or slant to the text to suggest speed and dynamism.
   - Ensure the text “ReelRush” is clear and legible.

4. **Apply Colors:**

   - Fill the icon with a primary vibrant color (e.g., electric blue).
   - Use secondary colors for accents (e.g., neon green or vivid purple).
   - Ensure good contrast between the icon and background for visibility.

5. **Combine Elements:**

   - Position the icon to the left or above the text.
   - Ensure balance and harmony in the design by aligning elements properly.

6. **Refinement:**
   - Add any additional details like shadows, gradients, or outlines to enhance the logo.
   - Ensure the logo looks good in both large and small sizes.

### Example Description:

Imagine a dynamic play button encased in a circular motion line, with streaks suggesting movement, colored in a vibrant electric blue. The text "ReelRush" is bold and slightly slanted, in a modern font, with a complementary neon green accent line underneath to add balance and emphasis.

### Tools for DIY Design:

- **[Canva](https://www.canva.com/):** Great for beginners with its drag-and-drop interface.
- **[Adobe Illustrator](https://www.adobe.com/products/illustrator.html):** Perfect for advanced design and creating vector graphics.
- **[Figma](https://www.figma.com/):** Excellent for collaborative design and prototyping.

If you prefer to have a professional designer create the logo, you can use platforms like [99designs](https://99designs.com/), [Fiverr](https://www.fiverr.com/), or [Upwork](https://www.upwork.com/) to find a graphic designer.

```

```
