import Image from 'next/image';
import loremLogoMobile from '../../public/images/section-three-lorem-logo-mobile.png';
import iPhone from '../../public/images/iPhone.png';

const SectionThree = () => {
  return (
    <div className="h-full w-full p-8 bg-white tab1:px-16 tab2:px-20 pc2:px-32 pc3:px-48 pc4:px-60 pc5:px-80">
      <div className="h-full w-full flex flex-col justify-center items-center pb-4">
        <h2
          className="font-bold text-3xl text-center tab1:text-4xl tab2:text-[2.5rem] tab2:leading-[3rem] pc4:text-6xl pc4:leading-[5rem]"
          style={{
            background:
              'linear-gradient(45deg, rgb(145, 48, 244) 20%, rgb(70, 70, 249) 80%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Case Study
        </h2>
        <p className="font-medium py-4 text-lg text-center tab1:text-xl tab2:text-2xl pc4:text-3xl">
          Some results from our clients
        </p>
      </div>
      <div className="h-full w-full bg-[#15123E] rounded-3xl p-8">
        <div className="h-full w-full flex flex-col pc1:px-8">
          <h2 className="font-semibold text-2xl text-center text-white tab1:text-3xl tab2:text-[2rem] pc4:text-5xl">
            Coruma Finance
          </h2>
          <p className="text-white font-normal py-4 text-base text-center tab1:text-xl tab1:px-4 pc4:text-2xl">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
          <button
            className="font-medium text-sm text-white tracking-wider w-full px-12 py-2 rounded-xl tab1:w-fit tab1:self-center tab1:px-8 tab1:text-lg pc1:mt-4 pc4:text-xl pc4:px-16 pc4:py-4"
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
          <Image
            src={loremLogoMobile}
            alt="Lorem Ipsum Logo"
            className="mx-auto"
          />
        </div>
      </div>
      <div className="hidden h-full w-full pt-8 px-4">
        <Image src={iPhone} alt="iPhone Screen" />
      </div>
    </div>
  );
};

export default SectionThree;
