var lastUpdate = Date.now();
//var diff = (Date.now() - lastUpdate) / 1000;
var TIER_NAMES = [ null, "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth" ];
var DISPLAY_NAMES = [ null, "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth" ];
var player;
function hardReset(){
	player = {
		gold: new Decimal(10),
	
		firstCost: new Decimal(10),
		secondCost: new Decimal(1000),
		thirdCost: new Decimal(1e9),
		fourthCost: new Decimal(1e16),
		fifthCost: new Decimal(1e25),
		sixthCost: new Decimal(1e36),
		seventhCost: new Decimal(1e49),
		eighthCost: new Decimal(1e64),

		firstCostAfterInf: new Decimal("1e309"),
		secondCostAfterInf: new Decimal("1e311"),
		thirdCostAfterInf: new Decimal("1e315"),
		fourthCostAfterInf: new Decimal("1e324"),
		fifthCostAfterInf: new Decimal("1e330"),
		sixthCostAfterInf: new Decimal("1e342"),
		seventhCostAfterInf: new Decimal("1e357"),
		eighthCostAfterInf: new Decimal("1e368"),

		firstNewBaseCost: new Decimal(1e25),
		secondNewBaseCost: new Decimal(1e37),
		thirdNewBaseCost: new Decimal(1e50),
		fourthNewBaseCost: new Decimal(1e62),
		fifthNewBaseCost: new Decimal(1e75),
		sixthNewBaseCost: new Decimal(1e87),
		seventhNewBaseCost: new Decimal(1e100),
		eighthNewBaseCost: new Decimal(1e112),

		firstNewBaseCostInc: new Decimal(2),
		secondNewBaseCostInc: new Decimal(4),
		thirdNewBaseCostInc: new Decimal(8),
		fourthNewBaseCostInc: new Decimal(16),
		fifthNewBaseCostInc: new Decimal(32),
		sixthNewBaseCostInc: new Decimal(64),
		seventhNewBaseCostInc: new Decimal(128),
		eighthNewBaseCostInc: new Decimal(256),

		firstAmount: new Decimal(0),
		secondAmount: new Decimal(0),
		thirdAmount: new Decimal(0),
		fourthAmount: new Decimal(0),
		fifthAmount: new Decimal(0),
		sixthAmount: new Decimal(0),
		seventhAmount: new Decimal(0),
		eighthAmount: new Decimal(0),

		firstBought: new Decimal(0),
		secondBought: new Decimal(0),
		thirdBought: new Decimal(0),
		fourthBought: new Decimal(0),
		fifthBought: new Decimal(0),
		sixthBought: new Decimal(0),
		seventhBought: new Decimal(0),
		eighthBought: new Decimal(0),

		firstMult: new Decimal(4),
		secondMult: new Decimal(2),
		thirdMult: new Decimal(1),
		fourthMult: new Decimal(1),
		fifthMult: new Decimal(1),
		sixthMult: new Decimal(1),
		seventhMult: new Decimal(1),
		eighthMult: new Decimal(1),

		firstFinalMult: new Decimal(1),
		secondFinalMult: new Decimal(1),
		thirdFinalMult: new Decimal(1),
		fourthFinalMult: new Decimal(1),
		fifthFinalMult: new Decimal(1),
		sixthFinalMult: new Decimal(1),
		seventhFinalMult: new Decimal(1),
		eighthFinalMult: new Decimal(1),

		firstPrestige: new Decimal(0),
		secondPrestige: new Decimal(0),
		thirdPrestige: new Decimal(0),
		fourthPrestige: new Decimal(0),
		fifthPrestige: new Decimal(0),
		sixthPrestige: new Decimal(0),
		seventhPrestige: new Decimal(0),
		eighthPrestige: new Decimal(0),

		firstPrestigeCost: new Decimal(3),
		secondPrestigeCost: new Decimal(5),
		thirdPrestigeCost: new Decimal(7),
		fourthPrestigeCost: new Decimal(9),
		fifthPrestigeCost: new Decimal(11),
		sixthPrestigeCost: new Decimal(13),
		seventhPrestigeCost: new Decimal(15),
		eighthPrestigeCost: new Decimal(17),

		firstNewPrestigeCost: new Decimal(4),
		secondNewPrestigeCost: new Decimal(8),
		thirdNewPrestigeCost: new Decimal(12),
		fourthNewPrestigeCost: new Decimal(16),
		fifthNewPrestigeCost: new Decimal(20),
		sixthNewPrestigeCost: new Decimal(24),
		seventhNewPrestigeCost: new Decimal(28),
		eighthNewPrestigeCost: new Decimal(32),

		milliseconds: new Decimal(0),
		seconds: new Decimal(0),
		minuts: new Decimal(0),
		hours: new Decimal(0),
		days: new Decimal(0),
		years: new Decimal(0),
		totalSeconds: new Decimal(0),
		secondsInExpansion: new Decimal(0),
		secondsInOmega: new Decimal(0),
		secondsInReality: new Decimal(0),

		allMult: new Decimal(1),
		allMultFinal: new Decimal(1),
		allMultCost: new Decimal(1000),
		allMultFinalCost: new Decimal(1000),
		allMultCostInc: new Decimal(1000),
		allMultGain: new Decimal(1.05),
		allMultGainFinal: new Decimal(1),
		allMultFromPrestige: new Decimal(1),
		allMultBought: new Decimal(0),
		allMultFromFirstExpansionUpgrade: new Decimal(1),
		allMultGainFromSecondExpansionUpgrade: new Decimal(1),
		allMultGainFromTwelfthExpansionUpgrade: new Decimal(1),
		allMultGainFromSecondGammaUpgrade: new Decimal(1),
		allMultFromFourthExpansionUpgrade: new Decimal(1),
		allMultFromEighthExpansionUpgrade: new Decimal(1),
		allMultFromTenthExpansionUpgrade: new Decimal(1),
		allMultFromTenthExpansionUpgrade2x4y: new Decimal(1),
		allMultFromFirstGammaUpgrade: new Decimal(1),
		allMultFromFifthGammaUpgrade: new Decimal(1),
		allMultNewBaseCost: new Decimal(1e52),
		allMultNewBaseCostInc: new Decimal(100),

		multPerBuy: new Decimal(1.6),
		multPerBuyFinal: new Decimal(1.6),
		multPerBuyFromOmegaUpgrade1x1y: new Decimal(1),

		maxPrestige: new Decimal(15),
		prestigeEffectFromThirdGammaUpgrade: new Decimal(1),
		prestigeEffectFromOmegaUpgrade2x1y: new Decimal(1),

		hasUnlockedExpansion: false,
		expansionPoints: new Decimal(0),
		expansionPointMult: new Decimal(1),
		expansionPointMultBought: new Decimal(0),
		expansionPointMultFinal: new Decimal(1),
		expansionPointMultCost: new Decimal(10),
		expansionPointMultCostInc: new Decimal(10),
		expansionPointMultCostIncInc: new Decimal(2),
		expansions: new Decimal(0),
		expansionCost: new Decimal("1e308"),
		expansionPointMultFromNinthExpansionUpgrade: new Decimal(1),
		expansionPointMultFromThirteenthExpansionUpgrade: new Decimal(1),
		expansionPointMultFromFirstAlphaUpgrade: new Decimal(1),
		expansionPointMultFromFifthAlphaUpgrade: new Decimal(1),
		expansionUpgradeThirteenEffectIncrease: new Decimal(1),
		expansionPointMultFromSecondAlphaUpgrade: new Decimal(1),
		expansionPointMultFromOmegaUpgrade4x1y: new Decimal(1),

		electricity: new Decimal(0),
		electricityEffectFromThirdBetaUpgrade: new Decimal(1),

		firstExpansionGeneratorCost: new Decimal(1),
		secondExpansionGeneratorCost: new Decimal(100),
		thirdExpansionGeneratorCost: new Decimal(1e4),
		fourthExpansionGeneratorCost: new Decimal(1e6),
		fifthExpansionGeneratorCost: new Decimal(1e8),
		sixthExpansionGeneratorCost: new Decimal(1e10),
		seventhExpansionGeneratorCost: new Decimal(1e12),
		eighthExpansionGeneratorCost: new Decimal(1e14),

		firstExpansionGeneratorCostInc: new Decimal(3),
		secondExpansionGeneratorCostInc: new Decimal(6),
		thirdExpansionGeneratorCostInc: new Decimal(9),
		fourthExpansionGeneratorCostInc: new Decimal(12),
		fifthExpansionGeneratorCostInc: new Decimal(15),
		sixthExpansionGeneratorCostInc: new Decimal(18),
		seventhExpansionGeneratorCostInc: new Decimal(21),
		eighthExpansionGeneratorCostInc: new Decimal(24),

		firstExpansionGeneratorCostIncInc: new Decimal(1.5),
		secondExpansionGeneratorCostIncInc: new Decimal(2),
		thirdExpansionGeneratorCostIncInc: new Decimal(2.5),
		fourthExpansionGeneratorCostIncInc: new Decimal(3),
		fifthExpansionGeneratorCostIncInc: new Decimal(3.5),
		sixthExpansionGeneratorCostIncInc: new Decimal(4),
		seventhExpansionGeneratorCostIncInc: new Decimal(4.5),
		eighthExpansionGeneratorCostIncInc: new Decimal(5),

		firstExpansionGeneratorAmount: new Decimal(0),
		secondExpansionGeneratorAmount: new Decimal(0),
		thirdExpansionGeneratorAmount: new Decimal(0),
		fourthExpansionGeneratorAmount: new Decimal(0),
		fifthExpansionGeneratorAmount: new Decimal(0),
		sixthExpansionGeneratorAmount: new Decimal(0),
		seventhExpansionGeneratorAmount: new Decimal(0),
		eighthExpansionGeneratorAmount: new Decimal(0),

		firstExpansionGeneratorBought: new Decimal(0),
		secondExpansionGeneratorBought: new Decimal(0),
		thirdExpansionGeneratorBought: new Decimal(0),
		fourthExpansionGeneratorBought: new Decimal(0),
		fifthExpansionGeneratorBought: new Decimal(0),
		sixthExpansionGeneratorBought: new Decimal(0),
		seventhExpansionGeneratorBought: new Decimal(0),
		eighthExpansionGeneratorBought: new Decimal(0),

		firstExpansionGeneratorMult: new Decimal(1),
		secondExpansionGeneratorMult: new Decimal(1),
		thirdExpansionGeneratorMult: new Decimal(1),
		fourthExpansionGeneratorMult: new Decimal(1),
		fifthExpansionGeneratorMult: new Decimal(1),
		sixthExpansionGeneratorMult: new Decimal(1),
		seventhExpansionGeneratorMult: new Decimal(1),
		eighthExpansionGeneratorMult: new Decimal(1),

		firstExpansionGeneratorFinalMult: new Decimal(1),
		secondExpansionGeneratorFinalMult: new Decimal(1),
		thirdExpansionGeneratorFinalMult: new Decimal(1),
		fourthExpansionGeneratorFinalMult: new Decimal(1),
		fifthExpansionGeneratorFinalMult: new Decimal(1),
		sixthExpansionGeneratorFinalMult: new Decimal(1),
		seventhExpansionGeneratorFinalMult: new Decimal(1),
		eighthExpansionGeneratorFinalMult: new Decimal(1),

		expansionUpgrade1: false,
		expansionUpgrade2: false,
		expansionUpgrade3: false,
		expansionUpgrade4: false,
		expansionUpgrade5: false,
		expansionUpgrade6: false,
		expansionUpgrade7: false,
		expansionUpgrade8: false,
		expansionUpgrade9: false,
		expansionUpgrade10: false,
		expansionUpgrade11: false,
		expansionUpgrade12: false,
		expansionUpgrade13: false,
		expansionUpgrade14: false,
		expansionUpgrade15: false,

		firstExpansionMultFromUpgrades: new Decimal(1),
		expansionGeneratorAllMultFromEleventhExpansionUpgrade: new Decimal(1),
		expansionGeneratorAllMultFromFirstBetaUpgrade: new Decimal(1),
		firstExpansionGeneratorMultFromSecondBetaUpgrade: new Decimal(1),
		expansionGeneratorAllMultFromFifthBetaUpgrade: new Decimal(1),
		allExpansionGeneratorPow: new Decimal(1),

		hasUnlockedAutobuyers: false,
		prestigeAutobuyerChecked: false, 
		generatorAutobuyerChecked: false,
		allMultAutobuyerChecked: false,
		expansionAutobuyerChecked: false,
		alphaBetaGammaAutobuyerChecked: false,
		expansionGeneratorAutobuyerChecked: false,
		expansionPointMultAutobuyerChecked: false,
		alphaBetaGammaUpgrade5AutobuyerChecked: false,
		simulationHeroAutobuyerChecked: false,
		fightingAutobuyerChecked: false,
		battleTowerAutobuyerChecked: false,
		build1AutobuyerChecked: false,
		build2AutobuyerChecked: false,
		build3AutobuyerChecked: false,
		build4AutobuyerChecked: false,
		omegaGeneratorAutobuyerChecked: false,
		electronUpgradesAutobuyerChecked: false,

		alpha: new Decimal(0),
		alphaCost: new Decimal("1e2000"),
		alphaBought: new Decimal(0),
		alphaNewCost: new Decimal("1e500"),
		alphaNewCostInc: new Decimal(100),
		alphaUpgrade5FinalMult: new Decimal(1),
		alphaUpgrade5MultIncreaseFromOmegaUpgrade1x2y: new Decimal(1),
		beta: new Decimal(0),
		betaCost: new Decimal(1e8),
		betaBought: new Decimal(0),
		betaNewCost: new Decimal(100),
		betaNewCostInc: new Decimal(1.1),
		betaUpgrade5FinalMult: new Decimal(1),
		betaUpgrade5MultIncreaseFromOmegaUpgrade1x3y: new Decimal(1),
		betaUpgrade5MultIncreaseFromOmegaUpgrade4x3y: new Decimal(1),
		gamma: new Decimal(0),
		gammaCost: new Decimal(1e30),
		gammaBought: new Decimal(0),
		gammaNewCost: new Decimal(1e5),
		gammaNewCostInc: new Decimal(2),
		gammaUpgrade5FinalMult: new Decimal(1),
		gammaUpgrade5MultIncreaseFromOmegaUpgrade1x4y: new Decimal(1),
		hasUnlockedABG: false,

		alphaUpgrade1: new Decimal(0),
		alphaUpgrade2: new Decimal(0),
		alphaUpgrade3: new Decimal(0),
		alphaUpgrade4: new Decimal(0),
		alphaUpgrade5: new Decimal(0),

		betaUpgrade1: new Decimal(0),
		betaUpgrade2: new Decimal(0),
		betaUpgrade3: new Decimal(0),
		betaUpgrade4: new Decimal(0),
		betaUpgrade5: new Decimal(0),

		gammaUpgrade1: new Decimal(0),
		gammaUpgrade2: new Decimal(0),
		gammaUpgrade3: new Decimal(0),
		gammaUpgrade4: new Decimal(0),
		gammaUpgrade5: new Decimal(0),

		firstOmegaGeneratorCost: new Decimal(1),
		secondOmegaGeneratorCost: new Decimal(100),
		thirdOmegaGeneratorCost: new Decimal(1e4),
		fourthOmegaGeneratorCost: new Decimal(1e6),
		fifthOmegaGeneratorCost: new Decimal(1e8),
		sixthOmegaGeneratorCost: new Decimal(1e10),
		seventhOmegaGeneratorCost: new Decimal(1e12),
		eighthOmegaGeneratorCost: new Decimal(1e14),

		firstOmegaGeneratorAmount: new Decimal(0),
		secondOmegaGeneratorAmount: new Decimal(0),
		thirdOmegaGeneratorAmount: new Decimal(0),
		fourthOmegaGeneratorAmount: new Decimal(0),
		fifthOmegaGeneratorAmount: new Decimal(0),
		sixthOmegaGeneratorAmount: new Decimal(0),
		seventhOmegaGeneratorAmount: new Decimal(0),
		eighthOmegaGeneratorAmount: new Decimal(0),

		firstOmegaGeneratorBought: new Decimal(0),
		secondOmegaGeneratorBought: new Decimal(0),
		thirdOmegaGeneratorBought: new Decimal(0),
		fourthOmegaGeneratorBought: new Decimal(0),
		fifthOmegaGeneratorBought: new Decimal(0),
		sixthOmegaGeneratorBought: new Decimal(0),
		seventhOmegaGeneratorBought: new Decimal(0),
		eighthOmegaGeneratorBought: new Decimal(0),

		firstOmegaGeneratorMult: new Decimal(1),
		secondOmegaGeneratorMult: new Decimal(1),
		thirdOmegaGeneratorMult: new Decimal(1),
		fourthOmegaGeneratorMult: new Decimal(1),
		fifthOmegaGeneratorMult: new Decimal(1),
		sixthOmegaGeneratorMult: new Decimal(1),
		seventhOmegaGeneratorMult: new Decimal(1),
		eighthOmegaGeneratorMult: new Decimal(1),

		firstOmegaGeneratorFinalMult: new Decimal(1),
		secondOmegaGeneratorFinalMult: new Decimal(1),
		thirdOmegaGeneratorFinalMult: new Decimal(1),
		fourthOmegaGeneratorFinalMult: new Decimal(1),
		fifthOmegaGeneratorFinalMult: new Decimal(1),
		sixthOmegaGeneratorFinalMult: new Decimal(1),
		seventhOmegaGeneratorFinalMult: new Decimal(1),
		eighthOmegaGeneratorFinalMult: new Decimal(1),

		omegaPoints: new Decimal(0),
		hasUnlockedOmega: false,
		omegaPointMult: new Decimal(1),
		omegaPointMultCost: new Decimal(10),
		omegaPointMultBought: new Decimal(0),
		omegaPointMultFinal: new Decimal(1),
		omegaPointMultFrom2x2y: new Decimal(1),
		omegas: new Decimal(0),

		omega: new Decimal(0),
		omegaEffect: new Decimal(1),

		omegaUpgrade1x1y: false,
		omegaUpgrade2x1y: false,
		omegaUpgrade3x1y: false,
		omegaUpgrade4x1y: false,
		omegaUpgrade1x2y: false,
		omegaUpgrade2x2y: false,
		omegaUpgrade3x2y: false,
		omegaUpgrade4x2y: false,
		omegaUpgrade1x3y: false,
		omegaUpgrade2x3y: false,
		omegaUpgrade3x3y: false,
		omegaUpgrade4x3y: false,
		omegaUpgrade1x4y: false,
		omegaUpgrade2x4y: false,
		omegaUpgrade3x4y: false,
		omegaUpgrade4x4y: false,

		omegaUpgrade1x1yMax: new Decimal(1),
		omegaUpgrade2x1yMax: new Decimal(1),
		omegaUpgrade3x1yMax: new Decimal(1),
		omegaUpgrade4x1yMax: new Decimal(1),
		omegaUpgrade1x2yMax: new Decimal(1),
		omegaUpgrade2x2yMax: new Decimal(1),
		omegaUpgrade3x2yMax: new Decimal(1),
		omegaUpgrade4x2yMax: new Decimal(1),
		omegaUpgrade1x3yMax: new Decimal(1),
		omegaUpgrade2x3yMax: new Decimal(1),
		omegaUpgrade3x3yMax: new Decimal(1),
		omegaUpgrade4x3yMax: new Decimal(1),
		omegaUpgrade1x4yMax: new Decimal(1),
		omegaUpgrade2x4yMax: new Decimal(1),
		omegaUpgrade3x4yMax: new Decimal(1),
		omegaUpgrade4x4yMax: new Decimal(1),

		omegaUpgrade1x1yBought: new Decimal(0),
		omegaUpgrade2x1yBought: new Decimal(0),
		omegaUpgrade3x1yBought: new Decimal(0),
		omegaUpgrade4x1yBought: new Decimal(0),
		omegaUpgrade1x2yBought: new Decimal(0),
		omegaUpgrade2x2yBought: new Decimal(0),
		omegaUpgrade3x2yBought: new Decimal(0),
		omegaUpgrade4x2yBought: new Decimal(0),
		omegaUpgrade1x3yBought: new Decimal(0),
		omegaUpgrade2x3yBought: new Decimal(0),
		omegaUpgrade3x3yBought: new Decimal(0),
		omegaUpgrade4x3yBought: new Decimal(0),
		omegaUpgrade1x4yBought: new Decimal(0),
		omegaUpgrade2x4yBought: new Decimal(0),
		omegaUpgrade3x4yBought: new Decimal(0),
		omegaUpgrade4x4yBought: new Decimal(0),

		omegaUpgradeCost: new Decimal(1),

		omegaUpgradeReset: false,

		simGold: new Decimal(0),
		stage: new Decimal(1),
		DPS: new Decimal(1),
		finalDPS: new Decimal(1),
		stageExponent: new Decimal(2),
		finalGPS: new Decimal(1),

		inGoldMode: false,
		inFightingMode: false,

		goldFarmerLevel: new Decimal(1),
		goldFarmerMult: new Decimal(1),
		goldFarmerCost: new Decimal(10),
		goldFarmerScale: new Decimal(1),
		goldFarmerScaleScale: new Decimal(1),

		hybridLevel: new Decimal(1),
		hybridMult: new Decimal(1),
		hybridCost: new Decimal(10),
		hybridScale: new Decimal(1),
		hybridScaleScale: new Decimal(1),

		PVPLegendLevel: new Decimal(1),
		PVPLegendMult: new Decimal(1),
		PVPLegendCost: new Decimal(10),
		PVPLegendScale: new Decimal(1),
		PVPLegendScaleScale: new Decimal(1),

		monsterTotalHP: new Decimal(10),
		monsterCurrentHP: new Decimal(10),

		resimulateDPSMult: new Decimal(1),
		resimulateStageExponentMult: new Decimal(1),

		firstSimUpgrade: new Decimal(1),
		firstSimUpgradeBought: false,

		secondSimUpgrade: new Decimal(1),
		secondSimUpgradeBought: false,

		thirdSimUpgrade: new Decimal(1),
		thirdSimUpgradeBought: false,

		fourthSimUpgrade: new Decimal(1),
		fourthSimUpgradeBought: false,
		fourthSimUpgradeTotalLevels: new Decimal(30),

		fifthSimUpgrade: new Decimal(1),
		fifthSimUpgradeBought: false,

		sixthSimUpgradeBought: false,

		seventhSimUpgrade: new Decimal(1),
		seventhSimUpgradeBought: false,

		eighthSimUpgradeBought: false,

		hasUnlockedSim: false,
		hasUnlockedSimUps: false,

		hasUnlockedElectrons: false,
		electronCurrent: new Decimal(0),
		electronInterval: new Decimal(1000),
		electrons: new Decimal(1),
		electronEffect: new Decimal(1),
		maxElectrons: new Decimal(1e10),
		electronGain: new Decimal(1.01),
		electronGainBought: new Decimal(0),
		electronGain3x4y: new Decimal(0),
		electronGain4x4y: new Decimal(0),
		electronGainGain: new Decimal(1),
		electronGainFinal: new Decimal(1.01),
		electronGainFromOmegaUpgrade3x3y: new Decimal(1),
		atoms: new Decimal(0),
		totalAtomResets: new Decimal(0),

		firstElectronUpgradeCost: new Decimal(1e5),
		firstElectronUpgradeFix: false,
		firstElectronUpgradeBought: new Decimal(0),
		secondElectronUpgradeCost: new Decimal(1e5),
		thirdElectronUpgradeCost: new Decimal(1000),
		thirdElectronUpgradeCost4x3y: new Decimal(1),
		thirdElectronUpgradeCost4x4y: new Decimal(1),

		firstAtomUpgradeBought: new Decimal(0),
		secondAtomUpgradeBought: new Decimal(0),
		thirdAtomUpgradeBought: new Decimal(0),

		firstAtomUpgrade3: new Decimal(1),
		secondAtomUpgrade3: new Decimal(1),
		thirdAtomUpgrade3: new Decimal(0),

		firstAtomUpgradeCost: new Decimal(1),
		secondAtomUpgradeCost: new Decimal(1),
		thirdAtomUpgradeCost: new Decimal(1),

		hasUnlockedReality: false,
		realities: new Decimal(0),
		realityPoints: new Decimal(0),
		realityEnergy: new Decimal(0),
		
		maxRealityBonus: new Decimal(1),
		checkedRealityBonus: new Decimal(0),
		realityBonus1: new Decimal(1),
		realityBonus2: new Decimal(1),
		realityBonus3: new Decimal(1),
		realityBonus4: new Decimal(1),
		realityBonus5: new Decimal(1),
		realityBonus6: new Decimal(1),
		realityBonus1Checked: false,
		realityBonus2Checked: false,
		realityBonus3Checked: false,
		realityBonus4Checked: false,
		realityBonus5Checked: false,
		realityBonus6Checked: false,
		
		firstRealityGeneratorCost: new Decimal(1),
		secondRealityGeneratorCost: new Decimal(100),
		thirdRealityGeneratorCost: new Decimal(1e4),
		fourthRealityGeneratorCost: new Decimal(1e6),
		fifthRealityGeneratorCost: new Decimal(1e8),
		sixthRealityGeneratorCost: new Decimal(1e10),
		seventhRealityGeneratorCost: new Decimal(1e12),
		eighthRealityGeneratorCost: new Decimal(1e14),

		firstRealityGeneratorAmount: new Decimal(0),
		secondRealityGeneratorAmount: new Decimal(0),
		thirdRealityGeneratorAmount: new Decimal(0),
		fourthRealityGeneratorAmount: new Decimal(0),
		fifthRealityGeneratorAmount: new Decimal(0),
		sixthRealityGeneratorAmount: new Decimal(0),
		seventhRealityGeneratorAmount: new Decimal(0),
		eighthRealityGeneratorAmount: new Decimal(0),

		firstRealityGeneratorBought: new Decimal(0),
		secondRealityGeneratorBought: new Decimal(0),
		thirdRealityGeneratorBought: new Decimal(0),
		fourthRealityGeneratorBought: new Decimal(0),
		fifthRealityGeneratorBought: new Decimal(0),
		sixthRealityGeneratorBought: new Decimal(0),
		seventhRealityGeneratorBought: new Decimal(0),
		eighthRealityGeneratorBought: new Decimal(0),

		firstRealityGeneratorMult: new Decimal(1),
		secondRealityGeneratorMult: new Decimal(1),
		thirdRealityGeneratorMult: new Decimal(1),
		fourthRealityGeneratorMult: new Decimal(1),
		fifthRealityGeneratorMult: new Decimal(1),
		sixthRealityGeneratorMult: new Decimal(1),
		seventhRealityGeneratorMult: new Decimal(1),
		eighthRealityGeneratorMult: new Decimal(1),

		firstRealityGeneratorFinalMult: new Decimal(1),
		secondRealityGeneratorFinalMult: new Decimal(1),
		thirdRealityGeneratorFinalMult: new Decimal(1),
		fourthRealityGeneratorFinalMult: new Decimal(1),
		fifthRealityGeneratorFinalMult: new Decimal(1),

		sixthRealityGeneratorFinalMult: new Decimal(1),
		seventhRealityGeneratorFinalMult: new Decimal(1),
		eighthRealityGeneratorFinalMult: new Decimal(1),
		
		hasUnlockedBattleTower: false,
		
		friendlyLevel: new Decimal(1),
		highestFriendlyLevel: new Decimal(1),
		skillpoints: new Decimal(0),
		friendlyStamina: new Decimal(3),
		friendlyHealthTotal: new Decimal(50),
		friendlyHealthCurrent: new Decimal(50),
		friendlyStrength: new Decimal(3),
		friendlyArmor: new Decimal(1),
		friendlyRegeneration: new Decimal(1),
		friendlyAgility: new Decimal(1),

		enemyLevel: new Decimal(1),
		highestEnemyLevel: new Decimal(1),
		enemyStamina: new Decimal(5),
		enemyHealthTotal: new Decimal(50),
		enemyHealthCurrent: new Decimal(50),
		enemyStrength: new Decimal(1),
		enemyArmor: new Decimal(1),
		enemyRegeneration: new Decimal(1),
		enemyAgility: new Decimal(1),

		currentXp: new Decimal(0),
		needToLvlUpXp: new Decimal(50),
		
		maxEnemyLevel: new Decimal(100),
		bossesKilled: new Decimal(0),

		isLegendary: false,
		isBoss: false,
		
		isResting: true,
		
		hasUnlockedTalents: false,
		talent1Effect: new Decimal(0),
		talent1IsActive: false,
		talent2Effect: new Decimal(0),
		talent2IsActive: false,
		talent3Effect: new Decimal(0),
		talent3IsActive: false,
		talent4Effect: new Decimal(0),
		talent4IsActive: false,
		talent5Effect: new Decimal(0),
		talent5IsActive: false,
		talent6Effect: new Decimal(0),
		talent6IsActive: false,
		talent7Effect: new Decimal(0),
		talent7IsActive: false,
		talent8Effect: new Decimal(0),
		talent8IsActive: false,
		talent9Effect: new Decimal(0),
		talent9IsActive: false,
		talent10Effect: new Decimal(0),
		talent10IsActive: false,
		talent11Effect: new Decimal(0),
		talent11IsActive: false,
		talent12Effect: new Decimal(0),
		talent12IsActive: false,
		talent13Effect: new Decimal(0),
		talent13IsActive: false,
		talent14Effect: new Decimal(0),
		talent14IsActive: false,
		talent15Effect: new Decimal(0),
		talent15Effect2: new Decimal(0),
		talent15IsActive: false,
		
		hasUnlockedAtomShop: false,
		atomShopItem1Bought: false,
		atomShopItem2Bought: false,
		atomShopItem3Bought: false,
		atomShopItem4Bought: false,
		atomShopItem5Bought: false,
		atomShopItem6Bought: false,
		atomShopItem7Bought: false,
		atomShopItem8Bought: false,
		atomShopItem9Bought: false,
		atomShopItem10Bought: false,
		atomShopItem11Bought: false,
		atomShopItem12Bought: false,
		atomShopItem13Bought: false,
		atomShopItem14Bought: false,
		atomShopItem15Bought: false,
		atomShopItem16Bought: false,
		atomShopItem17Bought: false,
		atomShopItem18Bought: false,
		atomShopItem19Bought: false,
		atomShopItem20Bought: false,
		
		atomShopItemsBought: new Decimal(0),

		atomShopItem1Counter: new Decimal(0),
		atomShopItem1Skillpoints: new Decimal(0),

		atomShopItem9Counter: new Decimal(0),
		atomShopItem9Skillpoints: new Decimal(0),

		atomShopItem2Effect: new Decimal(1),

		atomShopItem11Effect: new Decimal(1),

		atomShopItem13Effect: new Decimal(1000),

		atomShopItem16Effect: new Decimal(1),

		atomShopItem18Effect: new Decimal(1),

		atomShopItem19Effect: new Decimal(1),
		
		hasUnlockedTraining: false,
		superSkillpoints: new Decimal(0),
		superStamina: new Decimal(0),
		superStrength: new Decimal(0),
		superArmor: new Decimal(0),
		superRegeneration: new Decimal(0),
		superAgility: new Decimal(0),
		
		build1Exists: false,
		build1TotalSkillpoints: new Decimal(0),
		build1TotalSuperSkillpoints: new Decimal(0),
		build1Stamina: new Decimal(0),
		build1Strength: new Decimal(0),
		build1Armor: new Decimal(0),
		build1Regeneration: new Decimal(0),
		build1Agility: new Decimal(0),
		build1SuperStamina: new Decimal(0),
		build1SuperStrength: new Decimal(0),
		build1SuperArmor: new Decimal(0),
		build1SuperRegeneration: new Decimal(0),
		build1SuperAgility: new Decimal(0),
		build1TalentRow1: 0,
		build1TalentRow2: 0,
		build1TalentRow3: 0,
		build1TalentRow4: 0,
		build1TalentRow5: 0,
		
		build2Exists: false,
		build2TotalSkillpoints: new Decimal(0),
		build2TotalSuperSkillpoints: new Decimal(0),
		build2Stamina: new Decimal(0),
		build2Strength: new Decimal(0),
		build2Armor: new Decimal(0),
		build2Regeneration: new Decimal(0),
		build2Agility: new Decimal(0),
		build2SuperStamina: new Decimal(0),
		build2SuperStrength: new Decimal(0),
		build2SuperArmor: new Decimal(0),
		build2SuperRegeneration: new Decimal(0),
		build2SuperAgility: new Decimal(0),
		build2TalentRow1: 0,
		build2TalentRow2: 0,
		build2TalentRow3: 0,
		build2TalentRow4: 0,
		build2TalentRow5: 0,
		
		build3Exists: false,
		build3TotalSkillpoints: new Decimal(0),
		build3TotalSuperSkillpoints: new Decimal(0),
		build3Stamina: new Decimal(0),
		build3Strength: new Decimal(0),
		build3Armor: new Decimal(0),
		build3Regeneration: new Decimal(0),
		build3Agility: new Decimal(0),
		build3SuperStamina: new Decimal(0),
		build3SuperStrength: new Decimal(0),
		build3SuperArmor: new Decimal(0),
		build3SuperRegeneration: new Decimal(0),
		build3SuperAgility: new Decimal(0),
		build3TalentRow1: 0,
		build3TalentRow2: 0,
		build3TalentRow3: 0,
		build3TalentRow4: 0,
		build3TalentRow5: 0,
		
		build4Exists: false,
		build4TotalSkillpoints: new Decimal(0),
		build4TotalSuperSkillpoints: new Decimal(0),
		build4Stamina: new Decimal(0),
		build4Strength: new Decimal(0),
		build4Armor: new Decimal(0),
		build4Regeneration: new Decimal(0),
		build4Agility: new Decimal(0),
		build4SuperStamina: new Decimal(0),
		build4SuperStrength: new Decimal(0),
		build4SuperArmor: new Decimal(0),
		build4SuperRegeneration: new Decimal(0),
		build4SuperAgility: new Decimal(0),
		build4TalentRow1: 0,
		build4TalentRow2: 0,
		build4TalentRow3: 0,
		build4TalentRow4: 0,
		build4TalentRow5: 0

	};
	//clearInterval(electronInterval);
	//electronInterval = setInterval(getElectrons, 1000);
}
hardReset();

var tempPlayer = player;

load();

Object.assign(tempPlayer, player);

player = tempPlayer;

function test(){
	player.gold = player.gold.pow(10);
	//player.omega = player.omega.pow(10);
	//player.simGold = player.simGold.times(10);
	//player.simGold = new Decimal(0);
	//player.atoms = new Decimal(1000);
	//player.omegaPoints = player.omegaPoints.pow(10);
	//player.expansionPoints = player.expansionPoints.times("1e1000");
}

function save() {
    localStorage.incGame = btoa(JSON.stringify(player));
}

function load() {
    if (!localStorage.incGame) return;
    player = JSON.parse(atob(localStorage.incGame));

    transformToDecimal(player)
}

function exportSave(){
	save();
	var output = document.getElementById("importExportText");
	
	output.value = btoa(JSON.stringify(player));
}

function importSave(){
	let confirmation = confirm("Are you sure you want to import?");

	if (confirmation){
		hardReset();
		tempPlayer = player;
		
		var input = document.getElementById("importExportText");
		
		input = JSON.parse(atob(input.value));
		player = input;
		transformToDecimal(player)
	
		Object.assign(tempPlayer, player);
		player = tempPlayer;
		
		//clearInterval(electronInterval);
		//electronInterval = setInterval(getElectrons, 1000-player.thirdAtomUpgrade3);

		player.thirdAtomUpgrade3 = new Decimal(player.thirdAtomUpgrade3);
	}
}

function trueHardReset(){
	let confirmation = confirm("Are you sure you want to Hard Reset?");

	if (confirmation){
		hardReset();
	}
}

function transformToDecimal(object) { 
    for (i in object) {
        if (typeof(object[i]) == "string" && !isNaN(new Decimal(object[i]).mag)) object[i] = new Decimal(object[i]); 
        if (typeof(object[i]) == "object") transformToDecimal(object[i]) 
    }
}

function time(diff){
	let diff2 = new Decimal(diff);
	player.milliseconds = player.milliseconds.plus(diff2.times(1000));
	
	if (player.milliseconds.gte(1000)){
		player.seconds = player.seconds.plus(1);
		player.totalSeconds = player.totalSeconds.plus(1);
		player.secondsInExpansion = player.secondsInExpansion.plus(1);
		player.secondsInOmega = player.secondsInOmega.plus(1);
		player.secondsInReality = player.secondsInReality.plus(1);
		player.milliseconds = player.milliseconds.minus(1000);
	}
	if (player.seconds == 60){
		player.seconds = new Decimal(0);
		player.minuts = player.minuts.plus(1);
	}
	if (player.minuts == 60){
		player.minuts = new Decimal(0);
		player.hours = player.hours.plus(1);
	}
	if (player.hours == 24){
		player.hours = new Decimal(0);
		player.days = player.days.plus(1);
	}
	if (player.days == 365){
		player.days = new Decimal(0);
		player.years = player.years.plus(1);
	}
}

function format(amount, i){
	let power = Decimal.floor(Decimal.log10(amount));
	let mantissa = amount.div(Decimal.pow(10, power));
	
	let power2 = Decimal.floor(Decimal.log10(power));
	let mantissa2 = power.div(Decimal.pow(10, power2));
	
	let power3 = Decimal.floor(Decimal.log10(power2));
	let mantissa3 = power2.div(Decimal.pow(10, power3));
	
	if (amount == 0) return "0"
	if (power < 4) return amount.toFixed(i);
	if (power < 1000000) return mantissa.toFixed(2) + "e" + power;
	if (power2 < 1000000) return "e" + mantissa2.toFixed(3) + "e" + power2;
	return "ee" + mantissa3.toFixed(3) + "e" + power3;
}

function buyGenerator(tier){
	var name = TIER_NAMES[tier];
	let buys = new Decimal(Decimal.floor(308/tier));
	let buys2 = [null, 2310, 1380, 950, 705, 550, 445, 370, 310];
	let buys3 = [null, 2e4, 2e4, 2e4, 2e4, 2e4, 2e4, 2e4, 2e4];
	
	if (player[name + "Bought"].gt(buys3[tier]) && player.gold.gte(player[name + "Cost"])){
		player.gold = player.gold.minus(player[name + "Cost"]);
		player[name + "Bought"] = player[name + "Bought"].plus(1);
		player[name + "Amount"] = player[name + "Amount"].plus(1);
		player[name + "Mult"] = player[name + "Mult"].times(player.multPerBuyFinal);
		player[name + "Cost"] = player[name + "Cost"].times(player[name + "NewBaseCost"]);
		player[name + "NewBaseCost"] = player[name + "NewBaseCost"].times(player[name + "NewBaseCostInc"]);
		player[name + "NewBaseCostInc"] = player[name + "NewBaseCostInc"].pow(1.01)
	}
	else if (player[name + "Bought"].gt(buys2[tier]) && player.gold.gte(player[name + "Cost"])){
		player.gold = player.gold.minus(player[name + "Cost"]);
		player[name + "Bought"] = player[name + "Bought"].plus(1);
		player[name + "Amount"] = player[name + "Amount"].plus(1);
		player[name + "Mult"] = player[name + "Mult"].times(player.multPerBuyFinal);
		player[name + "Cost"] = player[name + "Cost"].times(player[name + "NewBaseCost"]);
		player[name + "NewBaseCost"] = player[name + "NewBaseCost"].times(player[name + "NewBaseCostInc"]);
		player[name + "NewBaseCostInc"] = player[name + "NewBaseCostInc"].times(1.01)
	}
	else if (((buys.layer < player[name + "Bought"].layer) || ((buys.layer == player[name + "Bought"].layer) && (buys.mag <= player[name + "Bought"].mag))) && (player.gold.layer > player[name + "Cost"].layer  || ((player.gold.layer == player[name + "Cost"].layer) && player.gold.mag > player[name + "Cost"].mag))){
		player.gold = player.gold.minus(player[name + "Cost"]);
		player[name + "Bought"] = player[name + "Bought"].plus(1);
		player[name + "Amount"] = player[name + "Amount"].plus(1);
		player[name + "Mult"] = player[name + "Mult"].times(player.multPerBuyFinal);
		player[name + "Cost"] = player[name + "Cost"].times(Decimal.pow(Decimal.pow(10, (tier + 10)), (tier + 1)));
	}	
	else if (player.gold.layer > player[name + "Cost"].layer  || ((player.gold.layer == player[name + "Cost"].layer) && player.gold.mag >= player[name + "Cost"].mag)) {
		player.gold = player.gold.minus(player[name + "Cost"]);
		player[name + "Bought"] = player[name + "Bought"].plus(1);
		player[name + "Amount"] = player[name + "Amount"].plus(1);
		player[name + "Mult"] = player[name + "Mult"].times(player.multPerBuyFinal);
		player[name + "Cost"] = player[name + "Cost"].times(Decimal.pow(10, tier));
	}
	else return
}

function buyAllMult(){
	let buys = new Decimal(102);
	let buys2 = new Decimal(1500);
	let buys3 = new Decimal(2e4);
	getFinalAllMultCost();

	if (buys3.lt(player.allMultBought) && player.gold.gte(player.allMultFinalCost)){
		player.gold = player.gold.minus(player.allMultFinalCost);
		player.allMult = player.allMult.times(player.allMultGainFinal);
		player.allMultCost = player.allMultCost.times(player.allMultNewBaseCost);
		player.allMultNewBaseCost = player.allMultNewBaseCost.times(player.allMultNewBaseCostInc);
		player.allMultNewBaseCostInc = player.allMultNewBaseCostInc.pow(1.01);
		player.allMultBought = player.allMultBought.plus(1);
	}
	else if (buys2.lt(player.allMultBought) && player.gold.gte(player.allMultFinalCost)){
		player.gold = player.gold.minus(player.allMultFinalCost);
		player.allMult = player.allMult.times(player.allMultGainFinal);
		player.allMultCost = player.allMultCost.times(player.allMultNewBaseCost);
		player.allMultNewBaseCost = player.allMultNewBaseCost.times(player.allMultNewBaseCostInc);
		player.allMultNewBaseCostInc = player.allMultNewBaseCostInc.times(1.02);
		player.allMultBought = player.allMultBought.plus(1);
	}
	else if ((buys.lt(player.allMultBought) || buys.eq(player.allMultBought)) && (player.gold.gt(player.allMultFinalCost) || player.gold.eq(player.allMultFinalCost))){
		player.allMultCostInc = new Decimal(1e52);
		player.gold = player.gold.minus(player.allMultFinalCost);
		player.allMult = player.allMult.times(player.allMultGainFinal);
		player.allMultCost = player.allMultCost.times(player.allMultCostInc);
		player.allMultBought = player.allMultBought.plus(1);
	}
	else if (player.gold.gt(player.allMultFinalCost) || player.gold.eq(player.allMultFinalCost)){
		player.gold = player.gold.minus(player.allMultFinalCost);
		player.allMult = player.allMult.times(player.allMultGainFinal);
		player.allMultCost = player.allMultCost.times(player.allMultCostInc);
		player.allMultBought = player.allMultBought.plus(1);
	}
	else return
}

function getFinalGenMult(){
	for (let tier = 1; tier < 9; tier++){
		let name = TIER_NAMES[tier];

		player[name + "FinalMult"] = player[name + "Mult"].times(player.allMultFinal);
		
		player[name + "ExpansionGeneratorFinalMult"] = (player[name + "ExpansionGeneratorMult"].times(player.expansionGeneratorAllMultFromEleventhExpansionUpgrade).times(player.expansionGeneratorAllMultFromFirstBetaUpgrade).times(player.expansionGeneratorAllMultFromFifthBetaUpgrade).times(player.realityBonus2)).pow(player.allExpansionGeneratorPow);
		if (tier === 1){
			player.firstExpansionGeneratorFinalMult = (player.firstExpansionGeneratorMult.times(player.firstExpansionMultFromUpgrades).times(player.expansionGeneratorAllMultFromEleventhExpansionUpgrade).times(player.expansionGeneratorAllMultFromFirstBetaUpgrade).times(player.firstExpansionGeneratorMultFromSecondBetaUpgrade).times(player.expansionGeneratorAllMultFromFifthBetaUpgrade).times(player.realityBonus2)).pow(player.allExpansionGeneratorPow);
			
		}
		
		player[name + "OmegaGeneratorFinalMult"] = player[name + "OmegaGeneratorMult"].times(player.realityBonus3);
		
		player[name + "RealityGeneratorFinalMult"] = player[name + "RealityGeneratorMult"];
	}
}

function getFinalMultPerBuy(){
	player.multPerBuyFinal = player.multPerBuy.times(player.multPerBuyFromOmegaUpgrade1x1y);
}

function getFinalAllMultCost(){
	if ((Decimal.log10(Decimal.log10(player.omega))).gt(1)){
		player.omegaEffect = new Decimal(1).plus(Decimal.log10(Decimal.log10(player.omega)));
	}
	player.allMultFinalCost = player.allMultCost.div(player.electricity.plus(1).pow(15).pow(player.electricityEffectFromThirdBetaUpgrade).pow(player.omegaEffect));
}

function getFinalAllMultGain(){
	player.allMultGainFinal = player.allMultGain.times(player.allMultGainFromSecondExpansionUpgrade).times(player.allMultGainFromTwelfthExpansionUpgrade).times(player.allMultGainFromSecondGammaUpgrade).times(player.electronEffect);
}

function getFinalAllMult(){
	player.allMultFinal = player.allMult.times(player.allMultFromPrestige).times(player.allMultFromFirstExpansionUpgrade).times(player.allMultFromFourthExpansionUpgrade).times(player.allMultFromEighthExpansionUpgrade).times(player.allMultFromTenthExpansionUpgrade).times(player.allMultFromFirstGammaUpgrade).times(player.allMultFromFifthGammaUpgrade).times(player.realityBonus1);
}

function getFinalExpansionPointMult(){
	player.expansionPointMultFinal = player.expansionPointMult.times(player.expansionPointMultFromNinthExpansionUpgrade).times(player.expansionPointMultFromThirteenthExpansionUpgrade).times(player.expansionPointMultFromFirstAlphaUpgrade).times(player.expansionPointMultFromFifthAlphaUpgrade).times(player.expansionPointMultFromSecondAlphaUpgrade).times(player.expansionPointMultFromOmegaUpgrade4x1y).times(player.realityBonus4).times(player.atomShopItem19Effect);
}

function getFinalOmegaPointMult(){
	player.omegaPointMultFinal = player.omegaPointMult.times(player.omegaPointMultFrom2x2y).times(player.realityBonus5).times(player.atomShopItem16Effect);
}

function prestige(tier){
	let name = TIER_NAMES[tier];
	var prests = [null, 580, 170, 80, 45, 30, 20, 12, 10];
	
	if (player.maxPrestige.eq(player[name + "Prestige"])) return
	
	if (player[name + "Bought"].lt(player[name + "PrestigeCost"])) return
	
	player[name + "Prestige"] = player[name + "Prestige"].plus(1);
	if (player[name + "Prestige"].lt(prests[tier])){
		player[name + "PrestigeCost"] = player[name + "PrestigeCost"].plus(4 * tier);
	}
	else {
		player[name + "PrestigeCost"] = player[name + "PrestigeCost"].plus(player[name + "NewPrestigeCost"]);
		player[name + "NewPrestigeCost"] = player[name + "NewPrestigeCost"].plus(tier);
	}
	
	player.allMultFromPrestige = player.allMultFromPrestige.times(2).times(player.prestigeEffectFromThirdGammaUpgrade).times(player.prestigeEffectFromOmegaUpgrade2x1y);
	
	if (player.expansionUpgrade5 === false){
	
		player.gold = new Decimal(10);
		
		player.firstCost =  new Decimal(10);
		player.secondCost = new Decimal(1000);
		player.thirdCost = new Decimal(1e9);
		player.fourthCost = new Decimal(1e16);
		player.fifthCost = new Decimal(1e25);
		player.sixthCost = new Decimal(1e36);
		player.seventhCost = new Decimal(1e49);
		player.eighthCost = new Decimal(1e64);
		
		player.firstCostAfterInf = new Decimal("1e309");
		player.secondCostAfterInf = new Decimal("1e311");
		player.thirdCostAfterInf = new Decimal("1e315");
		player.fourthCostAfterInf = new Decimal("1e324");
		player.fifthCostAfterInf = new Decimal("1e330");
		player.sixthCostAfterInf = new Decimal("1e342");
		player.seventhCostAfterInf = new Decimal("1e357");
		player.eighthCostAfterInf = new Decimal("1e368");
		
		player.firstNewBaseCost = new Decimal(1e25);
		player.secondNewBaseCost = new Decimal(1e37);
		player.thirdNewBaseCost = new Decimal(1e50);
		player.fourthNewBaseCost = new Decimal(1e62);
		player.fifthNewBaseCost = new Decimal(1e75);
		player.sixthNewBaseCost = new Decimal(1e87);
		player.seventhNewBaseCost = new Decimal(1e100);
		player.eighthNewBaseCost = new Decimal(1e112);

		player.firstNewBaseCostInc = new Decimal(2);
		player.secondNewBaseCostInc = new Decimal(4);
		player.thirdNewBaseCostInc = new Decimal(8);
		player.fourthNewBaseCostInc = new Decimal(16);
		player.fifthNewBaseCostInc = new Decimal(32);
		player.sixthNewBaseCostInc = new Decimal(64);
		player.seventhNewBaseCostInc = new Decimal(128);
		player.eighthNewBaseCostInc = new Decimal(256);

		player.firstAmount = new Decimal(0);
		player.secondAmount = new Decimal(0);
		player.thirdAmount = new Decimal(0);
		player.fourthAmount = new Decimal(0);
		player.fifthAmount = new Decimal(0);
		player.sixthAmount = new Decimal(0);
		player.seventhAmount = new Decimal(0);
		player.eighthAmount = new Decimal(0);

		player.firstBought = new Decimal(0);
		player.secondBought = new Decimal(0);
		player.thirdBought = new Decimal(0);
		player.fourthBought = new Decimal(0);
		player.fifthBought = new Decimal(0);
		player.sixthBought = new Decimal(0);
		player.seventhBought = new Decimal(0);
		player.eighthBought = new Decimal(0);

		player.firstMult = new Decimal(4);
		player.secondMult = new Decimal(2);
		player.thirdMult = new Decimal(1);
		player.fourthMult = new Decimal(1);
		player.fifthMult = new Decimal(1);
		player.sixthMult = new Decimal(1);
		player.seventhMult = new Decimal(1);
		player.eighthMult = new Decimal(1);

		player.firstFinalMult = new Decimal(1);
		player.secondFinalMult = new Decimal(1);
		player.thirdFinalMult = new Decimal(1);
		player.fourthFinalMult = new Decimal(1);
		player.fifthFinalMult = new Decimal(1);
		player.sixthFinalMult = new Decimal(1);
		player.seventhFinalMult = new Decimal(1);
		player.eighthFinalMult = new Decimal(1);
		
		player.allMult = new Decimal(1);
		player.allMultFinal = new Decimal(1);
		player.allMultCost = new Decimal(1000);
		player.allMultFinalCost = new Decimal(1000);
		player.allMultCostInc = new Decimal(1000);
		
		player.allMultBought = new Decimal(0);
		
		player.allMultFromFourthExpansionUpgrade = new Decimal(1);
		player.allMultFromEighthExpansionUpgrade = new Decimal(1);
		player.allMultFromTenthExpansionUpgrade = new Decimal(1);
		player.allMultFromFifthGammaUpgrade = new Decimal(1);
		player.allMultNewBaseCost = new Decimal(1e52);
		player.allMultNewBaseCostInc = new Decimal(100);
		
		player.expansionPointMultFromNinthExpansionUpgrade = new Decimal(1);
		player.expansionPointMultFromThirteenthExpansionUpgrade = new Decimal(1);
		
		buyGenerator(1);
	}
}

function prestigeAll(){
	for (let i = 1; i < 9; i++){
		prestige(i);
	}
}

function maxAll(){
	for (let tier = 1; tier < 9; tier++){
		let name = TIER_NAMES[tier];
		/*var buys = new Decimal(Decimal.floor(308/tier));
		let b = new Decimal.pow((Decimal.pow(10, tier)), tier);
		let r = new Decimal(Decimal.pow(10, tier));
		let k = player[name + "Bought"];
		let c = player.gold;
		let base = player[name + "Cost"];
		let ratio = Decimal.pow(10, tier);
		let count = Decimal.floor(Decimal.log((c.times(r.minus(1)).div(b.times(r.pow(k)))).plus(1), r));*/
		for (let i = 0; i < 1000; i++){
			buyGenerator(tier);
		}
		/*
		if (Decimal.lt(buys, player[name + "Bought"]) || Decimal.eq(buys, player[name + "Bought"])){
			let newB = player[name + "CostAfterInf"];
			let newR = Decimal.pow(Decimal.pow(10, (tier + 10)), (tier + 1));
			let newK = player[name + "Bought"].minus(buys);
			let newRatio = Decimal.pow(Decimal.pow(10, (tier + 10)), (tier + 1));
			let newCount = Decimal.floor(Decimal.log((c.times(newR.minus(1)).div(newB.times(newR.pow(newK)))).plus(1), newR));
			
			player.gold = player.gold.minus((base.minus(base.times(Decimal.pow(newRatio, newCount)))).div(new Decimal(1).minus(newRatio)));
			player[name + "Bought"] = player[name + "Bought"].plus(newCount);
			player[name + "Amount"] = player[name + "Amount"].plus(newCount);
			player[name + "Cost"] = player[name + "Cost"].times(newR.pow(newCount));
			player[name + "Mult"] = player[name + "Mult"].times(player.multPerBuyFinal.pow(newCount));
			
			buyGenerator(tier);

		}
		else if (buys.gt(player[name + "Bought"]) && buys.lt(player[name + "Bought"].plus(count))){
			let subCount = buys.minus(player[name + "Bought"]);
			
			player.gold = player.gold.minus((base.minus(base.times(Decimal.pow(ratio, subCount)))).div(1-ratio));
			player[name + "Bought"] = player[name + "Bought"].plus(subCount);
			player[name + "Amount"] = player[name + "Amount"].plus(subCount);
			player[name + "Cost"] = player[name + "Cost"].times(r.pow(subCount));
			player[name + "Mult"] = player[name + "Mult"].times(player.multPerBuyFinal.pow(subCount));
			
			buyGenerator(tier);
		}
		else if ((buys.layer > count.plus(player[name + "Bought"]).layer) || ((buys.layer == count.plus(player[name + "Bought"]).layer) && (buys.mag > count.plus(player[name + "Bought"]).mag))) {
			player.gold = player.gold.minus((base.minus(base.times(Decimal.pow(ratio, count)))).div(1-ratio));
			player[name + "Bought"] = player[name + "Bought"].plus(count);
			player[name + "Amount"] = player[name + "Amount"].plus(count);
			player[name + "Cost"] = player[name + "Cost"].times(r.pow(count));
			player[name + "Mult"] = player[name + "Mult"].times(player.multPerBuyFinal.pow(count));
			
			buyGenerator(tier);
		}
		*/
		if (tier == 1){
			for (i = 0; i < 1000; i++){
				buyAllMult();
			}
		}	
	}
}

function maxAllExpansion(){
	for (let tier = 1; tier < 9; tier++){
		for (let i = 0; i < 100; i++){
			buyExpansionGenerator(tier);
		}
	}
	for (let i = 0; i < 100; i++){
		epMult();
	}
}

/*document.onkeydown = function(e){
	
	// https://keycode.info/
	
	if (e.which == 77){
		maxAll();
	}
	
	if (e.which == 80){
		for (let i = 1; i < 101; i++){
			for (let y = 1; y < 9; y++){
				prestige(y);
			}
		}
	}
	
	if (e.which == 88){
		expand();
	}
	
	if (e.which == 79){
		becomeOmega();
	}
	
	if (e.which == 82){
		reachReality();
	}
}*/

function hotkeys(e){
	//https://keycode.info/
	if (e.which == 77){
		maxAll();
	}

	if (e.which == 69){
		maxAllExpansion();
	}
	
	if (e.which == 80){
		for (let i = 1; i < 101; i++){
			for (let y = 1; y < 9; y++){
				prestige(y);
			}
		}
	}
	
	if (e.which == 88){
		expand();
	}
	
	if (e.which == 79){
		becomeOmega();
	}
	
	if (e.which == 82){
		reachReality();
	}
}
document.addEventListener("keydown", hotkeys);

function expand(){
	if (((Decimal.floor(Decimal.log10(player.gold).div(((new Decimal(300)).div(player.expansionPointMultFinal)).times((new Decimal(1)).div((Decimal.log10(player.gold).div(300)).pow(3))))))).gt(0)){
		if (player.gold.gt(player.expansionCost) || player.gold.eq(player.expansionCost)){
			player.expansions = player.expansions.plus(1);
			player.expansionPoints = player.expansionPoints.plus(Decimal.floor(Decimal.log10(player.gold).div(((new Decimal(300)).div(player.expansionPointMultFinal)).times((new Decimal(1)).div((Decimal.log10(player.gold).div(300)).pow(3))))));

			player.gold = new Decimal(10);

			player.firstCost = new Decimal(10);
			player.secondCost = new Decimal(1000);
			player.thirdCost = new Decimal(1e9);
			player.fourthCost = new Decimal(1e16);
			player.fifthCost = new Decimal(1e25);
			player.sixthCost = new Decimal(1e36);
			player.seventhCost = new Decimal(1e49);
			player.eighthCost = new Decimal(1e64);

			player.firstCostAfterInf = new Decimal("1e309");
			player.secondCostAfterInf = new Decimal("1e311");
			player.thirdCostAfterInf = new Decimal("1e315");
			player.fourthCostAfterInf = new Decimal("1e324");
			player.fifthCostAfterInf = new Decimal("1e330");
			player.sixthCostAfterInf = new Decimal("1e342");
			player.seventhCostAfterInf = new Decimal("1e357");
			player.eighthCostAfterInf = new Decimal("1e368");
				
			player.firstNewBaseCost = new Decimal(1e25);
			player.secondNewBaseCost = new Decimal(1e37);
			player.thirdNewBaseCost = new Decimal(1e50);
			player.fourthNewBaseCost = new Decimal(1e62);
			player.fifthNewBaseCost = new Decimal(1e75);
			player.sixthNewBaseCost = new Decimal(1e87);
			player.seventhNewBaseCost = new Decimal(1e100);
			player.eighthNewBaseCost = new Decimal(1e112);

			player.firstNewBaseCostInc = new Decimal(2);
			player.secondNewBaseCostInc = new Decimal(4);
			player.thirdNewBaseCostInc = new Decimal(8);
			player.fourthNewBaseCostInc = new Decimal(16);
			player.fifthNewBaseCostInc = new Decimal(32);
			player.sixthNewBaseCostInc = new Decimal(64);
			player.seventhNewBaseCostInc = new Decimal(128);
			player.eighthNewBaseCostInc = new Decimal(256);

			player.firstAmount = new Decimal(1);
			player.secondAmount = new Decimal(0);
			player.thirdAmount = new Decimal(0);
			player.fourthAmount = new Decimal(0);
			player.fifthAmount = new Decimal(0);
			player.sixthAmount = new Decimal(0);
			player.seventhAmount = new Decimal(0);
			player.eighthAmount = new Decimal(0);

			player.firstBought = new Decimal(0);
			player.secondBought = new Decimal(0);
			player.thirdBought = new Decimal(0);
			player.fourthBought = new Decimal(0);
			player.fifthBought = new Decimal(0);
			player.sixthBought = new Decimal(0);
			player.seventhBought = new Decimal(0);
			player.eighthBought = new Decimal(0);

			player.firstMult = new Decimal(4);
			player.secondMult = new Decimal(2);
			player.thirdMult = new Decimal(1);
			player.fourthMult = new Decimal(1);
			player.fifthMult = new Decimal(1);
			player.sixthMult = new Decimal(1);
			player.seventhMult = new Decimal(1);
			player.eighthMult = new Decimal(1);

			player.firstFinalMult = new Decimal(1);
			player.secondFinalMult = new Decimal(1);
			player.thirdFinalMult = new Decimal(1);
			player.fourthFinalMult = new Decimal(1);
			player.fifthFinalMult = new Decimal(1);
			player.sixthFinalMult = new Decimal(1);
			player.seventhFinalMult = new Decimal(1);
			player.eighthFinalMult = new Decimal(1);

			player.firstPrestige = new Decimal(0);
			player.secondPrestige = new Decimal(0);
			player.thirdPrestige = new Decimal(0);
			player.fourthPrestige = new Decimal(0);
			player.fifthPrestige = new Decimal(0);
			player.sixthPrestige = new Decimal(0);
			player.seventhPrestige = new Decimal(0);
			player.eighthPrestige = new Decimal(0);

			player.firstPrestigeCost = new Decimal(3);
			player.secondPrestigeCost = new Decimal(5);
			player.thirdPrestigeCost = new Decimal(7);
			player.fourthPrestigeCost = new Decimal(9);
			player.fifthPrestigeCost = new Decimal(11);
			player.sixthPrestigeCost = new Decimal(13);
			player.seventhPrestigeCost = new Decimal(15);
			player.eighthPrestigeCost = new Decimal(17);
				
			player.firstNewPrestigeCost = new Decimal(4);
			player.secondNewPrestigeCost = new Decimal(8);
			player.thirdNewPrestigeCost = new Decimal(12);
			player.fourthNewPrestigeCost = new Decimal(16);
			player.fifthNewPrestigeCost = new Decimal(20);
			player.sixthNewPrestigeCost = new Decimal(24);
			player.seventhNewPrestigeCost = new Decimal(28);
			player.eighthNewPrestigeCost = new Decimal(32);
			
			player.secondsInExpansion = new Decimal(0);
					
			player.allMult = new Decimal(1);
			player.allMultFinal = new Decimal(1);
			player.allMultCost = new Decimal(1000);
			player.allMultFinalCost = new Decimal(1000);
			player.allMultCostInc = new Decimal(1000);
			player.allMultGain = new Decimal(1.05);
				
			player.allMultFromPrestige = new Decimal(1);
			player.allMultBought = new Decimal(0);
					
			player.allMultFromEighthExpansionUpgrade = new Decimal(1);
			player.allMultFromTenthExpansionUpgrade = new Decimal(1);
					
			player.allMultNewBaseCost = new Decimal(1e52);
			player.allMultNewBaseCostInc = new Decimal(100);
					
			player.expansionPointMultFromNinthExpansionUpgrade = new Decimal(1);
			player.expansionPointMultFromThirteenthExpansionUpgrade = new Decimal(1);
					
			player.electricity = new Decimal(0);
			
			if ((player.omegaUpgradeReset == true) && (player.omegaUpgrade1x2y == true)){
					let buys = player.alphaUpgrade5;
					player.alphaUpgrade5 = new Decimal(0);
					player.alpha = player.alpha.plus(buys);
					while (player.alpha.gt(0)){
						buyABGUpgrade(5, 'alpha');
					}
			}
			
			if ((player.omegaUpgradeReset == true) && (player.omegaUpgrade1x3y == true)){
					let buys = player.betaUpgrade5;
					player.betaUpgrade5 = new Decimal(0);
					player.beta = player.beta.plus(buys);
					while (player.beta.gt(0)){
						buyABGUpgrade(5, 'beta');
					}
			}
			
			if ((player.omegaUpgradeReset == true) && (player.omegaUpgrade1x4y == true)){
					let buys = player.gammaUpgrade5;
					player.gammaUpgrade5 = new Decimal(0);
					player.gamma = player.gamma.plus(buys);
					while (player.gamma.gt(0)){
						buyABGUpgrade(5, 'gamma');
					}
			}
			
			if (player.omegaUpgradeReset == true){
				for (x = 1; x < 5; x++){
					for (y = 1; y < 5; y++){
						player["omegaUpgrade" + x + "x" + y + "y"] = false;
						player["omegaUpgrade" + x + "x" + y + "y" + "Bought"] = new Decimal(0);
					}
				}
				
				player.omegaUpgradeCost = new Decimal(1);
				player.omegaUpgradeReset = false;
				document.getElementById("omegaUpgradeReset").classList.remove("activated");
			}
		}
	}
}

function epMult(){
	if (player.expansionPoints.gte(player.expansionPointMultCost) && player.expansionPointMultBought.gt(5000)){
		player.expansionPoints = player.expansionPoints.minus(player.expansionPointMultCost);
		player.expansionPointMultCost = player.expansionPointMultCost.times(player.expansionPointMultCostInc);
		player.expansionPointMultCostInc = player.expansionPointMultCostInc.times(player.expansionPointMultCostIncInc);
		player.expansionPointMultCostIncInc = player.expansionPointMultCostIncInc.times(1.01);
		player.expansionPointMult = player.expansionPointMult.times(2);
		player.expansionPointMultBought = player.expansionPointMultBought.plus(1);
		//console.log("Cost: " + format(player.expansionPointMultCost, 2) + " | CostInc: " + format(player.expansionPointMultCostInc, 2) + " | CostIncInc: " + format(player.expansionPointMultCostIncInc, 2));
	}
	else if (player.expansionPoints.gte(player.expansionPointMultCost)){
		player.expansionPoints = player.expansionPoints.minus(player.expansionPointMultCost);
		player.expansionPointMultCost = player.expansionPointMultCost.times(10);
		player.expansionPointMult = player.expansionPointMult.times(2);
		player.expansionPointMultBought = player.expansionPointMultBought.plus(1);
		//console.log("Cost: " + format(player.expansionPointMultCost, 2) + " | CostInc: " + format(player.expansionPointMultCostInc, 2) + " | CostIncInc: " + format(player.expansionPointMultCostIncInc, 2));
	}
}

function buyExpansionGenerator(tier){
	var name = TIER_NAMES[tier];
	var buys = [null, 10050, 6420, 5230, 4630, 4247, 3977, 3774, 3614];
	if ((player.expansionPoints.gte(player[name + "ExpansionGeneratorCost"])) && (player[name + "ExpansionGeneratorBought"].gt(buys[tier]))){
		player.expansionPoints = player.expansionPoints.minus(player[name + "ExpansionGeneratorCost"]);
		player[name + "ExpansionGeneratorCost"] = player[name + "ExpansionGeneratorCost"].times(player[name + "ExpansionGeneratorCostInc"]);
		player[name + "ExpansionGeneratorCostInc"] = player[name + "ExpansionGeneratorCostInc"].times(player[name + "ExpansionGeneratorCostIncInc"]);
		player[name + "ExpansionGeneratorCostIncInc"] = player[name + "ExpansionGeneratorCostIncInc"].times(1.01);
		player[name + "ExpansionGeneratorAmount"] = player[name + "ExpansionGeneratorAmount"].plus(1);
		player[name + "ExpansionGeneratorBought"] = player[name + "ExpansionGeneratorBought"].plus(1);
		player[name + "ExpansionGeneratorMult"] = player[name + "ExpansionGeneratorMult"].times(2);
		//console.log("Cost: " + format(player.eighthExpansionGeneratorCost, 2) + " | CostInc: " + format(player.eighthExpansionGeneratorCostInc, 2) + " | CostIncInc: " + format(player.eighthExpansionGeneratorCostIncInc, 2));
		//console.log("Cost: " + format(player[name + "ExpansionGeneratorCost"], 2) + " | CostInc: " + format(player[name + "ExpansionGeneratorCostInc"], 2) + " | CostIncInc: " + format(player[name + "ExpansionGeneratorCostIncInc"], 2));
	}
	else if (player.expansionPoints.gte(player[name + "ExpansionGeneratorCost"])){
		player.expansionPoints = player.expansionPoints.minus(player[name + "ExpansionGeneratorCost"]);
		player[name + "ExpansionGeneratorCost"] = player[name + "ExpansionGeneratorCost"].times(3 * tier);
		player[name + "ExpansionGeneratorAmount"] = player[name + "ExpansionGeneratorAmount"].plus(1);
		player[name + "ExpansionGeneratorBought"] = player[name + "ExpansionGeneratorBought"].plus(1);
		player[name + "ExpansionGeneratorMult"] = player[name + "ExpansionGeneratorMult"].times(2);
		//console.log("Cost: " + format(player.eighthExpansionGeneratorCost, 2) + " | CostInc: " + format(player.eighthExpansionGeneratorCostInc, 2) + " | CostIncInc: " + format(player.eighthExpansionGeneratorCostIncInc, 2));
		//console.log("Cost: " + format(player[name + "ExpansionGeneratorCost"], 2) + " | CostInc: " + format(player[name + "ExpansionGeneratorCostInc"], 2) + " | CostIncInc: " + format(player[name + "ExpansionGeneratorCostIncInc"], 2));
	}
}

function getExpansionUpgradeTrue(){
	for (let i = 0; i < 15; i++){
		if (player.electricity.gt(Math.pow(10, i * 2))){
			player["expansionUpgrade" + (i + 1)] = true;
		}
	}
}

function getExpansionUpgradeText(){
	if (player.expansionUpgrade1 == true){
		document.getElementById("expUp1").classList.remove("locked");
		document.getElementById("expUp1").innerHTML = "Gain a 20x multiplier<br>to every generator.";
		document.getElementById("nextExpansionUpgradeText").innerText = "Next Expansion Upgrade is unlocked at 100 Electricity and you Currently have " + format(player.electricity, 2) + " Electricity";
	}
	else {
		document.getElementById("expUp1").innerHTML = "Gain a 20x multiplier<br>to every generator."
		document.getElementById("expUp1").classList.add("locked");
		document.getElementById("nextExpansionUpgradeText").innerText = "Next Expansion Upgrade is unlocked at 1 Electricity and you Currently have " + format(player.electricity, 2) + " Electricity";
	};
	
	if (player.expansionUpgrade2 == true){
		document.getElementById("expUp2").classList.remove("locked");
		document.getElementById("expUp2").innerHTML = "Multiply your all<br>mult gain by 1.1x";
		document.getElementById("nextExpansionUpgradeText").innerText = "Next Expansion Upgrade is unlocked at 1e4 Electricity and you Currently have " + format(player.electricity, 2) + " Electricity";
	}
	else {
		document.getElementById("expUp2").innerHTML = "Multiply your all<br>mult gain by 1.1x";
		document.getElementById("expUp2").classList.add("locked");
	}

	if (player.expansionUpgrade3 == true){
		document.getElementById("expUp3").classList.remove("locked");
		document.getElementById("expUp3").innerHTML = "Increase max prestige<br>by 35.<br>Current: " + format(player.maxPrestige, 0);
		document.getElementById("nextExpansionUpgradeText").innerText = "Next Expansion Upgrade is unlocked at 1e6 Electricity and you Currently have " + format(player.electricity, 2) + " Electricity";
	}
	else {
		document.getElementById("expUp3").innerHTML = "Increase max prestige<br>by 35.<br>Current: 15";
		document.getElementById("expUp3").classList.add("locked");
	}
	
	if (player.expansionUpgrade4 == true){
		document.getElementById("expUp4").classList.remove("locked");
		document.getElementById("expUp4").innerHTML = "Gain a multiplier to<br>all generators based<br>on current Energy.<br>Current: " + format(player.allMultFromFourthExpansionUpgrade, 2) + "x";
		document.getElementById("nextExpansionUpgradeText").innerText = "Next Expansion Upgrade is unlocked at 1e8 Electricity and you Currently have " + format(player.electricity, 2) + " Electricity";
	}
	else {
		document.getElementById("expUp4").innerHTML = "Gain a multiplier to<br>all generators based<br>on current Energy.<br>Current: 1x";
		document.getElementById("expUp4").classList.add("locked");
	}
	
	if (player.expansionUpgrade5 == true){
		document.getElementById("expUp5").classList.remove("locked");
		document.getElementById("expUp5").innerHTML = "Unlock automatic<br>prestige autobuyer.<br>Prestige doesn't<br>reset.";
		document.getElementById("nextExpansionUpgradeText").innerText = "Next Expansion Upgrade is unlocked at 1e10 Electricity and you Currently have " + format(player.electricity, 2) + " Electricity";
	}
	else {
		document.getElementById("expUp5").innerHTML = "Unlock automatic<br>prestige autobuyer.<br>Prestige doesn't<br>reset.";
		document.getElementById("expUp5").classList.add("locked");
	}
	
	if (player.expansionUpgrade6 == true){
		document.getElementById("expUp6").classList.remove("locked");
		document.getElementById("expUp6").innerHTML = "Remove the max<br>prestige limit.";
		document.getElementById("expUp3").innerHTML = "Increase max prestige<br>by 35.<br>Current: Infinite";
		document.getElementById("nextExpansionUpgradeText").innerText = "Next Expansion Upgrade is unlocked at 1e12 Electricity and you Currently have " + format(player.electricity, 2) + " Electricity";
	}
	else {
		document.getElementById("expUp6").innerHTML = "Remove the max<br>prestige limit.";
		document.getElementById("expUp6").classList.add("locked");
	}
	
	if (player.expansionUpgrade7 == true){
		document.getElementById("expUp7").classList.remove("locked");
		document.getElementById("expUp7").innerHTML = "Unlock generator<br>and all mult.<br>autobuyers";
		document.getElementById("nextExpansionUpgradeText").innerText = "Next Expansion Upgrade is unlocked at 1e14 Electricity and you Currently have " + format(player.electricity, 2) + " Electricity";
	}
	else {
		document.getElementById("expUp7").innerHTML = "Unlock generator<br>and all mult.<br>autobuyers";
		document.getElementById("expUp7").classList.add("locked");
	}
	
	if (player.expansionUpgrade8 == true){
		document.getElementById("expUp8").classList.remove("locked");
		document.getElementById("expUp8").innerHTML = "Gain a multiplier<br>to all generators<br>based on EP.<br>Current: " + format(player.allMultFromEighthExpansionUpgrade, 2) + "x";
		document.getElementById("nextExpansionUpgradeText").innerText = "Next Expansion Upgrade is unlocked at 1e16 Electricity and you Currently have " + format(player.electricity, 2) + " Electricity";
	}
	else {
		document.getElementById("expUp8").innerHTML = "Gain a multiplier<br>to all generators<br>based on EP.<br>Current: " + format(player.allMultFromEighthExpansionUpgrade, 2) + "x";
		document.getElementById("expUp8").classList.add("locked");
	}
	
	if (player.expansionUpgrade9 == true){
		document.getElementById("expUp9").classList.remove("locked");
		document.getElementById("expUp9").innerHTML = "Gain a multiplier<br>to EP gain<br>based on first<br>generator prestiges.<br>Current: " + format(player.expansionPointMultFromNinthExpansionUpgrade, 0) + "x";
		document.getElementById("nextExpansionUpgradeText").innerText = "Next Expansion Upgrade is unlocked at 1e18 Electricity and you Currently have " + format(player.electricity, 2) + " Electricity";
	}
	else {
		document.getElementById("expUp9").innerHTML = "Gain a multiplier<br>to EP gain<br>based on first<br>generator prestiges.<br>Current: 1x";
		document.getElementById("expUp9").classList.add("locked");
	}
	
	if (player.expansionUpgrade10 == true){
		document.getElementById("expUp10").classList.remove("locked");
		document.getElementById("expUp10").innerHTML = "Gain a multiplier<br>to all generators<br>based on electricity.<br>Current: " + format(player.allMultFromTenthExpansionUpgrade, 2) + "x";
		document.getElementById("nextExpansionUpgradeText").innerText = "Next Expansion Upgrade is unlocked at 1e20 Electricity and you Currently have " + format(player.electricity, 2) + " Electricity";
	}
	else {
		document.getElementById("expUp10").innerHTML = "Gain a multiplier<br>to all generators<br>based on electricity.<br>Current: 1x";
		document.getElementById("expUp10").classList.add("locked");
	}
	
	if (player.expansionUpgrade11 == true){
		document.getElementById("expUp11").classList.remove("locked");
		document.getElementById("expUp11").innerHTML = "Gain a multiplier<br>to all<br>expansion generators<br>based on EP.<br>Current: " + format(player.expansionGeneratorAllMultFromEleventhExpansionUpgrade, 2) + "x";
		document.getElementById("nextExpansionUpgradeText").innerText = "Next Expansion Upgrade is unlocked at 1e22 Electricity and you Currently have " + format(player.electricity, 2) + " Electricity";
	}
	else {
		document.getElementById("expUp11").innerHTML = "Gain a multiplier<br>to all<br>expansion generators<br>based on EP.<br>Current: 1x";
		document.getElementById("expUp11").classList.add("locked");
	}
	
	if (player.expansionUpgrade12 == true){
		document.getElementById("expUp12").classList.remove("locked");
		document.getElementById("expUp12").innerHTML = "Increase your all<br>mult gain based<br>on highest ever EP.<br>Current: " + format(player.allMultGainFromTwelfthExpansionUpgrade, 2) + "x";
		document.getElementById("nextExpansionUpgradeText").innerText = "Next Expansion Upgrade is unlocked at 1e24 Electricity and you Currently have " + format(player.electricity, 2) + " Electricity";
	}
	else {
		document.getElementById("expUp12").innerHTML = "Increase your all<br>mult gain based<br>on highest ever EP.<br>Current: " + format(player.allMultGainFromTwelfthExpansionUpgrade, 2) + "x";
		document.getElementById("expUp12").classList.add("locked");
	}
	
	if (player.expansionUpgrade13 == true){
		document.getElementById("expUp13").classList.remove("locked");
		document.getElementById("expUp13").innerHTML = "Gain a multiplier<br>to EP gain based<br>on how many<br>times you have<br>Expanded.<br>Current: " + format(player.expansionPointMultFromThirteenthExpansionUpgrade, 0) + "x";
		document.getElementById("nextExpansionUpgradeText").innerText = "Next Expansion Upgrade is unlocked at 1e26 Electricity and you Currently have " + format(player.electricity, 2) + " Electricity";
	}
	else {
		document.getElementById("expUp13").innerHTML = "Gain a multiplier<br>to EP gain based<br>on how many<br>times you have<br>Expanded.<br>Current: 1x";
		document.getElementById("expUp13").classList.add("locked");
	}
	
	if (player.expansionUpgrade14 == true){
		document.getElementById("expUp14").classList.remove("locked");
		document.getElementById("expUp14").innerHTML = "Unlock expansion<br>autobuyer.";
		document.getElementById("nextExpansionUpgradeText").innerText = "Next Expansion Upgrade is unlocked at 1e28 Electricity and you Currently have " + format(player.electricity, 2) + " Electricity";
	}
	else {
		document.getElementById("expUp14").innerHTML = "Unlock expansion<br>autobuyer.";
		document.getElementById("expUp14").classList.add("locked");
	}
	
	if (player.expansionUpgrade15 == true){
		document.getElementById("expUp15").classList.remove("locked");
		document.getElementById("expUp15").innerHTML = "Alpha, Beta and<br>Gamma unlocked!";
		document.getElementById("nextExpansionUpgradeText").innerText = "All Expansion Upgrades are unlocked! You Currently have " + format(player.electricity, 2) + " Electricity";
	}
	else {
		document.getElementById("expUp15").innerHTML = "Unlock ???";
		document.getElementById("expUp15").classList.add("locked");
	}
}

function getExpansionUpgradeEffect(){
	if (player.expansionUpgrade1 == true){
		player.allMultFromFirstExpansionUpgrade = new Decimal(20);
		player.firstExpansionMultFromUpgrades = new Decimal(4);
	}
	if (player.expansionUpgrade2 == true){
		player.allMultGainFromSecondExpansionUpgrade = new Decimal(1.1);
		player.firstExpansionMultFromUpgrades = new Decimal(8);
	}
	if (player.expansionUpgrade3 == true && player.expansionUpgrade6 == false){
		player.maxPrestige = new Decimal(50);
		player.firstExpansionMultFromUpgrades = new Decimal(16);
	}
	if (player.expansionUpgrade4 == true){
		if (((Decimal.log2(player.gold.pow(5))).plus(1)).gt(1)){
			player.allMultFromFourthExpansionUpgrade = (Decimal.log2(player.gold.pow(5))).plus(1);
		}
		player.firstExpansionMultFromUpgrades = new Decimal(32);
	}
	if (player.expansionUpgrade5 == true){
		player.hasUnlockedAutobuyers = true;
		player.firstExpansionMultFromUpgrades = new Decimal(64);
	}
	if (player.expansionUpgrade6 == true){
		player.maxPrestige = new Decimal(1e300);
		player.firstExpansionMultFromUpgrades = new Decimal(128);
	}
	if (player.expansionUpgrade7 == true){
		
		player.firstExpansionMultFromUpgrades = new Decimal(256);
	}
	if (player.expansionUpgrade8 == true){
		player.allMultFromEighthExpansionUpgrade = (player.expansionPoints.div(1000).pow(4)).plus(1);
		player.firstExpansionMultFromUpgrades = new Decimal(512);
	}
	if (player.expansionUpgrade9 == true){
		player.expansionPointMultFromNinthExpansionUpgrade = player.firstPrestige.plus(1);
		player.firstExpansionMultFromUpgrades = new Decimal(1024);
	}
	if (player.expansionUpgrade10 == true){
		player.allMultFromTenthExpansionUpgrade = ((player.electricity.pow(3)).plus(1)).pow(player.allMultFromTenthExpansionUpgrade2x4y);
		player.firstExpansionMultFromUpgrades = new Decimal(2048);
	}
	if (player.expansionUpgrade11 == true){
		if (((Decimal.log10(player.expansionPoints)).div(2)).gt(0)){
			player.expansionGeneratorAllMultFromEleventhExpansionUpgrade = ((Decimal.log10(player.expansionPoints)).div(2)).plus(1);
		}
		else player.expansionGeneratorAllMultFromEleventhExpansionUpgrade = new Decimal(1);
		player.firstExpansionMultFromUpgrades = new Decimal(4096);
	}
	if (player.expansionUpgrade12 == true){
		if ((Decimal.log2(Decimal.log10(player.expansionPoints))).gt(1)){
			if (((Decimal.log2(Decimal.log10(player.expansionPoints))).plus(1)).gt(player.allMultGainFromTwelfthExpansionUpgrade)){
				player.allMultGainFromTwelfthExpansionUpgrade = (Decimal.log2(Decimal.log10(player.expansionPoints))).plus(1);
			}
		}
		player.firstExpansionMultFromUpgrades = new Decimal(8192);
	}
	if (player.expansionUpgrade13 == true){
		player.expansionPointMultFromThirteenthExpansionUpgrade = (player.expansions.times(player.expansionUpgradeThirteenEffectIncrease)).plus(1);
		player.firstExpansionMultFromUpgrades = new Decimal(16384);
	}
	if (player.expansionUpgrade14 == true){
		
		player.firstExpansionMultFromUpgrades = new Decimal(32768);
	}
	if (player.expansionUpgrade15 == true){
		player.hasUnlockedABG = true;
		player.firstExpansionMultFromUpgrades = new Decimal(65536);
	}
}

function getLoop(){
	if (((Decimal.log10(Decimal.log10(player.gold)).div(3).times(player.gammaUpgrade2)).plus(1)).gt(player.allMultGainFromSecondGammaUpgrade)){
	   player.allMultGainFromSecondGammaUpgrade = (Decimal.log10(Decimal.log10(player.gold)).div(3).times(player.gammaUpgrade2)).plus(1);
	}
	
	if (player.alphaUpgrade2 == 0){
		player.expansionPointMultFromSecondAlphaUpgrade == new Decimal(1);
	}
	else player.expansionPointMultFromSecondAlphaUpgrade = ((player.secondsInExpansion.div(new Decimal(6).minus(player.alphaUpgrade2))).pow(player.alphaUpgrade2)).plus(1);
	
	player.alphaUpgrade5FinalMult = player.alphaUpgrade5MultIncreaseFromOmegaUpgrade1x2y.times(2.5);
	player.expansionPointMultFromFifthAlphaUpgrade = player.alphaUpgrade5FinalMult.pow(player.alphaUpgrade5);
	
	player.betaUpgrade5FinalMult = player.betaUpgrade5MultIncreaseFromOmegaUpgrade1x3y.times(3).times(player.betaUpgrade5MultIncreaseFromOmegaUpgrade4x3y);
	player.expansionGeneratorAllMultFromFifthBetaUpgrade = player.betaUpgrade5FinalMult.pow(player.betaUpgrade5);
	
	player.gammaUpgrade5FinalMult = player.gammaUpgrade5MultIncreaseFromOmegaUpgrade1x4y.times(1e20);
	player.allMultFromFifthGammaUpgrade = player.gammaUpgrade5FinalMult.pow(player.gammaUpgrade5);
	
	player.finalDPS = player.DPS.times(player.PVPLegendMult).times(player.hybridMult).times(player.resimulateDPSMult).times(player.secondSimUpgrade).times(player.thirdSimUpgrade).times(player.seventhSimUpgrade).times(player.realityBonus6);
	
	player.finalGPS = (player.stage.pow(player.stageExponent)).times(player.goldFarmerMult).times(player.hybridMult).times(player.firstSimUpgrade).times(player.secondSimUpgrade).times(player.fifthSimUpgrade).times(player.realityBonus6);
	
	player.stageExponent = new Decimal(2).times(player.resimulateStageExponentMult);
	
	if (player.firstSimUpgradeBought == true){
		player.firstSimUpgrade = Decimal.pow(new Decimal(3).times(player.fourthSimUpgrade), Decimal.floor(player.goldFarmerLevel.div(4)));
	}
	else player.firstSimUpgrade = new Decimal(1);
	
	if (player.secondSimUpgradeBought == true){
		player.secondSimUpgrade = Decimal.pow(new Decimal(2).times(player.fourthSimUpgrade), Decimal.floor(player.hybridLevel.div(4)));
	}
	else player.secondSimUpgrade = new Decimal(1);
	
	if (player.thirdSimUpgradeBought == true){
		player.thirdSimUpgrade = Decimal.pow(new Decimal(5).times(player.fourthSimUpgrade), Decimal.floor(player.PVPLegendLevel.div(4)));
	}
	else player.thirdSimUpgrade = new Decimal(1);
	
	if (player.fourthSimUpgradeBought == true){
		player.fourthSimUpgrade = Decimal.pow(new Decimal(1.5), Decimal.floor((player.goldFarmerLevel.plus(player.hybridLevel.plus(player.PVPLegendLevel))).div(player.fourthSimUpgradeTotalLevels)));
	}
	else player.fourthSimUpgrade = new Decimal(1);
	
	if (player.fifthSimUpgradeBought == true){
		player.fifthSimUpgrade = Decimal.pow(1.25, player.stage);
	}
	else player.fifthSimUpgrade = new Decimal(1);
	
	if (player.seventhSimUpgradeBought == true){
		player.seventhSimUpgrade = Decimal.pow(1.25, player.stage);
	}
	else player.seventhSimUpgrade = new Decimal(1);
	
	if (player.eighthSimUpgradeBought == true){
		player.eighthSimUpgrade = new Decimal(1.1);
	}
	else player.eighthSimUpgrade = new Decimal(1);
	
	player.electronEffect = (Decimal.root(player.electrons, 10)).pow(player.secondAtomUpgrade3);
	
	player.thirdElectronUpgradeCost = ((new Decimal(1000).pow(new Decimal(1.5).pow(player.totalAtomResets))).pow(player.thirdElectronUpgradeCost4x3y)).pow(player.thirdElectronUpgradeCost4x4y);
	
	player.electronGainGain = new Decimal(1.01).plus(player.electronGain3x4y).plus(player.electronGain4x4y);
	
	player.electronGain = player.electronGainGain.pow(player.electronGainBought.plus(1));
	
	player.electronGainFinal = player.electronGain.times(player.electronGainFromOmegaUpgrade3x3y).times(player.atomShopItem18Effect);
	
	player.electronInterval = new Decimal(1000).minus(player.thirdAtomUpgrade3);


	
	if (player.talent1IsActive == true){
		player.talent1Effect = (player.friendlyArmor.times(new Decimal(1).plus(player.superArmor.times(0.1)))).times(0.2);
	}
	else player.talent1Effect = new Decimal(0);
	
	if (player.talent2IsActive == true){
		if (player.talent14IsActive == false){
			player.talent2Effect = Decimal.floor(player.friendlyStrength.div(10)).times(3);
		}
		else {
			player.talent2Effect = Decimal.floor((player.friendlyStrength.times(new Decimal(1).plus(player.superStrength.times(0.01)))).div(10)).times(3);
		}
	}
	else player.talent2Effect = new Decimal(0);
	
	if (player.talent3IsActive == true){
		player.talent3Effect = player.friendlyHealthTotal.times(0.1);
	}
	else player.talent3Effect = new Decimal(0);
	
	if (player.talent4IsActive == true){
		player.talent4Effect = player.friendlyRegeneration.times(0.1);
	}
	else player.talent4Effect = new Decimal(0);
	
	if (player.talent5IsActive == true){
		player.talent5Effect = new Decimal(0.25);
	}
	else player.talent5Effect = new Decimal(0);
		
	if (player.talent6IsActive == true){
		if (player.talent15IsActive == false){
			player.talent6Effect = Decimal.floor(player.friendlyRegeneration.div(10)).plus(Decimal.floor(player.friendlyArmor.div(5)));
		}
		else player.talent6Effect = Decimal.floor((player.friendlyRegeneration.times(new Decimal(1).plus(player.superRegeneration.times(0.1)))).div(10)).plus(Decimal.floor(((player.friendlyArmor.plus(player.talent15Effect2)).times(new Decimal(1).plus(player.superArmor.times(0.1)))).div(5)));
		
	}
	else player.talent6Effect = new Decimal(0);
	
	if (player.talent7IsActive == true){
		player.talent7Effect = (player.friendlyArmor.times(new Decimal(1).plus(player.superArmor.times(0.1)))).times(0.5);
		if (player.talent7Effect.gt(player.enemyAgility)){
			player.talent7Effect = player.enemyAgility;
		}
	}
	else player.talent7Effect = new Decimal(0);
	
	if (player.talent8IsActive == true){
		player.talent8Effect = (player.friendlyStrength.times(new Decimal(1).plus(player.superStrength.times(0.1)))).times(2);
		if (player.talent8Effect.gt(player.enemyRegeneration)){
			player.talent8Effect = player.enemyRegeneration;
		}
	}
	else player.talent8Effect = new Decimal(0);
	
	if (player.talent9IsActive == true){
		player.talent9Effect = new Decimal(0.05);
	}
	else player.talent9Effect = new Decimal(0);

	if (player.talent10IsActive == true){
		player.talent10Effect = player.friendlyArmor.times(new Decimal(1).plus(player.superArmor.times(0.1))).times(2);
	}
	else player.talent10Effect = new Decimal(0);

	if (player.talent11IsActive == true){
		player.talent11Effect = new Decimal(2);
	}
	else player.talent11Effect = new Decimal(0);

	if (player.talent12IsActive == true){
		player.talent12Effect = Decimal.floor(player.enemyStamina.times(0.2));
	}
	else player.talent12Effect = new Decimal(0);

	if (player.talent13IsActive == true){
		player.talent13Effect = (player.friendlyArmor.times(new Decimal(1).plus(player.superArmor.times(0.1)))).times(0.03);
	}
	else player.talent13Effect = new Decimal(0);

	if (player.talent14IsActive == true){
		player.talent14Effect = Decimal.floor((player.friendlyStrength.times(new Decimal(1).plus(player.superStrength.times(0.01)))).div(10)).times(3);
	}
	else player.talent14Effect = new Decimal(0);

	if (player.talent15IsActive == true){
		player.talent15Effect = player.friendlyHealthTotal.div(10);
		player.talent15Effect2 = (player.friendlyAgility.times(new Decimal(1).plus(player.superAgility.times(0.1)))).times(0.05);
	}
	else {
		player.talent15Effect = new Decimal(0);
		player.talent15Effect2 = new Decimal(0);
	}



	if (player.atomShopItem2Bought == true){
		player.atomShopItem2Effect = new Decimal(1.1).pow(player.atomShopItemsBought);
	}
	else player.atomShopItem2Effect = new Decimal(1);

	if (player.atomShopItem11Bought = true){
		player.atomShopItem11Effect = new Decimal(1.5);
	}
	else player.atomShopItem11Effect = new Decimal(1);

	if (player.atomShopItem16Bought == true){
		player.atomShopItem16Effect = player.friendlyLevel.pow(2);
	}
	else player.atomShopItem16Effect = new Decimal(1);

	if (player.atomShopItem18Bought == true){
		player.atomShopItem18Effect = player.resimulateStageExponentMult.times(Decimal.log10(player.atoms));
	}
	else player.atomShopItem18Effect = new Decimal(1);

	if (player.atomShopItem19Bought == true){
		let totalSP = player.skillpoints.plus(player.friendlyStamina).plus(player.friendlyStrength).plus(player.friendlyArmor).plus(player.friendlyRegeneration).plus(player.friendlyAgility);
		player.atomShopItem19Effect = Decimal.pow(2, totalSP);
	}
	else player.atomShopItem19Effect = new Decimal(1);
}

document.getElementById("autoPrestigeCheck").checked = player.prestigeAutobuyerChecked;
document.getElementById("autoGeneratorCheck").checked = player.generatorAutobuyerChecked;
document.getElementById("autoAllMultCheck").checked = player.allMultAutobuyerChecked;
document.getElementById("autoExpansionCheck").checked = player.expansionAutobuyerChecked;
document.getElementById("autoABGCheck").checked = player.alphaBetaGammaAutobuyerChecked;
document.getElementById("autoExpansionGeneratorCheck").checked = player.expansionGeneratorAutobuyerChecked;
document.getElementById("autoExpansionPointMultCheck").checked = player.expansionPointMultAutobuyerChecked;
document.getElementById("autoABGUpgrade5Check").checked = player.alphaBetaGammaUpgrade5AutobuyerChecked;
document.getElementById("autoSimulationHeroCheck").checked = player.simulationHeroAutobuyerChecked;
document.getElementById("autoFightCheck").checked = player.fightingAutobuyerChecked;
document.getElementById("autoBattleTowerCheck").checked = player.battleTowerAutobuyerChecked;
document.getElementById("autoBuild1Check").checked = player.build1AutobuyerChecked;
document.getElementById("autoBuild2Check").checked = player.build2AutobuyerChecked;
document.getElementById("autoBuild3Check").checked = player.build3AutobuyerChecked;
document.getElementById("autoBuild4Check").checked = player.build4AutobuyerChecked;
document.getElementById("autoBuild1Check2").checked = player.build1AutobuyerChecked;
document.getElementById("autoBuild2Check2").checked = player.build2AutobuyerChecked;
document.getElementById("autoBuild3Check2").checked = player.build3AutobuyerChecked;
document.getElementById("autoBuild4Check2").checked = player.build4AutobuyerChecked;
document.getElementById("autoOmegaGeneratorCheck").checked = player.omegaGeneratorAutobuyerChecked;
document.getElementById("autoElectronUpgradesCheck").checked = player.electronUpgradesAutobuyerChecked;

function autobuy(){
	if (document.getElementById("autoPrestigeCheck").checked == true && (player.expansionUpgrade5 == true || player.eighthSimUpgradeBought == true || player.atomShopItem6Bought == true)){
		for (tier = 1; tier < 9; tier++){
			for (i = 0; i < 100; i++){
				prestige(tier);
			}
		}
		player.prestigeAutobuyerChecked = true;
	}
	else player.prestigeAutobuyerChecked = false;
	
	if (document.getElementById("autoGeneratorCheck").checked == true && (player.expansionUpgrade7 == true || player.eighthSimUpgradeBought == true || player.atomShopItem6Bought == true)){
		for (tier = 1; tier < 9; tier++){
			for (i = 0; i < 1000; i++){
				buyGenerator(tier);
			}
		}
		player.generatorAutobuyerChecked = true;
	}
	else player.generatorAutobuyerChecked = false;
	
	if (document.getElementById("autoAllMultCheck").checked == true && (player.expansionUpgrade7 == true || player.eighthSimUpgradeBought == true || player.atomShopItem6Bought == true)){
		for (i = 0; i < 1000; i++){
			buyAllMult();
		}
		player.allMultAutobuyerChecked = true;
	}
	else player.allMultAutobuyerChecked = false;
	
	if (document.getElementById("autoExpansionCheck").checked == true && (player.expansionUpgrade14 == true || player.eighthSimUpgradeBought == true || player.atomShopItem6Bought == true)){
		var expAt = document.getElementById("autoExpansionText").value;
		if (((Decimal.floor(Decimal.log10(player.gold).div(((new Decimal(300)).div(player.expansionPointMultFinal)).times((new Decimal(1)).div((Decimal.log10(player.gold).div(300)).pow(3))))))).gt(new Decimal(expAt))){
			expand();
		}
		player.expansionAutobuyerChecked = true;
	}
	else player.expansionAutobuyerChecked = false;
	
	if (document.getElementById("autoABGCheck").checked == true && (player.alphaUpgrade4 == 1 || player.eighthSimUpgradeBought == true || player.atomShopItem6Bought == true)){
		for (let i = 0; i < 500; i++){
			buyAlpha();
			buyBeta();
			buyGamma();
		}
		player.alphaBetaGammaAutobuyerChecked = true;
	}
	else player.alphaBetaGammaAutobuyerChecked = false;
	
	if (document.getElementById("autoExpansionPointMultCheck").checked == true && (player.gammaUpgrade4 == 1 || player.eighthSimUpgradeBought == true || player.atomShopItem6Bought == true)){
		for (let i = 0; i < 500; i++){
			epMult();
		}
		player.expansionPointMultAutobuyerChecked = true;
	}
	else player.expansionPointMultAutobuyerChecked = false;
	
	if (document.getElementById("autoExpansionGeneratorCheck").checked == true && (player.gammaUpgrade4 == 1 || player.eighthSimUpgradeBought == true || player.atomShopItem6Bought == true)){
		for (let tier = 1; tier < 9; tier++){
			for (let i = 0; i < 500; i++){
				buyExpansionGenerator(tier);
			}
		}
		player.expansionGeneratorAutobuyerChecked = true;
	}
	else player.expansionGeneratorAutobuyerChecked = false;
	
	if (document.getElementById("autoABGUpgrade5Check").checked == true && (player.betaUpgrade4 == 1 || player.eighthSimUpgradeBought == true || player.atomShopItem6Bought == true)){
		for (let i = 0; i < 500; i++){
			if (player.alphaUpgrade4 == 1){
				buyABGUpgrade(5, 'alpha');
			}
			if (player.betaUpgrade4 == 1){
				buyABGUpgrade(5, 'beta');
			}
			if (player.gammaUpgrade4 == 1){
				buyABGUpgrade(5, 'gamma');
			}
		}
		player.alphaBetaGammaUpgrade5AutobuyerChecked = true;
	}
	else player.alphaBetaGammaUpgrade5AutobuyerChecked = false;
	
	if (document.getElementById("autoSimulationHeroCheck").checked == true && (player.sixthSimUpgradeBought == true || player.eighthSimUpgradeBought == true || player.atomShopItem6Bought == true)){
		for (let i = 0; i < 1000; i++){
			buyHero(1);
			buyHero(2);
			buyHero(3);
		}
		player.simulationHeroAutobuyerChecked = true;
	}
	else player.simulationHeroAutobuyerChecked = false;
	
	if (document.getElementById("autoFightCheck").checked == true && (player.sixthSimUpgradeBought == true || player.eighthSimUpgradeBought == true || player.atomShopItem6Bought == true)){
		if ((player.finalDPS.div(player.monsterTotalHP)).gt(10)){
			simMode(2);
		}
		else simMode(1);
		player.fightingAutobuyerChecked = true;
	}
	else player.fightingAutobuyerChecked = false;

	if (document.getElementById("autoBattleTowerCheck").checked == true && player.atomShopItem10Bought == true){
		if (player.isResting == true && player.friendlyHealthCurrent.gte(player.friendlyHealthTotal)){
			prevNext(1);
			restOrFight(2);
		}

		let friendlyStrengthDamage2 = player.friendlyStrength.times(new Decimal(1).plus(player.superStrength.times(0.1))).times(player.talent11Effect.plus(2));
		let talent3Damage2 = player.talent3Effect;
		let talent10Damage2 = player.talent10Effect;
		let friendlyFinalDamage2 = friendlyStrengthDamage2.plus(talent3Damage2).plus(talent10Damage2);
		let friendlyArmor2 = (player.friendlyArmor.plus(player.talent14Effect).plus(player.talent15Effect2)).times(new Decimal(1).plus(player.superArmor.times(0.1)));
		let friendlyRegeneration2 = player.friendlyRegeneration.times(new Decimal(1).plus(player.superRegeneration.times(0.1)).plus(player.talent1Effect)).plus(player.talent15Effect);
		let friendlyAgility2 = (player.friendlyAgility.plus(player.talent2Effect).plus(player.talent13Effect)).times(new Decimal(0.75).plus(player.talent5Effect)).times(new Decimal(1).plus(player.superAgility.times(0.01)));
		
		let enemyFinalDamage2 = player.enemyStrength.times(2);
		let enemyArmor2 = player.enemyArmor;
		let enemyRegeneration2 = player.enemyRegeneration.minus(player.talent8Effect);
		let enemyAgility2 = (player.enemyAgility.minus(player.talent7Effect)).times(0.75);
		
		let friendlyArmorEffectPositive2 = (new Decimal(1.05).plus(player.talent4Effect)).pow(friendlyArmor2);
		let friendlyArmorEffectNegative2 = new Decimal(1).plus(new Decimal(0.05).times(enemyAgility2.minus(friendlyArmor2)));
		
		let enemyArmorEffectPositive2 = new Decimal(1.05).pow(enemyArmor2);
		let enemyArmorEffectNegative2 = new Decimal(1).plus(new Decimal(0.05).times(friendlyAgility2.minus(enemyArmor2)));

		let friendlyIsTakingDamage = true;
		let enemyIsTakingDamage = true;

		if ((friendlyArmor2.minus(enemyAgility2)).lt(0)){
			if ((enemyFinalDamage2.times(friendlyArmorEffectNegative2).minus(friendlyRegeneration2)).lte(player.friendlyHealthTotal.div(60))){
				friendlyIsTakingDamage = false;
			}
			else friendlyIsTakingDamage = true;
		}
		else {
			if ((enemyFinalDamage2.div(friendlyArmorEffectPositive2).minus(friendlyRegeneration2)).lte(player.friendlyHealthTotal.div(60))){
				friendlyIsTakingDamage = false;
			}
			else friendlyIsTakingDamage = true;
		}
		
		if ((enemyArmor2.minus(friendlyAgility2)).lt(0)){
			if ((friendlyFinalDamage2.times(enemyArmorEffectNegative2).minus(enemyRegeneration2)).lte(player.enemyHealthTotal.div(60))){
				enemyIsTakingDamage = false;
			}
			else enemyIsTakingDamage = true;
		}
		else {
			if ((friendlyFinalDamage2.div(enemyArmorEffectPositive2).minus(enemyRegeneration2)).lte(player.enemyHealthTotal.div(60))){
				enemyIsTakingDamage = false;
			}
			else enemyIsTakingDamage = true;
		}

		if (friendlyIsTakingDamage == false && enemyIsTakingDamage == false){
			prevNext(1);
		}

		if (player.enemyHealthCurrent.lte(0)){
			if (player.isBoss == true){
				if (player.bossesKilled == 0 && player.enemyLevel.eq(100)){
					player.bossesKilled = new Decimal(1);
					player.maxEnemyLevel = new Decimal(200);
				}
				if (player.bossesKilled == 1 && player.enemyLevel.eq(200)){
					player.bossesKilled = new Decimal(2);
					player.maxEnemyLevel = new Decimal(300);
				}
				if (player.bossesKilled == 2 && player.enemyLevel.eq(300)){
					player.bossesKilled = new Decimal(3);
					player.maxEnemyLevel = new Decimal(400);
				}
				if (player.bossesKilled == 3 && player.enemyLevel.eq(400)){
					player.bossesKilled = new Decimal(4);
					player.maxEnemyLevel = new Decimal(500);
				}
				if (player.bossesKilled == 4 && player.enemyLevel.eq(500)){
					player.bossesKilled = new Decimal(5);
					player.maxEnemyLevel = new Decimal(1e300);
				}
			}
	
			if (player.isLegendary == true){
				player.atoms = player.atoms.plus(Decimal.floor((new Decimal(1.1).pow(player.enemyLevel)).times(player.atomShopItem2Effect)));
			}
			
			player.currentXp = player.currentXp.plus(new Decimal(1.3).pow(player.enemyLevel));
			
			if (player.highestEnemyLevel.lt(player.enemyLevel)){
				player.highestEnemyLevel = player.enemyLevel;
			}
			
			if (player.atomShopItem1Bought == true && player.atomShopItem1Skillpoints.lt(player.highestFriendlyLevel.times(3))){
				if (player.atomShopItem1Counter.lt(player.atomShopItem13Effect.minus(1))){
					player.atomShopItem1Counter = player.atomShopItem1Counter.plus(1);
				}
				else {
					player.atomShopItem1Counter = new Decimal(0);
					player.atomShopItem1Skillpoints = player.atomShopItem1Skillpoints.plus(1);
					player.skillpoints = player.skillpoints.plus(1);
				}
			}
	
			if (player.atomShopItem9Bought == true && player.atomShopItem9Skillpoints.lt(player.highestEnemyLevel)){
				if (player.atomShopItem9Counter.lt(player.atomShopItem13Effect.minus(1))){
					player.atomShopItem9Counter = player.atomShopItem9Counter.plus(1);
				}
				else {
					player.atomShopItem9Counter = new Decimal(0);
					player.atomShopItem9Skillpoints = player.atomShopItem9Skillpoints.plus(1);
					player.skillpoints = player.skillpoints.plus(1);
				}
			}
			
			prevNext(2);
		}

		player.battleTowerAutobuyerChecked = true;
	}
	else player.battleTowerAutobuyerChecked = false;

	if (document.getElementById("autoBuild1Check").checked == true || document.getElementById("autoBuild1Check2").checked){
		player.build1AutobuyerChecked = true;
	}
	else {
		player.build1AutobuyerChecked = false;
	}

	if (document.getElementById("autoBuild2Check").checked == true || document.getElementById("autoBuild2Check2").checked){
		player.build2AutobuyerChecked = true;
	}
	else {
		player.build2AutobuyerChecked = false;
	}

	if (document.getElementById("autoBuild3Check").checked == true || document.getElementById("autoBuild3Check2").checked){
		player.build3AutobuyerChecked = true;
	}
	else {
		player.build3AutobuyerChecked = false;
	}

	if (document.getElementById("autoBuild4Check").checked == true || document.getElementById("autoBuild4Check2").checked){
		player.build4AutobuyerChecked = true;
	}
	else {
		player.build4AutobuyerChecked = false;
	}

	if (document.getElementById("autoOmegaGeneratorCheck").checked == true && player.atomShopItem17Bought == true){
		for (tier = 1; tier < 9; tier++){
			for (let i = 0; i < 100; i++){
				buyOmegaGenerator(tier);
			}
		}
		if (player.atomShopItem20Bought == true){
			for (let i = 0; i < 100; i++){
				opMult();
			}
		}
		player.omegaGeneratorAutobuyerChecked = true;
	}
	else player.omegaGeneratorAutobuyerChecked = false;

	if (document.getElementById("autoElectronUpgradesCheck").checked == true && player.atomShopItem17Bought == true){
		buyElectronUpgrades(1);
		buyElectronUpgrades(2);
		player.electronUpgradesAutobuyerChecked = true;
	}
	else player.electronUpgradesAutobuyerChecked = false;

	if (player.atomShopItem18Bought == true){
		resimulate();
	}
}

function autoBuilds(){
	if (player.build1AutobuyerChecked == true){
		loadBuild(1);
	}

	if (player.build2AutobuyerChecked == true){
		loadBuild(2);
	}

	if (player.build3AutobuyerChecked == true){
		loadBuild(3);
	}

	if (player.build4AutobuyerChecked == true){
		loadBuild(4);
	}
}

setInterval(autoBuilds, 1000);

function buildCheckSync(x, y){
	if (x == 1){
		if (y == 1){
			document.getElementById("autoBuild1Check2").checked = document.getElementById("autoBuild1Check").checked;
		}
		if (y == 2){
			document.getElementById("autoBuild2Check2").checked = document.getElementById("autoBuild2Check").checked;
		}
		if (y == 3){
			document.getElementById("autoBuild3Check2").checked = document.getElementById("autoBuild3Check").checked;
		}
		if (y == 4){
			document.getElementById("autoBuild4Check2").checked = document.getElementById("autoBuild4Check").checked;
		}
	}
	if (x == 2){
		if (y == 1){
			document.getElementById("autoBuild1Check").checked = document.getElementById("autoBuild1Check2").checked;
		}
		if (y == 2){
			document.getElementById("autoBuild2Check").checked = document.getElementById("autoBuild2Check2").checked;
		}
		if (y == 3){
			document.getElementById("autoBuild3Check").checked = document.getElementById("autoBuild3Check2").checked;
		}
		if (y == 4){
			document.getElementById("autoBuild4Check").checked = document.getElementById("autoBuild4Check2").checked;
		}
	}
}

function buyABGUpgrade(x, abg){
	if (abg == "alpha"){
		if (x == 1){
			if (player.alphaUpgrade1.lt(5) && player.alpha.gt(0)){
				player.alpha = player.alpha.minus(1);
				player.alphaUpgrade1 = player.alphaUpgrade1.plus(1);
				player.expansionPointMultFromFirstAlphaUpgrade = player.expansionPointMultFromFirstAlphaUpgrade.times(3);
			}
		}
		else if (x == 2){
			if (player.alphaUpgrade2.lt(5) && player.alpha.gt(1)){
				player.alpha = player.alpha.minus(2);
				player.alphaUpgrade2 = player.alphaUpgrade2.plus(1);
			}
		}
		else if (x == 3){
			if (player.alphaUpgrade3.lt(5) && player.alpha.gt(2)){
				player.alpha = player.alpha.minus(3);
				player.alphaUpgrade3 = player.alphaUpgrade3.plus(1);
				player.expansionUpgradeThirteenEffectIncrease = player.expansionUpgradeThirteenEffectIncrease.times(5);
			}
		}
		else if (x == 4){
			if (player.alphaUpgrade4.lt(1) && player.alpha.gt(4)){
				player.alpha = player.alpha.minus(5);
				player.alphaUpgrade4 = player.alphaUpgrade4.plus(1);
			}
		}
		else if (x == 5){
			if (player.alpha.gt(0)){
				player.alpha = player.alpha.minus(1);
				player.alphaUpgrade5 = player.alphaUpgrade5.plus(1);
				//player.expansionPointMultFromFifthAlphaUpgrade = player.expansionPointMultFromFifthAlphaUpgrade.times(player.alphaUpgrade5FinalMult);
			}
		}
	}
	if (abg == "beta"){
		if (x == 1){
			if (player.betaUpgrade1.lt(5) && player.beta.gt(0)){
				player.beta = player.beta.minus(1);
				player.betaUpgrade1 = player.betaUpgrade1.plus(1);
				player.expansionGeneratorAllMultFromFirstBetaUpgrade = player.expansionGeneratorAllMultFromFirstBetaUpgrade.times(4);
			}
		}
		else if (x == 2){
			if (player.betaUpgrade2.lt(5) && player.beta.gt(1)){
				player.beta = player.beta.minus(2);
				player.betaUpgrade2 = player.betaUpgrade2.plus(1);
				player.firstExpansionGeneratorMultFromSecondBetaUpgrade = player.firstExpansionGeneratorMultFromSecondBetaUpgrade.times(1e4);
			}
		}
		else if (x == 3){
			if (player.betaUpgrade3.lt(5) && player.beta.gt(2)){
				player.beta = player.beta.minus(3);
				player.betaUpgrade3 = player.betaUpgrade3.plus(1);
				player.electricityEffectFromThirdBetaUpgrade = player.betaUpgrade3.plus(2);
			}
		}
		else if (x == 4){
			if (player.betaUpgrade4.lt(1) && player.beta.gt(4)){
				player.beta = player.beta.minus(5);
				player.betaUpgrade4 = player.betaUpgrade4.plus(1);
			}
		}
		else if (x == 5){
			if (player.beta.gt(0)){
				player.beta = player.beta.minus(1);
				player.betaUpgrade5 = player.betaUpgrade5.plus(1);
				//player.expansionGeneratorAllMultFromFifthBetaUpgrade = player.expansionGeneratorAllMultFromFifthBetaUpgrade.times(player.betaUpgrade5FinalMult);
			}
		}
	}
	
	if (abg == "gamma"){
		if (x == 1){
			if (player.gammaUpgrade1.lt(5) && player.gamma.gt(0)){
				player.gamma = player.gamma.minus(1);
				player.gammaUpgrade1 = player.gammaUpgrade1.plus(1);
				player.allMultFromFirstGammaUpgrade = player.allMultFromFirstGammaUpgrade.times(1e20);
			}
		}
		else if (x == 2){
			if (player.gammaUpgrade2.lt(5) && player.gamma.gt(1)){
				player.gamma = player.gamma.minus(2);
				player.gammaUpgrade2 = player.gammaUpgrade2.plus(1);
			}
		}
		else if (x == 3){
			if (player.gammaUpgrade3.lt(5) && player.gamma.gt(2)){
				player.gamma = player.gamma.minus(3);
				player.gammaUpgrade3 = player.gammaUpgrade3.plus(1);
				player.prestigeEffectFromThirdGammaUpgrade = player.prestigeEffectFromThirdGammaUpgrade.times(1.3);
			}
		}
		else if (x == 4){
			if (player.gammaUpgrade4.lt(1) && player.gamma.gt(4)){
				player.gamma = player.gamma.minus(5);
				player.gammaUpgrade4 = player.gammaUpgrade4.plus(1);
			}
		}
		else if (x == 5){
			if (player.gamma.gt(0)){
				player.gamma = player.gamma.minus(1);
				player.gammaUpgrade5 = player.gammaUpgrade5.plus(1);
				//player.allMultFromFifthGammaUpgrade = player.allMultFromFifthGammaUpgrade.times(player.gammaUpgrade5FinalMult);
			}
		}
	}
}

function getABGText(){
	document.getElementById("alphaUpgrade1").innerHTML = "Multiply EP gain by 3x<br>" + "Cost: 1 Alpha<br>" + "Current: " + format(player.expansionPointMultFromFirstAlphaUpgrade, 0) + "x<br>"  + player.alphaUpgrade1 + "/5";
	
	document.getElementById("alphaUpgrade2").innerHTML = "Increase EP gain based on time spend in this expansion<br>" + "Cost: 2 Alpha<br>" + "Current: " + format(player.expansionPointMultFromSecondAlphaUpgrade, 2) + "x<br>"  + player.alphaUpgrade2 + "/5";
	
	document.getElementById("alphaUpgrade3").innerHTML = "Increase the effect of Expansion Upgrade 13 by 5x<br>" + "Cost: 3 Alpha<br>" + "Current: " + format(player.expansionUpgradeThirteenEffectIncrease, 0) + "x<br>"  + player.alphaUpgrade3 + "/5";
	
	if (player.alphaUpgrade4 == 0){
		document.getElementById("alphaUpgrade4").innerHTML = "Unlock Alpha Beta Gamma autobuyer<br>" + "Cost: 5 Alpha<br>" + "Not unlocked<br>" + player.alphaUpgrade4 + "/1";
	}
	else {
		document.getElementById("alphaUpgrade4").innerHTML = "Unlock Alpha Beta Gamma autobuyer<br>" + "Cost: 5 Alpha<br>" + "Unlocked!<br>" + player.alphaUpgrade4 + "/1";
	}
	document.getElementById("alphaUpgrade5").innerHTML = "Multiply EP gain by " + format(player.alphaUpgrade5FinalMult, 2) + "x<br>" + "Cost: 1 Alpha<br>" + "Current: " + format(player.expansionPointMultFromFifthAlphaUpgrade, 2) + "x<br>"  + player.alphaUpgrade5;
	
	document.getElementById("betaUpgrade1").innerHTML = "Multiply all expansion generators by 4x<br>" + "Cost: 1 Beta<br>" + "Current: " + format(player.expansionGeneratorAllMultFromFirstBetaUpgrade, 0) + "x<br>" + player.betaUpgrade1 + "/5";
	
	document.getElementById("betaUpgrade2").innerHTML = "Multiply first expansion generator by 1e4x<br>" + "Cost: 2 Beta<br>" + "Current: " + format(player.firstExpansionGeneratorMultFromSecondBetaUpgrade, 0) + "x<br>" + player.betaUpgrade2 + "/5";
	
	document.getElementById("betaUpgrade3").innerHTML = "Increase the electricity price reduction effect<br>" + "Cost: 3 Beta<br>" + "Current: " + format(player.electricityEffectFromThirdBetaUpgrade, 0) + "x<br>" + player.betaUpgrade3 + "/5";
	
	if (player.betaUpgrade4 == 0){
		document.getElementById("betaUpgrade4").innerHTML = "Unlock Alpha Beta Gamma Upgrade 5 autobuyer<br>" + "Cost: 5 Beta<br>" + "Not unlocked<br>" + player.betaUpgrade4 + "/1";
	}
	else {
		document.getElementById("betaUpgrade4").innerHTML = "Unlock Alpha Beta Gamma Upgrade 5 autobuyer<br>" + "Cost: 5 Beta<br>" + "Unlocked!<br>" + player.betaUpgrade4 + "/1";
	}
	
	document.getElementById("betaUpgrade5").innerHTML = "Multiply all expansion generators by " + format(player.betaUpgrade5FinalMult, 2) + "x<br>" + "Cost: 1 Beta<br>" + "Current: " + format(player.expansionGeneratorAllMultFromFifthBetaUpgrade, 0) + "x<br>" + player.betaUpgrade5;
	
	document.getElementById("gammaUpgrade1").innerHTML = "Multiply all generators by 1e20x<br>" + "Cost: 1 Gamma<br>" + "Current: " + format(player.allMultFromFirstGammaUpgrade, 0) + "x<br>"  + player.gammaUpgrade1 + "/5";
	
	document.getElementById("gammaUpgrade2").innerHTML = "Multiply all mult gain based on highest ever Energy<br>" + "Cost: 2 Gamma<br>" + "Current: " + format(player.allMultGainFromSecondGammaUpgrade, 2) + "x<br>"  + player.gammaUpgrade2 + "/5";
	
	document.getElementById("gammaUpgrade3").innerHTML = "Increase prestige effect by 1.3x<br>" + "Cost: 3 Gamma<br>" + "Current: " + format(player.prestigeEffectFromThirdGammaUpgrade, 2) + "x<br>"  + player.gammaUpgrade3 + "/5";
	
	if (player.gammaUpgrade4 == 0){
		document.getElementById("gammaUpgrade4").innerHTML = "Unlock Expansion Generator and EP mult autobuyers<br>" + "Cost: 5 Gamma<br>" + "Not unlocked<br>" + player.gammaUpgrade4 + "/1";
	}
	else {
		document.getElementById("gammaUpgrade4").innerHTML = "Unlock Expansion Generator and EP mult autobuyers<br>" + "Cost: 5 Gamma<br>" + "Unlocked!<br>" + player.gammaUpgrade4 + "/1";
	}
	
	document.getElementById("gammaUpgrade5").innerHTML = "Multiply all generators by " + format(player.gammaUpgrade5FinalMult, 2) + "x<br>" + "Cost: 1 Gamma<br>" + "Current: " + format(player.allMultFromFifthGammaUpgrade, 0) + "x<br>"  + player.gammaUpgrade5;
}

function buyAlpha(){
	if (player.gold.gte(player.alphaCost)){
		if (player.alphaBought.gt(20000)){
			player.gold = player.gold.minus(player.alphaCost);
			player.alphaCost = player.alphaCost.times(player.alphaNewCost);
			player.alphaNewCost = player.alphaNewCost.times(player.alphaNewCostInc);
			player.alphaNewCostInc = player.alphaNewCostInc.pow(1.01);
			player.alpha = player.alpha.plus(1);
			player.alphaBought = player.alphaBought.plus(1);
		}
		else if (player.alphaBought.gt(85)){
			player.gold = player.gold.minus(player.alphaCost);
			player.alphaCost = player.alphaCost.times(player.alphaNewCost);
			player.alphaNewCost = player.alphaNewCost.times(player.alphaNewCostInc);
			player.alphaNewCostInc = player.alphaNewCostInc.times(1.01);
			player.alpha = player.alpha.plus(1);
			player.alphaBought = player.alphaBought.plus(1);
		}
		else {
			player.gold = player.gold.minus(player.alphaCost);
			player.alphaCost = player.alphaCost.times("1e500");
			player.alpha = player.alpha.plus(1);
			player.alphaBought = player.alphaBought.plus(1);
		}
	}
}

function buyBeta(){
	if (player.expansionPoints.gte(player.betaCost)){
		if (player.betaBought.gt(20000)){
			player.expansionPoints = player.expansionPoints.minus(player.betaCost);
			player.betaCost = player.betaCost.times(player.betaNewCost);
			player.betaNewCost = player.betaNewCost.times(player.betaNewCostInc);
			player.betaNewCostInc = player.betaNewCostInc.pow(1.01);
			player.beta = player.beta.plus(1);
			player.betaBought = player.betaBought.plus(1);
		}
		else if (player.betaBought.gt(85)){
			player.expansionPoints = player.expansionPoints.minus(player.betaCost);
			player.betaCost = player.betaCost.times(player.betaNewCost);
			player.betaNewCost = player.betaNewCost.times(player.betaNewCostInc);
			player.betaNewCostInc = player.betaNewCostInc.times(1.01);
			player.beta = player.beta.plus(1);
			player.betaBought = player.betaBought.plus(1);
		}
		else {
			player.expansionPoints = player.expansionPoints.minus(player.betaCost);
			player.betaCost = player.betaCost.times(100);
			player.beta = player.beta.plus(1);
			player.betaBought = player.betaBought.plus(1);
		}
	}
}

function buyGamma(){
	if (player.electricity.gt(player.gammaCost) || player.electricity.eq(player.gammaCost)){
		if (player.gammaBought.gt(20000)){
			player.electricity = player.electricity.minus(player.gammaCost);
			player.gammaCost = player.gammaCost.times(player.gammaNewCost);
			player.gammaNewCost = player.gammaNewCost.times(player.gammaNewCostInc);
			player.gammaNewCostInc = player.gammaNewCostInc.pow(1.01);
			player.gamma = player.gamma.plus(1);
			player.gammaBought = player.gammaBought.plus(1);
		}
		else if (player.gammaBought.gt(85)){
			player.electricity = player.electricity.minus(player.gammaCost);
			player.gammaCost = player.gammaCost.times(player.gammaNewCost);
			player.gammaNewCost = player.gammaNewCost.times(player.gammaNewCostInc);
			player.gammaNewCostInc = player.gammaNewCostInc.times(1.01);
			player.gamma = player.gamma.plus(1);
			player.gammaBought = player.gammaBought.plus(1);
		}
		else {
			player.electricity = player.electricity.minus(player.gammaCost);
			player.gammaCost = player.gammaCost.times(1e5);
			player.gamma = player.gamma.plus(1);
			player.gammaBought = player.gammaBought.plus(1);
		}
	}
}

function becomeOmega(){
	if (player.expansionPoints.gt(1e75)){
		player.omegaPoints = player.omegaPoints.plus(Decimal.floor(Decimal.pow((Decimal.log10(new Decimal(player.expansionPoints)).div(75)), Decimal.log10(Decimal.log10(player.expansionPoints)).plus(1)).times(player.omegaPointMultFinal)));
		player.omegas = player.omegas.plus(1);
		player.hasUnlockedOmega = true;
		
		player.gold = new Decimal(10);

		player.firstCost = new Decimal(10);
		player.secondCost = new Decimal(1000);
		player.thirdCost = new Decimal(1e9);
		player.fourthCost = new Decimal(1e16);
		player.fifthCost = new Decimal(1e25);
		player.sixthCost = new Decimal(1e36);
		player.seventhCost = new Decimal(1e49);
		player.eighthCost = new Decimal(1e64);

		player.firstCostAfterInf = new Decimal("1e309");
		player.secondCostAfterInf = new Decimal("1e311");
		player.thirdCostAfterInf = new Decimal("1e315");
		player.fourthCostAfterInf = new Decimal("1e324");
		player.fifthCostAfterInf = new Decimal("1e330");
		player.sixthCostAfterInf = new Decimal("1e342");
		player.seventhCostAfterInf = new Decimal("1e357");
		player.eighthCostAfterInf = new Decimal("1e368");
				
		player.firstNewBaseCost = new Decimal(1e25);
		player.secondNewBaseCost = new Decimal(1e37);
		player.thirdNewBaseCost = new Decimal(1e50);
		player.fourthNewBaseCost = new Decimal(1e62);
		player.fifthNewBaseCost = new Decimal(1e75);
		player.sixthNewBaseCost = new Decimal(1e87);
		player.seventhNewBaseCost = new Decimal(1e100);
		player.eighthNewBaseCost = new Decimal(1e112);

		player.firstNewBaseCostInc = new Decimal(2);
		player.secondNewBaseCostInc = new Decimal(4);
		player.thirdNewBaseCostInc = new Decimal(8);
		player.fourthNewBaseCostInc = new Decimal(16);
		player.fifthNewBaseCostInc = new Decimal(32);
		player.sixthNewBaseCostInc = new Decimal(64);
		player.seventhNewBaseCostInc = new Decimal(128);
		player.eighthNewBaseCostInc = new Decimal(256);

		player.firstAmount = new Decimal(1);
		player.secondAmount = new Decimal(0);
		player.thirdAmount = new Decimal(0);
		player.fourthAmount = new Decimal(0);
		player.fifthAmount = new Decimal(0);
		player.sixthAmount = new Decimal(0);
		player.seventhAmount = new Decimal(0);
		player.eighthAmount = new Decimal(0);

		player.firstBought = new Decimal(0);
		player.secondBought = new Decimal(0);
		player.thirdBought = new Decimal(0);
		player.fourthBought = new Decimal(0);
		player.fifthBought = new Decimal(0);
		player.sixthBought = new Decimal(0);
		player.seventhBought = new Decimal(0);
		player.eighthBought = new Decimal(0);

		player.firstMult = new Decimal(4);
		player.secondMult = new Decimal(2);
		player.thirdMult = new Decimal(1);
		player.fourthMult = new Decimal(1);
		player.fifthMult = new Decimal(1);
		player.sixthMult = new Decimal(1);
		player.seventhMult = new Decimal(1);
		player.eighthMult = new Decimal(1);

		player.firstFinalMult = new Decimal(1);
		player.secondFinalMult = new Decimal(1);
		player.thirdFinalMult = new Decimal(1);
		player.fourthFinalMult = new Decimal(1);
		player.fifthFinalMult = new Decimal(1);
		player.sixthFinalMult = new Decimal(1);
		player.seventhFinalMult = new Decimal(1);
		player.eighthFinalMult = new Decimal(1);

		player.firstPrestige = new Decimal(0);
		player.secondPrestige = new Decimal(0);
		player.thirdPrestige = new Decimal(0);
		player.fourthPrestige = new Decimal(0);
		player.fifthPrestige = new Decimal(0);
		player.sixthPrestige = new Decimal(0);
		player.seventhPrestige = new Decimal(0);
		player.eighthPrestige = new Decimal(0);

		player.firstPrestigeCost = new Decimal(3);
		player.secondPrestigeCost = new Decimal(5);
		player.thirdPrestigeCost = new Decimal(7);
		player.fourthPrestigeCost = new Decimal(9);
		player.fifthPrestigeCost = new Decimal(11);
		player.sixthPrestigeCost = new Decimal(13);
		player.seventhPrestigeCost = new Decimal(15);
		player.eighthPrestigeCost = new Decimal(17);
				
		player.firstNewPrestigeCost = new Decimal(4);
		player.secondNewPrestigeCost = new Decimal(8);
		player.thirdNewPrestigeCost = new Decimal(12);
		player.fourthNewPrestigeCost = new Decimal(16);
		player.fifthNewPrestigeCost = new Decimal(20);
		player.sixthNewPrestigeCost = new Decimal(24);
		player.seventhNewPrestigeCost = new Decimal(28);
		player.eighthNewPrestigeCost = new Decimal(32);
		
		player.secondsInExpansion = new Decimal(0);
		player.secondsInOmega = new Decimal(0);
		
		player.allMult = new Decimal(1);
		player.allMultFinal = new Decimal(1);
		player.allMultCost = new Decimal(1000);
		player.allMultFinalCost = new Decimal(1000);
		player.allMultCostInc = new Decimal(1000);
		player.allMultGain = new Decimal(1.05);
		player.allMultGainFinal = new Decimal(1);
		player.allMultFromPrestige = new Decimal(1);
		player.allMultBought = new Decimal(0);
		player.allMultFromFirstExpansionUpgrade = new Decimal(1);
		player.allMultGainFromSecondExpansionUpgrade = new Decimal(1);
		player.allMultGainFromTwelfthExpansionUpgrade = new Decimal(1);
		if (player.secondAtomUpgradeBought.lt(2)){
			player.allMultGainFromSecondGammaUpgrade = new Decimal(1);
		}
		player.allMultFromFourthExpansionUpgrade = new Decimal(1);
		player.allMultFromEighthExpansionUpgrade = new Decimal(1);
		player.allMultFromTenthExpansionUpgrade = new Decimal(1);
		if (player.secondAtomUpgradeBought.lt(2)){
			player.allMultFromFirstGammaUpgrade = new Decimal(1);
		}
		player.allMultFromFifthGammaUpgrade = new Decimal(1);
		player.allMultNewBaseCost = new Decimal(1e52);
		player.allMultNewBaseCostInc = new Decimal(100);

		player.multPerBuy = new Decimal(1.6);
		player.multPerBuyFinal = new Decimal(1.6);
		player.multPerBuyFromOmegaUpgrade1x1y = new Decimal(1);

		player.maxPrestige = new Decimal(15);
		if (player.secondAtomUpgradeBought.lt(2)){
			player.prestigeEffectFromThirdGammaUpgrade = new Decimal(1);
		}
		player.prestigeEffectFromOmegaUpgrade2x1y = new Decimal(1);
		
		player.expansionPoints = new Decimal(0);
		player.expansionPointMult = new Decimal(1);
		player.expansionPointMultBought = new Decimal(0);
		player.expansionPointMultFinal = new Decimal(1);
		player.expansionPointMultCost = new Decimal(10);
		player.expansionPointMultCostInc = new Decimal(10);
		player.expansionPointMultCostIncInc = new Decimal(2);
		player.expansions = new Decimal(0);
		player.expansionCost = new Decimal("1e308");
		player.expansionPointMultFromNinthExpansionUpgrade = new Decimal(1);
		player.expansionPointMultFromThirteenthExpansionUpgrade = new Decimal(1);
		if (player.secondAtomUpgradeBought.lt(2)){
			player.expansionPointMultFromFirstAlphaUpgrade = new Decimal(1);
		}
		player.expansionPointMultFromFifthAlphaUpgrade = new Decimal(1);
		if (player.secondAtomUpgradeBought.lt(2)){
			player.expansionUpgradeThirteenEffectIncrease = new Decimal(1);
		}
		player.expansionPointMultFromSecondAlphaUpgrade = new Decimal(1);

		player.electricity = new Decimal(0);
		if (player.secondAtomUpgradeBought.lt(2)){
			player.electricityEffectFromThirdBetaUpgrade = new Decimal(1);
		}
		player.firstExpansionGeneratorCost = new Decimal(1);
		player.secondExpansionGeneratorCost = new Decimal(100);
		player.thirdExpansionGeneratorCost = new Decimal(1e4);
		player.fourthExpansionGeneratorCost = new Decimal(1e6);
		player.fifthExpansionGeneratorCost = new Decimal(1e8);
		player.sixthExpansionGeneratorCost = new Decimal(1e10);
		player.seventhExpansionGeneratorCost = new Decimal(1e12);
		player.eighthExpansionGeneratorCost = new Decimal(1e14);
		
		player.firstExpansionGeneratorCostInc = new Decimal(3);
		player.secondExpansionGeneratorCostInc = new Decimal(6);
		player.thirdExpansionGeneratorCostInc = new Decimal(9);
		player.fourthExpansionGeneratorCostInc = new Decimal(12);
		player.fifthExpansionGeneratorCostInc = new Decimal(15);
		player.sixthExpansionGeneratorCostInc = new Decimal(18);
		player.seventhExpansionGeneratorCostInc = new Decimal(21);
		player.eighthExpansionGeneratorCostInc = new Decimal(24);

		player.firstExpansionGeneratorCostIncInc = new Decimal(1.5);
		player.secondExpansionGeneratorCostIncInc = new Decimal(2);
		player.thirdExpansionGeneratorCostIncInc = new Decimal(2.5);
		player.fourthExpansionGeneratorCostIncInc = new Decimal(3);
		player.fifthExpansionGeneratorCostIncInc = new Decimal(3.5);
		player.sixthExpansionGeneratorCostIncInc = new Decimal(4);
		player.seventhExpansionGeneratorCostIncInc = new Decimal(4.5);
		player.eighthExpansionGeneratorCostIncInc = new Decimal(5);

		player.firstExpansionGeneratorAmount = new Decimal(0);
		player.secondExpansionGeneratorAmount = new Decimal(0);
		player.thirdExpansionGeneratorAmount = new Decimal(0);
		player.fourthExpansionGeneratorAmount = new Decimal(0);
		player.fifthExpansionGeneratorAmount = new Decimal(0);
		player.sixthExpansionGeneratorAmount = new Decimal(0);
		player.seventhExpansionGeneratorAmount = new Decimal(0);
		player.eighthExpansionGeneratorAmount = new Decimal(0);

		player.firstExpansionGeneratorBought = new Decimal(0);
		player.secondExpansionGeneratorBought = new Decimal(0);
		player.thirdExpansionGeneratorBought = new Decimal(0);
		player.fourthExpansionGeneratorBought = new Decimal(0);
		player.fifthExpansionGeneratorBought = new Decimal(0);
		player.sixthExpansionGeneratorBought = new Decimal(0);
		player.seventhExpansionGeneratorBought = new Decimal(0);
		player.eighthExpansionGeneratorBought = new Decimal(0);

		player.firstExpansionGeneratorMult = new Decimal(1);
		player.secondExpansionGeneratorMult = new Decimal(1);
		player.thirdExpansionGeneratorMult = new Decimal(1);
		player.fourthExpansionGeneratorMult = new Decimal(1);
		player.fifthExpansionGeneratorMult = new Decimal(1);
		player.sixthExpansionGeneratorMult = new Decimal(1);
		player.seventhExpansionGeneratorMult = new Decimal(1);
		player.eighthExpansionGeneratorMult = new Decimal(1);

		player.firstExpansionGeneratorFinalMult = new Decimal(1);
		player.secondExpansionGeneratorFinalMult = new Decimal(1);
		player.thirdExpansionGeneratorFinalMult = new Decimal(1);
		player.fourthExpansionGeneratorFinalMult = new Decimal(1);
		player.fifthExpansionGeneratorFinalMult = new Decimal(1);
		player.sixthExpansionGeneratorFinalMult = new Decimal(1);
		player.seventhExpansionGeneratorFinalMult = new Decimal(1);
		player.eighthExpansionGeneratorFinalMult = new Decimal(1);

		if (player.firstAtomUpgradeBought.lt(2)){
			player.expansionUpgrade1 = false;
			player.expansionUpgrade2 = false;
			player.expansionUpgrade3 = false;
			player.expansionUpgrade4 = false;
			player.expansionUpgrade5 = false;
			player.expansionUpgrade6 = false;
			player.expansionUpgrade7 = false;
			player.expansionUpgrade8 = false;
			player.expansionUpgrade9 = false;
			player.expansionUpgrade10 = false;
			player.expansionUpgrade11 = false;
			player.expansionUpgrade12 = false;
			player.expansionUpgrade13 = false;
			player.expansionUpgrade14 = false;
			player.expansionUpgrade15 = false;
		}

		player.firstExpansionMultFromUpgrades = new Decimal(1);
		player.expansionGeneratorAllMultFromEleventhExpansionUpgrade = new Decimal(1);
		if (player.secondAtomUpgradeBought.lt(2)){
			player.expansionGeneratorAllMultFromFirstBetaUpgrade = new Decimal(1);
			player.firstExpansionGeneratorMultFromSecondBetaUpgrade = new Decimal(1);
		}
		player.expansionGeneratorAllMultFromFifthBetaUpgrade = new Decimal(1);

		player.alpha = new Decimal(0);
		player.alphaCost = new Decimal("1e2000");
		player.alphaBought = new Decimal(0);
		player.alphaNewCost = new Decimal("1e500");
		player.alphaNewCostInc = new Decimal(100);
		player.alphaUpgrade5FinalMult = new Decimal(1);
		player.alphaUpgrade5MultIncreaseFromOmegaUpgrade1x2y = new Decimal(1);
		player.beta = new Decimal(0);
		player.betaCost = new Decimal(1e8);
		player.betaBought = new Decimal(0);
		player.betaNewCost = new Decimal(100);
		player.betaNewCostInc = new Decimal(1.1);
		player.gamma = new Decimal(0);
		player.gammaCost = new Decimal(1e30);
		player.gammaBought = new Decimal(0);
		player.gammaNewCost = new Decimal(1e5);
		player.gammaNewCostInc = new Decimal(2);

		if (player.secondAtomUpgradeBought.lt(2)){
			player.alphaUpgrade1 = new Decimal(0);
			player.alphaUpgrade2 = new Decimal(0);
			player.alphaUpgrade3 = new Decimal(0);
			player.alphaUpgrade4 = new Decimal(0);

			player.betaUpgrade1 = new Decimal(0);
			player.betaUpgrade2 = new Decimal(0);
			player.betaUpgrade3 = new Decimal(0);
			player.betaUpgrade4 = new Decimal(0);

			player.gammaUpgrade1 = new Decimal(0);
			player.gammaUpgrade2 = new Decimal(0);
			player.gammaUpgrade3 = new Decimal(0);
			player.gammaUpgrade4 = new Decimal(0);
		}
			
		player.alphaUpgrade5 = new Decimal(0);
		player.betaUpgrade5 = new Decimal(0);
		player.gammaUpgrade5 = new Decimal(0);
		
		if (player.thirdAtomUpgradeBought.lt(2)){
			player.electrons = new Decimal(1);
		}

		if (player.omegaUpgradeReset == true){
			console.log("yo");
			for (x = 1; x < 5; x++){
				for (y = 1; y < 5; y++){
					player["omegaUpgrade" + x + "x" + y + "y"] = false;
					player["omegaUpgrade" + x + "x" + y + "y" + "Bought"] = new Decimal(0);
				}
			}
			
			player.omegaUpgradeCost = new Decimal(1);
			player.omegaUpgradeReset = false;
			document.getElementById("omegaUpgradeReset").classList.remove("activated");
		}

	}
}

function buyOmegaGenerator(tier){
	var name = TIER_NAMES[tier];
	if (player.omegaPoints.gt(player[name + "OmegaGeneratorCost"]) || player.omegaPoints.eq(player[name + "OmegaGeneratorCost"])){
		player.omegaPoints = player.omegaPoints.minus(player[name + "OmegaGeneratorCost"]);
		player[name + "OmegaGeneratorCost"] = player[name + "OmegaGeneratorCost"].times(new Decimal(2).times(tier));
		player[name + "OmegaGeneratorAmount"] = player[name + "OmegaGeneratorAmount"].plus(1);
		player[name + "OmegaGeneratorBought"] = player[name + "OmegaGeneratorBought"].plus(1);
		player[name + "OmegaGeneratorMult"] = player[name + "OmegaGeneratorMult"].times(2);
	}
}

function opMult(){
	if (player.omegaPoints.gte(player.omegaPointMultCost)){
		player.omegaPoints = player.omegaPoints.minus(player.omegaPointMultCost);
		player.omegaPointMultCost = player.omegaPointMultCost.times(10);
		player.omegaPointMult = player.omegaPointMult.times(2);
		player.omegaPointMultBought = player.omegaPointMultBought.plus(1);
	}
}

function buyOmegaUpgrade(x, y){
	// Du trenger (x-1, y) og (x, y-1) for å kjøpe neste
	if (x == 1 && y == 1){
		if (player["omegaUpgrade" + x + "x" + y + "y" + "Max"].gt(player["omegaUpgrade" + x + "x" + y + "y" + "Bought"])){
			if (player.omega.gt(player.omegaUpgradeCost) || player.omega.eq(player.omegaUpgradeCost)){
				player.omega = player.omega.minus(player.omegaUpgradeCost);
				player["omegaUpgrade" + x + "x" + y + "y"] = true;
				player["omegaUpgrade" + x + "x" + y + "y" + "Bought"] = player["omegaUpgrade" + x + "x" + y + "y" + "Bought"].plus(1);
				player.omegaUpgradeCost = player.omegaUpgradeCost.times(1000);
			}
		}
	}
	else if (x == 1 || y == 1){
		if (player["omegaUpgrade" + (x - 1) + "x" + y + "y"] == true || player["omegaUpgrade" + x + "x" + (y - 1) + "y"] == true){
			if (player["omegaUpgrade" + x + "x" + y + "y" + "Max"].gt(player["omegaUpgrade" + x + "x" + y + "y" + "Bought"])){
				if (player.omega.gt(player.omegaUpgradeCost) || player.omega.eq(player.omegaUpgradeCost)){
					player.omega = player.omega.minus(player.omegaUpgradeCost);
					player["omegaUpgrade" + x + "x" + y + "y"] = true;
					player["omegaUpgrade" + x + "x" + y + "y" + "Bought"] = player["omegaUpgrade" + x + "x" + y + "y" + "Bought"].plus(1);
					player.omegaUpgradeCost = player.omegaUpgradeCost.times(1000);
				}
			}
		}
	}
	else {
		if (player["omegaUpgrade" + (x - 1) + "x" + y + "y"] == true && player["omegaUpgrade" + x + "x" + (y - 1) + "y"] == true){
			if (player["omegaUpgrade" + x + "x" + y + "y" + "Max"].gt(player["omegaUpgrade" + x + "x" + y + "y" + "Bought"])){
				if (player.omega.gt(player.omegaUpgradeCost) || player.omega.eq(player.omegaUpgradeCost)){
					player.omega = player.omega.minus(player.omegaUpgradeCost);
					player["omegaUpgrade" + x + "x" + y + "y"] = true;
					player["omegaUpgrade" + x + "x" + y + "y" + "Bought"] = player["omegaUpgrade" + x + "x" + y + "y" + "Bought"].plus(1);
					player.omegaUpgradeCost = player.omegaUpgradeCost.times(1000);
				}
			}
		}
	}
}

function getOmegaUpgradeText(){
	if (player.omegaUpgrade1x1y == true){
		document.getElementById("omegaUpgrade1").innerHTML = "Increase the multiplier you get<br>when purchasing a Generator<br>based on highest EP" + "<br>Current: " + format(player.multPerBuyFromOmegaUpgrade1x1y, 2) + "x";
		document.getElementById("omegaUp1").classList.remove("locked");
	}
	else {
		document.getElementById("omegaUpgrade1").innerHTML = "Increase the multiplier you get<br>when purchasing a Generator<br>based on highest EP" + "<br>Cost: " + format(player.omegaUpgradeCost, 0) + " Omega";
		document.getElementById("omegaUp1").classList.add("locked");
	}
	
	if (player.omegaUpgrade2x1y == true){
		document.getElementById("omegaUpgrade2").innerHTML = document.getElementById("omegaUpgrade2").innerHTML =  "Increase prestige multiplier<br>based on highest amount<br>of first prestiges" + "<br>Current: " + format(player.prestigeEffectFromOmegaUpgrade2x1y, 2) + "x";
		document.getElementById("omegaUp2").classList.remove("locked");
	}
	else {
		document.getElementById("omegaUpgrade2").innerHTML = document.getElementById("omegaUpgrade2").innerHTML = "Increase prestige multiplier<br>based on highest amount<br>of first prestiges" + "<br>Cost: " + format(player.omegaUpgradeCost, 0) + " Omega";
		document.getElementById("omegaUp2").classList.add("locked");
	}
	
	if (player.omegaUpgrade3x1y == true){
		document.getElementById("omegaUpgrade3").innerHTML = document.getElementById("omegaUpgrade3").innerHTML = "Raise the power of all<br>Expansion Generator<br>based on stages completed" + "<br>Current: ^" + format(player.allExpansionGeneratorPow, 2);
		document.getElementById("omegaUp3").classList.remove("locked");
	}
	else {
		document.getElementById("omegaUpgrade3").innerHTML = document.getElementById("omegaUpgrade3").innerHTML = "Raise the power of all<br>Expansion Generator<br>based on stages completed" + "<br>Cost: " + format(player.omegaUpgradeCost, 0) + " Omega";
		document.getElementById("omegaUp3").classList.add("locked");
	}
	
	if (player.omegaUpgrade4x1y == true){
		document.getElementById("omegaUpgrade4").innerHTML = document.getElementById("omegaUpgrade4").innerHTML = "Gain more EP based on<br>Simulation Heroes" + "<br>Current: " + format(player.expansionPointMultFromOmegaUpgrade4x1y, 2) + "x";
		document.getElementById("omegaUp4").classList.remove("locked");
	}
	else {
		document.getElementById("omegaUpgrade4").innerHTML = document.getElementById("omegaUpgrade4").innerHTML = "Gain more EP based on<br>Simulation Heroes" + "<br>Cost: " + format(player.omegaUpgradeCost, 0) + " Omega";
		document.getElementById("omegaUp4").classList.add("locked");
	}
	
	if (player.omegaUpgrade1x2y == true){
		document.getElementById("omegaUpgrade5").innerHTML = document.getElementById("omegaUpgrade5").innerHTML = "Increase Alpha Upgrade 5 effect<br>based on Omega<br>Current: " + format(player.alphaUpgrade5MultIncreaseFromOmegaUpgrade1x2y, 2) + "x";
		document.getElementById("omegaUp5").classList.remove("locked");
	}
	else {
		document.getElementById("omegaUpgrade5").innerHTML = document.getElementById("omegaUpgrade5").innerHTML = "Increase Alpha Upgrade 5 effect<br>based on Omega" + "<br>Cost: " + format(player.omegaUpgradeCost, 0) + " Omega";
		document.getElementById("omegaUp5").classList.add("locked");
	}
	if (player.omegaUpgrade2x2y == true){
		document.getElementById("omegaUpgrade6").innerHTML = document.getElementById("omegaUpgrade6").innerHTML = "Multiply OP based<br>on current Omega." + "<br>Current: " + format(player.omegaPointMultFrom2x2y, 2) + "x";
		document.getElementById("omegaUp6").classList.remove("locked");
	}
	else {
		document.getElementById("omegaUpgrade6").innerHTML = document.getElementById("omegaUpgrade6").innerHTML = "Multiply OP based<br>on current Omega. <br>NOTE: This does not have an effect before around 5.7e11 Omega." + "<br>Cost: " + format(player.omegaUpgradeCost, 0) + " Omega";
		document.getElementById("omegaUp6").classList.add("locked");
	}
	
	if (player.omegaUpgrade3x2y == true){
		document.getElementById("omegaUpgrade7").innerHTML = document.getElementById("omegaUpgrade7").innerHTML = "Simulation upgrade 4<br>is every 29th instead";
		document.getElementById("omegaUp7").classList.remove("locked");
	}
	else {
		document.getElementById("omegaUpgrade7").innerHTML = document.getElementById("omegaUpgrade7").innerHTML = "Simulation upgrade 4<br>is every 29th instead" + "<br>Cost: " + format(player.omegaUpgradeCost, 0) + " Omega";
		document.getElementById("omegaUp7").classList.add("locked");
	}
	
	if (player.omegaUpgrade4x2y == true){
		document.getElementById("omegaUpgrade8").innerHTML = document.getElementById("omegaUpgrade8").innerHTML = "Increase Beta Upgrade 5 effect<br>based on Electron effect" + "<br>Current: " + format(player.betaUpgrade5MultIncreaseFromOmegaUpgrade4x3y, 2) + "x";
		document.getElementById("omegaUp8").classList.remove("locked");
	}
	else {
		document.getElementById("omegaUpgrade8").innerHTML = document.getElementById("omegaUpgrade8").innerHTML = "Increase Beta Upgrade 5 effect<br>based on Electron effect" + "<br>Cost: " + format(player.omegaUpgradeCost, 0) + " Omega";
		document.getElementById("omegaUp8").classList.add("locked");
	}
	
	if (player.omegaUpgrade1x3y == true){
		document.getElementById("omegaUpgrade9").innerHTML = document.getElementById("omegaUpgrade9").innerHTML = "Increase Beta Upgrade 5 effect<br>based on Omega<br>Current: " + format(player.betaUpgrade5MultIncreaseFromOmegaUpgrade1x3y, 2) + "x";
		document.getElementById("omegaUp9").classList.remove("locked");
	}
	else {
		document.getElementById("omegaUpgrade9").innerHTML = document.getElementById("omegaUpgrade9").innerHTML = "Increase Beta Upgrade 5 effect<br>based on Omega" + "<br>Cost: " + format(player.omegaUpgradeCost, 0) + " Omega";
		document.getElementById("omegaUp9").classList.add("locked");
	}
	
	if (player.omegaUpgrade2x3y == true){
		document.getElementById("omegaUpgrade10").innerHTML = document.getElementById("omegaUpgrade10").innerHTML = "First Generator creates<br>Eighth Generator<br>at heavily reduced rate";
		document.getElementById("omegaUp10").classList.remove("locked");
	}
	else {
		document.getElementById("omegaUpgrade10").innerHTML = document.getElementById("omegaUpgrade10").innerHTML = "First Generator creates<br>Eighth Generator<br>at heavily reduced rate" + "<br>Cost: " + format(player.omegaUpgradeCost, 0) + " Omega";
		document.getElementById("omegaUp10").classList.add("locked");
	}
	
	if (player.omegaUpgrade3x3y == true){
		document.getElementById("omegaUpgrade11").innerHTML = document.getElementById("omegaUpgrade11").innerHTML = "Increase Electron gain<br>based on current OP" + "<br>Current: " + format(player.electronGainFromOmegaUpgrade3x3y, 2) + "x";
		document.getElementById("omegaUp11").classList.remove("locked");
	}
	else {
		document.getElementById("omegaUpgrade11").innerHTML = document.getElementById("omegaUpgrade11").innerHTML = "Increase Electron gain<br>based on current OP" + "<br>Cost: " + format(player.omegaUpgradeCost, 0) + " Omega";
		document.getElementById("omegaUp11").classList.add("locked");
	}
	
	if (player.omegaUpgrade4x3y == true){
		document.getElementById("omegaUpgrade12").innerHTML = document.getElementById("omegaUpgrade12").innerHTML = "4th root Atom reset cost" + "<br>Current: " + format(player.thirdElectronUpgradeCost) + " Electrons";
		document.getElementById("omegaUp12").classList.remove("locked");
	}
	else {
		document.getElementById("omegaUpgrade12").innerHTML = document.getElementById("omegaUpgrade12").innerHTML = "4th root Atom reset cost" + "<br>Cost: " + format(player.omegaUpgradeCost, 0) + " Omega";
		document.getElementById("omegaUp12").classList.add("locked");
	}
	
	if (player.omegaUpgrade1x4y == true){
		document.getElementById("omegaUpgrade13").innerHTML = document.getElementById("omegaUpgrade13").innerHTML = "Increase Gamma Upgrade 5 effect<br>based on Omega<br>Current: " + format(player.gammaUpgrade5MultIncreaseFromOmegaUpgrade1x4y, 2) + "x";
		document.getElementById("omegaUp13").classList.remove("locked");
	}
	else {
		document.getElementById("omegaUpgrade13").innerHTML = document.getElementById("omegaUpgrade13").innerHTML = "Increase Gamma Upgrade 5 effect<br>based on Omega" + "<br>Cost: " + format(player.omegaUpgradeCost, 0) + " Omega";
		document.getElementById("omegaUp13").classList.add("locked");
	}
	
	if (player.omegaUpgrade2x4y == true){
		document.getElementById("omegaUpgrade14").innerHTML = document.getElementById("omegaUpgrade14").innerHTML = "Raise Expansion Upgrade 10<br>to the power of Electron gain" + "<br>Current: ^" + format(player.allMultFromTenthExpansionUpgrade2x4y, 2);
		document.getElementById("omegaUp14").classList.remove("locked");
	}
	else {
		document.getElementById("omegaUpgrade14").innerHTML = document.getElementById("omegaUpgrade14").innerHTML = "Raise Expansion Upgrade 10<br>to the power of Electron gain" + "<br>Cost: " + format(player.omegaUpgradeCost, 0) + " Omega";
		document.getElementById("omegaUp14").classList.add("locked");
	}
	
	if (player.omegaUpgrade3x4y == true){
		document.getElementById("omegaUpgrade15").innerHTML = document.getElementById("omegaUpgrade15").innerHTML = "Increase 2nd electron upgrade<br>by 0.01" + "<br>Current: " + format(player.electronGainGain, 2) + "x";
		document.getElementById("omegaUp15").classList.remove("locked");
	}
	else {
		document.getElementById("omegaUpgrade15").innerHTML = document.getElementById("omegaUpgrade15").innerHTML = "Increase 2nd electron upgrade<br>by 0.01" + "<br>Cost: " + format(player.omegaUpgradeCost, 0) + " Omega";
		document.getElementById("omegaUp15").classList.add("locked");
	}
	
	if (player.omegaUpgrade4x4y == true){
		document.getElementById("omegaUpgrade16").innerHTML = document.getElementById("omegaUpgrade16").innerHTML = "4th root Atom reset cost<br>Increase 2nd Electron upgrade by 0.01<br>Atom reset no longer resets Electrons";
		document.getElementById("omegaUp16").classList.remove("locked");
	}
	else {
		document.getElementById("omegaUpgrade16").innerHTML = document.getElementById("omegaUpgrade16").innerHTML = "4th root Atom reset cost<br>Increase 2nd Electron upgrade by 0.01<br>Atom reset no longer resets Electrons" + "<br>Cost: " + format(player.omegaUpgradeCost, 0) + " Omega";
		document.getElementById("omegaUp16").classList.add("locked");
	}
}

function getOmegaUpgradeEffect(){
	if (player.omegaUpgrade1x1y == true){
		if ((Decimal.log10(player.expansionPoints.plus(1)).plus(2)).gt(player.multPerBuyFromOmegaUpgrade1x1y)){
			player.multPerBuyFromOmegaUpgrade1x1y = Decimal.log10(player.expansionPoints.plus(1)).plus(2);
		}
	}
	else {
		player.multPerBuyFromOmegaUpgrade1x1y = new Decimal(1);
	}
	if (player.omegaUpgrade2x1y == true){
		if ((player.firstPrestige.plus(1)).gt(player.prestigeEffectFromOmegaUpgrade2x1y)){
			player.prestigeEffectFromOmegaUpgrade2x1y = player.firstPrestige.plus(1);
		}
	}
	else {
		player.prestigeEffectFromOmegaUpgrade2x1y = new Decimal(1);
	}
	if (player.omegaUpgrade3x1y == true){
		player.allExpansionGeneratorPow = player.stage.div(1000).plus(1);
	}
	else {
		player.allExpansionGeneratorPow = new Decimal(1);
	}
	if (player.omegaUpgrade4x1y == true){
		player.expansionPointMultFromOmegaUpgrade4x1y = player.goldFarmerMult.times(player.hybridMult.times(player.PVPLegendMult));
	}
	else {
		player.expansionPointMultFromOmegaUpgrade4x1y = new Decimal(1);
	}
	if (player.omegaUpgrade1x2y == true){
		if ((Decimal.pow(Decimal.log10(player.omega), 0.5)).gt(1)){
			player.alphaUpgrade5MultIncreaseFromOmegaUpgrade1x2y = Decimal.pow(Decimal.log10(player.omega), 0.5);
		}
	}
	else {
		player.alphaUpgrade5MultIncreaseFromOmegaUpgrade1x2y = new Decimal(1);
	}
	if (player.omegaUpgrade2x2y == true){
		if (((player.omega.pow(0.1)).div(15)).gt(1)){
			player.omegaPointMultFrom2x2y = (player.omega.pow(0.1)).div(15);
		}
	}
	else {
		player.omegaPointMultFrom2x2y = new Decimal(1);
	}
	if (player.omegaUpgrade3x2y == true){
		player.fourthSimUpgradeTotalLevels = new Decimal(29);
	}
	else {
		player.fourthSimUpgradeTotalLevels = new Decimal(30);
	}
	if (player.omegaUpgrade4x2y == true){
		player.betaUpgrade5MultIncreaseFromOmegaUpgrade4x3y = Decimal.log(player.electronEffect, 1.1);
	}
	else {
		player.betaUpgrade5MultIncreaseFromOmegaUpgrade4x3y = new Decimal(1);
	}
	if (player.omegaUpgrade1x3y == true){
		if ((Decimal.log10(player.omega)).gt(1)){
			player.betaUpgrade5MultIncreaseFromOmegaUpgrade1x3y = Decimal.log10(player.omega);
		}
	}
	else {
		player.betaUpgrade5MultIncreaseFromOmegaUpgrade1x3y = new Decimal(1);
	}
	if (player.omegaUpgrade2x3y == true){
		// IN PRODUCTION LOOP
	}
	if (player.omegaUpgrade3x3y == true){
		if (player.omegaPoints.gt(0)){
			player.electronGainFromOmegaUpgrade3x3y = Decimal.pow(Decimal.log10(player.omegaPoints), 0.15);
		}
		else {
			player.electronGainFromOmegaUpgrade3x3y = new Decimal(1);
		}
	}
	else {
		player.electronGainFromOmegaUpgrade3x3y = new Decimal(1);
	}
	if (player.omegaUpgrade4x3y == true){
		player.thirdElectronUpgradeCost4x3y = new Decimal(0.25);
	}
	else {
		player.thirdElectronUpgradeCost4x3y = new Decimal(1);
	}
	if (player.omegaUpgrade1x4y == true){
		if ((player.omega.pow(Decimal.sqrt(Decimal.log10(player.omega)))).gt(1)){
			player.gammaUpgrade5MultIncreaseFromOmegaUpgrade1x4y = player.omega.pow(Decimal.sqrt(Decimal.log10(player.omega)));
		}
	}
	else {
		player.gammaUpgrade5MultIncreaseFromOmegaUpgrade1x4y = new Decimal(1);
	}
	if (player.omegaUpgrade2x4y == true){
		player.allMultFromTenthExpansionUpgrade2x4y = player.electronGainFinal;
	}
	else {
		player.allMultFromTenthExpansionUpgrade2x4y = new Decimal(1);
	}
	if (player.omegaUpgrade3x4y == true){
		player.electronGain3x4y = new Decimal(0.01);
	}
	else {
		player.electronGain3x4y = new Decimal(0);
	}
	if (player.omegaUpgrade4x4y == true){
		player.thirdElectronUpgradeCost4x4y = new Decimal(0.25);
		player.electronGain4x4y = new Decimal(0.01);
	}
	else {
		player.thirdElectronUpgradeCost4x4y = new Decimal(1);
		player.electronGain4x4y = new Decimal(0);
	}
}

function omegaUpgradeReset(){
	if (player.omegaUpgradeReset == false){
		player.omegaUpgradeReset = true;
		document.getElementById("omegaUpgradeReset").classList.add("activated");
	}
	else {
		player.omegaUpgradeReset = false;
		document.getElementById("omegaUpgradeReset").classList.remove("activated");
	}
}

function simMode(mode){
	if (mode == 1 && player.inGoldMode == false){
		player.inGoldMode = true;
		player.inFightingMode = false;
	}
	
	if (mode == 2 && player.inFightingMode == false){
		player.inFightingMode = true;
		player.inGoldMode = false;
	}
}

function fight(){
	if (player.monsterCurrentHP.lt(new Decimal(0.1))){
		if (player.finalDPS.gt(player.monsterTotalHP.times(new Decimal.pow(5, 10000))) && player.secondAtomUpgradeBought.gte(1)){
			player.monsterTotalHP = player.monsterTotalHP.times(new Decimal.pow(5, 10000));
			player.monsterCurrentHP = player.monsterTotalHP;
			player.stage = player.stage.plus(10000);
		}
		else if (player.finalDPS.gt(player.monsterTotalHP.times(new Decimal.pow(5, 1000))) && player.secondAtomUpgradeBought.gte(1)){
			player.monsterTotalHP = player.monsterTotalHP.times(new Decimal.pow(5, 1000));
			player.monsterCurrentHP = player.monsterTotalHP;
			player.stage = player.stage.plus(1000);
		}
		else if (player.finalDPS.gt(player.monsterTotalHP.times(new Decimal.pow(5, 100))) && player.secondAtomUpgradeBought.gte(1)){
			player.monsterTotalHP = player.monsterTotalHP.times(new Decimal.pow(5, 100));
			player.monsterCurrentHP = player.monsterTotalHP;
			player.stage = player.stage.plus(100);
		}
		else if (player.finalDPS.gt(player.monsterTotalHP.times(new Decimal.pow(5, 10))) && player.secondAtomUpgradeBought.gte(1)){
			player.monsterTotalHP = player.monsterTotalHP.times(new Decimal.pow(5, 10));
			player.monsterCurrentHP = player.monsterTotalHP;
			player.stage = player.stage.plus(10);
		}
		else {
			player.monsterTotalHP = player.monsterTotalHP.times(5);
			player.monsterCurrentHP = player.monsterTotalHP;
			player.stage = player.stage.plus(1);
		}
	}
}

player.thirdAtomUpgrade3 = new Decimal(player.thirdAtomUpgrade3);
function getElectrons(diff){
	if (player.hasUnlockedElectrons == true){
		if (player.electrons.lt(player.maxElectrons)){
			if (player.electronCurrent.lt(player.electronInterval)){
				player.electronCurrent = player.electronCurrent.plus(new Decimal(1000).times(diff));
			}
			else if (player.electronCurrent.gte(player.electronInterval)){
				player.electrons = player.electrons.times(player.electronGainFinal);
				player.electronCurrent = player.electronCurrent.minus(player.electronInterval);
			}
		}
		else if (player.electrons.gt(player.maxElectrons)){
			player.electrons = player.maxElectrons;
		}
	}
}

//var electronInterval = setInterval(getElectrons, 1000-player.thirdAtomUpgrade3);

function buyElectronUpgrades(x) {
	if (x == 1){
		if (player.omegaPoints.gte(player.firstElectronUpgradeCost)){
			player.omegaPoints = player.omegaPoints.minus(player.firstElectronUpgradeCost);
			player.maxElectrons = player.maxElectrons.pow(1.6);
			player.firstElectronUpgradeBought = player.firstElectronUpgradeBought.plus(1);
			var scalePow = new Decimal(1);
			if (player.firstElectronUpgradeBought.gte(20)){
				scalePow = player.firstElectronUpgradeBought.div(10);
			}
			player.firstElectronUpgradeCost = (player.firstElectronUpgradeCost.times(6)).pow(scalePow);
			//player.firstElectronUpgradeFix = true; -- BARE EN FIX
		}
	}
	if (x == 2){
		if (player.omegaPoints.gte(player.secondElectronUpgradeCost)){
			player.omegaPoints = player.omegaPoints.minus(player.secondElectronUpgradeCost);
			player.electronGainBought = player.electronGainBought.plus(1);
			player.secondElectronUpgradeCost = player.secondElectronUpgradeCost.times(2);
		}
	}
	if (x == 3){
		if (player.electrons.gte(player.thirdElectronUpgradeCost)){
			if ((player.omegaUpgrade4x4y == false) && player.thirdAtomUpgradeBought.lt(1)){
				player.electrons = new Decimal(1);
			}
			else if ((player.omegaUpgrade4x4y == false) && player.thirdAtomUpgradeBought.gt(0)){
				player.electrons = Decimal.pow(player.electrons, 0.2);
			}

			player.atoms = player.atoms.plus(1);
			player.totalAtomResets = player.totalAtomResets.plus(1);
		}
	}
}

function buyAtomUpgrades(x){
	if (x == 1){
		if (player.atoms.gte(player.firstAtomUpgradeCost)){
			if (player.firstAtomUpgradeBought.eq(0)){
				player.atoms = player.atoms.minus(player.firstAtomUpgradeCost);
				player.firstAtomUpgradeCost = player.firstAtomUpgradeCost.plus(1);
				player.firstAtomUpgradeBought = player.firstAtomUpgradeBought.plus(1);
				
			}
			else if (player.firstAtomUpgradeBought.eq(1)){
				player.atoms = player.atoms.minus(player.firstAtomUpgradeCost);
				player.firstAtomUpgradeCost = player.firstAtomUpgradeCost.plus(1);
				player.firstAtomUpgradeBought = player.firstAtomUpgradeBought.plus(1);
				
			}
			else if (player.firstAtomUpgradeBought.lt(7)) {
				player.atoms = player.atoms.minus(player.firstAtomUpgradeCost);
				player.firstAtomUpgradeBought = player.firstAtomUpgradeBought.plus(1);
				
				player.firstAtomUpgrade3 = player.firstAtomUpgrade3.times(4);
				player.firstElectronUpgradeCost = player.firstElectronUpgradeCost.div(4);
				player.secondElectronUpgradeCost = player.secondElectronUpgradeCost.div(4);
			}
		}
		/*
		1. 100% EP/SEC
		2. Keep Expansion Upgrades
		3. Divide Electron upgrade 1 and 2 cost
		*/
	}
	if (x == 2){
		if (player.atoms.gte(player.secondAtomUpgradeCost)){
			if (player.secondAtomUpgradeBought.eq(0)){
				player.atoms = player.atoms.minus(player.secondAtomUpgradeCost);
				player.secondAtomUpgradeCost = player.secondAtomUpgradeCost.plus(1);
				player.secondAtomUpgradeBought = player.secondAtomUpgradeBought.plus(1);
			}
			else if (player.secondAtomUpgradeBought.eq(1)){
				player.atoms = player.atoms.minus(player.secondAtomUpgradeCost);
				player.secondAtomUpgradeCost = player.secondAtomUpgradeCost.plus(1);
				player.secondAtomUpgradeBought = player.secondAtomUpgradeBought.plus(1);
			}
			else if (player.secondAtomUpgradeBought.lt(7)){
				player.atoms = player.atoms.minus(player.secondAtomUpgradeCost);
				player.secondAtomUpgradeBought = player.secondAtomUpgradeBought.plus(1);
				
				player.secondAtomUpgrade3 = player.secondAtomUpgrade3.times(2);
			}
		}
		/*
		1. Skip Stages
		2. Keep ABG
		3. Increase electronEffect
		*/
	}
	if (x == 3){
		if (player.atoms.gte(player.thirdAtomUpgradeCost)){
			if (player.thirdAtomUpgradeBought.eq(0)){
				player.atoms = player.atoms.minus(player.thirdAtomUpgradeCost);
				player.thirdAtomUpgradeCost = player.thirdAtomUpgradeCost.plus(1);
				player.thirdAtomUpgradeBought = player.thirdAtomUpgradeBought.plus(1);
			}
			else if (player.thirdAtomUpgradeBought.eq(1)){
				player.atoms = player.atoms.minus(player.thirdAtomUpgradeCost);
				player.thirdAtomUpgradeCost = player.thirdAtomUpgradeCost.plus(1);
				player.thirdAtomUpgradeBought = player.thirdAtomUpgradeBought.plus(1);
			}
			else if (player.thirdAtomUpgradeBought.lt(7)){
				player.atoms = player.atoms.minus(player.thirdAtomUpgradeCost);
				player.thirdAtomUpgradeBought = player.thirdAtomUpgradeBought.plus(1);
				
				player.thirdAtomUpgrade3 = player.thirdAtomUpgrade3.plus(150);
				//clearInterval(electronInterval);
				//electronInterval = setInterval(getElectrons, 1000-player.thirdAtomUpgrade3);
			}
		}
		/*
		1. Keep some Electrons on atom reset
		2. Keep Electrons on omega
		3. Reduce Electron interval 
		*/
	}
}

function reachReality(){
	if (player.omegaPoints.gte(1e16)){
		player.realityPoints = player.realityPoints.plus(Decimal.floor((Decimal.pow(10, Decimal.log10(player.omegaPoints).div(16))).div(10)));
		player.realities = player.realities.plus(1);
		player.secondsInReality = new Decimal(0);
		player.hasUnlockedReality = true;
		if (player.realities.eq(2)){
			player.hasUnlockedBattleTower = true;
		}
				
		player.gold = new Decimal(10);
	
		player.firstCost = new Decimal(10);
		player.secondCost = new Decimal(1000);
		player.thirdCost = new Decimal(1e9);
		player.fourthCost = new Decimal(1e16);
		player.fifthCost = new Decimal(1e25);
		player.sixthCost = new Decimal(1e36);
		player.seventhCost = new Decimal(1e49);
		player.eighthCost = new Decimal(1e64);

		player.firstCostAfterInf = new Decimal("1e309");
		player.secondCostAfterInf = new Decimal("1e311");
		player.thirdCostAfterInf = new Decimal("1e315");
		player.fourthCostAfterInf = new Decimal("1e324");
		player.fifthCostAfterInf = new Decimal("1e330");
		player.sixthCostAfterInf = new Decimal("1e342");
		player.seventhCostAfterInf = new Decimal("1e357");
		player.eighthCostAfterInf = new Decimal("1e368");

		player.firstNewBaseCost = new Decimal(1e25);
		player.secondNewBaseCost = new Decimal(1e37);
		player.thirdNewBaseCost = new Decimal(1e50);
		player.fourthNewBaseCost = new Decimal(1e62);
		player.fifthNewBaseCost = new Decimal(1e75);
		player.sixthNewBaseCost = new Decimal(1e87);
		player.seventhNewBaseCost = new Decimal(1e100);
		player.eighthNewBaseCost = new Decimal(1e112);

		player.firstNewBaseCostInc = new Decimal(2);
		player.secondNewBaseCostInc = new Decimal(4);
		player.thirdNewBaseCostInc = new Decimal(8);
		player.fourthNewBaseCostInc = new Decimal(16);
		player.fifthNewBaseCostInc = new Decimal(32);
		player.sixthNewBaseCostInc = new Decimal(64);
		player.seventhNewBaseCostInc = new Decimal(128);
		player.eighthNewBaseCostInc = new Decimal(256);

		player.firstAmount = new Decimal(0);
		player.secondAmount = new Decimal(0);
		player.thirdAmount = new Decimal(0);
		player.fourthAmount = new Decimal(0);
		player.fifthAmount = new Decimal(0);
		player.sixthAmount = new Decimal(0);
		player.seventhAmount = new Decimal(0);
		player.eighthAmount = new Decimal(0);

		player.firstBought = new Decimal(0);
		player.secondBought = new Decimal(0);
		player.thirdBought = new Decimal(0);
		player.fourthBought = new Decimal(0);
		player.fifthBought = new Decimal(0);
		player.sixthBought = new Decimal(0);
		player.seventhBought = new Decimal(0);
		player.eighthBought = new Decimal(0);

		player.firstMult = new Decimal(4);
		player.secondMult = new Decimal(2);
		player.thirdMult = new Decimal(1);
		player.fourthMult = new Decimal(1);
		player.fifthMult = new Decimal(1);
		player.sixthMult = new Decimal(1);
		player.seventhMult = new Decimal(1);
		player.eighthMult = new Decimal(1);

		player.firstFinalMult = new Decimal(1);
		player.secondFinalMult = new Decimal(1);
		player.thirdFinalMult = new Decimal(1);
		player.fourthFinalMult = new Decimal(1);
		player.fifthFinalMult = new Decimal(1);
		player.sixthFinalMult = new Decimal(1);
		player.seventhFinalMult = new Decimal(1);
		player.eighthFinalMult = new Decimal(1);

		player.firstPrestige = new Decimal(0);
		player.secondPrestige = new Decimal(0);
		player.thirdPrestige = new Decimal(0);
		player.fourthPrestige = new Decimal(0);
		player.fifthPrestige = new Decimal(0);
		player.sixthPrestige = new Decimal(0);
		player.seventhPrestige = new Decimal(0);
		player.eighthPrestige = new Decimal(0);

		player.firstPrestigeCost = new Decimal(3);
		player.secondPrestigeCost = new Decimal(5);
		player.thirdPrestigeCost = new Decimal(7);
		player.fourthPrestigeCost = new Decimal(9),
		player.fifthPrestigeCost = new Decimal(11);
		player.sixthPrestigeCost = new Decimal(13);
		player.seventhPrestigeCost = new Decimal(15);
		player.eighthPrestigeCost = new Decimal(17);

		player.firstNewPrestigeCost = new Decimal(4);
		player.secondNewPrestigeCost = new Decimal(8);
		player.thirdNewPrestigeCost = new Decimal(12);
		player.fourthNewPrestigeCost = new Decimal(16);
		player.fifthNewPrestigeCost = new Decimal(20);
		player.sixthNewPrestigeCost = new Decimal(24);
		player.seventhNewPrestigeCost = new Decimal(28);
		player.eighthNewPrestigeCost = new Decimal(32);

		player.secondsInExpansion = new Decimal(0);
		player.secondsInOmega = new Decimal(0);

		player.allMult = new Decimal(1);
		player.allMultFinal = new Decimal(1);
		player.allMultCost = new Decimal(1000);
		player.allMultFinalCost = new Decimal(1000);
		player.allMultCostInc = new Decimal(1000);
		player.allMultGain = new Decimal(1.05);
		player.allMultGainFinal = new Decimal(1);
		player.allMultFromPrestige = new Decimal(1);
		player.allMultBought = new Decimal(0);
		player.allMultFromFirstExpansionUpgrade = new Decimal(1);
		player.allMultGainFromSecondExpansionUpgrade = new Decimal(1);
		player.allMultGainFromTwelfthExpansionUpgrade = new Decimal(1);
		player.allMultGainFromSecondGammaUpgrade = new Decimal(1);
		player.allMultFromFourthExpansionUpgrade = new Decimal(1);
		player.allMultFromEighthExpansionUpgrade = new Decimal(1);
		player.allMultFromTenthExpansionUpgrade = new Decimal(1);
		player.allMultFromTenthExpansionUpgrade2x4y = new Decimal(1);
		if (player.atomShopItem6Bought == false){
			player.allMultFromFirstGammaUpgrade = new Decimal(1);
		}
		player.allMultFromFifthGammaUpgrade = new Decimal(1);
		player.allMultNewBaseCost = new Decimal(1e52);
		player.allMultNewBaseCostInc = new Decimal(100);

		player.multPerBuy = new Decimal(1.6);
		player.multPerBuyFinal = new Decimal(1.6);
		player.multPerBuyFromOmegaUpgrade1x1y = new Decimal(1);

		player.maxPrestige = new Decimal(15);
		if (player.atomShopItem6Bought == false){
			player.prestigeEffectFromThirdGammaUpgrade = new Decimal(1);
		}
		player.prestigeEffectFromOmegaUpgrade2x1y = new Decimal(1);

		player.expansionPoints = new Decimal(0);
		player.expansionPointMult = new Decimal(1);
		player.expansionPointMultBought = new Decimal(0);
		player.expansionPointMultFinal = new Decimal(1);
		player.expansionPointMultCost = new Decimal(10);
		player.expansionPointMultCostInc = new Decimal(10);
		player.expansionPointMultCostIncInc = new Decimal(2);
		player.expansions = new Decimal(0);
		player.expansionCost = new Decimal("1e308");
		player.expansionPointMultFromNinthExpansionUpgrade = new Decimal(1);
		player.expansionPointMultFromThirteenthExpansionUpgrade = new Decimal(1);
		if (player.atomShopItem6Bought == false){
			player.expansionPointMultFromFirstAlphaUpgrade = new Decimal(1);
		}
		player.expansionPointMultFromFifthAlphaUpgrade = new Decimal(1);
		if (player.atomShopItem6Bought == false){
			player.expansionUpgradeThirteenEffectIncrease = new Decimal(1);
		}
		player.expansionPointMultFromSecondAlphaUpgrade = new Decimal(1);
		player.expansionPointMultFromOmegaUpgrade4x1y = new Decimal(1);

		player.electricity = new Decimal(0);
		if (player.atomShopItem6Bought == false){
			player.electricityEffectFromThirdBetaUpgrade = new Decimal(1);
		}

		player.firstExpansionGeneratorCost = new Decimal(1);
		player.secondExpansionGeneratorCost = new Decimal(100);
		player.thirdExpansionGeneratorCost = new Decimal(1e4);
		player.fourthExpansionGeneratorCost = new Decimal(1e6);
		player.fifthExpansionGeneratorCost = new Decimal(1e8);
		player.sixthExpansionGeneratorCost = new Decimal(1e10);
		player.seventhExpansionGeneratorCost = new Decimal(1e12);
		player.eighthExpansionGeneratorCost = new Decimal(1e14);

		player.firstExpansionGeneratorCostInc = new Decimal(3);
		player.secondExpansionGeneratorCostInc = new Decimal(6);
		player.thirdExpansionGeneratorCostInc = new Decimal(9);
		player.fourthExpansionGeneratorCostInc = new Decimal(12);
		player.fifthExpansionGeneratorCostInc = new Decimal(15);
		player.sixthExpansionGeneratorCostInc = new Decimal(18);
		player.seventhExpansionGeneratorCostInc = new Decimal(21);
		player.eighthExpansionGeneratorCostInc = new Decimal(24);

		player.firstExpansionGeneratorCostIncInc = new Decimal(1.5);
		player.secondExpansionGeneratorCostIncInc = new Decimal(2);
		player.thirdExpansionGeneratorCostIncInc = new Decimal(2.5);
		player.fourthExpansionGeneratorCostIncInc = new Decimal(3);
		player.fifthExpansionGeneratorCostIncInc = new Decimal(3.5);
		player.sixthExpansionGeneratorCostIncInc = new Decimal(4);
		player.seventhExpansionGeneratorCostIncInc = new Decimal(4.5);
		player.eighthExpansionGeneratorCostIncInc = new Decimal(5);

		player.firstExpansionGeneratorAmount = new Decimal(0);
		player.secondExpansionGeneratorAmount = new Decimal(0);
		player.thirdExpansionGeneratorAmount = new Decimal(0);
		player.fourthExpansionGeneratorAmount = new Decimal(0);
		player.fifthExpansionGeneratorAmount = new Decimal(0);
		player.sixthExpansionGeneratorAmount = new Decimal(0);
		player.seventhExpansionGeneratorAmount = new Decimal(0);
		player.eighthExpansionGeneratorAmount = new Decimal(0);

		player.firstExpansionGeneratorBought = new Decimal(0);
		player.secondExpansionGeneratorBought = new Decimal(0);
		player.thirdExpansionGeneratorBought = new Decimal(0);
		player.fourthExpansionGeneratorBought = new Decimal(0);
		player.fifthExpansionGeneratorBought = new Decimal(0);
		player.sixthExpansionGeneratorBought = new Decimal(0);
		player.seventhExpansionGeneratorBought = new Decimal(0);
		player.eighthExpansionGeneratorBought = new Decimal(0);

		player.firstExpansionGeneratorMult = new Decimal(1);
		player.secondExpansionGeneratorMult = new Decimal(1);
		player.thirdExpansionGeneratorMult = new Decimal(1);
		player.fourthExpansionGeneratorMult = new Decimal(1);
		player.fifthExpansionGeneratorMult = new Decimal(1);
		player.sixthExpansionGeneratorMult = new Decimal(1);
		player.seventhExpansionGeneratorMult = new Decimal(1);
		player.eighthExpansionGeneratorMult = new Decimal(1);

		player.firstExpansionGeneratorFinalMult = new Decimal(1);
		player.secondExpansionGeneratorFinalMult = new Decimal(1);
		player.thirdExpansionGeneratorFinalMult = new Decimal(1);
		player.fourthExpansionGeneratorFinalMult = new Decimal(1);
		player.fifthExpansionGeneratorFinalMult = new Decimal(1);
		player.sixthExpansionGeneratorFinalMult = new Decimal(1);
		player.seventhExpansionGeneratorFinalMult = new Decimal(1);
		player.eighthExpansionGeneratorFinalMult = new Decimal(1);

		player.expansionUpgrade1 = false;
		player.expansionUpgrade2 = false;
		player.expansionUpgrade3 = false;
		player.expansionUpgrade4 = false;
		player.expansionUpgrade5 = false;
		player.expansionUpgrade6 = false;
		player.expansionUpgrade7 = false;
		player.expansionUpgrade8 = false;
		player.expansionUpgrade9 = false;
		player.expansionUpgrade10 = false;
		player.expansionUpgrade11 = false;
		player.expansionUpgrade12 = false;
		player.expansionUpgrade13 = false;
		player.expansionUpgrade14 = false;
		player.expansionUpgrade15 = false;

		player.firstExpansionMultFromUpgrades = new Decimal(1);
		player.expansionGeneratorAllMultFromEleventhExpansionUpgrade = new Decimal(1);
		if (player.atomShopItem6Bought == false){
			player.expansionGeneratorAllMultFromFirstBetaUpgrade = new Decimal(1);
			player.firstExpansionGeneratorMultFromSecondBetaUpgrade = new Decimal(1);
		}
		player.expansionGeneratorAllMultFromFifthBetaUpgrade = new Decimal(1);
		player.allExpansionGeneratorPow = new Decimal(1);

		player.prestigeAutobuyerChecked = false; 
		player.generatorAutobuyerChecked = false;
		player.allMultAutobuyerChecked = false;
		player.expansionAutobuyerChecked = false;
		player.alphaBetaGammaAutobuyerChecked = false;
		player.expansionGeneratorAutobuyerChecked = false;
		player.expansionPointMultAutobuyerChecked = false;
		player.alphaBetaGammaUpgrade5AutobuyerChecked = false;
		player.simulationHeroAutobuyerChecked = false;
		player.fightingAutobuyerChecked = false;

		player.alpha = new Decimal(0);
		player.alphaCost = new Decimal("1e2000");
		player.alphaBought = new Decimal(0);
		player.alphaNewCost = new Decimal("1e500");
		player.alphaNewCostInc = new Decimal(100);
		player.alphaUpgrade5FinalMult = new Decimal(1);
		player.alphaUpgrade5MultIncreaseFromOmegaUpgrade1x2y = new Decimal(1);
		player.beta = new Decimal(0);
		player.betaCost = new Decimal(1e8);
		player.betaBought = new Decimal(0);
		player.betaNewCost = new Decimal(100);
		player.betaNewCostInc = new Decimal(1.1);
		player.betaUpgrade5FinalMult = new Decimal(1);
		player.betaUpgrade5MultIncreaseFromOmegaUpgrade1x3y = new Decimal(1);
		player.betaUpgrade5MultIncreaseFromOmegaUpgrade4x3y = new Decimal(1);
		player.gamma = new Decimal(0);
		player.gammaCost = new Decimal(1e30);
		player.gammaBought = new Decimal(0);
		player.gammaNewCost = new Decimal(1e5);
		player.gammaNewCostInc = new Decimal(2);
		player.gammaUpgrade5FinalMult = new Decimal(1);
		player.gammaUpgrade5MultIncreaseFromOmegaUpgrade1x4y = new Decimal(1);

		if (player.atomShopItem6Bought == false){
			player.alphaUpgrade1 = new Decimal(0);
			player.alphaUpgrade2 = new Decimal(0);
			player.alphaUpgrade3 = new Decimal(0);
			player.alphaUpgrade4 = new Decimal(0);

			player.betaUpgrade1 = new Decimal(0);
			player.betaUpgrade2 = new Decimal(0);
			player.betaUpgrade3 = new Decimal(0);
			player.betaUpgrade4 = new Decimal(0);

			player.gammaUpgrade1 = new Decimal(0);
			player.gammaUpgrade2 = new Decimal(0);
			player.gammaUpgrade3 = new Decimal(0);
			player.gammaUpgrade4 = new Decimal(0);
		}
		
		player.alphaUpgrade5 = new Decimal(0);
		player.betaUpgrade5 = new Decimal(0);
		player.gammaUpgrade5 = new Decimal(0);

		player.firstOmegaGeneratorCost = new Decimal(1);
		player.secondOmegaGeneratorCost = new Decimal(100);
		player.thirdOmegaGeneratorCost = new Decimal(1e4);
		player.fourthOmegaGeneratorCost = new Decimal(1e6);
		player.fifthOmegaGeneratorCost = new Decimal(1e8);
		player.sixthOmegaGeneratorCost = new Decimal(1e10);
		player.seventhOmegaGeneratorCost = new Decimal(1e12);
		player.eighthOmegaGeneratorCost = new Decimal(1e14);

		player.firstOmegaGeneratorAmount = new Decimal(0);
		player.secondOmegaGeneratorAmount = new Decimal(0);
		player.thirdOmegaGeneratorAmount = new Decimal(0);
		player.fourthOmegaGeneratorAmount = new Decimal(0);
		player.fifthOmegaGeneratorAmount = new Decimal(0);
		player.sixthOmegaGeneratorAmount = new Decimal(0);
		player.seventhOmegaGeneratorAmount = new Decimal(0);
		player.eighthOmegaGeneratorAmount = new Decimal(0);

		player.firstOmegaGeneratorBought = new Decimal(0);
		player.secondOmegaGeneratorBought = new Decimal(0);
		player.thirdOmegaGeneratorBought = new Decimal(0);
        player.fourthOmegaGeneratorBought = new Decimal(0);
		player.fifthOmegaGeneratorBought = new Decimal(0);
		player.sixthOmegaGeneratorBought = new Decimal(0);
		player.seventhOmegaGeneratorBought = new Decimal(0);
		player.eighthOmegaGeneratorBought = new Decimal(0);

		player.firstOmegaGeneratorMult = new Decimal(1);
		player.secondOmegaGeneratorMult = new Decimal(1);
		player.thirdOmegaGeneratorMult = new Decimal(1);
		player.fourthOmegaGeneratorMult = new Decimal(1);
		player.fifthOmegaGeneratorMult = new Decimal(1);
		player.sixthOmegaGeneratorMult = new Decimal(1);
		player.seventhOmegaGeneratorMult = new Decimal(1);
		player.eighthOmegaGeneratorMult = new Decimal(1);

		player.firstOmegaGeneratorFinalMult = new Decimal(1);
		player.secondOmegaGeneratorFinalMult = new Decimal(1);
		player.thirdOmegaGeneratorFinalMult = new Decimal(1);
		player.fourthOmegaGeneratorFinalMult = new Decimal(1);
		player.fifthOmegaGeneratorFinalMult = new Decimal(1);
		player.sixthOmegaGeneratorFinalMult = new Decimal(1);
		player.seventhOmegaGeneratorFinalMult = new Decimal(1);
		player.eighthOmegaGeneratorFinalMult = new Decimal(1);

		player.omegaPoints = new Decimal(0);
		player.omegaPointMult = new Decimal(1);
		player.omegaPointMultCost = new Decimal(10);
		player.omegaPointMultBought = new Decimal(0);
		player.omegaPointMultFinal = new Decimal(1);
		player.omegaPointMultFrom2x2y = new Decimal(1);
		player.omegas = new Decimal(0);

		player.omega = new Decimal(0);
		player.omegaEffect = new Decimal(1);

		if (player.atomShopItem19Bought == false){
			player.omegaUpgrade1x1y = false;
			player.omegaUpgrade2x1y = false;
			player.omegaUpgrade3x1y = false;
			player.omegaUpgrade4x1y = false;
			player.omegaUpgrade1x2y = false;
			player.omegaUpgrade2x2y = false;
			player.omegaUpgrade3x2y = false;
			player.omegaUpgrade4x2y = false;
			player.omegaUpgrade1x3y = false;
			player.omegaUpgrade2x3y = false;
			player.omegaUpgrade3x3y = false;
			player.omegaUpgrade4x3y = false;
			player.omegaUpgrade1x4y = false;
			player.omegaUpgrade2x4y = false;
			player.omegaUpgrade3x4y = false;
			player.omegaUpgrade4x4y = false;
	
			player.omegaUpgrade1x1yMax = new Decimal(1);
			player.omegaUpgrade2x1yMax = new Decimal(1);
			player.omegaUpgrade3x1yMax = new Decimal(1);
			player.omegaUpgrade4x1yMax = new Decimal(1);
			player.omegaUpgrade1x2yMax = new Decimal(1);
			player.omegaUpgrade2x2yMax = new Decimal(1);
			player.omegaUpgrade3x2yMax = new Decimal(1);
			player.omegaUpgrade4x2yMax = new Decimal(1);
			player.omegaUpgrade1x3yMax = new Decimal(1);
			player.omegaUpgrade2x3yMax = new Decimal(1);
			player.omegaUpgrade3x3yMax = new Decimal(1);
			player.omegaUpgrade4x3yMax = new Decimal(1);
			player.omegaUpgrade1x4yMax = new Decimal(1);
			player.omegaUpgrade2x4yMax = new Decimal(1);
			player.omegaUpgrade3x4yMax = new Decimal(1);
			player.omegaUpgrade4x4yMax = new Decimal(1);
	
			player.omegaUpgrade1x1yBought = new Decimal(0);
			player.omegaUpgrade2x1yBought = new Decimal(0);
			player.omegaUpgrade3x1yBought = new Decimal(0);
			player.omegaUpgrade4x1yBought = new Decimal(0);
			player.omegaUpgrade1x2yBought = new Decimal(0);
			player.omegaUpgrade2x2yBought = new Decimal(0);
			player.omegaUpgrade3x2yBought = new Decimal(0);
			player.omegaUpgrade4x2yBought = new Decimal(0);
			player.omegaUpgrade1x3yBought = new Decimal(0);
			player.omegaUpgrade2x3yBought = new Decimal(0);
			player.omegaUpgrade3x3yBought = new Decimal(0);
			player.omegaUpgrade4x3yBought = new Decimal(0);
			player.omegaUpgrade1x4yBought = new Decimal(0);
			player.omegaUpgrade2x4yBought = new Decimal(0);
			player.omegaUpgrade3x4yBought = new Decimal(0);
			player.omegaUpgrade4x4yBought = new Decimal(0);
	
			player.omegaUpgradeCost = new Decimal(1);
		}

		player.omegaUpgradeReset = false;

		player.simGold = new Decimal(0);
		player.stage = new Decimal(1);
		player.DPS = new Decimal(1);
		player.finalDPS = new Decimal(1);
		player.stageExponent = new Decimal(2);
		player.finalGPS = new Decimal(1);

		player.inGoldMode = false;
		player.inFightingMode = false;

		player.goldFarmerLevel = new Decimal(1);
		player.goldFarmerMult = new Decimal(1);
		player.goldFarmerCost = new Decimal(10);
		player.goldFarmerScale = new Decimal(1);
		player.goldFarmerScaleScale = new Decimal(1);

		player.hybridLevel = new Decimal(1);
		player.hybridMult = new Decimal(1);
		player.hybridCost = new Decimal(10);
		player.hybridScale = new Decimal(1);
		player.hybridScaleScale = new Decimal(1);

		player.PVPLegendLevel = new Decimal(1);
		player.PVPLegendMult = new Decimal(1);
		player.PVPLegendCost = new Decimal(10);
		player.PVPLegendScale = new Decimal(1);
		player.PVPLegendScaleScale = new Decimal(1);

		player.monsterTotalHP = new Decimal(10);
		player.monsterCurrentHP = new Decimal(10);

		player.resimulateDPSMult = new Decimal(1);
		player.resimulateStageExponentMult = new Decimal(1);

		if (player.atomShopItem19Bought == false){
			player.firstSimUpgrade = new Decimal(1);
			player.firstSimUpgradeBought = false;
	
			player.secondSimUpgrade = new Decimal(1);
			player.secondSimUpgradeBought = false;
	
			player.thirdSimUpgrade = new Decimal(1);
			player.thirdSimUpgradeBought = false;
	
			player.fourthSimUpgrade = new Decimal(1);
			player.fourthSimUpgradeBought = false;
			player.fourthSimUpgradeTotalLevels = new Decimal(30);
	
			player.fifthSimUpgrade = new Decimal(1);
			player.fifthSimUpgradeBought = false;
	
			player.sixthSimUpgradeBought = false;
	
			player.seventhSimUpgrade = new Decimal(1);
			player.seventhSimUpgradeBought = false;
	
			player.eighthSimUpgradeBought = false;
		}

		player.electrons = new Decimal(1);
		player.electronEffect = new Decimal(1);
		player.maxElectrons = new Decimal(1e10);
		player.electronGain = new Decimal(1.01);
		player.electronGainBought = new Decimal(0);
		player.electronGain3x4y = new Decimal(0);
		player.electronGain4x4y = new Decimal(0);
		player.electronGainGain = new Decimal(1);
		player.electronGainFinal = new Decimal(1.01);
		player.electronGainFromOmegaUpgrade3x3y = new Decimal(1);
		if (player.atomShopItem4Bought == false){
			player.atoms = new Decimal(0);
		}
		player.totalAtomResets = new Decimal(0);

		player.firstElectronUpgradeCost = new Decimal(1e5);
		player.firstElectronUpgradeFix = false;
		player.firstElectronUpgradeBought = new Decimal(0);
		player.secondElectronUpgradeCost = new Decimal(1e5);
		player.thirdElectronUpgradeCost = new Decimal(1000);
		player.thirdElectronUpgradeCost4x3y = new Decimal(1);
		player.thirdElectronUpgradeCost4x4y = new Decimal(1);

		if (player.atomShopItem6Bought == false){
			player.firstAtomUpgradeBought = new Decimal(0);
			player.secondAtomUpgradeBought = new Decimal(0);
			player.thirdAtomUpgradeBought = new Decimal(0);
	
			player.firstAtomUpgrade3 = new Decimal(1);
			player.secondAtomUpgrade3 = new Decimal(1);
			player.thirdAtomUpgrade3 = new Decimal(0),
	
			player.firstAtomUpgradeCost = new Decimal(1);
			player.secondAtomUpgradeCost = new Decimal(1);
			player.thirdAtomUpgradeCost = new Decimal(1);
		}
		
		
		
		
		//clearInterval(electronInterval);
		//electronInterval = setInterval(getElectrons, 1000-player.thirdAtomUpgrade3);
		
	}
}

function buyRealityGenerator(tier){
	var name = TIER_NAMES[tier];
	if (player.realityPoints.gt(player[name + "RealityGeneratorCost"]) || player.realityPoints.eq(player[name + "RealityGeneratorCost"])){
		player.realityPoints = player.realityPoints.minus(player[name + "RealityGeneratorCost"]);
		player[name + "RealityGeneratorCost"] = player[name + "RealityGeneratorCost"].times(new Decimal(2).times(tier));
		player[name + "RealityGeneratorAmount"] = player[name + "RealityGeneratorAmount"].plus(1);
		player[name + "RealityGeneratorBought"] = player[name + "RealityGeneratorBought"].plus(1);
		player[name + "RealityGeneratorMult"] = player[name + "RealityGeneratorMult"].times(2);
	}
}

function getRealityBonus(){
	if (document.getElementById("realityBonus1Check").checked == true){
		player.realityBonus1 = new Decimal(1).plus(player.realityEnergy.pow(2));
	}
	else player.realityBonus1 = new Decimal(1);
	
	if (document.getElementById("realityBonus2Check").checked == true){
		player.realityBonus2 = new Decimal(1).plus(player.realityEnergy);
	}
	else player.realityBonus2 = new Decimal(1);
	
	if (document.getElementById("realityBonus3Check").checked == true){
		player.realityBonus3 = new Decimal(1).plus(Decimal.log10(player.realityEnergy.plus(1)));
	}
	else player.realityBonus3 = new Decimal(1);
	
	if (document.getElementById("realityBonus4Check").checked == true){
		player.realityBonus4 = new Decimal(1).plus(Decimal.sqrt(player.realityEnergy));
	}
	else player.realityBonus4 = new Decimal(1);
	
	if (document.getElementById("realityBonus5Check").checked == true){
		player.realityBonus5 = new Decimal(1).plus(Decimal.log10(player.realityEnergy.plus(1)));
	}
	else player.realityBonus5 = new Decimal(1);
	
	if (document.getElementById("realityBonus6Check").checked == true){
		player.realityBonus6 = new Decimal(1).plus(player.realityEnergy);
	}
	else player.realityBonus6 = new Decimal(1);
}

for (let i = 1; i < 7; i++){
	if (player["realityBonus" + i + "Checked"] == true){
		document.getElementById("realityBonus" + i + "Check").checked = true;
	}
}

function realityBonusCheck(){
	for (let i = 1; i < 7; i++){
		if (document.getElementById("realityBonus" + i + "Check").checked == true){
			player["realityBonus" + i + "Checked"] = true;
		}
		else player["realityBonus" + i + "Checked"] = false;
	}	
	
	player.checkedRealityBonus = new Decimal(0);
	if (document.getElementById("realityBonus1Check").checked == true){
		player.checkedRealityBonus = player.checkedRealityBonus.plus(1);
	}
	
	if (document.getElementById("realityBonus2Check").checked == true){
		player.checkedRealityBonus = player.checkedRealityBonus.plus(1);
	}
	
	if (document.getElementById("realityBonus3Check").checked == true){
		player.checkedRealityBonus = player.checkedRealityBonus.plus(1);
	}
	
	if (document.getElementById("realityBonus4Check").checked == true){
		player.checkedRealityBonus = player.checkedRealityBonus.plus(1);
	}
	
	if (document.getElementById("realityBonus5Check").checked == true){
		player.checkedRealityBonus = player.checkedRealityBonus.plus(1);
	}
	
	if (document.getElementById("realityBonus6Check").checked == true){
		player.checkedRealityBonus = player.checkedRealityBonus.plus(1);
	}
	
	if (player.checkedRealityBonus.gte(player.maxRealityBonus)){
		if (document.getElementById("realityBonus1Check").checked == false){
			document.getElementById("realityBonus1Check").classList.add("locked");
		}
		else document.getElementById("realityBonus1Check").classList.remove("locked");

		if (document.getElementById("realityBonus2Check").checked == false){
			document.getElementById("realityBonus2Check").classList.add("locked");
		}
		else document.getElementById("realityBonus2Check").classList.remove("locked");
		
		if (document.getElementById("realityBonus3Check").checked == false){
			document.getElementById("realityBonus3Check").classList.add("locked");
		}
		else document.getElementById("realityBonus3Check").classList.remove("locked");
		
		if (document.getElementById("realityBonus4Check").checked == false){
			document.getElementById("realityBonus4Check").classList.add("locked");
		}
		else document.getElementById("realityBonus4Check").classList.remove("locked");
		
		if (document.getElementById("realityBonus5Check").checked == false){
			document.getElementById("realityBonus5Check").classList.add("locked");
		}
		else document.getElementById("realityBonus5Check").classList.remove("locked");
		
		if (document.getElementById("realityBonus6Check").checked == false){
			document.getElementById("realityBonus6Check").classList.add("locked");
		}
		else document.getElementById("realityBonus6Check").classList.remove("locked");
	}
	else {
		document.getElementById("realityBonus1Check").classList.remove("locked");
		document.getElementById("realityBonus2Check").classList.remove("locked");
		document.getElementById("realityBonus3Check").classList.remove("locked");
		document.getElementById("realityBonus4Check").classList.remove("locked");
		document.getElementById("realityBonus5Check").classList.remove("locked");
		document.getElementById("realityBonus6Check").classList.remove("locked");
	}
	
}

realityBonusCheck();

function generateEnemy(level){
	// https://www.tutorialspoint.com/split-number-into-4-random-numbers-in-javascript

	if (player.enemyLevel.eq(100)){
		player.isBoss = true;
		player.isLegendary = false;
	}
	else if (player.enemyLevel.eq(200)){
		player.isBoss = true;
		player.isLegendary = false;
	}
	else if (player.enemyLevel.eq(300)){
		player.isBoss = true;
		player.isLegendary = false;
	}
	else if (player.enemyLevel .eq(400)){
		player.isBoss = true;
		player.isLegendary = false;
	}
	else if (player.enemyLevel.eq(500)){
		player.isBoss = true;
		player.isLegendary = false;
	}
	else player.isBoss = false;

	if (player.isBoss == false){
		var converedLevel = level.mag;
		let statStatScale = 10;
		if (level.mag > 30000){
			statStatScale = 1/1000;
		}
		if (level.mag > 25000){
			statStatScale = 1/100;
		}
		else if (level.mag > 20000){
			statStatScale = 1/50;
		}
		else if (level.mag > 25000){
			statStatScale = 1/20;
		}
		else if (level.mag > 20000){
			statStatScale = 1/4;
		}
		else if (level.mag > 15000){
			statStatScale = 1;
		}
		else if (level.mag > 10000){
			statStatScale = 4;
		}
		else if (level.mag > 5000){
			statStatScale = 8;
		}
		else if (level.mag > 300){
			statStatScale = 9;
		}
		let statScale = Math.floor(level.mag / statStatScale);
		const total = converedLevel * (3 + statScale) + 6;
		const max = converedLevel * (3 + statScale) + 6;
		const fillWithRandom = (max, total, len = 5) => {
			let arr = new Array(len);
			let sum = 0;
			do {
				for (let i = 0; i < len; i++) {
					arr[i] = Math.random();
				}
				sum = arr.reduce((acc, val) => acc + val, 0);
				const scale = (total - len) / sum;
				arr = arr.map(val => Math.min(max, Math.round(val * scale) + 1));
				sum = arr.reduce((acc, val) => acc + val, 0);
			} while (sum - total);
			player.enemyStamina = new Decimal(arr[0]);
			player.enemyStrength = new Decimal(arr[1]);
			player.enemyArmor = new Decimal(arr[2]);
			player.enemyRegeneration = new Decimal(arr[3]);
			player.enemyAgility = new Decimal(arr[4]);
			return arr;
		};
		fillWithRandom(max, total);
		//console.log(format(player.enemyStamina, 0) + " " + format(player.enemyStrength, 0) + " " + format(player.enemyArmor, 0) + " " + format(player.enemyRegeneration, 0) + " " + format(player.enemyAgility, 0));
		player.enemyHealthTotal = player.enemyStamina.times(10);
		player.enemyHealthCurrent = player.enemyHealthTotal;
		
		var legendaryRoll = new Decimal(Math.random());
		var legendaryEnemyLevel = player.enemyLevel;
		if (player.enemyLevel.gt(40)){
			legendaryEnemyLevel = new Decimal(40);
		}
		if (legendaryRoll.lte(new Decimal(1).minus(new Decimal(0.99).pow(legendaryEnemyLevel)))){
			player.isLegendary = true;
		}
		else player.isLegendary = false;
	}
	else{
		if (player.enemyLevel.eq(100)){
			player.enemyStamina = new Decimal(500);
			player.enemyStrength = new Decimal(500);
			player.enemyArmor = new Decimal(400);
			player.enemyRegeneration = new Decimal(400);
			player.enemyAgility = new Decimal(500);

			player.enemyHealthTotal = player.enemyStamina.times(10);
			player.enemyHealthCurrent = player.enemyHealthTotal;
		}
		else if (player.enemyLevel.eq(200)){
			player.enemyStamina = new Decimal(10000);
			player.enemyStrength = new Decimal(1000);
			player.enemyArmor = new Decimal(2000);
			player.enemyRegeneration = new Decimal(1000);
			player.enemyAgility = new Decimal(1000);

			player.enemyHealthTotal = player.enemyStamina.times(10);
			player.enemyHealthCurrent = player.enemyHealthTotal;
		}
		else if (player.enemyLevel.eq(300)){
			player.enemyStamina = new Decimal(1000);
			player.enemyStrength = new Decimal(10000);
			player.enemyArmor = new Decimal(3000);
			player.enemyRegeneration = new Decimal(30000);
			player.enemyAgility = new Decimal(10000);

			player.enemyHealthTotal = player.enemyStamina.times(10);
			player.enemyHealthCurrent = player.enemyHealthTotal;
		}
		else if (player.enemyLevel.eq(400)){
			player.enemyStamina = new Decimal(20000);
			player.enemyStrength = new Decimal(5000);
			player.enemyArmor = new Decimal(4000);
			player.enemyRegeneration = new Decimal(200000);
			player.enemyAgility = new Decimal(2000);

			player.enemyHealthTotal = player.enemyStamina.times(10);
			player.enemyHealthCurrent = player.enemyHealthTotal;
		}
		else if (player.enemyLevel.eq(500)){
			player.enemyStamina = new Decimal(100000);
			player.enemyStrength = new Decimal(10000);
			player.enemyArmor = new Decimal(8000);
			player.enemyRegeneration = new Decimal(100000);
			player.enemyAgility = new Decimal(10000);

			player.enemyHealthTotal = player.enemyStamina.times(10);
			player.enemyHealthCurrent = player.enemyHealthTotal;
		}
	}
}

function restOrFight(i){
	if (i == 1){
		player.isResting = true;
	}
	if (i == 2 && player.friendlyHealthCurrent.gt(0)){
		player.isResting = false;
	}
}

function prevNext(i){
	if (i == 1){
		if (player.enemyLevel.gt(1)){
			if ((player.enemyLevel.minus(changeEnemyLevelNum)).gte(1)){
				player.enemyLevel = player.enemyLevel.minus(changeEnemyLevelNum);
				generateEnemy(player.enemyLevel);
			}
			else {
				player.enemyLevel = new Decimal(1);
				generateEnemy(player.enemyLevel);
			}
		}
		else {
			generateEnemy(player.enemyLevel);
		}
	}
	if (i == 2 && player.enemyLevel.lt(player.maxEnemyLevel)){
		if ((player.enemyLevel.plus(changeEnemyLevelNum)).lte(player.maxEnemyLevel)){
			player.enemyLevel = player.enemyLevel.plus(changeEnemyLevelNum);
			generateEnemy(player.enemyLevel);
		}
		else {
			player.enemyLevel = player.maxEnemyLevel;
			generateEnemy(player.enemyLevel);
		}
	}
}

let changeStatsNum = 0;
let changeEnemyLevelNum = new Decimal(1);
function getNum(e){
	if (e.which == 18){
		changeStatsNum = 1;
		changeEnemyLevelNum = new Decimal(1000);
	}
	else if (e.which == 16){
		changeStatsNum = 2;
		changeEnemyLevelNum = new Decimal(10);
	}
	else if (e.which == 17){
		changeStatsNum = 3;
		changeEnemyLevelNum = new Decimal(100);
	}
}
document.addEventListener("keydown", getNum);
function getNumRelease(e){
	if (e.which == 18){
		changeStatsNum = 0;
		changeEnemyLevelNum = new Decimal(1);
	}
	else if (e.which == 16){
		changeStatsNum = 0;
		changeEnemyLevelNum = new Decimal(1);
	}
	else if (e.which == 17){
		changeStatsNum = 0;
		changeEnemyLevelNum = new Decimal(1);
	}
}
document.addEventListener("keyup", getNumRelease);

function changeStats(stat, way){
	let num = new Decimal(1);
	if (changeStatsNum == 1){
		if (way == "minus"){
			switch (stat){
				case "stamina":
					num = player.friendlyStamina;
					break;
				case "strength":
					num = player.friendlyStrength;
					break;
				case "armor":
					num = player.friendlyArmor;
					break;
				case "regeneration":
					num = player.friendlyRegeneration;
					break;
				case "agility":
					num = player.friendlyAgility;
					break;
			}
		}
		if (way == "plus"){
			num = player.skillpoints;
		}
	}
	else if (changeStatsNum == 2){
		if (way == "minus"){
			switch (stat){
				case "stamina":
					num = Decimal.floor(player.friendlyStamina.times(0.1));
					break;
				case "strength":
					num = Decimal.floor(player.friendlyStrength.times(0.1));
					break;
				case "armor":
					num = Decimal.floor(player.friendlyArmor.times(0.1));
					break;
				case "regeneration":
					num = Decimal.floor(player.friendlyRegeneration.times(0.1));
					break;
				case "agility":
					num = Decimal.floor(player.friendlyAgility.times(0.1));
					break;
			}
		}
		if (way == "plus"){
			num = Decimal.floor(player.skillpoints.times(0.1));
		}
	}
	else if (changeStatsNum == 3){
		if (player.skillpoints.lt(10) && way == "plus"){
			num = player.skillpoints;
		}
		else num = new Decimal(10);

		if (way == "minus"){
			if (stat == "stamina" && player.friendlyStamina.lt(10)){
				num = player.friendlyStamina;
			}
			if (stat == "strength" && player.friendlyStrength.lt(10)){
				num = player.friendlyStrength;
			}
			if (stat == "armor" && player.friendlyArmor.lt(10)){
				num = player.friendlyArmor;
			}
			if (stat == "regeneration" && player.friendlyRegeneration.lt(10)){
				num = player.friendlyRegeneration;
			}
			if (stat == "agility" && player.friendlyAgility.lt(10)){
				num = player.friendlyAgility;
			}
		}
	}

	if (stat == "stamina"){
		if (way == "minus" && player.friendlyStamina.gt(0)){
			player.friendlyStamina = player.friendlyStamina.minus(num);
			player.skillpoints = player.skillpoints.plus(num);
		}
		if (way == "plus" && player.skillpoints.gt(0)){
			player.skillpoints = player.skillpoints.minus(num);
			player.friendlyStamina = player.friendlyStamina.plus(num);
		}
	}
	if (stat == "strength"){
		if (way == "minus" && player.friendlyStrength.gt(0)){
			player.friendlyStrength = player.friendlyStrength.minus(num);
			player.skillpoints = player.skillpoints.plus(num);
		}
		if (way == "plus" && player.skillpoints.gt(0)){
			player.skillpoints = player.skillpoints.minus(num);
			player.friendlyStrength = player.friendlyStrength.plus(num);
		}
	}
	if (stat == "armor"){
		if (way == "minus" && player.friendlyArmor.gt(0)){
			player.friendlyArmor = player.friendlyArmor.minus(num);
			player.skillpoints = player.skillpoints.plus(num);
		}
		if (way == "plus" && player.skillpoints.gt(0)){
			player.skillpoints = player.skillpoints.minus(num);
			player.friendlyArmor = player.friendlyArmor.plus(num);
		}
	}
	if (stat == "regeneration"){
		if (way == "minus" && player.friendlyRegeneration.gt(0)){
			player.friendlyRegeneration = player.friendlyRegeneration.minus(num);
			player.skillpoints = player.skillpoints.plus(num);
		}
		if (way == "plus" && player.skillpoints.gt(0)){
			player.skillpoints = player.skillpoints.minus(num);
			player.friendlyRegeneration = player.friendlyRegeneration.plus(num);
		}
	}
	if (stat == "agility"){
		if (way == "minus" && player.friendlyAgility.gt(0)){
			player.friendlyAgility = player.friendlyAgility.minus(num);
			player.skillpoints = player.skillpoints.plus(num);
		}
		if (way == "plus" && player.skillpoints.gt(0)){
			player.skillpoints = player.skillpoints.minus(num);
			player.friendlyAgility = player.friendlyAgility.plus(num);
		}
	}
}

function changeSuperStats(stat, way){
	let num = new Decimal(1);
	if (changeStatsNum == 1){
		if (way == "minus"){
			switch (stat){
				case "stamina":
					num = player.superStamina
					break;
				case "strength":
					num = player.superStrength;
					break;
				case "armor":
					num = player.superArmor;
					break;
				case "regeneration":
					num = player.superRegeneration;
					break;
				case "agility":
					num = player.superAgility;
					break;
			}
		}
		if (way == "plus"){
			num = player.superSkillpoints;
		}
	}
	else if (changeStatsNum == 2){
		if (way == "minus"){
			switch (stat){
				case "stamina":
					num = Decimal.floor(player.superStamina.times(0.1));
					break;
				case "strength":
					num = Decimal.floor(player.superStrength.times(0.1));
					break;
				case "armor":
					num = Decimal.floor(player.superArmor.times(0.1));
					break;
				case "regeneration":
					num = Decimal.floor(player.superRegeneration.times(0.1));
					break;
				case "agility":
					num = Decimal.floor(player.superAgility.times(0.1));
					break;
			}
		}
		if (way == "plus"){
			num = Decimal.floor(player.superSkillpoints.times(0.1));
		}
	}
	else if (changeStatsNum == 3){
		if (player.superSkillpoints.lt(10) && way == "plus"){
			num = player.superSkillpoints;
		}
		else num = new Decimal(10);

		if (way == "minus"){
			if (stat == "stamina" && player.superStamina.lt(10)){
				num = player.superStamina;
			}
			if (stat == "strength" && player.superStrength.lt(10)){
				num = player.superStrength;
			}
			if (stat == "armor" && player.superArmor.lt(10)){
				num = player.superArmor;
			}
			if (stat == "regeneration" && player.superRegeneration.lt(10)){
				num = player.superRegeneration;
			}
			if (stat == "agility" && player.superAgility.lt(10)){
				num = player.superAgility;
			}
		}
	}
//player.superSkillpoints = new Decimal(5)
	if (stat == "stamina"){
		if (way == "minus" && player.superStamina.gt(0)){
			player.superStamina = player.superStamina.minus(num);
			player.superSkillpoints = player.superSkillpoints.plus(num);
		}
		if (way == "plus" && player.superSkillpoints.gt(0)){
			player.superSkillpoints = player.superSkillpoints.minus(num);
			player.superStamina = player.superStamina.plus(num);
		}
	}
	if (stat == "strength"){
		if (way == "minus" && player.superStrength.gt(0)){
			player.superStrength = player.superStrength.minus(num);
			player.superSkillpoints = player.superSkillpoints.plus(num);
		}
		if (way == "plus" && player.superSkillpoints.gt(0)){
			player.superSkillpoints = player.superSkillpoints.minus(num);
			player.superStrength = player.superStrength.plus(num);
		}
	}
	if (stat == "armor"){
		if (way == "minus" && player.superArmor.gt(0)){
			player.superArmor = player.superArmor.minus(num);
			player.superSkillpoints = player.superSkillpoints.plus(num);
		}
		if (way == "plus" && player.superSkillpoints.gt(0)){
			player.superSkillpoints = player.superSkillpoints.minus(num);
			player.superArmor = player.superArmor.plus(num);
		}
	}
	if (stat == "regeneration"){
		if (way == "minus" && player.superRegeneration.gt(0)){
			player.superRegeneration = player.superRegeneration.minus(num);
			player.superSkillpoints = player.superSkillpoints.plus(num);
		}
		if (way == "plus" && player.superSkillpoints.gt(0)){
			player.superSkillpoints = player.superSkillpoints.minus(num);
			player.superRegeneration = player.superRegeneration.plus(num);
		}
	}
	if (stat == "agility"){
		if (way == "minus" && player.superAgility.gt(0)){
			player.superAgility = player.superAgility.minus(num);
			player.superSkillpoints = player.superSkillpoints.plus(num);
		}
		if (way == "plus" && player.superSkillpoints.gt(0)){
			player.superSkillpoints = player.superSkillpoints.minus(num);
			player.superAgility = player.superAgility.plus(num);
		}
	}
	if (way == "plus" && player.superSkillpoints.lt(1)){
		player.superSkillpoints = new Decimal(0);
	}
}

function selectTalent(talent){
	if (talent == 1 && player.friendlyLevel.gte(10)){
		player.talent1IsActive = true;
		player.talent2IsActive = false;
		player.talent3IsActive = false;
	}
	if (talent == 2 && player.friendlyLevel.gte(10)){
		player.talent1IsActive = false;
		player.talent2IsActive = true;
		player.talent3IsActive = false;
	}
	if (talent == 3 && player.friendlyLevel.gte(10)){
		player.talent1IsActive = false;
		player.talent2IsActive = false;
		player.talent3IsActive = true;
	}
	
	
	if (talent == 4 && player.friendlyLevel.gte(20)){
		player.talent4IsActive = true;
		player.talent5IsActive = false;
		player.talent6IsActive = false;
	}
	if (talent == 5 && player.friendlyLevel.gte(20)){
		player.talent4IsActive = false;
		player.talent5IsActive = true;
		player.talent6IsActive = false;
	}
	if (talent == 6 && player.friendlyLevel.gte(20)){
		player.talent4IsActive = false;
		player.talent5IsActive = false;
		player.talent6IsActive = true;
	}
	
	
	if (talent == 7 && player.friendlyLevel.gte(30)){
		player.talent7IsActive = true;
		player.talent8IsActive = false;
		player.talent9IsActive = false;
	}
	if (talent == 8 && player.friendlyLevel.gte(30)){
		player.talent7IsActive = false;
		player.talent8IsActive = true;
		player.talent9IsActive = false;
	}
	if (talent == 9 && player.friendlyLevel.gte(30)){
		player.talent7IsActive = false;
		player.talent8IsActive = false;
		player.talent9IsActive = true;
	}


	if (talent == 10 && player.friendlyLevel.gte(50)){
		player.talent10IsActive = true;
		player.talent11IsActive = false;
		player.talent12IsActive = false;
	}
	if (talent == 11 && player.friendlyLevel.gte(50)){
		player.talent10IsActive = false;
		player.talent11IsActive = true;
		player.talent12IsActive = false;
	}
	if (talent == 12 && player.friendlyLevel.gte(50)){
		player.talent10IsActive = false;
		player.talent11IsActive = false;
		player.talent12IsActive = true;
	}


	if (talent == 13 && player.friendlyLevel.gte(1000)){
		player.talent13IsActive = true;
		player.talent14IsActive = false;
		player.talent15IsActive = false;
	}
	if (talent == 14 && player.friendlyLevel.gte(1000)){
		player.talent13IsActive = false;
		player.talent14IsActive = true;
		player.talent15IsActive = false;
	}
	if (talent == 15 && player.friendlyLevel.gte(1000)){
		player.talent13IsActive = false;
		player.talent14IsActive = false;
		player.talent15IsActive = true;
	}
}

function buyAtomShopItem(i){
	if (i == 1 && player.atoms.gte(100) && player.atomShopItem1Bought == false){
		player.atoms = player.atoms.minus(100);
		player.atomShopItem1Bought = true;
		player.atomShopItemsBought = player.atomShopItemsBought.plus(1);
	}

	if (i == 2 && player.atoms.gte(500) && player.atomShopItem2Bought == false){
		player.atoms = player.atoms.minus(500);
		player.atomShopItem2Bought = true;
		player.atomShopItemsBought = player.atomShopItemsBought.plus(1);
	}

	if (i == 3 && player.atoms.gte(1000) && player.atomShopItem3Bought == false){
		player.atoms = player.atoms.minus(1000);
		player.atomShopItem3Bought = true;
		player.maxRealityBonus = new Decimal(3);
		player.atomShopItemsBought = player.atomShopItemsBought.plus(1);
	}

	if (i == 4 && player.atoms.gte(1e5) && player.atomShopItem4Bought == false){
		player.atoms = player.atoms.minus(1e5);
		player.atomShopItem4Bought = true;
		player.atomShopItemsBought = player.atomShopItemsBought.plus(1);
	}
	
	if (i == 5 && player.atoms.gte(1e6) && player.atomShopItem5Bought == false){
		player.atoms = player.atoms.minus(1e6);
		player.atomShopItem5Bought = true;
		player.atomShopItemsBought = player.atomShopItemsBought.plus(1);
	}

	if (i == 6 && player.atoms.gte(5e6) && player.atomShopItem6Bought == false){
		player.atoms = player.atoms.minus(5e6);
		player.atomShopItem6Bought = true;
		player.atomShopItemsBought = player.atomShopItemsBought.plus(1);
	}

	if (i == 7 && player.atoms.gte(1e7) && player.atomShopItem7Bought == false){
		player.atoms = player.atoms.minus(1e7);
		player.atomShopItem7Bought = true;
		player.maxRealityBonus = new Decimal(100);
		player.atomShopItemsBought = player.atomShopItemsBought.plus(1);
	}

	if (i == 8 && player.atoms.gte(5e7) && player.atomShopItem8Bought == false){
		player.atoms = player.atoms.minus(5e7);
		player.atomShopItem8Bought = true;
		player.atomShopItemsBought = player.atomShopItemsBought.plus(1);
	}

	if (i == 9 && player.atoms.gte(1e8) && player.atomShopItem9Bought == false){
		player.atoms = player.atoms.minus(1e8);
		player.atomShopItem9Bought = true;
		player.atomShopItemsBought = player.atomShopItemsBought.plus(1);
	}

	if (i == 10 && player.atoms.gte(1e11) && player.atomShopItem10Bought == false){
		player.atoms = player.atoms.minus(1e11);
		player.atomShopItem10Bought = true;
		player.atomShopItemsBought = player.atomShopItemsBought.plus(1);
	}

	if (i == 11 && player.atoms.gte(1e13) && player.atomShopItem11Bought == false){
		player.atoms = player.atoms.minus(1e13);
		player.atomShopItem11Bought = true;
		player.atomShopItemsBought = player.atomShopItemsBought.plus(1);
	}

	if (i == 12 && player.atoms.gte(1e16) && player.atomShopItem12Bought == false){
		player.atoms = player.atoms.minus(1e16);
		player.atomShopItem12Bought = true;
		player.atomShopItemsBought = player.atomShopItemsBought.plus(1);
	}

	if (i == 13 && player.atoms.gte(1e30) && player.atomShopItem13Bought == false){
		player.atoms = player.atoms.minus(1e30);
		player.atomShopItem13Bought = true;
		player.atomShopItemsBought = player.atomShopItemsBought.plus(1);
		player.atomShopItem13Effect = new Decimal(10);
	}

	if (i == 14 && player.atoms.gte(1e50) && player.atomShopItem14Bought == false){
		player.atoms = player.atoms.minus(1e50);
		player.atomShopItem14Bought = true;
		player.atomShopItemsBought = player.atomShopItemsBought.plus(1);
	}

	if (i == 15 && player.atoms.gte(1e100) && player.atomShopItem15Bought == false){
		player.atoms = player.atoms.minus(1e100);
		player.atomShopItem15Bought = true;
		player.atomShopItemsBought = player.atomShopItemsBought.plus(1);
	}

	if (i == 16 && player.atoms.gte("1e500") && player.atomShopItem16Bought == false){
		player.atoms = player.atoms.minus("1e500");
		player.atomShopItem16Bought = true;
		player.atomShopItemsBought = player.atomShopItemsBought.plus(1);
	}

	if (i == 17 && player.atoms.gte("1e550") && player.atomShopItem17Bought == false){
		player.atoms = player.atoms.minus("1e550");
		player.atomShopItem17Bought = true;
		player.atomShopItemsBought = player.atomShopItemsBought.plus(1);
	}

	if (i == 18 && player.atoms.gte("1e600") && player.atomShopItem18Bought == false){
		player.atoms = player.atoms.minus("1e600");
		player.atomShopItem18Bought = true;
		player.atomShopItemsBought = player.atomShopItemsBought.plus(1);
	}

	if (i == 19 && player.atoms.gte("1e650") && player.atomShopItem19Bought == false){
		player.atoms = player.atoms.minus("1e650");
		player.atomShopItem19Bought = true;
		player.atomShopItemsBought = player.atomShopItemsBought.plus(1);
	}

	if (i == 20 && player.atoms.gte("1e700") && player.atomShopItem20Bought == false){
		player.atoms = player.atoms.minus("1e700");
		player.atomShopItem20Bought = true;
		player.atomShopItemsBought = player.atomShopItemsBought.plus(1);
	}
}

function saveBuild(num){
	//var totalSkillpoints = player.skillpoints.plus(player.friendlyStamina).plus(player.friendlyStrength).plus(player.friendlyArmor).plus(player.friendlyRegeneration).plus(player.friendlyAgility).minus(5);
	let totalSkillpoints = (player.friendlyLevel.minus(1)).times(3).plus(9).plus(player.atomShopItem1Skillpoints).plus(player.atomShopItem9Skillpoints);
	
	let totalSuperSkillpoints = player.superSkillpoints.plus(player.superStamina).plus(player.superStrength).plus(player.superArmor).plus(player.superRegeneration).plus(player.superAgility);
	
	if (num == 1){
		player.build1Exists = true;
		player.build1TotalSkillpoints = totalSkillpoints;
		player.build1TotalSuperSkillpoints = totalSuperSkillpoints;
		
		player.build1Stamina = player.friendlyStamina;
		player.build1Strength = player.friendlyStrength;
		player.build1Armor = player.friendlyArmor;
		player.build1Regeneration = player.friendlyRegeneration;
		player.build1Agility = player.friendlyAgility;
		
		player.build1SuperStamina = player.superStamina;
		player.build1SuperStrength = player.superStrength;
		player.build1SuperArmor = player.superArmor;
		player.build1SuperRegeneration = player.superRegeneration;
		player.build1SuperAgility = player.superAgility;
		
		if (player.talent1IsActive){
			player.build1TalentRow1 = 1;
		}
		if (player.talent2IsActive){
			player.build1TalentRow1 = 2;
		}
		if (player.talent3IsActive){
			player.build1TalentRow1 = 3;
		}
		
		if (player.talent4IsActive){
			player.build1TalentRow2 = 4;
		}
		if (player.talent5IsActive){
			player.build1TalentRow2 = 5;
		}
		if (player.talent6IsActive){
			player.build1TalentRow2 = 6;
		}
		
		if (player.talent7IsActive){
			player.build1TalentRow3 = 7;
		}
		if (player.talent8IsActive){
			player.build1TalentRow3 = 8;
		}
		if (player.talent9IsActive){
			player.build1TalentRow3 = 9;
		}
		
		if (player.talent10IsActive){
			player.build1TalentRow4 = 10;
		}
		if (player.talent11IsActive){
			player.build1TalentRow4 = 11;
		}
		if (player.talent12IsActive){
			player.build1TalentRow4 = 12;
		}

		if (player.talent13IsActive){
			player.build1TalentRow5 = 13;
		}
		if (player.talent14IsActive){
			player.build1TalentRow5 = 14;
		}
		if (player.talent15IsActive){
			player.build1TalentRow5 = 15;
		}
	}
	
	if (num == 2){
		player.build2Exists = true;
		player.build2TotalSkillpoints = totalSkillpoints;
		player.build2TotalSuperSkillpoints = totalSuperSkillpoints;
		
		player.build2Stamina = player.friendlyStamina;
		player.build2Strength = player.friendlyStrength;
		player.build2Armor = player.friendlyArmor;
		player.build2Regeneration = player.friendlyRegeneration;
		player.build2Agility = player.friendlyAgility;
		
		player.build2SuperStamina = player.superStamina;
		player.build2SuperStrength = player.superStrength;
		player.build2SuperArmor = player.superArmor;
		player.build2SuperRegeneration = player.superRegeneration;
		player.build2SuperAgility = player.superAgility;
		
		if (player.talent1IsActive){
			player.build2TalentRow1 = 1;
		}
		if (player.talent2IsActive){
			player.build2TalentRow1 = 2;
		}
		if (player.talent3IsActive){
			player.build2TalentRow1 = 3;
		}
		
		if (player.talent4IsActive){
			player.build2TalentRow2 = 4;
		}
		if (player.talent5IsActive){
			player.build2TalentRow2 = 5;
		}
		if (player.talent6IsActive){
			player.build2TalentRow2 = 6;
		}
		
		if (player.talent7IsActive){
			player.build2TalentRow3 = 7;
		}
		if (player.talent8IsActive){
			player.build2TalentRow3 = 8;
		}
		if (player.talent9IsActive){
			player.build2TalentRow3 = 9;
		}
		
		if (player.talent10IsActive){
			player.build2TalentRow4 = 10;
		}
		if (player.talent11IsActive){
			player.build2TalentRow4 = 11;
		}
		if (player.talent12IsActive){
			player.build2TalentRow4 = 12;
		}

		if (player.talent13IsActive){
			player.build2TalentRow5 = 13;
		}
		if (player.talent14IsActive){
			player.build2TalentRow5 = 14;
		}
		if (player.talent15IsActive){
			player.build2TalentRow5 = 15;
		}
	}
	
	if (num == 3){
		player.build3Exists = true;
		player.build3TotalSkillpoints = totalSkillpoints;
		player.build3TotalSuperSkillpoints = totalSuperSkillpoints;
		
		player.build3Stamina = player.friendlyStamina;
		player.build3Strength = player.friendlyStrength;
		player.build3Armor = player.friendlyArmor;
		player.build3Regeneration = player.friendlyRegeneration;
		player.build3Agility = player.friendlyAgility;
		
		player.build3SuperStamina = player.superStamina;
		player.build3SuperStrength = player.superStrength;
		player.build3SuperArmor = player.superArmor;
		player.build3SuperRegeneration = player.superRegeneration;
		player.build3SuperAgility = player.superAgility;
		
		if (player.talent1IsActive){
			player.build3TalentRow1 = 1;
		}
		if (player.talent2IsActive){
			player.build3TalentRow1 = 2;
		}
		if (player.talent3IsActive){
			player.build3TalentRow1 = 3;
		}
		
		if (player.talent4IsActive){
			player.build3TalentRow2 = 4;
		}
		if (player.talent5IsActive){
			player.build3TalentRow2 = 5;
		}
		if (player.talent6IsActive){
			player.build3TalentRow2 = 6;
		}
		
		if (player.talent7IsActive){
			player.build3TalentRow3 = 7;
		}
		if (player.talent8IsActive){
			player.build3TalentRow3 = 8;
		}
		if (player.talent9IsActive){
			player.build3TalentRow3 = 9;
		}
		
		if (player.talent10IsActive){
			player.build3TalentRow4 = 10;
		}
		if (player.talent11IsActive){
			player.build3TalentRow4 = 11;
		}
		if (player.talent12IsActive){
			player.build3TalentRow4 = 12;
		}

		if (player.talent13IsActive){
			player.build3TalentRow5 = 13;
		}
		if (player.talent14IsActive){
			player.build3TalentRow5 = 14;
		}
		if (player.talent15IsActive){
			player.build3TalentRow5 = 15;
		}
	}
	
	if (num == 4){
		player.build4Exists = true;
		player.build4TotalSkillpoints = totalSkillpoints;
		player.build4TotalSuperSkillpoints = totalSuperSkillpoints;
		
		player.build4Stamina = player.friendlyStamina;
		player.build4Strength = player.friendlyStrength;
		player.build4Armor = player.friendlyArmor;
		player.build4Regeneration = player.friendlyRegeneration;
		player.build4Agility = player.friendlyAgility;
		
		player.build4SuperStamina = player.superStamina;
		player.build4SuperStrength = player.superStrength;
		player.build4SuperArmor = player.superArmor;
		player.build4SuperRegeneration = player.superRegeneration;
		player.build4SuperAgility = player.superAgility;
		
		if (player.talent1IsActive){
			player.build4TalentRow1 = 1;
		}
		if (player.talent2IsActive){
			player.build4TalentRow1 = 2;
		}
		if (player.talent3IsActive){
			player.build4TalentRow1 = 3;
		}
		
		if (player.talent4IsActive){
			player.build4TalentRow2 = 4;
		}
		if (player.talent5IsActive){
			player.build4TalentRow2 = 5;
		}
		if (player.talent6IsActive){
			player.build4TalentRow2 = 6;
		}
		
		if (player.talent7IsActive){
			player.build4TalentRow3 = 7;
		}
		if (player.talent8IsActive){
			player.build4TalentRow3 = 8;
		}
		if (player.talent9IsActive){
			player.build4TalentRow3 = 9;
		}
		
		if (player.talent10IsActive){
			player.build4TalentRow4 = 10;
		}
		if (player.talent11IsActive){
			player.build4TalentRow4 = 11;
		}
		if (player.talent12IsActive){
			player.build4TalentRow4 = 12;
		}

		if (player.talent13IsActive){
			player.build4TalentRow5 = 13;
		}
		if (player.talent14IsActive){
			player.build4TalentRow5 = 14;
		}
		if (player.talent15IsActive){
			player.build4TalentRow5 = 15;
		}
	}
}

function loadBuild(num){
	//var totalSkillpoints = player.skillpoints.plus(player.friendlyStamina).plus(player.friendlyStrength).plus(player.friendlyArmor).plus(player.friendlyRegeneration).plus(player.friendlyAgility).minus(5);
	let totalSkillpoints = (player.friendlyLevel.minus(1)).times(3).plus(9).plus(player.atomShopItem1Skillpoints).plus(player.atomShopItem9Skillpoints);

	let totalSuperSkillpoints = player.superSkillpoints.plus(player.superStamina).plus(player.superStrength).plus(player.superArmor).plus(player.superRegeneration).plus(player.superAgility);
	
	if (player["build" + num + "Exists"] == true){
		player.friendlyStamina = new Decimal(0);
		player.friendlyStrength = new Decimal(0);
		player.friendlyArmor = new Decimal(0);
		player.friendlyRegeneration = new Decimal(0);
		player.friendlyAgility = new Decimal(0);
		
		player.superStamina = new Decimal(0);
		player.superStrength = new Decimal(0);
		player.superArmor = new Decimal(0);
		player.superRegeneration = new Decimal(0);
		player.superAgility = new Decimal(0);
	}
	
	if (num == 1 && player.build1Exists == true){
		if (player.build1TotalSkillpoints.lte(totalSkillpoints)){
			player.friendlyStamina = player.build1Stamina;
			player.friendlyStrength = player.build1Strength;
			player.friendlyArmor = player.build1Armor;
			player.friendlyRegeneration = player.build1Regeneration;
			player.friendlyAgility = player.build1Agility;

			player.skillpoints = totalSkillpoints.minus(player.friendlyStamina).minus(player.friendlyStrength).minus(player.friendlyArmor).minus(player.friendlyRegeneration).minus(player.friendlyAgility);
		}
		else {
			player.friendlyStamina = Decimal.floor((player.build1Stamina.div(player.build1TotalSkillpoints)).times(totalSkillpoints));
			player.friendlyStrength = Decimal.floor((player.build1Strength.div(player.build1TotalSkillpoints)).times(totalSkillpoints));
			player.friendlyArmor = Decimal.floor((player.build1Armor.div(player.build1TotalSkillpoints)).times(totalSkillpoints));
			player.friendlyRegeneration = Decimal.floor((player.build1Regeneration.div(player.build1TotalSkillpoints)).times(totalSkillpoints));
			player.friendlyAgility = Decimal.floor((player.build1Agility.div(player.build1TotalSkillpoints)).times(totalSkillpoints));
			
			player.skillpoints = totalSkillpoints.minus(player.friendlyStamina).minus(player.friendlyStrength).minus(player.friendlyArmor).minus(player.friendlyRegeneration).minus(player.friendlyAgility);
			
			//console.log(totalSkillpoints);
			//console.log(player.skillpoints.plus(player.friendlyStamina.plus(player.friendlyStrength.plus(player.friendlyArmor.plus(player.friendlyRegeneration).plus(player.friendlyAgility)))));
		}
		
		player.superStamina = player.build1SuperStamina;
		player.superStrength = player.build1SuperStrength;
		player.superArmor = player.build1SuperArmor;
		player.superRegeneration = player.build1SuperRegeneration;
		player.superAgility = player.build1SuperAgility;
		
		player.superSkillpoints = totalSuperSkillpoints.minus(player.superStamina.plus(player.superStrength.plus(player.superArmor.plus(player.superRegeneration.plus(player.superAgility)))));

		/*if (player.build1TotalSuperSkillpoints.lte(totalSuperSkillpoints)){
			player.superStamina = player.build1SuperStamina;
			player.superStrength = player.build1SuperStrength;
			player.superArmor = player.build1SuperArmor;
			player.superRegeneration = player.build1SuperRegeneration;
			player.superAgility = player.build1SuperAgility;
			
			player.superSkillpoints = totalSuperSkillpoints.minus(player.build1TotalSuperSkillpoints);
		}
		else {
			player.superStamina = player.superStamina.plus(Decimal.floor((player.build1SuperStamina.div(player.build1TotalSuperSkillpoints)).times(totalSuperSkillpoints)));
			player.superStrength = player.superStrength.plus(Decimal.floor((player.build1SuperStrength.div(player.build1TotalSuperSkillpoints)).times(totalSuperSkillpoints)));
			player.superArmor = player.superArmor.plus(Decimal.floor((player.build1SuperArmor.div(player.build1TotalSuperSkillpoints)).times(totalSuperSkillpoints)));
			player.superRegeneration = player.superRegeneration.plus(Decimal.floor((player.build1SuperRegeneration.div(player.build1TotalSuperSkillpoints)).times(totalSuperSkillpoints)));
			player.superAgility = player.superAgility.plus(Decimal.floor((player.build1SuperAgility.div(player.build1TotalSuperSkillpoints)).times(totalSuperSkillpoints)));
			
			player.superSkillpoints = totalSuperSkillpoints.minus(player.superStamina).minus(player.superStrength).minus(player.superArmor).minus(player.superRegeneration).minus(player.superAgility);
		}*/
		selectTalent(player.build1TalentRow1);
		selectTalent(player.build1TalentRow2);
		selectTalent(player.build1TalentRow3);
		selectTalent(player.build1TalentRow4);
		selectTalent(player.build1TalentRow5);
	}
	
	if (num == 2 && player.build2Exists == true){
		if (player.build2TotalSkillpoints.lte(totalSkillpoints)){
			player.friendlyStamina = player.build2Stamina;
			player.friendlyStrength = player.build2Strength;
			player.friendlyArmor = player.build2Armor;
			player.friendlyRegeneration = player.build2Regeneration;
			player.friendlyAgility = player.build2Agility;
			
			player.skillpoints = totalSkillpoints.minus(player.friendlyStamina).minus(player.friendlyStrength).minus(player.friendlyArmor).minus(player.friendlyRegeneration).minus(player.friendlyAgility);
		}
		else {
			player.friendlyStamina = Decimal.floor((player.build2Stamina.div(player.build2TotalSkillpoints)).times(totalSkillpoints));
			player.friendlyStrength = Decimal.floor((player.build2Strength.div(player.build2TotalSkillpoints)).times(totalSkillpoints));
			player.friendlyArmor = Decimal.floor((player.build2Armor.div(player.build2TotalSkillpoints)).times(totalSkillpoints));
			player.friendlyRegeneration = Decimal.floor((player.build2Regeneration.div(player.build2TotalSkillpoints)).times(totalSkillpoints));
			player.friendlyAgility = Decimal.floor((player.build2Agility.div(player.build2TotalSkillpoints)).times(totalSkillpoints));
			
			player.skillpoints = totalSkillpoints.minus(player.friendlyStamina).minus(player.friendlyStrength).minus(player.friendlyArmor).minus(player.friendlyRegeneration).minus(player.friendlyAgility);
		
			//console.log(totalSkillpoints);
			//console.log(player.skillpoints.plus(player.friendlyStamina.plus(player.friendlyStrength.plus(player.friendlyArmor.plus(player.friendlyRegeneration).plus(player.friendlyAgility)))));
		}
		
		player.superStamina = player.build2SuperStamina;
		player.superStrength = player.build2SuperStrength;
		player.superArmor = player.build2SuperArmor;
		player.superRegeneration = player.build2SuperRegeneration;
		player.superAgility = player.build2SuperAgility;
			
		player.superSkillpoints = totalSuperSkillpoints.minus(player.superStamina.plus(player.superStrength.plus(player.superArmor.plus(player.superRegeneration.plus(player.superAgility)))));

		/*if (player.build2TotalSuperSkillpoints.lte(totalSuperSkillpoints)){
			player.superStamina = player.build2SuperStamina;
			player.superStrength = player.build2SuperStrength;
			player.superArmor = player.build2SuperArmor;
			player.superRegeneration = player.build2SuperRegeneration;
			player.superAgility = player.build2SuperAgility;
			
			player.superSkillpoints = totalSuperSkillpoints.minus(player.build2TotalSuperSkillpoints);
		}
		else {
			player.superStamina = player.superStamina.plus(Decimal.floor((player.build2SuperStamina.div(player.build2TotalSuperSkillpoints)).times(totalSuperSkillpoints)));
			player.superStrength = player.superStrength.plus(Decimal.floor((player.build2SuperStrength.div(player.build2TotalSuperSkillpoints)).times(totalSuperSkillpoints)));
			player.superArmor = player.superArmor.plus(Decimal.floor((player.build2SuperArmor.div(player.build2TotalSuperSkillpoints)).times(totalSuperSkillpoints)));
			player.superRegeneration = player.superRegeneration.plus(Decimal.floor((player.build2SuperRegeneration.div(player.build2TotalSuperSkillpoints)).times(totalSuperSkillpoints)));
			player.superAgility = player.superAgility.plus(Decimal.floor((player.build2SuperAgility.div(player.build2TotalSuperSkillpoints)).times(totalSuperSkillpoints)));
			
			player.superSkillpoints = totalSuperSkillpoints.minus(player.superStamina).minus(player.superStrength).minus(player.superArmor).minus(player.superRegeneration).minus(player.superAgility);
		}*/
		selectTalent(player.build2TalentRow1);
		selectTalent(player.build2TalentRow2);
		selectTalent(player.build2TalentRow3);
		selectTalent(player.build2TalentRow4);
		selectTalent(player.build2TalentRow5);
	}
	
	if (num == 3 && player.build3Exists == true){
		if (player.build3TotalSkillpoints.lte(totalSkillpoints)){
			player.friendlyStamina = player.build3Stamina;
			player.friendlyStrength = player.build3Strength;
			player.friendlyArmor = player.build3Armor;
			player.friendlyRegeneration = player.build3Regeneration;
			player.friendlyAgility = player.build3Agility;
			
			player.skillpoints = totalSkillpoints.minus(player.friendlyStamina).minus(player.friendlyStrength).minus(player.friendlyArmor).minus(player.friendlyRegeneration).minus(player.friendlyAgility);
		}
		else {
			player.friendlyStamina = Decimal.floor((player.build3Stamina.div(player.build3TotalSkillpoints)).times(totalSkillpoints));
			player.friendlyStrength = Decimal.floor((player.build3Strength.div(player.build3TotalSkillpoints)).times(totalSkillpoints));
			player.friendlyArmor = Decimal.floor((player.build3Armor.div(player.build3TotalSkillpoints)).times(totalSkillpoints));
			player.friendlyRegeneration = Decimal.floor((player.build3Regeneration.div(player.build3TotalSkillpoints)).times(totalSkillpoints));
			player.friendlyAgility = Decimal.floor((player.build3Agility.div(player.build3TotalSkillpoints)).times(totalSkillpoints));
			
			player.skillpoints = totalSkillpoints.minus(player.friendlyStamina).minus(player.friendlyStrength).minus(player.friendlyArmor).minus(player.friendlyRegeneration).minus(player.friendlyAgility);
		}
		
		player.superStamina = player.build3SuperStamina;
		player.superStrength = player.build3SuperStrength;
		player.superArmor = player.build3SuperArmor;
		player.superRegeneration = player.build3SuperRegeneration;
		player.superAgility = player.build3SuperAgility;
			
		player.superSkillpoints = totalSuperSkillpoints.minus(player.superStamina.plus(player.superStrength.plus(player.superArmor.plus(player.superRegeneration.plus(player.superAgility)))));

		/*if (player.build3TotalSuperSkillpoints.lte(totalSuperSkillpoints)){
			player.superStamina = player.build3SuperStamina;
			player.superStrength = player.build3SuperStrength;
			player.superArmor = player.build3SuperArmor;
			player.superRegeneration = player.build3SuperRegeneration;
			player.superAgility = player.build3SuperAgility;
			
			player.superSkillpoints = totalSuperSkillpoints.minus(player.build3TotalSuperSkillpoints);
		}
		else {
			player.superStamina = player.superStamina.plus(Decimal.floor((player.build3SuperStamina.div(player.build3TotalSuperSkillpoints)).times(totalSuperSkillpoints)));
			player.superStrength = player.superStrength.plus(Decimal.floor((player.build3SuperStrength.div(player.build3TotalSuperSkillpoints)).times(totalSuperSkillpoints)));
			player.superArmor = player.superArmor.plus(Decimal.floor((player.build3SuperArmor.div(player.build3TotalSuperSkillpoints)).times(totalSuperSkillpoints)));
			player.superRegeneration = player.superRegeneration.plus(Decimal.floor((player.build3SuperRegeneration.div(player.build3TotalSuperSkillpoints)).times(totalSuperSkillpoints)));
			player.superAgility = player.superAgility.plus(Decimal.floor((player.build3SuperAgility.div(player.build3TotalSuperSkillpoints)).times(totalSuperSkillpoints)));
			
			player.superSkillpoints = totalSuperSkillpoints.minus(player.superStamina).minus(player.superStrength).minus(player.superArmor).minus(player.superRegeneration).minus(player.superAgility);
		}*/
		selectTalent(player.build3TalentRow1);
		selectTalent(player.build3TalentRow2);
		selectTalent(player.build3TalentRow3);
		selectTalent(player.build3TalentRow4);
		selectTalent(player.build3TalentRow5);
	}
	
	if (num == 4 && player.build4Exists == true){
		if (player.build4TotalSkillpoints.lte(totalSkillpoints)){
			player.friendlyStamina = player.build4Stamina;
			player.friendlyStrength = player.build4Strength;
			player.friendlyArmor = player.build4Armor;
			player.friendlyRegeneration = player.build4Regeneration;
			player.friendlyAgility = player.build4Agility;
			
			player.skillpoints = totalSkillpoints.minus(player.friendlyStamina).minus(player.friendlyStrength).minus(player.friendlyArmor).minus(player.friendlyRegeneration).minus(player.friendlyAgility);
		}
		else {
			player.friendlyStamina = Decimal.floor((player.build4Stamina.div(player.build4TotalSkillpoints)).times(totalSkillpoints));
			player.friendlyStrength = Decimal.floor((player.build4Strength.div(player.build4TotalSkillpoints)).times(totalSkillpoints));
			player.friendlyArmor = Decimal.floor((player.build4Armor.div(player.build4TotalSkillpoints)).times(totalSkillpoints));
			player.friendlyRegeneration = Decimal.floor((player.build4Regeneration.div(player.build4TotalSkillpoints)).times(totalSkillpoints));
			player.friendlyAgility = Decimal.floor((player.build4Agility.div(player.build4TotalSkillpoints)).times(totalSkillpoints));
			
			player.skillpoints = totalSkillpoints.minus(player.friendlyStamina).minus(player.friendlyStrength).minus(player.friendlyArmor).minus(player.friendlyRegeneration).minus(player.friendlyAgility);
		}
		
		player.superStamina = player.build4SuperStamina;
		player.superStrength = player.build4SuperStrength;
		player.superArmor = player.build4SuperArmor;
		player.superRegeneration = player.build4SuperRegeneration;
		player.superAgility = player.build4SuperAgility;
		
		player.superSkillpoints = totalSuperSkillpoints.minus(player.superStamina.plus(player.superStrength.plus(player.superArmor.plus(player.superRegeneration.plus(player.superAgility)))));

		/*if (player.build4TotalSuperSkillpoints.lte(totalSuperSkillpoints)){
			player.superStamina = player.build4SuperStamina;
			player.superStrength = player.build4SuperStrength;
			player.superArmor = player.build4SuperArmor;
			player.superRegeneration = player.build4SuperRegeneration;
			player.superAgility = player.build4SuperAgility;
			
			player.superSkillpoints = totalSuperSkillpoints.minus(player.build4TotalSuperSkillpoints);
		}
		else {
			player.superStamina = player.superStamina.plus(Decimal.floor((player.build4SuperStamina.div(player.build4TotalSuperSkillpoints)).times(totalSuperSkillpoints)));
			player.superStrength = player.superStrength.plus(Decimal.floor((player.build4SuperStrength.div(player.build4TotalSuperSkillpoints)).times(totalSuperSkillpoints)));
			player.superArmor = player.superArmor.plus(Decimal.floor((player.build4SuperArmor.div(player.build4TotalSuperSkillpoints)).times(totalSuperSkillpoints)));
			player.superRegeneration = player.superRegeneration.plus(Decimal.floor((player.build4SuperRegeneration.div(player.build4TotalSuperSkillpoints)).times(totalSuperSkillpoints)));
			player.superAgility = player.superAgility.plus(Decimal.floor((player.build4SuperAgility.div(player.build4TotalSuperSkillpoints)).times(totalSuperSkillpoints)));
			
			player.superSkillpoints = totalSuperSkillpoints.minus(player.superStamina).minus(player.superStrength).minus(player.superArmor).minus(player.superRegeneration).minus(player.superAgility);
		}*/
		selectTalent(player.build4TalentRow1);
		selectTalent(player.build4TalentRow2);
		selectTalent(player.build4TalentRow3);
		selectTalent(player.build4TalentRow4);
		selectTalent(player.build4TalentRow5);
	}
}

function retire(){
	if (player.friendlyLevel.gte(15)){
		player.superSkillpoints = player.superSkillpoints.plus(Decimal.floor((player.friendlyLevel.div(10)).pow(player.atomShopItem11Effect)));
		player.skillpoints = player.atomShopItem1Skillpoints.plus(player.atomShopItem9Skillpoints);
		
		player.friendlyLevel = new Decimal(1);
		player.friendlyStamina = new Decimal(3);
		player.friendlyHealthTotal = new Decimal(50);
		player.friendlyHealthCurrent = new Decimal(50);
		player.friendlyStrength = new Decimal(3);
		player.friendlyArmor = new Decimal(1);
		player.friendlyRegeneration = new Decimal(1);
		player.friendlyAgility = new Decimal(1);

		player.enemyLevel = new Decimal(1);
		player.enemyStamina = new Decimal(5);
		player.enemyHealthTotal = new Decimal(50);
		player.enemyHealthCurrent = new Decimal(50);
		player.enemyStrength = new Decimal(1);
		player.enemyArmor = new Decimal(1);
		player.enemyRegeneration = new Decimal(1);
		player.enemyAgility = new Decimal(1);

		player.currentXp = new Decimal(0);
		player.needToLvlUpXp = new Decimal(50);
		
		player.isLegendary = false;
		
		player.isResting = true;
		
		player.talent1Effect = new Decimal(0);
		player.talent1IsActive = false;
		player.talent2Effect = new Decimal(0);
		player.talent2IsActive = false;
		player.talent3Effect = new Decimal(0);
		player.talent3IsActive = false;
		player.talent4Effect = new Decimal(0);
		player.talent4IsActive = false;
		player.talent5Effect = new Decimal(0);
		player.talent5IsActive = false;
		player.talent6Effect = new Decimal(0);
		player.talent6IsActive = false;
		player.talent7Effect = new Decimal(0);
		player.talent7IsActive = false;
		player.talent8Effect = new Decimal(0);
		player.talent8IsActive = false;
		player.talent9Effect = new Decimal(0);
		player.talent9IsActive = false;
		player.talent10Effect = new Decimal(0);
		player.talent10IsActive = false;
		player.talent11Effect = new Decimal(0);
		player.talent11IsActive = false;
		player.talent12Effect = new Decimal(0);
		player.talent12IsActive = false;
		player.talent13Effect = new Decimal(0);
		player.talent13IsActive = false;
		player.talent14Effect = new Decimal(0);
		player.talent14IsActive = false;
		player.talent15Effect = new Decimal(0);
		player.talent15IsActive = false;
		
		generateEnemy(player.enemyLevel);
	}	
	let totalSuperSkillpoints = player.superSkillpoints.plus(player.superStamina).plus(player.superStrength).plus(player.superArmor).plus(player.superRegeneration).plus(player.superAgility);
	if (totalSuperSkillpoints.gt(player.highestEnemyLevel)){
		player.superSkillpoints = player.highestEnemyLevel.minus((player.superStamina).plus(player.superStrength).plus(player.superArmor).plus(player.superRegeneration).plus(player.superAgility));
	}
}

function updateGUI(){
	var omegaEffect = new Decimal(1);
	if ((Decimal.log10(Decimal.log10(player.omega))).gt(1)){
		omegaEffect = new Decimal(1).plus(Decimal.log10(Decimal.log10(player.omega)));
	}
	
	document.getElementById("gold").textContent = "You have " + format(player.gold, 1) + " Energy";
	document.getElementById("goldPerSec").textContent = "You're getting " + format((player.firstAmount.times(player.firstFinalMult)), 1) + " Energy per second";
	document.getElementById("allMultButton").innerHTML = "Multiply all generators by " + format(player.allMultGainFinal, 2) + "<br>Bought: " + format(player.allMultBought, 0) + "<br>Current multiplier: " + format(player.allMultFinal, 2) + "<br>Cost: " + format(player.allMultFinalCost, 0);
	document.getElementById("electricity").textContent = "You have " + format(player.electricity, 1) + " Electricity";
	document.getElementById("electricityPerSec").textContent = "You're getting " + format(player.firstExpansionGeneratorAmount.times(player.firstExpansionGeneratorFinalMult), 1) + " Electricity per second";
	document.getElementById("electricityEffect").innerHTML = "It divides your all mult cost by " + format(new Decimal(player.electricity.plus(1).pow(15).pow(player.electricityEffectFromThirdBetaUpgrade)).pow(omegaEffect), 0) + "x";
	if (player.omega.gt(1)){
		document.getElementById("omegaEffect").innerHTML = "It increases electricity effect by ^" + format(new Decimal(1).plus(Decimal.log10(Decimal.log10(player.omega))), 2);
	}
	else document.getElementById("omegaEffect").innerText = "It increases electricity effect by " + "1x";
	document.getElementById("expansionPointMult").innerHTML = "Multiply EP gain by 2x<br>Current: " + format(player.expansionPointMult, 0) + "x<br>Cost: " + format(player.expansionPointMultCost, 0) + " EP";
	getExpansionUpgradeText();
	document.getElementById("omega").textContent = "You have " + format(player.omega, 1) + " Omega";
	document.getElementById("omegaPerSec").textContent = "You're getting " + format(player.firstOmegaGeneratorAmount.times(player.firstOmegaGeneratorFinalMult), 1) + " Omega per second";
	document.getElementById("omegaPointMult").innerHTML = "Multiply OP gain by 2x<br>Current: " + format(player.omegaPointMult, 0) + "x<br>Cost: " + format(player.omegaPointMultCost, 0) + " EP";
	document.getElementById("omegaUpgradeCurrentOmega").innerText = "You currently have " + format(player.omega, 2) + " Omega";
	document.getElementById("realityEnergy").textContent = "You have " + format(player.realityEnergy, 1) + " Reality Energy";
	document.getElementById("realityEnergyPerSec").textContent = "You're getting " + format(player.firstRealityGeneratorAmount.times(player.firstRealityGeneratorFinalMult), 1) + " Reality Energy per second";
	document.getElementById("expansionAmountText").textContent = "You have " + format(player.expansionPoints) + " Expansion Points";
	document.getElementById("omegaAmountText").textContent = "You have " + format(player.omegaPoints) + " Omega Points";
	document.getElementById("realityAmountText").textContent = "You have " + format(player.realityPoints) + " Reality Points";
	getOmegaUpgradeText();
	
	document.getElementById("realityBonus1").textContent = format(new Decimal(1).plus(player.realityEnergy.pow(2)), 2) + "x to all Generators";
	document.getElementById("realityBonus2").textContent = format(new Decimal(1).plus(player.realityEnergy), 2) + "x to all Expansion Generators";
	document.getElementById("realityBonus3").textContent = format(new Decimal(1).plus(Decimal.log10(player.realityEnergy.plus(1))), 2) + "x to all Omega Generators";
	document.getElementById("realityBonus4").textContent = format(new Decimal(1).plus(Decimal.sqrt(player.realityEnergy)), 2) + "x to Expansion Points";
	document.getElementById("realityBonus5").textContent = format(new Decimal(1).plus(Decimal.log10(player.realityEnergy.plus(1))), 2) + "x to Omega Points";
	document.getElementById("realityBonus6").textContent = format(new Decimal(1).plus(player.realityEnergy), 2) + "x to DPS and GPS";
	
	if (player.hasUnlockedExpansion == false){
		document.getElementById("expansionAmountText").classList.add("locked");
	}
	else document.getElementById("expansionAmountText").classList.remove("locked");
	
	if (player.hasUnlockedOmega == false){
		document.getElementById("omegaAmountText").classList.add("locked");
	}
	else document.getElementById("omegaAmountText").classList.remove("locked");
	
	if (player.expansionPoints.lt(1e75)){
		document.getElementById("omegaButton").classList.add("locked");
	}
	else document.getElementById("omegaButton").classList.remove("locked");
	
	document.getElementById("omegaButtonText").innerHTML = "BECOME OMEGA" + "<br>Become Omega for " + format(Decimal.floor(Decimal.pow((Decimal.log10(new Decimal(player.expansionPoints)).div(75)), Decimal.log10(Decimal.log10(player.expansionPoints)).plus(1)).times(player.omegaPointMultFinal)), 0) + " Omega Points";
	
	if (player.omegaPoints.lt(1e16)){
		document.getElementById("realityButton").classList.add("locked");
	}
	else document.getElementById("realityButton").classList.remove("locked");
	
	document.getElementById("realityButtonText").innerHTML = "REACH REALITY" + "<br>Reach reality for " + format(Decimal.floor((Decimal.pow(10, Decimal.log10(player.omegaPoints).div(16))).div(10)), 0) + " Reality Points";
	
	if (player.hasUnlockedReality == false){
		document.getElementById("realityAmountText").classList.add("locked");
		document.getElementById("tab12").classList.add("locked");
	}
	else {
		document.getElementById("realityAmountText").classList.remove("locked");
		document.getElementById("tab12").classList.remove("locked");
	}
	
	if (player.hasUnlockedBattleTower == false){
		document.getElementById("realityAmountText").classList.add("locked");
		document.getElementById("tab13").classList.add("locked");
	}
	else {
		document.getElementById("realityAmountText").classList.remove("locked");
		document.getElementById("tab13").classList.remove("locked");
	}
	
	for (let tier = 1; tier < 9; tier++){
		let name = TIER_NAMES[tier];
		let display = DISPLAY_NAMES[tier];
		let cost = player[name + "Cost"];
		let expCost = player[name + "ExpansionGeneratorCost"];
		let omgCost = player[name + "OmegaGeneratorCost"];
		let realCost = player[name + "RealityGeneratorCost"];
		let amount = player[name + "Amount"];
		let expAmount = player[name + "ExpansionGeneratorAmount"];
		let omgAmount = player[name + "OmegaGeneratorAmount"];
		let realAmount = player[name + "RealityGeneratorAmount"];
		let mult = player[name + "FinalMult"];
		let expMult = player[name + "ExpansionGeneratorFinalMult"];
		let omgMult = player[name + "OmegaGeneratorFinalMult"];
		let realMult = player[name + "RealityGeneratorFinalMult"];
		let bought = player[name + "Bought"];
		let expBought = player[name + "ExpansionGeneratorBought"];
		let omgBought = player[name + "OmegaGeneratorBought"];
		let realBought = player[name + "RealityGeneratorBought"];
		let prestigeAmount = player[name + "Prestige"];
		let prestigeCost = player[name + "PrestigeCost"];
		
		document.getElementById(name + "Generator").innerHTML = display + " Generator" + "<br>Amount: " + format(amount, 0) + "<br>Bought: " + format(bought, 0) + "<br>Mult: " + format(mult, 2) + "x<br>Cost: " + format(cost, 0);
		
		document.getElementById(name + "ExpansionGenerator").innerHTML = display + " Expansion Generator" + "<br>Amount: " + format(expAmount, 0) + "<br>Bought: " + format(expBought, 0) + "<br>Mult: " + format(expMult, 2) + "x<br>Cost: " + format(expCost, 0) + " EP";
		
		document.getElementById(name + "OmegaGenerator").innerHTML = display + " Omega Generator" + "<br>Amount: " + format(omgAmount, 0) + "<br>Bought: " + format(omgBought, 0) + "<br>Mult: " + format(omgMult, 2) + "x<br>Cost: " + format(omgCost, 0) + " OP";
		
		document.getElementById(name + "RealityGenerator").innerHTML = display + " Reality Generator" + "<br>Amount: " + format(realAmount, 0) + "<br>Bought: " + format(realBought, 0) + "<br>Mult: " + format(realMult, 2) + "x<br>Cost: " + format(realCost, 0) + " RP";
		
		if (player.gold.layer < player[name + "Cost"].layer  || ((player.gold.layer == player[name + "Cost"].layer) && player.gold.mag < player[name + "Cost"].mag)) {
			document.getElementById(name + "Generator").classList.add("locked");
		}
		else document.getElementById(name + "Generator").classList.remove("locked");
		
		if (player.expansionPoints.lt(player[name + "ExpansionGeneratorCost"])){
			document.getElementById(name + "ExpansionGenerator").classList.add("locked");
		}
		else document.getElementById(name + "ExpansionGenerator").classList.remove("locked");
		
		if (player.omegaPoints.lt(player[name + "OmegaGeneratorCost"])){
			document.getElementById(name + "OmegaGenerator").classList.add("locked");
		}
		else document.getElementById(name + "OmegaGenerator").classList.remove("locked");
		
		if (player.realityPoints.lt(player[name + "RealityGeneratorCost"])){
			document.getElementById(name + "RealityGenerator").classList.add("locked");
		}
		else document.getElementById(name + "RealityGenerator").classList.remove("locked");
		
		if (player[name + "Bought"].layer < player[name + "PrestigeCost"].layer  || ((player[name + "Bought"].layer == player[name + "PrestigeCost"].layer) && player[name + "Bought"].mag < player[name + "PrestigeCost"].mag)) {
			document.getElementById(name + "GeneratorPrestige").classList.add("locked");
		}
		else document.getElementById(name + "GeneratorPrestige").classList.remove("locked");
		
		if ((player.maxPrestige.layer == player[name + "Prestige"].layer) && (player.maxPrestige.mag == player[name + "Prestige"].mag)) {
			document.getElementById(name + "GeneratorPrestige").innerHTML = display + " Generator Prestige" + "<br>Amount: " + "MAX" + " (" + format(player[name + "Prestige"], 0) + ")" + "<br>Requires: " + format(prestigeCost, 0) + " " + display + " Generators Bought";
			document.getElementById(name + "GeneratorPrestige").classList.add("locked");
		}
		else document.getElementById(name + "GeneratorPrestige").innerHTML = display + " Generator Prestige" + "<br>Amount: " + format(prestigeAmount, 0) + "<br>Requires: " + format(prestigeCost, 0) + " " + display + " Generators Bought";
	}
	
	if (player.gold.lt(player.allMultFinalCost)){
		document.getElementById("allMultButton").classList.add("locked");
	} 
	else document.getElementById("allMultButton").classList.remove("locked");
	
	if (player.gold.gt(1e308)){
		document.getElementById("expansionButton").classList.remove("locked");
	}
	else document.getElementById("expansionButton").classList.add("locked");
	
	document.getElementById("expansionButtonText").innerHTML = "EXPANSION " + "<br>Expand for " + format(((Decimal.floor(Decimal.log10(player.gold).div(((new Decimal(300)).div(player.expansionPointMultFinal)).times((new Decimal(1)).div((Decimal.log10(player.gold).div(300)).pow(3))))))), 0) + " Expansion Points";

	if (player.gold.gt(player.expansionCost) || player.gold.eq(player.expansionCost)){
		player.hasUnlockedExpansion = true;
	}
	
	if (player.hasUnlockedExpansion == false){
		document.getElementById("expansionGenerators").classList.add("preExpand");
		document.getElementById("preExpansionText").classList.add("preExpand");
		document.getElementById("tab3").classList.add("preExpand");
	}
	else {
		document.getElementById("expansionGenerators").classList.remove("preExpand");
		document.getElementById("preExpansionText").classList.remove("preExpand");
		document.getElementById("tab3").classList.remove("preExpand");
	}
	
	if (player.hasUnlockedAutobuyers == false){
		document.getElementById("tab4").classList.add("locked");
	}
	else {
		document.getElementById("tab4").classList.remove("locked");
	}
	
	if (player.expansionPoints.lt(player.expansionPointMultCost)){
		document.getElementById("expansionPointMult").classList.add("locked");
	}
	else document.getElementById("expansionPointMult").classList.remove("locked");

	if (player.omegaPoints.lt(player.omegaPointMultCost)){
		document.getElementById("omegaPointMult").classList.add("notAfford");
	}
	else document.getElementById("omegaPointMult").classList.remove("notAfford");
	
	// AUTOBUYERS ************************************************************************************************

	if (player.atomShopItem6Bought == false){
		if (player.eighthSimUpgradeBought == false){
			if (player.expansionUpgrade5 == false){
				document.getElementById("autoPrestige").classList.add("locked");
			}
			else {
				document.getElementById("autoPrestige").classList.remove("locked");
			}
	
			if (player.expansionUpgrade7 == false){
				document.getElementById("autoGenerator").classList.add("locked");
				document.getElementById("autoAllMult").classList.add("locked");
			}
			else {
				document.getElementById("autoGenerator").classList.remove("locked");
				document.getElementById("autoAllMult").classList.remove("locked");
			}
	
			if (player.expansionUpgrade14 == false){
				document.getElementById("autoExpand").classList.add("locked");
			}
			else document.getElementById("autoExpand").classList.remove("locked");
	
			if (player.alphaUpgrade4 == 0){
				document.getElementById("autoABG").classList.add("locked");
			}
			else document.getElementById("autoABG").classList.remove("locked");
	
			if (player.gammaUpgrade4 == 0){
				document.getElementById("autoExpansionGenerator").classList.add("locked");
			}
			else document.getElementById("autoExpansionGenerator").classList.remove("locked");
	
			if (player.gammaUpgrade4 == 0){
				document.getElementById("autoExpansionPointMult").classList.add("locked");
			}
			else document.getElementById("autoExpansionPointMult").classList.remove("locked");
	
			if (player.betaUpgrade4 == 0){
				document.getElementById("autoABGUpgrade5").classList.add("locked");
			}
			else document.getElementById("autoABGUpgrade5").classList.remove("locked");
	
			if (player.sixthSimUpgradeBought == false){
				document.getElementById("autoSimulationHero").classList.add("locked");
				document.getElementById("autoFight").classList.add("locked");
			}
			else {
				document.getElementById("autoSimulationHero").classList.remove("locked");
				document.getElementById("autoFight").classList.remove("locked");
			}
		}
		else {
			document.getElementById("autoPrestige").classList.remove("locked");
			document.getElementById("autoGenerator").classList.remove("locked");
			document.getElementById("autoAllMult").classList.remove("locked");
			document.getElementById("autoExpand").classList.remove("locked");
			document.getElementById("autoABG").classList.remove("locked");
			document.getElementById("autoExpansionGenerator").classList.remove("locked");
			document.getElementById("autoExpansionPointMult").classList.remove("locked");
			document.getElementById("autoABGUpgrade5").classList.remove("locked");
			document.getElementById("autoSimulationHero").classList.remove("locked");
			document.getElementById("autoFight").classList.remove("locked");
		}
	}
	else{
		document.getElementById("autoPrestige").classList.remove("locked");
		document.getElementById("autoGenerator").classList.remove("locked");
		document.getElementById("autoAllMult").classList.remove("locked");
		document.getElementById("autoExpand").classList.remove("locked");
		document.getElementById("autoABG").classList.remove("locked");
		document.getElementById("autoExpansionGenerator").classList.remove("locked");
		document.getElementById("autoExpansionPointMult").classList.remove("locked");
		document.getElementById("autoABGUpgrade5").classList.remove("locked");
		document.getElementById("autoSimulationHero").classList.remove("locked");
		document.getElementById("autoFight").classList.remove("locked");
	}

	if (player.atomShopItem10Bought == true){
		document.getElementById("autoBattleTower").classList.remove("locked");
	}
	else document.getElementById("autoBattleTower").classList.add("locked");

	if (player.atomShopItem12Bought == true){
		document.getElementById("autoBuild").classList.remove("locked");
		document.getElementById("autoBuild1Check2").classList.remove("locked");
		document.getElementById("autoBuild2Check2").classList.remove("locked");
		document.getElementById("autoBuild3Check2").classList.remove("locked");
		document.getElementById("autoBuild4Check2").classList.remove("locked");
	}
	else {
		document.getElementById("autoBuild").classList.add("locked");
		document.getElementById("autoBuild1Check2").classList.add("locked");
		document.getElementById("autoBuild2Check2").classList.add("locked");
		document.getElementById("autoBuild3Check2").classList.add("locked");
		document.getElementById("autoBuild4Check2").classList.add("locked");
	}

	if (player.atomShopItem17Bought == true){
		document.getElementById("autoOmegaGenerator").classList.remove("locked");
		document.getElementById("autoElectronUpgrades").classList.remove("locked");
	}
	else {
		document.getElementById("autoOmegaGenerator").classList.add("locked");
		document.getElementById("autoElectronUpgrades").classList.add("locked");
	}
	
	// INFO TAB *****************
	
	let baseText = "<p><b>NOTE:</b><br>The info tab will update as you unlock more of the game.<br>If you're confused about something then check the Info tab first and see if that helps.<br>If it doesn't, then you can get help by joining the Discord and asking other players or the Dev.</p>";

	let hotkeyText = "<p><b>HOTKEYS:</b><br>M: Buys all generators and all mult<br>P: Prestige</p>";
	
	let hotkeyTextExpansion = "<p><b>HOTKEYS:</b><br>M: Buys all generators and all mult<br>P: Prestige<br>E: Buys all Expansion Generators and 2x EP<br>X: Expand</p>";
	
	let hotkeyTextOmega = "<p><b>HOTKEYS:</b><br>M: Buys all generators and all mult<br>P: Prestige<br>E: Buys all Expansion Generators and 2x EP<br>X: Expand<br>O: Become Omega</p>";
	
	let hotkeyTextReality = "<p><b>HOTKEYS:</b><br>M: Buys all generators and all mult<br>P: Prestige<br>E: Buys all Expansion Generators and 2x EP<br>X: Expand<br>O: Become Omega<br>R: Reach Reality</p>";

	let hotkeyTextBattleTower = "<p><b>HOTKEYS:</b><br>M: Buys all generators and all mult<br>P: Prestige<br>E: Buys all Expansion Generators and 2x EP<br>X: Expand<br>O: Become Omega<br>R: Reach Reality<br>CTRL: 10 Stats or 100 Enemy Levels<br>SHIFT: 10% Stats or 10 Enemy Levels<br>ALT: 100% Stats or 1000 Enemy Levels</p>";
	
	let generatorText = "<p><b>GENERATORS:</b><br>The first generator makes energy. Energy is the main currency you use to upgrade your generators <br>and your all mult. The second generator creates the first, the third creates the second and so on.</p>";
	
	let prestigeText = "<p><b>PRESTIGE:</b><br>Prestige resets your generators and your Energy, but you get a 2x multiplier to everything.<br>It's very worth it, and is necessary to progress.</p>";
	
	let expansionText = "<p><b>EXPANSION:</b><br>When you expand you reset everything and gain expansion points (EP). They are used to <br>upgrade expansion generators or your EP gain multiplier.<br>Expansion generators works like normal generators, except they make electricity instead of energy.<br>Electricity reduces the cost of the all mult upgrade.<br>Expansion upgrades are automatically unlocked every 100x electricity, starting at 1.</p>";
	
	let autobuyerText = "<p><b>AUTOBUYERS:</b><br>Autobuyers do things for you automatically! They can automatically prestige, buy generators,<br>or even expand. To activate them just check the box. You can decide how much EP you wanna get<br>when you expand with the expansion autobuyer. Just type in however much you want.</p>"
	
	let ABGText = "<p><b>ALPHA BETA GAMMA:</b><br>You can purchase three different currencies; Alpha, Beta and Gamma. Alpha costs energy,<br>Beta costs EP, and Gamma costs electricity. You can use them to buy different upgrades.<br>The next mechanic is unlocked at 1e75 EP.<br>Tip: Farm Expansions for a little while to increase the Expansion Upgrade 13 multiplier.";
	
	let omegaText = "<p><b>OMEGA:</b><br>Becoming Omega resets everything you've done so far, but with some big rewards. <br>You unlock a new set of generators, and upgrades. Omega Generators produce Omega.<br>Omega makes electricity stronger.<br>The upgrades costs Omega, and it goes up every time you buy another upgrade. <br>Omega upgrades is kind of like a skill tree. You need to buy every previous upgrade to be able to purchase <br>the next. If you're unhappy with a choice you made, or want to try a different build, you can reset your Upgrades.<br>But remember, your Omega won't be refunded.";
	
	let simulationText = "<p><b>SIMULATION:</b><br>In the simulation you have to fight your way through hordes of monsters, and infinite floors. <br>There are two different modes you can be in: Gold Mode and Fighting Mode. <br>In Gold Mode you will earn gold, and in Fighting Mode you will fight (duh). <br>Use your gold to upgrade your three heroes. You also get a multiplier to your gold income based on <br>what stage you're at. Later you will be able to Resimulate, resetting your simulation back to the beginning. <br>But like with all the other prestige mechanics, you get stronger.";
	
	let electronText = "<p><b>ELECTRONS:</b><br>Every second you will multiply your current amount of electrons by your electron gain.<br>This can be upgraded by spending OP. You get a multiplier to how much your all mult multiplies, based on your electrons.<br>However there is a cap. At some point you will stop gaining electrons. This cap can be increased by spending OP.<br>You can choose to reset your electrons and gain an atom. You can use your atoms to buy several upgrades.";
	
	let realityText = "<p><b>REALITY:</b><br>You have now Reached Reality! As a reward you now have access to Reality Generators.<br>They generate Reality Energy, which can be used on 6 different buffs. At first you can only use 1 at once,<br>but later on you will be able to use more. You are freely able to switch between which bonuses you want to use,<br>so don't worry about picking the 'wrong' buff. They are all useful in different stages of reality.<br>After you Reach Reality for the second time you unlock ???";
	
	let battleTowerText = "<p><b>BATTLE TOWER:</b><br>After Reaching Reality again you unlocked the Battle Tower. Could this be what the simulation was simulating?<br>Here you will fight enemies and level up. Every time you level up you gain 3 Skillpoints that you can use on whatever you want!<br>You can also allocate your stats however you wish without any cost, so go ahead and experiment with different builds!<br>Stamina gives 10 HP<br>Strength increases DPS by 2<br>Armor reduces incoming damage<br>Regeneration regenerates 1 HP per second<br>Agility reduces Armor by 0.75 and it can even go below 0 which increases damage instead<br>Sometimes the enemy will be Legendary. Legendary enemies drop Atoms when they die. The higher the level of the enemy,<br>the higher the chance for the enemy to be Legendary and the more Atoms they will drop. Higher level enemies also gives more XP.";

	let retireText = "<p><b>RETIRE:</b><br>You just Retired from the Battle Tower, resetting your character. However, you just gained some fancy new Super Skillpoints!<br>These Skillpoints will stay with you forever, even after Retiring. Super Skillpoints work differently from your normal Skillpoints.<br>Instead of directly making you strong, they make your Skillpoints more effective. The max amount of Super Skillpoints you can have<br>is equal to the highest level Enemy you have ever killed. When you retire you keep the permanent Skillpoints you gained from some of the Atom Shop items.";
	
	if (player.hasUnlockedTraining == true){
		document.getElementById("infoText").innerHTML = baseText + hotkeyTextBattleTower + generatorText + prestigeText + expansionText + autobuyerText + ABGText + omegaText + simulationText + electronText + realityText + battleTowerText + retireText;
	}
	else if (player.hasUnlockedBattleTower == true){
		document.getElementById("infoText").innerHTML = baseText + hotkeyTextBattleTower + generatorText + prestigeText + expansionText + autobuyerText + ABGText + omegaText + simulationText + electronText + realityText + battleTowerText;
	}
	else if (player.hasUnlockedReality == true){
		document.getElementById("infoText").innerHTML = baseText + hotkeyTextReality + generatorText + prestigeText + expansionText + autobuyerText + ABGText + omegaText + simulationText + electronText + realityText;
	}
	else if (player.hasUnlockedElectrons == true){
		document.getElementById("infoText").innerHTML = baseText + hotkeyTextOmega + generatorText + prestigeText + expansionText + autobuyerText + ABGText + omegaText + simulationText + electronText;
	}
	else if (player.hasUnlockedSim == true){
		document.getElementById("infoText").innerHTML = baseText + hotkeyTextOmega + generatorText + prestigeText + expansionText + autobuyerText + ABGText + omegaText + simulationText;
	}
	else if (player.hasUnlockedOmega == true){
		document.getElementById("infoText").innerHTML = baseText + hotkeyTextOmega + generatorText + prestigeText + expansionText + autobuyerText + ABGText + omegaText;
	}
	else if (player.hasUnlockedABG == true){
		document.getElementById("infoText").innerHTML = baseText + hotkeyTextExpansion + generatorText + prestigeText + expansionText + autobuyerText + ABGText;
	}
	else if (player.expansionUpgrade5 == true){
		document.getElementById("infoText").innerHTML = baseText + hotkeyTextExpansion + generatorText + prestigeText + expansionText + autobuyerText;
	}
	else if (player.hasUnlockedExpansion == true){
		document.getElementById("infoText").innerHTML = baseText + hotkeyTextExpansion + generatorText + prestigeText + expansionText;
	}
	else{
		document.getElementById("infoText").innerHTML = baseText + hotkeyText + generatorText + prestigeText;
	}
	
	// ALPHA BETA GAMMA TAB *********************
	
	if (player.hasUnlockedABG == false){
		document.getElementById("tab5").classList.add("locked");
	}
	else document.getElementById("tab5").classList.remove("locked");
	
	document.getElementById("alphaText").innerHTML = "You have " + format(player.alpha, 0) + " Alpha" + "<br>Cost: " + format(player.alphaCost, 0) + " Energy";
	document.getElementById("betaText").innerHTML = "You have " + format(player.beta, 0) + " Beta" + "<br>Cost: " + format(player.betaCost, 0) + " EP";
	document.getElementById("gammaText").innerHTML = "You have " + format(player.gamma, 0) + " Gamma" + "<br>Cost: " + format(player.gammaCost, 0) + " Electricity";
	
	document.getElementById("alphaUp1").classList.add("locked");
	document.getElementById("alphaUp2").classList.add("locked");
	document.getElementById("alphaUp3").classList.add("locked");
	document.getElementById("alphaUp4").classList.add("locked");
	document.getElementById("alphaUp5").classList.add("locked");
	
	document.getElementById("betaUp1").classList.add("locked");
	document.getElementById("betaUp2").classList.add("locked");
	document.getElementById("betaUp3").classList.add("locked");
	document.getElementById("betaUp4").classList.add("locked");
	document.getElementById("betaUp5").classList.add("locked");
	
	document.getElementById("gammaUp1").classList.add("locked");
	document.getElementById("gammaUp2").classList.add("locked");
	document.getElementById("gammaUp3").classList.add("locked");
	document.getElementById("gammaUp4").classList.add("locked");
	document.getElementById("gammaUp5").classList.add("locked");
	
	
	if (player.alphaUpgrade1.lt(5)){
		document.getElementById("alphaUp1").classList.remove("locked");
	}
	else if (player.alphaUpgrade2.lt(5)){
		document.getElementById("alphaUp1").classList.remove("locked");
		document.getElementById("alphaUp2").classList.remove("locked");
	}
	else if (player.alphaUpgrade3.lt(5)){
		document.getElementById("alphaUp1").classList.remove("locked");
		document.getElementById("alphaUp2").classList.remove("locked");
		document.getElementById("alphaUp3").classList.remove("locked");
	}
	else if (player.alphaUpgrade4.lt(1)){
		document.getElementById("alphaUp1").classList.remove("locked");
		document.getElementById("alphaUp2").classList.remove("locked");
		document.getElementById("alphaUp3").classList.remove("locked");
		document.getElementById("alphaUp4").classList.remove("locked");
	}
	else {
		document.getElementById("alphaUp1").classList.remove("locked");
		document.getElementById("alphaUp2").classList.remove("locked");
		document.getElementById("alphaUp3").classList.remove("locked");
		document.getElementById("alphaUp4").classList.remove("locked");
		document.getElementById("alphaUp5").classList.remove("locked");
	}
	
	if (player.betaUpgrade1.lt(5)){
		document.getElementById("betaUp1").classList.remove("locked");
	}
	else if (player.betaUpgrade2.lt(5)){
		document.getElementById("betaUp1").classList.remove("locked");
		document.getElementById("betaUp2").classList.remove("locked");
	}
	else if (player.betaUpgrade3.lt(5)){
		document.getElementById("betaUp1").classList.remove("locked");
		document.getElementById("betaUp2").classList.remove("locked");
		document.getElementById("betaUp3").classList.remove("locked");
	}
	else if (player.betaUpgrade4.lt(1)){
		document.getElementById("betaUp1").classList.remove("locked");
		document.getElementById("betaUp2").classList.remove("locked");
		document.getElementById("betaUp3").classList.remove("locked");
		document.getElementById("betaUp4").classList.remove("locked");
	}
	else {
		document.getElementById("betaUp1").classList.remove("locked");
		document.getElementById("betaUp2").classList.remove("locked");
		document.getElementById("betaUp3").classList.remove("locked");
		document.getElementById("betaUp4").classList.remove("locked");
		document.getElementById("betaUp5").classList.remove("locked");
	}
	
	
	if (player.gammaUpgrade1.lt(5)){
		document.getElementById("gammaUp1").classList.remove("locked");
	}
	else if (player.gammaUpgrade2.lt(5)){
		document.getElementById("gammaUp1").classList.remove("locked");
		document.getElementById("gammaUp2").classList.remove("locked");
	}
	else if (player.gammaUpgrade3.lt(5)){
		document.getElementById("gammaUp1").classList.remove("locked");
		document.getElementById("gammaUp2").classList.remove("locked");
		document.getElementById("gammaUp3").classList.remove("locked");
	}
	else if (player.gammaUpgrade4.lt(1)){
		document.getElementById("gammaUp1").classList.remove("locked");
		document.getElementById("gammaUp2").classList.remove("locked");
		document.getElementById("gammaUp3").classList.remove("locked");
		document.getElementById("gammaUp4").classList.remove("locked");
	}
	else {
		document.getElementById("gammaUp1").classList.remove("locked");
		document.getElementById("gammaUp2").classList.remove("locked");
		document.getElementById("gammaUp3").classList.remove("locked");
		document.getElementById("gammaUp4").classList.remove("locked");
		document.getElementById("gammaUp5").classList.remove("locked");	
	}
	
	// ALPHA BETA GAMMA TAB *********************
	
	if (player.hasUnlockedOmega == true){
		document.getElementById("tab6").classList.remove("locked");
		document.getElementById("tab7").classList.remove("locked");
	}
	else {
		document.getElementById("tab6").classList.add("locked");
		document.getElementById("tab7").classList.add("locked");
	}
	
	// SIMULATION TAB ***************************
	
	if (player.omega.gte(1e6)){
		player.hasUnlockedSim = true;
	}
	
	if (player.resimulateDPSMult.gt(1)){
		player.hasUnlockedSimUps = true;
	}
	
	if (player.hasUnlockedSim == false){
		document.getElementById("tab9").classList.add("locked");
	}
	else document.getElementById("tab9").classList.remove("locked");
	
	if (player.hasUnlockedSimUps == false){
		document.getElementById("tab10").classList.add("locked");
	}
	else document.getElementById("tab10").classList.remove("locked");
	
	document.getElementById("simGoldTotal").innerText = "Gold: " + format(player.simGold, 2);
	document.getElementById("simGoldPerSec").innerText = "Gold Per Second: " + format(player.finalGPS, 2);
	document.getElementById("simStage").innerText = "Stage: " + format(player.stage, 0);
	document.getElementById("simDPS").innerText = "DPS: " + format(player.finalDPS, 2);
	document.getElementById("simUpgradeGoldText").innerText = "Gold: " + format(player.simGold, 2);
	
	document.getElementById("hpBarText").innerText = format(player.monsterCurrentHP, 2) + " / " + format(player.monsterTotalHP, 2);
	
	document.getElementById("goldFarmer").innerHTML = "Gold Farmer" + "<br>Level: " + format(player.goldFarmerLevel, 0) + "<br>Gold Multiplier: " + format(player.goldFarmerMult, 2) + "x<br>Cost: " + format(player.goldFarmerCost, 2);
	
	document.getElementById("hybrid").innerHTML = "Hybrid" + "<br>Level: " + format(player.hybridLevel, 0) + "<br>Gold/DPS Multiplier: " + format(player.hybridMult, 2) + "x<br>Cost: " + format(player.hybridCost, 2);
	
	document.getElementById("PVPLegend").innerHTML = "PVP Legend" + "<br>Level: " + format(player.PVPLegendLevel, 0) + "<br>DPS Multiplier: " + format(player.PVPLegendMult, 2) + "x<br>Cost: " + format(player.PVPLegendCost, 2);
	
	document.getElementById("resimulate").innerHTML = "RESIMULATION<br>Resimulate for " + format(Decimal.sqrt(player.simGold.pow(player.eighthSimUpgrade)).div(100), 2) + " <br>Multiplier to DPS and " + format(new Decimal(1).plus(Decimal.log10(player.simGold.pow(player.eighthSimUpgrade)).div(60)), 2) + "<br>Multiplier to stage gold exponent";
	
	document.getElementById("resimulationText").innerHTML = "DPS Multiplier: " + format(player.resimulateDPSMult, 2) + "x<br>Stage Gold Exponent Multiplier: " + format(player.resimulateStageExponentMult, 2) + "x";
	
	if (player.resimulateDPSMult.eq(1)){
		document.getElementById("resimulationText").classList.add("locked");
	}
	else document.getElementById("resimulationText").classList.remove("locked");
	
	if (player.inGoldMode == true){
		document.getElementById("goldMode").classList.add("inside");
	}
	else document.getElementById("goldMode").classList.remove("inside");
	
	if (player.inFightingMode == true){
		document.getElementById("fightingMode").classList.add("inside");
	}
	else document.getElementById("fightingMode").classList.remove("inside");
	
	if (((Decimal.sqrt(player.simGold.pow(player.eighthSimUpgrade)).div(100)).lt(player.resimulateDPSMult)) || player.simGold.lt(1e6)){
		document.getElementById("resimulate").classList.add("locked");
	}
	else document.getElementById("resimulate").classList.remove("locked");
	
	if (player.firstSimUpgradeBought == true){
		document.getElementById("simUpgrade1").innerHTML = "Gain " + format(new Decimal(3).times(player.fourthSimUpgrade), 2) + "x more gold for<br>every 4th Gold Farmer<br>Current: " + format(player.firstSimUpgrade, 2) + "x";
		document.getElementById("simUpgrade1").classList.add("bought");
	}
	else {
		document.getElementById("simUpgrade1").innerHTML = "Gain 3x more gold for<br>every 4th Gold Farmer<br>Cost: 1e8 Gold";
		document.getElementById("simUpgrade1").classList.remove("bought");
	}
	
	if (player.secondSimUpgradeBought == true){
		document.getElementById("simUpgrade2").innerHTML = "Gain " + format(new Decimal(2).times(player.fourthSimUpgrade), 2) + "x more gold and<br>DPS for every 4th Hybrid<br>Current: " + format(player.secondSimUpgrade, 2) + "x";
		document.getElementById("simUpgrade2").classList.add("bought");
	}
	else {
		document.getElementById("simUpgrade2").innerHTML = "Gain 2x more gold and<br>DPS for every 4th Hybrid<br>Cost: 1e12 Gold";
		document.getElementById("simUpgrade2").classList.remove("bought");
	}
	
	if (player.thirdSimUpgradeBought == true){
		document.getElementById("simUpgrade3").innerHTML = "Gain " + format(new Decimal(5).times(player.fourthSimUpgrade), 2) + "x more DPS for<br>every 4th PVP Legend<br>Current: " + format(player.thirdSimUpgrade, 2) + "x";
		document.getElementById("simUpgrade3").classList.add("bought");
	}
	else {
		document.getElementById("simUpgrade3").innerHTML = "Gain 5x more DPS for<br>every 4th PVP Legend<br>Cost: 1e16 Gold";
		document.getElementById("simUpgrade3").classList.remove("bought");
	}
	
	if (player.fourthSimUpgradeBought == true){
		document.getElementById("simUpgrade4").innerHTML = "The 3 previous upgrades<br>are 1.5x stronger for every<br>" + format(player.fourthSimUpgradeTotalLevels, 0) + " total levels bought<br>Current: " + format(player.fourthSimUpgrade, 2) + "x";
		document.getElementById("simUpgrade4").classList.add("bought");
	}
	else {
		document.getElementById("simUpgrade4").innerHTML = "The 3 previous upgrades<br>are 1.5x stronger for every<br>" + format(player.fourthSimUpgradeTotalLevels, 0) + " total levels bought<br>Cost: 1e18 Gold";
		document.getElementById("simUpgrade4").classList.remove("bought");
	}
	
	if (player.fifthSimUpgradeBought == true){
		document.getElementById("simUpgrade5").innerHTML = "Get a 1.25x multiplier<br>to gold per second<br>for each stage beaten<br>Current: " + format(player.fifthSimUpgrade, 2) + "x";
		document.getElementById("simUpgrade5").classList.add("bought");
	}
	else {
		document.getElementById("simUpgrade5").innerHTML = "Get a 1.25x multiplier<br>to gold per second<br>for each stage beaten<br>Cost: 1e56 Gold";
		document.getElementById("simUpgrade5").classList.remove("bought");
	}
	
	if (player.sixthSimUpgradeBought == true){
		document.getElementById("simUpgrade6").innerHTML = "Autobuyers Unlocked";
		document.getElementById("simUpgrade6").classList.add("bought");
	}
	else {
		document.getElementById("simUpgrade6").innerHTML = "Unlock Simulation Autobuyers<br>Cost: 1e500 Gold";
		document.getElementById("simUpgrade6").classList.remove("bought");
	}
	
	if (player.seventhSimUpgradeBought == true){
		document.getElementById("simUpgrade7").innerHTML = "Get a 1.25x multiplier<br>to damage per second<br>for each stage beaten<br>Current: " + format(player.seventhSimUpgrade, 2) + "x";
		document.getElementById("simUpgrade7").classList.add("bought");
	}
	else {
		document.getElementById("simUpgrade7").innerHTML = "Get a 1.25x multiplier<br>to damage per second<br>for each stage beaten<br>Cost: 1e950 Gold";
		document.getElementById("simUpgrade7").classList.remove("bought");
	}
	
	if (player.eighthSimUpgradeBought == true){
		document.getElementById("simUpgrade8").innerHTML = "Improves the resimulation<br>formula by 1.1x";
		document.getElementById("simUpgrade8").classList.add("bought");
	}
	else {
		document.getElementById("simUpgrade8").innerHTML = "Improves the resimulation<br>formulas by 1.1x<br>and you keep all<br>autobuyers when becoming<br>omega<br>Cost: 1e1368 Gold";
		document.getElementById("simUpgrade8").classList.remove("bought");
	}
	
	// ELECTRONS TAB *************************** 
	
	if (player.omega.gte(1e20) && player.hasUnlockedElectrons == false){
		player.hasUnlockedElectrons = true;
	}
	
	if (player.hasUnlockedElectrons == true){
		document.getElementById("tab11").classList.remove("locked");
	}
	else document.getElementById("tab11").classList.add("locked");
	
	document.getElementById("electrons").innerText = "You have " + format(player.electrons, 2) + " Electrons";
	document.getElementById("electronEffect").innerText = "They multiply all mult gain by " + format(player.electronEffect, 2) + "x";
	
	document.getElementById("electronUpgrade1").innerHTML = "Raise max Electrons by ^1.6<br>Max Electrons: " + format(player.maxElectrons, 2) + "<br>Cost: " + format(player.firstElectronUpgradeCost, 2) + " OP";
	
	document.getElementById("electronUpgrade2").innerHTML = "Multiply Electron gain by " + format(player.electronGainGain, 2) + "x<br>Current: " + format(player.electronGainFinal, 2) + "x<br>Cost: " + format(player.secondElectronUpgradeCost, 2) + " OP";
	
	document.getElementById("electronUpgrade3").innerHTML = "Reset Electrons for Atoms<br>Cost: " + format(player.thirdElectronUpgradeCost, 2) + " Electrons";
	
	document.getElementById("atomText").innerText = "You have " + format(player.atoms, 0) + " Atoms";
	
	if (player.firstAtomUpgradeBought.eq(0)){
		document.getElementById("atomUpgrade1").innerHTML = "Get 100% of EP you would get<br>on Expansion every sec<br>Cost: " + format(player.firstAtomUpgradeCost, 0) + " Atoms";
	}
	else if (player.firstAtomUpgradeBought.eq(1)){
		document.getElementById("atomUpgrade1").innerHTML = "Keep Expansion Upgrades<br>when becoming Omega<br>Cost: " + format(player.firstAtomUpgradeCost, 0) + " Atoms";
	}
	else if (player.firstAtomUpgradeBought.lt(7)){
		document.getElementById("atomUpgrade1").innerHTML = "Divide the cost of Electron Upgrades by 4<br>Current: " + format(player.firstAtomUpgrade3, 0) + "x<br>Cost: " + format(player.firstAtomUpgradeCost, 0) + " Atoms";
	}
	else {
		document.getElementById("atomUpgrade1").innerHTML = "MAX<br>Divides the cost of Electron Upgrades<br>Current: " + format(player.firstAtomUpgrade3, 0) + "x";
	}
	
	if (player.secondAtomUpgradeBought.eq(0)){
		document.getElementById("atomUpgrade2").innerHTML = "Get the ability to skip<br>stages in simulation<br>Cost: " + format(player.secondAtomUpgradeCost, 0) + " Atoms";
	}
	else if (player.secondAtomUpgradeBought.eq(1)){
		document.getElementById("atomUpgrade2").innerHTML = "Keep ABG upgrades 1 - 4<br>when becoming Omega<br>Cost: " + format(player.secondAtomUpgradeCost, 0) + " Atoms";
	}
	else if (player.secondAtomUpgradeBought.lt(7)){
		document.getElementById("atomUpgrade2").innerHTML = "Increase the Electron effect<br>exponent by 2x<br>Current: ^" + format(player.secondAtomUpgrade3, 0) + "<br>Cost: " + format(player.secondAtomUpgradeCost, 0) + " Atoms";
	}
	else {
		document.getElementById("atomUpgrade2").innerHTML = "MAX<br>Increases the Electron effect<br>Current: " + "^" + format(player.secondAtomUpgrade3, 0);
	}
	
	if (player.thirdAtomUpgradeBought.eq(0)){
		document.getElementById("atomUpgrade3").innerHTML = "Keep some Electrons<br>when resetting for Atoms<br>Cost: " + format(player.thirdAtomUpgradeCost, 0) + " Atoms";
	}
	else if (player.thirdAtomUpgradeBought.eq(1)){
		document.getElementById("atomUpgrade3").innerHTML = "Keep Electrons<br>when becoming Omega<br>Cost: " + format(player.thirdAtomUpgradeCost, 0) + " Atoms";
	}
	else if (player.thirdAtomUpgradeBought.lt(7)){
		document.getElementById("atomUpgrade3").innerHTML = "Make the Electron interval lower<br>by 150ms<br>Current: " + format(player.electronInterval, 0) + "ms<br>Cost: " + format(player.thirdAtomUpgradeCost, 0) + " Atoms";
	}
	else {
		document.getElementById("atomUpgrade3").innerHTML = "MAX<br>Makes the Electron interval lower<br>Current: " + format(player.electronInterval, 0) + "ms";
	}
	
	// BATTLE TOWER ******************************
	
	document.getElementById("friendlyLevelText").innerText = "Level:";
	document.getElementById("friendlyLevelNumber").innerText = format(player.friendlyLevel, 0);
	
	document.getElementById("enemyLevelText").innerText = "Level:";
	document.getElementById("enemyLevelNumber").innerText = format(player.enemyLevel, 0);
	
	if (player.isLegendary == true){
		document.getElementById("rarityText").innerText = "Legendary:";
		document.getElementById("rarityNumber").innerText = format(Decimal.floor((new Decimal(1.1).pow(player.enemyLevel)).times(player.atomShopItem2Effect)), 0) + " Atoms";
	}
	else if (player.isBoss == true){
		document.getElementById("rarityText").innerText = "BOSS!";
		document.getElementById("rarityNumber").innerText = "";
	}
	else {
		document.getElementById("rarityText").innerText = "Normal";
		document.getElementById("rarityNumber").innerText = "";
	}
	
	document.getElementById("friendlyStaminaStat").innerText = format(player.friendlyStamina, 0);
	document.getElementById("friendlyStrengthStat").innerText = format(player.friendlyStrength, 0);
	document.getElementById("friendlyArmorStat").innerText = format(player.friendlyArmor, 0);
	document.getElementById("friendlyRegenerationStat").innerText = format(player.friendlyRegeneration, 0);
	document.getElementById("friendlyAgilityStat").innerText = format(player.friendlyAgility, 0);
	
	document.getElementById("enemyStaminaStat").innerText = format(player.enemyStamina, 0);
	document.getElementById("enemyStrengthStat").innerText = format(player.enemyStrength, 0);
	document.getElementById("enemyArmorStat").innerText = format(player.enemyArmor, 0);
	document.getElementById("enemyRegenerationStat").innerText = format(player.enemyRegeneration, 0);
	document.getElementById("enemyAgilityStat").innerText = format(player.enemyAgility, 0);
	
	document.getElementById("friendlyHPBarText").innerText = format(player.friendlyHealthCurrent, 2) + " / " + format(player.friendlyHealthTotal, 2);
	document.getElementById("enemyHPBarText").innerText = format(player.enemyHealthCurrent, 2) + " / " + format(player.enemyHealthTotal, 2);
	
	document.getElementById("xpBarText").innerText = format(player.currentXp, 2) + " / " + format(player.needToLvlUpXp, 2);
	
	document.getElementById("skillpointsText").innerText = "Skillpoints:";
	document.getElementById("skillpointsNumber").innerText = format(player.skillpoints, 0);
	
	let totalSuperSkillpoints = player.superSkillpoints.plus(player.superStamina).plus(player.superStrength).plus(player.superArmor).plus(player.superRegeneration).plus(player.superAgility);
	if ((totalSuperSkillpoints.plus(Decimal.floor((player.friendlyLevel.div(10)).pow(player.atomShopItem11Effect)))).lte(player.highestEnemyLevel)){
		document.getElementById("retire").innerHTML = "RETIRE<br>from fighting and gain " + format(Decimal.floor((player.friendlyLevel.div(10)).pow(player.atomShopItem11Effect)), 0) + " Super Skillpoints";
	}
	else if (totalSuperSkillpoints.lt(player.highestEnemyLevel)){
		document.getElementById("retire").innerHTML = "RETIRE<br>from fighting and gain " + format(player.highestEnemyLevel.minus(totalSuperSkillpoints), 0) + " Super Skillpoints";
	}
	else {
		document.getElementById("retire").innerHTML = "RETIRE<br>You have max SSP, you can increase it by killing higher level Enemies.";
	}
	
	if (player.friendlyLevel.lt(15)){
		document.getElementById("retire").classList.add("locked");	
	}
	else document.getElementById("retire").classList.remove("locked");	
	
	if (player.superSkillpoints.gt(0)){
		player.hasUnlockedTraining = true;
	}
	
	if (player.hasUnlockedTraining == false){
		document.getElementById("superSkillpointsContainer").classList.add("locked");
		document.getElementById("trainingContainer").classList.add("locked");
	}
	else {
		document.getElementById("superSkillpointsContainer").classList.remove("locked");
		document.getElementById("trainingContainer").classList.remove("locked");
	}
	
	document.getElementById("superSkillpoints").innerText = "You have " + format(player.superSkillpoints, 0) + " Super Skillpoints";
	
	document.getElementById("superStaminaStat").innerText = format(player.superStamina, 0);
	document.getElementById("superStrengthStat").innerText = format(player.superStrength, 0);
	document.getElementById("superArmorStat").innerText = format(player.superArmor, 0);
	document.getElementById("superRegenerationStat").innerText = format(player.superRegeneration, 0);
	document.getElementById("superAgilityStat").innerText = format(player.superAgility, 0);
	
	if (player.atomShopItem5Bought == false){
		document.getElementById("build1").classList.add("locked");
	}
	else document.getElementById("build1").classList.remove("locked");

	if (player.atomShopItem8Bought == false){
		document.getElementById("build2").classList.add("locked");
	}
	else document.getElementById("build2").classList.remove("locked");

	if (player.atomShopItem11Bought == false){
		document.getElementById("build3").classList.add("locked");
	}
	else document.getElementById("build3").classList.remove("locked");

	if (player.atomShopItem14Bought == false){
		document.getElementById("build4").classList.add("locked");
	}
	else document.getElementById("build4").classList.remove("locked");

	if (player.isResting == true){
		document.getElementById("friendlyRest").classList.add("isResting");
		document.getElementById("friendlyFight").classList.add("isResting");
	}
	else{
		document.getElementById("friendlyRest").classList.remove("isResting");
		document.getElementById("friendlyFight").classList.remove("isResting");
	}
	
	// TALENTS *************************************
	
	if (player.friendlyLevel.gte(10)){
		player.hasUnlockedTalents = true;
	}
	
	if (player.hasUnlockedTalents == false){
		document.getElementById("tab14").classList.add("locked");
	}
	else document.getElementById("tab14").classList.remove("locked");
	
	if (player.talent1IsActive == true){
		document.getElementById("talent1").classList.add("active");
	}
	else document.getElementById("talent1").classList.remove("active");
	
	if (player.talent2IsActive == true){
		document.getElementById("talent2").classList.add("active");
	}
	else document.getElementById("talent2").classList.remove("active");
	
	if (player.talent3IsActive == true){
		document.getElementById("talent3").classList.add("active");
	}
	else document.getElementById("talent3").classList.remove("active");
	
	if (player.talent4IsActive == true){
		document.getElementById("talent4").classList.add("active");
	}
	else document.getElementById("talent4").classList.remove("active");
	
	if (player.talent5IsActive == true){
		document.getElementById("talent5").classList.add("active");
	}
	else document.getElementById("talent5").classList.remove("active");
	
	if (player.talent6IsActive == true){
		document.getElementById("talent6").classList.add("active");
	}
	else document.getElementById("talent6").classList.remove("active");
	
	if (player.talent7IsActive == true){
		document.getElementById("talent7").classList.add("active");
	}
	else document.getElementById("talent7").classList.remove("active");
	
	if (player.talent8IsActive == true){
		document.getElementById("talent8").classList.add("active");
	}
	else document.getElementById("talent8").classList.remove("active");
	
	if (player.talent9IsActive == true){
		document.getElementById("talent9").classList.add("active");
	}
	else document.getElementById("talent9").classList.remove("active");

	if (player.talent10IsActive == true){
		document.getElementById("talent10").classList.add("active");
	}
	else document.getElementById("talent10").classList.remove("active");

	if (player.talent11IsActive == true){
		document.getElementById("talent11").classList.add("active");
	}
	else document.getElementById("talent11").classList.remove("active");

	if (player.talent12IsActive == true){
		document.getElementById("talent12").classList.add("active");
	}
	else document.getElementById("talent12").classList.remove("active");

	if (player.talent13IsActive == true){
		document.getElementById("talent13").classList.add("active");
	}
	else document.getElementById("talent13").classList.remove("active");

	if (player.talent14IsActive == true){
		document.getElementById("talent14").classList.add("active");
	}
	else document.getElementById("talent14").classList.remove("active");

	if (player.talent15IsActive == true){
		document.getElementById("talent15").classList.add("active");
	}
	else document.getElementById("talent15").classList.remove("active");

	if (player.atomShopItem15Bought == true){
		document.getElementById("talent13").classList.remove("locked");
		document.getElementById("talent14").classList.remove("locked");
		document.getElementById("talent15").classList.remove("locked");
	}
	else {
		document.getElementById("talent13").classList.add("locked");
		document.getElementById("talent14").classList.add("locked");
		document.getElementById("talent15").classList.add("locked");
	}
	
	document.getElementById("talent1").innerHTML = "LEVEL 10 TALENT<br>For every point you have in Armor,<br>your Regeneration regenerates for 0.2 more per second.<br>Current: " + format(player.talent1Effect, 1) + " More per Second";
	
	document.getElementById("talent2").innerHTML = "LEVEL 10 TALENT<br>Every 10th point in Strength<br>increases your Agility by 3<br>Current: " + format(player.talent2Effect, 0) + " Agility";
	
	document.getElementById("talent3").innerHTML = "LEVEL 10 TALENT<br>You deal 10% of your Max Health as DPS.<br>Current: " + format(player.talent3Effect, 2) + " DPS";
	
	document.getElementById("talent4").innerHTML = "LEVEL 20 TALENT<br>For every point you have in Regeneration,<br>your Armor blocks for 0.1% more.<br>Current: " + format(player.talent4Effect, 1) + "% More";
	
	document.getElementById("talent5").innerHTML = "LEVEL 20 TALENT<br>Agility now removes 0.25 additional armor.";
	
	document.getElementById("talent6").innerHTML = "LEVEL 20 TALENT<br>Every 10th point in Regeneration<br>and every 5th point in Armor<br>increases HP from Stamina by 1<br>Current: " + format(player.talent6Effect, 0) + " Bonus HP per Stamina";
	
	document.getElementById("talent7").innerHTML = "LEVEL 30 TALENT<br>For every point you have in Armor,<br>you remove 0.5 Agility from the enemy,<br>but they can not have less than 0.<br>Current: " + format(player.talent7Effect, 2) + " Agility Removed";
	
	document.getElementById("talent8").innerHTML = "LEVEL 30 TALENT<br>Strength also removes 2 Regeneration from the Enemy,<br>but they can not have less than 0.<br>Current: " + format(player.talent8Effect, 1) + " Regeneration Removed";
	
	document.getElementById("talent9").innerHTML = "LEVEL 30 TALENT<br>Super Stamina is 15% instead of 10%";

	document.getElementById("talent10").innerHTML = "LEVEL 50 TALENT<br>Your armor is spiky and now gives you<br>2 DPS per point.<br>Current: " + format(player.talent10Effect, 1) + " DPS";
	
	document.getElementById("talent11").innerHTML = "LEVEL 50 TALENT<br>Strength now does 2 more DPS per point.";
	
	document.getElementById("talent12").innerHTML = "LEVEL 50 TALENT<br>You gain 20% of the enemies Stamina as your own.<br>Current: " + format(player.talent12Effect, 0) + " Bonus Stamina";

	document.getElementById("talent13").innerHTML = "LEVEL 1000 TALENT<br>You gain 0.03 Agility for every point you have in Armor.<br>Current: " + format(player.talent13Effect, 2) + " Agility";
	
	document.getElementById("talent14").innerHTML = "LEVEL 1000 TALENT<br>Talent 2 is now affected by Super Strength at reduced rate. Every 10th point in Strength also now gives you 3 points of Armor. This is also affected by Super Strength.<br>Current: " + format(player.talent14Effect, 0) + " Armor";
	
	document.getElementById("talent15").innerHTML = "LEVEL 1000 TALENT<br>You Regenerate 10% of your max HP every second while Fighting and 1000% while Resting. Super Armor and Super Regeneration now also affects Talent 6. You gain 0.05 Armor for every point you have in Agility.<br>Current: " + format(player.talent15Effect2, 2) + " Armor";
	
	// ATOM SHOP *********************************
	
	if (player.atoms.gte(100)){
		player.hasUnlockedAtomShop = true;
	}
	
	if (player.hasUnlockedAtomShop == false){
		document.getElementById("tab15").classList.add("locked");
	}
	else document.getElementById("tab15").classList.remove("locked");
	
	document.getElementById("atomShopText").innerText = "You have " + format(player.atoms, 0) + " Atoms";
	
	for (let i = 1; i <= 20; i++){
		if (player["atomShopItem" + i + "Bought"] == true){
			document.getElementById("atomShopItem" + i).classList.add("bought");
		}
		else document.getElementById("atomShopItem" + i).classList.remove("bought");
	}
	
	if (player.atomShopItem1Bought == false){
		document.getElementById("atomShopItem1").innerHTML = "For every " + format(player.atomShopItem13Effect, 0) + " enemies you kill<br>recieve 1 skillpoint. You can get<br>Skillpoints equal to 3x your highest Level ever.<br>Cost: 100 Atoms"; 
	}
	else document.getElementById("atomShopItem1").innerHTML = "For every " + format(player.atomShopItem13Effect, 0) + " enemies you kill<br>recieve 1 skillpoint. You can get<br>Skillpoints equal to 3x your highest Level ever.<br>Kill count: " + format(player.atomShopItem1Counter, 0) + "<br>Skillpoints gained: " + format(player.atomShopItem1Skillpoints, 0);
	
	if (player.atomShopItem2Bought == false){
		document.getElementById("atomShopItem2").innerHTML = "You get 1.1x more Atoms from Legendary Enemies for every Atom Shop Item you have bought.<br>Cost: 500 Atoms"; 
	}
	else document.getElementById("atomShopItem2").innerHTML = "You get 1.1x more Atoms from Legendary Enemies for every Atom Shop Item you have bought.<br>Current: " + format(player.atomShopItem2Effect, 2) + "x";

	if (player.atomShopItem3Bought == false){
		document.getElementById("atomShopItem3").innerHTML = "You can use 3 Reality Bonuses at the same time.<br>Cost: 1000 Atoms"; 
	}
	else document.getElementById("atomShopItem3").innerHTML = "You can use 3 Reality Bonuses at the same time.";

	if (player.atomShopItem4Bought == false){
		document.getElementById("atomShopItem4").innerHTML = "You keep Atoms when Reaching Reality.<br>Cost: 1e5 Atoms"; 
	}
	else document.getElementById("atomShopItem4").innerHTML = "You keep Atoms when Reaching Reality.";

	if (player.atomShopItem5Bought == false){
		document.getElementById("atomShopItem5").innerHTML = "You can save 1 build.<br>Cost: 1e6 Atoms"; 
	}
	else document.getElementById("atomShopItem5").innerHTML = "You can save 1 build.";

	if (player.atomShopItem6Bought == false){
		document.getElementById("atomShopItem6").innerHTML = "You keep your Autobuyers, Atom Upgrades, and ABG upgrades <br>1 - 4 when you Reach Reality.<br>Cost: 5e6 Atoms"; 
	}
	else document.getElementById("atomShopItem6").innerHTML = "You keep your Autobuyers, Atom Upgrades, and ABG upgrades <br>1 - 4 when you Reach Reality.";

	if (player.atomShopItem7Bought == false){
		document.getElementById("atomShopItem7").innerHTML = "You can use all Reality Bonuses at the same time.<br>Cost: 1e7 Atoms"; 
	}
	else document.getElementById("atomShopItem7").innerHTML = "You can use all Reality Bonuses at the same time.";

	if (player.atomShopItem8Bought == false){
		document.getElementById("atomShopItem8").innerHTML = "You can save 2 builds.<br>Cost: 5e7 Atoms"; 
	}
	else document.getElementById("atomShopItem8").innerHTML = "You can save 2 builds.";

	if (player.atomShopItem9Bought == false){
		document.getElementById("atomShopItem9").innerHTML = "For every " + format(player.atomShopItem13Effect, 0) + " enemies you kill<br>recieve 1 skillpoint. You can get<br>Skillpoints equal to the highest Level Enemy killed.<br>Cost: 1e8 Atoms"; 
	}
	else document.getElementById("atomShopItem9").innerHTML = "For every " + format(player.atomShopItem13Effect, 0) + " enemies you kill<br>recieve 1 skillpoint. You can get<br>Skillpoints equal to the highest Level Enemy killed.<br>Kill count: " + format(player.atomShopItem9Counter, 0) + "<br>Skillpoints gained: " + format(player.atomShopItem9Skillpoints, 0);

	if (player.atomShopItem10Bought == false){
		document.getElementById("atomShopItem10").innerHTML = "You unlock the Battle Tower Autobuyer.<br>Cost: 1e11 Atoms"; 
	}
	else document.getElementById("atomShopItem10").innerHTML = "You unlocked the Battle Tower Autobuyer.";

	if (player.atomShopItem11Bought == false){
		document.getElementById("atomShopItem11").innerHTML = "You can save 3 builds, and Super Skill Point gain is increased the higher level you are.<br>Cost: 1e13 Atoms"; 
	}
	else document.getElementById("atomShopItem11").innerHTML = "You can save 3 builds, and Super Skill Point gain is increased the higher level you are.";

	if (player.atomShopItem12Bought == false){
		document.getElementById("atomShopItem12").innerHTML = "You unlock the Load Build Autobuyer.<br>Cost: 1e16 Atoms"; 
	}
	else document.getElementById("atomShopItem12").innerHTML = "You unlocked the Load Build Autobuyer. It activates once per second.";

	if (player.atomShopItem13Bought == false){
		document.getElementById("atomShopItem13").innerHTML = "You now only need 10 kills to gain a Skillpoint from Atom Shop Item 1 and 9.<br>Cost: 1e30 Atoms"; 
	}
	else document.getElementById("atomShopItem13").innerHTML = "You now only need 10 kills to gain a Skillpoint from Atom Shop Item 1 and 9.";

	if (player.atomShopItem14Bought == false){
		document.getElementById("atomShopItem14").innerHTML = "You can save 4 builds.<br>Cost: 1e50 Atoms"; 
	}
	else document.getElementById("atomShopItem14").innerHTML = "You can save 4 builds.";

	if (player.atomShopItem15Bought == false){
		document.getElementById("atomShopItem15").innerHTML = "You unlock the lvl 1000 Talent row.<br>Cost: 1e100 Atoms"; 
	}
	else document.getElementById("atomShopItem15").innerHTML = "Lvl 1000 Talent row is unlocked.";

	if (player.atomShopItem16Bought == false){
		document.getElementById("atomShopItem16").innerHTML = "Multiply OP gain by Level^2.<br>Cost: 1e500 Atoms"; 
	}
	else document.getElementById("atomShopItem16").innerHTML = "Multiply OP gain by Level^2.<br>Current: " + format(player.atomShopItem16Effect, 2) + "x";

	if (player.atomShopItem17Bought == false){
		document.getElementById("atomShopItem17").innerHTML = "Unlock Omega Generator Autobuyer and Electron Upgrades Autobuyer.<br>Cost: 1e550 Atoms"; 
	}
	else document.getElementById("atomShopItem17").innerHTML = "Unlock Omega Generator Autobuyer and Electron Upgrades Autobuyer.";

	if (player.atomShopItem18Bought == false){
		document.getElementById("atomShopItem18").innerHTML = "Increase Electron gain by Stage Gold Exponent Multiplier times the log of Atoms. You also now automatically Resimulate and Resimulation no longer resets.<br>Cost: 1e600 Atoms"; 
	}
	else document.getElementById("atomShopItem18").innerHTML = "Increase Electron gain by Stage Gold Exponent Multiplier times log10 of Atoms. You also now automatically Resimulate and Resimulation no longer resets.";

	if (player.atomShopItem19Bought == false){
		document.getElementById("atomShopItem19").innerHTML = "Multiply EP based on total Skillpoints. Keep Simulation Upgrades and Omega Upgrades on Reality.<br>Cost: 1e650 Atoms"; 
	}
	else document.getElementById("atomShopItem19").innerHTML = "Multiply EP based on total Skillpoints. Keep Simulation Upgrades and Omega Upgrades on Reality.<br>Current: " + format(player.atomShopItem19Effect, 2) + "x";

	if (player.atomShopItem20Bought == false){
		document.getElementById("atomShopItem20").innerHTML = "You unlock a 2x OP Button and the Omega Generator Autobuyer also buys this. Unlock ??? (Not out yet)<br>Cost: 1e700 Atoms"; 
		document.getElementById("omegaPointMult").classList.add("locked");
	}
	else {
		document.getElementById("atomShopItem20").innerHTML = "You unlock a 2x OP Button and the Omega Generator Autobuyer also buys this. Unlock ??? (Not out yet)";
		document.getElementById("omegaPointMult").classList.remove("locked");
	}
}

const hpProgress = document.getElementById("hpBar");
const hpProgressFriendly = document.getElementById("friendlyHPBar");
const hpProgressEnemy = document.getElementById("enemyHPBar");
const xpProgress = document.getElementById("xpBar");

function getHpBar(){
	var hpValue = player.monsterCurrentHP.div(player.monsterTotalHP).times(100);
	hpProgress.style.setProperty("--width", hpValue);
	
	var hpValueFriendly = player.friendlyHealthCurrent.div(player.friendlyHealthTotal).times(100);
	hpProgressFriendly.style.setProperty("--width", hpValueFriendly);
	
	var hpValueEnemy = player.enemyHealthCurrent.div(player.enemyHealthTotal).times(100);
	hpProgressEnemy.style.setProperty("--width", hpValueEnemy);
	
	var xpValue = player.currentXp.div(player.needToLvlUpXp).times(100);
	xpProgress.style.setProperty("--width", xpValue);
}

function buyHero(hero){
	if (hero == 1){
		if (player.simGold.gte(player.goldFarmerCost)){
			player.goldFarmerScaleScale = new Decimal(Decimal.floor(player.goldFarmerLevel.div(200)).plus(1));
			player.goldFarmerScale = new Decimal(Decimal.floor(player.goldFarmerLevel.div(40)).plus(player.goldFarmerScaleScale));
			player.simGold = player.simGold.minus(player.goldFarmerCost);
			player.goldFarmerCost = player.goldFarmerCost.times(Decimal.pow(10, player.goldFarmerScale));
			player.goldFarmerLevel = player.goldFarmerLevel.plus(1);
			player.goldFarmerMult = player.goldFarmerMult.times(1.75);
		}
	}
	
	if (hero == 2){
		if (player.simGold.gte(player.hybridCost)){
			player.hybridScaleScale = new Decimal(Decimal.floor(player.hybridLevel.div(200)).plus(1));
			player.hybridScale = new Decimal(Decimal.floor(player.hybridLevel.div(40)).plus(player.hybridScaleScale));
			player.simGold = player.simGold.minus(player.hybridCost);
			player.hybridCost = player.hybridCost.times(Decimal.pow(10, player.hybridScale));
			player.hybridLevel = player.hybridLevel.plus(1);
			player.hybridMult = player.hybridMult.times(1.5);
		}
	}
	
	if (hero == 3){
		if (player.simGold.gte(player.PVPLegendCost)){
			player.PVPLegendScaleScale = new Decimal(Decimal.floor(player.PVPLegendLevel.div(200)).plus(1));
			player.PVPLegendScale = new Decimal(Decimal.floor(player.PVPLegendLevel.div(40)).plus(player.PVPLegendScaleScale));
			player.simGold = player.simGold.minus(player.PVPLegendCost);
			player.PVPLegendCost = player.PVPLegendCost.times(Decimal.pow(10, player.PVPLegendScale));
			player.PVPLegendLevel = player.PVPLegendLevel.plus(1);
			player.PVPLegendMult = player.PVPLegendMult.times(1.75);
		}
	}
}

function resimulate(){
	if (player.simGold.gte(new Decimal(1e6))){
		if (((Decimal.sqrt(player.simGold.pow(player.eighthSimUpgrade))).div(100)).gt(player.resimulateDPSMult)){
			player.resimulateDPSMult = Decimal.sqrt(player.simGold.pow(player.eighthSimUpgrade)).div(100);
			player.resimulateStageExponentMult = new Decimal(1).plus(Decimal.log10(player.simGold.pow(player.eighthSimUpgrade)).div(60));
			
			if (player.atomShopItem18Bought == false){
				player.stage = new Decimal(1);
				player.DPS = new Decimal(1);
				player.finalDPS = new Decimal(1);
				player.stageExponent = new Decimal(2);
				
				player.goldFarmerLevel = new Decimal(1);
				player.goldFarmerMult = new Decimal(1);
				player.goldFarmerCost = new Decimal(10);
				
				player.hybridLevel = new Decimal(1);
				player.hybridMult = new Decimal(1);
				player.hybridCost = new Decimal(10);
				
				player.PVPLegendLevel = new Decimal(1);
				player.PVPLegendMult = new Decimal(1);
				player.PVPLegendCost = new Decimal(10);
				
				player.monsterTotalHP = new Decimal(10);
				player.monsterCurrentHP = new Decimal(10);
				
				player.firstSimUpgrade = new Decimal(1);
				player.secondSimUpgrade = new Decimal(1);
				player.thirdSimUpgrade = new Decimal(1);
				player.fourthSimUpgrade = new Decimal(1);
				player.fifthSimUpgrade = new Decimal(1.25);
				
				player.simGold = new Decimal(0);
			}
		}
	}
}

function buySimUpgrade(upgrade){
	if (upgrade == 1){
		if (player.simGold.gte(1e8) && player.firstSimUpgradeBought == false){
			player.simGold = player.simGold.minus(1e8);
			player.firstSimUpgradeBought = true;
		}
	}
	
	if (upgrade == 2){
		if (player.simGold.gte(1e12) && player.secondSimUpgradeBought == false){
			player.simGold = player.simGold.minus(1e12);
			player.secondSimUpgradeBought = true;
		}
	}
	
	if (upgrade == 3){
		if (player.simGold.gte(1e16) && player.thirdSimUpgradeBought == false){
			player.simGold = player.simGold.minus(1e16);
			player.thirdSimUpgradeBought = true;
		}
	}
	
	if (upgrade == 4){
		if (player.simGold.gte(1e18) && player.fourthSimUpgradeBought == false){
			player.simGold = player.simGold.minus(1e18);
			player.fourthSimUpgradeBought = true;
		}
	}
	
	if (upgrade == 5){
		if (player.simGold.gte(1e56) && player.fifthSimUpgradeBought == false){
			player.simGold = player.simGold.minus(1e56);
			player.fifthSimUpgradeBought = true;
		}
	}
	
	if (upgrade == 6){
		if (player.simGold.gte("1e500")){
			player.simGold = player.simGold.minus("1e500");
			player.sixthSimUpgradeBought = true;
		}
	}
	
	if (upgrade == 7){
		if (player.simGold.gte("1e950")){
			player.simGold = player.simGold.minus("1e950");
			player.seventhSimUpgradeBought = true;
		}
	}
	
	if (upgrade == 8){
		if (player.simGold.gte("1e1358")){
			player.simGold = player.simGold.minus("1e1358");
			player.eighthSimUpgradeBought = true;
		}
	}
}

function productionLoop(diff){
	player.gold = player.gold.plus(player.firstAmount.times(player.firstFinalMult.times(diff)));
	player.electricity = player.electricity.plus(player.firstExpansionGeneratorAmount.times(player.firstExpansionGeneratorFinalMult.times(diff)));
	player.omega = player.omega.plus(player.firstOmegaGeneratorAmount.times(player.firstOmegaGeneratorFinalMult.times(diff)));
	player.realityEnergy = player.realityEnergy.plus(player.firstRealityGeneratorAmount.times(player.firstRealityGeneratorFinalMult.times(diff)));
	for (tier = 2; tier < 9; tier++){
		player[TIER_NAMES[tier - 1] + "Amount"] = player[TIER_NAMES[tier - 1] + "Amount"].plus(player[TIER_NAMES[tier] + "Amount"].times(player[TIER_NAMES[tier] + "FinalMult"].times((diff / 5))));
		
		player[TIER_NAMES[tier - 1] + "ExpansionGeneratorAmount"] = player[TIER_NAMES[tier - 1] + "ExpansionGeneratorAmount"].plus(player[TIER_NAMES[tier] + "ExpansionGeneratorAmount"].times(player[TIER_NAMES[tier] + "ExpansionGeneratorFinalMult"].times(diff / 5)));
		
		player[TIER_NAMES[tier - 1] + "OmegaGeneratorAmount"] = player[TIER_NAMES[tier - 1] + "OmegaGeneratorAmount"].plus(player[TIER_NAMES[tier] + "OmegaGeneratorAmount"].times(player[TIER_NAMES[tier] + "OmegaGeneratorFinalMult"].times(diff / 5)));
		
		player[TIER_NAMES[tier - 1] + "RealityGeneratorAmount"] = player[TIER_NAMES[tier - 1] + "RealityGeneratorAmount"].plus(player[TIER_NAMES[tier] + "RealityGeneratorAmount"].times(player[TIER_NAMES[tier] + "RealityGeneratorFinalMult"].times(diff / 5)));
	}
	if (player.inGoldMode == true){
		player.simGold = player.simGold.plus((player.finalGPS).times(diff));
	}
	
	if (player.inFightingMode == true){
		player.monsterCurrentHP = player.monsterCurrentHP.minus(player.finalDPS.times(diff));
	}
	
	if (player.omegaUpgrade2x3y == true){
		player.eighthAmount = player.eighthAmount.plus((player.firstAmount.times(player.firstFinalMult)).pow(0.1).times(diff));
	}
	
	if (player.firstAtomUpgradeBought.gte(1)){
		if (((Decimal.floor(Decimal.log10(player.gold).div(((new Decimal(300)).div(player.expansionPointMultFinal)).times((new Decimal(1)).div((Decimal.log10(player.gold).div(300)).pow(3)))))).div(33)).gt(0)){
			player.expansionPoints = player.expansionPoints.plus(((Decimal.floor(Decimal.log10(player.gold).div(((new Decimal(300)).div(player.expansionPointMultFinal)).times((new Decimal(1)).div((Decimal.log10(player.gold).div(300)).pow(3))))))).times(diff));
		}
	}
	
	// MAX HEALTH
	if ((player.friendlyStamina.plus(player.talent12Effect)).eq(0)){
		player.friendlyHealthTotal = new Decimal(1);
	}
	else player.friendlyHealthTotal = ((player.friendlyStamina.plus(player.talent12Effect)).times(new Decimal(1).plus(player.superStamina.times(player.talent9Effect.plus(0.1))))).times(new Decimal(10).plus(player.talent6Effect));
	
	if (player.isResting == true){
		if (player.friendlyHealthCurrent.lt(player.friendlyHealthTotal)){
			player.friendlyHealthCurrent = player.friendlyHealthCurrent.plus((player.friendlyRegeneration.times(new Decimal(1).plus(player.talent1Effect)).plus(player.talent15Effect.times(100))).times(diff));
		}
		
		if (player.enemyHealthCurrent.lt(player.enemyHealthTotal)){
			player.enemyHealthCurrent = player.enemyHealthCurrent.plus(player.enemyRegeneration.times(diff));
		}
		
		if (player.friendlyHealthCurrent.sign == -1){
			player.friendlyHealthCurrent = new Decimal(0);
		}

		document.getElementById("friendlyHPBarTextDps").innerText = "Regenerating " + format((player.friendlyRegeneration.times(new Decimal(1).plus(player.talent1Effect)).plus(player.talent15Effect.times(100))), 2) + " HPS";

		document.getElementById("enemyHPBarTextDps").innerText = "Regenerating " + format(player.enemyRegeneration, 2) + " HPS";

	} 
	else{

		// HUSK Å OPPDATERE AUTOBUYEREN HVIS DU OPPDATERER DETTE!!!!!
		
		var friendlyStrengthDamage = player.friendlyStrength.times(new Decimal(1).plus(player.superStrength.times(0.1))).times(player.talent11Effect.plus(2));
		var talent3Damage = player.talent3Effect;
		var talent10Damage = player.talent10Effect;
		var friendlyFinalDamage = friendlyStrengthDamage.plus(talent3Damage).plus(talent10Damage);
		var friendlyArmor = (player.friendlyArmor.plus(player.talent14Effect).plus(player.talent15Effect2)).times(new Decimal(1).plus(player.superArmor.times(0.1)));
		var friendlyRegeneration = player.friendlyRegeneration.times(new Decimal(1).plus(player.superRegeneration.times(0.1)).plus(player.talent1Effect)).plus(player.talent15Effect);
		var friendlyAgility = (player.friendlyAgility.plus(player.talent2Effect).plus(player.talent13Effect)).times(new Decimal(0.75).plus(player.talent5Effect)).times(new Decimal(1).plus(player.superAgility.times(0.01)));
		
		var enemyFinalDamage = player.enemyStrength.times(2);
		var enemyArmor = player.enemyArmor;
		var enemyRegeneration = player.enemyRegeneration.minus(player.talent8Effect);
		var enemyAgility = (player.enemyAgility.minus(player.talent7Effect)).times(0.75);
		
		var friendlyArmorEffectPositive = (new Decimal(1.05).plus(player.talent4Effect)).pow(friendlyArmor);
		var friendlyArmorEffectNegative = new Decimal(1).plus(new Decimal(0.05).times(enemyAgility.minus(friendlyArmor)));
		
		var enemyArmorEffectPositive = new Decimal(1.05).pow(enemyArmor);
		var enemyArmorEffectNegative = new Decimal(1).plus(new Decimal(0.05).times(friendlyAgility.minus(enemyArmor)));
		
		if ((friendlyArmor.minus(enemyAgility)).lt(0)){
			player.friendlyHealthCurrent = player.friendlyHealthCurrent.minus((enemyFinalDamage.times(friendlyArmorEffectNegative).minus(friendlyRegeneration)).times(diff));

			if ((enemyFinalDamage.times(friendlyArmorEffectNegative).minus(friendlyRegeneration)).lte(0)){
				document.getElementById("friendlyHPBarTextDps").innerText = "Taking 0 DPS";
			}
			else {
				document.getElementById("friendlyHPBarTextDps").innerText = "Taking " + format((enemyFinalDamage.times(friendlyArmorEffectNegative).minus(friendlyRegeneration)), 2) + " DPS";
			}
		}
		else {
			player.friendlyHealthCurrent = player.friendlyHealthCurrent.minus((enemyFinalDamage.div(friendlyArmorEffectPositive).minus(friendlyRegeneration)).times(diff));

			if ((enemyFinalDamage.div(friendlyArmorEffectPositive).minus(friendlyRegeneration)).lte(0)){
				document.getElementById("friendlyHPBarTextDps").innerText = "Taking 0 DPS";
			}
			else {
				document.getElementById("friendlyHPBarTextDps").innerText = "Taking " + format((enemyFinalDamage.div(friendlyArmorEffectPositive).minus(friendlyRegeneration)), 2) + " DPS";
			}
		}
		
		if ((enemyArmor.minus(friendlyAgility)).lt(0)){
			player.enemyHealthCurrent = player.enemyHealthCurrent.minus((friendlyFinalDamage.times(enemyArmorEffectNegative).minus(enemyRegeneration)).times(diff));
			
			if ((friendlyFinalDamage.times(enemyArmorEffectNegative).minus(enemyRegeneration)).lte(0)){
				document.getElementById("enemyHPBarTextDps").innerText = "Taking 0 DPS";
			}
			else {
				document.getElementById("enemyHPBarTextDps").innerText = "Taking " + format((friendlyFinalDamage.times(enemyArmorEffectNegative).minus(enemyRegeneration)), 2) + " DPS";
			}
		}
		else {
			player.enemyHealthCurrent = player.enemyHealthCurrent.minus((friendlyFinalDamage.div(enemyArmorEffectPositive).minus(enemyRegeneration)).times(diff));

			if ((friendlyFinalDamage.div(enemyArmorEffectPositive).minus(enemyRegeneration)).lte(0)){
				document.getElementById("enemyHPBarTextDps").innerText = "Taking 0 DPS";
			}
			else {
				document.getElementById("enemyHPBarTextDps").innerText = "Taking " + format((friendlyFinalDamage.div(enemyArmorEffectPositive).minus(enemyRegeneration)), 2) + " DPS";
			}
		}
	}
	if (player.friendlyHealthCurrent.gt(player.friendlyHealthTotal)){
		player.friendlyHealthCurrent = player.friendlyHealthTotal;
	}
	
	if (player.enemyHealthCurrent.gt(player.enemyHealthTotal)){
		player.enemyHealthCurrent = player.enemyHealthTotal;
	}
	
	if (player.friendlyHealthCurrent.lte(0)){
		restOrFight(1);
	}
	
	if (player.battleTowerAutobuyerChecked == false){
		if (player.enemyHealthCurrent.lte(0)){
			if (player.isBoss == true){
				if (player.bossesKilled == 0 && player.enemyLevel.eq(100)){
					player.bossesKilled = new Decimal(1);
					player.maxEnemyLevel = new Decimal(200);
				}
				if (player.bossesKilled == 1 && player.enemyLevel.eq(200)){
					player.bossesKilled = new Decimal(2);
					player.maxEnemyLevel = new Decimal(300);
				}
				if (player.bossesKilled == 2 && player.enemyLevel.eq(300)){
					player.bossesKilled = new Decimal(3);
					player.maxEnemyLevel = new Decimal(400);
				}
				if (player.bossesKilled == 3 && player.enemyLevel.eq(400)){
					player.bossesKilled = new Decimal(4);
					player.maxEnemyLevel = new Decimal(500);
				}
				if (player.bossesKilled == 4 && player.enemyLevel.eq(500)){
					player.bossesKilled = new Decimal(5);
					player.maxEnemyLevel = new Decimal(1e300);
				}
			}
	
			if (player.isLegendary == true){
				player.atoms = player.atoms.plus(Decimal.floor((new Decimal(1.1).pow(player.enemyLevel)).times(player.atomShopItem2Effect)));
			}
			
			player.currentXp = player.currentXp.plus(new Decimal(1.3).pow(player.enemyLevel));
			
			if (player.highestEnemyLevel.lt(player.enemyLevel)){
				player.highestEnemyLevel = player.enemyLevel;
			}
			
			if (player.atomShopItem1Bought == true && player.atomShopItem1Skillpoints.lt(player.highestFriendlyLevel.times(3))){
				if (player.atomShopItem1Counter.lt(player.atomShopItem13Effect.minus(1))){
					player.atomShopItem1Counter = player.atomShopItem1Counter.plus(1);
				}
				else {
					player.atomShopItem1Counter = new Decimal(0);
					player.atomShopItem1Skillpoints = player.atomShopItem1Skillpoints.plus(1);
					player.skillpoints = player.skillpoints.plus(1);
				}
			}
	
			if (player.atomShopItem9Bought == true && player.atomShopItem9Skillpoints.lt(player.highestEnemyLevel)){
				if (player.atomShopItem9Counter.lt(player.atomShopItem13Effect.minus(1))){
					player.atomShopItem9Counter = player.atomShopItem9Counter.plus(1);
				}
				else {
					player.atomShopItem9Counter = new Decimal(0);
					player.atomShopItem9Skillpoints = player.atomShopItem9Skillpoints.plus(1);
					player.skillpoints = player.skillpoints.plus(1);
				}
			}
			
			generateEnemy(player.enemyLevel);
		}
	}
	
	if (player.currentXp.gte(player.needToLvlUpXp)){
		player.currentXp = new Decimal(0);
		player.needToLvlUpXp = player.needToLvlUpXp.times(1.5);
		player.friendlyLevel = player.friendlyLevel.plus(1);
		player.skillpoints = player.skillpoints.plus(3);
		if (player.highestFriendlyLevel.lt(player.friendlyLevel)){
			player.highestFriendlyLevel = player.friendlyLevel;
		}
	}
}

var tabButtons = document.querySelectorAll(".buttonContainer button");
var tabPanels = document.querySelectorAll(".tabPanel");

function showPanel(panelIndex, colorCode){
	tabButtons.forEach(function(node){
		node.style.backgroundColor = "";
		node.style.color = "";
	});
	
	tabButtons[panelIndex].style.backgroundColor=colorCode;
	tabButtons[panelIndex].color = "white";
	tabPanels.forEach(function(node){
		node.style.display = "none";
	});
	
	tabPanels[panelIndex].style.display="grid";
}

showPanel(0, '#3f5a4f');

function mainLoop(){
	diff = (Date.now() - lastUpdate) / 1000;
	lastUpdate = Date.now(); 

	time(diff);
	getFinalAllMult();
	getFinalGenMult();
	getFinalMultPerBuy();
	getFinalAllMultCost();
	getFinalAllMultGain();
	updateGUI();
	getExpansionUpgradeEffect();
	getFinalExpansionPointMult();
	getExpansionUpgradeTrue();
	getOmegaUpgradeEffect();
	getFinalOmegaPointMult();
	getElectrons(diff);
	getLoop();
	getABGText();
	productionLoop(diff);
	autobuy();
	fight();
	getHpBar();
	getRealityBonus();
}

setInterval(mainLoop, 50);

setInterval(save, 10000);

updateGUI();
