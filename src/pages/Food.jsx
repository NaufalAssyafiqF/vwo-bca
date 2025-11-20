import { useEffect } from "react";

export default function Food() {
  useEffect(()=> {
    // Do not change anything in the following two lines
    window.VWO = window.VWO || [];
    VWO.visitor = VWO.visitor || function () {VWO.push(["visitor"].concat([].slice.call(arguments)))};

    // Replace "<text_value>" with your actual attribute value
    VWO.visitor({ "user_interest": "food" });
  }, [])

  return <h1>Ini halaman Food Promo</h1>;
}