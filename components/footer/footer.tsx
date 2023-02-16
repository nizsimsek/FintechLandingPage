import Link from 'next/link';
import Image from 'next/image';
import riseFinance from '../../public/svgs/rise-finance.svg';

const Footer = () => {
  return (
    <>
      <div className="hidden pc1:flex pc1:flex-col h-full w-full bg-[#121139] px-20 pt-12 pb-4 pc1:px-28 pc2:px-32 pc3:px-48 pc4:px-60 pc5:px-80">
        <div className="h-full w-full">
          <Link href="/" className="flex flex-row">
            <Image
              src={riseFinance}
              alt="Rise Finance"
              className="h-full pc3:w-auto pc3:h-10"
            />
            <div className="flex flex-row self-center text-white text-3xl pl-2 pc3:text-4xl">
              <h2>Rise</h2>
              <h2 className="font-bold">Finance</h2>
            </div>
          </Link>
        </div>
        <div className="flex flex-row w-full h-full mt-8">
          <div className="flex flex-col w-full h-full">
            <h2 className="text-[#92989F] font-semibold text-2xl py-2 pc3:text-3xl">
              Services
            </h2>
            <div className="flex flex-col w-full h-full text-white text-base pc3:text-lg">
              <span>Web Hosting</span>
              <span>Domains</span>
              <span>Premium Hosting</span>
              <span>Private Server</span>
              <span>E-mail Hosting</span>
            </div>
          </div>
          <div className="flex flex-col w-full h-full">
            <h2 className="text-[#92989F] font-semibold text-2xl py-2 pc3:text-3xl">
              Support
            </h2>
            <div className="flex flex-col w-full h-full text-white text-base pc3:text-lg">
              <span>Pricing Plan</span>
              <span>Documentation</span>
              <span>Guide</span>
              <span>Tutorial</span>
            </div>
          </div>
          <div className="flex flex-col w-full h-full">
            <h2 className="text-[#92989F] font-semibold text-2xl py-2 pc3:text-3xl">
              Company
            </h2>
            <div className="flex flex-col w-full h-full text-white text-base pc3:text-lg">
              <span>About</span>
              <span>Blog</span>
              <span>Join Us</span>
              <span>Press</span>
              <span>Partners</span>
            </div>
          </div>
          <div className="flex flex-col w-full h-full">
            <h2 className="text-[#92989F] font-semibold text-2xl py-2 pc3:text-3xl">
              Legal
            </h2>
            <div className="flex flex-col w-full h-full text-white text-base pc3:text-lg">
              <span>Claim</span>
              <span>Privacy</span>
              <span>Terms</span>
            </div>
          </div>
        </div>
        <hr className="border-t-2 border-[#71777D] rounded-lg mt-8 mb-4" />
        <div className="w-full h-full">
          <span className="text-[#92989F] text-center pc3:text-lg">
            Design with love © 2022 Created by{' '}
            <Link
              href="https://github.com/nizsimsek"
              className="text-white hover:text-green-300"
            >
              Nizamettin Şimşek
            </Link>
          </span>
        </div>
      </div>
      <div className="flex pc1:hidden flex-col h-full w-full text-sm bg-[#121139] p-2 tab1:text-lg">
        <span className="text-[#92989F] text-center">
          Design with love © 2022{' '}
          <span className="block tab2:inline-block">
            Created by{' '}
            <Link
              href="https://github.com/nizsimsek"
              className="text-white hover:text-green-300"
            >
              Nizamettin Şimşek
            </Link>
          </span>
        </span>
      </div>
    </>
  );
};

export default Footer;
