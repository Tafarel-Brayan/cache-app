# 🚀 Workshop React Query Avançado

Este projeto é um hands-on para estudar e demonstrar os principais conceitos do **React Query** aplicados a um fluxo real de frontend.  
A proposta é aprender como o cache funciona, como compartilhar dados entre rotas, e como lidar com operações de **CRUD** (Create, Read, Update, Delete) de forma performática.

---

## 📚 Tópicos Estudados

### 1. **Conceitos básicos**
- `useQuery` para buscar dados de uma API.
- `useMutation` para updates e deletes.
- O cache do React Query é **global** (por `QueryClient`), não por componente ou rota.

---

### 2. Ciclo de vida do cache

Quando um componente é montado, o React Query executa a `queryFn` e armazena o resultado no cache.

Quando o componente é desmontado, o cache não é apagado imediatamente, ele entra em estado inativo.

O tempo que o cache permanece disponível é controlado pelo `gcTime`.

---

### 3. Configurações importantes
`staleTime`

Tempo em que os dados ficam frescos (fresh).
Durante esse período, não ocorre refetch automático.

```ts
useQuery({
  queryKey: ["users"],
  queryFn: fetchUsers,
  staleTime: 1000 * 5, // 5 segundos
});
```

`gcTime`

Tempo que o dado inativo permanece em cache antes de ser limpo pelo garbage collector.
```ts
useQuery({
  queryKey: ["users"],
  queryFn: fetchUsers,
  gcTime: 1000 * 10, // 10 segundos
});
```

`refetchOnWindowFocus`

Controla se a query deve refazer a requisição ao usuário voltar o foco para a janela.
```ts
useQuery({
  queryKey: ["users"],
  queryFn: fetchUsers,
  refetchOnWindowFocus: true, // padrão
});

```

> true: Refaz a requisição ao focar a aba.

> false: Não refaz automaticamente.

---

### 4. Acessando o cache em diferentes rotas

O cache é global ao QueryClient.
Se você fizer uma query em /users e navegar para /profile, ainda é possível acessar os dados:

```ts
const cachedData = queryClient.getQueryData(["users"]);
```

---

### 5. Invalidando vs Refetch
`invalidateQueries`

Marca a query como stale (obsoleta).
O React Query fará o refetch apenas quando houver um novo subscriber ou ação que dispare.

```ts
queryClient.invalidateQueries({ queryKey: ["users"] });

refetch
```

Força o refetch imediato, mesmo sem invalidar.
```ts
queryClient.refetchQueries({ queryKey: ["users"] });
```
---

### 6. Updates e Deletes
Update parcial no cache

Útil para atualizar apenas um item já carregado.

```ts
queryClient.setQueryData(["users"], (oldData: User[]) =>
  oldData.map(user => 
    user.id === updatedUser.id ? updatedUser : user
  )
);
```

Delete de objeto no cache

Remove o item sem precisar refazer toda a requisição.

```ts
queryClient.setQueryData(["users"], (oldData: User[]) =>
  oldData.filter(user => user.id !== deletedUser.id)
);
```

---

### 7. Resumo do fluxo aprendido

- Consultar dados com useQuery.
- Entender o ciclo de vida do cache (ativo → inativo → GC).
- Configurar staleTime, gcTime, refetchOnWindowFocus.
- Usar o cache entre diferentes componentes/rotas com getQueryData.
- Controlar atualização de dados com invalidateQueries e refetch.
- Atualizar ou remover itens diretamente no cache com setQueryData.