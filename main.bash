#!/bin/bash

# 제출자료 폴더가 없으면 생성

schoolNumber="2371335"  # 여기에 학번을 입력하세요
className=D    # 여기에 반을 입력하세요
mkdir -p ./${schoolNumber}

# src/examD/ 하위의 모든 .jsx 파일을 대상으로 반복
find ./src/exam${className}/ -type f -name "*.jsx" | while read filepath; do
  # 상위 폴더 이름(숫자) 추출
  foldername=$(basename $(dirname "$filepath"))
  # 복사할 파일명: 숫자.jsx
  dest="./${schoolNumber}/${foldername}.jsx"
  # 파일 복사
  cp "$filepath" "$dest"
done