import FetchingDirect from "@/components/FetchingDirect";
import ServerMessage from "@/components/ServerMessage";

export async function getServerSideProps() {
  const message = "Hello from Server!";
  return {
    props: { message },
  };
}

export default function Dashboard({ message }) {
  return (
    <div>
      {/* <h1>dashbord page</h1>
      <h2>importing server componet like </h2>
        <ServerMessage message={message} /> */}
         <FetchingDirect />
    </div>
   
  );
}