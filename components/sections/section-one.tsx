import Image from 'next/image';
import lineGraph from '../../public/images/line-graph.png';

const SectionOne = () => {
  return (
    <div className="h-full w-full bg-white p-8 tab1:px-16 tab2:px-20 pc2:px-32 pc3:px-48 pc4:px-60 pc5:px-80">
      <div className="h-full w-full">
        <h2
          className="font-bold text-[1.75rem] text-center tab1:text-4xl tab2:text-[2.5rem] tab2:leading-[3rem] pc4:text-6xl pc4:leading-[5rem]"
          style={{
            background:
              'linear-gradient(45deg, rgb(145, 48, 244) 20%, rgb(70, 70, 249) 80%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Consulting For Startups <br /> In Fintech
        </h2>
        <p className="font-medium py-4 text-base text-center tab1:text-xl tab2:text-2xl pc4:text-4xl pc4:pb-12">
          Our Team consists of proven experts from finance, tech and science.
          This mix makes it possible for our team to deliver the best results to
          all our clients.
        </p>
      </div>
      <Image
        src={lineGraph}
        alt="Line Graph"
        className="h-full m-auto pc1:w-full pc1:h-auto"
      />
    </div>
  );
};

export default SectionOne;
