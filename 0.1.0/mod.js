import { PolyMod, MixinType } from "https://pml.crjakob.com/polytrackmods/PolyModLoader/0.5.0/PolyModLoader.js";

class PolyRewind extends PolyMod {
	init = (pml) => {
		this.pml = pml;
		console.log("PolyRewind says hi!");
		this.pml.registerBindCategory("PolyRewind Mod");
		this.pml.registerKeybind("Store", "storeFrame", "keydown", "KeyB", null, (e) => { this.storeFrame(e); });
		this.pml.registerKeybind("Load", "loadFrame", "keydown", "KeyF", null, (e) => { this.loadFrame(e); });

		this.stores = [];

		this.car = null;
		pml.registerFuncMixin("pP", MixinType.INSERT, `yP(this, eP, "f").setColors(n.carColors),`, `ActivePolyModLoader.getMod("${this.modID}").car = yP(this, eP, "f"),`);

		// To call an update on interval script (for a real rewind).
		// pml.registerFuncMixin("polyInitFunction", MixinType.INSERT, `y.setAnimationLoop((function(e) {`, `ActivePolyModLoader.getMod("${this.modID}").update();`);
	}

	update = () => {
		// Huh.
	}

	storeFrame = (e) => {
		// Hmmm.
		if (this.car) {
			window.car = this.car; //- REMOVE
			const pos = this.car.getPosition();
			const rotation = this.car.getQuaternion();
			const speed = this.car.getSpeedKmh();
			const time = this.car.getTime();
			this.stores.push({ pos, rotation, speed, time });
			console.log(this.stores[this.stores.length - 1]);
		}
	}

	loadFrame = (e) => {
		if (this.car) {
			console.log(this.stores);
			const target = this.stores[this.stores.length - 1];
		}
	}
}

export let polyMod = new PolyRewind();