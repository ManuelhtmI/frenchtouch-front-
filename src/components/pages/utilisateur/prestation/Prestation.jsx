import { useEffect } from "react";
import Header from "./../header/Header";
import Presentation from "../../../visiteur/prestation/Presentation";
import Prestation from "../../../visiteur/prestation/Prestation";
import Gift from "../../../visiteur/prestation/Gift";

function Prestations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Header />
      <Presentation />
      <Prestation />
      <Gift />
    </div>
  );
}

export default Prestations;