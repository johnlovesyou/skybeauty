import './App.css';
import $ from "jquery";
import AboutUs from './components/AboutUs';
import Question from './components/Question';
import LocationMap from './components/LocationMap';
import Store from './components/Store';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      
      {/* menu */}
      <header className="header">
        <div className="menu" id="menu">
          <div className="menu_1">
            <div className="maintitle" onClick={()=>{
              window.scroll({top:0, left:0, behavior:'smooth'})
              }}>SkyBeauty</div>
          </div>
          <div className="menu_2"></div>
          <div className="menu_3">
            <div className="menulist" onClick={()=>{
            let location_Aboutme = $('#ProductPrice').offset().top - 80
            window.scroll({top: location_Aboutme, behavior:'smooth'});
            }}>제품</div>
            <div className="menulist" onClick={()=>{
            let location_Aboutme = $('#Qustion').offset().top - 80
            window.scroll({top: location_Aboutme, behavior:'smooth'});
            }}>문의</div>
            <div className="menulist" onClick={()=>{
            let location_Aboutme = $('#LocationMap').offset().top - 80
            window.scroll({top: location_Aboutme, behavior:'smooth'});
            }}>위치</div>
            <div className="menulist" onClick={()=>{
            let location_Aboutme = $('#AboutUs').offset().top - 120
            window.scroll({top: location_Aboutme, behavior:'smooth'});
            }}>About Us</div>
            <div className="menulist addlistwidth" onClick={()=>{
            let location_Aboutme = $('#Store').offset().top - 80
            window.scroll({top: location_Aboutme, behavior:'smooth'});
            }}>스토어</div>
          </div>
        </div>
      </header>

      {/* 메인화면 */}
      <div className='main_img_above'></div>
      <div className='main_img1'>
        <img src='img/하늘뷰티문구2.png'></img>
      </div>
      <div className='main_img2'>
        <img src='img/하늘뷰티문구3.png'></img>
      </div>

      {/* 제품가격 */}
      <section className="ProductPrice" id='ProductPrice'>
        <div className="inner">
          <div className="notice_name">
            <div className="box1"><span class="material-symbols-outlined">note</span></div>
            <div className="box2">제품가격</div>
          </div>
          <div className="ProductPrice_notice">
            제품 가격은 아래 방법으로 문의해주시기 바랍니다
          </div>
        </div>        
      </section>

      {/* 문의방법  */}
      <section className="Qustion" id='Qustion'>
        <div className="inner">
          <div className="notice_name">
            <div className="box1"><span class="material-symbols-outlined">note</span></div>
            <div className="box2">문의방법</div>
          </div>
        <Question></Question>
        </div>        
      </section>

      {/* 오시는길  */}
      <section className="LocationMap" id='LocationMap'>
        <div className="inner">
          <div className="notice_name">
            <div className="box1"><span class="material-symbols-outlined">note</span></div>
            <div className="box2">오시는길</div>
          </div>

        <LocationMap></LocationMap>
        </div>        
      </section>

      {/* About Us */}
      <section className="AboutUs" id='AboutUs'>
        <div className="inner">
          <div className="notice_name">
            <div className="box1"><span class="material-symbols-outlined">note</span></div>
            <div className="box2">ABOUT US</div>
          </div>
          <AboutUs></AboutUs>
        </div>        
      </section>


      {/* Store */}
      <section className="Store" id='Store'>
        <div className="inner">
          <div className="notice_name">
            <div className="box1"><span class="material-symbols-outlined">note</span></div>
            <div className="box2">스마트스토어</div>
          </div>
          <Store></Store>
        </div>        
      </section>

      {/* footer */}
      <section className="footer">
        <div className="inner">
          <Footer></Footer>
        </div>
      </section>


    </div>
  );
}

export default App;
