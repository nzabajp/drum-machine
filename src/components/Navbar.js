import React from 'react'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'

export default function Navbar() {
  return (
    <nav>
    	<h2>Drum Machine</h2>
    	<ul className="socials">
    		<li>
    			<a href="https://www.linkedin.com/in/nzabajp" target="_blank" rel="noreferrer">
    				<img 
    					className="linkedin" 
    					src={linkedin} 
    					alt="linkedin" 
    				/>
    			</a>
    		</li>
    		<li>
    			<a href="https://github.com/nzabajp" target="_blank" rel="noreferrer">
    				<img 
    					className="github" 
    					src={github} 
    					alt="github" 
    				/>
    			</a>
    		</li>
    	</ul>
    </nav>
  );
}

