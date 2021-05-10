var currentTime = new Date().getFullYear()

// functions used to create a Form object
export function generateArrayOfYears() {
  var max = currentTime
  var min = max - 30
  var years:number[] = []
  for (var i = max; i >= min; i--) {
    years.push(i)
  } return Array.from({ length: years.length }, (v, i) => ({ value: years[i], label: years[i] }));
}

export function generateArrayOfDays(year = currentTime, month = 1) {
  let days = new Date(year, month, 0).getDate();
  return Array.from({ length: days }, (v, i) => ({ value: i + 1, label: i + 1 }));
}

export function generateArrayOfMonths() {
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return Array.from({ length: months.length }, (v, i) => ({ value: i + 1, label: months[i] }));
}

export function generateArrayOfGenders() {
  let genders = ['male', 'female', 'other'];
  return Array.from({ length: genders.length }, (v, i) => ({ value: genders[i], label: genders[i].charAt(0).toUpperCase() + genders[i].slice(1) }));
}

export function generateArrayOfCourses() {
  let courses = ['java', 'javascript', 'ruby', 'php']
  return Array.from({ length: courses.length }, (v, i) => ({ value: courses[i], label: courses[i].charAt(0).toUpperCase() + courses[i].slice(1) }));
}



interface StateInterface  {
  texas: string[],
  florida: string[],
  indiana: string[],
  nevada: string[],
}
// Data object for state/city
const cityByState: StateInterface = {
  texas: ['el paso', 'dallas'],
  florida: ['miami', 'orlando'],
  indiana: ['indianapolis', 'madison'],
  nevada: ['las vegas', 'virginia']
}

export function generateArrayOfCities(cities = cityByState.texas) {
  return Array.from({ length: cities.length }, (v, i) => ({ value: cities[i].replace(/\s+/g, '-').toLowerCase(), label: cities[i].charAt(0).toUpperCase() + cities[i].slice(1) }));
}

export function generateArrayOfStates(state = Object.keys(cityByState)) {
  return Array.from({ length: state.length }, (v, i) => ({ value: state[i], label: state[i].charAt(0).toUpperCase() + state[i].slice(1) })); 
}
