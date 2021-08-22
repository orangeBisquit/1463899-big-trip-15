const offers = [{
  'type': 'taxi',
  'offers': [{
    'title': 'Upgrade to a business class',
    'price': 190,
  }, {
    'title': 'Choose the radio station',
    'price': 30,
  }, {
    'title': 'Choose temperature',
    'price': 170,
  }, {
    'title': 'Drive quickly, I\'m in a hurry',
    'price': 100,
  }, {
    'title': 'Drive slowly',
    'price': 110,
  }],
}, {
  'type': 'bus',
  'offers': [{
    'title': 'Infotainment system',
    'price': 50,
  }, {
    'title': 'Order meal',
    'price': 100,
  }, {
    'title': 'Choose seats',
    'price': 190,
  }],
}, {
  'type': 'train',
  'offers': [{
    'title': 'Book a taxi at the arrival point',
    'price': 110,
  }, {
    'title': 'Order a breakfast',
    'price': 80,
  }, {
    'title': 'Wake up at a certain time',
    'price': 140,
  }],
}, {
  'type': 'flight',
  'offers': [{
    'title': 'Choose meal',
    'price': 120,
  }, {
    'title': 'Choose seats',
    'price': 90,
  }, {
    'title': 'Upgrade to comfort class',
    'price': 120,
  }, {
    'title': 'Upgrade to business class',
    'price': 120,
  }, {
    'title': 'Add luggage',
    'price': 170,
  }, {
    'title': 'Business lounge',
    'price': 160,
  }],
}, {
  'type': 'check-in',
  'offers': [{
    'title': 'Choose the time of check-in',
    'price': 70,
  }, {
    'title': 'Choose the time of check-out',
    'price': 190,
  }, {
    'title': 'Add breakfast',
    'price': 110,
  }, {
    'title': 'Laundry',
    'price': 140,
  }, {
    'title': 'Order a meal from the restaurant',
    'price': 30,
  }],
}, {
  'type': 'sightseeing',
  'offers': [],
}, {
  'type': 'ship',
  'offers': [{
    'title': 'Choose meal',
    'price': 130,
  }, {
    'title': 'Choose seats',
    'price': 160,
  }, {
    'title': 'Upgrade to comfort class',
    'price': 170,
  }, {
    'title': 'Upgrade to business class',
    'price': 150,
  }, {
    'title': 'Add luggage',
    'price': 100,
  }, {
    'title': 'Business lounge',
    'price': 40,
  }],
}, {
  'type': 'drive',
  'offers': [{
    'title': 'Choose comfort class',
    'price': 110,
  }, {
    'title': 'Choose business class',
    'price': 180,
  }],
}, {
  'type': 'restaurant',
  'offers': [{
    'title': 'Choose live music',
    'price': 150,
  }, {
    'title': 'Choose VIP area',
    'price': 70,
  }],
}];

