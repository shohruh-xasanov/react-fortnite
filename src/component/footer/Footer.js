function Footer() {
    return (  
    <footer class="page-footer blue darken-4">
        <div class="col l6 s12 container">
          <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
        </div>
        <div class="footer-copyright">
        <div className='container'>
        © {new Date().getFullYear()} Copyright Text
        <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
        </div>
        </div>
  </footer> 
  );
}

export default Footer;