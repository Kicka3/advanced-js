function twiceAsOld(dadYearsOld, sonYearsOld) {
  const ageAtBirth = dadYearsOld - sonYearsOld;
  const doubleAge = ageAtBirth * 2;
  return Math.abs(dadYearsOld - doubleAge);
}