const flags = [
    { name: 'Andorra', img: 'assets/images/flags/ad.png' },
    { name: 'United Arab Emirates', img: 'assets/images/flags/ae.png' },
    { name: 'Afghanistan', img: 'assets/images/flags/af.png' },
    { name: 'Antigua and Barbuda', img: 'assets/images/flags/ag.png' },
    { name: 'Anguilla', img: 'assets/images/flags/ai.png' },
    { name: 'Albania', img: 'assets/images/flags/al.png' },
    { name: 'Armenia', img: 'assets/images/flags/am.png' },
    { name: 'Angola', img: 'assets/images/flags/ao.png' },
    { name: 'Antarctica', img: 'assets/images/flags/aq.png' },
    { name: 'Argentina', img: 'assets/images/flags/ar.png' },
    { name: 'American Samoa', img: 'assets/images/flags/as.png' },
    { name: 'Austria', img: 'assets/images/flags/at.png' },
    { name: 'Australia', img: 'assets/images/flags/au.png' },
    { name: 'Aruba', img: 'assets/images/flags/aw.png' },
    { name: 'Åland Islands', img: 'assets/images/flags/ax.png' },
    { name: 'Azerbaijan', img: 'assets/images/flags/az.png' },
    { name: 'Bosnia and Herzegovina', img: 'assets/images/flags/ba.png' },
    { name: 'Barbados', img: 'assets/images/flags/bb.png' },
    { name: 'Bangladesh', img: 'assets/images/flags/bd.png' },
    { name: 'Belgium', img: 'assets/images/flags/be.png' },
    { name: 'Burkina Faso', img: 'assets/images/flags/bf.png' },
    { name: 'Bulgaria', img: 'assets/images/flags/bg.png' },
    { name: 'Bahrain', img: 'assets/images/flags/bh.png' },
    { name: 'Burundi', img: 'assets/images/flags/bi.png' },
    { name: 'Benin', img: 'assets/images/flags/bj.png' },
    { name: 'Saint Barthélemy', img: 'assets/images/flags/bl.png' },
    { name: 'Bermuda', img: 'assets/images/flags/bm.png' },
    { name: 'Brunei Darussalam', img: 'assets/images/flags/bn.png' },
    { name: 'Bolivia', img: 'assets/images/flags/bo.png' },
    { name: 'Bonaire, Sint Eustatius and Saba', img: 'assets/images/flags/bq.png' },
    { name: 'Brazil', img: 'assets/images/flags/br.png' },
    { name: 'Bahamas', img: 'assets/images/flags/bs.png' },
    { name: 'Bhutan', img: 'assets/images/flags/bt.png' },
    { name: 'Bouvet Island', img: 'assets/images/flags/bv.png' },
    { name: 'Botswana', img: 'assets/images/flags/bw.png' },
    { name: 'Belarus', img: 'assets/images/flags/by.png' },
    { name: 'Belize', img: 'assets/images/flags/bz.png' },
    { name: 'Canada', img: 'assets/images/flags/ca.png' },
    { name: 'Cocos (Keeling) Islands', img: 'assets/images/flags/cc.png' },
    { name: 'Congo, Democratic Republic of the', img: 'assets/images/flags/cd.png' },
    { name: 'Central African Republic', img: 'assets/images/flags/cf.png' },
    { name: 'Congo', img: 'assets/images/flags/cg.png' },
    { name: 'Switzerland', img: 'assets/images/flags/ch.png' },
    { name: 'Côte d\'Ivoire', img: 'assets/images/flags/ci.png' },
    { name: 'Cook Islands', img: 'assets/images/flags/ck.png' },
    { name: 'Chile', img: 'assets/images/flags/cl.png' },
    { name: 'Cameroon', img: 'assets/images/flags/cm.png' },
    { name: 'China', img: 'assets/images/flags/cn.png' },
    { name: 'Colombia', img: 'assets/images/flags/co.png' },
    { name: 'Costa Rica', img: 'assets/images/flags/cr.png' },
    { name: 'Cuba', img: 'assets/images/flags/cu.png' },
    { name: 'Cabo Verde', img: 'assets/images/flags/cv.png' },
    { name: 'Curaçao', img: 'assets/images/flags/cw.png' },
    { name: 'Christmas Island', img: 'assets/images/flags/cx.png' },
    { name: 'Cyprus', img: 'assets/images/flags/cy.png' },
    { name: 'Czechia', img: 'assets/images/flags/cz.png' },
    { name: 'Germany', img: 'assets/images/flags/de.png' },
    { name: 'Djibouti', img: 'assets/images/flags/dj.png' },
    { name: 'Denmark', img: 'assets/images/flags/dk.png' },
    { name: 'Dominica', img: 'assets/images/flags/dm.png' },
    { name: 'Dominican Republic', img: 'assets/images/flags/do.png' },
    { name: 'Algeria', img: 'assets/images/flags/dz.png' },
    { name: 'Ecuador', img: 'assets/images/flags/ec.png' },
    { name: 'Estonia', img: 'assets/images/flags/ee.png' },
    { name: 'Egypt', img: 'assets/images/flags/eg.png' },
    { name: 'Western Sahara', img: 'assets/images/flags/eh.png' },
    { name: 'Eritrea', img: 'assets/images/flags/er.png' },
    { name: 'Spain', img: 'assets/images/flags/es.png' },
    { name: 'Ethiopia', img: 'assets/images/flags/et.png' },
    { name: 'Finland', img: 'assets/images/flags/fi.png' },
    { name: 'Fiji', img: 'assets/images/flags/fj.png' },
    { name: 'Falkland Islands (Malvinas)', img: 'assets/images/flags/fk.png' },
    { name: 'Micronesia (Federated States of)', img: 'assets/images/flags/fm.png' },
    { name: 'Faroe Islands', img: 'assets/images/flags/fo.png' },
    { name: 'France', img: 'assets/images/flags/fr.png' },
    { name: 'Gabon', img: 'assets/images/flags/ga.png' },
    { name: 'United Kingdom of Great Britain and Northern Ireland', img: 'assets/images/flags/gb.png' },
    { name: 'Grenada', img: 'assets/images/flags/gd.png' },
    { name: 'Georgia', img: 'assets/images/flags/ge.png' },
    { name: 'French Guiana', img: 'assets/images/flags/gf.png' },
    { name: 'Guernsey', img: 'assets/images/flags/gg.png' },
    { name: 'Ghana', img: 'assets/images/flags/gh.png' },
    { name: 'Gibraltar', img: 'assets/images/flags/gi.png' },
    { name: 'Greenland', img: 'assets/images/flags/gl.png' },
    { name: 'Gambia', img: 'assets/images/flags/gm.png' },
    { name: 'Guinea', img: 'assets/images/flags/gn.png' },
    { name: 'Guadeloupe', img: 'assets/images/flags/gp.png' },
    { name: 'Equatorial Guinea', img: 'assets/images/flags/gq.png' },
    { name: 'Greece', img: 'assets/images/flags/gr.png' },
    { name: 'South Georgia and the South Sandwich Islands', img: 'assets/images/flags/gs.png' },
    { name: 'Guatemala', img: 'assets/images/flags/gt.png' },
    { name: 'Guam', img: 'assets/images/flags/gu.png' },
    { name: 'Guinea-Bissau', img: 'assets/images/flags/gw.png' },
    { name: 'Guyana', img: 'assets/images/flags/gy.png' },
    { name: 'Hong Kong', img: 'assets/images/flags/hk.png' },
    { name: 'Heard Island and McDonald Islands', img: 'assets/images/flags/hm.png' },
    { name: 'Honduras', img: 'assets/images/flags/hn.png' },
    { name: 'Croatia', img: 'assets/images/flags/hr.png' },
    { name: 'Haiti', img: 'assets/images/flags/ht.png' },
    { name: 'Hungary', img: 'assets/images/flags/hu.png' },
    { name: 'Indonesia', img: 'assets/images/flags/id.png' },
    { name: 'Ireland', img: 'assets/images/flags/ie.png' },
    { name: 'Israel', img: 'assets/images/flags/il.png' },
    { name: 'Isle of Man', img: 'assets/images/flags/im.png' },
    { name: 'India', img: 'assets/images/flags/in.png' },
    { name: 'British Indian Ocean Territory', img: 'assets/images/flags/io.png' },
    { name: 'Iraq', img: 'assets/images/flags/iq.png' },
    { name: 'Iran (Islamic Republic of)', img: 'assets/images/flags/ir.png' },
    { name: 'Iceland', img: 'assets/images/flags/is.png' },
    { name: 'Italy', img: 'assets/images/flags/it.png' },
    { name: 'Jersey', img: 'assets/images/flags/je.png' },
    { name: 'Jamaica', img: 'assets/images/flags/jm.png' },
    { name: 'Jordan', img: 'assets/images/flags/jo.png' },
    { name: 'Japan', img: 'assets/images/flags/jp.png' },
    { name: 'Kenya', img: 'assets/images/flags/ke.png' },
    { name: 'Kyrgyzstan', img: 'assets/images/flags/kg.png' },
    { name: 'Cambodia', img: 'assets/images/flags/kh.png' },
    { name: 'Kiribati', img: 'assets/images/flags/ki.png' },
    { name: 'Comoros', img: 'assets/images/flags/km.png' },
    { name: 'Saint Kitts and Nevis', img: 'assets/images/flags/kn.png' },
    { name: 'Korea (Democratic People\'s Republic of)', img: 'assets/images/flags/kp.png' },
    { name: 'Korea (Republic of)', img: 'assets/images/flags/kr.png' },
    { name: 'Kuwait', img: 'assets/images/flags/kw.png' },
    { name: 'Cayman Islands', img: 'assets/images/flags/ky.png' },
    { name: 'Kazakhstan', img: 'assets/images/flags/kz.png' },
    { name: 'Lao People\'s Democratic Republic', img: 'assets/images/flags/la.png' },
    { name: 'Lebanon', img: 'assets/images/flags/lb.png' },
    { name: 'Saint Lucia', img: 'assets/images/flags/lc.png' },
    { name: 'Liechtenstein', img: 'assets/images/flags/li.png' },
    { name: 'Sri Lanka', img: 'assets/images/flags/lk.png' },
    { name: 'Liberia', img: 'assets/images/flags/lr.png' },
    { name: 'Lesotho', img: 'assets/images/flags/ls.png' },
    { name: 'Lithuania', img: 'assets/images/flags/lt.png' },
    { name: 'Luxembourg', img: 'assets/images/flags/lu.png' },
    { name: 'Latvia', img: 'assets/images/flags/lv.png' },
    { name: 'Libya', img: 'assets/images/flags/ly.png' },
    { name: 'Morocco', img: 'assets/images/flags/ma.png' },
    { name: 'Monaco', img: 'assets/images/flags/mc.png' },
    { name: 'Moldova (Republic of)', img: 'assets/images/flags/md.png' },
    { name: 'Montenegro', img: 'assets/images/flags/me.png' },
    { name: 'Saint Martin (French part)', img: 'assets/images/flags/mf.png' },
    { name: 'Madagascar', img: 'assets/images/flags/mg.png' },
    { name: 'Marshall Islands', img: 'assets/images/flags/mh.png' },
    { name: 'North Macedonia', img: 'assets/images/flags/mk.png' },
    { name: 'Mali', img: 'assets/images/flags/ml.png' },
    { name: 'Myanmar', img: 'assets/images/flags/mm.png' },
    { name: 'Mongolia', img: 'assets/images/flags/mn.png' },
    { name: 'Macao', img: 'assets/images/flags/mo.png' },
    { name: 'Northern Mariana Islands', img: 'assets/images/flags/mp.png' },
    { name: 'Martinique', img: 'assets/images/flags/mq.png' },
    { name: 'Mauritania', img: 'assets/images/flags/mr.png' },
    { name: 'Montserrat', img: 'assets/images/flags/ms.png' },
    { name: 'Malta', img: 'assets/images/flags/mt.png' },
    { name: 'Mauritius', img: 'assets/images/flags/mu.png' },
    { name: 'Maldives', img: 'assets/images/flags/mv.png' },
    { name: 'Malawi', img: 'assets/images/flags/mw.png' },
    { name: 'Mexico', img: 'assets/images/flags/mx.png' },
    { name: 'Malaysia', img: 'assets/images/flags/my.png' },
    { name: 'Mozambique', img: 'assets/images/flags/mz.png' },
    { name: 'Namibia', img: 'assets/images/flags/na.png' },
    { name: 'New Caledonia', img: 'assets/images/flags/nc.png' },
    { name: 'Niger', img: 'assets/images/flags/ne.png' },
    { name: 'Norfolk Island', img: 'assets/images/flags/nf.png' },
    { name: 'Nigeria', img: 'assets/images/flags/ng.png' },
    { name: 'Nicaragua', img: 'assets/images/flags/ni.png' },
    { name: 'Netherlands', img: 'assets/images/flags/nl.png' },
    { name: 'Norway', img: 'assets/images/flags/no.png' },
    { name: 'Nepal', img: 'assets/images/flags/np.png' },
    { name: 'Nauru', img: 'assets/images/flags/nr.png' },
    { name: 'Niue', img: 'assets/images/flags/nu.png' },
    { name: 'New Zealand', img: 'assets/images/flags/nz.png' },
    { name: 'Oman', img: 'assets/images/flags/om.png' },
    { name: 'Panama', img: 'assets/images/flags/pa.png' },
    { name: 'Peru', img: 'assets/images/flags/pe.png' },
    { name: 'French Polynesia', img: 'assets/images/flags/pf.png' },
    { name: 'Papua New Guinea', img: 'assets/images/flags/pg.png' },
    { name: 'Philippines', img: 'assets/images/flags/ph.png' },
    { name: 'Pakistan', img: 'assets/images/flags/pk.png' },
    { name: 'Poland', img: 'assets/images/flags/pl.png' },
    { name: 'Saint Pierre and Miquelon', img: 'assets/images/flags/pm.png' },
    { name: 'Pitcairn', img: 'assets/images/flags/pn.png' },
    { name: 'Puerto Rico', img: 'assets/images/flags/pr.png' },
    { name: 'Palestine, State of', img: 'assets/images/flags/ps.png' },
    { name: 'Portugal', img: 'assets/images/flags/pt.png' },
    { name: 'Palau', img: 'assets/images/flags/pw.png' },
    { name: 'Paraguay', img: 'assets/images/flags/py.png' },
    { name: 'Qatar', img: 'assets/images/flags/qa.png' },
    { name: 'Réunion', img: 'assets/images/flags/re.png' },
    { name: 'Romania', img: 'assets/images/flags/ro.png' },
    { name: 'Serbia', img: 'assets/images/flags/rs.png' },
    { name: 'Russian Federation', img: 'assets/images/flags/ru.png' },
    { name: 'Rwanda', img: 'assets/images/flags/rw.png' },
    { name: 'Saudi Arabia', img: 'assets/images/flags/sa.png' },
    { name: 'Solomon Islands', img: 'assets/images/flags/sb.png' },
    { name: 'Seychelles', img: 'assets/images/flags/sc.png' },
    { name: 'Sudan', img: 'assets/images/flags/sd.png' },
    { name: 'Sweden', img: 'assets/images/flags/se.png' },
    { name: 'Singapore', img: 'assets/images/flags/sg.png' },
    { name: 'Saint Helena, Ascension and Tristan da Cunha', img: 'assets/images/flags/sh.png' },
    { name: 'Slovenia', img: 'assets/images/flags/si.png' },
    { name: 'Svalbard and Jan Mayen', img: 'assets/images/flags/sj.png' },
    { name: 'Slovakia', img: 'assets/images/flags/sk.png' },
    { name: 'Sierra Leone', img: 'assets/images/flags/sl.png' },
    { name: 'San Marino', img: 'assets/images/flags/sm.png' },
    { name: 'Senegal', img: 'assets/images/flags/sn.png' },
    { name: 'Somalia', img: 'assets/images/flags/so.png' },
    { name: 'Suriname', img: 'assets/images/flags/sr.png' },
    { name: 'South Sudan', img: 'assets/images/flags/ss.png' },
    { name: 'Sao Tome and Principe', img: 'assets/images/flags/st.png' },
    { name: 'El Salvador', img: 'assets/images/flags/sv.png' },
    { name: 'Sint Maarten (Dutch part)', img: 'assets/images/flags/sx.png' },
    { name: 'Syrian Arab Republic', img: 'assets/images/flags/sy.png' },
    { name: 'Eswatini', img: 'assets/images/flags/sz.png' },
    { name: 'Turks and Caicos Islands', img: 'assets/images/flags/tc.png' },
    { name: 'Chad', img: 'assets/images/flags/td.png' },
    { name: 'French Southern Territories', img: 'assets/images/flags/tf.png' },
    { name: 'Togo', img: 'assets/images/flags/tg.png' },
    { name: 'Thailand', img: 'assets/images/flags/th.png' },
    { name: 'Tajikistan', img: 'assets/images/flags/tj.png' },
    { name: 'Tokelau', img: 'assets/images/flags/tk.png' },
    { name: 'Timor-Leste', img: 'assets/images/flags/tl.png' },
    { name: 'Turkmenistan', img: 'assets/images/flags/tm.png' },
    { name: 'Tunisia', img: 'assets/images/flags/tn.png' },
    { name: 'Tonga', img: 'assets/images/flags/to.png' },
    { name: 'Turkey', img: 'assets/images/flags/tr.png' },
    { name: 'Trinidad and Tobago', img: 'assets/images/flags/tt.png' },
    { name: 'Tuvalu', img: 'assets/images/flags/tv.png' },
    { name: 'Taiwan, Province of China', img: 'assets/images/flags/tw.png' },
    { name: 'Tanzania, United Republic of', img: 'assets/images/flags/tz.png' },
    { name: 'Ukraine', img: 'assets/images/flags/ua.png' },
    { name: 'Uganda', img: 'assets/images/flags/ug.png' },
    { name: 'United States Minor Outlying Islands', img: 'assets/images/flags/um.png' },
    { name: 'United States of America', img: 'assets/images/flags/us.png' },
    { name: 'Uruguay', img: 'assets/images/flags/uy.png' },
    { name: 'Uzbekistan', img: 'assets/images/flags/uz.png' },
    { name: 'Holy See', img: 'assets/images/flags/va.png' },
    { name: 'Saint Vincent and the Grenadines', img: 'assets/images/flags/vc.png' },
    { name: 'Venezuela (Bolivarian Republic of)', img: 'assets/images/flags/ve.png' },
    { name: 'Virgin Islands (British)', img: 'assets/images/flags/vg.png' },
    { name: 'Virgin Islands (U.S.)', img: 'assets/images/flags/vi.png' },
    { name: 'Viet Nam', img: 'assets/images/flags/vn.png' },
    { name: 'Vanuatu', img: 'assets/images/flags/vu.png' },
    { name: 'Wallis and Futuna', img: 'assets/images/flags/wf.png' },
    { name: 'Samoa', img: 'assets/images/flags/ws.png' },
    { name: 'Kosovo', img: 'assets/images/flags/xk.png' },
    { name: 'Yemen', img: 'assets/images/flags/ye.png' },
    { name: 'Mayotte', img: 'assets/images/flags/yt.png' },
    { name: 'South Africa', img: 'assets/images/flags/za.png' },
    { name: 'Zambia', img: 'assets/images/flags/zm.png' },
    { name: 'Zimbabwe', img: 'assets/images/flags/zw.png' }
];
    

