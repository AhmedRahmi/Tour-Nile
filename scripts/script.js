function rickRoll () {
	window.location.replace('/rickroll')
}

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
	<a href="/buy-tickets">Purchase</a>
	<a href="/">Home</a>
	<a href="/tour-sites">Sites</a>
	<a target='_blank' href="https://mail.google.com/mail/u/0/?fs=1&to=arahmi27@dartmouthschools.org&tf=cm">Contact</a>
</div>
<div id="links-drop">
	<div id="stack"><p>Links</p>
	<div id='drop' class="noselect">
		<a href="/buy-tickets">Purchase</a>
		<a href="/">Home</a>
		<a href="/tour-sites">Sites</a>
		<a target='_blank' href="https://mail.google.com/mail/u/0/?fs=1&to=arahmi27@dartmouthschools.org&tf=cm">Contact</a>
	</div></div>
	
</div>`)

setEltContents('#article', 'Abt-Tour', 
`This tour is a once in a lifetime experience 
and you may be your only chance to see the wonders of the ancient Egyptian world. The way of the pharoahs, the powerful kings that ruled egypt and lead battles against enemies, can only be seen by seeing in person their monuments. We will see the magnificent Abu Simbel of the Ramses II reign. and the accomplishments of Hatshepsut in her own temple. We will see the giza pyramids built by Khufu and his line. These wonders tied to the magnificance of the pharoahs that built them, cannot be shown by images or videos. You have to see these wonders in person. `)

setEltContents('#article', 'Tour-Site1',
`<h2>Abu Simbel</h2>
<p>The monument to Ramses II at Abu-Simbel is one of the largest and most magnificant. Standing 90 feet tall, the size defies expectation. The statue and is a perfect example of Ramses II massive ego with his accomplishments. This magnificent monument was the capital of egypt during the magnificent pharaoh ramses the great reign. This pharaoh had such a big ego that he carved a monument to himself  into the side of a cliff. He was in his right though. Ramses II conquered Egypt's enemies and sustained peace throughout the nation. The monument stands about 100 feet high and is a massive wonder that dwarfs imagination. This is a must see if you want ancient egyptian.</p>`)

setEltContents('#article', 'Tour-Site2',
`<h2>Dier El-Baheri</h2>
<p>The mortuary temple to Hatshepsut is one of the most spectacular momuments of it's time. it stands 90 feet tall and is about the size of eleven football fields. Even still raw comparison hasn't yet put the grandness of this temple into scale. seeing this temple in real life is the only way to understand the massive size of the Dier El-Baheri. Not oly will th size of the temple amaze you, so will it's looks. It is amazing to look at with stunning architecture. any photo or video can't capture the magnificance of Dier El-Baheri.  the Only visiting this monument can justify the stunning magnificance. The powerful pharaoh behind this building, Hatshepsut, wrote her greatest achievements inside the temple. Initiating trade to the kingdom of punt, and improving the economy of egypt. To see how rich the empire was at the time you have to see this grand temple to the pharaoh that made egypt so rich.</p>`)

setEltContents('#article', 'Tour-Site3',
`<h2>El-Amarna</h2>
<p>
This sight may not seem much more than rubble on the surface, but the story of El-Amarna is interesting. This was the capital of Egypt when Akenaten was ruling. Akhenaten revoked the warship of the traditional gods and instead opted for the worship of Aten, the sun disk. This had backlash from the powerful Priests of Amun-Ra, who after his death, hid his body and tried to remove all mention of Akenaten. The city was leveled to rubble after the priest was done with it.
</p>`)

setEltContents('#article', 'Tour-Site4', 
`<h2>The Giza Pyramids</h2>
<p>
Any tour of Egypt wouldn’t be complete without stopping at the giza pyramids. They were the last and most magnificent pyramids. The greatest one stands at more than 400 feet. You can only experience the greatness of the feat by seeing the pyramids in person. You can only understand the power of the pharaohs by seeing the permanent facets that they built. Take an example in Khufu, who built the great pyramid, was depicted as a cruel leader. He was he had lots of power and that is reflected in his Great Pyramid</p>`)

