import Image from 'next/image';
import riseFinance from '../../public/svgs/rise-finance.svg';
import burgerMenu from '../../public/svgs/burger-menu.svg';
import card from '../../public/images/card.png';
import logoIpsum from '../../public/images/logo-ipsum.png';
import logoIpsum1 from '../../public/images/logo-ipsum1.png';
import Link from 'next/link';

const Hero = () => {
  return (
    <div
      className="h-full w-full px-8 tab1:px-16 tab2:px-20 pc1:px-28 pc1:h-[657px] pc2:px-32 pc2:h-[625px] pc3:px-48 pc3:h-[757px] pc4:px-60 pc4:h-[757px] pc5:px-80 pc5:h-[937px] pc6:h-[1400px]"
      style={{
        background:
          'linear-gradient(30deg, rgb(50,31,124) 0%, rgb(18,17,57) 20%, rgb(18,17,57) 50%, rgb(50,31,101) 90%)',
      }}
    >
      <div className="h-24 flex items-center tab2:h-32 pc1:h-16 pc3:h-32">
        <div className="flex flex-row h-full w-full">
          <Link href="/" className="flex flex-row items-center">
            <Image
              src={riseFinance}
              alt="Rise Finance"
              className="h-full tab2:h-12 tab2:w-auto pc1:h-6 pc3:h-12"
            />
            <div className="flex flex-row self-center pl-2 text-white text-3xl tab2:text-4xl pc1:text-2xl pc3:text-4xl">
              <h2>Rise</h2>
              <h2 className="font-bold">Finance</h2>
            </div>
          </Link>
        </div>
        <div className="flex flex-row self-center h-full items-center">
          <Image
            src={burgerMenu}
            alt="BurgerMenu"
            className="tab2:h-7 tab2:w-auto pc1:h-3 pc3:h-7 pc5:h-8 pc5:w-auto"
          />
        </div>
      </div>
      <div className="flex justify-between w-full h-full pc1:h-auto">
        <div className="flex flex-col justify-center h-full w-full pc1:py-12 pc3:py-4 pc4:py-8 pc5:py-20 pc6:py-36">
          <h1
            className="leading-none font-bold text-[2.7rem] tab1:text-7xl tab2:text-8xl pc1:text-6xl pc3:text-8xl pc6:text-9xl"
            style={{
              background:
                'linear-gradient(45deg, rgb(70,70,249) 20%, rgb(145,48,244) 80%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Scale Fintech
          </h1>
          <h2 className="text-white font-semibold text-4xl tab1:text-6xl tab2:text-7xl pc1:text-5xl pc3:text-7xl pc6:text-8xl">
            Safe And Secure
          </h2>
          <p className="text-white font-normal my-6 tracking-wider text-base tab1:text-xl tab2:text-2xl pc1:text-xl pc3:text-2xl pc6:text-5xl">
            Ship your fintech products to your customers with fast and reliable
            processes. Secure and highly{' '}
            <span className="font-bold">customizable.</span> Rise Finance is the
            best partner for you if you want to scale your finance products
            worldwide.
          </p>
          <button
            className="font-semibold text-white tracking-widest w-full rounded-xl p-2 text-base tab1:text-lg tab1:w-fit tab1:my-8 tab1:self-start tab1:py-4 tab1:px-8 tab2:text-xl pc1:py-2 pc1:px-6 pc3:py-4 pc3:px-8 pc6:py-8 pc6:px-16 pc6:text-3xl"
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
        <div className="hidden pc5:block pc5:m-auto pc5:w-full">
          <Image src={card} alt="Card" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10 items-center w-full py-8 tab1:grid-cols-2 tab1:justify-items-center pc1:py-10 pc1:grid-cols-4 pc4:py-4 pc5:py-0">
        <Image src={logoIpsum} alt="Card" />
        <Image src={logoIpsum1} alt="Card" />
        <Image src={logoIpsum} alt="Card" />
        <Image src={logoIpsum1} alt="Card" />
      </div>
    </div>
  );
};

export default Hero;
