
const BackToTopBar = () => {
  window.onscroll = function() {
    if (window.pageYOffset > 0) {
      document.querySelector('.back-to-top-bar').style.right = '20px';
    } else {
      document.querySelector('.back-to-top-bar').style.right = '-9999px';
    }
  };

  return (
    <a className="back-to-top-bar" href="#top-bar">
        <i className="fa-solid fa-angles-up" />
    </a>
  )
}

export default BackToTopBar