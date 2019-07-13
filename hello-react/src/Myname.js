import React from 'react';

const MyName = ({name}) => {
    name = "전정국"
    return (
        <div>
            안녕하세요 ! 저는 방탄소년단 황금막내 <b>{name}</b>입니다.
        </div>
    )
}
export default MyName;