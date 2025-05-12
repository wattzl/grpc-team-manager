# 👥 gRPC Team Manager

A simple and efficient **gRPC-based microservice** built with Node.js to manage teams and members.  
Built for speed, structure, and just the right amount of nerd glory.

---

## 🚀 Features

- 🔧 gRPC server with `team.proto` definitions
- ➕ Create new teams
- 👨‍👩‍👧 Add members to teams
- 📋 List all teams and their members
- 🧠 Clean separation of server, proto, and data logic
- ⚡ Fast, type-safe communication using Protocol Buffers

---

## 📁 Project Structure

grpc-team-manager/
├── protos/
│ └── team.proto # gRPC service & message definitions
├── db.js # In-memory data store
├── server.js # gRPC server implementation
├── client.js # Basic gRPC client to call services
├── package.json
└── README.md


---

## 🔧 Getting Started

### 1. Clone and install

```bash
git clone https://github.com/YOUR_USERNAME/grpc-team-manager.git
cd grpc-team-manager
npm install

2. Run the server

node server.js

3. Run the client (in a new terminal)

node client.js

You’ll see logs like:

[DB] ✅ Created team: Developers
[DB] ✅ Added member Alice to team Developers

👤 Author

Built by [wattzl] — fueled by coffee and unresolved commit messages.