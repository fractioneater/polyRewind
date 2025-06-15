import { PolyMod } from "https://pml.crjakob.com/polytrackmods/PolyModLoader/0.5.0/PolyModLoader.js";

class PolyRewind extends PolyMod {
	init = (pml) => {
		this.pml = pml;
		console.log("PolyRewind says hi!");
	}

	postInit = () => {
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