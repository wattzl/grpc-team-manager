const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = './protos/team.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const teamProto = grpc.loadPackageDefinition(packageDefinition).team;

const client = new teamProto.TeamService('localhost:50051', grpc.credentials.createInsecure());

// Step 1: Create a new team
client.CreateTeam({ name: 'Engineering' }, (err, res) => {
    if (err) return console.error('❌ CreateTeam failed:', err.message);
    const teamId = res.team.id;
    console.log('✅ Created Team:', res.team);
    console.log(`⛳ Trying to add Bob to team ${teamId}`);
  
    client.AddMember({ name: 'Bob', teamId: teamId }, (err, res) => {
         console.log(`⛳ team id ${teamId}`);
      if (err) return console.error('❌ AddMember failed:', err.message);
      console.log('✅ Added Member:', res.member);
  
      client.GetTeams({}, (err, res) => {
        if (err) return console.error('❌ GetTeams failed:', err.message);
        console.log('📦 All Teams:', JSON.stringify(res.teams, null, 2));
      });
    });
  });
