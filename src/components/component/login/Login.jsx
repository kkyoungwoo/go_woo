import React from "react";
import './login.css'

export default function Login(){
    return(
        <div className="warpper">
            <div className="page_defualt">
                <div className="login_page warp_defualt">
                    <div>LOGIN</div>
                    <div className="login_box">
                        <input type="text"  placeholder="이메일을 입력해 주세요"/>
                        <input type="password"  placeholder="비밀번호를 입력해 주세요"/>
                        <button className="login_btn">
                            로그인
                        </button>
                    </div>
                    <div className="sign_up_box">
                        <div>
                            <div>SOCOAL LOGIN</div>
                            <div className="socoal_box">
                                <div className="google">
                                google 로그인
                                </div>
                                <div className="github">
                                    github 로그인
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}