var accent = "#02d498";
var difficultySelector = ""; /* default no diffulty selected */
var lives;
var timer;

var homeHTML = ` <h1>Welcome to Game of Flags</h1>
            <p>Aim of this Game is to Figure out the Countrys Flag Shown.</p>
            <p> There are 3 levels to choose from, each with a
                different Timer length and Lives. If Time runs out or guess incorrectly you lose a live. Lose your lives
                and the Game ends.
            </p>

            <button class="buttons" id="game-button" onclick="setGameContainerContent('pre-game')">GAME</button>`;

var preGameHTML = `<h1>CHOOSE DIFFICULTY</h1>

            <div id="difficulty-content-container">
                <div id="difficulty-checkbox-container">
                    <button class="difficulty-buttons" onclick="selectDifficultyButton(0)">EASY</button>
                    <button class="difficulty-buttons" onclick="selectDifficultyButton(1)">MEDIUM</button>
                    <button class="difficulty-buttons" onclick="selectDifficultyButton(2)">HARD</button>
                </div>

                <ul id="lives-timer-amounts">
                      <li>Lives : 3-5</li>
                      <li>Timer : 10s-5s</li>
                </ul>

                <button class="buttons" onclick="checkDifficultyIsSelected()">START</button>`;

/* loads home page first */
window.onload = function () {
    document.getElementById('game-container').innerHTML = homeHTML;
};


