/*
  like an '&' operator
  imagine "tacking on" some extra info onto a standard js object
    like a promise
    like a date
*/

function dateWithWeek(): Date & {oneWeekAway: Date}{

  const a = new Date()
  const oneWeekAway = new Date(a.valueOf() + ONE_WEEK_VAR_HERE)
  return {...a,...oneWeekAway};
}

const specialDate = dateWithWeek();
specialDate.toISOString()
specialDate.oneWeekAway.toISOString()