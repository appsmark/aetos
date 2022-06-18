import { ApplicationSettings } from "@nativescript/core";
import { Observable } from '@nativescript/core'
import { DataGame } from "./data"
import { Encode } from "./encode"

export class MainGame {
    game_mode = 1; // 0 = Step, 1 = Slow, 2 = Fast
	rebus_display = []
    progressMaxValue = 180
    round = 0
    score = 0
	word_entered = []	// Word entered by user
	word = []

    viewModel = new Observable()
	data = new DataGame()
	encode = new Encode()

    constructor(view) {
      this.viewModel = view
	  this.init()
    }

	init() {
		this.data.init()
		this.encode.init(this.data)
		for (var index = 0; index < 9; index++) {
			if (this.encode.encoding_enabled[index]) {
				this.viewModel.set("bg_bc" + index, "green")
			} else {
				this.viewModel.set("bg_bc" + index, "grey")
			}
		}
		this.clearRebus()
		this.encode.clearRebus()
		this.showRebus()
		this.score = ApplicationSettings.getNumber("Score")
		if (!this.score) {
			this.score = 0
		}
		this.data.dataSetRound(ApplicationSettings.getNumber("Round"))
		this.game_mode = ApplicationSettings.getNumber("Mode")
		if (!this.game_mode) {
			this.game_mode = 2
		}
		switch(this.game_mode){
			case 0:
				break;
			case 1:
				this.progressMaxValue = 1000
				break;
			case 2:
				this.progressMaxValue = 200
				break;
		}
		this.viewModel.set("value_progress_max", this.progressMaxValue)
		this.allCoding()
	}

	clearRebus() {
		for (var index = 0; index < this.data.max_length_word; index++) {
			this.rebus_display[index] = []
			this.rebus_display[index][0] = false
			for (var row = 1; row < 4; row++) {
				this.rebus_display[index][row] = "blank"
			}
		}
	}

	showRebus() {
		for (var row = 0; row < 3; row++) {
			for (var col = 0; col < this.data.number_of_columns; col++) {
				this.viewModel.set("img" + row + col, "~/images/" + this.rebus_display[col][row + 1] + ".png")
				if (this.rebus_display[col][0]) {
					this.viewModel.set("bg_im" + col, "red")
				} else {
					this.viewModel.set("bg_im" + col, "yellow")
				}
			}
		}
		this.viewModel.set("textActionBar", this.word + " " + this.encode.encode_count)
	}

	nextWord() {
		this.word_entered = this.data.getWord()
		this.word = this.word_entered
		this.encode.encoder_prepare(this.word)
		this.rebus_display = this.encode.encoder()
		this.showRebus()
    }

	singleEncoding(index) {
		this.rebus_display = this.encode.singleEncoding(index)
		this.showRebus()
	}

	clickKey(character) {
		this.word_entered += character
		this.word = this.word_entered
		this.encode.encoder_prepare(this.word)
		this.rebus_display = this.encode.encoder()
		this.showRebus()
		this.viewModel.set("textActionBar", this.word)
	}

	clickBackspace() {
		if (this.word_entered.length > 0) {
			this.word_entered = this.word_entered.substring(0, this.word_entered.length - 1)
		} else {
			this.word_entered =""
		}
		this.word = this.word_entered
		this.encode.encoder_prepare(this.word)
		this.rebus_display = this.encode.encoder()
		this.showRebus()
	}
    
	flipStateCoding(id) {
		this.encode.flipStateCoding(id)
		if (this.encode.encoding_enabled[id]) {
			this.viewModel.set("bg_bc" + id, "green")
		} else {
			this.viewModel.set("bg_bc" + id, "grey")
		}
		this.encode.encoder()
		this.showRebus()
	}

	encodingIndividual(index) {
		var old_state = this.encode.encoding_enabled[index]
		this.encode.encoding_enabled[index] = true
		this.encode.encoder()
		this.showRebus()
		this.encode.encoding_enabled[index] = old_state
	}

