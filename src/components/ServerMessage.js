

export default function ServerMessage({ message }) {
  return (
    <div style={{ padding: '20px', border: '2px solid blue' }}>
      <h2>Server Rendered Component</h2>
      <p>getting props from server:{message}</p>
      <p>No interactivity here.</p>
    </div>
  );
}