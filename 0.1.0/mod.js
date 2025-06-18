import { PolyMod } from "https://pml.crjakob.com/polytrackmods/PolyModLoader/0.5.0/PolyModLoader.js";

class PolyRewind extends PolyMod {
	init = (pml) => {
		this.pml = pml;
		console.log("PolyRewind says hi!");
		this.pml.registerBindCategory("PolyRewind Mod");
		this.pml.registerKeybind("Store", "storeFrame", "keydown", "KeyB", null, (e) => { /* If in game... */ this.storeFrame(e); });
		this.pml.registerKeybind("Load", "loadFrame", "keydown", "KeyF", null, (e) => { /* If in game... */ this.loadFrame(e); });
		
		this.car = null;
		this.spectator = null;
		polyModLoader.registerFuncMixin("pP", MixinType.INSERT, `yP(this, eP, "f").setColors(n.carColors),`, `ActivePolyModLoader.getMod("${this.modID}").car = yP(this, eP, "f"),`);
		polyModLoader.registerClassMixin("s_.prototype", "addToggleListener", MixinType.INSERT, `a_(this, QT, "f").push(e)`, `,ActivePolyModLoader.getMod("${this.modID}").spectator = this;`);
		// To call an update on interval script (for a real rewind).
		// polyModLoader.registerFuncMixin("polyInitFunction", MixinType.INSERT, `y.setAnimationLoop((function(e) {`, `ActivePolyModLoader.getMod("pdip").update();`);
	}

	update = () => {
		// Huh.
	}

	storeFrame = (e) => {
		// Hmmm.
		console.log(this.car);
	}

	loadFrame = (e) => {
		// Hmmm.
		console.log(this.car);
	}
}

export let polyMod = new PolyRewind();