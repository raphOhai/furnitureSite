import { useHistory } from "react-router-dom";
import { scrollToTop } from "../../function/FingertippsApiCall";


const Btn = () => {
  const history = useHistory();
  return (
    <>
      <button onClick={() =>scrollToTop() & history.push("/products")} className="btn pointer">
        <p className="btnText1">explore</p>
      </button>
    </>
  );
};

export default Btn;
