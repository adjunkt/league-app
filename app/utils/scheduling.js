export const prepareTeamStatus = (status, teams, team) => {
  if (!status[team] || status[team].length === teams.length) {
    status[team] = []
  }

  if (status[team].length === 0) {
    status[team].push(team)
  }

  return status[team]
}

export const scheduleGames = (status, teams, team, played) => {
  status[team] = prepareTeamStatus(status, teams, team )
  played = preparePlayed(played)

  const teamCopy = teams.slice()
  const unplayed = teamCopy.filter(t => {
    return status[team].indexOf(t) === -1 &&
      played.indexOf(t) === -1
  })

  log('unplayed: ' + unplayed)

  const randomUnplayed = shuffle(unplayed).pop()

  log('randomUnplayed: ' + randomUnplayed)

  status[team].push(randomUnplayed)
  played.push(randomUnplayed)
  return [team, randomUnplayed]
}

export const season = (teams, days) => {
  const season = {}

  days.forEach(day => {
    season[day]
  })

  return season
}
