import {SelectedPage} from "@/shared/types.ts";
import {motion} from "framer-motion";
import HText from "@/shared/HText.tsx";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import Class from "@/scenes/ourClasses/Class.tsx";
import {ClassType} from "@/shared/types.ts";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description: "Elevate your strength and sculpt your physique with our Weight Training Classes at Body Symphony. Led by experienced trainers, these classes offer a dynamic and challenging workout designed to build lean muscle, enhance metabolism, and boost overall vitality. ",
    image: image1
  },
  {
    name: "Yoga Classes",
    description: "Elevate your strength and sculpt your physique with our Weight Training Classes at Body Symphony. Led by experienced trainers, these classes offer a dynamic and challenging workout designed to build lean muscle, enhance metabolism, and boost overall vitality. ",
    image: image2
  },
  {
    name: "Ab Core Classes",
    description: "Elevate your strength and sculpt your physique with our Weight Training Classes at Body Symphony. Led by experienced trainers, these classes offer a dynamic and challenging workout designed to build lean muscle, enhance metabolism, and boost overall vitality. ",
    image: image3
  },
  {
    name: "Adventure Classes",
    description: "Elevate your strength and sculpt your physique with our Weight Training Classes at Body Symphony. Led by experienced trainers, these classes offer a dynamic and challenging workout designed to build lean muscle, enhance metabolism, and boost overall vitality. ",
    image: image4
  },
  {
    name: "Stretching",
    description: "Elevate your strength and sculpt your physique with our Weight Training Classes at Body Symphony. Led by experienced trainers, these classes offer a dynamic and challenging workout designed to build lean muscle, enhance metabolism, and boost overall vitality. ",
    image: image5
  },
  {
    name: "Pump",
    description: "Elevate your strength and sculpt your physique with our Weight Training Classes at Body Symphony. Led by experienced trainers, these classes offer a dynamic and challenging workout designed to build lean muscle, enhance metabolism, and boost overall vitality. ",
    image: image6
  },
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({ setSelectedPage }: Props) => {

return (
  <section id="ourclasses" className="w-full bg-primary-100 py-40">
    <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
      <motion.div className="mx-auto w-5/6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x:-50 },
                    visible: { opacity: 1, x: 0}
                  }}>
        <div className="md:w-3/5">
          <HText>OurClasses</HText>
          <p className="py-5">
            At Body Symphony, you'll not only achieve your fitness goals but also experience a sense of belonging, motivation, and happiness that goes beyond the physical. Join us and be a part of the symphony of wellness, where every client's success story becomes an inspiring note in the grand melody of a healthier, happier life.
          </p>
        </div>
      </motion.div>
      <div className="mt-10 h-[347px] w-full overflow-x-auto overflow-y-hidden">
        <ul className="w-[2800px] whitespace-nowrap">
          { classes.map((item: ClassType, index) => (
            <Class key={`${item.name}-${index}`} name={item.name} description={item.description} image={item.image}/>
          )) }
        </ul>
      </div>
    </motion.div>
  </section>
)
}

export default OurClasses