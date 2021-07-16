import React from "react";
import './contact.css'

export default function Contact(){
    return(
        <div className="warpper">
            <div className="page_defualt">
                <div className="warp_defualt">
                    <div className="title_text">
                        Contact
                    </div>
                    <div className="history">
                        <div>2년차 퍼블리셔 & UI/UX 컴포넌트 개발자 성연욱입니다.</div>
                        <div>하고싶은 말을 남겨주세요. :)</div>
                        <ul>
                            <li>
                                <div>E-mail</div>
                                <div>bizdb@kakao.com</div>
                            </li>
                            <li>
                                <div>Phone</div>
                                <div>010-4242-3088</div>
                            </li>
                            <li>
                                <div>SNS</div>
                                <div>
                                    <div>
                                        인스타그램
                                    </div>
                                    <div>
                                        페이스북
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <input type="text" />
                        <button>등록</button>
                    </div>
                    <div className="talk_warp">
                        데이터베이스 삽입 예정
                    </div>
                </div>
            </div>
        </div>
    )
}