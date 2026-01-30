# Real-Time Collaborative Canvas

A feature-rich collaborative canvas application I built from scratch using modern web technologies. This project enables real-time collaboration with live cursor tracking, shape editing, and much more.

## 🚀 Features I've Implemented

- **🔄 Real-time Canvas Updates** - See changes instantly as they happen
- **👀 Live Cursor Tracking** - Watch other users' cursors move in real-time
- **🔗 Room Sharing** - Collaborate with others in shared workspaces
- **🛠️ Property Editor** - Fine-tune shapes, colors, and styling
- **📊 Dashboard** - Manage and organize your canvases
- **✏️ Drawing Tools** - Create shapes, freehand drawings, and add text
- **↩️ Undo/Redo** - Full history management for all actions
- **🔀 Layer Management** - Control z-index and layer ordering
- **🔑 Authentication** - Secure sign up and sign in system
- **🚀 Deployed on Vercel** - Production-ready deployment
- **📊 Postgres Database** - Robust data persistence

## 🛠️ Tech Stack

I built this application using:

- **Next.js 15** - React framework for production
- **React 18** - UI component library
- **TypeScript** - Type-safe development
- **Liveblocks** - Real-time collaboration infrastructure
- **PostgreSQL** - Database for persistent storage
- **Vercel** - Deployment platform

## 📦 Installation & Setup

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/Sushitrashhhh.git

```

### 2. Navigate to Project Directory

```bash
cd Sushitrashhhh
```

### 3. Install Node.js

If you don't have Node.js installed, download it from [nodejs.org](https://nodejs.org/)

### 4. Install Dependencies

```bash
npm install
```

### 5. Setup Liveblocks

1. Sign up at [Liveblocks](https://liveblocks.io/)
2. Create a new project
3. Grab your public and secret API keys

### 6. Configure Environment Variables

Create a `.env` file in the root directory and add the required variables (check `env.js` for the full list):

```env
LIVEBLOCKS_PUBLIC_KEY=your_public_key_here
LIVEBLOCKS_SECRET_KEY=your_secret_key_here
# Add other environment variables as needed
```

### 7. Run the Development Server

```bash
npm run dev
```

### 8. Access the Application

Open your browser and visit:
```
http://localhost:3000
```

## 🎯 What I Learned

Building this project from scratch taught me:
- Real-time collaboration patterns
- Complex state management across multiple users
- Canvas manipulation and rendering optimization
- Authentication and authorization flows
- Database design for collaborative applications
- Extensive debugging and error handling - I encountered and solved countless bugs, which significantly improved my problem-solving skills and taught me to write more resilient code

## 🤝 Contributing

Feel free to fork this repository and submit pull requests. I'm open to suggestions and improvements!

## 📝 License

This project is open source and available under the MIT License.

---

Built with ❤️ by me
