var lastUpdate = Date.now();
var TIER_NAMES = [ null, "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth" ];
var DISPLAY_NAMES = [ null, "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth" ];
var player = {
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
	
	firstMult: new Decimal(2),
    secondMult: new Decimal(1.5),
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
	
	seconds: new Decimal(0),
	minuts: new Decimal(0),
	hours: new Decimal(0),
	days: new Decimal(0),
	years: new Decimal(0),
	totalSeconds: new Decimal(0),
	secondsInExpansion: new Decimal(0),
	secondsInOmega: new Decimal(0),
	
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
	secondElectronUpgradeCost: new Decimal(1e5),
	thirdElectronUpgradeCost: new Decimal(1000),
	thirdElectronUpgradeCost4x3y: new Decimal(1),
	thirdElectronUpgradeCost4x4y: new Decimal(1),
	
	firstAtomUpgradeBought: new Decimal(0),
	secondAtomUpgradeBought: new Decimal(0),
	thirdAtomUpgradeBought: new Decimal(0),
	
	firstAtomUpgrade3: new Decimal(1),
	secondAtomUpgrade3: new Decimal(1),
	thirdAtomUpgrade3: 0,
	
	firstAtomUpgradeCost: new Decimal(1),
	secondAtomUpgradeCost: new Decimal(1),
	thirdAtomUpgradeCost: new Decimal(1)
	
};

var tempPlayer = player;

load();

Object.assign(tempPlayer, player);

player = tempPlayer;

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

		firstMult: new Decimal(2),
		secondMult: new Decimal(1.5),
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

		seconds: new Decimal(0),
		minuts: new Decimal(0),
		hours: new Decimal(0),
		days: new Decimal(0),
		years: new Decimal(0),
		totalSeconds: new Decimal(0),
		secondsInExpansion: new Decimal(0),
		secondsInOmega: new Decimal(0),

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
		secondElectronUpgradeCost: new Decimal(1e5),
		thirdElectronUpgradeCost: new Decimal(1000),
		thirdElectronUpgradeCost4x3y: new Decimal(1),
		thirdElectronUpgradeCost4x4y: new Decimal(1),
		
		firstAtomUpgradeBought: new Decimal(0),
		secondAtomUpgradeBought: new Decimal(0),
		thirdAtomUpgradeBought: new Decimal(0),

		firstAtomUpgrade3: new Decimal(1),
		secondAtomUpgrade3: new Decimal(1),
		thirdAtomUpgrade3: 0,
		
		firstAtomUpgradeCost: new Decimal(1),
		secondAtomUpgradeCost: new Decimal(1),
		thirdAtomUpgradeCost: new Decimal(1)
	};
	clearInterval(electronInterval);
	electronInterval = setInterval(getElectrons, 1000);
}

function test(){
	//player.gold = player.gold.pow(10);
	//player.omega = player.omega.pow(10);
	//player.simGold = player.simGold.times(10);
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

function transformToDecimal(object) { 
    for (i in object) {
        if (typeof(object[i]) == "string" && !isNaN(new Decimal(object[i]).mag)) object[i] = new Decimal(object[i]); 
        if (typeof(object[i]) == "object") transformToDecimal(object[i]) 
    }
}

function time(){
	player.seconds = player.seconds.plus(1);
	player.totalSeconds = player.totalSeconds.plus(1);
	player.secondsInExpansion = player.secondsInExpansion.plus(1);
	player.secondsInOmega = player.secondsInOmega.plus(1);
	
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
	//console.log(player.seconds + " " + player.minuts + " " + player.hours + " " + player.days + " " + player.years + "||||" + player.totalSeconds + " " + player.secondsInExpansion);
}

setInterval(time, 1000);

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
	var buys = new Decimal(Decimal.floor(308/tier));
	var buys2 = [null, 2310, 1380, 950, 705, 550, 445, 370, 310];
	
	if (player[name + "Bought"].gt(buys2[tier]) && player.gold.gt(player[name + "Cost"])){
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
	var buys = new Decimal(102);
	var buys2 = new Decimal(1500);
	getFinalAllMultCost();
	
	if (buys2.lt(player.allMultBought) && player.gold.gt(player.allMultFinalCost)){
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
		
		player[name + "ExpansionGeneratorFinalMult"] = (player[name + "ExpansionGeneratorMult"].times(player.expansionGeneratorAllMultFromEleventhExpansionUpgrade).times(player.expansionGeneratorAllMultFromFirstBetaUpgrade).times(player.expansionGeneratorAllMultFromFifthBetaUpgrade).times(((player.omega).plus(1)).pow(3))).pow(player.allExpansionGeneratorPow);
		if (tier === 1){
			player.firstExpansionGeneratorFinalMult = (player.firstExpansionGeneratorMult.times(player.firstExpansionMultFromUpgrades).times(player.expansionGeneratorAllMultFromEleventhExpansionUpgrade).times(player.expansionGeneratorAllMultFromFirstBetaUpgrade).times(player.firstExpansionGeneratorMultFromSecondBetaUpgrade).times(player.expansionGeneratorAllMultFromFifthBetaUpgrade)).pow(player.allExpansionGeneratorPow);
			
		}
		
		player[name + "OmegaGeneratorFinalMult"] = player[name + "OmegaGeneratorMult"];
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
	player.allMultFinal = player.allMult.times(player.allMultFromPrestige).times(player.allMultFromFirstExpansionUpgrade).times(player.allMultFromFourthExpansionUpgrade).times(player.allMultFromEighthExpansionUpgrade).times(player.allMultFromTenthExpansionUpgrade).times(player.allMultFromFirstGammaUpgrade).times(player.allMultFromFifthGammaUpgrade);
}

function getFinalExpansionPointMult(){
	player.expansionPointMultFinal = player.expansionPointMult.times(player.expansionPointMultFromNinthExpansionUpgrade).times(player.expansionPointMultFromThirteenthExpansionUpgrade).times(player.expansionPointMultFromFirstAlphaUpgrade).times(player.expansionPointMultFromFifthAlphaUpgrade).times(player.expansionPointMultFromSecondAlphaUpgrade).times(player.expansionPointMultFromOmegaUpgrade4x1y);
}

function getFinalOmegaPointMult(){
	player.omegaPointMultFinal = player.omegaPointMult.times(player.omegaPointMultFrom2x2y);
}

function passiveExpansionPoints(){
	if (player.firstAtomUpgradeBought.gte(1)){
		if (((Decimal.floor(Decimal.log10(player.gold).div(((new Decimal(300)).div(player.expansionPointMultFinal)).times((new Decimal(1)).div((Decimal.log10(player.gold).div(300)).pow(3)))))).div(33)).gt(0)){
		player.expansionPoints = player.expansionPoints.plus((Decimal.floor(Decimal.log10(player.gold).div(((new Decimal(300)).div(player.expansionPointMultFinal)).times((new Decimal(1)).div((Decimal.log10(player.gold).div(300)).pow(3)))))).div(33));
	}
	}
	//Det står if FORMULAEN > 0 så gjør den det. Hvis ikke blir det NaN -- SJEKK AT DET ER RIKTIG FORMULA!!!!!!!!!
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

		player.firstMult = new Decimal(2);
		player.secondMult = new Decimal(1.5);
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
		player.allMultFromFirstGammaUpgrade = new Decimal(1);
		player.allMultFromFifthGammaUpgrade = new Decimal(1);
		player.allMultNewBaseCost = new Decimal(1e52);
		player.allMultNewBaseCostInc = new Decimal(100);
		
		player.expansionPointMultFromNinthExpansionUpgrade = new Decimal(1);
		player.expansionPointMultFromThirteenthExpansionUpgrade = new Decimal(1);
		
		buyGenerator(1);
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
			for (i = 0; i < 2000; i++){
				buyAllMult();
			}
		}	
	}
}

