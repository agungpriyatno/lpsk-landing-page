import React from "react";
// 1. Importing framer-motion
import { motion } from "framer-motion";
import Link from "next/link";
// 2. Defining Variants
const marqueeVariants = {
    animate: {
        x: [0, -1035],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 10,
                ease: "linear",
            },
        },
    },
};

export const Information = () => {
    return (
        <div className="bg-background w-full fixed left-0 right-0 bottom-0 z-50">
            <div className="flex">
                <div className="px-3 py-3 bg-secondary">
                    INFORMASI
                </div>
                <div className="flex-1 overflow-hidden">
                    <motion.div
                        className=" px-3 py-3 flex gap-10"
                        variants={marqueeVariants}
                        animate="animate"
                    >
                        <Link href={'/'} className=" flex-shrink-0">
                            :: Penyandang Disabilitas Wajib Punya Hak yang Sama untuk Dilindungi ::
                        </Link>
                        <Link href={'/'} className=" flex-shrink-0">
                            :: Penyandang Disabilitas Wajib Punya Hak yang Sama untuk Dilindungi ::
                        </Link>
                        
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
