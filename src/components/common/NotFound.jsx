import React from "react";
import './notfound.css';

export default function NotFound(){
    return(
        <div className="warpper notfound">
            <div className="notfound_flex">
                <img src="../assets/common/notfound/notfound.png"  alt="notfound" />
                <div className="notfound_text">
                    페이지를 찾을 수 없습니다.
                </div>
            </div>
        </div>
    )
}