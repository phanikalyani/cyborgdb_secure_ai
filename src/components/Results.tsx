export default function Results({ results }: { results: any[] }) {
  return (
    <ul>
      {results?.map((r, i) => (
        <li key={i}>{JSON.stringify(r)}</li>
      ))}
    </ul>
  );
}

