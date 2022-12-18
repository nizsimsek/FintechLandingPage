import Image from 'next/image';
import riseFinance from '../../public/svgs/rise-finance.svg';
import burgerMenu from '../../public/svgs/burger-menu.svg';
import card1bg from '../../public/images/card-bg.png';
import logoIpsum from '../../public/images/logo-ipsum.png';
import logoIpsum1 from '../../public/images/logo-ipsum1.png';
import Link from 'next/link';

const Hero = () => {
  return (
    <div
      className="h-full w-full px-8 tab1:px-16 pc2:px-32 pc3:px-64"
      style={{
        background:
          'linear-gradient(30deg, rgb(50,31,124) 0%, rgb(18,17,57) 20%, rgb(18,17,57) 60%, rgb(50,31,101) 100%)',
      }}
    >
      <div className="h-24 flex items-center pc5:h-32">
        <div className="flex flex-row h-full w-full">
          <Link href="/" className="flex flex-row items-center">
            <Image
              src={riseFinance}
              alt="Rise Finance"
              className="h-full pc5:h-16 pc5:w-auto"
            />
            <div className="flex flex-row self-center text-white text-3xl pl-2 pc5:text-6xl">
              <h2>Rise</h2>
              <h2 className="font-bold">Finance</h2>
            </div>
          </Link>
        </div>
        <div className="flex flex-row self-center h-full items-center">
          <Image
            src={burgerMenu}
            alt="BurgerMenu"
            className="pc5:h-8 pc5:w-auto"
          />
        </div>
      </div>
      <div className="flex flex-col justify-between w-full h-full">
        <div className="flex flex-col justify-center h-full w-full">
          <h1
            className="leading-none font-bold text-[2.7rem] tab1:text-7xl"
            style={{
              background:
                'linear-gradient(45deg, rgb(70,70,249) 20%, rgb(145,48,244) 80%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Scale Fintech
          </h1>
          <h2 className="text-white font-semibold text-4xl tab1:text-6xl">
            Safe And Secure
          </h2>
          <p className="text-white font-normal my-6 tracking-wider text-base tab1:text-xl">
            Ship your fintech products to your customers with fast and reliable
            processes. Secure and highly{' '}
            <span className="font-bold">customizable.</span> Rise Finance is the
            best partner for you if you want to scale your finance products
            worldwide.
          </p>
          <button
            className="font-semibold text-white tracking-widest w-full rounded-xl p-2 text-base tab1:text-lg tab1:w-fit tab1:my-8 tab1:self-start tab1:py-4 tab1:px-8"
            style={{
              border: '3px solid transparent',
              backgroundImage:
                'linear-gradient(90deg, rgba(145,48,244,1) 20%, rgba(70,70,249,1) 80%)',
              backgroundOrigin: 'border-box',
              boxShadow: '2px 1000px 1px #121139 inset',
            }}
          >
            CONSULTATION
          </button>
        </div>
        <div className="hidden">
          <Image src={card1bg} alt="Card" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10 items-center w-full py-8 tab1:grid-cols-2 tab1:justify-items-center">
        <Image src={logoIpsum} alt="Card" />
        <Image src={logoIpsum1} alt="Card" />
        <Image src={logoIpsum} alt="Card" />
        <Image src={logoIpsum1} alt="Card" />
      </div>
    </div>
  );
};

export default Hero;
