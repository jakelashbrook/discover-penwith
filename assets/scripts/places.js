// The Variable for the div that the map will be placed in
let map;
// The Variable for the div containing the street view scene
let panorama;
// Icon Base Link 
let iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
// Things to do in the area 
let activityLocations = [{
		// Paradise Park & Jungle Barn
		coords: {
			"lat": 50.17901119615892,
			"lng": -5.425237260949429
		},
		content: `<h3>Paradise Park & Jungle Barn</h3><hr><img src="https://s3-eu-west-1.amazonaws.com/iya-news-prod.inyourarea.co.uk/2020/07/View-at-Paradise-Park-Cornwall.jpg" class="mb-3 iw-image rounded-circle"><p>With over 1000 birds and animals, exotic gardens, daily activities and a play centre for children, Paradise Park is the perfect day out for the whole family.</p><a href="https://www.paradisepark.co.uk/" target="_blank" class="btn btn-default black">Go to Website</a>`
	}, {
		// Coast 2 Coast Go Karting
		coords: {
			"lat": 50.175417219644785,
			"lng": -5.43123206512392
		},
		content: `<h3>Coast 2 Coast Go Karting</h3><hr><img src="https://media-cdn.tripadvisor.com/media/photo-s/05/63/80/a5/coast-2-coast-karting.jpg" class="mb-3 iw-image rounded-circle"><p>For the thrill seekers Coast 2 Coast karting is the place to go, with single engine karts for 8+ and twin engine karts for 16+, make a reservation in advance and even suitable for group events.</p>
    <a href="http://www.coast2coastkarting.co.uk/" target="_blank" class="btn btn-default black">Go to Website</a>`
	}, {
		// Country Skittles Bowling 
		coords: {
			"lat": 50.152728209609606,
			"lng": -5.381139095118125
		},
		content: `<h3>Country Skittles Bowling</h3><hr><img src="https://www.cornwalls.co.uk/sites/default/files/styles/x-large/public/attractions/country-skittles-bar.jpg?itok=ZyGgqHY0" class="mb-3 iw-image rounded-circle"><p>A Great venue for a family night out or just for a group of friends, with skittle alleys, mini golf, an indoor rifle range and arcade style gaming room, there’s fun to be had for everyone. The in house restaurant has a varied menu and is famous for sizzling steaks.</p><a href="https://countryskittles.com/" target="_blank" class="btn btn-default black">Go to Website</a>`
	}, {
		// EasiGlide Segway Tours 
		coords: {
			"lat": 50.19580926266204,
			"lng": -5.410209133699252
		},
		content: `<h3>Segway Tours with EasiGlide</h3><hr><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh1f7jGhqPMiZz3xftiQFpbWIYiGMNPjmzXw&usqp=CAU" class="mb-3 iw-image rounded-circle"><p>Segway tours are so much fun after a few minutes warm up to get to grips with the motions, you’ll be riding the dunes like the wind in no time.</p><a href="https://www.cornwall.easiglide.co.uk/" target="_blank" class="btn btn-default black">Go to Website</a>`
	}, {
		//  Jubilee Geothermal Pool
		coords: {
			"lat": 50.11496667881717,
			"lng": -5.531495425419443
		},
		content: `<h3>Jubilee Geothermal Pool</h3><hr><img src="https://www.neccontract.com/getmedia/fe6a374d-26a2-4cba-bd18-cee9ebece09a/jubilee2.jpg.aspx?width=1200&height=1196&ext=.jpg" class="mb-3 iw-image rounded-circle"><p>The UK’s largest seawater pool with a geothermal pool for those that prefer the mediterranean temperatures built on the original site first opened in 1935, appropriately named for King George V’s Silver Jubilee. With a fascinating history, amazing views and a cafe on site it’s a great day for sea lovers without the sand to clean up after.</p><a href="https://jubileepool.co.uk/" target="_blank" class="btn btn-default black">Go to Website</a>`
	}, {
		//  St Michaels Mount 
		coords: {
			"lat": 50.11728024024811,
			"lng": -5.477869659318028
		},
		content: `<h3>St Michaels Mount</h3><hr><img src="https://www.visitcornwall.com/sites/default/files/styles/product_image_breakpoints_theme_visitcornwall2_tablet_1x/public/product_image/st_aubyn_estates_-_st_michaels_mount_-_credit_mike_newman.jpg?itok=b-2qUsok&timestamp=1584715709" class="mb-3 iw-image rounded-circle"><p>The Cornish counterpart to Mont-Saint-Michel in Normandy may be much smaller but still never fails to impress, take a boat over at high tide or walk along the granite path when possible, this castle is a sight to behold.</p><a href="https://www.stmichaelsmount.co.uk/" target="_blank" class="btn btn-default black">Go to Website</a>`
	}, {
		// Polgoon vineyard
		coords: {
			"lat": 50.11876129779513,
			"lng": -5.553366591338501
		},
		content: `<h3>Polgoon Vineyard</h3><hr><img src="https://i1.wp.com/www.saltysongs.com/wp-content/uploads/2017/07/Polgoon-Vineyard-and-Orchard-07567.jpg?fit=2000%2C1127&ssl=1" class="mb-3 iw-image rounded-circle"><p>Cornwalls unique sub tropical climate isn’t just great for pretty flowers and palm trees, certain areas are even perfect for grapes. Polgoon offers a delicious range of wines, ciders and soft drinks, take the full tour, go for a tasting and pick up your favourites from the on site shop.</p><a href="https://www.polgoon.com/" target="_blank" class="btn btn-default black">Go to Website</a>`
	}, {
		// Newlyn Art Gallery
		coords: {
			"lat": 50.10787532577626,
			"lng": -5.548662025181414
		},
		content: `<h3>Newlyn Art Gallery</h3><hr><img src="https://newlynartgallery.co.uk/wp-content/uploads/2020/09/Newlyn-Art-Gallery-exterior.jpg" class="mb-3 iw-image rounded-circle"><p>Cornwall’s art scene is no secret with this gallery having been operating for over 120 years, catch a glimpse of what local artists have to offer in this beautiful fishing village.</p><a href="https://newlynartgallery.co.uk/" target="_blank" class="btn btn-default black">Go to Website</a>`
	}, {
		// Tate Gallery - St. Ives
		coords: {
			"lat": 50.21483699827763,
			"lng": -5.482433022097001
		},
		content: `<h3>Tate Gallery</h3><hr><img src="https://scontent.fbrs3-1.fna.fbcdn.net/v/t1.6435-9/116168766_3759491920732467_6957483458266838350_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=6e5ad9&_nc_ohc=t0ofmWPknQsAX-yBq3f&_nc_ht=scontent.fbrs3-1.fna&oh=ba1af5fedc5afc3bd8d5a068c333129b&oe=608872E9" class="mb-3 iw-image rounded-circle"><p>1 of 4 modern British art galleries run by Tate, set right above Porthmeor beach, with a reputable cafe and plenty of exhibitions to see, it’s best to arrange tickets in advance.</p><a href="https://www.tate.org.uk/visit/tate-st-ives" target="_blank" class="btn btn-default black">Go to Website</a>`
	}, {
		// Ocean Sports - Carbis Bay
		coords: {
			"lat": 50.19891126182914,
			"lng": -5.466056308325834
		},
		content: `<h3>Ocean Sports</h3><hr><img src="https://www.oceansportscentre.co.uk/wp-content/uploads/2019/08/OceanSportsCentre.jpg" class="mb-3 iw-image rounded-circle"><p>Whichever your preferred mode of aquatic transport, there’s plenty of options for those who want to glide on the calm seas of Carbis Bay, with safety and educational accreditation you’re in safe hands with Ocean Sports.</p><a href="https://www.oceansportscentre.co.uk/" target="_blank" class="btn btn-default black">Go to Website</a>`
	}, {
		// Barbara Hepworth Museum 
		coords: {
			"lat": 50.21330398115577,
			"lng": -5.481042312864824
		},
		content: `<h3>Barbara Hepworth Museum</h3><hr><img src="https://egwt.s3.eu-west-2.amazonaws.com/uploads/mu_hepworthresize.jpg" class="mb-3 iw-image rounded-circle"><p>No doubt the most famous local artist in St. Ives, take a tour through her life in her gardens, offers many of her sculptures and see the studio where Barbara resided and created much of her work.</p><a href="https://www.tate.org.uk/visit/tate-st-ives/barbara-hepworth-museum-and-sculpture-garden" target="_blank" class="btn btn-default black">Go to Website</a>`
	}, {
		// The Leach Pottery - St. Ives
		coords: {
			"lat": 50.20675824608367,
			"lng": -5.4927634481768575
		},
		content: `<h3>Leach Pottery</h3><hr><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/The_Leach_Pottery%2C_St._Ives%2C_Cornwall.jpg/220px-The_Leach_Pottery%2C_St._Ives%2C_Cornwall.jpg" class="mb-3 iw-image rounded-circle"><p>Founded in 1920, this east meets west pottery studio has influenced the industry massively through the years, visit and view the sculptures or get involved and book a class.</p><a href="https://www.leachpottery.com/" target="_blank" class="btn btn-default black">Go to Website</a>`
	}],
	westCornwallMap = [
		coords = {
			"lat": 50.15800959744264,
			"lng": -5.538641950883955
		},
	]
	// Places to get food 
