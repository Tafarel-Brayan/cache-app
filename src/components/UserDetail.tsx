// components/UserDetail.tsx
import { useQueryClient } from "@tanstack/react-query";

export function UserDetail({ id }: { id: number }) {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData<any[]>(["users"])?.find(u => u.id === id);
  console.log(user);

  if (!user) return <p>Usuário não encontrado no cache.</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}
