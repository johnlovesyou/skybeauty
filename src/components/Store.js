import React from 'react';
import './Store.css';

function Store(props) {
  return (
    <div className='store_main'>
      
      <div className='store_notice_box'>
        <div className='store_notice_content1'>
          <a href='https://smartstore.naver.com/skybeauty49258855' target="_blank">
          https://smartstore.naver.com/skybeauty49258855
          </a>
        </div>
        <div className='store_notice_content2'>
          <div className='store_notice_text'>
            하늘뷰티 네이버 스마트스토어 입니다.
          </div>
          <div className='store_notice_text'>
            이곳을 방문하시면 제품에 관한 더 자세한 내용을 살펴보실 수 있습니다.
          </div>
        </div>
      </div>

      <div className='store_img'>
        <a href='https://smartstore.naver.com/skybeauty49258855' target="_blank">
          <img src='img/스마트스토어.png'></img>
        </a>
      </div>
        
      

    </div>
  );
}

export default Store;