import {SelectedPage} from "@/shared/types.ts";
import ActionButton from "@/shared/ActionButton.tsx";
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import AnchorLink from "react-anchor-link-smooth-scroll";
import {motion} from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Home = ({setSelectedPage}: Props) => {
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md-pb-0">
      {/*{image and main header}*/}
      <motion.div className="mx-auto w-5/6 items-center justify-center md:h-5/6" onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
        {/*{main header}*/}
        <div className="z-10 mt-32 md:bases-3/5">
          {/*{headings}*/}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x:-50 },
              visible: { opacity: 1, x: 0}
              }}>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                {/*<img src={HomePageText} alt="home-page-text"/>*/}
                <h1 className="text-6xl">Shape Your Potential</h1>
              </div>
            </div>

            <p className="mt-8 text-sm md:text-start">
              Harmonize Your Health, Elevate Your Body: Body Symphony Fitness Studio
            </p>
          </motion.div>
          {/*{actions}*/}
          <motion.div className="pt-5"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, x:-50 },
                        visible: { opacity: 1, x: 0}
                      }}>
            <ActionButton setSelectedPage={setSelectedPage}>Join now</ActionButton>
            <AnchorLink
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              className="text-sm font-bold text-primary-500 underline"
              href={`#${SelectedPage.ContactUs}`}>
              <p className="pt-5">Learn more</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/*{image}*/}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="home-pageGraphic"/>
        </div>
      </motion.div>

    </section>
  )
}

export default Home