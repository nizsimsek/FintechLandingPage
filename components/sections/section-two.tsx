import Image from 'next/image';
import circleChartGraph from '../../public/images/circle-chart-graph.png';
import analysisSvg from '../../public/svgs/analysis.svg';
import growthPhaseSvg from '../../public/svgs/growth-phase.svg';
import profitSvg from '../../public/svgs/profit.svg';

const SectionTwo = () => {
  return (
    <div
      className="h-full w-full p-8 tab1:px-16 pc2:px-32 pc3:px-64"
      style={{
        background:
          'linear-gradient(45deg, rgb(18,17,57) 60%, rgb(50,31,101) 100%)',
      }}
    >
      <div className="h-full w-full pc1:py-8">
        <h2
          className="h-full w-full font-bold text-[1.75rem] text-center tab1:text-4xl tab1:px-4 pc4:text-6xl pc4:max-w-4xl pc4:mx-auto pc5:text-8xl pc5:max-w-7xl pc5:h-60"
          style={{
            background:
              'linear-gradient(45deg, rgb(145, 48, 244) 20%, rgb(70, 70, 249) 80%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Delivering Value In Every Step Of Production
        </h2>
      </div>
      <div className="h-full w-full flex flex-col pc2:flex-row">
        <Image
          src={circleChartGraph}
          alt="Circle Chart Graph"
          className="hidden pc2:flex h-full my-8 mx-auto shadow-[0_15px_50px_-20px_rgba(129,45,226,1)] rounded-3xl pc4:mr-12 pc5:max-w-xl pc5:w-full"
        />
        <div className="h-full w-full my-4 tab1:my-8 pc2:max-w-3xl pc3:max-w-5xl pc4:my-auto pc4:max-w-7xl pc5:w-full pc5:max-w-full pc5:mx-auto">
          <h3 className="h-full w-full text-white font-bold text-2xl text-center mx-auto tab1:text-3xl pc4:ml-16 pc4:text-start pc5:text-7xl pc5:ml-32">
            The Process
          </h3>
          <p className="h-full w-full text-white font-normal py-2 text-base text-center mx-auto tab1:text-xl tab1:px-8 pc1:max-w-3xl pc3:text-start pc3:max-w-3xl pc4:ml-16 pc4:px-0 pc4:text-start pc4:max-w-4xl pc5:text-4xl pc5:max-w-7xl pc5:ml-32">
            Strategic phrases we run through with every client make it possible
            to implement highly efficient processes, even in high paced startups
            that like to scale as fast as possible.
          </p>
          <div className="grid grid-rows-1 tab1:grid-cols-3 gap-20 mx-auto w-full h-full my-10 tab1:gap-0 tab1:my-10 pc3:max-w-3xl pc3:mx-0 pc4:max-w-5xl pc5:max-w-full">
            <div
              className="h-40 w-40 flex flex-col justify-center items-center rounded-3xl mx-auto relative tab1:h-36 tab1:w-36 tab2:h-40 tab2:w-40 pc1:h-48 pc1:w-48 pc2:h-40 pc2:w-40 pc4:h-56 pc4:w-56 pc5:w-80 pc5:h-80"
              style={{
                border: '3px solid transparent',
                background:
                  'linear-gradient(90deg, rgb(129, 45, 226) 0%, rgb(129, 45, 226) 65%, rgb(58, 73, 249) 100%)',
                backgroundOrigin: 'border-box',
                boxShadow: '2px 1000px 1px #121139 inset',
              }}
            >
              <Image
                src={analysisSvg}
                alt="Analysis"
                className="h-14 w-14 tab1:h-12 tab1:w-12 tab2:h-14 tab2:w-14 pc4:h-20 pc4:w-20 pc5:h-28 pc5:w-28"
              />
              <span className="text-white font-bold tracking-wider text-base mt-4 tab1:text-lg tab2:text-xl pc4:text-2xl pc5:text-4xl">
                Analysis
              </span>
              <h2
                className="text-6xl tab1:text-5xl tab2:text-7xl font-semibold absolute -bottom-9 tab1:-bottom-7 tab2:-bottom-9 pc2:text-6xl pc2:-bottom-8 pc5:text-8xl pc5:-bottom-12"
                style={{
                  background:
                    'linear-gradient(90deg, rgb(73, 69, 248) 0%, rgb(144, 48, 244) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                1
              </h2>
            </div>
            <div
              className="h-40 w-40 flex flex-col justify-center items-center rounded-3xl mx-auto relative tab1:h-36 tab1:w-36 tab2:h-40 tab2:w-40 pc1:h-48 pc1:w-48 pc2:h-40 pc2:w-40 pc4:h-56 pc4:w-56 pc5:w-80 pc5:h-80"
              style={{
                border: '3px solid transparent',
                background:
                  'linear-gradient(90deg, rgb(129, 45, 226) 0%, rgb(129, 45, 226) 65%, rgb(58, 73, 249) 100%)',
                backgroundOrigin: 'border-box',
                boxShadow: '2px 1000px 1px #121139 inset',
              }}
            >
              <Image
                src={growthPhaseSvg}
                alt="Growth Phase"
                className="h-14 w-14 tab1:h-12 tab1:w-12 tab2:h-14 tab2:w-14 pc4:h-20 pc4:w-20 pc5:h-28 pc5:w-28"
              />
              <span className="text-white font-bold tracking-wider text-base mt-4 tab1:text-lg tab2:text-xl pc4:text-2xl pc5:text-4xl">
                Growth Phase
              </span>
              <h2
                className="text-6xl tab1:text-5xl tab2:text-7xl font-semibold absolute -bottom-9 tab1:-bottom-7 tab2:-bottom-9 pc2:text-6xl pc2:-bottom-8 pc5:text-8xl pc5:-bottom-12"
                style={{
                  background:
                    'linear-gradient(90deg, rgb(73, 69, 248) 0%, rgb(144, 48, 244) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                2
              </h2>
            </div>
            <div
              className="h-40 w-40 flex flex-col justify-center items-center rounded-3xl mx-auto relative tab1:h-36 tab1:w-36 tab2:h-40 tab2:w-40 pc1:h-48 pc1:w-48 pc2:h-40 pc2:w-40 pc4:h-56 pc4:w-56 pc5:w-80 pc5:h-80"
              style={{
                border: '3px solid transparent',
                background:
                  'linear-gradient(90deg, rgb(129, 45, 226) 0%, rgb(129, 45, 226) 65%, rgb(58, 73, 249) 100%)',
                backgroundOrigin: 'border-box',
                boxShadow: '2px 1000px 1px #121139 inset',
              }}
            >
              <Image
                src={profitSvg}
                alt="Profit"
                className="h-14 w-14 tab1:h-12 tab1:w-12 tab2:h-14 tab2:w-14 pc4:h-20 pc4:w-20 pc5:h-28 pc5:w-28"
              />
              <span className="text-white font-bold tracking-wider text-base mt-4 tab1:text-lg tab2:text-xl pc4:text-2xl pc5:text-4xl">
                Profit
              </span>
              <h2
                className="text-6xl tab1:text-5xl tab2:text-7xl font-semibold absolute -bottom-9 tab1:-bottom-7 tab2:-bottom-9 pc2:text-6xl pc2:-bottom-8 pc5:text-8xl pc5:-bottom-12"
                style={{
                  background:
                    'linear-gradient(90deg, rgb(73, 69, 248) 0%, rgb(144, 48, 244) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                3
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
