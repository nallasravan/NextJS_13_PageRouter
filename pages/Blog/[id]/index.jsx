// File must be: pages/blog/[id].js   (or any folder with [id].js)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import { useRouter } from 'next/router';

import Dynamicdata from "@/components/Dynamicdata";
export default function BlogPost({ data }) {

  return (
    <div>
   <Dynamicdata data ={data}/>

</div>
  )
}

export async function getServerSideProps(context) {
      const { id } = context.params; // Get the dynamic id from the URL
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return { 
    props: { data }
   };
}