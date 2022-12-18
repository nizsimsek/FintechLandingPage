import Image from 'next/image';
import lineGraph from '../../public/images/line-graph.png';

const SectionOne = () => {
  return (
    <div className="h-full w-full bg-white p-8 tab1:px-16 pc2:px-32 pc3:px-64">
      <div className="h-full w-full">
        <h2
          className="font-bold text-[1.75rem] text-center tab1:text-4xl"
          style={{
            background:
              'linear-gradient(45deg, rgb(145, 48, 244) 20%, rgb(70, 70, 249) 80%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Consulting For Startups <br /> In Fintech
        </h2>
        <p className="font-medium py-4 text-base text-center tab1:text-xl">
          Our Team consists of proven experts from finance, tech and science.
          This mix makes it possible for our team to deliver the best results to
          all our clients.
        </p>
      </div>
      <Image src={lineGraph} alt="Line Graph" className="h-full" />
    </div>
  );
};

export default SectionOne;