const destinations = [{
  'name': 'Chamonix',
  'description': 'Chamonix, for those who value comfort and coziness, with an embankment of a mighty river as a centre of attraction, full of of cozy canteens where you can try the best coffee in the Middle East.',
  'pictures': [{
    'src': 'http://picsum.photos/300/200?r=0.45476391526901105',
    'description': 'Chamonix embankment',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.566758784955685',
    'description': 'Chamonix city centre',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.3594335201582288',
    'description': 'Chamonix city centre',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.015965298341432232',
    'description': 'Chamonix kindergarten',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.232413129206684',
    'description': 'Chamonix parliament building',
  }],
}, {
  'name': 'Geneva',
  'description': 'Geneva, with a beautiful old town.',
  'pictures': [{
    'src': 'http://picsum.photos/300/200?r=0.016608600208646296',
    'description': 'Geneva zoo',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.5610019924835323',
    'description': 'Geneva street market',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.27111597018091405',
    'description': 'Geneva parliament building',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.18735026569560187',
    'description': 'Geneva embankment',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.38990166933194303',
    'description': 'Geneva biggest supermarket',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.18236379103343547',
    'description': 'Geneva biggest supermarket',
  }],
}, {
  'name': 'Amsterdam',
  'description': 'Amsterdam, is a beautiful city, a true asian pearl, in a middle of Europe, with a beautiful old town, for those who value comfort and coziness, full of of cozy canteens where you can try the best coffee in the Middle East.',
  'pictures': [{
    'src': 'http://picsum.photos/300/200?r=0.47562367158941554',
    'description': 'Amsterdam city centre',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.45796944178928234',
    'description': 'Amsterdam street market',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.009175818727754637',
    'description': 'Amsterdam central station',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.3425074151050318',
    'description': 'Amsterdam park',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.4643195654902572',
    'description': 'Amsterdam city centre',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.14996535405101508',
    'description': 'Amsterdam street market',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.469185408474907',
    'description': 'Amsterdam park',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.6732046547539619',
    'description': 'Amsterdam city centre',
  }],
}, {
  'name': 'Helsinki',
  'description': 'Helsinki, is a beautiful city, with a beautiful old town, for those who value comfort and coziness, full of of cozy canteens where you can try the best coffee in the Middle East, famous for its crowded street markets with the best street food in Asia.',
  'pictures': [{
    'src': 'http://picsum.photos/300/200?r=0.9300600706573932',
    'description': 'Helsinki parliament building',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.03495283756189438',
    'description': 'Helsinki street market',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.04530071702967242',
    'description': 'Helsinki central station',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.795215492060511',
    'description': 'Helsinki central station',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.9008893850315811',
    'description': 'Helsinki embankment',
  }],
}, {
  'name': 'Oslo',
  'description': 'Oslo, is a beautiful city, in a middle of Europe, middle-eastern paradise, with an embankment of a mighty river as a centre of attraction.',
  'pictures': [{
    'src': 'http://picsum.photos/300/200?r=0.8837486331948345',
    'description': 'Oslo central station',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.34428219240581415',
    'description': 'Oslo city centre',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.9434655547853141',
    'description': 'Oslo street market',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.6548760494327122',
    'description': 'Oslo central station',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.6654320302914012',
    'description': 'Oslo embankment',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.8881672304114943',
    'description': 'Oslo parliament building',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.9749010149060713',
    'description': 'Oslo street market',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.03452679944983106',
    'description': 'Oslo zoo',
  }],
}, {
  'name': 'Kopenhagen',
  'description': 'Kopenhagen, a true asian pearl, for those who value comfort and coziness, with an embankment of a mighty river as a centre of attraction.',
  'pictures': [{
    'src': 'http://picsum.photos/300/200?r=0.5457052728751646',
    'description': 'Kopenhagen park',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.07149730750342931',
    'description': 'Kopenhagen street market',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.985349404396237',
    'description': 'Kopenhagen parliament building',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.39281748754404067',
    'description': 'Kopenhagen zoo',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.3894418629536598',
    'description': 'Kopenhagen park',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.8992727122383115',
    'description': 'Kopenhagen city centre',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.18374049717483598',
    'description': 'Kopenhagen zoo',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.740763945426022',
    'description': 'Kopenhagen kindergarten',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.24402255808869722',
    'description': 'Kopenhagen biggest supermarket',
  }],
}, {
  'name': 'Den Haag',
  'description': 'Den Haag, a true asian pearl, for those who value comfort and coziness.',
  'pictures': [{
    'src': 'http://picsum.photos/300/200?r=0.28962151750027676',
    'description': 'Den Haag city centre',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.2481022527821375',
    'description': 'Den Haag biggest supermarket',
  }],
}, {
  'name': 'Rotterdam',
  'description': 'Rotterdam, a true asian pearl, middle-eastern paradise, a perfect place to stay with a family.',
  'pictures': [{
    'src': 'http://picsum.photos/300/200?r=0.12963271918986297',
    'description': 'Rotterdam kindergarten',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.30559572476169805',
    'description': 'Rotterdam kindergarten',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.9235916896548875',
    'description': 'Rotterdam central station',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.7134585067868473',
    'description': 'Rotterdam biggest supermarket',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.9455833778904308',
    'description': 'Rotterdam park',
  }],
}, {
  'name': 'Saint Petersburg',
  'description': 'Saint Petersburg, in a middle of Europe, for those who value comfort and coziness, famous for its crowded street markets with the best street food in Asia.',
  'pictures': [{
    'src': 'http://picsum.photos/300/200?r=0.7763033410773386',
    'description': 'Saint Petersburg embankment',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.4279663393686226',
    'description': 'Saint Petersburg parliament building',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.5035253199128416',
    'description': 'Saint Petersburg city centre',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.13734249350260286',
    'description': 'Saint Petersburg street market',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.895882923888863',
    'description': 'Saint Petersburg kindergarten',
  }],
}, {
  'name': 'Moscow',
  'description': 'Moscow, a true asian pearl, middle-eastern paradise.',
  'pictures': [{
    'src': 'http://picsum.photos/300/200?r=0.8687522217243053',
    'description': 'Moscow central station',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.2987981401770865',
    'description': 'Moscow biggest supermarket',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.6596195641289535',
    'description': 'Moscow embankment',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.6740469855425761',
    'description': 'Moscow zoo',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.6911727917783943',
    'description': 'Moscow park',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.8943845114658535',
    'description': 'Moscow biggest supermarket',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.6808426824384126',
    'description': 'Moscow park',
  }],
}, {
  'name': 'Sochi',
  'description': 'Sochi, in a middle of Europe, with an embankment of a mighty river as a centre of attraction, full of of cozy canteens where you can try the best coffee in the Middle East.',
  'pictures': [{
    'src': 'http://picsum.photos/300/200?r=0.12520876544288417',
    'description': 'Sochi kindergarten',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.21939095360909455',
    'description': 'Sochi zoo',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.8464406295070563',
    'description': 'Sochi city centre',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.5673310336290165',
    'description': 'Sochi city centre',
  }],
}, {
  'name': 'Tokio',
  'description': 'Tokio, with a beautiful old town, middle-eastern paradise.',
  'pictures': [{
    'src': 'http://picsum.photos/300/200?r=0.5993197713092049',
    'description': 'Tokio kindergarten',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.6113710925410762',
    'description': 'Tokio zoo',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.3241783012426729',
    'description': 'Tokio embankment',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.6855917843929746',
    'description': 'Tokio biggest supermarket',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.021231085910505154',
    'description': 'Tokio biggest supermarket',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.6597351106188911',
    'description': 'Tokio kindergarten',
  }],
}, {
  'name': 'Kioto',
  'description': 'Kioto, is a beautiful city, with crowded streets, with an embankment of a mighty river as a centre of attraction.',
  'pictures': [{
    'src': 'http://picsum.photos/300/200?r=0.1568798597505523',
    'description': 'Kioto street market',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.4245018696259355',
    'description': 'Kioto city centre',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.15956407022805097',
    'description': 'Kioto city centre',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.021941530605843917',
    'description': 'Kioto zoo',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.9547295889545451',
    'description': 'Kioto zoo',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.8701038477084728',
    'description': 'Kioto zoo',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.41386360150217083',
    'description': 'Kioto embankment',
  }],
}, {
  'name': 'Nagasaki',
  'description': 'Nagasaki, is a beautiful city, in a middle of Europe, for those who value comfort and coziness.',
  'pictures': [{
    'src': 'http://picsum.photos/300/200?r=0.4179074264063216',
    'description': 'Nagasaki central station',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.8040757579306836',
    'description': 'Nagasaki city centre',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.7554375516777316',
    'description': 'Nagasaki central station',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.8627891858260301',
    'description': 'Nagasaki zoo',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.35122793472998226',
    'description': 'Nagasaki embankment',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.6767655329783802',
    'description': 'Nagasaki biggest supermarket',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.3689586984682329',
    'description': 'Nagasaki zoo',
  }],
}, {
  'name': 'Hiroshima',
  'description': 'Hiroshima, for those who value comfort and coziness, a perfect place to stay with a family.',
  'pictures': [{
    'src': 'http://picsum.photos/300/200?r=0.39437255603268606',
    'description': 'Hiroshima parliament building',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.8862492829884243',
    'description': 'Hiroshima street market',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.9384914120367531',
    'description': 'Hiroshima zoo',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.8132366006439296',
    'description': 'Hiroshima biggest supermarket',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.36820675880837417',
    'description': 'Hiroshima kindergarten',
  }],
}, {
  'name': 'Berlin',
  'description': 'Berlin, is a beautiful city.',
  'pictures': [{
    'src': 'http://picsum.photos/300/200?r=0.053914426152660955',
    'description': 'Berlin central station',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.8067215644126844',
    'description': 'Berlin parliament building',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.9903116868970463',
    'description': 'Berlin park',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.9676400937586105',
    'description': 'Berlin street market',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.2708775549981015',
    'description': 'Berlin parliament building',
  }],
}, {
  'name': 'Munich',
  'description': 'Munich, with a beautiful old town, famous for its crowded street markets with the best street food in Asia.',
  'pictures': [{
    'src': 'http://picsum.photos/300/200?r=0.7399151759739422',
    'description': 'Munich parliament building',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.9809672784464474',
    'description': 'Munich parliament building',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.2241367027254062',
    'description': 'Munich kindergarten',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.6518342758833815',
    'description': 'Munich street market',
  }],
}, {
  'name': 'Frankfurt',
  'description': 'Frankfurt, a true asian pearl, with crowded streets, with a beautiful old town, a perfect place to stay with a family.',
  'pictures': [{
    'src': 'http://picsum.photos/300/200?r=0.5997803513254303',
    'description': 'Frankfurt central station',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.04920015129374611',
    'description': 'Frankfurt park',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.235959793642194',
    'description': 'Frankfurt kindergarten',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.022416665563709026',
    'description': 'Frankfurt city centre',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.16194044289184406',
    'description': 'Frankfurt biggest supermarket',
  }],
}, {
  'name': 'Vien',
  'description': 'Vien, with crowded streets, with a beautiful old town, a perfect place to stay with a family, famous for its crowded street markets with the best street food in Asia.',
  'pictures': [{
    'src': 'http://picsum.photos/300/200?r=0.5992044299695509',
    'description': 'Vien park',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.34960539038527383',
    'description': 'Vien biggest supermarket',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.9593789216584814',
    'description': 'Vien city centre',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.4271735365969387',
    'description': 'Vien street market',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.7017792391850688',
    'description': 'Vien street market',
  }],
}, {
  'name': 'Rome',
  'description': 'Rome, middle-eastern paradise, for those who value comfort and coziness, with an embankment of a mighty river as a centre of attraction.',
  'pictures': [{
    'src': 'http://picsum.photos/300/200?r=0.7474329810341251',
    'description': 'Rome kindergarten',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.23738555998464594',
    'description': 'Rome parliament building',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.28752196844896183',
    'description': 'Rome kindergarten',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.660496437674837',
    'description': 'Rome city centre',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.19342509903293004',
    'description': 'Rome biggest supermarket',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.6413184272856436',
    'description': 'Rome park',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.37393098998103125',
    'description': 'Rome park',
  }],
}, {
  'name': 'Naples',
  'description': 'Naples, a true asian pearl, in a middle of Europe, with an embankment of a mighty river as a centre of attraction.',
  'pictures': [{
    'src': 'http://picsum.photos/300/200?r=0.7659970158260954',
    'description': 'Naples biggest supermarket',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.4088270274560222',
    'description': 'Naples parliament building',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.6033473218600653',
    'description': 'Naples central station',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.2560886094647772',
    'description': 'Naples parliament building',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.7220763698765966',
    'description': 'Naples street market',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.4035946143951301',
    'description': 'Naples city centre',
  }],
}, {
  'name': 'Venice',
  'description': 'Venice, with crowded streets, for those who value comfort and coziness, with an embankment of a mighty river as a centre of attraction.',
  'pictures': [{
    'src': 'http://picsum.photos/300/200?r=0.2853274165617381',
    'description': 'Venice city centre',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.8046439964065331',
    'description': 'Venice biggest supermarket',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.6408645520974348',
    'description': 'Venice embankment',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.5357167192334931',
    'description': 'Venice city centre',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.4109082451246846',
    'description': 'Venice central station',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.5199280229302259',
    'description': 'Venice biggest supermarket',
  }],
}, {
  'name': 'Milan',
  'description': 'Milan, with an embankment of a mighty river as a centre of attraction, famous for its crowded street markets with the best street food in Asia.',
  'pictures': [{
    'src': 'http://picsum.photos/300/200?r=0.9693437887824545',
    'description': 'Milan zoo',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.4836989315821576',
    'description': 'Milan biggest supermarket',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.11759759125779357',
    'description': 'Milan central station',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.18577819842657206',
    'description': 'Milan street market',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.9182911081609781',
    'description': 'Milan central station',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.14342454204096278',
    'description': 'Milan kindergarten',
  }],
}, {
  'name': 'Monaco',
  'description': 'Monaco, with a beautiful old town, famous for its crowded street markets with the best street food in Asia.',
  'pictures': [{
    'src': 'http://picsum.photos/300/200?r=0.34670889044856357',
    'description': 'Monaco kindergarten',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.6022328469183784',
    'description': 'Monaco street market',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.7108440824975608',
    'description': 'Monaco park',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.029303521720762005',
    'description': 'Monaco kindergarten',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.8470336900972602',
    'description': 'Monaco central station',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.3775265689923353',
    'description': 'Monaco embankment',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.4340416533647362',
    'description': 'Monaco city centre',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.15134723189936694',
    'description': 'Monaco street market',
  }],
}, {
  'name': 'Paris',
  'description': 'Paris, with crowded streets, in a middle of Europe, with a beautiful old town.',
  'pictures': [{
    'src': 'http://picsum.photos/300/200?r=0.21826201095908448',
    'description': 'Paris central station',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.4726223860429499',
    'description': 'Paris zoo',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.6362946219342007',
    'description': 'Paris kindergarten',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.27789828249488857',
    'description': 'Paris kindergarten',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.47527959161246414',
    'description': 'Paris street market',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.2551056272373238',
    'description': 'Paris street market',
  }],
}, {
  'name': 'Barcelona',
  'description': 'Barcelona, for those who value comfort and coziness, full of of cozy canteens where you can try the best coffee in the Middle East.',
  'pictures': [{
    'src': 'http://picsum.photos/300/200?r=0.6747362176715934',
    'description': 'Barcelona kindergarten',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.020453712316566453',
    'description': 'Barcelona city centre',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.7580902656246251',
    'description': 'Barcelona embankment',
  }],
}, {
  'name': 'Valencia',
  'description': 'Valencia, is a beautiful city, a true asian pearl, with an embankment of a mighty river as a centre of attraction, famous for its crowded street markets with the best street food in Asia.',
  'pictures': [{
    'src': 'http://picsum.photos/300/200?r=0.27512806820320757',
    'description': 'Valencia parliament building',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.37950273918812316',
    'description': 'Valencia city centre',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.264504953750349',
    'description': 'Valencia kindergarten',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.5823351563750878',
    'description': 'Valencia embankment',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.41547020670552093',
    'description': 'Valencia biggest supermarket',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.28164663667035184',
    'description': 'Valencia parliament building',
  }],
}, {
  'name': 'Madrid',
  'description': 'Madrid, middle-eastern paradise, for those who value comfort and coziness.',
  'pictures': [{
    'src': 'http://picsum.photos/300/200?r=0.2989558307423925',
    'description': 'Madrid biggest supermarket',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.38349506704621694',
    'description': 'Madrid kindergarten',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.128580024607571',
    'description': 'Madrid city centre',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.796289646036177',
    'description': 'Madrid park',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.08798486986510357',
    'description': 'Madrid street market',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.7958516162662075',
    'description': 'Madrid central station',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.14915718802652744',
    'description': 'Madrid parliament building',
  }, {
    'src': 'http://picsum.photos/300/200?r=0.19249532377823542',
    'description': 'Madrid biggest supermarket',
  }],
}];

