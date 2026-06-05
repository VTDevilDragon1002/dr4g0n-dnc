const MOVIES=[
{id:'coolie',title:'Coolie',lang:'Tamil',genre:'Action Thriller',rating:'9.1',votes:'186K',duration:'2h 48m',cert:'UA16+',poster:'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=700&q=80',banner:'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1500&q=80',story:'A stylish mass action entertainer packed with power, emotion, theatre moments, and high voltage background score.'},
{id:'dragon',title:'Dragon',lang:'Tamil',genre:'Comedy Drama',rating:'8.7',votes:'94K',duration:'2h 32m',cert:'U',poster:'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=700&q=80',banner:'https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?auto=format&fit=crop&w=1500&q=80',story:'A youth entertainer about friendship, love, studies, success, and comeback after failure.'},
{id:'interstellar',title:'Interstellar',lang:'English',genre:'Sci-Fi Adventure',rating:'9.4',votes:'520K',duration:'2h 49m',cert:'UA',poster:'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=700&q=80',banner:'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1500&q=80',story:'A breathtaking space journey where love, science, and survival cross the boundaries of time.'},
{id:'kingdom',title:'Kingdom',lang:'Telugu',genre:'Action Drama',rating:'8.2',votes:'73K',duration:'2h 41m',cert:'UA',poster:'https://images.unsplash.com/photo-1505635552518-3448ff116af3?auto=format&fit=crop&w=700&q=80',banner:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1500&q=80',story:'A royal-scale action drama with politics, loyalty, betrayal, and emotional family stakes.'},
{id:'sikandar',title:'Sikandar',lang:'Hindi',genre:'Action Romance',rating:'8.0',votes:'88K',duration:'2h 37m',cert:'UA',poster:'https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=700&q=80',banner:'https://images.unsplash.com/photo-1523207911345-32501502db22?auto=format&fit=crop&w=1500&q=80',story:'A larger-than-life hero fights for justice while protecting the people he loves.'},
{id:'detective',title:'Detective X',lang:'English',genre:'Crime Mystery',rating:'8.6',votes:'51K',duration:'2h 18m',cert:'UA13+',poster:'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=700&q=80',banner:'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1500&q=80',story:'A sharp detective follows digital clues to solve a city-wide mystery before midnight.'}
];
const THEATRES=[
{name:'DR4G0N Cinemas - Premium Lux',area:'Salem Main Road',features:'Dolby Atmos • 4K Laser • Recliner',distance:'2.4 km'},
{name:'ROX Grand Multiplex',area:'Namakkal City',features:'RGB Laser • Food Court • Parking',distance:'5.1 km'},
{name:'DNC IMAX Experience',area:'Mallasamuthiram',features:'IMAX • 3D • Couple Seats',distance:'8.7 km'},
{name:'Galaxy ROX Theatre',area:'Tiruchengode Road',features:'Dolby 7.1 • Balcony • AC',distance:'12.2 km'}
];
const TIMES=['10:00 AM','1:15 PM','4:30 PM','7:45 PM','10:45 PM'];
function qs(k){return new URLSearchParams(location.search).get(k)}
function save(k,v){localStorage.setItem(k,JSON.stringify(v))}
function load(k,d=null){try{return JSON.parse(localStorage.getItem(k))??d}catch(e){return d}}
function movieById(id){return MOVIES.find(m=>m.id===id)||MOVIES[0]}
function money(n){return '₹'+n.toLocaleString('en-IN')}
