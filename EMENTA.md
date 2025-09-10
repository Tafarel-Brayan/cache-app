## 1. Conceitos Básicos (contextualização rápida)

### O que é React Query e para que serve?
É uma biblioteca JavaScript que facilita a criação de aplicações React com cache de dados assíncronos.
Ele gerencia o ciclo de vida de busca e modificação de dados, eliminando a necessidade de lógica manual complexa e melhorando a experiência do usuário com funcionalidades como refetching em foco e paginação infinita

### Diferença entre estado global (ex: Redux) e cache de dados assíncronos
- O estado global você controla manualmente. Voce é o próprio garçom e você controla tudo. Você controla o estado global e você controla o fluxo de dados. 

O React Query é uma forma de lidar com o fluxo de dados de forma mais simples e mais eficiente.
- O cache de dados assíncronos é um recurso que React Query fornece para armazenar dados em cache e recuperá-los quando necessário. Ele é uma maneira de lidar com dados que são obtidos de um servidor ou outra fonte de dados, e que podem ser usados em várias partes de uma aplicação. O cache de dados assíncronos
- O cache do React Query já vem com regras prontas para lidar com dados que vêm do servidor

---
## 2. Cache em Profundidade

queryClient.getQueryData() vs useQuery

queryClient.setQueryData() – como alterar dados do cache manualmente

queryClient.invalidateQueries() – quando e como invalidar

staleTime e cacheTime – diferença e aplicações práticas

---
## 3. Exemplos Práticos

Componente A faz a requisição

Componente B acessa o mesmo dado via getQueryData

Atualizar o dado no B, e o A reflete isso automaticamente

Invalidação de cache após um useMutation

---
## 4. Avançado

`prefetchQuery`
Permite carregar dados antes de o componente ser montado.
Muito útil em navegação antecipada (por exemplo, hover em links).

```ts
await queryClient.prefetchQuery({
  queryKey: ["user", userId],
  queryFn: () => fetchUser(userId),
});
```

`placeholderData`
Mostra dados provisórios enquanto a requisição é feita.

`keepPreviousData`
Mantém os dados anteriores no cache enquanto busca a próxima página, evitando flickering.

````ts
const { data, isFetching } = useQuery({
  queryKey: ["users", page],
  queryFn: () => fetchUsers(page),
  keepPreviousData: true,
});
```