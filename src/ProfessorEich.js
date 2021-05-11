import getColor from './lib/Color';
import './ProfessorEich.css';

export default function ProfessorEich({ name, type, fromEichToLiberty }) {
  return (
    <section className="ball" style={{ background: getColor(type) }}>
      <h3>{name}</h3>
      <p>{type}</p>
      <button onClick={() => fromEichToLiberty(name)}>🏝</button>
    </section>
  );
}
