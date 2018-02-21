export class Preloader {
	/**
	 * @param {string|string[]|number} src
	 * @param {number} [minTime]
	 * @returns {Promise}
	 */
	static init(src, minTime = 3000) {
		let timer = new Promise((resolve) => {
			setTimeout(resolve, minTime);
		});

		if (typeof src === 'number') {
			minTime = src;
			src = null;
		}

		if (src) {
			return Promise.all([
				timer,
				this.loadImages(src),
			]);
		}

		return timer;
	}

	/**
	 * @param {string} src
	 * @returns {Promise}
	 */
	static loadImage(src) {
		return new Promise((resolve, reject) => {
			let img = new Image();

			img.onload = () => {
				resolve();
			};

			img.onerror = () => {
				reject();
			};

			img.src = src;
		});
	}

	/**
	 * @param {string|string[]} srcList
	 */
	static loadImages(srcList) {
		if (!Array.isArray(srcList)) {
			srcList = [srcList];
		}

		return Promise.all(srcList.map((src) => this.loadImage(src)));
	}
}
