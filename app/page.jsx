import { getSession, signOut } from "next-auth/react";

 async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
export default function Home() {
  return (
    <div>
      <button onClick={() => signOut()}>log out</button>
    </div>
  );
}