let restaurantLocations = [{
		// Philps Bakery 
		coords: {
			"lat": 50.18769829080477,
			"lng": -5.4232683384608364
		},
		content: `<h3>Philps Bakery</h3><hr><img src="https://greatscenicrailways.co.uk/wp-content/uploads/2020/06/Philps-pasty.jpg" class="mb-3 iw-image rounded-circle"><p>Arguably the best pasties in West Cornwall, their base is in Hayle but they are branching out more and more, delicious, handmade and even offer bulk buy and delivery options, don’t miss out on this traditional local treat.</p><a href="https://www.philpspasties.co.uk/" target="_blank" class="btn btn-default black">Go to Website</a>`
	}, {
		// Grameen Bangladeshi Tandoori
		coords: {
			"lat": 50.18797893581853,
			"lng": -5.421980066803308
		},
		content: `<h3>Grameen Bangladeshi Tandoori</h3><hr><img src="https://www.foodanddrinkguides.co.uk/sites/default/files/grameen_GRA9014.jpg" class="mb-3 iw-image rounded-circle"><p>Hayle’s most popular asian restaurant focusing on Bangladeshi cuisine is a must try for anyone looking to spice up their meal time, with a large menu, friendly staff and takeaway or dine in options.</p><a href="https://www.grameentandoori.co.uk/" target="_blank" class="btn btn-default black">Go to Website</a>`
	}, {
		// Lula Shack - North Quay, Hayle
		coords: {
			"lat": 50.190964189321704,
			"lng": -5.429282930974671
		},
		content: `<h3>Lula Seafood & Ribs Shack</h3><hr><img src="https://cornwall.muddystilettos.co.uk/wp-content/uploads/sites/9/2020/10/Lula_9.jpg" class="mb-3 iw-image rounded-circle"><p>One of Hayle’s newest additions on the rapidly developing North Quay area, this creole inspired menu delivered from converted shipping containers is a fantastic spot, with ample outdoor seating and amazing views.</p><br><a href="https://lulashack.co.uk/" target="_blank" class="btn btn-default black">Go to Website</a>  `
	}, {
		// Salt Kitchen & Bar
		coords: {
			"lat": 50.18416540932753,
			"lng": -5.421838037746884
		},
		content: `<h3>Salt Kitchen Bar</h3><hr><img src="https://scontent.fbrs3-1.fna.fbcdn.net/v/t1.0-9/23658793_289256531593456_1786714424088830824_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=973b4a&_nc_ohc=t5OLls5byAUAX9BCcRt&_nc_ht=scontent.fbrs3-1.fna&oh=798041195657ad892241aa58f6ea0cb8&oe=6086A515" class="mb-3 iw-image rounded-circle"><p>Dog friendly with a modern look and a relaxed atmosphere, Salt Kitchen has a menu to suit anybody, famous for their burgers and a great place to stop for some cocktails, this gem sits in the foundry region of Hayle just under the viaduct.</p><br><a href="http://www.salt-hayle.co.uk/" target="_blank" class="btn btn-default black">Go to Website</a>`
	}, {
		// Artist Residence 
		coords: {
			"lat": 50.117039559608884,
			"lng": -5.534470652810142
		},
		content: `<h3>Artist Residence</h3><hr><img src="https://images.mrandmrssmith.com/images/hotel_gallery716/3139572-artist-residence-penzance-penzance-united-kingdom.jpg" class="mb-3 iw-image rounded-circle"><p>As the name suggests this is an art fuelled Hotel and Restaurant, admire the local work on the walls whilst sipping on one of their delicious homemade fruity lemonades, a classy menu comprising high quality food combined with a chilled atmosphere makes this a lovely spot in Penzance.</p><a href="https://www.artistresidence.co.uk/our-hotels/cornwall/" target="_blank" class="btn btn-default black">Go to Website</a> `
	}, {
		// The Front Room  
		coords: {
			"lat": 50.12062926125561,
			"lng": -5.5340714691481345
		},
		content: `<h3>The Front Room</h3><hr><img src="https://cornwall.muddystilettos.co.uk/wp-content/uploads/sites/9/2017/01/coffee-bar-front-room-penzance.jpg" class="mb-3 iw-image rounded-circle"><p>As you might imagine The Front Room in Penzance is a cosy place where you can feel at home, on the main high street it’s the perfect spot to grab brunch and a delicious coffee to charge up before a heavy day of shopping in town.</p><a href="https://thefrontroompz.co.uk/" target="_blank" class="btn btn-default black">Go to Website</a> `
	}, {
		// The Vault
		coords: {
			"lat": 50.11818544578996,
			"lng": -5.53709665039366
		},
		content: `<h3>The Vault</h3><hr><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ238WNGhuPbl8MtwtEJyyayQJ9y3ymmGyQnQ&usqp=CAU" class="mb-3 iw-image rounded-circle"><p>This trendy bar in Penzance town centre is the ideal spot to grab some cocktails and share  tapas or pop in for dinner, their homemade Scotch eggs really steal the show.</p><br><a href="https://vaultpenzance.co.uk/" target="_blank" class="btn btn-default black">Go to Website</a> `
	}, {
		// The Tinners Arms 
		coords: {
			"lat": 50.191533957950284,
			"lng": -5.567740280461486
		},
		content: `<h3>The Tinners Arms</h3><hr><img src="https://common.movehut.co.uk/images/property/agent-10200/property-476091/2170958-large.jpg" class="mb-3 iw-image rounded-circle"><p>At the centre of Zennor this famous old pub is a must visit, on the most scenic bus route even having a bus named after this pub so you wash down a hearty local dish with some Cornish cyders and not have to worry about assigning your designated driver.</p><a href="https://tinnersarms.com/" target="_blank" class="btn btn-default black">Go to Website</a> `
	}, {
		// Porthminster Beach Cafe
		coords: {
			"lat": 50.20810291178557,
			"lng": -5.474970656098019
		},
		content: `<h3>Porthminster Beach Cafe</h3><hr><img src="https://boutique-retreats.co.uk/webpics/blog/Cornwall/St%20Ives/Porthminster%20Beach%20Cafe/2.jpg" class="mb-3 iw-image rounded-circle"><p>The Porthminster Beach Cafe is renowned in St Ives as being one of the hardest destinations to book a table for- and with good reason. The food and service is famous for being top notch! They offer a bit of everything- and if you want to experience it, make sure you book in advance!</p><a href="https://www.porthminstercafe.co.uk/" target="_blank" class="btn btn-default black">Go to Website</a> `
	}, {
		// La Casita
		coords: {
			"lat": 50.19240911041005,
			"lng": -5.461523177013984
		},
		content: `<h3>La Casita</h3><hr><img src="https://www.aspects-holidays.co.uk/webpics/CMS/Owners/IMG_6939.jpg" class="mb-3 iw-image rounded-circle"><p>With a subtropical feel to Cornwalls flora and fauna, a restaurant to match is essential. La Casita is a mediterranean inspired restaurant with a large selection of tapas and a varied menu paired with an extensive wine selection and decor, you’ll forget you’re in the UK.</p>
<a href="https://www.lacasitacarbisbay.co.uk/" target="_blank" class="btn btn-default black">Go to Website</a> `
	}, {
		// The Hub 
		coords: {
			"lat": 50.21312448046942,
			"lng": -5.479786020304753
		},
		content: `<h3>The Hub</h3><hr><img src="https://hubbox.co.uk/wp-content/uploads/2020/01/hubbox-hub-stIves-view.jpg" class="mb-3 iw-image rounded-circle"><p>The mother restaurant of the ever growing HubBox chain, this sea front restaurant offers amazing harbour views, famous burgers, lovely cocktails and great coffee, you can stop here anytime of the day.</p>
    <a href="https://hubbox.co.uk/restaurants/st-ives/" target="_blank" class="btn btn-default black">Go to Website</a> `
	}, {
		// Talay Thai Kitchen 
		coords: {
			"lat": 50.21345674768358,
			"lng": -5.479991481453591
		},
		content: `<h3>Talay Thai Kitchen</h3><hr><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_dpt195GPeK5dOOf1ZybgdSBTGXdPNA4N2A&usqp=CAU" class="mb-3 iw-image rounded-circle"><p>One of St. Ives newest additions boasts authentic Thai food, fusion cocktails and friendly service with a view. Stop here for some nibbles and a drink or make a night of sampling all they have to offer, reservation recommended as this is a popular location.</p><br><a href="https://talaythai.kitchen/" target="_blank" class="btn btn-default black">Go to Website</a> `
	}, ]
	// Places to enjoy nature in and around Penwith
