'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Props = {
  type: 'Email' | 'Google' | 'Github';
  operation: 'login' | 'register';
};

function OAuthButton({ type, operation }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleOAuthClick = () => {
    setLoading(true);
    if (operation === 'login') {
      if (type === 'Email') {
        router.push('/auth/login/email');
      } else {
        router.push(`/api/auth/${type.toLowerCase()}`);
      }
    } else {
      if (type === 'Email') {
        router.push('/auth/register/email');
      } else {
        router.push(`/api/auth/${type.toLowerCase()}`);
      }
    }
  };

  return (
    <button
      onClick={handleOAuthClick}
      type="button"
      className="w-full px-8 py-5 text-xl transition-all hover:opacity-85 flex items-center gap-4 justify-center placeholder:text-[#989898] text-[16px] text-white dark:bg-[#303030] bg-[#F1F1F1] rounded-full outline-none"
      disabled={loading}
    >
      {loading ? (
        <div className="w-[30px] h-[30px] border-4 border-t-transparent border-white rounded-full animate-spin"></div>
      ) : (
        <>
          <div className="dark:block hidden">
            <Image
              src={
                type === 'Google' ? '/google.png' : type === 'Github' ? '/github.svg' : '/email.svg'
              }
              alt={`${type}-icon`}
              width={30}
              height={30}
            />
          </div>
          <div className="dark:hidden block">
            <Image
              src={
                type === 'Google'
                  ? '/google.png'
                  : type === 'Github'
                    ? '/github_light.svg'
                    : '/email_light.svg'
              }
              alt={`${type}-icon`}
              width={30}
              height={30}
            />
          </div>
          <span className="mr-2 dark:text-white text-[#191919]">
            {operation === 'login' ? 'Sign in with ' + type : 'Sign up with ' + type}
          </span>
        </>
      )}
    </button>
  );
}

export default OAuthButton;
