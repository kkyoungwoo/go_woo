import React from "react";
import './about.css'

import Prodiction from './Prodiction'


export default function About(){
    return(
        <div className="warpper">
            <div className="page_defualt">
                <div className="warp_defualt">
                    <div className="title_text">
                        ABOUT
                    </div>
                    <div className="history_warp">
                        <div className="subtitle_text">UI/UX DEVELOPOR 고경우를 소개합니다.</div>
                        <ul className="history">
                            <li>
                                <div className="text_box">이름</div>
                                <div className="text_box_sub">고경우</div>
                            </li>
                            <li>
                                <div className="text_box">이메일</div>
                                <div className="text_box_sub">bizdb@kakao.com</div>
                            </li>
                            <li>
                                <div className="text_box">핸드폰</div>
                                <div className="text_box_sub">010-4242-3088</div>
                            </li>
                            <li>
                                <div className="text_box">경력사항</div>
                                <div className="text_box_sub">2020.12.30 ~ 재직중</div>
                            </li>
                            <li>
                                <div className="text_box">주요 작업물</div>
                                <div className="text_box_sub">
                                    <div>최근 작업물 순</div>
                                    <div>최근 작업물 순</div>
                                    <div>최근 작업물 순</div>
                                </div>
                            </li>
                            <li>
                                <div className="text_box">주요 기술</div>
                                <div className="text_box_sub">
                                    <div>실무에서 중점적으로 사용하는 기술</div>
                                    <div>실무에서 중점적으로 사용하는 기술</div>
                                    <div>실무에서 중점적으로 사용하는 기술</div>
                                    <div>실무에서 중점적으로 사용하는 기술</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="skills">
                        <div className="subtitle_text">실무 스킬 / Skills</div>
                        <ul>
                            <li>
                                <div className="text_box">Default</div>
                                <div>
                                    <div className="skills_warp">
                                        <div className="vscode"></div>VScord,
                                        <div className="html"></div>HTML5,
                                        <div className="css"></div>CSS3,
                                        <div className="javascript"></div>JavaScript,
                                        <div className="jquery"></div>jQuery
                                    </div>
                                    <div className="skills_warp_sub">
                                        <div>
                                            - 기본적으로 퍼블리싱할 때 사용하는 언어 및 라이브러리!
                                        </div>
                                        <div>
                                            - 전통적인 웹앱 제작 방식에서 정적인 HTML로 협업 시 사용하는 기술!
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="text_box">Special I</div>
                                <div>
                                    <div className="skills_warp">
                                        <div className="react"></div>React,
                                        <div className="redux"></div>Redux,
                                        <div className="yarn"></div>Yarn
                                    </div>
                                    <div className="skills_warp_sub">
                                        <div>
                                            - 동적인 웹에 최적화된 자바스크립트 라이브러리, 리액트!
                                        </div>
                                        <div>
                                            - 리엑트에서 중앙데이터 관리를 위한 리덕스 툴!
                                        </div>
                                        <div>
                                            - npm 보다 생산성이 좋은 yarn
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="text_box">Special II</div>
                                <div>
                                    <div className="skills_warp">
                                        <div className="photoshop"></div>Photoshop,
                                        <div className="illustrator"></div>Illustrator,
                                        <div className="oven"></div>Oven
                                    </div>
                                    <div className="skills_warp_sub">
                                        <div>
                                            - 기초적인 보정작업을 할 수 있는 포토샵!
                                        </div>
                                        <div>
                                            - 기초적인 아이콘 디자인을 할 수 있는 일러스트! 
                                        </div>
                                        <div>
                                            - 프로토타이핑을 빠르게 하기 위한 카카오 오븐!
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="text_box">협업</div>
                                <div>
                                    <div className="skills_warp">
                                        <div className="notion"></div>Notion,
                                        <div className="nas"></div>NAS,
                                        <div className="pigma"></div>Pigma
                                        <div className="zepline"></div>, Zepline
                                    </div>
                                    <div className="skills_warp_sub">
                                        <div>
                                            - Notion을 이용한 업무일지, 협업 경험!
                                        </div>
                                        <div>
                                            - NAS를 이용한 대용량 파일 저장소 경험!
                                        </div>
                                        <div>
                                            - Pigma,Zepline 을 이용한 퍼블리싱 경험!
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="study">
                        <div className="subtitle_text">개인 공부 TO-BE</div>
                        <ul>
                            <li>
                                <div className="text_box">API</div>
                                <div className="skills_warp">
                                    <div className="api"></div>API
                                </div>
                                <div className="skills_warp_sub">
                                    <div>
                                        - Email.js, kakao, naver 등 웹 개발에 필요한 API 개발!
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="text_box">DB</div>
                                <div>
                                    <div className="skills_warp">
                                        <div className="firebase"></div>Firebase
                                    </div>
                                    <div className="skills_warp_sub">
                                        <div>
                                            - 간단한 웹앱 제작을 위한 DB 사용
                                        </div>
                                        <div>
                                            - 백엔드 서버와 API에 대한 이해를 위해 개인적으로 공부
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="text_box">호스팅</div>
                                <div>
                                    <div className="skills_warp">
                                        <div className="aws"></div>AWS
                                    </div>
                                    <div className="skills_warp_sub">
                                        <div>
                                            - 개인적으로 공부하며 개발한 웹앱 배포 및 서비스
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="text_box">저장소</div>
                                <div>
                                    <div className="skills_warp">
                                        <div className="github"></div>Github,
                                        <div className="git"></div>Git
                                    </div>
                                    <div className="skills_warp_sub">
                                        <div>
                                            - 계속해서 공부하는 내용을 업데이트 하고 있으며 우측 버튼을 통해 public 저장소 확인 가능
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="production">
                        <div>
                            <Prodiction />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}