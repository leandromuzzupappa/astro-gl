precision mediump float;

attribute vec4 position;
attribute vec4 color;

varying vec4 vColor;

void main(){
  
  vec4 pos=position;
  
  gl_Position=pos;
  gl_PointSize=250.;
  
  vColor=color;
}