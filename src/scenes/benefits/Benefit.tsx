import { SelectedPage } from "@/shared/types.ts";
import { JSX } from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x:-50 },
        visible: { opacity: 1, x: 0}
      }}
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <AnchorLink
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        className="text-sm font-bold text-primary-500 underline"
        href={`#${SelectedPage.ContactUs}`}
      >
        <p className="pt-5">Learn more</p>
      </AnchorLink>
    </motion.div>
  );
};

export default Benefit;