document.onkeydown = function(e){
	if (e.which == 77){
		maxAll();
	}
}

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

			player.firstMult = new Decimal(2);
			player.secondMult = new Decimal(1.5);
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
		document.getElementById("expUp1").innerHTML = "Gain a 20x multiplier<br>to every generator";
	}
	else {
		document.getElementById("expUp1").innerHTML = "Gain a 20x multiplier<br>to every generator"
		document.getElementById("expUp1").classList.add("locked");
	};
	
	if (player.expansionUpgrade2 == true){
		document.getElementById("expUp2").classList.remove("locked");
		document.getElementById("expUp2").innerHTML = "Multiply your all<br>mult gain by 1.1x";
	}
	else {
		document.getElementById("expUp2").innerHTML = "Multiply your all<br>mult gain by 1.1x";
		document.getElementById("expUp2").classList.add("locked");
	}

		
	if (player.expansionUpgrade3 == true){
		document.getElementById("expUp3").classList.remove("locked");
		document.getElementById("expUp3").innerHTML = "Increase max prestige<br>by 35<br>Current: " + format(player.maxPrestige, 0);
	}
	else {
		document.getElementById("expUp3").innerHTML = "Increase max prestige<br>by 35<br>Current: 15";
		document.getElementById("expUp3").classList.add("locked");
	}
	
	if (player.expansionUpgrade4 == true){
		document.getElementById("expUp4").classList.remove("locked");
		document.getElementById("expUp4").innerHTML = "Gain a multiplier to<br>all generators based<br>on current Energy <br>Current: " + format(player.allMultFromFourthExpansionUpgrade, 2) + "x";
	}
	else {
		document.getElementById("expUp4").innerHTML = "Gain a multiplier to<br>all generators based<br>on current Energy <br>Current: 1x";
		document.getElementById("expUp4").classList.add("locked");
	}
	
	if (player.expansionUpgrade5 == true){
		document.getElementById("expUp5").classList.remove("locked");
		document.getElementById("expUp5").innerHTML = "Unlock automatic<br>prestige autobuyer.<br>Prestige doesn't<br>reset.";
	}
	else {
		document.getElementById("expUp5").innerHTML = "Unlock automatic<br>prestige autobuyer.<br>Prestige doesn't<br>reset.";
		document.getElementById("expUp5").classList.add("locked");
	}
	
	if (player.expansionUpgrade6 == true){
		document.getElementById("expUp6").classList.remove("locked");
		document.getElementById("expUp6").innerHTML = "Remove the max<br>prestige limit.";
		document.getElementById("expUp3").innerHTML = "Increase max prestige<br>by 35<br>Current: Infinite";
	}
	else {
		document.getElementById("expUp6").innerHTML = "Remove the max<br>prestige limit.";
		document.getElementById("expUp6").classList.add("locked");
	}
	
	if (player.expansionUpgrade7 == true){
		document.getElementById("expUp7").classList.remove("locked");
		document.getElementById("expUp7").innerHTML = "Unlock generator<br>and all mult<br>autobuyers";
	}
	else {
		document.getElementById("expUp7").innerHTML = "Unlock generator<br>and all mult<br>autobuyers";
		document.getElementById("expUp7").classList.add("locked");
	}
	
	if (player.expansionUpgrade8 == true){
		document.getElementById("expUp8").classList.remove("locked");
		document.getElementById("expUp8").innerHTML = "Gain a multiplier<br>to all generators<br>based on EP<br>Current: " + format(player.allMultFromEighthExpansionUpgrade, 2) + "x";
	}
	else {
		document.getElementById("expUp8").innerHTML = "Gain a multiplier<br>to all generators<br>based on EP<br>Current: " + format(player.allMultFromEighthExpansionUpgrade, 2) + "x";
		document.getElementById("expUp8").classList.add("locked");
	}
	
	if (player.expansionUpgrade9 == true){
		document.getElementById("expUp9").classList.remove("locked");
		document.getElementById("expUp9").innerHTML = "Gain a multiplier<br>to EP gain<br>based on first<br>generator prestiges<br>Current: " + format(player.expansionPointMultFromNinthExpansionUpgrade, 0) + "x";
	}
	else {
		document.getElementById("expUp9").innerHTML = "Gain a multiplier<br>to EP gain<br>based on first<br>generator prestiges<br>Current: 1x";
		document.getElementById("expUp9").classList.add("locked");
	}
	
	if (player.expansionUpgrade10 == true){
		document.getElementById("expUp10").classList.remove("locked");
		document.getElementById("expUp10").innerHTML = "Gain a multiplier<br>to all generators<br>based on electricity<br>Current: " + format(player.allMultFromTenthExpansionUpgrade, 2) + "x";
	}
	else {
		document.getElementById("expUp10").innerHTML = "Gain a multiplier<br>to all generators<br>based on electricity<br>Current: 1x";
		document.getElementById("expUp10").classList.add("locked");
	}
	
	if (player.expansionUpgrade11 == true){
		document.getElementById("expUp11").classList.remove("locked");
		document.getElementById("expUp11").innerHTML = "Gain a multiplier<br>to all<br>expansion generators<br>based on EP<br>Current: " + format(player.expansionGeneratorAllMultFromEleventhExpansionUpgrade, 2) + "x";
	}
	else {
		document.getElementById("expUp11").innerHTML = "Gain a multiplier<br>to all<br>expansion generators<br>based on EP<br>Current: 1x";
		document.getElementById("expUp11").classList.add("locked");
	}
	
	if (player.expansionUpgrade12 == true){
		document.getElementById("expUp12").classList.remove("locked");
		document.getElementById("expUp12").innerHTML = "Increase your all<br>mult gain based<br>on highest ever EP<br>Current: " + format(player.allMultGainFromTwelfthExpansionUpgrade, 2) + "x";
	}
	else {
		document.getElementById("expUp12").innerHTML = "Increase your all<br>mult gain based<br>on EP<br>Current: " + format(player.allMultGainFromTwelfthExpansionUpgrade, 2) + "x";
		document.getElementById("expUp12").classList.add("locked");
	}
	
	if (player.expansionUpgrade13 == true){
		document.getElementById("expUp13").classList.remove("locked");
		document.getElementById("expUp13").innerHTML = "Gain a multiplier<br>to EP gain<br>based on expansions<br>Current: " + format(player.expansionPointMultFromThirteenthExpansionUpgrade, 0) + "x";
	}
	else {
		document.getElementById("expUp13").innerHTML = "Gain a multiplier<br>to EP gain<br>based on expansions<br>Current: 1x";
		document.getElementById("expUp13").classList.add("locked");
	}
	
	if (player.expansionUpgrade14 == true){
		document.getElementById("expUp14").classList.remove("locked");
		document.getElementById("expUp14").innerHTML = "Unlock expansion<br>autobuyer";
	}
	else {
		document.getElementById("expUp14").innerHTML = "Unlock expansion<br>autobuyer";
		document.getElementById("expUp14").classList.add("locked");
	}
	
	if (player.expansionUpgrade15 == true){
		document.getElementById("expUp15").classList.remove("locked");
		document.getElementById("expUp15").innerHTML = "Alpha, Beta and<br>Gamma unlocked!";
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
		if (((Decimal.log10(player.expansionPoints)).div(2)).gt(1)){
			player.expansionGeneratorAllMultFromEleventhExpansionUpgrade = ((Decimal.log10(player.expansionPoints)).div(2)).plus(1);
		}
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
	else player.expansionPointMultFromSecondAlphaUpgrade = ((player.secondsInExpansion.div(5)).pow(player.alphaUpgrade2)).plus(1);
	
	player.alphaUpgrade5FinalMult = player.alphaUpgrade5MultIncreaseFromOmegaUpgrade1x2y.times(2.5);
	player.expansionPointMultFromFifthAlphaUpgrade = player.alphaUpgrade5FinalMult.pow(player.alphaUpgrade5);
	
	player.betaUpgrade5FinalMult = player.betaUpgrade5MultIncreaseFromOmegaUpgrade1x3y.times(3).times(player.betaUpgrade5MultIncreaseFromOmegaUpgrade4x3y);
	player.expansionGeneratorAllMultFromFifthBetaUpgrade = player.betaUpgrade5FinalMult.pow(player.betaUpgrade5);
	
	player.gammaUpgrade5FinalMult = player.gammaUpgrade5MultIncreaseFromOmegaUpgrade1x4y.times(1e20);
	player.allMultFromFifthGammaUpgrade = player.gammaUpgrade5FinalMult.pow(player.gammaUpgrade5);
	
	player.finalDPS = player.DPS.times(player.PVPLegendMult).times(player.hybridMult).times(player.resimulateDPSMult).times(player.secondSimUpgrade).times(player.thirdSimUpgrade).times(player.seventhSimUpgrade);
	
	player.finalGPS = (player.stage.pow(player.stageExponent)).times(player.goldFarmerMult).times(player.hybridMult).times(player.firstSimUpgrade).times(player.secondSimUpgrade).times(player.fifthSimUpgrade);
	
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
	
	player.electronGainFinal = player.electronGain.times(player.electronGainFromOmegaUpgrade3x3y);
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

function autobuy(){
	if (document.getElementById("autoPrestigeCheck").checked == true && (player.expansionUpgrade5 == true || player.eighthSimUpgradeBought == true)){
		for (tier = 1; tier < 9; tier++){
			for (i = 0; i < 1000; i++){
				prestige(tier);
			}
		}
		player.prestigeAutobuyerChecked = true;
	}
	else player.prestigeAutobuyerChecked = false;
	
	if (document.getElementById("autoGeneratorCheck").checked == true && (player.expansionUpgrade7 == true || player.eighthSimUpgradeBought == true)){
		for (tier = 1; tier < 9; tier++){
			for (i = 0; i < 1000; i++){
				buyGenerator(tier);
			}
		}
		player.generatorAutobuyerChecked = true;
	}
	else player.generatorAutobuyerChecked = false;
	
	if (document.getElementById("autoAllMultCheck").checked == true && (player.expansionUpgrade7 == true || player.eighthSimUpgradeBought == true)){
		for (i = 0; i < 1000; i++){
			buyAllMult();
		}
		player.allMultAutobuyerChecked = true;
	}
	else player.allMultAutobuyerChecked = false;
	
	if (document.getElementById("autoExpansionCheck").checked == true && (player.expansionUpgrade14 == true || player.eighthSimUpgradeBought == true)){
		var expAt = document.getElementById("autoExpansionText").value;
		if (((Decimal.floor(Decimal.log10(player.gold).div(((new Decimal(300)).div(player.expansionPointMultFinal)).times((new Decimal(1)).div((Decimal.log10(player.gold).div(300)).pow(3))))))).gt(new Decimal(expAt))){
			expand();
		}
		player.expansionAutobuyerChecked = true;
	}
	else player.expansionAutobuyerChecked = false;
	
	if (document.getElementById("autoABGCheck").checked == true && (player.alphaUpgrade4 == 1 || player.eighthSimUpgradeBought == true)){
		for (let i = 0; i < 50; i++){
			buyAlpha();
			buyBeta();
			buyGamma();
		}
		player.alphaBetaGammaAutobuyerChecked = true;
	}
	else player.alphaBetaGammaAutobuyerChecked = false;
	
	if (document.getElementById("autoExpansionPointMultCheck").checked == true && (player.gammaUpgrade4 == 1 || player.eighthSimUpgradeBought == true)){
		for (let i = 0; i < 100; i++){
			epMult();
		}
		player.expansionPointMultAutobuyerChecked = true;
	}
	else player.expansionPointMultAutobuyerChecked = false;
	
	if (document.getElementById("autoExpansionGeneratorCheck").checked == true && (player.gammaUpgrade4 == 1 || player.eighthSimUpgradeBought == true)){
		for (let tier = 1; tier < 9; tier++){
			for (let i = 0; i < 100; i++){
				buyExpansionGenerator(tier);
			}
		}
		player.expansionGeneratorAutobuyerChecked = true;
	}
	else player.expansionGeneratorAutobuyerChecked = false;
	
	if (document.getElementById("autoABGUpgrade5Check").checked == true && (player.betaUpgrade4 == 1 || player.eighthSimUpgradeBought == true)){
		for (let i = 0; i < 100; i++){
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
	
	if (document.getElementById("autoSimulationHeroCheck").checked == true && (player.sixthSimUpgradeBought == true || player.eighthSimUpgradeBought == true)){
		for (let i = 0; i < 1000; i++){
			buyHero(1);
			buyHero(2);
			buyHero(3);
		}
		player.simulationHeroAutobuyerChecked = true;
	}
	else player.simulationHeroAutobuyerChecked = false;
	
	if (document.getElementById("autoFightCheck").checked == true && (player.sixthSimUpgradeBought == true || player.eighthSimUpgradeBought == true)){
		if ((player.finalDPS.div(player.monsterTotalHP)).gt(10)){
			simMode(2);
		}
		else simMode(1);
		player.fightingAutobuyerChecked = true;
	}
	else player.fightingAutobuyerChecked = false;
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
	if (player.gold.gt(player.alphaCost) || player.gold.eq(player.alphaCost)){
		if (player.alphaBought.gt(85)){
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
	if (player.expansionPoints.gt(player.betaCost) || player.expansionPoints.eq(player.betaCost)){
		if (player.betaBought.gt(85)){
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
		if (player.gammaBought.gt(85)){
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

		player.firstMult = new Decimal(2);
		player.secondMult = new Decimal(1.5);
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
		player.allMultGainFromSecondGammaUpgrade = new Decimal(1);
		player.allMultFromFourthExpansionUpgrade = new Decimal(1);
		player.allMultFromEighthExpansionUpgrade = new Decimal(1);
		player.allMultFromTenthExpansionUpgrade = new Decimal(1);
		player.allMultFromFirstGammaUpgrade = new Decimal(1);
		player.allMultFromFifthGammaUpgrade = new Decimal(1);
		player.allMultNewBaseCost = new Decimal(1e52);
		player.allMultNewBaseCostInc = new Decimal(100);

		player.multPerBuy = new Decimal(1.6);
		player.multPerBuyFinal = new Decimal(1.6);
		player.multPerBuyFromOmegaUpgrade1x1y = new Decimal(1);

		player.maxPrestige = new Decimal(15);
		player.prestigeEffectFromThirdGammaUpgrade = new Decimal(1);
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
		player.expansionPointMultFromFirstAlphaUpgrade = new Decimal(1);
		player.expansionPointMultFromFifthAlphaUpgrade = new Decimal(1);
		player.expansionUpgradeThirteenEffectIncrease = new Decimal(1);
		player.expansionPointMultFromSecondAlphaUpgrade = new Decimal(1);

		player.electricity = new Decimal(0);
		player.electricityEffectFromThirdBetaUpgrade = new Decimal(1);

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
		player.expansionGeneratorAllMultFromFirstBetaUpgrade = new Decimal(1);
		player.firstExpansionGeneratorMultFromSecondBetaUpgrade = new Decimal(1);
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
		
		player.omegaUpgradeReset = false;
		
		if (player.thirdAtomUpgradeBought.lt(2)){
			player.electrons = new Decimal(1);
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
		document.getElementById("omegaUpgrade6").innerHTML = document.getElementById("omegaUpgrade6").innerHTML = "Omega Point mult based<br>on current Omega." + "<br>Current: " + format(player.omegaPointMultFrom2x2y, 2) + "x";
		document.getElementById("omegaUp6").classList.remove("locked");
	}
	else {
		document.getElementById("omegaUpgrade6").innerHTML = document.getElementById("omegaUpgrade6").innerHTML = "Omega Point mult based<br>on current Omega." + "<br>Cost: " + format(player.omegaUpgradeCost, 0) + " Omega";
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
		if (((player.omega.pow(0.1)).div(63)).gt(1)){
			player.omegaPointMultFrom2x2y = (player.omega.pow(0.1)).div(63);
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

function getElectrons(){
	if (player.hasUnlockedElectrons == true){
		if (player.electrons.lt(player.maxElectrons)){
			player.electrons = player.electrons.times(player.electronGainFinal);
		}
		else if (player.electrons.gt(player.maxElectrons)){
			player.electrons = player.maxElectrons;
		}
	}
}

var electronInterval = setInterval(getElectrons, 1000-player.thirdAtomUpgrade3);

function resetElectronInterval(){
	clearInterval(electronInterval);
	electronInterval = setInterval(getElectrons, 1000-player.thirdAtomUpgrade3-player.electronMultiplyTime4x3y-player.electronMultiplyTime4x4y);
}

function buyElectronUpgrades(x) {
	if (x == 1){
		if (player.omegaPoints.gte(player.firstElectronUpgradeCost)){
			player.omegaPoints = player.omegaPoints.minus(player.firstElectronUpgradeCost);
			player.maxElectrons = player.maxElectrons.pow(2);
			player.firstElectronUpgradeCost = player.firstElectronUpgradeCost.times(4);
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
				
				player.thirdAtomUpgrade3 += 150;
				clearInterval(electronInterval);
				electronInterval = setInterval(getElectrons, 1000-player.thirdAtomUpgrade3);
			}
		}
		/*
		1. Keep some Electrons on atom reset
		2. Keep Electrons on omega
		3. Reduce Electron interval 
		*/
	}
	// UPGRADE 3 MÅ OGSÅ VÆRE LIMITED (KANSKJE 3 - 5 UPGRADES ELLER NOE) MEN DET MÅ VÆRE EN MAKS SÅ DET IKKE BLIR EN OPTIMAL MÅTE OG FOLK IKKE KJØPER EN AV DE F.EKS
	// UNLOCK EN 4. UPGRADE (NY KNAPP I MIDTEN UNDER/OVER DE ANDRE 3) ETTER DU HAR MAXA DE ANDRE 3. DENNE VIL DU KUN KUNNE KJØPE EN GANG OG VIL UPGRADEE NOE BASERT PÅ ATOMS. KANSKJE DET SKAL HELLER BARE VÆRE EN 4. UPGRADE PÅ NR 2
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
	document.getElementById("expansionAmountText").textContent = "You have " + format(player.expansionPoints) + " Expansion Points";
	document.getElementById("omegaAmountText").textContent = "You have " + format(player.omegaPoints) + " Omega Points";
	getOmegaUpgradeText();
	
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
	
	for (let tier = 1; tier < 9; tier++){
		let name = TIER_NAMES[tier];
		let display = DISPLAY_NAMES[tier];
		let cost = player[name + "Cost"];
		let expCost = player[name + "ExpansionGeneratorCost"];
		let omgCost = player[name + "OmegaGeneratorCost"];
		let amount = player[name + "Amount"];
		let expAmount = player[name + "ExpansionGeneratorAmount"];
		let omgAmount = player[name + "OmegaGeneratorAmount"];
		let mult = player[name + "FinalMult"];
		let expMult = player[name + "ExpansionGeneratorFinalMult"];
		let omgMult = player[name + "OmegaGeneratorFinalMult"];
		let bought = player[name + "Bought"];
		let expBought = player[name + "ExpansionGeneratorBought"];
		let omgBought = player[name + "OmegaGeneratorBought"];
		let prestigeAmount = player[name + "Prestige"];
		let prestigeCost = player[name + "PrestigeCost"];
		
		document.getElementById(name + "Generator").innerHTML = display + " Generator" + "<br>Amount: " + format(amount, 0) + "<br>Bought: " + format(bought, 0) + "<br>Mult: " + format(mult, 2) + "x<br>Cost: " + format(cost, 0);
		
		document.getElementById(name + "ExpansionGenerator").innerHTML = display + " Expansion Generator" + "<br>Amount: " + format(expAmount, 0) + "<br>Bought: " + format(expBought, 0) + "<br>Mult: " + format(expMult, 2) + "x<br>Cost: " + format(expCost, 0) + " EP";
		
		document.getElementById(name + "OmegaGenerator").innerHTML = display + " Omega Generator" + "<br>Amount: " + format(omgAmount, 0) + "<br>Bought: " + format(omgBought, 0) + "<br>Mult: " + format(omgMult, 2) + "x<br>Cost: " + format(omgCost, 0) + " OP";
		
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
		
		if (player[name + "Bought"].layer < player[name + "PrestigeCost"].layer  || ((player[name + "Bought"].layer == player[name + "PrestigeCost"].layer) && player[name + "Bought"].mag < player[name + "PrestigeCost"].mag)) {
			document.getElementById(name + "GeneratorPrestige").classList.add("locked");
		}
		else document.getElementById(name + "GeneratorPrestige").classList.remove("locked");
		
		if ((player.maxPrestige.layer == player[name + "Prestige"].layer) && (player.maxPrestige.mag == player[name + "Prestige"].mag)) {
			document.getElementById(name + "GeneratorPrestige").innerHTML = display + " Generator Prestige" + "<br>Amount: " + "MAX" + " (" + format(player[name + "Prestige"], 0) + ")" + "<br>Cost: " + format(prestigeCost, 0) + " " + display + " Generators Bought";
			document.getElementById(name + "GeneratorPrestige").classList.add("locked");
		}
		else document.getElementById(name + "GeneratorPrestige").innerHTML = display + " Generator Prestige" + "<br>Amount: " + format(prestigeAmount, 0) + "<br>Cost: " + format(prestigeCost, 0) + " " + display + " Generators Bought";
	}
	
	if (player.gold.lt(player.allMultFinalCost)){
		document.getElementById("allMultButton").classList.add("locked");
	} 
	else document.getElementById("allMultButton").classList.remove("locked");
	
	if (player.gold.gt(1e308)){
		document.getElementById("expansionButton").classList.remove("hidden");
	}
	else document.getElementById("expansionButton").classList.add("hidden");
	
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
	
	// AUTOBUYERS ************************************************************************************************
	
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
	
	
	// INFO TAB *****************
	
	let hotkeyText = "<p><b>HOTKEYS:</b><br>M: Buys all generators and all mult</p>";
	
	let generatorText = "<p><b>GENERATORS:</b><br>The first generator makes energy. Energy is the main currency you use to upgrade your generators <br>and your all mult. The second generator creates the first, the third creates the second and so on.</p>";
	
	let prestigeText = "<p><b>PRESTIGE:</b><br>Prestige resets your generators and your Energy, but you get a 2x multiplier to everything.<br>It's very worth it, and is necessary to progress.</p>";
	
	let expansionText = "<p><b>EXPANSION:</b><br>When you expand you reset everything and gain expansion points (EP). They are used to <br>upgrade expansion generators or your EP gain multiplier.<br>Expansion generators works like normal generators, except they make electricity instead of energy.<br>Electricity reduces the cost of the all mult upgrade.<br>Expansion upgrades are automatically unlocked every 100x electricity, starting at 1.</p>";
	
	let autobuyerText = "<p><b>AUTOBUYERS:</b><br>Autobuyers do things for you automatically! They can automatically prestige, buy generators,<br>or even expand. To activate them just check the box. You can decide how much EP you wanna get<br>when you expand with the expansion autobuyer. Just type in however much you want.</p>"
	
	let ABGText = "<p><b>ALPHA BETA GAMMA:</b><br>You can purchase three different currencies; Alpha, Beta and Gamma. Alpha costs energy, <br>Beta costs EP and Gamma costs electricity. You can use them to buy different upgrades!";
	
	let omegaText = "<p><b>OMEGA:</b><br>Becoming Omega resets everything you've done so far, but with some big rewards. <br>You unlock a new set of generators, and upgrades. Omega Generators produce Omega.<br>Omega makes electricity stronger and gives a multiplier to Expansion Generators<br>The upgrades costs Omega, and it goes up every time you buy another upgrade. <br>Omega upgrades is kind of like a skill tree. You need to buy every previous upgrade to be able to purchase <br>the next. If you're unhappy with a choice you made, or want to try a different build, you can reset for free!";
	
	let simulationText = "<p><b>SIMULATION:</b><br>In the simulation you have to fight your way through hordes of monsters, and infinite floors. <br>There are two different modes you can be in: Gold Mode and Fighting Mode. <br>In Gold Mode you will earn gold, and in Fighting Mode you will fight (duh). <br>Use your gold to upgrade your three heroes. You also get a multiplier to your gold income based on <br>what stage you're at. Later you will be able to Resimulate, resetting your simulation back to the beginning. <br>But like with all the other prestige mechanics, you get stronger.";
	
	let electronText= "<p><b>ELECTRONS:</b><br>Every second you will multiply your current amount of electrons by your electron gain.<br>This can be upgraded by spending OP. You get a multiplier to how much your all mult multiplies, based on your electrons.<br>However there is a cap. At some point you will stop gaining electrons. This cap can be increased by spending OP.<br>You can choose to reset your electrons and gain an atom. You can use your atoms to buy several upgrades.";
	
	if (player.hasUnlockedElectrons == true){
		document.getElementById("infoTab").innerHTML = hotkeyText + generatorText + prestigeText + expansionText + autobuyerText + ABGText + omegaText + simulationText + electronText;
	}
	else if (player.hasUnlockedSim == true){
		document.getElementById("infoTab").innerHTML = hotkeyText + generatorText + prestigeText + expansionText + autobuyerText + ABGText + omegaText + simulationText;
	}
	else if (player.hasUnlockedOmega == true){
		document.getElementById("infoTab").innerHTML = hotkeyText + generatorText + prestigeText + expansionText + autobuyerText + ABGText + omegaText;
	}
	else if (player.hasUnlockedABG == true){
		document.getElementById("infoTab").innerHTML = hotkeyText + generatorText + prestigeText + expansionText + autobuyerText + ABGText;
	}
	else if (player.expansionUpgrade5 == true){
		document.getElementById("infoTab").innerHTML = hotkeyText + generatorText + prestigeText + expansionText + autobuyerText;
	}
	else if (player.hasUnlockedExpansion == true){
		document.getElementById("infoTab").innerHTML = hotkeyText + generatorText + prestigeText + expansionText;
	}
	else{
		document.getElementById("infoTab").innerHTML = hotkeyText + generatorText + prestigeText;
	}
	
	// INFO TAB *****************
	
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
		document.getElementById("tab8").classList.add("locked");
	}
	else document.getElementById("tab8").classList.remove("locked");
	
	if (player.hasUnlockedSimUps == false){
		document.getElementById("tab9").classList.add("locked");
	}
	else document.getElementById("tab9").classList.remove("locked");
	
	document.getElementById("simGoldTotal").innerText = "Gold: " + format(player.simGold, 2);
	document.getElementById("simGoldPerSec").innerText = "Gold Per Second: " + format(player.finalGPS, 2);
	document.getElementById("simStage").innerText = "Stage: " + format(player.stage, 0);
	document.getElementById("simDPS").innerText = "DPS: " + format(player.finalDPS, 2);
	
	document.getElementById("hpBarText").innerText = format(player.monsterCurrentHP, 2) + " / " + format(player.monsterTotalHP, 2);
	
	document.getElementById("goldFarmer").innerHTML = "Gold Farmer" + "<br>Level: " + format(player.goldFarmerLevel, 0) + "<br>Gold Multiplier: " + format(player.goldFarmerMult, 2) + "x<br>Cost: " + format(player.goldFarmerCost, 2);
	
	document.getElementById("hybrid").innerHTML = "Hybrid" + "<br>Level: " + format(player.hybridLevel, 0) + "<br>Gold/DPS Multiplier: " + format(player.hybridMult, 2) + "x<br>Cost: " + format(player.hybridCost, 2);
	
	document.getElementById("PVPLegend").innerHTML = "PVP Legend" + "<br>Level: " + format(player.PVPLegendLevel, 0) + "<br>DPS Multiplier: " + format(player.PVPLegendMult, 2) + "x<br>Cost: " + format(player.PVPLegendCost, 2);
	
	document.getElementById("resimulate").innerHTML = "RESIMULATION<br>Resimulate for " + format(Decimal.sqrt(player.simGold.pow(player.eighthSimUpgrade)).div(100), 2) + " <br>Multiplier to DPS and " + format(new Decimal(1).plus(Decimal.log10(player.simGold.pow(player.eighthSimUpgrade))).div(60), 2) + "<br>Multiplier to stage gold exponent";
	
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
		document.getElementById("simUpgrade1").innerHTML = "Gain " + format(new Decimal(3).times(player.fourthSimUpgrade), 2) + "x more gold for<br>every 4th Gold Farmer<br>Currently: " + format(player.firstSimUpgrade, 2) + "x";
		document.getElementById("simUpgrade1").classList.add("bought");
	}
	else {
		document.getElementById("simUpgrade1").innerHTML = "Gain 3x more gold for<br>every 4th Gold Farmer<br>Cost: 1e8 Gold";
		document.getElementById("simUpgrade1").classList.remove("bought");
	}
	
	if (player.secondSimUpgradeBought == true){
		document.getElementById("simUpgrade2").innerHTML = "Gain " + format(new Decimal(2).times(player.fourthSimUpgrade), 2) + "x more gold and<br>DPS for every 4th Hybrid<br>Currently: " + format(player.secondSimUpgrade, 2) + "x";
		document.getElementById("simUpgrade2").classList.add("bought");
	}
	else {
		document.getElementById("simUpgrade2").innerHTML = "Gain 2x more gold and<br>DPS for every 4th Hybrid<br>Cost: 1e12 Gold";
		document.getElementById("simUpgrade2").classList.remove("bought");
	}
	
	if (player.thirdSimUpgradeBought == true){
		document.getElementById("simUpgrade3").innerHTML = "Gain " + format(new Decimal(5).times(player.fourthSimUpgrade), 2) + "x more DPS for<br>every 4th PVP Legend<br>Currently: " + format(player.thirdSimUpgrade, 2) + "x";
		document.getElementById("simUpgrade3").classList.add("bought");
	}
	else {
		document.getElementById("simUpgrade3").innerHTML = "Gain 5x more DPS for<br>every 4th PVP Legend<br>Cost: 1e16 Gold";
		document.getElementById("simUpgrade3").classList.remove("bought");
	}
	
	if (player.fourthSimUpgradeBought == true){
		document.getElementById("simUpgrade4").innerHTML = "The 3 previous upgrades<br>are 1.5x stronger for every<br>" + format(player.fourthSimUpgradeTotalLevels, 0) + " total levels bought<br>Currently: " + format(player.fourthSimUpgrade, 2) + "x";
		document.getElementById("simUpgrade4").classList.add("bought");
	}
	else {
		document.getElementById("simUpgrade4").innerHTML = "The 3 previous upgrades<br>are 1.5x stronger for every<br>" + format(player.fourthSimUpgradeTotalLevels, 0) + " total levels bought<br>Cost: 1e18 Gold";
		document.getElementById("simUpgrade4").classList.remove("bought");
	}
	
	if (player.fifthSimUpgradeBought == true){
		document.getElementById("simUpgrade5").innerHTML = "Get a 1.25x multiplier<br>to gold per second<br>for each stage beaten<br>Currently: " + format(player.fifthSimUpgrade, 2) + "x";
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
		document.getElementById("simUpgrade7").innerHTML = "Get a 1.25x multiplier<br>to damage per second<br>for each stage beaten<br>Currently: " + format(player.seventhSimUpgrade, 2) + "x";
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
	
	if (player.omega.gte(1e18) && player.hasUnlockedElectrons == false){
		player.hasUnlockedElectrons = true;
	}
	
	if (player.hasUnlockedElectrons == true){
		document.getElementById("tab10").classList.remove("locked");
	}
	else document.getElementById("tab10").classList.add("locked");
	
	document.getElementById("electrons").innerText = "You have " + format(player.electrons, 2) + " Electrons";
	document.getElementById("electronEffect").innerText = "They multiply all mult gain by " + format(player.electronEffect, 2) + "x";
	
	document.getElementById("electronUpgrade1").innerHTML = "Raise max Electrons by ^2<br>Max Electrons: " + format(player.maxElectrons, 2) + "<br>Cost: " + format(player.firstElectronUpgradeCost, 2) + " OP";
	
	document.getElementById("electronUpgrade2").innerHTML = "Multiply Electron gain by " + format(player.electronGainGain, 2) + "x<br>Currently: " + format(player.electronGainFinal, 2) + "x<br>Cost: " + format(player.secondElectronUpgradeCost, 2) + " OP";
	
	document.getElementById("electronUpgrade3").innerHTML = "Reset Electrons for Atoms<br>Cost: " + format(player.thirdElectronUpgradeCost, 2) + " Electrons";
	
	document.getElementById("atomText").innerText = "You have " + format(player.atoms, 0) + " Atoms";
	
	if (player.firstAtomUpgradeBought.eq(0)){
		document.getElementById("atomUpgrade1").innerHTML = "Get 100% of EP you would get<br>on Expansion every sec<br>Cost: " + format(player.firstAtomUpgradeCost, 0) + " Atoms";
	}
	else if (player.firstAtomUpgradeBought.eq(1)){
		document.getElementById("atomUpgrade1").innerHTML = "Keep Expansion Upgrades<br>when becoming Omega<br>Cost: " + format(player.firstAtomUpgradeCost, 0) + " Atoms";
	}
	else if (player.firstAtomUpgradeBought.lt(7)){
		document.getElementById("atomUpgrade1").innerHTML = "Divide the cost of Electron Upgrades by 4<br>Currently: " + format(player.firstAtomUpgrade3, 0) + "x<br>Cost: " + format(player.firstAtomUpgradeCost, 0) + " Atoms";
	}
	else {
		document.getElementById("atomUpgrade1").innerHTML = "MAX<br>Divides the cost of Electron Upgrades<br>Currently: " + format(player.firstAtomUpgrade3, 0) + "x";
	}
	
	if (player.secondAtomUpgradeBought.eq(0)){
		document.getElementById("atomUpgrade2").innerHTML = "Get the ability to skip<br>stages in simulation<br>Cost: " + format(player.secondAtomUpgradeCost, 0) + " Atoms";
	}
	else if (player.secondAtomUpgradeBought.eq(1)){
		document.getElementById("atomUpgrade2").innerHTML = "Keep ABG upgrades 1 - 4<br>when becoming Omega<br>Cost: " + format(player.secondAtomUpgradeCost, 0) + " Atoms";
	}
	else if (player.secondAtomUpgradeBought.lt(7)){
		document.getElementById("atomUpgrade2").innerHTML = "Increase the Electron effect<br>exponent by 2x<br>Currently: ^" + format(player.secondAtomUpgrade3, 0) + "<br>Cost: " + format(player.secondAtomUpgradeCost, 0) + " Atoms";
	}
	else {
		document.getElementById("atomUpgrade2").innerHTML = "MAX<br>Increases the Electron effect<br>Currently: " + "^" + format(player.secondAtomUpgrade3, 0);
	}
	
	if (player.thirdAtomUpgradeBought.eq(0)){
		document.getElementById("atomUpgrade3").innerHTML = "Keep some Electrons<br>when resetting for Atoms<br>Cost: " + format(player.thirdAtomUpgradeCost, 0) + " Atoms";
	}
	else if (player.thirdAtomUpgradeBought.eq(1)){
		document.getElementById("atomUpgrade3").innerHTML = "Keep Electrons<br>when becoming Omega<br>Cost: " + format(player.thirdAtomUpgradeCost, 0) + " Atoms";
	}
	else if (player.thirdAtomUpgradeBought.lt(7)){
		document.getElementById("atomUpgrade3").innerHTML = "Make the Electron interval lower<br>by 150ms<br>Currently: " + (1000 - player.thirdAtomUpgrade3) + "ms<br>Cost: " + format(player.thirdAtomUpgradeCost, 0) + " Atoms";
	}
	else {
		document.getElementById("atomUpgrade3").innerHTML = "MAX<br>Makes the Electron interval lower<br>Currently: " + (1000 - player.thirdAtomUpgrade3) + "ms";
	}
}

const hpProgress = document.getElementById("hpBar");

function getHpBar(){
	var hpValue = player.monsterCurrentHP.div(player.monsterTotalHP).times(100);
	hpProgress.style.setProperty("--width", hpValue);
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
			player.resimulateStageExponentMult = new Decimal(1).plus(Decimal.log10(player.simGold.pow(player.eighthSimUpgrade))).div(60);
			
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
	for (tier = 2; tier < 9; tier++){
		player[TIER_NAMES[tier - 1] + "Amount"] = player[TIER_NAMES[tier - 1] + "Amount"].plus(player[TIER_NAMES[tier] + "Amount"].times(player[TIER_NAMES[tier] + "FinalMult"].times((diff / 5))));
		
		player[TIER_NAMES[tier - 1] + "ExpansionGeneratorAmount"] = player[TIER_NAMES[tier - 1] + "ExpansionGeneratorAmount"].plus(player[TIER_NAMES[tier] + "ExpansionGeneratorAmount"].times(player[TIER_NAMES[tier] + "ExpansionGeneratorFinalMult"].times(diff / 5)));
		
		player[TIER_NAMES[tier - 1] + "OmegaGeneratorAmount"] = player[TIER_NAMES[tier - 1] + "OmegaGeneratorAmount"].plus(player[TIER_NAMES[tier] + "OmegaGeneratorAmount"].times(player[TIER_NAMES[tier] + "OmegaGeneratorFinalMult"].times(diff / 5)));
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

showPanel(0, '#547480');

function mainLoop(){
	var diff = (Date.now() - lastUpdate) / 1000;
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
	getLoop();
	getABGText();
	productionLoop(diff);
	autobuy();
	fight();
	getHpBar();
	passiveExpansionPoints();
	lastUpdate = Date.now(); 
}

setInterval(mainLoop, 30);

setInterval(save, 10000);

updateGUI();








