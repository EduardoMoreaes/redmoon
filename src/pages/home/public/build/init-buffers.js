function initBuffers(gl) {
    const positionBuffer = initPositionBuffer(gl);
    const textureCoordBuffer = initTextureBuffer(gl);
    const indexBuffer = initIndexBuffer(gl);

    return {
        position: positionBuffer,
        textureCoord: textureCoordBuffer,
        indices: indexBuffer,
    };
}

function initPositionBuffer(gl) {
    const positionBuffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    const positions = [
        // Front face
        -1.0, -1.0,
         1.0, 1.0,
        -1.0, 1.0,
         1.0, 1.0,
         1.0, -1.0,
         1.0, 1.0,
      
        // Back face
        -1.0, -1.0,
        -1.0, -1.0, 
         1.0, -1.0, 
         1.0, 1.0, 
        -1.0, 1.0, 
        -1.0, -1.0,
      
        // Top face
        -1.0, 1.0, 
        -1.0, -1.0,
         1.0, 1.0,
         1.0, 1.0, 
         1.0, 1.0, 
         1.0, -1.0,
      
        // Bottom face
        -1.0, -1.0,
        -1.0, 1.0,
        -1.0, -1.0,
         1.0, -1.0, 
         1.0, -1.0, 
        -1.0, 1.0,
      
        // Right face
         1.0, -1.0,
        -1.0, 1.0,
         1.0, -1.0,
         1.0, 1.0,
         1.0, 1.0,
        -1.0, 1.0,
      
        // Left face
        -1.0, -1.0,
        -1.0, -1.0,
        -1.0, 1.0,
        -1.0, 1.0,
         1.0, -1.0,
         1.0, -1.0,
      ];
      

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    return positionBuffer;
}

function initTextureBuffer(gl) {
    const textureCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);
  
    const textureCoordinates = [
      0.05, 0.98,
      0.3, 0.98,
      0.3, 0.75,
      0.05, 0.75, //Front

      0.6, 0.73,
      0.4, 0.73,
      0.4, 0.97,
      0.6, 0.97, //Back
      
      0.95, 0.95,
      0.74, 0.95,
      0.74, 0.74,
      0.95, 0.74, //Top

      0.7, 0.4,
      0.97, 0.4,
      0.97, 0.65,
      0.7, 0.65, //Bottom

      0.4, 0.4,
      0.6, 0.4,
      0.6, 0.6,
      0.4, 0.6, //Right
      
      0.28, 0.4,
      0.05, 0.4,
      0.05, 0.65,
      0.28, 0.65, //Left
    ];
  
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array(textureCoordinates),
      gl.STATIC_DRAW
    );
  
    return textureCoordBuffer;
  }

function initIndexBuffer(gl) {
    const indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

    const indices = [
        0, 1, 2,        0, 2, 3,      // front
        4, 5, 6,        4, 6, 7,      // back
        8, 9, 10,       8, 10, 11,    // top
        12, 13, 14,     12, 14, 15,   // bottom 
        16, 17, 18,     16, 18, 19,   // right
        20, 21, 22,     20, 22, 23,   // left
      ];

    gl.bufferData(
        gl.ELEMENT_ARRAY_BUFFER,
        new Uint16Array(indices),
        gl.STATIC_DRAW
    );

    return indexBuffer;
}

export { initBuffers };