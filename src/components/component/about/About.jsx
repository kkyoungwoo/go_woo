import React from "react";
import './about.css'

import Prodiction from '../../common/Prodiction'

export default function About(){
    return(
        <div className="warpper">
            <div className="page_defualt">
                <div className="warp_defualt">
                    <div className="title_text">
                        ABOUT
                    </div>
                    <div className="history">
                        <div>UI/UX DEVELOPOR 고경우를 소개합니다.</div>
                        <ul>
                            <li>
                                <div>이름</div>
                                <div>고경우</div>
                            </li>
                            <li>
                                <div>이메일</div>
                                <div>bizdb@kakao.com</div>
                            </li>
                            <li>
                                <div>핸드폰</div>
                                <div>010-4242-3088</div>
                            </li>
                        </ul>
                    </div>
                    <div className="skills">
                        <h2>실무 스킬 / Skills</h2>
                        <ul>
                            <li>
                                <div>Default</div>
                                <div>
                                    <div>HTML5, CSS3, JavaScript, jQuery</div>
                                    <div>
                                        - 기본적으로 퍼블리싱할 때 사용하는 언어 및 라이브러리
                                    </div>
                                    <div>
                                        - 전통적인 웹앱 제작 방식에서 정적인 HTML로 협업 시 사용하는 기술!
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>Special I</div>
                                <div>
                                    <div>React.js + Next.js + Redux</div>
                                    <div>
                                        <div>
                                            기본적으로 퍼블리싱할 때 사용하는 언어 및 라이브러리
                                        </div>
                                        <div>
                                            - 전통적인 웹앱 제작 방식에서 정적인 HTML로 협업 시 사용하는 기술!
                                        </div>
                                        <div>
                                            - 중앙데이터 관리를 위한 리덕스!
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>Special II</div>
                                <div>
                                    <div> Vue.js + Nuxt.js + Vuex</div>
                                    <div>
                                        <div>
                                            - 동적인 웹에 최적화된 또 다른 자바스크립트 프레임워크, 뷰!
                                        </div>
                                        <div>
                                            - 뷰로 웹앱을 쉽게 제작하기 위해 사용되는 넉스트!
                                        </div>
                                        <div>
                                            - 중앙데이터 관리를 위한 뷰엑스!
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>협업</div>
                                <div>
                                    <div>GIT, SVN</div>
                                    <div>
                                        <div>
                                            - 형상관리시스템을 활용한 개발자간의 협업 경험 많음
                                        </div>
                                        <div>
                                            - 깃을 활용한 다양한 브랜치 전략
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="study">
                        <div>개인 공부 TO-BE</div>
                        <ul>
                            <li>
                                <div>NPM</div>
                                <div>
                                    <div>Sequelize, Prisma, Webpack, Gulp, jest, Storybook ...</div>
                                    <div>
                                        <div>
                                            - 자바스크립트 백엔드 개발을 위한 ORM 사용(Sequelize, Prisma)
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>DB</div>
                                <div>
                                    <div>Firebase</div>
                                    <div>
                                        <div>
                                            간단한 웹앱 제작을 위한 DB 사용
                                        </div>
                                        <div>
                                        - 백엔드 서버와 API에 대한 이해를 위해 개인적으로 공부
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>호스팅</div>
                                <div>
                                    <div>AWS, Heroku, Netlify</div>
                                    <div>
                                        <div>
                                            - 개인적으로 공부하며 개발한 웹앱 배포 및 서비스
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>저장소</div>
                                <div>
                                    <div> Github</div>
                                    <div>
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