import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

function ProfileCard({ user }) {
  return (
    <div className="flex flex-col items-center border p-10 rounded-xl">
      <img
        src={user.photoURL}
        alt="profile"
        className="rounded-full h-10 w-10 mb-3"
      />
      <div className="text-xl">{user.displayName}</div>
      <div className="text-slate-500">{user.email}</div>
    </div>
  );
}

function App() {
  const [user, setUser] = useState();

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  const tirthSignIn = (provider) => {
    signInWithPopup(auth, provider);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {user ? (
        <div className="flex flex-col items-center">
          <ProfileCard user={user} />
          <button
            className="border mt-12 py-3 px-7 rounded-md"
            onClick={() => signOut(auth)}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <button
          className="border-2 py-3 px-7 rounded-md"
          onClick={() => tirthSignIn(googleProvider)}
        >
          Sign in with Google
        </button>
      )}
    </div>
  );
}

export default App;
