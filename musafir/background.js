let state = {
  isActive: false,
  endTime: null,
  profiles: {
    strict: { categories: ['adult'], custom: [], regex: ['.*\\.porn.*', '.*\\.xxx.*', '.*\\.adult.*', '.*\\.camshow.*'] },
    moderate: { categories: ['adult'], custom: [], regex: [] },
    custom: { categories: ['adult'], custom: [], regex: [] }
  },
  activeProfile: 'strict',
  haramKeywords: {
    adult: [
      'porn', 'xxx', 'porno', 'xvideos', 'pornhub', 'onlyfans', 'nsfw', 'hentai', 'chaturbate', 'adultfriendfinder', 'playboy', 'bangbros', 'redtube', 'youporn', 'xhamster', 'xnxx', 'tnaflix',
      'brazzers', 'realitykings', 'orgy', 'threesome', 'prostitute', 'escortservice', 'stripclub', 'fetishsite', 'livejasmin', 'webcamsex', 'adultfilm', 'x-rated', 'explicitvideo', 'uncensoredporn',
      'hardcoreporn', 'softcoreporn', 'adultactress', 'adultactor', 'pornstar', 'adultstudio', 'adultproduction', 'adultchannel', 'adultstream', 'adultforum', 'adultcommunity', 'adultnetwork',
      'toplessvideo', 'nudevideo', 'sexvideo', 'eroticvideo', 'adultlive', 'adultshow', 'adultmodel', 'adultphoto', 'adultimage', 'adultclip', 'adultscene', 'adultwebsite', 'adultlink', 'adultpage',
      'adultgallery', 'adultpic', 'camgirl', 'camshow', 'livecamsex', 'privatecam', 'sexchat', 'cybersexchat', 'adultchatroom', 'sextingapp', 'adultgame', 'eroticgame', 'seductionvideo',
      'intimatemovie', 'lustfilm', 'arousalvideo', 'orgasmvideo', 'ejaculationvideo', 'condomvideo', 'dildovideo', 'vibratorvideo', 'bondagevideo', 'bdsmvideo', 'dominationvideo', 'submissionvideo',
      'spankingvideo', 'voyeurvideo', 'exhibitionvideo', 'cuckoldvideo', 'milfvideo', 'teenporn', 'amateurporn', 'professionalporn', 'stripteasevideo', 'lapdancevideo', 'massagevideo', 'sensualvideo',
      'adultcontent', 'adultentertainment', 'adultindustry', 'adultservices', 'adultmedia', 'adultchannel', 'adultstream', 'adultforum', 'adultcommunity', 'adultnetwork', 'topless', 'nude', 'exposed',
      'genitalia', 'copulation', 'intercourse', 'fellatio', 'cunnilingus', 'pornography', 'adultphoto', 'adultimage', 'adultclip', 'adultscene', 'adultshow', 'adultlive', 'adultmodel', 'adultstar',
      'anal', 'blowjob', 'creampie', 'cumshot', 'doggystyle', 'missionary', 'cowgirl', 'reversecowgirl', 'gangbang', 'bukkake', 'fisting', 'rimming', 'pegging', 'doublepenetration', 'facial', 'handjob',
      'titjob', 'footjob', 'deepthroat', 'gagging', 'squirt', 'fingering', 'masturbation', 'solo', 'lesbian', 'gayporn', 'bisexual', 'transporn', 'shemale', 'ladyboy', 'crossdresser', 'femboy',
      'penis', 'vagina', 'breasts', 'ass', 'tits', 'dick', 'pussy', 'cock', 'cunt', 'clit', 'labia', 'nipples', 'erection', 'ejaculation', 'semen', 'cum', 'orgasm', 'arousal', 'libido', 'lust',
      'escort', 'hooker', 'whore', 'slut', 'milf', 'cougar', 'bbw', 'ebony', 'asianporn', 'latinaporn', 'interracial', 'blonde', 'brunette', 'redhead', 'petite', 'curvy', 'busty', 'thick',
      'footfetish', 'latex', 'leather', 'roleplay', 'cosplay', 'uniform', 'nurse', 'teacher', 'maid', 'police', 'domme', 'submissive', 'master', 'slave', 'collar', 'whip', 'paddle', 'cuffs',
      'sextoy', 'dildo', 'vibrator', 'buttplug', 'analbeads', 'cockring', 'strap-on', 'fleshlight', 'pocketpussy', 'lubricant', 'lube', 'condom', 'viagra', 'cialis', 'levitra', 'edpill',
      'porntube', 'spankbang', 'eporner', 'daftsex', 'motherless', 'pornhd', 'pornmd', 'pornone', 'pornoxo', 'pornmz', 'pornkai', 'pornez', 'porngo', 'pornplus', 'porntry', 'pornfidelity',
      'camsoda', 'myfreecams', 'streamate', 'bongacams', 'stripchat', 'flirt4free', 'imlive', 'xcams', 'cam4', 'cams', 'nudelive', 'rabbitscams', 'sexier', 'jasmin', 'babestation',
      'erotica', 'smut', 'lewd', 'raunchy', 'kinky', 'naughty', 'dirty', 'filthy', 'obscene', 'vulgar', 'indecent', 'licentious', 'salacious', 'lascivious', 'prurient', 'bawdy', 'ribald',
      'swingers', 'polyamory', 'openrelationship', 'cuckolding', 'hotwife', 'bull', 'stag', 'vixen', 'keyparty', 'sexparty', 'orgyparty', 'swingerclub', 'lifestyleclub', 'hedonismresort',
      'sextape', 'leakednudes', 'celebritynudes', 'fappening', 'revengeporn', 'upskirt', 'downblouse', 'candid', 'hidden cam', 'spycam', 'peeping', 'voyeurism', 'exhibitionism', 'publicsex',
      'bdsm', 'bondage', 'discipline', 'domination', 'submission', 'sadism', 'masochism', 'shibari', 'ropeplay', 'impactplay', 'waxplay', 'electroplay', 'breathplay', 'edging', 'denial',
      'chastity', 'keyholder', 'caged', 'ruinedorgasm', 'postorgasm', 'milking', 'prostatemassage', 'pegging', 'strapon', 'femdom', 'maledom', 'findom', 'paypig', 'tribute', 'walletdrain',
      'hentai', 'animeporn', 'doujinshi', 'ecchi', 'yaoi', 'yuri', 'futanari', 'tentacle', 'ahegao', 'lolicon', 'shotacon', 'incest', 'taboo', 'stepmom', 'stepsis', 'stepdad', 'stepbro',
      'camwhore', 'e-girl', 'thot', 'simp', 'coomer', 'fap', 'jerkoff', 'wank', 'beatmeat', 'ruboneout', 'nut', 'bustanut', 'cumtribute', 'goon', 'edging', 'nofap', 'pornaddict', 'sexaddict',
      'brothel', 'massageparlor', 'happyending', 'rubandtug', 'soapy', 'nurumassage', 'tantric', 'sensualmassage', 'eroticmassage', 'bodytobody', 'prostatemassage', 'lingam', 'yoni',
      'sexshop', 'adultstore', 'sexstore', 'vibratorshop', 'dildoshop', 'bdsmgear', 'fetishtoys', 'lingerie', 'sexyunderwear', 'thong', 'g-string', 'crotchless', 'fishnet', 'stockings', 'garter',
      'playmate', 'bunny', 'penthouse', 'hustler', 'maxim', 'fhm', 'nuts', 'zoo', 'loaded', 'escortmagazine', 'adultmagazine', 'pornmagazine', 'eroticmagazine', 'sexmagazine', 'nudemagazine',
      'sexworker', 'callgirl', 'gigolo', 'maleescort', 'courtesan', 'mistress', 'dominatrix', 'submissiveescort', 'fetishescort', 'bdsmescort', 'gfe', 'pse', 'bbbj', 'cim', 'cof', 'dfk',
      'bareback', 'covered', 'fullservice', 'halfandhalf', 'quickie', 'outcall', 'incall', 'agencyescort', 'independentescort', 'vipescort', 'eliteescort', 'highclassescort', 'luxuryescort',
      'pornaddiction', 'sextherapy', 'sexeducation', 'kamasutra', 'tantra', 'sexpositions', 'sextechniques', 'foreplay', 'afterplay', 'quickie', 'marathonsex', 'morningsex', 'showersex', 'carsex',
      'phonesex', 'sexting', 'dirtytalk', 'roleplaying', 'fantasy', 'kink', 'fetish', 'paraphilia', 'deviance', 'perversion', 'taboo', 'forbidden', 'illicit', 'clandestine', 'secretliaison',
      'affair', 'cheating', 'infidelity', 'adultery', 'extramarital', 'one-nightstand', 'fling', 'hookup', 'bootycall', 'friendswithbenefits', 'fwb', 'nsa', 'casualsex', 'randomsex', 'anonymoussex',
      'cybersex', 'virtualsex', 'vrporn', 'sexrobot', 'sexdoll', 'blowupdoll', 'realisticdoll', 'siliconedoll', 'tpedoll', 'lovense', 'remotevibrator', 'teledildonics', 'interactiveporn',
      'adultvideo', 'sexfilm', 'bluefilm', 'stagfilm', 'skin flick', 'adultcinema', 'porntheater', 'peepshow', 'booth', 'gloryhole', 'adultarcade', 'sexclub', 'swingclub', 'fetishclub', 'dungeon',
      'sexpositive', 'sexpositivity', 'bodypositive', 'slutshaming', 'kinkshaming', 'sexworkiswork', 'decriminalizesexwork', 'swrights', 'sexworkersrights', 'adultrights', 'pornrights', 'freespeechporn'
    ]
  }
};

