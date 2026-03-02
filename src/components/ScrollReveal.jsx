import { motion } from "framer-motion";

export default function ScrollReveal({
    children,
    variant = "fadeUp",
    delay = 0,
    duration = 0.8,
    className = ""
}) {
    const variants = {
        fadeUp: {
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
        },
        fadeDown: {
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0 }
        },
        fadeIn: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        },
        zoomIn: {
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1 }
        },
        slideLeft: {
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
        },
        slideRight: {
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration,
                delay,
                ease: [0.16, 1, 0.3, 1] // Custom ease-out
            }}
            variants={variants[variant]}
            className={className}
        >
            {children}
        </motion.div>
    );
}
