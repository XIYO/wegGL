// attribute는 buffer에서 데이터를 받음
attribute vec4 a_position;

// 모든 셰이더는 main 함수를 가짐
void main() {

    // gl_Position은 정점 셰이더가 설정을 담당하는 특수 변수
    gl_Position = a_position;
}