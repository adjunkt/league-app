export const generateDays = count => {
  let days = []

  for (let i = 0 i < count i++) {
    days.push(i + 1)
  }

  return days
}

export const generateTeams = count => {
  let names = 'ABCDEFGHIJKLMNOPQRSTUVWXWZ'.split('')
  let teams = []

  for (let i = 0 i < count i++) {
    teams.push(names[i])
  }

  return teams
}
