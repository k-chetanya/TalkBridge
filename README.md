<h1 align="center">💬 Full-Stack Chat & Video Calling Platform</h1>

<p align="center">
A modern real-time communication platform with messaging, video calling, and language exchange features.
</p>

---

## 🚀 Overview

This is a **full-stack chat and video calling application** designed to enable seamless real-time communication.  
It combines messaging, video conferencing, and a language exchange system into a single scalable platform.

---

## ✨ Key Features

- 🌐 **Real-time Messaging** with typing indicators and reactions  
- 📹 **1-on-1 & Group Video Calls** with screen sharing and recording  
- 🔐 **Secure Authentication** using JWT and protected routes  
- 🌍 **Language Exchange System** with 30+ customizable UI themes  
- ⚡ **Efficient Data Fetching** using TanStack Query  
- 🧠 **Global State Management** with Zustand  
- 🚨 **Robust Error Handling** (frontend & backend)  
- 🚀 **Production-ready Deployment**  
- 🎯 Built using scalable services like Stream  

---

## 🛠️ Tech Stack

**Frontend:**
- React
- Tailwind CSS
- TanStack Query

**Backend:**
- Node.js
- Express.js
- MongoDB

**Other Tools & Services:**
- Zustand (State Management)
- Stream (Real-time & Video APIs)
- JWT (Authentication)

---

## ⚙️ Environment Variables Setup

### 🔙 Backend (`/backend`)

```env
PORT=5001
MONGO_URI=your_mongo_uri
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
JWT_SECRET_KEY=your_jwt_secret
NODE_ENV=development


### Frontend (`/frontend`)

```
VITE_STREAM_API_KEY=your_stream_api_key
```

---

## 🔧 Run the Backend

```bash
cd backend
npm install
npm run dev
```

## 💻 Run the Frontend

```bash
cd frontend
npm install
npm run dev
```
