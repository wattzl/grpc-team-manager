let teams = [];
let members = [];
let nextTeamId = 1;
let nextMemberId = 1;

module.exports = {
  addTeam: (name) => {
    const team = { id: nextTeamId++, name, members: [] };
    teams.push(team);
    console.log('[DB] Created team:', team);
  // ✅ If you still want to find it again for demonstration
  const teamResult = teams.find(t => t.id === team.id);
  console.log('[DB] teamResult:', teamResult);
    return team;
  },

  addMember: (name, teamId) => {
    console.log(`[DB] Looking for team ID: ${teamId} (type: ${typeof teamId})`);
    console.log('[DB] All current team IDs:', teams.map(t => t.id));
  
    const team = teams.find(t => t.id === teamId); // ← Key fix
  
    if (!team) {
      console.error(`[DB] ❌ Team with ID ${teamId} not found`);
      throw new Error("Team not found");
    }
  
    const member = { id: nextMemberId++, name };
    team.members.push(member);
    members.push({ ...member, teamId: Number(teamId) });
  
    console.log(`[DB] ✅ Added member ${name} to team ${teamId}`);
    return member;
  },

  getTeams: () => teams
};
