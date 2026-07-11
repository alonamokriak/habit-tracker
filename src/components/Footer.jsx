import { Heart, Calendar } from "lucide-react";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__calendar">
        <Calendar className="footer__icon" size={20} />
        <p className="footer__text">Stay consistent, build better habits</p>
      </div>
      <div className="footer__heart">
        <Heart className="footer__icon" size={20} />
        <p className="footer__text">Small steps, big changes</p>
      </div>
    </footer>
  );
}
