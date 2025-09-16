import React from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const ImageGrid = ({ images }) => {
  // 定义倾斜和横向移动的动画属性，仅向右移动
  const springProps = useSpring({
    loop: true,
    from: { transform: 'translateX(0%) skewX(-10deg)' },
    to: { transform: 'translateX(100%) skewX(-10deg)' },
    config: { duration: 5000 }, // 调整duration以控制移动速度
  });

  return (
    <Container>
      <Row>
        {images.slice(0, 4).map((src, index) => (
          <ImageWrapper key={index} style={springProps}>
            <img src={'/home/computerIcon.png'} alt={`Image ${index + 1}`} />
          </ImageWrapper>
        ))}
      </Row>
      <Row>
        {images.slice(4, 8).map((src, index) => (
          <ImageWrapper key={index + 4} style={springProps}>
            <img src={'/home/computerIcon.png'} alt={`Image ${index + 5}`} />
          </ImageWrapper>
        ))}
      </Row>
    </Container>
  );
};

// 使用 styled-components 创建样式
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden; // 防止内容溢出
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 20px;
`;

const ImageWrapper = styled(animated.div)`
  width: 200px;
  height: 200px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default ImageGrid;