async function initialize() {
  const data = await chrome.storage.local.get(['isActive', 'endTime', 'activeProfile', 'customProfiles']);
  state.isActive = data.isActive || false;
  state.endTime = data.endTime || null;
  state.activeProfile = data.activeProfile || 'strict';
  if (data.customProfiles) state.profiles.custom = data.customProfiles;

  const now = Date.now();
  if (state.isActive && state.endTime && state.endTime < now) {
    state.isActive = false;
    state.endTime = null;
    await chrome.storage.local.set({ isActive: false, endTime: null });
    console.log('Reset expired timer state at:', new Date().toLocaleString());
  } else if (state.isActive && state.endTime > now) {
    enforceTimer();
  }
  await updateDeclarativeRules();
}

chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  if (!state.isActive) return;
  try {
    const url = new URL(details.url);
    const profile = state.profiles[state.activeProfile];
    const keywords = state.haramKeywords.adult.concat(profile.custom || []);
    const regexPatterns = profile.regex.map(pattern => new RegExp(pattern));
    const isHaram = keywords.some(k => url.hostname.includes(k) || url.pathname.includes(k)) || regexPatterns.some(r => r.test(url.href));
    if (isHaram) {
      chrome.tabs.update(details.tabId, { url: chrome.runtime.getURL('blocked.html') });
      logAttempt(details.url);
    }
  } catch (e) {
    console.error('Navigation error:', e);
  }
}, { url: [{ urlMatches: '<all_urls>' }] });

