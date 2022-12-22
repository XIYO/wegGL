export default `
  // 프래그먼트 셰이더는 기본 정밀도를 가지고 있지 않으므로 하나를 선택해야 합니다.
  // mediump은 좋은 기본값으로 "중간 정밀도"를 의미합니다.
  precision mediump float;
 
  uniform vec4 u_color;
 
  void main() {
    gl_FragColor = u_color;
  }
`