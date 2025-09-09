// components/UserList.tsx
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../Services/UserService";

export function UserList({ onSelect }: { onSelect: (id: number) => void }) {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 1000 * 5, // 5 segs no cache sem refetch,
    gcTime: 1000 * 10, // 10 segs no cache inativo
    // refetchOnWindowFocus: false
    
  });

  if (isLoading) return <p>Carregando...</p>;

  return (
    <ul>
      {data.map((user: any) => (
        <li
          key={user.id}
          onClick={() => onSelect(user.id)}
          style={{ cursor: "pointer", marginBottom: "8px" }}
        >
          👉 {user.name}
        </li>
      ))}
    </ul>
  );
}
