/**
*	@filename	mTeamRunewords.js
*	@author		Adpist M
*	@desc		Template for runewords profile
*	@credits	Adpist, JeanMax / SiC-666 / Dark-f, Alogwe, Imba, Kolton, Larryw, Noah, QQValpen, Sam, YGM
*/

var RunewordProfile = {
	character : { //Character Runewords

		"armor" : {
			"normal_stealth" : {
				runeword: Runeword.Stealth,
				sockets: 2,
				bases: ["Breast Plate", "Light Plate"],
				cubeBase: false,
				roll: Roll.All,
				qualityCondition: "[quality] <= superior",
				statCondition: "[fcr] == 25",
				tier: 250,
				skipIf: ""
			},
			"nm_stealth" : {
				runeword: Runeword.Stealth,
				sockets: 2,
				bases: ["Ghost Armor", "Serpentskin Armor", "Demonhide Armor", "Cuirass", "Mage Plate"],
				cubeBase: false,
				roll: Roll.All,
				qualityCondition: "[quality] <= superior",
				statCondition: "[fcr] == 25",
				tier: 350,
				skipIf: ""
			},
			"hell_stealth" : {
				runeword: Runeword.Stealth,
				sockets: 2,
				bases: ["Dusk Shroud", "Wyrmhide", "Scarab Husk", "Wire Fleece", "Great Hauberk", "Boneweave", "Balrog Skin", "Archon Plate"],
				cubeBase: false,
				roll: Roll.All,
				qualityCondition: "[quality] <= superior",
				statCondition: "[fcr] == 25",
				tier: 450,
				skipIf: ""
			},
			"nm_smoke" : {
				runeword: Runeword.Smoke,
				sockets: 2,
				bases: ["Ghost Armor", "Serpentskin Armor", "Demonhide Armor", "Cuirass", "Mage Plate"],
				cubeBase: false,
				roll: Roll.All,
				qualityCondition: "[quality] <= superior",
				statCondition: "[FireResist] == 50 && [LightResist] == 50",
				tier: 10001,
				skipIf: ""
			},
			"hell_smoke" : {
				runeword: Runeword.Smoke,
				sockets: 2,
				bases: ["Dusk Shroud", "Wyrmhide", "Scarab Husk", "Wire Fleece", "Great Hauberk", "Boneweave", "Balrog Skin", "Archon Plate"],
				cubeBase: false,
				roll: Roll.All,
				qualityCondition: "[quality] <= superior",
				statCondition: "[FireResist] == 50 && [LightResist] == 50",
				tier: 10002,
				skipIf: ""
			}
		},
		"shield" : {
			"normal_ancients_pledge" : {
				runeword: Runeword.AncientsPledge,
				sockets: 3,
				bases: ["Kite Shield", "Large Shield", "Bone Shield", "Monarch"], //capitals and spaces (ex : "Giant Thresher")
				cubeBase: false,
				roll: Roll.NonEth,
				qualityCondition: "[quality] <= superior",
				statCondition: "[FireResist] >= 40 && [LightResist] >= 40",
				tier: 60000,
				skipIf: ""
			},
			"spirit" : {
				runeword: Runeword.Spirit,
				sockets: 4,
				bases: ["Monarch"], //capitals and spaces (ex : "Giant Thresher")
				cubeBase: false,
				roll: Roll.NonEth,
				qualityCondition: "[quality] <= superior",
				statCondition: "[fcr] >= 25",
				tier: 60002,
				skipIf: ""
			}
		},

		"sword" : {
			"spirit" : {
				runeword: Runeword.Spirit,
				sockets: 4,
				bases: ["Broad Sword", "Crystal Sword"], //capitals and spaces (ex : "Giant Thresher")
				cubeBase: false,
				roll: Roll.NonEth,
				qualityCondition: "[quality] <= superior",
				statCondition: "[itemallskills] == 2",
				tier: 10000,
				skipIf: ""
			}
		},

		"helm" : {
			"Lore" : {
				runeword: Runeword.Lore,
				sockets: 2,
				bases: ["Crown", "Mask","Bone Helm"], //capitals and spaces (ex : "Giant Thresher")
				cubeBase: false,
				roll: Roll.NonEth,
				qualityCondition: "[quality] <= superior",
				statCondition: "[LightResist] >= 25",
				tier: 75,
				skipIf: ""
			},
			"higher_Lore" : {
				runeword: Runeword.Lore,
				sockets: 2,
				bases: ["War Hat", "Grim Helm","Grand Crown", "Demonhead", "Bone Visage"], //capitals and spaces (ex : "Giant Thresher")
				cubeBase: false,
				roll: Roll.NonEth,
				qualityCondition: "[quality] <= superior",
				statCondition: "[LightResist] >= 25",
				tier: 120,
				skipIf: ""
			}
		}
	},

	merc: { //Merc runewords
		"polearm" : {
			"normal_insight" : {
				runeword: Runeword.Insight,
				sockets: 4,
				bases: ["Poleaxe", "Halberd"], //capitals and spaces (ex : "Giant Thresher")
				cubeBase: false,
				roll: Roll.All,
				qualityCondition: "[quality] <= superior",
				statCondition: "[Meditationaura] <= 17",
				tier: 0,
				skipIf: ""
			},

			"nm_insight" : {
				runeword: Runeword.Insight,
				sockets: 4,
				bases: ["Bill", "Battle Scythe", "Partizan", "Bec De Corbin"], //capitals and spaces (ex : "Giant Thresher")
				cubeBase: false,
				roll: Roll.All,
				qualityCondition: "[quality] <= superior",
				statCondition: "[Meditationaura] <= 17",
				tier: 0,
				skipIf: ""
			},

			"hell_insight" : {
				runeword: Runeword.Insight,
				sockets: 4,
				bases: ["Thresher", "Cryptic Axe", "Great Poleaxe", "Giant Thresher","Colossus Voulge"], //capitals and spaces (ex : "Giant Thresher")
				cubeBase: false,
				roll: Roll.All,
				qualityCondition: "[quality] <= superior",
				statCondition: "[Meditationaura] <= 17",
				tier: 0,
				skipIf: ""
			},

			"hell_insight_endgame" : {
				runeword: Runeword.Insight,
				sockets: 4,
				bases: ["Thresher", "Cryptic Axe", "Great Poleaxe", "Giant Thresher","Colossus Voulge"], //capitals and spaces (ex : "Giant Thresher")
				cubeBase: true,
				recipeType: Recipe.Socket.Weapon,
				roll: Roll.Eth,
				qualityCondition: "[quality] <= superior",
				statCondition: "[Meditationaura] == 17",
				tier: 0,
				skipIf: ""
			}
		}
	}
};