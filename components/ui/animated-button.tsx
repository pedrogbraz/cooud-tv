import { motion } from "framer-motion";
import { Button } from "./button";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  className: string;
  children: ReactNode;
  variant: "link" | "outline" | "default" | "blueLinks" | "destructive" | "secondary" | "ghost";
}

const AnimatedButton = ({ className, children, variant }: AnimatedButtonProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <Button className={className} variant={variant}>
        {children}
      </Button>
    </motion.div>
  );
};

export default AnimatedButton;
