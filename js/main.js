window.onload = function() {
	
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to an empty string ''.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".
    
    "use strict";
    var game = new Phaser.Game( 1000, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
        //game.load.image( 'logo', 'assets/planet2.png' );
		game.load.image('starfield', 'assets/starfield3.png');
		game.load.image('side', 'assets/side.png');
		game.load.image('bottom','assets/bottom.png');
		game.load.spritesheet('asteroid', 'assets/asteroid1.png', 36, 36, 19);
		game.load.spritesheet('planet', 'assets/planet1large.png', 108, 108, 19);
		game.load.spritesheet('planet2', 'assets/planet1large2.png', 108, 108, 19);
		game.load.spritesheet('eplanet', 'assets/eplanet.png',64, 64, 19);
		game.load.spritesheet('ship', 'assets/spaceship2.png', 96, 97, 14);
		game.load.audio('music', 'music/boss.ogg');
		game.load.spritesheet('boom', 'assets/blowup.png', 128, 128, 100);
		game.load.image('bullet','assets/missile.png');
		game.load.spritesheet('shock', 'assets/shocking.png', 64, 64, 32);
		
		
		
		

    }
	var clearevent;
	var hurter;
	var bottom;
	var planet2;
	var side;
	var boom;
	var lifeval;
	var life;
	var ship;
	var music;
    var starfield;
	var asteroid;
	var tstring;
	var enterstring;
	var style;
	var t;
	var text;
	var words;
	var worddisplay;
	var dic;
	var planet;
	var end;
	var assevent;
	var alevent;
	var aliensup;
	var eplanet;
	var elife;
	var elifeval;
	var shootevent;
	var bullets;
	var bullet;
	var bulletTime = 0;
	var money=0;
	var moneytext;
	var shoottime=3000;
    function create() {
		words=["mitt","that","with","they","this","have","from","word","what","were","when","your","said","there","each","which","their","will","other","about","many","then","them","these","some","would","make","like","into","time","look","more","write","number","could","people","than","first","water","been","call","find","long","down","come","made","part","over","sound","take","only","little","work","know","place","year","live","back","give","most","very","after","thing","just","name","good","sentence","think","great","where","help","through","much","before","line","right","mean","same","tell","follow","came","want","show","also","around","farm","three","small","does","another","well","large","must","even","such","because","turn","here","went","read","need","land","different","home","move","kind","hand","picture","again","change","play","spell","away","animal","house","point","page","letter","mother","answer","found","study","still","learn","should","expected","world","high","every","near","food","between","below","country","plant","last","school","father","keep","tree","never","start","city","earth","light","thought","head","under","story","left","fork","while","along","might","chose","something","seem","next","hard","open","example","begin","life","always","those","both","paper","together","group","often","important","until","children","side","feet","mile","night","walk","white","began","grow","took","river","four","carry","state","once","book","hear","stop","without","second","late","miss","idea","enough","face","watch","indian","really","almost","above","girl","sometimes","mountain","young","talk","soon","list","song","being","leave","family","computer","best","better","black","blue","bring","brown","clean","cold","done","draw","drink","eight","fall","fast","five","full","funny","gave","giving","goes","green","hold","hurt","jump","laugh","myself","pick","please","pretty","pull","ride","round","seven","shall","sing","sleep","thank","today","upon","warm","wash","wish","yellow","bake","band","bank","bell","belt","bend","bent","burger","bike","bite","blast","bled","blend","blimp","blink","bliss","block","blond","blot","bluff","blunt","bone","brag","brand","brass","brat","bred","bride","brig","brim","broke","brunt","brute","bump","bunt","bust","camp","cane","amazon","cape","cast","clad","clam","clamp","clan","clap","clasp","class","cliff","cling","clink","clip","close","clot","club","clump","clung","cone","crab","craft","cram","cramp","crib","crime","crisp","crop","crust","cure","cute","damp","dent","dime","dine","dire","dive","dope","draft","drag","drank","dress","drift","drill","drip","drop","drove","drug","drum","dump","dust","fact","fade","fell","felt","file","fill","film","fine","fire","fist","flag","flap","flat","fled","fling","flip","flop","flung","flunk","frame","frank","frill","frisk","frog","frost","froze","fume","gasp","gaze","glad","gland","glass","glint","globe","glum","golf","grab","grade","gram","gramp","grand","grant","grape","grasp","grass","grill","grim","grin","grip","gripe","grump","grunt","gulp","gust","hate","held","hide","hint","hire","hole","honk","hope","hose","hung","hunt","Jane","joke","junk","kept","kite","lamp","lick","lift","lime","limp","lock","luck","lump","Mack","mask","mass","mast","mate","melt","mend","milk","mill","mint","mist","mite","mope","mule","mute","neck","nest","nine","nose","note","pane","pant","pass","past","pest","Pete","pike","pile","pill","pine","plan","plane","plank","plate","plop","plot","plug","plum","plump","plus","poke","pole","pomp","pond","pope","prank","press","pride","prime","print","prize","prop","punk","pure","raft","ripe","robe","rock","rode","romp","rope","rose","Runs","runt","rust","sack","sake","sand","sank","save","scab","scale","scalp","scan","scare","take","scope","scram","scrap","script","self","sell","send","sent","sick","site","size","skate","skid","skill","skim","skin","skip","skit","skunk","slam","slang","slant","slap","slat","slate","slave","sled","slept","slide","slim","sling","slip","slob","slope","slot","slug","slum","slump","smack","smell","smile","smog","smoke","smug","snack","snag","snake","snap","sniff","snip","snipe","snub","snug","sock","soft","span","spank","spat","sped","spend","spent","spill","spin","spine","spit","spite","splat","splint","split","spoke","spot","spun","spunk","stab","stack","stale","stamp","stand","stem","step","stiff","sting","stink","stomp","stone","stove","strand","strap","strip","stripe","struck","strung","stuck","stump","stun","suck","sung","swam","swang","swell","swift","swim","swing","swung","tack","tame","tape","tent","test","tide","tile","till","tilt","trade","tramp","trap","trend","trick","trim","trip","trot","trunk","trust","twang","twig","twin","twist","vane","wave","weld","wind","wine","wire","yoke","absent","admit","album","ball","bang","banging","basket","bathtub","bedbug","bench","bill","blank","blasted","blended","blush","bobsled","branch","brave","brush","bunch","camping","care","case","catnip","cave","chest","chill","chin","chip","chipmunk","chop","chunk","clock","cloth","contest","crack","crash","crashing","crept","cross","crush","cuff","dash","deck","dentist","dish","disrupt","disrupted","drinking","dusted","expanded","fang","finishing","fish","flute","Fran","fuss","gift","goblin","hall","hang","Hank","himself","hotrod","huff","hunted","index","insisted","insisting","insulted","invent","invented","jump","jumping","king","kiss","lane","lapdog","lasted","lending","loft","lost","lunch","lung","mall","mascot","math","mess","napkin","pack","path","picnic","pigpen","pinball","pinch","planted","plastic","problem","public","publishing","puff","punishing","quake","rake","rash","rented","rest","rested","rich","ring","ringing","safe","sale","sang","sash","shack","shed","shelf","shell","shifted","shine","ship","shop","shrimp","shrinking","shrunk","shut","sink","sinking","sits","splash","splashing","squinted","standing","Steve","stub","stuff","stunt","sunfish","sunk","sunlit","sunset","suntan","swishing","talented","tall","tank","throne","thud","tick","tilted","tiptop","toss","trusted","twisted","upset","vent","vest","wall","whiff","whip","whiplash","wing","wink","wipe","wise","yell","zigzag","called","circle","friend","project","nothing","says","soap","beat","bong","door","burnt","caterpillar","cheer","chomp","Chuck","chuckle","chug","Clark","click","climb","clown","cluck","coal","complain","croak","crunch","Curtis","curve","darts","dinner","diver","doctor","doll","door","available","shipping","fellow","fiddle","firm","fishing","stone","foam","forever","forgot","forth","front","desktop","gobble","gone","gosh","granddad","grandpa","grinned","grumble","hatch","kvothe","hill","horse","hush","insect","performance","jiggle","phone","frost","week","jumble","kick","paper","larch","library","lived","lives","market","store","napper","nibble","Nick","Norm","onto","owner","patch","peck","perfect","ping","pong","quick","quill","quilt","Quinn","quit","reward","button","register","roam","ruff","Sanchez","served","Seth","sister","soak","smash","snort","snuggle","soup","sparkle","sprinkle","squirt","stick","sudden","sunburn","surprise","swimmer","tadpole","very","ruler","tickle","toad","Todd","turf","twinkle","twitch","umbrella","uncle","wham","whirl","whisper","whistle","wiggle","window","shop","writing","York","zing","able","added","afraid","afternoon","ahead","annoy","anything","anyway","anywhere","applaud","artist","attack","attic","auto","avoid","awesome","awful","awning","babble","baby","baffle","bald","ballplayer","bark","base","baseball","basin","basketball","batch","bath","battle","beach","bead","beam","bean","beanstalk","beast","beat","bedtime","beef","beehive","beet","begging","behind","bird","birthday","bleach","blew","blind","bloom","blow","blown","bluebird","blueprint","blur","boast","boat","body","boil","bold","bonnet","bonus","boost","boot",
			"born","bottle","bowl","brace","braid","brain","brainstorm","brake","brawl","bread","breakfast","breath","brick","bright","broil","broiler","broom","bruise","bubble","buddy","built","bundle","bunk","bunny","burn","burst","buses","butterfly","button","buzz","cabin","cage","cake","camel","candle","candy","careful","cart","catch","cattle","cell","cent","chain","chalk","champ","charge","chart","chase","chat","check","cheerful","cheese","chess","chew","chick","child","chime","chirp","choice","chore","church","churn","claim","classmate","clay","clerk","clever","clue","clutch","coach","coat","coax","coil","coin","collect","colorful","cool","core","cork","corn","cowboy","cozy","crate","crawl","cream","crew","crinkle","crow","cruise","cuddle","cupcake","curb","curl","daddy","dangle","laptop","dark","dart","date","dawn","daylight","dead","deaf","dealt","decent","deep","delight","desk","dimple","dirt","ditch","doghouse","double","dragon","dragonfly","drain","dread","dream","drew","driveway","droop","duck","dunk","dusk","easel","easy","elbow","enjoy","ever","evergreen","everyone","everything","everywhere","explore","fabric","fail","faithful","fame","fault","fawn","feast","feed","feel","fence","fern","fetch","fifty","fight","finish","firefighter","flagpole","flash","flashlight","flaunt","flaw","flight","float","flow","fluffy","foal","foil","fold","fool","forest","forget","fork","form","fort","fraud","fray","free","fresh","Friday","fried","fright","frozen","fruit","game","garden","gate","germ","giggle","ginger","giraffe","gleam","glean","glow","gluestick","goat","going","gold","goose","gram","graceful","grain","grapefruit","grasshopper","grateful","gray","grew","groan","grown","grown-up","growth","gumball","habit","hail","handwriting","happen","happy","harm","harmful","harp","haul","haunt","hawk","health","heat","heavy","heel","hello","helpful","herself","hidden","highway","hoist","homemade","homework","hoot","hopeful","hopscotch","horn","host","houseboat","housefly","huddle","human","humid","hummingbird","hump","hungry","hunk","hurdle","hurl","inch","inside","instead","itch","Jake","Jean","jeep","jelly","jellyfish","jerk","jungle","jingle","turn","join","joint","juggle","juice","jungle","kickball","kingfish","kits","kitten","kitty","knack","knee","kneecap","kneel","knelt","knew","knife","knight","knit","knob","knock","knockout","knot","knothole","known","lace","lack","lake","latch","launch","lawn","lazy","leap","leather","lemon","less","lighthouse","limit","link","lipstick","living","load","loaf","loop","loose","lunchbox","Mabel","mail","main","mane","march","mark","match","movie","meant","meat","meet","mice","middle","mild","mind","mine","mitten","moan","model","moist","mold","moment","Monday","mood","motel","munch","music","muzzle","nail","nanny","Nate","neat","necktie","nerve","newscast","newspaper","nice","nickname","nighttime","nips","noise","noon","north","nowhere","oatmeal","object","oink","ooze","outside","pace","paddle","pail","pain","painful","paint","pancake","paperback","park","pause","pawn","peace","peaceful","peach","peak","peddle","peep","pencil","pennies","penny","perch","piano","pillow","pilot","pink","pipe","pitch","ploy","poison","pony","pooch","poodle","pool","popcorn","porch","port","post","poster","potpie","pretzel","price","proof","pupil","puppy","purple","purse","puzzle","quack","queen","quicksand","rabbit","race","rack","rage","rail","rain","rainbow","ranch","rang","rattle","reach","ready","recycle","refund","renew","restful","return","ribbon","rice","riddle","rind","rink","rise","road","roast","robin","robot","room","roost","royal","ruled","rumble","runway","rush","saddle","sail","sailboat","salad","sample","sandbox","sandpaper","sandy","Saturday","sauce","saucer","scarf","scold","scorch","score","scrape","scratch","scream","screen","screw","scrub","seal","seat","serve","settle","shade","shadow","shake","shaking","shameful","shape","share","shark","sharp","sheep","shipwreck","shirt","shore","short","shrink","shrub","shrug","sidewalk","sigh","sight","silence","silly","simple","sips","siren","slice","slick","slight","slow","slur","smart","smiling","smooth","snail","sneak","snooze","snore","snow","snowball","snowflake","snowman","soak","soap","sofa","soil","someone","somewhere","sore","sort","space","spark","speak","splendid","splotch","spoil","spool","spoon","sport","sprain","sprawl","spray","spread","spring","sprint","spruce","spur","squawk","stage","star","startle","stay","steam","steep","stern","stiffer","stir","stool","store","stork","storm","strain","strange","straw","stray","stream","street","stretch","strict","strike","string","strong","stung","suit","suitcase","sunblock","Sunday","sunflower","sunny","sunrise","sunshine","surf","sway","sweat","sweep","sweet","swerve","swimming","swirl","switch","tablet","tail","taps","tattle","taught","teach","teacher","team","tease","teeth","tennis","thankful","thick","thigh","thimble","thin","thinner","thinnest","third","thirst","thorn","thread","threat","thrill","throat","throw","Thursday","tiger","tight","tired","toast","toil","told","tool","tooth","topcoat","torch","torn","trace","traffic","train","trash","travel","tray","tread","treetop","trouble","truck","trumpet","bucket","tugboat","tulip","tumble","tummy","turtle","tusk","twirl","ugly","unzip","useful","value","vanish","verb","verse","vine","visit","visitor","voice","void","vote","waddle","wage","wagon","wait","wake","waves","wealth","weather","weave","premier","weed","week","weekend","wettest","whack","whale","whatever","wheat","wheel","whenever","whisk","whiz","wide","wife","wild","windmill","wonderful","wore","worn","wrap","wreath","wreck","wrench","wriggle","wrinkle","wrist","wristwatch","written","wrong","wrote","yard","yardstick","yarn","yawn","Zack","zebra","zoom","winter","wear","mitten","bait","barn","bawl","beak","birth","blab","blade","blame","blaze","bleed","bless","blip","blurb","blurt","bond","books","booth","boys","brad","bran","brawn","brisk","brook","broth","brother","card","cash","cask","cheap","cheek","chow","clack","clang","clash","claw","cloak","clod","coast","code","cook","coop","cord","cost","count","crane","crick","crock","crook","crown","crude","crumb","cube","dear","disk","dock","doze","drake","drape","drawn","drive","dude","east","faint","flake","flame","flesh","flick","flirt","flit","flock","floor","flour","flown","flush","fond","foot","fowl","free","fret","frizz","frying","fuse","gang","glade","glaze","glee","glen","glide","glob","gloss","goal","gown","grate","greet","grit","grouch","growl","gruff","heal","heap","hike","hood","hoof","hook","hoop","howl","huge","husk","intern","jail","joke","laid","lame","leak","lend","lent","lien","lint","loan","loin","lone","loot","lord","loud","lurk","lute","maid","maze","meal","mirth","mock","mole","moon","mouse","mouth","murk","musk","nook","nurse","paid","peek","peel","pelt","perk","plain","plants","player","plod","plow","plums","pork","prance","pray","prayer","present","prim","prince","probe","prod","program","proud","prowl","punt","raid","rant","real","rent","risk","ruler","roof","rude","rung","scald","scar","scoop","scoot","scout","scowl","scuff","scum","seek","seen","shawl","sheet","shirk","shook","shoot","shot","shout","shown","sift","silk","sixth","skips","skirt","skull","slash","slaw","slay","slid","slit","slop","smear","smith","smock","smoky","snare","snatch","sneeze","snob","snoop","snuff","soot","sour","south","speck","speech","speed","spike","spry","spud","spurn","spurt","stain","stall","Stan","steal","stood","sulk","swamp","swan","swap","swarm","swat","swatch","swept","swig","swine","swish","swoop","sworn","swum","tale","task","tend","total","term","thumb","tint","tock","town","toys","track","trail","tram","trek","tribe","trod","Troy","tune","tweed","tweet","twelve","twenty","twice","twine","twitter","urge","uses","vase","wade","wept","west","whine","whir","wick","wilt","woke","wood","woof","wool","wove","zest","zone","against","features","among","asked","course","days","silver","during","eyes","general","given","however","later","order","possible","president","rather","since","states","system","things","though","toward","united","used","years"];
	
		
		

		aliensup=0;
		//  The scrolling starfield background
		starfield = game.add.tileSprite(0, 0, 1000, 600, 'starfield');
		game.add.text(500,570 , "Word: ", { fontSize: '34px', fill: '#fff' });
		worddisplay = game.add.text(585, 570, tstring, { fontSize: '20px', fill: '#fff' });
		game.add.sprite(750, 10, 'side');
		bullets = game.add.group();
		bullets.enableBody = true;
		//bullets.physicsBodyType = Phaser.Physics.ARCADE;
		for (var i = 0; i < 120; i++) {
			var b = bullets.create(400, 400, 'bullet');
			b.scale.setTo(.60, .60);
			b.name = 'bullet' + i;
			b.exists = false;
			b.visible = false;
			b.checkWorldBounds = true;
			b.events.onOutOfBounds.add(resetBullet, this);
		}
		
		
		planet = game.add.sprite(400, 400, 'planet');
		planet.body.setCircle(20);
		planet.angle += 10;
		planet.animations.add('spin');
		planet.animations.play('spin', 7, true);
		planet.kill();
		planet.revive();
		
		planet2 = game.add.sprite(400, 400, 'planet2');
		planet2.body.setCircle(20);
		planet2.angle += 10;
		planet2.animations.add('spin');
		planet2.animations.play('spin', 7, true);
		planet2.kill();
		//planet2.revive();
		
		bottom = game.add.sprite(10, 460, 'bottom');
		bottom.scale.setTo(.7, .6);
		
		
		
		music = game.add.audio('music');
		music.play('',0,1,true);
		

	
		dic={};
		text="";
		style = { font: "18px Arial", fill: "#F7F2E0", align: "center" };
		game.input.keyboard.addCallbacks( this, mykeydownhandler );
		tstring="";
		
		lifeval=100000;
		life= game.add.text(0, 0, "Life: ", style);
		moneytext= game.add.text(10, 430, "Money: $", style);

		
		hurter=game.time.events.loop(1000, hurt, this);
		assevent=game.time.events.loop(game.rnd.integerInRange(3000,4000), createEnemy, this);
		alevent=game.time.events.loop(game.rnd.integerInRange(2000,3000), createAlien, this);
		shootevent=game.time.events.loop(shoottime, firebullet, this);
		//game.add.sprite(750, 10, 'side');
		
		//enemy planet side bar
		elifeval=100000;
		elife=game.add.text(810,75, "Enemy life: ", style);
		
		eplanet = game.add.sprite(845, 110, 'eplanet');
		eplanet.body.setCircle(20);
		eplanet.angle += 10;
		eplanet.animations.add('turn');
		eplanet.animations.play('turn', 7, true);
		//game.physics.enable(eplanet, Phaser.Physics.ARCADE);
		
		
		
    }
	function hurt(){
		lifeval=lifeval-aliensup*100
		life.content = "Life: "+ lifeval;
	}
	
	function resetBullet (bullet) {
		bullet.scale.setTo(.40, .40);
		bullet.x=859;
		bullet.y=500;
		
		//bullet.x=100;
		//bullet.y=600;
	}
	
	function firebullet(){
		if (game.time.now > bulletTime){
			bullet = bullets.getFirstExists(false);
			if (bullet) {
				bullet.reset(planet.x +27, planet.y +10);
				bullet.body.velocity.y = -300;
				bullet.scale.setTo(.60, .60);
				bulletTime = game.time.now + 150;
			}
		}		

	}
	

	function createEnemy(){
		aliensup++;
		var yran = game.rnd.integerInRange(-100, -50);
		var xran = game.rnd.integerInRange(-200, 900);
		var temp=game.add.sprite(game.rnd.integerInRange(-200,900), game.rnd.integerInRange(-100, -50), 'asteroid');
		var tweenfly=game.add.tween(temp).to({ y: planet.world.y+35, x:planet.world.x+35  }, 6000, Phaser.Easing.Cubic.In, true)
		.to({ y: yran, x: xran }, 1000, Phaser.Easing.Linear.None);
		temp.animations.add('spin');
		temp.lifespan=8000;
		temp.animations.play('spin', 8, true);
		var word=words[game.rnd.integerInRange(0, 1999)];
		temp.scale.setTo(word.length/6, word.length/6);
		var wordsprite=game.add.text(temp.x, temp.y, word, style);
		wordsprite.lifespan=8000;
		game.add.tween(wordsprite).to({ y: planet.world.y+35, x:planet.world.x+35 }, 6000, Phaser.Easing.Cubic.In, true)
		.to({ y: yran, x: xran }, 1000, Phaser.Easing.Linear.None);
		dic[word]=new Array(temp,wordsprite);
	}
	
	function createAlien(){
		aliensup++;
		var yran = game.rnd.integerInRange(10, 300);
		var xran = game.rnd.integerInRange(10, 700);
		var yran2 = game.rnd.integerInRange(10, 300);
		var xran2 = game.rnd.integerInRange(10, 700);
		var pltarget=game.rnd.integerInRange(375,425);

		var temp=game.add.sprite(game.rnd.integerInRange(-200,900), game.rnd.integerInRange(-100, -50), 'ship');
		var tweenfly=game.add.tween(temp).to({ y: planet.world.y-70, x:pltarget  }, 6000,  Phaser.Easing.Linear.None, true)
		.to({ y: yran }, 1000, Phaser.Easing.Linear.None)
		.to({ x: xran }, 2000, Phaser.Easing.Linear.None)
		.to({ y: yran2 }, 1000, Phaser.Easing.Linear.None)
		.to({ x: xran2 }, 2000, Phaser.Easing.Linear.None)
		.loop()
		.start();
		temp.animations.add('spin');
		temp.animations.play('spin', 8, true);
		var word=words[game.rnd.integerInRange(0, 1999)];
		temp.scale.setTo(.3,.3);
		temp.body.angularVelocity = 20;
		var wordsprite=game.add.text(temp.x, temp.y, word, style);
		game.add.tween(wordsprite).to({ y: planet.world.y-70, x:pltarget }, 6000,Phaser.Easing.Linear.None, true)
		.to({ y: yran }, 1000, Phaser.Easing.Linear.None)
		.to({ x: xran  }, 2000, Phaser.Easing.Linear.None)
		.to({ y: yran2 }, 1000, Phaser.Easing.Linear.None)
		.to({ x: xran2 }, 2000, Phaser.Easing.Linear.None)
		.loop()
		.start();

		dic[word]=new Array(temp,wordsprite);
	}
    
   function update() {
		//  Scroll the background
		game.physics.overlap(bullets, eplanet, collisionHandler, null, this);
		elife.content = "Enemy Life: "+ elifeval;
		moneytext.content = "Money: $"+ money;
		starfield.tilePosition.y += 2;
		starfield.tilePosition.x += 2;
		worddisplay.content=tstring
		life.content = "Life: "+ lifeval;
		if (lifeval<0){
			
			lifeval=0;
			game.add.text(300,300 , "  You Lose!\nGAME OVER", { fontSize: '80px', fill: '#fff' });
			game.time.events.remove(assevent);
			game.time.events.remove(alevent);
			game.time.events.remove(hurter);
			game.time.events.remove(shootevent);
			
			var boom3 = game.add.sprite(planet.x-140, planet.y-125, 'boom');
				boom3.scale.setTo(3,3);
				boom3.animations.add('pop');
				boom3.animations.play('pop', 60, false,true);
				
			for (var key in dic){
				var tempboom = game.add.sprite(dic[key][0].x, dic[key][0].y, 'boom');
				tempboom.scale.setTo(.5,.5);
				tempboom.animations.add('pop');
				tempboom.animations.play('pop', 60, false,true);
				aliensup--;
				dic[key][0].destroy();				
				dic[key][1].destroy();
				delete dic[key];
			}
			planet.kill();
			planet2.kill();
			
		}
		else{
			for (var key in dic){
			
				
				game.physics.overlap( dic[key][0], planet, function( key) { return function() { dic[key][0].destroy();  dic[key][1].destroy();delete dic[key];lifeval=lifeval-1000;aliensup--;}  }( key), null, this);
				
			}
		}
		life.content = "Life: "+ lifeval;
	}
	
	function collisionHandler (elp, bul) {
		if (bul.x>500){
			boom = game.add.sprite(bul.x, bul.y, 'boom');
			boom.scale.setTo(.2,.2);
			boom.animations.add('pop');
			boom.animations.play('pop', 60, false,true);
			bul.kill();
			elifeval=elifeval-game.rnd.integerInRange(800,1000);
			
			if (elifeval<=0&&lifeval>0){
			
				elifeval=0;
				var boom2 = game.add.sprite(eplanet.x-60, eplanet.y-40, 'boom');
				boom2.scale.setTo(1.4,1.4);
				boom2.animations.add('pop');
				boom2.animations.play('pop', 60, false,true);
				elp.exists = false;
				elp.visible = false;
				game.time.events.remove(shootevent);
				bullets.visible=false;
				game.add.text(300,300 , "  You Win!\nGAME OVER", { fontSize: '80px', fill: '#fff' });
				game.time.events.remove(assevent);
				game.time.events.remove(alevent);
				game.time.events.remove(hurter);
				
			}
		
		}
	}
	
	function shockall(){
		for (var key in dic){	
				var tempboom = game.add.sprite(dic[key][0].x, dic[key][0].y, 'boom');
				tempboom.scale.setTo(.5,.5);
				tempboom.animations.add('pop');
				tempboom.animations.play('pop', 60, false,true);
				aliensup=0;
				dic[key][0].destroy();				
				dic[key][1].destroy();
				delete dic[key];
		}
		game.time.events.remove(clearevent);
	}

	function mykeydownhandler( evt )
    {
		//console.log(evt);
		//console.log( "Not a letter: ", evt.which );
		if (evt.which==49){
			if (money>=100){
				money=money-100;
				game.time.events.remove(shootevent);
				shoottime=shoottime-800
				shootevent=game.time.events.loop(shoottime, firebullet, this)
				//lifeval=lifeval+2000;
				//game.time.events.remove(shootevent);
			}
		}
		if (evt.which==50){
			if (money>=200){
				planet.kill();
				planet2.revive();
				money=money-200;
			}
		}
		if (evt.which==51){
			if (money>=100){
				money=money-100;
				for (var key in dic){
					var shock = game.add.sprite(400, 400, 'shock');
					shock.angle.velocity += 60000;
					shock.lifespan=550;
					shock.animations.add('shocker');
					shock.animations.play('shocker', 100, true);
					game.add.tween(shock).to({ y:dic[key][0].y, x:dic[key][0].x  }, 600,  Phaser.Easing.Linear.None, true);
					}
				clearevent=game.time.events.loop(600, shockall, this);
				lifeval=lifeval+5000;
				
			}
		}
		if (evt.which==13){
			if (tstring in dic){
				var del=dic[tstring];
				boom = game.add.sprite(del[0].x, del[0].y, 'boom');
				boom.scale.setTo(.5,.5);
				boom.animations.add('pop');
				boom.animations.play('pop', 60, false,true);
				aliensup--;
				
				money=money+del[1].text.length+5;
				del[0].kill();
				del[1].destroy();
				delete dic[tstring];
			}
			tstring="";
            return;
        }
		if (evt.which==8){
			console.log(tstring);
			tstring = tstring.substring(0, tstring.length - 1);
			evt.preventDefault();
			
		}
        // Skip it unless it's a-z.
        if( evt.which < "A".charCodeAt(0) || evt.which > "Z".charCodeAt(0) )
        {
            //console.log( "Not a letter: ", evt.which );
            return;
        }
		
        var letter = String.fromCharCode( evt.which );
        if( !evt.shiftKey ) letter = letter.toLowerCase();
        tstring=tstring+letter;
        //console.log( letter );
    }
};
