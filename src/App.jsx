
import './App.css'
import { Button, Card } from 'antd'
import nikeShoe from "./assets/nike shoe.png";
import nikeIcon from "./assets/icon.png";
import { useMotionValue, motion, useTransform } from 'framer-motion';

function App() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const colors = [
    { value: "#b6a179" },
    { value: "#272425" },
    { value: "#6389cb" },
    { value: "#f2c758" },
    { value: "#ffffff" },
  ]
  return (
    <>
      <div className='flex justify-center items-center h-screen m-auto bg-[#beaa9e]'>
        <motion.div style={{ x, y, rotateX, rotateY, z: 100 }}
          drag
          dragElastic={0.18}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
          className='cursor-grab'
        >
          <Card

            className='relative bg-[#c2bfbd] shadow-black shadow-2xl'
            style={{
              width: 400,
              height: 500,
            }}
          >
            <div className=' gap-2'>
              <img className='w-[100px] ' src={nikeIcon} alt="" />
              <h1 className='uppercase text-2xl font-extrabold font-sans'>Nike Premium blue shoes</h1>
            </div>

            <p className='text-[14px] mt-2'>Nike running shoes are engineered for comfort, support, and performance during jogging or running activities</p>
            <div className='flex items-center mt-3 gap-8'>
              <Button
                className='bg-gradient-to-r from-slate-900 to-slate-700 text-cyan-700 font-semibold text-[18px] flex justify-center items-center'
                theme='dark'
              >
                Add to cart
              </Button>
              <h1 className='text-[20px] font-bold '>$499.80</h1>
            </div>
            <motion.div style={{ x, y, rotateX, rotateY, z: 100 }}
            drag
            dragElastic={0.18}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ cursor: "grabbing" }}
            className='cursor-grab'
            >
              <div className='mt-[20px] flex gap-2 '>
                {
                  colors.map((color, index) => <ul key={index}>
                    <li><button style={{ backgroundColor: color.value }} className='w-8 h-8 rounded-full'></button> </li> </ul>)
                }
              </div>
            </motion.div>

            <motion.div style={{ x, y, rotateX, rotateY, z: 10000 }}
              drag
              dragElastic={0.18}
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              whileTap={{ cursor: "grabbing" }}
            >
              <img className=' w-[300px] absolute left-[90%] top-[20%] transform -translate-x-1/2  cursor-grab' src={nikeShoe} alt="" />
            </motion.div>

          </Card>
        </motion.div>


      </div>
    </>
  )
}

export default App
