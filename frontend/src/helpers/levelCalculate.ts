export const levelCalculate = () => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dob = new Date(2000, 9, 12);
  const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());

  let age = today.getFullYear() - dob.getFullYear();
  if (today < dobnow) {
    age = age - 1;
  }

  return age;
};
