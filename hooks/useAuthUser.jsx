
import { auth } from '..firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

function useAuthUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return user;
}

export default useAuthUser;
