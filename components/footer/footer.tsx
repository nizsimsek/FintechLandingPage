import Link from 'next/link';
import Image from 'next/image';
import riseFinance from '../../public/svgs/rise-finance-blue.svg';

const Footer = () => {
  return (
    <>
      <div className="hidden pc1:flex pc1:flex-col h-full w-full bg-[#121139] p-8">
        <div className="h-full w-full">
          <Link href="/" className="flex flex-row">
            <Image src={riseFinance} alt="Rise Finance" className="h-full" />
            <div className="flex flex-row self-center text-[#3A49F9] text-2xl">
              <h2>Rise</h2>
              <h2 className="font-bold">Finance</h2>
            </div>
          </Link>
        </div>
        <div className="flex flex-row w-full h-full mt-8">
          <div className="flex flex-col w-full h-full">
            <h2 className="text-[#92989F] font-semibold text-2xl py-2">
              Services
            </h2>
            <div className="flex flex-col w-full h-full text-white text-base">
              <span>Web Hosting</span>
              <span>Domains</span>
              <span>Premium Hosting</span>
              <span>Private Server</span>
              <span>E-mail Hosting</span>
            </div>
          </div>
          <div className="flex flex-col w-full h-full">
            <h2 className="text-[#92989F] font-semibold text-2xl py-2">
              Support
            </h2>
            <div className="flex flex-col w-full h-full text-white text-base">
              <span>Pricing Plan</span>
              <span>Documentation</span>
              <span>Guide</span>
              <span>Tutorial</span>
            </div>
          </div>
          <div className="flex flex-col w-full h-full">
            <h2 className="text-[#92989F] font-semibold text-2xl py-2">
              Company
            </h2>
            <div className="flex flex-col w-full h-full text-white text-base">
              <span>About</span>
              <span>Blog</span>
              <span>Join Us</span>
              <span>Press</span>
              <span>Partners</span>
            </div>
          </div>
          <div className="flex flex-col w-full h-full">
            <h2 className="text-[#92989F] font-semibold text-2xl py-2">
              Legal
            </h2>
            <div className="flex flex-col w-full h-full text-white text-base">
              <span>Claim</span>
              <span>Privacy</span>
              <span>Terms</span>
            </div>
          </div>
        </div>
        <hr className="border-t-2 border-[#71777D] rounded-lg my-8" />
        <div className="w-full h-full">
          <h4 className="text-[#92989F] text-center">
            Design with love ©{' '}
            <Link
              href="https://github.com/nizsimsek"
              className="text-white hover:text-green-300"
            >
              NizTech
            </Link>{' '}
            2022. All right reserved.
          </h4>
        </div>
      </div>
      <div className="flex pc1:hidden flex-col h-full w-full bg-[#121139] p-2 tab1:text-base">
        <h4 className="text-[#92989F] text-center px-14 tab1:px-0">
          Design with love ©{' '}
          <Link
            href="https://github.com/nizsimsek"
            className="text-white hover:text-green-300"
          >
            NizTech
          </Link>{' '}
          2022 All right reserved.
        </h4>
      </div>
    </>
  );
};

export default Footer;
