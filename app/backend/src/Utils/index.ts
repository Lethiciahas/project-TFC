import ITeam from '../interfaces/ITeam';
import IResult from '../interfaces/IResult';
import IMatches from '../interfaces/IMatches';

export const sortLeaderboard = (
  results:IResult[],
) =>
  results.sort((a, b) => b.totalPoints - a.totalPoints
        || b.totalVictories - a.totalVictories
        || b.goalsBalance - a.goalsBalance
        || b.goalsFavor - a.goalsFavor
        || b.goalsOwn - a.goalsOwn);


export const calculateHome = (teams:ITeam[], matchesList:IMatches[]) => {
  const results: IResult[] = [];
  for (let i = 0; i < teams.length; i++) {
    const obj = {
      name: '',
      totalPoints: 0,
      totalGames: 0,
      totalVictories: 0,
      totalDraws: 0,
      totalLosses: 0,
      goalsFavor: 0,
      goalsOwn: 0,
      goalsBalance: 0,
      efficiency: 0,
    } as IResult;
    obj.name = teams[i].teamName;
    for (let j = 0; j < matchesList.length; j++) {
      if (matchesList[j].teamHome.teamName === teams[i].teamName) {
        obj.goalsFavor += matchesList[j].homeTeamGoals;
        obj.goalsOwn += matchesList[j].awayTeamGoals;
        obj.totalGames += 1;
        if (matchesList[j].homeTeamGoals > matchesList[j].awayTeamGoals) {
          obj.totalPoints += 3;
          obj.totalVictories += 1;
        } else if (matchesList[j].homeTeamGoals < matchesList[j].awayTeamGoals) {
          obj.totalLosses += 1;
        } else {
          obj.totalPoints += 1;
          obj.totalDraws += 1;
        }
      }
    }
    obj.efficiency = Number(((obj.totalPoints / (obj.totalGames * 3)) * 100).toFixed(2));
    obj.goalsBalance = obj.goalsFavor - obj.goalsOwn;
    results.push(obj);
  }
  return sortLeaderboard(results);
};