let natureLocations = [{
	// King George V Memorial Walk 
	coords: {
		"lat": 50.18993605698237,
		"lng": -5.420973338660844
	},
	content: `<h3>King George V Memorial Walk</h3><hr><img src="https://www.hayletowncouncil.net/wp-content/uploads/2017/02/View-from-KGVMW-across-Copperhouse-Pool-DC-e1487850501688.jpg" class="iw-image rounded-circle mb-3"><p>A lovely walk stretching along Copperhouse Pool with views of the town and Hayle in Bloom gardens, with a swimming pool and a cafe at one end and the Black Bridge at the other it’s a perfect place to take a relaxing stroll.</p>`
}, {
	// Gwithian Towans   
	coords: {
		"lat": 50.222199693644264,
		"lng": -5.397588302961204
	},
	content: `<h3>Gwithian Towans</h3><hr><img src="https://www.cornwall-beaches.co.uk/public/photos/gwithian-beach.webp" class="iw-image rounded-circle mb-3"><p>Gwithian is a small historical village just outside of Hayle with sweeping sands that reveal and reclaim the church built in 490AD. The dunes provide a unique and natural barrier between the village and the beach peaking at around 70m above sea level. The beach is popular among locals and tourists alike  with sweeping views of St. Ives.</p>`
}, {
	// Tehidy Woodlands  
	coords: { // Coords closest to destination with street view available
		"lat": 50.236629552700414,
		"lng": -5.292138730716219
	},
	content: `<h3>Tehidy Woods</h3><hr><img src="https://www.aspects-holidays.co.uk/webpics/CMS/Owners/water-falls2.jpg" class="iw-image rounded-circle mb-3"><p>Tehidy is the largest woodland  in West Cornwall, with an abundance of marked trails with different degrees of length and boasting a variety of wildlife, lakes, picnic areas and a cafe there is something here for any nature lover.</p>`
}, {
	// Marazion Beach 
	coords: {
		"lat": 50.12336162662911,
		"lng": -5.475538936349833
	},
	content: `<h3>Marazion Beach</h3><hr><img src="https://www.visitcornwall.com/sites/default/files/Marazion_John%20Such.jpg" class="mb-3 iw-image rounded-circle"><p>Marazion is a small town on the outskirts of Penzance, with 2 lovely beaches, views of St. Michaels Mount, ample parking and plenty of nearby places to stop for food and drink, makes a great day out for the family.</p>`
}, {
	// Cape Cornwall 
	coords: {
		"lat": 50.12744929630078,
		"lng": -5.709197298716652
	},
	content: `<h3>Cape Cornwall</h3><hr><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Cape_Cornwall_%28Judithili%29_edit.jpg/360px-Cape_Cornwall_%28Judithili%29_edit.jpg" class="mb-3 iw-image rounded-circle"><p>One of Cornwall's most westernly situated headlands and 1 of only 2 capes in the UK, tucked in between Lands End and St. Just. With fantastic views on cliff top walks and beautiful little beach, parking and refreshments available between certain times, it’s a great place to unwind on a sunny day.</p>`
}, {
	// Morrab Gardens 
	coords: {
		"lat": 50.11542178777143,
		"lng": -5.537249088818986
	},
	content: `<h3>Morrab Gardens</h3><hr><img src="https://welcometopenzance.co.uk/wp-content/uploads/2018/04/dsc_6701.jpg" class="mb-3 iw-image rounded-circle"><p>3 acres of gardens featuring sub tropical plants giving this little patch just outside of Penzance town center a mediterranean feel making it the perfect picnic spot after some shopping in town.</p>`
}, {
	// Lands End
	coords: {
		"lat": 50.06571184123652,
		"lng": -5.713177967340861
	},
	content: `<h3>Lands End Attraction</h3><hr><img src="https://www.cornwallscottages.co.uk/assets/img/attraction_slideshow_images/scaled/ks-s-600x400-32_678_1.jpg" class="mb-3 iw-image rounded-circle"><p>Cornwalls most westernly point, the start of many challenges leading to John o’ Groats and arguably the most famous spot in the county boasts dramatic cliffs, beautiful views of the surrounding beaches an on a clear day you may even spot the Isles of Scilly, with Cafes and shops, this is a must see destination for any visitor.</p>`
}, {
	// The Island
	coords: {
		"lat": 50.21850423144252,
		"lng": -5.475955118475472
	},
	content: `<h3>The Island</h3><hr><img src="https://i.pinimg.com/originals/a7/7b/2a/a77b2a2f263dad99e0641ae38292e34b.jpg" class="mb-3 iw-image rounded-circle"><p>Just a few minutes walk from St. Ives harbour front, this isn’t technically an island as it is still attached to the mainland, but it still feels like one, arguably the best spot to watch the sunrise or to take a pasty an enjoy the views of the harbour front to one side or Porthmeor beach to the other.</p>`
}, {
	// Steeple Woods
	coords: {
		"lat": 50.197295392209085,
		"lng": -5.48014386985523
	},
	content: `<h3>Steeple Woods</h3><hr><img src="https://www.aspects-holidays.co.uk/webpics/cms/Jenna/PowerBi/Knill's-monument-from-British-Listed-Buildings.jpg" class="mb-3 iw-image rounded-circle"><p>40 acres of mature beech and oak trees nestled in at the top of St. Ives town, a dog friendly area to take a long walk also with a pyramid shaped monument at the very top providing a much needed rest spot to take in the views.</p>`
}, {
	// Porthminster Beach
	coords: {
		"lat": 50.208622923004604,
		"lng": -5.475747013675164
	},
	content: `<h3>Porthminster Beach</h3><hr><img src="https://www.visitcornwall.com/sites/default/files/styles/product_image_breakpoints_theme_visitcornwall2_tablet_1x/public/product_image/Beaches%20-%20St%20Ives%20-%20Porthminster%20-%2016%20July%202016%20-%203.%20%20Matt%20Jessop.jpg?itok=0azZgQkf&timestamp=1473170396" class="mb-3 iw-image rounded-circle"><p>St. Ives crown jewel, a small bay right underneath the train station with sweeping views of Hayle beach, this sun trap you won’t need to leave for any reason, with toilets, ample parking and plenty of places to grab a drink or some food and water sport activities.</p>`
}, {
	// Zennor Beach
	coords: {
		"lat": 50.2019468634558,
		"lng": -5.5621509255049695
	},
	content: `<h3>Zennor Beach</h3><hr><img src="https://www.forevercornwall.co.uk/wp/wp-content/uploads/beach.jpg" class="mb-3 iw-image rounded-circle"><p>A quaint village halfway between St. Ives and St. Just lies an incredibly beautiful beach, it’s on a main bus route orth taking just for the views and so you can stop off at the famous local pub or grab a luxurious farmhouse ice cream, Zennor is an idyllic village to visit. </p>`
}, {
	// Porthkidney Beach
	coords: {
		"lat": 50.19665255771039,
		"lng": -5.442983650351249
	},
	content: `<h3>Porthkidney Beach</h3><hr><img src="https://media-cdn.tripadvisor.com/media/photo-s/04/8b/d7/bb/porthkidney-sands.jpg" class="mb-3 iw-image rounded-circle"><p>Set by the mouth of the Hayle Estuary and bordering Carbis Bay, this dog friendly beach is paradise for anyone wanting to escape the busier beaches closer to either town, take the coastal path to fully appreciate the views.</p> `
}];

