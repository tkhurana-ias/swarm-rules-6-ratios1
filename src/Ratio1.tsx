import React from 'react'

var commonRatios = [
    "3/2",
    "71/40",
    "667/357",
    "16/9",
    "4/3",
    "17/10",
    "5/3",
    "256/135",
    "37/20",
    "239/100",
    "8/5",
    "237/100",
    "177/100",
    "178/100",
    "1/1",
    "5/4",
    "143/100",
    "141/100",
    "11/8",
    "6/5",
    "809/500",
    "69/25",
    "1207/500",
    "47/20",
    "11/5",
    "2/1",
    "14/9",
    "137/100",
    "19/16",
    "7/4",
    "51/20",
    "259/100",
    "171/100",
    "40/27",
    "267/160",
    "683/384",
    "667/335",
    "183/103",
    "57/32",
    "85/48",
    "1093/614",
    "1093/615",
    "962/601",
    "1024/819",
    "128/75",
    "683/512",
    "1301/731",
    "719/404",
    "256/205",
    "1067/600",
    "621/349",
    "569/320",
    "74/45",
    "39/18",
    "812/375"
];
const Ratio1 = () => {
    
     const mediaQuery = window.matchMedia("screen and true")
     console.log("mediaQuery", !!mediaQuery.matches)

    var matches = [];

    function matchesMediaQuery(mediaQuery: string) {
        var matchResults = window.matchMedia(mediaQuery);
        console.log("matchesMediaQuery", matchResults, matchResults.matches, !!matchResults, !!matchResults.matches)
        return (!!matchResults && !!matchResults.matches);        
    }

    for (var i = 0; i < commonRatios.length; i++) {
        var ratio = commonRatios[i];
        var invertedRatioList = ratio.split("/");
        var invertedRatio = invertedRatioList[1] + "/" + invertedRatioList[0];

        var match = matchesMediaQuery("screen and (device-aspect-ratio: " + ratio + ")")
        var matchInverted = matchesMediaQuery("screen and (device-aspect-ratio: " + invertedRatio + ")")
        console.log("decision - ", match, matchInverted)
        if (match || matchInverted) {
            matches.push(ratio);
        }
    }
    console.log(screen.width + " " + screen.height + " " + screen.availWidth)
    console.log(matches)

  return (
    <div>Ratio1 - {matches} - {screen.availWidth}/ {screen.availHeight}</div>
  )
}

export default Ratio1