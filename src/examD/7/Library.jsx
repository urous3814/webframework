import Book from "./7";

let old = ["alice", "bob", "cindy", "david","edward"];
let n=[]; // 배열 n 선언
for(let i=0; i<5; i++) { 
  let x = Math.random()*5;// x는 0~4.999 사이의 실수 난수
  n[i] = Math.floor(x); // n[i]는 x에서 소수점 이하를 제거한 정수(0~4)
  console.log(n[i]);
}
let names = [old[n[0]], old[n[1]], old[n[2]]];
let ages = [n[0]+10, n[1]+10, n[2]+10];

function Library(props) {
    return (
      <div>
        <Book age={ages[2]} people={names[1]} />
      </div>
  );
}

export default Library;
