export default function Datarender({data}){
console.log("data=", data)
    return(

        <div>
            <h1>data fectching api data  like a props</h1>
        <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
    )
}