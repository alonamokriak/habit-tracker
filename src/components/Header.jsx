import { CircleCheck } from "lucide-react";

export default function Header({ title, text }) {
  return (
    <header className="header">
      <CircleCheck className="header__icon" size={28} />
      <h1 className="header__title">{title}</h1>
      <p className="header__text">{text}</p>
    </header>
  );
}
