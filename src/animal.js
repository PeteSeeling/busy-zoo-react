export default function Animals(props) {
  return <div className="animal">
    <span>{props.animal === 'lion' ? '🦁' : ''}</span>
    <span>{props.animal === 'rhino' ? '🦏' : ''}</span>
    <span>{props.animal === 'bear' ? '🐻' : ''}</span>
    <span>{props.animal === 'elephant' ? '🐘' : ''}</span>





  </div>;
}