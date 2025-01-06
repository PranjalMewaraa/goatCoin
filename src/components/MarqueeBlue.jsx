import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

// Wrapper
const WrapperContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ccc;
`;

const Wrapper = ({ children }) => {
  return <WrapperContainer>{children}</WrapperContainer>;
};

// Marquee
const moveLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const MarqueeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #00babd;
  color: white;
  font-family: "boldx";
  font-size: 28px;
  textshadow: "4px 5px 0 #000";
  -webkit-text-stroke: 1px black;
  padding: 20px 0px;
  overflow: hidden;
  &:hover {
    animation-play-state: paused;
  }
`;

const MarqueeArea = styled.div`
  display: inline-block;
  white-space: nowrap;
  transform: translateX(-${(props) => props.move}px);
  animation: ${moveLeft} ${(props) => props.time}s linear infinite
    ${(props) => (props.toRight ? " reverse" : "")};
  animation-play-state: inherit;
`;

const MarqueeItem = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 2em;
`;

const getFillList = (list, copyTimes = 1) => {
  let newlist = [];
  for (let i = 0; i < copyTimes; i++) {
    newlist.push(...list);
  }
  return newlist;
};

const Marquee = ({ list, time, toRight, ...props }) => {
  const marqueeContainer = useRef(null);
  const marqueeArea = useRef(null);
  const [moveLeft, setMoveLeft] = useState(0);
  const [showList, setShowList] = useState(list);
  const [realTime, setRealTime] = useState(time);

  useEffect(() => {
    const containerWidth = Math.floor(marqueeContainer.current.offsetWidth);
    const areaWidth = Math.floor(marqueeArea.current.scrollWidth);
    const copyTimes = Math.max(2, Math.ceil((containerWidth * 2) / areaWidth));
    const newMoveLeft = areaWidth * Math.floor(copyTimes / 2);
    const newRealTime =
      time * parseFloat((newMoveLeft / containerWidth).toFixed(2));
    setShowList(getFillList(list, copyTimes));
    setMoveLeft(newMoveLeft);
    setRealTime(newRealTime);
  }, [list]);

  return (
    <MarqueeContainer ref={marqueeContainer} {...props}>
      <MarqueeArea
        ref={marqueeArea}
        move={moveLeft}
        time={realTime}
        toRight={toRight}
      >
        {showList.map((item, index) => {
          return <MarqueeItem key={index}>{item}</MarqueeItem>;
        })}
      </MarqueeArea>
    </MarqueeContainer>
  );
};

Marquee.propTypes = {
  list: PropTypes.array,
  time: PropTypes.number,
  toRight: PropTypes.bool,
};

Marquee.defaultProps = {
  list: [],
  time: 10,
  toRight: false,
};

const MarqueeStripBlue = ({ DATA_LIST }) => {
  return (
    <Wrapper>
      <Marquee list={DATA_LIST} time={50} />
    </Wrapper>
  );
};

export default MarqueeStripBlue;
