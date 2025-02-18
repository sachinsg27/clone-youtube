// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import store from "../utils/store";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getQuerySuggestions();

        //update cache

        dispatch(
          cacheResults({
            [searchQuery]: JSON[1],
          })
        );
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getQuerySuggestions = async () => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-cols-12 items-center shadow-lg p-2">
      <div className="col-span-1 flex p-2">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="Hambergur-menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAABLS0vPz8+Wlpb39/ehoaHu7u6NjY3n5+eCgoKsrKy+vr7IyMjv7+8vLy9ycnJbW1t4eHgYGBg5OTnb29tiYmIxMTEJCQlQUFCRkZEfHx+4uLg/Pz8QEBA4ODiTPnadAAACe0lEQVR4nO3dCW7CMBCF4bQQlpawltK9979lRSOEKqqxwZZGb/J/J3ijxCF2BrtpAAAAAAAAAAAAAAAAACC+djHb3OvYzBbtVfXNt3d6tvP8AmfeYW80y71BV95Jb7bKulXbnXfOArtlRoXf3imLPKULfPDOWOghVeDeO2GxfaLCZ++AxZ7tAqfe+SqYmhU+eser4NGscO0dr4K1WaHuj/3ZwazwxTteBS9mhd7pqjArVH5jO9mZFb56x6vg1azwzTteBW9mhSPveBWMzAqbd+98xd7tApuJd8Bik0SF8hcxdQn1R2JiFB5pv3zbr90BhmJyEPYW3jlvtsgrsGmWmpOodc5C28l8rDaPWo2vWPLutfuRjv11Xy0AAAAAAAAAAICUaTcZ65h0ds/lpQ+91qH7jyvq69Q+rfVWXW6Bus3syTb23sY7Z4FNToGaX7hP7AbhX9rNJhntJvrN+ql2Bd2nzEniadN656vAblrQbRY6s9uG9G/S1G366R2vgk+zwi/veBV8mRV6p6ti4Ncw/jiM/yyN/3sY/50mwG2amgUvvQMWS7ZCh58fDmCOr/2X/Kx1GuWnTeZa2wDWS5v4a95H0b9bAAAAAAAAAAAAIcH3iYq+11f4/dp024Yy99wLv2+idrtJRrNJ/P1Lw+9BqzwIe6mhqH4JkxdRfRQe2SMx/p7seo1Cl+x99eOfjeCdrgqzwvhnlKjNmf5jnzOjOW36y24T1n7t7tkv3/p/A06d2SXd5N1LnLs2gLPzhNvYexnN7E/eGYtknGEpfg5p3lGrB++cNzvkLgxHPw+4GcCZzsdbtRM7l7vjhAsAAAAAAAAAAAAAAAAAQ/ADAnZUjrcBInYAAAAASUVORK5CYII="
        ></img>
        <img
          className="h-8 pl-4"
          alt="youtube-logo"
          src="data:image/png;base64,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"
        ></img>
      </div>
      <div className="col-span-10 ">
        <div>
          <input
            type="text"
            className="h-10 w-1/2 border border-gray-300 py-2 px-4 rounded-l-full ml-32"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          ></input>
          <button className="pl-1 border border-gray-500 rounded-r-full px-2 h-10 my-4 py-1 w-16 bg-gray-200">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="ml-32 absolute bg-white px-0 py-1 w-[32.5rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="px-1 py-2 shadow-sm hover:bg-gray-100 ">
                  🔍{s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8 my-4"
          alt="user-logo"
          src="data:image/png;base64,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"
        ></img>
      </div>
    </div>
  );
};

export default Header;
