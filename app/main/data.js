export class DataGame {
    counter = 0;
	index_word = 0;
	index_word_to_be_coded = 0;
	max_length_word = 20	// Maximum length of input word
	number_of_columns = 8	// Number of columns in final picture

	init() {
	}
	
    dataSetRound(value) {
        this.round = value
        if (!this.round) { this.round = 0}
    }

    constructor() {
    }

	getWord() {
		this.index_word += 1	// Temporarily, select next word
		if (this.index_word >= this.words_to_be_coded.length) { this.index_word = 0 }
		var words = this.words_to_be_coded
		var word = words[this.index_word].toUpperCase()
		return word
	}
	
	words_to_be_coded = [
		"ABBREVIATE",
		
	]
	
}
