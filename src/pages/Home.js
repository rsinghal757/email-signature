import React from 'react';
import { Link } from 'react-router-dom';
import SignaturePreview from '../components/SignaturePreview';
import { TEMPLATE_REGISTRY } from '../templates/registry';
import { EXAMPLE_FORM_DATA } from '../templates/defaults';
function Home() {
  return <div className="landing"><header className="landing-header"><Link to="/" className="wordmark"><span className="wordmark-icon">✳</span><span>email<span className="wordmark-light">signature</span><small>THE SIGNATURE BUILDER</small></span></Link><a className="support-link" href="https://buymeacoffee.com/rohitsinghal" target="_blank" rel="noopener noreferrer">Support this project ↗</a></header>
    <main className="hero"><div className="hero-copy"><span className="eyebrow">A little detail, beautifully done</span><h1>Leave a good<br /><em>last impression.</em></h1><p>A thoughtful email signature, made in minutes. Choose a design, add your details, and make every sign-off feel like you.</p><Link className="hero-button" to="/editor">Create your signature <span>↗</span></Link><div className="hero-note"><span>✳</span> Free to use. No account needed.</div></div>
    <div className="hero-visual"><div className="hero-card"><div className="email-context"><span>New message</span><span>•••</span></div><div className="hero-letter"><p>Hi there,</p><p>It was lovely connecting with you.<br />Looking forward to what comes next.</p><p>Best,</p><SignaturePreview template={TEMPLATE_REGISTRY[0]} formData={EXAMPLE_FORM_DATA} /></div></div><div className="hero-tag">A better way to sign off <span>✳</span></div></div></main>
    <footer className="landing-footer"><span>Made for the emails that matter.</span><span>YOUR NEXT SIGN-OFF STARTS HERE ↗</span></footer></div>;
}
export default Home;
