function setEltContents(sel, value, contents) {
	
	document.querySelector(sel).outerHTML = 
	
	document.querySelector(sel)
		.outerHTML.replaceAll(`{{${value}}}`, contents);
}


setEltContents(
'#top-nav', 'contents',

`
<img id="logo" src="/assets/Logo.svg" class="noselect"></img>
<p id="logo-text">TOUR NILE</p>
<div id='links' class="noselect">
	<a href="/">Intro</a>
	<a href="/tour-sites">Sites</a>
	<a target='_blank' href="https://mail.google.com/mail/u/0/?fs=1&to=arahmi27@dartmouthschools.org&tf=cm">Contact</a>
</div>
<div id="links-drop">
	<div id="stack"><p>Links</p>
	<div id='drop' class="noselect">
		<a href="/">Intro</a>
		<a href="/tour-sites">Sites</a>
		<a target='_blank' href="https://mail.google.com/mail/u/0/?fs=1&to=arahmi27@dartmouthschools.org&tf=cm">Contact</a>
	</div></div>
	
</div>`)

setEltContents('#article', 'Abt-Tour', 
`This tour is a once in a lifetime experience 
and you may be your only chance to see the 
wonders of the ancient Egyptian world. 
We see the magnificent Abu Simbel of the Ramses II reign. 
and the accomplishments of Hatshepsut
in her own temple. We will see the giza 
pyramids built by Khufu and his line. 
These wonders cannot be shown by images or videos. 
You have to see these wonders in person.`)

setEltContents('#article', 'Tour-Site1',
`<h2>Abu Simbel</h2>
<p>The monument to Ramses II at Abu-Simbel is one of the largest and most magnificant. Standing 90 feet tall, the size defies expectation. The statue and is a perfect example of Ramses II massive ego with his accomplishments</p>`)

setEltContents('#article', 'Tour-Site2',
`<h2></h2>
<p>The monument to Ramses II at Abu-Simbel is one of the largest and most magnificant. Standing 90 feet tall, the size defies expectation. The statue and is a perfect example of Ramses II massive ego with his accomplishments</p>`)

