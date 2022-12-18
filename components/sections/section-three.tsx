import Image from 'next/image';
import loremLogoMobile from '../../public/images/section-three-lorem-logo-mobile.png';
import iPhone from '../../public/images/iPhone.png';

const SectionThree = () => {
  return (
    <div className="h-full w-full p-8 bg-white tab1:px-16 pc2:px-32 pc3:px-64">
      <div className="h-full w-full flex flex-col justify-center items-center pb-4">
        <h2
          className="font-bold text-3xl text-center tab1:text-4xl"
          style={{
            background:
              'linear-gradient(45deg, rgb(145, 48, 244) 20%, rgb(70, 70, 249) 80%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Case Study
        </h2>
        <p className="font-medium py-2 text-lg text-center tab1:text-xl">
          Some results from our clients
        </p>
      </div>
      <div className="h-full w-full bg-[#15123E] rounded-3xl p-8">
        <div className="h-full w-full flex flex-col">
          <h2 className="font-bold text-3xl text-center text-white">
            Coruma Finance
          </h2>
          <p className="text-white font-normal py-4 text-base text-center">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
          <button
            className="font-medium text-sm text-white w-full px-12 py-2 rounded-xl tab1:w-fit tab1:self-center"
            style={{
              border: '3px solid transparent',
              backgroundImage:
                'linear-gradient(90deg, rgba(143, 48, 244, 1) 20%, rgba(58, 73, 249, 1) 80%)',
              backgroundOrigin: 'border-box',
              boxShadow: '2px 1000px 1px #121139 inset',
            }}
          >
            READ MORE ABOUT THIS CLIENT
          </button>
        </div>
        <div className="h-full w-full pt-8 px-4 tab1:px-16">
          <Image src={loremLogoMobile} alt="Lorem Ipsum Logo" />
        </div>
      </div>
      <div className="hidden h-full w-full pt-8 px-4">
        <Image src={iPhone} alt="iPhone Screen" />
      </div>
    </div>
  );
};

export default SectionThree;