function initMap(selectedLocations) { // Initializes the map with the selectedLocations argument
	let myLatlng = {
		lat: 50.15592965951147,
		lng: -5.544052652338384
	};
	let map = new google.maps.Map(document.getElementById("map"), {
		zoom: 11,
		center: myLatlng,
		MapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
			mapTypeIds: ["roadmap", "terrain"], // enables two map types
		},
		icon: iconBase + "arrow.png", // customized icon 
	});
	panorama = new google.maps.StreetViewPanorama(document.getElementById('street-view'), {
		position: this.marker, // Sets the streetview to the coordinates of the clicked marker
	});
	labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Sets the default labels for markers
	// Iterates through the locations on the maps and places markers on locations
	if (selectedLocations) {
		for (let i = 0; i < selectedLocations.length; i++) {
			let marker = new google.maps.Marker({
				position: selectedLocations[i].coords, // Sets the coordinates of the selected location
				map: map,
				icon: iconBase + "arrow.png", // Adds a customized icon to the map 
			});

			// Creates the info windows
			const infowindow = new google.maps.InfoWindow({
				content: selectedLocations[i].content,
				// Adds the content connected to the locations to the infowindows
			});

			// Adds Click Listener for generating infowindows
			google.maps.event.addListener(marker, 'click', function () {  
				infowindow.close(); // Close previously opened infowindow 
				infowindow.setContent(selectedLocations[i].content);
				infowindow.open(map, marker);
				// Sets the Street View to the marker clicked on 
				panorama.setPosition(selectedLocations[i].coords);
				// Shows # TOUR section when marker is selected  
				$('#the-tour').removeClass('d-none');   
			});
            
        
		}
	}
}
// Event Listeners for Map and Categorised Markers
document.getElementById("activity-btn").addEventListener("click", () => {
	initMap(activityLocations);
});
document.getElementById("food-btn").addEventListener("click", () => {
	initMap(restaurantLocations);
});
document.getElementById("nature-btn").addEventListener("click", () => {
	initMap(natureLocations);
});
// Initializes the function calling the map
initMap();