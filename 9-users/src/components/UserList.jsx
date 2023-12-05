function UserList({ users }) {
  const renderedUsers = users.map((user) => {
    return (
      <tr key={user.name}>
        <td className="border-2 p-2">{user.name}</td>
        <td className="border-2 p-2">{user.email}</td>
      </tr>
    );
  });
  return (
    <div>
      <table className="border-2">
        <thead>
          <tr>
            <th className="border-2">Name</th>
            <th className="border-2">Email</th>
          </tr>
        </thead>
        <tbody>{renderedUsers}</tbody>
      </table>
    </div>
  );
}

export default UserList;
