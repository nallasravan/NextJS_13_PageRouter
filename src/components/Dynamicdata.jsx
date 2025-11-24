export default function Dynamicdata({data}){

    return(

        <div>
            <h1>data fectching api data  like a props</h1>
        <h1>User Data</h1>
        <h3>id:{data.id}</h3>
      <h3>Name: {data.name}</h3>
      <p>Email: {data.email}</p>
      <p>Username: {data.username}</p>
      <p>Phone: {data.phone}</p>
        </div>
    )
}