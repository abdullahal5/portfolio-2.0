import { contactInfo, socialLinks } from "@/data/about";
import { motion } from "framer-motion";
import Image from "next/image";

const LeftSideStickyCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="lg:col-span-1"
    >
      <div className="sticky top-44 h-fit rounded-3xl border border-neutral-300 p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-neutral-800/50 dark:bg-[#191919] dark:hover:border-neutral-700">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative mx-auto -mt-32 mb-6 h-48 w-48"
        >
          <div className="absolute h-full w-full overflow-hidden rounded-3xl border-4 border-white dark:border-gray-800">
            <Image
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
              alt="Alex Johnson"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
        {/* Name and Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-6 text-center"
        >
          <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
            Alex Johnson
          </h1>
          <p className="font-medium text-gray-600 dark:text-gray-300">
            Senior UI/UX Designer & Developer
          </p>
        </motion.div>
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-8 flex justify-center gap-3"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
              className={`rounded-full p-3 transition-all ${social.color} bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600`}
            >
              <social.icon className="h-5 w-5" />
            </motion.a>
          ))}
        </motion.div>
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="space-y-4"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              className="flex cursor-pointer items-center gap-4 rounded-xl p-3 transition-all hover:bg-gray-100 dark:hover:bg-gray-700/50"
            >
              <div className={`rounded-lg p-2 ${info.bgColor}`}>
                <info.icon className={`h-5 w-5 ${info.color}`} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {info.label}
                </p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {info.value}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LeftSideStickyCard;
