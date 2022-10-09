import React, { useEffect } from "react";
import "./HelperPopup.component.css";
import { ReactComponent as CloseIcon } from "../../assets/img/close-white.svg";

type Props = {
  popupHandler: (option: boolean) => void;
};

function HelperPopup({ popupHandler }: Props) {
  useEffect(() => {
    document.getElementsByTagName("body")[0].classList.add("stop-scrolling");

    return () => {
      document
        .getElementsByTagName("body")[0]
        .classList.remove("stop-scrolling");
    };
  }, []);

  return (
    <div className="popup-shadow">
      <div className="popup-wrapper">
        <div className="popup-header-wrapper">
          <div className="popup-heading">INFORMACIJE O PROJEKTU</div>
          <div className="close-wrapper" onClick={() => popupHandler(false)}>
            <CloseIcon />
          </div>
        </div>
        <div className="separator"></div>
        <div className="content">
          <span>Predmet</span>
          Ova aplikacija je izrađena kao seminarski za predmet Internet of
          Things. Za predmet je bilo potrebno izmisliti neki IoT sistem koji će
          sadržavati senzore, mikrokontroler i neku vrstu aplikacije (web,
          desktop ili mobilna) za pregled stanja. Na osnovu tog projekta smo
          mogli napraviti određenu simulaciju u vidu jednostavne web aplikacije
          uz korištenje firebase-a.
          <span>Projekat</span>U pitanju je projekat za pregled slobodnih
          parking mjesta. Senzori bi bili postavljeni na svako parking mjesto i
          pomoću mikrokontrolera na kojeg su spojeni bi se slalo trenutno stanje
          na internet. Korisnici bi mogli preko aplikacije pregledati trenutno
          stanje svakog mjesta.
          <span>Kako funcioniše</span>Ova aplikacija služi za simuliranje
          aktiviranje i deaktiviranje senzora. Klikom na parking mjesto se
          simulira aktiviranje senzora ukoliko je prazno mjesto, i deaktiviranje
          senzora ukoliko je mjesto popunjeno.
          <span>Tehnologije</span> Za pohranjivanje trenutnog stanja koristim
          firebase real-time database. Ovaj frontend je izrađen sa React
          frameworkom uz korištenje Typescripta. Real-time database osigurava
          ažuriranje stanja na aplikaciji kada se izvrši promjena stanja.
        </div>
      </div>
    </div>
  );
}

export default HelperPopup;
