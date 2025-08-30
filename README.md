# AI Assistant
<p align="center">
  <a href="https://github.com/AmanRai8/ai_assistant/stargazers">
    <img src="https://img.shields.io/github/stars/AmanRai8/ai_assistant?style=social&label=Stars&color=yellow" alt="Stars">
  </a>
  <a href="https://github.com/AmanRai8/ai_assistant/network/members">
    <img src="https://img.shields.io/github/forks/AmanRai8/ai_assistant?style=social&label=Forks&color=blue" alt="Forks">
  </a>
  <a href="https://github.com/AmanRai8/ai_assistant/issues">
    <img src="https://img.shields.io/github/issues/AmanRai8/ai_assistant?color=red" alt="Issues">
  </a>
  <a href="https://github.com/AmanRai8/ai_assistant/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/AmanRai8/ai_assistant?color=green" alt="License">
  </a>
</p>

Welcome to **AI Assistant**, your personal AI companion! This intelligent assistant helps you brainstorm ideas, solve problems, and interact with AI in real-time. Built with **Next.js**, **React**, **Clerk authentication**, and **Tailwind CSS**, this app is fully responsive and optimized for all devices.

---

## 🌟 Features

- **Real-time Voice Chat** with AI:

  - Start a live conversation with AI.

- **User Authentication** with **Clerk**:

  - Secure Sign Up / Sign In.

- **Personalized User Experience**:

  - Profile page showing user information.
  - AI remembers your session until the call ends.

- **Feedback System**:

  - Users can submit feedback directly via email.
  - Email is sent instantly without storing data in a database.

- **Responsive Design**:

  - Works perfectly on mobile, tablet, and desktop.
  - Smooth scrolling and animations for better UX.

- **Integration & API**:

  - Uses **Resend** for email feedback.
  - AI powered by a custom **Voice API** (`vapi`) for interactive calls.

---

## 🛠 Tech Stack

- **Frontend and backend**:  
  ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
- **Database**:  
   <img src="./public/logo-white.png" alt="Convex" width="150" height="auto" />
- **Authentication**:  
  ![Clerk](https://img.shields.io/badge/Clerk-000000?style=for-the-badge&logo=clerk&logoColor=white)
- **Email Feedback**:  
  ![Resend](https://img.shields.io/badge/Resend-FF3C00?style=for-the-badge&logo=resend&logoColor=white)
- **Icons**:  
  ![Lucide](https://img.shields.io/badge/Lucide-000000?style=for-the-badge&logo=lucide&logoColor=white)
- **Hosting**:  
  ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## 📱 Screenshots

**Home / Dashboard**

![Home Screenshot](./public/homepage.png)

**AI Assistant Call Interface**

![Call Start](./public/callStart.png)

![Call Started](./public/callStarted.png)

[⬆ Back to Top](#ai-assistant)

**About**

![About](./public/about.png)

**Profile Page**

![Profile Screenshot](./public/profile.png)

**Feedback Form**

![Feedback Screenshot](./public/feedback.png)

---

[⬆ Back to Top](#ai-assistant)

## 🚀 Getting Started

1. **Clone the repository**:

```bash
git clone https://github.com/AmanRai8/ai_trainer.git
cd ai_trainer
```

1. **Clone the repository**:

```bash
git clone https://github.com/AmanRai8/ai_trainer.git
cd ai_trainer
```

2. **Install Dependencies**:

```bash
npm install
```

3. **Configure Environment Variables**:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_public_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_VAPI_WORKFLOW_ID=your_vapi_assistant_id
NEXT_PUBLIC_VAPI_API_KEY=your_vapi_api_key


CONVEX_DEPLOYMENT=your_convex_deployment

NEXT_PUBLIC_CONVEX_URL=your_public_convex_url

RESEND_API_KEY=your_resend_api_key
```

4. **Run the app**:

```bash
npm run dev
```

[⬆ Back to Top](#ai-assistant)

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit changes (`git commit -m "Added new feature"`)
4. Push (`git push origin feature-branch`)
5. Open a Pull Request


[⬆ Back to Top](#ai-assistant)
