import css from "./Options.module.css";

export default function Options({ children, onClick }) {
  return (
    <div>
      <button onClick={onClick}>{children}</button>
    </div>
  );
}
