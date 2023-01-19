import React from 'react';
import './Question.css';

function Question(props) {
  return (
    <div className='qustion'>

      <div className='qustion_box1'>
        <div className='qustion_notice'>제품에 관해 궁금하신 점을 자유롭게 물어보세요.</div>
        <div className='qustion_notice'>아래에 4가지 방법을 소개합니다.</div>
      </div>
      <div className='qustion_box2'>
        <div className='qustion_contact_wrap'>
          <div className='qustion_contact'>
            <a href='tel:010-4925-8855'>
              <div className='qustion_contact_image'>
                <img src='img/how-to-contact-1.png'></img>
              </div>
            </a>
            <div className='qustion_contact_name'>직접연락</div>
            <div className='qustion_contact_bar'></div>
            <div className='qustion_contact_notice'>
              <span>010-4925-8855</span>으로 직접 전화를 주시거나, 문자나 카톡을 남겨주시면 최대한 빠르게 답변을 드려요.
            </div>
          </div>
          <div className='qustion_contact'>
            <a href='https://open.kakao.com/o/sO7wUHZe' target='_blank'>
              <div className='qustion_contact_image'>
                <img src='img/how-to-contact-2.png'></img>
              </div>
            </a>
            <div className='qustion_contact_name'>카카오톡</div>
            <div className='qustion_contact_bar'></div>
            <div className='qustion_contact_notice'>
              위의 아이콘을 클릭하시면 <span>카카오톡 오픈 채팅방</span>에 입장해서 문의가 가능해요. 원하신다면 익명으로 입장하실 수도 있어요.
            </div>
          </div>
          <div className='qustion_contact'>
            <a href='https://www.instagram.com/skybeauty49258855/' target='_blank'>
              <div className='qustion_contact_image'>
                <img src='img/how-to-contact-3.png'></img>
              </div>
            </a>
            <div className='qustion_contact_name'>인스타 DM</div>
            <div className='qustion_contact_bar'></div>
            <div className='qustion_contact_notice'>
              위의 아이콘을 클릭하시거나 인스타그램에 <span>@skybeauty49258855</span>를 검색하여 들어오시면 DM을 통해 문의가 가능해요.
            </div>
          </div>
          <div className='qustion_contact'>
            <a href='https://talk.naver.com/W4O3OL' target='_blank'>
              <div className='qustion_contact_image'>
                <img src='img/how-to-contact-4.png'></img>
              </div>
            </a>
            <div className='qustion_contact_name'>네이버 톡톡</div>
            <div className='qustion_contact_bar'></div>
            <div className='qustion_contact_notice'>
              <span>네이버 톡톡</span>을 통해서도 문의가 가능해요. 이는 네이버 쇼핑에서 "하늘뷰티"를 검색한 후에도 이용하실 수 있어요.
            </div>
          </div>
          
        </div>
      </div>

  
    </div>
  );
}

export default Question;