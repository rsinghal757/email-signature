import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen w-full pt-6 sm:pt-8 md:pt-10">
      <div className="mx-auto flex min-h-[calc(100vh-24px)] max-w-7xl flex-col md:min-h-[calc(100vh-40px)] md:flex-row">
        <div className="flex flex-col justify-center items-start gap-[42px] bg-white px-4 py-8 sm:px-6 md:w-1/2 md:px-12 lg:px-16">
          <img src="/assets/logo.svg" alt="Email Signature Logo" className="w-auto h-[72px] sm:h-[80px]" />
          <p className="max-w-[480px] text-[28px] leading-[38px] font-semibold text-[#101010] sm:text-[32px] sm:leading-[42px]">
            Create professional email signatures for Gmail.
            <br />
            For free.
          </p>

          <Link to="/editor">
            <button className="bg-[#E43349] text-white px-6 py-3 rounded-lg text-lg font-medium flex items-center justify-center h-[48px] hover:bg-red-600 transition duration-300">
              Create Signature
            </button>
          </Link>
          <p className="text-sm text-gray-600">
            No login required. No credit card required.
          </p>
        </div>
        <div
          className="h-64 w-full bg-cover bg-center md:h-auto md:w-1/2"
          style={{
            backgroundImage: "url('/assets/hero.png')",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Home;