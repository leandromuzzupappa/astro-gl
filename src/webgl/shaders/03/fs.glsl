precision mediump float;
varying vec4 vColor;

void main(){
  vec3 color = vColor.rgb;
  
  gl_FragColor=vec4(color, 1.);
}