# MoltBot Platform Frontend

React + TypeScript frontend for MoltBot Platform MVP.

## Features

- ✅ Real-time chat with MoltBot
- ✅ WebSocket connection
- ✅ Session viewer
- ✅ Logs viewer (mock)
- ✅ Files viewer (mock)
- ✅ Authentication (mock)
- ✅ Tailwind CSS styling

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

App will start on http://localhost:5173

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Socket.io-client

## Project Structure

```
src/
├── components/
│   ├── Chat.tsx         # Main chat interface
│   ├── Sidebar.tsx      # Sessions/Logs/Files sidebar
│   └── Login.tsx        # Authentication UI
├── context/
│   └── AuthContext.tsx  # Auth state management
├── App.tsx              # Main app component
└── main.tsx             # Entry point
```

## MVP Features

### 1. Chat Interface
- Send messages to MoltBot
- Receive real-time responses
- Message history
- Connection status indicator

### 2. Sidebar
- **Sessions Tab**: View active OpenClaw sessions
- **Logs Tab**: View system logs (mock)
- **Files Tab**: View modified files (mock)

### 3. Authentication
- Login/Register UI
- Mock authentication for MVP
- Token-based auth ready for production

## WebSocket Events

```typescript
// Send message
socket.emit('chat:message', { text: 'Hello' });

// Receive response
socket.on('chat:response', (msg) => {
  console.log(msg.text);
});

// Handle errors
socket.on('chat:error', (error) => {
  console.error(error);
});
```

## TODO (Post-MVP)

- [ ] Code editor integration
- [ ] Real-time file system viewer
- [ ] Agent spawn UI
- [ ] Workflow builder
- [ ] Spec-driven development UI
