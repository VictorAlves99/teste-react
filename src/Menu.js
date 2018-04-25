import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component{

    render(){
        return ( 
        <section>
          <nav>
            <ul>
              <li>
                <a href="https://www.google.com.br/search?tbm=isch&q=mais+ou+menos+castiga&chips=q:mais+ou+menos+castiga,online_chips:meme&sa=X&ved=0ahUKEwiy1-Txp9XaAhXMD5AKHdPEACQQ4lYIKSgD&biw=1366&bih=613&dpr=1">Poderoso Castiga</a>
              </li>
              <li>
                <a href="https://www.google.com.br/search?biw=1366&bih=613&tbm=isch&sa=1&ei=8WbgWvO-PIX9wQSiq5JY&q=chuck+norris+meme&oq=chuc&gs_l=psy-ab.3.0.0i67k1j0l4j0i67k1j0l4.33994.38091.0.39230.15.11.4.0.0.0.112.942.7j3.10.0....0...1c.1.64.psy-ab..1.14.968....0.oBzqCgjaEXU">Chuck Norris</a>
              </li>
              <li>
                <a href="https://www.google.com.br/search?biw=1366&bih=613&tbm=isch&sa=1&ei=GWfgWoSYN8ShwQSqtZ7IAg&q=boneco+josias+mem&oq=boneco+josias+mem&gs_l=psy-ab.3..0.30066.37203.0.37656.13.13.0.0.0.0.112.1054.5j6.11.0....0...1c.1.64.psy-ab..2.11.1049...0i67k1j0i24k1.0.UCySlHPImfo">Boneco Josias</a>
              </li>
            </ul>
          </nav>
        </section>
        );
    }
}

export default Menu;