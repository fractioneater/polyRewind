import { PolyMod, SettingType } from "https://pml.orangy.cfd/PolyTrackMods/PolyModLoader/<target>/PolyModLoader.js";

class PolyRewind extends PolyMod {
	init(pml) {
		this.pml = pml;
		pml.registerBindCategory("PolyRewind Mod");
		pml.registerKeybind("Store", "storeframe", "keydown", "KeyB", callBackFunc = this.storeFrame);
		pml.registerKeybind("Load", "loadframe", "keydown", "KeyF", callBackFunc = this.loadFrame);
	}

	storeFrame(event) {
		// Hmmm.
		console.log(this.pml);
	}

	loadFrame(event) {
		// Hmmm.
		console.log(this.pml);
	}
}

export let polyMod = new PolyRewind();