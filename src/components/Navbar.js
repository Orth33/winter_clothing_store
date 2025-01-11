import { motion } from "framer-motion";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-[var(--primaryColor)] z-50 top-0 left-0 right-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-2xl font-bold text-white cursor-pointer"
          >
            ShopHub
          </motion.div>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-10">
              <a href="/" className="text-white hover:text-[var(--hoverColor)]">
                Home
              </a>
              <a
                href="/products"
                className="text-white hover:text-[var(--hoverColor)]"
              >
                Products
              </a>
              <a
                href="/about"
                className="text-white hover:text-[var(--hoverColor)]"
              >
                About
              </a>
            </nav>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative cursor-pointer"
            >
              <ShoppingCartIcon className="h-6 w-6 text-white" />
              <span className="absolute -top-2 -right-2 bg-[var(--accentColor)] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