const points = [{
  'id': '0',
  'type': 'ship',
  'date_from': '2021-08-18T22:17:08.091Z',
  'date_to': '2021-08-19T12:33:31.077Z',
  'destination': {
    'name': 'Nagasaki',
    'description': 'Nagasaki, full of of cozy canteens where you can try the best coffee in the Middle East, a perfect place to stay with a family.',
    'pictures': [{
      'src': 'http://picsum.photos/300/200?r=0.3883941441597436',
      'description': 'Nagasaki zoo',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.6097914176478176',
      'description': 'Nagasaki kindergarten',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.27401451047337866',
      'description': 'Nagasaki parliament building',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.42465889830970727',
      'description': 'Nagasaki street market',
    }],
  },
  'base_price': 600,
  'is_favorite': true,
  'offers': [{
    'title': 'Upgrade to business class',
    'price': 150,
  }, {
    'title': 'Business lounge',
    'price': 40,
  }],
}, {
  'id': '1',
  'type': 'drive',
  'date_from': '2021-08-19T12:33:31.077Z',
  'date_to': '2021-08-20T02:40:18.653Z',
  'destination': {
    'name': 'Paris',
    'description': 'Paris, is a beautiful city, in a middle of Europe, full of of cozy canteens where you can try the best coffee in the Middle East.',
    'pictures': [{
      'src': 'http://picsum.photos/300/200?r=0.3609966051328801',
      'description': 'Paris zoo',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.39437851890933984',
      'description': 'Paris city centre',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.7776957263236983',
      'description': 'Paris embankment',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.9181641527188771',
      'description': 'Paris parliament building',
    }],
  },
  'base_price': 600,
  'is_favorite': false,
  'offers': [{
    'title': 'Choose comfort class',
    'price': 110,
  }, {
    'title': 'Choose business class',
    'price': 180,
  }],
}, {
  'id': '2',
  'type': 'bus',
  'date_from': '2021-08-20T02:40:18.653Z',
  'date_to': '2021-08-20T08:41:31.932Z',
  'destination': {
    'name': 'Tokio',
    'description': 'Tokio, with an embankment of a mighty river as a centre of attraction.',
    'pictures': [{
      'src': 'http://picsum.photos/300/200?r=0.9509907502004058',
      'description': 'Tokio central station',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.6376943970851441',
      'description': 'Tokio central station',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.22890675485752476',
      'description': 'Tokio kindergarten',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.5773938673792569',
      'description': 'Tokio park',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.5432140369834004',
      'description': 'Tokio embankment',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.4202786300111083',
      'description': 'Tokio street market',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.06178201241995329',
      'description': 'Tokio central station',
    }],
  },
  'base_price': 1100,
  'is_favorite': true,
  'offers': [{
    'title': 'Infotainment system',
    'price': 50,
  }, {
    'title': 'Order meal',
    'price': 100,
  }, {
    'title': 'Choose seats',
    'price': 190,
  }],
}, {
  'id': '3',
  'type': 'check-in',
  'date_from': '2021-08-20T08:41:31.932Z',
  'date_to': '2021-08-21T05:11:45.086Z',
  'destination': {
    'name': 'Kopenhagen',
    'description': 'Kopenhagen, with crowded streets, in a middle of Europe, with an embankment of a mighty river as a centre of attraction.',
    'pictures': [{
      'src': 'http://picsum.photos/300/200?r=0.345107240483878',
      'description': 'Kopenhagen zoo',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.9800559704379768',
      'description': 'Kopenhagen city centre',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.2264746202052772',
      'description': 'Kopenhagen embankment',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.5065729058045891',
      'description': 'Kopenhagen city centre',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.9110066385055751',
      'description': 'Kopenhagen street market',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.29277560751824017',
      'description': 'Kopenhagen parliament building',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.5500387535149356',
      'description': 'Kopenhagen kindergarten',
    }],
  },
  'base_price': 900,
  'is_favorite': false,
  'offers': [{
    'title': 'Choose the time of check-in',
    'price': 70,
  }, {
    'title': 'Order a meal from the restaurant',
    'price': 30,
  }],
}, {
  'id': '4',
  'type': 'check-in',
  'date_from': '2021-08-21T05:11:45.086Z',
  'date_to': '2021-08-21T15:22:31.606Z',
  'destination': {
    'name': 'Venice',
    'description': 'Venice, is a beautiful city, with a beautiful old town, middle-eastern paradise.',
    'pictures': [{
      'src': 'http://picsum.photos/300/200?r=0.649626253263085',
      'description': 'Venice embankment',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.9675464075290672',
      'description': 'Venice central station',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.07741924843144177',
      'description': 'Venice parliament building',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.8343446878347374',
      'description': 'Venice kindergarten',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.8556772340940901',
      'description': 'Venice embankment',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.598179189517724',
      'description': 'Venice embankment',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.8325519372703862',
      'description': 'Venice park',
    }],
  },
  'base_price': 400,
  'is_favorite': true,
  'offers': [{
    'title': 'Add breakfast',
    'price': 110,
  }, {
    'title': 'Laundry',
    'price': 140,
  }],
}, {
  'id': '5',
  'type': 'bus',
  'date_from': '2021-08-21T15:22:31.606Z',
  'date_to': '2021-08-22T09:45:32.077Z',
  'destination': {
    'name': 'Paris',
    'description': 'Paris, in a middle of Europe, with an embankment of a mighty river as a centre of attraction, famous for its crowded street markets with the best street food in Asia.',
    'pictures': [{
      'src': 'http://picsum.photos/300/200?r=0.003288570539638158',
      'description': 'Paris biggest supermarket',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.5073308472699227',
      'description': 'Paris biggest supermarket',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.23062382010793336',
      'description': 'Paris park',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.8931265362276566',
      'description': 'Paris street market',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.406055070129516',
      'description': 'Paris city centre',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.17853206681862788',
      'description': 'Paris kindergarten',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.3124983305538853',
      'description': 'Paris embankment',
    }],
  },
  'base_price': 400,
  'is_favorite': true,
  'offers': [{
    'title': 'Infotainment system',
    'price': 50,
  }, {
    'title': 'Order meal',
    'price': 100,
  }, {
    'title': 'Choose seats',
    'price': 190,
  }],
}, {
  'id': '6',
  'type': 'bus',
  'date_from': '2021-08-22T09:45:32.077Z',
  'date_to': '2021-08-23T05:59:39.646Z',
  'destination': {
    'name': 'Munich',
    'description': 'Munich, is a beautiful city.',
    'pictures': [{
      'src': 'http://picsum.photos/300/200?r=0.6658392284058372',
      'description': 'Munich parliament building',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.6409748738332968',
      'description': 'Munich parliament building',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.3725779853794102',
      'description': 'Munich central station',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.9620916290364341',
      'description': 'Munich kindergarten',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.31803591582006296',
      'description': 'Munich street market',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.07690867253254496',
      'description': 'Munich parliament building',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.8381197086461525',
      'description': 'Munich city centre',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.5680733705958172',
      'description': 'Munich park',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.7626172558747424',
      'description': 'Munich park',
    }],
  },
  'base_price': 300,
  'is_favorite': true,
  'offers': [{
    'title': 'Infotainment system',
    'price': 50,
  }, {
    'title': 'Order meal',
    'price': 100,
  }, {
    'title': 'Choose seats',
    'price': 190,
  }],
}, {
  'id': '7',
  'type': 'taxi',
  'date_from': '2021-08-23T05:59:39.646Z',
  'date_to': '2021-08-23T14:17:38.934Z',
  'destination': {
    'name': 'Tokio',
    'description': 'Tokio, is a beautiful city, middle-eastern paradise.',
    'pictures': [{
      'src': 'http://picsum.photos/300/200?r=0.8775054791799828',
      'description': 'Tokio street market',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.08882460656606095',
      'description': 'Tokio street market',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.9789097341614685',
      'description': 'Tokio kindergarten',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.9386491172648808',
      'description': 'Tokio central station',
    }],
  },
  'base_price': 1100,
  'is_favorite': false,
  'offers': [{
    'title': 'Upgrade to a business class',
    'price': 190,
  }, {
    'title': 'Choose the radio station',
    'price': 30,
  }, {
    'title': 'Choose temperature',
    'price': 170,
  }, {
    'title': 'Drive quickly, I\'m in a hurry',
    'price': 100,
  }, {
    'title': 'Drive slowly',
    'price': 110,
  }],
}, {
  'id': '8',
  'type': 'train',
  'date_from': '2021-08-23T14:17:38.934Z',
  'date_to': '2021-08-23T23:49:49.050Z',
  'destination': {
    'name': 'Paris',
    'description': 'Paris, is a beautiful city, a true asian pearl, full of of cozy canteens where you can try the best coffee in the Middle East, famous for its crowded street markets with the best street food in Asia.',
    'pictures': [{
      'src': 'http://picsum.photos/300/200?r=0.493123335609573',
      'description': 'Paris street market',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.5531938120977256',
      'description': 'Paris zoo',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.7172486518341581',
      'description': 'Paris embankment',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.7637638290977611',
      'description': 'Paris city centre',
    }],
  },
  'base_price': 700,
  'is_favorite': false,
  'offers': [{
    'title': 'Book a taxi at the arrival point',
    'price': 110,
  }, {
    'title': 'Order a breakfast',
    'price': 80,
  }, {
    'title': 'Wake up at a certain time',
    'price': 140,
  }],
}, {
  'id': '9',
  'type': 'drive',
  'date_from': '2021-08-23T23:49:49.050Z',
  'date_to': '2021-08-24T22:03:20.405Z',
  'destination': {
    'name': 'Chamonix',
    'description': 'Chamonix, is a beautiful city, a true asian pearl, for those who value comfort and coziness, full of of cozy canteens where you can try the best coffee in the Middle East, famous for its crowded street markets with the best street food in Asia.',
    'pictures': [{
      'src': 'http://picsum.photos/300/200?r=0.7824153616284284',
      'description': 'Chamonix parliament building',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.12349858065713004',
      'description': 'Chamonix central station',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.8023638694108681',
      'description': 'Chamonix central station',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.7357872206056519',
      'description': 'Chamonix city centre',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.8680107921819815',
      'description': 'Chamonix park',
    }],
  },
  'base_price': 1100,
  'is_favorite': false,
  'offers': [{
    'title': 'Choose comfort class',
    'price': 110,
  }, {
    'title': 'Choose business class',
    'price': 180,
  }],
}, {
  'id': '10',
  'type': 'ship',
  'date_from': '2021-08-24T22:03:20.405Z',
  'date_to': '2021-08-25T18:41:12.516Z',
  'destination': {
    'name': 'Valencia',
    'description': 'Valencia, in a middle of Europe, a perfect place to stay with a family.',
    'pictures': [{
      'src': 'http://picsum.photos/300/200?r=0.33913642823885315',
      'description': 'Valencia kindergarten',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.9222758551716645',
      'description': 'Valencia parliament building',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.8098446525949707',
      'description': 'Valencia park',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.1766621530058068',
      'description': 'Valencia central station',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.05018099526118447',
      'description': 'Valencia kindergarten',
    }],
  },
  'base_price': 600,
  'is_favorite': false,
  'offers': [{
    'title': 'Choose seats',
    'price': 160,
  }, {
    'title': 'Business lounge',
    'price': 40,
  }],
}, {
  'id': '11',
  'type': 'check-in',
  'date_from': '2021-08-25T18:41:12.516Z',
  'date_to': '2021-08-26T07:05:27.076Z',
  'destination': {
    'name': 'Madrid',
    'description': 'Madrid, is a beautiful city, middle-eastern paradise, famous for its crowded street markets with the best street food in Asia.',
    'pictures': [{
      'src': 'http://picsum.photos/300/200?r=0.8700853629565679',
      'description': 'Madrid central station',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.8856270207178847',
      'description': 'Madrid embankment',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.5834403526916581',
      'description': 'Madrid kindergarten',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.5664213350733391',
      'description': 'Madrid city centre',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.7365792722639568',
      'description': 'Madrid embankment',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.4745727082118767',
      'description': 'Madrid city centre',
    }],
  },
  'base_price': 600,
  'is_favorite': true,
  'offers': [{
    'title': 'Choose the time of check-in',
    'price': 70,
  }, {
    'title': 'Choose the time of check-out',
    'price': 190,
  }, {
    'title': 'Add breakfast',
    'price': 110,
  }],
}, {
  'id': '12',
  'type': 'ship',
  'date_from': '2021-08-26T07:05:27.076Z',
  'date_to': '2021-08-27T04:16:38.737Z',
  'destination': {
    'name': 'Rome',
    'description': 'Rome, a true asian pearl, for those who value comfort and coziness, famous for its crowded street markets with the best street food in Asia.',
    'pictures': [{
      'src': 'http://picsum.photos/300/200?r=0.45871533981679935',
      'description': 'Rome biggest supermarket',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.7941838270009733',
      'description': 'Rome zoo',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.9887675124224091',
      'description': 'Rome kindergarten',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.18634968757304526',
      'description': 'Rome zoo',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.9204435555605093',
      'description': 'Rome zoo',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.9606549014888057',
      'description': 'Rome street market',
    }],
  },
  'base_price': 1000,
  'is_favorite': true,
  'offers': [{
    'title': 'Choose meal',
    'price': 130,
  }, {
    'title': 'Upgrade to comfort class',
    'price': 170,
  }, {
    'title': 'Upgrade to business class',
    'price': 150,
  }, {
    'title': 'Business lounge',
    'price': 40,
  }],
}, {
  'id': '13',
  'type': 'ship',
  'date_from': '2021-08-27T04:16:38.737Z',
  'date_to': '2021-08-27T22:15:21.787Z',
  'destination': {
    'name': 'Monaco',
    'description': 'Monaco, for those who value comfort and coziness, a perfect place to stay with a family.',
    'pictures': [{
      'src': 'http://picsum.photos/300/200?r=0.7274013097602339',
      'description': 'Monaco park',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.14190169742234682',
      'description': 'Monaco parliament building',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.2508218276893328',
      'description': 'Monaco park',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.9590033453657179',
      'description': 'Monaco parliament building',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.9371740199535432',
      'description': 'Monaco central station',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.22740475067529764',
      'description': 'Monaco biggest supermarket',
    }],
  },
  'base_price': 1000,
  'is_favorite': true,
  'offers': [{
    'title': 'Choose meal',
    'price': 130,
  }, {
    'title': 'Upgrade to comfort class',
    'price': 170,
  }, {
    'title': 'Upgrade to business class',
    'price': 150,
  }, {
    'title': 'Add luggage',
    'price': 100,
  }, {
    'title': 'Business lounge',
    'price': 40,
  }],
}, {
  'id': '14',
  'type': 'train',
  'date_from': '2021-08-27T22:15:21.787Z',
  'date_to': '2021-08-28T08:48:55.494Z',
  'destination': {
    'name': 'Madrid',
    'description': 'Madrid, is a beautiful city, for those who value comfort and coziness, a perfect place to stay with a family.',
    'pictures': [{
      'src': 'http://picsum.photos/300/200?r=0.02880970230175328',
      'description': 'Madrid embankment',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.4426217368144256',
      'description': 'Madrid zoo',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.3799108255634278',
      'description': 'Madrid central station',
    }],
  },
  'base_price': 800,
  'is_favorite': false,
  'offers': [{
    'title': 'Book a taxi at the arrival point',
    'price': 110,
  }, {
    'title': 'Order a breakfast',
    'price': 80,
  }, {
    'title': 'Wake up at a certain time',
    'price': 140,
  }],
}, {
  'id': '15',
  'type': 'sightseeing',
  'date_from': '2021-08-28T08:48:55.494Z',
  'date_to': '2021-08-28T12:27:24.268Z',
  'destination': {
    'name': 'Saint Petersburg',
    'description': 'Saint Petersburg, with a beautiful old town, middle-eastern paradise, for those who value comfort and coziness, with an embankment of a mighty river as a centre of attraction, a perfect place to stay with a family.',
    'pictures': [{
      'src': 'http://picsum.photos/300/200?r=0.9150667532044234',
      'description': 'Saint Petersburg zoo',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.7075054179242874',
      'description': 'Saint Petersburg biggest supermarket',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.6983941463043486',
      'description': 'Saint Petersburg embankment',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.3548631296789295',
      'description': 'Saint Petersburg city centre',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.9338930573943713',
      'description': 'Saint Petersburg central station',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.8389830422995861',
      'description': 'Saint Petersburg embankment',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.7122410823470113',
      'description': 'Saint Petersburg central station',
    }],
  },
  'base_price': 900,
  'is_favorite': false,
  'offers': [],
}, {
  'id': '16',
  'type': 'check-in',
  'date_from': '2021-08-28T12:27:24.268Z',
  'date_to': '2021-08-28T22:53:39.793Z',
  'destination': {
    'name': 'Oslo',
    'description': 'Oslo, a true asian pearl, with crowded streets, middle-eastern paradise.',
    'pictures': [{
      'src': 'http://picsum.photos/300/200?r=0.0022827402780312145',
      'description': 'Oslo street market',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.8498427800170798',
      'description': 'Oslo biggest supermarket',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.7008813791808555',
      'description': 'Oslo street market',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.5275682200242207',
      'description': 'Oslo street market',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.2722373157648772',
      'description': 'Oslo city centre',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.055131157641896245',
      'description': 'Oslo parliament building',
    }],
  },
  'base_price': 600,
  'is_favorite': true,
  'offers': [{
    'title': 'Choose the time of check-in',
    'price': 70,
  }, {
    'title': 'Choose the time of check-out',
    'price': 190,
  }, {
    'title': 'Add breakfast',
    'price': 110,
  }, {
    'title': 'Laundry',
    'price': 140,
  }, {
    'title': 'Order a meal from the restaurant',
    'price': 30,
  }],
}, {
  'id': '17',
  'type': 'sightseeing',
  'date_from': '2021-08-28T22:53:39.793Z',
  'date_to': '2021-08-29T08:12:52.116Z',
  'destination': {
    'name': 'Paris',
    'description': 'Paris, is a beautiful city, a true asian pearl, middle-eastern paradise, with an embankment of a mighty river as a centre of attraction.',
    'pictures': [{
      'src': 'http://picsum.photos/300/200?r=0.22595164563599357',
      'description': 'Paris kindergarten',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.6078261448548796',
      'description': 'Paris city centre',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.7227636330393381',
      'description': 'Paris zoo',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.5459260379182949',
      'description': 'Paris parliament building',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.3633552635605162',
      'description': 'Paris city centre',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.5815944835197839',
      'description': 'Paris zoo',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.16653597472952275',
      'description': 'Paris kindergarten',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.9875045441249468',
      'description': 'Paris city centre',
    }],
  },
  'base_price': 400,
  'is_favorite': true,
  'offers': [],
}, {
  'id': '18',
  'type': 'train',
  'date_from': '2021-08-29T08:12:52.116Z',
  'date_to': '2021-08-29T19:31:56.164Z',
  'destination': {
    'name': 'Rotterdam',
    'description': 'Rotterdam, a perfect place to stay with a family.',
    'pictures': [{
      'src': 'http://picsum.photos/300/200?r=0.08945851611328837',
      'description': 'Rotterdam park',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.6528539561825983',
      'description': 'Rotterdam embankment',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.7401070462612289',
      'description': 'Rotterdam kindergarten',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.6226846297576554',
      'description': 'Rotterdam parliament building',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.7515631873494644',
      'description': 'Rotterdam park',
    }],
  },
  'base_price': 1100,
  'is_favorite': true,
  'offers': [{
    'title': 'Book a taxi at the arrival point',
    'price': 110,
  }, {
    'title': 'Order a breakfast',
    'price': 80,
  }, {
    'title': 'Wake up at a certain time',
    'price': 140,
  }],
}, {
  'id': '19',
  'type': 'taxi',
  'date_from': '2021-08-29T19:31:56.164Z',
  'date_to': '2021-08-29T22:34:26.165Z',
  'destination': {
    'name': 'Amsterdam',
    'description': 'Amsterdam, is a beautiful city, a true asian pearl, in a middle of Europe, a perfect place to stay with a family, famous for its crowded street markets with the best street food in Asia.',
    'pictures': [{
      'src': 'http://picsum.photos/300/200?r=0.07615820804560847',
      'description': 'Amsterdam kindergarten',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.34713229977643767',
      'description': 'Amsterdam zoo',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.19226725999871208',
      'description': 'Amsterdam embankment',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.23413470775672818',
      'description': 'Amsterdam park',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.7721281540882519',
      'description': 'Amsterdam street market',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.04992480177777736',
      'description': 'Amsterdam central station',
    }, {
      'src': 'http://picsum.photos/300/200?r=0.8830041044121055',
      'description': 'Amsterdam park',
    }],
  },
  'base_price': 600,
  'is_favorite': true,
  'offers': [{
    'title': 'Upgrade to a business class',
    'price': 190,
  }, {
    'title': 'Choose the radio station',
    'price': 30,
  }, {
    'title': 'Drive quickly, I\'m in a hurry',
    'price': 100,
  }, {
    'title': 'Drive slowly',
    'price': 110,
  }],
}];

export { offers, destinations, points };