/* Clears all content, for new content to be added */
function setGameContainerContent(screen) {
    /* clears the container first */
    let container = document.getElementById('game-container');
    container.innerHTML = '';

    /* determins which content to add to show a certain screen */
    if (screen == "pre-game") {
        container.innerHTML = preGameHTML;
    } else if (screen == "start-game") {
        loadGame();
        container.innerHTML = "start game";
    } else {
        container.innerHTML = "ERROR";
    }
}



function selectDifficultyButton(buttonNumber) {

    let buttons = document.getElementById("difficulty-checkbox-container").children;
    let livesTimerList = document.getElementById("lives-timer-amounts").children;

    for (let i = 0; i < 3; i++) {
        if (i == buttonNumber) {
            /* adds different border colour to selected button */
            buttons[i].classList.add("difficulty-buttons-clicked");
            difficultySelector = buttons[i].innerHTML;

            if (i == 0) {
                livesTimerList[0].innerHTML = "Lives : 5";
                livesTimerList[1].innerHTML = "Timer : 10s";
            } else if (i == 1) {
                livesTimerList[0].innerHTML = "Lives : 4";
                livesTimerList[1].innerHTML = "Timer : 7s";
            } else if (i == 2) {
                livesTimerList[0].innerHTML = "Lives : 3";
                livesTimerList[1].innerHTML = "Timer : 5s";
            }

        } else {
            /* resets the rest of the buttons borders in case it was changed before*/
            buttons[i].classList.remove("difficulty-buttons-clicked");
        }
    }

}


/* makes sure a difficulty is selected for it to start game */
function checkDifficultyIsSelected() {

    if (difficultySelector != "") {
        setGameContainerContent("start-game");
    }
}

function loadGame() {

    /* set settings for respective difficulty */
    if (difficultySelector == "EASY") {
        lives = 5;
        timer = 10;
    } else if (difficultySelector == "MEDIUM") {
        lives = 4;
        timer = 7;
    } else if (difficultySelector == "HARD") {
        lives = 3;
        timer = 5;
    } else {
        print("invalid diff slector")
    }


}


/* easy writing to console */
function print(consoleMsg) {
    console.log(consoleMsg);
}