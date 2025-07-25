import Image from 'next/image';
import Link from 'next/link';
import arrow from '@/public/arrow.png';
import whiteCheck from '@/public/check_white.png';

const Plans = () => {
  return (
    <section className="text-white">
      <div className="flex flex-col justify-center gap-6">
        <h2 className="text-3xl lg:text-5xl font-extrabold leading-normal lg:leading-normal text-center w-[80%] lg:w-[100%] m-auto dark:text-white text-[#191919]">
          All the tools you need in one package
        </h2>
        <p className="lg:text-xl leading-normal w-[80%] lg:w-[100%] m-auto text-center dark:text-white text-[#727272]">
          Securely store and share files, easily sign and send important documents, back up your
          work, all in one location, for streamlined and effective file organization.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[84vw] md:w-auto m-auto">
          <div className="dark:bg-[#191919] bg-[#F9F9F9] px-10 py-16 rounded-[2rem] flex flex-col justify-between h-[760px]">
            <div className="flex flex-col gap-2">
              <h3 className="dark:text-white text-[#191919] text-3xl font-extrabold">Basic Plan</h3>
              <p className="text-[#6EBA57] text-2xl">9.99 $US/month</p>
            </div>
            <ul className="text-[#E3E3E3]">
              {[
                '100 GB Storage',
                'Chatbot',
                'Natural language search',
                'Automatic file categorization and tagging',
                'Duplicate files detection',
                'Automatic version control detection',
                'Data backup',
              ].map((feature, index) => (
                <li key={index} className="flex items-center mb-4">
                  <Image src={whiteCheck} alt="Check" className="w-8 h-8 mr-2" />
                  <p className="text-lg md:text-sm lg:text-md xl:text-lg dark:text-white text-[#727272]">
                    {feature}
                  </p>
                </li>
              ))}
            </ul>
            <Link
              className="flex items-center justify-between dark:bg-[#333333] bg-[#EFEFEF] text-white rounded-[6px] px-6 py-2 group transition-all duration-300 ease-in-out hover:bg-[#6EBA57]"
              href="/auth/register"
            >
              <span className="group-hover:text-[#191919] dark:text-white text-[#191919]">
                Buy plan
              </span>
              <Image src={arrow} alt="Arrow" className="ml-2" />
            </Link>
          </div>
          <div className="dark:bg-[#191919] bg-[#F9F9F9] px-10 py-16 rounded-[2rem] flex flex-col justify-between h-[760px]">
            <div className="flex flex-col gap-2">
              <h3 className="dark:text-white text-[#191919] text-3xl font-extrabold">
                Standard Plan
              </h3>
              <p className="text-[#BA9457] text-2xl">24.99 $US/month</p>
            </div>
            <ul className="text-[#E3E3E3]">
              {[
                '500 GB Storage',
                'All features of the Basic Plan',
                'Natural language search (multiple languages + voice search)',
                'Automatic file hierarchy suggestion',
                'Malicious files detection',
                'Advanced file search (search by image, voice)',
                'Automatic file translation (limited to 10 files per week)',
              ].map((feature, index) => (
                <li key={index} className="flex items-center mb-4">
                  <Image src={whiteCheck} alt="Check" className="w-8 h-8 mr-2" />
                  <p className="text-lg md:text-sm lg:text-md xl:text-lg dark:text-white text-[#727272]">
                    {feature}
                  </p>
                </li>
              ))}
            </ul>
            <Link
              className="flex items-center justify-between dark:bg-[#333333] bg-[#EFEFEF] text-white rounded-[6px] px-6 py-2 group transition-all duration-300 ease-in-out hover:bg-[#BA9457]"
              href="/auth/register"
            >
              <span className="group-hover:text-[#191919] dark:text-white text-[#191919]">
                Buy plan
              </span>
              <Image src={arrow} alt="Arrow" className="ml-2" />
            </Link>
          </div>
          <div className="dark:bg-[#191919] bg-[#F9F9F9] px-10 py-16 rounded-[2rem] flex flex-col justify-between h-[760px]">
            <div className="flex flex-col gap-2">
              <h3 className="dark:text-white text-[#191919] text-3xl font-extrabold">
                Premium Plan
              </h3>
              <p className="text-[#8C57BA] text-2xl">49.99 $US/month</p>
            </div>
            <ul className="text-[#E3E3E3]">
              {[
                '2 TB Storage',
                'All features of the Standard Plan',
                'Unlimited automatic file translation',
                'Enhanced data backup with versioning',
                'Priority customer support',
                'Possibility to deploy the app locally',
              ].map((feature, index) => (
                <li key={index} className="flex items-center mb-4">
                  <Image src={whiteCheck} alt="Check" className="w-8 h-8 mr-2" />
                  <p className="text-lg md:text-sm lg:text-md xl:text-lg dark:text-white text-[#727272]">
                    {feature}
                  </p>
                </li>
              ))}
            </ul>
            <Link
              className="flex items-center justify-between dark:bg-[#333333] bg-[#EFEFEF] dark:text-white text-[#191919] rounded-[6px] px-6 py-2 group transition-all duration-300 ease-in-out hover:bg-[#8C57BA]"
              href="/auth/register"
            >
              <span>Buy plan</span>
              <Image src={arrow} alt="Arrow" className="ml-2" />
            </Link>
          </div>
          <div className="dark:bg-[#191919] bg-[#F9F9F9] px-10 py-16 rounded-[2rem] flex lg:hidden flex-col justify-between h-[760px]">
            <div className="flex flex-col gap-2">
              <h3 className="dark:text-white text-[#191919] text-3xl font-extrabold">
                Entreprise Plan
              </h3>
              <p className="text-[#68A7DB] text-2xl dark:text-white">Custom pricing</p>
            </div>
            <ul className="text-[#E3E3E3]">
              {[
                'Customizable storage (starting at 5 TB)',
                'All features of the Premium Plan',
                'Custom integration and API access',
                'Custom training and onboarding sessions',
                'SLA (Service Level Agreement) with guaranteed uptime',
                'Priority client support',
              ].map((feature, index) => (
                <li key={index} className="flex items-center mb-4">
                  <Image src={whiteCheck} alt="Check" className="w-8 h-8 mr-2" />
                  <p className="text-lg md:text-sm lg:text-md xl:text-lg dark:text-white text-[#727272]">
                    {feature}
                  </p>
                </li>
              ))}
            </ul>
            <Link
              className="flex items-center justify-between dark:bg-[#333333] bg-[#EFEFEF] dark:text-white text-[#191919] rounded-[6px] px-6 py-2 group transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#68A7DB] hover:to-[#3376AD]"
              href="/auth/register"
            >
              <span>Buy plan</span>
              <Image src={arrow} alt="Arrow" className="ml-2" />
            </Link>
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-1 mt-8">
          <div className="dark:bg-[#191919] bg-[#F9F9F9] px-10 py-16 rounded-[2rem] flex justify-between items-center">
            <div className="flex flex-col gap-8 lg:w-[40%]">
              <div className="flex flex-col gap-2">
                <h3 className="dark:text-white text-[#191919] text-3xl font-extrabold">
                  Entreprise Plan
                </h3>
                <p className="text-[#68A7DB] text-2xl">Entreprise</p>
              </div>
              <Link
                className="flex items-center justify-between dark:bg-[#333333] bg-[#EFEFEF] dark:text-white text-[#191919] rounded-[6px] px-6 py-2 group transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#68A7DB] hover:to-[#3376AD]"
                href="/auth/register"
              >
                <span>Buy plan</span>
                <Image src={arrow} alt="Arrow" className="ml-2" />
              </Link>
            </div>
            <ul className="text-[#E3E3E3]">
              {[
                'Customizable storage (starting at 5 TB)',
                'All features of the Premium Plan',
                'Custom integration and API access',
                'Custom training and onboarding sessions',
                'SLA (Service Level Agreement) with guaranteed uptime',
                'Priority client support',
              ].map((feature, index) => (
                <li key={index} className="flex items-center mb-4">
                  <Image src={whiteCheck} alt="Check" className="w-8 h-8 mr-2" />
                  <p className="text-lg md:text-sm lg:text-md xl:text-lg dark:text-white text-[#727272]">
                    {feature}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
