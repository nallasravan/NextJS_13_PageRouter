export default function Userdata({ users }) {
  console.log("Component received →", users);

  if (!users || users.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <strong>{user.firstName} {user.lastName}</strong> — {user.email}
        </li>
      ))}
    </ul>
  );
}
