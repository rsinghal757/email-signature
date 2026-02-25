import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

function Home() {
  return (
    <section className="mx-auto grid min-h-screen max-w-screen-2xl grid-cols-1 overflow-hidden rounded-none bg-white sm:rounded-ui-xl sm:shadow-card lg:grid-cols-2">
      <div className="order-2 flex flex-col justify-center gap-5 p-5 sm:p-8 lg:order-1 lg:p-12">
        <img src="/assets/logo.svg" alt="Email Signature Logo" className="h-14 w-auto sm:h-16" />
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            Create polished Gmail signatures in minutes.
          </h1>
          <p className="max-w-xl text-base text-slate-600 sm:text-lg">
            Mobile-first editor, modern templates, and copy-ready HTML — no login, no credit card.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link to="/editor" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto">Create Signature</Button>
          </Link>
          <p className="text-sm text-slate-500">Free forever for personal and business use.</p>
        </div>
      </div>
      <div className="order-1 h-[320px] w-full bg-slate-100 lg:order-2 lg:h-auto">
        <img src="/assets/hero.png" alt="Signature preview" className="h-full w-full object-cover object-center" />
      </div>
    </section>
  );
}

export default Home;
