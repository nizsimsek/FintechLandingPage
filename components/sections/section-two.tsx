import Image from 'next/image';
import circleChartGraph from '../../public/images/circle-chart-graph.png';
import analysisSvg from '../../public/svgs/analysis.svg';
import growthPhaseSvg from '../../public/svgs/growth-phase.svg';
import profitSvg from '../../public/svgs/profit.svg';

const SectionTwo = () => {
  return (
    <div
      className="h-full w-full p-8 tab1:px-16 tab2:px-20 pc2:px-32 pc3:px-48 pc4:px-60 pc5:px-80"
      style={{
        background:
          'linear-gradient(45deg, rgb(18,17,57) 60%, rgb(50,31,101) 100%)',
      }}
    >
      <div className="h-full w-full">
        <h2
          className="h-full w-full font-bold text-[1.75rem] text-center tab1:text-4xl tab1:px-4 tab2:text-[2.5rem] tab2:leading-[3rem] pc4:text-6xl pc4:leading-[5rem] pc4:max-w-4xl pc4:mx-auto"
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
          className="hidden pc2:flex h-full my-8 mx-auto shadow-[0_15px_50px_-20px_rgba(129,45,226,1)] rounded-3xl"
        />
        <div className="h-full w-full my-4 tab1:my-4 pc2:max-w-2xl pc2:my-auto pc4:max-w-auto pc5:max-w-4xl pc6:max-w-7xl">
          <h3 className="h-full w-full text-white font-bold text-2xl text-center mx-auto tab1:text-3xl tab2:text-4xl pc4:text-5xl">
            The Process
          </h3>
          <p className="h-full w-full text-white font-normal py-2 text-base text-center mx-auto tab1:text-xl tab1:px-8 tab2:text-2xl pc4:text-3xl">
            Strategic phrases we run through with every client make it possible
            to implement highly efficient processes, even in high paced startups
            that like to scale as fast as possible.
          </p>
          <div className="grid grid-rows-1 tab1:grid-cols-3 gap-20 mx-auto w-full h-full my-10 tab1:gap-0 tab1:my-10 pc2:my-6">
            <div
              className="h-40 w-40 flex flex-col justify-center items-center rounded-3xl mx-auto relative tab1:h-36 tab1:w-36 tab2:h-40 tab2:w-40 pc1:h-48 pc1:w-48 pc2:h-40 pc2:w-40 pc4:h-44 pc4:w-44 pc5:w-52 pc5:h-52"
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
                className="h-14 w-14 tab1:h-12 tab1:w-12 tab2:h-14 tab2:w-14 pc4:h-16 pc4:w-16 pc5:h-20 pc5:w-20"
              />
              <span className="text-white font-bold tracking-wider text-base mt-4 tab1:text-lg tab2:text-xl pc5:text-2xl">
                Analysis
              </span>
              <h2
                className="text-6xl tab1:text-5xl tab2:text-6xl font-semibold absolute -bottom-9 tab1:-bottom-7 pc1:-bottom-8 pc2:text-6xl pc2:-bottom-8 pc5:text-7xl pc5:-bottom-10"
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
              className="h-40 w-40 flex flex-col justify-center items-center rounded-3xl mx-auto relative tab1:h-36 tab1:w-36 tab2:h-40 tab2:w-40 pc1:h-48 pc1:w-48 pc2:h-40 pc2:w-40 pc4:h-44 pc4:w-44 pc5:w-52 pc5:h-52"
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
                className="h-14 w-14 tab1:h-12 tab1:w-12 tab2:h-14 tab2:w-14 pc4:h-16 pc4:w-16 pc5:h-20 pc5:w-20"
              />
              <span className="text-white font-bold tracking-wider text-base mt-4 tab1:text-lg tab2:text-xl pc5:text-2xl">
                Growth Phase
              </span>
              <h2
                className="text-6xl tab1:text-5xl tab2:text-6xl font-semibold absolute -bottom-9 tab1:-bottom-7 pc1:-bottom-8 pc2:text-6xl pc2:-bottom-8 pc5:text-7xl pc5:-bottom-10"
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
              className="h-40 w-40 flex flex-col justify-center items-center rounded-3xl mx-auto relative tab1:h-36 tab1:w-36 tab2:h-40 tab2:w-40 pc1:h-48 pc1:w-48 pc2:h-40 pc2:w-40 pc4:h-44 pc4:w-44 pc5:w-52 pc5:h-52"
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
                className="h-14 w-14 tab1:h-12 tab1:w-12 tab2:h-14 tab2:w-14 pc4:h-16 pc4:w-16 pc5:h-20 pc5:w-20"
              />
              <span className="text-white font-bold tracking-wider text-base mt-4 tab1:text-lg tab2:text-xl pc5:text-2xl">
                Profit
              </span>
              <h2
                className="text-6xl tab1:text-5xl tab2:text-6xl font-semibold absolute -bottom-9 tab1:-bottom-7 pc1:-bottom-8 pc2:text-6xl pc2:-bottom-8 pc5:text-7xl pc5:-bottom-10"
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
