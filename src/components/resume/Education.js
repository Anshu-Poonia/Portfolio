import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const educationData = [
  {
    title: "Bachelor In Technology",
    subTitle: "Arya Institute of Engg. Tech. and Mang. (2023 - 2027)",
    result: "9.27/10",
    des: "Built strong foundation in programming, problem-solving, and real-world applications."
  },
  {
    title: "Senior Secondary School Education",
    subTitle: "Tagore Public School, Rajgarh (CHURU) (2022 - 2023)",
    result: "91.20%",
    des: "Developed analytical skills and participated in extracurricular activities."
  }
];

const trainingData = [
  {
    title: "MERN Stack Development",
    subTitle: "Ediglobe Pvt. Ltd. (June - July 2025)",
    result: "Digital Training",
    des: "Hands-on experience with MongoDB, Express, React, and Node. Built real-world projects."
  }
];

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Education Section */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold py-6 lgl:py-12">
          Education Quality
        </h2>

        <div className="border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 pl-4">
          {educationData.map((item, index) => (
            <ResumeCard key={index} {...item} />
          ))}
        </div>
      </div>

      {/* Training Section */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold py-6 lgl:py-12">
          Training
        </h2>

        <div className="border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 pl-4">
          {trainingData.map((item, index) => (
            <ResumeCard key={index} {...item} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Education;