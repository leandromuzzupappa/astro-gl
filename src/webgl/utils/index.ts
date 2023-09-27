export const createShader = (
  gl: WebGLRenderingContext,
  type: number,
  source: string
) => {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (!success) {
    console.error(
      `Error when compiling shader on the GPU:  ${gl.getShaderInfoLog(shader)}`
    );
    gl.deleteShader(shader);
    return;
  }

  return shader;
};

export const createProgram = (
  gl: WebGLRenderingContext,
  vertexShader: WebGLShader,
  fragmentShader: WebGLShader
) => {
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);

  gl.linkProgram(program);
  const success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (!success) {
    console.error(
      `Error when linking program on the GPU: ${gl.getProgramInfoLog(program)}`
    );
    gl.deleteProgram(program);
    return;
  }

  return program;
};
