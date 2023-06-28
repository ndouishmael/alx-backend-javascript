import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpPromise, photoPromise]).then((results) => {
    return results.map((result) => {
      return {
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason.message,
      };
    });
  });
}
