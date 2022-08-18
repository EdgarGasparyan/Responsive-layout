import "./App.css";
import { IoShareSocialOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineTextsms } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";


function App() {
  return (
    <>
      <div className="container">
        <section className="hero">
          <article className="post-preview">
            <img src="https://assets.website-files.com/61e398d625bef73f40d76dc4/61e3a33346fc7c60e1606264_thumbnail_5.jpg"></img>
            <div className="post-preview-div">
              <div>
                <span>Interior</span>
                <time datetime="2022-01-15T20:00:00.000Z">Jan 16, 2022</time>
              </div>
              <div className="post-button">
                <button>
                  <IoShareSocialOutline size={20}/>
                </button>
                <button>
                  <AiOutlineHeart size={20}/>
                </button>
                <button>
                  <MdOutlineTextsms size={20}/>
                </button>
              </div>
            </div>
            <h3>10 Top commercial interior design firms to watch</h3>
            <p>
              Facilisi sed ante id et euismod volutpat. Sollicitudin urna, lacus
              viverra risus auctor. Eget sed vestibulum enim quisque id molestie
              elementum.
            </p>
          </article>
          <aside>
            <form className="search">
              <input type="text" placeholder="Search" />
              <button type="submit">
                <AiOutlineSearch />
              </button>
            </form>
            <section className="categories">
              <h2>Categories</h2>
              <label>
                <input type="radio" />
                Crypto
              </label>
              <label>
                <input type="radio" />
                Tech
              </label>
              <label>
                <input type="radio" />
                Finance
              </label>
            </section>
            <section className="socialMedia">
              <h2>Join Us</h2>
              <div>
                <icon className="socialMedia_icons">
                  <FaLinkedinIn style={{ color: "#069" }} />
                </icon>
                linkedin
                <span>100k</span>
              </div>
              <div>
                <icon className="socialMedia_icons">
                  <FaTwitter style={{ color: "#1fa1eb" }} />
                </icon>
                twitter
                <span>100k</span>
              </div>
              <div>
                <icon className="socialMedia_icons">
                  <FaDiscord style={{ color: "#913d9e" }} />
                </icon>
                discord
                <span>100k</span>
              </div>
              <div>
                <icon className="socialMedia_icons">
                  <FaFacebookF style={{ color: "#062db9" }} />
                </icon>
                facebook
                <span>100k</span>
              </div>
              <div>
                <icon className="socialMedia_icons">
                  <FaTelegramPlane style={{ color: "#2e95cf" }} />
                </icon>
                telegram
                <span>100k</span>
              </div>
            </section>
            <section className="tags">
              <h2>Tags</h2>
              <div>
                <span>NFT</span>
                <span>DeFi</span>
                <span>Blockchain</span>
                <span>Web3</span>
                <span>CeFi</span>
                <span>Bitcoin</span>
                <span>FTX</span>
              </div>
            </section>
          </aside>
        </section>
        <section className="featured">
          <h2 className="sectionTitle">
            <span></span>Featured<span></span>
          </h2>
          <div>
            <article className="featuredPost">
              <img
                src="https://assets.website-files.com/61e398d625bef73f40d76dc4/61e3a2d48e376a30a65011c7_thumbnail_3.jpg"
                alt=""
              />
              <div>
                <span>Design</span>
                <h3>Brilliant documentaries and books about animation</h3>
              </div>
            </article>
            <article className="featuredPost">
              <img
                src="https://assets.website-files.com/61e398d625bef73f40d76dc4/61e3a30e946f058a92d26451_thumbnail_4.jpg"
                alt=""
              />
              <div>
                <span>Life Style</span>
                <h3>Believe in your car skills but never stop improving</h3>
              </div>
            </article>
            <article className="featuredPost">
              <img
                src="https://assets.website-files.com/61e398d625bef73f40d76dc4/61e3a3a2fc4ea78d8c735476_thumbnail_7.jpg"
                alt=""
              />
              <div>
                <span>Photographs</span>
                <h3>
                  How 7 things will change the way you approach photographs
                </h3>
              </div>
            </article>
          </div>
        </section>
        <section className="bq_callToAction">
          <div>
            <h2>
              Subscribe <i>to</i> WOLF PACK
            </h2>
            <p>Sign up to our newsletters and we'll keep you in the loop.</p>
            <form className="bq_form">
              <div>
                <input type="text" placeholder="Name" />
              </div>
              <div>
                <input type="email" placeholder="Email" />
              </div>
            </form>
          </div>
        </section>
        <section className="mostViewed">
          <h2 className="sectionTitle">
            <span></span>Most Viewed<span></span>
          </h2>
          <div>
            <article
              className="mostViewed_post"
              style={{
                backgroundImage:
                  "url(" +
                  "https://assets.website-files.com/61e398d625bef73f40d76dc4/61e3a30e946f058a92d26451_thumbnail_4.jpg" +
                  ")",
                height: "680px",
              }}
            >
              <div>
                <div>
                  <span>Life Style</span>
                  <time datetime="2022-01-15T20:00:00.000Z">Jan 16, 2022</time>
                </div>
                <h3>Believe in your car skills but never stop improving</h3>
              </div>
            </article>
            <article
              className="mostViewed_post"
              style={{
                backgroundImage:
                  "url(" +
                  "https://assets.website-files.com/61e398d625bef73f40d76dc4/61e3a3a2fc4ea78d8c735476_thumbnail_7.jpg" +
                  ")",
                height: "680px",
              }}
            >
              <div>
                <div>
                  <span>Photographs</span>
                  <time datetime="2022-01-15T20:00:00.000Z">Jan 16, 2022</time>
                </div>
                <h3>
                  How 7 things will change the way you approach photographs
                </h3>
              </div>
            </article>
          </div>
        </section>
        <section className="postList">
          <h2 className="sectionTitle">
            <span></span>All Posts<span></span>
          </h2>
          <div>
            <article className="post-preview">
              <img
                src="https://assets.website-files.com/61e398d625bef73f40d76dc4/61e3a2d48e376a30a65011c7_thumbnail_3.jpg"
                alt=""
              />
              <div>
                <div>
                  <span>Design</span>
                  <time datetime="2022-01-15T20:00:00.000Z">Jan 16, 2022</time>
                </div>
                <div>
					 <button>
                  <IoShareSocialOutline  size={20}/>
                </button>
                <button>
                  <AiOutlineHeart size={20}/>
                </button>
                <button>
                  <MdOutlineTextsms size={20}/>
                </button>
                </div>
              </div>
              <h3>Brilliant documentaries and books about animation</h3>
            </article>
            <article className="post-preview">
              <img
                src="https://assets.website-files.com/61e398d625bef73f40d76dc4/61e3a30e946f058a92d26451_thumbnail_4.jpg"
                alt=""
              />
              <div>
                <div>
                  <span>Life Style</span>
                  <time datetime="2022-01-15T20:00:00.000Z">Jan 16, 2022</time>
                </div>
                <div>
					 <button>
                  <IoShareSocialOutline size={20}/>
                </button>
                <button>
                  <AiOutlineHeart size={20}/>
                </button>
                <button>
                  <MdOutlineTextsms size={20}/>
                </button>
                </div>
              </div>
              <h3>Believe in your car skills but never stop improving</h3>
            </article>
            <article className="post-preview">
              <img
                src="https://assets.website-files.com/61e398d625bef73f40d76dc4/61e3a3a2fc4ea78d8c735476_thumbnail_7.jpg"
                alt=""
              />
              <div>
                <div>
                  <span>Photographs</span>
                  <time datetime="2022-01-15T20:00:00.000Z">Jan 16, 2022</time>
                </div>
                <div>
					 <button>
                  <IoShareSocialOutline size={20}/>
                </button>
                <button>
                  <AiOutlineHeart size={20}/>
                </button>
                <button>
                  <MdOutlineTextsms size={20}/>
                </button>
                </div>
              </div>
              <h3>How 7 things will change the way you approach photographs</h3>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
