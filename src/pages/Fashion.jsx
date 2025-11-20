export default function Fashion() {
  useEffect(()=> {
    // Do not change anything in the following two lines
    window.VWO = window.VWO || [];
    VWO.visitor = VWO.visitor || function () {VWO.push(["visitor"].concat([].slice.call(arguments)))};
  
    // Replace "<text_value>" with your actual attribute value
    VWO.visitor({ "user_interest": "fashion" });
  }, [])

  return <h1>Ini halaman Fashion Promo</h1>;
}