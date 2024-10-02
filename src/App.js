import logo from './logo.svg';
import './App.css';
import { Amazon, ArrowLeft, ArrowRight, Discord, Estrela, Facebook, Free, Global, HomeImage1, HomeImage2, Instagram, Location, Logo, Netflix, Pessoa1, Pessoa2, Pessoa3, Reddit, Server, Spotify, Twitter, User } from './assets';

function App() {
  return (
    <div className="App">
      <nav className='nav'>
        <img src={Logo} />
          <ul className='nav-itens'>
            <li>About</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>About</li>
            <li>About</li>
          </ul>
        <button className='sign-in'>Sign</button>
        <button className='sign-up'>Sign</button>
      </nav>
      <section className='introduction'>
        <div className='introduction-part'>
          <h1 className='introduction-title'>Want anything to be easy with LaslesVPN.</h1>
          <p className='introduction-subtitle'>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
          <button className='introduction-button'>Get Started</button>
        </div>
        <img src={HomeImage1} />
      </section>
      <section className='statistics'>
        <div className='stats'>
          <img src={User} />
          <div>
            <h3>90+</h3>
            <p>Users</p>
          </div>
        </div>
        <div className='stats'>
          <img src={Location} />
          <div>
            <h3>30+</h3>
            <p>Locations</p>
          </div>
        </div>
        <div className='stats'>
          <img src={Server} />
          <div>
            <h3>50+</h3>
            <p>Servers</p>
          </div>
        </div>
      </section>
      <section className='introduction2'>
        <img src={HomeImage2} />
        <div className='introduction2-part'>
          <h2>
            We Provide Many Features You Can Use
          </h2>
          <p>
            You can explore the features that we provide with fun and have their own functions each feature.
          </p>
          <ul>
            <li>Powerfull online protection.</li>
            <li>Internet without borders.</li>
            <li>Supercharged VPN</li>
            <li>No specific time limits.</li>

          </ul>
        </div>
      </section>
      <section>
        <h3>
          Choose Your Plan
        </h3>
        <p>
          Let's choose the package that is best for you and explore it happily and cheerfully.
        </p>
        <div>
          <div>
            <img src={Free} />
            <h2>Free plan</h2>
            <ul>
              <li>Unlimited Bandwitch</li>
              <li>Encrypted Connection</li>
              <li>No Traffic Logs</li>
              <li>Works on All Devices</li>
            </ul>
            <h2>
              Free
            </h2>
            <button>Select</button>
          </div>

          <div>
            <img src={Free} />
            <h2>Free plan</h2>
            <ul>
              <li>Unlimited Bandwitch</li>
              <li>Encrypted Connection</li>
              <li>No Traffic Logs</li>
              <li>Works on All Devices</li>
            </ul>
            <h2>
              Free
            </h2>
            <button>Select</button>
          </div>
          <div>
            <img src={Free} />
            <h2>Free plan</h2>
            <ul>
              <li>Unlimited Bandwitch</li>
              <li>Encrypted Connection</li>
              <li>No Traffic Logs</li>
              <li>Works on All Devices</li>
            </ul>
            <h2>
              Free
            </h2>
            <button>Select</button>
          </div>
        </div>
      </section>
      <section>
        <h2>
          Huge Global Network of Fast VPN
        </h2>
        <p>
        See LaslesVPN everywhere to make it easier for you when you move locations.        </p>
        <img src={Global} />

        <div>
          <img src={Netflix} />
          <img src={Reddit} />
          <img src={Amazon} />
          <img src={Discord} />
          <img src={Spotify} />
        </div>

        <section>
          <h3>
          Trusted by Thousands of Happy Customer
          </h3>
          <p>
          These are the stories of our customers who have joined us with great pleasure when using this crazy feature.
          </p>

          <div>
            <div>
              <div>
                <img src={Pessoa1} />
                <div>
                  <p>Viezh Robert</p>
                  <p>Poland</p>
                </div>
                <p>4.5</p>
                <img  src={Estrela}/>
              </div>
              <p>,“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
            </div>
            <div>
              <div>
                <img src={Pessoa2} />
                <div>
                  <p>Yessica Christy</p>
                  <p>Shanxi, China</p>
                </div>
                <p>4.5</p>
                <img src={Estrela}/>
              </div>
              <p>,“I like it because I like to travel far and still can connect with high speed.”.</p>
            </div>
            <div>
              <div>
                <img src={Pessoa3}/>
                <div>
                  <p>Kim Young Jou</p>
                  <p>Seoul, South Korea</p>
                </div>
                <p>4.5</p>
                <img src={Estrela} />
              </div>
              <p>“This is very unusual for my business that currently requires a virtual private network that has high security.”.</p>
            </div>
          </div>
          <div>
            <img />
            <div>
              <img src={ArrowLeft} />
              <img src={ArrowRight} />
            </div>
          </div>
          <div>
            <div>
              <h2>Subscribe Now for Get Special Features!</h2>
              <p>Let's subscribe with us and find the fun.</p>
            </div>
            <button>Subscribe Now</button>
          </div>
        </section>
        <section>
          <div>
            <img src={Logo}/>
            <h3>
            Subscribe Now for Get Special Features!

            </h3>
            
          </div>
          <div>
            <p>
            LaslesVPN is a private virtual network that has unique features and has high security.
            </p>
            <div>
              <img src={Facebook}/>
              <img src={Twitter}/>
              <img src={Instagram}/>
            </div>
            <p>
            ©2020LaslesVPN
            </p>
          </div>
        <div>
        <ul>
            <li>Product</li>
            <li>Download</li>
            <li>Pricing</li>
            <li>Locations</li>
            <li>Server</li>
            <li>Countries</li>
            <li>Blog</li>
          </ul>
          <ul>
            <li>Engage</li>
            <li>LaslesVPN</li>
            <li>FAQ</li>
            <li>Tutorials</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
          <ul>
            <li>Earn Money</li>
            <li>Affiliate</li>
            <li>Become Partner</li>
          </ul>
        </div>
        </section>
      </section>
    </div>
  );
}

export default App;
