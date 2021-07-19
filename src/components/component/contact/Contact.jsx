import React from "react";
import './contact.css'

export default function Contact(){

    const commentData = [
        {
            name: "1번 메세지",
            message: "1번 메세지1번 메세지1번 메세지1번 메세지1번 메세지1번 메세지1번 메세지1번 메세지",
            date: "2021.06.09 12:15 오전",
        },
        {
            name: "2번 메세지",
            message: "2번 메세지2번 메세지2번 메세지2번 메세지2번 메세지2번 메세지2번 메세지2번 메세지2번 메세지2번 메세지",
            date: "2021.06.09 12:15 오전",
        },
        {
            name: "3번 메세지",
            message: "3번 메세지3번 메세지3번 메세지3번 메세지3번 메세지3번 메세지",
            date: "2021.06.09 12:15 오전",
        },
    ]

    return(
        <div className="warpper">
            <div className="page_defualt">
                <div className="warp_defualt">
                    <div className="title_text">
                        Contact
                    </div>
                    <div className="contact">
                        <div className="main_text first">2년차 퍼블리셔 & UI/UX 컴포넌트 개발자 고경우입니다.</div>
                        <div className="main_text secound">하고싶은 말을 남겨주세요. :)</div>
                        <ul>
                            <li>
                                <div className="text_box">E-mail</div>
                                <div className="text_box_sub">bizdb@kakao.com</div>
                            </li>
                            <li>
                                <div className="text_box">Phone</div>
                                <div className="text_box_sub">010-4242-3088</div>
                            </li>
                            <li>
                                <div className="text_box">SNS</div>
                                <div className="text_box_sub">
                                    <div>
                                        인스타그램
                                    </div>
                                    <div>
                                        페이스북
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="area_box">
                            <textarea name="comment" id="comment" cols="30" rows="10" maxLength="300" placeholder="저에게 하고싶은 말을 남겨주세요!"></textarea>
                            <button>등록</button>
                        </div>
                    </div>
                    <div className="talk_warp">
                        {commentData.map((item,idx)=>{
                            return(
                                <div key={idx}>
                                    <div className="messagebox">
                                        {item.message}
                                    </div>
                                    <div className="messageinner">
                                        <div>
                                            {item.name}
                                        </div>
                                        <div>
                                            {item.date}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}