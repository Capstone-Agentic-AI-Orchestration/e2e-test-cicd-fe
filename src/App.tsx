export interface AppProps {
  title?: string;
}

export function App({ title = 'e2e-test-cicd-fe' }: AppProps) {
  return (
    <main>
      <h1>{title}</h1>
    </main>
  );
}
