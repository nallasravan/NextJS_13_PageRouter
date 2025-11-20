// pages/users.jsx

import Datarender from "@/components/Datarender";





process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
export default function Home({ data }) {
  return (
    <div>
      <h1>getting data getServerSideProps</h1>
<Datarender data= {data} />
</div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await res.json();

  return { 
    props: { data }
   };
}





