import { CSSTransition } from "react-transition-group";
const Loader = () => (
  <div className="loader">
    <CSSTransition in={true} appear={true} timeout={20000} classNames="fade">
      <h1>Loading...</h1>
    </CSSTransition>
  </div>
);
export default Loader;
