import './App.css';

interface Props {
  title: string;
}

export function App({title}: Props) {
  return (
    <div className="App">
      <h1>{title}</h1>
    </div>
  );
}