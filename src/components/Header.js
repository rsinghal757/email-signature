import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return <header className="site-header"><div className="header-inner"><Link to="/" className="wordmark"><span className="wordmark-icon">✳</span><span>email<span className="wordmark-light">signature</span><small>THE SIGNATURE BUILDER</small></span></Link><a className="support-link" href="https://buymeacoffee.com/rohitsinghal" target="_blank" rel="noopener noreferrer">Support this project <span>↗</span></a></div></header>;
}
export default Header;
