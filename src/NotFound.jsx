import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden relative">
      {/* Animated floating 404 */}
      <motion.h1
        initial={{ scale: 0, opacity: 0, rotate: -30 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-[8rem] md:text-[12rem] font-extrabold text-red-600 select-none"
      >
        404
      </motion.h1>

      {/* Floating glow effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.6, 0.3, 0.8, 0.5, 1],
          y: [0, -10, 10, -5, 5, 0],
        }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 w-[20rem] h-[20rem] bg-red-500/30 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"
      ></motion.div>

      {/* Funny message */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center text-lg md:text-xl text-gray-300 mt-[-1rem] px-6 max-w-lg"
      >
        Oops... looks like you wandered off the map. Don’t worry — even the best
        explorers get lost sometimes.
      </motion.p>

      {/* Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-10"
      >
        <Link
          to="/"
          className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full shadow-lg hover:shadow-red-500/50 transition-all duration-300"
        >
          🔙 Go Back Home
        </Link>
      </motion.div>

      {/* Decorative stars for interactivity */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
      >
        {[...Array(25)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.span>
        ))}
      </motion.div>
    </section>
  );
};

export default NotFound;
