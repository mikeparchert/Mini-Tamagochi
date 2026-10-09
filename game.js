/* ==========================================================================
   DATENBANK: SAMMELALBUM / KARTENSÄTZE
   ========================================================================== */
const CARD_DATABASE = {
  pika: { id: "pika", name: "Pikachu", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" },
  glum: { id: "glum", name: "Glumanda", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" },
  schig: { id: "schig", name: "Schiggy", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png" },
  bisa: { id: "bisa", name: "Bisasam", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" },
  evo: { id: "evo", name: "Evoli", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png" },
  relaxo: { id: "relaxo", name: "Relaxo", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png" },
  gengar: { id: "gengar", name: "Gengar", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png" },
  mew: { id: "mew", name: "Mew", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png" },
  abra: { id: "abra", name: "Abra", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png" },
  machollo: { id: "machollo", name: "Machollo", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png" },
  vulpix: { id: "vulpix", name: "Vulpix", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png" },
  knofensa: { id: "knofensa", name: "Knofensa", img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png" }
};

const ALBUM_SETS = [
  {
    id: "starter_set",
    title: "Kanto-Start-Gefährten",
    cardIds: ["glum", "schig", "bisa"],
    rewardCoins: 150,
    rewardCandies: 2,
    desc: "Die drei legendären Partner aus Kanto."
  },
  {
    id: "normal_special_set",
    title: "Kuschel- & Schlafmützen",
    cardIds: ["pika", "evo", "relaxo"],
    rewardCoins: 250,
    rewardCandies: 3,
    desc: "Beliebte Gefährten, die jeder Trainer liebt."
  },
  {
    id: "nature_mystic_set",
    title: "Wilde Natur-Wunder",
    cardIds: ["vulpix", "knofensa", "abra"],
    rewardCoins: 300,
    rewardCandies: 3,
    desc: "Feuer, Pflanzen und psychische Kräfte."
  },
  {
    id: "legend_shadow_set",
    title: "Schatten & Mystik",
    cardIds: ["machollo", "gengar", "mew"],
    rewardCoins: 500,
    rewardCandies: 5,
    desc: "Kraftvolle Wesen aus den tiefsten Höhlen."
  }
];

/* ==========================================================================
   DATENBANK: ENTWICKLUNGSSTEINE (FUND-ITEMS)
   ========================================================================== */
const EVOLUTION_STONES = [
  { id: "stone_fire", icon: "🔥", name: "Feuerstein", desc: "Glüht intensiv. Entwickelt z.B. Evoli zu Flamara!" },
  { id: "stone_water", icon: "💧", name: "Wasserstein", desc: "Schimmert blau. Entwickelt z.B. Evoli zu Aquana!" },
  { id: "stone_thunder", icon: "⚡", name: "Blitzstein", desc: "Knistert elektrisch. Entwickelt z.B. Evoli zu Blitza!" },
  { id: "stone_leaf", icon: "🍃", name: "Blattstein", desc: "Enthält die Essenz uralter Wälder." },
  { id: "stone_earth", icon: "🪨", name: "Erdstein", desc: "Schwer und von robuster mineralischer Kraft." },
  { id: "stone_moon", icon: "🌙", name: "Mondstein", desc: "Strahlt ein sanftes Mondlicht aus." }
];

/* ==========================================================================
   ERKUNDUNGSTOUREN-DATENBANK (5 STUFEN)
   ========================================================================== */
const EXPEDITION_TIERS = [
  { tier: 1, title: "Stufe 1: Waldrand-Pfad", minLvl: 3, maxLvl: 10, durationMinutes: 60, rewardCoins: 20, desc: "Streife durchs hohe Gras. Für Anfänger ab Lv. 3." },
  { tier: 2, title: "Stufe 2: Felsen-Canyon", minLvl: 10, maxLvl: 25, durationMinutes: 90, rewardCoins: 40, desc: "Klettere über raue Pfade. Ab Lv. 10." },
  { tier: 3, title: "Stufe 3: Flüsternder Nebelwald", minLvl: 25, maxLvl: 50, durationMinutes: 120, rewardCoins: 50, desc: "Dichter Nebel und seltene Beeren. Ab Lv. 25." },
  { tier: 4, title: "Stufe 4: Donnerberg-Gipfel", minLvl: 50, maxLvl: 75, durationMinutes: 180, rewardCoins: 60, desc: "Windige Höhen und uralte Höhlen. Ab Lv. 50." },
  { tier: 5, title: "Stufe 5: Vulkan-Krater & Ruinen", minLvl: 75, maxLvl: 100, durationMinutes: 240, rewardCoins: 100, desc: "Die Meister-Expedition für Legenden. Ab Lv. 75." }
];

/* ==========================================================================
   DATENBANK: POKÉMON
   ========================================================================== */
const ALL_POKEMON = [
  {
    id: "pikachu",
    defaultName: "Pikachu",
    cry: "Pikachu! Pika-Pika!",
    desc: "Elektro-Maus. Entwickelt sich ab Lv. 20 zu Raichu.",
    isStarter: true,
    stages: [
      { name: "Pikachu", minLvl: 1, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" },
      { name: "Raichu", minLvl: 20, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png" }
    ]
  },
  {
    id: "charmander",
    defaultName: "Glumanda",
    cry: "Glumanda! Glu-Glu!",
    desc: "Feuer-Echse. Mutig & stolz. Entwickelt sich ab Lv. 16 und Lv. 36.",
    isStarter: true,
    stages: [
      { name: "Glumanda", minLvl: 1, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" },
      { name: "Glutexo", minLvl: 16, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png" },
      { name: "Glurak", minLvl: 36, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png" }
    ]
  },
  {
    id: "squirtle",
    defaultName: "Schiggy",
    cry: "Schiggy! Schiggy-Schiggy!",
    desc: "Wasser-Schildkröte. Entwickelt sich ab Lv. 16 und Lv. 36.",
    isStarter: true,
    stages: [
      { name: "Schiggy", minLvl: 1, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png" },
      { name: "Schillok", minLvl: 16, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png" },
      { name: "Turtok", minLvl: 36, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png" }
    ]
  },
  {
    id: "bulbasaur",
    defaultName: "Bisasam",
    cry: "Bisasam! Bisa-Bisa!",
    desc: "Pflanzen-Dino. Entwickelt sich ab Lv. 16 und Lv. 32.",
    isStarter: true,
    stages: [
      { name: "Bisasam", minLvl: 1, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" },
      { name: "Bisaknosp", minLvl: 16, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png" },
      { name: "Bisaflor", minLvl: 32, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png" }
    ]
  },
  {
    id: "eevee",
    defaultName: "Evoli",
    cry: "Evoli! Ev-Evo!",
    desc: "Entwicklungs-Wunder. Reagiert stark auf Elementarsteine!",
    isStarter: true,
    stages: [
      { name: "Evoli", minLvl: 1, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png" },
      { name: "Aquana", minLvl: 25, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png" }
    ]
  },
  {
    id: "snorlax",
    defaultName: "Relaxo",
    cry: "Relaaaxo... Gääähn!",
    desc: "Der gemütliche Riese.",
    isStarter: false,
    price: 2000,
    stages: [
      { name: "Relaxo", minLvl: 1, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png" }
    ]
  },
  {
    id: "gengar",
    defaultName: "Gengar",
    cry: "Gengar! Hehehe!",
    desc: "Das legendäre Spuk-Pokémon.",
    isStarter: false,
    price: 3500,
    stages: [
      { name: "Gengar", minLvl: 1, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png" }
    ]
  },
  {
    id: "mew",
    defaultName: "Mew",
    cry: "Mew! Miu-Miu!",
    desc: "Das mythische Ur-Pokémon.",
    isStarter: false,
    price: 5000,
    stages: [
      { name: "Mew", minLvl: 1, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png" }
    ]
  }
];

/* ==========================================================================
   SHOP-ITEMS
   ========================================================================== */
const SHOP_ITEMS = [
  {
    id: "stamina_potion",
    icon: "⚡",
    name: "Ausdauer-Elixier",
    desc: "Stellt sofort +60% Ausdauer wieder her, damit dein Pokémon auf Tour gehen kann!",
    price: 75,
    use: () => {
      if (gameState.stamina >= 100) {
        speak("Mein Ausdauer-Balken ist schon voll! ⚡", "deny");
        return false;
      }
      gameState.stamina = Math.min(100, gameState.stamina + 60);
      updateUI();
      speak(`⚡ Energiegeladen! Ausdauer um +60% gestiegen! Bereit für Abenteuer!`, 'happy');
      return true;
    }
  },
  {
    id: "food_potion",
    icon: "🧪",
    name: "24h Zauber-Futtertrank",
    desc: "Füllt den Magen auf 100% & stellt eine Futterschüssel für volle 24h auf!",
    price: 100,
    use: () => {
      gameState.hunger = 100;
      gameState.foodBuffUntil = Date.now() + (24 * 60 * 60 * 1000);
      updateUI();
      speak(`🥣 Der Zaubertrank wirkt! Die Futterschale versorgt dein Pokémon 24h lang!`, 'eat');
      return true;
    }
  },
  {
    id: "poke_doll",
    icon: "🧸",
    name: "Poképuppe (Kuschelpuppe)",
    desc: "Sitzt 24h im Raum & hält die Zufriedenheit durchgehend auf 100%!",
    price: 250,
    use: () => {
      gameState.happy = 100;
      gameState.dollBuffUntil = Date.now() + (24 * 60 * 60 * 1000);
      updateUI();
      speak(`🧸 Die Poképuppe sitzt im Zimmer! Dein Pokémon ist für 24h wunschlos glücklich!`, 'happy');
      return true;
    }
  },
  {
    id: "rare_candy",
    icon: "🍬",
    name: "Sonderbonbon",
    desc: "Schenkt sofort 1 volles Level-Up mit extra Entwicklungspunkten!",
    price: 150,
    use: () => {
      gameState.currentExp += getExpNeeded(gameState.level);
      addExp(0, true);
      speak(`🍬 Köstlich! ${gameState.nickname} hat ein Level übersprungen!`, 'lvlup');
      return true;
    }
  },
  {
    id: "clean_shield",
    icon: "🧼",
    name: "Meister-Putzset",
    desc: "Macht das Zimmer blitzblank & verhindert Häufchen für 24 Stunden.",
    price: 15,
    use: () => {
      gameState.poops = 0;
      gameState.cleanShieldUntil = Date.now() + (24 * 60 * 60 * 1000);
      updateUI();
      speak(`🧼 Alles blitzt und glänzt wie neu! Der Boden bleibt 24h geschützt!`, 'clean');
      return true;
    }
  }
];

/* ==========================================================================
   SPIELSTATUS
   ========================================================================== */
let gameState = {
  isInitialized: false,
  pokeId: "charmander",
  nickname: "Glumanda",
  level: 1,
  currentExp: 0,
  stageIndex: 0,
  hunger: 100,
  happy: 100,
  stamina: 100,
  poops: 0,
  isSleeping: false,
  isDead: false,
  alertsEnabled: false,
  lastHungerAlertTime: 0,
  lastPoopAlertTime: 0,
  foodBuffUntil: 0,
  dollBuffUntil: 0,
  cleanShieldUntil: 0,
  coins: 20,
  todaySteps: 0,
  awardedKilometers: 0,
  lastStepResetDate: new Date().toDateString(),
  reminders: [],
  unlockedPokemon: ["pikachu", "charmander", "squirtle", "bulbasaur", "eevee"],
  activeExpedition: null,
  masteredTiers: 0,
  inventory: {
    food_potion: 1,
    rare_candy: 1
  },
  collectedCards: ["glum"],
  claimedAlbumSets: [],
  lastTick: Date.now()
};

function getExpNeeded(lvl) { 
  return lvl * 40; 
}

function getUpgradeStats() {
  const t = gameState.masteredTiers || 0;
  return {
    tierLevel: t,
    hungerDecayMultiplier: Math.max(0.45, 1 - (t * 0.11)),
    happyDecayMultiplier: Math.max(0.45, 1 - (t * 0.11)),
    staminaRecoveryMultiplier: 1 + (t * 0.20),
    poopResistMultiplier: Math.max(0.5, 1 - (t * 0.10))
  };
}

function checkMasteredTiers() {
  let currentMastered = 0;
  if (gameState.level >= 100) currentMastered = 5;
  else if (gameState.level >= 75) currentMastered = 4;
  else if (gameState.level >= 50) currentMastered = 3;
  else if (gameState.level >= 25) currentMastered = 2;
  else if (gameState.level >= 10) currentMastered = 1;

  if (currentMastered > (gameState.masteredTiers || 0)) {
    gameState.masteredTiers = currentMastered;
    confetti({ particleCount: 140, spread: 80, origin: { y: 0.5 } });
    beep('lvlup');
    speak(`🌟 STAT-UPGRADE! Stufe ${currentMastered} gemeistert! Futter, Laune, Ausdauer & Sauberkeit verbessert! ✨`, 'happy');
    speakOutLoud(`Glückwunsch! Dein Pokémon hat eine neue Upgrade-Stufe gemeistert!`);
    saveGame();
  }
}

function saveGame() {
  gameState.lastTick = Date.now();
  localStorage.setItem("poke_companion_savedata", JSON.stringify(gameState));
}

/* ==========================================================================
   REISE-SCHRITTE
   ========================================================================== */
const STEPS_PER_KM = 1333;

function addTravelSteps(count) {
  if (gameState.isDead) return;
  gameState.todaySteps += count;

  const currentKm = Math.floor(gameState.todaySteps / STEPS_PER_KM);
  const newKmEarned = currentKm - (gameState.awardedKilometers || 0);

  if (newKmEarned > 0) {
    gameState.awardedKilometers = currentKm;
    const rewardCoins = newKmEarned * 25;
    gameState.coins += rewardCoins;
    beep('coin');
    confetti({ particleCount: 90, spread: 60, origin: { y: 0.5 } });
    speak(`👟 ${newKmEarned} km auf Wanderschaft geschafft! +${rewardCoins} 🪙 PokéTaler erhalten!`, 'lvlup');
  }

  const kmDisplay = (gameState.todaySteps / STEPS_PER_KM).toFixed(2);
  const uiSteps = document.getElementById("ui-steps");
  const modalKm = document.getElementById("modal-km-display");
  const modalSteps = document.getElementById("modal-steps-display");
  if (uiSteps) uiSteps.innerText = `${kmDisplay} km`;
  if (modalKm) modalKm.innerText = `${kmDisplay} km`;
  if (modalSteps) modalSteps.innerText = gameState.todaySteps.toLocaleString('de-DE');

  saveGame();
}

function processOfflineTime(elapsedMin) {
  if (elapsedMin <= 0) return;
  const now = Date.now();
  const stats = getUpgradeStats();

  if (gameState.activeExpedition) {
    const expeditionMinutes = Math.min(elapsedMin, Math.max(0, (gameState.activeExpedition.endTime - (gameState.lastTick || now)) / 60000));
    if (expeditionMinutes > 0) {
      addTravelSteps(Math.floor(expeditionMinutes * 30));
    }

    if (now >= gameState.activeExpedition.endTime) {
      finishExpedition();
    }
  }

  const isFoodBuffActive = now < (gameState.foodBuffUntil || 0);
  const isDollBuffActive = now < (gameState.dollBuffUntil || 0);

  if (isFoodBuffActive) {
    gameState.hunger = 100;
  } else {
    const hRate = gameState.isSleeping ? (100 / 720) : (100 / 120);
    gameState.hunger = Math.max(0, gameState.hunger - (elapsedMin * hRate * stats.hungerDecayMultiplier));
  }

  if (isDollBuffActive) {
    gameState.happy = 100;
  } else {
    gameState.happy = Math.max(0, gameState.happy - (elapsedMin * 0.1 * stats.happyDecayMultiplier));
  }

  gameState.stamina = Math.min(100, gameState.stamina + (elapsedMin * 1.5 * stats.staminaRecoveryMultiplier));

  if (!gameState.isSleeping && gameState.hunger > 30) {
    const earnedPassiveCoins = Math.floor(elapsedMin / 10);
    if (earnedPassiveCoins > 0) gameState.coins += earnedPassiveCoins;
  }

  const isShieldActive = now < (gameState.cleanShieldUntil || 0);
  if (!gameState.isSleeping && !isShieldActive && elapsedMin > 60) {
    gameState.poops = Math.min(3, gameState.poops + Math.floor((elapsedMin / 90) * stats.poopResistMultiplier));
  }

  if (gameState.hunger === 0 && elapsedMin > 480) {
    gameState.isDead = true;
    saveGame();
    triggerDeathScreen();
    return;
  }

  if (!gameState.isSleeping && gameState.hunger > 50 && gameState.happy > 50) {
    const passExp = Math.floor(elapsedMin / 20) * 5;
    if (passExp > 0) addExp(passExp, false);
  }
}

function loadGame() {
  const data = localStorage.getItem("poke_companion_savedata");
  if (data) {
    try {
      const parsed = JSON.parse(data);
      gameState = { ...gameState, ...parsed };
      if (!gameState.inventory) gameState.inventory = {};
      if (!gameState.collectedCards) gameState.collectedCards = ["glum"];
      if (!gameState.claimedAlbumSets) gameState.claimedAlbumSets = [];

      const todayStr = new Date().toDateString();
      if (gameState.lastStepResetDate !== todayStr) {
        gameState.todaySteps = 0;
        gameState.awardedKilometers = 0;
        gameState.lastStepResetDate = todayStr;
      }

      if (gameState.isDead) {
        triggerDeathScreen();
        return;
      }

      const elapsedMin = Math.max(0, (Date.now() - (parsed.lastTick || Date.now())) / 60000);
      processOfflineTime(elapsedMin);
    } catch (e) {}
  }
}

document.addEventListener("visibilitychange", () => {
  if (!document.hidden && gameState.isInitialized && !gameState.isDead) {
    const elapsedMin = Math.max(0, (Date.now() - (gameState.lastTick || Date.now())) / 60000);
    processOfflineTime(elapsedMin);
    updateUI();
    saveGame();
  }
});

/* ==========================================================================
   RENDERING
   ========================================================================== */
const pokeSprite = document.getElementById("poke-sprite");
const pokeContainer = document.getElementById("poke-visual-container");
const bubble = document.getElementById("speech-bubble");

function renderPokemon() {
  let data = ALL_POKEMON.find(s => s.id === gameState.pokeId);
  if (!data) {
    data = ALL_POKEMON[1];
    gameState.pokeId = data.id;
  }

  if (!data.stages[gameState.stageIndex]) {
    gameState.stageIndex = 0;
  }

  const current = data.stages[gameState.stageIndex];
  if (pokeSprite) {
    pokeSprite.src = current.img;
    pokeSprite.alt = current.name;
  }
  
  const uiNick = document.getElementById("ui-nickname");
  const uiSpec = document.getElementById("ui-species");
  const uiLvl = document.getElementById("ui-level");
  if (uiNick) uiNick.innerText = gameState.nickname || current.name;
  if (uiSpec) uiSpec.innerText = `(${current.name})`;
  if (uiLvl) uiLvl.innerText = `Lv. ${gameState.level}`;
}

function playActionAnim(animClass) {
  if (!pokeContainer) return;
  pokeContainer.classList.remove("anim-jump", "anim-eat", "anim-cuddle");
  void pokeContainer.offsetWidth;
  pokeContainer.classList.add(animClass);
  setTimeout(() => pokeContainer.classList.remove(animClass), 550);
}

function speak(txt, sound = 'happy') {
  if (!bubble) return;
  bubble.innerText = txt;
  bubble.style.animation = 'none';
  void bubble.offsetWidth;
  bubble.style.animation = 'pop 0.2s ease-out';
  if (sound) beep(sound);
}

function formatHoursMinutes(ms) {
  const totalSec = Math.max(0, Math.floor(ms / 1000));
  const hours = Math.floor(totalSec / 3600);
  const mins = Math.floor((totalSec % 3600) / 60);
  return `${hours}h ${String(mins).padStart(2, '0')}m`;
}

function updateUI() {
  const uiCoins = document.getElementById("ui-coins");
  if (uiCoins) uiCoins.innerText = gameState.coins;

  const km = (gameState.todaySteps / STEPS_PER_KM).toFixed(2);
  const uiSteps = document.getElementById("ui-steps");
  if (uiSteps) uiSteps.innerText = `${km} km`;

  const needed = getExpNeeded(gameState.level);
  const expPercent = Math.min(100, (gameState.currentExp / needed) * 100);
  const barExp = document.getElementById("bar-exp");
  const txtExp = document.getElementById("txt-exp");
  if (barExp) barExp.style.width = expPercent + "%";
  if (txtExp) txtExp.innerText = `${gameState.currentExp}/${needed}`;

  const uiLvl = document.getElementById("ui-level");
  if (uiLvl) uiLvl.innerText = `Lv. ${gameState.level}`;

  const barHunger = document.getElementById("bar-hunger");
  const txtHunger = document.getElementById("txt-hunger");
  if (barHunger) barHunger.style.width = gameState.hunger + "%";
  if (txtHunger) txtHunger.innerText = Math.round(gameState.hunger) + "%";

  const barHappy = document.getElementById("bar-happy");
  const txtHappy = document.getElementById("txt-happy");
  if (barHappy) barHappy.style.width = gameState.happy + "%";
  if (txtHappy) txtHappy.innerText = Math.round(gameState.happy) + "%";

  const barStamina = document.getElementById("bar-stamina");
  const txtStamina = document.getElementById("txt-stamina");
  if (barStamina) barStamina.style.width = gameState.stamina + "%";
  if (txtStamina) txtStamina.innerText = Math.round(gameState.stamina) + "%";

  const cleanPercent = Math.max(0, 100 - gameState.poops * 33);
  const barClean = document.getElementById("bar-clean");
  const txtClean = document.getElementById("txt-clean");
  if (barClean) barClean.style.width = cleanPercent + "%";
  if (txtClean) txtClean.innerText = cleanPercent + "%";

  const pZone = document.getElementById("poop-zone");
  if (pZone) {
    pZone.innerHTML = "";
    for (let i = 0; i < gameState.poops; i++) {
      const s = document.createElement("span");
      s.innerText = "💩";
      s.onclick = cleanUp;
      pZone.appendChild(s);
    }
  }

  const now = Date.now();
  
  const travelBadge = document.getElementById("travel-badge-overlay");
  if (travelBadge) {
    if (gameState.activeExpedition) {
      const remainingMs = Math.max(0, gameState.activeExpedition.endTime - now);
      travelBadge.style.display = "block";
      travelBadge.innerText = `🧭 Auf Tour (${formatHoursMinutes(remainingMs)})`;
    } else {
      travelBadge.style.display = "none";
    }
  }

  const foodBadge = document.getElementById("buff-food-badge");
  const propBowl = document.getElementById("prop-bowl");
  if (foodBadge && propBowl) {
    if (now < (gameState.foodBuffUntil || 0)) {
      foodBadge.style.display = "flex";
      propBowl.style.display = "block";
      document.getElementById("buff-food-timer").innerText = formatHoursMinutes(gameState.foodBuffUntil - now);
    } else {
      foodBadge.style.display = "none";
      propBowl.style.display = "none";
    }
  }

  const dollBadge = document.getElementById("buff-doll-badge");
  const propDoll = document.getElementById("prop-doll");
  if (dollBadge && propDoll) {
    if (now < (gameState.dollBuffUntil || 0)) {
      dollBadge.style.display = "flex";
      propDoll.style.display = "block";
      document.getElementById("buff-doll-timer").innerText = formatHoursMinutes(gameState.dollBuffUntil - now);
    } else {
      dollBadge.style.display = "none";
      propDoll.style.display = "none";
    }
  }
}

/* ==========================================================================
   AUDIO & WAKE LOCK
   ========================================================================== */
let silentAudioElement = null;
let wakeLockInstance = null;

function initBackgroundKeepAlive() {
  if (!silentAudioElement) {
    silentAudioElement = new Audio('data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=');
    silentAudioElement.loop = true;
  }
  silentAudioElement.play().catch(() => {});

  if ('wakeLock' in navigator && !wakeLockInstance) {
    navigator.wakeLock.request('screen').then(lock => {
      wakeLockInstance = lock;
    }).catch(() => {});
  }
}

window.addEventListener('click', initBackgroundKeepAlive, { once: true });
window.addEventListener('touchstart', initBackgroundKeepAlive, { passive: true, once: true });

/* ==========================================================================
   SICHERE LISTENER-REGISTRIERUNG & MODALS
   ========================================================================== */
function safeAddListener(id, event, handler) {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener(event, handler);
  }
}

function renderPatchHistory() {
  const container = document.getElementById("patch-history-container");
  if (!container || typeof PATCH_HISTORY === "undefined") return;
  container.innerHTML = "";

  PATCH_HISTORY.forEach((patch, index) => {
    const isLatest = index === 0;
    const card = document.createElement("div");
    card.className = "patch-card" + (isLatest ? " latest" : "");

    let notesHtml = "";
    patch.notes.forEach(n => {
      notesHtml += `<li><span>🔹</span><span>${n}</span></li>`;
    });

    card.innerHTML = `
      <div class="patch-header">
        <div>
          <span class="patch-version-tag">v${patch.version}</span>
          <strong style="margin-left: 6px; font-size: 13px; color: #fff;">${patch.title}</strong>
        </div>
        <span style="font-size: 10px; color: #94a3b8;">${patch.date}</span>
      </div>
      <ul class="patch-notes-list">
        ${notesHtml}
      </ul>
    `;

    container.appendChild(card);
  });
}

function checkAppUpdate() {
  if (typeof CURRENT_VERSION === "undefined") return;
  const lastSeenVersion = localStorage.getItem("poke_last_seen_version");
  const updateBtn = document.getElementById("btn-update-alert");
  if (updateBtn && lastSeenVersion !== CURRENT_VERSION) {
    updateBtn.style.display = "flex";
  }
}

function openUpdateModal() {
  renderPatchHistory();
  const modal = document.getElementById("update-modal");
  if (modal) modal.classList.add("active");
}

function dismissUpdateModal() {
  const modal = document.getElementById("update-modal");
  if (modal) modal.classList.remove("active");
  const updateBtn = document.getElementById("btn-update-alert");
  if (updateBtn) updateBtn.style.display = "none";
  if (typeof CURRENT_VERSION !== "undefined") {
    localStorage.setItem("poke_last_seen_version", CURRENT_VERSION);
  }
  beep('happy');
}

/* ==========================================================================
   SAMMELALBUM
   ========================================================================== */
function renderAlbumModal() {
  const container = document.getElementById("album-sets-container");
  if (!container) return;
  container.innerHTML = "";

  ALBUM_SETS.forEach(set => {
    const isClaimed = gameState.claimedAlbumSets.includes(set.id);
    const ownedCount = set.cardIds.filter(cid => gameState.collectedCards.includes(cid)).length;
    const isComplete = ownedCount === set.cardIds.length;

    const setBox = document.createElement("div");
    setBox.className = "album-set-box";

    let cardsHtml = "";
    set.cardIds.forEach(cid => {
      const card = CARD_DATABASE[cid];
      const isCollected = gameState.collectedCards.includes(cid);
      cardsHtml += `
        <div class="album-card-slot ${isCollected ? 'collected' : ''}">
          <img src="${card.img}" alt="${card.name}">
          <span class="album-card-name">${isCollected ? card.name : '???'}</span>
        </div>
      `;
    });

    setBox.innerHTML = `
      <div class="album-set-header">
        <div>
          <h4 style="font-size:13px; color:#fff;">${set.title}</h4>
          <p style="font-size:10px; color:#94a3b8;">${set.desc} (${ownedCount}/${set.cardIds.length})</p>
        </div>
        <div style="font-size:10px; font-weight:800; color:var(--poke-gold);">
          🎁 +${set.rewardCoins} 🪙 & +${set.rewardCandies} 🍬
        </div>
      </div>
      <div class="album-cards-grid">
        ${cardsHtml}
      </div>
      <button class="btn-claim-reward ${(!isComplete || isClaimed) ? 'claimed' : ''}" id="btn-claim-${set.id}">
        ${isClaimed ? 'Belohnung abgeholt ✓' : (isComplete ? 'Satz voll: Belohnung abholen! 🎁' : 'Unvollständig')}
      </button>
    `;

    if (isComplete && !isClaimed) {
      setBox.querySelector(`#btn-claim-${set.id}`).onclick = () => {
        gameState.claimedAlbumSets.push(set.id);
        gameState.coins += set.rewardCoins;
        gameState.inventory.rare_candy = (gameState.inventory.rare_candy || 0) + set.rewardCandies;
        
        confetti({ particleCount: 130, spread: 80, origin: { y: 0.5 } });
        beep('coin');
        speak(`🎉 Kartensatz '${set.title}' komplett! +${set.rewardCoins} 🪙 & +${set.rewardCandies} Sonderbonbons! 🍬`, 'lvlup');
        saveGame();
        renderAlbumModal();
        updateUI();
      };
    }

    container.appendChild(setBox);
  });
}

/* ==========================================================================
   INVENTAR
   ========================================================================== */
function renderInventoryModal() {
  const box = document.getElementById("inventory-list-box");
  if (!box) return;
  box.innerHTML = "";

  const allPossibleItems = [
    ...SHOP_ITEMS,
    ...EVOLUTION_STONES.map(st => ({
      ...st,
      isStone: true,
      use: () => useEvolutionStone(st)
    }))
  ];

  const itemsWithCount = allPossibleItems.filter(it => (gameState.inventory[it.id] || 0) > 0);

  if (itemsWithCount.length === 0) {
    box.innerHTML = `
      <div style="text-align:center; padding: 24px 10px; color:#94a3b8; font-size:12px;">
        Dein Rucksack ist leer.<br>Finde Steine auf Reisen oder kaufe Vorräte im PokéShop (🛍️)!
      </div>
    `;
    return;
  }

  itemsWithCount.forEach(it => {
    const count = gameState.inventory[it.id];
    const card = document.createElement("div");
    card.className = "inv-card";
    card.innerHTML = `
      <div style="font-size:24px; min-width:32px; text-align:center;">${it.icon}</div>
      <div class="inv-card-info" style="flex:1;">
        <h4>${it.name} <span style="color:var(--poke-yellow); font-size:11px;">(x${count})</span></h4>
        <p>${it.desc}</p>
      </div>
      <button class="btn-use-item" id="use-item-${it.id}">Benutzen</button>
    `;

    card.querySelector(`#use-item-${it.id}`).onclick = () => {
      if ((gameState.inventory[it.id] || 0) > 0) {
        const success = it.use();
        if (success !== false && !it.isStone) {
          gameState.inventory[it.id]--;
          if (gameState.inventory[it.id] <= 0) delete gameState.inventory[it.id];
          saveGame();
          renderInventoryModal();
          updateUI();
        }
      }
    };

    box.appendChild(card);
  });
}

function useEvolutionStone(stoneObj) {
  if (gameState.pokeId === "eevee") {
    let evoTarget = null;
    if (stoneObj.id === "stone_water") evoTarget = "Aquana";
    else if (stoneObj.id === "stone_thunder") evoTarget = "Blitza";
    else if (stoneObj.id === "stone_fire") evoTarget = "Flamara";

    if (evoTarget) {
      gameState.inventory[stoneObj.id]--;
      if (gameState.inventory[stoneObj.id] <= 0) delete gameState.inventory[stoneObj.id];

      confetti({ particleCount: 160, spread: 90, origin: { y: 0.5 } });
      beep('lvlup');
      speak(`✨ Der ${stoneObj.name} leuchtet auf! Evoli entwickelt sich zu ${evoTarget}! 🎉`, 'lvlup');
      speakOutLoud(`Unglaublich! Die Kraft des Steins verwandelt dein Pokémon in ${evoTarget}!`);

      const pokeData = ALL_POKEMON.find(p => p.id === "eevee");
      if (evoTarget === "Aquana") {
        pokeData.stages[1] = { name: "Aquana", minLvl: 1, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png" };
      } else if (evoTarget === "Blitza") {
        pokeData.stages[1] = { name: "Blitza", minLvl: 1, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png" };
      } else if (evoTarget === "Flamara") {
        pokeData.stages[1] = { name: "Flamara", minLvl: 1, img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png" };
      }
      gameState.stageIndex = 1;

      saveGame();
      renderPokemon();
      renderInventoryModal();
      updateUI();
      return true;
    }
  }

  speak(`Der ${stoneObj.name} kann auf dein aktuelles Pokémon nicht angewendet werden. 💎`, 'deny');
  return false;
}

/* ==========================================================================
   ERKUNDUNGSTOUREN
   ========================================================================== */
function renderExpeditionModal() {
  const stats = getUpgradeStats();
  const upgradeText = document.getElementById("txt-active-upgrades");
  if (upgradeText) {
    if (stats.tierLevel === 0) {
      upgradeText.innerText = `Noch keine Upgrades. Erreiche Level 10 (Stufe 1 meisterbar) für den ersten Boost!`;
    } else {
      upgradeText.innerText = `Stufe ${stats.tierLevel}/5 gemeistert: Futter hält ${Math.round((1 - stats.hungerDecayMultiplier)*100)}% länger, Stimmung +${Math.round((1 - stats.happyDecayMultiplier)*100)}% stabiler, Ausdauer +${Math.round((stats.staminaRecoveryMultiplier - 1)*100)}% schneller!`;
    }
  }

  const list = document.getElementById("expedition-list-box");
  if (!list) return;
  list.innerHTML = "";

  EXPEDITION_TIERS.forEach(t => {
    const isLevelUnlocked = gameState.level >= t.minLvl;
    const isOverLevel = gameState.level > t.maxLvl;

    const card = document.createElement("div");
    card.className = "exp-card" + (!isLevelUnlocked ? " locked" : "");

    const hoursTxt = (t.durationMinutes / 60) + " Std.";
    const statusLabel = isOverLevel ? "(Gemeistert ✓)" : (isLevelUnlocked ? "(Verfügbar)" : `(ab Lv. ${t.minLvl})`);

    card.innerHTML = `
      <div class="exp-card-info">
        <h4>${t.title} ${statusLabel}</h4>
        <p>⏱️ Dauer: ${hoursTxt} | 🎁 Belohnung: ${t.rewardCoins} 🪙 & starke EP</p>
        <p style="color:#64748b;">${t.desc}</p>
      </div>
      <button class="btn-start-exp ${(!isLevelUnlocked || gameState.activeExpedition) ? 'disabled' : ''}" id="btn-exp-${t.tier}">
        ${gameState.activeExpedition ? 'Unterwegs' : (isLevelUnlocked ? 'Starten 🚀' : `Gesperrt`)}
      </button>
    `;

    if (isLevelUnlocked && !gameState.activeExpedition) {
      card.querySelector(`#btn-exp-${t.tier}`).onclick = () => {
        startExpedition(t);
      };
    }

    list.appendChild(card);
  });
}

function startExpedition(tierObj) {
  if (gameState.activeExpedition) return;
  if (gameState.isSleeping) return speak("Dein Pokémon schläft fest! 🌙", "deny");

  if (gameState.stamina < 25) {
    return speak(`Zu müde für die Reise! ⚡ Ausdauer liegt bei ${Math.round(gameState.stamina)}% (mindestens 25% nötig). Lass es ruhen oder nimm ein Ausdauer-Elixier!`, 'deny');
  }

  gameState.stamina = Math.max(0, gameState.stamina - 15);

  const avgExpPerLvl = getExpNeeded(gameState.level);
  const calculatedRewardExp = Math.round(avgExpPerLvl * 0.85);

  const endTime = Date.now() + (tierObj.durationMinutes * 60 * 1000);
  gameState.activeExpedition = {
    tier: tierObj.tier,
    title: tierObj.title,
    endTime: endTime,
    durationMinutes: tierObj.durationMinutes,
    rewardCoins: tierObj.rewardCoins,
    rewardExp: calculatedRewardExp
  };

  const expModal = document.getElementById("expedition-modal");
  if (expModal) expModal.classList.remove("active");
  saveGame();
  updateUI();
  speak(`Auf nach ${tierObj.title}! Gute Reise, ${gameState.nickname}! 🎒🧭`, 'happy');
  speakOutLoud(`Auf geht's zur Erkundungstour! Bis später!`);
}

function finishExpedition() {
  if (!gameState.activeExpedition) return;

  const exp = gameState.activeExpedition;
  gameState.activeExpedition = null;

  gameState.coins += exp.rewardCoins;
  addExp(exp.rewardExp, false);
  checkMasteredTiers();

  const roll = Math.random();
  let lootCount = 0;
  if (roll < 0.22) lootCount = 0;
  else if (roll < 0.70) lootCount = 1;
  else if (roll < 0.92) lootCount = 2;
  else lootCount = 3;

  let lootMessages = [];

  for (let i = 0; i < lootCount; i++) {
    if (Math.random() < 0.5) {
      const randomStone = EVOLUTION_STONES[Math.floor(Math.random() * EVOLUTION_STONES.length)];
      gameState.inventory[randomStone.id] = (gameState.inventory[randomStone.id] || 0) + 1;
      lootMessages.push(`💎 ${randomStone.name}`);
    } else {
      const cardKeys = Object.keys(CARD_DATABASE);
      const randomCardKey = cardKeys[Math.floor(Math.random() * cardKeys.length)];
      const cardObj = CARD_DATABASE[randomCardKey];
      if (!gameState.collectedCards.includes(cardObj.id)) {
        gameState.collectedCards.push(cardObj.id);
        lootMessages.push(`🃏 ${cardObj.name}-Karte (Neu!)`);
      } else {
        gameState.coins += 15;
        lootMessages.push(`🃏 ${cardObj.name}-Duplikat (+15 🪙)`);
      }
    }
  }

  confetti({ particleCount: 130, spread: 80, origin: { y: 0.5 } });
  beep('lvlup');

  let resultText = `🎉 Zurück von ${exp.title}! (+${exp.rewardCoins} 🪙, +${exp.rewardExp} EP)`;
  if (lootCount === 0) {
    resultText += ` — Leider keine Schätze gefunden, aber viel gelernt!`;
  } else {
    resultText += ` — Gefunden: ${lootMessages.join(", ")}!`;
  }

  speak(resultText, 'happy');
  speakOutLoud(`Ich bin von meiner Erkundungstour zurück!`);
  
  saveGame();
  updateUI();
}

/* ==========================================================================
   SOUND & SPRACHAUSGABE
   ========================================================================== */
let audioCtx = null;
function beep(type = 'happy') {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    const t = audioCtx.currentTime;

    if (type === 'happy') {
      osc.frequency.setValueAtTime(440, t);
      osc.frequency.exponentialRampToValueAtTime(880, t + 0.15);
      gain.gain.setValueAtTime(0.15, t);
      gain.gain.linearRampToValueAtTime(0, t + 0.15);
      osc.start(t); osc.stop(t + 0.15);
    } else if (type === 'eat') {
      osc.frequency.setValueAtTime(320, t);
      osc.frequency.exponentialRampToValueAtTime(540, t + 0.12);
      gain.gain.setValueAtTime(0.2, t);
      gain.gain.linearRampToValueAtTime(0, t + 0.12);
      osc.start(t); osc.stop(t + 0.12);
    } else if (type === 'deny') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(200, t);
      osc.frequency.setValueAtTime(150, t + 0.1);
      gain.gain.setValueAtTime(0.15, t);
      gain.gain.linearRampToValueAtTime(0, t + 0.2);
      osc.start(t); osc.stop(t + 0.2);
    } else if (type === 'clean') {
      osc.frequency.setValueAtTime(600, t);
      osc.frequency.exponentialRampToValueAtTime(1200, t + 0.15);
      gain.gain.setValueAtTime(0.15, t);
      gain.gain.linearRampToValueAtTime(0, t + 0.15);
      osc.start(t); osc.stop(t + 0.15);
    } else if (type === 'lvlup') {
      osc.frequency.setValueAtTime(350, t);
      osc.frequency.exponentialRampToValueAtTime(1100, t + 0.35);
      gain.gain.setValueAtTime(0.25, t);
      gain.gain.linearRampToValueAtTime(0, t + 0.35);
      osc.start(t); osc.stop(t + 0.35);
    } else if (type === 'coin') {
      osc.frequency.setValueAtTime(987, t);
      osc.frequency.setValueAtTime(1318, t + 0.08);
      gain.gain.setValueAtTime(0.2, t);
      gain.gain.linearRampToValueAtTime(0, t + 0.25);
      osc.start(t); osc.stop(t + 0.25);
    } else if (type === 'alarm') {
      osc.type = 'square';
      osc.frequency.setValueAtTime(587, t);
      osc.frequency.setValueAtTime(880, t + 0.1);
      osc.frequency.setValueAtTime(587, t + 0.2);
      osc.frequency.setValueAtTime(880, t + 0.3);
      gain.gain.setValueAtTime(0.2, t);
      gain.gain.linearRampToValueAtTime(0, t + 0.4);
      osc.start(t); osc.stop(t + 0.4);
    }
  } catch(e) {}
}

function speakOutLoud(text) {
  if (!('speechSynthesis' in window)) return;
  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';
    utterance.rate = 1.05;
    utterance.pitch = 1.25;
    window.speechSynthesis.speak(utterance);
  } catch (e) {}
}

function triggerPocketAlert(title, message, voiceText) {
  beep('alarm');
  speakOutLoud(voiceText);
  if ('vibrate' in navigator) navigator.vibrate([200, 100, 200, 100, 400]);
}

/* ==========================================================================
   SPRACHSTEUERUNG
   ========================================================================== */
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;
let isListening = false;
let pendingReminderText = null;

if (SpeechRecognition) {
  try {
    recognition = new SpeechRecognition();
    recognition.lang = 'de-DE';
    recognition.continuous = true;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
      handleVoiceCommand(transcript);
    };
    recognition.onerror = () => stopListening();
    recognition.onend = () => {
      if (isListening) {
        try { recognition.start(); } catch (e) {}
      }
    };
  } catch(e) {}
}

function startListening() {
  initBackgroundKeepAlive();
  const micBtn = document.getElementById("btn-mic");
  if (!recognition) {
    const promptText = prompt("Sprich oder tippe deinen Befehl (z.B. Glumanda oder: Erinnere mich an Einkaufen):");
    if (promptText) handleVoiceCommand(promptText.toLowerCase());
    return;
  }
  isListening = true;
  if (micBtn) micBtn.classList.add("listening");
  try {
    recognition.start();
    speak(`Ich höre dir zu! Sag meinen Namen! 🎙️`);
  } catch (e) {
    const promptText = prompt("Befehl eingeben:");
    if (promptText) handleVoiceCommand(promptText.toLowerCase());
  }
}

function stopListening() {
  isListening = false;
  const micBtn = document.getElementById("btn-mic");
  if (micBtn) micBtn.classList.remove("listening");
  if (recognition) {
    try { recognition.stop(); } catch (e) {}
  }
}

function handleVoiceCommand(rawText) {
  let pokeData = ALL_POKEMON.find(p => p.id === gameState.pokeId) || ALL_POKEMON[1];
  const nickname = (gameState.nickname || "").toLowerCase();
  const defaultName = pokeData.defaultName.toLowerCase();
  const currentCry = pokeData.cry || `${pokeData.defaultName}!`;

  if (pendingReminderText) {
    parseAndSetReminderTime(rawText, pendingReminderText);
    pendingReminderText = null;
    return;
  }

  const isCalledByName = rawText.includes(nickname) || rawText.includes(defaultName);
  const isReminderRequest = rawText.includes("erinnere mich") || rawText.includes("erinnerung") || rawText.includes("erinner mich");

  if (isReminderRequest) {
    let task = rawText;
    if (task.includes("daran dass")) task = task.split("daran dass")[1];
    else if (task.includes("daran")) task = task.split("daran")[1];
    else if (task.includes("dass")) task = task.split("dass")[1];
    else if (task.includes("an ")) task = task.split("an ")[1];
    else if (task.includes("erinnere mich")) task = task.split("erinnere mich")[1];

    task = task.replace(/ich\s+/g, '').replace(/später\s+/g, '').replace(/noch\s+/g, '').replace(/muss/g, '').trim();

    if (task.length > 2) {
      pendingReminderText = task;
      playActionAnim("anim-jump");
      speak(`Wann soll es denn soweit sein? ⏰ Sag die Uhrzeit oder Minuten!`);
      speakOutLoud("Wann soll es denn soweit sein? Sag mir bitte die Uhrzeit oder in wie vielen Minuten!");
    } else {
      speak(`Woran soll ich dich erinnern? Sag z.B.: Erinnere mich an Einkaufen!`);
      speakOutLoud("Woran soll ich dich erinnern?");
    }
    return;
  }

  if (isCalledByName) {
    playActionAnim("anim-jump");
    speak(`${currentCry} 💕`);
    speakOutLoud(currentCry);
    return;
  }

  if (rawText.includes("wie geht es dir") || rawText.includes("hallo")) {
    playActionAnim("anim-cuddle");
    speak(`${currentCry} Mir geht es super!`);
    speakOutLoud(`${currentCry} Mir geht es super, danke!`);
  }
}

function parseAndSetReminderTime(speechText, taskText) {
  const now = new Date();
  let targetTime = null;
  let displayTimeStr = "";

  const minuteMatch = speechText.match(/(\d+)\s*minute/);
  if (minuteMatch) {
    const mins = parseInt(minuteMatch[1], 10);
    targetTime = new Date(now.getTime() + mins * 60000);
    displayTimeStr = `in ${mins} Minuten`;
  } else {
    const timeMatch = speechText.match(/(\d{1,2})(?::|\s*uhr\s*)(\d{1,2})?/);
    if (timeMatch) {
      let hours = parseInt(timeMatch[1], 10);
      let minutes = timeMatch[2] ? parseInt(timeMatch[2], 10) : 0;
      
      targetTime = new Date();
      targetTime.setHours(hours, minutes, 0, 0);

      if (targetTime.getTime() <= now.getTime()) {
        targetTime.setDate(targetTime.getDate() + 1);
      }
      displayTimeStr = `um ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} Uhr`;
    }
  }

  if (targetTime) {
    if (!gameState.reminders) gameState.reminders = [];
    gameState.reminders.push({
      text: taskText,
      time: targetTime.getTime(),
      timeStr: displayTimeStr
    });
    saveGame();

    beep('happy');
    playActionAnim("anim-jump");
    const confirmMsg = `Alles klar! Ich erinnere dich ${displayTimeStr} an: ${taskText}! ⏰`;
    speak(confirmMsg);
    speakOutLoud(`Alles klar! Ich erinnere dich ${displayTimeStr} an: ${taskText}!`);
  } else {
    speak(`Ich habe die Zeit nicht verstanden. Sag z.B.: In 10 Minuten oder Um 15 Uhr!`);
    speakOutLoud("Das habe ich leider nicht verstanden. Bitte sag zum Beispiel: In 10 Minuten!");
  }
}

/* ==========================================================================
   SHOP MODAL
   ========================================================================== */
function renderShop() {
  const coinsDisplay = document.getElementById("shop-coins-display");
  if (coinsDisplay) coinsDisplay.innerText = gameState.coins;

  const itemsBox = document.getElementById("shop-items-box");
  if (itemsBox) {
    itemsBox.innerHTML = "";
    SHOP_ITEMS.forEach(it => {
      const currentCount = gameState.inventory[it.id] || 0;
      const card = document.createElement("div");
      card.className = "shop-card";
      card.innerHTML = `
        <div class="shop-card-left">
          <div class="shop-card-icon">${it.icon}</div>
          <div class="shop-card-info">
            <h4>${it.name} <span style="font-size:11px; color:#94a3b8;">(Im Rucksack: ${currentCount})</span></h4>
            <p>${it.desc}</p>
          </div>
        </div>
        <button class="btn-buy" id="buy-it-${it.id}">🪙 ${it.price}</button>
      `;
      card.querySelector(`#buy-it-${it.id}`).onclick = () => {
        if (gameState.coins >= it.price) {
          gameState.coins -= it.price;
          gameState.inventory[it.id] = (gameState.inventory[it.id] || 0) + 1;
          beep('coin');
          speak(`${it.name} in den Rucksack gepackt! 🎒`, 'happy');
          saveGame();
          renderShop();
          updateUI();
        } else {
          beep('deny');
          alert(`Du benötigst noch ${it.price - gameState.coins} Taler!`);
        }
      };
      itemsBox.appendChild(card);
    });
  }

  const pokeBox = document.getElementById("shop-pokemon-box");
  if (pokeBox) {
    pokeBox.innerHTML = "";
    ALL_POKEMON.filter(p => !p.isStarter).forEach(p => {
      const isOwned = gameState.unlockedPokemon.includes(p.id);
      const card = document.createElement("div");
      card.className = "shop-card";
      card.innerHTML = `
        <div class="shop-card-left">
          <img src="${p.stages[0].img}" alt="${p.defaultName}" />
          <div class="shop-card-info">
            <h4>${p.defaultName}</h4>
            <p>${p.desc}</p>
          </div>
        </div>
        <button class="btn-buy ${isOwned ? 'owned' : ''}" id="buy-pk-${p.id}">
          ${isOwned ? 'Freigeschaltet ✓' : `🪙 ${p.price}`}
        </button>
      `;
      if (!isOwned) {
        card.querySelector(`#buy-pk-${p.id}`).onclick = () => {
          if (gameState.coins >= p.price) {
            gameState.coins -= p.price;
            gameState.unlockedPokemon.push(p.id);
            beep('coin');
            confetti({ particleCount: 120, spread: 80 });
            speak(`🎉 Glückwunsch! Du hast ${p.defaultName} freigeschaltet!`, 'lvlup');
            saveGame();
            renderShop();
            updateUI();
          } else {
            beep('deny');
            alert(`Du brauchst noch ${p.price - gameState.coins} Taler!`);
          }
        };
      }
      pokeBox.appendChild(card);
    });
  }
}

let tempSelectedStarter = "charmander";
function showStarterSelection() {
  const modal = document.getElementById("starter-modal");
  const box = document.getElementById("starter-cards-box");
  if (!modal || !box) return;
  box.innerHTML = "";

  const available = ALL_POKEMON.filter(p => gameState.unlockedPokemon.includes(p.id));
  tempSelectedStarter = available[0].id;

  available.forEach(s => {
    const card = document.createElement("div");
    card.className = "starter-card" + (s.id === tempSelectedStarter ? " selected" : "");
    card.innerHTML = `
      <img src="${s.stages[0].img}" alt="${s.defaultName}" />
      <div class="starter-info">
        <h4>${s.defaultName}</h4>
        <p>${s.desc}</p>
      </div>
    `;
    card.onclick = () => {
      tempSelectedStarter = s.id;
      document.querySelectorAll(".starter-card").forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
      document.getElementById("input-nickname").placeholder = s.defaultName;
    };
    box.appendChild(card);
  });
  modal.classList.add("active");
}

function triggerDeathScreen() {
  const title = document.getElementById("death-title");
  if (title) title.innerText = `${gameState.nickname} ist eingeschlafen`;
  const screen = document.getElementById("death-screen");
  if (screen) screen.classList.add("active");
  speakOutLoud(`${gameState.nickname} ist leider eingeschlafen.`);
}

/* ==========================================================================
   LEVEL- & EXP-SYSTEM
   ========================================================================== */
function addExp(amount, notify = true) {
  if (gameState.isDead) return;
  gameState.currentExp += amount;
  let leveledUp = false;

  while (gameState.currentExp >= getExpNeeded(gameState.level)) {
    gameState.currentExp -= getExpNeeded(gameState.level);
    gameState.level++;
    leveledUp = true;
    gameState.coins += 25;
  }

  if (leveledUp) {
    beep('lvlup');
    confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
    speak(`LEVEL UP! ${gameState.nickname} ist jetzt Level ${gameState.level}! +25 🪙! 🌟`, 'happy');
    speakOutLoud(`Juhu! Ich bin jetzt Level ${gameState.level}!`);
    checkEvolution();
    checkMasteredTiers();
  } else if (notify) {
    speak(`+${amount} EP erhalten! ✨`, 'happy');
  }

  updateUI();
  renderPokemon();
  saveGame();
}

function checkEvolution() {
  const data = ALL_POKEMON.find(s => s.id === gameState.pokeId);
  if (!data) return;
  for (let i = data.stages.length - 1; i >= 0; i--) {
    if (gameState.level >= data.stages[i].minLvl && i > gameState.stageIndex) {
      gameState.stageIndex = i;
      confetti({ particleCount: 160, spread: 100, origin: { y: 0.5 } });
      speak(`WAS?! ${gameState.nickname} entwickelt sich zu ${data.stages[i].name}! 🎉✨`, 'happy');
      speakOutLoud(`Unglaublich! Ich entwickle mich zu ${data.stages[i].name}!`);
      break;
    }
  }
}

function cleanUp() {
  if (gameState.poops === 0) return speak("Das Zimmer ist schon sauber! ✨", "happy");
  gameState.poops = 0;
  gameState.lastPoopAlertTime = 0;
  gameState.happy = Math.min(100, gameState.happy + 15);
  gameState.coins += 8;
  speak("Alles wieder sauber! +10 EP & +8 🪙! 🧹✨", "clean");
  addExp(10, false);
  updateUI();
  saveGame();
}

function applySleepVisuals() {
  const ov = document.getElementById("night-overlay");
  const lightBtn = document.getElementById("btn-light");
  if (gameState.isSleeping) {
    if (ov) ov.classList.add("active");
    if (lightBtn) lightBtn.innerText = "☀️";
    if (pokeContainer) pokeContainer.classList.add("anim-sleeping");
  } else {
    if (ov) ov.classList.remove("active");
    if (lightBtn) lightBtn.innerText = "🌙";
    if (pokeContainer) pokeContainer.classList.remove("anim-sleeping");
  }
}

/* ==========================================================================
   INITIALISIERUNG ALLER EVENT-LISTENER
   ========================================================================== */
// Glocke
const alertBtn = document.getElementById("btn-alert-toggle");
if (alertBtn) {
  alertBtn.onclick = () => {
    initBackgroundKeepAlive();
    gameState.alertsEnabled = !gameState.alertsEnabled;

    if (gameState.alertsEnabled) {
      alertBtn.classList.add("active");
      alertBtn.innerText = "🔔";
      beep('happy');
      speak("Hosentaschen-Rufe eingeschaltet! 🔔");
      speakOutLoud("Hosentaschen-Rufe eingeschaltet!");
    } else {
      alertBtn.classList.remove("active");
      alertBtn.innerText = "🔕";
      beep('deny');
      speak("Hosentaschen-Rufe stummgeschaltet. 🔕");
    }
    saveGame();
  };
}

// Rucksack / Inventar
safeAddListener("btn-open-inventory", "click", () => {
  renderInventoryModal();
  const modal = document.getElementById("inventory-modal");
  if (modal) modal.classList.add("active");
});
safeAddListener("btn-close-inventory", "click", () => {
  const modal = document.getElementById("inventory-modal");
  if (modal) modal.classList.remove("active");
});

// Patch-Notes & Info (ℹ️)
safeAddListener("btn-open-patchnotes", "click", openUpdateModal);
safeAddListener("btn-update-alert", "click", openUpdateModal);
safeAddListener("btn-dismiss-update", "click", dismissUpdateModal);
safeAddListener("btn-close-update", "click", dismissUpdateModal);

// Sammelbuch (📖)
safeAddListener("btn-open-album", "click", () => {
  renderAlbumModal();
  const modal = document.getElementById("album-modal");
  if (modal) modal.classList.add("active");
});
safeAddListener("btn-close-album", "click", () => {
  const modal = document.getElementById("album-modal");
  if (modal) modal.classList.remove("active");
});

// Expeditionen (🧭)
safeAddListener("btn-open-expedition", "click", () => {
  renderExpeditionModal();
  const modal = document.getElementById("expedition-modal");
  if (modal) modal.classList.add("active");
});
safeAddListener("btn-close-expedition", "click", () => {
  const modal = document.getElementById("expedition-modal");
  if (modal) modal.classList.remove("active");
});

// Shop (🛍️)
safeAddListener("btn-open-shop", "click", () => {
  renderShop();
  const modal = document.getElementById("shop-modal");
  if (modal) modal.classList.add("active");
});
safeAddListener("btn-close-shop", "click", () => {
  const modal = document.getElementById("shop-modal");
  if (modal) modal.classList.remove("active");
});

// Mikrofon (🎙️)
safeAddListener("btn-mic", "click", () => {
  if (!isListening) {
    startListening();
  } else {
    stopListening();
    speak("Mikrofon pausiert. 🤫");
  }
});

// Wechseln (🔄) & Schlafen (🌙)
safeAddListener("btn-change-pet", "click", () => {
  if (confirm("Partner wechseln? Deine PokéTaler und Vorräte bleiben erhalten!")) {
    showStarterSelection();
  }
});
safeAddListener("btn-light", "click", () => {
  gameState.isSleeping = !gameState.isSleeping;
  applySleepVisuals();
  if (gameState.isSleeping) {
    speak("Gute Nacht! Ich schlafe tief und fest... 🌙", "happy");
    speakOutLoud("Gute Nacht, ich gehe jetzt schlafen!");
  } else {
    speak("Guten Morgen! Ich bin wieder hellwach! ☀️", "happy");
    speakOutLoud("Guten Morgen! Ich bin wieder wach!");
  }
  saveGame();
});

// Fitness / Distanz
safeAddListener("btn-open-fitness", "click", () => {
  const modal = document.getElementById("fitness-modal");
  if (modal) modal.classList.add("active");
});
safeAddListener("btn-close-fitness", "click", () => {
  const modal = document.getElementById("fitness-modal");
  if (modal) modal.classList.remove("active");
});

// Wiederbelebung & Starter-Bestätigung
safeAddListener("btn-rebirth", "click", () => {
  const screen = document.getElementById("death-screen");
  if (screen) screen.classList.remove("active");
  showStarterSelection();
});
safeAddListener("btn-confirm-starter", "click", () => {
  const chosen = ALL_POKEMON.find(s => s.id === tempSelectedStarter) || ALL_POKEMON[1];
  const customName = document.getElementById("input-nickname").value.trim();

  gameState.isInitialized = true;
  gameState.pokeId = chosen.id;
  gameState.nickname = customName || chosen.defaultName;
  gameState.level = 1;
  gameState.currentExp = 0;
  gameState.stageIndex = 0;
  gameState.hunger = 100;
  gameState.happy = 100;
  gameState.stamina = 100;
  gameState.poops = 0;
  gameState.isSleeping = false;
  gameState.isDead = false;

  const starterModal = document.getElementById("starter-modal");
  if (starterModal) starterModal.classList.remove("active");
  saveGame();
  renderPokemon();
  updateUI();
  speak(`Willkommen auf der Welt, ${gameState.nickname}! 💕`, 'happy');
  speakOutLoud(`Hallo, ich bin ${gameState.nickname}! Schön dich kennenzulernen!`);
});

// Aktionskacheln unten
safeAddListener("btn-feed", "click", () => {
  if (gameState.isSleeping) return speak("Zzz... Bitte lass mich schlafen! 🌙", "deny");
  if (gameState.activeExpedition) return speak("Dein Pokémon ist gerade auf Erkundungstour! 🧭", "deny");
  if (Date.now() < (gameState.foodBuffUntil || 0)) return speak("🥣 Die 24h-Futterschüssel ist voll! Dein Pokémon ist satt!", "eat");
  if (gameState.hunger >= 100) return speak("Puh, mein Bauch ist zu 100% voll! 🍓", "deny");

  const hadRealHunger = gameState.hunger < 70;
  gameState.hunger = Math.min(100, gameState.hunger + 25);
  gameState.happy = Math.min(100, gameState.happy + 4);
  playActionAnim("anim-eat");

  if (gameState.hunger > 25) gameState.lastHungerAlertTime = 0;

  if (hadRealHunger) {
    gameState.coins += 5;
    speak("Mmh lecker! Pünktlich gefüttert: +5 🪙! 🍓✨", "eat");
    addExp(15, false);
  } else {
    speak(`Mampf! Sättigung jetzt bei ${Math.round(gameState.hunger)}%! 🍓`, "eat");
  }
  updateUI();
  saveGame();
});

safeAddListener("btn-play", "click", () => {
  if (gameState.isSleeping) return speak("Im Schlaf wird nicht trainiert! 💤", "deny");
  if (gameState.activeExpedition) return speak("Dein Pokémon erkundet gerade die Welt! 🧭", "deny");
  if (gameState.stamina < 25) return speak("Puh, ich bin k.o.! Pause! ⚡", "deny");
  if (gameState.poops > 0) return speak("Ih, hier liegt ein Häufchen! Erst putzen! 💩", "deny");

  gameState.happy = Math.min(100, gameState.happy + 20);
  gameState.stamina = Math.max(0, gameState.stamina - 25);
  if (Date.now() >= (gameState.foodBuffUntil || 0)) {
    gameState.hunger = Math.max(0, gameState.hunger - 10);
  }
  gameState.coins += 10;
  playActionAnim("anim-jump");
  speak("Super Trainingsrunde! (+10 🪙) ⚽✨", "happy");
  addExp(20, false);
  updateUI();
  saveGame();
});

safeAddListener("btn-pet", "click", () => {
  if (gameState.isSleeping) return speak("Zzz... *schnurrt im Schlaf*... 💖", "happy");
  if (gameState.activeExpedition) return speak("Dein Pokémon schickt dir Grüße von der Reise! 🧭", "happy");
  if (gameState.stamina < 5) return speak("Lass mich bitte kurz ausruhen! 💤", "deny");

  gameState.happy = Math.min(100, gameState.happy + 8);
  gameState.stamina = Math.max(0, gameState.stamina - 4);
  playActionAnim("anim-cuddle");
  speak(`*Schnurrt zufrieden* ${gameState.nickname} freut sich riesig! 💕`, "happy");
  updateUI();
  saveGame();
});

safeAddListener("btn-clean", "click", cleanUp);

/* ==========================================================================
   TICK-LOOP
   ========================================================================== */
const ONE_HOUR_MS = 60 * 60 * 1000;
let coinMinuteCounter = 0;

setInterval(() => {
  if (gameState.isDead || !gameState.isInitialized) return;

  const now = Date.now();
  const stats = getUpgradeStats();
  const d = new Date();
  const hrs = String(d.getHours()).padStart(2, '0');
  const mins = String(d.getMinutes()).padStart(2, '0');
  const clock = document.getElementById("clock-txt");
  if (clock) clock.innerText = `${hrs}:${mins}`;

  if (gameState.activeExpedition) {
    addTravelSteps(Math.floor(Math.random() * 11) + 15);
    if (now >= gameState.activeExpedition.endTime) {
      finishExpedition();
    }
  }

  if (gameState.reminders && gameState.reminders.length > 0) {
    for (let i = gameState.reminders.length - 1; i >= 0; i--) {
      const rem = gameState.reminders[i];
      if (now >= rem.time) {
        triggerPocketAlert(
          `⏰ Erinnerung von ${gameState.nickname}!`,
          `Nicht vergessen: ${rem.text}!`,
          `Hey! Nicht vergessen: ${rem.text}!`
        );
        speak(`⏰ Achtung! Vergiss nicht: ${rem.text}!`, 'alarm');
        gameState.reminders.splice(i, 1);
        saveGame();
      }
    }
  }

  if ((d.getHours() > 21 || (d.getHours() === 21 && d.getMinutes() >= 30) || d.getHours() < 8) && !gameState.isSleeping) {
    gameState.isSleeping = true;
    applySleepVisuals();
    speak(`Gääähn... 21:30 Uhr! Schlafenszeit für ${gameState.nickname}! 🌙`, "happy");
    speakOutLoud("Es ist Schlafenszeit, gute Nacht!");
  }

  const isFoodBuffActive = now < (gameState.foodBuffUntil || 0);
  const isDollBuffActive = now < (gameState.dollBuffUntil || 0);

  if (isFoodBuffActive) {
    gameState.hunger = 100;
  } else {
    const hRate = gameState.isSleeping ? (100 / 720) : (100 / 120);
    gameState.hunger = Math.max(0, gameState.hunger - (hRate * stats.hungerDecayMultiplier));
  }

  if (isDollBuffActive) {
    gameState.happy = 100;
  } else if (gameState.hunger === 0) {
    gameState.happy = Math.max(0, gameState.happy - 0.2);
  }

  gameState.stamina = Math.min(100, gameState.stamina + (0.15 * stats.staminaRecoveryMultiplier));

  coinMinuteCounter += 2;
  if (coinMinuteCounter >= 60) {
    coinMinuteCounter = 0;
    if (!gameState.isSleeping && gameState.hunger > 35) {
      gameState.coins++;
      const uiCoins = document.getElementById("ui-coins");
      if (uiCoins) uiCoins.innerText = gameState.coins;
    }
  }

  const isShieldActive = now < (gameState.cleanShieldUntil || 0);
  if (!gameState.isSleeping && !isShieldActive && Math.random() < (0.015 * stats.poopResistMultiplier) && gameState.poops < 3) {
    gameState.poops++;
  }

  if (gameState.alertsEnabled && !gameState.isSleeping) {
    if (!isFoodBuffActive && gameState.hunger <= 25 && (now - (gameState.lastHungerAlertTime || 0) >= ONE_HOUR_MS)) {
      gameState.lastHungerAlertTime = now;
      triggerPocketAlert(`🍓 ${gameState.nickname} hat Hunger!`, `Füttere mich bald!`, `Ich habe Hunger, füttere mich!`);
      speak(`Maaagenknurren! Großer Hunger! 🍓`, 'alarm');
    }

    if (gameState.poops >= 2 && (now - (gameState.lastPoopAlertTime || 0) >= ONE_HOUR_MS)) {
      gameState.lastPoopAlertTime = now;
      triggerPocketAlert(`💩 Puh, das stinkt!`, `Mach bitte sauber!`, `Puh, das stinkt hier aber gewaltig!`);
      speak(`Puh, hier müffelt es! 💩`, 'alarm');
    }
  }

  updateUI();
  saveGame();
}, 2000);

// APP START
loadGame();
if (!gameState.isInitialized) {
  showStarterSelection();
} else {
  renderPokemon();
  applySleepVisuals();
  if (gameState.alertsEnabled && alertBtn) {
    alertBtn.classList.add("active");
    alertBtn.innerText = "🔔";
  } else if (alertBtn) {
    alertBtn.classList.remove("active");
    alertBtn.innerText = "🔕";
  }
  checkMasteredTiers();
  updateUI();
}

checkAppUpdate();
