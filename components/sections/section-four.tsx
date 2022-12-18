import Image from 'next/image';
import corumaFinance from '../../public/images/coruma-finance.png';

const SectionFour = () => {
  return (
    <div
      className="h-full w-full p-8 tab1:px-16 pc2:px-32 pc3:px-64"
      style={{
        background:
          'linear-gradient(30deg, rgb(50,31,124) 0%, rgb(18,17,57) 20%, rgb(18,17,57) 60%, rgb(50,31,101) 100%)',
      }}
    >
      <div className="h-full w-full flex flex-col justify-center items-center py-4">
        <h2
          className="font-bold text-3xl text-center tab1:text-4xl"
          style={{
            background:
              'linear-gradient(45deg, rgb(145, 48, 244) 20%, rgb(70, 70, 249) 80%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Coruma Finance
        </h2>
        <p className="text-white font-normal py-2 text-base text-center tab1:text-xl">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </div>
      <div className="h-full w-full pt-8 px-4">
        <Image src={corumaFinance} alt="Coruma Finance" />
      </div>
    </div>
  );
};

export default SectionFour;
