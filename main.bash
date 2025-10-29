#!/bin/bash

# 제출자료 폴더가 없으면 생성
mkdir -p ./제출자료

# src/examD/ 하위의 모든 .jsx 파일을 대상으로 반복
find ./src/examD/ -type f -name "*.jsx" | while read filepath; do
  # 상위 폴더 이름(숫자) 추출
  foldername=$(basename $(dirname "$filepath"))
  # 복사할 파일명: 숫자.jsx
  dest="./제출자료/${foldername}.jsx"
  # 파일 복사
  cp "$filepath" "$dest"
done