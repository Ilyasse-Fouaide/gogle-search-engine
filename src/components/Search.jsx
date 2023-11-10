import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import SearchContext from '../context/SearchContext';

const data = [
  {
    "title": "FIFA World Cup Qatar 2022™",
    "htmlTitle": "FIFA World Cup Qatar 2022™",
    "link": "https://www.fifa.com/worldcuP",
    "displayLink": "facebook.com",
    "snippet": "The FIFA World Cup Qatar 2022™ was played from 20 November to 18 December 2022. 32 teams competed across 64 matches in the 22nd edition of the tournament.",
    "htmlSnippet": "The FIFA World Cup Qatar 2022™ was played from 20 November to 18 December 2022. 32 teams competed across 64 matches in the 22nd edition of the tournament."
  },
  {
    "title": "FIFA World Cup 26™",
    "htmlTitle": "FIFA World Cup 26™",
    "link": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026",
    "displayLink": "facebook.com",
    "snippet": "The FIFA World Cup 26™ will be 23rd edition of the tournament but the first to feature 48 teams and three host countries: Canada, Mexico and the United ...",
    "htmlSnippet": "The FIFA World Cup 26™ will be 23rd edition of the tournament but the first to feature 48 teams and three host countries: Canada, Mexico and the United ..."
  },
  {
    "title": "FIFA World Cup™",
    "htmlTitle": "FIFA World Cup™",
    "link": "https://www.fifa.com/en/tournaments/mens/worldcup",
    "displayLink": "facebook.com",
    "snippet": "The most prestigious tournament in the world. Taking place quadrennially, the FIFA Men's World Cup™ sees 32 nations compete against each other for the prize.",
    "htmlSnippet": "The most prestigious tournament in the world. Taking place quadrennially, the FIFA Men's World Cup™ sees 32 nations compete against each other for the prize."
  },
  {
    "title": "FIFA Women's World Cup Australia & New Zealand 2023™",
    "htmlTitle": "FIFA Women's World Cup Australia & New Zealand 2023™",
    "link": "https://www.fifa.com/fifaplus/en/tournaments/womens/womensworldcup/australia-new-zealand2023",
    "displayLink": "facebook.com",
    "snippet": "#FIFAGoingBeyond#FIFAGoingBeyond. Learn and perfect new skills with our FIFA Women's World Cup Trophy Tour Skills Coach and Freestyle Football World Champion - ...",
    "htmlSnippet": "#FIFAGoingBeyond#FIFAGoingBeyond. Learn and perfect new skills with our FIFA Women's World Cup Trophy Tour Skills Coach and Freestyle Football World Champion - ..."
  },
  {
    "title": "FIFA",
    "htmlTitle": "FIFA",
    "link": "https://www.fifa.com/",
    "displayLink": "facebook.com",
    "snippet": "The FIFA World Cup Qatar 2022™ set a host of new records, with 5 billion people engaged. The tournament served up dramatic on-field action, as well as record- ...",
    "htmlSnippet": "The FIFA World Cup Qatar 2022™ set a host of new records, with 5 billion people engaged. The tournament served up dramatic on-field action, as well as record- ..."
  },
  {
    "title": "Scores & Fixtures - FIFA",
    "htmlTitle": "Scores & Fixtures - FIFA",
    "link": "https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/qatar2022/scores-fixtures",
    "displayLink": "facebook.com",
    "snippet": "FIFA WORLD CUP TROPHY TOUR. FIFA FAN FESTIVAL™. FIFA FAN FESTIVAL™ · ALL ARTISTS · INTERNATIONAL FIFA FAN FESTIVAL · COCA-COLA FIFA FAN FESTIVAL RIYADH.",
    "htmlSnippet": "FIFA WORLD CUP TROPHY TOUR. FIFA FAN FESTIVAL™. FIFA FAN FESTIVAL™ · ALL ARTISTS · INTERNATIONAL FIFA FAN FESTIVAL · COCA-COLA FIFA FAN FESTIVAL RIYADH."
  },
  {
    "title": "FIFA World Cup - Wikipedia",
    "htmlTitle": "FIFA World Cup - Wikipedia",
    "link": "https://en.m.wikipedia.org/wiki/FIFA_World_Cup",
    "displayLink": "facebook.com",
    "snippet": "Number of teams: 32; (48 from )\nCurrent champions:  (3rd title); ()\nMost successful team(s):  (5 titles)\nRegion: International",
    "htmlSnippet": "Number of teams: 32; (48 from )\nCurrent champions:  (3rd title); ()\nMost successful team(s):  (5 titles)\nRegion: International"
  },
  {
    "title": "2022 FIFA World Cup - Wikipedia",
    "htmlTitle": "2022 FIFA World Cup - Wikipedia",
    "link": "https://en.m.wikipedia.org/wiki/2022_FIFA_World_Cup",
    "displayLink": "facebook.com",
    "snippet": "Host country: Qatar\nTeams: 32 (from 5 confederations)\nThird place: \nFourth place:",
    "htmlSnippet": "Host country: Qatar\nTeams: 32 (from 5 confederations)\nThird place: \nFourth place:"
  },
  {
    "title": "2026 FIFA World Cup - Wikipedia",
    "htmlTitle": "2026 FIFA World Cup - Wikipedia",
    "link": "https://en.m.wikipedia.org/wiki/2026_FIFA_World_Cup",
    "displayLink": "facebook.com",
    "snippet": "Host countries: Canada; Mexico; United States\nTeams: 48 (from 6 confederations)\nVenue(s): 16 (in 16 host cities)\nDates: June TBD – July 19",
    "htmlSnippet": "Host countries: Canada; Mexico; United States\nTeams: 48 (from 6 confederations)\nVenue(s): 16 (in 16 host cities)\nDates: June TBD – July 19"
  },
  {
    "title": "FIFA World Cup (@FIFAWorldCup) / Twitter",
    "htmlTitle": "FIFA World Cup (@FIFAWorldCup) / Twitter",
    "link": "https://twitter.com/FIFAWorldCup",
    "displayLink": "facebook.com",
    "snippet": "FIFA World Cup. @FIFAWorldCup. The official Twitter account of the FIFA World Cup! Find your home for football on FIFA+ ⬇️. fifaplus.com Joined April 2010.",
    "htmlSnippet": "FIFA World Cup. @FIFAWorldCup. The official Twitter account of the FIFA World Cup! Find your home for football on FIFA+ ⬇️. fifaplus.com Joined April 2010."
  }
]

function Search() {
  const { pathname } = useLocation();
  const { result, loading, search, error } = useContext(SearchContext);

  if (!search) {
    return "Search for something";
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  if (loading) {
    return "loading ..."
  }

  switch (pathname) {
    case "/search":
      return (
        <>
          {result.map(({ displayLink, link, title, snippet }, key) =>
            <div className='my-[56px]' key={key}>
              <div>
                <span className='text-[#dadce0] text-[14px] whitespace-nowrap'>{displayLink}</span>
              </div>
              <cite className='text-[#bdc1c6] text-[12px]'>{link}</cite>
              <h3 className='mt-[13px] mb-[3px] text-[20px] font-[400] text-[#8ab4f8] cursor-pointer hover:underline'>
                <a href={link} target='_blank'>{title}</a>
              </h3>
              <div className='max-w-lg'>
                <div className='text-[#bdc1c6]'>{snippet}</div>
              </div>
            </div>
          )}
        </>
      );
    case "/imagesearch":
      return (
        <>
          <pre>{JSON.stringify(result, undefined, 2)}</pre>
        </>
      );
    default:
      return "Error...";
  }
}

export default Search