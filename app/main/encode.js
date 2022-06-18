export class Encode {
	encoding_enabled = []
	data
	encode_count
	// 0 doubles
	// 1 phonetic
	// 2 reverse
	// 3 via
	// 4 on
	// 5 up
	// 6 behind
	// 7 over
	// 8 after
	// 12 minus
	// 15 in reverse
	// 19 on n=*
	// 20 up p=*
	encoding_order = [
		[12,15],
		[0,20],
		[12],
		[19],
		[17],
		[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
		[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
		[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
		[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
		[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
		[6,7,8],
		[0,1,2,3],
		[4,5],
		[0],
		[0,3],
		[20]
	]
	encoding_order_index
	encode_weight_doubles = 1
	encode_weight_minus = 3
	encode_weight_on = 2
	encode_weight_on_replace = 3
	encode_weight_over = 2
	encode_weight_phonetic = 2
	encode_weight_phonetic_reverse = 3
	encode_weight_star_string_star = 2
	encode_weight_star_string_star_replace = 3
	encode_weight_star_string_star_reverse = 3
	encode_weight_string_star = 2
	encode_weight_through = 2


	rebus = []
	minus_data = [
		["NULL", "0"],
		["ONE", "1"],
		["TWO", "2"],
		["THREE", "3"],
		["FOUR", "4"],
		["FIVE", "5"],
		["SIX", "6"],
		["SEVEN", "7"],
		["EIGHT", "8"],
		["NINE", "9"],
		["PLUS", "plus"],
		["MINUS", "minus"],
		["TIMES", "maal"],
	]
	pminus_data = [
		["FOUR", "4"],
		["FIVE", "5"],
		["SIX", "6"],
		["SEVEN", "7"],
		["EIGHT", "8"],
		["NINE", "9"],
		["PLUS", "plus"],
		["MINUS", "minus"],
		["TIMES", "maal"],
	]
	xminus_data = [
		["NUL", 0, "L"],
		["ULL", 0, "N"],
		["ON", 1, "E"],
		["NE", 1, "O"],
		["WO", 2, "T"],
		["TW", 2, "O"],
		["HREE", 3, "T"],
		["TREE", 3, "H"],
		["THEE", 3, "R"],
		["THRE", 3, "E"],
		["OUR", 4, "F"],
		["FUR", 4, "O"],
		["FOR", 4, "U"],
		["FOU", 4, "R"],
		["IVE", 5, "F"],
		["FVE", 5, "I"],
		["FIE", 5, "V"],
		["FIV", 5, "E"],
		["IX", 6, "S"],
		["SX", 6, "I"],
		["SI", 6, "X"],
		["EVEN", 7, "S"],
		["SVEN", 7, "E"],
		["SEEN", 7, "V"],
		["SEVN", 7, "E"],
		["SEVE", 7, "N"],
		["IGHT", 8, "E"],
		["EGHT", 8, "I"],
		["EIHT", 8, "G"],
		["EIGT", 8, "H"],
		["EIGH", 8, "T"],
		["INE", 9, "N"],
		["NNE", 9, "I"],
		["NIE", 9, "N"],
		["NIN", 9, "E"],
	]
	phonetic = [
		["BE", "B"],
		["SEA", "C"],
		["DE", "D"],
		["EF", "F"],
		["GE", "G"],
		["AGE", "H"],
		["EYE", "I"],
		["KA", "K"],
		["EL", "L"],
		["EM", "M"],
		["EN", "N"],
		["PE", "P"],
		["PEA", "P"],
		["ER", "R"],
		["ES", "S"],
		["TE", "T"],
		["YOU", "U"],
		["VE", "V"],
		["WE", "W"],
		["AXE", "X"],
		["WHY", "Y"],
		["SET", "Z"],
		["ZET", "Z"],
		["NULL", "0"],
		["ONE", "1"],
		["TWO", "2"],
		["THREE", "3"],
		["FOUR", "4"],
		["FIVE", "5"],
		["SIX", "6"],
		["SEVEN", "7"],
		["EIGHT", "8"],
		["NINE", "9"],		
		]
    
    phonetic_reverse = [
		["EB", "B"],
		["AES", "C"],
		["ED", "D"],
		["FE", "F"],
		["EG", "G"],
		["EGA", "H"],
        ["EJ", "J"],
		["AK", "K"],
		["LE", "L"],
		["ME", "M"],
		["NE", "N"],
		["EP", "P"],
		["RE", "R"],
		["SE", "S"],
		["ET", "T"],
		["UOY", "U"],
		["EV", "V"],
		["EW", "W"],
		["EXA", "X"],
		["TES", "Z"],
		["TEZ", "Z"],
		["LLUN", "0"],
		["ENO", "1"],
		["OWT", "2"],
		["EERHT", "3"],
		["RUOF", "4"],
		["EVIF", "5"],
		["XIS", "6"],
		["NEVES", "7"],
		["ENIN", "9"]
		]
    

    init(data) {
		this.data = data
		this.encode_count = 0
		this.encoding_order_index = 0
		this.encoding_enabled[0] = false	// parseDoubles
		this.encoding_enabled[1] = false	// parsePhonetic
		this.encoding_enabled[2] = false	// parseReversePhonetic
		this.encoding_enabled[3] = false	// 
		this.encoding_enabled[4] = false	// 
		this.encoding_enabled[5] = false	//  
		this.encoding_enabled[6] = false	// 
		this.encoding_enabled[7] = false	// 
		this.encoding_enabled[8] = false	// 
		this.encoding_enabled[9] = false	//  
		this.encoding_enabled[10] = false	// 
		this.encoding_enabled[11] = false	// 
		this.encoding_enabled[12] = false	// 
		this.encoding_enabled[13] = false	// 
		this.encoding_enabled[14] = false	// 
		this.encoding_enabled[15] = false	// 
		this.encoding_enabled[16] = false	// 
		this.encoding_enabled[17] = false	// 
		this.encoding_enabled[18] = false	// 
		this.encoding_enabled[19] = false	// 
		this.encoding_enabled[20] = false	// 
		this.encoding_enabled[21] = false	// 
		this.encoding_enabled[22] = false	// 
		this.encoding_enabled[23] = false	// 
		this.encoding_enabled[24] = false	// 
		this.encoding_enabled[25] = false	// 
    }

	encoder_prepare(word) {
		this.encode_count = 0
		this.clearRebus()
		for (var index = 0; index < word.length; index++) {
			this.rebus[index][0] = false
			this.rebus[index][2] = word[index]
		}
	}
	
	encoder() {
		for (var index = 0; index < this.encoding_order[this.encoding_order_index].length; index++) {
			if (this.encoding_enabled[this.encoding_order[this.encoding_order_index][index]]) {
				this.singleEncoding(this.encoding_order[this.encoding_order_index][index])
			}
		}
		return this.rebus
	}

	clearRebus() {
		for (var index = 0; index < this.data.max_length_word; index++) {
			this.rebus[index] = []
			this.rebus[index][0] = false
			for (var row = 1; row < 4; row++) {
				this.rebus[index][row] = "blank"
			}
		}
	}

	getWordFromRebus() {
		var word = ""
		for (var index = 0; index < this.rebus.length; index++) {
//			console.log(index + "-" + this.rebus[index] + " " + word)
			if (this.rebus[index][0]) {
				word += String.fromCharCode(97 + index) 
			} else {
				if (this.rebus[index][2] != "blank") {
					word += this.rebus[index][2]
				}
			}
		}
		return word
	}

	singleEncoding(index) {
		switch(index) {
			case 0: 
				this.parseDoubles()
				break;
			case 1:
				this.parsePhonetic()
				break
			case 2:
				this.parsePhoneticReverse()
				break
			case 3:
				this.parseThrough()
				break;
			case 4:
				this.parseOn("ON")
				break
			case 5:
				this.parseOn("UP")
				break;
			case 6:
				this.parseOver("BEHIND", "over")
				break;
			case 7:
				this.parseOver("OVER", "over")
				break;
			case 8:
				this.parseOver("AFTER", "over")
				break;
			case 9:
				this.parseStarStringStar("IN", "in")
				break
			case 10:
				this.parseStarStringStar("LOOP", "om")
				break
			case 11:
				this.parseStarStringStar("ROUND", "om")
				this.parseStringStar("ROUND", "om")
				break
			case 12:
				this.parseMinus()
				break
			case 15:
				this.parseStarStringStarReverse("NI", "in")
				break
			case 16:
				this.parseStarStringStarReverse("POOL", "om")
				break
			case 17:
				this.parseStarStringStarReplaceCharacter("I", "N", "in")
				break
			case 19:
				this.parseOnReplaceCharacter("O", "ON", "N")
				break
			case 20:
				this.parseOnReplaceCharacter("U", "UP", "P")
				break
			}
		return this.rebus
	}

	clearCoding() {
		for (var index = 0; index < this.encoding_enabled.length; index++) {
			this.encoding_enabled[index] = false
		}
	}

	allCoding() {
		for (var index = 0; index < this.encoding_enabled.length; index++) {
			this.encoding_enabled[index] = true
		}
	}

	flipStateCoding(id) {
		this.encoding_enabled[id] = !this.encoding_enabled[id]
	}

	changeCodingOrder() {
		this.encoding_order_index++
		if (this.encoding_order_index >= this.encoding_order.length) {
			this.encoding_order_index = 0
		}
	}

	shiftRebus(start, places, end) {
		for (var index = start; index < end; index++) {
			for (var row = 0; row < 4; row++) {
				this.rebus[index][row] = this.rebus[index + places][row]
			}
		}
	}

    parseDoubles() {
		var count = 0
		var flag_continue
		var index
		var word
		do {
			word = this.getWordFromRebus()
			flag_continue = false
			if (word.length > 0) {
				count = 0
				index = 0
				do {
					if (word[index] == word[index + 1]) {
						this.encode_count += this.encode_weight_doubles
						this.shiftRebus(index, 1, word.length + count)
						this.rebus[index - count][0] = true
						count++
						flag_continue = true
//						console.log(word + " " + (index-count) + " " + this.encode_count)
					}
					index++
				} while (index < word.length)
			}
		} while (flag_continue)
	}

	parsePhonetic() {
		var index_found = -1
		var index_search
		var count = 0
		var word
		do {
			word = this.getWordFromRebus()
			count++
			index_search = 0
			do {
				index_found = word.search(this.phonetic[index_search][0])
				if (index_found == -1) {
					index_search++
				}
			}
			while ((index_search < this.phonetic.length) & (index_found == -1))
			if (index_found != -1) {
				this.encode_count += this.encode_weight_phonetic
//				console.log(word + " " + index_search + " " + index_found + " " + this.phonetic[index_search][0].length)
				this.shiftRebus(index_found + 1, this.phonetic[index_search][0].length -1, word.length)
				this.rebus[index_found][0] = true
				this.rebus[index_found][2] = this.phonetic[index_search][1]
			}
		} while (index_found != -1 & count < 10)
	}

	parsePhoneticReverse() {
		var index_found = -1
		var index_search
		var count = 0
		var word
		do {
			word = this.getWordFromRebus()
			count++
			index_search = 0
			do {
				index_found = word.search(this.phonetic_reverse[index_search][0])
				if (index_found == -1) {
					index_search++
				}
			}
			while ((index_search < this.phonetic_reverse.length) & (index_found == -1))
			if (index_found != -1) {
				this.encode_count += this.encode_weight_phonetic_reverse
//				console.log(word + " " + index_search + " " + index_found + " " + this.phonetic_reverse[index_search][0].length)
				this.shiftRebus(index_found + 1, this.phonetic_reverse[index_search][0].length -1, word.length)
				this.rebus[index_found][0] = true
				this.rebus[index_found][2] = this.phonetic_reverse[index_search][1]
				this.rebus[index_found][3] = "reverse"
			}
		} while (index_found != -1 & count < 10)
	}

	parseStringStar(pattern, coding) {
		var replacement
		var word
		var index_found
		word = this.getWordFromRebus()
		index_found = word.search(pattern)
//		console.log(word + " " + word.length + " " + index_found)
		if (index_found != word.length - pattern.length &
			index_found == 0) {
			if (!this.rebus[0][0]) {
				this.encode_count += this.encode_weight_string_star
				replacement = coding + this.rebus[pattern.length][2]
				this.shiftRebus(0, pattern.length, word.length + 1)
				this.rebus[0][2] = replacement
			}
		}
	}

	parseStarStringStar(pattern, coding) {
		var replacement
		var flag_contine = true
		var offset = 0
		var word
		var index_found
		var count = 0
		while (flag_contine) {
			count++
			if (count > 4) flag_contine = false
			word = this.getWordFromRebus()
			offset = 0
			if (pattern[0] == word[0]) {
				word = word.substring(1)
				offset = 1
			}
//			console.log("X = " + word)
			index_found = word.search(pattern)
//			console.log(word + " " + word.length + " " + index_found)
			if (index_found != word.length - pattern.length) {
				switch(index_found) {
					case 0:
//						console.log("GOTCHA")
						break
					case -1:
						flag_contine = false
						break
					default:
						if (!this.rebus[index_found - 1][0]) {
							this.encode_count += this.encode_weight_star_string_star
							replacement = this.rebus[offset + index_found - 1][2] + coding + this.rebus[offset + index_found + pattern.length][2]
							this.shiftRebus(offset + index_found - 1, 1 + pattern.length, word.length + 1)
							this.rebus[offset + index_found - 1][2] = replacement
							for (var index = offset + index_found - 1; index < offset + index_found - 2 + pattern.length; index++) {
								this.rebus[index][0] = true
							}
	//						console.log(word + " " + index_found + " " + replacement)
						}
						break
					}
			}
		}
	}

	parseThrough() {
		var index_found = -1
		var count = 0
		var replacement
		var word
		do {
			word = this.getWordFromRebus()
			count++
			index_found = word.search("VIA")
			if (index_found != -1 & index_found < word.length - 3) {
				if (this.rebus[index_found + 3][2].length == 1) {
					this.encode_count += this.encode_weight_through
					replacement = "door" + this.rebus[index_found + 3][2]
					this.shiftRebus(index_found + 1, 3, word.length)
					this.rebus[index_found][0] = true
					this.rebus[index_found][2] = replacement
				}
			}
		} while (index_found != -1 & count < 10)
	}

	parseStarStringStarReverse(pattern, coding) {
		var replacement
		var flag_contine = true
		var offset = 0
		var word
		var index_found
		var count = 0
		while (flag_contine) {
			count++
			if (count > 4) flag_contine = false
			word = this.getWordFromRebus()
			offset = 0
			if (pattern[0] == word[0]) {
				word = word.substring(1)
				offset = 1
			}
			index_found = word.search(pattern)
//			console.log(word + " " + word.length + " " + index_found)
			if (word.length > pattern.length + 2 &
				word.charCodeAt(index_found + 2) < 96 &
				index_found != word.length - pattern.length) {
				switch(index_found) {
					case 0:
//						console.log("GOTCHA")
						break
					case -1:
						flag_contine = false
						break
					default:
						if (!this.rebus[index_found - 1][0]) {
							this.encode_count += this.encode_weight_star_string_star_reverse
							replacement = this.rebus[offset + index_found + pattern.length][2] + coding + this.rebus[offset + index_found - 1][2]
							this.shiftRebus(offset + index_found - 1, 1 + pattern.length, word.length + 1)
							this.rebus[offset + index_found - 1][2] = replacement
							this.rebus[offset + index_found - 1][3] = "reverse"
							this.rebus[offset + index_found - 1][0] = true
						}
						break
					}
			}
		}
	}

	parseOver(pattern, coding) {
		var flag_contine = true
		var offset = 0
		var word
		var index_found
		var count = 0
		while (flag_contine) {
			count++
			if (count > 4) flag_contine = false
			word = this.getWordFromRebus()
			offset = 0
			index_found = word.search(pattern)
//			console.log(word + " " + word.length + " " + index_found)
			if (index_found != word.length - pattern.length) {
				switch(index_found) {
					case 0:
						this.encode_count += this.encode_weight_over
						this.shiftRebus(0, pattern.length, word.length + 1)
						this.rebus[offset + index_found][1] = coding
						this.rebus[offset + index_found][0] = true
						break
					case -1:
						flag_contine = false
						break
					default:
						if (!this.rebus[index_found - 1][0]) {
							this.encode_count += this.encode_weight_over
							this.shiftRebus(offset + index_found, pattern.length, word.length + 1)
							this.rebus[offset + index_found][1] = coding
							this.rebus[offset + index_found][0] = true
						}
						break
					}
			}
		}
	}

	parseOn(pattern) {
		var flag_contine = true
		var offset = 0
		var word
		var index_found
		var count = 0
		while (flag_contine) {
			word = this.getWordFromRebus()
			offset = 0
			index_found = word.search(pattern)
//			console.log(word + " " + word.length + " " + index_found)
			if (index_found != word.length - pattern.length) {
				switch(index_found) {
					case 0:
						break
					case -1:
						flag_contine = false
						break
					default:
						if (!this.rebus[index_found - 1][0] &
							word.charCodeAt(index_found + 2) < 96) {
//							console.log(index_found)
							this.encode_count += this.encode_weight_on
							this.shiftRebus(offset + index_found - 1, pattern.length + 1, word.length + 1)
							this.rebus[offset + index_found - 1][1] = word[index_found - 1]
							this.rebus[offset + index_found - 1][0] = true
						}
						break
					}
			}
			count++
			if (count > 4) flag_contine = false
		}
	}

	parseOnReplaceCharacter(remain, pattern, replace) {
		var flag_contine = true
		var offset = 0
		var word
		var index_found
		var count = 0
		while (flag_contine) {
			word = this.getWordFromRebus()
			offset = 0 
			index_found = word.search(remain)
//			console.log(word + " " + remain + " " + index_found + " " + word.length)
			if (index_found != -1 & 
				index_found < word.length - 1 &
				word[index_found + 1] != pattern[1] &
				word.charCodeAt(index_found + 1) < 96 & 
				word.charCodeAt(index_found + 2) < 96 ){
					if (index_found != word.length - pattern.length) {
						switch(index_found) {
							case 0:
								break
							case -1:
								flag_contine = false
								break
							default:
								if (!this.rebus[index_found - 1][0]) {
									this.encode_count += this.encode_weight_on_replace
									this.shiftRebus(offset + index_found - 1, pattern.length + 1, word.length + 1)
									this.rebus[offset + index_found - 1][1] = word[index_found - 1]
									this.rebus[offset + index_found - 1][3] = replace + "=" + word[index_found + 1]
									this.rebus[offset + index_found - 1][0] = true
								}
								break
							}
					}
			}
			count++
			if (count > 4) {
				flag_contine = false
			}
		}
	}

	parseStarStringStarReplaceCharacter(pattern, replaced, coding) {
		var replacement
		var flag_contine = true
		var offset = 0
		var word
		var index_found
		var count = 0
		while (flag_contine) {
			count++
			if (count > 4) flag_contine = false
			word = this.getWordFromRebus()
			offset = 0
			if (pattern[0] == word[0]) {
				word = word.substring(1)
				offset = 1
			}
			index_found = word.search(pattern)
			if (index_found != word.length - pattern.length &
				index_found < word.length - 1 &
				word[index_found + 1] != replaced &
				word.charCodeAt(index_found + 1) < 96 &
				word.charCodeAt(index_found + 2) < 96) {
//					console.log(word + " " + word.length + " " + index_found)
					switch(index_found) {
					case 0:
//						console.log("GOTCHA")
						break
					case -1:
						flag_contine = false
						break
					default:
						if (!this.rebus[index_found - 1][0]) {
							this.encode_count += this.encode_weight_star_string_star_replace
							replacement = this.rebus[offset + index_found - 1][2] + coding + this.rebus[offset + index_found + pattern.length + 1][2]
							this.shiftRebus(offset + index_found - 1, 2 + pattern.length, word.length + 1)
							this.rebus[offset + index_found - 1][2] = replacement
							this.rebus[offset + index_found - 1][3] = replaced + "=" + word[index_found + 1]
							for (var index = offset + index_found - 1; index < offset + index_found - 1 + pattern.length; index++) {
								this.rebus[index][0] = true
							}
//							console.log(word + " " + index_found + " " + replacement)
						}
						break
					}
			}
		}
	}

	xparseMinus() {
		var word
		var index_found
		var index_search
		var count = 0
		do {
			word = this.getWordFromRebus()
			count++
			index_search = 0
			do {
				index_found = word.search(this.minus_data[index_search][0])
				if (index_found == -1) {
					index_search++
				}
			}
			while ((index_search < this.minus_data.length) & (index_found == -1))
			if (index_found != -1 ) {
//				word.charCodeAt(index_found + this.minus_data[index_search][0].length) < 96 )
				this.encode_count += this.encode_weight_minus
				this.debug("MINUS")
//				console.log(word + " " + index_search + " " + index_found + " " + this.minus_data[index_search][0].length)
				this.shiftRebus(index_found + 1, this.minus_data[index_search][0].length - 1, word.length)
				this.rebus[index_found][0] = true
				this.rebus[index_found][2] = this.minus_data[index_search][1]
				this.rebus[index_found][3] = "minus" + this.minus_data[index_search][2]
			}
		} while (index_found != -1 & count < 10)
	}

	parseMinus() {
		var flag_continue
		var word
		var index_found
		var count = 0
		var search_string = ""
		var target = ""
		do {
			flag_continue = true
			word = this.getWordFromRebus()
//			this.debug(count + " MINUS " + word)
//			this.debug(this.rebus)

			count++
			for (var index = 0; index < this.minus_data.length & flag_continue; index++) {
				target = this.minus_data[index][0]
				for (var index_target = 0; index_target < target.length & flag_continue; index_target++) {
					search_string = ""
					for (var index_search = 0; index_search < this.minus_data[index][0].length; index_search++) {
						if (index_search != index_target) {
							search_string += this.minus_data[index][0][index_search]
						}
					}
					index_found = word.search(search_string)
					switch(index_found) {
						case -1:
							break
						case 0:
							flag_continue = false
							this.encode_count += this.encode_weight_minus
							this.shiftRebus(index_found + 1, target.length - 2, word.length)
							this.rebus[index_found][0] = true
							this.rebus[index_found][2] = this.minus_data[index][1]
							this.rebus[index_found][3] = "minus" + target[index_target]
//							this.debug("MINUS FOUND: " + word + " " + target + " " + index_target + " " + search_string + " " + index_found)
							break
						default:
							//				word.charCodeAt(index_found + this.minus_data[index_search][0].length) < 96 )
							flag_continue = false
							this.encode_count += this.encode_weight_minus
							this.shiftRebus(index_found + 1, target.length - 2, word.length)
							this.rebus[index_found][0] = true
							this.rebus[index_found][2] = this.minus_data[index][1]
							this.rebus[index_found][3] = "minus" + target[index_target]
//							this.debug("MINUS FOUND  " + word + " " + target + " " + index_target + " " + search_string + " " + index_found)
							break;
						}
					}
				}
		} while (count < 5)
	}

	checkImageExists(file_name) {
//		console.log("File " + file_name + " " + this.work_word)
	}

	code_length() {
		var result = -1
		for (var col = 0; col < this.data.number_of_columns; col++) {
			if (this.rebus[col][2] != "blank") {
				result++
			}
		}
		return result;
	}

	debug(message) {
		console.log(message)
	}
}
