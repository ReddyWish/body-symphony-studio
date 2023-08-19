import {HomeModernIcon, UserGroupIcon, AcademicCapIcon} from "@heroicons/react/24/solid";
import {motion} from "framer-motion";
import {BenefitType, SelectedPage} from "@/shared/types.ts";
import HText from "@/shared/HText.tsx";
import Benefit from "@/scenes/benefits/Benefit.tsx";
import ActionButton from "@/shared/ActionButton.tsx";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6"/>,
    title: "State of the Art Facilities",
    description: "A state-of-the-art fitness facility is more than just a gym; it's a haven for progress and self-discovery. As you step through the doors, you're greeted with an atmosphere that exudes motivation and empowerment. The sleek, contemporary design sets the stage for an exceptional journey, where every detail is crafted to enhance your fitness endeavors."
  },
  {
    icon: <UserGroupIcon className="h-6 w-6"/>,
    title: "100's of Diverse Classes",
    description: "Beyond the physical aspects, state-of-the-art facilities prioritize holistic well-being. Dedicated spaces for relaxation, meditation, and recovery help you find balance amidst your busy schedule. Expert-led wellness workshops and spa treatments offer a sanctuary for rejuvenation, ensuring that self-care remains at the forefront of your journey."
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6"/>,
    title: "Expert and Pro Trainers",
    description: "One of the most compelling advantages of these facilities is the sense of community they cultivate. Guided by experienced trainers and instructors, you become part of a supportive network of individuals who share your aspirations. The camaraderie and shared commitment create an environment where you can thrive and achieve results you once thought were unattainable."
  }
]

const container = {
  hidden: {},
  visible: {
    transition: {staggerChildren: 0.2}
  }
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({setSelectedPage}: Props) => {

  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-15">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)} className="md:mt-60">
        {/*{HEADER}*/}
        <motion.div className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                      hidden: {opacity: 0, x: -50},
                      visible: {opacity: 1, x: 0}
                    }}>
          <HText>More than a Fitness Studio</HText>
          <p className="my-5 text-sm">
            Discover a journey towards a more beautiful you, guided by expert trainers and a supportive community.
            Unleash your potential as we sculpt, tone, and energize your body through tailored workouts and holistic
            wellness programs. Embrace a symphony of strength, grace, and confidence that resonates from within. Join us
            and embark on a path to a more vibrant, healthier, and more beautiful you
          </p>
        </motion.div>

        {/*{BENEFITS}*/}
        <motion.div className="md:flex justify-between gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    variants={container}>
          {
            benefits.map((benefit: BenefitType) => (
              <Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description}
                       setSelectedPage={setSelectedPage}/>
            ))
          }
        </motion.div>

        {/*{grafics and description}*/}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/*{grafic}*/}
          <img src={BenefitsPageGraphic} alt="benefits-page-grafic" className="mx-auto"/>

          {/*{description}*/}
          <div>
            {/*{title}*/}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.5}}
                            transition={{duration: 0.5}}
                            variants={{
                              hidden: {opacity: 0, x: 50},
                              visible: {opacity: 1, x: 0}
                            }}>
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/*{description}*/}
            <motion.div initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                          hidden: {opacity: 0, x: 50},
                          visible: {opacity: 1, x: 0}
                        }}>
              <p className="my-5">At Body Symphony, our mission is to inspire and empower you to embrace a healthier
                lifestyle while finding joy in your journey. Our dedicated team of expert trainers and wellness
                enthusiasts is committed to guiding you through personalized workouts and holistic programs that cater
                to your unique needs.</p>
              <p className="mb-5">Join a community that celebrates each triumph and supports you every step of the way.
                From personalized fitness plans to transformative wellness programs, we've got your back on your path to
                achieving your goals. Our symphony of success is composed of your dedication, our expertise, and the
                shared sense of accomplishment that resonates throughout our community.</p>
            </motion.div>
            {/*{button}*/}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                Join NOW
                </ActionButton>
              </div>
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  )
}

export default Benefits