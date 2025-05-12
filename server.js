const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const db = require('./db');

const PROTO_PATH = './protos/team.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const teamProto = grpc.loadPackageDefinition(packageDefinition).team;

const server = new grpc.Server();

server.addService(teamProto.TeamService.service, {
  CreateTeam: (call, callback) => {
    const team = db.addTeam(call.request.name);
    callback(null, { team });
  },
  AddMember: (call, callback) => {
    try {
        console.log('[Server] AddMember request:', call.request); 
        console.log('[Server] Team ID:', call.request.teamId); 
      const member = db.addMember(call.request.name, call.request.teamId);
      callback(null, { member });
    } catch (err) {
      callback({
        code: grpc.status.NOT_FOUND,
        message: err.message
      });
    }
  },
  GetTeams: (_, callback) => {
    const teams = db.getTeams();
    callback(null, { teams });
  }
});

server.bindAsync('127.0.0.1:50051', grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
      console.error('Failed to bind gRPC server:', err);
      return;
    }
    console.log(`🚀 gRPC Server running on 127.0.0.1:${port}`);
    // server.start(); ← no longer needed
  });
  
