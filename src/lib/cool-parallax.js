// alert('jee test');
const win = $(window)
const doc = $(document)

const genContents = () => {
  if(contents === undefined) return
  $.map(contents, (val,prop) => {$(`#${prop}`).html(val)})
}

const genNav = () => {

}

const initialStyles = () => {
  // alert('init');
}

const scrollDetect = () => {
  // console.log('scrollDetect')
}

genContents()
genNav()
initialStyles()
scrollDetect()

win.resize( _ =>  { initialStyles() });
win.scroll( _ =>  { scrollDetect() });