import React from 'react'; // React 라이브러리를 가져옴
import ReactDOM from 'react-dom'; // React DOM을 사용하기 위해 가져옴
import './index.css';
//예제
// 구구단 요소 배열리스트화
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// element : React 요소 선언
const element = (
    <div>
		{/*JSX 내부 주석 방식*/}
        {/* num 배열의 각 숫자 n에 대해 map 함수 실행 */}
        {num.map(
            (n) => 
                // n이 2 이상이고 5가 아닌 경우에만 해당 조건 블록을 실행
                n>=2 && n!==5 && (// 조건을 만족하는 경우 이 div 요소를 반환
                    <div className={n%2 ? 'numberColor-blue' : 'numberColor-black'}>
                        {/* 내부에서 또 다른 map을 사용하여 구구단의 곱셈 결과를 출력 */}
                        {num.map((m) => (
                            // n과 m의 곱셈 결과를 출력
                            <div>
                                {n} x {m} = {n * m}
                            </div>
                        ))}
                    </div>
                )
        )}
    </div>
);

// ReactDOM을 통해 element를 HTML의 'root'라는 ID를 가진 DOM에 렌더링
ReactDOM.render(
    element, 
    document.getElementById('root')
);
