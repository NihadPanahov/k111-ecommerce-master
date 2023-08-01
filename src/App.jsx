import "./App.scss";
import Layout from '../src/components/layout/Layout'
import { motion, useScroll } from 'framer-motion'
function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Layout />
    </>
  );

}

export default App;
