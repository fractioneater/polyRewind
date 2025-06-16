import { PolyMod } from "https://pml.crjakob.com/polytrackmods/PolyModLoader/0.5.0/PolyModLoader.js";

class PolyRewind extends PolyMod {
	init = (pml) => {
		this.pml = pml;
		console.log("PolyRewind says hi!");
		this.pml.registerBindCategory("PolyRewind Mod");
		this.pml.registerKeybind("Store", "storeFrame", "keydown", "KeyB", null, (e) => { /* If in game... */ this.storeFrame(e); });
		this.pml.registerKeybind("Load", "loadFrame", "keydown", "KeyF", null, (e) => { /* If in game... */ this.loadFrame(e); });
	}

	storeFrame = (e) => {
		// Hmmm.
		console.log(this.pml);
	}

	loadFrame = (e) => {
		// Hmmm.
		console.log(this.pml);
	}
}

export let polyMod = new PolyRewind();