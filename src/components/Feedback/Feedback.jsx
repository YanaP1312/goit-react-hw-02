import css from "./Feedback.module.css";

export default function Feedback({ children, value }) {
  return (
    <>
      <p>
        {children}: {value}
      </p>
    </>
  );
}
