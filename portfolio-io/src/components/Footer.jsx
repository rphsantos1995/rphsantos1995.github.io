import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
    <div className="footer">
      <footer>
          <div class="personal-img">
          <div>
            <img class="rounded" src="images/foto 1.jpg" alt = "A Foto de um cara bonitao" width="120px" />
          </div>    
              <div  class="aboutme">
                  <div>
                      <h4>Raphael Pereira</h4>
                  </div>
                  <div>
                      <p>Aspirante na engenharia de soluções</p>
                  </div>
              </div>   
          </div>
          <div class="moreinfo">
            <div>
                <a href="https://github.com/rphsantos1995">Github</a>
            </div>
            <div> 
                <a href="https://www.linkedin.com/in/raphael-pereira-48a399161/">Linkedn</a>
            </div>
            <div>
                <a href="https://www.google.com">Para maiores informações</a>
            </div>
          </div>
          <div>
              <a href="https://www.instagram.com/rphsantos7/">Instagram</a>
          </div>
        

      </footer>
      </div>
  
    );
  }
}

export default Footer;