// alert('jee test');
const win = $(window)
const doc = $(document)

const genNav = () => {

}

const initialStyles = () => {
  // alert('init');
}

const scrollDetect = () => {
  // console.log('scrollDetect')
}

genNav()
initialStyles()
scrollDetect()

win.resize( _ =>  { initialStyles() });
win.scroll( _ =>  { scrollDetect() });