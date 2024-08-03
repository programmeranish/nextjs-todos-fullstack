type UserType = {
  id: number;
  name: string;
  email: string;
};

export default async function Users() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users1");
  const data: UserType[] = await res.json();
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("");
    }, 2000);
  });
  return (
    <div>
      {data.map((user) => (
        <div key={user.id} className="divide-y-2">
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
