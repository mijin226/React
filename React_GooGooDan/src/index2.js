import React from 'react'; // React 라이브러리를 가져옴
import ReactDOM from 'react-dom'; // React DOM을 사용하기 위해 가져옴
import './index.css';
//React연습(한글코딩 및 변형 연습)
//3의 배수 파랑색 글자
//5의 배수 적히지 않음
//1~9의 수 구구단
const numlist = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const num = (
	<div>
		{numlist.map(/*매개변수 x=>2이상의 수부터 시작, 수가 홀수면 파랑, 5배수면 값 출력없음*/
			(x) =>
				x >= 2 && (x % 5) !== 0 && (//홀수면 파랑, 짝수면 검정 css 스타일 적용. 본 13번 줄은 출력요소의 조건문이므로 <div> 태그 묶음에 속하지 않음.return에 대한 요소만 해당.
					<div className={x % 2 ? 'numberColor-blue' : 'numberColor-black'}> {/*jsx의 경우 한정, className 명칭 사용 */}

						{/*jsx에서의 map() : 특정 배열리스트를 활용하여 새로운 배열리스트를 창조 map((매개변수) => (return 결과값) ) */}

						{numlist.map(
							(y) => (//화살표 함수의 경우, 단일 요소만 반환함. 즉,span 태그로 return 불가하여 div 활용.
								<div>
									{x} x {y} = {x * y}
								</div>
							)
						)}
					</div>
				)
		)}
	</div>

);

/* 자바코드로 코딩 및 틀 구조 학습
	for(int i=2; i<=9; i++){
	if(i%2!=0){
		//글자 파랑
	}
	if(i%5!=0){
		for(int j=1;j<=9;j++){
			System.out.println(i +'x'+ j =i*j);	
		}
	}
}
*/

// ReactDOM을 통해 element를 HTML의 'root'라는 ID를 가진 DOM에 렌더링
ReactDOM.render(
	num,
	document.getElementById('root')
);