async function updateDeclarativeRules() {
  const profile = state.profiles[state.activeProfile];
  const keywords = state.haramKeywords.adult.concat(profile.custom || []);
  const rules = keywords.map((keyword, index) => ({
    id: index + 1,
    priority: 1,
    action: { type: 'redirect', redirect: { extensionPath: '/blocked.html' } },
    condition: { urlFilter: `*${keyword}*`, resourceTypes: ['main_frame'] }
  }));
  try {
    await chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: Array.from({ length: 1000 }, (_, i) => i + 1),
      addRules: rules.slice(0, 1000)
    });
  } catch (e) {
    console.error('Rule update error:', e);
  }
}

if (chrome.contextMenus) {
  chrome.contextMenus.create({ id: 'blockSite', title: 'Block Site', contexts: ['page'] }, () => {
    if (chrome.runtime.lastError) console.error('Context menu error:', chrome.runtime.lastError.message);
  });
  chrome.contextMenus.onClicked.addListener((info) => {
    const url = new URL(info.pageUrl).hostname;
    if (!state.profiles[state.activeProfile].custom.includes(url)) {
      state.profiles[state.activeProfile].custom.push(url);
      chrome.storage.local.set({ customProfiles: state.profiles[state.activeProfile] });
      updateDeclarativeRules();
      notify('Blocked', `${url} added to custom blocks.`);
    }
  });
}

chrome.alarms.create('checkState', { periodInMinutes: 0.25 });
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'checkState' && state.isActive && state.endTime > Date.now()) {
    chrome.runtime.reload();
    chrome.tabs.query({}, (tabs) => tabs.forEach(tab => chrome.tabs.reload(tab.id)));
  }
});
chrome.management.onDisabled.addListener(() => {
  if (state.isActive && state.endTime > Date.now()) {
    notify('Alert', 'Musafir is active and cannot be disabled until ' + new Date(state.endTime).toLocaleString());
    chrome.management.setEnabled(chrome.runtime.id, true);
  }
});

function logAttempt(url) {
  chrome.storage.local.get('blockLog', (data) => {
    const log = data.blockLog || [];
    log.push({ url, time: new Date().toISOString() });
    chrome.storage.local.set({ blockLog: log });
    notify('Blocked', `${url} intercepted.`);
  });
}

function enforceTimer() {
  if (!state.isActive || !state.endTime) return;
  const now = Date.now();
  if (now >= state.endTime) {
    state.isActive = false;
    state.endTime = null;
    chrome.storage.local.set({ isActive: false, endTime: null });
    notify('Unlocked', 'Protection period complete.');
  } else {
    setTimeout(enforceTimer, 1000);
  }
}

function formatTime(ms) {
  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms % 86400000) / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return `${days}d ${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function notify(title, message) {
  if (chrome.notifications) {
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icons/icon48.png',
      title: title,
      message: message
    });
  }
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log('Received message:', msg);
  if (msg.action === 'startTimer') {
    if (!state.isActive) {
      console.log('Starting timer with duration:', msg.duration);
      state.isActive = true;
      state.endTime = Date.now() + msg.duration;
      chrome.storage.local.set({ isActive: true, endTime: state.endTime });
      enforceTimer();
      updateDeclarativeRules().then(() => {
        console.log('Timer started, state:', state);
        sendResponse({ success: true });
      });
    } else {
      console.log('Timer already active, rejecting request');
      sendResponse({ success: false, message: 'Already active until ' + new Date(state.endTime).toLocaleString() });
    }
  }
  return true;
});

chrome.runtime.onInstalled.addListener(() => {
  initialize();
});
chrome.runtime.onStartup.addListener(() => {
  initialize();
});