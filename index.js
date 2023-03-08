//Define the function introduction
function introduction(name) {
  return `Hi, my name is ${name}.`;
}

//Define two parameter function
function introductionWithLanguage(name, language) {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

//Defining an optional parameter function
function introductionWithLanguageOptional(name = "Gracie", language = "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}