import React from "react";
import { Link } from 'react-router-dom';
import './login.css'

export default function Login(){
    return(
        <div className="warpper">
            <div className="page_defualt">
                <div className="login_page warp_defualt">
                    <Link to="/"><img src="./assets/common/logo/logo_white_square.png" alt="logo" /></Link>
                    <div className="login_text">LOGIN</div>
                    <div className="login_box">
                        <input type="text"  placeholder="이메일을 입력해 주세요"/>
                        <input type="password"  placeholder="비밀번호를 입력해 주세요"/>
                        <button className="login_btn">
                            로그인
                        </button>
                        <button className="sing_up">
                            Sign up
                        </button>
                    </div>
                    <div className="sign_up_box">
                        <div className="simple_login">
                            <div className="simple_login_text">SOCOAL LOGIN</div>
                            <div className="socoal_box">
                                <button className="google_login">
                                    <div className="google"></div>
                                    <div>google 로그인</div>
                                </button>
                                <button className="github_login">
                                    <div className="github login"></div>
                                    <div>github 로그인</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}