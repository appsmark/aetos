import { createViewModel } from './main-view-model';
import { MainGame } from "./main";

var main

export function onNavigatingTo(args) {
	const page = args.object
	page.bindingContext = createViewModel()
	main = new MainGame(page.bindingContext)
}

export function onNextWord(args) {
	  main.nextWord()
    main.exportCoded(1)
}

export function onKey(args) {
    const button = args.object
    var index = button.id[1]
	  main.clickKey(index)
}

export function onBackspace(args) {
  main.clickBackspace()
}

export function onSort() {
  main.sort()
}

export function onCheckLastImages() {
  main.checkImages(false)
}

export function onCheckAllImages() {
  main.checkImages(true)
}

export function onAllCoding() {
  main.allCoding()
}

export function onNewCoding() {
  main.changeCodingOrder()
}

export function onClearCoding() {
  main.clearCoding()
}

export function onChangeStateCoding(args) {
  const button = args.object
  var index = button.id.substring(1)
  main.flipStateCoding(index)
}

export function onSingleCoding(args) {
  const button = args.object
  var index = parseInt(button.id.substring(1))
  main.singleEncoding(index)
}