	clearCoding() {
		this.encode.clearCoding()
		for (var index = 0; index < this.encode.encoding_enabled.length; index++) {
			this.viewModel.set("bg_bc" + index, "grey")
		}
		this.encode.encoder_prepare(this.word_entered)
		this.showRebus()
	}

	allCoding() {
		this.encode.allCoding()
		for (var index = 0; index < this.encode.encoding_enabled.length; index++) {
			this.viewModel.set("bg_bc" + index, "green")
		}
		this.encode.encoder_prepare(this.word_entered)
		this.encode.encoder()
		this.showRebus()
	}

	newCoding() {
		this.encode.newCodingOrder()
		this.encode.encoder_prepare(this.word_entered)
		this.encode.encoder()
		this.showRebus()
	}

	cleanImage() {
		for (var col = 0; col < this.data.number_of_columns; col++) {
			for (var row = 0; row < 3; row++) {
				this.viewModel.set("img" + row + col, "~/images/blank.png")
			}
		}
	}

	changeCodingOrder() {
		this.encode.changeCodingOrder()
		this.viewModel.set("textNewCoding", "CODE " + this.encode.encoding_order_index)
		this.encode.clearRebus()
		this.encode.encoder_prepare(this.word_entered)
		this.encode.encoder()
		this.showRebus()
		this.exportCoded()
	}

	coded_words = []
	coded_words_index = 0
	exportCoded(coding_level) {
		var data = ", ["
		var data_add = ""
		var savety_count = 0
 		if (this.encode.encode_count >= coding_level) {
			for (var col = 0; this.rebus_display[col][2] != "blank" & savety_count < 25; col++) {
				savety_count++
				data_add = ""
				for (var row = 1; row < 4; row++) {
					if (this.rebus_display[col][row] == "blank") {
						data_add += "0"
					} else {
						data_add += "\"" + this.rebus_display[col][row] + "\""
					}
					if (row < 3) {
						data_add += ", "
					}
				}
				if (this.rebus_display[col + 1][2] != "blank") {
					data_add += "], ["
				}
	//			if (col < 4) {
					data += data_add
	//			}
			}
//			console.log("[0, " + this.encode.encode_count + ", \"" + this.word + "\"" + data + "]],")
			this.coded_words[this.coded_words_index] = '["' + this.word + '", ' + this.encode.encode_count + ', 0' + data + "]]"
			this.coded_words_index++
		}
	}

	checkImages(flag_all) {
		var flag_continue = true
		var index = 0
		if (!flag_all) {
			index = this.data.words_to_be_coded.length - 1
		}
		console.log("CHECK IMAGES")
		this.coded_words = []
		this.coded_words_index = 0
		do {
			if (index < this.data.words_to_be_coded.length) {
				this.word = this.data.words_to_be_coded[index].toUpperCase()
				for (var count = 0; count < this.encode.encoding_order.length; count++) {
					this.encode.changeCodingOrder()
					this.encode.encoder_prepare(this.word)
					this.rebus_display = this.encode.encoder()
					this.exportCoded(1)
					this.showRebus()
				}
				index++
			} else {
				flag_continue = false
			}
		} while (flag_continue)
		console.log("CHECK IMAGES READY")
		this.sortCodedWords()
	}

	sort() {
		var sorted = this.data.words_to_be_coded
		for (var index = 0; index < sorted.length; index++) {
			sorted[index] = sorted[index].toUpperCase()
		}
		sorted.sort()
		var item = ""
		for (var index = 0; index < sorted.length; index++) {
			if (item != sorted[index]) {
				console.log('"' + sorted[index] + '",')
				item = sorted[index]
			}
		}

	}

	sortCodedWords() {
		var sorted = this.coded_words
		sorted.sort()
		var item = ""
		var count = 0
		for (var index = 0; index < sorted.length; index++) {
			if (item != sorted[index]) {
				count++
				console.log(sorted[index] + ',')
				item = sorted[index]
			}
		}
		console.log("# coded words = " + count + " " + sorted.length)

	}

}